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
return cljs.core.mapv.call(null,(function (p1__20932_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__20932_SHARP_),new cljs.core.Keyword(null,"stop","stop",-2140911342))){
return cljs.core.assoc.call(null,p1__20932_SHARP_,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true);
} else {
return p1__20932_SHARP_;
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
var position_20940 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var started_QMARK__20941 = typeof position_20940 === 'number';
var map__20933_20942 = cljs_browser_repl.state.current_command.call(null,cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var map__20933_20943__$1 = ((((!((map__20933_20942 == null)))?(((((map__20933_20942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20933_20942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20933_20942):map__20933_20942);
var cmd_20944 = map__20933_20943__$1;
var type_20945 = cljs.core.get.call(null,map__20933_20943__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(((started_QMARK__20941) && (cljs.core._EQ_.call(null,type_20945,new cljs.core.Keyword(null,"stop","stop",-2140911342))))){
cljs_browser_repl.actions.notebook.disable_stops_BANG_.call(null);

cljs_browser_repl.actions.notebook.add_separator_BANG_.call(null);

cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.update,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.inc);
} else {
}

var temp__5457__auto__ = cljs_browser_repl.state.current_command.call(null,cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
if(cljs.core.truth_(temp__5457__auto__)){
var map__20935 = temp__5457__auto__;
var map__20935__$1 = ((((!((map__20935 == null)))?(((((map__20935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20935):map__20935);
var cmd = map__20935__$1;
var type = cljs.core.get.call(null,map__20935__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var pos = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})();
while(true){
var cmds = new cljs.core.Keyword(null,"cmds","cmds",-1841503952).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var map__20937 = cljs.core.nth.call(null,cmds,pos);
var map__20937__$1 = ((((!((map__20937 == null)))?(((((map__20937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20937):map__20937);
var cmd__$1 = map__20937__$1;
var type__$1 = cljs.core.get.call(null,map__20937__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__20937__$1,new cljs.core.Keyword(null,"value","value",305978217));
var silent_QMARK_ = cljs.core.get.call(null,map__20937__$1,new cljs.core.Keyword(null,"silent?","silent?",-1639424539));
var deaf_QMARK_ = cljs.core.get.call(null,map__20937__$1,new cljs.core.Keyword(null,"deaf?","deaf?",-918805966));
var new_pos = (pos + (1));
var G__20939_20946 = type__$1;
var G__20939_20947__$1 = (((G__20939_20946 instanceof cljs.core.Keyword))?G__20939_20946.fqn:null);
switch (G__20939_20947__$1) {
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

var G__20949 = new_pos;
pos = G__20949;
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
var G__20951 = arguments.length;
switch (G__20951) {
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

var c__13274__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13274__auto__){
return (function (){
var f__13275__auto__ = (function (){var switch__13251__auto__ = ((function (c__13274__auto__){
return (function (state_20960){
var state_val_20961 = (state_20960[(1)]);
if((state_val_20961 === (1))){
var inst_20952 = cljs_browser_repl.net.gist.get_BANG_.call(null,id);
var state_20960__$1 = state_20960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20960__$1,(2),inst_20952);
} else {
if((state_val_20961 === (2))){
var inst_20954 = (state_20960[(2)]);
var inst_20955 = cljs_browser_repl.net.gist.get_commands.call(null,inst_20954,file_name);
var inst_20956 = cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs_browser_repl.state.empty_notebook);
var inst_20957 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"gist","gist",96143031),inst_20954,new cljs.core.Keyword(null,"cmds","cmds",-1841503952),inst_20955);
var inst_20958 = cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
var state_20960__$1 = (function (){var statearr_20962 = state_20960;
(statearr_20962[(7)] = inst_20957);

(statearr_20962[(8)] = inst_20956);

return statearr_20962;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20960__$1,inst_20958);
} else {
return null;
}
}
});})(c__13274__auto__))
;
return ((function (switch__13251__auto__,c__13274__auto__){
return (function() {
var cljs_browser_repl$actions$notebook$state_machine__13252__auto__ = null;
var cljs_browser_repl$actions$notebook$state_machine__13252__auto____0 = (function (){
var statearr_20963 = [null,null,null,null,null,null,null,null,null];
(statearr_20963[(0)] = cljs_browser_repl$actions$notebook$state_machine__13252__auto__);

(statearr_20963[(1)] = (1));

return statearr_20963;
});
var cljs_browser_repl$actions$notebook$state_machine__13252__auto____1 = (function (state_20960){
while(true){
var ret_value__13253__auto__ = (function (){try{while(true){
var result__13254__auto__ = switch__13251__auto__.call(null,state_20960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13254__auto__;
}
break;
}
}catch (e20964){var ex__13255__auto__ = e20964;
var statearr_20965_20969 = state_20960;
(statearr_20965_20969[(2)] = ex__13255__auto__);


if(cljs.core.seq.call(null,(state_20960[(4)]))){
var statearr_20966_20970 = state_20960;
(statearr_20966_20970[(1)] = cljs.core.first.call(null,(state_20960[(4)])));

} else {
throw ex__13255__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20971 = state_20960;
state_20960 = G__20971;
continue;
} else {
return ret_value__13253__auto__;
}
break;
}
});
cljs_browser_repl$actions$notebook$state_machine__13252__auto__ = function(state_20960){
switch(arguments.length){
case 0:
return cljs_browser_repl$actions$notebook$state_machine__13252__auto____0.call(this);
case 1:
return cljs_browser_repl$actions$notebook$state_machine__13252__auto____1.call(this,state_20960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$actions$notebook$state_machine__13252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$actions$notebook$state_machine__13252__auto____0;
cljs_browser_repl$actions$notebook$state_machine__13252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$actions$notebook$state_machine__13252__auto____1;
return cljs_browser_repl$actions$notebook$state_machine__13252__auto__;
})()
;})(switch__13251__auto__,c__13274__auto__))
})();
var state__13276__auto__ = (function (){var statearr_20967 = f__13275__auto__.call(null);
(statearr_20967[(6)] = c__13274__auto__);

return statearr_20967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13276__auto__);
});})(c__13274__auto__))
);

return c__13274__auto__;
}
});

cljs_browser_repl.actions.notebook.from_gist_BANG_.cljs$lang$maxFixedArity = 2;

cljs_browser_repl.actions.notebook.goto_BANG_ = (function cljs_browser_repl$actions$notebook$goto_BANG_(pos){
cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"position","position",-2011731912),pos);

return cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
});
cljs_browser_repl.actions.notebook.from_filesystem_BANG_ = (function cljs_browser_repl$actions$notebook$from_filesystem_BANG_(var_args){
var G__20973 = arguments.length;
switch (G__20973) {
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

var c__13274__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13274__auto__){
return (function (){
var f__13275__auto__ = (function (){var switch__13251__auto__ = ((function (c__13274__auto__){
return (function (state_20984){
var state_val_20985 = (state_20984[(1)]);
if((state_val_20985 === (1))){
var inst_20974 = cljs_browser_repl.net.file.get_BANG_.call(null,id,file_name);
var state_20984__$1 = state_20984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20984__$1,(2),inst_20974);
} else {
if((state_val_20985 === (2))){
var inst_20976 = (state_20984[(2)]);
var inst_20977 = cljs_browser_repl.net.file.get_commands.call(null,inst_20976);
var inst_20978 = cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs_browser_repl.state.empty_notebook);
var inst_20979 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"file-name","file-name",-1654217259),file_name,new cljs.core.Keyword(null,"file","file",-1269645878),inst_20976,new cljs.core.Keyword(null,"cmds","cmds",-1841503952),inst_20977,new cljs.core.Keyword(null,"position","position",-2011731912),position);
var inst_20980 = ["loaded '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"' from '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"' notebook."].join('');
var inst_20981 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.repl_info,cljs.core.assoc,new cljs.core.Keyword(null,"type","type",1174270348),"log",new cljs.core.Keyword(null,"msg","msg",-1386103444),inst_20980);
var inst_20982 = cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
var state_20984__$1 = (function (){var statearr_20986 = state_20984;
(statearr_20986[(7)] = inst_20981);

(statearr_20986[(8)] = inst_20979);

(statearr_20986[(9)] = inst_20978);

return statearr_20986;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20984__$1,inst_20982);
} else {
return null;
}
}
});})(c__13274__auto__))
;
return ((function (switch__13251__auto__,c__13274__auto__){
return (function() {
var cljs_browser_repl$actions$notebook$state_machine__13252__auto__ = null;
var cljs_browser_repl$actions$notebook$state_machine__13252__auto____0 = (function (){
var statearr_20987 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20987[(0)] = cljs_browser_repl$actions$notebook$state_machine__13252__auto__);

(statearr_20987[(1)] = (1));

return statearr_20987;
});
var cljs_browser_repl$actions$notebook$state_machine__13252__auto____1 = (function (state_20984){
while(true){
var ret_value__13253__auto__ = (function (){try{while(true){
var result__13254__auto__ = switch__13251__auto__.call(null,state_20984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13254__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13254__auto__;
}
break;
}
}catch (e20988){var ex__13255__auto__ = e20988;
var statearr_20989_20993 = state_20984;
(statearr_20989_20993[(2)] = ex__13255__auto__);


if(cljs.core.seq.call(null,(state_20984[(4)]))){
var statearr_20990_20994 = state_20984;
(statearr_20990_20994[(1)] = cljs.core.first.call(null,(state_20984[(4)])));

} else {
throw ex__13255__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20995 = state_20984;
state_20984 = G__20995;
continue;
} else {
return ret_value__13253__auto__;
}
break;
}
});
cljs_browser_repl$actions$notebook$state_machine__13252__auto__ = function(state_20984){
switch(arguments.length){
case 0:
return cljs_browser_repl$actions$notebook$state_machine__13252__auto____0.call(this);
case 1:
return cljs_browser_repl$actions$notebook$state_machine__13252__auto____1.call(this,state_20984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$actions$notebook$state_machine__13252__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$actions$notebook$state_machine__13252__auto____0;
cljs_browser_repl$actions$notebook$state_machine__13252__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$actions$notebook$state_machine__13252__auto____1;
return cljs_browser_repl$actions$notebook$state_machine__13252__auto__;
})()
;})(switch__13251__auto__,c__13274__auto__))
})();
var state__13276__auto__ = (function (){var statearr_20991 = f__13275__auto__.call(null);
(statearr_20991[(6)] = c__13274__auto__);

return statearr_20991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13276__auto__);
});})(c__13274__auto__))
);

return c__13274__auto__;
});

cljs_browser_repl.actions.notebook.from_filesystem_BANG_.cljs$lang$maxFixedArity = 4;

cljs_browser_repl.actions.notebook.reader_load_BANG_ = (function cljs_browser_repl$actions$notebook$reader_load_BANG_(reader_event){
var content = reader_event.target.result;
var loaded_file = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook)).name;
cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.history,cljs.core.PersistentVector.EMPTY);

var loaded_file_20996__$1 = (cljs.core.truth_(cljs.core.re_find.call(null,/_/,loaded_file))?clojure.string.split.call(null,loaded_file,/_/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loaded_file,"loaded"], null));
cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),loaded_file_20996__$1.call(null,(0)),new cljs.core.Keyword(null,"file-name","file-name",-1654217259),loaded_file_20996__$1.call(null,(1)),new cljs.core.Keyword(null,"cmds","cmds",-1841503952),cljs_browser_repl.net.file.commands_from_string.call(null,content),new cljs.core.Keyword(null,"position","position",-2011731912),(0));

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
