(ns cljs-browser-repl.router
  (:require [secretary.core :as secretary :refer-macros [defroute]]
            [cljs.reader :refer [read-string]]
            [goog.dom]
            [goog.events]
            [goog.history.EventType :as EventType]
            [cljs-browser-repl.state :as state]
            [cljs-browser-repl.actions.notebook :as notebook]
            [cljs-browser-repl.net.file :as file]
            [cljs-browser-repl.actions.repl :refer [repl-entry!]])
  (:import goog.History))

(secretary/set-config! :prefix "#")

(defonce history (History.))

(defn scroll-top [] (.-scrollY js/window))

(defn set-scroll-top! []
  (let [state (or (.-state js/history) #js {})]
    (aset state "scroll-top" (scroll-top))
    (.replaceState js/history state)))

(defn get-scroll-top []
  (when-let [state (.-state js/history)]
    (aget state "scroll-top")))

(defn handle-url-change! [e]
  #_(when-not (.-isNavigation e)
      (js/window.scrollTo 0 0))
  (secretary/dispatch! (.-token e)))

(defn init []
  (goog.events/listen
    history EventType/NAVIGATE #(handle-url-change! %))
  (.setEnabled history true)
  (let [input (goog.dom/getElement "file-input")]
    (goog.events/listen input goog.events.EventType.CHANGE notebook/from-loaded-file!)))


(defn navigate! [url]
  (.setToken history url))

(defn replace! [url]
  (.replaceToken history url))

(defn get-token []
  (.getToken history))

;; Route definitions

; home
(defroute #"/" []
  (navigate! "/replica/index"))

(defroute "/new" []
  (navigate! "/replica/new"))

(defroute "/gist/:id/file/:file" [id file]
  (notebook/from-gist! id file))

; filesystem
(defroute "/notebook/:id" [id]
  (replace! (str (get-token) "/file/index")))

(defroute "/notebook/:id/file/:file" [id file]
  (notebook/from-filesystem! id file))

(defroute "/replica/:file" [file]
  (notebook/from-filesystem! "replica" file))

;fork
(defroute "/follow/:id/:file/:pos" [id file pos]
  (notebook/from-filesystem! id file pos false))

;position
(defroute "/goto/:pos" [pos]
  (notebook/goto! (read-string pos)))

(defn- cmd! [cmd]
  (repl-entry! (read-string cmd))
  (replace! "/idle"))

;process command
(defroute "/cmd" [query-params]
  (when query-params (cmd! (:c query-params))))

;snapshot
(defroute "/save" [query-params]
  (let [file-name (str (or (:file query-params)
                           (js/prompt "Name:" "my-replication")))]
    (when-not (= file-name "")
      (file/download-object!
        (str (hash-map
               :history @state/history
               :code (mapv #(hash-map :name (. % -name) :value (.getValue (.-doc %))) js/cmDocs)
               :scene (.join (js/dropTextTo js/INS "/ITL/scene get;/ITL/scene/* get x y xorigin yorigin rotatex rotatey rotatez shear scale color penWidth penColor penStyle brushStyle fontSize fontFamily fontStyle fontWeight effect;") "")))
        (str file-name ".edn")))))

(defroute "/hist2CM" [query-params]
  (if (:filter query-params)
    (js/appendToCM (str "\n" (state/get-filtered-history)))
    (js/appendToCM (str "\n" @state/history))))

(defroute "/initRec" [query-params]
  (js/initMediaRecorder (or (not (:onlyAudio query-params))
                            false)))

(defroute "/rscs/:file" [file]
  (js/fromUrlToCM file))


