(ns cljs-browser-repl.state
  (:require [reagent.core :refer [atom]]
            [replumb.core :as replumb]
            [replumb.repl :as repl]
            ))

;; History

(defn now [] (.now js/Date))
(defn add-entry [h e] (conj h e))
(defn add-entries [h es] (apply conj h es))

(defn to-repl [o] (assoc o :date (now)))

(defn to-repl-input  [source] (to-repl {:type :input    :value source}))
(defn to-repl-error  [err]    (to-repl {:type :error    :value err}))
(defn to-repl-result [resp]   (to-repl {:type :response :value resp}))

(defn to-repl-entry  [t source] (to-repl {:type t :value source}))

(defonce history (atom []))

;; Compiler

(defonce current-ns (atom (repl/current-ns)))

;; UI

(defonce input (atom ""))

;; Repl info & messages

(defonce repl-info (atom {:type :log :msg ""}))


;; Notebook

(def empty-notebook
  {:id nil
   :gist nil
   :file-name nil
   :file nil
   :cmds nil
   :position 0})

(defonce current-notebook (atom empty-notebook))

(defn current-command [notebook]
  (let [{:keys [cmds position]} notebook]
    (nth cmds position)))

(defn get-filtered-history []
  (. (apply array
            (map #(:value %)
                 (filter #(and
                            (= (:type %) :input)
                            (or (:essential %)
                                (re-find #"\b(ns|require|def|defn)\b" (:value %))))
                         @history))) join "\n"))
