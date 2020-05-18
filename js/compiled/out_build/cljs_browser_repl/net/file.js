// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_browser_repl.net.file');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljs.pprint');
goog.require('cljs_browser_repl.state');
goog.require('cljs.reader');
goog.require('goog.events');
/**
 * Retrieves a notebook file by id and file name. Returns a channel that will be filled with a clj-http response {:success true :body ...}
 */
cljs_browser_repl.net.file.get_BANG_ = (function cljs_browser_repl$net$file$get_BANG_(id,file_name){
var resp = cljs.core.async.chan.call(null);
var url = ((function (resp){
return (function (p1__20215_SHARP_){
return ["notebooks/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20215_SHARP_)].join('');
});})(resp))
;
var c__14795__auto___20264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14795__auto___20264,resp,url){
return (function (){
var f__14796__auto__ = (function (){var switch__14721__auto__ = ((function (c__14795__auto___20264,resp,url){
return (function (state_20247){
var state_val_20248 = (state_20247[(1)]);
if((state_val_20248 === (7))){
var inst_20234 = (state_20247[(7)]);
var inst_20234__$1 = (state_20247[(2)]);
var inst_20235 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_20234__$1);
var state_20247__$1 = (function (){var statearr_20249 = state_20247;
(statearr_20249[(7)] = inst_20234__$1);

return statearr_20249;
})();
if(cljs.core.truth_(inst_20235)){
var statearr_20250_20265 = state_20247__$1;
(statearr_20250_20265[(1)] = (8));

} else {
var statearr_20251_20266 = state_20247__$1;
(statearr_20251_20266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20248 === (1))){
var inst_20216 = url.call(null,".edn");
var inst_20217 = [new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_20218 = ["application/edn"];
var inst_20219 = cljs.core.PersistentHashMap.fromArrays(inst_20217,inst_20218);
var inst_20220 = cljs_http.client.get.call(null,inst_20216,inst_20219);
var state_20247__$1 = state_20247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20247__$1,(2),inst_20220);
} else {
if((state_val_20248 === (4))){
var inst_20228 = url.call(null,".json");
var inst_20229 = [new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_20230 = ["application/json"];
var inst_20231 = cljs.core.PersistentHashMap.fromArrays(inst_20229,inst_20230);
var inst_20232 = cljs_http.client.get.call(null,inst_20228,inst_20231);
var state_20247__$1 = state_20247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20247__$1,(7),inst_20232);
} else {
if((state_val_20248 === (6))){
var inst_20226 = (state_20247[(2)]);
var state_20247__$1 = state_20247;
var statearr_20252_20267 = state_20247__$1;
(statearr_20252_20267[(2)] = inst_20226);

(statearr_20252_20267[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20248 === (3))){
var inst_20222 = (state_20247[(8)]);
var state_20247__$1 = state_20247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20247__$1,(6),resp,inst_20222);
} else {
if((state_val_20248 === (12))){
var inst_20241 = (state_20247[(2)]);
var state_20247__$1 = state_20247;
var statearr_20253_20268 = state_20247__$1;
(statearr_20253_20268[(2)] = inst_20241);

(statearr_20253_20268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20248 === (2))){
var inst_20222 = (state_20247[(8)]);
var inst_20222__$1 = (state_20247[(2)]);
var inst_20223 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_20222__$1);
var state_20247__$1 = (function (){var statearr_20254 = state_20247;
(statearr_20254[(8)] = inst_20222__$1);

return statearr_20254;
})();
if(cljs.core.truth_(inst_20223)){
var statearr_20255_20269 = state_20247__$1;
(statearr_20255_20269[(1)] = (3));

} else {
var statearr_20256_20270 = state_20247__$1;
(statearr_20256_20270[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20248 === (11))){
var inst_20238 = (state_20247[(2)]);
var state_20247__$1 = state_20247;
var statearr_20257_20271 = state_20247__$1;
(statearr_20257_20271[(2)] = inst_20238);

(statearr_20257_20271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20248 === (9))){
var inst_20222 = (state_20247[(8)]);
var state_20247__$1 = state_20247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20247__$1,(12),resp,inst_20222);
} else {
if((state_val_20248 === (5))){
var inst_20245 = (state_20247[(2)]);
var state_20247__$1 = state_20247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20247__$1,inst_20245);
} else {
if((state_val_20248 === (10))){
var inst_20243 = (state_20247[(2)]);
var state_20247__$1 = state_20247;
var statearr_20258_20272 = state_20247__$1;
(statearr_20258_20272[(2)] = inst_20243);

(statearr_20258_20272[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20248 === (8))){
var inst_20234 = (state_20247[(7)]);
var state_20247__$1 = state_20247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20247__$1,(11),resp,inst_20234);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14795__auto___20264,resp,url))
;
return ((function (switch__14721__auto__,c__14795__auto___20264,resp,url){
return (function() {
var cljs_browser_repl$net$file$get_BANG__$_state_machine__14722__auto__ = null;
var cljs_browser_repl$net$file$get_BANG__$_state_machine__14722__auto____0 = (function (){
var statearr_20259 = [null,null,null,null,null,null,null,null,null];
(statearr_20259[(0)] = cljs_browser_repl$net$file$get_BANG__$_state_machine__14722__auto__);

(statearr_20259[(1)] = (1));

return statearr_20259;
});
var cljs_browser_repl$net$file$get_BANG__$_state_machine__14722__auto____1 = (function (state_20247){
while(true){
var ret_value__14723__auto__ = (function (){try{while(true){
var result__14724__auto__ = switch__14721__auto__.call(null,state_20247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14724__auto__;
}
break;
}
}catch (e20260){var ex__14725__auto__ = e20260;
var statearr_20261_20273 = state_20247;
(statearr_20261_20273[(2)] = ex__14725__auto__);


if(cljs.core.seq.call(null,(state_20247[(4)]))){
var statearr_20262_20274 = state_20247;
(statearr_20262_20274[(1)] = cljs.core.first.call(null,(state_20247[(4)])));

} else {
throw ex__14725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20275 = state_20247;
state_20247 = G__20275;
continue;
} else {
return ret_value__14723__auto__;
}
break;
}
});
cljs_browser_repl$net$file$get_BANG__$_state_machine__14722__auto__ = function(state_20247){
switch(arguments.length){
case 0:
return cljs_browser_repl$net$file$get_BANG__$_state_machine__14722__auto____0.call(this);
case 1:
return cljs_browser_repl$net$file$get_BANG__$_state_machine__14722__auto____1.call(this,state_20247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$net$file$get_BANG__$_state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$net$file$get_BANG__$_state_machine__14722__auto____0;
cljs_browser_repl$net$file$get_BANG__$_state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$net$file$get_BANG__$_state_machine__14722__auto____1;
return cljs_browser_repl$net$file$get_BANG__$_state_machine__14722__auto__;
})()
;})(switch__14721__auto__,c__14795__auto___20264,resp,url))
})();
var state__14797__auto__ = (function (){var statearr_20263 = f__14796__auto__.call(null);
(statearr_20263[(6)] = c__14795__auto___20264);

return statearr_20263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14797__auto__);
});})(c__14795__auto___20264,resp,url))
);


return resp;
});
cljs_browser_repl.net.file.invalid_file = (function cljs_browser_repl$net$file$invalid_file(file,err){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_browser_repl.state.to_repl_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(err),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4462__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_20276_20278 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_20277_20279 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_20276_20278,_STAR_print_fn_STAR_20277_20279,sb__4462__auto__){
return (function (x__4463__auto__){
return sb__4462__auto__.append(x__4463__auto__);
});})(_STAR_print_newline_STAR_20276_20278,_STAR_print_fn_STAR_20277_20279,sb__4462__auto__))
;

try{cljs.pprint.pprint.call(null,file);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_20277_20279;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_20276_20278;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4462__auto__)].join('');
})())].join(''))], null);
});
cljs_browser_repl.net.file.commands_from_string = (function cljs_browser_repl$net$file$commands_from_string(s){
return cljs.reader.read_string.call(null,s);
});
/**
 * Given a file response it will return a list of commands for the repl to run.
 */
cljs_browser_repl.net.file.get_commands = (function cljs_browser_repl$net$file$get_commands(p__20280){
var map__20281 = p__20280;
var map__20281__$1 = ((((!((map__20281 == null)))?(((((map__20281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20281):map__20281);
var file = map__20281__$1;
var success = cljs.core.get.call(null,map__20281__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var body = cljs.core.get.call(null,map__20281__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core.truth_(success)){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,body),String)){
return cljs_browser_repl.net.file.commands_from_string.call(null,body);
} else {
return body;
}
} else {
return cljs_browser_repl.net.file.invalid_file.call(null,file,(new Error("Request failed")));
}
});
cljs_browser_repl.net.file.download_object_BANG_ = (function cljs_browser_repl$net$file$download_object_BANG_(value,export_name){
var data_blob = (new Blob(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null),({"type": "text/edn"})));
var link = document.createElement("a");
link.href = URL.createObjectURL(data_blob);

link.setAttribute("download",export_name);

document.body.appendChild(link);

link.click();

return document.body.removeChild(link);
});

//# sourceMappingURL=file.js.map
