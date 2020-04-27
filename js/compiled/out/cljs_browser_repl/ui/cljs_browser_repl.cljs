(ns cljs-browser-repl.ui.cljs-browser-repl
  (:require [cljs-browser-repl.ui.history :refer [history]]
            [cljs-browser-repl.actions.repl :refer [new-input!]]
            [cljs-browser-repl.actions.notebook :refer [play-notebook!]]
            [cljs-browser-repl.state :as state]
            [goog.events :as events]
            [cljs-browser-repl.router :as router]
            [clojure.string :as string]
            ))

(defn focus-input! []
  (.focus (.querySelector js/document ".repl-input-input")))

(defn cljs-browser-repl-raw []
  [:div.cljs-browser-repl
   [history {:on-event
             (fn [type payload]
               (case type
                 :input (do
                          (new-input! (:value payload))
                          (focus-input!))
                 :continue (play-notebook!)
                 :visit-file
                 (router/navigate!
                   (string/replace (router/get-token)
                                   #"/file/(.*)"
                                   (str "/file/" payload)))
                 ))}
    @state/history]])


(def cljs-browser-repl
  (with-meta
    cljs-browser-repl-raw
    {:component-did-mount
     (fn [this]
       (set! (.-shortcutListener this)
             (fn [e]
               ; Brittle way of managing app key shortcuts :(
               (when-not (= (.. e -target -nodeName) "TEXTAREA")
                 (case (.-keyCode e)
                   ; n
                   78 (play-notebook!)
                   ; i
                   73 (focus-input!)
                   nil))))
       (events/listen js/window "keyup" (.-shortcutListener this)))
     :component-will-unmount
     (fn [this]
       (events/unlisten js/window "keyup" (.-shortcutListener this)))}
    ))
