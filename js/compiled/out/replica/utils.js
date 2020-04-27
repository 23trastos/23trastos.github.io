// Compiled by ClojureScript 1.10.339 {}
goog.provide('replica.utils');
goog.require('cljs.core');
replica.utils.global = (function (){var this$ = this;
return this$;
})();
if((typeof replica !== 'undefined') && (typeof replica.utils !== 'undefined') && (typeof replica.utils.resp !== 'undefined')){
} else {
replica.utils.resp = cljs.core.atom.call(null,null);
}
if((typeof replica !== 'undefined') && (typeof replica.utils !== 'undefined') && (typeof replica.utils.routes !== 'undefined')){
} else {
replica.utils.routes = cljs.core.atom.call(null,null);
}
if((typeof replica !== 'undefined') && (typeof replica.utils !== 'undefined') && (typeof replica.utils.info !== 'undefined')){
} else {
replica.utils.info = document.getElementById("right-info");
}
replica.utils.get_value = (function replica$utils$get_value(){
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replica.utils.resp));
if((((value == null)) || (cljs.core._EQ_.call(null,(new cljs.core.List(null,null,null,(1),null)),value)) || (!((cljs.core.re_find.call(null,/nil/,value) == null))))){
return null;
} else {
return clojure.string.replace.call(null,value,/\"/,"");
}
});
replica.utils.error_BANG_ = (function replica$utils$error_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18489 = arguments.length;
var i__4532__auto___18490 = (0);
while(true){
if((i__4532__auto___18490 < len__4531__auto___18489)){
args__4534__auto__.push((arguments[i__4532__auto___18490]));

var G__18491 = (i__4532__auto___18490 + (1));
i__4532__auto___18490 = G__18491;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.utils.error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.utils.error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (origin,msgs){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,"@replica.",origin,": ",msgs)));
});

replica.utils.error_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.utils.error_BANG_.cljs$lang$applyTo = (function (seq18487){
var G__18488 = cljs.core.first.call(null,seq18487);
var seq18487__$1 = cljs.core.next.call(null,seq18487);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18488,seq18487__$1);
});

replica.utils.set_info_BANG_ = (function replica$utils$set_info_BANG_(string){
return replica.utils.info.innerHTML = string;
});
replica.utils.url_BANG_ = (function replica$utils$url_BANG_(url){
return replaceUrl(url.call(null));
});
replica.utils.cmd_url = (function replica$utils$cmd_url(c){
return ["#/cmd?c=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),"\""].join('');
});
/**
 * Sends a command to REPL by URL query
 */
replica.utils.url_command_BANG_ = (function replica$utils$url_command_BANG_(c){
return replica.utils.url_BANG_.call(null,replica.utils.cmd_url.call(null,c));
});
replica.utils.command_BANG_ = (function replica$utils$command_BANG_(var_args){
var G__18493 = arguments.length;
switch (G__18493) {
case 1:
return replica.utils.command_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return replica.utils.command_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replica.utils.command_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (c){
return replica.utils.command_BANG_.call(null,c,false,true);
});

replica.utils.command_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (c,hist_QMARK_,resp_QMARK_){
cljs.core.reset_BANG_.call(null,replica.utils.resp,null);

return toRepl(c,hist_QMARK_,resp_QMARK_);
});

replica.utils.command_BANG_.cljs$lang$maxFixedArity = 3;

replica.utils.proc_BANG_ = (function replica$utils$proc_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___18497 = arguments.length;
var i__4532__auto___18498 = (0);
while(true){
if((i__4532__auto___18498 < len__4531__auto___18497)){
args__4534__auto__.push((arguments[i__4532__auto___18498]));

var G__18499 = (i__4532__auto___18498 + (1));
i__4532__auto___18498 = G__18499;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.utils.proc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.utils.proc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (route,args){
if(cljs.core._EQ_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args))].join(''),"doc")){
return replica.utils.command_BANG_.call(null,["(doc ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,replica.utils.routes),route))),")"].join(''),true,false);
} else {
return cljs.core.apply.call(null,cljs.core.second.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,replica.utils.routes),route)),args);
}
});

replica.utils.proc_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.utils.proc_BANG_.cljs$lang$applyTo = (function (seq18495){
var G__18496 = cljs.core.first.call(null,seq18495);
var seq18495__$1 = cljs.core.next.call(null,seq18495);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18496,seq18495__$1);
});

replica.utils.add_routes_BANG_ = (function replica$utils$add_routes_BANG_(var_args){
var G__18503 = arguments.length;
switch (G__18503) {
case 1:
return replica.utils.add_routes_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return replica.utils.add_routes_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replica.utils.add_routes_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (route_cmd_map){
return cljs.core.swap_BANG_.call(null,replica.utils.routes,cljs.core.merge,route_cmd_map);
});

replica.utils.add_routes_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pre_route,origin,route_cmd_map){
return replica.utils.add_routes_BANG_.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__18500_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre_route),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18500_SHARP_)].join('');
}),cljs.core.keys.call(null,route_cmd_map)),cljs.core.map.call(null,(function (p1__18501_SHARP_){
return (new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(origin),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18501_SHARP_)].join(''),(new cljs.core.List(null,cljs.core.eval.call(null,cljs.core.symbol.call(null,p1__18501_SHARP_)),null,(1),null)),(2),null));
}),cljs.core.vals.call(null,route_cmd_map))));
});

replica.utils.add_routes_BANG_.cljs$lang$maxFixedArity = 3;

replica.utils.doc_commands = (function replica$utils$doc_commands(fn_path,route_cmd_map,pre_router){
replica.utils.command_BANG_.call(null,["(doc ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_path),")"].join(''),true,true);

return replica.utils.command_BANG_.call(null,["(str \"Available commands are: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(pre_router)?["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre_router),"]+"].join(''):null)),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.array,cljs.core.keys.call(null,route_cmd_map)).join(" ")),")\")"].join(''),false,true);
});
replica.utils.create_command_BANG_ = (function replica$utils$create_command_BANG_(command_string){
return appendToMenu(command_string,replica.utils.cmd_url.call(null,command_string));
});

//# sourceMappingURL=utils.js.map
