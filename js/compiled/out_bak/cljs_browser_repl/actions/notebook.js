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
return cljs.core.mapv.call(null,(function (p1__20342_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__20342_SHARP_),new cljs.core.Keyword(null,"stop","stop",-2140911342))){
return cljs.core.assoc.call(null,p1__20342_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"separator","separator",-1628749125));
} else {
return p1__20342_SHARP_;
}
}),h);
}));
});
cljs_browser_repl.actions.notebook.play_notebook_BANG_ = (function cljs_browser_repl$actions$notebook$play_notebook_BANG_(){
var position_20350 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var started_QMARK__20351 = typeof position_20350 === 'number';
var map__20343_20352 = cljs_browser_repl.state.current_command.call(null,cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var map__20343_20353__$1 = ((((!((map__20343_20352 == null)))?(((((map__20343_20352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20343_20352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20343_20352):map__20343_20352);
var cmd_20354 = map__20343_20353__$1;
var type_20355 = cljs.core.get.call(null,map__20343_20353__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(((started_QMARK__20351) && (cljs.core._EQ_.call(null,type_20355,new cljs.core.Keyword(null,"stop","stop",-2140911342))))){
cljs_browser_repl.actions.notebook.disable_stops_BANG_.call(null);

cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.update,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.inc);
} else {
}

var temp__5457__auto__ = cljs_browser_repl.state.current_command.call(null,cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
if(cljs.core.truth_(temp__5457__auto__)){
var map__20345 = temp__5457__auto__;
var map__20345__$1 = ((((!((map__20345 == null)))?(((((map__20345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20345):map__20345);
var cmd = map__20345__$1;
var type = cljs.core.get.call(null,map__20345__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var pos = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})();
while(true){
var cmds = new cljs.core.Keyword(null,"cmds","cmds",-1841503952).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var map__20347 = cljs.core.nth.call(null,cmds,pos);
var map__20347__$1 = ((((!((map__20347 == null)))?(((((map__20347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20347):map__20347);
var cmd__$1 = map__20347__$1;
var type__$1 = cljs.core.get.call(null,map__20347__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__20347__$1,new cljs.core.Keyword(null,"value","value",305978217));
var silent_QMARK_ = cljs.core.get.call(null,map__20347__$1,new cljs.core.Keyword(null,"silent?","silent?",-1639424539));
var deaf_QMARK_ = cljs.core.get.call(null,map__20347__$1,new cljs.core.Keyword(null,"deaf?","deaf?",-918805966));
var new_pos = (pos + (1));
var G__20349_20356 = type__$1;
var G__20349_20357__$1 = (((G__20349_20356 instanceof cljs.core.Keyword))?G__20349_20356.fqn:null);
switch (G__20349_20357__$1) {
case "lock":
cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.locked,true);

break;
case "unlock":
cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.locked,false);

break;
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

var G__20359 = new_pos;
pos = G__20359;
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
var G__20361 = arguments.length;
switch (G__20361) {
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

var c__14795__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14795__auto__){
return (function (){
var f__14796__auto__ = (function (){var switch__14721__auto__ = ((function (c__14795__auto__){
return (function (state_20370){
var state_val_20371 = (state_20370[(1)]);
if((state_val_20371 === (1))){
var inst_20362 = cljs_browser_repl.net.gist.get_BANG_.call(null,id);
var state_20370__$1 = state_20370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20370__$1,(2),inst_20362);
} else {
if((state_val_20371 === (2))){
var inst_20364 = (state_20370[(2)]);
var inst_20365 = cljs_browser_repl.net.gist.get_commands.call(null,inst_20364,file_name);
var inst_20366 = cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs_browser_repl.state.empty_notebook);
var inst_20367 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"gist","gist",96143031),inst_20364,new cljs.core.Keyword(null,"cmds","cmds",-1841503952),inst_20365);
var inst_20368 = cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
var state_20370__$1 = (function (){var statearr_20372 = state_20370;
(statearr_20372[(7)] = inst_20367);

(statearr_20372[(8)] = inst_20366);

return statearr_20372;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20370__$1,inst_20368);
} else {
return null;
}
}
});})(c__14795__auto__))
;
return ((function (switch__14721__auto__,c__14795__auto__){
return (function() {
var cljs_browser_repl$actions$notebook$state_machine__14722__auto__ = null;
var cljs_browser_repl$actions$notebook$state_machine__14722__auto____0 = (function (){
var statearr_20373 = [null,null,null,null,null,null,null,null,null];
(statearr_20373[(0)] = cljs_browser_repl$actions$notebook$state_machine__14722__auto__);

(statearr_20373[(1)] = (1));

return statearr_20373;
});
var cljs_browser_repl$actions$notebook$state_machine__14722__auto____1 = (function (state_20370){
while(true){
var ret_value__14723__auto__ = (function (){try{while(true){
var result__14724__auto__ = switch__14721__auto__.call(null,state_20370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14724__auto__;
}
break;
}
}catch (e20374){var ex__14725__auto__ = e20374;
var statearr_20375_20379 = state_20370;
(statearr_20375_20379[(2)] = ex__14725__auto__);


if(cljs.core.seq.call(null,(state_20370[(4)]))){
var statearr_20376_20380 = state_20370;
(statearr_20376_20380[(1)] = cljs.core.first.call(null,(state_20370[(4)])));

} else {
throw ex__14725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20381 = state_20370;
state_20370 = G__20381;
continue;
} else {
return ret_value__14723__auto__;
}
break;
}
});
cljs_browser_repl$actions$notebook$state_machine__14722__auto__ = function(state_20370){
switch(arguments.length){
case 0:
return cljs_browser_repl$actions$notebook$state_machine__14722__auto____0.call(this);
case 1:
return cljs_browser_repl$actions$notebook$state_machine__14722__auto____1.call(this,state_20370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$actions$notebook$state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$actions$notebook$state_machine__14722__auto____0;
cljs_browser_repl$actions$notebook$state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$actions$notebook$state_machine__14722__auto____1;
return cljs_browser_repl$actions$notebook$state_machine__14722__auto__;
})()
;})(switch__14721__auto__,c__14795__auto__))
})();
var state__14797__auto__ = (function (){var statearr_20377 = f__14796__auto__.call(null);
(statearr_20377[(6)] = c__14795__auto__);

return statearr_20377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14797__auto__);
});})(c__14795__auto__))
);

return c__14795__auto__;
}
});

cljs_browser_repl.actions.notebook.from_gist_BANG_.cljs$lang$maxFixedArity = 2;

cljs_browser_repl.actions.notebook.goto_BANG_ = (function cljs_browser_repl$actions$notebook$goto_BANG_(pos){
cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"position","position",-2011731912),pos);

return cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
});
cljs_browser_repl.actions.notebook.from_filesystem_BANG_ = (function cljs_browser_repl$actions$notebook$from_filesystem_BANG_(var_args){
var G__20383 = arguments.length;
switch (G__20383) {
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

var c__14795__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14795__auto__){
return (function (){
var f__14796__auto__ = (function (){var switch__14721__auto__ = ((function (c__14795__auto__){
return (function (state_20394){
var state_val_20395 = (state_20394[(1)]);
if((state_val_20395 === (1))){
var inst_20384 = cljs_browser_repl.net.file.get_BANG_.call(null,id,file_name);
var state_20394__$1 = state_20394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20394__$1,(2),inst_20384);
} else {
if((state_val_20395 === (2))){
var inst_20386 = (state_20394[(2)]);
var inst_20387 = cljs_browser_repl.net.file.get_commands.call(null,inst_20386);
var inst_20388 = cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs_browser_repl.state.empty_notebook);
var inst_20389 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"file-name","file-name",-1654217259),file_name,new cljs.core.Keyword(null,"file","file",-1269645878),inst_20386,new cljs.core.Keyword(null,"cmds","cmds",-1841503952),inst_20387,new cljs.core.Keyword(null,"position","position",-2011731912),position);
var inst_20390 = ["loaded '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"' from '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"' notebook."].join('');
var inst_20391 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.repl_info,cljs.core.assoc,new cljs.core.Keyword(null,"type","type",1174270348),"log",new cljs.core.Keyword(null,"msg","msg",-1386103444),inst_20390);
var inst_20392 = cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
var state_20394__$1 = (function (){var statearr_20396 = state_20394;
(statearr_20396[(7)] = inst_20389);

(statearr_20396[(8)] = inst_20391);

(statearr_20396[(9)] = inst_20388);

return statearr_20396;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20394__$1,inst_20392);
} else {
return null;
}
}
});})(c__14795__auto__))
;
return ((function (switch__14721__auto__,c__14795__auto__){
return (function() {
var cljs_browser_repl$actions$notebook$state_machine__14722__auto__ = null;
var cljs_browser_repl$actions$notebook$state_machine__14722__auto____0 = (function (){
var statearr_20397 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20397[(0)] = cljs_browser_repl$actions$notebook$state_machine__14722__auto__);

(statearr_20397[(1)] = (1));

return statearr_20397;
});
var cljs_browser_repl$actions$notebook$state_machine__14722__auto____1 = (function (state_20394){
while(true){
var ret_value__14723__auto__ = (function (){try{while(true){
var result__14724__auto__ = switch__14721__auto__.call(null,state_20394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14724__auto__;
}
break;
}
}catch (e20398){var ex__14725__auto__ = e20398;
var statearr_20399_20403 = state_20394;
(statearr_20399_20403[(2)] = ex__14725__auto__);


if(cljs.core.seq.call(null,(state_20394[(4)]))){
var statearr_20400_20404 = state_20394;
(statearr_20400_20404[(1)] = cljs.core.first.call(null,(state_20394[(4)])));

} else {
throw ex__14725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20405 = state_20394;
state_20394 = G__20405;
continue;
} else {
return ret_value__14723__auto__;
}
break;
}
});
cljs_browser_repl$actions$notebook$state_machine__14722__auto__ = function(state_20394){
switch(arguments.length){
case 0:
return cljs_browser_repl$actions$notebook$state_machine__14722__auto____0.call(this);
case 1:
return cljs_browser_repl$actions$notebook$state_machine__14722__auto____1.call(this,state_20394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$actions$notebook$state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$actions$notebook$state_machine__14722__auto____0;
cljs_browser_repl$actions$notebook$state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$actions$notebook$state_machine__14722__auto____1;
return cljs_browser_repl$actions$notebook$state_machine__14722__auto__;
})()
;})(switch__14721__auto__,c__14795__auto__))
})();
var state__14797__auto__ = (function (){var statearr_20401 = f__14796__auto__.call(null);
(statearr_20401[(6)] = c__14795__auto__);

return statearr_20401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14797__auto__);
});})(c__14795__auto__))
);

return c__14795__auto__;
});

cljs_browser_repl.actions.notebook.from_filesystem_BANG_.cljs$lang$maxFixedArity = 4;

cljs_browser_repl.actions.notebook.reader_load_BANG_ = (function cljs_browser_repl$actions$notebook$reader_load_BANG_(reader_event){
var content = reader_event.target.result;
var loaded_file = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook)).name;
cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.history,cljs.core.PersistentVector.EMPTY);

var loaded_file_20406__$1 = (cljs.core.truth_(cljs.core.re_find.call(null,/_/,loaded_file))?clojure.string.split.call(null,loaded_file,/_/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loaded_file,"loaded"], null));
cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),loaded_file_20406__$1.call(null,(0)),new cljs.core.Keyword(null,"file-name","file-name",-1654217259),loaded_file_20406__$1.call(null,(1)),new cljs.core.Keyword(null,"cmds","cmds",-1841503952),cljs_browser_repl.net.file.commands_from_string.call(null,content),new cljs.core.Keyword(null,"position","position",-2011731912),(0));

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
