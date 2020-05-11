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
return cljs.core.mapv.call(null,(function (p1__11637_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__11637_SHARP_),new cljs.core.Keyword(null,"stop","stop",-2140911342))){
return cljs.core.assoc.call(null,p1__11637_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"separator","separator",-1628749125));
} else {
return p1__11637_SHARP_;
}
}),h);
}));
});
cljs_browser_repl.actions.notebook.play_notebook_BANG_ = (function cljs_browser_repl$actions$notebook$play_notebook_BANG_(){
var position_11645 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var started_QMARK__11646 = typeof position_11645 === 'number';
var map__11638_11647 = cljs_browser_repl.state.current_command.call(null,cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var map__11638_11648__$1 = ((((!((map__11638_11647 == null)))?(((((map__11638_11647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11638_11647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11638_11647):map__11638_11647);
var cmd_11649 = map__11638_11648__$1;
var type_11650 = cljs.core.get.call(null,map__11638_11648__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(((started_QMARK__11646) && (cljs.core._EQ_.call(null,type_11650,new cljs.core.Keyword(null,"stop","stop",-2140911342))))){
cljs_browser_repl.actions.notebook.disable_stops_BANG_.call(null);

cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.update,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.inc);
} else {
}

var temp__5457__auto__ = cljs_browser_repl.state.current_command.call(null,cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
if(cljs.core.truth_(temp__5457__auto__)){
var map__11640 = temp__5457__auto__;
var map__11640__$1 = ((((!((map__11640 == null)))?(((((map__11640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11640):map__11640);
var cmd = map__11640__$1;
var type = cljs.core.get.call(null,map__11640__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var pos = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})();
while(true){
var cmds = new cljs.core.Keyword(null,"cmds","cmds",-1841503952).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var map__11642 = cljs.core.nth.call(null,cmds,pos);
var map__11642__$1 = ((((!((map__11642 == null)))?(((((map__11642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11642):map__11642);
var cmd__$1 = map__11642__$1;
var type__$1 = cljs.core.get.call(null,map__11642__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__11642__$1,new cljs.core.Keyword(null,"value","value",305978217));
var silent_QMARK_ = cljs.core.get.call(null,map__11642__$1,new cljs.core.Keyword(null,"silent?","silent?",-1639424539));
var deaf_QMARK_ = cljs.core.get.call(null,map__11642__$1,new cljs.core.Keyword(null,"deaf?","deaf?",-918805966));
var new_pos = (pos + (1));
var G__11644_11651 = type__$1;
var G__11644_11652__$1 = (((G__11644_11651 instanceof cljs.core.Keyword))?G__11644_11651.fqn:null);
switch (G__11644_11652__$1) {
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

var G__11654 = new_pos;
pos = G__11654;
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
var G__11656 = arguments.length;
switch (G__11656) {
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
return (function (state_11665){
var state_val_11666 = (state_11665[(1)]);
if((state_val_11666 === (1))){
var inst_11657 = cljs_browser_repl.net.gist.get_BANG_.call(null,id);
var state_11665__$1 = state_11665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11665__$1,(2),inst_11657);
} else {
if((state_val_11666 === (2))){
var inst_11659 = (state_11665[(2)]);
var inst_11660 = cljs_browser_repl.net.gist.get_commands.call(null,inst_11659,file_name);
var inst_11661 = cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs_browser_repl.state.empty_notebook);
var inst_11662 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"gist","gist",96143031),inst_11659,new cljs.core.Keyword(null,"cmds","cmds",-1841503952),inst_11660);
var inst_11663 = cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
var state_11665__$1 = (function (){var statearr_11667 = state_11665;
(statearr_11667[(7)] = inst_11662);

(statearr_11667[(8)] = inst_11661);

return statearr_11667;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11665__$1,inst_11663);
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
var statearr_11668 = [null,null,null,null,null,null,null,null,null];
(statearr_11668[(0)] = cljs_browser_repl$actions$notebook$state_machine__11154__auto__);

(statearr_11668[(1)] = (1));

return statearr_11668;
});
var cljs_browser_repl$actions$notebook$state_machine__11154__auto____1 = (function (state_11665){
while(true){
var ret_value__11155__auto__ = (function (){try{while(true){
var result__11156__auto__ = switch__11153__auto__.call(null,state_11665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11156__auto__;
}
break;
}
}catch (e11669){var ex__11157__auto__ = e11669;
var statearr_11670_11674 = state_11665;
(statearr_11670_11674[(2)] = ex__11157__auto__);


if(cljs.core.seq.call(null,(state_11665[(4)]))){
var statearr_11671_11675 = state_11665;
(statearr_11671_11675[(1)] = cljs.core.first.call(null,(state_11665[(4)])));

} else {
throw ex__11157__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11676 = state_11665;
state_11665 = G__11676;
continue;
} else {
return ret_value__11155__auto__;
}
break;
}
});
cljs_browser_repl$actions$notebook$state_machine__11154__auto__ = function(state_11665){
switch(arguments.length){
case 0:
return cljs_browser_repl$actions$notebook$state_machine__11154__auto____0.call(this);
case 1:
return cljs_browser_repl$actions$notebook$state_machine__11154__auto____1.call(this,state_11665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$actions$notebook$state_machine__11154__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$actions$notebook$state_machine__11154__auto____0;
cljs_browser_repl$actions$notebook$state_machine__11154__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$actions$notebook$state_machine__11154__auto____1;
return cljs_browser_repl$actions$notebook$state_machine__11154__auto__;
})()
;})(switch__11153__auto__,c__11176__auto__))
})();
var state__11178__auto__ = (function (){var statearr_11672 = f__11177__auto__.call(null);
(statearr_11672[(6)] = c__11176__auto__);

return statearr_11672;
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
var G__11678 = arguments.length;
switch (G__11678) {
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
return (function (state_11689){
var state_val_11690 = (state_11689[(1)]);
if((state_val_11690 === (1))){
var inst_11679 = cljs_browser_repl.net.file.get_BANG_.call(null,id,file_name);
var state_11689__$1 = state_11689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11689__$1,(2),inst_11679);
} else {
if((state_val_11690 === (2))){
var inst_11681 = (state_11689[(2)]);
var inst_11682 = cljs_browser_repl.net.file.get_commands.call(null,inst_11681);
var inst_11683 = cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs_browser_repl.state.empty_notebook);
var inst_11684 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"file-name","file-name",-1654217259),file_name,new cljs.core.Keyword(null,"file","file",-1269645878),inst_11681,new cljs.core.Keyword(null,"cmds","cmds",-1841503952),inst_11682,new cljs.core.Keyword(null,"position","position",-2011731912),position);
var inst_11685 = ["loaded '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"' from '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"' notebook."].join('');
var inst_11686 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.repl_info,cljs.core.assoc,new cljs.core.Keyword(null,"type","type",1174270348),"log",new cljs.core.Keyword(null,"msg","msg",-1386103444),inst_11685);
var inst_11687 = cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
var state_11689__$1 = (function (){var statearr_11691 = state_11689;
(statearr_11691[(7)] = inst_11683);

(statearr_11691[(8)] = inst_11684);

(statearr_11691[(9)] = inst_11686);

return statearr_11691;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11689__$1,inst_11687);
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
var statearr_11692 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11692[(0)] = cljs_browser_repl$actions$notebook$state_machine__11154__auto__);

(statearr_11692[(1)] = (1));

return statearr_11692;
});
var cljs_browser_repl$actions$notebook$state_machine__11154__auto____1 = (function (state_11689){
while(true){
var ret_value__11155__auto__ = (function (){try{while(true){
var result__11156__auto__ = switch__11153__auto__.call(null,state_11689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11156__auto__;
}
break;
}
}catch (e11693){var ex__11157__auto__ = e11693;
var statearr_11694_11698 = state_11689;
(statearr_11694_11698[(2)] = ex__11157__auto__);


if(cljs.core.seq.call(null,(state_11689[(4)]))){
var statearr_11695_11699 = state_11689;
(statearr_11695_11699[(1)] = cljs.core.first.call(null,(state_11689[(4)])));

} else {
throw ex__11157__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11700 = state_11689;
state_11689 = G__11700;
continue;
} else {
return ret_value__11155__auto__;
}
break;
}
});
cljs_browser_repl$actions$notebook$state_machine__11154__auto__ = function(state_11689){
switch(arguments.length){
case 0:
return cljs_browser_repl$actions$notebook$state_machine__11154__auto____0.call(this);
case 1:
return cljs_browser_repl$actions$notebook$state_machine__11154__auto____1.call(this,state_11689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$actions$notebook$state_machine__11154__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$actions$notebook$state_machine__11154__auto____0;
cljs_browser_repl$actions$notebook$state_machine__11154__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$actions$notebook$state_machine__11154__auto____1;
return cljs_browser_repl$actions$notebook$state_machine__11154__auto__;
})()
;})(switch__11153__auto__,c__11176__auto__))
})();
var state__11178__auto__ = (function (){var statearr_11696 = f__11177__auto__.call(null);
(statearr_11696[(6)] = c__11176__auto__);

return statearr_11696;
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

var loaded_file_11701__$1 = (cljs.core.truth_(cljs.core.re_find.call(null,/_/,loaded_file))?clojure.string.split.call(null,loaded_file,/_/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loaded_file,"loaded"], null));
cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),loaded_file_11701__$1.call(null,(0)),new cljs.core.Keyword(null,"file-name","file-name",-1654217259),loaded_file_11701__$1.call(null,(1)),new cljs.core.Keyword(null,"cmds","cmds",-1841503952),cljs_browser_repl.net.file.commands_from_string.call(null,content),new cljs.core.Keyword(null,"position","position",-2011731912),(0));

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
