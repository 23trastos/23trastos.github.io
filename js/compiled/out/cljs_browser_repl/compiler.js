// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_browser_repl.compiler');
goog.require('cljs.core');
goog.require('replumb.core');
goog.require('replumb.repl');
goog.require('cljs.tools.reader');
goog.require('goog.net.XhrIo');
/**
 * Very simple implementation of XMLHttpRequests that given a file path
 *   calls src-cb with the string fetched of nil in case of error.
 *   See doc at https://developers.google.com/closure/library/docs/xhrio
 */
cljs_browser_repl.compiler.fetch_file_BANG_ = (function cljs_browser_repl$compiler$fetch_file_BANG_(file_url,src_cb){
try{return goog.net.XhrIo.send(file_url,(function (e){
if(cljs.core.truth_(e.target.isSuccess())){
return src_cb.call(null,e.target.getResponseText());
} else {
return src_cb.call(null,null);
}
}));
}catch (e47496){var e = e47496;
return src_cb.call(null,null);
}});
cljs_browser_repl.compiler.repl_opts = cljs.core.merge.call(null,replumb.core.options.call(null,new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/js/compiled/out"], null),cljs_browser_repl.compiler.fetch_file_BANG_),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warning-as-error","warning-as-error",1347418166),true], null));
cljs_browser_repl.compiler.cljs_read_eval_print_BANG_ = (function cljs_browser_repl$compiler$cljs_read_eval_print_BANG_(line,cb){
try{return replumb.core.read_eval_call.call(null,cljs_browser_repl.compiler.repl_opts,cb,line);
}catch (e47497){if((e47497 instanceof Error)){
var err = e47497;
cljs.core.println.call(null,"Caught js/Error during read-eval-print: ",err);

return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),err,new cljs.core.Keyword(null,"ns","ns",441598760),replumb.repl.current_ns.call(null)], null));
} else {
throw e47497;

}
}});
cljs_browser_repl.compiler.is_readable_QMARK_ = (function cljs_browser_repl$compiler$is_readable_QMARK_(line){
var or__3949__auto__ = (function (){var and__3938__auto__ = cljs.core._EQ_.call(null,cljs.core.subs.call(null,line,(0),(1)),"/");
if(and__3938__auto__){
return cljs.core.re_find.call(null,/;/,line);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
try{cljs.tools.reader.read_string.call(null,line);

return true;
}catch (e47498){var _ = e47498;
return false;
}}
});

//# sourceMappingURL=compiler.js.map
