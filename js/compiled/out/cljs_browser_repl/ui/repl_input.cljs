(ns cljs-browser-repl.ui.repl-input
  (:require [reagent.dom :as reagent]
            [clojure.string :as string]
            [cljs-browser-repl.state :as state]
            [cljs-browser-repl.compiler :refer [is-readable?]]
            [cljs-browser-repl.actions.repl :refer [repl-entry! new-input!]]
            [replica.utils :refer [create-command!]]))

(defn resize [node]
  (set! (.. node -style -height) "auto")
  (set! (.. node -style -height) (str (.-scrollHeight node) "px")))

(defn get-val [e] (.. e -target -value))

(defn enter-pressed!
  "When shift+enter adds a new line. When only enter if the input is valid it
  runs the callback function and clears value and triggers the resize. If the
  input is not valid i'll do as if it was a shift+enter"
  [e valid? send-input]
  (let [shift? (.-shiftKey e)]
    (when (and (not shift?) valid?)
      (send-input (string/trim (get-val e)))
      (.preventDefault e)
      (new-input! "")
      )))

(defn- repl-input-raw []
  [:div.repl-input
   [:span.repl-input-pre (str @state/current-ns " =>")]
   [:div.repl-input-post
    [:textarea.repl-input-input
     {:on-key-down (fn [e]
                     (if (.-ctrlKey e)
                       (case (.-key e)
                         "Enter" (create-command! (string/trim (get-val e)))
                         nil))
                     (case (.-key e)
                       "Enter" (enter-pressed! e (is-readable? (get-val e)) repl-entry!)
                       "Escape" (.. e -target blur)
                       nil))
      :on-change #(new-input! (get-val %))
      :placeholder "REPL here. Type any cljs valid code and press ENTER to evaluate"
      :rows 1
      :value @state/input
      }]
    [:span {:class (str "repl-input-msg "
                        (:type @state/repl-info))}
     (:msg @state/repl-info)]]])

(def repl-input
  (with-meta
    repl-input-raw
    {:component-did-update
     (fn [this old-argv]
       (let [input (.querySelector (reagent/dom-node this) ".repl-input-input")]
         (resize input)))}))
