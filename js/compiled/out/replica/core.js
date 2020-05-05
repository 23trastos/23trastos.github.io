// Compiled by ClojureScript 1.10.339 {}
goog.provide('replica.core');
goog.require('cljs.core');
goog.require('replica.utils');
goog.require('replica.editor');
goog.require('replica.inscore');
goog.require('replica.tone');
/**
 * The 'r' function is a parser for replica commands, a door to almost every built-in functionality in the replica system. As a first route-argument (or route-letter!) you can provide: 'i for inscore 't for tone and 'e for editor. You can always use 'doc after any route-argument or function name for showing up the documentation: Happy REPL!CAtions!!
 */
replica.core.r = (function replica$core$r(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22335 = arguments.length;
var i__4532__auto___22336 = (0);
while(true){
if((i__4532__auto___22336 < len__4531__auto___22335)){
args__4534__auto__.push((arguments[i__4532__auto___22336]));

var G__22337 = (i__4532__auto___22336 + (1));
i__4532__auto___22336 = G__22337;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return replica.core.r.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

replica.core.r.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs.core.reset_BANG_.call(null,replica.utils.resp,null);

if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.coll_QMARK_,args))){
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,replica.core.r),args);
} else {
var route = cljs.core.first.call(null,args);
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,route),cljs.core.type.call(null,(new RegExp(""))))){
return replica.core.r.call(null,new cljs.core.Symbol(null,"epl","epl",-2108995518,null),route);
} else {
var route__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join('');
var G__22334 = route__$1;
switch (G__22334) {
case "doc":
return replica.utils.doc_commands.call(null,"replica.core/r",cljs.core.deref.call(null,replica.utils.routes),null);

break;
case "s":
if(cljs.core.not_EQ_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args))].join(''),"doc")){
if(cljs.core.truth_(replica.tone.t.call(null,new cljs.core.Symbol(null,"run?","run?",-1901812910,null)))){
return replica.tone.t.call(null,new cljs.core.Symbol(null,"stop","stop",-500379815,null));
} else {
return replica.tone.t.call(null,new cljs.core.Symbol(null,"start","start",1285322546,null));
}
} else {
return "This is just a shortcut for starting/stopping the transport with 'trun/'tstop.";
}

break;
case "c":
if(cljs.core.not_EQ_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args))].join(''),"doc")){
return replica.tone.t.call(null,new cljs.core.Symbol(null,"cancel","cancel",-323556833,null));
} else {
return replica.core.r.call(null,new cljs.core.Symbol(null,"tcancel","tcancel",-21487746,null),new cljs.core.Symbol(null,"doc","doc",-741138878,null));
}

break;
case "l":
if(cljs.core.not_EQ_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args))].join(''),"doc")){
return cljs.core.apply.call(null,replica.tone.t,new cljs.core.Symbol(null,"l","l",-1258542346,null),args);
} else {
return replica.core.r.call(null,new cljs.core.Symbol(null,"l","l",-1258542346,null),new cljs.core.Symbol(null,"doc","doc",-741138878,null));
}

break;
case "st":
if(cljs.core.not_EQ_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args))].join(''),"doc")){
return cljs.core.apply.call(null,replica.tone.t,new cljs.core.Symbol(null,"st","st",-1199179941,null),args);
} else {
return replica.core.r.call(null,new cljs.core.Symbol(null,"tst","tst",-115428864,null),new cljs.core.Symbol(null,"doc","doc",-741138878,null));
}

break;
case "filter":
return replica.utils.url_BANG_.call(null,"#/hist2CM?filter=true");

break;
case "edit":
return replica.utils.url_BANG_.call(null,"#/hist2CM");

break;
default:
var or__3949__auto__ = cljs.core.apply.call(null,replica.utils.proc_BANG_,args);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return replica.utils.get_value.call(null);
}

}
}
}
});

replica.core.r.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
replica.core.r.cljs$lang$applyTo = (function (seq22333){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22333));
});

replica.core.routes = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.Symbol("replica.core","r","replica.core/r",347578068,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol("replica.inscore","i","replica.inscore/i",-1616446785,null),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol("replica.editor","e","replica.editor/e",-1089389128,null),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol("replica.tone","t","replica.tone/t",-1082667992,null),new cljs.core.Symbol(null,"cmd","cmd",1337600384,null),new cljs.core.Symbol("replica.utils","create-command!","replica.utils/create-command!",-1137978773,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol("replica.utils","url!","replica.utils/url!",-129249061,null),new cljs.core.Symbol(null,"full","full",2077332747,null),new cljs.core.Symbol("replica.utils","full-score!","replica.utils/full-score!",342237218,null)], null);
replica.utils.add_routes_BANG_.call(null,null,null,replica.core.routes);

//# sourceMappingURL=core.js.map
