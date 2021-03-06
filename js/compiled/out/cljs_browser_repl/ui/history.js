// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_browser_repl.ui.history');
goog.require('cljs.core');
goog.require('reagent.dom');
goog.require('clojure.string');
goog.require('cljs_browser_repl.ui.history_entry');
cljs_browser_repl.ui.history.history_raw = (function cljs_browser_repl$ui$history$history_raw(p__11841,hs){
var map__11842 = p__11841;
var map__11842__$1 = ((((!((map__11842 == null)))?(((((map__11842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11842):map__11842);
var on_event = cljs.core.get.call(null,map__11842__$1,new cljs.core.Keyword(null,"on-event","on-event",1340574774));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history","div.history",1357424362),(function (){var iter__4324__auto__ = ((function (map__11842,map__11842__$1,on_event){
return (function cljs_browser_repl$ui$history$history_raw_$_iter__11844(s__11845){
return (new cljs.core.LazySeq(null,((function (map__11842,map__11842__$1,on_event){
return (function (){
var s__11845__$1 = s__11845;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__11845__$1);
if(temp__5457__auto__){
var s__11845__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11845__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__11845__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__11847 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__11846 = (0);
while(true){
if((i__11846 < size__4323__auto__)){
var entry = cljs.core._nth.call(null,c__4322__auto__,i__11846);
cljs.core.chunk_append.call(null,b__11847,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_browser_repl.ui.history_entry.history_entry,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"emit","emit",-1327179018),on_event], null),entry], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["hist-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entry)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(entry)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(entry))].join(''))].join('')], null)));

var G__11848 = (i__11846 + (1));
i__11846 = G__11848;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11847),cljs_browser_repl$ui$history$history_raw_$_iter__11844.call(null,cljs.core.chunk_rest.call(null,s__11845__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11847),null);
}
} else {
var entry = cljs.core.first.call(null,s__11845__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_browser_repl.ui.history_entry.history_entry,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"emit","emit",-1327179018),on_event], null),entry], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["hist-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entry)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(entry)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(entry))].join(''))].join('')], null)),cljs_browser_repl$ui$history$history_raw_$_iter__11844.call(null,cljs.core.rest.call(null,s__11845__$2)));
}
} else {
return null;
}
break;
}
});})(map__11842,map__11842__$1,on_event))
,null,null));
});})(map__11842,map__11842__$1,on_event))
;
return iter__4324__auto__.call(null,hs);
})()], null);
});
cljs_browser_repl.ui.history.history = cljs.core.with_meta.call(null,cljs_browser_repl.ui.history.history_raw,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),(function (this$,new_argv){
var node = reagent.dom.dom_node.call(null,this$);
var should_scroll_QMARK_ = cljs.core._EQ_.call(null,((node.scrollTop + node.offsetHeight) + node.scrollHeight));
return this$.shouldScrollBottom = should_scroll_QMARK_;
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,old_argv){
if(cljs.core.truth_(this$.shouldScrollBottom)){
var node = reagent.dom.dom_node.call(null,this$);
return node.scrollTop = node.scrollHeight;
} else {
return null;
}
})], null));

//# sourceMappingURL=history.js.map
