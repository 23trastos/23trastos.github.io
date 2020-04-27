(ns replica.tone
  (:require [tonejs]
            [replica.utils :refer [command!
                                   proc!
                                   add-routes!
                                   doc-commands]]))

(defonce rscs (atom {:run false}))

(defn getrsc
  [k id]
  (get-in @rscs [k id]))

(defn monos
  "Creates a new Tone.Synth"
  ([id & {:keys [osc a d s r]
          :or {osc {:type 'triangle}
               a 0.005 d 0.1 s 0.3 r 1}}]
   (monos id {:oscillator osc :envelope {:attack a
                                         :decay d
                                         :sustain s
                                         :release r}}))
  ([id settings]
   (swap! rscs assoc-in [:ins id]
          (. (js/Tone.Synth. (clj->js settings)) toMaster))))

(defn metal
  "Creates a new Tone.MetalSynth"
  ([id & {:keys [freq a d r harm modidx res octs]
          :or {freq 200 a 0.001 d 1.4 r 0.2
               harm 5.1 modidx 32 res 4000 otcs 1.5}}]
   (metal id {:frequency freq
              :envelope {:attack a :decay d :release r}
              :harmonicity harm :modulationIndex modidx
              :resonance res :octaves 1.5}))
  ([id settings]
   (swap! rscs assoc-in [:ins id]
          (. (js/Tone.MetalSynth. (clj->js settings)) toMaster))))

(defn pluck
  "Creates a new Tone.PluckSynth"
  ([id & {:keys [noise damp res] :or {noise 1 damp 4000 res 0.99}}]
   (pluck id {:attackNoise noise :dampening damp :resonance res}))
  ([id settings]
   (swap! rscs assoc-in [:ins id]
          (. (js/Tone.PluckSynth. (clj->js settings)) toMaster))))

(defn p!
  "Plays a Synth"
  [id freq dur t vel]
  (let [s (getrsc :ins id)]
    (case (str s)
      "Synth" (. s triggerAttackRelease freq dur t vel)
      "MetalSynth" (do
                     (set! (.. s -frequency -value) freq)
                     (. s triggerAttackRelease dur t vel))
      (str s " can't be played so!"))))

(defn on!
  "Triggers attack on a Synth"
  [id freq t vel]
  (let [s (getrsc :ins id)]
    (case (str s)
      "Synth" (. s triggerAttack freq t vel)
      "PluckSynth" (. s triggerAttack freq t)
      "MetalSynth" (do
                     (set! (.. s -frequency -value) freq)
                     (. s triggerAttack t vel))
      (str s " can't be triggered so!"))))

(defn off!
  "Releases a Synth"
  [id t]
  (. (getrsc :ins id) triggerRelease t))

(defn schr!
  "Schedules an event repeated on a time interval."
  [interval function]
  (js/Tone.Transport.scheduleRepeat function interval))

(defn start!
  []
  (js/Tone.Transport.start)
  (swap! rscs assoc :run true)
  "started!")

(defn stop!
  []
  (js/Tone.Transport.stop)
  (swap! rscs assoc :run false)
  "stopped!")

(defn run? [] (:run @rscs))

(defn cancel!
  ([]
   (js/Tone.Transport.cancel)
   (swap! rscs :loops {})
   "All schedules cancelled.")
  ([id]
   (if (number? id)
     (js/Tone.Transport.clear id)
     (do
       (. (getrsc :loops id) dispose)
       (swap! rscs assoc-in [:loops id] nil)))))

(defn l
  "Creates a new loop with defined start and end."
  [id interval start-time end-time function]
  (when-let [lp (getrsc :loops id)]
    (. lp dispose))
  (swap! rscs assoc-in [:loops id]
         (. (. (js/Tone.Loop. function interval)
               start start-time) stop end-time)))

(defn st!
  "ramps to a new Tempo in bpm within the desired time."
  [target-bpm ramp-time]
  (js/Tone.Transport.bpm.rampTo target-bpm
                                (if ((every-pred number? (partial < 0)) ramp-time)
                                             ramp-time 0.001)))

(def routes {'monos 'monos
             'metal 'metal
             'pluck 'pluck
             'p 'p!
             'on 'on!
             'off 'off!
             'schr 'schr!
             'l 'l
             'getrsc 'getrsc
             'start 'start!
             'stop 'stop!
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
