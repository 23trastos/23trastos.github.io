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
var G__22153 = type;
var G__22153__$1 = (((G__22153 instanceof cljs.core.Keyword))?G__22153.fqn:null);
switch (G__22153__$1) {
case "input":
cljs_browser_repl.actions.repl.new_input_BANG_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(payload));

return cljs_browser_repl.ui.cljs_browser_repl.focus_input_BANG_.call(null);

break;
case "continue":
return cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);

break;
case "visit-file":
return cljs_browser_repl.router.navigate_BANG_.call(null,clojure.string.replace.call(null,cljs_browser_repl.router.get_token.call(null),/\/file\/(.*)/,["/file/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(payload)].join('')));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22153__$1)].join('')));

}
})], null),cljs.core.deref.call(null,cljs_browser_repl.state.history)], null)], null);
});
cljs_browser_repl.ui.cljs_browser_repl.cljs_browser_repl = cljs.core.with_meta.call(null,cljs_browser_repl.ui.cljs_browser_repl.cljs_browser_repl_raw,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
this$.shortcutListener = (function (e){
if(cljs.core._EQ_.call(null,e.target.nodeName,"TEXTAREA")){
return null;
} else {
var G__22155 = e.keyCode;
switch (G__22155) {
case (78):
return cljs_browser_repl.actions.notebook.play_notebook_BANG_.call(null);

break;
case (73):
return cljs_browser_repl.ui.cljs_browser_repl.focus_input_BANG_.call(null);

break;
default:
return null;

}
}
});

return goog.events.listen(window,"keyup",this$.shortcutListener);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (this$){
return goog.events.unlisten(window,"keyup",this$.shortcutListener);
})], null));

//# sourceMappingURL=cljs_browser_repl.js.map
