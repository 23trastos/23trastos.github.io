// Compiled by ClojureScript 1.10.339 {}
goog.provide('replica.tone');
goog.require('cljs.core');
goog.require('tonejs');
goog.require('replica.utils');
if((typeof replica !== 'undefined') && (typeof replica.tone !== 'undefined') && (typeof replica.tone.rscs !== 'undefined')){
} else {
replica.tone.rscs = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"run","run",-1821166653),false], null));
}
replica.tone.getrsc = (function replica$tone$getrsc(k,id){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,replica.tone.rscs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,id], null));
});
/**
 * Creates a new Tone.Synth
 */
replica.tone.monos = (function replica$tone$monos(var_args){
var G__108180 = arguments.length;
switch (G__108180) {
case 2:
return replica.tone.monos.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___108185 = arguments.length;
var i__4532__auto___108186 = (0);
while(true){
if((i__4532__auto___108186 < len__4531__auto___108185)){
args_arr__4546__auto__.push((arguments[i__4532__auto___108186]));

var G__108187 = (i__4532__auto___108186 + (1));
i__4532__auto___108186 = G__108187;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice(2),(0),null));
return replica.tone.monos.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4547__auto__);

}
});

replica.tone.monos.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__108181){
var map__108182 = p__108181;
var map__108182__$1 = ((((!((map__108182 == null)))?(((((map__108182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__108182):map__108182);
var osc = cljs.core.get.call(null,map__108182__$1,new cljs.core.Keyword(null,"osc","osc",218527081),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"triangle","triangle",-187845140,null)], null));
var a = cljs.core.get.call(null,map__108182__$1,new cljs.core.Keyword(null,"a","a",-2123407586),0.005);
var d = cljs.core.get.call(null,map__108182__$1,new cljs.core.Keyword(null,"d","d",1972142424),0.1);
var s = cljs.core.get.call(null,map__108182__$1,new cljs.core.Keyword(null,"s","s",1705939918),0.3);
var r = cljs.core.get.call(null,map__108182__$1,new cljs.core.Keyword(null,"r","r",-471384190),(1));
return replica.tone.monos.call(null,id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oscillator","oscillator",-1200469980),osc,new cljs.core.Keyword(null,"envelope","envelope",-236796318),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attack","attack",1957061788),a,new cljs.core.Keyword(null,"decay","decay",1036712184),d,new cljs.core.Keyword(null,"sustain","sustain",1604277844),s,new cljs.core.Keyword(null,"release","release",-1534371381),r], null)], null));
});

/** @this {Function} */
replica.tone.monos.cljs$lang$applyTo = (function (seq108178){
var G__108179 = cljs.core.first.call(null,seq108178);
var seq108178__$1 = cljs.core.next.call(null,seq108178);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__108179,seq108178__$1);
});

replica.tone.monos.cljs$core$IFn$_invoke$arity$2 = (function (id,settings){
return cljs.core.swap_BANG_.call(null,replica.tone.rscs,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ins","ins",-1021983570),id], null),(new Tone.Synth(cljs.core.clj__GT_js.call(null,settings))).toMaster());
});

replica.tone.monos.cljs$lang$maxFixedArity = 2;

/**
 * Creates a new Tone.MetalSynth
 */
replica.tone.metal = (function replica$tone$metal(var_args){
var G__108191 = arguments.length;
switch (G__108191) {
case 2:
return replica.tone.metal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___108196 = arguments.length;
var i__4532__auto___108197 = (0);
while(true){
if((i__4532__auto___108197 < len__4531__auto___108196)){
args_arr__4546__auto__.push((arguments[i__4532__auto___108197]));

var G__108198 = (i__4532__auto___108197 + (1));
i__4532__auto___108197 = G__108198;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice(2),(0),null));
return replica.tone.metal.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4547__auto__);

}
});

replica.tone.metal.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__108192){
var map__108193 = p__108192;
var map__108193__$1 = ((((!((map__108193 == null)))?(((((map__108193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__108193):map__108193);
var freq = cljs.core.get.call(null,map__108193__$1,new cljs.core.Keyword(null,"freq","freq",-1855845278),(200));
var a = cljs.core.get.call(null,map__108193__$1,new cljs.core.Keyword(null,"a","a",-2123407586),0.001);
var d = cljs.core.get.call(null,map__108193__$1,new cljs.core.Keyword(null,"d","d",1972142424),1.4);
var r = cljs.core.get.call(null,map__108193__$1,new cljs.core.Keyword(null,"r","r",-471384190),0.2);
var harm = cljs.core.get.call(null,map__108193__$1,new cljs.core.Keyword(null,"harm","harm",1565170924),5.1);
var modidx = cljs.core.get.call(null,map__108193__$1,new cljs.core.Keyword(null,"modidx","modidx",1879334676),(32));
var res = cljs.core.get.call(null,map__108193__$1,new cljs.core.Keyword(null,"res","res",-1395007879),(4000));
var octs = cljs.core.get.call(null,map__108193__$1,new cljs.core.Keyword(null,"octs","octs",136821420));
return replica.tone.metal.call(null,id,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"frequency","frequency",-1408891382),freq,new cljs.core.Keyword(null,"envelope","envelope",-236796318),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attack","attack",1957061788),a,new cljs.core.Keyword(null,"decay","decay",1036712184),d,new cljs.core.Keyword(null,"release","release",-1534371381),r], null),new cljs.core.Keyword(null,"harmonicity","harmonicity",697254201),harm,new cljs.core.Keyword(null,"modulationIndex","modulationIndex",-737747680),modidx,new cljs.core.Keyword(null,"resonance","resonance",2117117691),res,new cljs.core.Keyword(null,"octaves","octaves",955457820),1.5], null));
});

/** @this {Function} */
replica.tone.metal.cljs$lang$applyTo = (function (seq108189){
var G__108190 = cljs.core.first.call(null,seq108189);
var seq108189__$1 = cljs.core.next.call(null,seq108189);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__108190,seq108189__$1);
});

replica.tone.metal.cljs$core$IFn$_invoke$arity$2 = (function (id,settings){
return cljs.core.swap_BANG_.call(null,replica.tone.rscs,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ins","ins",-1021983570),id], null),(new Tone.MetalSynth(cljs.core.clj__GT_js.call(null,settings))).toMaster());
});

replica.tone.metal.cljs$lang$maxFixedArity = 2;

/**
 * Creates a new Tone.PluckSynth
 */
replica.tone.pluck = (function replica$tone$pluck(var_args){
var G__108202 = arguments.length;
switch (G__108202) {
case 2:
return replica.tone.pluck.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___108207 = arguments.length;
var i__4532__auto___108208 = (0);
while(true){
if((i__4532__auto___108208 < len__4531__auto___108207)){
args_arr__4546__auto__.push((arguments[i__4532__auto___108208]));

var G__108209 = (i__4532__auto___108208 + (1));
i__4532__auto___108208 = G__108209;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice(2),(0),null));
return replica.tone.pluck.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4547__auto__);

}
});

replica.tone.pluck.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__108203){
var map__108204 = p__108203;
var map__108204__$1 = ((((!((map__108204 == null)))?(((((map__108204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__108204):map__108204);
var noise = cljs.core.get.call(null,map__108204__$1,new cljs.core.Keyword(null,"noise","noise",-994696820),(1));
var damp = cljs.core.get.call(null,map__108204__$1,new cljs.core.Keyword(null,"damp","damp",1134047790),(4000));
var res = cljs.core.get.call(null,map__108204__$1,new cljs.core.Keyword(null,"res","res",-1395007879),0.99);
return replica.tone.pluck.call(null,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attackNoise","attackNoise",1242694779),noise,new cljs.core.Keyword(null,"dampening","dampening",1297466721),damp,new cljs.core.Keyword(null,"resonance","resonance",2117117691),res], null));
});

/** @this {Function} */
replica.tone.pluck.cljs$lang$applyTo = (function (seq108200){
var G__108201 = cljs.core.first.call(null,seq108200);
var seq108200__$1 = cljs.core.next.call(null,seq108200);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__108201,seq108200__$1);
});

replica.tone.pluck.cljs$core$IFn$_invoke$arity$2 = (function (id,settings){
return cljs.core.swap_BANG_.call(null,replica.tone.rscs,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ins","ins",-1021983570),id], null),(new Tone.PluckSynth(cljs.core.clj__GT_js.call(null,settings))).toMaster());
});

replica.tone.pluck.cljs$lang$maxFixedArity = 2;

/**
 * Plays a Synth
 */
replica.tone.p_BANG_ = (function replica$tone$p_BANG_(id,freq,dur,t,vel){
var s = replica.tone.getrsc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id);
var G__108210 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
switch (G__108210) {
case "Synth":
return s.triggerAttackRelease(freq,dur,t,vel);

break;
case "MetalSynth":
s.frequency.value = freq;

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
var s = replica.tone.getrsc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id);
var G__108212 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
switch (G__108212) {
case "Synth":
return s.triggerAttack(freq,t,vel);

break;
case "PluckSynth":
return s.triggerAttack(freq,t);

break;
case "MetalSynth":
s.frequency.value = freq;

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
return replica.tone.getrsc.call(null,new cljs.core.Keyword(null,"ins","ins",-1021983570),id).triggerRelease(t);
});
/**
 * Schedules an event repeated on a time interval.
 */
replica.tone.schr_BANG_ = (function replica$tone$schr_BANG_(interval,function$){
return Tone.Transport.scheduleRepeat(function$,interval);
});
replica.tone.start_BANG_ = (function replica$tone$start_BANG_(){
Tone.Transport.start();

cljs.core.swap_BANG_.call(null,replica.tone.rscs,cljs.core.assoc,new cljs.core.Keyword(null,"run","run",-1821166653),true);

return "started!";
});
replica.tone.stop_BANG_ = (function replica$tone$stop_BANG_(){
Tone.Transport.stop();

cljs.core.swap_BANG_.call(null,replica.tone.rscs,cljs.core.assoc,new cljs.core.Keyword(null,"run","run",-1821166653),false);

return "stopped!";
});
replica.tone.go_BANG_ = (function replica$tone$go_BANG_(seconds){
return Tone.Transport.seconds = seconds;
});
replica.tone.run_QMARK_ = (function replica$tone$run_QMARK_(){
return new cljs.core.Keyword(null,"run","run",-1821166653).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replica.tone.rscs));
});
replica.tone.cancel_BANG_ = (function replica$tone$cancel_BANG_(var_args){
var G__108215 = arguments.length;
switch (G__108215) {
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

cljs.core.swap_BANG_.call(null,replica.tone.rscs,new cljs.core.Keyword(null,"loops","loops",-1766681555),cljs.core.PersistentArrayMap.EMPTY);

return "All schedules cancelled.";
});

replica.tone.cancel_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (id){
if(typeof id === 'number'){
return Tone.Transport.clear(id);
} else {
replica.tone.getrsc.call(null,new cljs.core.Keyword(null,"loops","loops",-1766681555),id).dispose();

return cljs.core.swap_BANG_.call(null,replica.tone.rscs,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loops","loops",-1766681555),id], null),null);
}
});

replica.tone.cancel_BANG_.cljs$lang$maxFixedArity = 1;

/**
 * Creates a new loop with defined start and end.
 */
replica.tone.l = (function replica$tone$l(id,interval,start_time,end_time,function$){
var temp__5457__auto___108217 = replica.tone.getrsc.call(null,new cljs.core.Keyword(null,"loops","loops",-1766681555),id);
if(cljs.core.truth_(temp__5457__auto___108217)){
var lp_108218 = temp__5457__auto___108217;
lp_108218.dispose();
} else {
}

return cljs.core.swap_BANG_.call(null,replica.tone.rscs,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loops","loops",-1766681555),id], null),(new Tone.Loop(function$,interval)).start(start_time).stop(end_time));
});
/**
 * ramps to a new Tempo in bpm within the desired time.
 */
replica.tone.st_BANG_ = (function replica$tone$st_BANG_(target_bpm,ramp_time){
return Tone.Transport.bpm.rampTo(target_bpm,(cljs.core.truth_(cljs.core.every_pred.call(null,cljs.core.number_QMARK_,cljs.core.partial.call(null,cljs.core._LT_,(0))).call(null,ramp_time))?ramp_time:0.001));
});
replica.tone.routes = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"schr","schr",-1992784341,null),new cljs.core.Symbol(null,"l","l",-1258542346,null),new cljs.core.Symbol(null,"st","st",-1199179941,null),new cljs.core.Symbol(null,"getrsc","getrsc",1054406920,null),new cljs.core.Symbol(null,"cancel","cancel",-323556833,null),new cljs.core.Symbol(null,"off","off",-2047994980,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"run?","run?",-1901812910,null),new cljs.core.Symbol(null,"pluck","pluck",-1578113584,null),new cljs.core.Symbol(null,"monos","monos",665668743,null),new cljs.core.Symbol(null,"on","on",1814405471,null),new cljs.core.Symbol(null,"metal","metal",-108536953,null),new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"go","go",1493584872,null),new cljs.core.Symbol(null,"stop","stop",-500379815,null)],[new cljs.core.Symbol(null,"schr!","schr!",210627709,null),new cljs.core.Symbol(null,"l","l",-1258542346,null),new cljs.core.Symbol(null,"st!","st!",422024129,null),new cljs.core.Symbol(null,"getrsc","getrsc",1054406920,null),new cljs.core.Symbol(null,"cancel!","cancel!",963993008,null),new cljs.core.Symbol(null,"off!","off!",1454675678,null),new cljs.core.Symbol(null,"p!","p!",1194187378,null),new cljs.core.Symbol(null,"run?","run?",-1901812910,null),new cljs.core.Symbol(null,"pluck","pluck",-1578113584,null),new cljs.core.Symbol(null,"monos","monos",665668743,null),new cljs.core.Symbol(null,"on!","on!",-1979401336,null),new cljs.core.Symbol(null,"metal","metal",-108536953,null),new cljs.core.Symbol(null,"start!","start!",1571930471,null),new cljs.core.Symbol(null,"go!","go!",1742247986,null),new cljs.core.Symbol(null,"stop!","stop!",-1927800846,null)]);
/**
 * This is the route to almost all of the ToneJS built-in functionality inside REPLiCA.
 */
replica.tone.t = (function replica$tone$t(var_args){
var args__4534__auto__ = [];
var len__4531__auto___108222 = arguments.length;
var i__4532__auto___108223 = (0);
while(true){
if((i__4532__auto___108223 < len__4531__auto___108222)){
args__4534__auto__.push((arguments[i__4532__auto___108223]));

var G__108224 = (i__4532__auto___108223 + (1));
i__4532__auto___108223 = G__108224;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.tone.t.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.tone.t.cljs$core$IFn$_invoke$arity$variadic = (function (route,args){
var G__108221 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join('');
switch (G__108221) {
case "doc":
return replica.utils.doc_commands.call(null,new cljs.core.Symbol("replica.tone","t","replica.tone/t",-1082667992,null),replica.tone.routes,new cljs.core.Symbol(null,"t","t",242699008,null));

break;
default:
return cljs.core.apply.call(null,replica.utils.proc_BANG_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"t","t",242699008,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join(''),args);

}
});

replica.tone.t.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.tone.t.cljs$lang$applyTo = (function (seq108219){
var G__108220 = cljs.core.first.call(null,seq108219);
var seq108219__$1 = cljs.core.next.call(null,seq108219);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__108220,seq108219__$1);
});

replica.utils.add_routes_BANG_.call(null,new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"replica.tone","replica.tone",768408542,null),replica.tone.routes);

//# sourceMappingURL=tone.js.map
