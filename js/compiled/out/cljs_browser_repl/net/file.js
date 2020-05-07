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
return (function (p1__32657_SHARP_){
return ["notebooks/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32657_SHARP_)].join('');
});})(resp))
;
var c__11553__auto___32706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11553__auto___32706,resp,url){
return (function (){
var f__11554__auto__ = (function (){var switch__11530__auto__ = ((function (c__11553__auto___32706,resp,url){
return (function (state_32689){
var state_val_32690 = (state_32689[(1)]);
if((state_val_32690 === (7))){
var inst_32676 = (state_32689[(7)]);
var inst_32676__$1 = (state_32689[(2)]);
var inst_32677 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_32676__$1);
var state_32689__$1 = (function (){var statearr_32691 = state_32689;
(statearr_32691[(7)] = inst_32676__$1);

return statearr_32691;
})();
if(cljs.core.truth_(inst_32677)){
var statearr_32692_32707 = state_32689__$1;
(statearr_32692_32707[(1)] = (8));

} else {
var statearr_32693_32708 = state_32689__$1;
(statearr_32693_32708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32690 === (1))){
var inst_32658 = url.call(null,".edn");
var inst_32659 = [new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_32660 = ["application/edn"];
var inst_32661 = cljs.core.PersistentHashMap.fromArrays(inst_32659,inst_32660);
var inst_32662 = cljs_http.client.get.call(null,inst_32658,inst_32661);
var state_32689__$1 = state_32689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32689__$1,(2),inst_32662);
} else {
if((state_val_32690 === (4))){
var inst_32670 = url.call(null,".json");
var inst_32671 = [new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_32672 = ["application/json"];
var inst_32673 = cljs.core.PersistentHashMap.fromArrays(inst_32671,inst_32672);
var inst_32674 = cljs_http.client.get.call(null,inst_32670,inst_32673);
var state_32689__$1 = state_32689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32689__$1,(7),inst_32674);
} else {
if((state_val_32690 === (6))){
var inst_32668 = (state_32689[(2)]);
var state_32689__$1 = state_32689;
var statearr_32694_32709 = state_32689__$1;
(statearr_32694_32709[(2)] = inst_32668);

(statearr_32694_32709[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32690 === (3))){
var inst_32664 = (state_32689[(8)]);
var state_32689__$1 = state_32689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32689__$1,(6),resp,inst_32664);
} else {
if((state_val_32690 === (12))){
var inst_32683 = (state_32689[(2)]);
var state_32689__$1 = state_32689;
var statearr_32695_32710 = state_32689__$1;
(statearr_32695_32710[(2)] = inst_32683);

(statearr_32695_32710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32690 === (2))){
var inst_32664 = (state_32689[(8)]);
var inst_32664__$1 = (state_32689[(2)]);
var inst_32665 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_32664__$1);
var state_32689__$1 = (function (){var statearr_32696 = state_32689;
(statearr_32696[(8)] = inst_32664__$1);

return statearr_32696;
})();
if(cljs.core.truth_(inst_32665)){
var statearr_32697_32711 = state_32689__$1;
(statearr_32697_32711[(1)] = (3));

} else {
var statearr_32698_32712 = state_32689__$1;
(statearr_32698_32712[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32690 === (11))){
var inst_32680 = (state_32689[(2)]);
var state_32689__$1 = state_32689;
var statearr_32699_32713 = state_32689__$1;
(statearr_32699_32713[(2)] = inst_32680);

(statearr_32699_32713[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32690 === (9))){
var inst_32664 = (state_32689[(8)]);
var state_32689__$1 = state_32689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32689__$1,(12),resp,inst_32664);
} else {
if((state_val_32690 === (5))){
var inst_32687 = (state_32689[(2)]);
var state_32689__$1 = state_32689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32689__$1,inst_32687);
} else {
if((state_val_32690 === (10))){
var inst_32685 = (state_32689[(2)]);
var state_32689__$1 = state_32689;
var statearr_32700_32714 = state_32689__$1;
(statearr_32700_32714[(2)] = inst_32685);

(statearr_32700_32714[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32690 === (8))){
var inst_32676 = (state_32689[(7)]);
var state_32689__$1 = state_32689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32689__$1,(11),resp,inst_32676);
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
});})(c__11553__auto___32706,resp,url))
;
return ((function (switch__11530__auto__,c__11553__auto___32706,resp,url){
return (function() {
var cljs_browser_repl$net$file$get_BANG__$_state_machine__11531__auto__ = null;
var cljs_browser_repl$net$file$get_BANG__$_state_machine__11531__auto____0 = (function (){
var statearr_32701 = [null,null,null,null,null,null,null,null,null];
(statearr_32701[(0)] = cljs_browser_repl$net$file$get_BANG__$_state_machine__11531__auto__);

(statearr_32701[(1)] = (1));

return statearr_32701;
});
var cljs_browser_repl$net$file$get_BANG__$_state_machine__11531__auto____1 = (function (state_32689){
while(true){
var ret_value__11532__auto__ = (function (){try{while(true){
var result__11533__auto__ = switch__11530__auto__.call(null,state_32689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11533__auto__;
}
break;
}
}catch (e32702){var ex__11534__auto__ = e32702;
var statearr_32703_32715 = state_32689;
(statearr_32703_32715[(2)] = ex__11534__auto__);


if(cljs.core.seq.call(null,(state_32689[(4)]))){
var statearr_32704_32716 = state_32689;
(statearr_32704_32716[(1)] = cljs.core.first.call(null,(state_32689[(4)])));

} else {
throw ex__11534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32717 = state_32689;
state_32689 = G__32717;
continue;
} else {
return ret_value__11532__auto__;
}
break;
}
});
cljs_browser_repl$net$file$get_BANG__$_state_machine__11531__auto__ = function(state_32689){
switch(arguments.length){
case 0:
return cljs_browser_repl$net$file$get_BANG__$_state_machine__11531__auto____0.call(this);
case 1:
return cljs_browser_repl$net$file$get_BANG__$_state_machine__11531__auto____1.call(this,state_32689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$net$file$get_BANG__$_state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$net$file$get_BANG__$_state_machine__11531__auto____0;
cljs_browser_repl$net$file$get_BANG__$_state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$net$file$get_BANG__$_state_machine__11531__auto____1;
return cljs_browser_repl$net$file$get_BANG__$_state_machine__11531__auto__;
})()
;})(switch__11530__auto__,c__11553__auto___32706,resp,url))
})();
var state__11555__auto__ = (function (){var statearr_32705 = f__11554__auto__.call(null);
(statearr_32705[(6)] = c__11553__auto___32706);

return statearr_32705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11555__auto__);
});})(c__11553__auto___32706,resp,url))
);


return resp;
});
cljs_browser_repl.net.file.invalid_file = (function cljs_browser_repl$net$file$invalid_file(file,err){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_browser_repl.state.to_repl_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(err),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4462__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_32718_32720 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_32719_32721 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_32718_32720,_STAR_print_fn_STAR_32719_32721,sb__4462__auto__){
return (function (x__4463__auto__){
return sb__4462__auto__.append(x__4463__auto__);
});})(_STAR_print_newline_STAR_32718_32720,_STAR_print_fn_STAR_32719_32721,sb__4462__auto__))
;

try{cljs.pprint.pprint.call(null,file);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32719_32721;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_32718_32720;
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
cljs_browser_repl.net.file.get_commands = (function cljs_browser_repl$net$file$get_commands(p__32722){
var map__32723 = p__32722;
var map__32723__$1 = ((((!((map__32723 == null)))?(((((map__32723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32723):map__32723);
var file = map__32723__$1;
var success = cljs.core.get.call(null,map__32723__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var body = cljs.core.get.call(null,map__32723__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
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
