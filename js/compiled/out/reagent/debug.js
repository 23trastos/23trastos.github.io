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
var G__19617__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19617 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19618__i = 0, G__19618__a = new Array(arguments.length -  0);
while (G__19618__i < G__19618__a.length) {G__19618__a[G__19618__i] = arguments[G__19618__i + 0]; ++G__19618__i;}
  args = new cljs.core.IndexedSeq(G__19618__a,0,null);
} 
return G__19617__delegate.call(this,args);};
G__19617.cljs$lang$maxFixedArity = 0;
G__19617.cljs$lang$applyTo = (function (arglist__19619){
var args = cljs.core.seq(arglist__19619);
return G__19617__delegate(args);
});
G__19617.cljs$core$IFn$_invoke$arity$variadic = G__19617__delegate;
return G__19617;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__19620__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19620 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19621__i = 0, G__19621__a = new Array(arguments.length -  0);
while (G__19621__i < G__19621__a.length) {G__19621__a[G__19621__i] = arguments[G__19621__i + 0]; ++G__19621__i;}
  args = new cljs.core.IndexedSeq(G__19621__a,0,null);
} 
return G__19620__delegate.call(this,args);};
G__19620.cljs$lang$maxFixedArity = 0;
G__19620.cljs$lang$applyTo = (function (arglist__19622){
var args = cljs.core.seq(arglist__19622);
return G__19620__delegate(args);
});
G__19620.cljs$core$IFn$_invoke$arity$variadic = G__19620__delegate;
return G__19620;
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
