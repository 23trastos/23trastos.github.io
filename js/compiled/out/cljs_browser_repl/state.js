// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_browser_repl.state');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('replumb.repl');
cljs_browser_repl.state.now = (function cljs_browser_repl$state$now(){
return Date.now();
});
if((typeof cljs_browser_repl !== 'undefined') && (typeof cljs_browser_repl.state !== 'undefined') && (typeof cljs_browser_repl.state.locked !== 'undefined')){
} else {
cljs_browser_repl.state.locked = reagent.core.atom.call(null,false);
}
cljs_browser_repl.state.add_entry = (function cljs_browser_repl$state$add_entry(h,e){
if(cljs.core.truth_(cljs.core.deref.call(null,cljs_browser_repl.state.locked))){
return null;
} else {
var last_entry = cljs.core.peek.call(null,h);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(last_entry),new cljs.core.Keyword(null,"stop","stop",-2140911342))){
if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"resp-enables","resp-enables",1135429872).cljs$core$IFn$_invoke$arity$1(last_entry);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"response","response",-1068424192));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.conj.call(null,cljs.core.pop.call(null,h),e,cljs.core.assoc.call(null,last_entry,new cljs.core.Keyword(null,"resp-enables","resp-enables",1135429872),false));
} else {
return cljs.core.conj.call(null,cljs.core.pop.call(null,h),e,last_entry);
}
} else {
var new$ = (cljs.core.truth_((function (){var and__3938__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"stop","stop",-2140911342));
if(and__3938__auto__){
var and__3938__auto____$1 = new cljs.core.Keyword(null,"resp-enables","resp-enables",1135429872).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_(and__3938__auto____$1)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(last_entry),new cljs.core.Keyword(null,"response","response",-1068424192));
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())?cljs.core.assoc.call(null,e,new cljs.core.Keyword(null,"resp-enables","resp-enables",1135429872),false):e);
return cljs.core.conj.call(null,h,new$);
}
}
});
cljs_browser_repl.state.add_entries = (function cljs_browser_repl$state$add_entries(h,es){
return cljs.core.apply.call(null,cljs.core.conj,h,es);
});
cljs_browser_repl.state.to_repl = (function cljs_browser_repl$state$to_repl(o){
return cljs.core.assoc.call(null,o,new cljs.core.Keyword(null,"date","date",-1463434462),cljs_browser_repl.state.now.call(null));
});
cljs_browser_repl.state.to_repl_input = (function cljs_browser_repl$state$to_repl_input(source){
return cljs_browser_repl.state.to_repl.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"value","value",305978217),source], null));
});
cljs_browser_repl.state.to_repl_error = (function cljs_browser_repl$state$to_repl_error(err){
return cljs_browser_repl.state.to_repl.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"value","value",305978217),err], null));
});
cljs_browser_repl.state.to_repl_result = (function cljs_browser_repl$state$to_repl_result(resp){
return cljs_browser_repl.state.to_repl.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"value","value",305978217),resp], null));
});
cljs_browser_repl.state.to_repl_entry = (function cljs_browser_repl$state$to_repl_entry(t,source){
return cljs_browser_repl.state.to_repl.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),t,new cljs.core.Keyword(null,"value","value",305978217),source], null));
});
if((typeof cljs_browser_repl !== 'undefined') && (typeof cljs_browser_repl.state !== 'undefined') && (typeof cljs_browser_repl.state.history !== 'undefined')){
} else {
cljs_browser_repl.state.history = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof cljs_browser_repl !== 'undefined') && (typeof cljs_browser_repl.state !== 'undefined') && (typeof cljs_browser_repl.state.current_ns !== 'undefined')){
} else {
cljs_browser_repl.state.current_ns = reagent.core.atom.call(null,replumb.repl.current_ns.call(null));
}
if((typeof cljs_browser_repl !== 'undefined') && (typeof cljs_browser_repl.state !== 'undefined') && (typeof cljs_browser_repl.state.input !== 'undefined')){
} else {
cljs_browser_repl.state.input = reagent.core.atom.call(null,"");
}
if((typeof cljs_browser_repl !== 'undefined') && (typeof cljs_browser_repl.state !== 'undefined') && (typeof cljs_browser_repl.state.repl_info !== 'undefined')){
} else {
cljs_browser_repl.state.repl_info = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"msg","msg",-1386103444),""], null));
}
cljs_browser_repl.state.empty_notebook = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"gist","gist",96143031),null,new cljs.core.Keyword(null,"file-name","file-name",-1654217259),null,new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"cmds","cmds",-1841503952),null,new cljs.core.Keyword(null,"position","position",-2011731912),(0)], null);
if((typeof cljs_browser_repl !== 'undefined') && (typeof cljs_browser_repl.state !== 'undefined') && (typeof cljs_browser_repl.state.current_notebook !== 'undefined')){
} else {
cljs_browser_repl.state.current_notebook = reagent.core.atom.call(null,cljs_browser_repl.state.empty_notebook);
}
cljs_browser_repl.state.current_command = (function cljs_browser_repl$state$current_command(notebook){
var map__9793 = notebook;
var map__9793__$1 = ((((!((map__9793 == null)))?(((((map__9793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9793):map__9793);
var cmds = cljs.core.get.call(null,map__9793__$1,new cljs.core.Keyword(null,"cmds","cmds",-1841503952));
var position = cljs.core.get.call(null,map__9793__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return cljs.core.nth.call(null,cmds,position);
});
cljs_browser_repl.state.get_filtered_history = (function cljs_browser_repl$state$get_filtered_history(){
return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,(function (p1__9795_SHARP_){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__9795_SHARP_);
}),cljs.core.filter.call(null,(function (p1__9796_SHARP_){
var and__3938__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__9796_SHARP_),new cljs.core.Keyword(null,"input","input",556931961));
if(and__3938__auto__){
var or__3949__auto__ = new cljs.core.Keyword(null,"essential","essential",1969545466).cljs$core$IFn$_invoke$arity$1(p1__9796_SHARP_);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.re_find.call(null,/\b(ns|require|def|defn)\b/,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__9796_SHARP_));
}
} else {
return and__3938__auto__;
}
}),cljs.core.deref.call(null,cljs_browser_repl.state.history)))).join("\n");
});

//# sourceMappingURL=state.js.map
