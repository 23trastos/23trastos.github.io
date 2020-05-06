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
return cljs.core.mapv.call(null,(function (p1__28795_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__28795_SHARP_),new cljs.core.Keyword(null,"stop","stop",-2140911342))){
return cljs.core.assoc.call(null,p1__28795_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"separator","separator",-1628749125));
} else {
return p1__28795_SHARP_;
}
}),h);
}));
});
cljs_browser_repl.actions.notebook.play_notebook_BANG_ = (function cljs_browser_repl$actions$notebook$play_notebook_BANG_(){
var position_28803 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var started_QMARK__28804 = typeof position_28803 === 'number';
var map__28796_28805 = cljs_browser_repl.state.current_command.call(null,cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var map__28796_28806__$1 = ((((!((map__28796_28805 == null)))?(((((map__28796_28805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28796_28805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28796_28805):map__28796_28805);
var cmd_28807 = map__28796_28806__$1;
var type_28808 = cljs.core.get.call(null,map__28796_28806__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(((started_QMARK__28804) && (cljs.core._EQ_.call(null,type_28808,new cljs.core.Keyword(null,"stop","stop",-2140911342))))){
cljs_browser_repl.actions.notebook.disable_stops_BANG_.call(null);

cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.update,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.inc);
} else {
}

var temp__5457__auto__ = cljs_browser_repl.state.current_command.call(null,cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
if(cljs.core.truth_(temp__5457__auto__)){
var map__28798 = temp__5457__auto__;
var map__28798__$1 = ((((!((map__28798 == null)))?(((((map__28798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28798):map__28798);
var cmd = map__28798__$1;
var type = cljs.core.get.call(null,map__28798__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var pos = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})();
while(true){
var cmds = new cljs.core.Keyword(null,"cmds","cmds",-1841503952).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var map__28800 = cljs.core.nth.call(null,cmds,pos);
var map__28800__$1 = ((((!((map__28800 == null)))?(((((map__28800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28800):map__28800);
var cmd__$1 = map__28800__$1;
var type__$1 = cljs.core.get.call(null,map__28800__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__28800__$1,new cljs.core.Keyword(null,"value","value",305978217));
var silent_QMARK_ = cljs.core.get.call(null,map__28800__$1,new cljs.core.Keyword(null,"silent?","silent?",-1639424539));
var deaf_QMARK_ = cljs.core.get.call(null,map__28800__$1,new cljs.core.Keyword(null,"deaf?","deaf?",-918805966));
var new_pos = (pos + (1));
var G__28802_28809 = type__$1;
var G__28802_28810__$1 = (((G__28802_28809 instanceof cljs.core.Keyword))?G__28802_28809.fqn:null);
switch (G__28802_28810__$1) {
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

var G__28812 = new_pos;
pos = G__28812;
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
var G__28814 = arguments.length;
switch (G__28814) {
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
return (function (state_28823){
var state_val_28824 = (state_28823[(1)]);
if((state_val_28824 === (1))){
var inst_28815 = cljs_browser_repl.net.gist.get_BANG_.call(null,id);
var state_28823__$1 = state_28823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28823__$1,(2),inst_28815);
} else {
if((state_val_28824 === (2))){
var inst_28817 = (state_28823[(2)]);
var inst_28818 = cljs_browser_repl.net.gist.get_commands.call(null,inst_28817,file_name);
var inst_28819 = cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs_browser_repl.state.empty_notebook);
var inst_28820 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"gist","gist",96143031),inst_28817,new cljs.core.Keyword(null,"cmds","cmds",-1841503952),inst_28818);
var inst_28821 = cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
var state_28823__$1 = (function (){var statearr_28825 = state_28823;
(statearr_28825[(7)] = inst_28820);

(statearr_28825[(8)] = inst_28819);

return statearr_28825;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28823__$1,inst_28821);
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
var statearr_28826 = [null,null,null,null,null,null,null,null,null];
(statearr_28826[(0)] = cljs_browser_repl$actions$notebook$state_machine__11531__auto__);

(statearr_28826[(1)] = (1));

return statearr_28826;
});
var cljs_browser_repl$actions$notebook$state_machine__11531__auto____1 = (function (state_28823){
while(true){
var ret_value__11532__auto__ = (function (){try{while(true){
var result__11533__auto__ = switch__11530__auto__.call(null,state_28823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11533__auto__;
}
break;
}
}catch (e28827){var ex__11534__auto__ = e28827;
var statearr_28828_28832 = state_28823;
(statearr_28828_28832[(2)] = ex__11534__auto__);


if(cljs.core.seq.call(null,(state_28823[(4)]))){
var statearr_28829_28833 = state_28823;
(statearr_28829_28833[(1)] = cljs.core.first.call(null,(state_28823[(4)])));

} else {
throw ex__11534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28834 = state_28823;
state_28823 = G__28834;
continue;
} else {
return ret_value__11532__auto__;
}
break;
}
});
cljs_browser_repl$actions$notebook$state_machine__11531__auto__ = function(state_28823){
switch(arguments.length){
case 0:
return cljs_browser_repl$actions$notebook$state_machine__11531__auto____0.call(this);
case 1:
return cljs_browser_repl$actions$notebook$state_machine__11531__auto____1.call(this,state_28823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$actions$notebook$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$actions$notebook$state_machine__11531__auto____0;
cljs_browser_repl$actions$notebook$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$actions$notebook$state_machine__11531__auto____1;
return cljs_browser_repl$actions$notebook$state_machine__11531__auto__;
})()
;})(switch__11530__auto__,c__11553__auto__))
})();
var state__11555__auto__ = (function (){var statearr_28830 = f__11554__auto__.call(null);
(statearr_28830[(6)] = c__11553__auto__);

return statearr_28830;
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
var G__28836 = arguments.length;
switch (G__28836) {
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
return (function (state_28847){
var state_val_28848 = (state_28847[(1)]);
if((state_val_28848 === (1))){
var inst_28837 = cljs_browser_repl.net.file.get_BANG_.call(null,id,file_name);
var state_28847__$1 = state_28847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28847__$1,(2),inst_28837);
} else {
if((state_val_28848 === (2))){
var inst_28839 = (state_28847[(2)]);
var inst_28840 = cljs_browser_repl.net.file.get_commands.call(null,inst_28839);
var inst_28841 = cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs_browser_repl.state.empty_notebook);
var inst_28842 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"file-name","file-name",-1654217259),file_name,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28839,new cljs.core.Keyword(null,"cmds","cmds",-1841503952),inst_28840,new cljs.core.Keyword(null,"position","position",-2011731912),position);
var inst_28843 = ["loaded '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"' from '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"' notebook."].join('');
var inst_28844 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.repl_info,cljs.core.assoc,new cljs.core.Keyword(null,"type","type",1174270348),"log",new cljs.core.Keyword(null,"msg","msg",-1386103444),inst_28843);
var inst_28845 = cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
var state_28847__$1 = (function (){var statearr_28849 = state_28847;
(statearr_28849[(7)] = inst_28844);

(statearr_28849[(8)] = inst_28842);

(statearr_28849[(9)] = inst_28841);

return statearr_28849;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28847__$1,inst_28845);
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
var statearr_28850 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28850[(0)] = cljs_browser_repl$actions$notebook$state_machine__11531__auto__);

(statearr_28850[(1)] = (1));

return statearr_28850;
});
var cljs_browser_repl$actions$notebook$state_machine__11531__auto____1 = (function (state_28847){
while(true){
var ret_value__11532__auto__ = (function (){try{while(true){
var result__11533__auto__ = switch__11530__auto__.call(null,state_28847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11533__auto__;
}
break;
}
}catch (e28851){var ex__11534__auto__ = e28851;
var statearr_28852_28856 = state_28847;
(statearr_28852_28856[(2)] = ex__11534__auto__);


if(cljs.core.seq.call(null,(state_28847[(4)]))){
var statearr_28853_28857 = state_28847;
(statearr_28853_28857[(1)] = cljs.core.first.call(null,(state_28847[(4)])));

} else {
throw ex__11534__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11532__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28858 = state_28847;
state_28847 = G__28858;
continue;
} else {
return ret_value__11532__auto__;
}
break;
}
});
cljs_browser_repl$actions$notebook$state_machine__11531__auto__ = function(state_28847){
switch(arguments.length){
case 0:
return cljs_browser_repl$actions$notebook$state_machine__11531__auto____0.call(this);
case 1:
return cljs_browser_repl$actions$notebook$state_machine__11531__auto____1.call(this,state_28847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$actions$notebook$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$actions$notebook$state_machine__11531__auto____0;
cljs_browser_repl$actions$notebook$state_machine__11531__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$actions$notebook$state_machine__11531__auto____1;
return cljs_browser_repl$actions$notebook$state_machine__11531__auto__;
})()
;})(switch__11530__auto__,c__11553__auto__))
})();
var state__11555__auto__ = (function (){var statearr_28854 = f__11554__auto__.call(null);
(statearr_28854[(6)] = c__11553__auto__);

return statearr_28854;
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

var loaded_file_28859__$1 = (cljs.core.truth_(cljs.core.re_find.call(null,/_/,loaded_file))?clojure.string.split.call(null,loaded_file,/_/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loaded_file,"loaded"], null));
cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),loaded_file_28859__$1.call(null,(0)),new cljs.core.Keyword(null,"file-name","file-name",-1654217259),loaded_file_28859__$1.call(null,(1)),new cljs.core.Keyword(null,"cmds","cmds",-1841503952),cljs_browser_repl.net.file.commands_from_string.call(null,content),new cljs.core.Keyword(null,"position","position",-2011731912),(0));

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
