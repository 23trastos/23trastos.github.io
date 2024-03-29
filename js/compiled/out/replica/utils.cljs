(ns replica.utils
  (:require [goog.object :as g]))

(def global (this-as this this))
(defonce resp (atom nil))
(defonce routes (atom nil))
(defonce info (js/document.getElementById "right-info"))

(defn get-value []
  (let [value (:value @resp)]
    (when-not (or (nil? value)
                  (re-find #"nil|-------" value))
      (. value replace (js/RegExp. #"\"" 'g) ""))))

(defn error!
  [origin & msgs]
  (throw
    (js/Error.
      (apply str "@replica." origin ": " msgs))))

(defn add-info!
  ([string]
   (add-info! (str string) "black"))
  ([string color]
   (js/addInfo (str string) (str color))))

(defn display-div!
  [id display?]
  (js/displayDiv id display?))

(defn url!
  [url]
  (js/assignUrl url))

(defn full-score!
  [full?]
  (js/goFullScore full?))

(defn cmd-url
  [c]
  (str "#/cmd?c=\""
       (. (str c) replace (js/RegExp. #"\"" 'g) "\\\"")
       "\""))

(defn url-command!
  "Sends a command to REPL by URL query"
  [c]
  (url! (cmd-url c)))

(defn command!
  ([c] (command! c true true))
  ([c hist? resp?]
   (reset! resp nil)
   (js/toRepl c hist? resp?)))

(defn js-query
  ([query] (js-query query js/document))
  ([query parent]
   (. parent querySelector (str query))))

(defn- from-id-or-obj
  [obj]
  (if (or
        (= (type obj) (type 'a))
        (= (type obj) (type "")))
    (js-query (str "#" obj))
    obj))

(defn get-js-value
  [obj-or-id & path-to-key]
  (let [obj (from-id-or-obj obj-or-id)]
    (apply g/getValueByKeys obj path-to-key)))

(defn set-js-prop!
  [obj-or-id & path-to-prop-value]
  (let [obj (from-id-or-obj obj-or-id)]
    (let [target (butlast path-to-prop-value)]
      (g/set (apply get-js-value obj (butlast target))
             (last target)
             (last path-to-prop-value)))))

(defn get-js-paths
  [obj-or-id & pre-paths]
  (let [obj (from-id-or-obj obj-or-id)]
    (g/getKeys (apply g/getValueByKeys obj pre-paths))))

(defn proc!
  [route & args]
  (if (= (str (first args)) "doc")
    (command! (str "(doc " (first (get @routes (str route))) ")"))
    (apply (second (get @routes (str route))) args)))

(defn add-routes!
  ([route-cmd-map]
   (swap! routes merge route-cmd-map))
  ([pre-route origin route-cmd-map]
   (add-routes!
     (zipmap
       (map #(str pre-route %)
            (keys route-cmd-map))
       (map #(list (str origin (when origin "/") %) (eval (symbol %)))
            (vals route-cmd-map))))))

(defn doc-commands
  [fn-path route-cmd-map pre-router]
  (command! (str "(doc " fn-path ")"))
  (command! (str "(str \"Available commands are: "
                 (when pre-router (str "[" pre-router "]+"))
                 "(" (. (apply array (keys route-cmd-map))
                        join " ") ")\")") false true))
(defn regex2#string
  [regex]
  (str "'#\"" (. regex -source) "\""))

(defn rand-str
  [len]
  (apply str (take len (repeatedly #(char (+ (rand 26) 65))))))

(defn create-command!
  ([command]
   (create-command! (str command)
                    (if (= (type command) (type #""))
                      (regex2#string command)
                      command)))
  ([label command]
   (js/appendLinkTo "menu" (str label) (cmd-url command))))
