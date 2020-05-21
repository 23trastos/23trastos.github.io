// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_browser_repl.ui.history_entry');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs_browser_repl.markdown');
cljs_browser_repl.ui.history_entry.response_with_meta__GT_entry = (function cljs_browser_repl$ui$history_entry$response_with_meta__GT_entry(p__11789){
var map__11790 = p__11789;
var map__11790__$1 = ((((!((map__11790 == null)))?(((((map__11790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11790):map__11790);
var entry = map__11790__$1;
var value = cljs.core.get.call(null,map__11790__$1,new cljs.core.Keyword(null,"value","value",305978217));
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
cljs_browser_repl.ui.history_entry.history_separator = (function cljs_browser_repl$ui$history_entry$history_separator(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null);
});
cljs_browser_repl.ui.history_entry.history_stop = (function cljs_browser_repl$ui$history_entry$history_stop(p__11792,p__11793){
var map__11794 = p__11792;
var map__11794__$1 = ((((!((map__11794 == null)))?(((((map__11794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11794):map__11794);
var emit = cljs.core.get.call(null,map__11794__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__11795 = p__11793;
var map__11795__$1 = ((((!((map__11795 == null)))?(((((map__11795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11795):map__11795);
var entry = map__11795__$1;
var disabled = cljs.core.get.call(null,map__11795__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var label = cljs.core.get.call(null,map__11795__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var resp_enables = cljs.core.get.call(null,map__11795__$1,new cljs.core.Keyword(null,"resp-enables","resp-enables",1135429872));
var auto_continue = cljs.core.get.call(null,map__11795__$1,new cljs.core.Keyword(null,"auto-continue","auto-continue",-1685336609));
if(cljs.core.truth_((function (){var or__3949__auto__ = disabled;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return resp_enables;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_browser_repl.ui.history_entry.history_separator], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-stop","div.history-stop",446810996),(cljs.core.truth_(auto_continue)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),emit.call(null,new cljs.core.Keyword(null,"continue","continue",-207346553))], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__11794,map__11794__$1,emit,map__11795,map__11795__$1,entry,disabled,label,resp_enables,auto_continue){
return (function (){
return emit.call(null,new cljs.core.Keyword(null,"continue","continue",-207346553));
});})(map__11794,map__11794__$1,emit,map__11795,map__11795__$1,entry,disabled,label,resp_enables,auto_continue))
], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),(function (){var or__3949__auto__ = label;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "Next";
}
})()], null)], null);
}
});
cljs_browser_repl.ui.history_entry.history_input = (function cljs_browser_repl$ui$history_entry$history_input(p__11798,p__11799){
var map__11800 = p__11798;
var map__11800__$1 = ((((!((map__11800 == null)))?(((((map__11800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11800):map__11800);
var emit = cljs.core.get.call(null,map__11800__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__11801 = p__11799;
var map__11801__$1 = ((((!((map__11801 == null)))?(((((map__11801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11801):map__11801);
var entry = map__11801__$1;
var value = cljs.core.get.call(null,map__11801__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(value)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-input","div.history-input",-1946133575),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__11800,map__11800__$1,emit,map__11801,map__11801__$1,entry,value){
return (function (){
return cljs_browser_repl.ui.history_entry.emit_input_BANG_.call(null,emit,entry);
});})(map__11800,map__11800__$1,emit,map__11801,map__11801__$1,entry,value))
], null),value], null);
} else {
return null;
}
});
cljs_browser_repl.ui.history_entry.history_response = (function cljs_browser_repl$ui$history_entry$history_response(p__11804,p__11805){
var map__11806 = p__11804;
var map__11806__$1 = ((((!((map__11806 == null)))?(((((map__11806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11806):map__11806);
var emit = cljs.core.get.call(null,map__11806__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__11807 = p__11805;
var map__11807__$1 = ((((!((map__11807 == null)))?(((((map__11807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11807):map__11807);
var entry = map__11807__$1;
var value = cljs.core.get.call(null,map__11807__$1,new cljs.core.Keyword(null,"value","value",305978217));
var sub_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,value));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-response","div.history-response",2036810698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(sub_type)?"":"history-response-cljs"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sub_type,map__11806,map__11806__$1,emit,map__11807,map__11807__$1,entry,value){
return (function (){
return cljs_browser_repl.ui.history_entry.emit_input_BANG_.call(null,emit,entry);
});})(sub_type,map__11806,map__11806__$1,emit,map__11807,map__11807__$1,entry,value))
], null),(cljs.core.truth_(sub_type)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_browser_repl.ui.history_entry.history_entry,null,cljs_browser_repl.ui.history_entry.response_with_meta__GT_entry.call(null,entry)], null):(cljs.core.truth_(value)?cljs.core.println_str.call(null,value):null))], null);
});
cljs_browser_repl.ui.history_entry.history_response_error = (function cljs_browser_repl$ui$history_entry$history_response_error(p__11810,p__11811){
var map__11812 = p__11810;
var map__11812__$1 = ((((!((map__11812 == null)))?(((((map__11812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11812):map__11812);
var emit = cljs.core.get.call(null,map__11812__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__11813 = p__11811;
var map__11813__$1 = ((((!((map__11813 == null)))?(((((map__11813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11813):map__11813);
var value = cljs.core.get.call(null,map__11813__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-response-error","div.history-response-error",903167561),value], null);
});
cljs_browser_repl.ui.history_entry.history_unknown = (function cljs_browser_repl$ui$history_entry$history_unknown(p__11816,entry){
var map__11817 = p__11816;
var map__11817__$1 = ((((!((map__11817 == null)))?(((((map__11817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11817):map__11817);
var emit = cljs.core.get.call(null,map__11817__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.history-unknown","pre.history-unknown",228775659),cljs.core.println_str.call(null,entry)], null);
});
cljs_browser_repl.ui.history_entry.history_html = (function cljs_browser_repl$ui$history_entry$history_html(p__11819,p__11820){
var map__11821 = p__11819;
var map__11821__$1 = ((((!((map__11821 == null)))?(((((map__11821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11821):map__11821);
var emit = cljs.core.get.call(null,map__11821__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__11822 = p__11820;
var map__11822__$1 = ((((!((map__11822 == null)))?(((((map__11822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11822):map__11822);
var value = cljs.core.get.call(null,map__11822__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-html","div.history-html",-1330193097),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),value], null)], null)], null);
});
cljs_browser_repl.ui.history_entry.internal_re = (new RegExp(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),".*#/file/(.*)"].join('')));
cljs_browser_repl.ui.history_entry.history_md = (function cljs_browser_repl$ui$history_entry$history_md(p__11825,p__11826){
var map__11827 = p__11825;
var map__11827__$1 = ((((!((map__11827 == null)))?(((((map__11827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11827):map__11827);
var emit = cljs.core.get.call(null,map__11827__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__11828 = p__11826;
var map__11828__$1 = ((((!((map__11828 == null)))?(((((map__11828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11828):map__11828);
var value = cljs.core.get.call(null,map__11828__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-markdown","div.history-markdown",-1224543335),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),cljs_browser_repl.markdown.render.call(null,value)], null)], null)], null);
});
cljs_browser_repl.ui.history_entry.history_entry = (function cljs_browser_repl$ui$history_entry$history_entry(p__11831,p__11832){
var map__11833 = p__11831;
var map__11833__$1 = ((((!((map__11833 == null)))?(((((map__11833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11833):map__11833);
var attrs = map__11833__$1;
var emit = cljs.core.get.call(null,map__11833__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__11834 = p__11832;
var map__11834__$1 = ((((!((map__11834 == null)))?(((((map__11834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11834):map__11834);
var entry = map__11834__$1;
var type = cljs.core.get.call(null,map__11834__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-entry","div.history-entry",-1020769015),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11837 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entry);
var G__11837__$1 = (((G__11837 instanceof cljs.core.Keyword))?G__11837.fqn:null);
switch (G__11837__$1) {
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
