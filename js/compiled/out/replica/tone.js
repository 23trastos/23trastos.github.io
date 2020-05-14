// Compiled by ClojureScript 1.10.339 {}
goog.provide('replica.tone');
goog.require('cljs.core');
goog.require('tonejs');
goog.require('goog.object');
goog.require('replica.utils');
if((typeof replica !== 'undefined') && (typeof replica.tone !== 'undefined') && (typeof replica.tone.rsrcs !== 'undefined')){
} else {
replica.tone.rsrcs = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"run","run",-1821166653),false,new cljs.core.Keyword(null,"master","master",779988698),Tone.Master,new cljs.core.Keyword(null,"ins","ins",-1021983570),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"fx","fx",-1237829572),cljs.core.PersistentArrayMap.EMPTY], null));
}
replica.tone.getrsrc = (function replica$tone$getrsrc(var_args){
var G__17370 = arguments.length;
switch (G__17370) {
case 1:
return replica.tone.getrsrc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replica.tone.getrsrc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replica.tone.getrsrc.cljs$core$IFn$_invoke$arity$1 = (function (id){
if(cljs.core.coll_QMARK_.call(null,id)){
return cljs.core.apply.call(null,replica.tone.getrsrc,id);
} else {
if(cljs.core._EQ_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),"master")){
return new cljs.core.Keyword(null,"master","master",779988698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replica.tone.rsrcs));
} else {
var or__3949__auto__ = replica.tone.getrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return replica.tone.getrsrc.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),id);
}
}
}
});

replica.tone.getrsrc.cljs$core$IFn$_invoke$arity$2 = (function (k,id){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,replica.tone.rsrcs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,id], null));
});

replica.tone.getrsrc.cljs$lang$maxFixedArity = 2;

/**
 * connects source to several elements by ID, a.k.a. fan
 */
replica.tone.fan = (function replica$tone$fan(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17374 = arguments.length;
var i__4532__auto___17375 = (0);
while(true){
if((i__4532__auto___17375 < len__4531__auto___17374)){
args__4534__auto__.push((arguments[i__4532__auto___17375]));

var G__17376 = (i__4532__auto___17375 + (1));
i__4532__auto___17375 = G__17376;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.tone.fan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.tone.fan.cljs$core$IFn$_invoke$arity$variadic = (function (source_id,elms){
var src = replica.tone.getrsrc.call(null,source_id);
return cljs.core.apply.call(null,src.fan.bind(src),cljs.core.map.call(null,replica.tone.getrsrc,elms));
});

replica.tone.fan.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.tone.fan.cljs$lang$applyTo = (function (seq17372){
var G__17373 = cljs.core.first.call(null,seq17372);
var seq17372__$1 = cljs.core.next.call(null,seq17372);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17373,seq17372__$1);
});

/**
 * chains from source through elements by ID.
 */
replica.tone.chain = (function replica$tone$chain(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17379 = arguments.length;
var i__4532__auto___17380 = (0);
while(true){
if((i__4532__auto___17380 < len__4531__auto___17379)){
args__4534__auto__.push((arguments[i__4532__auto___17380]));

var G__17381 = (i__4532__auto___17380 + (1));
i__4532__auto___17380 = G__17381;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.tone.chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.tone.chain.cljs$core$IFn$_invoke$arity$variadic = (function (source_id,elms){
var src = replica.tone.getrsrc.call(null,source_id);
return cljs.core.apply.call(null,src.chain.bind(src),cljs.core.map.call(null,replica.tone.getrsrc,elms));
});

replica.tone.chain.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.tone.chain.cljs$lang$applyTo = (function (seq17377){
var G__17378 = cljs.core.first.call(null,seq17377);
var seq17377__$1 = cljs.core.next.call(null,seq17377);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17378,seq17377__$1);
});

replica.tone.connect = (function replica$tone$connect(id,__,__LT_){
if(cljs.core.truth_(__)){
replica.tone.chain.call(null,id,__);
} else {
}

if(cljs.core.truth_(__LT_)){
replica.tone.fan.call(null,id,__LT_);
} else {
}

return id;
});
replica.tone.setrsrc = (function replica$tone$setrsrc(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17389 = arguments.length;
var i__4532__auto___17390 = (0);
while(true){
if((i__4532__auto___17390 < len__4531__auto___17389)){
args__4534__auto__.push((arguments[i__4532__auto___17390]));

var G__17391 = (i__4532__auto___17390 + (1));
i__4532__auto___17390 = G__17391;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return replica.tone.setrsrc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

replica.tone.setrsrc.cljs$core$IFn$_invoke$arity$variadic = (function (k,id,rsrc,p__17386){
var map__17387 = p__17386;
var map__17387__$1 = ((((!((map__17387 == null)))?(((((map__17387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17387):map__17387);
var __ = cljs.core.get.call(null,map__17387__$1,new cljs.core.Keyword(null,"--","--",-1406508824));
var __LT_ = cljs.core.get.call(null,map__17387__$1,new cljs.core.Keyword(null,"-<","-<",1635525807));
cljs.core.swap_BANG_.call(null,replica.tone.rsrcs,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,id], null),rsrc);

if(cljs.core.truth_((function (){var or__3949__auto__ = __;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return __LT_;
}
})())){
return replica.tone.connect.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,id], null),__,__LT_);
} else {
return null;
}
});

replica.tone.setrsrc.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
replica.tone.setrsrc.cljs$lang$applyTo = (function (seq17382){
var G__17383 = cljs.core.first.call(null,seq17382);
var seq17382__$1 = cljs.core.next.call(null,seq17382);
var G__17384 = cljs.core.first.call(null,seq17382__$1);
var seq17382__$2 = cljs.core.next.call(null,seq17382__$1);
var G__17385 = cljs.core.first.call(null,seq17382__$2);
var seq17382__$3 = cljs.core.next.call(null,seq17382__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17383,G__17384,G__17385,seq17382__$3);
});

replica.tone.setprops_BANG_ = (function replica$tone$setprops_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17394 = arguments.length;
var i__4532__auto___17395 = (0);
while(true){
if((i__4532__auto___17395 < len__4531__auto___17394)){
args__4534__auto__.push((arguments[i__4532__auto___17395]));

var G__17396 = (i__4532__auto___17395 + (1));
i__4532__auto___17395 = G__17396;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.tone.setprops_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.tone.setprops_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (id,path_to_prop_val){
return cljs.core.apply.call(null,replica.utils.set_js_prop_BANG_,replica.tone.getrsrc.call(null,id),path_to_prop_val);
});

replica.tone.setprops_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.tone.setprops_BANG_.cljs$lang$applyTo = (function (seq17392){
var G__17393 = cljs.core.first.call(null,seq17392);
var seq17392__$1 = cljs.core.next.call(null,seq17392);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17393,seq17392__$1);
});

replica.tone.getprops = (function replica$tone$getprops(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17399 = arguments.length;
var i__4532__auto___17400 = (0);
while(true){
if((i__4532__auto___17400 < len__4531__auto___17399)){
args__4534__auto__.push((arguments[i__4532__auto___17400]));

var G__17401 = (i__4532__auto___17400 + (1));
i__4532__auto___17400 = G__17401;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.tone.getprops.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.tone.getprops.cljs$core$IFn$_invoke$arity$variadic = (function (id,pre_path){
var obj = replica.tone.getrsrc.call(null,id);
return (new cljs.core.List(null,cljs.core.apply.call(null,replica.utils.get_js_value,obj,pre_path),(new cljs.core.List(null,cljs.core.apply.call(null,replica.utils.get_js_paths,obj,pre_path),null,(1),null)),(2),null));
});

replica.tone.getprops.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.tone.getprops.cljs$lang$applyTo = (function (seq17397){
var G__17398 = cljs.core.first.call(null,seq17397);
var seq17397__$1 = cljs.core.next.call(null,seq17397);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17398,seq17397__$1);
});

replica.tone.do_BANG_ = (function replica$tone$do_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17405 = arguments.length;
var i__4532__auto___17406 = (0);
while(true){
if((i__4532__auto___17406 < len__4531__auto___17405)){
args__4534__auto__.push((arguments[i__4532__auto___17406]));

var G__17407 = (i__4532__auto___17406 + (1));
i__4532__auto___17406 = G__17407;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.tone.do_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.tone.do_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (id,path_to_fn,args){
return cljs.core.apply.call(null,cljs.core.js_invoke,cljs.core.apply.call(null,replica.utils.get_js_value,replica.tone.getrsrc.call(null,id),cljs.core.butlast.call(null,path_to_fn)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,path_to_fn))].join(''),args);
});

replica.tone.do_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.tone.do_BANG_.cljs$lang$applyTo = (function (seq17402){
var G__17403 = cljs.core.first.call(null,seq17402);
var seq17402__$1 = cljs.core.next.call(null,seq17402);
var G__17404 = cljs.core.first.call(null,seq17402__$1);
var seq17402__$2 = cljs.core.next.call(null,seq17402__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17403,G__17404,seq17402__$2);
});

/**
 * Creates a new Tone.Synth
 */
replica.tone.synth = (function replica$tone$synth(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17413 = arguments.length;
var i__4532__auto___17414 = (0);
while(true){
if((i__4532__auto___17414 < len__4531__auto___17413)){
args__4534__auto__.push((arguments[i__4532__auto___17414]));

var G__17415 = (i__4532__auto___17414 + (1));
i__4532__auto___17414 = G__17415;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.tone.synth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.tone.synth.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__17410){
var map__17411 = p__17410;
var map__17411__$1 = ((((!((map__17411 == null)))?(((((map__17411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17411):map__17411);
var osc = cljs.core.get.call(null,map__17411__$1,new cljs.core.Keyword(null,"osc","osc",218527081),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"triangle","triangle",-187845140,null)], null));
var a = cljs.core.get.call(null,map__17411__$1,new cljs.core.Keyword(null,"a","a",-2123407586),0.005);
var d = cljs.core.get.call(null,map__17411__$1,new cljs.core.Keyword(null,"d","d",1972142424),0.1);
var s = cljs.core.get.call(null,map__17411__$1,new cljs.core.Keyword(null,"s","s",1705939918),0.3);
var r = cljs.core.get.call(null,map__17411__$1,new cljs.core.Keyword(null,"r","r",-471384190),(1));
var __ = cljs.core.get.call(null,map__17411__$1,new cljs.core.Keyword(null,"--","--",-1406508824),new cljs.core.Symbol(null,"master","master",-1874447071,null));
var __LT_ = cljs.core.get.call(null,map__17411__$1,new cljs.core.Keyword(null,"-<","-<",1635525807));
return replica.tone.setrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id,(new Tone.Synth(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oscillator","oscillator",-1200469980),osc,new cljs.core.Keyword(null,"envelope","envelope",-236796318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attack","attack",1957061788),a,new cljs.core.Keyword(null,"decay","decay",1036712184),d,new cljs.core.Keyword(null,"sustain","sustain",1604277844),s,new cljs.core.Keyword(null,"release","release",-1534371381),r], null)], null)))),new cljs.core.Keyword(null,"--","--",-1406508824),__,new cljs.core.Keyword(null,"-<","-<",1635525807),__LT_);
});

replica.tone.synth.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.tone.synth.cljs$lang$applyTo = (function (seq17408){
var G__17409 = cljs.core.first.call(null,seq17408);
var seq17408__$1 = cljs.core.next.call(null,seq17408);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17409,seq17408__$1);
});

/**
 * Creates a new Tone.MonoSynth
 */
replica.tone.monos = (function replica$tone$monos(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17421 = arguments.length;
var i__4532__auto___17422 = (0);
while(true){
if((i__4532__auto___17422 < len__4531__auto___17421)){
args__4534__auto__.push((arguments[i__4532__auto___17422]));

var G__17423 = (i__4532__auto___17422 + (1));
i__4532__auto___17422 = G__17423;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.tone.monos.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.tone.monos.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__17418){
var map__17419 = p__17418;
var map__17419__$1 = ((((!((map__17419 == null)))?(((((map__17419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17419):map__17419);
var filt = cljs.core.get.call(null,map__17419__$1,new cljs.core.Keyword(null,"filt","filt",169229082),new cljs.core.Symbol(null,"lowpass","lowpass",802254948,null));
var fs = cljs.core.get.call(null,map__17419__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244),0.3);
var a = cljs.core.get.call(null,map__17419__$1,new cljs.core.Keyword(null,"a","a",-2123407586),0.005);
var fa = cljs.core.get.call(null,map__17419__$1,new cljs.core.Keyword(null,"fa","fa",484981183),0.06);
var fr = cljs.core.get.call(null,map__17419__$1,new cljs.core.Keyword(null,"fr","fr",1577713888),(2));
var f8s = cljs.core.get.call(null,map__17419__$1,new cljs.core.Keyword(null,"f8s","f8s",-1090773535),(7));
var q = cljs.core.get.call(null,map__17419__$1,new cljs.core.Keyword(null,"q","q",689001697),(6));
var r = cljs.core.get.call(null,map__17419__$1,new cljs.core.Keyword(null,"r","r",-471384190),(1));
var ffreq = cljs.core.get.call(null,map__17419__$1,new cljs.core.Keyword(null,"ffreq","ffreq",-1705674076),(200));
var roff = cljs.core.get.call(null,map__17419__$1,new cljs.core.Keyword(null,"roff","roff",-1380134394),(-24));
var fexp = cljs.core.get.call(null,map__17419__$1,new cljs.core.Keyword(null,"fexp","fexp",-300455130),(2));
var fd = cljs.core.get.call(null,map__17419__$1,new cljs.core.Keyword(null,"fd","fd",-1524403000),0.2);
var __ = cljs.core.get.call(null,map__17419__$1,new cljs.core.Keyword(null,"--","--",-1406508824),new cljs.core.Symbol(null,"master","master",-1874447071,null));
var osc = cljs.core.get.call(null,map__17419__$1,new cljs.core.Keyword(null,"osc","osc",218527081),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"square","square",-1842001092,null)], null));
var s = cljs.core.get.call(null,map__17419__$1,new cljs.core.Keyword(null,"s","s",1705939918),0.9);
var __LT_ = cljs.core.get.call(null,map__17419__$1,new cljs.core.Keyword(null,"-<","-<",1635525807));
var d = cljs.core.get.call(null,map__17419__$1,new cljs.core.Keyword(null,"d","d",1972142424),0.1);
return replica.tone.setrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id,(new Tone.MonoSynth(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"oscillator","oscillator",-1200469980),osc,new cljs.core.Keyword(null,"envelope","envelope",-236796318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attack","attack",1957061788),a,new cljs.core.Keyword(null,"decay","decay",1036712184),d,new cljs.core.Keyword(null,"sustain","sustain",1604277844),s,new cljs.core.Keyword(null,"release","release",-1534371381),r], null),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),filt,new cljs.core.Keyword(null,"Q","Q",663320520),q,new cljs.core.Keyword(null,"rolloff","rolloff",-715733667),roff], null),new cljs.core.Keyword(null,"filterEnvelope","filterEnvelope",-898174700),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"attack","attack",1957061788),fa,new cljs.core.Keyword(null,"decay","decay",1036712184),fd,new cljs.core.Keyword(null,"sustain","sustain",1604277844),fs,new cljs.core.Keyword(null,"release","release",-1534371381),fr,new cljs.core.Keyword(null,"baseFrequency","baseFrequency",-1013443755),ffreq,new cljs.core.Keyword(null,"octaves","octaves",955457820),f8s,new cljs.core.Keyword(null,"exponent","exponent",2083463617),fexp], null)], null)))),new cljs.core.Keyword(null,"--","--",-1406508824),__,new cljs.core.Keyword(null,"-<","-<",1635525807),__LT_);
});

replica.tone.monos.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.tone.monos.cljs$lang$applyTo = (function (seq17416){
var G__17417 = cljs.core.first.call(null,seq17416);
var seq17416__$1 = cljs.core.next.call(null,seq17416);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17417,seq17416__$1);
});

/**
 * Creates a new Tone.MetalSynth
 */
replica.tone.metal = (function replica$tone$metal(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17429 = arguments.length;
var i__4532__auto___17430 = (0);
while(true){
if((i__4532__auto___17430 < len__4531__auto___17429)){
args__4534__auto__.push((arguments[i__4532__auto___17430]));

var G__17431 = (i__4532__auto___17430 + (1));
i__4532__auto___17430 = G__17431;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.tone.metal.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.tone.metal.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__17426){
var map__17427 = p__17426;
var map__17427__$1 = ((((!((map__17427 == null)))?(((((map__17427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17427):map__17427);
var res = cljs.core.get.call(null,map__17427__$1,new cljs.core.Keyword(null,"res","res",-1395007879),(4000));
var a = cljs.core.get.call(null,map__17427__$1,new cljs.core.Keyword(null,"a","a",-2123407586),0.001);
var r = cljs.core.get.call(null,map__17427__$1,new cljs.core.Keyword(null,"r","r",-471384190),0.2);
var freq = cljs.core.get.call(null,map__17427__$1,new cljs.core.Keyword(null,"freq","freq",-1855845278),(200));
var __ = cljs.core.get.call(null,map__17427__$1,new cljs.core.Keyword(null,"--","--",-1406508824),new cljs.core.Symbol(null,"master","master",-1874447071,null));
var octs = cljs.core.get.call(null,map__17427__$1,new cljs.core.Keyword(null,"octs","octs",136821420));
var harm = cljs.core.get.call(null,map__17427__$1,new cljs.core.Keyword(null,"harm","harm",1565170924),5.1);
var __LT_ = cljs.core.get.call(null,map__17427__$1,new cljs.core.Keyword(null,"-<","-<",1635525807));
var modidx = cljs.core.get.call(null,map__17427__$1,new cljs.core.Keyword(null,"modidx","modidx",1879334676),(32));
var d = cljs.core.get.call(null,map__17427__$1,new cljs.core.Keyword(null,"d","d",1972142424),1.4);
return replica.tone.setrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id,(new Tone.MetalSynth(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"frequency","frequency",-1408891382),freq,new cljs.core.Keyword(null,"envelope","envelope",-236796318),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attack","attack",1957061788),a,new cljs.core.Keyword(null,"decay","decay",1036712184),d,new cljs.core.Keyword(null,"release","release",-1534371381),r], null),new cljs.core.Keyword(null,"harmonicity","harmonicity",697254201),harm,new cljs.core.Keyword(null,"modulationIndex","modulationIndex",-737747680),modidx,new cljs.core.Keyword(null,"resonance","resonance",2117117691),res,new cljs.core.Keyword(null,"octaves","octaves",955457820),1.5], null)))),new cljs.core.Keyword(null,"--","--",-1406508824),__,new cljs.core.Keyword(null,"-<","-<",1635525807),__LT_);
});

replica.tone.metal.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.tone.metal.cljs$lang$applyTo = (function (seq17424){
var G__17425 = cljs.core.first.call(null,seq17424);
var seq17424__$1 = cljs.core.next.call(null,seq17424);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17425,seq17424__$1);
});

/**
 * Plays a Synth
 */
replica.tone.p_BANG_ = (function replica$tone$p_BANG_(id,freq,dur,t,vel){
var s = replica.tone.getrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id);
var G__17432 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
switch (G__17432) {
case "Synth":
case "MonoSynth":
return s.triggerAttackRelease(freq,dur,t,vel);

break;
case "MetalSynth":
if(cljs.core.truth_(freq)){
s.frequency.value = freq;
} else {
}

return s.triggerAttackRelease(dur,t,vel);

break;
default:
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," can't be played so!"].join('');

}
});
/**
 * Triggers attack on a Synth
 */
replica.tone.on_BANG_ = (function replica$tone$on_BANG_(id,freq,t,vel){
var s = replica.tone.getrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id);
var G__17434 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
switch (G__17434) {
case "Synth":
case "MonoSynth":
return s.triggerAttack(freq,t,vel);

break;
case "PluckSynth":
return s.triggerAttack(freq,t);

break;
case "MetalSynth":
if(cljs.core.truth_(freq)){
s.frequency.value = freq;
} else {
}

return s.triggerAttack(t,vel);

break;
default:
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," can't be triggered so!"].join('');

}
});
/**
 * Releases a Synth
 */
replica.tone.off_BANG_ = (function replica$tone$off_BANG_(id,t){
return replica.tone.getrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id).triggerRelease(t);
});
/**
 * creates a Tonejs Buffer from url
 */
replica.tone.buf = (function replica$tone$buf(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17442 = arguments.length;
var i__4532__auto___17443 = (0);
while(true){
if((i__4532__auto___17443 < len__4531__auto___17442)){
args__4534__auto__.push((arguments[i__4532__auto___17443]));

var G__17444 = (i__4532__auto___17443 + (1));
i__4532__auto___17443 = G__17444;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.tone.buf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.tone.buf.cljs$core$IFn$_invoke$arity$variadic = (function (id,url,p__17439){
var map__17440 = p__17439;
var map__17440__$1 = ((((!((map__17440 == null)))?(((((map__17440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17440):map__17440);
var onload = cljs.core.get.call(null,map__17440__$1,new cljs.core.Keyword(null,"onload","onload",113170835));
var onerror = cljs.core.get.call(null,map__17440__$1,new cljs.core.Keyword(null,"onerror","onerror",781725030));
replica.tone.setrsrc.call(null,new cljs.core.Keyword(null,"buf","buf",-213913340),id,(new Tone.Buffer(url,onload,onerror)));

return replica.tone.getrsrc.call(null,new cljs.core.Keyword(null,"buf","buf",-213913340),id);
});

replica.tone.buf.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.tone.buf.cljs$lang$applyTo = (function (seq17436){
var G__17437 = cljs.core.first.call(null,seq17436);
var seq17436__$1 = cljs.core.next.call(null,seq17436);
var G__17438 = cljs.core.first.call(null,seq17436__$1);
var seq17436__$2 = cljs.core.next.call(null,seq17436__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17437,G__17438,seq17436__$2);
});

replica.tone.buf_from_any = (function replica$tone$buf_from_any(buf){
var buffer = ((cljs.core._EQ_.call(null,cljs.core.type.call(null,buf),cljs.core.Symbol))?replica.tone.getrsrc.call(null,buf):buf);
return buffer;
});
/**
 * creates a Tonejs GrainPlayer from the specified source buffer or url
 */
replica.tone.grn = (function replica$tone$grn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17452 = arguments.length;
var i__4532__auto___17453 = (0);
while(true){
if((i__4532__auto___17453 < len__4531__auto___17452)){
args__4534__auto__.push((arguments[i__4532__auto___17453]));

var G__17454 = (i__4532__auto___17453 + (1));
i__4532__auto___17453 = G__17454;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.tone.grn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.tone.grn.cljs$core$IFn$_invoke$arity$variadic = (function (id,src,p__17449){
var map__17450 = p__17449;
var map__17450__$1 = ((((!((map__17450 == null)))?(((((map__17450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17450):map__17450);
var onload = cljs.core.get.call(null,map__17450__$1,new cljs.core.Keyword(null,"onload","onload",113170835),((function (map__17450,map__17450__$1){
return (function (p1__17445_SHARP_){
return cljs.core.print_str.call(null,p1__17445_SHARP_," grn ready!");
});})(map__17450,map__17450__$1))
);
var __ = cljs.core.get.call(null,map__17450__$1,new cljs.core.Keyword(null,"--","--",-1406508824),new cljs.core.Symbol(null,"master","master",-1874447071,null));
var __LT_ = cljs.core.get.call(null,map__17450__$1,new cljs.core.Keyword(null,"-<","-<",1635525807));
return replica.tone.setrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id,(new Tone.GrainPlayer(replica.tone.buf_from_any.call(null,src),((function (map__17450,map__17450__$1,onload,__,__LT_){
return (function (){
replica.tone.connect.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ins","ins",-1021983570),id], null),__,__LT_);

return onload.call(null,id);
});})(map__17450,map__17450__$1,onload,__,__LT_))
)));
});

replica.tone.grn.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.tone.grn.cljs$lang$applyTo = (function (seq17446){
var G__17447 = cljs.core.first.call(null,seq17446);
var seq17446__$1 = cljs.core.next.call(null,seq17446);
var G__17448 = cljs.core.first.call(null,seq17446__$1);
var seq17446__$2 = cljs.core.next.call(null,seq17446__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17447,G__17448,seq17446__$2);
});

replica.tone.grnstart = (function replica$tone$grnstart(id,t,offset,dur){

return replica.tone.getrsrc.call(null,id).start(t,offset,dur);
});
replica.tone.grnstop = (function replica$tone$grnstop(id,t){

return replica.tone.getrsrc.call(null,id).stop(t);
});
/**
 * creates a Tonejs Convolver from the speficied IR source buffer or url
 */
replica.tone.conv = (function replica$tone$conv(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17462 = arguments.length;
var i__4532__auto___17463 = (0);
while(true){
if((i__4532__auto___17463 < len__4531__auto___17462)){
args__4534__auto__.push((arguments[i__4532__auto___17463]));

var G__17464 = (i__4532__auto___17463 + (1));
i__4532__auto___17463 = G__17464;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.tone.conv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.tone.conv.cljs$core$IFn$_invoke$arity$variadic = (function (id,src,p__17459){
var map__17460 = p__17459;
var map__17460__$1 = ((((!((map__17460 == null)))?(((((map__17460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17460):map__17460);
var onload = cljs.core.get.call(null,map__17460__$1,new cljs.core.Keyword(null,"onload","onload",113170835),((function (map__17460,map__17460__$1){
return (function (p1__17455_SHARP_){
return cljs.core.print_str.call(null,p1__17455_SHARP_," conv ready!");
});})(map__17460,map__17460__$1))
);
var __ = cljs.core.get.call(null,map__17460__$1,new cljs.core.Keyword(null,"--","--",-1406508824),new cljs.core.Symbol(null,"master","master",-1874447071,null));
var __LT_ = cljs.core.get.call(null,map__17460__$1,new cljs.core.Keyword(null,"-<","-<",1635525807));
return replica.tone.setrsrc.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),id,(new Tone.Convolver(replica.tone.buf_from_any.call(null,src),((function (map__17460,map__17460__$1,onload,__,__LT_){
return (function (){
replica.tone.connect.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),id], null),__,__LT_);

return onload.call(null,id);
});})(map__17460,map__17460__$1,onload,__,__LT_))
)));
});

replica.tone.conv.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.tone.conv.cljs$lang$applyTo = (function (seq17456){
var G__17457 = cljs.core.first.call(null,seq17456);
var seq17456__$1 = cljs.core.next.call(null,seq17456);
var G__17458 = cljs.core.first.call(null,seq17456__$1);
var seq17456__$2 = cljs.core.next.call(null,seq17456__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17457,G__17458,seq17456__$2);
});

/**
 * disconnects source from element(s) by Object or index.
 */
replica.tone.discn = (function replica$tone$discn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17468 = arguments.length;
var i__4532__auto___17469 = (0);
while(true){
if((i__4532__auto___17469 < len__4531__auto___17468)){
args__4534__auto__.push((arguments[i__4532__auto___17469]));

var G__17470 = (i__4532__auto___17469 + (1));
i__4532__auto___17469 = G__17470;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.tone.discn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.tone.discn.cljs$core$IFn$_invoke$arity$variadic = (function (src,disconnect_from){
var elm = replica.tone.getrsrc.call(null,src);
return cljs.core.map.call(null,((function (elm){
return (function (p1__17465_SHARP_){
return elm.disconnect(p1__17465_SHARP_);
});})(elm))
,disconnect_from);
});

replica.tone.discn.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.tone.discn.cljs$lang$applyTo = (function (seq17466){
var G__17467 = cljs.core.first.call(null,seq17466);
var seq17466__$1 = cljs.core.next.call(null,seq17466);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17467,seq17466__$1);
});

/**
 * Schedules an event repeated on a time interval.
 */
replica.tone.schr_BANG_ = (function replica$tone$schr_BANG_(interval,function$){
return Tone.Transport.scheduleRepeat(function$,interval);
});
replica.tone.start_BANG_ = (function replica$tone$start_BANG_(){
Tone.Transport.start();

cljs.core.swap_BANG_.call(null,replica.tone.rsrcs,cljs.core.assoc,new cljs.core.Keyword(null,"run","run",-1821166653),true);

return "started!";
});
replica.tone.stop_BANG_ = (function replica$tone$stop_BANG_(){
Tone.Transport.stop();

cljs.core.swap_BANG_.call(null,replica.tone.rsrcs,cljs.core.assoc,new cljs.core.Keyword(null,"run","run",-1821166653),false);

return "stopped!";
});
replica.tone.go_BANG_ = (function replica$tone$go_BANG_(seconds){
return Tone.Transport.seconds = seconds;
});
/**
 * returns the transport position in seconds.
 */
replica.tone.secs = (function replica$tone$secs(){
return Tone.Transport.seconds;
});
/**
 * returns the transport position in Bars:Beats:Sixteenths
 */
replica.tone.pos = (function replica$tone$pos(){
return Tone.Transport.position;
});
replica.tone.run_QMARK_ = (function replica$tone$run_QMARK_(){
return new cljs.core.Keyword(null,"run","run",-1821166653).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replica.tone.rsrcs));
});
replica.tone.cancel_BANG_ = (function replica$tone$cancel_BANG_(var_args){
var G__17472 = arguments.length;
switch (G__17472) {
case 0:
return replica.tone.cancel_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return replica.tone.cancel_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replica.tone.cancel_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
Tone.Transport.cancel();

cljs.core.swap_BANG_.call(null,replica.tone.rsrcs,new cljs.core.Keyword(null,"loops","loops",-1766681555),cljs.core.PersistentArrayMap.EMPTY);

return "All schedules cancelled.";
});

replica.tone.cancel_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (id){
if(typeof id === 'number'){
return Tone.Transport.clear(id);
} else {
replica.tone.getrsrc.call(null,new cljs.core.Keyword(null,"loops","loops",-1766681555),id).dispose();

return cljs.core.swap_BANG_.call(null,replica.tone.rsrcs,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loops","loops",-1766681555),id], null),null);
}
});

replica.tone.cancel_BANG_.cljs$lang$maxFixedArity = 1;

/**
 * Creates a new loop with defined start and end.
 */
replica.tone.lp = (function replica$tone$lp(id,function$,interval,start_time,end_time){
var temp__5457__auto___17474 = replica.tone.getrsrc.call(null,new cljs.core.Keyword(null,"loops","loops",-1766681555),id);
if(cljs.core.truth_(temp__5457__auto___17474)){
var lp_17475 = temp__5457__auto___17474;
lp_17475.dispose();
} else {
}

return cljs.core.swap_BANG_.call(null,replica.tone.rsrcs,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loops","loops",-1766681555),id], null),(new Tone.Loop(function$,interval)).start(start_time).stop(end_time));
});
/**
 * ramps to a new Tempo in bpm within the desired time.
 */
replica.tone.st_BANG_ = (function replica$tone$st_BANG_(target_bpm,ramp_time){
tempo = target_bpm;

return Tone.Transport.bpm.rampTo(target_bpm,(cljs.core.truth_(cljs.core.every_pred.call(null,cljs.core.number_QMARK_,cljs.core.partial.call(null,cljs.core._LT_,(0))).call(null,ramp_time))?ramp_time:0.001));
});
replica.tone.routes = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"schr","schr",-1992784341,null),new cljs.core.Symbol(null,"st","st",-1199179941,null),new cljs.core.Symbol(null,"lp","lp",-1500292755,null),new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"gp","gp",-238727254,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),new cljs.core.Symbol(null,"cancel","cancel",-323556833,null),new cljs.core.Symbol(null,"conv","conv",-1669507879,null),new cljs.core.Symbol(null,"off","off",-2047994980,null),new cljs.core.Symbol(null,"grn","grn",-756326672,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"run?","run?",-1901812910,null),new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.Symbol(null,"monos","monos",665668743,null),new cljs.core.Symbol(null,"on","on",1814405471,null),new cljs.core.Symbol(null,"metal","metal",-108536953,null),new cljs.core.Symbol(null,"-<","-<",-1018909962,null),new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"gstop","gstop",849239037,null),new cljs.core.Symbol(null,"go","go",1493584872,null),new cljs.core.Symbol(null,"gstart","gstart",-690926460,null),new cljs.core.Symbol(null,"synth","synth",777830680,null),new cljs.core.Symbol(null,"--","--",234022703,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"sp","sp",-1631085811,null),new cljs.core.Symbol(null,"secs","secs",-1122105678,null),new cljs.core.Symbol(null,"stop","stop",-500379815,null),new cljs.core.Symbol(null,"g","g",-916345864,null)],[new cljs.core.Symbol(null,"schr!","schr!",210627709,null),new cljs.core.Symbol(null,"st!","st!",422024129,null),new cljs.core.Symbol(null,"lp","lp",-1500292755,null),new cljs.core.Symbol(null,"do!","do!",-522949760,null),new cljs.core.Symbol(null,"getprops","getprops",-232220813,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),new cljs.core.Symbol(null,"cancel!","cancel!",963993008,null),new cljs.core.Symbol(null,"conv","conv",-1669507879,null),new cljs.core.Symbol(null,"off!","off!",1454675678,null),new cljs.core.Symbol(null,"grn","grn",-756326672,null),new cljs.core.Symbol(null,"p!","p!",1194187378,null),new cljs.core.Symbol(null,"run?","run?",-1901812910,null),new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.Symbol(null,"monos","monos",665668743,null),new cljs.core.Symbol(null,"on!","on!",-1979401336,null),new cljs.core.Symbol(null,"metal","metal",-108536953,null),new cljs.core.Symbol(null,"fan","fan",300705506,null),new cljs.core.Symbol(null,"start!","start!",1571930471,null),new cljs.core.Symbol(null,"grnstop","grnstop",1449719600,null),new cljs.core.Symbol(null,"go!","go!",1742247986,null),new cljs.core.Symbol(null,"grnstart","grnstart",-1175524468,null),new cljs.core.Symbol(null,"synth","synth",777830680,null),new cljs.core.Symbol(null,"chain","chain",1656162556,null),new cljs.core.Symbol(null,"setrsrc","setrsrc",-99527795,null),new cljs.core.Symbol(null,"setprops!","setprops!",205303819,null),new cljs.core.Symbol(null,"secs","secs",-1122105678,null),new cljs.core.Symbol(null,"stop!","stop!",-1927800846,null),new cljs.core.Symbol(null,"getrsrc","getrsrc",-32417159,null)]);
/**
 * This is the route to almost all of the ToneJS built-in functionality inside REPLiCA.
 */
replica.tone.t = (function replica$tone$t(var_args){
var args__4534__auto__ = [];
var len__4531__auto___17479 = arguments.length;
var i__4532__auto___17480 = (0);
while(true){
if((i__4532__auto___17480 < len__4531__auto___17479)){
args__4534__auto__.push((arguments[i__4532__auto___17480]));

var G__17481 = (i__4532__auto___17480 + (1));
i__4532__auto___17480 = G__17481;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.tone.t.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.tone.t.cljs$core$IFn$_invoke$arity$variadic = (function (route,args){
var G__17478 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join('');
switch (G__17478) {
case "doc":
return replica.utils.doc_commands.call(null,new cljs.core.Symbol("replica.tone","t","replica.tone/t",-1082667992,null),replica.tone.routes,new cljs.core.Symbol(null,"t","t",242699008,null));

break;
default:
return cljs.core.apply.call(null,replica.utils.proc_BANG_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"t","t",242699008,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join(''),args);

}
});

replica.tone.t.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.tone.t.cljs$lang$applyTo = (function (seq17476){
var G__17477 = cljs.core.first.call(null,seq17476);
var seq17476__$1 = cljs.core.next.call(null,seq17476);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17477,seq17476__$1);
});

replica.utils.add_routes_BANG_.call(null,new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"replica.tone","replica.tone",768408542,null),replica.tone.routes);

//# sourceMappingURL=tone.js.map
