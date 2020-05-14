(ns replica.editor
  (:require [cljsjs.codemirror]
            [cljsjs.codemirror.addon.search.searchcursor]
            [cljsjs.codemirror.addon.dialog.dialog]
            [cljsjs.codemirror.mode.clojure]
            [cljsjs.codemirror.addon.edit.matchbrackets]
            [cljsjs.codemirror.addon.edit.closebrackets]
            [replica.utils :refer [command!
                                   proc!
                                   add-routes!
                                   doc-commands
                                   add-info!
                                   command!]]))

(defonce cm (js/CodeMirror.fromTextArea
               (js/document.getElementById "code")
               (clj->js {:lineNumbers true
                         :mode "clojure"
                         :matchBrackets true})))

(set! js/CM cm)

(add-info! "CodeMirror loaded")

(defonce search (atom {:query nil :cursor nil}))

(defn untab [s]
  (. (. s replace (js/RegExp. #"\s\s+" 'g) " ") trim))

(defn rd
  "Retrieves all the content from the CodeMirror editor as a string."
  ([] (rd " "))
  ([split-line-with-str]
   (untab (. cm getValue split-line-with-str))))

(defn s!
  "Sets the content of the CodeMirror editor."
  [& values]
  (. cm setValue (apply str values)))

(defn rplc!
  "Replaces part of the content of the editor."
  ([string line]
   (rplc! string line line))
  ([string start-line end-line]
   (rplc! (str string "\n") start-line 0 end-line 0))
  ([string start-line start-char end-line end-char]
   (. cm replaceRange string
      (clj->js {:line (dec start-line) :ch start-char})
      (clj->js {:line end-line :ch end-char}))))

(defn kl!
  "Kills lines."
  ([line]
   (kl! line line))
  ([start-line end-line]
   (rplc! "" start-line 0 end-line 0)))

(defn r
  "Reads lines from code editor."
  ([] (rd))
  ([line]
   (. cm getLine (dec line)))
  ([start-line end-line]
   (r start-line end-line " "))
  ([start-line end-line split-line-with-str]
   (r start-line 0 end-line 0 split-line-with-str))
  ([start-line start-char end-line end-char]
   (r start-line start-char end-line end-char " "))
  ([start-line start-char end-line end-char split-line-with-str]
   (untab (. cm getRange
             (clj->js {:line (dec start-line) :ch start-char})
             (clj->js {:line end-line :ch end-char})
             split-line-with-str))))

(defn itl
  "Iterates over eachLine with a function [line-number text]."
  ([function]
   (. cm eachLine
      (fn[lh] (function (inc (. cm getLineNumber lh)) (. lh -text)))))
  ([start-line end-line function]
   (. cm eachLine (dec start-line) end-line
      (fn[lh] (function (inc (. cm getLineNumber lh)) (. lh -text))))))

(defn where
  "Returns nil or the next {:from {:line :ch} :to {:line :ch}} matching the provided regexp. It will ignore any line containing a regexp definition in the form #\"..."
  [regexp]
  (when-not (= (str (:query @search)) (str regexp))
    (reset! search {:query regexp
                    :cursor (. cm getSearchCursor regexp)}))
  (if (. (:cursor @search) findNext)
    (let [from (. (:cursor @search) from)
          to (. (:cursor @search) to)]
      (if (re-find #"'cmd|#\"" (. cm getLine (.-line from)))
        (where regexp)
        {:from {:line (inc (.-line from)) :ch (.-ch from)}
         :to {:line (inc (.-line to)) :ch (.-ch to)}}))
    (swap! search assoc :query nil)))

(defn whl
  "Returns nil or the next line (number) matching the provided string or regexp. It will ignore any line containing a regexp definition in the form #\"..."
  ([match] (whl match false))
  ([match only-first?]
   (let [regexp (if (= (type match) (type #""))
                  match
                  (re-pattern (str match)))]
     (when only-first? (swap! search :query nil))
     (:line (:from (where regexp))))))

(defn p!
  "Processes lines of the CodeMirror editor as REPL commands. If no argument is provided every line is processed as a separate command. Be aware and happy that you can insert also (cljs code), even call (r ... with args) inside a route. This can generate dangerous and beautiful loops!"
  ([] (p! 1 (. cm lineCount)))
  ([n]
   (command! (r n) false false))
  ([start-line end-line]
   (map p! (range start-line (inc end-line)))))

(defn bl
  "Bounding Labels are useful! Returns the inner-bound lines (start end) between the two first regexp matches."
  [regexp]
  (swap! search assoc :query nil)
  (let [start (inc (whl regexp))
        end (dec (whl regexp))]
    (list start end)))

(defn rl
  "Reads the lines IN BETWEEN two regexp matches. It will ignore any line containing a regexp definition in the form #\"..."
  [regexp]
  (apply r (bl regexp)))

(defn pl!
  "Processes the lines IN BETWEEN two regexp matches. It will ignore any line containing a regexp definition in the form #\"..."
  [regexp]
  (apply p! (bl regexp)))


(defn l!
  "Loads the full content of the CodeMirror editor and processes it as an entire cljs code file."
  []
  (command! (str "(do " (rd) ")")))

(defn lf!
  ([url] (lf! url nil))
  ([url callback]
   "Loads code from file."
   (js/fromUrlToCM url callback)))

(def routes {'rd 'rd
             's 's!
             'rplc 'rplc!
             'kl 'kl!
             'r 'r
             'itl 'itl
             'p 'p!
             'l 'l!
             'where 'where
             'whl 'whl
             'bl 'bl
             'pl 'pl!
             'rl 'rl
             'lf 'lf!})

(defn e
  "'e' is a route to the code editor built-in functions inside replica."
  [route & args]
  (case (str route)
    "doc" (doc-commands 'replica.editor/e routes 'e)
    (apply proc! (str 'e route) args)))

(add-routes! 'e 'replica.editor routes)

