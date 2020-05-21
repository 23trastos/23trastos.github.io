// Compiled by ClojureScript 1.10.339 {}
goog.provide('replica.inscore');
goog.require('cljs.core');
goog.require('replica.utils');
/**
 * Drops (sends) the desired code string to the active INScore window. If several arguments are provided then they are combined as one string without any formatting.
 */
replica.inscore.dropc_BANG_ = (function replica$inscore$dropc_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11881 = arguments.length;
var i__4532__auto___11882 = (0);
while(true){
if((i__4532__auto___11882 < len__4531__auto___11881)){
args__4534__auto__.push((arguments[i__4532__auto___11882]));

var G__11883 = (i__4532__auto___11882 + (1));
i__4532__auto___11882 = G__11883;
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
replica.inscore.dropc_BANG_.cljs$lang$applyTo = (function (seq11880){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11880));
});

replica.inscore.make_line = (function replica$inscore$make_line(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11885 = arguments.length;
var i__4532__auto___11886 = (0);
while(true){
if((i__4532__auto___11886 < len__4531__auto___11885)){
args__4534__auto__.push((arguments[i__4532__auto___11886]));

var G__11887 = (i__4532__auto___11886 + (1));
i__4532__auto___11886 = G__11887;
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
replica.inscore.make_line.cljs$lang$applyTo = (function (seq11884){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11884));
});

/**
 * Drops (sends) a line, combining its arguments and adding a semicolon to the end, to the active INScore window.
 */
replica.inscore.dropl_BANG_ = (function replica$inscore$dropl_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11889 = arguments.length;
var i__4532__auto___11890 = (0);
while(true){
if((i__4532__auto___11890 < len__4531__auto___11889)){
args__4534__auto__.push((arguments[i__4532__auto___11890]));

var G__11891 = (i__4532__auto___11890 + (1));
i__4532__auto___11890 = G__11891;
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
replica.inscore.dropl_BANG_.cljs$lang$applyTo = (function (seq11888){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11888));
});

/**
 * Drops (sends) one line for each argument to the active INScore window. You can provide fragments of code inside each line. [see doc for 'dropl aka replica.inscore/dropl!]
 */
replica.inscore.dropls_BANG_ = (function replica$inscore$dropls_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11893 = arguments.length;
var i__4532__auto___11894 = (0);
while(true){
if((i__4532__auto___11894 < len__4531__auto___11893)){
args__4534__auto__.push((arguments[i__4532__auto___11894]));

var G__11895 = (i__4532__auto___11894 + (1));
i__4532__auto___11894 = G__11895;
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
replica.inscore.dropls_BANG_.cljs$lang$applyTo = (function (seq11892){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11892));
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
var len__4531__auto___11897 = arguments.length;
var i__4532__auto___11898 = (0);
while(true){
if((i__4532__auto___11898 < len__4531__auto___11897)){
args__4534__auto__.push((arguments[i__4532__auto___11898]));

var G__11899 = (i__4532__auto___11898 + (1));
i__4532__auto___11898 = G__11899;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return replica.inscore.clear_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

replica.inscore.clear_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj){
cljs.core.apply.call(null,replica.inscore.dropl_BANG_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(replica.inscore.addr.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,obj))].join(''))),"* del"].join(''),cljs.core.rest.call(null,obj));

return replica.utils.add_info_BANG_.call(null,"scene cleared!");
});

replica.inscore.clear_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
replica.inscore.clear_BANG_.cljs$lang$applyTo = (function (seq11896){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11896));
});

/**
 * Address an object [or create it] and send to it a command. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.msg_BANG_ = (function replica$inscore$msg_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11902 = arguments.length;
var i__4532__auto___11903 = (0);
while(true){
if((i__4532__auto___11903 < len__4531__auto___11902)){
args__4534__auto__.push((arguments[i__4532__auto___11903]));

var G__11904 = (i__4532__auto___11903 + (1));
i__4532__auto___11903 = G__11904;
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
replica.inscore.msg_BANG_.cljs$lang$applyTo = (function (seq11900){
var G__11901 = cljs.core.first.call(null,seq11900);
var seq11900__$1 = cljs.core.next.call(null,seq11900);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11901,seq11900__$1);
});

/**
 * Dispatches a 'set [obj-type] [args]' command to an object.
 */
replica.inscore.setx_BANG_ = (function replica$inscore$setx_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11909 = arguments.length;
var i__4532__auto___11910 = (0);
while(true){
if((i__4532__auto___11910 < len__4531__auto___11909)){
args__4534__auto__.push((arguments[i__4532__auto___11910]));

var G__11911 = (i__4532__auto___11910 + (1));
i__4532__auto___11910 = G__11911;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.inscore.setx_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.inscore.setx_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (object,obj_type,args){
var arguments$ = cljs.core.map.call(null,(function (p1__11905_SHARP_){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,p1__11905_SHARP_),cljs.core.type.call(null,""))){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11905_SHARP_),"\""].join('');
} else {
return p1__11905_SHARP_;
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
replica.inscore.setx_BANG_.cljs$lang$applyTo = (function (seq11906){
var G__11907 = cljs.core.first.call(null,seq11906);
var seq11906__$1 = cljs.core.next.call(null,seq11906);
var G__11908 = cljs.core.first.call(null,seq11906__$1);
var seq11906__$2 = cljs.core.next.call(null,seq11906__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11907,G__11908,seq11906__$2);
});

/**
 * Macro command for creating a new score from GMN code. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.gmn_BANG_ = (function replica$inscore$gmn_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11915 = arguments.length;
var i__4532__auto___11916 = (0);
while(true){
if((i__4532__auto___11916 < len__4531__auto___11915)){
args__4534__auto__.push((arguments[i__4532__auto___11916]));

var G__11917 = (i__4532__auto___11916 + (1));
i__4532__auto___11916 = G__11917;
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
replica.inscore.gmn_BANG_.cljs$lang$applyTo = (function (seq11912){
var G__11913 = cljs.core.first.call(null,seq11912);
var seq11912__$1 = cljs.core.next.call(null,seq11912);
var G__11914 = cljs.core.first.call(null,seq11912__$1);
var seq11912__$2 = cljs.core.next.call(null,seq11912__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11913,G__11914,seq11912__$2);
});

/**
 * Macro command for creating a new score from GMN score expression. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.gmn_expr_BANG_ = (function replica$inscore$gmn_expr_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11921 = arguments.length;
var i__4532__auto___11922 = (0);
while(true){
if((i__4532__auto___11922 < len__4531__auto___11921)){
args__4534__auto__.push((arguments[i__4532__auto___11922]));

var G__11923 = (i__4532__auto___11922 + (1));
i__4532__auto___11922 = G__11923;
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
replica.inscore.gmn_expr_BANG_.cljs$lang$applyTo = (function (seq11918){
var G__11919 = cljs.core.first.call(null,seq11918);
var seq11918__$1 = cljs.core.next.call(null,seq11918);
var G__11920 = cljs.core.first.call(null,seq11918__$1);
var seq11918__$2 = cljs.core.next.call(null,seq11918__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11919,G__11920,seq11918__$2);
});

/**
 * Macro command for creating a new text entry. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.txt_BANG_ = (function replica$inscore$txt_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11927 = arguments.length;
var i__4532__auto___11928 = (0);
while(true){
if((i__4532__auto___11928 < len__4531__auto___11927)){
args__4534__auto__.push((arguments[i__4532__auto___11928]));

var G__11929 = (i__4532__auto___11928 + (1));
i__4532__auto___11928 = G__11929;
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
replica.inscore.txt_BANG_.cljs$lang$applyTo = (function (seq11924){
var G__11925 = cljs.core.first.call(null,seq11924);
var seq11924__$1 = cljs.core.next.call(null,seq11924);
var G__11926 = cljs.core.first.call(null,seq11924__$1);
var seq11924__$2 = cljs.core.next.call(null,seq11924__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11925,G__11926,seq11924__$2);
});

/**
 * Macro command for creating a new html entry. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.html_BANG_ = (function replica$inscore$html_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11933 = arguments.length;
var i__4532__auto___11934 = (0);
while(true){
if((i__4532__auto___11934 < len__4531__auto___11933)){
args__4534__auto__.push((arguments[i__4532__auto___11934]));

var G__11935 = (i__4532__auto___11934 + (1));
i__4532__auto___11934 = G__11935;
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
replica.inscore.html_BANG_.cljs$lang$applyTo = (function (seq11930){
var G__11931 = cljs.core.first.call(null,seq11930);
var seq11930__$1 = cljs.core.next.call(null,seq11930);
var G__11932 = cljs.core.first.call(null,seq11930__$1);
var seq11930__$2 = cljs.core.next.call(null,seq11930__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11931,G__11932,seq11930__$2);
});

/**
 * Macro command for creating a new html <button> entry and the repl entry to be sent onclick. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.btn_BANG_ = (function replica$inscore$btn_BANG_(var_args){
var G__11941 = arguments.length;
switch (G__11941) {
case 2:
return replica.inscore.btn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___11943 = arguments.length;
var i__4532__auto___11944 = (0);
while(true){
if((i__4532__auto___11944 < len__4531__auto___11943)){
args_arr__4546__auto__.push((arguments[i__4532__auto___11944]));

var G__11945 = (i__4532__auto___11944 + (1));
i__4532__auto___11944 = G__11945;
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
replica.inscore.btn_BANG_.cljs$lang$applyTo = (function (seq11937){
var G__11938 = cljs.core.first.call(null,seq11937);
var seq11937__$1 = cljs.core.next.call(null,seq11937);
var G__11939 = cljs.core.first.call(null,seq11937__$1);
var seq11937__$2 = cljs.core.next.call(null,seq11937__$1);
var G__11940 = cljs.core.first.call(null,seq11937__$2);
var seq11937__$3 = cljs.core.next.call(null,seq11937__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11938,G__11939,G__11940,seq11937__$3);
});

replica.inscore.btn_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Macro command for creating a new html slider (range) <input> with desired attr. and the fn[new-value] to be sent on change. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.sld_BANG_ = (function replica$inscore$sld_BANG_(var_args){
var G__11955 = arguments.length;
switch (G__11955) {
case 6:
return replica.inscore.sld_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___11957 = arguments.length;
var i__4532__auto___11958 = (0);
while(true){
if((i__4532__auto___11958 < len__4531__auto___11957)){
args_arr__4546__auto__.push((arguments[i__4532__auto___11958]));

var G__11959 = (i__4532__auto___11958 + (1));
i__4532__auto___11958 = G__11959;
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
replica.inscore.sld_BANG_.cljs$lang$applyTo = (function (seq11947){
var G__11948 = cljs.core.first.call(null,seq11947);
var seq11947__$1 = cljs.core.next.call(null,seq11947);
var G__11949 = cljs.core.first.call(null,seq11947__$1);
var seq11947__$2 = cljs.core.next.call(null,seq11947__$1);
var G__11950 = cljs.core.first.call(null,seq11947__$2);
var seq11947__$3 = cljs.core.next.call(null,seq11947__$2);
var G__11951 = cljs.core.first.call(null,seq11947__$3);
var seq11947__$4 = cljs.core.next.call(null,seq11947__$3);
var G__11952 = cljs.core.first.call(null,seq11947__$4);
var seq11947__$5 = cljs.core.next.call(null,seq11947__$4);
var G__11953 = cljs.core.first.call(null,seq11947__$5);
var seq11947__$6 = cljs.core.next.call(null,seq11947__$5);
var G__11954 = cljs.core.first.call(null,seq11947__$6);
var seq11947__$7 = cljs.core.next.call(null,seq11947__$6);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11948,G__11949,G__11950,G__11951,G__11952,G__11953,G__11954,seq11947__$7);
});

replica.inscore.sld_BANG_.cljs$lang$maxFixedArity = (7);

/**
 * Macro command for creating a watch to an element. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.watch_BANG_ = (function replica$inscore$watch_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11963 = arguments.length;
var i__4532__auto___11964 = (0);
while(true){
if((i__4532__auto___11964 < len__4531__auto___11963)){
args__4534__auto__.push((arguments[i__4532__auto___11964]));

var G__11965 = (i__4532__auto___11964 + (1));
i__4532__auto___11964 = G__11965;
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
replica.inscore.watch_BANG_.cljs$lang$applyTo = (function (seq11960){
var G__11961 = cljs.core.first.call(null,seq11960);
var seq11960__$1 = cljs.core.next.call(null,seq11960);
var G__11962 = cljs.core.first.call(null,seq11960__$1);
var seq11960__$2 = cljs.core.next.call(null,seq11960__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11961,G__11962,seq11960__$2);
});

/**
 * Query element contents or specific property. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.get_BANG_ = (function replica$inscore$get_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11970 = arguments.length;
var i__4532__auto___11971 = (0);
while(true){
if((i__4532__auto___11971 < len__4531__auto___11970)){
args__4534__auto__.push((arguments[i__4532__auto___11971]));

var G__11972 = (i__4532__auto___11971 + (1));
i__4532__auto___11971 = G__11972;
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
return cljs.core.map.call(null,(function (p1__11966_SHARP_){
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,cljs.core.rest.call(null,p1__11966_SHARP_))),cljs.core.last.call(null,cljs.core.rest.call(null,p1__11966_SHARP_)).replace(";",""));
}),cljs.core.js__GT_clj.call(null,cljs.core.map.call(null,(function (p1__11967_SHARP_){
return p1__11967_SHARP_.split(" ");
}),cljs.core.apply.call(null,replica.inscore.msg_BANG_,object,new cljs.core.Symbol(null,"get","get",-971253014,null),queries))));
}
});

replica.inscore.get_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.inscore.get_BANG_.cljs$lang$applyTo = (function (seq11968){
var G__11969 = cljs.core.first.call(null,seq11968);
var seq11968__$1 = cljs.core.next.call(null,seq11968);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11969,seq11968__$1);
});

/**
 * Macro command for creating an alias for the desired object
 */
replica.inscore.als_BANG_ = (function replica$inscore$als_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11976 = arguments.length;
var i__4532__auto___11977 = (0);
while(true){
if((i__4532__auto___11977 < len__4531__auto___11976)){
args__4534__auto__.push((arguments[i__4532__auto___11977]));

var G__11978 = (i__4532__auto___11977 + (1));
i__4532__auto___11977 = G__11978;
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
replica.inscore.als_BANG_.cljs$lang$applyTo = (function (seq11973){
var G__11974 = cljs.core.first.call(null,seq11973);
var seq11973__$1 = cljs.core.next.call(null,seq11973);
var G__11975 = cljs.core.first.call(null,seq11973__$1);
var seq11973__$2 = cljs.core.next.call(null,seq11973__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11974,G__11975,seq11973__$2);
});

replica.inscore.routes = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"als","als",2020052861,null),new cljs.core.Symbol(null,"sld","sld",2066183935,null),new cljs.core.Symbol(null,"txt","txt",-2027592081,null),new cljs.core.Symbol(null,"gmn","gmn",-1228752600,null),new cljs.core.Symbol(null,"dropls","dropls",677955357,null),new cljs.core.Symbol(null,"addr","addr",42880790,null),new cljs.core.Symbol(null,"setx","setx",532512799,null),new cljs.core.Symbol(null,"dropc","dropc",-939619651,null),new cljs.core.Symbol(null,"gmn-expr","gmn-expr",1926971010,null),new cljs.core.Symbol(null,"watch","watch",2021519804,null),new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"clear","clear",-777330810,null),new cljs.core.Symbol(null,"make-line","make-line",1150652984,null),new cljs.core.Symbol(null,"html","html",641734630,null),new cljs.core.Symbol(null,"msg","msg",254428083,null),new cljs.core.Symbol(null,"dropl","dropl",-636984007,null),new cljs.core.Symbol(null,"btn","btn",-676141118,null)],[new cljs.core.Symbol(null,"als!","als!",-487637442,null),new cljs.core.Symbol(null,"sld!","sld!",-1157981097,null),new cljs.core.Symbol(null,"txt!","txt!",597581936,null),new cljs.core.Symbol(null,"gmn!","gmn!",-260726850,null),new cljs.core.Symbol(null,"dropls!","dropls!",1967781400,null),new cljs.core.Symbol(null,"addr","addr",42880790,null),new cljs.core.Symbol(null,"setx!","setx!",-2003665837,null),new cljs.core.Symbol(null,"dropc!","dropc!",614382068,null),new cljs.core.Symbol(null,"gmn-expr!","gmn-expr!",944322151,null),new cljs.core.Symbol(null,"watch!","watch!",296407435,null),new cljs.core.Symbol(null,"get!","get!",-815197836,null),new cljs.core.Symbol(null,"clear!","clear!",1495717109,null),new cljs.core.Symbol(null,"make-line","make-line",1150652984,null),new cljs.core.Symbol(null,"html!","html!",-72613035,null),new cljs.core.Symbol(null,"msg!","msg!",-1995873876,null),new cljs.core.Symbol(null,"dropl!","dropl!",1713460340,null),new cljs.core.Symbol(null,"btn!","btn!",2072814859,null)]);
/**
 * The 'i' function is a route to almost all of the INScore built-in functionality inside replica.
 */
replica.inscore.i = (function replica$inscore$i(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11982 = arguments.length;
var i__4532__auto___11983 = (0);
while(true){
if((i__4532__auto___11983 < len__4531__auto___11982)){
args__4534__auto__.push((arguments[i__4532__auto___11983]));

var G__11984 = (i__4532__auto___11983 + (1));
i__4532__auto___11983 = G__11984;
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
var G__11981 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join('');
switch (G__11981) {
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
replica.inscore.i.cljs$lang$applyTo = (function (seq11979){
var G__11980 = cljs.core.first.call(null,seq11979);
var seq11979__$1 = cljs.core.next.call(null,seq11979);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11980,seq11979__$1);
});

replica.utils.add_routes_BANG_.call(null,new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"replica.inscore","replica.inscore",-1897157507,null),replica.inscore.routes);

//# sourceMappingURL=inscore.js.map
