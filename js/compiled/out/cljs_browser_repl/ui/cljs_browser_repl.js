// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_browser_repl.ui.cljs_browser_repl');
goog.require('cljs.core');
goog.require('cljs_browser_repl.ui.history');
goog.require('cljs_browser_repl.actions.repl');
goog.require('cljs_browser_repl.actions.notebook');
goog.require('cljs_browser_repl.state');
goog.require('goog.events');
goog.require('cljs_browser_repl.router');
goog.require('clojure.string');
cljs_browser_repl.ui.cljs_browser_repl.focus_input_BANG_ = (function cljs_browser_repl$ui$cljs_browser_repl$focus_input_BANG_(){
return document.querySelector(".repl-input-input").focus();
});
cljs_browser_repl.ui.cljs_browser_repl.cljs_browser_repl_raw = (function cljs_browser_repl$ui$cljs_browser_repl$cljs_browser_repl_raw(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cljs-browser-repl","div.cljs-browser-repl",-252699194),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_browser_repl.ui.history.history,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-event","on-event",1340574774),(function (type,payload){
var G__24400 = type;
var G__24400__$1 = (((G__24400 instanceof cljs.core.Keyword))?G__24400.fqn:null);
switch (G__24400__$1) {
case "input":
if(cljs.core._EQ_.call(null,currKey,(91))){
return cljs_browser_repl.actions.repl.repl_entry_BANG_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(payload));
} else {
cljs_browser_repl.actions.repl.new_input_BANG_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(payload),cljs.core._EQ_.call(null,currKey,(18)));

return cljs_browser_repl.ui.cljs_browser_repl.focus_input_BANG_.call(null);
}

break;
case "continue":
return cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);

break;
case "visit-file":
return cljs_browser_repl.router.navigate_BANG_.call(null,clojure.string.replace.call(null,cljs_browser_repl.router.get_token.call(null),/\/file\/(.*)/,["/file/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(payload)].join('')));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24400__$1)].join('')));

}
})], null),cljs.core.deref.call(null,cljs_browser_repl.state.history)], null)], null);
});
cljs_browser_repl.ui.cljs_browser_repl.cljs_browser_repl = cljs_browser_repl.ui.cljs_browser_repl.cljs_browser_repl_raw;

//# sourceMappingURL=cljs_browser_repl.js.map
