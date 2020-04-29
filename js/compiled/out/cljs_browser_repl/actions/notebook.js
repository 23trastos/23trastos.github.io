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
return cljs.core.mapv.call(null,(function (p1__22372_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__22372_SHARP_),new cljs.core.Keyword(null,"stop","stop",-2140911342))){
return cljs.core.assoc.call(null,p1__22372_SHARP_,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true);
} else {
return p1__22372_SHARP_;
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
var position_22380 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var started_QMARK__22381 = typeof position_22380 === 'number';
var map__22373_22382 = cljs_browser_repl.state.current_command.call(null,cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var map__22373_22383__$1 = ((((!((map__22373_22382 == null)))?(((((map__22373_22382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22373_22382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22373_22382):map__22373_22382);
var cmd_22384 = map__22373_22383__$1;
var type_22385 = cljs.core.get.call(null,map__22373_22383__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(((started_QMARK__22381) && (cljs.core._EQ_.call(null,type_22385,new cljs.core.Keyword(null,"stop","stop",-2140911342))))){
cljs_browser_repl.actions.notebook.disable_stops_BANG_.call(null);

cljs_browser_repl.actions.notebook.add_separator_BANG_.call(null);

cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.update,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.inc);
} else {
}

var temp__5457__auto__ = cljs_browser_repl.state.current_command.call(null,cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
if(cljs.core.truth_(temp__5457__auto__)){
var map__22375 = temp__5457__auto__;
var map__22375__$1 = ((((!((map__22375 == null)))?(((((map__22375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22375):map__22375);
var cmd = map__22375__$1;
var type = cljs.core.get.call(null,map__22375__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var pos = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})();
while(true){
var cmds = new cljs.core.Keyword(null,"cmds","cmds",-1841503952).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var map__22377 = cljs.core.nth.call(null,cmds,pos);
var map__22377__$1 = ((((!((map__22377 == null)))?(((((map__22377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22377):map__22377);
var cmd__$1 = map__22377__$1;
var type__$1 = cljs.core.get.call(null,map__22377__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__22377__$1,new cljs.core.Keyword(null,"value","value",305978217));
var silent_QMARK_ = cljs.core.get.call(null,map__22377__$1,new cljs.core.Keyword(null,"silent?","silent?",-1639424539));
var deaf_QMARK_ = cljs.core.get.call(null,map__22377__$1,new cljs.core.Keyword(null,"deaf?","deaf?",-918805966));
var new_pos = (pos + (1));
var G__22379_22386 = type__$1;
var G__22379_22387__$1 = (((G__22379_22386 instanceof cljs.core.Keyword))?G__22379_22386.fqn:null);
switch (G__22379_22387__$1) {
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

var G__22389 = new_pos;
pos = G__22389;
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
var G__22391 = arguments.length;
switch (G__22391) {
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

var c__11176__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11176__auto__){
return (function (){
var f__11177__auto__ = (function (){var switch__11153__auto__ = ((function (c__11176__auto__){
return (function (state_22400){
var state_val_22401 = (state_22400[(1)]);
if((state_val_22401 === (1))){
var inst_22392 = cljs_browser_repl.net.gist.get_BANG_.call(null,id);
var state_22400__$1 = state_22400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22400__$1,(2),inst_22392);
} else {
if((state_val_22401 === (2))){
var inst_22394 = (state_22400[(2)]);
var inst_22395 = cljs_browser_repl.net.gist.get_commands.call(null,inst_22394,file_name);
var inst_22396 = cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs_browser_repl.state.empty_notebook);
var inst_22397 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"gist","gist",96143031),inst_22394,new cljs.core.Keyword(null,"cmds","cmds",-1841503952),inst_22395);
var inst_22398 = cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
var state_22400__$1 = (function (){var statearr_22402 = state_22400;
(statearr_22402[(7)] = inst_22396);

(statearr_22402[(8)] = inst_22397);

return statearr_22402;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22400__$1,inst_22398);
} else {
return null;
}
}
});})(c__11176__auto__))
;
return ((function (switch__11153__auto__,c__11176__auto__){
return (function() {
var cljs_browser_repl$actions$notebook$state_machine__11154__auto__ = null;
var cljs_browser_repl$actions$notebook$state_machine__11154__auto____0 = (function (){
var statearr_22403 = [null,null,null,null,null,null,null,null,null];
(statearr_22403[(0)] = cljs_browser_repl$actions$notebook$state_machine__11154__auto__);

(statearr_22403[(1)] = (1));

return statearr_22403;
});
var cljs_browser_repl$actions$notebook$state_machine__11154__auto____1 = (function (state_22400){
while(true){
var ret_value__11155__auto__ = (function (){try{while(true){
var result__11156__auto__ = switch__11153__auto__.call(null,state_22400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11156__auto__;
}
break;
}
}catch (e22404){var ex__11157__auto__ = e22404;
var statearr_22405_22409 = state_22400;
(statearr_22405_22409[(2)] = ex__11157__auto__);


if(cljs.core.seq.call(null,(state_22400[(4)]))){
var statearr_22406_22410 = state_22400;
(statearr_22406_22410[(1)] = cljs.core.first.call(null,(state_22400[(4)])));

} else {
throw ex__11157__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22411 = state_22400;
state_22400 = G__22411;
continue;
} else {
return ret_value__11155__auto__;
}
break;
}
});
cljs_browser_repl$actions$notebook$state_machine__11154__auto__ = function(state_22400){
switch(arguments.length){
case 0:
return cljs_browser_repl$actions$notebook$state_machine__11154__auto____0.call(this);
case 1:
return cljs_browser_repl$actions$notebook$state_machine__11154__auto____1.call(this,state_22400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$actions$notebook$state_machine__11154__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$actions$notebook$state_machine__11154__auto____0;
cljs_browser_repl$actions$notebook$state_machine__11154__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$actions$notebook$state_machine__11154__auto____1;
return cljs_browser_repl$actions$notebook$state_machine__11154__auto__;
})()
;})(switch__11153__auto__,c__11176__auto__))
})();
var state__11178__auto__ = (function (){var statearr_22407 = f__11177__auto__.call(null);
(statearr_22407[(6)] = c__11176__auto__);

return statearr_22407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11178__auto__);
});})(c__11176__auto__))
);

return c__11176__auto__;
}
});

cljs_browser_repl.actions.notebook.from_gist_BANG_.cljs$lang$maxFixedArity = 2;

cljs_browser_repl.actions.notebook.goto_BANG_ = (function cljs_browser_repl$actions$notebook$goto_BANG_(pos){
cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"position","position",-2011731912),pos);

return cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
});
cljs_browser_repl.actions.notebook.from_filesystem_BANG_ = (function cljs_browser_repl$actions$notebook$from_filesystem_BANG_(var_args){
var G__22413 = arguments.length;
switch (G__22413) {
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

var c__11176__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11176__auto__){
return (function (){
var f__11177__auto__ = (function (){var switch__11153__auto__ = ((function (c__11176__auto__){
return (function (state_22424){
var state_val_22425 = (state_22424[(1)]);
if((state_val_22425 === (1))){
var inst_22414 = cljs_browser_repl.net.file.get_BANG_.call(null,id,file_name);
var state_22424__$1 = state_22424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22424__$1,(2),inst_22414);
} else {
if((state_val_22425 === (2))){
var inst_22416 = (state_22424[(2)]);
var inst_22417 = cljs_browser_repl.net.file.get_commands.call(null,inst_22416);
var inst_22418 = cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs_browser_repl.state.empty_notebook);
var inst_22419 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"file-name","file-name",-1654217259),file_name,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22416,new cljs.core.Keyword(null,"cmds","cmds",-1841503952),inst_22417,new cljs.core.Keyword(null,"position","position",-2011731912),position);
var inst_22420 = ["loaded '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"' from '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"' notebook."].join('');
var inst_22421 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.repl_info,cljs.core.assoc,new cljs.core.Keyword(null,"type","type",1174270348),"log",new cljs.core.Keyword(null,"msg","msg",-1386103444),inst_22420);
var inst_22422 = cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
var state_22424__$1 = (function (){var statearr_22426 = state_22424;
(statearr_22426[(7)] = inst_22419);

(statearr_22426[(8)] = inst_22421);

(statearr_22426[(9)] = inst_22418);

return statearr_22426;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22424__$1,inst_22422);
} else {
return null;
}
}
});})(c__11176__auto__))
;
return ((function (switch__11153__auto__,c__11176__auto__){
return (function() {
var cljs_browser_repl$actions$notebook$state_machine__11154__auto__ = null;
var cljs_browser_repl$actions$notebook$state_machine__11154__auto____0 = (function (){
var statearr_22427 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22427[(0)] = cljs_browser_repl$actions$notebook$state_machine__11154__auto__);

(statearr_22427[(1)] = (1));

return statearr_22427;
});
var cljs_browser_repl$actions$notebook$state_machine__11154__auto____1 = (function (state_22424){
while(true){
var ret_value__11155__auto__ = (function (){try{while(true){
var result__11156__auto__ = switch__11153__auto__.call(null,state_22424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11156__auto__;
}
break;
}
}catch (e22428){var ex__11157__auto__ = e22428;
var statearr_22429_22433 = state_22424;
(statearr_22429_22433[(2)] = ex__11157__auto__);


if(cljs.core.seq.call(null,(state_22424[(4)]))){
var statearr_22430_22434 = state_22424;
(statearr_22430_22434[(1)] = cljs.core.first.call(null,(state_22424[(4)])));

} else {
throw ex__11157__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22435 = state_22424;
state_22424 = G__22435;
continue;
} else {
return ret_value__11155__auto__;
}
break;
}
});
cljs_browser_repl$actions$notebook$state_machine__11154__auto__ = function(state_22424){
switch(arguments.length){
case 0:
return cljs_browser_repl$actions$notebook$state_machine__11154__auto____0.call(this);
case 1:
return cljs_browser_repl$actions$notebook$state_machine__11154__auto____1.call(this,state_22424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$actions$notebook$state_machine__11154__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$actions$notebook$state_machine__11154__auto____0;
cljs_browser_repl$actions$notebook$state_machine__11154__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$actions$notebook$state_machine__11154__auto____1;
return cljs_browser_repl$actions$notebook$state_machine__11154__auto__;
})()
;})(switch__11153__auto__,c__11176__auto__))
})();
var state__11178__auto__ = (function (){var statearr_22431 = f__11177__auto__.call(null);
(statearr_22431[(6)] = c__11176__auto__);

return statearr_22431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11178__auto__);
});})(c__11176__auto__))
);

return c__11176__auto__;
});

cljs_browser_repl.actions.notebook.from_filesystem_BANG_.cljs$lang$maxFixedArity = 4;

cljs_browser_repl.actions.notebook.reader_load_BANG_ = (function cljs_browser_repl$actions$notebook$reader_load_BANG_(reader_event){
var content = reader_event.target.result;
var loaded_file = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook)).name;
cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.history,cljs.core.PersistentVector.EMPTY);

var loaded_file_22436__$1 = (cljs.core.truth_(cljs.core.re_find.call(null,/_/,loaded_file))?clojure.string.split.call(null,loaded_file,/_/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loaded_file,"loaded"], null));
cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),loaded_file_22436__$1.call(null,(0)),new cljs.core.Keyword(null,"file-name","file-name",-1654217259),loaded_file_22436__$1.call(null,(1)),new cljs.core.Keyword(null,"cmds","cmds",-1841503952),cljs_browser_repl.net.file.commands_from_string.call(null,content),new cljs.core.Keyword(null,"position","position",-2011731912),(0));

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
