(ns cljs-browser-repl.net.file
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<! chan]]
            [cljs.pprint :refer [pprint]]
            [cljs-browser-repl.state :as state]
            [cljs.reader :as edn]
            [goog.events :as events]))

(defn get!
  "Retrieves a notebook file by id and file name. Returns a channel that will be filled with a clj-http response {:success true :body ...}"
  [id file-name]
  (let [resp (chan)
        url #(str "notebooks/" id "/" file-name %)]
    (go
      ; Try to get the edn, or the json, or return first failed response
      (let [edn-res (<! (http/get (url ".edn") {:content-type "application/edn"}))]
        (if (:success edn-res)
          (>! resp edn-res)
          (let [json (<! (http/get (url ".json") {:content-type "application/json"}))]
            (if (:success json)
              (>! resp json)
              (>! resp edn-res))))))
    resp))

(defn invalid-file [file err]
  [(state/to-repl-error (str err "\n\n"
                             (with-out-str (pprint file))))])

(defn commands-from-string [s]
  (edn/read-string s))

(defn get-commands
  "Given a file response it will return a list of commands for the repl to run."
  [{:keys [success body] :as file}]
  (if success
    (if (= (type body) js/String)
      (commands-from-string body)
      body)
    (invalid-file file (js/Error. "Request failed"))))

(defn download-object! [value export-name]
        (let [data-blob (js/Blob. [value] #js {:type "text/edn"})
                  link (.createElement js/document "a")]
          (set! (.-href link) (.createObjectURL js/URL data-blob))
          (.setAttribute link "download" export-name)
          (.appendChild (.-body js/document) link)
          (.click link)
          (.removeChild (.-body js/document) link)))
