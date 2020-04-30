(ns replica.core
  (:require [replica.utils :as utils :refer [command!
                                             proc!
                                             get-value
                                             doc-commands
                                             add-routes!]]
            [replica.editor :refer [e]]
            [replica.inscore :refer [i]]
            [replica.tone :refer [t]]))

(declare rr)

(defn r
  "The 'r' function is a parser for replica commands, a door to almost every built-in functionality in the replica system. As a first route-argument you can provide: 'i for inscore 't for tone and 'e for editor. You can always use 'doc after any route-argument or function name for showing up the documentation: Happy REPLiCAtions!!"
  [route & args]
  (reset! utils/resp nil)
  (if (= (type route) (type #""))
    (r 'epl route)
    (let [route (str route)]
      (case route
        "doc" (doc-commands "replica.core/r" @utils/routes nil)
        "i" (apply i args)
        "e" (apply e args)
        "t" (apply t args)
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
        "filter" (utils/url! "#/hist2CM?filter=true")
        (or (apply proc! route args)
            (get-value))))))

(def routes {'r 'rr})

(defn rr
  "The 'rr' function lets you give a list of command-arguments, which are applied to the 'r' function."
  [& cmds]
  (map #(apply r %) cmds))

(add-routes! "" 'replica.core routes)
