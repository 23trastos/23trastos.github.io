// Compiled by ClojureScript 1.10.339 {}
goog.provide('replica.tone');
goog.require('cljs.core');
goog.require('tonejs');
goog.require('goog.object');
goog.require('replica.utils');
if((typeof replica !== 'undefined') && (typeof replica.tone !== 'undefined') && (typeof replica.tone.rsrcs !== 'undefined')){
} else {
replica.tone.rsrcs = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"run","run",-1821166653),false,new cljs.core.Keyword(null,"master","master",779988698),Tone.Master], null));
}
replica.tone.getrsrc = (function replica$tone$getrsrc(var_args){
var G__13484 = arguments.length;
switch (G__13484) {
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
var or__3949__auto____$1 = replica.tone.getrsrc.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),id);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return replica.tone.getrsrc.call(null,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),id);
}
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
var len__4531__auto___13488 = arguments.length;
var i__4532__auto___13489 = (0);
while(true){
if((i__4532__auto___13489 < len__4531__auto___13488)){
args__4534__auto__.push((arguments[i__4532__auto___13489]));

var G__13490 = (i__4532__auto___13489 + (1));
i__4532__auto___13489 = G__13490;
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
replica.tone.fan.cljs$lang$applyTo = (function (seq13486){
var G__13487 = cljs.core.first.call(null,seq13486);
var seq13486__$1 = cljs.core.next.call(null,seq13486);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13487,seq13486__$1);
});

/**
 * connects in chain from source through elements by ID.
 */
replica.tone.chain = (function replica$tone$chain(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13493 = arguments.length;
var i__4532__auto___13494 = (0);
while(true){
if((i__4532__auto___13494 < len__4531__auto___13493)){
args__4534__auto__.push((arguments[i__4532__auto___13494]));

var G__13495 = (i__4532__auto___13494 + (1));
i__4532__auto___13494 = G__13495;
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
replica.tone.chain.cljs$lang$applyTo = (function (seq13491){
var G__13492 = cljs.core.first.call(null,seq13491);
var seq13491__$1 = cljs.core.next.call(null,seq13491);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13492,seq13491__$1);
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
var len__4531__auto___13503 = arguments.length;
var i__4532__auto___13504 = (0);
while(true){
if((i__4532__auto___13504 < len__4531__auto___13503)){
args__4534__auto__.push((arguments[i__4532__auto___13504]));

var G__13505 = (i__4532__auto___13504 + (1));
i__4532__auto___13504 = G__13505;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return replica.tone.setrsrc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

replica.tone.setrsrc.cljs$core$IFn$_invoke$arity$variadic = (function (k,id,rsrc,p__13500){
var map__13501 = p__13500;
var map__13501__$1 = ((((!((map__13501 == null)))?(((((map__13501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13501):map__13501);
var __ = cljs.core.get.call(null,map__13501__$1,new cljs.core.Keyword(null,"--","--",-1406508824));
var __LT_ = cljs.core.get.call(null,map__13501__$1,new cljs.core.Keyword(null,"-<","-<",1635525807));
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
replica.tone.setrsrc.cljs$lang$applyTo = (function (seq13496){
var G__13497 = cljs.core.first.call(null,seq13496);
var seq13496__$1 = cljs.core.next.call(null,seq13496);
var G__13498 = cljs.core.first.call(null,seq13496__$1);
var seq13496__$2 = cljs.core.next.call(null,seq13496__$1);
var G__13499 = cljs.core.first.call(null,seq13496__$2);
var seq13496__$3 = cljs.core.next.call(null,seq13496__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13497,G__13498,G__13499,seq13496__$3);
});

replica.tone.setprops_BANG_ = (function replica$tone$setprops_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13508 = arguments.length;
var i__4532__auto___13509 = (0);
while(true){
if((i__4532__auto___13509 < len__4531__auto___13508)){
args__4534__auto__.push((arguments[i__4532__auto___13509]));

var G__13510 = (i__4532__auto___13509 + (1));
i__4532__auto___13509 = G__13510;
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
replica.tone.setprops_BANG_.cljs$lang$applyTo = (function (seq13506){
var G__13507 = cljs.core.first.call(null,seq13506);
var seq13506__$1 = cljs.core.next.call(null,seq13506);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13507,seq13506__$1);
});

replica.tone.getprops = (function replica$tone$getprops(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13513 = arguments.length;
var i__4532__auto___13514 = (0);
while(true){
if((i__4532__auto___13514 < len__4531__auto___13513)){
args__4534__auto__.push((arguments[i__4532__auto___13514]));

var G__13515 = (i__4532__auto___13514 + (1));
i__4532__auto___13514 = G__13515;
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
replica.tone.getprops.cljs$lang$applyTo = (function (seq13511){
var G__13512 = cljs.core.first.call(null,seq13511);
var seq13511__$1 = cljs.core.next.call(null,seq13511);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13512,seq13511__$1);
});

replica.tone.call_BANG_ = (function replica$tone$call_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13519 = arguments.length;
var i__4532__auto___13520 = (0);
while(true){
if((i__4532__auto___13520 < len__4531__auto___13519)){
args__4534__auto__.push((arguments[i__4532__auto___13520]));

var G__13521 = (i__4532__auto___13520 + (1));
i__4532__auto___13520 = G__13521;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.tone.call_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.tone.call_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (id,path_to_fn,args){
return cljs.core.apply.call(null,cljs.core.js_invoke,cljs.core.apply.call(null,replica.utils.get_js_value,replica.tone.getrsrc.call(null,id),cljs.core.butlast.call(null,path_to_fn)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,path_to_fn))].join(''),args);
});

replica.tone.call_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.tone.call_BANG_.cljs$lang$applyTo = (function (seq13516){
var G__13517 = cljs.core.first.call(null,seq13516);
var seq13516__$1 = cljs.core.next.call(null,seq13516);
var G__13518 = cljs.core.first.call(null,seq13516__$1);
var seq13516__$2 = cljs.core.next.call(null,seq13516__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13517,G__13518,seq13516__$2);
});

/**
 * Set the property value through the set method of any Tonejs object
 */
replica.tone.tone_set_BANG_ = (function replica$tone$tone_set_BANG_(id,param,value,ramp_time){
return replica.tone.getrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id).set([cljs.core.str.cljs$core$IFn$_invoke$arity$1(param)].join(''),value,ramp_time);
});
/**
 * Gets the property value through the get method of any Tonejs object
 */
replica.tone.tone_get = (function replica$tone$tone_get(id,param,value,ramp_time){
return replica.tone.getrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id).get([cljs.core.str.cljs$core$IFn$_invoke$arity$1(param)].join(''),value,ramp_time);
});
/**
 * Creates a new Tone.Synth
 */
replica.tone.synth = (function replica$tone$synth(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13527 = arguments.length;
var i__4532__auto___13528 = (0);
while(true){
if((i__4532__auto___13528 < len__4531__auto___13527)){
args__4534__auto__.push((arguments[i__4532__auto___13528]));

var G__13529 = (i__4532__auto___13528 + (1));
i__4532__auto___13528 = G__13529;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.tone.synth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.tone.synth.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__13524){
var map__13525 = p__13524;
var map__13525__$1 = ((((!((map__13525 == null)))?(((((map__13525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13525):map__13525);
var osc = cljs.core.get.call(null,map__13525__$1,new cljs.core.Keyword(null,"osc","osc",218527081),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"triangle","triangle",-187845140,null)], null));
var a = cljs.core.get.call(null,map__13525__$1,new cljs.core.Keyword(null,"a","a",-2123407586),0.005);
var d = cljs.core.get.call(null,map__13525__$1,new cljs.core.Keyword(null,"d","d",1972142424),0.1);
var s = cljs.core.get.call(null,map__13525__$1,new cljs.core.Keyword(null,"s","s",1705939918),0.3);
var r = cljs.core.get.call(null,map__13525__$1,new cljs.core.Keyword(null,"r","r",-471384190),(1));
var __ = cljs.core.get.call(null,map__13525__$1,new cljs.core.Keyword(null,"--","--",-1406508824),new cljs.core.Symbol(null,"master","master",-1874447071,null));
var __LT_ = cljs.core.get.call(null,map__13525__$1,new cljs.core.Keyword(null,"-<","-<",1635525807));
return replica.tone.setrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id,(new Tone.Synth(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oscillator","oscillator",-1200469980),osc,new cljs.core.Keyword(null,"envelope","envelope",-236796318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attack","attack",1957061788),a,new cljs.core.Keyword(null,"decay","decay",1036712184),d,new cljs.core.Keyword(null,"sustain","sustain",1604277844),s,new cljs.core.Keyword(null,"release","release",-1534371381),r], null)], null)))),new cljs.core.Keyword(null,"--","--",-1406508824),__,new cljs.core.Keyword(null,"-<","-<",1635525807),__LT_);
});

replica.tone.synth.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.tone.synth.cljs$lang$applyTo = (function (seq13522){
var G__13523 = cljs.core.first.call(null,seq13522);
var seq13522__$1 = cljs.core.next.call(null,seq13522);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13523,seq13522__$1);
});

/**
 * Creates a new Tone.MonoSynth
 */
replica.tone.monos = (function replica$tone$monos(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13535 = arguments.length;
var i__4532__auto___13536 = (0);
while(true){
if((i__4532__auto___13536 < len__4531__auto___13535)){
args__4534__auto__.push((arguments[i__4532__auto___13536]));

var G__13537 = (i__4532__auto___13536 + (1));
i__4532__auto___13536 = G__13537;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.tone.monos.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.tone.monos.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__13532){
var map__13533 = p__13532;
var map__13533__$1 = ((((!((map__13533 == null)))?(((((map__13533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13533):map__13533);
var filt = cljs.core.get.call(null,map__13533__$1,new cljs.core.Keyword(null,"filt","filt",169229082),new cljs.core.Symbol(null,"lowpass","lowpass",802254948,null));
var fs = cljs.core.get.call(null,map__13533__$1,new cljs.core.Keyword(null,"fs","fs",-2122926244),0.3);
var a = cljs.core.get.call(null,map__13533__$1,new cljs.core.Keyword(null,"a","a",-2123407586),0.005);
var fa = cljs.core.get.call(null,map__13533__$1,new cljs.core.Keyword(null,"fa","fa",484981183),0.06);
var fr = cljs.core.get.call(null,map__13533__$1,new cljs.core.Keyword(null,"fr","fr",1577713888),(2));
var f8s = cljs.core.get.call(null,map__13533__$1,new cljs.core.Keyword(null,"f8s","f8s",-1090773535),(7));
var q = cljs.core.get.call(null,map__13533__$1,new cljs.core.Keyword(null,"q","q",689001697),(6));
var r = cljs.core.get.call(null,map__13533__$1,new cljs.core.Keyword(null,"r","r",-471384190),(1));
var ffreq = cljs.core.get.call(null,map__13533__$1,new cljs.core.Keyword(null,"ffreq","ffreq",-1705674076),(200));
var roff = cljs.core.get.call(null,map__13533__$1,new cljs.core.Keyword(null,"roff","roff",-1380134394),(-24));
var fexp = cljs.core.get.call(null,map__13533__$1,new cljs.core.Keyword(null,"fexp","fexp",-300455130),(2));
var fd = cljs.core.get.call(null,map__13533__$1,new cljs.core.Keyword(null,"fd","fd",-1524403000),0.2);
var __ = cljs.core.get.call(null,map__13533__$1,new cljs.core.Keyword(null,"--","--",-1406508824),new cljs.core.Symbol(null,"master","master",-1874447071,null));
var osc = cljs.core.get.call(null,map__13533__$1,new cljs.core.Keyword(null,"osc","osc",218527081),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"square","square",-1842001092,null)], null));
var s = cljs.core.get.call(null,map__13533__$1,new cljs.core.Keyword(null,"s","s",1705939918),0.9);
var __LT_ = cljs.core.get.call(null,map__13533__$1,new cljs.core.Keyword(null,"-<","-<",1635525807));
var d = cljs.core.get.call(null,map__13533__$1,new cljs.core.Keyword(null,"d","d",1972142424),0.1);
return replica.tone.setrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id,(new Tone.MonoSynth(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"oscillator","oscillator",-1200469980),osc,new cljs.core.Keyword(null,"envelope","envelope",-236796318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attack","attack",1957061788),a,new cljs.core.Keyword(null,"decay","decay",1036712184),d,new cljs.core.Keyword(null,"sustain","sustain",1604277844),s,new cljs.core.Keyword(null,"release","release",-1534371381),r], null),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),filt,new cljs.core.Keyword(null,"Q","Q",663320520),q,new cljs.core.Keyword(null,"rolloff","rolloff",-715733667),roff], null),new cljs.core.Keyword(null,"filterEnvelope","filterEnvelope",-898174700),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"attack","attack",1957061788),fa,new cljs.core.Keyword(null,"decay","decay",1036712184),fd,new cljs.core.Keyword(null,"sustain","sustain",1604277844),fs,new cljs.core.Keyword(null,"release","release",-1534371381),fr,new cljs.core.Keyword(null,"baseFrequency","baseFrequency",-1013443755),ffreq,new cljs.core.Keyword(null,"octaves","octaves",955457820),f8s,new cljs.core.Keyword(null,"exponent","exponent",2083463617),fexp], null)], null)))),new cljs.core.Keyword(null,"--","--",-1406508824),__,new cljs.core.Keyword(null,"-<","-<",1635525807),__LT_);
});

replica.tone.monos.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.tone.monos.cljs$lang$applyTo = (function (seq13530){
var G__13531 = cljs.core.first.call(null,seq13530);
var seq13530__$1 = cljs.core.next.call(null,seq13530);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13531,seq13530__$1);
});

/**
 * Creates a new Tone.MetalSynth
 */
replica.tone.metal = (function replica$tone$metal(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13543 = arguments.length;
var i__4532__auto___13544 = (0);
while(true){
if((i__4532__auto___13544 < len__4531__auto___13543)){
args__4534__auto__.push((arguments[i__4532__auto___13544]));

var G__13545 = (i__4532__auto___13544 + (1));
i__4532__auto___13544 = G__13545;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.tone.metal.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.tone.metal.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__13540){
var map__13541 = p__13540;
var map__13541__$1 = ((((!((map__13541 == null)))?(((((map__13541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13541):map__13541);
var res = cljs.core.get.call(null,map__13541__$1,new cljs.core.Keyword(null,"res","res",-1395007879),(4000));
var a = cljs.core.get.call(null,map__13541__$1,new cljs.core.Keyword(null,"a","a",-2123407586),0.001);
var r = cljs.core.get.call(null,map__13541__$1,new cljs.core.Keyword(null,"r","r",-471384190),0.2);
var freq = cljs.core.get.call(null,map__13541__$1,new cljs.core.Keyword(null,"freq","freq",-1855845278),(200));
var __ = cljs.core.get.call(null,map__13541__$1,new cljs.core.Keyword(null,"--","--",-1406508824),new cljs.core.Symbol(null,"master","master",-1874447071,null));
var octs = cljs.core.get.call(null,map__13541__$1,new cljs.core.Keyword(null,"octs","octs",136821420));
var harm = cljs.core.get.call(null,map__13541__$1,new cljs.core.Keyword(null,"harm","harm",1565170924),5.1);
var __LT_ = cljs.core.get.call(null,map__13541__$1,new cljs.core.Keyword(null,"-<","-<",1635525807));
var modidx = cljs.core.get.call(null,map__13541__$1,new cljs.core.Keyword(null,"modidx","modidx",1879334676),(32));
var d = cljs.core.get.call(null,map__13541__$1,new cljs.core.Keyword(null,"d","d",1972142424),1.4);
return replica.tone.setrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id,(new Tone.MetalSynth(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"frequency","frequency",-1408891382),freq,new cljs.core.Keyword(null,"envelope","envelope",-236796318),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attack","attack",1957061788),a,new cljs.core.Keyword(null,"decay","decay",1036712184),d,new cljs.core.Keyword(null,"release","release",-1534371381),r], null),new cljs.core.Keyword(null,"harmonicity","harmonicity",697254201),harm,new cljs.core.Keyword(null,"modulationIndex","modulationIndex",-737747680),modidx,new cljs.core.Keyword(null,"resonance","resonance",2117117691),res,new cljs.core.Keyword(null,"octaves","octaves",955457820),1.5], null)))),new cljs.core.Keyword(null,"--","--",-1406508824),__,new cljs.core.Keyword(null,"-<","-<",1635525807),__LT_);
});

replica.tone.metal.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.tone.metal.cljs$lang$applyTo = (function (seq13538){
var G__13539 = cljs.core.first.call(null,seq13538);
var seq13538__$1 = cljs.core.next.call(null,seq13538);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13539,seq13538__$1);
});

/**
 * creates a Tonejs Buffer from url
 */
replica.tone.buf = (function replica$tone$buf(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13552 = arguments.length;
var i__4532__auto___13553 = (0);
while(true){
if((i__4532__auto___13553 < len__4531__auto___13552)){
args__4534__auto__.push((arguments[i__4532__auto___13553]));

var G__13554 = (i__4532__auto___13553 + (1));
i__4532__auto___13553 = G__13554;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.tone.buf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.tone.buf.cljs$core$IFn$_invoke$arity$variadic = (function (id,url,p__13549){
var map__13550 = p__13549;
var map__13550__$1 = ((((!((map__13550 == null)))?(((((map__13550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13550):map__13550);
var onload = cljs.core.get.call(null,map__13550__$1,new cljs.core.Keyword(null,"onload","onload",113170835));
var onerror = cljs.core.get.call(null,map__13550__$1,new cljs.core.Keyword(null,"onerror","onerror",781725030));
replica.tone.setrsrc.call(null,new cljs.core.Keyword(null,"buf","buf",-213913340),id,(new Tone.Buffer(url,onload,onerror)));

return replica.tone.getrsrc.call(null,new cljs.core.Keyword(null,"buf","buf",-213913340),id);
});

replica.tone.buf.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.tone.buf.cljs$lang$applyTo = (function (seq13546){
var G__13547 = cljs.core.first.call(null,seq13546);
var seq13546__$1 = cljs.core.next.call(null,seq13546);
var G__13548 = cljs.core.first.call(null,seq13546__$1);
var seq13546__$2 = cljs.core.next.call(null,seq13546__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13547,G__13548,seq13546__$2);
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
var len__4531__auto___13562 = arguments.length;
var i__4532__auto___13563 = (0);
while(true){
if((i__4532__auto___13563 < len__4531__auto___13562)){
args__4534__auto__.push((arguments[i__4532__auto___13563]));

var G__13564 = (i__4532__auto___13563 + (1));
i__4532__auto___13563 = G__13564;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.tone.grn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.tone.grn.cljs$core$IFn$_invoke$arity$variadic = (function (id,src,p__13559){
var map__13560 = p__13559;
var map__13560__$1 = ((((!((map__13560 == null)))?(((((map__13560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13560):map__13560);
var onload = cljs.core.get.call(null,map__13560__$1,new cljs.core.Keyword(null,"onload","onload",113170835),((function (map__13560,map__13560__$1){
return (function (p1__13555_SHARP_){
return cljs.core.print_str.call(null,p1__13555_SHARP_," grn ready!");
});})(map__13560,map__13560__$1))
);
var __ = cljs.core.get.call(null,map__13560__$1,new cljs.core.Keyword(null,"--","--",-1406508824),new cljs.core.Symbol(null,"master","master",-1874447071,null));
var __LT_ = cljs.core.get.call(null,map__13560__$1,new cljs.core.Keyword(null,"-<","-<",1635525807));
return replica.tone.setrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id,(new Tone.GrainPlayer(replica.tone.buf_from_any.call(null,src),((function (map__13560,map__13560__$1,onload,__,__LT_){
return (function (){
replica.tone.connect.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ins","ins",-1021983570),id], null),__,__LT_);

return onload.call(null,id);
});})(map__13560,map__13560__$1,onload,__,__LT_))
)));
});

replica.tone.grn.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.tone.grn.cljs$lang$applyTo = (function (seq13556){
var G__13557 = cljs.core.first.call(null,seq13556);
var seq13556__$1 = cljs.core.next.call(null,seq13556);
var G__13558 = cljs.core.first.call(null,seq13556__$1);
var seq13556__$2 = cljs.core.next.call(null,seq13556__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13557,G__13558,seq13556__$2);
});

replica.tone.grnstart = (function replica$tone$grnstart(id,t,offset,dur){

return replica.tone.getrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id).start(t,offset,dur);
});
replica.tone.grnstop = (function replica$tone$grnstop(id,t){

return replica.tone.getrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id).stop(t);
});
/**
 * Plays a Synth
 */
replica.tone.p_BANG_ = (function replica$tone$p_BANG_(id,freq,dur,t,vel){
var s = replica.tone.getrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id);
var G__13565 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
switch (G__13565) {
case "GrainPlayer":
if(cljs.core.truth_(freq)){
replica.tone.tone_set_BANG_.call(null,s,new cljs.core.Symbol(null,"playbackRate","playbackRate",580410075,null),freq,null);
} else {
}

if(cljs.core.truth_(vel)){
replica.tone.tone_set_BANG_.call(null,s,new cljs.core.Symbol(null,"volume","volume",-754104970,null),vel,null);
} else {
}

return replica.tone.grnstart.call(null,id,t,null,dur);

break;
case "PluckSynth":
return s.triggerAttack(freq,t);

break;
case "MetalSynth":
if(cljs.core.truth_(freq)){
replica.tone.tone_set_BANG_.call(null,s,new cljs.core.Symbol(null,"frequency","frequency",231640145,null),freq,null);
} else {
}

return s.triggerAttackRelease(dur,t,vel);

break;
default:
return s.triggerAttackRelease(freq,dur,t,vel);

}
});
/**
 * Triggers attack on a Synth
 */
replica.tone.on_BANG_ = (function replica$tone$on_BANG_(id,freq,t,vel){
var s = replica.tone.getrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id);
var G__13567 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
switch (G__13567) {
case "GrainPlayer":
if(cljs.core.truth_(freq)){
replica.tone.tone_set_BANG_.call(null,s,new cljs.core.Symbol(null,"playbackRate","playbackRate",580410075,null),freq,null);
} else {
}

if(cljs.core.truth_(vel)){
replica.tone.tone_set_BANG_.call(null,s,new cljs.core.Symbol(null,"volume","volume",-754104970,null),vel,null);
} else {
}

return replica.tone.grnstart.call(null,id,t,null,null);

break;
case "PluckSynth":
return s.triggerAttack(freq,t);

break;
case "MetalSynth":
if(cljs.core.truth_(freq)){
replica.tone.tone_set_BANG_.call(null,s,new cljs.core.Symbol(null,"frequency","frequency",231640145,null),freq,null);
} else {
}

return s.triggerAttack(t,vel);

break;
default:
return s.triggerAttack(freq,t,vel);

}
});
/**
 * Releases a Synth
 */
replica.tone.off_BANG_ = (function replica$tone$off_BANG_(id,t){
var s = replica.tone.getrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id);
var G__13569 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
switch (G__13569) {
case "GrainPlayer":
return replica.tone.grnstop.call(null,id,t);

break;
default:
return replica.tone.getrsrc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id).triggerRelease(t);

}
});
/**
 * creates a Tonejs Convolver from the speficied IR source buffer or url
 */
replica.tone.conv = (function replica$tone$conv(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13578 = arguments.length;
var i__4532__auto___13579 = (0);
while(true){
if((i__4532__auto___13579 < len__4531__auto___13578)){
args__4534__auto__.push((arguments[i__4532__auto___13579]));

var G__13580 = (i__4532__auto___13579 + (1));
i__4532__auto___13579 = G__13580;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.tone.conv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.tone.conv.cljs$core$IFn$_invoke$arity$variadic = (function (id,src,p__13575){
var map__13576 = p__13575;
var map__13576__$1 = ((((!((map__13576 == null)))?(((((map__13576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13576):map__13576);
var onload = cljs.core.get.call(null,map__13576__$1,new cljs.core.Keyword(null,"onload","onload",113170835),((function (map__13576,map__13576__$1){
return (function (p1__13571_SHARP_){
return cljs.core.print_str.call(null,p1__13571_SHARP_," conv ready!");
});})(map__13576,map__13576__$1))
);
var __ = cljs.core.get.call(null,map__13576__$1,new cljs.core.Keyword(null,"--","--",-1406508824),new cljs.core.Symbol(null,"master","master",-1874447071,null));
var __LT_ = cljs.core.get.call(null,map__13576__$1,new cljs.core.Keyword(null,"-<","-<",1635525807));
return replica.tone.setrsrc.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),id,(new Tone.Convolver(replica.tone.buf_from_any.call(null,src),((function (map__13576,map__13576__$1,onload,__,__LT_){
return (function (){
replica.tone.connect.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),id], null),__,__LT_);

return onload.call(null,id);
});})(map__13576,map__13576__$1,onload,__,__LT_))
)));
});

replica.tone.conv.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.tone.conv.cljs$lang$applyTo = (function (seq13572){
var G__13573 = cljs.core.first.call(null,seq13572);
var seq13572__$1 = cljs.core.next.call(null,seq13572);
var G__13574 = cljs.core.first.call(null,seq13572__$1);
var seq13572__$2 = cljs.core.next.call(null,seq13572__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13573,G__13574,seq13572__$2);
});

/**
 * creates a new Tonejs Panner
 */
replica.tone.pan = (function replica$tone$pan(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13587 = arguments.length;
var i__4532__auto___13588 = (0);
while(true){
if((i__4532__auto___13588 < len__4531__auto___13587)){
args__4534__auto__.push((arguments[i__4532__auto___13588]));

var G__13589 = (i__4532__auto___13588 + (1));
i__4532__auto___13588 = G__13589;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return replica.tone.pan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

replica.tone.pan.cljs$core$IFn$_invoke$arity$variadic = (function (id,init_pan,p__13584){
var map__13585 = p__13584;
var map__13585__$1 = ((((!((map__13585 == null)))?(((((map__13585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13585):map__13585);
var onload = cljs.core.get.call(null,map__13585__$1,new cljs.core.Keyword(null,"onload","onload",113170835));
var __ = cljs.core.get.call(null,map__13585__$1,new cljs.core.Keyword(null,"--","--",-1406508824),new cljs.core.Symbol(null,"master","master",-1874447071,null));
var __LT_ = cljs.core.get.call(null,map__13585__$1,new cljs.core.Keyword(null,"-<","-<",1635525807));
return replica.tone.setrsrc.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),id,(new Tone.Panner((function (){var or__3949__auto__ = init_pan;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})())),new cljs.core.Keyword(null,"--","--",-1406508824),__,new cljs.core.Keyword(null,"-<","-<",1635525807),__LT_);
});

replica.tone.pan.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
replica.tone.pan.cljs$lang$applyTo = (function (seq13581){
var G__13582 = cljs.core.first.call(null,seq13581);
var seq13581__$1 = cljs.core.next.call(null,seq13581);
var G__13583 = cljs.core.first.call(null,seq13581__$1);
var seq13581__$2 = cljs.core.next.call(null,seq13581__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13582,G__13583,seq13581__$2);
});

/**
 * creates a new Tonejs Panner3d
 */
replica.tone.pan3 = (function replica$tone$pan3(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13598 = arguments.length;
var i__4532__auto___13599 = (0);
while(true){
if((i__4532__auto___13599 < len__4531__auto___13598)){
args__4534__auto__.push((arguments[i__4532__auto___13599]));

var G__13600 = (i__4532__auto___13599 + (1));
i__4532__auto___13599 = G__13600;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((4) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((4)),(0),null)):null);
return replica.tone.pan3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4535__auto__);
});

replica.tone.pan3.cljs$core$IFn$_invoke$arity$variadic = (function (id,x,y,z,p__13595){
var map__13596 = p__13595;
var map__13596__$1 = ((((!((map__13596 == null)))?(((((map__13596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13596):map__13596);
var onload = cljs.core.get.call(null,map__13596__$1,new cljs.core.Keyword(null,"onload","onload",113170835));
var __ = cljs.core.get.call(null,map__13596__$1,new cljs.core.Keyword(null,"--","--",-1406508824),new cljs.core.Symbol(null,"master","master",-1874447071,null));
var __LT_ = cljs.core.get.call(null,map__13596__$1,new cljs.core.Keyword(null,"-<","-<",1635525807));
return replica.tone.setrsrc.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),id,(new Tone.Panner3D((function (){var or__3949__auto__ = x;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})(),(function (){var or__3949__auto__ = y;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})(),(function (){var or__3949__auto__ = z;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})())),new cljs.core.Keyword(null,"--","--",-1406508824),__,new cljs.core.Keyword(null,"-<","-<",1635525807),__LT_);
});

replica.tone.pan3.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
replica.tone.pan3.cljs$lang$applyTo = (function (seq13590){
var G__13591 = cljs.core.first.call(null,seq13590);
var seq13590__$1 = cljs.core.next.call(null,seq13590);
var G__13592 = cljs.core.first.call(null,seq13590__$1);
var seq13590__$2 = cljs.core.next.call(null,seq13590__$1);
var G__13593 = cljs.core.first.call(null,seq13590__$2);
var seq13590__$3 = cljs.core.next.call(null,seq13590__$2);
var G__13594 = cljs.core.first.call(null,seq13590__$3);
var seq13590__$4 = cljs.core.next.call(null,seq13590__$3);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13591,G__13592,G__13593,G__13594,seq13590__$4);
});

/**
 * disconnects source from element(s) by Object or index.
 */
replica.tone.discn = (function replica$tone$discn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13604 = arguments.length;
var i__4532__auto___13605 = (0);
while(true){
if((i__4532__auto___13605 < len__4531__auto___13604)){
args__4534__auto__.push((arguments[i__4532__auto___13605]));

var G__13606 = (i__4532__auto___13605 + (1));
i__4532__auto___13605 = G__13606;
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
return (function (p1__13601_SHARP_){
return elm.disconnect(p1__13601_SHARP_);
});})(elm))
,disconnect_from);
});

replica.tone.discn.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.tone.discn.cljs$lang$applyTo = (function (seq13602){
var G__13603 = cljs.core.first.call(null,seq13602);
var seq13602__$1 = cljs.core.next.call(null,seq13602);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13603,seq13602__$1);
});

replica.tone.cancel_BANG_ = (function replica$tone$cancel_BANG_(var_args){
var G__13608 = arguments.length;
switch (G__13608) {
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

cljs.core.swap_BANG_.call(null,replica.tone.rsrcs,cljs.core.assoc,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),cljs.core.PersistentArrayMap.EMPTY);

return "All schedules cancelled.";
});

replica.tone.cancel_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (id){
var task = replica.tone.getrsrc.call(null,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),id);
if(typeof task === 'number'){
return Tone.Transport.clear(task);
} else {
return task.dispose();
}
});

replica.tone.cancel_BANG_.cljs$lang$maxFixedArity = 1;

replica.tone.clear_BANG_ = (function replica$tone$clear_BANG_(var_args){
var G__13612 = arguments.length;
switch (G__13612) {
case 0:
return replica.tone.clear_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return replica.tone.clear_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replica.tone.clear_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replica.tone.clear_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
replica.tone.cancel_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,replica.tone.rsrcs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"run","run",-1821166653),false,new cljs.core.Keyword(null,"master","master",779988698),Tone.Master], null));
});

replica.tone.clear_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (id){
return cljs.core.map.call(null,(function (p1__13610_SHARP_){
return replica.tone.clear_BANG_.call(null,p1__13610_SHARP_,id);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ins","ins",-1021983570),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"tasks","tasks",-1754368880)], null));
});

replica.tone.clear_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (k,id){
var temp__5457__auto__ = replica.tone.getrsrc.call(null,k,id);
if(cljs.core.truth_(temp__5457__auto__)){
var obj = temp__5457__auto__;
if(typeof obj === 'number'){
Tone.Transport.clear(obj);
} else {
obj.dispose();
}

return cljs.core.swap_BANG_.call(null,replica.tone.rsrcs,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,id], null),null);
} else {
return null;
}
});

replica.tone.clear_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Schedules an event repeated on a time interval.
 */
replica.tone.schr = (function replica$tone$schr(id,function$,interval){
replica.tone.clear_BANG_.call(null,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),id);

return cljs.core.swap_BANG_.call(null,replica.tone.rsrcs,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),id], null),Tone.Transport.scheduleRepeat(function$,interval));
});
/**
 * Creates a new loop with defined start and end.
 */
replica.tone.lp = (function replica$tone$lp(id,function$,interval,start_time,end_time){
replica.tone.clear_BANG_.call(null,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),id);

return cljs.core.swap_BANG_.call(null,replica.tone.rsrcs,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),id], null),(new Tone.Loop(function$,interval)).start(start_time).stop(end_time));
});
/**
 * Creates a new loop for drawing visuals with the provided callback function in sync with Tonejs.
 */
replica.tone.draw = (function replica$tone$draw(id,visual_fn,interval,start_time,end_time){
return replica.tone.lp.call(null,id,(function (t){
return Tone.Draw.schedule(visual_fn,t);
}),interval,start_time,end_time);
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
/**
 * ramps to a new Tempo in bpm within the desired time.
 */
replica.tone.st_BANG_ = (function replica$tone$st_BANG_(target_bpm,ramp_time){
tempo = target_bpm;

return Tone.Transport.bpm.rampTo(target_bpm,(cljs.core.truth_(cljs.core.every_pred.call(null,cljs.core.number_QMARK_,cljs.core.partial.call(null,cljs.core._LT_,(0))).call(null,ramp_time))?ramp_time:0.001));
});
replica.tone.routes = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"schr","schr",-1992784341,null),new cljs.core.Symbol(null,"st","st",-1199179941,null),new cljs.core.Symbol(null,"pan","pan",1332818735,null),new cljs.core.Symbol(null,"lp","lp",-1500292755,null),new cljs.core.Symbol(null,"gp","gp",-238727254,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),new cljs.core.Symbol(null,"cancel","cancel",-323556833,null),new cljs.core.Symbol(null,"conv","conv",-1669507879,null),new cljs.core.Symbol(null,"off","off",-2047994980,null),new cljs.core.Symbol(null,"grn","grn",-756326672,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"pan3","pan3",-1271029360,null),new cljs.core.Symbol(null,"run?","run?",-1901812910,null),new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.Symbol(null,"call","call",1120531661,null),new cljs.core.Symbol(null,"monos","monos",665668743,null),new cljs.core.Symbol(null,"on","on",1814405471,null),new cljs.core.Symbol(null,"grnstop","grnstop",1449719600,null),new cljs.core.Symbol(null,"metal","metal",-108536953,null),new cljs.core.Symbol(null,"-<","-<",-1018909962,null),new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"grnstart","grnstart",-1175524468,null),new cljs.core.Symbol(null,"go","go",1493584872,null),new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"clear","clear",-777330810,null),new cljs.core.Symbol(null,"synth","synth",777830680,null),new cljs.core.Symbol(null,"--","--",234022703,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"sp","sp",-1631085811,null),new cljs.core.Symbol(null,"secs","secs",-1122105678,null),new cljs.core.Symbol(null,"stop","stop",-500379815,null),new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.Symbol(null,"draw","draw",-1296104095,null),new cljs.core.Symbol(null,"set","set",1945134081,null)],[new cljs.core.Symbol(null,"schr","schr",-1992784341,null),new cljs.core.Symbol(null,"st!","st!",422024129,null),new cljs.core.Symbol(null,"pan","pan",1332818735,null),new cljs.core.Symbol(null,"lp","lp",-1500292755,null),new cljs.core.Symbol(null,"getprops","getprops",-232220813,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),new cljs.core.Symbol(null,"cancel!","cancel!",963993008,null),new cljs.core.Symbol(null,"conv","conv",-1669507879,null),new cljs.core.Symbol(null,"off!","off!",1454675678,null),new cljs.core.Symbol(null,"grn","grn",-756326672,null),new cljs.core.Symbol(null,"p!","p!",1194187378,null),new cljs.core.Symbol(null,"pan3","pan3",-1271029360,null),new cljs.core.Symbol(null,"run?","run?",-1901812910,null),new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.Symbol(null,"call!","call!",-1464381253,null),new cljs.core.Symbol(null,"monos","monos",665668743,null),new cljs.core.Symbol(null,"on!","on!",-1979401336,null),new cljs.core.Symbol(null,"grnstop","grnstop",1449719600,null),new cljs.core.Symbol(null,"metal","metal",-108536953,null),new cljs.core.Symbol(null,"fan","fan",300705506,null),new cljs.core.Symbol(null,"start!","start!",1571930471,null),new cljs.core.Symbol(null,"grnstart","grnstart",-1175524468,null),new cljs.core.Symbol(null,"go!","go!",1742247986,null),new cljs.core.Symbol(null,"tone-get","tone-get",-101281966,null),new cljs.core.Symbol(null,"clear!","clear!",1495717109,null),new cljs.core.Symbol(null,"synth","synth",777830680,null),new cljs.core.Symbol(null,"chain","chain",1656162556,null),new cljs.core.Symbol(null,"setrsrc","setrsrc",-99527795,null),new cljs.core.Symbol(null,"setprops!","setprops!",205303819,null),new cljs.core.Symbol(null,"secs","secs",-1122105678,null),new cljs.core.Symbol(null,"stop!","stop!",-1927800846,null),new cljs.core.Symbol(null,"getrsrc","getrsrc",-32417159,null),new cljs.core.Symbol(null,"draw","draw",-1296104095,null),new cljs.core.Symbol(null,"tone-set!","tone-set!",1747412138,null)]);
/**
 * This is the route to almost all of the ToneJS built-in functionality inside REPLiCA.
 */
replica.tone.t = (function replica$tone$t(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13617 = arguments.length;
var i__4532__auto___13618 = (0);
while(true){
if((i__4532__auto___13618 < len__4531__auto___13617)){
args__4534__auto__.push((arguments[i__4532__auto___13618]));

var G__13619 = (i__4532__auto___13618 + (1));
i__4532__auto___13618 = G__13619;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.tone.t.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.tone.t.cljs$core$IFn$_invoke$arity$variadic = (function (route,args){
var G__13616 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join('');
switch (G__13616) {
case "doc":
return replica.utils.doc_commands.call(null,new cljs.core.Symbol("replica.tone","t","replica.tone/t",-1082667992,null),replica.tone.routes,new cljs.core.Symbol(null,"t","t",242699008,null));

break;
default:
return cljs.core.apply.call(null,replica.utils.proc_BANG_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"t","t",242699008,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join(''),args);

}
});

replica.tone.t.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.tone.t.cljs$lang$applyTo = (function (seq13614){
var G__13615 = cljs.core.first.call(null,seq13614);
var seq13614__$1 = cljs.core.next.call(null,seq13614);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13615,seq13614__$1);
});

replica.utils.add_routes_BANG_.call(null,new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"replica.tone","replica.tone",768408542,null),replica.tone.routes);

//# sourceMappingURL=tone.js.map
