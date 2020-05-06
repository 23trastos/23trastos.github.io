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
return (function (p1__23241_SHARP_){
return ["notebooks/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23241_SHARP_)].join('');
});})(resp))
;
var c__11553__auto___23290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11553__auto___23290,resp,url){
return (function (){
var f__11554__auto__ = (function (){var switch__11530__auto__ = ((function (c__11553__auto___23290,resp,url){
return (function (state_23273){
var state_val_23274 = (state_23273[(1)]);
if((state_val_23274 === (7))){
var inst_23260 = (state_23273[(7)]);
var inst_23260__$1 = (state_23273[(2)]);
var inst_23261 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_23260__$1);
var state_23273__$1 = (function (){var statearr_23275 = state_23273;
(statearr_23275[(7)] = inst_23260__$1);

return statearr_23275;
})();
if(cljs.core.truth_(inst_23261)){
var statearr_23276_23291 = state_23273__$1;
(statearr_23276_23291[(1)] = (8));

} else {
var statearr_23277_23292 = state_23273__$1;
(statearr_23277_23292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23274 === (1))){
var inst_23242 = url.call(null,".edn");
var inst_23243 = [new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_23244 = ["application/edn"];
var inst_23245 = cljs.core.PersistentHashMap.fromArrays(inst_23243,inst_23244);
var inst_23246 = cljs_http.client.get.call(null,inst_23242,inst_23245);
var state_23273__$1 = state_23273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23273__$1,(2),inst_23246);
} else {
if((state_val_23274 === (4))){
var inst_23254 = url.call(null,".json");
var inst_23255 = [new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_23256 = ["application/json"];
var inst_23257 = cljs.core.PersistentHashMap.fromArrays(inst_23255,inst_23256);
var inst_23258 = cljs_http.client.get.call(null,inst_23254,inst_23257);
var state_23273__$1 = state_23273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23273__$1,(7),inst_23258);
} else {
if((state_val_23274 === (6))){
var inst_23252 = (state_23273[(2)]);
var state_23273__$1 = state_23273;
var statearr_23278_23293 = state_23273__$1;
(statearr_23278_23293[(2)] = inst_23252);

(statearr_23278_23293[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23274 === (3))){
var inst_23248 = (state_23273[(8)]);
var state_23273__$1 = state_23273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23273__$1,(6),resp,inst_23248);
} else {
if((state_val_23274 === (12))){
var inst_23267 = (state_23273[(2)]);
var state_23273__$1 = state_23273;
var statearr_23279_23294 = state_23273__$1;
(statearr_23279_23294[(2)] = inst_23267);

(statearr_23279_23294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23274 === (2))){
var inst_23248 = (state_23273[(8)]);
var inst_23248__$1 = (state_23273[(2)]);
var inst_23249 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_23248__$1);
var state_23273__$1 = (function (){var statearr_23280 = state_23273;
(statearr_23280[(8)] = inst_23248__$1);

return statearr_23280;
})();
if(cljs.core.truth_(inst_23249)){
var statearr_23281_23295 = state_23273__$1;
(statearr_23281_23295[(1)] = (3));

} else {
var statearr_23282_23296 = state_23273__$1;
(statearr_23282_23296[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23274 === (11))){
var inst_23264 = (state_23273[(2)]);
var state_23273__$1 = state_23273;
var statearr_23283_23297 = state_23273__$1;
(statearr_23283_23297[(2)] = inst_23264);

(statearr_23283_23297[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23274 === (9))){
var inst_23248 = (state_23273[(8)]);
var state_23273__$1 = state_23273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23273__$1,(12),resp,inst_23248);
} else {
if((state_val_23274 === (5))){
var inst_23271 = (state_23273[(2)]);
var state_23273__$1 = state_23273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23273__$1,inst_23271);
} else {
if((state_val_23274 === (10))){
var inst_23269 = (state_23273[(2)]);
var state_23273__$1 = state_23273;
var statearr_23284_23298 = state_23273__$1;
(statearr_23284_23298[(2)] = inst_23269);

(statearr_23284_23298[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23274 === (8))){
var inst_23260 = (state_23273[(7)]);
var state_23273__$1 = state_23273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23273__$1,(11),resp,inst_23260);
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
});})(c__11553__auto___23290,resp,url))
;
return ((function (switch__11530__auto__,c__11553__auto___23290,resp,url){
return (function() {
var cljs_browser_repl$net$file$get_BANG__$_state_machine__11531__auto__ = null;
var cljs_browser_repl$net$file$get_BANG__$_state_machine__11531__auto____0 = (function (){
var statearr_23285 = [null,null,null,null,null,null,null,null,null];
(statearr_23285[(0)] = cljs_browser_repl$net$file$get_BANG__$_state_machine__11531__auto__);

(statearr_23285[(1)] = (1));

return statearr_23285;
});
var cljs_browser_repl$net$file$get_BANG__$_state_machine__11531__auto____1 = (function (state_23273){
while(true){
var ret_value__11532__auto__ = (function (){try{while(true){
var result__11533__auto__ = switch__11530__auto__.call(null,state_23273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11533__auto__;
}
break;
}
}catch (e23286){var ex__11534__auto__ = e23286;
var statearr_23287_23299 = state_23273;
(statearr_23287_23299[(2)] = ex__11534__auto__);


if(cljs.core.seq.call(null,(state_23273[(4)]))){
var statearr_23288_23300 = state_23273;
(statearr_23288_23300[(1)] = cljs.core.first.call(null,(state_23273[(4)])));

} else {
throw ex__11534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23301 = state_23273;
state_23273 = G__23301;
continue;
} else {
return ret_value__11532__auto__;
}
break;
}
});
cljs_browser_repl$net$file$get_BANG__$_state_machine__11531__auto__ = function(state_23273){
switch(arguments.length){
case 0:
return cljs_browser_repl$net$file$get_BANG__$_state_machine__11531__auto____0.call(this);
case 1:
return cljs_browser_repl$net$file$get_BANG__$_state_machine__11531__auto____1.call(this,state_23273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$net$file$get_BANG__$_state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$net$file$get_BANG__$_state_machine__11531__auto____0;
cljs_browser_repl$net$file$get_BANG__$_state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$net$file$get_BANG__$_state_machine__11531__auto____1;
return cljs_browser_repl$net$file$get_BANG__$_state_machine__11531__auto__;
})()
;})(switch__11530__auto__,c__11553__auto___23290,resp,url))
})();
var state__11555__auto__ = (function (){var statearr_23289 = f__11554__auto__.call(null);
(statearr_23289[(6)] = c__11553__auto___23290);

return statearr_23289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11555__auto__);
});})(c__11553__auto___23290,resp,url))
);


return resp;
});
cljs_browser_repl.net.file.invalid_file = (function cljs_browser_repl$net$file$invalid_file(file,err){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_browser_repl.state.to_repl_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(err),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4462__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_23302_23304 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_23303_23305 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_23302_23304,_STAR_print_fn_STAR_23303_23305,sb__4462__auto__){
return (function (x__4463__auto__){
return sb__4462__auto__.append(x__4463__auto__);
});})(_STAR_print_newline_STAR_23302_23304,_STAR_print_fn_STAR_23303_23305,sb__4462__auto__))
;

try{cljs.pprint.pprint.call(null,file);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23303_23305;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23302_23304;
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
cljs_browser_repl.net.file.get_commands = (function cljs_browser_repl$net$file$get_commands(p__23306){
var map__23307 = p__23306;
var map__23307__$1 = ((((!((map__23307 == null)))?(((((map__23307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23307):map__23307);
var file = map__23307__$1;
var success = cljs.core.get.call(null,map__23307__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var body = cljs.core.get.call(null,map__23307__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
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
