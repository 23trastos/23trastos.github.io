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
return (function (p1__13069_SHARP_){
return ["notebooks/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13069_SHARP_)].join('');
});})(resp))
;
var c__11540__auto___13118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11540__auto___13118,resp,url){
return (function (){
var f__11541__auto__ = (function (){var switch__11517__auto__ = ((function (c__11540__auto___13118,resp,url){
return (function (state_13101){
var state_val_13102 = (state_13101[(1)]);
if((state_val_13102 === (7))){
var inst_13088 = (state_13101[(7)]);
var inst_13088__$1 = (state_13101[(2)]);
var inst_13089 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_13088__$1);
var state_13101__$1 = (function (){var statearr_13103 = state_13101;
(statearr_13103[(7)] = inst_13088__$1);

return statearr_13103;
})();
if(cljs.core.truth_(inst_13089)){
var statearr_13104_13119 = state_13101__$1;
(statearr_13104_13119[(1)] = (8));

} else {
var statearr_13105_13120 = state_13101__$1;
(statearr_13105_13120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13102 === (1))){
var inst_13070 = url.call(null,".edn");
var inst_13071 = [new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_13072 = ["application/edn"];
var inst_13073 = cljs.core.PersistentHashMap.fromArrays(inst_13071,inst_13072);
var inst_13074 = cljs_http.client.get.call(null,inst_13070,inst_13073);
var state_13101__$1 = state_13101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13101__$1,(2),inst_13074);
} else {
if((state_val_13102 === (4))){
var inst_13082 = url.call(null,".json");
var inst_13083 = [new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_13084 = ["application/json"];
var inst_13085 = cljs.core.PersistentHashMap.fromArrays(inst_13083,inst_13084);
var inst_13086 = cljs_http.client.get.call(null,inst_13082,inst_13085);
var state_13101__$1 = state_13101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13101__$1,(7),inst_13086);
} else {
if((state_val_13102 === (6))){
var inst_13080 = (state_13101[(2)]);
var state_13101__$1 = state_13101;
var statearr_13106_13121 = state_13101__$1;
(statearr_13106_13121[(2)] = inst_13080);

(statearr_13106_13121[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13102 === (3))){
var inst_13076 = (state_13101[(8)]);
var state_13101__$1 = state_13101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13101__$1,(6),resp,inst_13076);
} else {
if((state_val_13102 === (12))){
var inst_13095 = (state_13101[(2)]);
var state_13101__$1 = state_13101;
var statearr_13107_13122 = state_13101__$1;
(statearr_13107_13122[(2)] = inst_13095);

(statearr_13107_13122[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13102 === (2))){
var inst_13076 = (state_13101[(8)]);
var inst_13076__$1 = (state_13101[(2)]);
var inst_13077 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_13076__$1);
var state_13101__$1 = (function (){var statearr_13108 = state_13101;
(statearr_13108[(8)] = inst_13076__$1);

return statearr_13108;
})();
if(cljs.core.truth_(inst_13077)){
var statearr_13109_13123 = state_13101__$1;
(statearr_13109_13123[(1)] = (3));

} else {
var statearr_13110_13124 = state_13101__$1;
(statearr_13110_13124[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13102 === (11))){
var inst_13092 = (state_13101[(2)]);
var state_13101__$1 = state_13101;
var statearr_13111_13125 = state_13101__$1;
(statearr_13111_13125[(2)] = inst_13092);

(statearr_13111_13125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13102 === (9))){
var inst_13076 = (state_13101[(8)]);
var state_13101__$1 = state_13101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13101__$1,(12),resp,inst_13076);
} else {
if((state_val_13102 === (5))){
var inst_13099 = (state_13101[(2)]);
var state_13101__$1 = state_13101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13101__$1,inst_13099);
} else {
if((state_val_13102 === (10))){
var inst_13097 = (state_13101[(2)]);
var state_13101__$1 = state_13101;
var statearr_13112_13126 = state_13101__$1;
(statearr_13112_13126[(2)] = inst_13097);

(statearr_13112_13126[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13102 === (8))){
var inst_13088 = (state_13101[(7)]);
var state_13101__$1 = state_13101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13101__$1,(11),resp,inst_13088);
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
});})(c__11540__auto___13118,resp,url))
;
return ((function (switch__11517__auto__,c__11540__auto___13118,resp,url){
return (function() {
var cljs_browser_repl$net$file$get_BANG__$_state_machine__11518__auto__ = null;
var cljs_browser_repl$net$file$get_BANG__$_state_machine__11518__auto____0 = (function (){
var statearr_13113 = [null,null,null,null,null,null,null,null,null];
(statearr_13113[(0)] = cljs_browser_repl$net$file$get_BANG__$_state_machine__11518__auto__);

(statearr_13113[(1)] = (1));

return statearr_13113;
});
var cljs_browser_repl$net$file$get_BANG__$_state_machine__11518__auto____1 = (function (state_13101){
while(true){
var ret_value__11519__auto__ = (function (){try{while(true){
var result__11520__auto__ = switch__11517__auto__.call(null,state_13101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11520__auto__;
}
break;
}
}catch (e13114){var ex__11521__auto__ = e13114;
var statearr_13115_13127 = state_13101;
(statearr_13115_13127[(2)] = ex__11521__auto__);


if(cljs.core.seq.call(null,(state_13101[(4)]))){
var statearr_13116_13128 = state_13101;
(statearr_13116_13128[(1)] = cljs.core.first.call(null,(state_13101[(4)])));

} else {
throw ex__11521__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13129 = state_13101;
state_13101 = G__13129;
continue;
} else {
return ret_value__11519__auto__;
}
break;
}
});
cljs_browser_repl$net$file$get_BANG__$_state_machine__11518__auto__ = function(state_13101){
switch(arguments.length){
case 0:
return cljs_browser_repl$net$file$get_BANG__$_state_machine__11518__auto____0.call(this);
case 1:
return cljs_browser_repl$net$file$get_BANG__$_state_machine__11518__auto____1.call(this,state_13101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$net$file$get_BANG__$_state_machine__11518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$net$file$get_BANG__$_state_machine__11518__auto____0;
cljs_browser_repl$net$file$get_BANG__$_state_machine__11518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$net$file$get_BANG__$_state_machine__11518__auto____1;
return cljs_browser_repl$net$file$get_BANG__$_state_machine__11518__auto__;
})()
;})(switch__11517__auto__,c__11540__auto___13118,resp,url))
})();
var state__11542__auto__ = (function (){var statearr_13117 = f__11541__auto__.call(null);
(statearr_13117[(6)] = c__11540__auto___13118);

return statearr_13117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11542__auto__);
});})(c__11540__auto___13118,resp,url))
);


return resp;
});
cljs_browser_repl.net.file.invalid_file = (function cljs_browser_repl$net$file$invalid_file(file,err){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_browser_repl.state.to_repl_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(err),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4462__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13130_13132 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13131_13133 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13130_13132,_STAR_print_fn_STAR_13131_13133,sb__4462__auto__){
return (function (x__4463__auto__){
return sb__4462__auto__.append(x__4463__auto__);
});})(_STAR_print_newline_STAR_13130_13132,_STAR_print_fn_STAR_13131_13133,sb__4462__auto__))
;

try{cljs.pprint.pprint.call(null,file);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13131_13133;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13130_13132;
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
cljs_browser_repl.net.file.get_commands = (function cljs_browser_repl$net$file$get_commands(p__13134){
var map__13135 = p__13134;
var map__13135__$1 = ((((!((map__13135 == null)))?(((((map__13135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13135):map__13135);
var file = map__13135__$1;
var success = cljs.core.get.call(null,map__13135__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var body = cljs.core.get.call(null,map__13135__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
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
