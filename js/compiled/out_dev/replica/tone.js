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
var G__26160 = arguments.length;
switch (G__26160) {
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
var len__4531__auto___26164 = arguments.length;
var i__4532__auto___26165 = (0);
while(true){
if((i__4532__auto___26165 < len__4531__auto___26164)){
args__4534__auto__.push((arguments[i__4532__auto___26165]));

var G__26166 = (i__4532__auto___26165 + (1));
i__4532__auto___26165 = G__26166;
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
replica.tone.fan.cljs$lang$applyTo = (function (seq26162){
var G__26163 = cljs.core.first.call(null,seq26162);
var seq26162__$1 = cljs.core.next.call(null,seq26162);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26163,seq26162__$1);
});

/**
 * connects in chain from source through elements by ID.
 */
replica.tone.chain = (function replica$tone$chain(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26169 = arguments.length;
var i__4532__auto___26170 = (0);
while(true){
if((i__4532__auto___26170 < len__4531__auto___26169)){
args__4534__auto__.push((arguments[i__4532__auto___26170]));

var G__26171 = (i__4532__auto___26170 + (1));
i__4532__auto___26170 = G__26171;
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
replica.tone.chain.cljs$lang$applyTo = (function (seq26167){
var G__26168 = cljs.core.first.call(null,seq26167);
var seq26167__$1 = cljs.core.next.call(null,seq26167);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26168,seq26167__$1);
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
var len__4531__auto___26179 = arguments.length;
var i__4532__auto___26180 = (0);
while(true){
if((i__4532__auto___26180 < len__4531__auto___26179)){
args__4534__auto__.push((arguments[i__4532__auto___26180]));

var G__26181 = (i__4532__auto___26180 + (1));
i__4532__auto___26180 = G__26181;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return replica.tone.setrsrc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

replica.tone.setrsrc.cljs$core$IFn$_invoke$arity$variadic = (function (k,id,rsrc,p__26176){
var map__26177 = p__26176;
var map__26177__$1 = ((((!((map__26177 == null)))?(((((map__26177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26177):map__26177);
var __ = cljs.core.get.call(null,map__26177__$1,new cljs.core.Keyword(null,"--","--",-1406508824));
var __LT_ = cljs.core.get.call(null,map__26177__$1,new cljs.core.Keyword(null,"-<","-<",1635525807));
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
replica.tone.setrsrc.cljs$lang$applyTo = (function (seq26172){
var G__26173 = cljs.core.first.call(null,seq26172);
var seq26172__$1 = cljs.core.next.call(null,seq26172);
var G__26174 = cljs.core.first.call(null,seq26172__$1);
var seq26172__$2 = cljs.core.next.call(null,seq26172__$1);
var G__26175 = cljs.core.first.call(null,seq26172__$2);
var seq26172__$3 = cljs.core.next.call(null,seq26172__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26173,G__26174,G__26175,seq26172__$3);
});

replica.tone.setprops_BANG_ = (function replica$tone$setprops_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26184 = arguments.length;
var i__4532__auto___26185 = (0);
while(true){
if((i__4532__auto___26185 < len__4531__auto___26184)){
args__4534__auto__.push((arguments[i__4532__auto___26185]));

var G__26186 = (i__4532__auto___26185 + (1));
i__4532__auto___26185 = G__26186;
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
replica.tone.setprops_BANG_.cljs$lang$applyTo = (function (seq26182){
var G__26183 = cljs.core.first.call(null,seq26182);
var seq26182__$1 = cljs.core.next.call(null,seq26182);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26183,seq26182__$1);
});

replica.tone.getprops = (function replica$tone$getprops(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26189 = arguments.length;
var i__4532__auto___26190 = (0);
while(true){
if((i__4532__auto___26190 < len__4531__auto___26189)){
args__4534__auto__.push((arguments[i__4532__auto___26190]));

var G__26191 = (i__4532__auto___26190 + (1));
i__4532__auto___26190 = G__26191;
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
replica.tone.getprops.cljs$lang$applyTo = (function (seq26187){
var G__26188 = cljs.core.first.call(null,seq26187);
var seq26187__$1 = cljs.core.next.call(null,seq26187);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26188,seq26187__$1);
});

replica.tone.do_BANG_ = (function replica$tone$do_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26195 = arguments.length;
var i__4532__auto___26196 = (0);
while(true){
if((i__4532__auto___26196 < len__4531__auto___26195)){
args__4534__auto__.push((arguments[i__4532__auto___26196]));

var G__26197 = (i__4532__auto___26196 + (1));
i__4532__auto___26196 = G__26197;
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
replica.tone.do_BANG_.cljs$lang$applyTo = (function (seq26192){
var G__26193 = cljs.core.first.call(null,seq26192);
var seq26192__$1 = cljs.core.next.call(null,seq26192);
var G__26194 = cljs.core.first.call(null,seq26192__$1);
var seq26192__$2 = cljs.core.next.call(null,seq26192__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26193,G__26194,seq26192__$2);
});

/**
 * Creates a new Tone.Synth
 */
replica.tone.synth = (function replica$tone$synth(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26203 = arguments.length;
var i__4532__auto___26204 = (0);
while(true){
if((i__4532__auto___26204 < len__4531__auto___26203)){
args__4534__auto__.push((arguments[i__4532__auto___26204]));

var G__26205 = (i__4532__auto___26204 + (1));
i__4532__auto___26204 = G__26205;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.tone.synth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.tone.synth.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__26200){
var map__26201 = p__26200;
var map__26201__$1 = ((((!((map__26201 == null)))?(((((map__26201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26201):map__26201);
var osc = cljs.core.get.call(null,map__26201__$1,new cljs.core.Keyword(null,"osc","osc",218527081),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"triangle","triangle",-187845140,null)], null));
var a = cljs.core.get.call(null,map__26201__$1,new cljs.core.Keyword(null,"a","a",-2123407586),0.005);
var d = cljs.core.get.call(null,map__26201__$1,new cljs.core.Keyword(null,"d","d",1972142424),0.1);
var s = cljs.core.get.call(null,map__26201__$1,new cljs.core.Keyword(null,"s","s",1705939918),0.3);
var r = cljs.core.get.call(null,map__26201__$1,new cljs.core.Keyword(null,"r","r",-471384190),(1));
var __ = cljs.core.get.call(null,map__26201__$1,new cljs.core.Keyword(null,"--","--",-1406508824),new cljs.core.Symbol(null,"master","master",-1874447071,null));
var __LT_ = cljs.core.get.call(null,map__26201__$1,new cljs.core.Keyword(null,"-<","-<",1635525807));
return replica.tone.setrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id,(new Tone.Synth(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oscillator","oscillator",-1200469980),osc,new cljs.core.Keyword(null,"envelope","envelope",-236796318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attack","attack",1957061788),a,new cljs.core.Keyword(null,"decay","decay",1036712184),d,new cljs.core.Keyword(null,"sustain","sustain",1604277844),s,new cljs.core.Keyword(null,"release","release",-1534371381),r], null)], null)))),new cljs.core.Keyword(null,"--","--",-1406508824),__,new cljs.core.Keyword(null,"-<","-<",1635525807),__LT_);
});

replica.tone.synth.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.tone.synth.cljs$lang$applyTo = (function (seq26198){
var G__26199 = cljs.core.first.call(null,seq26198);
var seq26198__$1 = cljs.core.next.call(null,seq26198);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26199,seq26198__$1);
});

/**
 * Creates a new Tone.MonoSynth
 */
replica.tone.monos = (function replica$tone$monos(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26211 = arguments.length;
var i__4532__auto___26212 = (0);
while(true){
if((i__4532__auto___26212 < len__4531__auto___26211)){
args__4534__auto__.push((arguments[i__4532__auto___26212]));

var G__26213 = (i__4532__auto___26212 + (1));
i__4532__auto___26212 = G__26213;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.tone.monos.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.tone.monos.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__26208){
var map__26209 = p__26208;
var map__26209__$1 = ((((!((map__26209 == null)))?(((((map__26209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26209):map__26209);
var filt = cljs.core.get.call(null,map__26209__$1,new cljs.core.Keyword(null,"filt","filt",169229082),new cljs.core.Symbol(null,"lowpass","lowpass",802254948,null));
var fs = cljs.core.get.call(null,map__26209__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244),0.3);
var a = cljs.core.get.call(null,map__26209__$1,new cljs.core.Keyword(null,"a","a",-2123407586),0.005);
var fa = cljs.core.get.call(null,map__26209__$1,new cljs.core.Keyword(null,"fa","fa",484981183),0.06);
var fr = cljs.core.get.call(null,map__26209__$1,new cljs.core.Keyword(null,"fr","fr",1577713888),(2));
var f8s = cljs.core.get.call(null,map__26209__$1,new cljs.core.Keyword(null,"f8s","f8s",-1090773535),(7));
var q = cljs.core.get.call(null,map__26209__$1,new cljs.core.Keyword(null,"q","q",689001697),(6));
var r = cljs.core.get.call(null,map__26209__$1,new cljs.core.Keyword(null,"r","r",-471384190),(1));
var ffreq = cljs.core.get.call(null,map__26209__$1,new cljs.core.Keyword(null,"ffreq","ffreq",-1705674076),(200));
var roff = cljs.core.get.call(null,map__26209__$1,new cljs.core.Keyword(null,"roff","roff",-1380134394),(-24));
var fexp = cljs.core.get.call(null,map__26209__$1,new cljs.core.Keyword(null,"fexp","fexp",-300455130),(2));
var fd = cljs.core.get.call(null,map__26209__$1,new cljs.core.Keyword(null,"fd","fd",-1524403000),0.2);
var __ = cljs.core.get.call(null,map__26209__$1,new cljs.core.Keyword(null,"--","--",-1406508824),new cljs.core.Symbol(null,"master","master",-1874447071,null));
var osc = cljs.core.get.call(null,map__26209__$1,new cljs.core.Keyword(null,"osc","osc",218527081),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"square","square",-1842001092,null)], null));
var s = cljs.core.get.call(null,map__26209__$1,new cljs.core.Keyword(null,"s","s",1705939918),0.9);
var __LT_ = cljs.core.get.call(null,map__26209__$1,new cljs.core.Keyword(null,"-<","-<",1635525807));
var d = cljs.core.get.call(null,map__26209__$1,new cljs.core.Keyword(null,"d","d",1972142424),0.1);
return replica.tone.setrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id,(new Tone.MonoSynth(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"oscillator","oscillator",-1200469980),osc,new cljs.core.Keyword(null,"envelope","envelope",-236796318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attack","attack",1957061788),a,new cljs.core.Keyword(null,"decay","decay",1036712184),d,new cljs.core.Keyword(null,"sustain","sustain",1604277844),s,new cljs.core.Keyword(null,"release","release",-1534371381),r], null),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),filt,new cljs.core.Keyword(null,"Q","Q",663320520),q,new cljs.core.Keyword(null,"rolloff","rolloff",-715733667),roff], null),new cljs.core.Keyword(null,"filterEnvelope","filterEnvelope",-898174700),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"attack","attack",1957061788),fa,new cljs.core.Keyword(null,"decay","decay",1036712184),fd,new cljs.core.Keyword(null,"sustain","sustain",1604277844),fs,new cljs.core.Keyword(null,"release","release",-1534371381),fr,new cljs.core.Keyword(null,"baseFrequency","baseFrequency",-1013443755),ffreq,new cljs.core.Keyword(null,"octaves","octaves",955457820),f8s,new cljs.core.Keyword(null,"exponent","exponent",2083463617),fexp], null)], null)))),new cljs.core.Keyword(null,"--","--",-1406508824),__,new cljs.core.Keyword(null,"-<","-<",1635525807),__LT_);
});

replica.tone.monos.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.tone.monos.cljs$lang$applyTo = (function (seq26206){
var G__26207 = cljs.core.first.call(null,seq26206);
var seq26206__$1 = cljs.core.next.call(null,seq26206);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26207,seq26206__$1);
});

/**
 * Creates a new Tone.MetalSynth
 */
replica.tone.metal = (function replica$tone$metal(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26219 = arguments.length;
var i__4532__auto___26220 = (0);
while(true){
if((i__4532__auto___26220 < len__4531__auto___26219)){
args__4534__auto__.push((arguments[i__4532__auto___26220]));

var G__26221 = (i__4532__auto___26220 + (1));
i__4532__auto___26220 = G__26221;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.tone.metal.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.tone.metal.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__26216){
var map__26217 = p__26216;
var map__26217__$1 = ((((!((map__26217 == null)))?(((((map__26217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26217):map__26217);
var res = cljs.core.get.call(null,map__26217__$1,new cljs.core.Keyword(null,"res","res",-1395007879),(4000));
var a = cljs.core.get.call(null,map__26217__$1,new cljs.core.Keyword(null,"a","a",-2123407586),0.001);
var r = cljs.core.get.call(null,map__26217__$1,new cljs.core.Keyword(null,"r","r",-471384190),0.2);
var freq = cljs.core.get.call(null,map__26217__$1,new cljs.core.Keyword(null,"freq","freq",-1855845278),(200));
var __ = cljs.core.get.call(null,map__26217__$1,new cljs.core.Keyword(null,"--","--",-1406508824),new cljs.core.Symbol(null,"master","master",-1874447071,null));
var octs = cljs.core.get.call(null,map__26217__$1,new cljs.core.Keyword(null,"octs","octs",136821420));
var harm = cljs.core.get.call(null,map__26217__$1,new cljs.core.Keyword(null,"harm","harm",1565170924),5.1);
var __LT_ = cljs.core.get.call(null,map__26217__$1,new cljs.core.Keyword(null,"-<","-<",1635525807));
var modidx = cljs.core.get.call(null,map__26217__$1,new cljs.core.Keyword(null,"modidx","modidx",1879334676),(32));
var d = cljs.core.get.call(null,map__26217__$1,new cljs.core.Keyword(null,"d","d",1972142424),1.4);
return replica.tone.setrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id,(new Tone.MetalSynth(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"frequency","frequency",-1408891382),freq,new cljs.core.Keyword(null,"envelope","envelope",-236796318),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attack","attack",1957061788),a,new cljs.core.Keyword(null,"decay","decay",1036712184),d,new cljs.core.Keyword(null,"release","release",-1534371381),r], null),new cljs.core.Keyword(null,"harmonicity","harmonicity",697254201),harm,new cljs.core.Keyword(null,"modulationIndex","modulationIndex",-737747680),modidx,new cljs.core.Keyword(null,"resonance","resonance",2117117691),res,new cljs.core.Keyword(null,"octaves","octaves",955457820),1.5], null)))),new cljs.core.Keyword(null,"--","--",-1406508824),__,new cljs.core.Keyword(null,"-<","-<",1635525807),__LT_);
});

replica.tone.metal.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.tone.metal.cljs$lang$applyTo = (function (seq26214){
var G__26215 = cljs.core.first.call(null,seq26214);
var seq26214__$1 = cljs.core.next.call(null,seq26214);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26215,seq26214__$1);
});

/**
 * Plays a Synth
 */
replica.tone.p_BANG_ = (function replica$tone$p_BANG_(id,freq,dur,t,vel){
var s = replica.tone.getrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id);
var G__26222 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
switch (G__26222) {
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
var G__26224 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
switch (G__26224) {
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
var len__4531__auto___26232 = arguments.length;
var i__4532__auto___26233 = (0);
while(true){
if((i__4532__auto___26233 < len__4531__auto___26232)){
args__4534__auto__.push((arguments[i__4532__auto___26233]));

var G__26234 = (i__4532__auto___26233 + (1));
i__4532__auto___26233 = G__26234;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.tone.buf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.tone.buf.cljs$core$IFn$_invoke$arity$variadic = (function (id,url,p__26229){
var map__26230 = p__26229;
var map__26230__$1 = ((((!((map__26230 == null)))?(((((map__26230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26230):map__26230);
var onload = cljs.core.get.call(null,map__26230__$1,new cljs.core.Keyword(null,"onload","onload",113170835));
var onerror = cljs.core.get.call(null,map__26230__$1,new cljs.core.Keyword(null,"onerror","onerror",781725030));
replica.tone.setrsrc.call(null,new cljs.core.Keyword(null,"buf","buf",-213913340),id,(new Tone.Buffer(url,onload,onerror)));

return replica.tone.getrsrc.call(null,new cljs.core.Keyword(null,"buf","buf",-213913340),id);
});

replica.tone.buf.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.tone.buf.cljs$lang$applyTo = (function (seq26226){
var G__26227 = cljs.core.first.call(null,seq26226);
var seq26226__$1 = cljs.core.next.call(null,seq26226);
var G__26228 = cljs.core.first.call(null,seq26226__$1);
var seq26226__$2 = cljs.core.next.call(null,seq26226__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26227,G__26228,seq26226__$2);
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
var len__4531__auto___26242 = arguments.length;
var i__4532__auto___26243 = (0);
while(true){
if((i__4532__auto___26243 < len__4531__auto___26242)){
args__4534__auto__.push((arguments[i__4532__auto___26243]));

var G__26244 = (i__4532__auto___26243 + (1));
i__4532__auto___26243 = G__26244;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.tone.grn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.tone.grn.cljs$core$IFn$_invoke$arity$variadic = (function (id,src,p__26239){
var map__26240 = p__26239;
var map__26240__$1 = ((((!((map__26240 == null)))?(((((map__26240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26240):map__26240);
var onload = cljs.core.get.call(null,map__26240__$1,new cljs.core.Keyword(null,"onload","onload",113170835),((function (map__26240,map__26240__$1){
return (function (p1__26235_SHARP_){
return cljs.core.print_str.call(null,p1__26235_SHARP_," grn ready!");
});})(map__26240,map__26240__$1))
);
var __ = cljs.core.get.call(null,map__26240__$1,new cljs.core.Keyword(null,"--","--",-1406508824),new cljs.core.Symbol(null,"master","master",-1874447071,null));
var __LT_ = cljs.core.get.call(null,map__26240__$1,new cljs.core.Keyword(null,"-<","-<",1635525807));
return replica.tone.setrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id,(new Tone.GrainPlayer(replica.tone.buf_from_any.call(null,src),((function (map__26240,map__26240__$1,onload,__,__LT_){
return (function (){
replica.tone.connect.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ins","ins",-1021983570),id], null),__,__LT_);

return onload.call(null,id);
});})(map__26240,map__26240__$1,onload,__,__LT_))
)));
});

replica.tone.grn.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.tone.grn.cljs$lang$applyTo = (function (seq26236){
var G__26237 = cljs.core.first.call(null,seq26236);
var seq26236__$1 = cljs.core.next.call(null,seq26236);
var G__26238 = cljs.core.first.call(null,seq26236__$1);
var seq26236__$2 = cljs.core.next.call(null,seq26236__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26237,G__26238,seq26236__$2);
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
var len__4531__auto___26252 = arguments.length;
var i__4532__auto___26253 = (0);
while(true){
if((i__4532__auto___26253 < len__4531__auto___26252)){
args__4534__auto__.push((arguments[i__4532__auto___26253]));

var G__26254 = (i__4532__auto___26253 + (1));
i__4532__auto___26253 = G__26254;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.tone.conv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.tone.conv.cljs$core$IFn$_invoke$arity$variadic = (function (id,src,p__26249){
var map__26250 = p__26249;
var map__26250__$1 = ((((!((map__26250 == null)))?(((((map__26250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26250):map__26250);
var onload = cljs.core.get.call(null,map__26250__$1,new cljs.core.Keyword(null,"onload","onload",113170835),((function (map__26250,map__26250__$1){
return (function (p1__26245_SHARP_){
return cljs.core.print_str.call(null,p1__26245_SHARP_," conv ready!");
});})(map__26250,map__26250__$1))
);
var __ = cljs.core.get.call(null,map__26250__$1,new cljs.core.Keyword(null,"--","--",-1406508824),new cljs.core.Symbol(null,"master","master",-1874447071,null));
var __LT_ = cljs.core.get.call(null,map__26250__$1,new cljs.core.Keyword(null,"-<","-<",1635525807));
return replica.tone.setrsrc.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),id,(new Tone.Convolver(replica.tone.buf_from_any.call(null,src),((function (map__26250,map__26250__$1,onload,__,__LT_){
return (function (){
replica.tone.connect.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),id], null),__,__LT_);

return onload.call(null,id);
});})(map__26250,map__26250__$1,onload,__,__LT_))
)));
});

replica.tone.conv.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.tone.conv.cljs$lang$applyTo = (function (seq26246){
var G__26247 = cljs.core.first.call(null,seq26246);
var seq26246__$1 = cljs.core.next.call(null,seq26246);
var G__26248 = cljs.core.first.call(null,seq26246__$1);
var seq26246__$2 = cljs.core.next.call(null,seq26246__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26247,G__26248,seq26246__$2);
});

/**
 * disconnects source from element(s) by Object or index.
 */
replica.tone.discn = (function replica$tone$discn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___26258 = arguments.length;
var i__4532__auto___26259 = (0);
while(true){
if((i__4532__auto___26259 < len__4531__auto___26258)){
args__4534__auto__.push((arguments[i__4532__auto___26259]));

var G__26260 = (i__4532__auto___26259 + (1));
i__4532__auto___26259 = G__26260;
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
return (function (p1__26255_SHARP_){
return elm.disconnect(p1__26255_SHARP_);
});})(elm))
,disconnect_from);
});

replica.tone.discn.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.tone.discn.cljs$lang$applyTo = (function (seq26256){
var G__26257 = cljs.core.first.call(null,seq26256);
var seq26256__$1 = cljs.core.next.call(null,seq26256);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26257,seq26256__$1);
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
var G__26262 = arguments.length;
switch (G__26262) {
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
var temp__5457__auto___26264 = replica.tone.getrsrc.call(null,new cljs.core.Keyword(null,"loops","loops",-1766681555),id);
if(cljs.core.truth_(temp__5457__auto___26264)){
var lp_26265 = temp__5457__auto___26264;
lp_26265.dispose();
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
var len__4531__auto___26269 = arguments.length;
var i__4532__auto___26270 = (0);
while(true){
if((i__4532__auto___26270 < len__4531__auto___26269)){
args__4534__auto__.push((arguments[i__4532__auto___26270]));

var G__26271 = (i__4532__auto___26270 + (1));
i__4532__auto___26270 = G__26271;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.tone.t.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.tone.t.cljs$core$IFn$_invoke$arity$variadic = (function (route,args){
var G__26268 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join('');
switch (G__26268) {
case "doc":
return replica.utils.doc_commands.call(null,new cljs.core.Symbol("replica.tone","t","replica.tone/t",-1082667992,null),replica.tone.routes,new cljs.core.Symbol(null,"t","t",242699008,null));

break;
default:
return cljs.core.apply.call(null,replica.utils.proc_BANG_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"t","t",242699008,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join(''),args);

}
});

replica.tone.t.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.tone.t.cljs$lang$applyTo = (function (seq26266){
var G__26267 = cljs.core.first.call(null,seq26266);
var seq26266__$1 = cljs.core.next.call(null,seq26266);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26267,seq26266__$1);
});

replica.utils.add_routes_BANG_.call(null,new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"replica.tone","replica.tone",768408542,null),replica.tone.routes);

//# sourceMappingURL=tone.js.map
