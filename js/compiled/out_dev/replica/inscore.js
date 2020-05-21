// Compiled by ClojureScript 1.10.339 {}
goog.provide('replica.inscore');
goog.require('cljs.core');
goog.require('replica.utils');
/**
 * Drops (sends) the desired code string to the active INScore window. If several arguments are provided then they are combined as one string without any formatting.
 */
replica.inscore.dropc_BANG_ = (function replica$inscore$dropc_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24826 = arguments.length;
var i__4532__auto___24827 = (0);
while(true){
if((i__4532__auto___24827 < len__4531__auto___24826)){
args__4534__auto__.push((arguments[i__4532__auto___24827]));

var G__24828 = (i__4532__auto___24827 + (1));
i__4532__auto___24827 = G__24828;
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
replica.inscore.dropc_BANG_.cljs$lang$applyTo = (function (seq24825){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24825));
});

replica.inscore.make_line = (function replica$inscore$make_line(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24830 = arguments.length;
var i__4532__auto___24831 = (0);
while(true){
if((i__4532__auto___24831 < len__4531__auto___24830)){
args__4534__auto__.push((arguments[i__4532__auto___24831]));

var G__24832 = (i__4532__auto___24831 + (1));
i__4532__auto___24831 = G__24832;
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
replica.inscore.make_line.cljs$lang$applyTo = (function (seq24829){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24829));
});

/**
 * Drops (sends) a line, combining its arguments and adding a semicolon to the end, to the active INScore window.
 */
replica.inscore.dropl_BANG_ = (function replica$inscore$dropl_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24834 = arguments.length;
var i__4532__auto___24835 = (0);
while(true){
if((i__4532__auto___24835 < len__4531__auto___24834)){
args__4534__auto__.push((arguments[i__4532__auto___24835]));

var G__24836 = (i__4532__auto___24835 + (1));
i__4532__auto___24835 = G__24836;
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
replica.inscore.dropl_BANG_.cljs$lang$applyTo = (function (seq24833){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24833));
});

/**
 * Drops (sends) one line for each argument to the active INScore window. You can provide fragments of code inside each line. [see doc for 'dropl aka replica.inscore/dropl!]
 */
replica.inscore.dropls_BANG_ = (function replica$inscore$dropls_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24838 = arguments.length;
var i__4532__auto___24839 = (0);
while(true){
if((i__4532__auto___24839 < len__4531__auto___24838)){
args__4534__auto__.push((arguments[i__4532__auto___24839]));

var G__24840 = (i__4532__auto___24839 + (1));
i__4532__auto___24839 = G__24840;
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
replica.inscore.dropls_BANG_.cljs$lang$applyTo = (function (seq24837){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24837));
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
var len__4531__auto___24842 = arguments.length;
var i__4532__auto___24843 = (0);
while(true){
if((i__4532__auto___24843 < len__4531__auto___24842)){
args__4534__auto__.push((arguments[i__4532__auto___24843]));

var G__24844 = (i__4532__auto___24843 + (1));
i__4532__auto___24843 = G__24844;
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
replica.inscore.clear_BANG_.cljs$lang$applyTo = (function (seq24841){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24841));
});

/**
 * Address an object [or create it] and send to it a command. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.msg_BANG_ = (function replica$inscore$msg_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24847 = arguments.length;
var i__4532__auto___24848 = (0);
while(true){
if((i__4532__auto___24848 < len__4531__auto___24847)){
args__4534__auto__.push((arguments[i__4532__auto___24848]));

var G__24849 = (i__4532__auto___24848 + (1));
i__4532__auto___24848 = G__24849;
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
replica.inscore.msg_BANG_.cljs$lang$applyTo = (function (seq24845){
var G__24846 = cljs.core.first.call(null,seq24845);
var seq24845__$1 = cljs.core.next.call(null,seq24845);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24846,seq24845__$1);
});

/**
 * Dispatches a 'set [obj-type] [args]' command to an object.
 */
replica.inscore.setx_BANG_ = (function replica$inscore$setx_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24854 = arguments.length;
var i__4532__auto___24855 = (0);
while(true){
if((i__4532__auto___24855 < len__4531__auto___24854)){
args__4534__auto__.push((arguments[i__4532__auto___24855]));

var G__24856 = (i__4532__auto___24855 + (1));
i__4532__auto___24855 = G__24856;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.inscore.setx_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.inscore.setx_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (object,obj_type,args){
var arguments$ = cljs.core.map.call(null,(function (p1__24850_SHARP_){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,p1__24850_SHARP_),cljs.core.type.call(null,""))){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24850_SHARP_),"\""].join('');
} else {
return p1__24850_SHARP_;
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
replica.inscore.setx_BANG_.cljs$lang$applyTo = (function (seq24851){
var G__24852 = cljs.core.first.call(null,seq24851);
var seq24851__$1 = cljs.core.next.call(null,seq24851);
var G__24853 = cljs.core.first.call(null,seq24851__$1);
var seq24851__$2 = cljs.core.next.call(null,seq24851__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24852,G__24853,seq24851__$2);
});

/**
 * Macro command for creating a new score from GMN code. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.gmn_BANG_ = (function replica$inscore$gmn_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24860 = arguments.length;
var i__4532__auto___24861 = (0);
while(true){
if((i__4532__auto___24861 < len__4531__auto___24860)){
args__4534__auto__.push((arguments[i__4532__auto___24861]));

var G__24862 = (i__4532__auto___24861 + (1));
i__4532__auto___24861 = G__24862;
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
replica.inscore.gmn_BANG_.cljs$lang$applyTo = (function (seq24857){
var G__24858 = cljs.core.first.call(null,seq24857);
var seq24857__$1 = cljs.core.next.call(null,seq24857);
var G__24859 = cljs.core.first.call(null,seq24857__$1);
var seq24857__$2 = cljs.core.next.call(null,seq24857__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24858,G__24859,seq24857__$2);
});

/**
 * Macro command for creating a new score from GMN score expression. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.gmn_expr_BANG_ = (function replica$inscore$gmn_expr_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24866 = arguments.length;
var i__4532__auto___24867 = (0);
while(true){
if((i__4532__auto___24867 < len__4531__auto___24866)){
args__4534__auto__.push((arguments[i__4532__auto___24867]));

var G__24868 = (i__4532__auto___24867 + (1));
i__4532__auto___24867 = G__24868;
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
replica.inscore.gmn_expr_BANG_.cljs$lang$applyTo = (function (seq24863){
var G__24864 = cljs.core.first.call(null,seq24863);
var seq24863__$1 = cljs.core.next.call(null,seq24863);
var G__24865 = cljs.core.first.call(null,seq24863__$1);
var seq24863__$2 = cljs.core.next.call(null,seq24863__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24864,G__24865,seq24863__$2);
});

/**
 * Macro command for creating a new text entry. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.txt_BANG_ = (function replica$inscore$txt_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24872 = arguments.length;
var i__4532__auto___24873 = (0);
while(true){
if((i__4532__auto___24873 < len__4531__auto___24872)){
args__4534__auto__.push((arguments[i__4532__auto___24873]));

var G__24874 = (i__4532__auto___24873 + (1));
i__4532__auto___24873 = G__24874;
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
replica.inscore.txt_BANG_.cljs$lang$applyTo = (function (seq24869){
var G__24870 = cljs.core.first.call(null,seq24869);
var seq24869__$1 = cljs.core.next.call(null,seq24869);
var G__24871 = cljs.core.first.call(null,seq24869__$1);
var seq24869__$2 = cljs.core.next.call(null,seq24869__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24870,G__24871,seq24869__$2);
});

/**
 * Macro command for creating a new html entry. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.html_BANG_ = (function replica$inscore$html_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24878 = arguments.length;
var i__4532__auto___24879 = (0);
while(true){
if((i__4532__auto___24879 < len__4531__auto___24878)){
args__4534__auto__.push((arguments[i__4532__auto___24879]));

var G__24880 = (i__4532__auto___24879 + (1));
i__4532__auto___24879 = G__24880;
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
replica.inscore.html_BANG_.cljs$lang$applyTo = (function (seq24875){
var G__24876 = cljs.core.first.call(null,seq24875);
var seq24875__$1 = cljs.core.next.call(null,seq24875);
var G__24877 = cljs.core.first.call(null,seq24875__$1);
var seq24875__$2 = cljs.core.next.call(null,seq24875__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24876,G__24877,seq24875__$2);
});

/**
 * Macro command for creating a new html <button> entry and the repl entry to be sent onclick. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.btn_BANG_ = (function replica$inscore$btn_BANG_(var_args){
var G__24886 = arguments.length;
switch (G__24886) {
case 2:
return replica.inscore.btn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___24888 = arguments.length;
var i__4532__auto___24889 = (0);
while(true){
if((i__4532__auto___24889 < len__4531__auto___24888)){
args_arr__4546__auto__.push((arguments[i__4532__auto___24889]));

var G__24890 = (i__4532__auto___24889 + (1));
i__4532__auto___24889 = G__24890;
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
var code = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(to_repl_code)].join('').replace((new RegExp(/'/,new cljs.core.Symbol(null,"g","g",-916345864,null))),"\\\\'");
return cljs.core.apply.call(null,replica.inscore.html_BANG_,object,["<button onclick=\\\"toRepl('",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),"')\\\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3949__auto__ = label;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return object;
}
})()),"</button>"].join(''),opt);
});

/** @this {Function} */
replica.inscore.btn_BANG_.cljs$lang$applyTo = (function (seq24882){
var G__24883 = cljs.core.first.call(null,seq24882);
var seq24882__$1 = cljs.core.next.call(null,seq24882);
var G__24884 = cljs.core.first.call(null,seq24882__$1);
var seq24882__$2 = cljs.core.next.call(null,seq24882__$1);
var G__24885 = cljs.core.first.call(null,seq24882__$2);
var seq24882__$3 = cljs.core.next.call(null,seq24882__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24883,G__24884,G__24885,seq24882__$3);
});

replica.inscore.btn_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Macro command for creating a new html slider (range) <input> with desired attr. and the fn[new-value] to be sent on change. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.sld_BANG_ = (function replica$inscore$sld_BANG_(var_args){
var G__24900 = arguments.length;
switch (G__24900) {
case 6:
return replica.inscore.sld_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___24902 = arguments.length;
var i__4532__auto___24903 = (0);
while(true){
if((i__4532__auto___24903 < len__4531__auto___24902)){
args_arr__4546__auto__.push((arguments[i__4532__auto___24903]));

var G__24904 = (i__4532__auto___24903 + (1));
i__4532__auto___24903 = G__24904;
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
replica.inscore.sld_BANG_.cljs$lang$applyTo = (function (seq24892){
var G__24893 = cljs.core.first.call(null,seq24892);
var seq24892__$1 = cljs.core.next.call(null,seq24892);
var G__24894 = cljs.core.first.call(null,seq24892__$1);
var seq24892__$2 = cljs.core.next.call(null,seq24892__$1);
var G__24895 = cljs.core.first.call(null,seq24892__$2);
var seq24892__$3 = cljs.core.next.call(null,seq24892__$2);
var G__24896 = cljs.core.first.call(null,seq24892__$3);
var seq24892__$4 = cljs.core.next.call(null,seq24892__$3);
var G__24897 = cljs.core.first.call(null,seq24892__$4);
var seq24892__$5 = cljs.core.next.call(null,seq24892__$4);
var G__24898 = cljs.core.first.call(null,seq24892__$5);
var seq24892__$6 = cljs.core.next.call(null,seq24892__$5);
var G__24899 = cljs.core.first.call(null,seq24892__$6);
var seq24892__$7 = cljs.core.next.call(null,seq24892__$6);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24893,G__24894,G__24895,G__24896,G__24897,G__24898,G__24899,seq24892__$7);
});

replica.inscore.sld_BANG_.cljs$lang$maxFixedArity = (7);

/**
 * Macro command for creating a watch to an element. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.watch_BANG_ = (function replica$inscore$watch_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24908 = arguments.length;
var i__4532__auto___24909 = (0);
while(true){
if((i__4532__auto___24909 < len__4531__auto___24908)){
args__4534__auto__.push((arguments[i__4532__auto___24909]));

var G__24910 = (i__4532__auto___24909 + (1));
i__4532__auto___24909 = G__24910;
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
replica.inscore.watch_BANG_.cljs$lang$applyTo = (function (seq24905){
var G__24906 = cljs.core.first.call(null,seq24905);
var seq24905__$1 = cljs.core.next.call(null,seq24905);
var G__24907 = cljs.core.first.call(null,seq24905__$1);
var seq24905__$2 = cljs.core.next.call(null,seq24905__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24906,G__24907,seq24905__$2);
});

/**
 * Query element contents or specific property. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.get_BANG_ = (function replica$inscore$get_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24915 = arguments.length;
var i__4532__auto___24916 = (0);
while(true){
if((i__4532__auto___24916 < len__4531__auto___24915)){
args__4534__auto__.push((arguments[i__4532__auto___24916]));

var G__24917 = (i__4532__auto___24916 + (1));
i__4532__auto___24916 = G__24917;
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
return cljs.core.map.call(null,(function (p1__24911_SHARP_){
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,cljs.core.rest.call(null,p1__24911_SHARP_))),cljs.core.last.call(null,cljs.core.rest.call(null,p1__24911_SHARP_)).replace(";",""));
}),cljs.core.js__GT_clj.call(null,cljs.core.map.call(null,(function (p1__24912_SHARP_){
return p1__24912_SHARP_.split(" ");
}),cljs.core.apply.call(null,replica.inscore.msg_BANG_,object,new cljs.core.Symbol(null,"get","get",-971253014,null),queries))));
}
});

replica.inscore.get_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.inscore.get_BANG_.cljs$lang$applyTo = (function (seq24913){
var G__24914 = cljs.core.first.call(null,seq24913);
var seq24913__$1 = cljs.core.next.call(null,seq24913);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24914,seq24913__$1);
});

/**
 * Macro command for creating an alias for the desired object
 */
replica.inscore.als_BANG_ = (function replica$inscore$als_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24921 = arguments.length;
var i__4532__auto___24922 = (0);
while(true){
if((i__4532__auto___24922 < len__4531__auto___24921)){
args__4534__auto__.push((arguments[i__4532__auto___24922]));

var G__24923 = (i__4532__auto___24922 + (1));
i__4532__auto___24922 = G__24923;
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
replica.inscore.als_BANG_.cljs$lang$applyTo = (function (seq24918){
var G__24919 = cljs.core.first.call(null,seq24918);
var seq24918__$1 = cljs.core.next.call(null,seq24918);
var G__24920 = cljs.core.first.call(null,seq24918__$1);
var seq24918__$2 = cljs.core.next.call(null,seq24918__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24919,G__24920,seq24918__$2);
});

replica.inscore.routes = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"als","als",2020052861,null),new cljs.core.Symbol(null,"sld","sld",2066183935,null),new cljs.core.Symbol(null,"txt","txt",-2027592081,null),new cljs.core.Symbol(null,"gmn","gmn",-1228752600,null),new cljs.core.Symbol(null,"dropls","dropls",677955357,null),new cljs.core.Symbol(null,"addr","addr",42880790,null),new cljs.core.Symbol(null,"setx","setx",532512799,null),new cljs.core.Symbol(null,"dropc","dropc",-939619651,null),new cljs.core.Symbol(null,"gmn-expr","gmn-expr",1926971010,null),new cljs.core.Symbol(null,"watch","watch",2021519804,null),new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"clear","clear",-777330810,null),new cljs.core.Symbol(null,"make-line","make-line",1150652984,null),new cljs.core.Symbol(null,"html","html",641734630,null),new cljs.core.Symbol(null,"msg","msg",254428083,null),new cljs.core.Symbol(null,"dropl","dropl",-636984007,null),new cljs.core.Symbol(null,"btn","btn",-676141118,null)],[new cljs.core.Symbol(null,"als!","als!",-487637442,null),new cljs.core.Symbol(null,"sld!","sld!",-1157981097,null),new cljs.core.Symbol(null,"txt!","txt!",597581936,null),new cljs.core.Symbol(null,"gmn!","gmn!",-260726850,null),new cljs.core.Symbol(null,"dropls!","dropls!",1967781400,null),new cljs.core.Symbol(null,"addr","addr",42880790,null),new cljs.core.Symbol(null,"setx!","setx!",-2003665837,null),new cljs.core.Symbol(null,"dropc!","dropc!",614382068,null),new cljs.core.Symbol(null,"gmn-expr!","gmn-expr!",944322151,null),new cljs.core.Symbol(null,"watch!","watch!",296407435,null),new cljs.core.Symbol(null,"get!","get!",-815197836,null),new cljs.core.Symbol(null,"clear!","clear!",1495717109,null),new cljs.core.Symbol(null,"make-line","make-line",1150652984,null),new cljs.core.Symbol(null,"html!","html!",-72613035,null),new cljs.core.Symbol(null,"msg!","msg!",-1995873876,null),new cljs.core.Symbol(null,"dropl!","dropl!",1713460340,null),new cljs.core.Symbol(null,"btn!","btn!",2072814859,null)]);
/**
 * The 'i' function is a route to almost all of the INScore built-in functionality inside replica.
 */
replica.inscore.i = (function replica$inscore$i(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24927 = arguments.length;
var i__4532__auto___24928 = (0);
while(true){
if((i__4532__auto___24928 < len__4531__auto___24927)){
args__4534__auto__.push((arguments[i__4532__auto___24928]));

var G__24929 = (i__4532__auto___24928 + (1));
i__4532__auto___24928 = G__24929;
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
var G__24926 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join('');
switch (G__24926) {
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
replica.inscore.i.cljs$lang$applyTo = (function (seq24924){
var G__24925 = cljs.core.first.call(null,seq24924);
var seq24924__$1 = cljs.core.next.call(null,seq24924);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24925,seq24924__$1);
});

replica.utils.add_routes_BANG_.call(null,new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"replica.inscore","replica.inscore",-1897157507,null),replica.inscore.routes);

//# sourceMappingURL=inscore.js.map
