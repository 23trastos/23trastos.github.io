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
return (function (p1__198187_SHARP_){
return ["notebooks/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__198187_SHARP_)].join('');
});})(resp))
;
var c__12023__auto___198236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12023__auto___198236,resp,url){
return (function (){
var f__12024__auto__ = (function (){var switch__12000__auto__ = ((function (c__12023__auto___198236,resp,url){
return (function (state_198219){
var state_val_198220 = (state_198219[(1)]);
if((state_val_198220 === (7))){
var inst_198206 = (state_198219[(7)]);
var inst_198206__$1 = (state_198219[(2)]);
var inst_198207 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_198206__$1);
var state_198219__$1 = (function (){var statearr_198221 = state_198219;
(statearr_198221[(7)] = inst_198206__$1);

return statearr_198221;
})();
if(cljs.core.truth_(inst_198207)){
var statearr_198222_198237 = state_198219__$1;
(statearr_198222_198237[(1)] = (8));

} else {
var statearr_198223_198238 = state_198219__$1;
(statearr_198223_198238[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_198220 === (1))){
var inst_198188 = url.call(null,".edn");
var inst_198189 = [new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_198190 = ["application/edn"];
var inst_198191 = cljs.core.PersistentHashMap.fromArrays(inst_198189,inst_198190);
var inst_198192 = cljs_http.client.get.call(null,inst_198188,inst_198191);
var state_198219__$1 = state_198219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_198219__$1,(2),inst_198192);
} else {
if((state_val_198220 === (4))){
var inst_198200 = url.call(null,".json");
var inst_198201 = [new cljs.core.Keyword(null,"content-type","content-type",-508222634)];
var inst_198202 = ["application/json"];
var inst_198203 = cljs.core.PersistentHashMap.fromArrays(inst_198201,inst_198202);
var inst_198204 = cljs_http.client.get.call(null,inst_198200,inst_198203);
var state_198219__$1 = state_198219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_198219__$1,(7),inst_198204);
} else {
if((state_val_198220 === (6))){
var inst_198198 = (state_198219[(2)]);
var state_198219__$1 = state_198219;
var statearr_198224_198239 = state_198219__$1;
(statearr_198224_198239[(2)] = inst_198198);

(statearr_198224_198239[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_198220 === (3))){
var inst_198194 = (state_198219[(8)]);
var state_198219__$1 = state_198219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_198219__$1,(6),resp,inst_198194);
} else {
if((state_val_198220 === (12))){
var inst_198213 = (state_198219[(2)]);
var state_198219__$1 = state_198219;
var statearr_198225_198240 = state_198219__$1;
(statearr_198225_198240[(2)] = inst_198213);

(statearr_198225_198240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_198220 === (2))){
var inst_198194 = (state_198219[(8)]);
var inst_198194__$1 = (state_198219[(2)]);
var inst_198195 = new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(inst_198194__$1);
var state_198219__$1 = (function (){var statearr_198226 = state_198219;
(statearr_198226[(8)] = inst_198194__$1);

return statearr_198226;
})();
if(cljs.core.truth_(inst_198195)){
var statearr_198227_198241 = state_198219__$1;
(statearr_198227_198241[(1)] = (3));

} else {
var statearr_198228_198242 = state_198219__$1;
(statearr_198228_198242[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_198220 === (11))){
var inst_198210 = (state_198219[(2)]);
var state_198219__$1 = state_198219;
var statearr_198229_198243 = state_198219__$1;
(statearr_198229_198243[(2)] = inst_198210);

(statearr_198229_198243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_198220 === (9))){
var inst_198194 = (state_198219[(8)]);
var state_198219__$1 = state_198219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_198219__$1,(12),resp,inst_198194);
} else {
if((state_val_198220 === (5))){
var inst_198217 = (state_198219[(2)]);
var state_198219__$1 = state_198219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_198219__$1,inst_198217);
} else {
if((state_val_198220 === (10))){
var inst_198215 = (state_198219[(2)]);
var state_198219__$1 = state_198219;
var statearr_198230_198244 = state_198219__$1;
(statearr_198230_198244[(2)] = inst_198215);

(statearr_198230_198244[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_198220 === (8))){
var inst_198206 = (state_198219[(7)]);
var state_198219__$1 = state_198219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_198219__$1,(11),resp,inst_198206);
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
});})(c__12023__auto___198236,resp,url))
;
return ((function (switch__12000__auto__,c__12023__auto___198236,resp,url){
return (function() {
var cljs_browser_repl$net$file$get_BANG__$_state_machine__12001__auto__ = null;
var cljs_browser_repl$net$file$get_BANG__$_state_machine__12001__auto____0 = (function (){
var statearr_198231 = [null,null,null,null,null,null,null,null,null];
(statearr_198231[(0)] = cljs_browser_repl$net$file$get_BANG__$_state_machine__12001__auto__);

(statearr_198231[(1)] = (1));

return statearr_198231;
});
var cljs_browser_repl$net$file$get_BANG__$_state_machine__12001__auto____1 = (function (state_198219){
while(true){
var ret_value__12002__auto__ = (function (){try{while(true){
var result__12003__auto__ = switch__12000__auto__.call(null,state_198219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12003__auto__;
}
break;
}
}catch (e198232){var ex__12004__auto__ = e198232;
var statearr_198233_198245 = state_198219;
(statearr_198233_198245[(2)] = ex__12004__auto__);


if(cljs.core.seq.call(null,(state_198219[(4)]))){
var statearr_198234_198246 = state_198219;
(statearr_198234_198246[(1)] = cljs.core.first.call(null,(state_198219[(4)])));

} else {
throw ex__12004__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__198247 = state_198219;
state_198219 = G__198247;
continue;
} else {
return ret_value__12002__auto__;
}
break;
}
});
cljs_browser_repl$net$file$get_BANG__$_state_machine__12001__auto__ = function(state_198219){
switch(arguments.length){
case 0:
return cljs_browser_repl$net$file$get_BANG__$_state_machine__12001__auto____0.call(this);
case 1:
return cljs_browser_repl$net$file$get_BANG__$_state_machine__12001__auto____1.call(this,state_198219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$net$file$get_BANG__$_state_machine__12001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$net$file$get_BANG__$_state_machine__12001__auto____0;
cljs_browser_repl$net$file$get_BANG__$_state_machine__12001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$net$file$get_BANG__$_state_machine__12001__auto____1;
return cljs_browser_repl$net$file$get_BANG__$_state_machine__12001__auto__;
})()
;})(switch__12000__auto__,c__12023__auto___198236,resp,url))
})();
var state__12025__auto__ = (function (){var statearr_198235 = f__12024__auto__.call(null);
(statearr_198235[(6)] = c__12023__auto___198236);

return statearr_198235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12025__auto__);
});})(c__12023__auto___198236,resp,url))
);


return resp;
});
cljs_browser_repl.net.file.invalid_file = (function cljs_browser_repl$net$file$invalid_file(file,err){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_browser_repl.state.to_repl_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(err),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4462__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_198248_198250 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_198249_198251 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_198248_198250,_STAR_print_fn_STAR_198249_198251,sb__4462__auto__){
return (function (x__4463__auto__){
return sb__4462__auto__.append(x__4463__auto__);
});})(_STAR_print_newline_STAR_198248_198250,_STAR_print_fn_STAR_198249_198251,sb__4462__auto__))
;

try{cljs.pprint.pprint.call(null,file);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_198249_198251;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_198248_198250;
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
cljs_browser_repl.net.file.get_commands = (function cljs_browser_repl$net$file$get_commands(p__198252){
var map__198253 = p__198252;
var map__198253__$1 = ((((!((map__198253 == null)))?(((((map__198253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__198253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__198253):map__198253);
var file = map__198253__$1;
var success = cljs.core.get.call(null,map__198253__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var body = cljs.core.get.call(null,map__198253__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
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
