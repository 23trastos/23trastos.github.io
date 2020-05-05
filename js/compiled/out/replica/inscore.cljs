(ns replica.inscore
  (:require [replica.utils :refer [proc!
                                   command!
                                   add-routes!
                                   doc-commands]]))

(defn dropc!
  "Drops (sends) the desired code string to the active INScore window. If several arguments are provided then they are combined as one string without any formatting."
  [& codes]
  (let [code (apply str codes)]
    (if (re-find #"--keep" code)
      (. code replace (js/RegExp. #"--keep|;" 'g) "")
      (js/dropTextTo js/INS code))))

(defn make-line
  [& codes]
  (str (. (apply array codes) join " ") ";"))

(defn dropl!
  "Drops (sends) a line, combining its arguments and adding a semicolon to the end, to the active INScore window."
  [& codes]
  (dropc! (apply make-line codes)))

(defn dropls!
  "Drops (sends) one line for each argument to the active INScore window. You can provide fragments of code inside each line. [see doc for 'dropl aka replica.inscore/dropl!]"
  [& lines]
  (map (partial apply dropl!) lines))

(defn addr
  "Address an object from a scene, returns OSC path. If no scene is prepended in the form '/ITL/scenex/objx' then '/ITL/scene/[object]' is assumed. For aliases prepend '#' -> '#/my/alias'."
  [object]
  (str (when-not (re-find #"#|/ITL/" (str object)) ;TODO ALIASES
         "/ITL/scene/")
       object))

(defn clear!
  "sends a '* del' message to the desired object or scene (if no argument is provided then '/ITL/scene/' is assumed)."
  [& obj]
  (apply dropl! (str (addr (str (first obj))) "* del") (rest obj)))

(defn msg!
  "Address an object [or create it] and send to it a command. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'."
  [object & msg-codes]
  (if (coll? (first msg-codes))
    (map (partial apply msg! object) msg-codes)
    (apply dropl! (addr object) msg-codes)))

(defn setx!
  "Dispatches a 'set [obj-type] [args]' command to an object."
  [object obj-type & args]
  (apply msg! object "set" obj-type args))

(defn gmn!
  "Macro command for creating a new score from GMN code. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'."
  [object gmn-string & opt]
  (apply setx! object 'gmn "'" gmn-string "'" opt))

(defn txt!
  "Macro command for creating a new text entry. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'."
  [object txt-string & opt]
  (apply setx! object 'txt "'" txt-string "'" opt))

(defn watch!
  "Macro command for creating a watch to an element. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'."
  [object watch-for & body]
  (apply msg! object 'watch watch-for "("
         (. (apply array body) join ", ")
         ")"))

(defn als!
  "Macro command for creating an alias for the desired object"
  [object your-alias & opt]
  (apply msg! object 'alias "'" your-alias "'" opt))

(def routes {'dropc 'dropc!
             'dropl 'dropl!
             'dropls 'dropls!
             'make-line 'make-line
             'addr 'addr
             'clear 'clear!
             'msg 'msg!
             'setx 'setx!
             'gmn 'gmn!
             'txt 'txt!
             'watch 'watch!
             'als 'als!})

(defn i
  "The 'i' function is a route to almost all of the INScore built-in functionality inside replica."
  [route & args]
  (if (re-find #"/ITL" (str route))
    (apply dropl! route args)
    (case (str route)
      "doc" (doc-commands 'replica.inscore/i routes 'i)
      (apply proc! (str 'i route) args))))

(add-routes! 'i 'replica.inscore routes)



