// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_browser_repl.actions.repl');
goog.require('cljs.core');
goog.require('cljs_browser_repl.state');
goog.require('cljs_browser_repl.compiler');
goog.require('replumb.core');
goog.require('replumb.repl');
goog.require('clojure.string');
goog.require('replica.utils');
cljs_browser_repl.actions.repl.new_input_BANG_ = (function cljs_browser_repl$actions$repl$new_input_BANG_(s){
return cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.input,s);
});
cljs_browser_repl.actions.repl.repl_entry_BANG_ = (function cljs_browser_repl$actions$repl$repl_entry_BANG_(var_args){
var G__103990 = arguments.length;
switch (G__103990) {
case 1:
return cljs_browser_repl.actions.repl.repl_entry_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_browser_repl.actions.repl.repl_entry_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_browser_repl.actions.repl.repl_entry_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_browser_repl.actions.repl.repl_entry_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (code){
return cljs_browser_repl.actions.repl.repl_entry_BANG_.call(null,code,true,true);
});

cljs_browser_repl.actions.repl.repl_entry_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (code,history_QMARK_){
return cljs_browser_repl.actions.repl.repl_entry_BANG_.call(null,code,history_QMARK_,true);
});

cljs_browser_repl.actions.repl.repl_entry_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (code,history_QMARK_,resp_QMARK_){
if(clojure.string.blank_QMARK_.call(null,code)){
return null;
} else {
if(cljs.core.truth_(history_QMARK_)){
cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.history,cljs_browser_repl.state.add_entry,cljs_browser_repl.state.to_repl_input.call(null,code));
} else {
}

return cljs_browser_repl.compiler.cljs_read_eval_print_BANG_.call(null,code,(function (p__103991){
var map__103992 = p__103991;
var map__103992__$1 = ((((!((map__103992 == null)))?(((((map__103992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__103992):map__103992);
var ret = map__103992__$1;
var value = cljs.core.get.call(null,map__103992__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__103992__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.current_ns,replumb.repl.current_ns.call(null));

cljs.core.reset_BANG_.call(null,replica.utils.resp,ret);

return cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.history,cljs_browser_repl.state.add_entry,(cljs.core.truth_(error)?cljs_browser_repl.state.to_repl_error.call(null,replumb.core.error__GT_str.call(null,error)):(cljs.core.truth_(resp_QMARK_)?cljs_browser_repl.state.to_repl_result.call(null,value):null)));
}));
}
});

cljs_browser_repl.actions.repl.repl_entry_BANG_.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=repl.js.map
