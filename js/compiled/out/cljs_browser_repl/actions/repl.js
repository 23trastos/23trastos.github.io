// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_browser_repl.actions.repl');
goog.require('cljs.core');
goog.require('cljs_browser_repl.state');
goog.require('cljs_browser_repl.compiler');
goog.require('replumb.core');
goog.require('replumb.repl');
goog.require('clojure.string');
goog.require('replica.utils');
cljs_browser_repl.actions.repl.new_input_BANG_ = (function cljs_browser_repl$actions$repl$new_input_BANG_(var_args){
var G__11708 = arguments.length;
switch (G__11708) {
case 1:
return cljs_browser_repl.actions.repl.new_input_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_browser_repl.actions.repl.new_input_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_browser_repl.actions.repl.new_input_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs_browser_repl.actions.repl.new_input_BANG_.call(null,s,false);
});

cljs_browser_repl.actions.repl.new_input_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (s,add_QMARK_){
if(cljs.core.truth_(add_QMARK_)){
return cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.input,cljs.core.str,s);
} else {
return cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.input,s);
}
});

cljs_browser_repl.actions.repl.new_input_BANG_.cljs$lang$maxFixedArity = 2;

cljs_browser_repl.actions.repl.real_code = (function cljs_browser_repl$actions$repl$real_code(string){
var G__11710 = cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(string)].join(''),(0),(1));
switch (G__11710) {
case "'":
case "[":
return ["(apply replica.core/r [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(string),"])"].join('');

break;
case "/":
return ["(apply replica.core/r 'idropc \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(string),"\")"].join('');

break;
case "{":
return ["(apply replica.core/r ['iclear]['igmn 'new \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(string),"\"])"].join('');

break;
default:
return string;

}
});
cljs_browser_repl.actions.repl.repl_entry_BANG_ = (function cljs_browser_repl$actions$repl$repl_entry_BANG_(var_args){
var G__11713 = arguments.length;
switch (G__11713) {
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
cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.history,cljs_browser_repl.state.add_entry,cljs_browser_repl.state.to_repl_input.call(null,(cljs.core.truth_(history_QMARK_)?code:null)));

return cljs_browser_repl.compiler.cljs_read_eval_print_BANG_.call(null,cljs_browser_repl.actions.repl.real_code.call(null,code),(function (p__11714){
var map__11715 = p__11714;
var map__11715__$1 = ((((!((map__11715 == null)))?(((((map__11715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11715):map__11715);
var ret = map__11715__$1;
var value = cljs.core.get.call(null,map__11715__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__11715__$1,new cljs.core.Keyword(null,"error","error",-978969032));
cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.current_ns,replumb.repl.current_ns.call(null));

cljs.core.reset_BANG_.call(null,replica.utils.resp,ret);

return cljs.core.swap_BANG_.call(null,cljs_browser_repl.state.history,cljs_browser_repl.state.add_entry,(cljs.core.truth_(error)?cljs_browser_repl.state.to_repl_error.call(null,replumb.core.error__GT_str.call(null,error)):cljs_browser_repl.state.to_repl_result.call(null,(cljs.core.truth_(resp_QMARK_)?value:null))));
}));
}
});

cljs_browser_repl.actions.repl.repl_entry_BANG_.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=repl.js.map
