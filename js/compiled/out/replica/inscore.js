// Compiled by ClojureScript 1.10.339 {}
goog.provide('replica.inscore');
goog.require('cljs.core');
goog.require('replica.utils');
if((typeof replica !== 'undefined') && (typeof replica.inscore !== 'undefined') && (typeof replica.inscore.inscore_viewer !== 'undefined')){
} else {
replica.inscore.inscore_viewer = document.getElementById("scene");
}
/**
 * Drops (sends) the desired code string to the active INScore window. If several arguments are provided then they are combined as one string without any formatting.
 */
replica.inscore.dropc_BANG_ = (function replica$inscore$dropc_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17941 = arguments.length;
var i__4532__auto___17942 = (0);
while(true){
if((i__4532__auto___17942 < len__4531__auto___17941)){
args__4534__auto__.push((arguments[i__4532__auto___17942]));

var G__17943 = (i__4532__auto___17942 + (1));
i__4532__auto___17942 = G__17943;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return replica.inscore.dropc_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

replica.inscore.dropc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (codes){
return dropTextTo(replica.inscore.inscore_viewer,cljs.core.apply.call(null,cljs.core.str,codes));
});

replica.inscore.dropc_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
replica.inscore.dropc_BANG_.cljs$lang$applyTo = (function (seq17940){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17940));
});

replica.inscore.make_line = (function replica$inscore$make_line(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17945 = arguments.length;
var i__4532__auto___17946 = (0);
while(true){
if((i__4532__auto___17946 < len__4531__auto___17945)){
args__4534__auto__.push((arguments[i__4532__auto___17946]));

var G__17947 = (i__4532__auto___17946 + (1));
i__4532__auto___17946 = G__17947;
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
replica.inscore.make_line.cljs$lang$applyTo = (function (seq17944){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17944));
});

/**
 * Drops (sends) a line, combining its arguments and adding a semicolon to the end, to the active INScore window.
 */
replica.inscore.dropl_BANG_ = (function replica$inscore$dropl_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17949 = arguments.length;
var i__4532__auto___17950 = (0);
while(true){
if((i__4532__auto___17950 < len__4531__auto___17949)){
args__4534__auto__.push((arguments[i__4532__auto___17950]));

var G__17951 = (i__4532__auto___17950 + (1));
i__4532__auto___17950 = G__17951;
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
replica.inscore.dropl_BANG_.cljs$lang$applyTo = (function (seq17948){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17948));
});

/**
 * Drops (sends) one line for each argument to the active INScore window. You can provide fragments of code inside each line. [see doc for 'dropl aka replica.inscore/dropl!]
 */
replica.inscore.dropls_BANG_ = (function replica$inscore$dropls_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17953 = arguments.length;
var i__4532__auto___17954 = (0);
while(true){
if((i__4532__auto___17954 < len__4531__auto___17953)){
args__4534__auto__.push((arguments[i__4532__auto___17954]));

var G__17955 = (i__4532__auto___17954 + (1));
i__4532__auto___17954 = G__17955;
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
replica.inscore.dropls_BANG_.cljs$lang$applyTo = (function (seq17952){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17952));
});

/**
 * Address an object from a scene, returns OSC path. If no scene is prepended in the form 'scenex/objx' then 'scene/[object]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.addr = (function replica$inscore$addr(object){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.name.call(null,object)),"#"))?null:"/ITL/")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.name.call(null,object)),"/"))?null:"scene/")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(object)].join('');
});
/**
 * Clears the INScore viewer by deleting every element from the desired scene (if no scene argument is provided then 'scene' is assumed).
 */
replica.inscore.clear_BANG_ = (function replica$inscore$clear_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17957 = arguments.length;
var i__4532__auto___17958 = (0);
while(true){
if((i__4532__auto___17958 < len__4531__auto___17957)){
args__4534__auto__.push((arguments[i__4532__auto___17958]));

var G__17959 = (i__4532__auto___17958 + (1));
i__4532__auto___17958 = G__17959;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return replica.inscore.clear_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

replica.inscore.clear_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (scene){
return replica.inscore.dropl_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(replica.inscore.addr.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,scene))].join(''))),"* del"].join(''));
});

replica.inscore.clear_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
replica.inscore.clear_BANG_.cljs$lang$applyTo = (function (seq17956){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17956));
});

/**
 * Address an object [or create it] and send to it a command. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.cmd_BANG_ = (function replica$inscore$cmd_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17963 = arguments.length;
var i__4532__auto___17964 = (0);
while(true){
if((i__4532__auto___17964 < len__4531__auto___17963)){
args__4534__auto__.push((arguments[i__4532__auto___17964]));

var G__17965 = (i__4532__auto___17964 + (1));
i__4532__auto___17964 = G__17965;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.inscore.cmd_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.inscore.cmd_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (object,cmd_codes){
return cljs.core.apply.call(null,replica.inscore.dropl_BANG_,replica.inscore.addr.call(null,object),cljs.core.map.call(null,(function (p1__17960_SHARP_){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17960_SHARP_)].join('');
}),cmd_codes));
});

replica.inscore.cmd_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.inscore.cmd_BANG_.cljs$lang$applyTo = (function (seq17961){
var G__17962 = cljs.core.first.call(null,seq17961);
var seq17961__$1 = cljs.core.next.call(null,seq17961);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17962,seq17961__$1);
});

/**
 * Address an object [or create it] and send to it some commands. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.cmds_BANG_ = (function replica$inscore$cmds_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17968 = arguments.length;
var i__4532__auto___17969 = (0);
while(true){
if((i__4532__auto___17969 < len__4531__auto___17968)){
args__4534__auto__.push((arguments[i__4532__auto___17969]));

var G__17970 = (i__4532__auto___17969 + (1));
i__4532__auto___17969 = G__17970;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.inscore.cmds_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.inscore.cmds_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (object,cmds){
return cljs.core.map.call(null,cljs.core.partial.call(null,replica.inscore.dropl_BANG_,replica.inscore.addr.call(null,object)," "),cmds);
});

replica.inscore.cmds_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.inscore.cmds_BANG_.cljs$lang$applyTo = (function (seq17966){
var G__17967 = cljs.core.first.call(null,seq17966);
var seq17966__$1 = cljs.core.next.call(null,seq17966);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17967,seq17966__$1);
});

/**
 * Dispatches a 'set [prop] [args]' command to an object.
 */
replica.inscore.setx_BANG_ = (function replica$inscore$setx_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17974 = arguments.length;
var i__4532__auto___17975 = (0);
while(true){
if((i__4532__auto___17975 < len__4531__auto___17974)){
args__4534__auto__.push((arguments[i__4532__auto___17975]));

var G__17976 = (i__4532__auto___17975 + (1));
i__4532__auto___17975 = G__17976;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.inscore.setx_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.inscore.setx_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (object,prop,args){
return replica.inscore.cmds_BANG_.call(null,object,cljs.core.apply.call(null,cljs.core.str,"set ",prop," ",args));
});

replica.inscore.setx_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.inscore.setx_BANG_.cljs$lang$applyTo = (function (seq17971){
var G__17972 = cljs.core.first.call(null,seq17971);
var seq17971__$1 = cljs.core.next.call(null,seq17971);
var G__17973 = cljs.core.first.call(null,seq17971__$1);
var seq17971__$2 = cljs.core.next.call(null,seq17971__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17972,G__17973,seq17971__$2);
});

/**
 * Macro command for creating a new GUIDO score object from GMN code. If no scene is prepended in the form '[scenex/objx]' then 'scene/[obj]' is assumed. For aliases prepend '#' -> '#/my/alias'.
 */
replica.inscore.gmn_BANG_ = (function replica$inscore$gmn_BANG_(object,code_string){
return replica.inscore.setx_BANG_.call(null,object,new cljs.core.Symbol(null,"gmn","gmn",-1228752600,null),"'",code_string,"'");
});
/**
 * Macro command for creating an alias for the desired object
 */
replica.inscore.als_BANG_ = (function replica$inscore$als_BANG_(object,your_alias){
return replica.inscore.cmds_BANG_.call(null,object,["alias '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(your_alias),"'"].join(''));
});
replica.inscore.routes = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"als","als",2020052861,null),new cljs.core.Symbol(null,"gmn","gmn",-1228752600,null),new cljs.core.Symbol(null,"dropls","dropls",677955357,null),new cljs.core.Symbol(null,"addr","addr",42880790,null),new cljs.core.Symbol(null,"cmds","cmds",-200972425,null),new cljs.core.Symbol(null,"setx","setx",532512799,null),new cljs.core.Symbol(null,"dropc","dropc",-939619651,null),new cljs.core.Symbol(null,"clear","clear",-777330810,null),new cljs.core.Symbol(null,"make-line","make-line",1150652984,null),new cljs.core.Symbol(null,"cmd","cmd",1337600384,null),new cljs.core.Symbol(null,"dropl","dropl",-636984007,null)],[new cljs.core.Symbol(null,"als!","als!",-487637442,null),new cljs.core.Symbol(null,"gmn!","gmn!",-260726850,null),new cljs.core.Symbol(null,"dropls!","dropls!",1967781400,null),new cljs.core.Symbol(null,"addr","addr",42880790,null),new cljs.core.Symbol(null,"cmds!","cmds!",103263083,null),new cljs.core.Symbol(null,"setx!","setx!",-2003665837,null),new cljs.core.Symbol(null,"dropc!","dropc!",614382068,null),new cljs.core.Symbol(null,"clear!","clear!",1495717109,null),new cljs.core.Symbol(null,"make-line","make-line",1150652984,null),new cljs.core.Symbol(null,"cmd!","cmd!",1117565602,null),new cljs.core.Symbol(null,"dropl!","dropl!",1713460340,null)]);
/**
 * The 'i' function is a route to almost all of the INScore built-in functionality inside replica. Available commands are 'clear 'drop[c][l[s]] 'cmds 'gmn 'a#
 */
replica.inscore.i = (function replica$inscore$i(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17980 = arguments.length;
var i__4532__auto___17981 = (0);
while(true){
if((i__4532__auto___17981 < len__4531__auto___17980)){
args__4534__auto__.push((arguments[i__4532__auto___17981]));

var G__17982 = (i__4532__auto___17981 + (1));
i__4532__auto___17981 = G__17982;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.inscore.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.inscore.i.cljs$core$IFn$_invoke$arity$variadic = (function (route,args){
if(cljs.core.truth_(cljs.core.re_find.call(null,/\/ITL/,route))){
return cljs.core.apply.call(null,replica.inscore.dropl_BANG_,route,args);
} else {
var G__17979 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join('');
switch (G__17979) {
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
replica.inscore.i.cljs$lang$applyTo = (function (seq17977){
var G__17978 = cljs.core.first.call(null,seq17977);
var seq17977__$1 = cljs.core.next.call(null,seq17977);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17978,seq17977__$1);
});

replica.utils.add_routes_BANG_.call(null,new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"replica.inscore","replica.inscore",-1897157507,null),replica.inscore.routes);

//# sourceMappingURL=inscore.js.map
