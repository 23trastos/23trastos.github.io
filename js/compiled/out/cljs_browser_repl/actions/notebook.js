// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_browser_repl.actions.notebook');
goog.require('cljs.core');
goog.require('cljs_browser_repl.net.gist');
goog.require('cljs_browser_repl.net.file');
goog.require('cljs.core.async');
goog.require('cljs.pprint');
goog.require('cljs_browser_repl.state');
goog.require('cljs_browser_repl.actions.repl');
cljs_browser_repl.actions.notebook.cmd_to_history_BANG_ = (function cljs_browser_repl$actions$notebook$cmd_to_history_BANG_(cmd){
return cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.history,cljs_browser_repl.state.add_entry,cljs_browser_repl.state.to_repl.call(null,cmd));
});
cljs_browser_repl.actions.notebook.disable_stops_BANG_ = (function cljs_browser_repl$actions$notebook$disable_stops_BANG_(){
return cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.history,(function (h){
return cljs.core.mapv.call(null,(function (p1__171352_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__171352_SHARP_),new cljs.core.Keyword(null,"stop","stop",-2140911342))){
return cljs.core.assoc.call(null,p1__171352_SHARP_,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true);
} else {
return p1__171352_SHARP_;
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
var position_171360 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var started_QMARK__171361 = typeof position_171360 === 'number';
var map__171353_171362 = cljs_browser_repl.state.current_command.call(null,cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var map__171353_171363__$1 = ((((!((map__171353_171362 == null)))?(((((map__171353_171362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__171353_171362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__171353_171362):map__171353_171362);
var cmd_171364 = map__171353_171363__$1;
var type_171365 = cljs.core.get.call(null,map__171353_171363__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(((started_QMARK__171361) && (cljs.core._EQ_.call(null,type_171365,new cljs.core.Keyword(null,"stop","stop",-2140911342))))){
cljs_browser_repl.actions.notebook.disable_stops_BANG_.call(null);

cljs_browser_repl.actions.notebook.add_separator_BANG_.call(null);

cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.update,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.inc);
} else {
}

var temp__5457__auto__ = cljs_browser_repl.state.current_command.call(null,cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
if(cljs.core.truth_(temp__5457__auto__)){
var map__171355 = temp__5457__auto__;
var map__171355__$1 = ((((!((map__171355 == null)))?(((((map__171355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__171355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__171355):map__171355);
var cmd = map__171355__$1;
var type = cljs.core.get.call(null,map__171355__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var pos = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})();
while(true){
var cmds = new cljs.core.Keyword(null,"cmds","cmds",-1841503952).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var map__171357 = cljs.core.nth.call(null,cmds,pos);
var map__171357__$1 = ((((!((map__171357 == null)))?(((((map__171357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__171357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__171357):map__171357);
var cmd__$1 = map__171357__$1;
var type__$1 = cljs.core.get.call(null,map__171357__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__171357__$1,new cljs.core.Keyword(null,"value","value",305978217));
var silent_QMARK_ = cljs.core.get.call(null,map__171357__$1,new cljs.core.Keyword(null,"silent?","silent?",-1639424539));
var deaf_QMARK_ = cljs.core.get.call(null,map__171357__$1,new cljs.core.Keyword(null,"deaf?","deaf?",-918805966));
var new_pos = (pos + (1));
var G__171359_171366 = type__$1;
var G__171359_171367__$1 = (((G__171359_171366 instanceof cljs.core.Keyword))?G__171359_171366.fqn:null);
switch (G__171359_171367__$1) {
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

var G__171369 = new_pos;
pos = G__171369;
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
var G__171371 = arguments.length;
switch (G__171371) {
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

var c__12023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12023__auto__){
return (function (){
var f__12024__auto__ = (function (){var switch__12000__auto__ = ((function (c__12023__auto__){
return (function (state_171380){
var state_val_171381 = (state_171380[(1)]);
if((state_val_171381 === (1))){
var inst_171372 = cljs_browser_repl.net.gist.get_BANG_.call(null,id);
var state_171380__$1 = state_171380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_171380__$1,(2),inst_171372);
} else {
if((state_val_171381 === (2))){
var inst_171374 = (state_171380[(2)]);
var inst_171375 = cljs_browser_repl.net.gist.get_commands.call(null,inst_171374,file_name);
var inst_171376 = cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs_browser_repl.state.empty_notebook);
var inst_171377 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"gist","gist",96143031),inst_171374,new cljs.core.Keyword(null,"cmds","cmds",-1841503952),inst_171375);
var inst_171378 = cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
var state_171380__$1 = (function (){var statearr_171382 = state_171380;
(statearr_171382[(7)] = inst_171376);

(statearr_171382[(8)] = inst_171377);

return statearr_171382;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_171380__$1,inst_171378);
} else {
return null;
}
}
});})(c__12023__auto__))
;
return ((function (switch__12000__auto__,c__12023__auto__){
return (function() {
var cljs_browser_repl$actions$notebook$state_machine__12001__auto__ = null;
var cljs_browser_repl$actions$notebook$state_machine__12001__auto____0 = (function (){
var statearr_171383 = [null,null,null,null,null,null,null,null,null];
(statearr_171383[(0)] = cljs_browser_repl$actions$notebook$state_machine__12001__auto__);

(statearr_171383[(1)] = (1));

return statearr_171383;
});
var cljs_browser_repl$actions$notebook$state_machine__12001__auto____1 = (function (state_171380){
while(true){
var ret_value__12002__auto__ = (function (){try{while(true){
var result__12003__auto__ = switch__12000__auto__.call(null,state_171380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12003__auto__;
}
break;
}
}catch (e171384){var ex__12004__auto__ = e171384;
var statearr_171385_171389 = state_171380;
(statearr_171385_171389[(2)] = ex__12004__auto__);


if(cljs.core.seq.call(null,(state_171380[(4)]))){
var statearr_171386_171390 = state_171380;
(statearr_171386_171390[(1)] = cljs.core.first.call(null,(state_171380[(4)])));

} else {
throw ex__12004__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__171391 = state_171380;
state_171380 = G__171391;
continue;
} else {
return ret_value__12002__auto__;
}
break;
}
});
cljs_browser_repl$actions$notebook$state_machine__12001__auto__ = function(state_171380){
switch(arguments.length){
case 0:
return cljs_browser_repl$actions$notebook$state_machine__12001__auto____0.call(this);
case 1:
return cljs_browser_repl$actions$notebook$state_machine__12001__auto____1.call(this,state_171380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$actions$notebook$state_machine__12001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$actions$notebook$state_machine__12001__auto____0;
cljs_browser_repl$actions$notebook$state_machine__12001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$actions$notebook$state_machine__12001__auto____1;
return cljs_browser_repl$actions$notebook$state_machine__12001__auto__;
})()
;})(switch__12000__auto__,c__12023__auto__))
})();
var state__12025__auto__ = (function (){var statearr_171387 = f__12024__auto__.call(null);
(statearr_171387[(6)] = c__12023__auto__);

return statearr_171387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12025__auto__);
});})(c__12023__auto__))
);

return c__12023__auto__;
}
});

cljs_browser_repl.actions.notebook.from_gist_BANG_.cljs$lang$maxFixedArity = 2;

cljs_browser_repl.actions.notebook.goto_BANG_ = (function cljs_browser_repl$actions$notebook$goto_BANG_(pos){
cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"position","position",-2011731912),pos);

return cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
});
cljs_browser_repl.actions.notebook.from_filesystem_BANG_ = (function cljs_browser_repl$actions$notebook$from_filesystem_BANG_(var_args){
var G__171393 = arguments.length;
switch (G__171393) {
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

var c__12023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12023__auto__){
return (function (){
var f__12024__auto__ = (function (){var switch__12000__auto__ = ((function (c__12023__auto__){
return (function (state_171404){
var state_val_171405 = (state_171404[(1)]);
if((state_val_171405 === (1))){
var inst_171394 = cljs_browser_repl.net.file.get_BANG_.call(null,id,file_name);
var state_171404__$1 = state_171404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_171404__$1,(2),inst_171394);
} else {
if((state_val_171405 === (2))){
var inst_171396 = (state_171404[(2)]);
var inst_171397 = cljs_browser_repl.net.file.get_commands.call(null,inst_171396);
var inst_171398 = cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs_browser_repl.state.empty_notebook);
var inst_171399 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"file-name","file-name",-1654217259),file_name,new cljs.core.Keyword(null,"file","file",-1269645878),inst_171396,new cljs.core.Keyword(null,"cmds","cmds",-1841503952),inst_171397,new cljs.core.Keyword(null,"position","position",-2011731912),position);
var inst_171400 = ["loaded '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"' from '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"' notebook."].join('');
var inst_171401 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.repl_info,cljs.core.assoc,new cljs.core.Keyword(null,"type","type",1174270348),"log",new cljs.core.Keyword(null,"msg","msg",-1386103444),inst_171400);
var inst_171402 = cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
var state_171404__$1 = (function (){var statearr_171406 = state_171404;
(statearr_171406[(7)] = inst_171401);

(statearr_171406[(8)] = inst_171398);

(statearr_171406[(9)] = inst_171399);

return statearr_171406;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_171404__$1,inst_171402);
} else {
return null;
}
}
});})(c__12023__auto__))
;
return ((function (switch__12000__auto__,c__12023__auto__){
return (function() {
var cljs_browser_repl$actions$notebook$state_machine__12001__auto__ = null;
var cljs_browser_repl$actions$notebook$state_machine__12001__auto____0 = (function (){
var statearr_171407 = [null,null,null,null,null,null,null,null,null,null];
(statearr_171407[(0)] = cljs_browser_repl$actions$notebook$state_machine__12001__auto__);

(statearr_171407[(1)] = (1));

return statearr_171407;
});
var cljs_browser_repl$actions$notebook$state_machine__12001__auto____1 = (function (state_171404){
while(true){
var ret_value__12002__auto__ = (function (){try{while(true){
var result__12003__auto__ = switch__12000__auto__.call(null,state_171404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12003__auto__;
}
break;
}
}catch (e171408){var ex__12004__auto__ = e171408;
var statearr_171409_171413 = state_171404;
(statearr_171409_171413[(2)] = ex__12004__auto__);


if(cljs.core.seq.call(null,(state_171404[(4)]))){
var statearr_171410_171414 = state_171404;
(statearr_171410_171414[(1)] = cljs.core.first.call(null,(state_171404[(4)])));

} else {
throw ex__12004__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__171415 = state_171404;
state_171404 = G__171415;
continue;
} else {
return ret_value__12002__auto__;
}
break;
}
});
cljs_browser_repl$actions$notebook$state_machine__12001__auto__ = function(state_171404){
switch(arguments.length){
case 0:
return cljs_browser_repl$actions$notebook$state_machine__12001__auto____0.call(this);
case 1:
return cljs_browser_repl$actions$notebook$state_machine__12001__auto____1.call(this,state_171404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$actions$notebook$state_machine__12001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$actions$notebook$state_machine__12001__auto____0;
cljs_browser_repl$actions$notebook$state_machine__12001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$actions$notebook$state_machine__12001__auto____1;
return cljs_browser_repl$actions$notebook$state_machine__12001__auto__;
})()
;})(switch__12000__auto__,c__12023__auto__))
})();
var state__12025__auto__ = (function (){var statearr_171411 = f__12024__auto__.call(null);
(statearr_171411[(6)] = c__12023__auto__);

return statearr_171411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12025__auto__);
});})(c__12023__auto__))
);

return c__12023__auto__;
});

cljs_browser_repl.actions.notebook.from_filesystem_BANG_.cljs$lang$maxFixedArity = 4;

cljs_browser_repl.actions.notebook.reader_load_BANG_ = (function cljs_browser_repl$actions$notebook$reader_load_BANG_(reader_event){
var content = reader_event.target.result;
var loaded_file = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook)).name;
cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.history,cljs.core.PersistentVector.EMPTY);

var loaded_file_171416__$1 = (cljs.core.truth_(cljs.core.re_find.call(null,/_/,loaded_file))?clojure.string.split.call(null,loaded_file,/_/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loaded_file,"loaded"], null));
cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),loaded_file_171416__$1.call(null,(0)),new cljs.core.Keyword(null,"file-name","file-name",-1654217259),loaded_file_171416__$1.call(null,(1)),new cljs.core.Keyword(null,"cmds","cmds",-1841503952),cljs_browser_repl.net.file.commands_from_string.call(null,content),new cljs.core.Keyword(null,"position","position",-2011731912),(0));

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
