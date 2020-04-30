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
return cljs.core.mapv.call(null,(function (p1__101700_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__101700_SHARP_),new cljs.core.Keyword(null,"stop","stop",-2140911342))){
return cljs.core.assoc.call(null,p1__101700_SHARP_,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true);
} else {
return p1__101700_SHARP_;
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
var position_101708 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var started_QMARK__101709 = typeof position_101708 === 'number';
var map__101701_101710 = cljs_browser_repl.state.current_command.call(null,cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var map__101701_101711__$1 = ((((!((map__101701_101710 == null)))?(((((map__101701_101710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__101701_101710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__101701_101710):map__101701_101710);
var cmd_101712 = map__101701_101711__$1;
var type_101713 = cljs.core.get.call(null,map__101701_101711__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(((started_QMARK__101709) && (cljs.core._EQ_.call(null,type_101713,new cljs.core.Keyword(null,"stop","stop",-2140911342))))){
cljs_browser_repl.actions.notebook.disable_stops_BANG_.call(null);

cljs_browser_repl.actions.notebook.add_separator_BANG_.call(null);

cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.update,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.inc);
} else {
}

var temp__5457__auto__ = cljs_browser_repl.state.current_command.call(null,cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
if(cljs.core.truth_(temp__5457__auto__)){
var map__101703 = temp__5457__auto__;
var map__101703__$1 = ((((!((map__101703 == null)))?(((((map__101703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__101703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__101703):map__101703);
var cmd = map__101703__$1;
var type = cljs.core.get.call(null,map__101703__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var pos = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})();
while(true){
var cmds = new cljs.core.Keyword(null,"cmds","cmds",-1841503952).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook));
var map__101705 = cljs.core.nth.call(null,cmds,pos);
var map__101705__$1 = ((((!((map__101705 == null)))?(((((map__101705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__101705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__101705):map__101705);
var cmd__$1 = map__101705__$1;
var type__$1 = cljs.core.get.call(null,map__101705__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.call(null,map__101705__$1,new cljs.core.Keyword(null,"value","value",305978217));
var silent_QMARK_ = cljs.core.get.call(null,map__101705__$1,new cljs.core.Keyword(null,"silent?","silent?",-1639424539));
var deaf_QMARK_ = cljs.core.get.call(null,map__101705__$1,new cljs.core.Keyword(null,"deaf?","deaf?",-918805966));
var new_pos = (pos + (1));
var G__101707_101714 = type__$1;
var G__101707_101715__$1 = (((G__101707_101714 instanceof cljs.core.Keyword))?G__101707_101714.fqn:null);
switch (G__101707_101715__$1) {
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

var G__101717 = new_pos;
pos = G__101717;
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
var G__101719 = arguments.length;
switch (G__101719) {
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

var c__12024__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12024__auto__){
return (function (){
var f__12025__auto__ = (function (){var switch__12001__auto__ = ((function (c__12024__auto__){
return (function (state_101728){
var state_val_101729 = (state_101728[(1)]);
if((state_val_101729 === (1))){
var inst_101720 = cljs_browser_repl.net.gist.get_BANG_.call(null,id);
var state_101728__$1 = state_101728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101728__$1,(2),inst_101720);
} else {
if((state_val_101729 === (2))){
var inst_101722 = (state_101728[(2)]);
var inst_101723 = cljs_browser_repl.net.gist.get_commands.call(null,inst_101722,file_name);
var inst_101724 = cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs_browser_repl.state.empty_notebook);
var inst_101725 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"gist","gist",96143031),inst_101722,new cljs.core.Keyword(null,"cmds","cmds",-1841503952),inst_101723);
var inst_101726 = cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
var state_101728__$1 = (function (){var statearr_101730 = state_101728;
(statearr_101730[(7)] = inst_101725);

(statearr_101730[(8)] = inst_101724);

return statearr_101730;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101728__$1,inst_101726);
} else {
return null;
}
}
});})(c__12024__auto__))
;
return ((function (switch__12001__auto__,c__12024__auto__){
return (function() {
var cljs_browser_repl$actions$notebook$state_machine__12002__auto__ = null;
var cljs_browser_repl$actions$notebook$state_machine__12002__auto____0 = (function (){
var statearr_101731 = [null,null,null,null,null,null,null,null,null];
(statearr_101731[(0)] = cljs_browser_repl$actions$notebook$state_machine__12002__auto__);

(statearr_101731[(1)] = (1));

return statearr_101731;
});
var cljs_browser_repl$actions$notebook$state_machine__12002__auto____1 = (function (state_101728){
while(true){
var ret_value__12003__auto__ = (function (){try{while(true){
var result__12004__auto__ = switch__12001__auto__.call(null,state_101728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12004__auto__;
}
break;
}
}catch (e101732){var ex__12005__auto__ = e101732;
var statearr_101733_101737 = state_101728;
(statearr_101733_101737[(2)] = ex__12005__auto__);


if(cljs.core.seq.call(null,(state_101728[(4)]))){
var statearr_101734_101738 = state_101728;
(statearr_101734_101738[(1)] = cljs.core.first.call(null,(state_101728[(4)])));

} else {
throw ex__12005__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101739 = state_101728;
state_101728 = G__101739;
continue;
} else {
return ret_value__12003__auto__;
}
break;
}
});
cljs_browser_repl$actions$notebook$state_machine__12002__auto__ = function(state_101728){
switch(arguments.length){
case 0:
return cljs_browser_repl$actions$notebook$state_machine__12002__auto____0.call(this);
case 1:
return cljs_browser_repl$actions$notebook$state_machine__12002__auto____1.call(this,state_101728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$actions$notebook$state_machine__12002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$actions$notebook$state_machine__12002__auto____0;
cljs_browser_repl$actions$notebook$state_machine__12002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$actions$notebook$state_machine__12002__auto____1;
return cljs_browser_repl$actions$notebook$state_machine__12002__auto__;
})()
;})(switch__12001__auto__,c__12024__auto__))
})();
var state__12026__auto__ = (function (){var statearr_101735 = f__12025__auto__.call(null);
(statearr_101735[(6)] = c__12024__auto__);

return statearr_101735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12026__auto__);
});})(c__12024__auto__))
);

return c__12024__auto__;
}
});

cljs_browser_repl.actions.notebook.from_gist_BANG_.cljs$lang$maxFixedArity = 2;

cljs_browser_repl.actions.notebook.goto_BANG_ = (function cljs_browser_repl$actions$notebook$goto_BANG_(pos){
cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"position","position",-2011731912),pos);

return cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
});
cljs_browser_repl.actions.notebook.from_filesystem_BANG_ = (function cljs_browser_repl$actions$notebook$from_filesystem_BANG_(var_args){
var G__101741 = arguments.length;
switch (G__101741) {
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

var c__12024__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12024__auto__){
return (function (){
var f__12025__auto__ = (function (){var switch__12001__auto__ = ((function (c__12024__auto__){
return (function (state_101752){
var state_val_101753 = (state_101752[(1)]);
if((state_val_101753 === (1))){
var inst_101742 = cljs_browser_repl.net.file.get_BANG_.call(null,id,file_name);
var state_101752__$1 = state_101752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_101752__$1,(2),inst_101742);
} else {
if((state_val_101753 === (2))){
var inst_101744 = (state_101752[(2)]);
var inst_101745 = cljs_browser_repl.net.file.get_commands.call(null,inst_101744);
var inst_101746 = cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs_browser_repl.state.empty_notebook);
var inst_101747 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"file-name","file-name",-1654217259),file_name,new cljs.core.Keyword(null,"file","file",-1269645878),inst_101744,new cljs.core.Keyword(null,"cmds","cmds",-1841503952),inst_101745,new cljs.core.Keyword(null,"position","position",-2011731912),position);
var inst_101748 = ["loaded '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"' from '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"' notebook."].join('');
var inst_101749 = cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.repl_info,cljs.core.assoc,new cljs.core.Keyword(null,"type","type",1174270348),"log",new cljs.core.Keyword(null,"msg","msg",-1386103444),inst_101748);
var inst_101750 = cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);
var state_101752__$1 = (function (){var statearr_101754 = state_101752;
(statearr_101754[(7)] = inst_101749);

(statearr_101754[(8)] = inst_101746);

(statearr_101754[(9)] = inst_101747);

return statearr_101754;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_101752__$1,inst_101750);
} else {
return null;
}
}
});})(c__12024__auto__))
;
return ((function (switch__12001__auto__,c__12024__auto__){
return (function() {
var cljs_browser_repl$actions$notebook$state_machine__12002__auto__ = null;
var cljs_browser_repl$actions$notebook$state_machine__12002__auto____0 = (function (){
var statearr_101755 = [null,null,null,null,null,null,null,null,null,null];
(statearr_101755[(0)] = cljs_browser_repl$actions$notebook$state_machine__12002__auto__);

(statearr_101755[(1)] = (1));

return statearr_101755;
});
var cljs_browser_repl$actions$notebook$state_machine__12002__auto____1 = (function (state_101752){
while(true){
var ret_value__12003__auto__ = (function (){try{while(true){
var result__12004__auto__ = switch__12001__auto__.call(null,state_101752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12004__auto__;
}
break;
}
}catch (e101756){var ex__12005__auto__ = e101756;
var statearr_101757_101761 = state_101752;
(statearr_101757_101761[(2)] = ex__12005__auto__);


if(cljs.core.seq.call(null,(state_101752[(4)]))){
var statearr_101758_101762 = state_101752;
(statearr_101758_101762[(1)] = cljs.core.first.call(null,(state_101752[(4)])));

} else {
throw ex__12005__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__101763 = state_101752;
state_101752 = G__101763;
continue;
} else {
return ret_value__12003__auto__;
}
break;
}
});
cljs_browser_repl$actions$notebook$state_machine__12002__auto__ = function(state_101752){
switch(arguments.length){
case 0:
return cljs_browser_repl$actions$notebook$state_machine__12002__auto____0.call(this);
case 1:
return cljs_browser_repl$actions$notebook$state_machine__12002__auto____1.call(this,state_101752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_browser_repl$actions$notebook$state_machine__12002__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_browser_repl$actions$notebook$state_machine__12002__auto____0;
cljs_browser_repl$actions$notebook$state_machine__12002__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_browser_repl$actions$notebook$state_machine__12002__auto____1;
return cljs_browser_repl$actions$notebook$state_machine__12002__auto__;
})()
;})(switch__12001__auto__,c__12024__auto__))
})();
var state__12026__auto__ = (function (){var statearr_101759 = f__12025__auto__.call(null);
(statearr_101759[(6)] = c__12024__auto__);

return statearr_101759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12026__auto__);
});})(c__12024__auto__))
);

return c__12024__auto__;
});

cljs_browser_repl.actions.notebook.from_filesystem_BANG_.cljs$lang$maxFixedArity = 4;

cljs_browser_repl.actions.notebook.reader_load_BANG_ = (function cljs_browser_repl$actions$notebook$reader_load_BANG_(reader_event){
var content = reader_event.target.result;
var loaded_file = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_notebook)).name;
cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.history,cljs.core.PersistentVector.EMPTY);

var loaded_file_101764__$1 = (cljs.core.truth_(cljs.core.re_find.call(null,/_/,loaded_file))?clojure.string.split.call(null,loaded_file,/_/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loaded_file,"loaded"], null));
cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.current_notebook,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),loaded_file_101764__$1.call(null,(0)),new cljs.core.Keyword(null,"file-name","file-name",-1654217259),loaded_file_101764__$1.call(null,(1)),new cljs.core.Keyword(null,"cmds","cmds",-1841503952),cljs_browser_repl.net.file.commands_from_string.call(null,content),new cljs.core.Keyword(null,"position","position",-2011731912),(0));

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
