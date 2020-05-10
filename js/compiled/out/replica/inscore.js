// Compiled by ClojureScript 1.10.339 {}
goog.provide('replica.inscore');
goog.require('cljs.core');
goog.require('replica.utils');
/**
 * Drops (sends) the desired code string to the active INScore window. If several arguments are provided then they are combined as one string without any formatting.
 */
replica.inscore.dropc_BANG_ = (function replica$inscore$dropc_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14830 = arguments.length;
var i__4532__auto___14831 = (0);
while(true){
if((i__4532__auto___14831 < len__4531__auto___14830)){
args__4534__auto__.push((arguments[i__4532__auto___14831]));

var G__14832 = (i__4532__auto___14831 + (1));
i__4532__auto___14831 = G__14832;
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
replica.inscore.dropc_BANG_.cljs$lang$applyTo = (function (seq14829){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14829));
});

replica.inscore.make_line = (function replica$inscore$make_line(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14834 = arguments.length;
var i__4532__auto___14835 = (0);
while(true){
if((i__4532__auto___14835 < len__4531__auto___14834)){
args__4534__auto__.push((arguments[i__4532__auto___14835]));

var G__14836 = (i__4532__auto___14835 + (1));
i__4532__auto___14835 = G__14836;
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
replica.inscore.make_line.cljs$lang$applyTo = (function (seq14833){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14833));
});

/**
 * Drops (sends) a line, combining its arguments and adding a semicolon to the end, to the active INScore window.
 */
replica.inscore.dropl_BANG_ = (function replica$inscore$dropl_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14838 = arguments.length;
var i__4532__auto___14839 = (0);
while(true){
if((i__4532__auto___14839 < len__4531__auto___14838)){
args__4534__auto__.push((arguments[i__4532__auto___14839]));

var G__14840 = (i__4532__auto___14839 + (1));
i__4532__auto___14839 = G__14840;
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
replica.inscore.dropl_BANG_.cljs$lang$applyTo = (function (seq14837){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14837));
});

/**
 * Drops (sends) one line for each argument to the active INScore window. You can provide fragments of code inside each line. [see doc for 'dropl aka replica.inscore/dropl!]
 */
replica.inscore.dropls_BANG_ = (function replica$inscore$dropls_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14842 = arguments.length;
var i__4532__auto___14843 = (0);
while(true){
if((i__4532__auto___14843 < len__4531__auto___14842)){
args__4534__auto__.push((arguments[i__4532__auto___14843]));

var G__14844 = (i__4532__auto___14843 + (1));
i__4532__auto___14843 = G__14844;
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
replica.inscore.dropls_BANG_.cljs$lang$applyTo = (function (seq14841){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14841));
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
var len__4531__auto___14846 = arguments.length;
var i__4532__auto___14847 = (0);
while(true){
if((i__4532__auto___14847 < len__4531__auto___14846)){
args__4534__auto__.push((arguments[i__4532__auto___14847]));

var G__14848 = (i__4532__auto___14847 + (1));
i__4532__auto___14847 = G__14848;
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
replica.inscore.clear_BANG_.cljs$lang$applyTo = (function (seq14845){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14845));
});

/**
 * Address an object [or create it] and send to it a command. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.msg_BANG_ = (function replica$inscore$msg_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14851 = arguments.length;
var i__4532__auto___14852 = (0);
while(true){
if((i__4532__auto___14852 < len__4531__auto___14851)){
args__4534__auto__.push((arguments[i__4532__auto___14852]));

var G__14853 = (i__4532__auto___14852 + (1));
i__4532__auto___14852 = G__14853;
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
replica.inscore.msg_BANG_.cljs$lang$applyTo = (function (seq14849){
var G__14850 = cljs.core.first.call(null,seq14849);
var seq14849__$1 = cljs.core.next.call(null,seq14849);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14850,seq14849__$1);
});

/**
 * Dispatches a 'set [obj-type] [args]' command to an object.
 */
replica.inscore.setx_BANG_ = (function replica$inscore$setx_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14857 = arguments.length;
var i__4532__auto___14858 = (0);
while(true){
if((i__4532__auto___14858 < len__4531__auto___14857)){
args__4534__auto__.push((arguments[i__4532__auto___14858]));

var G__14859 = (i__4532__auto___14858 + (1));
i__4532__auto___14858 = G__14859;
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
replica.inscore.setx_BANG_.cljs$lang$applyTo = (function (seq14854){
var G__14855 = cljs.core.first.call(null,seq14854);
var seq14854__$1 = cljs.core.next.call(null,seq14854);
var G__14856 = cljs.core.first.call(null,seq14854__$1);
var seq14854__$2 = cljs.core.next.call(null,seq14854__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14855,G__14856,seq14854__$2);
});

/**
 * Macro command for creating a new score from GMN code. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.gmn_BANG_ = (function replica$inscore$gmn_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14863 = arguments.length;
var i__4532__auto___14864 = (0);
while(true){
if((i__4532__auto___14864 < len__4531__auto___14863)){
args__4534__auto__.push((arguments[i__4532__auto___14864]));

var G__14865 = (i__4532__auto___14864 + (1));
i__4532__auto___14864 = G__14865;
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
replica.inscore.gmn_BANG_.cljs$lang$applyTo = (function (seq14860){
var G__14861 = cljs.core.first.call(null,seq14860);
var seq14860__$1 = cljs.core.next.call(null,seq14860);
var G__14862 = cljs.core.first.call(null,seq14860__$1);
var seq14860__$2 = cljs.core.next.call(null,seq14860__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14861,G__14862,seq14860__$2);
});

/**
 * Macro command for creating a new text entry. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.txt_BANG_ = (function replica$inscore$txt_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14869 = arguments.length;
var i__4532__auto___14870 = (0);
while(true){
if((i__4532__auto___14870 < len__4531__auto___14869)){
args__4534__auto__.push((arguments[i__4532__auto___14870]));

var G__14871 = (i__4532__auto___14870 + (1));
i__4532__auto___14870 = G__14871;
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
replica.inscore.txt_BANG_.cljs$lang$applyTo = (function (seq14866){
var G__14867 = cljs.core.first.call(null,seq14866);
var seq14866__$1 = cljs.core.next.call(null,seq14866);
var G__14868 = cljs.core.first.call(null,seq14866__$1);
var seq14866__$2 = cljs.core.next.call(null,seq14866__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14867,G__14868,seq14866__$2);
});

/**
 * Macro command for creating a new html entry. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.html_BANG_ = (function replica$inscore$html_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14875 = arguments.length;
var i__4532__auto___14876 = (0);
while(true){
if((i__4532__auto___14876 < len__4531__auto___14875)){
args__4534__auto__.push((arguments[i__4532__auto___14876]));

var G__14877 = (i__4532__auto___14876 + (1));
i__4532__auto___14876 = G__14877;
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
replica.inscore.html_BANG_.cljs$lang$applyTo = (function (seq14872){
var G__14873 = cljs.core.first.call(null,seq14872);
var seq14872__$1 = cljs.core.next.call(null,seq14872);
var G__14874 = cljs.core.first.call(null,seq14872__$1);
var seq14872__$2 = cljs.core.next.call(null,seq14872__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14873,G__14874,seq14872__$2);
});

/**
 * Macro command for creating a new html <button> entry and the repl entry to be sent onclick. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.btn_BANG_ = (function replica$inscore$btn_BANG_(var_args){
var G__14883 = arguments.length;
switch (G__14883) {
case 2:
return replica.inscore.btn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___14885 = arguments.length;
var i__4532__auto___14886 = (0);
while(true){
if((i__4532__auto___14886 < len__4531__auto___14885)){
args_arr__4546__auto__.push((arguments[i__4532__auto___14886]));

var G__14887 = (i__4532__auto___14886 + (1));
i__4532__auto___14886 = G__14887;
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
replica.inscore.btn_BANG_.cljs$lang$applyTo = (function (seq14879){
var G__14880 = cljs.core.first.call(null,seq14879);
var seq14879__$1 = cljs.core.next.call(null,seq14879);
var G__14881 = cljs.core.first.call(null,seq14879__$1);
var seq14879__$2 = cljs.core.next.call(null,seq14879__$1);
var G__14882 = cljs.core.first.call(null,seq14879__$2);
var seq14879__$3 = cljs.core.next.call(null,seq14879__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14880,G__14881,G__14882,seq14879__$3);
});

replica.inscore.btn_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Macro command for creating a new html slider (range) <input> with desired attr. and the fn[new-value] to be sent on change. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.sld_BANG_ = (function replica$inscore$sld_BANG_(var_args){
var G__14897 = arguments.length;
switch (G__14897) {
case 6:
return replica.inscore.sld_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___14899 = arguments.length;
var i__4532__auto___14900 = (0);
while(true){
if((i__4532__auto___14900 < len__4531__auto___14899)){
args_arr__4546__auto__.push((arguments[i__4532__auto___14900]));

var G__14901 = (i__4532__auto___14900 + (1));
i__4532__auto___14900 = G__14901;
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
replica.inscore.sld_BANG_.cljs$lang$applyTo = (function (seq14889){
var G__14890 = cljs.core.first.call(null,seq14889);
var seq14889__$1 = cljs.core.next.call(null,seq14889);
var G__14891 = cljs.core.first.call(null,seq14889__$1);
var seq14889__$2 = cljs.core.next.call(null,seq14889__$1);
var G__14892 = cljs.core.first.call(null,seq14889__$2);
var seq14889__$3 = cljs.core.next.call(null,seq14889__$2);
var G__14893 = cljs.core.first.call(null,seq14889__$3);
var seq14889__$4 = cljs.core.next.call(null,seq14889__$3);
var G__14894 = cljs.core.first.call(null,seq14889__$4);
var seq14889__$5 = cljs.core.next.call(null,seq14889__$4);
var G__14895 = cljs.core.first.call(null,seq14889__$5);
var seq14889__$6 = cljs.core.next.call(null,seq14889__$5);
var G__14896 = cljs.core.first.call(null,seq14889__$6);
var seq14889__$7 = cljs.core.next.call(null,seq14889__$6);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14890,G__14891,G__14892,G__14893,G__14894,G__14895,G__14896,seq14889__$7);
});

replica.inscore.sld_BANG_.cljs$lang$maxFixedArity = (7);

/**
 * Macro command for creating a watch to an element. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.watch_BANG_ = (function replica$inscore$watch_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14905 = arguments.length;
var i__4532__auto___14906 = (0);
while(true){
if((i__4532__auto___14906 < len__4531__auto___14905)){
args__4534__auto__.push((arguments[i__4532__auto___14906]));

var G__14907 = (i__4532__auto___14906 + (1));
i__4532__auto___14906 = G__14907;
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
replica.inscore.watch_BANG_.cljs$lang$applyTo = (function (seq14902){
var G__14903 = cljs.core.first.call(null,seq14902);
var seq14902__$1 = cljs.core.next.call(null,seq14902);
var G__14904 = cljs.core.first.call(null,seq14902__$1);
var seq14902__$2 = cljs.core.next.call(null,seq14902__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14903,G__14904,seq14902__$2);
});

/**
 * Macro command for creating an alias for the desired object
 */
replica.inscore.als_BANG_ = (function replica$inscore$als_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14911 = arguments.length;
var i__4532__auto___14912 = (0);
while(true){
if((i__4532__auto___14912 < len__4531__auto___14911)){
args__4534__auto__.push((arguments[i__4532__auto___14912]));

var G__14913 = (i__4532__auto___14912 + (1));
i__4532__auto___14912 = G__14913;
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
replica.inscore.als_BANG_.cljs$lang$applyTo = (function (seq14908){
var G__14909 = cljs.core.first.call(null,seq14908);
var seq14908__$1 = cljs.core.next.call(null,seq14908);
var G__14910 = cljs.core.first.call(null,seq14908__$1);
var seq14908__$2 = cljs.core.next.call(null,seq14908__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14909,G__14910,seq14908__$2);
});

replica.inscore.routes = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"als","als",2020052861,null),new cljs.core.Symbol(null,"sld","sld",2066183935,null),new cljs.core.Symbol(null,"txt","txt",-2027592081,null),new cljs.core.Symbol(null,"gmn","gmn",-1228752600,null),new cljs.core.Symbol(null,"dropls","dropls",677955357,null),new cljs.core.Symbol(null,"addr","addr",42880790,null),new cljs.core.Symbol(null,"setx","setx",532512799,null),new cljs.core.Symbol(null,"dropc","dropc",-939619651,null),new cljs.core.Symbol(null,"watch","watch",2021519804,null),new cljs.core.Symbol(null,"clear","clear",-777330810,null),new cljs.core.Symbol(null,"make-line","make-line",1150652984,null),new cljs.core.Symbol(null,"html","html",641734630,null),new cljs.core.Symbol(null,"msg","msg",254428083,null),new cljs.core.Symbol(null,"dropl","dropl",-636984007,null),new cljs.core.Symbol(null,"btn","btn",-676141118,null)],[new cljs.core.Symbol(null,"als!","als!",-487637442,null),new cljs.core.Symbol(null,"sld!","sld!",-1157981097,null),new cljs.core.Symbol(null,"txt!","txt!",597581936,null),new cljs.core.Symbol(null,"gmn!","gmn!",-260726850,null),new cljs.core.Symbol(null,"dropls!","dropls!",1967781400,null),new cljs.core.Symbol(null,"addr","addr",42880790,null),new cljs.core.Symbol(null,"setx!","setx!",-2003665837,null),new cljs.core.Symbol(null,"dropc!","dropc!",614382068,null),new cljs.core.Symbol(null,"watch!","watch!",296407435,null),new cljs.core.Symbol(null,"clear!","clear!",1495717109,null),new cljs.core.Symbol(null,"make-line","make-line",1150652984,null),new cljs.core.Symbol(null,"html!","html!",-72613035,null),new cljs.core.Symbol(null,"msg!","msg!",-1995873876,null),new cljs.core.Symbol(null,"dropl!","dropl!",1713460340,null),new cljs.core.Symbol(null,"btn!","btn!",2072814859,null)]);
/**
 * The 'i' function is a route to almost all of the INScore built-in functionality inside replica.
 */
replica.inscore.i = (function replica$inscore$i(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14917 = arguments.length;
var i__4532__auto___14918 = (0);
while(true){
if((i__4532__auto___14918 < len__4531__auto___14917)){
args__4534__auto__.push((arguments[i__4532__auto___14918]));

var G__14919 = (i__4532__auto___14918 + (1));
i__4532__auto___14918 = G__14919;
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
var G__14916 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join('');
switch (G__14916) {
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
replica.inscore.i.cljs$lang$applyTo = (function (seq14914){
var G__14915 = cljs.core.first.call(null,seq14914);
var seq14914__$1 = cljs.core.next.call(null,seq14914);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14915,seq14914__$1);
});

replica.utils.add_routes_BANG_.call(null,new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"replica.inscore","replica.inscore",-1897157507,null),replica.inscore.routes);

//# sourceMappingURL=inscore.js.map
