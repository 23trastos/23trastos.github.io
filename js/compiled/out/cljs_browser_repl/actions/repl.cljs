(ns cljs-browser-repl.actions.repl
  (:refer-clojure :exclude [resolve])
  (:require [cljs-browser-repl.state :as state]
            [cljs-browser-repl.compiler :refer [cljs-read-eval-print!]]
            [replumb.core :refer [error->str]]
            [replumb.repl :refer [current-ns]]
            [clojure.string :refer [blank?]]
            [replica.utils :as utils]
            ))

(defn new-input! [s]
  (reset! state/input s))

(defn repl-entry!
  ([code] (repl-entry! code true true))
  ([code history?] (repl-entry! code history? true))
  ([code history? resp?]
   (when-not (blank? code)
     ; Add just typed command to history
     (when history?
       (swap! state/history state/add-entry (state/to-repl-input code)))
     (cljs-read-eval-print!
       code
       (fn [{:keys [value error] :as ret}]
         (reset! state/current-ns (current-ns))
         ; Add result to history
         (reset! utils/resp ret)
         (swap! state/history state/add-entry
                (if error
                  (state/to-repl-error (error->str error))
                  ;(when-not (some? (re-find #"nil" value))
                  (when resp? (state/to-repl-result value)))))))))
