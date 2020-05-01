(ns replica.core
  (:require [replica.utils :as utils :refer [command!
                                             proc!
                                             get-value
                                             doc-commands
                                             add-routes!]]
            [replica.editor :refer [e]]
            [replica.inscore :refer [i]]
            [replica.tone :refer [t]]))

(defn r
  "The 'r' function is a parser for replica commands, a door to almost every built-in functionality in the replica system. As a first route-argument you can provide: 'i for inscore 't for tone and 'e for editor. You can always use 'doc after any route-argument or function name for showing up the documentation: Happy REPLiCAtions!!"
  [route & args]
  (reset! utils/resp nil)
  (if (= (type route) (type #""))
    (r 'epl route)
    (let [route (str route)]
      (case route
        "doc" (doc-commands "replica.core/r" @utils/routes nil)
        ;"i" (apply i args)
        ;"e" (apply e args)
        ;"t" (apply t args)
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
        "edit" (utils/url! "#/hist2CM")
        ;"cmd" (apply utils/create-command! args)
        ;"url" (apply utils/url! args)
        ;"full" (apply utils/full-score! args)
        (or (apply proc! route args)
            (get-value))))))

(defn rr
  "The 'rr' function lets you give a list of command-arguments, which are applied to the 'r' function."
  [& cmds]
  (map #(apply r %) cmds))

(def routes {'r 'r
             'rr 'rr})

(add-routes! nil 'replica.core routes)

(def shortcuts {'i 'replica.inscore/i
                'e 'replica.editor/e
                't 'replica.tone/t
                'cmd 'replica.utils/create-command!
                'url 'replica.utils/url!
                'full 'replica.utils/full-score!})

(add-routes! nil nil shortcuts)
