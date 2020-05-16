// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19218){
var map__19219 = p__19218;
var map__19219__$1 = ((((!((map__19219 == null)))?(((((map__19219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19219):map__19219);
var m = map__19219__$1;
var n = cljs.core.get.call(null,map__19219__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__19219__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19221_19243 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19222_19244 = null;
var count__19223_19245 = (0);
var i__19224_19246 = (0);
while(true){
if((i__19224_19246 < count__19223_19245)){
var f_19247 = cljs.core._nth.call(null,chunk__19222_19244,i__19224_19246);
cljs.core.println.call(null,"  ",f_19247);


var G__19248 = seq__19221_19243;
var G__19249 = chunk__19222_19244;
var G__19250 = count__19223_19245;
var G__19251 = (i__19224_19246 + (1));
seq__19221_19243 = G__19248;
chunk__19222_19244 = G__19249;
count__19223_19245 = G__19250;
i__19224_19246 = G__19251;
continue;
} else {
var temp__5457__auto___19252 = cljs.core.seq.call(null,seq__19221_19243);
if(temp__5457__auto___19252){
var seq__19221_19253__$1 = temp__5457__auto___19252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19221_19253__$1)){
var c__4351__auto___19254 = cljs.core.chunk_first.call(null,seq__19221_19253__$1);
var G__19255 = cljs.core.chunk_rest.call(null,seq__19221_19253__$1);
var G__19256 = c__4351__auto___19254;
var G__19257 = cljs.core.count.call(null,c__4351__auto___19254);
var G__19258 = (0);
seq__19221_19243 = G__19255;
chunk__19222_19244 = G__19256;
count__19223_19245 = G__19257;
i__19224_19246 = G__19258;
continue;
} else {
var f_19259 = cljs.core.first.call(null,seq__19221_19253__$1);
cljs.core.println.call(null,"  ",f_19259);


var G__19260 = cljs.core.next.call(null,seq__19221_19253__$1);
var G__19261 = null;
var G__19262 = (0);
var G__19263 = (0);
seq__19221_19243 = G__19260;
chunk__19222_19244 = G__19261;
count__19223_19245 = G__19262;
i__19224_19246 = G__19263;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19264 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19264);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19264)))?cljs.core.second.call(null,arglists_19264):arglists_19264));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19225_19265 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19226_19266 = null;
var count__19227_19267 = (0);
var i__19228_19268 = (0);
while(true){
if((i__19228_19268 < count__19227_19267)){
var vec__19229_19269 = cljs.core._nth.call(null,chunk__19226_19266,i__19228_19268);
var name_19270 = cljs.core.nth.call(null,vec__19229_19269,(0),null);
var map__19232_19271 = cljs.core.nth.call(null,vec__19229_19269,(1),null);
var map__19232_19272__$1 = ((((!((map__19232_19271 == null)))?(((((map__19232_19271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19232_19271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19232_19271):map__19232_19271);
var doc_19273 = cljs.core.get.call(null,map__19232_19272__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19274 = cljs.core.get.call(null,map__19232_19272__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19270);

cljs.core.println.call(null," ",arglists_19274);

if(cljs.core.truth_(doc_19273)){
cljs.core.println.call(null," ",doc_19273);
} else {
}


var G__19275 = seq__19225_19265;
var G__19276 = chunk__19226_19266;
var G__19277 = count__19227_19267;
var G__19278 = (i__19228_19268 + (1));
seq__19225_19265 = G__19275;
chunk__19226_19266 = G__19276;
count__19227_19267 = G__19277;
i__19228_19268 = G__19278;
continue;
} else {
var temp__5457__auto___19279 = cljs.core.seq.call(null,seq__19225_19265);
if(temp__5457__auto___19279){
var seq__19225_19280__$1 = temp__5457__auto___19279;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19225_19280__$1)){
var c__4351__auto___19281 = cljs.core.chunk_first.call(null,seq__19225_19280__$1);
var G__19282 = cljs.core.chunk_rest.call(null,seq__19225_19280__$1);
var G__19283 = c__4351__auto___19281;
var G__19284 = cljs.core.count.call(null,c__4351__auto___19281);
var G__19285 = (0);
seq__19225_19265 = G__19282;
chunk__19226_19266 = G__19283;
count__19227_19267 = G__19284;
i__19228_19268 = G__19285;
continue;
} else {
var vec__19234_19286 = cljs.core.first.call(null,seq__19225_19280__$1);
var name_19287 = cljs.core.nth.call(null,vec__19234_19286,(0),null);
var map__19237_19288 = cljs.core.nth.call(null,vec__19234_19286,(1),null);
var map__19237_19289__$1 = ((((!((map__19237_19288 == null)))?(((((map__19237_19288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19237_19288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19237_19288):map__19237_19288);
var doc_19290 = cljs.core.get.call(null,map__19237_19289__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19291 = cljs.core.get.call(null,map__19237_19289__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19287);

cljs.core.println.call(null," ",arglists_19291);

if(cljs.core.truth_(doc_19290)){
cljs.core.println.call(null," ",doc_19290);
} else {
}


var G__19292 = cljs.core.next.call(null,seq__19225_19280__$1);
var G__19293 = null;
var G__19294 = (0);
var G__19295 = (0);
seq__19225_19265 = G__19292;
chunk__19226_19266 = G__19293;
count__19227_19267 = G__19294;
i__19228_19268 = G__19295;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__19239 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19240 = null;
var count__19241 = (0);
var i__19242 = (0);
while(true){
if((i__19242 < count__19241)){
var role = cljs.core._nth.call(null,chunk__19240,i__19242);
var temp__5457__auto___19296__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___19296__$1)){
var spec_19297 = temp__5457__auto___19296__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19297));
} else {
}


var G__19298 = seq__19239;
var G__19299 = chunk__19240;
var G__19300 = count__19241;
var G__19301 = (i__19242 + (1));
seq__19239 = G__19298;
chunk__19240 = G__19299;
count__19241 = G__19300;
i__19242 = G__19301;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__19239);
if(temp__5457__auto____$1){
var seq__19239__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19239__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__19239__$1);
var G__19302 = cljs.core.chunk_rest.call(null,seq__19239__$1);
var G__19303 = c__4351__auto__;
var G__19304 = cljs.core.count.call(null,c__4351__auto__);
var G__19305 = (0);
seq__19239 = G__19302;
chunk__19240 = G__19303;
count__19241 = G__19304;
i__19242 = G__19305;
continue;
} else {
var role = cljs.core.first.call(null,seq__19239__$1);
var temp__5457__auto___19306__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___19306__$2)){
var spec_19307 = temp__5457__auto___19306__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19307));
} else {
}


var G__19308 = cljs.core.next.call(null,seq__19239__$1);
var G__19309 = null;
var G__19310 = (0);
var G__19311 = (0);
seq__19239 = G__19308;
chunk__19240 = G__19309;
count__19241 = G__19310;
i__19242 = G__19311;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
