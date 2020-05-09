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

(defonce rsrcs (atom {:run false :master js/Tone.Master :ins {} :fx {}}))

(defn getrsrc
  ([id]
   (if (coll? id)
     (apply getrsrc id)
     (if (= (str id) "master")
       (:master @rsrcs)
       (or (getrsrc :ins id) (getrsrc :fx id)))))
  ([k id]
   (get-in @rsrcs [k id])))

(defn fan
  "connects source to several elements by ID, a.k.a. fan"
  [source-id & elms]
  (let [src (getrsrc source-id)]
    (apply (. (. src -fan) bind src)
           (map getrsrc elms))))

(defn chain
  "chains from source through elements by ID."
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

(defn do!
  [id path-to-fn & args]
  (apply js-invoke
         (apply get-js-value (getrsrc id) (butlast path-to-fn))
         (str (last path-to-fn))
         args))

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

(defn p!
  "Plays a Synth"
  [id freq dur t vel]
  (let [s (getrsrc :ins id)]
    (case (str s)
      ("Synth" "MonoSynth") (. s triggerAttackRelease freq dur t vel)
      "MetalSynth" (do
                     (when freq
                       (set! (.. s -frequency -value) freq))
                     (. s triggerAttackRelease dur t vel))
      (str s " can't be played so!"))))

(defn on!
  "Triggers attack on a Synth"
  [id freq t vel]
  (let [s (getrsrc :ins id)]
    (case (str s)
      ("Synth" "MonoSynth") (. s triggerAttack freq t vel)
      "PluckSynth" (. s triggerAttack freq t)
      "MetalSynth" (do
                     (when freq
                       (set! (.. s -frequency -value) freq))
                     (. s triggerAttack t vel))
      (str s " can't be triggered so!"))))

(defn off!
  "Releases a Synth"
  [id t]
  (. (getrsrc :ins id) triggerRelease t))

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
             :or {-- 'master}}]
  (setrsrc :ins id (js/Tone.GrainPlayer.
                     (buf-from-any src) (fn[]
                                          (chain [:ins id] --)
                                          (fan [:ins id] -<)))))

(defn grnstart
  [id t offset dur]
  "starts a GrainPlayer."
  (. (getrsrc id) start t offset dur))

(defn grnstop
  [id t]
  "stops a GrainPlayer."
  (. (getrsrc id) stop t))


(defn conv
  "creates a Tonejs Convolver from the speficied IR source buffer or url"
  [id src & {:keys [onload -- -<]
             :or {-- 'master}}]
  (setrsrc :fx id (js/Tone.Convolver.
                    (buf-from-any src) (fn[]
                                         (chain [:fx id] --)
                                         (fan [:fx id] -<)))))

(defn discn
  "disconnects source from element(s) by Object or index."
  [src & disconnect-from]
  (let [elm (getrsrc src)]
    (map #(. elm disconnect %) disconnect-from)))

(defn schr!
  "Schedules an event repeated on a time interval."
  [interval function]
  (js/Tone.Transport.scheduleRepeat function interval))

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

(defn run? [] (:run @rsrcs))

(defn cancel!
  ([]
   (js/Tone.Transport.cancel)
   (swap! rsrcs :loops {})
   "All schedules cancelled.")
  ([id]
   (if (number? id)
     (js/Tone.Transport.clear id)
     (do
       (. (getrsrc :loops id) dispose)
       (swap! rsrcs assoc-in [:loops id] nil)))))

(defn lp
  "Creates a new loop with defined start and end."
  [id interval start-time end-time function]
  (when-let [lp (getrsrc :loops id)]
    (. lp dispose))
  (swap! rsrcs assoc-in [:loops id]
         (. (. (js/Tone.Loop. function interval)
               start start-time) stop end-time)))

(defn st!
  "ramps to a new Tempo in bpm within the desired time."
  [target-bpm ramp-time]
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
             'grn 'grn
             'gstart 'grnstart
             'gstop 'grnstop
             'buf 'buf
             '-- 'chain
             '-< 'fan
             'schr 'schr!
             'lp 'lp
             'g 'getrsrc
             's 'setrsrc
             'sp 'setprops!
             'gp 'getprops
             'do 'do!
             'start 'start!
             'stop 'stop!
             'go 'go!
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
