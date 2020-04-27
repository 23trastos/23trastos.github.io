(ns replica.inscore
  (:require [replica.utils :refer [proc!
                                   command!
                                   add-routes!
                                   doc-commands]]))

(defonce inscore-viewer (. js/document getElementById "scene"))

(defn dropc!
  "Drops (sends) the desired code string to the active INScore window. If several arguments are provided then they are combined as one string without any formatting."
  [& codes]
  (js/dropTextTo inscore-viewer (apply str codes)))

(defn- make-line
  [& codes]
  (str (apply str codes) ";"))

(defn dropl!
  "Drops (sends) a line, combining its arguments as a string and adding a semicolon to the end, to the active INScore window. If several arguments are provided then they are combined as one string without any formatting."
  [& codes]
  (dropc! (apply make-line codes)))

(defn dropls!
  "Drops (sends) one line for each argument to the active INScore window. You can provide fragments of code inside each line. [see doc for 'dropl aka replica.inscore/dropl!]"
  [& lines]
  (map (partial apply dropl!) lines))

(defn addr
  "Address an object from a scene, returns OSC path. If no scene is prepended in the form 'scenex/objx' then 'scene/[object]' is assumed. For aliases prepend '#' -> '#/my/alias'."
  [object]
  (str (when-not (contains? (set (name object)) "#")
         "/ITL/")
       (when-not (contains? (set (name object)) "/")
         "scene/")
       object))

(defn clear!
  "Clears the INScore viewer by deleting every element from the desired scene (if no scene argument is provided then 'scene' is assumed)."
  [& scene]
  (dropl! (str (addr (str (first scene))) "* del")))

(defn cmd!
  "Address an object [or create it] and send to it a command. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'."
  [object & cmd-codes]
  (apply dropl! (addr object) (map #(str " " %) cmd-codes)))

(defn cmds!
  "Address an object [or create it] and send to it some commands. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'."
  [object & cmds]
  (map (partial dropl! (addr object) " ") cmds))

(defn setx!
  "Dispatches a 'set [prop] [args]' command to an object."
  [object prop & args]
  (cmds! object (apply str "set " prop " " args)))

(defn gmn!
  "Macro command for creating a new GUIDO score object from GMN code. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'."
  [object code-string]
  (setx! object 'gmn "'" code-string "'"))

(defn als!
  "Macro command for creating an alias for the desired object"
  [object your-alias]
  (cmds! object (str "alias '" your-alias "'")))

(def routes {'dropc 'dropc!
             'dropl 'dropl!
             'dropls 'dropls!
             'addr 'addr
             'clear 'clear!
             'cmd 'cmd!
             'cmds 'cmds!
             'setx 'setx!
             'gmn 'gmn!
             'als 'als!})

(defn i
  "The 'i' function is a route to almost all of the INScore built-in functionality inside replica. Available commands are 'clear 'drop[c][l[s]] 'cmds 'gmn 'a#"
  [route & args]
  (case (str route)
    "doc" (doc-commands 'replica.inscore/i routes 'i)
    (apply proc! (str 'i route) args)))

(add-routes! 'i 'replica.inscore routes)



