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
return (function (p1__11637_SHARP_){
return ["notebooks/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11637_SHARP_)].join('');
});})(resp))
;
var c__11545__auto___11686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11545__auto___11686,resp,url){
return (function (){
var f__11546__auto__ = (function (){var switch__11522__auto__ = ((function (c__11545__auto___11686,resp,url){
return (function (state_11669){
var state_val_11670 = (state_11669[(1)]);
if((state_val_11670 === (7))){
var inst_11656 = (state_11669[(7)]);
var inst_11656__$1 = (state_11669[(2)]);
var inst_11657 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_11656__$1);
var state_11669__$1 = (function (){var statearr_11671 = state_11669;
(statearr_11671[(7)] = inst_11656__$1);

return statearr_11671;
})();
if(cljs.core.truth_(inst_11657)){
var statearr_11672_11687 = state_11669__$1;
(statearr_11672_11687[(1)] = (8));

} else {
var statearr_11673_11688 = state_11669__$1;
(statearr_11673_11688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11670 === (1))){
var inst_11638 = url.call(null,".edn");
var inst_11639 = [new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_11640 = ["application/edn"];
var inst_11641 = cljs.core.PersistentHashMap.fromArrays(inst_11639,inst_11640);
var inst_11642 = cljs_http.client.get.call(null,inst_11638,inst_11641);
var state_11669__$1 = state_11669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11669__$1,(2),inst_11642);
} else {
if((state_val_11670 === (4))){
var inst_11650 = url.call(null,".json");
var inst_11651 = [new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_11652 = ["application/json"];
var inst_11653 = cljs.core.PersistentHashMap.fromArrays(inst_11651,inst_11652);
var inst_11654 = cljs_http.client.get.call(null,inst_11650,inst_11653);
var state_11669__$1 = state_11669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11669__$1,(7),inst_11654);
} else {
if((state_val_11670 === (6))){
var inst_11648 = (state_11669[(2)]);
var state_11669__$1 = state_11669;
var statearr_11674_11689 = state_11669__$1;
(statearr_11674_11689[(2)] = inst_11648);

(statearr_11674_11689[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11670 === (3))){
var inst_11644 = (state_11669[(8)]);
var state_11669__$1 = state_11669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11669__$1,(6),resp,inst_11644);
} else {
if((state_val_11670 === (12))){
var inst_11663 = (state_11669[(2)]);
var state_11669__$1 = state_11669;
var statearr_11675_11690 = state_11669__$1;
(statearr_11675_11690[(2)] = inst_11663);

(statearr_11675_11690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11670 === (2))){
var inst_11644 = (state_11669[(8)]);
var inst_11644__$1 = (state_11669[(2)]);
var inst_11645 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_11644__$1);
var state_11669__$1 = (function (){var statearr_11676 = state_11669;
(statearr_11676[(8)] = inst_11644__$1);

return statearr_11676;
})();
if(cljs.core.truth_(inst_11645)){
var statearr_11677_11691 = state_11669__$1;
(statearr_11677_11691[(1)] = (3));

} else {
var statearr_11678_11692 = state_11669__$1;
(statearr_11678_11692[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11670 === (11))){
var inst_11660 = (state_11669[(2)]);
var state_11669__$1 = state_11669;
var statearr_11679_11693 = state_11669__$1;
(statearr_11679_11693[(2)] = inst_11660);

(statearr_11679_11693[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11670 === (9))){
var inst_11644 = (state_11669[(8)]);
var state_11669__$1 = state_11669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11669__$1,(12),resp,inst_11644);
} else {
if((state_val_11670 === (5))){
var inst_11667 = (state_11669[(2)]);
var state_11669__$1 = state_11669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11669__$1,inst_11667);
} else {
if((state_val_11670 === (10))){
var inst_11665 = (state_11669[(2)]);
var state_11669__$1 = state_11669;
var statearr_11680_11694 = state_11669__$1;
(statearr_11680_11694[(2)] = inst_11665);

(statearr_11680_11694[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11670 === (8))){
var inst_11656 = (state_11669[(7)]);
var state_11669__$1 = state_11669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11669__$1,(11),resp,inst_11656);
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
});})(c__11545__auto___11686,resp,url))
;
return ((function (switch__11522__auto__,c__11545__auto___11686,resp,url){
return (function() {
var cljs_browser_repl$net$file$get_BANG__$_state_machine__11523__auto__ = null;
var cljs_browser_repl$net$file$get_BANG__$_state_machine__11523__auto____0 = (function (){
var statearr_11681 = [null,null,null,null,null,null,null,null,null];
(statearr_11681[(0)] = cljs_browser_repl$net$file$get_BANG__$_state_machine__11523__auto__);

(statearr_11681[(1)] = (1));

return statearr_11681;
});
var cljs_browser_repl$net$file$get_BANG__$_state_machine__11523__auto____1 = (function (state_11669){
while(true){
var ret_value__11524__auto__ = (function (){try{while(true){
var result__11525__auto__ = switch__11522__auto__.call(null,state_11669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11525__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11525__auto__;
}
break;
}
}catch (e11682){var ex__11526__auto__ = e11682;
var statearr_11683_11695 = state_11669;
(statearr_11683_11695[(2)] = ex__11526__auto__);


if(cljs.core.seq.call(null,(state_11669[(4)]))){
var statearr_11684_11696 = state_11669;
(statearr_11684_11696[(1)] = cljs.core.first.call(null,(state_11669[(4)])));

} else {
throw ex__11526__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11697 = state_11669;
state_11669 = G__11697;
continue;
} else {
return ret_value__11524__auto__;
}
break;
}
});
cljs_browser_repl$net$file$get_BANG__$_state_machine__11523__auto__ = function(state_11669){
switch(arguments.length){
case 0:
return cljs_browser_repl$net$file$get_BANG__$_state_machine__11523__auto____0.call(this);
case 1:
return cljs_browser_repl$net$file$get_BANG__$_state_machine__11523__auto____1.call(this,state_11669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$net$file$get_BANG__$_state_machine__11523__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$net$file$get_BANG__$_state_machine__11523__auto____0;
cljs_browser_repl$net$file$get_BANG__$_state_machine__11523__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$net$file$get_BANG__$_state_machine__11523__auto____1;
return cljs_browser_repl$net$file$get_BANG__$_state_machine__11523__auto__;
})()
;})(switch__11522__auto__,c__11545__auto___11686,resp,url))
})();
var state__11547__auto__ = (function (){var statearr_11685 = f__11546__auto__.call(null);
(statearr_11685[(6)] = c__11545__auto___11686);

return statearr_11685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11547__auto__);
});})(c__11545__auto___11686,resp,url))
);


return resp;
});
cljs_browser_repl.net.file.invalid_file = (function cljs_browser_repl$net$file$invalid_file(file,err){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_browser_repl.state.to_repl_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(err),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4462__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_11698_11700 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_11699_11701 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_11698_11700,_STAR_print_fn_STAR_11699_11701,sb__4462__auto__){
return (function (x__4463__auto__){
return sb__4462__auto__.append(x__4463__auto__);
});})(_STAR_print_newline_STAR_11698_11700,_STAR_print_fn_STAR_11699_11701,sb__4462__auto__))
;

try{cljs.pprint.pprint.call(null,file);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11699_11701;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_11698_11700;
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
cljs_browser_repl.net.file.get_commands = (function cljs_browser_repl$net$file$get_commands(p__11702){
var map__11703 = p__11702;
var map__11703__$1 = ((((!((map__11703 == null)))?(((((map__11703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11703):map__11703);
var file = map__11703__$1;
var success = cljs.core.get.call(null,map__11703__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var body = cljs.core.get.call(null,map__11703__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
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
