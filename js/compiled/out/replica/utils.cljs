(ns replica.utils)

(def global (this-as this this))
(defonce resp (atom nil))
(defonce routes (atom nil))
(defonce info (. js/document getElementById "right-info"))

(defn get-value []
  (let [value (:value @resp)]
    (when-not (or (nil? value)
                  (= (list nil) value)
                  (some? (re-find #"nil" value)))
      (clojure.string/replace value #"\"" ""))))

(defn error!
  [origin & msgs]
  (throw
    (js/Error.
      (apply str "@replica." origin ": " msgs))))

(defn set-info!
  [string]
  (set! (. info -innerHTML) string))

(defn url!
  [url]
  (js/replaceUrl (url)))

(defn cmd-url
  [c]
  (str "#/cmd?c=\"" c "\""))

(defn url-command!
  "Sends a command to REPL by URL query"
  [c]
  (url! (cmd-url c)))

(defn command!
  ([c] (command! c false true))
  ([c hist? resp?]
   (reset! resp nil)
   (js/toRepl c hist? resp?)))

(defn proc!
  [route & args]
  (if (= (str (first args)) "doc")
    (command! (str "(doc " (first (get @routes route)) ")") true false)
    (apply (second (get @routes route)) args)))

(defn add-routes!
  ([route-cmd-map]
   (swap! routes merge route-cmd-map))
  ([pre-route origin route-cmd-map]
   (add-routes!
     (zipmap
       (map #(str pre-route %)
            (keys route-cmd-map))
       (map #(list (str origin "/" %) (eval (symbol %)))
            (vals route-cmd-map))))))

(defn doc-commands
  [fn-path route-cmd-map pre-router]
  (command! (str "(doc " fn-path ")") true true)
  (command! (str "(str \"Available commands are: "
                 (when pre-router (str "[" pre-router "]+"))
                 "(" (. (apply array (keys route-cmd-map))
                        join " ") ")\")") false true))

(defn create-command!
  [command-string]
  (js/appendToMenu command-string (cmd-url command-string)))
