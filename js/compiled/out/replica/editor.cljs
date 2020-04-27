(ns replica.editor
  (:require [cljsjs.codemirror]
            [replica.utils :refer [command!
                                   proc!
                                   add-routes!
                                   doc-commands
                                   set-info!]]))

(defonce cm (. js/CodeMirror fromTextArea
               (. js/document getElementById "code")
               (clj->js {:lineNumbers true})))

(when cm (set-info! "CodeMirror ready!"))

(defn rd
  "Retrieves the content from the CodeMirror editor as a string."
  ([] (rd " "))
  ([split-line-with-str]
   (. cm getValue split-line-with-str)))

(defn s!
  "Sets the content of the CodeMirror editor."
  [& values]
  (. cm setValue (apply str values)))

(defn r
  "Reads the editor code from line 'n'"
  ([] (rd))
  ([n]
   (. cm getLine (dec n)))
  ([start-line end-line] (r start-line end-line " "))
  ([start-line end-line split-line-with-str]
   (clojure.string/join split-line-with-str
                        (map r (range start-line (inc end-line))))))

(defn p!
  "Processes lines of the CodeMirror editor as arguments to the r function. If no argument is provided every line is processed as a separate command. Be aware and happy that you can insert also (cljs code), even call (r ... with args) inside a route. This can generate dangerous and beautiful loops!"
  ([] (p! 1 (. cm lineCount)))
  ([n]
   (let [line (r n)]
     (case (subs line 0 1)
       "(" (command! line)
       "'" (command! (str "(apply replica.core/r [" line "])"))
       "skip")))
  ([start-line end-line]
   (map p! (range start-line (inc end-line)))))

(defn l!
  "Loads the full content of the CodeMirror editor and processes it as an entire cljs code file."
  []
  (command! (str "(do " (rd) ")")))

(def routes {'rd 'rd
             's 's!
             'r 'r
             'p 'p!
             'l 'l!})

(defn e
  "'e' is a route to the code editor built-in functions inside replica."
  [route & args]
  (case (str route)
    "doc" (doc-commands 'replica.editor/e routes 'e)
    (apply proc! (str 'e route) args)))

(add-routes! 'e 'replica.editor routes)

