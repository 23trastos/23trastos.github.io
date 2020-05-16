// Compiled by ClojureScript 1.10.339 {}
goog.provide('replica.inscore');
goog.require('cljs.core');
goog.require('replica.utils');
/**
 * Drops (sends) the desired code string to the active INScore window. If several arguments are provided then they are combined as one string without any formatting.
 */
replica.inscore.dropc_BANG_ = (function replica$inscore$dropc_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26044 = arguments.length;
var i__4532__auto___26045 = (0);
while(true){
if((i__4532__auto___26045 < len__4531__auto___26044)){
args__4534__auto__.push((arguments[i__4532__auto___26045]));

var G__26046 = (i__4532__auto___26045 + (1));
i__4532__auto___26045 = G__26046;
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
replica.inscore.dropc_BANG_.cljs$lang$applyTo = (function (seq26043){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26043));
});

replica.inscore.make_line = (function replica$inscore$make_line(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26048 = arguments.length;
var i__4532__auto___26049 = (0);
while(true){
if((i__4532__auto___26049 < len__4531__auto___26048)){
args__4534__auto__.push((arguments[i__4532__auto___26049]));

var G__26050 = (i__4532__auto___26049 + (1));
i__4532__auto___26049 = G__26050;
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
replica.inscore.make_line.cljs$lang$applyTo = (function (seq26047){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26047));
});

/**
 * Drops (sends) a line, combining its arguments and adding a semicolon to the end, to the active INScore window.
 */
replica.inscore.dropl_BANG_ = (function replica$inscore$dropl_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26052 = arguments.length;
var i__4532__auto___26053 = (0);
while(true){
if((i__4532__auto___26053 < len__4531__auto___26052)){
args__4534__auto__.push((arguments[i__4532__auto___26053]));

var G__26054 = (i__4532__auto___26053 + (1));
i__4532__auto___26053 = G__26054;
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
replica.inscore.dropl_BANG_.cljs$lang$applyTo = (function (seq26051){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26051));
});

/**
 * Drops (sends) one line for each argument to the active INScore window. You can provide fragments of code inside each line. [see doc for 'dropl aka replica.inscore/dropl!]
 */
replica.inscore.dropls_BANG_ = (function replica$inscore$dropls_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26056 = arguments.length;
var i__4532__auto___26057 = (0);
while(true){
if((i__4532__auto___26057 < len__4531__auto___26056)){
args__4534__auto__.push((arguments[i__4532__auto___26057]));

var G__26058 = (i__4532__auto___26057 + (1));
i__4532__auto___26057 = G__26058;
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
replica.inscore.dropls_BANG_.cljs$lang$applyTo = (function (seq26055){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26055));
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
var len__4531__auto___26060 = arguments.length;
var i__4532__auto___26061 = (0);
while(true){
if((i__4532__auto___26061 < len__4531__auto___26060)){
args__4534__auto__.push((arguments[i__4532__auto___26061]));

var G__26062 = (i__4532__auto___26061 + (1));
i__4532__auto___26061 = G__26062;
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
replica.inscore.clear_BANG_.cljs$lang$applyTo = (function (seq26059){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26059));
});

/**
 * Address an object [or create it] and send to it a command. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.msg_BANG_ = (function replica$inscore$msg_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26065 = arguments.length;
var i__4532__auto___26066 = (0);
while(true){
if((i__4532__auto___26066 < len__4531__auto___26065)){
args__4534__auto__.push((arguments[i__4532__auto___26066]));

var G__26067 = (i__4532__auto___26066 + (1));
i__4532__auto___26066 = G__26067;
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
replica.inscore.msg_BANG_.cljs$lang$applyTo = (function (seq26063){
var G__26064 = cljs.core.first.call(null,seq26063);
var seq26063__$1 = cljs.core.next.call(null,seq26063);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26064,seq26063__$1);
});

/**
 * Dispatches a 'set [obj-type] [args]' command to an object.
 */
replica.inscore.setx_BANG_ = (function replica$inscore$setx_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26072 = arguments.length;
var i__4532__auto___26073 = (0);
while(true){
if((i__4532__auto___26073 < len__4531__auto___26072)){
args__4534__auto__.push((arguments[i__4532__auto___26073]));

var G__26074 = (i__4532__auto___26073 + (1));
i__4532__auto___26073 = G__26074;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.inscore.setx_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.inscore.setx_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (object,obj_type,args){
var arguments$ = cljs.core.map.call(null,(function (p1__26068_SHARP_){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,p1__26068_SHARP_),cljs.core.type.call(null,""))){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26068_SHARP_),"\""].join('');
} else {
return p1__26068_SHARP_;
}
}),args);
var or__3949__auto__ = cljs.core.apply.call(null,replica.inscore.msg_BANG_,object,"set",obj_type,arguments$);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var elm = INS.lastChild;
elm.id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(object)].join('');

return elm;
}
});

replica.inscore.setx_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.inscore.setx_BANG_.cljs$lang$applyTo = (function (seq26069){
var G__26070 = cljs.core.first.call(null,seq26069);
var seq26069__$1 = cljs.core.next.call(null,seq26069);
var G__26071 = cljs.core.first.call(null,seq26069__$1);
var seq26069__$2 = cljs.core.next.call(null,seq26069__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26070,G__26071,seq26069__$2);
});

/**
 * Macro command for creating a new score from GMN code. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.gmn_BANG_ = (function replica$inscore$gmn_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26078 = arguments.length;
var i__4532__auto___26079 = (0);
while(true){
if((i__4532__auto___26079 < len__4531__auto___26078)){
args__4534__auto__.push((arguments[i__4532__auto___26079]));

var G__26080 = (i__4532__auto___26079 + (1));
i__4532__auto___26079 = G__26080;
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
replica.inscore.gmn_BANG_.cljs$lang$applyTo = (function (seq26075){
var G__26076 = cljs.core.first.call(null,seq26075);
var seq26075__$1 = cljs.core.next.call(null,seq26075);
var G__26077 = cljs.core.first.call(null,seq26075__$1);
var seq26075__$2 = cljs.core.next.call(null,seq26075__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26076,G__26077,seq26075__$2);
});

/**
 * Macro command for creating a new score from GMN score expression. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.gmn_expr_BANG_ = (function replica$inscore$gmn_expr_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26084 = arguments.length;
var i__4532__auto___26085 = (0);
while(true){
if((i__4532__auto___26085 < len__4531__auto___26084)){
args__4534__auto__.push((arguments[i__4532__auto___26085]));

var G__26086 = (i__4532__auto___26085 + (1));
i__4532__auto___26085 = G__26086;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.inscore.gmn_expr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.inscore.gmn_expr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (object,expr_string,opt){
return cljs.core.apply.call(null,replica.inscore.setx_BANG_,object,["gmn expr(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr_string),")"].join(''),opt);
});

replica.inscore.gmn_expr_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.inscore.gmn_expr_BANG_.cljs$lang$applyTo = (function (seq26081){
var G__26082 = cljs.core.first.call(null,seq26081);
var seq26081__$1 = cljs.core.next.call(null,seq26081);
var G__26083 = cljs.core.first.call(null,seq26081__$1);
var seq26081__$2 = cljs.core.next.call(null,seq26081__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26082,G__26083,seq26081__$2);
});

/**
 * Macro command for creating a new text entry. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.txt_BANG_ = (function replica$inscore$txt_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26090 = arguments.length;
var i__4532__auto___26091 = (0);
while(true){
if((i__4532__auto___26091 < len__4531__auto___26090)){
args__4534__auto__.push((arguments[i__4532__auto___26091]));

var G__26092 = (i__4532__auto___26091 + (1));
i__4532__auto___26091 = G__26092;
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
replica.inscore.txt_BANG_.cljs$lang$applyTo = (function (seq26087){
var G__26088 = cljs.core.first.call(null,seq26087);
var seq26087__$1 = cljs.core.next.call(null,seq26087);
var G__26089 = cljs.core.first.call(null,seq26087__$1);
var seq26087__$2 = cljs.core.next.call(null,seq26087__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26088,G__26089,seq26087__$2);
});

/**
 * Macro command for creating a new html entry. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.html_BANG_ = (function replica$inscore$html_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26096 = arguments.length;
var i__4532__auto___26097 = (0);
while(true){
if((i__4532__auto___26097 < len__4531__auto___26096)){
args__4534__auto__.push((arguments[i__4532__auto___26097]));

var G__26098 = (i__4532__auto___26097 + (1));
i__4532__auto___26097 = G__26098;
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
replica.inscore.html_BANG_.cljs$lang$applyTo = (function (seq26093){
var G__26094 = cljs.core.first.call(null,seq26093);
var seq26093__$1 = cljs.core.next.call(null,seq26093);
var G__26095 = cljs.core.first.call(null,seq26093__$1);
var seq26093__$2 = cljs.core.next.call(null,seq26093__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26094,G__26095,seq26093__$2);
});

/**
 * Macro command for creating a new html <button> entry and the repl entry to be sent onclick. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.btn_BANG_ = (function replica$inscore$btn_BANG_(var_args){
var G__26104 = arguments.length;
switch (G__26104) {
case 2:
return replica.inscore.btn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___26106 = arguments.length;
var i__4532__auto___26107 = (0);
while(true){
if((i__4532__auto___26107 < len__4531__auto___26106)){
args_arr__4546__auto__.push((arguments[i__4532__auto___26107]));

var G__26108 = (i__4532__auto___26107 + (1));
i__4532__auto___26107 = G__26108;
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
return cljs.core.apply.call(null,replica.inscore.html_BANG_,object,["<button onclick=\\\"toRepl(\\'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),"\\')\\\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3949__auto__ = label;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return object;
}
})()),"</button>"].join(''),opt);
});

/** @this {Function} */
replica.inscore.btn_BANG_.cljs$lang$applyTo = (function (seq26100){
var G__26101 = cljs.core.first.call(null,seq26100);
var seq26100__$1 = cljs.core.next.call(null,seq26100);
var G__26102 = cljs.core.first.call(null,seq26100__$1);
var seq26100__$2 = cljs.core.next.call(null,seq26100__$1);
var G__26103 = cljs.core.first.call(null,seq26100__$2);
var seq26100__$3 = cljs.core.next.call(null,seq26100__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26101,G__26102,G__26103,seq26100__$3);
});

replica.inscore.btn_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Macro command for creating a new html slider (range) <input> with desired attr. and the fn[new-value] to be sent on change. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.sld_BANG_ = (function replica$inscore$sld_BANG_(var_args){
var G__26118 = arguments.length;
switch (G__26118) {
case 6:
return replica.inscore.sld_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___26120 = arguments.length;
var i__4532__auto___26121 = (0);
while(true){
if((i__4532__auto___26121 < len__4531__auto___26120)){
args_arr__4546__auto__.push((arguments[i__4532__auto___26121]));

var G__26122 = (i__4532__auto___26121 + (1));
i__4532__auto___26121 = G__26122;
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
return cljs.core.apply.call(null,replica.inscore.html_BANG_,object_id,["<p>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),":</p><input type=\\\"range\\\"\n                 min=\\\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(minv),"\\\" max=\\\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(maxv),"\\\" step=\\\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(step),"\\\" value=\\\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(initv),"\\\" id=\\\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(object_id),"\\\" oninput=\\\"toRepl(\\'(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(function$)," \\' + this.value + \\')\\', false, false)\\\">"].join(''),opt);
});

/** @this {Function} */
replica.inscore.sld_BANG_.cljs$lang$applyTo = (function (seq26110){
var G__26111 = cljs.core.first.call(null,seq26110);
var seq26110__$1 = cljs.core.next.call(null,seq26110);
var G__26112 = cljs.core.first.call(null,seq26110__$1);
var seq26110__$2 = cljs.core.next.call(null,seq26110__$1);
var G__26113 = cljs.core.first.call(null,seq26110__$2);
var seq26110__$3 = cljs.core.next.call(null,seq26110__$2);
var G__26114 = cljs.core.first.call(null,seq26110__$3);
var seq26110__$4 = cljs.core.next.call(null,seq26110__$3);
var G__26115 = cljs.core.first.call(null,seq26110__$4);
var seq26110__$5 = cljs.core.next.call(null,seq26110__$4);
var G__26116 = cljs.core.first.call(null,seq26110__$5);
var seq26110__$6 = cljs.core.next.call(null,seq26110__$5);
var G__26117 = cljs.core.first.call(null,seq26110__$6);
var seq26110__$7 = cljs.core.next.call(null,seq26110__$6);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26111,G__26112,G__26113,G__26114,G__26115,G__26116,G__26117,seq26110__$7);
});

replica.inscore.sld_BANG_.cljs$lang$maxFixedArity = (7);

/**
 * Macro command for creating a watch to an element. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.watch_BANG_ = (function replica$inscore$watch_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26126 = arguments.length;
var i__4532__auto___26127 = (0);
while(true){
if((i__4532__auto___26127 < len__4531__auto___26126)){
args__4534__auto__.push((arguments[i__4532__auto___26127]));

var G__26128 = (i__4532__auto___26127 + (1));
i__4532__auto___26127 = G__26128;
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
replica.inscore.watch_BANG_.cljs$lang$applyTo = (function (seq26123){
var G__26124 = cljs.core.first.call(null,seq26123);
var seq26123__$1 = cljs.core.next.call(null,seq26123);
var G__26125 = cljs.core.first.call(null,seq26123__$1);
var seq26123__$2 = cljs.core.next.call(null,seq26123__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26124,G__26125,seq26123__$2);
});

/**
 * Query element contents or specific property. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.get_BANG_ = (function replica$inscore$get_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26133 = arguments.length;
var i__4532__auto___26134 = (0);
while(true){
if((i__4532__auto___26134 < len__4531__auto___26133)){
args__4534__auto__.push((arguments[i__4532__auto___26134]));

var G__26135 = (i__4532__auto___26134 + (1));
i__4532__auto___26134 = G__26135;
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
return cljs.core.map.call(null,(function (p1__26129_SHARP_){
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,cljs.core.rest.call(null,p1__26129_SHARP_))),cljs.core.last.call(null,cljs.core.rest.call(null,p1__26129_SHARP_)).replace(";",""));
}),cljs.core.js__GT_clj.call(null,cljs.core.map.call(null,(function (p1__26130_SHARP_){
return p1__26130_SHARP_.split(" ");
}),cljs.core.apply.call(null,replica.inscore.msg_BANG_,object,new cljs.core.Symbol(null,"get","get",-971253014,null),queries))));
}
});

replica.inscore.get_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.inscore.get_BANG_.cljs$lang$applyTo = (function (seq26131){
var G__26132 = cljs.core.first.call(null,seq26131);
var seq26131__$1 = cljs.core.next.call(null,seq26131);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26132,seq26131__$1);
});

/**
 * Macro command for creating an alias for the desired object
 */
replica.inscore.als_BANG_ = (function replica$inscore$als_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26139 = arguments.length;
var i__4532__auto___26140 = (0);
while(true){
if((i__4532__auto___26140 < len__4531__auto___26139)){
args__4534__auto__.push((arguments[i__4532__auto___26140]));

var G__26141 = (i__4532__auto___26140 + (1));
i__4532__auto___26140 = G__26141;
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
replica.inscore.als_BANG_.cljs$lang$applyTo = (function (seq26136){
var G__26137 = cljs.core.first.call(null,seq26136);
var seq26136__$1 = cljs.core.next.call(null,seq26136);
var G__26138 = cljs.core.first.call(null,seq26136__$1);
var seq26136__$2 = cljs.core.next.call(null,seq26136__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26137,G__26138,seq26136__$2);
});

replica.inscore.routes = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"als","als",2020052861,null),new cljs.core.Symbol(null,"sld","sld",2066183935,null),new cljs.core.Symbol(null,"txt","txt",-2027592081,null),new cljs.core.Symbol(null,"gmn","gmn",-1228752600,null),new cljs.core.Symbol(null,"dropls","dropls",677955357,null),new cljs.core.Symbol(null,"addr","addr",42880790,null),new cljs.core.Symbol(null,"setx","setx",532512799,null),new cljs.core.Symbol(null,"dropc","dropc",-939619651,null),new cljs.core.Symbol(null,"gmn-expr","gmn-expr",1926971010,null),new cljs.core.Symbol(null,"watch","watch",2021519804,null),new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"clear","clear",-777330810,null),new cljs.core.Symbol(null,"make-line","make-line",1150652984,null),new cljs.core.Symbol(null,"html","html",641734630,null),new cljs.core.Symbol(null,"msg","msg",254428083,null),new cljs.core.Symbol(null,"dropl","dropl",-636984007,null),new cljs.core.Symbol(null,"btn","btn",-676141118,null)],[new cljs.core.Symbol(null,"als!","als!",-487637442,null),new cljs.core.Symbol(null,"sld!","sld!",-1157981097,null),new cljs.core.Symbol(null,"txt!","txt!",597581936,null),new cljs.core.Symbol(null,"gmn!","gmn!",-260726850,null),new cljs.core.Symbol(null,"dropls!","dropls!",1967781400,null),new cljs.core.Symbol(null,"addr","addr",42880790,null),new cljs.core.Symbol(null,"setx!","setx!",-2003665837,null),new cljs.core.Symbol(null,"dropc!","dropc!",614382068,null),new cljs.core.Symbol(null,"gmn-expr!","gmn-expr!",944322151,null),new cljs.core.Symbol(null,"watch!","watch!",296407435,null),new cljs.core.Symbol(null,"get!","get!",-815197836,null),new cljs.core.Symbol(null,"clear!","clear!",1495717109,null),new cljs.core.Symbol(null,"make-line","make-line",1150652984,null),new cljs.core.Symbol(null,"html!","html!",-72613035,null),new cljs.core.Symbol(null,"msg!","msg!",-1995873876,null),new cljs.core.Symbol(null,"dropl!","dropl!",1713460340,null),new cljs.core.Symbol(null,"btn!","btn!",2072814859,null)]);
/**
 * The 'i' function is a route to almost all of the INScore built-in functionality inside replica.
 */
replica.inscore.i = (function replica$inscore$i(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26145 = arguments.length;
var i__4532__auto___26146 = (0);
while(true){
if((i__4532__auto___26146 < len__4531__auto___26145)){
args__4534__auto__.push((arguments[i__4532__auto___26146]));

var G__26147 = (i__4532__auto___26146 + (1));
i__4532__auto___26146 = G__26147;
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
var G__26144 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join('');
switch (G__26144) {
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
replica.inscore.i.cljs$lang$applyTo = (function (seq26142){
var G__26143 = cljs.core.first.call(null,seq26142);
var seq26142__$1 = cljs.core.next.call(null,seq26142);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26143,seq26142__$1);
});

replica.utils.add_routes_BANG_.call(null,new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"replica.inscore","replica.inscore",-1897157507,null),replica.inscore.routes);

//# sourceMappingURL=inscore.js.map
