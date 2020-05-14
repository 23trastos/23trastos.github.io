// Compiled by ClojureScript 1.10.339 {}
goog.provide('replica.inscore');
goog.require('cljs.core');
goog.require('replica.utils');
/**
 * Drops (sends) the desired code string to the active INScore window. If several arguments are provided then they are combined as one string without any formatting.
 */
replica.inscore.dropc_BANG_ = (function replica$inscore$dropc_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11855 = arguments.length;
var i__4532__auto___11856 = (0);
while(true){
if((i__4532__auto___11856 < len__4531__auto___11855)){
args__4534__auto__.push((arguments[i__4532__auto___11856]));

var G__11857 = (i__4532__auto___11856 + (1));
i__4532__auto___11856 = G__11857;
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
replica.inscore.dropc_BANG_.cljs$lang$applyTo = (function (seq11854){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11854));
});

replica.inscore.make_line = (function replica$inscore$make_line(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11859 = arguments.length;
var i__4532__auto___11860 = (0);
while(true){
if((i__4532__auto___11860 < len__4531__auto___11859)){
args__4534__auto__.push((arguments[i__4532__auto___11860]));

var G__11861 = (i__4532__auto___11860 + (1));
i__4532__auto___11860 = G__11861;
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
replica.inscore.make_line.cljs$lang$applyTo = (function (seq11858){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11858));
});

/**
 * Drops (sends) a line, combining its arguments and adding a semicolon to the end, to the active INScore window.
 */
replica.inscore.dropl_BANG_ = (function replica$inscore$dropl_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11863 = arguments.length;
var i__4532__auto___11864 = (0);
while(true){
if((i__4532__auto___11864 < len__4531__auto___11863)){
args__4534__auto__.push((arguments[i__4532__auto___11864]));

var G__11865 = (i__4532__auto___11864 + (1));
i__4532__auto___11864 = G__11865;
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
replica.inscore.dropl_BANG_.cljs$lang$applyTo = (function (seq11862){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11862));
});

/**
 * Drops (sends) one line for each argument to the active INScore window. You can provide fragments of code inside each line. [see doc for 'dropl aka replica.inscore/dropl!]
 */
replica.inscore.dropls_BANG_ = (function replica$inscore$dropls_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11867 = arguments.length;
var i__4532__auto___11868 = (0);
while(true){
if((i__4532__auto___11868 < len__4531__auto___11867)){
args__4534__auto__.push((arguments[i__4532__auto___11868]));

var G__11869 = (i__4532__auto___11868 + (1));
i__4532__auto___11868 = G__11869;
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
replica.inscore.dropls_BANG_.cljs$lang$applyTo = (function (seq11866){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11866));
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
var len__4531__auto___11871 = arguments.length;
var i__4532__auto___11872 = (0);
while(true){
if((i__4532__auto___11872 < len__4531__auto___11871)){
args__4534__auto__.push((arguments[i__4532__auto___11872]));

var G__11873 = (i__4532__auto___11872 + (1));
i__4532__auto___11872 = G__11873;
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
replica.inscore.clear_BANG_.cljs$lang$applyTo = (function (seq11870){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11870));
});

/**
 * Address an object [or create it] and send to it a command. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.msg_BANG_ = (function replica$inscore$msg_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11876 = arguments.length;
var i__4532__auto___11877 = (0);
while(true){
if((i__4532__auto___11877 < len__4531__auto___11876)){
args__4534__auto__.push((arguments[i__4532__auto___11877]));

var G__11878 = (i__4532__auto___11877 + (1));
i__4532__auto___11877 = G__11878;
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
replica.inscore.msg_BANG_.cljs$lang$applyTo = (function (seq11874){
var G__11875 = cljs.core.first.call(null,seq11874);
var seq11874__$1 = cljs.core.next.call(null,seq11874);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11875,seq11874__$1);
});

/**
 * Dispatches a 'set [obj-type] [args]' command to an object.
 */
replica.inscore.setx_BANG_ = (function replica$inscore$setx_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11882 = arguments.length;
var i__4532__auto___11883 = (0);
while(true){
if((i__4532__auto___11883 < len__4531__auto___11882)){
args__4534__auto__.push((arguments[i__4532__auto___11883]));

var G__11884 = (i__4532__auto___11883 + (1));
i__4532__auto___11883 = G__11884;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.inscore.setx_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.inscore.setx_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (object,obj_type,args){
cljs.core.apply.call(null,replica.inscore.msg_BANG_,object,"set",obj_type,args);

var elm = INS.lastChild;
elm.id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(object)].join('');

return elm;
});

replica.inscore.setx_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.inscore.setx_BANG_.cljs$lang$applyTo = (function (seq11879){
var G__11880 = cljs.core.first.call(null,seq11879);
var seq11879__$1 = cljs.core.next.call(null,seq11879);
var G__11881 = cljs.core.first.call(null,seq11879__$1);
var seq11879__$2 = cljs.core.next.call(null,seq11879__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11880,G__11881,seq11879__$2);
});

/**
 * Macro command for creating a new score from GMN code. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.gmn_BANG_ = (function replica$inscore$gmn_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11888 = arguments.length;
var i__4532__auto___11889 = (0);
while(true){
if((i__4532__auto___11889 < len__4531__auto___11888)){
args__4534__auto__.push((arguments[i__4532__auto___11889]));

var G__11890 = (i__4532__auto___11889 + (1));
i__4532__auto___11889 = G__11890;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.inscore.gmn_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.inscore.gmn_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (object,gmn_code,opt){
return cljs.core.apply.call(null,replica.inscore.setx_BANG_,object,new cljs.core.Symbol(null,"gmn","gmn",-1228752600,null),["'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gmn_code),"'"].join(''),opt);
});

replica.inscore.gmn_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.inscore.gmn_BANG_.cljs$lang$applyTo = (function (seq11885){
var G__11886 = cljs.core.first.call(null,seq11885);
var seq11885__$1 = cljs.core.next.call(null,seq11885);
var G__11887 = cljs.core.first.call(null,seq11885__$1);
var seq11885__$2 = cljs.core.next.call(null,seq11885__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11886,G__11887,seq11885__$2);
});

/**
 * Macro command for creating a new score from GMN score expression. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.gmn_expr_BANG_ = (function replica$inscore$gmn_expr_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11894 = arguments.length;
var i__4532__auto___11895 = (0);
while(true){
if((i__4532__auto___11895 < len__4531__auto___11894)){
args__4534__auto__.push((arguments[i__4532__auto___11895]));

var G__11896 = (i__4532__auto___11895 + (1));
i__4532__auto___11895 = G__11896;
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
replica.inscore.gmn_expr_BANG_.cljs$lang$applyTo = (function (seq11891){
var G__11892 = cljs.core.first.call(null,seq11891);
var seq11891__$1 = cljs.core.next.call(null,seq11891);
var G__11893 = cljs.core.first.call(null,seq11891__$1);
var seq11891__$2 = cljs.core.next.call(null,seq11891__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11892,G__11893,seq11891__$2);
});

/**
 * Macro command for creating a new text entry. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.txt_BANG_ = (function replica$inscore$txt_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11900 = arguments.length;
var i__4532__auto___11901 = (0);
while(true){
if((i__4532__auto___11901 < len__4531__auto___11900)){
args__4534__auto__.push((arguments[i__4532__auto___11901]));

var G__11902 = (i__4532__auto___11901 + (1));
i__4532__auto___11901 = G__11902;
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
replica.inscore.txt_BANG_.cljs$lang$applyTo = (function (seq11897){
var G__11898 = cljs.core.first.call(null,seq11897);
var seq11897__$1 = cljs.core.next.call(null,seq11897);
var G__11899 = cljs.core.first.call(null,seq11897__$1);
var seq11897__$2 = cljs.core.next.call(null,seq11897__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11898,G__11899,seq11897__$2);
});

/**
 * Macro command for creating a new html entry. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.html_BANG_ = (function replica$inscore$html_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11906 = arguments.length;
var i__4532__auto___11907 = (0);
while(true){
if((i__4532__auto___11907 < len__4531__auto___11906)){
args__4534__auto__.push((arguments[i__4532__auto___11907]));

var G__11908 = (i__4532__auto___11907 + (1));
i__4532__auto___11907 = G__11908;
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
replica.inscore.html_BANG_.cljs$lang$applyTo = (function (seq11903){
var G__11904 = cljs.core.first.call(null,seq11903);
var seq11903__$1 = cljs.core.next.call(null,seq11903);
var G__11905 = cljs.core.first.call(null,seq11903__$1);
var seq11903__$2 = cljs.core.next.call(null,seq11903__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11904,G__11905,seq11903__$2);
});

/**
 * Macro command for creating a new html <button> entry and the repl entry to be sent onclick. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.btn_BANG_ = (function replica$inscore$btn_BANG_(var_args){
var G__11914 = arguments.length;
switch (G__11914) {
case 2:
return replica.inscore.btn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___11916 = arguments.length;
var i__4532__auto___11917 = (0);
while(true){
if((i__4532__auto___11917 < len__4531__auto___11916)){
args_arr__4546__auto__.push((arguments[i__4532__auto___11917]));

var G__11918 = (i__4532__auto___11917 + (1));
i__4532__auto___11917 = G__11918;
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
replica.inscore.btn_BANG_.cljs$lang$applyTo = (function (seq11910){
var G__11911 = cljs.core.first.call(null,seq11910);
var seq11910__$1 = cljs.core.next.call(null,seq11910);
var G__11912 = cljs.core.first.call(null,seq11910__$1);
var seq11910__$2 = cljs.core.next.call(null,seq11910__$1);
var G__11913 = cljs.core.first.call(null,seq11910__$2);
var seq11910__$3 = cljs.core.next.call(null,seq11910__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11911,G__11912,G__11913,seq11910__$3);
});

replica.inscore.btn_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Macro command for creating a new html slider (range) <input> with desired attr. and the fn[new-value] to be sent on change. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.sld_BANG_ = (function replica$inscore$sld_BANG_(var_args){
var G__11928 = arguments.length;
switch (G__11928) {
case 6:
return replica.inscore.sld_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___11930 = arguments.length;
var i__4532__auto___11931 = (0);
while(true){
if((i__4532__auto___11931 < len__4531__auto___11930)){
args_arr__4546__auto__.push((arguments[i__4532__auto___11931]));

var G__11932 = (i__4532__auto___11931 + (1));
i__4532__auto___11931 = G__11932;
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
replica.inscore.sld_BANG_.cljs$lang$applyTo = (function (seq11920){
var G__11921 = cljs.core.first.call(null,seq11920);
var seq11920__$1 = cljs.core.next.call(null,seq11920);
var G__11922 = cljs.core.first.call(null,seq11920__$1);
var seq11920__$2 = cljs.core.next.call(null,seq11920__$1);
var G__11923 = cljs.core.first.call(null,seq11920__$2);
var seq11920__$3 = cljs.core.next.call(null,seq11920__$2);
var G__11924 = cljs.core.first.call(null,seq11920__$3);
var seq11920__$4 = cljs.core.next.call(null,seq11920__$3);
var G__11925 = cljs.core.first.call(null,seq11920__$4);
var seq11920__$5 = cljs.core.next.call(null,seq11920__$4);
var G__11926 = cljs.core.first.call(null,seq11920__$5);
var seq11920__$6 = cljs.core.next.call(null,seq11920__$5);
var G__11927 = cljs.core.first.call(null,seq11920__$6);
var seq11920__$7 = cljs.core.next.call(null,seq11920__$6);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11921,G__11922,G__11923,G__11924,G__11925,G__11926,G__11927,seq11920__$7);
});

replica.inscore.sld_BANG_.cljs$lang$maxFixedArity = (7);

/**
 * Macro command for creating a watch to an element. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.watch_BANG_ = (function replica$inscore$watch_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11936 = arguments.length;
var i__4532__auto___11937 = (0);
while(true){
if((i__4532__auto___11937 < len__4531__auto___11936)){
args__4534__auto__.push((arguments[i__4532__auto___11937]));

var G__11938 = (i__4532__auto___11937 + (1));
i__4532__auto___11937 = G__11938;
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
replica.inscore.watch_BANG_.cljs$lang$applyTo = (function (seq11933){
var G__11934 = cljs.core.first.call(null,seq11933);
var seq11933__$1 = cljs.core.next.call(null,seq11933);
var G__11935 = cljs.core.first.call(null,seq11933__$1);
var seq11933__$2 = cljs.core.next.call(null,seq11933__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11934,G__11935,seq11933__$2);
});

/**
 * Query element contents or specific property. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.get_BANG_ = (function replica$inscore$get_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11943 = arguments.length;
var i__4532__auto___11944 = (0);
while(true){
if((i__4532__auto___11944 < len__4531__auto___11943)){
args__4534__auto__.push((arguments[i__4532__auto___11944]));

var G__11945 = (i__4532__auto___11944 + (1));
i__4532__auto___11944 = G__11945;
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
return cljs.core.map.call(null,(function (p1__11939_SHARP_){
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,cljs.core.rest.call(null,p1__11939_SHARP_))),cljs.core.last.call(null,cljs.core.rest.call(null,p1__11939_SHARP_)).replace(";",""));
}),cljs.core.js__GT_clj.call(null,cljs.core.map.call(null,(function (p1__11940_SHARP_){
return p1__11940_SHARP_.split(" ");
}),cljs.core.apply.call(null,replica.inscore.msg_BANG_,object,new cljs.core.Symbol(null,"get","get",-971253014,null),queries))));
}
});

replica.inscore.get_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.inscore.get_BANG_.cljs$lang$applyTo = (function (seq11941){
var G__11942 = cljs.core.first.call(null,seq11941);
var seq11941__$1 = cljs.core.next.call(null,seq11941);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11942,seq11941__$1);
});

/**
 * Macro command for creating an alias for the desired object
 */
replica.inscore.als_BANG_ = (function replica$inscore$als_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11949 = arguments.length;
var i__4532__auto___11950 = (0);
while(true){
if((i__4532__auto___11950 < len__4531__auto___11949)){
args__4534__auto__.push((arguments[i__4532__auto___11950]));

var G__11951 = (i__4532__auto___11950 + (1));
i__4532__auto___11950 = G__11951;
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
replica.inscore.als_BANG_.cljs$lang$applyTo = (function (seq11946){
var G__11947 = cljs.core.first.call(null,seq11946);
var seq11946__$1 = cljs.core.next.call(null,seq11946);
var G__11948 = cljs.core.first.call(null,seq11946__$1);
var seq11946__$2 = cljs.core.next.call(null,seq11946__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11947,G__11948,seq11946__$2);
});

replica.inscore.routes = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"als","als",2020052861,null),new cljs.core.Symbol(null,"sld","sld",2066183935,null),new cljs.core.Symbol(null,"txt","txt",-2027592081,null),new cljs.core.Symbol(null,"gmn","gmn",-1228752600,null),new cljs.core.Symbol(null,"dropls","dropls",677955357,null),new cljs.core.Symbol(null,"addr","addr",42880790,null),new cljs.core.Symbol(null,"setx","setx",532512799,null),new cljs.core.Symbol(null,"dropc","dropc",-939619651,null),new cljs.core.Symbol(null,"gmn-expr","gmn-expr",1926971010,null),new cljs.core.Symbol(null,"watch","watch",2021519804,null),new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"clear","clear",-777330810,null),new cljs.core.Symbol(null,"make-line","make-line",1150652984,null),new cljs.core.Symbol(null,"html","html",641734630,null),new cljs.core.Symbol(null,"msg","msg",254428083,null),new cljs.core.Symbol(null,"dropl","dropl",-636984007,null),new cljs.core.Symbol(null,"btn","btn",-676141118,null)],[new cljs.core.Symbol(null,"als!","als!",-487637442,null),new cljs.core.Symbol(null,"sld!","sld!",-1157981097,null),new cljs.core.Symbol(null,"txt!","txt!",597581936,null),new cljs.core.Symbol(null,"gmn!","gmn!",-260726850,null),new cljs.core.Symbol(null,"dropls!","dropls!",1967781400,null),new cljs.core.Symbol(null,"addr","addr",42880790,null),new cljs.core.Symbol(null,"setx!","setx!",-2003665837,null),new cljs.core.Symbol(null,"dropc!","dropc!",614382068,null),new cljs.core.Symbol(null,"gmn-expr!","gmn-expr!",944322151,null),new cljs.core.Symbol(null,"watch!","watch!",296407435,null),new cljs.core.Symbol(null,"get!","get!",-815197836,null),new cljs.core.Symbol(null,"clear!","clear!",1495717109,null),new cljs.core.Symbol(null,"make-line","make-line",1150652984,null),new cljs.core.Symbol(null,"html!","html!",-72613035,null),new cljs.core.Symbol(null,"msg!","msg!",-1995873876,null),new cljs.core.Symbol(null,"dropl!","dropl!",1713460340,null),new cljs.core.Symbol(null,"btn!","btn!",2072814859,null)]);
/**
 * The 'i' function is a route to almost all of the INScore built-in functionality inside replica.
 */
replica.inscore.i = (function replica$inscore$i(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11955 = arguments.length;
var i__4532__auto___11956 = (0);
while(true){
if((i__4532__auto___11956 < len__4531__auto___11955)){
args__4534__auto__.push((arguments[i__4532__auto___11956]));

var G__11957 = (i__4532__auto___11956 + (1));
i__4532__auto___11956 = G__11957;
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
var G__11954 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join('');
switch (G__11954) {
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
replica.inscore.i.cljs$lang$applyTo = (function (seq11952){
var G__11953 = cljs.core.first.call(null,seq11952);
var seq11952__$1 = cljs.core.next.call(null,seq11952);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11953,seq11952__$1);
});

replica.utils.add_routes_BANG_.call(null,new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"replica.inscore","replica.inscore",-1897157507,null),replica.inscore.routes);

//# sourceMappingURL=inscore.js.map
