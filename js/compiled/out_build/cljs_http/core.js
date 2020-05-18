// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5457__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__5457__auto__)){
var req = temp__5457__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (formatted_h){
return (function (p__16787){
var vec__16788 = p__16787;
var k = cljs.core.nth.call(null,vec__16788,(0),null);
var v = cljs.core.nth.call(null,vec__16788,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__16791 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__16791)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__16791)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__16791)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__16791)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__16791)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__16791)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16791)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__16792){
var map__16793 = p__16792;
var map__16793__$1 = ((((!((map__16793 == null)))?(((((map__16793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16793):map__16793);
var request = map__16793__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__16793__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__16793__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__16793__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__16795 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__16795,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__16795,response_type);

G__16795.setTimeoutInterval(timeout);

G__16795.setWithCredentials(send_credentials);

return G__16795;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__16796){
var map__16797 = p__16796;
var map__16797__$1 = ((((!((map__16797 == null)))?(((((map__16797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16797):map__16797);
var request = map__16797__$1;
var request_method = cljs.core.get.call(null,map__16797__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__16797__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__16797__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__16797__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__16797__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__16797__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__3949__auto__ = request_method;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__16797,map__16797__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr,map__16797,map__16797__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_16822 = ((function (channel,request_url,method,headers__$1,xhr,map__16797,map__16797__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});})(channel,request_url,method,headers__$1,xhr,map__16797,map__16797__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__16799_16823 = xhr;
G__16799_16823.setProgressEventsEnabled(true);

G__16799_16823.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_16822,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__16799_16823.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_16822,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__14795__auto___16824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14795__auto___16824,channel,request_url,method,headers__$1,xhr,map__16797,map__16797__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__14796__auto__ = (function (){var switch__14721__auto__ = ((function (c__14795__auto___16824,channel,request_url,method,headers__$1,xhr,map__16797,map__16797__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_16810){
var state_val_16811 = (state_16810[(1)]);
if((state_val_16811 === (1))){
var state_16810__$1 = state_16810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16810__$1,(2),cancel);
} else {
if((state_val_16811 === (2))){
var inst_16801 = (state_16810[(2)]);
var inst_16802 = xhr.isComplete();
var inst_16803 = cljs.core.not.call(null,inst_16802);
var state_16810__$1 = (function (){var statearr_16812 = state_16810;
(statearr_16812[(7)] = inst_16801);

return statearr_16812;
})();
if(inst_16803){
var statearr_16813_16825 = state_16810__$1;
(statearr_16813_16825[(1)] = (3));

} else {
var statearr_16814_16826 = state_16810__$1;
(statearr_16814_16826[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16811 === (3))){
var inst_16805 = xhr.abort();
var state_16810__$1 = state_16810;
var statearr_16815_16827 = state_16810__$1;
(statearr_16815_16827[(2)] = inst_16805);

(statearr_16815_16827[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16811 === (4))){
var state_16810__$1 = state_16810;
var statearr_16816_16828 = state_16810__$1;
(statearr_16816_16828[(2)] = null);

(statearr_16816_16828[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16811 === (5))){
var inst_16808 = (state_16810[(2)]);
var state_16810__$1 = state_16810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16810__$1,inst_16808);
} else {
return null;
}
}
}
}
}
});})(c__14795__auto___16824,channel,request_url,method,headers__$1,xhr,map__16797,map__16797__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__14721__auto__,c__14795__auto___16824,channel,request_url,method,headers__$1,xhr,map__16797,map__16797__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__14722__auto__ = null;
var cljs_http$core$xhr_$_state_machine__14722__auto____0 = (function (){
var statearr_16817 = [null,null,null,null,null,null,null,null];
(statearr_16817[(0)] = cljs_http$core$xhr_$_state_machine__14722__auto__);

(statearr_16817[(1)] = (1));

return statearr_16817;
});
var cljs_http$core$xhr_$_state_machine__14722__auto____1 = (function (state_16810){
while(true){
var ret_value__14723__auto__ = (function (){try{while(true){
var result__14724__auto__ = switch__14721__auto__.call(null,state_16810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14724__auto__;
}
break;
}
}catch (e16818){var ex__14725__auto__ = e16818;
var statearr_16819_16829 = state_16810;
(statearr_16819_16829[(2)] = ex__14725__auto__);


if(cljs.core.seq.call(null,(state_16810[(4)]))){
var statearr_16820_16830 = state_16810;
(statearr_16820_16830[(1)] = cljs.core.first.call(null,(state_16810[(4)])));

} else {
throw ex__14725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16831 = state_16810;
state_16810 = G__16831;
continue;
} else {
return ret_value__14723__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__14722__auto__ = function(state_16810){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__14722__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__14722__auto____1.call(this,state_16810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__14722__auto____0;
cljs_http$core$xhr_$_state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__14722__auto____1;
return cljs_http$core$xhr_$_state_machine__14722__auto__;
})()
;})(switch__14721__auto__,c__14795__auto___16824,channel,request_url,method,headers__$1,xhr,map__16797,map__16797__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__14797__auto__ = (function (){var statearr_16821 = f__14796__auto__.call(null);
(statearr_16821[(6)] = c__14795__auto___16824);

return statearr_16821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14797__auto__);
});})(c__14795__auto___16824,channel,request_url,method,headers__$1,xhr,map__16797,map__16797__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__16832){
var map__16833 = p__16832;
var map__16833__$1 = ((((!((map__16833 == null)))?(((((map__16833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16833):map__16833);
var request = map__16833__$1;
var timeout = cljs.core.get.call(null,map__16833__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__16833__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__16833__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__16833__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_16847 = jsonp.send(null,((function (channel,jsonp,map__16833,map__16833__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__16833,map__16833__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__16833,map__16833__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__16833,map__16833__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_16847], null));

if(cljs.core.truth_(cancel)){
var c__14795__auto___16848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14795__auto___16848,req_16847,channel,jsonp,map__16833,map__16833__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__14796__auto__ = (function (){var switch__14721__auto__ = ((function (c__14795__auto___16848,req_16847,channel,jsonp,map__16833,map__16833__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_16839){
var state_val_16840 = (state_16839[(1)]);
if((state_val_16840 === (1))){
var state_16839__$1 = state_16839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16839__$1,(2),cancel);
} else {
if((state_val_16840 === (2))){
var inst_16836 = (state_16839[(2)]);
var inst_16837 = jsonp.cancel(req_16847);
var state_16839__$1 = (function (){var statearr_16841 = state_16839;
(statearr_16841[(7)] = inst_16836);

return statearr_16841;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16839__$1,inst_16837);
} else {
return null;
}
}
});})(c__14795__auto___16848,req_16847,channel,jsonp,map__16833,map__16833__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__14721__auto__,c__14795__auto___16848,req_16847,channel,jsonp,map__16833,map__16833__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__14722__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__14722__auto____0 = (function (){
var statearr_16842 = [null,null,null,null,null,null,null,null];
(statearr_16842[(0)] = cljs_http$core$jsonp_$_state_machine__14722__auto__);

(statearr_16842[(1)] = (1));

return statearr_16842;
});
var cljs_http$core$jsonp_$_state_machine__14722__auto____1 = (function (state_16839){
while(true){
var ret_value__14723__auto__ = (function (){try{while(true){
var result__14724__auto__ = switch__14721__auto__.call(null,state_16839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14724__auto__;
}
break;
}
}catch (e16843){var ex__14725__auto__ = e16843;
var statearr_16844_16849 = state_16839;
(statearr_16844_16849[(2)] = ex__14725__auto__);


if(cljs.core.seq.call(null,(state_16839[(4)]))){
var statearr_16845_16850 = state_16839;
(statearr_16845_16850[(1)] = cljs.core.first.call(null,(state_16839[(4)])));

} else {
throw ex__14725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16851 = state_16839;
state_16839 = G__16851;
continue;
} else {
return ret_value__14723__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__14722__auto__ = function(state_16839){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__14722__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__14722__auto____1.call(this,state_16839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__14722__auto____0;
cljs_http$core$jsonp_$_state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__14722__auto____1;
return cljs_http$core$jsonp_$_state_machine__14722__auto__;
})()
;})(switch__14721__auto__,c__14795__auto___16848,req_16847,channel,jsonp,map__16833,map__16833__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__14797__auto__ = (function (){var statearr_16846 = f__14796__auto__.call(null);
(statearr_16846[(6)] = c__14795__auto___16848);

return statearr_16846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14797__auto__);
});})(c__14795__auto___16848,req_16847,channel,jsonp,map__16833,map__16833__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__16852){
var map__16853 = p__16852;
var map__16853__$1 = ((((!((map__16853 == null)))?(((((map__16853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16853):map__16853);
var request = map__16853__$1;
var request_method = cljs.core.get.call(null,map__16853__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map
