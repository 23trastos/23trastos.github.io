// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_browser_repl.ui.history_entry');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs_browser_repl.markdown');
cljs_browser_repl.ui.history_entry.response_with_meta__GT_entry = (function cljs_browser_repl$ui$history_entry$response_with_meta__GT_entry(p__16725){
var map__16726 = p__16725;
var map__16726__$1 = ((((!((map__16726 == null)))?(((((map__16726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16726):map__16726);
var entry = map__16726__$1;
var value = cljs.core.get.call(null,map__16726__$1,new cljs.core.Keyword(null,"value","value",305978217));
var sub_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,value));
var is_value_map_QMARK_ = cljs.core._EQ_.call(null,cljs.core.type.call(null,value),cljs.core.PersistentArrayMap);
var value_of_value_QMARK_ = !((new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value) == null));
var new_value = ((((is_value_map_QMARK_) && (value_of_value_QMARK_)))?new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(value):value);
return cljs.core.with_meta.call(null,cljs.core.assoc.call(null,entry,new cljs.core.Keyword(null,"type","type",1174270348),sub_type,new cljs.core.Keyword(null,"value","value",305978217),new_value),null);
});
cljs_browser_repl.ui.history_entry.emit_input_BANG_ = (function cljs_browser_repl$ui$history_entry$emit_input_BANG_(emit_fn,entry){
var sel = window.getSelection().toString();
var value = ((clojure.string.blank_QMARK_.call(null,sel))?new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(entry):sel);
var payload = cljs_browser_repl.ui.history_entry.response_with_meta__GT_entry.call(null,cljs.core.assoc.call(null,entry,new cljs.core.Keyword(null,"value","value",305978217),value));
return emit_fn.call(null,new cljs.core.Keyword(null,"input","input",556931961),payload);
});
cljs_browser_repl.ui.history_entry.history_input = (function cljs_browser_repl$ui$history_entry$history_input(p__16728,p__16729){
var map__16730 = p__16728;
var map__16730__$1 = ((((!((map__16730 == null)))?(((((map__16730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16730):map__16730);
var emit = cljs.core.get.call(null,map__16730__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__16731 = p__16729;
var map__16731__$1 = ((((!((map__16731 == null)))?(((((map__16731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16731):map__16731);
var entry = map__16731__$1;
var value = cljs.core.get.call(null,map__16731__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-input","div.history-input",-1946133575),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__16730,map__16730__$1,emit,map__16731,map__16731__$1,entry,value){
return (function (){
return cljs_browser_repl.ui.history_entry.emit_input_BANG_.call(null,emit,entry);
});})(map__16730,map__16730__$1,emit,map__16731,map__16731__$1,entry,value))
], null),value], null);
});
cljs_browser_repl.ui.history_entry.history_response = (function cljs_browser_repl$ui$history_entry$history_response(p__16734,p__16735){
var map__16736 = p__16734;
var map__16736__$1 = ((((!((map__16736 == null)))?(((((map__16736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16736):map__16736);
var emit = cljs.core.get.call(null,map__16736__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__16737 = p__16735;
var map__16737__$1 = ((((!((map__16737 == null)))?(((((map__16737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16737):map__16737);
var entry = map__16737__$1;
var value = cljs.core.get.call(null,map__16737__$1,new cljs.core.Keyword(null,"value","value",305978217));
var sub_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,value));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-response","div.history-response",2036810698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(sub_type)?"":"history-response-cljs"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sub_type,map__16736,map__16736__$1,emit,map__16737,map__16737__$1,entry,value){
return (function (){
return cljs_browser_repl.ui.history_entry.emit_input_BANG_.call(null,emit,entry);
});})(sub_type,map__16736,map__16736__$1,emit,map__16737,map__16737__$1,entry,value))
], null),(cljs.core.truth_(sub_type)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_browser_repl.ui.history_entry.history_entry,null,cljs_browser_repl.ui.history_entry.response_with_meta__GT_entry.call(null,entry)], null):cljs.core.println_str.call(null,value))], null);
});
cljs_browser_repl.ui.history_entry.history_response_error = (function cljs_browser_repl$ui$history_entry$history_response_error(p__16740,p__16741){
var map__16742 = p__16740;
var map__16742__$1 = ((((!((map__16742 == null)))?(((((map__16742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16742):map__16742);
var emit = cljs.core.get.call(null,map__16742__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__16743 = p__16741;
var map__16743__$1 = ((((!((map__16743 == null)))?(((((map__16743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16743):map__16743);
var value = cljs.core.get.call(null,map__16743__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-response-error","div.history-response-error",903167561),value], null);
});
cljs_browser_repl.ui.history_entry.history_unknown = (function cljs_browser_repl$ui$history_entry$history_unknown(p__16746,entry){
var map__16747 = p__16746;
var map__16747__$1 = ((((!((map__16747 == null)))?(((((map__16747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16747):map__16747);
var emit = cljs.core.get.call(null,map__16747__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.history-unknown","pre.history-unknown",228775659),cljs.core.println_str.call(null,entry)], null);
});
cljs_browser_repl.ui.history_entry.history_html = (function cljs_browser_repl$ui$history_entry$history_html(p__16749,p__16750){
var map__16751 = p__16749;
var map__16751__$1 = ((((!((map__16751 == null)))?(((((map__16751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16751):map__16751);
var emit = cljs.core.get.call(null,map__16751__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__16752 = p__16750;
var map__16752__$1 = ((((!((map__16752 == null)))?(((((map__16752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16752):map__16752);
var value = cljs.core.get.call(null,map__16752__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-html","div.history-html",-1330193097),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),value], null)], null)], null);
});
cljs_browser_repl.ui.history_entry.internal_re = (new RegExp(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),".*#/file/(.*)"].join('')));
cljs_browser_repl.ui.history_entry.history_md = (function cljs_browser_repl$ui$history_entry$history_md(p__16756,p__16757){
var map__16758 = p__16756;
var map__16758__$1 = ((((!((map__16758 == null)))?(((((map__16758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16758):map__16758);
var emit = cljs.core.get.call(null,map__16758__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__16759 = p__16757;
var map__16759__$1 = ((((!((map__16759 == null)))?(((((map__16759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16759):map__16759);
var value = cljs.core.get.call(null,map__16759__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-markdown","div.history-markdown",-1224543335),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__16758,map__16758__$1,emit,map__16759,map__16759__$1,value){
return (function (p1__16755_SHARP_){
p1__16755_SHARP_.preventDefault();

var target = p1__16755_SHARP_.target;
var href = target.href;
if(cljs.core.truth_(href)){
var temp__5455__auto__ = cljs.core.re_seq.call(null,cljs_browser_repl.ui.history_entry.internal_re,href);
if(cljs.core.truth_(temp__5455__auto__)){
var internal_QMARK_ = temp__5455__auto__;
return emit.call(null,new cljs.core.Keyword(null,"visit-file","visit-file",1396273326),cljs.core.second.call(null,cljs.core.first.call(null,internal_QMARK_)));
} else {
return window.open(href);
}
} else {
return null;
}
});})(map__16758,map__16758__$1,emit,map__16759,map__16759__$1,value))
,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),cljs_browser_repl.markdown.render.call(null,value)], null)], null)], null);
});
cljs_browser_repl.ui.history_entry.history_separator = (function cljs_browser_repl$ui$history_entry$history_separator(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null);
});
cljs_browser_repl.ui.history_entry.history_stop = (function cljs_browser_repl$ui$history_entry$history_stop(p__16762,p__16763){
var map__16764 = p__16762;
var map__16764__$1 = ((((!((map__16764 == null)))?(((((map__16764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16764):map__16764);
var emit = cljs.core.get.call(null,map__16764__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__16765 = p__16763;
var map__16765__$1 = ((((!((map__16765 == null)))?(((((map__16765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16765):map__16765);
var entry = map__16765__$1;
var disabled = cljs.core.get.call(null,map__16765__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var label = cljs.core.get.call(null,map__16765__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var timeout = cljs.core.get.call(null,map__16765__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
if(cljs.core.truth_(disabled)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_browser_repl.ui.history_entry.history_separator], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-stop","div.history-stop",446810996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__16764,map__16764__$1,emit,map__16765,map__16765__$1,entry,disabled,label,timeout){
return (function (){
return emit.call(null,new cljs.core.Keyword(null,"continue","continue",-207346553));
});})(map__16764,map__16764__$1,emit,map__16765,map__16765__$1,entry,disabled,label,timeout))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),(function (){var or__3949__auto__ = label;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "Next";
}
})()], null)], null);
}
});
cljs_browser_repl.ui.history_entry.history_entry = (function cljs_browser_repl$ui$history_entry$history_entry(p__16768,p__16769){
var map__16770 = p__16768;
var map__16770__$1 = ((((!((map__16770 == null)))?(((((map__16770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16770):map__16770);
var attrs = map__16770__$1;
var emit = cljs.core.get.call(null,map__16770__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__16771 = p__16769;
var map__16771__$1 = ((((!((map__16771 == null)))?(((((map__16771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16771):map__16771);
var entry = map__16771__$1;
var type = cljs.core.get.call(null,map__16771__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-entry","div.history-entry",-1020769015),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16774 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entry);
var G__16774__$1 = (((G__16774 instanceof cljs.core.Keyword))?G__16774.fqn:null);
switch (G__16774__$1) {
case "input":
return cljs_browser_repl.ui.history_entry.history_input;

break;
case "error":
return cljs_browser_repl.ui.history_entry.history_response_error;

break;
case "response":
return cljs_browser_repl.ui.history_entry.history_response;

break;
case "html":
return cljs_browser_repl.ui.history_entry.history_html;

break;
case "markdown":
return cljs_browser_repl.ui.history_entry.history_md;

break;
case "stop":
return cljs_browser_repl.ui.history_entry.history_stop;

break;
case "separator":
return cljs_browser_repl.ui.history_entry.history_separator;

break;
default:
return cljs_browser_repl.ui.history_entry.history_unknown;

}
})(),attrs,entry], null)], null);
});

//# sourceMappingURL=history_entry.js.map
