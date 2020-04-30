// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__27183__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__27183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27184__i = 0, G__27184__a = new Array(arguments.length -  0);
while (G__27184__i < G__27184__a.length) {G__27184__a[G__27184__i] = arguments[G__27184__i + 0]; ++G__27184__i;}
  args = new cljs.core.IndexedSeq(G__27184__a,0,null);
} 
return G__27183__delegate.call(this,args);};
G__27183.cljs$lang$maxFixedArity = 0;
G__27183.cljs$lang$applyTo = (function (arglist__27185){
var args = cljs.core.seq(arglist__27185);
return G__27183__delegate(args);
});
G__27183.cljs$core$IFn$_invoke$arity$variadic = G__27183__delegate;
return G__27183;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__27186__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__27186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27187__i = 0, G__27187__a = new Array(arguments.length -  0);
while (G__27187__i < G__27187__a.length) {G__27187__a[G__27187__i] = arguments[G__27187__i + 0]; ++G__27187__i;}
  args = new cljs.core.IndexedSeq(G__27187__a,0,null);
} 
return G__27186__delegate.call(this,args);};
G__27186.cljs$lang$maxFixedArity = 0;
G__27186.cljs$lang$applyTo = (function (arglist__27188){
var args = cljs.core.seq(arglist__27188);
return G__27186__delegate(args);
});
G__27186.cljs$core$IFn$_invoke$arity$variadic = G__27186__delegate;
return G__27186;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
