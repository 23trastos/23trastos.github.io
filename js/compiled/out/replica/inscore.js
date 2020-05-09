// Compiled by ClojureScript 1.10.339 {}
goog.provide('replica.inscore');
goog.require('cljs.core');
goog.require('replica.utils');
/**
 * Drops (sends) the desired code string to the active INScore window. If several arguments are provided then they are combined as one string without any formatting.
 */
replica.inscore.dropc_BANG_ = (function replica$inscore$dropc_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12351 = arguments.length;
var i__4532__auto___12352 = (0);
while(true){
if((i__4532__auto___12352 < len__4531__auto___12351)){
args__4534__auto__.push((arguments[i__4532__auto___12352]));

var G__12353 = (i__4532__auto___12352 + (1));
i__4532__auto___12352 = G__12353;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return replica.inscore.dropc_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

replica.inscore.dropc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (codes){
var code = cljs.core.apply.call(null,cljs.core.str,codes);
if(cljs.core.truth_(cljs.core.re_find.call(null,/--keep/,code))){
return code.replace((new RegExp(/--keep|;/,new cljs.core.Symbol(null,"g","g",-916345864,null))),"");
} else {
return dropTextTo(INS,code);
}
});

replica.inscore.dropc_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
replica.inscore.dropc_BANG_.cljs$lang$applyTo = (function (seq12350){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12350));
});

replica.inscore.make_line = (function replica$inscore$make_line(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12355 = arguments.length;
var i__4532__auto___12356 = (0);
while(true){
if((i__4532__auto___12356 < len__4531__auto___12355)){
args__4534__auto__.push((arguments[i__4532__auto___12356]));

var G__12357 = (i__4532__auto___12356 + (1));
i__4532__auto___12356 = G__12357;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return replica.inscore.make_line.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

replica.inscore.make_line.cljs$core$IFn$_invoke$arity$variadic = (function (codes){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.array,codes).join(" ")),";"].join('');
});

replica.inscore.make_line.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
replica.inscore.make_line.cljs$lang$applyTo = (function (seq12354){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12354));
});

/**
 * Drops (sends) a line, combining its arguments and adding a semicolon to the end, to the active INScore window.
 */
replica.inscore.dropl_BANG_ = (function replica$inscore$dropl_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12359 = arguments.length;
var i__4532__auto___12360 = (0);
while(true){
if((i__4532__auto___12360 < len__4531__auto___12359)){
args__4534__auto__.push((arguments[i__4532__auto___12360]));

var G__12361 = (i__4532__auto___12360 + (1));
i__4532__auto___12360 = G__12361;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return replica.inscore.dropl_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

replica.inscore.dropl_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (codes){
return replica.inscore.dropc_BANG_.call(null,cljs.core.apply.call(null,replica.inscore.make_line,codes));
});

replica.inscore.dropl_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
replica.inscore.dropl_BANG_.cljs$lang$applyTo = (function (seq12358){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12358));
});

/**
 * Drops (sends) one line for each argument to the active INScore window. You can provide fragments of code inside each line. [see doc for 'dropl aka replica.inscore/dropl!]
 */
replica.inscore.dropls_BANG_ = (function replica$inscore$dropls_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12363 = arguments.length;
var i__4532__auto___12364 = (0);
while(true){
if((i__4532__auto___12364 < len__4531__auto___12363)){
args__4534__auto__.push((arguments[i__4532__auto___12364]));

var G__12365 = (i__4532__auto___12364 + (1));
i__4532__auto___12364 = G__12365;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return replica.inscore.dropls_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

replica.inscore.dropls_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (lines){
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,replica.inscore.dropl_BANG_),lines);
});

replica.inscore.dropls_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
replica.inscore.dropls_BANG_.cljs$lang$applyTo = (function (seq12362){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12362));
});

/**
 * Address an object from a scene, returns OSC path. If no scene is prepended in the form '/ITL/scenex/objx' then '/ITL/scene/[object]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.addr = (function replica$inscore$addr(object){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/#|\/ITL\//,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(object)].join('')))?null:"/ITL/scene/")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(object)].join('');
});
/**
 * sends a '* del' message to the desired object or scene (if no argument is provided then '/ITL/scene/' is assumed).
 */
replica.inscore.clear_BANG_ = (function replica$inscore$clear_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12367 = arguments.length;
var i__4532__auto___12368 = (0);
while(true){
if((i__4532__auto___12368 < len__4531__auto___12367)){
args__4534__auto__.push((arguments[i__4532__auto___12368]));

var G__12369 = (i__4532__auto___12368 + (1));
i__4532__auto___12368 = G__12369;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return replica.inscore.clear_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

replica.inscore.clear_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj){
return cljs.core.apply.call(null,replica.inscore.dropl_BANG_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(replica.inscore.addr.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,obj))].join(''))),"* del"].join(''),cljs.core.rest.call(null,obj));
});

replica.inscore.clear_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
replica.inscore.clear_BANG_.cljs$lang$applyTo = (function (seq12366){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12366));
});

/**
 * Address an object [or create it] and send to it a command. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.msg_BANG_ = (function replica$inscore$msg_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12372 = arguments.length;
var i__4532__auto___12373 = (0);
while(true){
if((i__4532__auto___12373 < len__4531__auto___12372)){
args__4534__auto__.push((arguments[i__4532__auto___12373]));

var G__12374 = (i__4532__auto___12373 + (1));
i__4532__auto___12373 = G__12374;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.inscore.msg_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.inscore.msg_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (object,msg_codes){
if(cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,msg_codes))){
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,replica.inscore.msg_BANG_,object),msg_codes);
} else {
return cljs.core.apply.call(null,replica.inscore.dropl_BANG_,replica.inscore.addr.call(null,object),msg_codes);
}
});

replica.inscore.msg_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.inscore.msg_BANG_.cljs$lang$applyTo = (function (seq12370){
var G__12371 = cljs.core.first.call(null,seq12370);
var seq12370__$1 = cljs.core.next.call(null,seq12370);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12371,seq12370__$1);
});

/**
 * Dispatches a 'set [obj-type] [args]' command to an object.
 */
replica.inscore.setx_BANG_ = (function replica$inscore$setx_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12378 = arguments.length;
var i__4532__auto___12379 = (0);
while(true){
if((i__4532__auto___12379 < len__4531__auto___12378)){
args__4534__auto__.push((arguments[i__4532__auto___12379]));

var G__12380 = (i__4532__auto___12379 + (1));
i__4532__auto___12379 = G__12380;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.inscore.setx_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.inscore.setx_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (object,obj_type,args){
return cljs.core.apply.call(null,replica.inscore.msg_BANG_,object,"set",obj_type,args);
});

replica.inscore.setx_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.inscore.setx_BANG_.cljs$lang$applyTo = (function (seq12375){
var G__12376 = cljs.core.first.call(null,seq12375);
var seq12375__$1 = cljs.core.next.call(null,seq12375);
var G__12377 = cljs.core.first.call(null,seq12375__$1);
var seq12375__$2 = cljs.core.next.call(null,seq12375__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12376,G__12377,seq12375__$2);
});

/**
 * Macro command for creating a new score from GMN code. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.gmn_BANG_ = (function replica$inscore$gmn_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12384 = arguments.length;
var i__4532__auto___12385 = (0);
while(true){
if((i__4532__auto___12385 < len__4531__auto___12384)){
args__4534__auto__.push((arguments[i__4532__auto___12385]));

var G__12386 = (i__4532__auto___12385 + (1));
i__4532__auto___12385 = G__12386;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.inscore.gmn_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.inscore.gmn_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (object,gmn_string,opt){
return cljs.core.apply.call(null,replica.inscore.setx_BANG_,object,new cljs.core.Symbol(null,"gmn","gmn",-1228752600,null),["'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gmn_string),"'"].join(''),opt);
});

replica.inscore.gmn_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.inscore.gmn_BANG_.cljs$lang$applyTo = (function (seq12381){
var G__12382 = cljs.core.first.call(null,seq12381);
var seq12381__$1 = cljs.core.next.call(null,seq12381);
var G__12383 = cljs.core.first.call(null,seq12381__$1);
var seq12381__$2 = cljs.core.next.call(null,seq12381__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12382,G__12383,seq12381__$2);
});

/**
 * Macro command for creating a new score from GMN score expression. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.gmn_expr_BANG_ = (function replica$inscore$gmn_expr_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12392 = arguments.length;
var i__4532__auto___12393 = (0);
while(true){
if((i__4532__auto___12393 < len__4531__auto___12392)){
args__4534__auto__.push((arguments[i__4532__auto___12393]));

var G__12394 = (i__4532__auto___12393 + (1));
i__4532__auto___12393 = G__12394;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((4) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((4)),(0),null)):null);
return replica.inscore.gmn_expr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4535__auto__);
});

replica.inscore.gmn_expr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (object,operation,gmn1,gmn2,opt){
return cljs.core.apply.call(null,replica.inscore.setx_BANG_,object,new cljs.core.Symbol(null,"gmn","gmn",-1228752600,null),["expr(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation)," '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gmn1),"' '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gmn2),"')"].join(''),opt);
});

replica.inscore.gmn_expr_BANG_.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
replica.inscore.gmn_expr_BANG_.cljs$lang$applyTo = (function (seq12387){
var G__12388 = cljs.core.first.call(null,seq12387);
var seq12387__$1 = cljs.core.next.call(null,seq12387);
var G__12389 = cljs.core.first.call(null,seq12387__$1);
var seq12387__$2 = cljs.core.next.call(null,seq12387__$1);
var G__12390 = cljs.core.first.call(null,seq12387__$2);
var seq12387__$3 = cljs.core.next.call(null,seq12387__$2);
var G__12391 = cljs.core.first.call(null,seq12387__$3);
var seq12387__$4 = cljs.core.next.call(null,seq12387__$3);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12388,G__12389,G__12390,G__12391,seq12387__$4);
});

/**
 * Macro command for creating a new text entry. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.txt_BANG_ = (function replica$inscore$txt_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12398 = arguments.length;
var i__4532__auto___12399 = (0);
while(true){
if((i__4532__auto___12399 < len__4531__auto___12398)){
args__4534__auto__.push((arguments[i__4532__auto___12399]));

var G__12400 = (i__4532__auto___12399 + (1));
i__4532__auto___12399 = G__12400;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.inscore.txt_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.inscore.txt_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (object,txt_string,opt){
return cljs.core.apply.call(null,replica.inscore.setx_BANG_,object,new cljs.core.Symbol(null,"txt","txt",-2027592081,null),["'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(txt_string),"'"].join(''),opt);
});

replica.inscore.txt_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.inscore.txt_BANG_.cljs$lang$applyTo = (function (seq12395){
var G__12396 = cljs.core.first.call(null,seq12395);
var seq12395__$1 = cljs.core.next.call(null,seq12395);
var G__12397 = cljs.core.first.call(null,seq12395__$1);
var seq12395__$2 = cljs.core.next.call(null,seq12395__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12396,G__12397,seq12395__$2);
});

/**
 * Macro command for creating a new html entry. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.html_BANG_ = (function replica$inscore$html_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12404 = arguments.length;
var i__4532__auto___12405 = (0);
while(true){
if((i__4532__auto___12405 < len__4531__auto___12404)){
args__4534__auto__.push((arguments[i__4532__auto___12405]));

var G__12406 = (i__4532__auto___12405 + (1));
i__4532__auto___12405 = G__12406;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.inscore.html_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.inscore.html_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (object,html_string,opt){
return cljs.core.apply.call(null,replica.inscore.setx_BANG_,object,new cljs.core.Symbol(null,"html","html",641734630,null),["'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(html_string),"'"].join(''),opt);
});

replica.inscore.html_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.inscore.html_BANG_.cljs$lang$applyTo = (function (seq12401){
var G__12402 = cljs.core.first.call(null,seq12401);
var seq12401__$1 = cljs.core.next.call(null,seq12401);
var G__12403 = cljs.core.first.call(null,seq12401__$1);
var seq12401__$2 = cljs.core.next.call(null,seq12401__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12402,G__12403,seq12401__$2);
});

/**
 * Macro command for creating a new html <button> entry and the repl entry to be sent onclick. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.btn_BANG_ = (function replica$inscore$btn_BANG_(var_args){
var G__12412 = arguments.length;
switch (G__12412) {
case 2:
return replica.inscore.btn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___12414 = arguments.length;
var i__4532__auto___12415 = (0);
while(true){
if((i__4532__auto___12415 < len__4531__auto___12414)){
args_arr__4546__auto__.push((arguments[i__4532__auto___12415]));

var G__12416 = (i__4532__auto___12415 + (1));
i__4532__auto___12415 = G__12416;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((3)),(0),null));
return replica.inscore.btn_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4547__auto__);

}
});

replica.inscore.btn_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (object,to_repl_code){
return replica.inscore.btn_BANG_.call(null,object,object,to_repl_code);
});

replica.inscore.btn_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (object,label,to_repl_code,opt){
var code = to_repl_code.replace((new RegExp(/'/,new cljs.core.Symbol(null,"g","g",-916345864,null))),"\\\\'");
return cljs.core.apply.call(null,replica.inscore.html_BANG_,object,["<button onclick=\"toRepl(\\'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),"\\')\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3949__auto__ = label;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return object;
}
})()),"</button>"].join(''),opt);
});

/** @this {Function} */
replica.inscore.btn_BANG_.cljs$lang$applyTo = (function (seq12408){
var G__12409 = cljs.core.first.call(null,seq12408);
var seq12408__$1 = cljs.core.next.call(null,seq12408);
var G__12410 = cljs.core.first.call(null,seq12408__$1);
var seq12408__$2 = cljs.core.next.call(null,seq12408__$1);
var G__12411 = cljs.core.first.call(null,seq12408__$2);
var seq12408__$3 = cljs.core.next.call(null,seq12408__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12409,G__12410,G__12411,seq12408__$3);
});

replica.inscore.btn_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Macro command for creating a new html slider (range) <input> with desired attr. and the fn[new-value] to be sent on change. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.sld_BANG_ = (function replica$inscore$sld_BANG_(var_args){
var G__12426 = arguments.length;
switch (G__12426) {
case 6:
return replica.inscore.sld_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___12428 = arguments.length;
var i__4532__auto___12429 = (0);
while(true){
if((i__4532__auto___12429 < len__4531__auto___12428)){
args_arr__4546__auto__.push((arguments[i__4532__auto___12429]));

var G__12430 = (i__4532__auto___12429 + (1));
i__4532__auto___12429 = G__12430;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((7)),(0),null));
return replica.inscore.sld_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),argseq__4547__auto__);

}
});

replica.inscore.sld_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (object_id,minv,maxv,step,initv,on_change){
return replica.inscore.sld_BANG_.call(null,object_id,object_id,minv,maxv,step,initv,on_change);
});

replica.inscore.sld_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (object_id,label,minv,maxv,step,initv,on_change,opt){
var function$ = on_change.replace((new RegExp(/'/,new cljs.core.Symbol(null,"g","g",-916345864,null))),"\\\\'");
return cljs.core.apply.call(null,replica.inscore.html_BANG_,object_id,["<p>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),":</p><input type=\"range\"\n                 min=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(minv),"\" max=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(maxv),"\" step=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(step),"\" value=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(initv),"\" id=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(object_id),"\" oninput=\"toRepl(\\'(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(function$)," \\' + this.value + \\')\\', false, false)\">"].join(''),opt);
});

/** @this {Function} */
replica.inscore.sld_BANG_.cljs$lang$applyTo = (function (seq12418){
var G__12419 = cljs.core.first.call(null,seq12418);
var seq12418__$1 = cljs.core.next.call(null,seq12418);
var G__12420 = cljs.core.first.call(null,seq12418__$1);
var seq12418__$2 = cljs.core.next.call(null,seq12418__$1);
var G__12421 = cljs.core.first.call(null,seq12418__$2);
var seq12418__$3 = cljs.core.next.call(null,seq12418__$2);
var G__12422 = cljs.core.first.call(null,seq12418__$3);
var seq12418__$4 = cljs.core.next.call(null,seq12418__$3);
var G__12423 = cljs.core.first.call(null,seq12418__$4);
var seq12418__$5 = cljs.core.next.call(null,seq12418__$4);
var G__12424 = cljs.core.first.call(null,seq12418__$5);
var seq12418__$6 = cljs.core.next.call(null,seq12418__$5);
var G__12425 = cljs.core.first.call(null,seq12418__$6);
var seq12418__$7 = cljs.core.next.call(null,seq12418__$6);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12419,G__12420,G__12421,G__12422,G__12423,G__12424,G__12425,seq12418__$7);
});

replica.inscore.sld_BANG_.cljs$lang$maxFixedArity = (7);

/**
 * Macro command for creating a watch to an element. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.watch_BANG_ = (function replica$inscore$watch_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12434 = arguments.length;
var i__4532__auto___12435 = (0);
while(true){
if((i__4532__auto___12435 < len__4531__auto___12434)){
args__4534__auto__.push((arguments[i__4532__auto___12435]));

var G__12436 = (i__4532__auto___12435 + (1));
i__4532__auto___12435 = G__12436;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.inscore.watch_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.inscore.watch_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (object,watch_for,body){
return cljs.core.apply.call(null,replica.inscore.msg_BANG_,object,new cljs.core.Symbol(null,"watch","watch",2021519804,null),watch_for,"(",cljs.core.apply.call(null,cljs.core.array,body).join(", "),")");
});

replica.inscore.watch_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.inscore.watch_BANG_.cljs$lang$applyTo = (function (seq12431){
var G__12432 = cljs.core.first.call(null,seq12431);
var seq12431__$1 = cljs.core.next.call(null,seq12431);
var G__12433 = cljs.core.first.call(null,seq12431__$1);
var seq12431__$2 = cljs.core.next.call(null,seq12431__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12432,G__12433,seq12431__$2);
});

/**
 * Macro command for creating an alias for the desired object
 */
replica.inscore.als_BANG_ = (function replica$inscore$als_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12440 = arguments.length;
var i__4532__auto___12441 = (0);
while(true){
if((i__4532__auto___12441 < len__4531__auto___12440)){
args__4534__auto__.push((arguments[i__4532__auto___12441]));

var G__12442 = (i__4532__auto___12441 + (1));
i__4532__auto___12441 = G__12442;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.inscore.als_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.inscore.als_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (object,your_alias,opt){
return cljs.core.apply.call(null,replica.inscore.msg_BANG_,object,new cljs.core.Symbol(null,"alias","alias",-399220103,null),"'",your_alias,"'",opt);
});

replica.inscore.als_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.inscore.als_BANG_.cljs$lang$applyTo = (function (seq12437){
var G__12438 = cljs.core.first.call(null,seq12437);
var seq12437__$1 = cljs.core.next.call(null,seq12437);
var G__12439 = cljs.core.first.call(null,seq12437__$1);
var seq12437__$2 = cljs.core.next.call(null,seq12437__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12438,G__12439,seq12437__$2);
});

replica.inscore.routes = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"als","als",2020052861,null),new cljs.core.Symbol(null,"sld","sld",2066183935,null),new cljs.core.Symbol(null,"txt","txt",-2027592081,null),new cljs.core.Symbol(null,"gmn","gmn",-1228752600,null),new cljs.core.Symbol(null,"dropls","dropls",677955357,null),new cljs.core.Symbol(null,"addr","addr",42880790,null),new cljs.core.Symbol(null,"setx","setx",532512799,null),new cljs.core.Symbol(null,"dropc","dropc",-939619651,null),new cljs.core.Symbol(null,"gmn-expr","gmn-expr",1926971010,null),new cljs.core.Symbol(null,"watch","watch",2021519804,null),new cljs.core.Symbol(null,"clear","clear",-777330810,null),new cljs.core.Symbol(null,"make-line","make-line",1150652984,null),new cljs.core.Symbol(null,"html","html",641734630,null),new cljs.core.Symbol(null,"msg","msg",254428083,null),new cljs.core.Symbol(null,"dropl","dropl",-636984007,null),new cljs.core.Symbol(null,"btn","btn",-676141118,null)],[new cljs.core.Symbol(null,"als!","als!",-487637442,null),new cljs.core.Symbol(null,"sld!","sld!",-1157981097,null),new cljs.core.Symbol(null,"txt!","txt!",597581936,null),new cljs.core.Symbol(null,"gmn!","gmn!",-260726850,null),new cljs.core.Symbol(null,"dropls!","dropls!",1967781400,null),new cljs.core.Symbol(null,"addr","addr",42880790,null),new cljs.core.Symbol(null,"setx!","setx!",-2003665837,null),new cljs.core.Symbol(null,"dropc!","dropc!",614382068,null),new cljs.core.Symbol(null,"gmn-expr!","gmn-expr!",944322151,null),new cljs.core.Symbol(null,"watch!","watch!",296407435,null),new cljs.core.Symbol(null,"clear!","clear!",1495717109,null),new cljs.core.Symbol(null,"make-line","make-line",1150652984,null),new cljs.core.Symbol(null,"html!","html!",-72613035,null),new cljs.core.Symbol(null,"msg!","msg!",-1995873876,null),new cljs.core.Symbol(null,"dropl!","dropl!",1713460340,null),new cljs.core.Symbol(null,"btn!","btn!",2072814859,null)]);
/**
 * The 'i' function is a route to almost all of the INScore built-in functionality inside replica.
 */
replica.inscore.i = (function replica$inscore$i(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12446 = arguments.length;
var i__4532__auto___12447 = (0);
while(true){
if((i__4532__auto___12447 < len__4531__auto___12446)){
args__4534__auto__.push((arguments[i__4532__auto___12447]));

var G__12448 = (i__4532__auto___12447 + (1));
i__4532__auto___12447 = G__12448;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.inscore.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.inscore.i.cljs$core$IFn$_invoke$arity$variadic = (function (route,args){
if(cljs.core.truth_(cljs.core.re_find.call(null,/\/ITL/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join('')))){
return cljs.core.apply.call(null,replica.inscore.dropl_BANG_,route,args);
} else {
var G__12445 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join('');
switch (G__12445) {
case "doc":
return replica.utils.doc_commands.call(null,new cljs.core.Symbol("replica.inscore","i","replica.inscore/i",-1616446785,null),replica.inscore.routes,new cljs.core.Symbol(null,"i","i",253690212,null));

break;
default:
return cljs.core.apply.call(null,replica.utils.proc_BANG_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"i","i",253690212,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join(''),args);

}
}
});

replica.inscore.i.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.inscore.i.cljs$lang$applyTo = (function (seq12443){
var G__12444 = cljs.core.first.call(null,seq12443);
var seq12443__$1 = cljs.core.next.call(null,seq12443);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12444,seq12443__$1);
});

replica.utils.add_routes_BANG_.call(null,new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"replica.inscore","replica.inscore",-1897157507,null),replica.inscore.routes);

//# sourceMappingURL=inscore.js.map
