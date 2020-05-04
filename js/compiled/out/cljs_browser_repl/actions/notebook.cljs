(ns cljs-browser-repl.actions.notebook
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-browser-repl.net.gist :as gist]
            [cljs-browser-repl.net.file :as file]
            [cljs.core.async :refer [<!]]
            [cljs.pprint :refer [pprint]]
            [cljs-browser-repl.state :as state]
            [cljs-browser-repl.actions.repl :refer [repl-entry!]]))

(defn cmd-to-history! [cmd]
  (swap! state/history state/add-entry (state/to-repl cmd)))

(defn disable-stops! []
  (swap! state/history
         (fn [h]
           (mapv #(if (= (:type %) :stop) (assoc % :disabled true) %) h))))

(defn add-separator! []
  (when (not= (:type (last @state/history)) :stop)
    (swap! state/history state/add-entry (state/to-repl {:type :separator}))))

(defn play-notebook! []
  (let [position (:position @state/current-notebook)
        started? (number? position)
        {:keys [type] :as cmd} (state/current-command @state/current-notebook)]
    ; If was stopped, disable the history repl stop and move to next command.
    (when (and started? (= type :stop))
      (disable-stops!)
      (add-separator!)
      (swap! state/current-notebook update :position inc)))

  ; When there's a command we'll go looping through the notebook and parsing
  ; the commands.
  (when-let [{:keys [type] :as cmd} (state/current-command @state/current-notebook)]
    (loop [pos (or (:position @state/current-notebook) 0)]
      (let [cmds (:cmds @state/current-notebook)
            {:keys [type value silent? deaf?] :as cmd} (nth cmds pos)
            new-pos (inc pos)]
        ;; Dispatch commands as necessary
        (case type
          :input (if (:sample? cmd) ; If just sample, put to history
                   (cmd-to-history! cmd) ; without running it.
                   (repl-entry! value (not silent?) (not deaf?)))
          (cmd-to-history! cmd))
        ;; If the command is not a stop and we're inside the book, continue
        (when (and (not= type :stop)
                   (< new-pos (count cmds)))
          (swap! state/current-notebook assoc :position new-pos)
          (recur new-pos))))))

(defn from-gist!
  ([id] (from-gist! id "index"))
  ([id file-name]
   (if (= (:id @state/current-notebook) id)
     (do ; If we are already on the notebook, just swap commands
       (swap! state/current-notebook assoc
              :position 0
              :cmds (gist/get-commands (:gist @state/current-notebook) file-name))
       (play-notebook!))
     (do ; If it's a new notebook, re-fetch, store and play
       (reset! state/history [])
       (go
         (let [gist (<! (gist/get! id))
               commands (gist/get-commands gist file-name)]
           (reset! state/current-notebook state/empty-notebook)
           (swap! state/current-notebook assoc :id id :gist gist :cmds commands)
           (play-notebook!)))))))

(defn goto! [pos]
  (swap! state/current-notebook assoc :position pos)
  (play-notebook!))

(defn from-filesystem!
  ([id] (from-filesystem! id "index"))
  ([id file-name] (from-filesystem! id file-name 0))
  ([id file-name position]
   (from-filesystem! id file-name position true))
  ([id file-name position clear-history?]
   (when clear-history? (reset! state/history []))
   (go
     (let [file (<! (file/get! id file-name))
           commands (file/get-commands file)]
       (reset! state/current-notebook state/empty-notebook)
       (swap! state/current-notebook
              assoc :id id :file-name file-name :file file
              :cmds commands :position position)
       (swap! state/repl-info assoc
              :type "log"
              :msg (str "loaded '" file-name
                        "' from '" id "' notebook."))
       (play-notebook!)))))

(defn reader-load! [reader-event]
  (let [content (.. reader-event -target -result)
        loaded-file (. (:file @state/current-notebook) -name)]
    (reset! state/history [])
    (let [loaded-file
          (if (re-find #"_" loaded-file)
            (clojure.string/split loaded-file #"_")
            [loaded-file "loaded"])]
      (swap! state/current-notebook
             assoc :id (loaded-file 0) :file-name (loaded-file 1)
             :cmds (file/commands-from-string content) :position 0))
    (play-notebook!)))

(defn from-loaded-file! [event]
  (let [file (aget (.. event -target -files) 0)
        reader (js/FileReader.)]
    (reset! state/current-notebook state/empty-notebook)
    (swap! state/current-notebook assoc :file file)
    (. reader readAsText file)
    (set! (. reader -onload) reader-load!)))
