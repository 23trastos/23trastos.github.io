// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return (v > (0));
} else {
return and__3938__auto__;
}
})())){
return v;
} else {
return null;
}
});
cljs_http.client.acc_param = (function cljs_http$client$acc_param(o,v){
if(cljs.core.coll_QMARK_.call(null,o)){
return cljs.core.conj.call(null,o,v);
} else {
if(!((o == null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,v], null);
} else {
return v;

}
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__20015_SHARP_,p2__20014_SHARP_){
var vec__20016 = clojure.string.split.call(null,p2__20014_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__20016,(0),null);
var v = cljs.core.nth.call(null,vec__20016,(1),null);
return cljs.core.update.call(null,p1__20015_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),cljs_http.client.acc_param,no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__20019_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__20019_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__20020){
var vec__20021 = p__20020;
var k = cljs.core.nth.call(null,vec__20021,(0),null);
var v = cljs.core.nth.call(null,vec__20021,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__20024_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20024_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__3938__auto__){
var and__3938__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__3938__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__5455__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5455__auto__)){
var params = temp__5455__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__20025_SHARP_){
return cljs_http.client.decode_body.call(null,p1__20025_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20032 = arguments.length;
var i__4532__auto___20033 = (0);
while(true){
if((i__4532__auto___20033 < len__4531__auto___20032)){
args__4534__auto__.push((arguments[i__4532__auto___20033]));

var G__20034 = (i__4532__auto___20033 + (1));
i__4532__auto___20033 = G__20034;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__20028){
var vec__20029 = p__20028;
var default_headers = cljs.core.nth.call(null,vec__20029,(0),null);
return ((function (vec__20029,default_headers){
return (function (request){
var temp__5455__auto__ = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var default_headers__$1 = temp__5455__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__20029,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq20026){
var G__20027 = cljs.core.first.call(null,seq20026);
var seq20026__$1 = cljs.core.next.call(null,seq20026);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20027,seq20026__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20041 = arguments.length;
var i__4532__auto___20042 = (0);
while(true){
if((i__4532__auto___20042 < len__4531__auto___20041)){
args__4534__auto__.push((arguments[i__4532__auto___20042]));

var G__20043 = (i__4532__auto___20042 + (1));
i__4532__auto___20042 = G__20043;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__20037){
var vec__20038 = p__20037;
var accept = cljs.core.nth.call(null,vec__20038,(0),null);
return ((function (vec__20038,accept){
return (function (request){
var temp__5455__auto__ = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var accept__$1 = temp__5455__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__20038,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq20035){
var G__20036 = cljs.core.first.call(null,seq20035);
var seq20035__$1 = cljs.core.next.call(null,seq20035);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20036,seq20035__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20050 = arguments.length;
var i__4532__auto___20051 = (0);
while(true){
if((i__4532__auto___20051 < len__4531__auto___20050)){
args__4534__auto__.push((arguments[i__4532__auto___20051]));

var G__20052 = (i__4532__auto___20051 + (1));
i__4532__auto___20051 = G__20052;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__20046){
var vec__20047 = p__20046;
var content_type = cljs.core.nth.call(null,vec__20047,(0),null);
return ((function (vec__20047,content_type){
return (function (request){
var temp__5455__auto__ = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var content_type__$1 = temp__5455__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__20047,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq20044){
var G__20045 = cljs.core.first.call(null,seq20044);
var seq20044__$1 = cljs.core.next.call(null,seq20044);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20045,seq20044__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__5455__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5455__auto__)){
var params = temp__5455__auto__;
var map__20053 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__20053__$1 = ((((!((map__20053 == null)))?(((((map__20053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20053):map__20053);
var encoding = cljs.core.get.call(null,map__20053__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__20053__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__20057 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__20057__$1 = ((((!((map__20057 == null)))?(((((map__20057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20057):map__20057);
var decoding = cljs.core.get.call(null,map__20057__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__20057__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__20057,map__20057__$1,decoding,decoding_opts){
return (function (p1__20055_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__20055_SHARP_,decoding,decoding_opts);
});})(map__20057,map__20057__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__20057,map__20057__$1,decoding,decoding_opts,transit_decode){
return (function (p1__20056_SHARP_){
return cljs_http.client.decode_body.call(null,p1__20056_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__20057,map__20057__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__5455__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5455__auto__)){
var params = temp__5455__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__20059_SHARP_){
return cljs_http.client.decode_body.call(null,p1__20059_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__20060){
var map__20061 = p__20060;
var map__20061__$1 = ((((!((map__20061 == null)))?(((((map__20061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20061):map__20061);
var req = map__20061__$1;
var query_params = cljs.core.get.call(null,map__20061__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__20063){
var map__20064 = p__20063;
var map__20064__$1 = ((((!((map__20064 == null)))?(((((map__20064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20064):map__20064);
var request = map__20064__$1;
var form_params = cljs.core.get.call(null,map__20064__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__20064__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__20064__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__3938__auto__ = form_params;
if(cljs.core.truth_(and__3938__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__3938__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__20066_20076 = cljs.core.seq.call(null,params);
var chunk__20067_20077 = null;
var count__20068_20078 = (0);
var i__20069_20079 = (0);
while(true){
if((i__20069_20079 < count__20068_20078)){
var vec__20070_20080 = cljs.core._nth.call(null,chunk__20067_20077,i__20069_20079);
var k_20081 = cljs.core.nth.call(null,vec__20070_20080,(0),null);
var v_20082 = cljs.core.nth.call(null,vec__20070_20080,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_20082)){
form_data.append(cljs.core.name.call(null,k_20081),cljs.core.first.call(null,v_20082),cljs.core.second.call(null,v_20082));
} else {
form_data.append(cljs.core.name.call(null,k_20081),v_20082);
}


var G__20083 = seq__20066_20076;
var G__20084 = chunk__20067_20077;
var G__20085 = count__20068_20078;
var G__20086 = (i__20069_20079 + (1));
seq__20066_20076 = G__20083;
chunk__20067_20077 = G__20084;
count__20068_20078 = G__20085;
i__20069_20079 = G__20086;
continue;
} else {
var temp__5457__auto___20087 = cljs.core.seq.call(null,seq__20066_20076);
if(temp__5457__auto___20087){
var seq__20066_20088__$1 = temp__5457__auto___20087;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20066_20088__$1)){
var c__4351__auto___20089 = cljs.core.chunk_first.call(null,seq__20066_20088__$1);
var G__20090 = cljs.core.chunk_rest.call(null,seq__20066_20088__$1);
var G__20091 = c__4351__auto___20089;
var G__20092 = cljs.core.count.call(null,c__4351__auto___20089);
var G__20093 = (0);
seq__20066_20076 = G__20090;
chunk__20067_20077 = G__20091;
count__20068_20078 = G__20092;
i__20069_20079 = G__20093;
continue;
} else {
var vec__20073_20094 = cljs.core.first.call(null,seq__20066_20088__$1);
var k_20095 = cljs.core.nth.call(null,vec__20073_20094,(0),null);
var v_20096 = cljs.core.nth.call(null,vec__20073_20094,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_20096)){
form_data.append(cljs.core.name.call(null,k_20095),cljs.core.first.call(null,v_20096),cljs.core.second.call(null,v_20096));
} else {
form_data.append(cljs.core.name.call(null,k_20095),v_20096);
}


var G__20097 = cljs.core.next.call(null,seq__20066_20088__$1);
var G__20098 = null;
var G__20099 = (0);
var G__20100 = (0);
seq__20066_20076 = G__20097;
chunk__20067_20077 = G__20098;
count__20068_20078 = G__20099;
i__20069_20079 = G__20100;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__20101){
var map__20102 = p__20101;
var map__20102__$1 = ((((!((map__20102 == null)))?(((((map__20102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20102):map__20102);
var request = map__20102__$1;
var multipart_params = cljs.core.get.call(null,map__20102__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__20102__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__3938__auto__ = multipart_params;
if(cljs.core.truth_(and__3938__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__3938__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__5455__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5455__auto__)){
var m = temp__5455__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__20104_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__20104_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__20106){
var map__20107 = p__20106;
var map__20107__$1 = ((((!((map__20107 == null)))?(((((map__20107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20107):map__20107);
var req = map__20107__$1;
var query_params = cljs.core.get.call(null,map__20107__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__5455__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__5455__auto__)){
var spec = temp__5455__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__5455__auto__,map__20107,map__20107__$1,req,query_params){
return (function (p1__20105_SHARP_){
return cljs.core.merge.call(null,p1__20105_SHARP_,query_params);
});})(spec,temp__5455__auto__,map__20107,map__20107__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20115 = arguments.length;
var i__4532__auto___20116 = (0);
while(true){
if((i__4532__auto___20116 < len__4531__auto___20115)){
args__4534__auto__.push((arguments[i__4532__auto___20116]));

var G__20117 = (i__4532__auto___20116 + (1));
i__4532__auto___20116 = G__20117;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__20111){
var vec__20112 = p__20111;
var credentials = cljs.core.nth.call(null,vec__20112,(0),null);
return ((function (vec__20112,credentials){
return (function (req){
var credentials__$1 = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__20112,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq20109){
var G__20110 = cljs.core.first.call(null,seq20109);
var seq20109__$1 = cljs.core.next.call(null,seq20109);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20110,seq20109__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__5455__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5455__auto__)){
var oauth_token = temp__5455__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__5455__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5455__auto__)){
var custom_channel = temp__5455__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20124 = arguments.length;
var i__4532__auto___20125 = (0);
while(true){
if((i__4532__auto___20125 < len__4531__auto___20124)){
args__4534__auto__.push((arguments[i__4532__auto___20125]));

var G__20126 = (i__4532__auto___20125 + (1));
i__4532__auto___20125 = G__20126;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20120){
var vec__20121 = p__20120;
var req = cljs.core.nth.call(null,vec__20121,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.delete$.cljs$lang$applyTo = (function (seq20118){
var G__20119 = cljs.core.first.call(null,seq20118);
var seq20118__$1 = cljs.core.next.call(null,seq20118);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20119,seq20118__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20133 = arguments.length;
var i__4532__auto___20134 = (0);
while(true){
if((i__4532__auto___20134 < len__4531__auto___20133)){
args__4534__auto__.push((arguments[i__4532__auto___20134]));

var G__20135 = (i__4532__auto___20134 + (1));
i__4532__auto___20134 = G__20135;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20129){
var vec__20130 = p__20129;
var req = cljs.core.nth.call(null,vec__20130,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.get.cljs$lang$applyTo = (function (seq20127){
var G__20128 = cljs.core.first.call(null,seq20127);
var seq20127__$1 = cljs.core.next.call(null,seq20127);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20128,seq20127__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20142 = arguments.length;
var i__4532__auto___20143 = (0);
while(true){
if((i__4532__auto___20143 < len__4531__auto___20142)){
args__4534__auto__.push((arguments[i__4532__auto___20143]));

var G__20144 = (i__4532__auto___20143 + (1));
i__4532__auto___20143 = G__20144;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20138){
var vec__20139 = p__20138;
var req = cljs.core.nth.call(null,vec__20139,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.head.cljs$lang$applyTo = (function (seq20136){
var G__20137 = cljs.core.first.call(null,seq20136);
var seq20136__$1 = cljs.core.next.call(null,seq20136);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20137,seq20136__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20151 = arguments.length;
var i__4532__auto___20152 = (0);
while(true){
if((i__4532__auto___20152 < len__4531__auto___20151)){
args__4534__auto__.push((arguments[i__4532__auto___20152]));

var G__20153 = (i__4532__auto___20152 + (1));
i__4532__auto___20152 = G__20153;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20147){
var vec__20148 = p__20147;
var req = cljs.core.nth.call(null,vec__20148,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq20145){
var G__20146 = cljs.core.first.call(null,seq20145);
var seq20145__$1 = cljs.core.next.call(null,seq20145);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20146,seq20145__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20160 = arguments.length;
var i__4532__auto___20161 = (0);
while(true){
if((i__4532__auto___20161 < len__4531__auto___20160)){
args__4534__auto__.push((arguments[i__4532__auto___20161]));

var G__20162 = (i__4532__auto___20161 + (1));
i__4532__auto___20161 = G__20162;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20156){
var vec__20157 = p__20156;
var req = cljs.core.nth.call(null,vec__20157,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.move.cljs$lang$applyTo = (function (seq20154){
var G__20155 = cljs.core.first.call(null,seq20154);
var seq20154__$1 = cljs.core.next.call(null,seq20154);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20155,seq20154__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20169 = arguments.length;
var i__4532__auto___20170 = (0);
while(true){
if((i__4532__auto___20170 < len__4531__auto___20169)){
args__4534__auto__.push((arguments[i__4532__auto___20170]));

var G__20171 = (i__4532__auto___20170 + (1));
i__4532__auto___20170 = G__20171;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20165){
var vec__20166 = p__20165;
var req = cljs.core.nth.call(null,vec__20166,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.options.cljs$lang$applyTo = (function (seq20163){
var G__20164 = cljs.core.first.call(null,seq20163);
var seq20163__$1 = cljs.core.next.call(null,seq20163);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20164,seq20163__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20178 = arguments.length;
var i__4532__auto___20179 = (0);
while(true){
if((i__4532__auto___20179 < len__4531__auto___20178)){
args__4534__auto__.push((arguments[i__4532__auto___20179]));

var G__20180 = (i__4532__auto___20179 + (1));
i__4532__auto___20179 = G__20180;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20174){
var vec__20175 = p__20174;
var req = cljs.core.nth.call(null,vec__20175,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.patch.cljs$lang$applyTo = (function (seq20172){
var G__20173 = cljs.core.first.call(null,seq20172);
var seq20172__$1 = cljs.core.next.call(null,seq20172);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20173,seq20172__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20187 = arguments.length;
var i__4532__auto___20188 = (0);
while(true){
if((i__4532__auto___20188 < len__4531__auto___20187)){
args__4534__auto__.push((arguments[i__4532__auto___20188]));

var G__20189 = (i__4532__auto___20188 + (1));
i__4532__auto___20188 = G__20189;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20183){
var vec__20184 = p__20183;
var req = cljs.core.nth.call(null,vec__20184,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.post.cljs$lang$applyTo = (function (seq20181){
var G__20182 = cljs.core.first.call(null,seq20181);
var seq20181__$1 = cljs.core.next.call(null,seq20181);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20182,seq20181__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__4534__auto__ = [];
var len__4531__auto___20196 = arguments.length;
var i__4532__auto___20197 = (0);
while(true){
if((i__4532__auto___20197 < len__4531__auto___20196)){
args__4534__auto__.push((arguments[i__4532__auto___20197]));

var G__20198 = (i__4532__auto___20197 + (1));
i__4532__auto___20197 = G__20198;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20192){
var vec__20193 = p__20192;
var req = cljs.core.nth.call(null,vec__20193,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.put.cljs$lang$applyTo = (function (seq20190){
var G__20191 = cljs.core.first.call(null,seq20190);
var seq20190__$1 = cljs.core.next.call(null,seq20190);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20191,seq20190__$1);
});


//# sourceMappingURL=client.js.map
