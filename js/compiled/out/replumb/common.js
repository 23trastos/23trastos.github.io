// Compiled by ClojureScript 1.10.339 {}
goog.provide('replumb.common');
goog.require('cljs.core');
goog.require('clojure.string');
replumb.common.error_branch_QMARK_ = (function replumb$common$error_branch_QMARK_(error){
return (error instanceof Error);
});
replumb.common.error_children = (function replumb$common$error_children(error){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [error.cause], null);
});
replumb.common.error_seq = (function replumb$common$error_seq(error){
return cljs.core.tree_seq.call(null,replumb.common.error_branch_QMARK_,replumb.common.error_children,error);
});
/**
 * Iteratively extracts messages inside nested #error objects, returns a
 *   string.
 * 
 *   If the boolean `exclude-error-msg?` is true, only the messages not
 *   marked as "ERROR" will be included in the final string.
 * 
 *   If the boolean `print-stack?` is true, the stack will be added
 *   to the final string. They both default to false.
 * 
 *   ** Be sure to pass a js/Error object here **
 */
replumb.common.extract_message = (function replumb$common$extract_message(var_args){
var G__24215 = arguments.length;
switch (G__24215) {
case 1:
return replumb.common.extract_message.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replumb.common.extract_message.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return replumb.common.extract_message.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replumb.common.extract_message.cljs$core$IFn$_invoke$arity$1 = (function (err){
return replumb.common.extract_message.call(null,false,false,err);
});

replumb.common.extract_message.cljs$core$IFn$_invoke$arity$2 = (function (print_stack_QMARK_,err){
return replumb.common.extract_message.call(null,print_stack_QMARK_,false,err);
});

replumb.common.extract_message.cljs$core$IFn$_invoke$arity$3 = (function (print_stack_QMARK_,exclude_error_msg_QMARK_,err){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var strings = (function (){var G__24216 = cljs.core.keep.call(null,cljs.core.identity,replumb.common.error_seq.call(null,err));
var G__24216__$1 = (cljs.core.truth_(exclude_error_msg_QMARK_)?cljs.core.filter.call(null,((function (G__24216){
return (function (p1__24212_SHARP_){
return cljs.core.not_EQ_.call(null,"ERROR",p1__24212_SHARP_.message);
});})(G__24216))
,G__24216):G__24216);
var G__24216__$2 = cljs.core.map.call(null,((function (G__24216,G__24216__$1){
return (function (p1__24213_SHARP_){
return p1__24213_SHARP_.message;
});})(G__24216,G__24216__$1))
,G__24216__$1)
;
return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.empty_QMARK_),G__24216__$2);

})();
if(cljs.core.seq.call(null,strings)){
return clojure.string.join.call(null," - ",strings);
} else {
return "Error";
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(print_stack_QMARK_)?["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err.stack)].join(''):null))].join('');
});

replumb.common.extract_message.cljs$lang$maxFixedArity = 3;

/**
 * Callback that just echoes the result map. It also asserts the correct
 *   result format in its post condition. Useful for debugging and
 *   testing.
 */
replumb.common.echo_callback = (function replumb$common$echo_callback(result_map){
return result_map;
});
/**
 * Wraps the message in a success map.
 */
replumb.common.wrap_success = (function replumb$common$wrap_success(message){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),message], null);
});
/**
 * Wraps the message in a error map.
 */
replumb.common.wrap_error = (function replumb$common$wrap_error(message){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),message], null);
});
/**
 * Returns true if the string contains the newline \\n or \\r as
 *   characters.
 */
replumb.common.inline_newline_QMARK_ = (function replumb$common$inline_newline_QMARK_(s){
return cljs.core.re_matches.call(null,/\\{2,}n|\\{2,}r/,s);
});
/**
 * Is the string returned from an evaluation valid?
 */
replumb.common.valid_eval_result_QMARK_ = (function replumb$common$valid_eval_result_QMARK_(var_args){
var G__24219 = arguments.length;
switch (G__24219) {
case 1:
return replumb.common.valid_eval_result_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replumb.common.valid_eval_result_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replumb.common.valid_eval_result_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (result){
return replumb.common.valid_eval_result_QMARK_.call(null,cljs.core.PersistentArrayMap.EMPTY,result);
});

replumb.common.valid_eval_result_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (opts,result){
var or__3949__auto__ = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"no-pr-str-on-value","no-pr-str-on-value",1045962546).cljs$core$IFn$_invoke$arity$1(opts))) && (typeof result === 'string') && (cljs.core.not.call(null,replumb.common.inline_newline_QMARK_.call(null,result))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
var and__3938__auto__ = new cljs.core.Keyword(null,"no-pr-str-on-value","no-pr-str-on-value",1045962546).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__3938__auto__)){
return !((result == null));
} else {
return and__3938__auto__;
}
}
});

replumb.common.valid_eval_result_QMARK_.cljs$lang$maxFixedArity = 2;

/**
 * Is the string returned from an evaluation valid?
 */
replumb.common.valid_eval_error_QMARK_ = (function replumb$common$valid_eval_error_QMARK_(error){
return (error instanceof Error);
});
/**
 * Is the string returned from an evaluation valid?
 */
replumb.common.valid_eval_warning_QMARK_ = (function replumb$common$valid_eval_warning_QMARK_(warning){
return typeof warning === 'string';
});
replumb.common.has_valid_warning_QMARK_ = (function replumb$common$has_valid_warning_QMARK_(result){
var G__24221 = new cljs.core.Keyword(null,"warning","warning",-1685650671).cljs$core$IFn$_invoke$arity$1(result);
if((G__24221 == null)){
return null;
} else {
return replumb.common.valid_eval_warning_QMARK_.call(null,G__24221);
}
});
/**
 * Yields a "keyword not supported" error map. Receives the
 *   symbol/keyword printed in the message and ex-info data.
 */
replumb.common.error_keyword_not_supported = (function replumb$common$error_keyword_not_supported(keyword,ex_info_data){
return replumb.common.wrap_error.call(null,cljs.core.ex_info.call(null,["The ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keyword)," keyword is not supported at the moment"].join(''),ex_info_data));
});
/**
 * Yields a "Argument must a be a symbol" error map. Receives the
 *   symbol/fn name printed in the message and ex-info data.
 */
replumb.common.error_argument_must_be_symbol = (function replumb$common$error_argument_must_be_symbol(symbol,ex_info_data){
return replumb.common.wrap_error.call(null,cljs.core.ex_info.call(null,["Argument to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," must be a symbol"].join(''),ex_info_data));
});
/**
 * Filter out the option map keys that have -fn in it.
 */
replumb.common.filter_fn_keys = (function replumb$common$filter_fn_keys(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
} else {
throw (new Error("Assert failed: (map? opts)"));
}

var new_fn_entries = cljs.core.map.call(null,(function (p1__24222_SHARP_){
return cljs.core.assoc.call(null,p1__24222_SHARP_,(1),"<hidden function>");
}),cljs.core.filter.call(null,(function (p1__24223_SHARP_){
return cljs.core.re_find.call(null,/-fn/,cljs.core.name.call(null,cljs.core.first.call(null,p1__24223_SHARP_)));
}),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,opts)));
return cljs.core.into.call(null,opts,new_fn_entries);
});
/**
 * The function used by replumb for logging. It simply calls println for
 *   now so you that client code can set *print-fn* to customize the
 *   behavior, for example the following marks traces as DEBUG:
 * 
 *   (set! *print-fn*
 *  (fn [& args]
 *    (.apply (.-debug js/console) js/console (into-array args))))
 */
replumb.common.debug_prn = (function replumb$common$debug_prn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24225 = arguments.length;
var i__4532__auto___24226 = (0);
while(true){
if((i__4532__auto___24226 < len__4531__auto___24225)){
args__4534__auto__.push((arguments[i__4532__auto___24226]));

var G__24227 = (i__4532__auto___24226 + (1));
i__4532__auto___24226 = G__24227;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return replumb.common.debug_prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

replumb.common.debug_prn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.println,args);
});

replumb.common.debug_prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
replumb.common.debug_prn.cljs$lang$applyTo = (function (seq24224){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24224));
});

/**
 * Adds a / if missing at the end of the path.
 */
replumb.common.normalize_path = (function replumb$common$normalize_path(path){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,"/",cljs.core.last.call(null,path)))?null:"/"))].join('');
});
/**
 * Set up the cljs.user namespace
 */
replumb.common.set_cljs_user_BANG_ = (function replumb$common$set_cljs_user_BANG_(){
return cljs.user = ({});
});

//# sourceMappingURL=common.js.map
