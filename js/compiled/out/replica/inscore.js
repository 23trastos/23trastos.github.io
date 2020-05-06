// Compiled by ClojureScript 1.10.339 {}
goog.provide('replica.inscore');
goog.require('cljs.core');
goog.require('replica.utils');
/**
 * Drops (sends) the desired code string to the active INScore window. If several arguments are provided then they are combined as one string without any formatting.
 */
replica.inscore.dropc_BANG_ = (function replica$inscore$dropc_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12657 = arguments.length;
var i__4532__auto___12658 = (0);
while(true){
if((i__4532__auto___12658 < len__4531__auto___12657)){
args__4534__auto__.push((arguments[i__4532__auto___12658]));

var G__12659 = (i__4532__auto___12658 + (1));
i__4532__auto___12658 = G__12659;
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
replica.inscore.dropc_BANG_.cljs$lang$applyTo = (function (seq12656){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12656));
});

replica.inscore.make_line = (function replica$inscore$make_line(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12661 = arguments.length;
var i__4532__auto___12662 = (0);
while(true){
if((i__4532__auto___12662 < len__4531__auto___12661)){
args__4534__auto__.push((arguments[i__4532__auto___12662]));

var G__12663 = (i__4532__auto___12662 + (1));
i__4532__auto___12662 = G__12663;
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
replica.inscore.make_line.cljs$lang$applyTo = (function (seq12660){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12660));
});

/**
 * Drops (sends) a line, combining its arguments and adding a semicolon to the end, to the active INScore window.
 */
replica.inscore.dropl_BANG_ = (function replica$inscore$dropl_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12665 = arguments.length;
var i__4532__auto___12666 = (0);
while(true){
if((i__4532__auto___12666 < len__4531__auto___12665)){
args__4534__auto__.push((arguments[i__4532__auto___12666]));

var G__12667 = (i__4532__auto___12666 + (1));
i__4532__auto___12666 = G__12667;
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
replica.inscore.dropl_BANG_.cljs$lang$applyTo = (function (seq12664){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12664));
});

/**
 * Drops (sends) one line for each argument to the active INScore window. You can provide fragments of code inside each line. [see doc for 'dropl aka replica.inscore/dropl!]
 */
replica.inscore.dropls_BANG_ = (function replica$inscore$dropls_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12669 = arguments.length;
var i__4532__auto___12670 = (0);
while(true){
if((i__4532__auto___12670 < len__4531__auto___12669)){
args__4534__auto__.push((arguments[i__4532__auto___12670]));

var G__12671 = (i__4532__auto___12670 + (1));
i__4532__auto___12670 = G__12671;
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
replica.inscore.dropls_BANG_.cljs$lang$applyTo = (function (seq12668){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12668));
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
var len__4531__auto___12673 = arguments.length;
var i__4532__auto___12674 = (0);
while(true){
if((i__4532__auto___12674 < len__4531__auto___12673)){
args__4534__auto__.push((arguments[i__4532__auto___12674]));

var G__12675 = (i__4532__auto___12674 + (1));
i__4532__auto___12674 = G__12675;
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
replica.inscore.clear_BANG_.cljs$lang$applyTo = (function (seq12672){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12672));
});

/**
 * Address an object [or create it] and send to it a command. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.msg_BANG_ = (function replica$inscore$msg_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12678 = arguments.length;
var i__4532__auto___12679 = (0);
while(true){
if((i__4532__auto___12679 < len__4531__auto___12678)){
args__4534__auto__.push((arguments[i__4532__auto___12679]));

var G__12680 = (i__4532__auto___12679 + (1));
i__4532__auto___12679 = G__12680;
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
replica.inscore.msg_BANG_.cljs$lang$applyTo = (function (seq12676){
var G__12677 = cljs.core.first.call(null,seq12676);
var seq12676__$1 = cljs.core.next.call(null,seq12676);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12677,seq12676__$1);
});

/**
 * Dispatches a 'set [obj-type] [args]' command to an object.
 */
replica.inscore.setx_BANG_ = (function replica$inscore$setx_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12684 = arguments.length;
var i__4532__auto___12685 = (0);
while(true){
if((i__4532__auto___12685 < len__4531__auto___12684)){
args__4534__auto__.push((arguments[i__4532__auto___12685]));

var G__12686 = (i__4532__auto___12685 + (1));
i__4532__auto___12685 = G__12686;
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
replica.inscore.setx_BANG_.cljs$lang$applyTo = (function (seq12681){
var G__12682 = cljs.core.first.call(null,seq12681);
var seq12681__$1 = cljs.core.next.call(null,seq12681);
var G__12683 = cljs.core.first.call(null,seq12681__$1);
var seq12681__$2 = cljs.core.next.call(null,seq12681__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12682,G__12683,seq12681__$2);
});

/**
 * Macro command for creating a new score from GMN code. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.gmn_BANG_ = (function replica$inscore$gmn_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12690 = arguments.length;
var i__4532__auto___12691 = (0);
while(true){
if((i__4532__auto___12691 < len__4531__auto___12690)){
args__4534__auto__.push((arguments[i__4532__auto___12691]));

var G__12692 = (i__4532__auto___12691 + (1));
i__4532__auto___12691 = G__12692;
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
replica.inscore.gmn_BANG_.cljs$lang$applyTo = (function (seq12687){
var G__12688 = cljs.core.first.call(null,seq12687);
var seq12687__$1 = cljs.core.next.call(null,seq12687);
var G__12689 = cljs.core.first.call(null,seq12687__$1);
var seq12687__$2 = cljs.core.next.call(null,seq12687__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12688,G__12689,seq12687__$2);
});

/**
 * Macro command for creating a new text entry. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.txt_BANG_ = (function replica$inscore$txt_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12696 = arguments.length;
var i__4532__auto___12697 = (0);
while(true){
if((i__4532__auto___12697 < len__4531__auto___12696)){
args__4534__auto__.push((arguments[i__4532__auto___12697]));

var G__12698 = (i__4532__auto___12697 + (1));
i__4532__auto___12697 = G__12698;
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
replica.inscore.txt_BANG_.cljs$lang$applyTo = (function (seq12693){
var G__12694 = cljs.core.first.call(null,seq12693);
var seq12693__$1 = cljs.core.next.call(null,seq12693);
var G__12695 = cljs.core.first.call(null,seq12693__$1);
var seq12693__$2 = cljs.core.next.call(null,seq12693__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12694,G__12695,seq12693__$2);
});

/**
 * Macro command for creating a new html entry. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.html_BANG_ = (function replica$inscore$html_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12702 = arguments.length;
var i__4532__auto___12703 = (0);
while(true){
if((i__4532__auto___12703 < len__4531__auto___12702)){
args__4534__auto__.push((arguments[i__4532__auto___12703]));

var G__12704 = (i__4532__auto___12703 + (1));
i__4532__auto___12703 = G__12704;
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
replica.inscore.html_BANG_.cljs$lang$applyTo = (function (seq12699){
var G__12700 = cljs.core.first.call(null,seq12699);
var seq12699__$1 = cljs.core.next.call(null,seq12699);
var G__12701 = cljs.core.first.call(null,seq12699__$1);
var seq12699__$2 = cljs.core.next.call(null,seq12699__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12700,G__12701,seq12699__$2);
});

/**
 * Macro command for creating a new html <button> entry and the repl entry to be sent onclick. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.btn_BANG_ = (function replica$inscore$btn_BANG_(var_args){
var G__12710 = arguments.length;
switch (G__12710) {
case 2:
return replica.inscore.btn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___12712 = arguments.length;
var i__4532__auto___12713 = (0);
while(true){
if((i__4532__auto___12713 < len__4531__auto___12712)){
args_arr__4546__auto__.push((arguments[i__4532__auto___12713]));

var G__12714 = (i__4532__auto___12713 + (1));
i__4532__auto___12713 = G__12714;
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
return cljs.core.apply.call(null,replica.inscore.setx_BANG_,object,new cljs.core.Symbol(null,"html","html",641734630,null),["'<button onclick=\"toRepl(\\'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),"\\')\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3949__auto__ = label;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return object;
}
})()),"</button>'"].join(''),opt);
});

/** @this {Function} */
replica.inscore.btn_BANG_.cljs$lang$applyTo = (function (seq12706){
var G__12707 = cljs.core.first.call(null,seq12706);
var seq12706__$1 = cljs.core.next.call(null,seq12706);
var G__12708 = cljs.core.first.call(null,seq12706__$1);
var seq12706__$2 = cljs.core.next.call(null,seq12706__$1);
var G__12709 = cljs.core.first.call(null,seq12706__$2);
var seq12706__$3 = cljs.core.next.call(null,seq12706__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12707,G__12708,G__12709,seq12706__$3);
});

replica.inscore.btn_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Macro command for creating a watch to an element. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.watch_BANG_ = (function replica$inscore$watch_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12718 = arguments.length;
var i__4532__auto___12719 = (0);
while(true){
if((i__4532__auto___12719 < len__4531__auto___12718)){
args__4534__auto__.push((arguments[i__4532__auto___12719]));

var G__12720 = (i__4532__auto___12719 + (1));
i__4532__auto___12719 = G__12720;
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
replica.inscore.watch_BANG_.cljs$lang$applyTo = (function (seq12715){
var G__12716 = cljs.core.first.call(null,seq12715);
var seq12715__$1 = cljs.core.next.call(null,seq12715);
var G__12717 = cljs.core.first.call(null,seq12715__$1);
var seq12715__$2 = cljs.core.next.call(null,seq12715__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12716,G__12717,seq12715__$2);
});

/**
 * Macro command for creating an alias for the desired object
 */
replica.inscore.als_BANG_ = (function replica$inscore$als_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12724 = arguments.length;
var i__4532__auto___12725 = (0);
while(true){
if((i__4532__auto___12725 < len__4531__auto___12724)){
args__4534__auto__.push((arguments[i__4532__auto___12725]));

var G__12726 = (i__4532__auto___12725 + (1));
i__4532__auto___12725 = G__12726;
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
replica.inscore.als_BANG_.cljs$lang$applyTo = (function (seq12721){
var G__12722 = cljs.core.first.call(null,seq12721);
var seq12721__$1 = cljs.core.next.call(null,seq12721);
var G__12723 = cljs.core.first.call(null,seq12721__$1);
var seq12721__$2 = cljs.core.next.call(null,seq12721__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12722,G__12723,seq12721__$2);
});

replica.inscore.routes = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"als","als",2020052861,null),new cljs.core.Symbol(null,"txt","txt",-2027592081,null),new cljs.core.Symbol(null,"gmn","gmn",-1228752600,null),new cljs.core.Symbol(null,"dropls","dropls",677955357,null),new cljs.core.Symbol(null,"addr","addr",42880790,null),new cljs.core.Symbol(null,"setx","setx",532512799,null),new cljs.core.Symbol(null,"dropc","dropc",-939619651,null),new cljs.core.Symbol(null,"watch","watch",2021519804,null),new cljs.core.Symbol(null,"clear","clear",-777330810,null),new cljs.core.Symbol(null,"make-line","make-line",1150652984,null),new cljs.core.Symbol(null,"html","html",641734630,null),new cljs.core.Symbol(null,"msg","msg",254428083,null),new cljs.core.Symbol(null,"dropl","dropl",-636984007,null),new cljs.core.Symbol(null,"btn","btn",-676141118,null)],[new cljs.core.Symbol(null,"als!","als!",-487637442,null),new cljs.core.Symbol(null,"txt!","txt!",597581936,null),new cljs.core.Symbol(null,"gmn!","gmn!",-260726850,null),new cljs.core.Symbol(null,"dropls!","dropls!",1967781400,null),new cljs.core.Symbol(null,"addr","addr",42880790,null),new cljs.core.Symbol(null,"setx!","setx!",-2003665837,null),new cljs.core.Symbol(null,"dropc!","dropc!",614382068,null),new cljs.core.Symbol(null,"watch!","watch!",296407435,null),new cljs.core.Symbol(null,"clear!","clear!",1495717109,null),new cljs.core.Symbol(null,"make-line","make-line",1150652984,null),new cljs.core.Symbol(null,"html!","html!",-72613035,null),new cljs.core.Symbol(null,"msg!","msg!",-1995873876,null),new cljs.core.Symbol(null,"dropl!","dropl!",1713460340,null),new cljs.core.Symbol(null,"btn!","btn!",2072814859,null)]);
/**
 * The 'i' function is a route to almost all of the INScore built-in functionality inside replica.
 */
replica.inscore.i = (function replica$inscore$i(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12730 = arguments.length;
var i__4532__auto___12731 = (0);
while(true){
if((i__4532__auto___12731 < len__4531__auto___12730)){
args__4534__auto__.push((arguments[i__4532__auto___12731]));

var G__12732 = (i__4532__auto___12731 + (1));
i__4532__auto___12731 = G__12732;
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
var G__12729 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join('');
switch (G__12729) {
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
replica.inscore.i.cljs$lang$applyTo = (function (seq12727){
var G__12728 = cljs.core.first.call(null,seq12727);
var seq12727__$1 = cljs.core.next.call(null,seq12727);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12728,seq12727__$1);
});

replica.utils.add_routes_BANG_.call(null,new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"replica.inscore","replica.inscore",-1897157507,null),replica.inscore.routes);

//# sourceMappingURL=inscore.js.map
