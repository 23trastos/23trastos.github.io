(ns replica.core
  (:require [replica.utils :as utils :refer [proc!
                                             get-value
                                             doc-commands
                                             add-routes!]]
            [replica.editor :refer [e]]
            [replica.inscore :refer [i]]
            [replica.tone :refer [t]]))

(declare rr)

(defn r
  "The 'r' function is a parser for replica commands, a door to almost every built-in functionality in the replica system. As a first route-argument (or route-letter!) you can provide: 'i for inscore 't for tone and 'e for editor. You can always use 'doc after any route-argument or function name for showing up the documentation: Happy REPL!CAtions!!"
  [& args]
  (reset! utils/resp nil)
  (if (coll? (first args))
    (map (partial apply r) args)
    (when-not (empty? args)
      (let [route (first args) args (rest args)]
        (if (= (type route) (type #""))
          (r 'epl route)
          (case (str route)
            "doc" (doc-commands "replica.core/r" @utils/routes nil)
            "s" (if (not= (str (first args)) "doc")
                  (if (t 'run?) (t 'stop) (t 'start))
                  "This is just a shortcut for starting/stopping the transport with 'trun/'tstop.")
            "c" (if (not= (str (first args)) "doc")
                  (t 'cancel)
                  (r 'tcancel 'doc))
            "l" (if (not= (str (first args)) "doc")
                  (apply t 'l args)
                  (r 'l 'doc))
            "st" (if (not= (str (first args)) "doc")
                   (apply t 'st args)
                   (r 'tst 'doc))
            "fh2cm" (utils/url! "#/hist2CM?filter=true")
            "h2cm" (utils/url! "#/hist2CM")
            "del" (apply (partial js-invoke js/window "setTimeout") args)
            "log" (apply utils/set-info! args)
            "display" (apply utils/display-div! args)
            (or (apply proc! route args)
                (get-value))))))))

(def routes {'r 'replica.core/r
             'i 'replica.inscore/i
             'e 'replica.editor/e
             't 'replica.tone/t
             'cmd 'replica.utils/create-command!
             'url 'replica.utils/url!
             'full 'replica.utils/full-score!})

(add-routes! nil nil routes)
