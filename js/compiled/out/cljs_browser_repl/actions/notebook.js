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
return cljs.core.mapv.call(null,(function (p1__12106_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__12106_SHARP_),new cljs.core.Keyword(null,"stop","stop",-2140911342))){
return cljs.core.assoc.call(null,p1__12106_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"separator","separator",-1628749125));
} else {
return p1__12106_SHARP_;
}
}),h);
}));
});
cljs_browser_repl.actions.notebook.play_notebook_BANG_ = (function cljs_browser_repl$actions$notebook$play_notebook_BANG_(){
var position_12114 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var started_QMARK__12115 = typeof position_12114 === 'number';
var map__12107_12116 = cljs_browser_repl.state.current_command.call(null,cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var map__12107_12117__$1 = ((((!((map__12107_12116 == null)))?(((((map__12107_12116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12107_12116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12107_12116):map__12107_12116);
var cmd_12118 = map__12107_12117__$1;
var type_12119 = cljs.core.get.call(null,map__12107_12117__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(((started_QMARK__12115) && (cljs.core._EQ_.call(null,type_12119,new cljs.core.Keyword(null,"stop","stop",-2140911342))))){
cljs_browser_repl.actions.notebook.disable_stops_BANG_.call(null);

cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.update,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.inc);
} else {
}

var temp__5457__auto__ = cljs_browser_repl.state.current_command.call(null,cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
if(cljs.core.truth_(temp__5457__auto__)){
var map__12109 = temp__5457__auto__;
var map__12109__$1 = ((((!((map__12109 == null)))?(((((map__12109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12109):map__12109);
var cmd = map__12109__$1;
var type = cljs.core.get.call(null,map__12109__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var pos = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})();
while(true){
var cmds = new cljs.core.Keyword(null,"cmds","cmds",-1841503952).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var map__12111 = cljs.core.nth.call(null,cmds,pos);
var map__12111__$1 = ((((!((map__12111 == null)))?(((((map__12111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12111):map__12111);
var cmd__$1 = map__12111__$1;
var type__$1 = cljs.core.get.call(null,map__12111__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__12111__$1,new cljs.core.Keyword(null,"value","value",305978217));
var silent_QMARK_ = cljs.core.get.call(null,map__12111__$1,new cljs.core.Keyword(null,"silent?","silent?",-1639424539));
var deaf_QMARK_ = cljs.core.get.call(null,map__12111__$1,new cljs.core.Keyword(null,"deaf?","deaf?",-918805966));
var new_pos = (pos + (1));
var G__12113_12120 = type__$1;
var G__12113_12121__$1 = (((G__12113_12120 instanceof cljs.core.Keyword))?G__12113_12120.fqn:null);
switch (G__12113_12121__$1) {
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

var G__12123 = new_pos;
pos = G__12123;
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
var G__12125 = arguments.length;
switch (G__12125) {
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
return (function (state_12134){
var state_val_12135 = (state_12134[(1)]);
if((state_val_12135 === (1))){
var inst_12126 = cljs_browser_repl.net.gist.get_BANG_.call(null,id);
var state_12134__$1 = state_12134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12134__$1,(2),inst_12126);
} else {
if((state_val_12135 === (2))){
var inst_12128 = (state_12134[(2)]);
var inst_12129 = cljs_browser_repl.net.gist.get_commands.call(null,inst_12128,file_name);
var inst_12130 = cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs_browser_repl.state.empty_notebook);
var inst_12131 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"gist","gist",96143031),inst_12128,new cljs.core.Keyword(null,"cmds","cmds",-1841503952),inst_12129);
var inst_12132 = cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
var state_12134__$1 = (function (){var statearr_12136 = state_12134;
(statearr_12136[(7)] = inst_12130);

(statearr_12136[(8)] = inst_12131);

return statearr_12136;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12134__$1,inst_12132);
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
var statearr_12137 = [null,null,null,null,null,null,null,null,null];
(statearr_12137[(0)] = cljs_browser_repl$actions$notebook$state_machine__11154__auto__);

(statearr_12137[(1)] = (1));

return statearr_12137;
});
var cljs_browser_repl$actions$notebook$state_machine__11154__auto____1 = (function (state_12134){
while(true){
var ret_value__11155__auto__ = (function (){try{while(true){
var result__11156__auto__ = switch__11153__auto__.call(null,state_12134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11156__auto__;
}
break;
}
}catch (e12138){var ex__11157__auto__ = e12138;
var statearr_12139_12143 = state_12134;
(statearr_12139_12143[(2)] = ex__11157__auto__);


if(cljs.core.seq.call(null,(state_12134[(4)]))){
var statearr_12140_12144 = state_12134;
(statearr_12140_12144[(1)] = cljs.core.first.call(null,(state_12134[(4)])));

} else {
throw ex__11157__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12145 = state_12134;
state_12134 = G__12145;
continue;
} else {
return ret_value__11155__auto__;
}
break;
}
});
cljs_browser_repl$actions$notebook$state_machine__11154__auto__ = function(state_12134){
switch(arguments.length){
case 0:
return cljs_browser_repl$actions$notebook$state_machine__11154__auto____0.call(this);
case 1:
return cljs_browser_repl$actions$notebook$state_machine__11154__auto____1.call(this,state_12134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$actions$notebook$state_machine__11154__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$actions$notebook$state_machine__11154__auto____0;
cljs_browser_repl$actions$notebook$state_machine__11154__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$actions$notebook$state_machine__11154__auto____1;
return cljs_browser_repl$actions$notebook$state_machine__11154__auto__;
})()
;})(switch__11153__auto__,c__11176__auto__))
})();
var state__11178__auto__ = (function (){var statearr_12141 = f__11177__auto__.call(null);
(statearr_12141[(6)] = c__11176__auto__);

return statearr_12141;
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
var G__12147 = arguments.length;
switch (G__12147) {
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
return (function (state_12158){
var state_val_12159 = (state_12158[(1)]);
if((state_val_12159 === (1))){
var inst_12148 = cljs_browser_repl.net.file.get_BANG_.call(null,id,file_name);
var state_12158__$1 = state_12158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12158__$1,(2),inst_12148);
} else {
if((state_val_12159 === (2))){
var inst_12150 = (state_12158[(2)]);
var inst_12151 = cljs_browser_repl.net.file.get_commands.call(null,inst_12150);
var inst_12152 = cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs_browser_repl.state.empty_notebook);
var inst_12153 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"file-name","file-name",-1654217259),file_name,new cljs.core.Keyword(null,"file","file",-1269645878),inst_12150,new cljs.core.Keyword(null,"cmds","cmds",-1841503952),inst_12151,new cljs.core.Keyword(null,"position","position",-2011731912),position);
var inst_12154 = ["loaded '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"' from '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"' notebook."].join('');
var inst_12155 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.repl_info,cljs.core.assoc,new cljs.core.Keyword(null,"type","type",1174270348),"log",new cljs.core.Keyword(null,"msg","msg",-1386103444),inst_12154);
var inst_12156 = cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
var state_12158__$1 = (function (){var statearr_12160 = state_12158;
(statearr_12160[(7)] = inst_12153);

(statearr_12160[(8)] = inst_12152);

(statearr_12160[(9)] = inst_12155);

return statearr_12160;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12158__$1,inst_12156);
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
var statearr_12161 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12161[(0)] = cljs_browser_repl$actions$notebook$state_machine__11154__auto__);

(statearr_12161[(1)] = (1));

return statearr_12161;
});
var cljs_browser_repl$actions$notebook$state_machine__11154__auto____1 = (function (state_12158){
while(true){
var ret_value__11155__auto__ = (function (){try{while(true){
var result__11156__auto__ = switch__11153__auto__.call(null,state_12158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__11156__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__11156__auto__;
}
break;
}
}catch (e12162){var ex__11157__auto__ = e12162;
var statearr_12163_12167 = state_12158;
(statearr_12163_12167[(2)] = ex__11157__auto__);


if(cljs.core.seq.call(null,(state_12158[(4)]))){
var statearr_12164_12168 = state_12158;
(statearr_12164_12168[(1)] = cljs.core.first.call(null,(state_12158[(4)])));

} else {
throw ex__11157__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__11155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12169 = state_12158;
state_12158 = G__12169;
continue;
} else {
return ret_value__11155__auto__;
}
break;
}
});
cljs_browser_repl$actions$notebook$state_machine__11154__auto__ = function(state_12158){
switch(arguments.length){
case 0:
return cljs_browser_repl$actions$notebook$state_machine__11154__auto____0.call(this);
case 1:
return cljs_browser_repl$actions$notebook$state_machine__11154__auto____1.call(this,state_12158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$actions$notebook$state_machine__11154__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$actions$notebook$state_machine__11154__auto____0;
cljs_browser_repl$actions$notebook$state_machine__11154__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$actions$notebook$state_machine__11154__auto____1;
return cljs_browser_repl$actions$notebook$state_machine__11154__auto__;
})()
;})(switch__11153__auto__,c__11176__auto__))
})();
var state__11178__auto__ = (function (){var statearr_12165 = f__11177__auto__.call(null);
(statearr_12165[(6)] = c__11176__auto__);

return statearr_12165;
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

var loaded_file_12170__$1 = (cljs.core.truth_(cljs.core.re_find.call(null,/_/,loaded_file))?clojure.string.split.call(null,loaded_file,/_/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loaded_file,"loaded"], null));
cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),loaded_file_12170__$1.call(null,(0)),new cljs.core.Keyword(null,"file-name","file-name",-1654217259),loaded_file_12170__$1.call(null,(1)),new cljs.core.Keyword(null,"cmds","cmds",-1841503952),cljs_browser_repl.net.file.commands_from_string.call(null,content),new cljs.core.Keyword(null,"position","position",-2011731912),(0));

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
