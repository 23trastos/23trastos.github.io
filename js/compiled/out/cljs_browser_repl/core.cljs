(ns ^:figwheel-always ^:figwheel-hooks cljs-browser-repl.core
  (:require [reagent.dom :as reagent]
            [goog.events]
            [cljs-browser-repl.actions.repl :refer [repl-entry!]]
            [cljs-browser-repl.ui.cljs-browser-repl :refer [cljs-browser-repl]]
            [cljs-browser-repl.ui.repl-input :refer [repl-input]]
            [cljs-browser-repl.router :as router]
            [replica.core]))

(enable-console-print!)

(defn render! []
  (reagent/render [cljs-browser-repl]
                  (. js/document (getElementById "app")))
  (reagent/render [repl-input]
                  (. js/document (getElementById "repl-input"))))

(defonce initialize-repl-ns
  (do
    ; Init compiler env
    (repl-entry! "(ns cljs.user)" false false)
    ; First render
    (render!)
    ; Init router
    (router/init)
    ))


(defn ^:after-load on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  (render!)
  (router/replace! (router/get-token)))
