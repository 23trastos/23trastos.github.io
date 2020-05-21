(ns replica.tone
  (:require [tonejs]
            [goog.object :as g]
            [replica.utils :refer [command!
                                   proc!
                                   add-routes!
                                   doc-commands
                                   get-js-paths
                                   set-js-prop!
                                   get-js-value]]))

(defonce rsrcs (atom {:run false :master js/Tone.Master}))

(defn getrsrc
  ([id]
   (if (coll? id)
     (apply getrsrc id)
     (if (= (str id) "master")
       (:master @rsrcs)
       (or (getrsrc :ins id) (getrsrc :fx id) (getrsrc :tasks id)))))
  ([k id]
   (get-in @rsrcs [k id])))

(defn fan
  "connects source to several elements by ID, a.k.a. fan"
  [source-id & elms]
  (let [src (getrsrc source-id)]
    (apply (. (. src -fan) bind src)
           (map getrsrc elms))))

(defn chain
  "connects in chain from source through elements by ID."
  [source-id & elms]
  (let [src (getrsrc source-id)]
    (apply (. (. src -chain) bind src)
           (map getrsrc elms))))

(defn connect
  [id -- -<]
  (when -- (chain id --))
  (when -< (fan id -<))
  id)

(defn setrsrc
  [k id rsrc & {:keys [-- -<]}]
  (swap! rsrcs assoc-in [k id] rsrc)
  (when (or -- -<)
    (connect [k id] -- -<)))

(defn setprops!
  [id & path-to-prop-val]
  (apply set-js-prop! (getrsrc id) path-to-prop-val))

(defn getprops
  [id & pre-path]
  (let [obj (getrsrc id)]
    (list
      (apply get-js-value obj pre-path)
      (apply get-js-paths obj pre-path))))

(defn call!
  [id path-to-fn & args]
  (apply js-invoke
         (apply get-js-value (getrsrc id) (butlast path-to-fn))
         (str (last path-to-fn))
         args))

(defn tone-set!
  "Set the property value through the set method of any Tonejs object"
  [id param value ramp-time]
    (.set (getrsrc :ins id) (str param) value ramp-time))

(defn tone-get
  "Gets the property value through the get method of any Tonejs object"
  [id param value ramp-time]
    (.get (getrsrc :ins id) (str param) value ramp-time))

;*********************;
;-------SYNTHS:-------;

(defn synth
  "Creates a new Tone.Synth"
  [id & {:keys [osc a d s r -- -<]
         :or {osc {:type 'triangle}
              a 0.005 d 0.1 s 0.3 r 1 -- 'master}}]
  (setrsrc :ins id
           (js/Tone.Synth.
             (clj->js {:oscillator osc
                       :envelope {:attack a :decay d
                                  :sustain s :release r}}))
           :-- -- :-< -<))

(defn monos
  "Creates a new Tone.MonoSynth"
  [id & {:keys [osc a d s r filt q roff
                fa fd fs fr ffreq f8s fexp -- -<]
         :or {osc {:type 'square} a 0.005 d 0.1 s 0.9 r 1
              filt 'lowpass q 6 roff -24
              fa 0.06 fd 0.2 fs 0.3 fr 2
              ffreq 200 f8s 7 fexp 2 -- 'master}}]
  (setrsrc :ins id
           (js/Tone.MonoSynth.
             (clj->js {:oscillator osc
                       :envelope {:attack a :decay d
                                  :sustain s :release r}
                       :filter {:type filt :Q q :rolloff roff}
                       :filterEnvelope {:attack fa :decay fd
                                        :sustain fs :release fr
                                        :baseFrequency ffreq
                                        :octaves f8s :exponent fexp}}))
           :-- -- :-< -<))

(defn metal
  "Creates a new Tone.MetalSynth"
  [id & {:keys [freq a d r harm modidx res octs -- -<]
         :or {freq 200 a 0.001 d 1.4 r 0.2 harm 5.1
              modidx 32 res 4000 otcs 1.5 -- 'master}}]
  (setrsrc :ins id
           (js/Tone.MetalSynth.
             (clj->js {:frequency freq
                       :envelope {:attack a :decay d :release r}
                       :harmonicity harm :modulationIndex modidx
                       :resonance res :octaves 1.5})) :-- -- :-< -<))

(defn buf
  "creates a Tonejs Buffer from url"
  [id url & {:keys [onload onerror]}]
  (setrsrc :buf id (js/Tone.Buffer. url onload onerror))
  (getrsrc :buf id))

(defn- buf-from-any
  [buf]
  (let [buffer (if (= (type buf) Symbol)
                 (getrsrc buf)
                 buf)]
    buffer))

(defn grn
  "creates a Tonejs GrainPlayer from the specified source buffer or url"
  [id src & {:keys [onload -- -<]
             :or {-- 'master onload #(print-str % " grn ready!")}}]
  (setrsrc :ins id (js/Tone.GrainPlayer.
                     (buf-from-any src) (fn[]
                                          (connect [:ins id] -- -<)
                                          (onload id)))))

(defn grnstart
  [id t offset dur]
  "starts a GrainPlayer."
  (. (getrsrc :ins id) start t offset dur))

(defn grnstop
  [id t]
  "stops a GrainPlayer."
  (. (getrsrc :ins id) stop t))

(defn p!
  "Plays a Synth"
  [id freq dur t vel]
  (let [s (getrsrc :ins id)]
    (case (str s)
      "GrainPlayer" (do
                      (when freq (tone-set! s 'playbackRate freq nil))
                      (when vel (tone-set! s 'volume vel nil))
                      (grnstart id t nil dur))
      "PluckSynth" (. s triggerAttack freq t)
      "MetalSynth" (do
                     (when freq (tone-set! s 'frequency freq nil))
                     (. s triggerAttackRelease dur t vel))
      (. s triggerAttackRelease freq dur t vel))))

(defn on!
  "Triggers attack on a Synth"
  [id freq t vel]
  (let [s (getrsrc :ins id)]
    (case (str s)
      "GrainPlayer" (do
                      (when freq (tone-set! s 'playbackRate freq nil))
                      (when vel (tone-set! s 'volume vel nil))
                      (grnstart id t nil nil))
      "PluckSynth" (. s triggerAttack freq t)
      "MetalSynth" (do
                     (when freq (tone-set! s 'frequency freq nil))
                     (. s triggerAttack t vel))
      (. s triggerAttack freq t vel))))

(defn off!
  "Releases a Synth"
  [id t]
   (let [s (getrsrc :ins id)]
    (case (str s)
      "GrainPlayer" (grnstop id t)
      (. (getrsrc :ins id) triggerRelease t))))

;**********************;
;-------EFFECTS:-------;

(defn conv
  "creates a Tonejs Convolver from the speficied IR source buffer or url"
  [id src & {:keys [onload -- -<]
             :or {-- 'master onload #(print-str % " conv ready!")}}]
  (setrsrc :fx id (js/Tone.Convolver.
                    (buf-from-any src) (fn[]
                                         (connect [:fx id] -- -<)
                                         (onload id)))))

(defn pan
  "creates a new Tonejs Panner"
  [id init-pan & {:keys [onload -- -<]
             :or {-- 'master}}]
  (setrsrc :fx id (js/Tone.Panner. (or init-pan 0))
           :-- -- :-< -<))

(defn pan3
  "creates a new Tonejs Panner3d"
  [id x y z & {:keys [onload -- -<]
             :or {-- 'master}}]
  (setrsrc :fx id (js/Tone.Panner3D. (or x 0) (or y 0) (or z 0))
           :-- -- :-< -<))

(defn discn
  "disconnects source from element(s) by Object or index."
  [src & disconnect-from]
  (let [elm (getrsrc src)]
    (map #(. elm disconnect %) disconnect-from)))

;********************;
;-------TASKS:-------;

(defn cancel!
  ([]
   (js/Tone.Transport.cancel)
   (swap! rsrcs assoc :tasks {})
   "All schedules cancelled.")
  ([id]
   (let [task (getrsrc :tasks id)]
   (if (number? task)
     (js/Tone.Transport.clear task)
     (. task dispose)))))

(defn clear!
  ([]
   (cancel!)
   (reset! rsrcs {:run false :master js/Tone.Master}))
  ([id]
   (map #(clear! % id) [:ins :fx :tasks]))
  ([k id]
   (when-let [obj (getrsrc k id)]
     (if (number? obj)
       (js/Tone.Transport.clear obj)
       (. obj dispose))
     (swap! rsrcs assoc-in [k id] nil))))

(defn schr
  "Schedules an event repeated on a time interval."
  [id function interval]
  (clear! :tasks id)
  (swap! rsrcs assoc-in [:tasks id]
         (js/Tone.Transport.scheduleRepeat function interval)))

(defn lp
  "Creates a new loop with defined start and end."
  [id function interval start-time end-time]
  (clear! :tasks id)
  (swap! rsrcs assoc-in [:tasks id]
         (. (. (js/Tone.Loop. function interval)
               start start-time) stop end-time)))

(defn draw
  "Creates a new loop for drawing visuals with the provided callback function in sync with Tonejs."
  [id visual-fn interval start-time end-time]
  (lp id (fn[t] (js.Tone.Draw.schedule visual-fn t))
      interval start-time end-time))

(defn start!
  []
  (js/Tone.Transport.start)
  (swap! rsrcs assoc :run true)
  "started!")

(defn stop!
  []
  (js/Tone.Transport.stop)
  (swap! rsrcs assoc :run false)
  "stopped!")

(defn go!
  [seconds]
  (set! js/Tone.Transport.seconds seconds))

(defn secs
  "returns the transport position in seconds."
  []
  (. js/Tone.Transport -seconds))

(defn pos
  "returns the transport position in Bars:Beats:Sixteenths"
  []
  (. js/Tone.Transport -position))

(defn run? [] (:run @rsrcs))

(defn st!
  "ramps to a new Tempo in bpm within the desired time."
  [target-bpm ramp-time]
  (set! js/tempo target-bpm)
  (js/Tone.Transport.bpm.rampTo target-bpm
                                (if ((every-pred number? (partial < 0)) ramp-time)
                                  ramp-time 0.001)))

(def routes {'synth 'synth
             'monos 'monos
             'metal 'metal
             'p 'p!
             'on 'on!
             'off 'off!
             'conv 'conv
             'pan 'pan
             'pan3 'pan3
             'grn 'grn
             'grnstart 'grnstart
             'grnstop 'grnstop
             'buf 'buf
             '-- 'chain
             '-< 'fan
             'schr 'schr
             'lp 'lp
             'draw 'draw
             'clear 'clear!
             'g 'getrsrc
             's 'setrsrc
             'sp 'setprops!
             'gp 'getprops
             'set 'tone-set!
             'get 'tone-get
             'call 'call!
             'start 'start!
             'stop 'stop!
             'go 'go!
             'secs 'secs
             'pos 'pos
             'st 'st!
             'run? 'run?
             'cancel 'cancel!})

(defn t
  "This is the route to almost all of the ToneJS built-in functionality inside REPLiCA."
  [route & args]
  (case (str route)
    "doc" (doc-commands 'replica.tone/t routes 't)
    (apply proc! (str 't route) args)))

(add-routes! 't 'replica.tone routes)
