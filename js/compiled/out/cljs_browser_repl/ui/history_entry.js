// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_browser_repl.ui.history_entry');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs_browser_repl.markdown');
cljs_browser_repl.ui.history_entry.response_with_meta__GT_entry = (function cljs_browser_repl$ui$history_entry$response_with_meta__GT_entry(p__21849){
var map__21850 = p__21849;
var map__21850__$1 = ((((!((map__21850 == null)))?(((((map__21850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21850):map__21850);
var entry = map__21850__$1;
var value = cljs.core.get.call(null,map__21850__$1,new cljs.core.Keyword(null,"value","value",305978217));
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
cljs_browser_repl.ui.history_entry.history_stop = (function cljs_browser_repl$ui$history_entry$history_stop(p__21852,p__21853){
var map__21854 = p__21852;
var map__21854__$1 = ((((!((map__21854 == null)))?(((((map__21854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21854):map__21854);
var emit = cljs.core.get.call(null,map__21854__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__21855 = p__21853;
var map__21855__$1 = ((((!((map__21855 == null)))?(((((map__21855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21855):map__21855);
var entry = map__21855__$1;
var disabled = cljs.core.get.call(null,map__21855__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var label = cljs.core.get.call(null,map__21855__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var resp_enables = cljs.core.get.call(null,map__21855__$1,new cljs.core.Keyword(null,"resp-enables","resp-enables",1135429872));
var auto_continue = cljs.core.get.call(null,map__21855__$1,new cljs.core.Keyword(null,"auto-continue","auto-continue",-1685336609));
if(cljs.core.truth_((function (){var or__3949__auto__ = disabled;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return resp_enables;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_browser_repl.ui.history_entry.history_separator], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-stop","div.history-stop",446810996),(cljs.core.truth_(auto_continue)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),emit.call(null,new cljs.core.Keyword(null,"continue","continue",-207346553))], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__21854,map__21854__$1,emit,map__21855,map__21855__$1,entry,disabled,label,resp_enables,auto_continue){
return (function (){
return emit.call(null,new cljs.core.Keyword(null,"continue","continue",-207346553));
});})(map__21854,map__21854__$1,emit,map__21855,map__21855__$1,entry,disabled,label,resp_enables,auto_continue))
], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),(function (){var or__3949__auto__ = label;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "Next";
}
})()], null)], null);
}
});
cljs_browser_repl.ui.history_entry.history_input = (function cljs_browser_repl$ui$history_entry$history_input(p__21858,p__21859){
var map__21860 = p__21858;
var map__21860__$1 = ((((!((map__21860 == null)))?(((((map__21860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21860):map__21860);
var emit = cljs.core.get.call(null,map__21860__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__21861 = p__21859;
var map__21861__$1 = ((((!((map__21861 == null)))?(((((map__21861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21861):map__21861);
var entry = map__21861__$1;
var value = cljs.core.get.call(null,map__21861__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-input","div.history-input",-1946133575),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__21860,map__21860__$1,emit,map__21861,map__21861__$1,entry,value){
return (function (){
return cljs_browser_repl.ui.history_entry.emit_input_BANG_.call(null,emit,entry);
});})(map__21860,map__21860__$1,emit,map__21861,map__21861__$1,entry,value))
], null),value], null);
});
cljs_browser_repl.ui.history_entry.history_response = (function cljs_browser_repl$ui$history_entry$history_response(p__21864,p__21865){
var map__21866 = p__21864;
var map__21866__$1 = ((((!((map__21866 == null)))?(((((map__21866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21866):map__21866);
var emit = cljs.core.get.call(null,map__21866__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__21867 = p__21865;
var map__21867__$1 = ((((!((map__21867 == null)))?(((((map__21867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21867):map__21867);
var entry = map__21867__$1;
var value = cljs.core.get.call(null,map__21867__$1,new cljs.core.Keyword(null,"value","value",305978217));
var sub_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,value));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-response","div.history-response",2036810698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(sub_type)?"":"history-response-cljs"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sub_type,map__21866,map__21866__$1,emit,map__21867,map__21867__$1,entry,value){
return (function (){
return cljs_browser_repl.ui.history_entry.emit_input_BANG_.call(null,emit,entry);
});})(sub_type,map__21866,map__21866__$1,emit,map__21867,map__21867__$1,entry,value))
], null),(cljs.core.truth_(sub_type)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_browser_repl.ui.history_entry.history_entry,null,cljs_browser_repl.ui.history_entry.response_with_meta__GT_entry.call(null,entry)], null):cljs.core.println_str.call(null,value))], null);
});
cljs_browser_repl.ui.history_entry.history_response_error = (function cljs_browser_repl$ui$history_entry$history_response_error(p__21870,p__21871){
var map__21872 = p__21870;
var map__21872__$1 = ((((!((map__21872 == null)))?(((((map__21872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21872):map__21872);
var emit = cljs.core.get.call(null,map__21872__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__21873 = p__21871;
var map__21873__$1 = ((((!((map__21873 == null)))?(((((map__21873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21873):map__21873);
var value = cljs.core.get.call(null,map__21873__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-response-error","div.history-response-error",903167561),value], null);
});
cljs_browser_repl.ui.history_entry.history_unknown = (function cljs_browser_repl$ui$history_entry$history_unknown(p__21876,entry){
var map__21877 = p__21876;
var map__21877__$1 = ((((!((map__21877 == null)))?(((((map__21877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21877):map__21877);
var emit = cljs.core.get.call(null,map__21877__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.history-unknown","pre.history-unknown",228775659),cljs.core.println_str.call(null,entry)], null);
});
cljs_browser_repl.ui.history_entry.history_html = (function cljs_browser_repl$ui$history_entry$history_html(p__21879,p__21880){
var map__21881 = p__21879;
var map__21881__$1 = ((((!((map__21881 == null)))?(((((map__21881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21881):map__21881);
var emit = cljs.core.get.call(null,map__21881__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__21882 = p__21880;
var map__21882__$1 = ((((!((map__21882 == null)))?(((((map__21882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21882):map__21882);
var value = cljs.core.get.call(null,map__21882__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-html","div.history-html",-1330193097),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),value], null)], null)], null);
});
cljs_browser_repl.ui.history_entry.internal_re = (new RegExp(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),".*#/file/(.*)"].join('')));
cljs_browser_repl.ui.history_entry.history_md = (function cljs_browser_repl$ui$history_entry$history_md(p__21885,p__21886){
var map__21887 = p__21885;
var map__21887__$1 = ((((!((map__21887 == null)))?(((((map__21887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21887):map__21887);
var emit = cljs.core.get.call(null,map__21887__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__21888 = p__21886;
var map__21888__$1 = ((((!((map__21888 == null)))?(((((map__21888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21888):map__21888);
var value = cljs.core.get.call(null,map__21888__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-markdown","div.history-markdown",-1224543335),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),cljs_browser_repl.markdown.render.call(null,value)], null)], null)], null);
});
cljs_browser_repl.ui.history_entry.history_entry = (function cljs_browser_repl$ui$history_entry$history_entry(p__21891,p__21892){
var map__21893 = p__21891;
var map__21893__$1 = ((((!((map__21893 == null)))?(((((map__21893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21893):map__21893);
var attrs = map__21893__$1;
var emit = cljs.core.get.call(null,map__21893__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__21894 = p__21892;
var map__21894__$1 = ((((!((map__21894 == null)))?(((((map__21894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21894):map__21894);
var entry = map__21894__$1;
var type = cljs.core.get.call(null,map__21894__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-entry","div.history-entry",-1020769015),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21897 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entry);
var G__21897__$1 = (((G__21897 instanceof cljs.core.Keyword))?G__21897.fqn:null);
switch (G__21897__$1) {
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
