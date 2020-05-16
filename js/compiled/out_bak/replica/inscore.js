// Compiled by ClojureScript 1.10.339 {}
goog.provide('replica.inscore');
goog.require('cljs.core');
goog.require('replica.utils');
/**
 * Drops (sends) the desired code string to the active INScore window. If several arguments are provided then they are combined as one string without any formatting.
 */
replica.inscore.dropc_BANG_ = (function replica$inscore$dropc_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13009 = arguments.length;
var i__4532__auto___13010 = (0);
while(true){
if((i__4532__auto___13010 < len__4531__auto___13009)){
args__4534__auto__.push((arguments[i__4532__auto___13010]));

var G__13011 = (i__4532__auto___13010 + (1));
i__4532__auto___13010 = G__13011;
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
return cljs.core.js__GT_clj.call(null,dropTextTo(INS,code));
}
});

replica.inscore.dropc_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
replica.inscore.dropc_BANG_.cljs$lang$applyTo = (function (seq13008){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13008));
});

replica.inscore.make_line = (function replica$inscore$make_line(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13013 = arguments.length;
var i__4532__auto___13014 = (0);
while(true){
if((i__4532__auto___13014 < len__4531__auto___13013)){
args__4534__auto__.push((arguments[i__4532__auto___13014]));

var G__13015 = (i__4532__auto___13014 + (1));
i__4532__auto___13014 = G__13015;
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
replica.inscore.make_line.cljs$lang$applyTo = (function (seq13012){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13012));
});

/**
 * Drops (sends) a line, combining its arguments and adding a semicolon to the end, to the active INScore window.
 */
replica.inscore.dropl_BANG_ = (function replica$inscore$dropl_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13017 = arguments.length;
var i__4532__auto___13018 = (0);
while(true){
if((i__4532__auto___13018 < len__4531__auto___13017)){
args__4534__auto__.push((arguments[i__4532__auto___13018]));

var G__13019 = (i__4532__auto___13018 + (1));
i__4532__auto___13018 = G__13019;
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
replica.inscore.dropl_BANG_.cljs$lang$applyTo = (function (seq13016){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13016));
});

/**
 * Drops (sends) one line for each argument to the active INScore window. You can provide fragments of code inside each line. [see doc for 'dropl aka replica.inscore/dropl!]
 */
replica.inscore.dropls_BANG_ = (function replica$inscore$dropls_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13021 = arguments.length;
var i__4532__auto___13022 = (0);
while(true){
if((i__4532__auto___13022 < len__4531__auto___13021)){
args__4534__auto__.push((arguments[i__4532__auto___13022]));

var G__13023 = (i__4532__auto___13022 + (1));
i__4532__auto___13022 = G__13023;
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
replica.inscore.dropls_BANG_.cljs$lang$applyTo = (function (seq13020){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13020));
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
var len__4531__auto___13025 = arguments.length;
var i__4532__auto___13026 = (0);
while(true){
if((i__4532__auto___13026 < len__4531__auto___13025)){
args__4534__auto__.push((arguments[i__4532__auto___13026]));

var G__13027 = (i__4532__auto___13026 + (1));
i__4532__auto___13026 = G__13027;
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
replica.inscore.clear_BANG_.cljs$lang$applyTo = (function (seq13024){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13024));
});

/**
 * Address an object [or create it] and send to it a command. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.msg_BANG_ = (function replica$inscore$msg_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13030 = arguments.length;
var i__4532__auto___13031 = (0);
while(true){
if((i__4532__auto___13031 < len__4531__auto___13030)){
args__4534__auto__.push((arguments[i__4532__auto___13031]));

var G__13032 = (i__4532__auto___13031 + (1));
i__4532__auto___13031 = G__13032;
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
replica.inscore.msg_BANG_.cljs$lang$applyTo = (function (seq13028){
var G__13029 = cljs.core.first.call(null,seq13028);
var seq13028__$1 = cljs.core.next.call(null,seq13028);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13029,seq13028__$1);
});

/**
 * Dispatches a 'set [obj-type] [args]' command to an object.
 */
replica.inscore.setx_BANG_ = (function replica$inscore$setx_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13037 = arguments.length;
var i__4532__auto___13038 = (0);
while(true){
if((i__4532__auto___13038 < len__4531__auto___13037)){
args__4534__auto__.push((arguments[i__4532__auto___13038]));

var G__13039 = (i__4532__auto___13038 + (1));
i__4532__auto___13038 = G__13039;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.inscore.setx_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.inscore.setx_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (object,obj_type,args){
var arguments$ = cljs.core.map.call(null,(function (p1__13033_SHARP_){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,p1__13033_SHARP_),cljs.core.type.call(null,""))){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13033_SHARP_),"\""].join('');
} else {
return p1__13033_SHARP_;
}
}),args);
cljs.core.apply.call(null,replica.inscore.msg_BANG_,object,"set",obj_type,arguments$);

var elm = INS.lastChild;
elm.id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(object)].join('');

return elm;
});

replica.inscore.setx_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.inscore.setx_BANG_.cljs$lang$applyTo = (function (seq13034){
var G__13035 = cljs.core.first.call(null,seq13034);
var seq13034__$1 = cljs.core.next.call(null,seq13034);
var G__13036 = cljs.core.first.call(null,seq13034__$1);
var seq13034__$2 = cljs.core.next.call(null,seq13034__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13035,G__13036,seq13034__$2);
});

/**
 * Macro command for creating a new score from GMN code. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.gmn_BANG_ = (function replica$inscore$gmn_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13043 = arguments.length;
var i__4532__auto___13044 = (0);
while(true){
if((i__4532__auto___13044 < len__4531__auto___13043)){
args__4534__auto__.push((arguments[i__4532__auto___13044]));

var G__13045 = (i__4532__auto___13044 + (1));
i__4532__auto___13044 = G__13045;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.inscore.gmn_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.inscore.gmn_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (object,gmn_code,opt){
return cljs.core.apply.call(null,replica.inscore.setx_BANG_,object,new cljs.core.Symbol(null,"gmn","gmn",-1228752600,null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(gmn_code)].join(''),opt);
});

replica.inscore.gmn_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.inscore.gmn_BANG_.cljs$lang$applyTo = (function (seq13040){
var G__13041 = cljs.core.first.call(null,seq13040);
var seq13040__$1 = cljs.core.next.call(null,seq13040);
var G__13042 = cljs.core.first.call(null,seq13040__$1);
var seq13040__$2 = cljs.core.next.call(null,seq13040__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13041,G__13042,seq13040__$2);
});

/**
 * Macro command for creating a new score from GMN score expression. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.gmn_expr_BANG_ = (function replica$inscore$gmn_expr_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13049 = arguments.length;
var i__4532__auto___13050 = (0);
while(true){
if((i__4532__auto___13050 < len__4531__auto___13049)){
args__4534__auto__.push((arguments[i__4532__auto___13050]));

var G__13051 = (i__4532__auto___13050 + (1));
i__4532__auto___13050 = G__13051;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.inscore.gmn_expr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.inscore.gmn_expr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (object,expr,opt){
return cljs.core.apply.call(null,replica.inscore.setx_BANG_,object,new cljs.core.Symbol(null,"gmn","gmn",-1228752600,null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr)].join(''),opt);
});

replica.inscore.gmn_expr_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.inscore.gmn_expr_BANG_.cljs$lang$applyTo = (function (seq13046){
var G__13047 = cljs.core.first.call(null,seq13046);
var seq13046__$1 = cljs.core.next.call(null,seq13046);
var G__13048 = cljs.core.first.call(null,seq13046__$1);
var seq13046__$2 = cljs.core.next.call(null,seq13046__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13047,G__13048,seq13046__$2);
});

/**
 * Macro command for creating a new text entry. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.txt_BANG_ = (function replica$inscore$txt_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13055 = arguments.length;
var i__4532__auto___13056 = (0);
while(true){
if((i__4532__auto___13056 < len__4531__auto___13055)){
args__4534__auto__.push((arguments[i__4532__auto___13056]));

var G__13057 = (i__4532__auto___13056 + (1));
i__4532__auto___13056 = G__13057;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.inscore.txt_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.inscore.txt_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (object,txt_string,opt){
return cljs.core.apply.call(null,replica.inscore.setx_BANG_,object,new cljs.core.Symbol(null,"txt","txt",-2027592081,null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(txt_string)].join(''),opt);
});

replica.inscore.txt_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.inscore.txt_BANG_.cljs$lang$applyTo = (function (seq13052){
var G__13053 = cljs.core.first.call(null,seq13052);
var seq13052__$1 = cljs.core.next.call(null,seq13052);
var G__13054 = cljs.core.first.call(null,seq13052__$1);
var seq13052__$2 = cljs.core.next.call(null,seq13052__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13053,G__13054,seq13052__$2);
});

/**
 * Macro command for creating a new html entry. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.html_BANG_ = (function replica$inscore$html_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13061 = arguments.length;
var i__4532__auto___13062 = (0);
while(true){
if((i__4532__auto___13062 < len__4531__auto___13061)){
args__4534__auto__.push((arguments[i__4532__auto___13062]));

var G__13063 = (i__4532__auto___13062 + (1));
i__4532__auto___13062 = G__13063;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.inscore.html_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.inscore.html_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (object,html_string,opt){
return cljs.core.apply.call(null,replica.inscore.setx_BANG_,object,new cljs.core.Symbol(null,"html","html",641734630,null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(html_string)].join(''),opt);
});

replica.inscore.html_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.inscore.html_BANG_.cljs$lang$applyTo = (function (seq13058){
var G__13059 = cljs.core.first.call(null,seq13058);
var seq13058__$1 = cljs.core.next.call(null,seq13058);
var G__13060 = cljs.core.first.call(null,seq13058__$1);
var seq13058__$2 = cljs.core.next.call(null,seq13058__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13059,G__13060,seq13058__$2);
});

/**
 * Macro command for creating a new html <button> entry and the repl entry to be sent onclick. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.btn_BANG_ = (function replica$inscore$btn_BANG_(var_args){
var G__13069 = arguments.length;
switch (G__13069) {
case 2:
return replica.inscore.btn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___13071 = arguments.length;
var i__4532__auto___13072 = (0);
while(true){
if((i__4532__auto___13072 < len__4531__auto___13071)){
args_arr__4546__auto__.push((arguments[i__4532__auto___13072]));

var G__13073 = (i__4532__auto___13072 + (1));
i__4532__auto___13072 = G__13073;
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
return cljs.core.apply.call(null,replica.inscore.html_BANG_,object,["<button onclick='toRepl(\\'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),"\\')'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3949__auto__ = label;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return object;
}
})()),"</button>"].join(''),opt);
});

/** @this {Function} */
replica.inscore.btn_BANG_.cljs$lang$applyTo = (function (seq13065){
var G__13066 = cljs.core.first.call(null,seq13065);
var seq13065__$1 = cljs.core.next.call(null,seq13065);
var G__13067 = cljs.core.first.call(null,seq13065__$1);
var seq13065__$2 = cljs.core.next.call(null,seq13065__$1);
var G__13068 = cljs.core.first.call(null,seq13065__$2);
var seq13065__$3 = cljs.core.next.call(null,seq13065__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13066,G__13067,G__13068,seq13065__$3);
});

replica.inscore.btn_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Macro command for creating a new html slider (range) <input> with desired attr. and the fn[new-value] to be sent on change. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.sld_BANG_ = (function replica$inscore$sld_BANG_(var_args){
var G__13083 = arguments.length;
switch (G__13083) {
case 6:
return replica.inscore.sld_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___13085 = arguments.length;
var i__4532__auto___13086 = (0);
while(true){
if((i__4532__auto___13086 < len__4531__auto___13085)){
args_arr__4546__auto__.push((arguments[i__4532__auto___13086]));

var G__13087 = (i__4532__auto___13086 + (1));
i__4532__auto___13086 = G__13087;
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
replica.inscore.sld_BANG_.cljs$lang$applyTo = (function (seq13075){
var G__13076 = cljs.core.first.call(null,seq13075);
var seq13075__$1 = cljs.core.next.call(null,seq13075);
var G__13077 = cljs.core.first.call(null,seq13075__$1);
var seq13075__$2 = cljs.core.next.call(null,seq13075__$1);
var G__13078 = cljs.core.first.call(null,seq13075__$2);
var seq13075__$3 = cljs.core.next.call(null,seq13075__$2);
var G__13079 = cljs.core.first.call(null,seq13075__$3);
var seq13075__$4 = cljs.core.next.call(null,seq13075__$3);
var G__13080 = cljs.core.first.call(null,seq13075__$4);
var seq13075__$5 = cljs.core.next.call(null,seq13075__$4);
var G__13081 = cljs.core.first.call(null,seq13075__$5);
var seq13075__$6 = cljs.core.next.call(null,seq13075__$5);
var G__13082 = cljs.core.first.call(null,seq13075__$6);
var seq13075__$7 = cljs.core.next.call(null,seq13075__$6);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13076,G__13077,G__13078,G__13079,G__13080,G__13081,G__13082,seq13075__$7);
});

replica.inscore.sld_BANG_.cljs$lang$maxFixedArity = (7);

/**
 * Macro command for creating a watch to an element. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.watch_BANG_ = (function replica$inscore$watch_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13091 = arguments.length;
var i__4532__auto___13092 = (0);
while(true){
if((i__4532__auto___13092 < len__4531__auto___13091)){
args__4534__auto__.push((arguments[i__4532__auto___13092]));

var G__13093 = (i__4532__auto___13092 + (1));
i__4532__auto___13092 = G__13093;
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
replica.inscore.watch_BANG_.cljs$lang$applyTo = (function (seq13088){
var G__13089 = cljs.core.first.call(null,seq13088);
var seq13088__$1 = cljs.core.next.call(null,seq13088);
var G__13090 = cljs.core.first.call(null,seq13088__$1);
var seq13088__$2 = cljs.core.next.call(null,seq13088__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13089,G__13090,seq13088__$2);
});

/**
 * Query element contents or specific property. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.get_BANG_ = (function replica$inscore$get_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13098 = arguments.length;
var i__4532__auto___13099 = (0);
while(true){
if((i__4532__auto___13099 < len__4531__auto___13098)){
args__4534__auto__.push((arguments[i__4532__auto___13099]));

var G__13100 = (i__4532__auto___13099 + (1));
i__4532__auto___13099 = G__13100;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.inscore.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.inscore.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (object,queries){
if(cljs.core._EQ_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,queries))].join(''),"--keep")){
return cljs.core.apply.call(null,replica.inscore.msg_BANG_,object,new cljs.core.Symbol(null,"get","get",-971253014,null),queries);
} else {
return cljs.core.map.call(null,(function (p1__13094_SHARP_){
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,cljs.core.rest.call(null,p1__13094_SHARP_))),cljs.core.last.call(null,cljs.core.rest.call(null,p1__13094_SHARP_)).replace(";",""));
}),cljs.core.js__GT_clj.call(null,cljs.core.map.call(null,(function (p1__13095_SHARP_){
return p1__13095_SHARP_.split(" ");
}),cljs.core.apply.call(null,replica.inscore.msg_BANG_,object,new cljs.core.Symbol(null,"get","get",-971253014,null),queries))));
}
});

replica.inscore.get_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.inscore.get_BANG_.cljs$lang$applyTo = (function (seq13096){
var G__13097 = cljs.core.first.call(null,seq13096);
var seq13096__$1 = cljs.core.next.call(null,seq13096);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13097,seq13096__$1);
});

/**
 * Macro command for creating an alias for the desired object
 */
replica.inscore.als_BANG_ = (function replica$inscore$als_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13104 = arguments.length;
var i__4532__auto___13105 = (0);
while(true){
if((i__4532__auto___13105 < len__4531__auto___13104)){
args__4534__auto__.push((arguments[i__4532__auto___13105]));

var G__13106 = (i__4532__auto___13105 + (1));
i__4532__auto___13105 = G__13106;
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
replica.inscore.als_BANG_.cljs$lang$applyTo = (function (seq13101){
var G__13102 = cljs.core.first.call(null,seq13101);
var seq13101__$1 = cljs.core.next.call(null,seq13101);
var G__13103 = cljs.core.first.call(null,seq13101__$1);
var seq13101__$2 = cljs.core.next.call(null,seq13101__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13102,G__13103,seq13101__$2);
});

replica.inscore.routes = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"als","als",2020052861,null),new cljs.core.Symbol(null,"sld","sld",2066183935,null),new cljs.core.Symbol(null,"txt","txt",-2027592081,null),new cljs.core.Symbol(null,"gmn","gmn",-1228752600,null),new cljs.core.Symbol(null,"dropls","dropls",677955357,null),new cljs.core.Symbol(null,"addr","addr",42880790,null),new cljs.core.Symbol(null,"setx","setx",532512799,null),new cljs.core.Symbol(null,"dropc","dropc",-939619651,null),new cljs.core.Symbol(null,"gmn-expr","gmn-expr",1926971010,null),new cljs.core.Symbol(null,"watch","watch",2021519804,null),new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"clear","clear",-777330810,null),new cljs.core.Symbol(null,"make-line","make-line",1150652984,null),new cljs.core.Symbol(null,"html","html",641734630,null),new cljs.core.Symbol(null,"msg","msg",254428083,null),new cljs.core.Symbol(null,"dropl","dropl",-636984007,null),new cljs.core.Symbol(null,"btn","btn",-676141118,null)],[new cljs.core.Symbol(null,"als!","als!",-487637442,null),new cljs.core.Symbol(null,"sld!","sld!",-1157981097,null),new cljs.core.Symbol(null,"txt!","txt!",597581936,null),new cljs.core.Symbol(null,"gmn!","gmn!",-260726850,null),new cljs.core.Symbol(null,"dropls!","dropls!",1967781400,null),new cljs.core.Symbol(null,"addr","addr",42880790,null),new cljs.core.Symbol(null,"setx!","setx!",-2003665837,null),new cljs.core.Symbol(null,"dropc!","dropc!",614382068,null),new cljs.core.Symbol(null,"gmn-expr!","gmn-expr!",944322151,null),new cljs.core.Symbol(null,"watch!","watch!",296407435,null),new cljs.core.Symbol(null,"get!","get!",-815197836,null),new cljs.core.Symbol(null,"clear!","clear!",1495717109,null),new cljs.core.Symbol(null,"make-line","make-line",1150652984,null),new cljs.core.Symbol(null,"html!","html!",-72613035,null),new cljs.core.Symbol(null,"msg!","msg!",-1995873876,null),new cljs.core.Symbol(null,"dropl!","dropl!",1713460340,null),new cljs.core.Symbol(null,"btn!","btn!",2072814859,null)]);
/**
 * The 'i' function is a route to almost all of the INScore built-in functionality inside replica.
 */
replica.inscore.i = (function replica$inscore$i(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13110 = arguments.length;
var i__4532__auto___13111 = (0);
while(true){
if((i__4532__auto___13111 < len__4531__auto___13110)){
args__4534__auto__.push((arguments[i__4532__auto___13111]));

var G__13112 = (i__4532__auto___13111 + (1));
i__4532__auto___13111 = G__13112;
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
var G__13109 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join('');
switch (G__13109) {
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
replica.inscore.i.cljs$lang$applyTo = (function (seq13107){
var G__13108 = cljs.core.first.call(null,seq13107);
var seq13107__$1 = cljs.core.next.call(null,seq13107);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13108,seq13107__$1);
});

replica.utils.add_routes_BANG_.call(null,new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"replica.inscore","replica.inscore",-1897157507,null),replica.inscore.routes);

//# sourceMappingURL=inscore.js.map
