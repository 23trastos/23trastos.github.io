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
return cljs.core.mapv.call(null,(function (p1__27291_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__27291_SHARP_),new cljs.core.Keyword(null,"stop","stop",-2140911342))){
return cljs.core.assoc.call(null,p1__27291_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"separator","separator",-1628749125));
} else {
return p1__27291_SHARP_;
}
}),h);
}));
});
cljs_browser_repl.actions.notebook.play_notebook_BANG_ = (function cljs_browser_repl$actions$notebook$play_notebook_BANG_(){
var position_27299 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var started_QMARK__27300 = typeof position_27299 === 'number';
var map__27292_27301 = cljs_browser_repl.state.current_command.call(null,cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var map__27292_27302__$1 = ((((!((map__27292_27301 == null)))?(((((map__27292_27301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27292_27301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27292_27301):map__27292_27301);
var cmd_27303 = map__27292_27302__$1;
var type_27304 = cljs.core.get.call(null,map__27292_27302__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(((started_QMARK__27300) && (cljs.core._EQ_.call(null,type_27304,new cljs.core.Keyword(null,"stop","stop",-2140911342))))){
cljs_browser_repl.actions.notebook.disable_stops_BANG_.call(null);

cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.update,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.inc);
} else {
}

var temp__5457__auto__ = cljs_browser_repl.state.current_command.call(null,cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
if(cljs.core.truth_(temp__5457__auto__)){
var map__27294 = temp__5457__auto__;
var map__27294__$1 = ((((!((map__27294 == null)))?(((((map__27294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27294):map__27294);
var cmd = map__27294__$1;
var type = cljs.core.get.call(null,map__27294__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var pos = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})();
while(true){
var cmds = new cljs.core.Keyword(null,"cmds","cmds",-1841503952).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var map__27296 = cljs.core.nth.call(null,cmds,pos);
var map__27296__$1 = ((((!((map__27296 == null)))?(((((map__27296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27296):map__27296);
var cmd__$1 = map__27296__$1;
var type__$1 = cljs.core.get.call(null,map__27296__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__27296__$1,new cljs.core.Keyword(null,"value","value",305978217));
var silent_QMARK_ = cljs.core.get.call(null,map__27296__$1,new cljs.core.Keyword(null,"silent?","silent?",-1639424539));
var deaf_QMARK_ = cljs.core.get.call(null,map__27296__$1,new cljs.core.Keyword(null,"deaf?","deaf?",-918805966));
var new_pos = (pos + (1));
var G__27298_27305 = type__$1;
var G__27298_27306__$1 = (((G__27298_27305 instanceof cljs.core.Keyword))?G__27298_27305.fqn:null);
switch (G__27298_27306__$1) {
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

var G__27308 = new_pos;
pos = G__27308;
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
var G__27310 = arguments.length;
switch (G__27310) {
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

var c__11553__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11553__auto__){
return (function (){
var f__11554__auto__ = (function (){var switch__11530__auto__ = ((function (c__11553__auto__){
return (function (state_27319){
var state_val_27320 = (state_27319[(1)]);
if((state_val_27320 === (1))){
var inst_27311 = cljs_browser_repl.net.gist.get_BANG_.call(null,id);
var state_27319__$1 = state_27319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27319__$1,(2),inst_27311);
} else {
if((state_val_27320 === (2))){
var inst_27313 = (state_27319[(2)]);
var inst_27314 = cljs_browser_repl.net.gist.get_commands.call(null,inst_27313,file_name);
var inst_27315 = cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs_browser_repl.state.empty_notebook);
var inst_27316 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"gist","gist",96143031),inst_27313,new cljs.core.Keyword(null,"cmds","cmds",-1841503952),inst_27314);
var inst_27317 = cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
var state_27319__$1 = (function (){var statearr_27321 = state_27319;
(statearr_27321[(7)] = inst_27316);

(statearr_27321[(8)] = inst_27315);

return statearr_27321;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27319__$1,inst_27317);
} else {
return null;
}
}
});})(c__11553__auto__))
;
return ((function (switch__11530__auto__,c__11553__auto__){
return (function() {
var cljs_browser_repl$actions$notebook$state_machine__11531__auto__ = null;
var cljs_browser_repl$actions$notebook$state_machine__11531__auto____0 = (function (){
var statearr_27322 = [null,null,null,null,null,null,null,null,null];
(statearr_27322[(0)] = cljs_browser_repl$actions$notebook$state_machine__11531__auto__);

(statearr_27322[(1)] = (1));

return statearr_27322;
});
var cljs_browser_repl$actions$notebook$state_machine__11531__auto____1 = (function (state_27319){
while(true){
var ret_value__11532__auto__ = (function (){try{while(true){
var result__11533__auto__ = switch__11530__auto__.call(null,state_27319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11533__auto__;
}
break;
}
}catch (e27323){var ex__11534__auto__ = e27323;
var statearr_27324_27328 = state_27319;
(statearr_27324_27328[(2)] = ex__11534__auto__);


if(cljs.core.seq.call(null,(state_27319[(4)]))){
var statearr_27325_27329 = state_27319;
(statearr_27325_27329[(1)] = cljs.core.first.call(null,(state_27319[(4)])));

} else {
throw ex__11534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27330 = state_27319;
state_27319 = G__27330;
continue;
} else {
return ret_value__11532__auto__;
}
break;
}
});
cljs_browser_repl$actions$notebook$state_machine__11531__auto__ = function(state_27319){
switch(arguments.length){
case 0:
return cljs_browser_repl$actions$notebook$state_machine__11531__auto____0.call(this);
case 1:
return cljs_browser_repl$actions$notebook$state_machine__11531__auto____1.call(this,state_27319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$actions$notebook$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$actions$notebook$state_machine__11531__auto____0;
cljs_browser_repl$actions$notebook$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$actions$notebook$state_machine__11531__auto____1;
return cljs_browser_repl$actions$notebook$state_machine__11531__auto__;
})()
;})(switch__11530__auto__,c__11553__auto__))
})();
var state__11555__auto__ = (function (){var statearr_27326 = f__11554__auto__.call(null);
(statearr_27326[(6)] = c__11553__auto__);

return statearr_27326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11555__auto__);
});})(c__11553__auto__))
);

return c__11553__auto__;
}
});

cljs_browser_repl.actions.notebook.from_gist_BANG_.cljs$lang$maxFixedArity = 2;

cljs_browser_repl.actions.notebook.goto_BANG_ = (function cljs_browser_repl$actions$notebook$goto_BANG_(pos){
cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"position","position",-2011731912),pos);

return cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
});
cljs_browser_repl.actions.notebook.from_filesystem_BANG_ = (function cljs_browser_repl$actions$notebook$from_filesystem_BANG_(var_args){
var G__27332 = arguments.length;
switch (G__27332) {
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

var c__11553__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__11553__auto__){
return (function (){
var f__11554__auto__ = (function (){var switch__11530__auto__ = ((function (c__11553__auto__){
return (function (state_27343){
var state_val_27344 = (state_27343[(1)]);
if((state_val_27344 === (1))){
var inst_27333 = cljs_browser_repl.net.file.get_BANG_.call(null,id,file_name);
var state_27343__$1 = state_27343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27343__$1,(2),inst_27333);
} else {
if((state_val_27344 === (2))){
var inst_27335 = (state_27343[(2)]);
var inst_27336 = cljs_browser_repl.net.file.get_commands.call(null,inst_27335);
var inst_27337 = cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs_browser_repl.state.empty_notebook);
var inst_27338 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"file-name","file-name",-1654217259),file_name,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27335,new cljs.core.Keyword(null,"cmds","cmds",-1841503952),inst_27336,new cljs.core.Keyword(null,"position","position",-2011731912),position);
var inst_27339 = ["loaded '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"' from '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"' notebook."].join('');
var inst_27340 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.repl_info,cljs.core.assoc,new cljs.core.Keyword(null,"type","type",1174270348),"log",new cljs.core.Keyword(null,"msg","msg",-1386103444),inst_27339);
var inst_27341 = cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
var state_27343__$1 = (function (){var statearr_27345 = state_27343;
(statearr_27345[(7)] = inst_27338);

(statearr_27345[(8)] = inst_27337);

(statearr_27345[(9)] = inst_27340);

return statearr_27345;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27343__$1,inst_27341);
} else {
return null;
}
}
});})(c__11553__auto__))
;
return ((function (switch__11530__auto__,c__11553__auto__){
return (function() {
var cljs_browser_repl$actions$notebook$state_machine__11531__auto__ = null;
var cljs_browser_repl$actions$notebook$state_machine__11531__auto____0 = (function (){
var statearr_27346 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27346[(0)] = cljs_browser_repl$actions$notebook$state_machine__11531__auto__);

(statearr_27346[(1)] = (1));

return statearr_27346;
});
var cljs_browser_repl$actions$notebook$state_machine__11531__auto____1 = (function (state_27343){
while(true){
var ret_value__11532__auto__ = (function (){try{while(true){
var result__11533__auto__ = switch__11530__auto__.call(null,state_27343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11533__auto__;
}
break;
}
}catch (e27347){var ex__11534__auto__ = e27347;
var statearr_27348_27352 = state_27343;
(statearr_27348_27352[(2)] = ex__11534__auto__);


if(cljs.core.seq.call(null,(state_27343[(4)]))){
var statearr_27349_27353 = state_27343;
(statearr_27349_27353[(1)] = cljs.core.first.call(null,(state_27343[(4)])));

} else {
throw ex__11534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27354 = state_27343;
state_27343 = G__27354;
continue;
} else {
return ret_value__11532__auto__;
}
break;
}
});
cljs_browser_repl$actions$notebook$state_machine__11531__auto__ = function(state_27343){
switch(arguments.length){
case 0:
return cljs_browser_repl$actions$notebook$state_machine__11531__auto____0.call(this);
case 1:
return cljs_browser_repl$actions$notebook$state_machine__11531__auto____1.call(this,state_27343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$actions$notebook$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$actions$notebook$state_machine__11531__auto____0;
cljs_browser_repl$actions$notebook$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$actions$notebook$state_machine__11531__auto____1;
return cljs_browser_repl$actions$notebook$state_machine__11531__auto__;
})()
;})(switch__11530__auto__,c__11553__auto__))
})();
var state__11555__auto__ = (function (){var statearr_27350 = f__11554__auto__.call(null);
(statearr_27350[(6)] = c__11553__auto__);

return statearr_27350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__11555__auto__);
});})(c__11553__auto__))
);

return c__11553__auto__;
});

cljs_browser_repl.actions.notebook.from_filesystem_BANG_.cljs$lang$maxFixedArity = 4;

cljs_browser_repl.actions.notebook.reader_load_BANG_ = (function cljs_browser_repl$actions$notebook$reader_load_BANG_(reader_event){
var content = reader_event.target.result;
var loaded_file = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook)).name;
cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.history,cljs.core.PersistentVector.EMPTY);

var loaded_file_27355__$1 = (cljs.core.truth_(cljs.core.re_find.call(null,/_/,loaded_file))?clojure.string.split.call(null,loaded_file,/_/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loaded_file,"loaded"], null));
cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),loaded_file_27355__$1.call(null,(0)),new cljs.core.Keyword(null,"file-name","file-name",-1654217259),loaded_file_27355__$1.call(null,(1)),new cljs.core.Keyword(null,"cmds","cmds",-1841503952),cljs_browser_repl.net.file.commands_from_string.call(null,content),new cljs.core.Keyword(null,"position","position",-2011731912),(0));

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
