// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_browser_repl.actions.notebook');
goog.require('cljs.core');
goog.require('cljs_browser_repl.net.gist');
goog.require('cljs_browser_repl.net.file');
goog.require('cljs_browser_repl.actions.repl');
goog.require('cljs.core.async');
goog.require('cljs.pprint');
goog.require('cljs_browser_repl.state');
cljs_browser_repl.actions.notebook.cmd_to_history_BANG_ = (function cljs_browser_repl$actions$notebook$cmd_to_history_BANG_(cmd){
return cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.history,cljs_browser_repl.state.add_entry,cljs_browser_repl.state.to_repl.call(null,cmd));
});
cljs_browser_repl.actions.notebook.disable_stops_BANG_ = (function cljs_browser_repl$actions$notebook$disable_stops_BANG_(){
return cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.history,(function (h){
return cljs.core.mapv.call(null,(function (p1__22457_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__22457_SHARP_),new cljs.core.Keyword(null,"stop","stop",-2140911342))){
return cljs.core.assoc.call(null,p1__22457_SHARP_,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true);
} else {
return p1__22457_SHARP_;
}
}),h);
}));
});
cljs_browser_repl.actions.notebook.add_separator_BANG_ = (function cljs_browser_repl$actions$notebook$add_separator_BANG_(){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,cljs.core.deref.call(null,cljs_browser_repl.state.history))),new cljs.core.Keyword(null,"stop","stop",-2140911342))){
return cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.history,cljs_browser_repl.state.add_entry,cljs_browser_repl.state.to_repl.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"separator","separator",-1628749125)], null)));
} else {
return null;
}
});
cljs_browser_repl.actions.notebook.play_notebook_BANG_ = (function cljs_browser_repl$actions$notebook$play_notebook_BANG_(){
var position_22465 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var started_QMARK__22466 = typeof position_22465 === 'number';
var map__22458_22467 = cljs_browser_repl.state.current_command.call(null,cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var map__22458_22468__$1 = ((((!((map__22458_22467 == null)))?(((((map__22458_22467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22458_22467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22458_22467):map__22458_22467);
var cmd_22469 = map__22458_22468__$1;
var type_22470 = cljs.core.get.call(null,map__22458_22468__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(((started_QMARK__22466) && (cljs.core._EQ_.call(null,type_22470,new cljs.core.Keyword(null,"stop","stop",-2140911342))))){
cljs_browser_repl.actions.notebook.disable_stops_BANG_.call(null);

cljs_browser_repl.actions.notebook.add_separator_BANG_.call(null);

cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.update,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.inc);
} else {
}

var temp__5457__auto__ = cljs_browser_repl.state.current_command.call(null,cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
if(cljs.core.truth_(temp__5457__auto__)){
var map__22460 = temp__5457__auto__;
var map__22460__$1 = ((((!((map__22460 == null)))?(((((map__22460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22460):map__22460);
var cmd = map__22460__$1;
var type = cljs.core.get.call(null,map__22460__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var pos = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})();
while(true){
var cmds = new cljs.core.Keyword(null,"cmds","cmds",-1841503952).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var map__22462 = cljs.core.nth.call(null,cmds,pos);
var map__22462__$1 = ((((!((map__22462 == null)))?(((((map__22462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22462):map__22462);
var cmd__$1 = map__22462__$1;
var type__$1 = cljs.core.get.call(null,map__22462__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__22462__$1,new cljs.core.Keyword(null,"value","value",305978217));
var silent_QMARK_ = cljs.core.get.call(null,map__22462__$1,new cljs.core.Keyword(null,"silent?","silent?",-1639424539));
var deaf_QMARK_ = cljs.core.get.call(null,map__22462__$1,new cljs.core.Keyword(null,"deaf?","deaf?",-918805966));
var new_pos = (pos + (1));
var G__22464_22471 = type__$1;
var G__22464_22472__$1 = (((G__22464_22471 instanceof cljs.core.Keyword))?G__22464_22471.fqn:null);
switch (G__22464_22472__$1) {
case "input":
if(cljs.core.truth_(new cljs.core.Keyword(null,"sample?","sample?",-606794501).cljs$core$IFn$_invoke$arity$1(cmd__$1))){
cljs_browser_repl.actions.notebook.cmd_to_history_BANG_.call(null,cmd__$1);
} else {
cljs_browser_repl.actions.repl.repl_entry_BANG_.call(null,value,cljs.core.not.call(null,silent_QMARK_),cljs.core.not.call(null,deaf_QMARK_));
}

break;
default:
cljs_browser_repl.actions.notebook.cmd_to_history_BANG_.call(null,cmd__$1);

}

if(((cljs.core.not_EQ_.call(null,type__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342))) && ((new_pos < cljs.core.count.call(null,cmds))))){
cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"position","position",-2011731912),new_pos);

var G__22474 = new_pos;
pos = G__22474;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
});
cljs_browser_repl.actions.notebook.from_gist_BANG_ = (function cljs_browser_repl$actions$notebook$from_gist_BANG_(var_args){
var G__22476 = arguments.length;
switch (G__22476) {
case 1:
return cljs_browser_repl.actions.notebook.from_gist_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_browser_repl.actions.notebook.from_gist_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_browser_repl.actions.notebook.from_gist_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (id){
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,"index");
});

cljs_browser_repl.actions.notebook.from_gist_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (id,file_name){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook)),id)){
cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"position","position",-2011731912),(0),new cljs.core.Keyword(null,"cmds","cmds",-1841503952),cljs_browser_repl.net.gist.get_commands.call(null,new cljs.core.Keyword(null,"gist","gist",96143031).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook)),file_name));

return cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
} else {
cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.history,cljs.core.PersistentVector.EMPTY);

var c__11540__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11540__auto__){
return (function (){
var f__11541__auto__ = (function (){var switch__11517__auto__ = ((function (c__11540__auto__){
return (function (state_22485){
var state_val_22486 = (state_22485[(1)]);
if((state_val_22486 === (1))){
var inst_22477 = cljs_browser_repl.net.gist.get_BANG_.call(null,id);
var state_22485__$1 = state_22485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22485__$1,(2),inst_22477);
} else {
if((state_val_22486 === (2))){
var inst_22479 = (state_22485[(2)]);
var inst_22480 = cljs_browser_repl.net.gist.get_commands.call(null,inst_22479,file_name);
var inst_22481 = cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs_browser_repl.state.empty_notebook);
var inst_22482 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"gist","gist",96143031),inst_22479,new cljs.core.Keyword(null,"cmds","cmds",-1841503952),inst_22480);
var inst_22483 = cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
var state_22485__$1 = (function (){var statearr_22487 = state_22485;
(statearr_22487[(7)] = inst_22481);

(statearr_22487[(8)] = inst_22482);

return statearr_22487;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22485__$1,inst_22483);
} else {
return null;
}
}
});})(c__11540__auto__))
;
return ((function (switch__11517__auto__,c__11540__auto__){
return (function() {
var cljs_browser_repl$actions$notebook$state_machine__11518__auto__ = null;
var cljs_browser_repl$actions$notebook$state_machine__11518__auto____0 = (function (){
var statearr_22488 = [null,null,null,null,null,null,null,null,null];
(statearr_22488[(0)] = cljs_browser_repl$actions$notebook$state_machine__11518__auto__);

(statearr_22488[(1)] = (1));

return statearr_22488;
});
var cljs_browser_repl$actions$notebook$state_machine__11518__auto____1 = (function (state_22485){
while(true){
var ret_value__11519__auto__ = (function (){try{while(true){
var result__11520__auto__ = switch__11517__auto__.call(null,state_22485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11520__auto__;
}
break;
}
}catch (e22489){var ex__11521__auto__ = e22489;
var statearr_22490_22494 = state_22485;
(statearr_22490_22494[(2)] = ex__11521__auto__);


if(cljs.core.seq.call(null,(state_22485[(4)]))){
var statearr_22491_22495 = state_22485;
(statearr_22491_22495[(1)] = cljs.core.first.call(null,(state_22485[(4)])));

} else {
throw ex__11521__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22496 = state_22485;
state_22485 = G__22496;
continue;
} else {
return ret_value__11519__auto__;
}
break;
}
});
cljs_browser_repl$actions$notebook$state_machine__11518__auto__ = function(state_22485){
switch(arguments.length){
case 0:
return cljs_browser_repl$actions$notebook$state_machine__11518__auto____0.call(this);
case 1:
return cljs_browser_repl$actions$notebook$state_machine__11518__auto____1.call(this,state_22485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$actions$notebook$state_machine__11518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$actions$notebook$state_machine__11518__auto____0;
cljs_browser_repl$actions$notebook$state_machine__11518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$actions$notebook$state_machine__11518__auto____1;
return cljs_browser_repl$actions$notebook$state_machine__11518__auto__;
})()
;})(switch__11517__auto__,c__11540__auto__))
})();
var state__11542__auto__ = (function (){var statearr_22492 = f__11541__auto__.call(null);
(statearr_22492[(6)] = c__11540__auto__);

return statearr_22492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11542__auto__);
});})(c__11540__auto__))
);

return c__11540__auto__;
}
});

cljs_browser_repl.actions.notebook.from_gist_BANG_.cljs$lang$maxFixedArity = 2;

cljs_browser_repl.actions.notebook.goto_BANG_ = (function cljs_browser_repl$actions$notebook$goto_BANG_(pos){
cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"position","position",-2011731912),pos);

return cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
});
cljs_browser_repl.actions.notebook.from_filesystem_BANG_ = (function cljs_browser_repl$actions$notebook$from_filesystem_BANG_(var_args){
var G__22498 = arguments.length;
switch (G__22498) {
case 1:
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_browser_repl.actions.notebook.from_filesystem_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (id){
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,"index");
});

cljs_browser_repl.actions.notebook.from_filesystem_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (id,file_name){
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file_name,(0));
});

cljs_browser_repl.actions.notebook.from_filesystem_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (id,file_name,position){
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file_name,position,true);
});

cljs_browser_repl.actions.notebook.from_filesystem_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (id,file_name,position,clear_history_QMARK_){
if(cljs.core.truth_(clear_history_QMARK_)){
cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.history,cljs.core.PersistentVector.EMPTY);
} else {
}

var c__11540__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11540__auto__){
return (function (){
var f__11541__auto__ = (function (){var switch__11517__auto__ = ((function (c__11540__auto__){
return (function (state_22509){
var state_val_22510 = (state_22509[(1)]);
if((state_val_22510 === (1))){
var inst_22499 = cljs_browser_repl.net.file.get_BANG_.call(null,id,file_name);
var state_22509__$1 = state_22509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22509__$1,(2),inst_22499);
} else {
if((state_val_22510 === (2))){
var inst_22501 = (state_22509[(2)]);
var inst_22502 = cljs_browser_repl.net.file.get_commands.call(null,inst_22501);
var inst_22503 = cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs_browser_repl.state.empty_notebook);
var inst_22504 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"file-name","file-name",-1654217259),file_name,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22501,new cljs.core.Keyword(null,"cmds","cmds",-1841503952),inst_22502,new cljs.core.Keyword(null,"position","position",-2011731912),position);
var inst_22505 = ["loaded '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"' from '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"' notebook."].join('');
var inst_22506 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.repl_info,cljs.core.assoc,new cljs.core.Keyword(null,"type","type",1174270348),"log",new cljs.core.Keyword(null,"msg","msg",-1386103444),inst_22505);
var inst_22507 = cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
var state_22509__$1 = (function (){var statearr_22511 = state_22509;
(statearr_22511[(7)] = inst_22506);

(statearr_22511[(8)] = inst_22504);

(statearr_22511[(9)] = inst_22503);

return statearr_22511;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22509__$1,inst_22507);
} else {
return null;
}
}
});})(c__11540__auto__))
;
return ((function (switch__11517__auto__,c__11540__auto__){
return (function() {
var cljs_browser_repl$actions$notebook$state_machine__11518__auto__ = null;
var cljs_browser_repl$actions$notebook$state_machine__11518__auto____0 = (function (){
var statearr_22512 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22512[(0)] = cljs_browser_repl$actions$notebook$state_machine__11518__auto__);

(statearr_22512[(1)] = (1));

return statearr_22512;
});
var cljs_browser_repl$actions$notebook$state_machine__11518__auto____1 = (function (state_22509){
while(true){
var ret_value__11519__auto__ = (function (){try{while(true){
var result__11520__auto__ = switch__11517__auto__.call(null,state_22509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11520__auto__;
}
break;
}
}catch (e22513){var ex__11521__auto__ = e22513;
var statearr_22514_22518 = state_22509;
(statearr_22514_22518[(2)] = ex__11521__auto__);


if(cljs.core.seq.call(null,(state_22509[(4)]))){
var statearr_22515_22519 = state_22509;
(statearr_22515_22519[(1)] = cljs.core.first.call(null,(state_22509[(4)])));

} else {
throw ex__11521__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22520 = state_22509;
state_22509 = G__22520;
continue;
} else {
return ret_value__11519__auto__;
}
break;
}
});
cljs_browser_repl$actions$notebook$state_machine__11518__auto__ = function(state_22509){
switch(arguments.length){
case 0:
return cljs_browser_repl$actions$notebook$state_machine__11518__auto____0.call(this);
case 1:
return cljs_browser_repl$actions$notebook$state_machine__11518__auto____1.call(this,state_22509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$actions$notebook$state_machine__11518__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$actions$notebook$state_machine__11518__auto____0;
cljs_browser_repl$actions$notebook$state_machine__11518__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$actions$notebook$state_machine__11518__auto____1;
return cljs_browser_repl$actions$notebook$state_machine__11518__auto__;
})()
;})(switch__11517__auto__,c__11540__auto__))
})();
var state__11542__auto__ = (function (){var statearr_22516 = f__11541__auto__.call(null);
(statearr_22516[(6)] = c__11540__auto__);

return statearr_22516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11542__auto__);
});})(c__11540__auto__))
);

return c__11540__auto__;
});

cljs_browser_repl.actions.notebook.from_filesystem_BANG_.cljs$lang$maxFixedArity = 4;

cljs_browser_repl.actions.notebook.reader_load_BANG_ = (function cljs_browser_repl$actions$notebook$reader_load_BANG_(reader_event){
var content = reader_event.target.result;
var loaded_file = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook)).name;
cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.history,cljs.core.PersistentVector.EMPTY);

var loaded_file_22521__$1 = (cljs.core.truth_(cljs.core.re_find.call(null,/_/,loaded_file))?clojure.string.split.call(null,loaded_file,/_/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loaded_file,"loaded"], null));
cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),loaded_file_22521__$1.call(null,(0)),new cljs.core.Keyword(null,"file-name","file-name",-1654217259),loaded_file_22521__$1.call(null,(1)),new cljs.core.Keyword(null,"cmds","cmds",-1841503952),cljs_browser_repl.net.file.commands_from_string.call(null,content),new cljs.core.Keyword(null,"position","position",-2011731912),(0));

return cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
});
cljs_browser_repl.actions.notebook.from_loaded_file_BANG_ = (function cljs_browser_repl$actions$notebook$from_loaded_file_BANG_(event){
var file = (event.target.files[(0)]);
var reader = (new FileReader());
cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs_browser_repl.state.empty_notebook);

cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"file","file",-1269645878),file);

reader.readAsText(file);

return reader.onload = cljs_browser_repl.actions.notebook.reader_load_BANG_;
});

//# sourceMappingURL=notebook.js.map
