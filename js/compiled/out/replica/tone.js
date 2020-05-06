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
var G__11713 = arguments.length;
switch (G__11713) {
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
var len__4531__auto___11717 = arguments.length;
var i__4532__auto___11718 = (0);
while(true){
if((i__4532__auto___11718 < len__4531__auto___11717)){
args__4534__auto__.push((arguments[i__4532__auto___11718]));

var G__11719 = (i__4532__auto___11718 + (1));
i__4532__auto___11718 = G__11719;
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
replica.tone.fan.cljs$lang$applyTo = (function (seq11715){
var G__11716 = cljs.core.first.call(null,seq11715);
var seq11715__$1 = cljs.core.next.call(null,seq11715);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11716,seq11715__$1);
});

/**
 * chains from source through elements by ID.
 */
replica.tone.chain = (function replica$tone$chain(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11722 = arguments.length;
var i__4532__auto___11723 = (0);
while(true){
if((i__4532__auto___11723 < len__4531__auto___11722)){
args__4534__auto__.push((arguments[i__4532__auto___11723]));

var G__11724 = (i__4532__auto___11723 + (1));
i__4532__auto___11723 = G__11724;
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
replica.tone.chain.cljs$lang$applyTo = (function (seq11720){
var G__11721 = cljs.core.first.call(null,seq11720);
var seq11720__$1 = cljs.core.next.call(null,seq11720);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11721,seq11720__$1);
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
var len__4531__auto___11732 = arguments.length;
var i__4532__auto___11733 = (0);
while(true){
if((i__4532__auto___11733 < len__4531__auto___11732)){
args__4534__auto__.push((arguments[i__4532__auto___11733]));

var G__11734 = (i__4532__auto___11733 + (1));
i__4532__auto___11733 = G__11734;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return replica.tone.setrsrc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

replica.tone.setrsrc.cljs$core$IFn$_invoke$arity$variadic = (function (k,id,rsrc,p__11729){
var map__11730 = p__11729;
var map__11730__$1 = ((((!((map__11730 == null)))?(((((map__11730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11730):map__11730);
var __ = cljs.core.get.call(null,map__11730__$1,new cljs.core.Keyword(null,"--","--",-1406508824));
var __LT_ = cljs.core.get.call(null,map__11730__$1,new cljs.core.Keyword(null,"-<","-<",1635525807));
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
replica.tone.setrsrc.cljs$lang$applyTo = (function (seq11725){
var G__11726 = cljs.core.first.call(null,seq11725);
var seq11725__$1 = cljs.core.next.call(null,seq11725);
var G__11727 = cljs.core.first.call(null,seq11725__$1);
var seq11725__$2 = cljs.core.next.call(null,seq11725__$1);
var G__11728 = cljs.core.first.call(null,seq11725__$2);
var seq11725__$3 = cljs.core.next.call(null,seq11725__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11726,G__11727,G__11728,seq11725__$3);
});

replica.tone.setprops_BANG_ = (function replica$tone$setprops_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11737 = arguments.length;
var i__4532__auto___11738 = (0);
while(true){
if((i__4532__auto___11738 < len__4531__auto___11737)){
args__4534__auto__.push((arguments[i__4532__auto___11738]));

var G__11739 = (i__4532__auto___11738 + (1));
i__4532__auto___11738 = G__11739;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.tone.setprops_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.tone.setprops_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (id,val_path_to_props){
return cljs.core.apply.call(null,replica.utils.set_js_prop_BANG_,replica.tone.getrsrc.call(null,id),val_path_to_props);
});

replica.tone.setprops_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.tone.setprops_BANG_.cljs$lang$applyTo = (function (seq11735){
var G__11736 = cljs.core.first.call(null,seq11735);
var seq11735__$1 = cljs.core.next.call(null,seq11735);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11736,seq11735__$1);
});

replica.tone.getpaths = (function replica$tone$getpaths(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11742 = arguments.length;
var i__4532__auto___11743 = (0);
while(true){
if((i__4532__auto___11743 < len__4531__auto___11742)){
args__4534__auto__.push((arguments[i__4532__auto___11743]));

var G__11744 = (i__4532__auto___11743 + (1));
i__4532__auto___11743 = G__11744;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.tone.getpaths.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.tone.getpaths.cljs$core$IFn$_invoke$arity$variadic = (function (id,pre_path){
return cljs.core.apply.call(null,replica.utils.get_js_paths,replica.tone.getrsrc.call(null,id),pre_path);
});

replica.tone.getpaths.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.tone.getpaths.cljs$lang$applyTo = (function (seq11740){
var G__11741 = cljs.core.first.call(null,seq11740);
var seq11740__$1 = cljs.core.next.call(null,seq11740);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11741,seq11740__$1);
});

/**
 * Creates a new Tone.Synth
 */
replica.tone.synth = (function replica$tone$synth(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11750 = arguments.length;
var i__4532__auto___11751 = (0);
while(true){
if((i__4532__auto___11751 < len__4531__auto___11750)){
args__4534__auto__.push((arguments[i__4532__auto___11751]));

var G__11752 = (i__4532__auto___11751 + (1));
i__4532__auto___11751 = G__11752;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.tone.synth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.tone.synth.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__11747){
var map__11748 = p__11747;
var map__11748__$1 = ((((!((map__11748 == null)))?(((((map__11748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11748):map__11748);
var osc = cljs.core.get.call(null,map__11748__$1,new cljs.core.Keyword(null,"osc","osc",218527081),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"triangle","triangle",-187845140,null)], null));
var a = cljs.core.get.call(null,map__11748__$1,new cljs.core.Keyword(null,"a","a",-2123407586),0.005);
var d = cljs.core.get.call(null,map__11748__$1,new cljs.core.Keyword(null,"d","d",1972142424),0.1);
var s = cljs.core.get.call(null,map__11748__$1,new cljs.core.Keyword(null,"s","s",1705939918),0.3);
var r = cljs.core.get.call(null,map__11748__$1,new cljs.core.Keyword(null,"r","r",-471384190),(1));
var __ = cljs.core.get.call(null,map__11748__$1,new cljs.core.Keyword(null,"--","--",-1406508824),new cljs.core.Symbol(null,"master","master",-1874447071,null));
var __LT_ = cljs.core.get.call(null,map__11748__$1,new cljs.core.Keyword(null,"-<","-<",1635525807));
return replica.tone.setrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id,(new Tone.Synth(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oscillator","oscillator",-1200469980),osc,new cljs.core.Keyword(null,"envelope","envelope",-236796318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attack","attack",1957061788),a,new cljs.core.Keyword(null,"decay","decay",1036712184),d,new cljs.core.Keyword(null,"sustain","sustain",1604277844),s,new cljs.core.Keyword(null,"release","release",-1534371381),r], null)], null)))),new cljs.core.Keyword(null,"--","--",-1406508824),__,new cljs.core.Keyword(null,"-<","-<",1635525807),__LT_);
});

replica.tone.synth.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.tone.synth.cljs$lang$applyTo = (function (seq11745){
var G__11746 = cljs.core.first.call(null,seq11745);
var seq11745__$1 = cljs.core.next.call(null,seq11745);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11746,seq11745__$1);
});

/**
 * Creates a new Tone.MonoSynth
 */
replica.tone.monos = (function replica$tone$monos(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11758 = arguments.length;
var i__4532__auto___11759 = (0);
while(true){
if((i__4532__auto___11759 < len__4531__auto___11758)){
args__4534__auto__.push((arguments[i__4532__auto___11759]));

var G__11760 = (i__4532__auto___11759 + (1));
i__4532__auto___11759 = G__11760;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.tone.monos.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.tone.monos.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__11755){
var map__11756 = p__11755;
var map__11756__$1 = ((((!((map__11756 == null)))?(((((map__11756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11756):map__11756);
var filt = cljs.core.get.call(null,map__11756__$1,new cljs.core.Keyword(null,"filt","filt",169229082),new cljs.core.Symbol(null,"lowpass","lowpass",802254948,null));
var fs = cljs.core.get.call(null,map__11756__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244),0.3);
var a = cljs.core.get.call(null,map__11756__$1,new cljs.core.Keyword(null,"a","a",-2123407586),0.005);
var fa = cljs.core.get.call(null,map__11756__$1,new cljs.core.Keyword(null,"fa","fa",484981183),0.06);
var fr = cljs.core.get.call(null,map__11756__$1,new cljs.core.Keyword(null,"fr","fr",1577713888),(2));
var f8s = cljs.core.get.call(null,map__11756__$1,new cljs.core.Keyword(null,"f8s","f8s",-1090773535),(7));
var q = cljs.core.get.call(null,map__11756__$1,new cljs.core.Keyword(null,"q","q",689001697),(6));
var r = cljs.core.get.call(null,map__11756__$1,new cljs.core.Keyword(null,"r","r",-471384190),(1));
var ffreq = cljs.core.get.call(null,map__11756__$1,new cljs.core.Keyword(null,"ffreq","ffreq",-1705674076),(200));
var roff = cljs.core.get.call(null,map__11756__$1,new cljs.core.Keyword(null,"roff","roff",-1380134394),(-24));
var fexp = cljs.core.get.call(null,map__11756__$1,new cljs.core.Keyword(null,"fexp","fexp",-300455130),(2));
var fd = cljs.core.get.call(null,map__11756__$1,new cljs.core.Keyword(null,"fd","fd",-1524403000),0.2);
var __ = cljs.core.get.call(null,map__11756__$1,new cljs.core.Keyword(null,"--","--",-1406508824),new cljs.core.Symbol(null,"master","master",-1874447071,null));
var osc = cljs.core.get.call(null,map__11756__$1,new cljs.core.Keyword(null,"osc","osc",218527081),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"square","square",-1842001092,null)], null));
var s = cljs.core.get.call(null,map__11756__$1,new cljs.core.Keyword(null,"s","s",1705939918),0.9);
var __LT_ = cljs.core.get.call(null,map__11756__$1,new cljs.core.Keyword(null,"-<","-<",1635525807));
var d = cljs.core.get.call(null,map__11756__$1,new cljs.core.Keyword(null,"d","d",1972142424),0.1);
return replica.tone.setrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id,(new Tone.MonoSynth(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"oscillator","oscillator",-1200469980),osc,new cljs.core.Keyword(null,"envelope","envelope",-236796318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attack","attack",1957061788),a,new cljs.core.Keyword(null,"decay","decay",1036712184),d,new cljs.core.Keyword(null,"sustain","sustain",1604277844),s,new cljs.core.Keyword(null,"release","release",-1534371381),r], null),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),filt,new cljs.core.Keyword(null,"Q","Q",663320520),q,new cljs.core.Keyword(null,"rolloff","rolloff",-715733667),roff], null),new cljs.core.Keyword(null,"filterEnvelope","filterEnvelope",-898174700),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"attack","attack",1957061788),fa,new cljs.core.Keyword(null,"decay","decay",1036712184),fd,new cljs.core.Keyword(null,"sustain","sustain",1604277844),fs,new cljs.core.Keyword(null,"release","release",-1534371381),fr,new cljs.core.Keyword(null,"baseFrequency","baseFrequency",-1013443755),ffreq,new cljs.core.Keyword(null,"octaves","octaves",955457820),f8s,new cljs.core.Keyword(null,"exponent","exponent",2083463617),fexp], null)], null)))),new cljs.core.Keyword(null,"--","--",-1406508824),__,new cljs.core.Keyword(null,"-<","-<",1635525807),__LT_);
});

replica.tone.monos.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.tone.monos.cljs$lang$applyTo = (function (seq11753){
var G__11754 = cljs.core.first.call(null,seq11753);
var seq11753__$1 = cljs.core.next.call(null,seq11753);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11754,seq11753__$1);
});

/**
 * Creates a new Tone.MetalSynth
 */
replica.tone.metal = (function replica$tone$metal(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11766 = arguments.length;
var i__4532__auto___11767 = (0);
while(true){
if((i__4532__auto___11767 < len__4531__auto___11766)){
args__4534__auto__.push((arguments[i__4532__auto___11767]));

var G__11768 = (i__4532__auto___11767 + (1));
i__4532__auto___11767 = G__11768;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.tone.metal.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.tone.metal.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__11763){
var map__11764 = p__11763;
var map__11764__$1 = ((((!((map__11764 == null)))?(((((map__11764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11764):map__11764);
var res = cljs.core.get.call(null,map__11764__$1,new cljs.core.Keyword(null,"res","res",-1395007879),(4000));
var a = cljs.core.get.call(null,map__11764__$1,new cljs.core.Keyword(null,"a","a",-2123407586),0.001);
var r = cljs.core.get.call(null,map__11764__$1,new cljs.core.Keyword(null,"r","r",-471384190),0.2);
var freq = cljs.core.get.call(null,map__11764__$1,new cljs.core.Keyword(null,"freq","freq",-1855845278),(200));
var __ = cljs.core.get.call(null,map__11764__$1,new cljs.core.Keyword(null,"--","--",-1406508824),new cljs.core.Symbol(null,"master","master",-1874447071,null));
var octs = cljs.core.get.call(null,map__11764__$1,new cljs.core.Keyword(null,"octs","octs",136821420));
var harm = cljs.core.get.call(null,map__11764__$1,new cljs.core.Keyword(null,"harm","harm",1565170924),5.1);
var __LT_ = cljs.core.get.call(null,map__11764__$1,new cljs.core.Keyword(null,"-<","-<",1635525807));
var modidx = cljs.core.get.call(null,map__11764__$1,new cljs.core.Keyword(null,"modidx","modidx",1879334676),(32));
var d = cljs.core.get.call(null,map__11764__$1,new cljs.core.Keyword(null,"d","d",1972142424),1.4);
return replica.tone.setrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id,(new Tone.MetalSynth(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"frequency","frequency",-1408891382),freq,new cljs.core.Keyword(null,"envelope","envelope",-236796318),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attack","attack",1957061788),a,new cljs.core.Keyword(null,"decay","decay",1036712184),d,new cljs.core.Keyword(null,"release","release",-1534371381),r], null),new cljs.core.Keyword(null,"harmonicity","harmonicity",697254201),harm,new cljs.core.Keyword(null,"modulationIndex","modulationIndex",-737747680),modidx,new cljs.core.Keyword(null,"resonance","resonance",2117117691),res,new cljs.core.Keyword(null,"octaves","octaves",955457820),1.5], null)))),new cljs.core.Keyword(null,"--","--",-1406508824),__,new cljs.core.Keyword(null,"-<","-<",1635525807),__LT_);
});

replica.tone.metal.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.tone.metal.cljs$lang$applyTo = (function (seq11761){
var G__11762 = cljs.core.first.call(null,seq11761);
var seq11761__$1 = cljs.core.next.call(null,seq11761);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11762,seq11761__$1);
});

/**
 * Plays a Synth
 */
replica.tone.p_BANG_ = (function replica$tone$p_BANG_(id,freq,dur,t,vel){
var s = replica.tone.getrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id);
var G__11769 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
switch (G__11769) {
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
var G__11771 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
switch (G__11771) {
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
var len__4531__auto___11779 = arguments.length;
var i__4532__auto___11780 = (0);
while(true){
if((i__4532__auto___11780 < len__4531__auto___11779)){
args__4534__auto__.push((arguments[i__4532__auto___11780]));

var G__11781 = (i__4532__auto___11780 + (1));
i__4532__auto___11780 = G__11781;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.tone.buf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.tone.buf.cljs$core$IFn$_invoke$arity$variadic = (function (id,url,p__11776){
var map__11777 = p__11776;
var map__11777__$1 = ((((!((map__11777 == null)))?(((((map__11777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11777):map__11777);
var onload = cljs.core.get.call(null,map__11777__$1,new cljs.core.Keyword(null,"onload","onload",113170835));
var onerror = cljs.core.get.call(null,map__11777__$1,new cljs.core.Keyword(null,"onerror","onerror",781725030));
replica.tone.setrsrc.call(null,new cljs.core.Keyword(null,"buf","buf",-213913340),id,(new Tone.Buffer(url,onload,onerror)));

return replica.tone.getrsrc.call(null,new cljs.core.Keyword(null,"buf","buf",-213913340),id);
});

replica.tone.buf.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.tone.buf.cljs$lang$applyTo = (function (seq11773){
var G__11774 = cljs.core.first.call(null,seq11773);
var seq11773__$1 = cljs.core.next.call(null,seq11773);
var G__11775 = cljs.core.first.call(null,seq11773__$1);
var seq11773__$2 = cljs.core.next.call(null,seq11773__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11774,G__11775,seq11773__$2);
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
var len__4531__auto___11788 = arguments.length;
var i__4532__auto___11789 = (0);
while(true){
if((i__4532__auto___11789 < len__4531__auto___11788)){
args__4534__auto__.push((arguments[i__4532__auto___11789]));

var G__11790 = (i__4532__auto___11789 + (1));
i__4532__auto___11789 = G__11790;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.tone.grn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.tone.grn.cljs$core$IFn$_invoke$arity$variadic = (function (id,src,p__11785){
var map__11786 = p__11785;
var map__11786__$1 = ((((!((map__11786 == null)))?(((((map__11786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11786):map__11786);
var onload = cljs.core.get.call(null,map__11786__$1,new cljs.core.Keyword(null,"onload","onload",113170835));
var __ = cljs.core.get.call(null,map__11786__$1,new cljs.core.Keyword(null,"--","--",-1406508824),new cljs.core.Symbol(null,"master","master",-1874447071,null));
var __LT_ = cljs.core.get.call(null,map__11786__$1,new cljs.core.Keyword(null,"-<","-<",1635525807));
return replica.tone.setrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id,(new Tone.GrainPlayer(replica.tone.buf_from_any.call(null,src),((function (map__11786,map__11786__$1,onload,__,__LT_){
return (function (){
replica.tone.chain.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ins","ins",-1021983570),id], null),__);

return replica.tone.fan.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ins","ins",-1021983570),id], null),__LT_);
});})(map__11786,map__11786__$1,onload,__,__LT_))
)));
});

replica.tone.grn.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.tone.grn.cljs$lang$applyTo = (function (seq11782){
var G__11783 = cljs.core.first.call(null,seq11782);
var seq11782__$1 = cljs.core.next.call(null,seq11782);
var G__11784 = cljs.core.first.call(null,seq11782__$1);
var seq11782__$2 = cljs.core.next.call(null,seq11782__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11783,G__11784,seq11782__$2);
});

replica.tone.grnst = (function replica$tone$grnst(id,t,offset,dur){

return replica.tone.getrsrc.call(null,id).start(t,offset,dur);
});
/**
 * creates a Tonejs Convolver from the speficied IR source buffer or url
 */
replica.tone.conv = (function replica$tone$conv(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11797 = arguments.length;
var i__4532__auto___11798 = (0);
while(true){
if((i__4532__auto___11798 < len__4531__auto___11797)){
args__4534__auto__.push((arguments[i__4532__auto___11798]));

var G__11799 = (i__4532__auto___11798 + (1));
i__4532__auto___11798 = G__11799;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.tone.conv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.tone.conv.cljs$core$IFn$_invoke$arity$variadic = (function (id,src,p__11794){
var map__11795 = p__11794;
var map__11795__$1 = ((((!((map__11795 == null)))?(((((map__11795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11795):map__11795);
var onload = cljs.core.get.call(null,map__11795__$1,new cljs.core.Keyword(null,"onload","onload",113170835));
var __ = cljs.core.get.call(null,map__11795__$1,new cljs.core.Keyword(null,"--","--",-1406508824),new cljs.core.Symbol(null,"master","master",-1874447071,null));
var __LT_ = cljs.core.get.call(null,map__11795__$1,new cljs.core.Keyword(null,"-<","-<",1635525807));
return replica.tone.setrsrc.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),id,(new Tone.Convolver(replica.tone.buf_from_any.call(null,src),((function (map__11795,map__11795__$1,onload,__,__LT_){
return (function (){
replica.tone.chain.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),id], null),__);

return replica.tone.fan.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),id], null),__LT_);
});})(map__11795,map__11795__$1,onload,__,__LT_))
)));
});

replica.tone.conv.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.tone.conv.cljs$lang$applyTo = (function (seq11791){
var G__11792 = cljs.core.first.call(null,seq11791);
var seq11791__$1 = cljs.core.next.call(null,seq11791);
var G__11793 = cljs.core.first.call(null,seq11791__$1);
var seq11791__$2 = cljs.core.next.call(null,seq11791__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11792,G__11793,seq11791__$2);
});

/**
 * disconnects source from element(s) by Object or index.
 */
replica.tone.discn = (function replica$tone$discn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11803 = arguments.length;
var i__4532__auto___11804 = (0);
while(true){
if((i__4532__auto___11804 < len__4531__auto___11803)){
args__4534__auto__.push((arguments[i__4532__auto___11804]));

var G__11805 = (i__4532__auto___11804 + (1));
i__4532__auto___11804 = G__11805;
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
return (function (p1__11800_SHARP_){
return elm.disconnect(p1__11800_SHARP_);
});})(elm))
,disconnect_from);
});

replica.tone.discn.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.tone.discn.cljs$lang$applyTo = (function (seq11801){
var G__11802 = cljs.core.first.call(null,seq11801);
var seq11801__$1 = cljs.core.next.call(null,seq11801);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11802,seq11801__$1);
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
replica.tone.run_QMARK_ = (function replica$tone$run_QMARK_(){
return new cljs.core.Keyword(null,"run","run",-1821166653).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replica.tone.rsrcs));
});
replica.tone.cancel_BANG_ = (function replica$tone$cancel_BANG_(var_args){
var G__11807 = arguments.length;
switch (G__11807) {
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
replica.tone.lp = (function replica$tone$lp(id,interval,start_time,end_time,function$){
var temp__5457__auto___11809 = replica.tone.getrsrc.call(null,new cljs.core.Keyword(null,"loops","loops",-1766681555),id);
if(cljs.core.truth_(temp__5457__auto___11809)){
var lp_11810 = temp__5457__auto___11809;
lp_11810.dispose();
} else {
}

return cljs.core.swap_BANG_.call(null,replica.tone.rsrcs,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loops","loops",-1766681555),id], null),(new Tone.Loop(function$,interval)).start(start_time).stop(end_time));
});
/**
 * ramps to a new Tempo in bpm within the desired time.
 */
replica.tone.st_BANG_ = (function replica$tone$st_BANG_(target_bpm,ramp_time){
return Tone.Transport.bpm.rampTo(target_bpm,(cljs.core.truth_(cljs.core.every_pred.call(null,cljs.core.number_QMARK_,cljs.core.partial.call(null,cljs.core._LT_,(0))).call(null,ramp_time))?ramp_time:0.001));
});
replica.tone.routes = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"schr","schr",-1992784341,null),new cljs.core.Symbol(null,"st","st",-1199179941,null),new cljs.core.Symbol(null,"lp","lp",-1500292755,null),new cljs.core.Symbol(null,"gp","gp",-238727254,null),new cljs.core.Symbol(null,"cancel","cancel",-323556833,null),new cljs.core.Symbol(null,"conv","conv",-1669507879,null),new cljs.core.Symbol(null,"grnst","grnst",-1413828595,null),new cljs.core.Symbol(null,"off","off",-2047994980,null),new cljs.core.Symbol(null,"grn","grn",-756326672,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"run?","run?",-1901812910,null),new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.Symbol(null,"monos","monos",665668743,null),new cljs.core.Symbol(null,"on","on",1814405471,null),new cljs.core.Symbol(null,"metal","metal",-108536953,null),new cljs.core.Symbol(null,"-<","-<",-1018909962,null),new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"go","go",1493584872,null),new cljs.core.Symbol(null,"synth","synth",777830680,null),new cljs.core.Symbol(null,"--","--",234022703,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"sp","sp",-1631085811,null),new cljs.core.Symbol(null,"stop","stop",-500379815,null),new cljs.core.Symbol(null,"g","g",-916345864,null)],[new cljs.core.Symbol(null,"schr!","schr!",210627709,null),new cljs.core.Symbol(null,"st!","st!",422024129,null),new cljs.core.Symbol(null,"lp","lp",-1500292755,null),new cljs.core.Symbol(null,"getpaths","getpaths",-193749698,null),new cljs.core.Symbol(null,"cancel!","cancel!",963993008,null),new cljs.core.Symbol(null,"conv","conv",-1669507879,null),new cljs.core.Symbol(null,"grnst","grnst",-1413828595,null),new cljs.core.Symbol(null,"off!","off!",1454675678,null),new cljs.core.Symbol(null,"grn","grn",-756326672,null),new cljs.core.Symbol(null,"p!","p!",1194187378,null),new cljs.core.Symbol(null,"run?","run?",-1901812910,null),new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.Symbol(null,"monos","monos",665668743,null),new cljs.core.Symbol(null,"on!","on!",-1979401336,null),new cljs.core.Symbol(null,"metal","metal",-108536953,null),new cljs.core.Symbol(null,"fan","fan",300705506,null),new cljs.core.Symbol(null,"start!","start!",1571930471,null),new cljs.core.Symbol(null,"go!","go!",1742247986,null),new cljs.core.Symbol(null,"synth","synth",777830680,null),new cljs.core.Symbol(null,"chain","chain",1656162556,null),new cljs.core.Symbol(null,"setrsrc","setrsrc",-99527795,null),new cljs.core.Symbol(null,"setprops!","setprops!",205303819,null),new cljs.core.Symbol(null,"stop!","stop!",-1927800846,null),new cljs.core.Symbol(null,"getrsrc","getrsrc",-32417159,null)]);
/**
 * This is the route to almost all of the ToneJS built-in functionality inside REPLiCA.
 */
replica.tone.t = (function replica$tone$t(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11814 = arguments.length;
var i__4532__auto___11815 = (0);
while(true){
if((i__4532__auto___11815 < len__4531__auto___11814)){
args__4534__auto__.push((arguments[i__4532__auto___11815]));

var G__11816 = (i__4532__auto___11815 + (1));
i__4532__auto___11815 = G__11816;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.tone.t.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.tone.t.cljs$core$IFn$_invoke$arity$variadic = (function (route,args){
var G__11813 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join('');
switch (G__11813) {
case "doc":
return replica.utils.doc_commands.call(null,new cljs.core.Symbol("replica.tone","t","replica.tone/t",-1082667992,null),replica.tone.routes,new cljs.core.Symbol(null,"t","t",242699008,null));

break;
default:
return cljs.core.apply.call(null,replica.utils.proc_BANG_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"t","t",242699008,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join(''),args);

}
});

replica.tone.t.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.tone.t.cljs$lang$applyTo = (function (seq11811){
var G__11812 = cljs.core.first.call(null,seq11811);
var seq11811__$1 = cljs.core.next.call(null,seq11811);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11812,seq11811__$1);
});

replica.utils.add_routes_BANG_.call(null,new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"replica.tone","replica.tone",768408542,null),replica.tone.routes);

//# sourceMappingURL=tone.js.map
