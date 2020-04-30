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
return (function (p1__166449_SHARP_){
return ["notebooks/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__166449_SHARP_)].join('');
});})(resp))
;
var c__12024__auto___166498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12024__auto___166498,resp,url){
return (function (){
var f__12025__auto__ = (function (){var switch__12001__auto__ = ((function (c__12024__auto___166498,resp,url){
return (function (state_166481){
var state_val_166482 = (state_166481[(1)]);
if((state_val_166482 === (7))){
var inst_166468 = (state_166481[(7)]);
var inst_166468__$1 = (state_166481[(2)]);
var inst_166469 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_166468__$1);
var state_166481__$1 = (function (){var statearr_166483 = state_166481;
(statearr_166483[(7)] = inst_166468__$1);

return statearr_166483;
})();
if(cljs.core.truth_(inst_166469)){
var statearr_166484_166499 = state_166481__$1;
(statearr_166484_166499[(1)] = (8));

} else {
var statearr_166485_166500 = state_166481__$1;
(statearr_166485_166500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_166482 === (1))){
var inst_166450 = url.call(null,".edn");
var inst_166451 = [new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_166452 = ["application/edn"];
var inst_166453 = cljs.core.PersistentHashMap.fromArrays(inst_166451,inst_166452);
var inst_166454 = cljs_http.client.get.call(null,inst_166450,inst_166453);
var state_166481__$1 = state_166481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_166481__$1,(2),inst_166454);
} else {
if((state_val_166482 === (4))){
var inst_166462 = url.call(null,".json");
var inst_166463 = [new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_166464 = ["application/json"];
var inst_166465 = cljs.core.PersistentHashMap.fromArrays(inst_166463,inst_166464);
var inst_166466 = cljs_http.client.get.call(null,inst_166462,inst_166465);
var state_166481__$1 = state_166481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_166481__$1,(7),inst_166466);
} else {
if((state_val_166482 === (6))){
var inst_166460 = (state_166481[(2)]);
var state_166481__$1 = state_166481;
var statearr_166486_166501 = state_166481__$1;
(statearr_166486_166501[(2)] = inst_166460);

(statearr_166486_166501[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_166482 === (3))){
var inst_166456 = (state_166481[(8)]);
var state_166481__$1 = state_166481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_166481__$1,(6),resp,inst_166456);
} else {
if((state_val_166482 === (12))){
var inst_166475 = (state_166481[(2)]);
var state_166481__$1 = state_166481;
var statearr_166487_166502 = state_166481__$1;
(statearr_166487_166502[(2)] = inst_166475);

(statearr_166487_166502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_166482 === (2))){
var inst_166456 = (state_166481[(8)]);
var inst_166456__$1 = (state_166481[(2)]);
var inst_166457 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_166456__$1);
var state_166481__$1 = (function (){var statearr_166488 = state_166481;
(statearr_166488[(8)] = inst_166456__$1);

return statearr_166488;
})();
if(cljs.core.truth_(inst_166457)){
var statearr_166489_166503 = state_166481__$1;
(statearr_166489_166503[(1)] = (3));

} else {
var statearr_166490_166504 = state_166481__$1;
(statearr_166490_166504[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_166482 === (11))){
var inst_166472 = (state_166481[(2)]);
var state_166481__$1 = state_166481;
var statearr_166491_166505 = state_166481__$1;
(statearr_166491_166505[(2)] = inst_166472);

(statearr_166491_166505[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_166482 === (9))){
var inst_166456 = (state_166481[(8)]);
var state_166481__$1 = state_166481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_166481__$1,(12),resp,inst_166456);
} else {
if((state_val_166482 === (5))){
var inst_166479 = (state_166481[(2)]);
var state_166481__$1 = state_166481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_166481__$1,inst_166479);
} else {
if((state_val_166482 === (10))){
var inst_166477 = (state_166481[(2)]);
var state_166481__$1 = state_166481;
var statearr_166492_166506 = state_166481__$1;
(statearr_166492_166506[(2)] = inst_166477);

(statearr_166492_166506[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_166482 === (8))){
var inst_166468 = (state_166481[(7)]);
var state_166481__$1 = state_166481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_166481__$1,(11),resp,inst_166468);
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
});})(c__12024__auto___166498,resp,url))
;
return ((function (switch__12001__auto__,c__12024__auto___166498,resp,url){
return (function() {
var cljs_browser_repl$net$file$get_BANG__$_state_machine__12002__auto__ = null;
var cljs_browser_repl$net$file$get_BANG__$_state_machine__12002__auto____0 = (function (){
var statearr_166493 = [null,null,null,null,null,null,null,null,null];
(statearr_166493[(0)] = cljs_browser_repl$net$file$get_BANG__$_state_machine__12002__auto__);

(statearr_166493[(1)] = (1));

return statearr_166493;
});
var cljs_browser_repl$net$file$get_BANG__$_state_machine__12002__auto____1 = (function (state_166481){
while(true){
var ret_value__12003__auto__ = (function (){try{while(true){
var result__12004__auto__ = switch__12001__auto__.call(null,state_166481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12004__auto__;
}
break;
}
}catch (e166494){var ex__12005__auto__ = e166494;
var statearr_166495_166507 = state_166481;
(statearr_166495_166507[(2)] = ex__12005__auto__);


if(cljs.core.seq.call(null,(state_166481[(4)]))){
var statearr_166496_166508 = state_166481;
(statearr_166496_166508[(1)] = cljs.core.first.call(null,(state_166481[(4)])));

} else {
throw ex__12005__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__166509 = state_166481;
state_166481 = G__166509;
continue;
} else {
return ret_value__12003__auto__;
}
break;
}
});
cljs_browser_repl$net$file$get_BANG__$_state_machine__12002__auto__ = function(state_166481){
switch(arguments.length){
case 0:
return cljs_browser_repl$net$file$get_BANG__$_state_machine__12002__auto____0.call(this);
case 1:
return cljs_browser_repl$net$file$get_BANG__$_state_machine__12002__auto____1.call(this,state_166481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$net$file$get_BANG__$_state_machine__12002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$net$file$get_BANG__$_state_machine__12002__auto____0;
cljs_browser_repl$net$file$get_BANG__$_state_machine__12002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$net$file$get_BANG__$_state_machine__12002__auto____1;
return cljs_browser_repl$net$file$get_BANG__$_state_machine__12002__auto__;
})()
;})(switch__12001__auto__,c__12024__auto___166498,resp,url))
})();
var state__12026__auto__ = (function (){var statearr_166497 = f__12025__auto__.call(null);
(statearr_166497[(6)] = c__12024__auto___166498);

return statearr_166497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12026__auto__);
});})(c__12024__auto___166498,resp,url))
);


return resp;
});
cljs_browser_repl.net.file.invalid_file = (function cljs_browser_repl$net$file$invalid_file(file,err){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_browser_repl.state.to_repl_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(err),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4462__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_166510_166512 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_166511_166513 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_166510_166512,_STAR_print_fn_STAR_166511_166513,sb__4462__auto__){
return (function (x__4463__auto__){
return sb__4462__auto__.append(x__4463__auto__);
});})(_STAR_print_newline_STAR_166510_166512,_STAR_print_fn_STAR_166511_166513,sb__4462__auto__))
;

try{cljs.pprint.pprint.call(null,file);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_166511_166513;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_166510_166512;
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
cljs_browser_repl.net.file.get_commands = (function cljs_browser_repl$net$file$get_commands(p__166514){
var map__166515 = p__166514;
var map__166515__$1 = ((((!((map__166515 == null)))?(((((map__166515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__166515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__166515):map__166515);
var file = map__166515__$1;
var success = cljs.core.get.call(null,map__166515__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var body = cljs.core.get.call(null,map__166515__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
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
