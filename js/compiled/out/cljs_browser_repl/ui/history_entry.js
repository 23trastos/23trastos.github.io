// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_browser_repl.ui.history_entry');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs_browser_repl.markdown');
cljs_browser_repl.ui.history_entry.response_with_meta__GT_entry = (function cljs_browser_repl$ui$history_entry$response_with_meta__GT_entry(p__21801){
var map__21802 = p__21801;
var map__21802__$1 = ((((!((map__21802 == null)))?(((((map__21802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21802):map__21802);
var entry = map__21802__$1;
var value = cljs.core.get.call(null,map__21802__$1,new cljs.core.Keyword(null,"value","value",305978217));
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
cljs_browser_repl.ui.history_entry.history_input = (function cljs_browser_repl$ui$history_entry$history_input(p__21804,p__21805){
var map__21806 = p__21804;
var map__21806__$1 = ((((!((map__21806 == null)))?(((((map__21806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21806):map__21806);
var emit = cljs.core.get.call(null,map__21806__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__21807 = p__21805;
var map__21807__$1 = ((((!((map__21807 == null)))?(((((map__21807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21807):map__21807);
var entry = map__21807__$1;
var value = cljs.core.get.call(null,map__21807__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-input","div.history-input",-1946133575),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__21806,map__21806__$1,emit,map__21807,map__21807__$1,entry,value){
return (function (){
return cljs_browser_repl.ui.history_entry.emit_input_BANG_.call(null,emit,entry);
});})(map__21806,map__21806__$1,emit,map__21807,map__21807__$1,entry,value))
], null),value], null);
});
cljs_browser_repl.ui.history_entry.history_response = (function cljs_browser_repl$ui$history_entry$history_response(p__21810,p__21811){
var map__21812 = p__21810;
var map__21812__$1 = ((((!((map__21812 == null)))?(((((map__21812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21812):map__21812);
var emit = cljs.core.get.call(null,map__21812__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__21813 = p__21811;
var map__21813__$1 = ((((!((map__21813 == null)))?(((((map__21813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21813):map__21813);
var entry = map__21813__$1;
var value = cljs.core.get.call(null,map__21813__$1,new cljs.core.Keyword(null,"value","value",305978217));
var sub_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,value));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-response","div.history-response",2036810698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(sub_type)?"":"history-response-cljs"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (sub_type,map__21812,map__21812__$1,emit,map__21813,map__21813__$1,entry,value){
return (function (){
return cljs_browser_repl.ui.history_entry.emit_input_BANG_.call(null,emit,entry);
});})(sub_type,map__21812,map__21812__$1,emit,map__21813,map__21813__$1,entry,value))
], null),(cljs.core.truth_(sub_type)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_browser_repl.ui.history_entry.history_entry,null,cljs_browser_repl.ui.history_entry.response_with_meta__GT_entry.call(null,entry)], null):cljs.core.println_str.call(null,value))], null);
});
cljs_browser_repl.ui.history_entry.history_response_error = (function cljs_browser_repl$ui$history_entry$history_response_error(p__21816,p__21817){
var map__21818 = p__21816;
var map__21818__$1 = ((((!((map__21818 == null)))?(((((map__21818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21818):map__21818);
var emit = cljs.core.get.call(null,map__21818__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__21819 = p__21817;
var map__21819__$1 = ((((!((map__21819 == null)))?(((((map__21819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21819):map__21819);
var value = cljs.core.get.call(null,map__21819__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-response-error","div.history-response-error",903167561),value], null);
});
cljs_browser_repl.ui.history_entry.history_unknown = (function cljs_browser_repl$ui$history_entry$history_unknown(p__21822,entry){
var map__21823 = p__21822;
var map__21823__$1 = ((((!((map__21823 == null)))?(((((map__21823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21823):map__21823);
var emit = cljs.core.get.call(null,map__21823__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.history-unknown","pre.history-unknown",228775659),cljs.core.println_str.call(null,entry)], null);
});
cljs_browser_repl.ui.history_entry.history_html = (function cljs_browser_repl$ui$history_entry$history_html(p__21825,p__21826){
var map__21827 = p__21825;
var map__21827__$1 = ((((!((map__21827 == null)))?(((((map__21827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21827):map__21827);
var emit = cljs.core.get.call(null,map__21827__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__21828 = p__21826;
var map__21828__$1 = ((((!((map__21828 == null)))?(((((map__21828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21828):map__21828);
var value = cljs.core.get.call(null,map__21828__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-html","div.history-html",-1330193097),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),value], null)], null)], null);
});
cljs_browser_repl.ui.history_entry.internal_re = (new RegExp(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),".*#/file/(.*)"].join('')));
cljs_browser_repl.ui.history_entry.history_md = (function cljs_browser_repl$ui$history_entry$history_md(p__21832,p__21833){
var map__21834 = p__21832;
var map__21834__$1 = ((((!((map__21834 == null)))?(((((map__21834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21834):map__21834);
var emit = cljs.core.get.call(null,map__21834__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__21835 = p__21833;
var map__21835__$1 = ((((!((map__21835 == null)))?(((((map__21835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21835):map__21835);
var value = cljs.core.get.call(null,map__21835__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-markdown","div.history-markdown",-1224543335),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__21834,map__21834__$1,emit,map__21835,map__21835__$1,value){
return (function (p1__21831_SHARP_){
p1__21831_SHARP_.preventDefault();

var target = p1__21831_SHARP_.target;
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
});})(map__21834,map__21834__$1,emit,map__21835,map__21835__$1,value))
,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),cljs_browser_repl.markdown.render.call(null,value)], null)], null)], null);
});
cljs_browser_repl.ui.history_entry.history_separator = (function cljs_browser_repl$ui$history_entry$history_separator(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null);
});
cljs_browser_repl.ui.history_entry.history_stop = (function cljs_browser_repl$ui$history_entry$history_stop(p__21838,p__21839){
var map__21840 = p__21838;
var map__21840__$1 = ((((!((map__21840 == null)))?(((((map__21840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21840):map__21840);
var emit = cljs.core.get.call(null,map__21840__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__21841 = p__21839;
var map__21841__$1 = ((((!((map__21841 == null)))?(((((map__21841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21841):map__21841);
var entry = map__21841__$1;
var disabled = cljs.core.get.call(null,map__21841__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
if(cljs.core.truth_(disabled)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_browser_repl.ui.history_entry.history_separator], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-stop","div.history-stop",446810996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__21840,map__21840__$1,emit,map__21841,map__21841__$1,entry,disabled){
return (function (){
return emit.call(null,new cljs.core.Keyword(null,"continue","continue",-207346553));
});})(map__21840,map__21840__$1,emit,map__21841,map__21841__$1,entry,disabled))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"Next"], null)], null);
}
});
cljs_browser_repl.ui.history_entry.history_entry = (function cljs_browser_repl$ui$history_entry$history_entry(p__21844,p__21845){
var map__21846 = p__21844;
var map__21846__$1 = ((((!((map__21846 == null)))?(((((map__21846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21846):map__21846);
var attrs = map__21846__$1;
var emit = cljs.core.get.call(null,map__21846__$1,new cljs.core.Keyword(null,"emit","emit",-1327179018));
var map__21847 = p__21845;
var map__21847__$1 = ((((!((map__21847 == null)))?(((((map__21847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21847):map__21847);
var entry = map__21847__$1;
var type = cljs.core.get.call(null,map__21847__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-entry","div.history-entry",-1020769015),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21850 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entry);
var G__21850__$1 = (((G__21850 instanceof cljs.core.Keyword))?G__21850.fqn:null);
switch (G__21850__$1) {
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
