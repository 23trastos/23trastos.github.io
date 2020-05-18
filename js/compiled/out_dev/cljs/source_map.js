// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__10907){
var vec__10908 = p__10907;
var i = cljs.core.nth.call(null,vec__10908,(0),null);
var v = cljs.core.nth.call(null,vec__10908,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__10911 = seg;
var gcol = cljs.core.nth.call(null,vec__10911,(0),null);
var source = cljs.core.nth.call(null,vec__10911,(1),null);
var line = cljs.core.nth.call(null,vec__10911,(2),null);
var col = cljs.core.nth.call(null,vec__10911,(3),null);
var name = cljs.core.nth.call(null,vec__10911,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5457__auto__)){
var name__$1 = temp__5457__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__10914 = seg;
var gcol = cljs.core.nth.call(null,vec__10914,(0),null);
var source = cljs.core.nth.call(null,vec__10914,(1),null);
var line = cljs.core.nth.call(null,vec__10914,(2),null);
var col = cljs.core.nth.call(null,vec__10914,(3),null);
var name = cljs.core.nth.call(null,vec__10914,(4),null);
var vec__10917 = relseg;
var rgcol = cljs.core.nth.call(null,vec__10917,(0),null);
var rsource = cljs.core.nth.call(null,vec__10917,(1),null);
var rline = cljs.core.nth.call(null,vec__10917,(2),null);
var rcol = cljs.core.nth.call(null,vec__10917,(3),null);
var rname = cljs.core.nth.call(null,vec__10917,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__3949__auto__ = source;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__3949__auto__ = line;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__3949__auto__ = col;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__3949__auto__ = name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__10920 = segmap;
var map__10920__$1 = ((((!((map__10920 == null)))?(((((map__10920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10920):map__10920);
var gcol = cljs.core.get.call(null,map__10920__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__10920__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__10920__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__10920__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__10920__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__10920,map__10920__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__10920,map__10920__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__10920,map__10920__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__10920,map__10920__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__10920,map__10920__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__10920,map__10920__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__10923 = arguments.length;
switch (G__10923) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__10924 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__10928 = cljs.core.next.call(null,segs__$1);
var G__10929 = nrelseg;
var G__10930 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__10928;
relseg__$1 = G__10929;
result__$1 = G__10930;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__10924,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__10924,(1),null);
var G__10931 = (gline + (1));
var G__10932 = cljs.core.next.call(null,lines__$1);
var G__10933 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__10934 = result__$1;
gline = G__10931;
lines__$1 = G__10932;
relseg = G__10933;
result = G__10934;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__10936 = segmap;
var map__10936__$1 = ((((!((map__10936 == null)))?(((((map__10936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10936):map__10936);
var gcol = cljs.core.get.call(null,map__10936__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__10936__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__10936__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__10936__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__10936__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__10936,map__10936__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__10936,map__10936__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__10935_SHARP_){
return cljs.core.conj.call(null,p1__10935_SHARP_,d__$1);
});})(map__10936,map__10936__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__10936,map__10936__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__10939 = arguments.length;
switch (G__10939) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__10940 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__10944 = cljs.core.next.call(null,segs__$1);
var G__10945 = nrelseg;
var G__10946 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__10944;
relseg__$1 = G__10945;
result__$1 = G__10946;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__10940,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__10940,(1),null);
var G__10947 = (gline + (1));
var G__10948 = cljs.core.next.call(null,lines__$1);
var G__10949 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__10950 = result__$1;
gline = G__10947;
lines__$1 = G__10948;
relseg = G__10949;
result = G__10950;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__10951){
var vec__10952 = p__10951;
var _ = cljs.core.nth.call(null,vec__10952,(0),null);
var source = cljs.core.nth.call(null,vec__10952,(1),null);
var line = cljs.core.nth.call(null,vec__10952,(2),null);
var col = cljs.core.nth.call(null,vec__10952,(3),null);
var name = cljs.core.nth.call(null,vec__10952,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__10955){
var vec__10956 = p__10955;
var gcol = cljs.core.nth.call(null,vec__10956,(0),null);
var sidx = cljs.core.nth.call(null,vec__10956,(1),null);
var line = cljs.core.nth.call(null,vec__10956,(2),null);
var col = cljs.core.nth.call(null,vec__10956,(3),null);
var name = cljs.core.nth.call(null,vec__10956,(4),null);
var seg = vec__10956;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__10956,gcol,sidx,line,col,name,seg,relseg){
return (function (p__10959){
var vec__10960 = p__10959;
var _ = cljs.core.nth.call(null,vec__10960,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__10960,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__10960,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__10960,(3),null);
var lname = cljs.core.nth.call(null,vec__10960,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__3949__auto__ = name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__10956,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__3949__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5455__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5455__auto__)){
var name = temp__5455__auto__;
var idx = (function (){var temp__5455__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5455__auto____$1)){
var idx = temp__5455__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__10966 = cljs.core.seq.call(null,infos);
var chunk__10967 = null;
var count__10968 = (0);
var i__10969 = (0);
while(true){
if((i__10969 < count__10968)){
var info = cljs.core._nth.call(null,chunk__10967,i__10969);
var segv_11048 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_11049 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_11050 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_11049 > (lc_11050 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__10966,chunk__10967,count__10968,i__10969,segv_11048,gline_11049,lc_11050,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_11049 - (lc_11050 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_11048], null));
});})(seq__10966,chunk__10967,count__10968,i__10969,segv_11048,gline_11049,lc_11050,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__10966,chunk__10967,count__10968,i__10969,segv_11048,gline_11049,lc_11050,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11049], null),cljs.core.conj,segv_11048);
});})(seq__10966,chunk__10967,count__10968,i__10969,segv_11048,gline_11049,lc_11050,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__11051 = seq__10966;
var G__11052 = chunk__10967;
var G__11053 = count__10968;
var G__11054 = (i__10969 + (1));
seq__10966 = G__11051;
chunk__10967 = G__11052;
count__10968 = G__11053;
i__10969 = G__11054;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__10966);
if(temp__5457__auto__){
var seq__10966__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10966__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__10966__$1);
var G__11055 = cljs.core.chunk_rest.call(null,seq__10966__$1);
var G__11056 = c__4351__auto__;
var G__11057 = cljs.core.count.call(null,c__4351__auto__);
var G__11058 = (0);
seq__10966 = G__11055;
chunk__10967 = G__11056;
count__10968 = G__11057;
i__10969 = G__11058;
continue;
} else {
var info = cljs.core.first.call(null,seq__10966__$1);
var segv_11059 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_11060 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_11061 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_11060 > (lc_11061 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__10966,chunk__10967,count__10968,i__10969,segv_11059,gline_11060,lc_11061,info,seq__10966__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_11060 - (lc_11061 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_11059], null));
});})(seq__10966,chunk__10967,count__10968,i__10969,segv_11059,gline_11060,lc_11061,info,seq__10966__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__10966,chunk__10967,count__10968,i__10969,segv_11059,gline_11060,lc_11061,info,seq__10966__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11060], null),cljs.core.conj,segv_11059);
});})(seq__10966,chunk__10967,count__10968,i__10969,segv_11059,gline_11060,lc_11061,info,seq__10966__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__11062 = cljs.core.next.call(null,seq__10966__$1);
var G__11063 = null;
var G__11064 = (0);
var G__11065 = (0);
seq__10966 = G__11062;
chunk__10967 = G__11063;
count__10968 = G__11064;
i__10969 = G__11065;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__10970_11066 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__10971_11067 = null;
var count__10972_11068 = (0);
var i__10973_11069 = (0);
while(true){
if((i__10973_11069 < count__10972_11068)){
var vec__10974_11070 = cljs.core._nth.call(null,chunk__10971_11067,i__10973_11069);
var source_idx_11071 = cljs.core.nth.call(null,vec__10974_11070,(0),null);
var vec__10977_11072 = cljs.core.nth.call(null,vec__10974_11070,(1),null);
var __11073 = cljs.core.nth.call(null,vec__10977_11072,(0),null);
var lines_11074__$1 = cljs.core.nth.call(null,vec__10977_11072,(1),null);
var seq__10980_11075 = cljs.core.seq.call(null,lines_11074__$1);
var chunk__10981_11076 = null;
var count__10982_11077 = (0);
var i__10983_11078 = (0);
while(true){
if((i__10983_11078 < count__10982_11077)){
var vec__10984_11079 = cljs.core._nth.call(null,chunk__10981_11076,i__10983_11078);
var line_11080 = cljs.core.nth.call(null,vec__10984_11079,(0),null);
var cols_11081 = cljs.core.nth.call(null,vec__10984_11079,(1),null);
var seq__10987_11082 = cljs.core.seq.call(null,cols_11081);
var chunk__10988_11083 = null;
var count__10989_11084 = (0);
var i__10990_11085 = (0);
while(true){
if((i__10990_11085 < count__10989_11084)){
var vec__10991_11086 = cljs.core._nth.call(null,chunk__10988_11083,i__10990_11085);
var col_11087 = cljs.core.nth.call(null,vec__10991_11086,(0),null);
var infos_11088 = cljs.core.nth.call(null,vec__10991_11086,(1),null);
encode_cols.call(null,infos_11088,source_idx_11071,line_11080,col_11087);


var G__11089 = seq__10987_11082;
var G__11090 = chunk__10988_11083;
var G__11091 = count__10989_11084;
var G__11092 = (i__10990_11085 + (1));
seq__10987_11082 = G__11089;
chunk__10988_11083 = G__11090;
count__10989_11084 = G__11091;
i__10990_11085 = G__11092;
continue;
} else {
var temp__5457__auto___11093 = cljs.core.seq.call(null,seq__10987_11082);
if(temp__5457__auto___11093){
var seq__10987_11094__$1 = temp__5457__auto___11093;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10987_11094__$1)){
var c__4351__auto___11095 = cljs.core.chunk_first.call(null,seq__10987_11094__$1);
var G__11096 = cljs.core.chunk_rest.call(null,seq__10987_11094__$1);
var G__11097 = c__4351__auto___11095;
var G__11098 = cljs.core.count.call(null,c__4351__auto___11095);
var G__11099 = (0);
seq__10987_11082 = G__11096;
chunk__10988_11083 = G__11097;
count__10989_11084 = G__11098;
i__10990_11085 = G__11099;
continue;
} else {
var vec__10994_11100 = cljs.core.first.call(null,seq__10987_11094__$1);
var col_11101 = cljs.core.nth.call(null,vec__10994_11100,(0),null);
var infos_11102 = cljs.core.nth.call(null,vec__10994_11100,(1),null);
encode_cols.call(null,infos_11102,source_idx_11071,line_11080,col_11101);


var G__11103 = cljs.core.next.call(null,seq__10987_11094__$1);
var G__11104 = null;
var G__11105 = (0);
var G__11106 = (0);
seq__10987_11082 = G__11103;
chunk__10988_11083 = G__11104;
count__10989_11084 = G__11105;
i__10990_11085 = G__11106;
continue;
}
} else {
}
}
break;
}


var G__11107 = seq__10980_11075;
var G__11108 = chunk__10981_11076;
var G__11109 = count__10982_11077;
var G__11110 = (i__10983_11078 + (1));
seq__10980_11075 = G__11107;
chunk__10981_11076 = G__11108;
count__10982_11077 = G__11109;
i__10983_11078 = G__11110;
continue;
} else {
var temp__5457__auto___11111 = cljs.core.seq.call(null,seq__10980_11075);
if(temp__5457__auto___11111){
var seq__10980_11112__$1 = temp__5457__auto___11111;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10980_11112__$1)){
var c__4351__auto___11113 = cljs.core.chunk_first.call(null,seq__10980_11112__$1);
var G__11114 = cljs.core.chunk_rest.call(null,seq__10980_11112__$1);
var G__11115 = c__4351__auto___11113;
var G__11116 = cljs.core.count.call(null,c__4351__auto___11113);
var G__11117 = (0);
seq__10980_11075 = G__11114;
chunk__10981_11076 = G__11115;
count__10982_11077 = G__11116;
i__10983_11078 = G__11117;
continue;
} else {
var vec__10997_11118 = cljs.core.first.call(null,seq__10980_11112__$1);
var line_11119 = cljs.core.nth.call(null,vec__10997_11118,(0),null);
var cols_11120 = cljs.core.nth.call(null,vec__10997_11118,(1),null);
var seq__11000_11121 = cljs.core.seq.call(null,cols_11120);
var chunk__11001_11122 = null;
var count__11002_11123 = (0);
var i__11003_11124 = (0);
while(true){
if((i__11003_11124 < count__11002_11123)){
var vec__11004_11125 = cljs.core._nth.call(null,chunk__11001_11122,i__11003_11124);
var col_11126 = cljs.core.nth.call(null,vec__11004_11125,(0),null);
var infos_11127 = cljs.core.nth.call(null,vec__11004_11125,(1),null);
encode_cols.call(null,infos_11127,source_idx_11071,line_11119,col_11126);


var G__11128 = seq__11000_11121;
var G__11129 = chunk__11001_11122;
var G__11130 = count__11002_11123;
var G__11131 = (i__11003_11124 + (1));
seq__11000_11121 = G__11128;
chunk__11001_11122 = G__11129;
count__11002_11123 = G__11130;
i__11003_11124 = G__11131;
continue;
} else {
var temp__5457__auto___11132__$1 = cljs.core.seq.call(null,seq__11000_11121);
if(temp__5457__auto___11132__$1){
var seq__11000_11133__$1 = temp__5457__auto___11132__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11000_11133__$1)){
var c__4351__auto___11134 = cljs.core.chunk_first.call(null,seq__11000_11133__$1);
var G__11135 = cljs.core.chunk_rest.call(null,seq__11000_11133__$1);
var G__11136 = c__4351__auto___11134;
var G__11137 = cljs.core.count.call(null,c__4351__auto___11134);
var G__11138 = (0);
seq__11000_11121 = G__11135;
chunk__11001_11122 = G__11136;
count__11002_11123 = G__11137;
i__11003_11124 = G__11138;
continue;
} else {
var vec__11007_11139 = cljs.core.first.call(null,seq__11000_11133__$1);
var col_11140 = cljs.core.nth.call(null,vec__11007_11139,(0),null);
var infos_11141 = cljs.core.nth.call(null,vec__11007_11139,(1),null);
encode_cols.call(null,infos_11141,source_idx_11071,line_11119,col_11140);


var G__11142 = cljs.core.next.call(null,seq__11000_11133__$1);
var G__11143 = null;
var G__11144 = (0);
var G__11145 = (0);
seq__11000_11121 = G__11142;
chunk__11001_11122 = G__11143;
count__11002_11123 = G__11144;
i__11003_11124 = G__11145;
continue;
}
} else {
}
}
break;
}


var G__11146 = cljs.core.next.call(null,seq__10980_11112__$1);
var G__11147 = null;
var G__11148 = (0);
var G__11149 = (0);
seq__10980_11075 = G__11146;
chunk__10981_11076 = G__11147;
count__10982_11077 = G__11148;
i__10983_11078 = G__11149;
continue;
}
} else {
}
}
break;
}


var G__11150 = seq__10970_11066;
var G__11151 = chunk__10971_11067;
var G__11152 = count__10972_11068;
var G__11153 = (i__10973_11069 + (1));
seq__10970_11066 = G__11150;
chunk__10971_11067 = G__11151;
count__10972_11068 = G__11152;
i__10973_11069 = G__11153;
continue;
} else {
var temp__5457__auto___11154 = cljs.core.seq.call(null,seq__10970_11066);
if(temp__5457__auto___11154){
var seq__10970_11155__$1 = temp__5457__auto___11154;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10970_11155__$1)){
var c__4351__auto___11156 = cljs.core.chunk_first.call(null,seq__10970_11155__$1);
var G__11157 = cljs.core.chunk_rest.call(null,seq__10970_11155__$1);
var G__11158 = c__4351__auto___11156;
var G__11159 = cljs.core.count.call(null,c__4351__auto___11156);
var G__11160 = (0);
seq__10970_11066 = G__11157;
chunk__10971_11067 = G__11158;
count__10972_11068 = G__11159;
i__10973_11069 = G__11160;
continue;
} else {
var vec__11010_11161 = cljs.core.first.call(null,seq__10970_11155__$1);
var source_idx_11162 = cljs.core.nth.call(null,vec__11010_11161,(0),null);
var vec__11013_11163 = cljs.core.nth.call(null,vec__11010_11161,(1),null);
var __11164 = cljs.core.nth.call(null,vec__11013_11163,(0),null);
var lines_11165__$1 = cljs.core.nth.call(null,vec__11013_11163,(1),null);
var seq__11016_11166 = cljs.core.seq.call(null,lines_11165__$1);
var chunk__11017_11167 = null;
var count__11018_11168 = (0);
var i__11019_11169 = (0);
while(true){
if((i__11019_11169 < count__11018_11168)){
var vec__11020_11170 = cljs.core._nth.call(null,chunk__11017_11167,i__11019_11169);
var line_11171 = cljs.core.nth.call(null,vec__11020_11170,(0),null);
var cols_11172 = cljs.core.nth.call(null,vec__11020_11170,(1),null);
var seq__11023_11173 = cljs.core.seq.call(null,cols_11172);
var chunk__11024_11174 = null;
var count__11025_11175 = (0);
var i__11026_11176 = (0);
while(true){
if((i__11026_11176 < count__11025_11175)){
var vec__11027_11177 = cljs.core._nth.call(null,chunk__11024_11174,i__11026_11176);
var col_11178 = cljs.core.nth.call(null,vec__11027_11177,(0),null);
var infos_11179 = cljs.core.nth.call(null,vec__11027_11177,(1),null);
encode_cols.call(null,infos_11179,source_idx_11162,line_11171,col_11178);


var G__11180 = seq__11023_11173;
var G__11181 = chunk__11024_11174;
var G__11182 = count__11025_11175;
var G__11183 = (i__11026_11176 + (1));
seq__11023_11173 = G__11180;
chunk__11024_11174 = G__11181;
count__11025_11175 = G__11182;
i__11026_11176 = G__11183;
continue;
} else {
var temp__5457__auto___11184__$1 = cljs.core.seq.call(null,seq__11023_11173);
if(temp__5457__auto___11184__$1){
var seq__11023_11185__$1 = temp__5457__auto___11184__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11023_11185__$1)){
var c__4351__auto___11186 = cljs.core.chunk_first.call(null,seq__11023_11185__$1);
var G__11187 = cljs.core.chunk_rest.call(null,seq__11023_11185__$1);
var G__11188 = c__4351__auto___11186;
var G__11189 = cljs.core.count.call(null,c__4351__auto___11186);
var G__11190 = (0);
seq__11023_11173 = G__11187;
chunk__11024_11174 = G__11188;
count__11025_11175 = G__11189;
i__11026_11176 = G__11190;
continue;
} else {
var vec__11030_11191 = cljs.core.first.call(null,seq__11023_11185__$1);
var col_11192 = cljs.core.nth.call(null,vec__11030_11191,(0),null);
var infos_11193 = cljs.core.nth.call(null,vec__11030_11191,(1),null);
encode_cols.call(null,infos_11193,source_idx_11162,line_11171,col_11192);


var G__11194 = cljs.core.next.call(null,seq__11023_11185__$1);
var G__11195 = null;
var G__11196 = (0);
var G__11197 = (0);
seq__11023_11173 = G__11194;
chunk__11024_11174 = G__11195;
count__11025_11175 = G__11196;
i__11026_11176 = G__11197;
continue;
}
} else {
}
}
break;
}


var G__11198 = seq__11016_11166;
var G__11199 = chunk__11017_11167;
var G__11200 = count__11018_11168;
var G__11201 = (i__11019_11169 + (1));
seq__11016_11166 = G__11198;
chunk__11017_11167 = G__11199;
count__11018_11168 = G__11200;
i__11019_11169 = G__11201;
continue;
} else {
var temp__5457__auto___11202__$1 = cljs.core.seq.call(null,seq__11016_11166);
if(temp__5457__auto___11202__$1){
var seq__11016_11203__$1 = temp__5457__auto___11202__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11016_11203__$1)){
var c__4351__auto___11204 = cljs.core.chunk_first.call(null,seq__11016_11203__$1);
var G__11205 = cljs.core.chunk_rest.call(null,seq__11016_11203__$1);
var G__11206 = c__4351__auto___11204;
var G__11207 = cljs.core.count.call(null,c__4351__auto___11204);
var G__11208 = (0);
seq__11016_11166 = G__11205;
chunk__11017_11167 = G__11206;
count__11018_11168 = G__11207;
i__11019_11169 = G__11208;
continue;
} else {
var vec__11033_11209 = cljs.core.first.call(null,seq__11016_11203__$1);
var line_11210 = cljs.core.nth.call(null,vec__11033_11209,(0),null);
var cols_11211 = cljs.core.nth.call(null,vec__11033_11209,(1),null);
var seq__11036_11212 = cljs.core.seq.call(null,cols_11211);
var chunk__11037_11213 = null;
var count__11038_11214 = (0);
var i__11039_11215 = (0);
while(true){
if((i__11039_11215 < count__11038_11214)){
var vec__11040_11216 = cljs.core._nth.call(null,chunk__11037_11213,i__11039_11215);
var col_11217 = cljs.core.nth.call(null,vec__11040_11216,(0),null);
var infos_11218 = cljs.core.nth.call(null,vec__11040_11216,(1),null);
encode_cols.call(null,infos_11218,source_idx_11162,line_11210,col_11217);


var G__11219 = seq__11036_11212;
var G__11220 = chunk__11037_11213;
var G__11221 = count__11038_11214;
var G__11222 = (i__11039_11215 + (1));
seq__11036_11212 = G__11219;
chunk__11037_11213 = G__11220;
count__11038_11214 = G__11221;
i__11039_11215 = G__11222;
continue;
} else {
var temp__5457__auto___11223__$2 = cljs.core.seq.call(null,seq__11036_11212);
if(temp__5457__auto___11223__$2){
var seq__11036_11224__$1 = temp__5457__auto___11223__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11036_11224__$1)){
var c__4351__auto___11225 = cljs.core.chunk_first.call(null,seq__11036_11224__$1);
var G__11226 = cljs.core.chunk_rest.call(null,seq__11036_11224__$1);
var G__11227 = c__4351__auto___11225;
var G__11228 = cljs.core.count.call(null,c__4351__auto___11225);
var G__11229 = (0);
seq__11036_11212 = G__11226;
chunk__11037_11213 = G__11227;
count__11038_11214 = G__11228;
i__11039_11215 = G__11229;
continue;
} else {
var vec__11043_11230 = cljs.core.first.call(null,seq__11036_11224__$1);
var col_11231 = cljs.core.nth.call(null,vec__11043_11230,(0),null);
var infos_11232 = cljs.core.nth.call(null,vec__11043_11230,(1),null);
encode_cols.call(null,infos_11232,source_idx_11162,line_11210,col_11231);


var G__11233 = cljs.core.next.call(null,seq__11036_11224__$1);
var G__11234 = null;
var G__11235 = (0);
var G__11236 = (0);
seq__11036_11212 = G__11233;
chunk__11037_11213 = G__11234;
count__11038_11214 = G__11235;
i__11039_11215 = G__11236;
continue;
}
} else {
}
}
break;
}


var G__11237 = cljs.core.next.call(null,seq__11016_11203__$1);
var G__11238 = null;
var G__11239 = (0);
var G__11240 = (0);
seq__11016_11166 = G__11237;
chunk__11017_11167 = G__11238;
count__11018_11168 = G__11239;
i__11019_11169 = G__11240;
continue;
}
} else {
}
}
break;
}


var G__11241 = cljs.core.next.call(null,seq__10970_11155__$1);
var G__11242 = null;
var G__11243 = (0);
var G__11244 = (0);
seq__10970_11066 = G__11241;
chunk__10971_11067 = G__11242;
count__10972_11068 = G__11243;
i__10973_11069 = G__11244;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__11046 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__10963_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10963_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__10964_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__10964_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__10965_SHARP_){
return clojure.string.join.call(null,",",p1__10965_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__11047 = G__11046;
goog.object.set(G__11047,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__11047;
} else {
return G__11046;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__11245 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__11245,(0),null);
var col_map = cljs.core.nth.call(null,vec__11245,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__11248 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__11248,(0),null);
var infos = cljs.core.nth.call(null,vec__11248,(1),null);
var G__11254 = cljs.core.next.call(null,col_map_seq);
var G__11255 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__11248,col,infos,vec__11245,line,col_map){
return (function (v,p__11251){
var map__11252 = p__11251;
var map__11252__$1 = ((((!((map__11252 == null)))?(((((map__11252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11252):map__11252);
var gline = cljs.core.get.call(null,map__11252__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__11252__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__11248,col,infos,vec__11245,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__11254;
new_cols = G__11255;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__11256 = cljs.core.next.call(null,line_map_seq);
var G__11257 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__11256;
new_lines = G__11257;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__11258_11320 = cljs.core.seq.call(null,reverse_map);
var chunk__11259_11321 = null;
var count__11260_11322 = (0);
var i__11261_11323 = (0);
while(true){
if((i__11261_11323 < count__11260_11322)){
var vec__11262_11324 = cljs.core._nth.call(null,chunk__11259_11321,i__11261_11323);
var line_11325 = cljs.core.nth.call(null,vec__11262_11324,(0),null);
var columns_11326 = cljs.core.nth.call(null,vec__11262_11324,(1),null);
var seq__11265_11327 = cljs.core.seq.call(null,columns_11326);
var chunk__11266_11328 = null;
var count__11267_11329 = (0);
var i__11268_11330 = (0);
while(true){
if((i__11268_11330 < count__11267_11329)){
var vec__11269_11331 = cljs.core._nth.call(null,chunk__11266_11328,i__11268_11330);
var column_11332 = cljs.core.nth.call(null,vec__11269_11331,(0),null);
var column_info_11333 = cljs.core.nth.call(null,vec__11269_11331,(1),null);
var seq__11272_11334 = cljs.core.seq.call(null,column_info_11333);
var chunk__11273_11335 = null;
var count__11274_11336 = (0);
var i__11275_11337 = (0);
while(true){
if((i__11275_11337 < count__11274_11336)){
var map__11276_11338 = cljs.core._nth.call(null,chunk__11273_11335,i__11275_11337);
var map__11276_11339__$1 = ((((!((map__11276_11338 == null)))?(((((map__11276_11338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11276_11338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11276_11338):map__11276_11338);
var gline_11340 = cljs.core.get.call(null,map__11276_11339__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11341 = cljs.core.get.call(null,map__11276_11339__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11342 = cljs.core.get.call(null,map__11276_11339__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11340], null),cljs.core.fnil.call(null,((function (seq__11272_11334,chunk__11273_11335,count__11274_11336,i__11275_11337,seq__11265_11327,chunk__11266_11328,count__11267_11329,i__11268_11330,seq__11258_11320,chunk__11259_11321,count__11260_11322,i__11261_11323,map__11276_11338,map__11276_11339__$1,gline_11340,gcol_11341,name_11342,vec__11269_11331,column_11332,column_info_11333,vec__11262_11324,line_11325,columns_11326,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11341], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11325,new cljs.core.Keyword(null,"col","col",-1959363084),column_11332,new cljs.core.Keyword(null,"name","name",1843675177),name_11342], null));
});})(seq__11272_11334,chunk__11273_11335,count__11274_11336,i__11275_11337,seq__11265_11327,chunk__11266_11328,count__11267_11329,i__11268_11330,seq__11258_11320,chunk__11259_11321,count__11260_11322,i__11261_11323,map__11276_11338,map__11276_11339__$1,gline_11340,gcol_11341,name_11342,vec__11269_11331,column_11332,column_info_11333,vec__11262_11324,line_11325,columns_11326,inverted))
,cljs.core.sorted_map.call(null)));


var G__11343 = seq__11272_11334;
var G__11344 = chunk__11273_11335;
var G__11345 = count__11274_11336;
var G__11346 = (i__11275_11337 + (1));
seq__11272_11334 = G__11343;
chunk__11273_11335 = G__11344;
count__11274_11336 = G__11345;
i__11275_11337 = G__11346;
continue;
} else {
var temp__5457__auto___11347 = cljs.core.seq.call(null,seq__11272_11334);
if(temp__5457__auto___11347){
var seq__11272_11348__$1 = temp__5457__auto___11347;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11272_11348__$1)){
var c__4351__auto___11349 = cljs.core.chunk_first.call(null,seq__11272_11348__$1);
var G__11350 = cljs.core.chunk_rest.call(null,seq__11272_11348__$1);
var G__11351 = c__4351__auto___11349;
var G__11352 = cljs.core.count.call(null,c__4351__auto___11349);
var G__11353 = (0);
seq__11272_11334 = G__11350;
chunk__11273_11335 = G__11351;
count__11274_11336 = G__11352;
i__11275_11337 = G__11353;
continue;
} else {
var map__11278_11354 = cljs.core.first.call(null,seq__11272_11348__$1);
var map__11278_11355__$1 = ((((!((map__11278_11354 == null)))?(((((map__11278_11354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11278_11354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11278_11354):map__11278_11354);
var gline_11356 = cljs.core.get.call(null,map__11278_11355__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11357 = cljs.core.get.call(null,map__11278_11355__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11358 = cljs.core.get.call(null,map__11278_11355__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11356], null),cljs.core.fnil.call(null,((function (seq__11272_11334,chunk__11273_11335,count__11274_11336,i__11275_11337,seq__11265_11327,chunk__11266_11328,count__11267_11329,i__11268_11330,seq__11258_11320,chunk__11259_11321,count__11260_11322,i__11261_11323,map__11278_11354,map__11278_11355__$1,gline_11356,gcol_11357,name_11358,seq__11272_11348__$1,temp__5457__auto___11347,vec__11269_11331,column_11332,column_info_11333,vec__11262_11324,line_11325,columns_11326,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11357], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11325,new cljs.core.Keyword(null,"col","col",-1959363084),column_11332,new cljs.core.Keyword(null,"name","name",1843675177),name_11358], null));
});})(seq__11272_11334,chunk__11273_11335,count__11274_11336,i__11275_11337,seq__11265_11327,chunk__11266_11328,count__11267_11329,i__11268_11330,seq__11258_11320,chunk__11259_11321,count__11260_11322,i__11261_11323,map__11278_11354,map__11278_11355__$1,gline_11356,gcol_11357,name_11358,seq__11272_11348__$1,temp__5457__auto___11347,vec__11269_11331,column_11332,column_info_11333,vec__11262_11324,line_11325,columns_11326,inverted))
,cljs.core.sorted_map.call(null)));


var G__11359 = cljs.core.next.call(null,seq__11272_11348__$1);
var G__11360 = null;
var G__11361 = (0);
var G__11362 = (0);
seq__11272_11334 = G__11359;
chunk__11273_11335 = G__11360;
count__11274_11336 = G__11361;
i__11275_11337 = G__11362;
continue;
}
} else {
}
}
break;
}


var G__11363 = seq__11265_11327;
var G__11364 = chunk__11266_11328;
var G__11365 = count__11267_11329;
var G__11366 = (i__11268_11330 + (1));
seq__11265_11327 = G__11363;
chunk__11266_11328 = G__11364;
count__11267_11329 = G__11365;
i__11268_11330 = G__11366;
continue;
} else {
var temp__5457__auto___11367 = cljs.core.seq.call(null,seq__11265_11327);
if(temp__5457__auto___11367){
var seq__11265_11368__$1 = temp__5457__auto___11367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11265_11368__$1)){
var c__4351__auto___11369 = cljs.core.chunk_first.call(null,seq__11265_11368__$1);
var G__11370 = cljs.core.chunk_rest.call(null,seq__11265_11368__$1);
var G__11371 = c__4351__auto___11369;
var G__11372 = cljs.core.count.call(null,c__4351__auto___11369);
var G__11373 = (0);
seq__11265_11327 = G__11370;
chunk__11266_11328 = G__11371;
count__11267_11329 = G__11372;
i__11268_11330 = G__11373;
continue;
} else {
var vec__11280_11374 = cljs.core.first.call(null,seq__11265_11368__$1);
var column_11375 = cljs.core.nth.call(null,vec__11280_11374,(0),null);
var column_info_11376 = cljs.core.nth.call(null,vec__11280_11374,(1),null);
var seq__11283_11377 = cljs.core.seq.call(null,column_info_11376);
var chunk__11284_11378 = null;
var count__11285_11379 = (0);
var i__11286_11380 = (0);
while(true){
if((i__11286_11380 < count__11285_11379)){
var map__11287_11381 = cljs.core._nth.call(null,chunk__11284_11378,i__11286_11380);
var map__11287_11382__$1 = ((((!((map__11287_11381 == null)))?(((((map__11287_11381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11287_11381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11287_11381):map__11287_11381);
var gline_11383 = cljs.core.get.call(null,map__11287_11382__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11384 = cljs.core.get.call(null,map__11287_11382__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11385 = cljs.core.get.call(null,map__11287_11382__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11383], null),cljs.core.fnil.call(null,((function (seq__11283_11377,chunk__11284_11378,count__11285_11379,i__11286_11380,seq__11265_11327,chunk__11266_11328,count__11267_11329,i__11268_11330,seq__11258_11320,chunk__11259_11321,count__11260_11322,i__11261_11323,map__11287_11381,map__11287_11382__$1,gline_11383,gcol_11384,name_11385,vec__11280_11374,column_11375,column_info_11376,seq__11265_11368__$1,temp__5457__auto___11367,vec__11262_11324,line_11325,columns_11326,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11384], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11325,new cljs.core.Keyword(null,"col","col",-1959363084),column_11375,new cljs.core.Keyword(null,"name","name",1843675177),name_11385], null));
});})(seq__11283_11377,chunk__11284_11378,count__11285_11379,i__11286_11380,seq__11265_11327,chunk__11266_11328,count__11267_11329,i__11268_11330,seq__11258_11320,chunk__11259_11321,count__11260_11322,i__11261_11323,map__11287_11381,map__11287_11382__$1,gline_11383,gcol_11384,name_11385,vec__11280_11374,column_11375,column_info_11376,seq__11265_11368__$1,temp__5457__auto___11367,vec__11262_11324,line_11325,columns_11326,inverted))
,cljs.core.sorted_map.call(null)));


var G__11386 = seq__11283_11377;
var G__11387 = chunk__11284_11378;
var G__11388 = count__11285_11379;
var G__11389 = (i__11286_11380 + (1));
seq__11283_11377 = G__11386;
chunk__11284_11378 = G__11387;
count__11285_11379 = G__11388;
i__11286_11380 = G__11389;
continue;
} else {
var temp__5457__auto___11390__$1 = cljs.core.seq.call(null,seq__11283_11377);
if(temp__5457__auto___11390__$1){
var seq__11283_11391__$1 = temp__5457__auto___11390__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11283_11391__$1)){
var c__4351__auto___11392 = cljs.core.chunk_first.call(null,seq__11283_11391__$1);
var G__11393 = cljs.core.chunk_rest.call(null,seq__11283_11391__$1);
var G__11394 = c__4351__auto___11392;
var G__11395 = cljs.core.count.call(null,c__4351__auto___11392);
var G__11396 = (0);
seq__11283_11377 = G__11393;
chunk__11284_11378 = G__11394;
count__11285_11379 = G__11395;
i__11286_11380 = G__11396;
continue;
} else {
var map__11289_11397 = cljs.core.first.call(null,seq__11283_11391__$1);
var map__11289_11398__$1 = ((((!((map__11289_11397 == null)))?(((((map__11289_11397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11289_11397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11289_11397):map__11289_11397);
var gline_11399 = cljs.core.get.call(null,map__11289_11398__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11400 = cljs.core.get.call(null,map__11289_11398__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11401 = cljs.core.get.call(null,map__11289_11398__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11399], null),cljs.core.fnil.call(null,((function (seq__11283_11377,chunk__11284_11378,count__11285_11379,i__11286_11380,seq__11265_11327,chunk__11266_11328,count__11267_11329,i__11268_11330,seq__11258_11320,chunk__11259_11321,count__11260_11322,i__11261_11323,map__11289_11397,map__11289_11398__$1,gline_11399,gcol_11400,name_11401,seq__11283_11391__$1,temp__5457__auto___11390__$1,vec__11280_11374,column_11375,column_info_11376,seq__11265_11368__$1,temp__5457__auto___11367,vec__11262_11324,line_11325,columns_11326,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11400], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11325,new cljs.core.Keyword(null,"col","col",-1959363084),column_11375,new cljs.core.Keyword(null,"name","name",1843675177),name_11401], null));
});})(seq__11283_11377,chunk__11284_11378,count__11285_11379,i__11286_11380,seq__11265_11327,chunk__11266_11328,count__11267_11329,i__11268_11330,seq__11258_11320,chunk__11259_11321,count__11260_11322,i__11261_11323,map__11289_11397,map__11289_11398__$1,gline_11399,gcol_11400,name_11401,seq__11283_11391__$1,temp__5457__auto___11390__$1,vec__11280_11374,column_11375,column_info_11376,seq__11265_11368__$1,temp__5457__auto___11367,vec__11262_11324,line_11325,columns_11326,inverted))
,cljs.core.sorted_map.call(null)));


var G__11402 = cljs.core.next.call(null,seq__11283_11391__$1);
var G__11403 = null;
var G__11404 = (0);
var G__11405 = (0);
seq__11283_11377 = G__11402;
chunk__11284_11378 = G__11403;
count__11285_11379 = G__11404;
i__11286_11380 = G__11405;
continue;
}
} else {
}
}
break;
}


var G__11406 = cljs.core.next.call(null,seq__11265_11368__$1);
var G__11407 = null;
var G__11408 = (0);
var G__11409 = (0);
seq__11265_11327 = G__11406;
chunk__11266_11328 = G__11407;
count__11267_11329 = G__11408;
i__11268_11330 = G__11409;
continue;
}
} else {
}
}
break;
}


var G__11410 = seq__11258_11320;
var G__11411 = chunk__11259_11321;
var G__11412 = count__11260_11322;
var G__11413 = (i__11261_11323 + (1));
seq__11258_11320 = G__11410;
chunk__11259_11321 = G__11411;
count__11260_11322 = G__11412;
i__11261_11323 = G__11413;
continue;
} else {
var temp__5457__auto___11414 = cljs.core.seq.call(null,seq__11258_11320);
if(temp__5457__auto___11414){
var seq__11258_11415__$1 = temp__5457__auto___11414;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11258_11415__$1)){
var c__4351__auto___11416 = cljs.core.chunk_first.call(null,seq__11258_11415__$1);
var G__11417 = cljs.core.chunk_rest.call(null,seq__11258_11415__$1);
var G__11418 = c__4351__auto___11416;
var G__11419 = cljs.core.count.call(null,c__4351__auto___11416);
var G__11420 = (0);
seq__11258_11320 = G__11417;
chunk__11259_11321 = G__11418;
count__11260_11322 = G__11419;
i__11261_11323 = G__11420;
continue;
} else {
var vec__11291_11421 = cljs.core.first.call(null,seq__11258_11415__$1);
var line_11422 = cljs.core.nth.call(null,vec__11291_11421,(0),null);
var columns_11423 = cljs.core.nth.call(null,vec__11291_11421,(1),null);
var seq__11294_11424 = cljs.core.seq.call(null,columns_11423);
var chunk__11295_11425 = null;
var count__11296_11426 = (0);
var i__11297_11427 = (0);
while(true){
if((i__11297_11427 < count__11296_11426)){
var vec__11298_11428 = cljs.core._nth.call(null,chunk__11295_11425,i__11297_11427);
var column_11429 = cljs.core.nth.call(null,vec__11298_11428,(0),null);
var column_info_11430 = cljs.core.nth.call(null,vec__11298_11428,(1),null);
var seq__11301_11431 = cljs.core.seq.call(null,column_info_11430);
var chunk__11302_11432 = null;
var count__11303_11433 = (0);
var i__11304_11434 = (0);
while(true){
if((i__11304_11434 < count__11303_11433)){
var map__11305_11435 = cljs.core._nth.call(null,chunk__11302_11432,i__11304_11434);
var map__11305_11436__$1 = ((((!((map__11305_11435 == null)))?(((((map__11305_11435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11305_11435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11305_11435):map__11305_11435);
var gline_11437 = cljs.core.get.call(null,map__11305_11436__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11438 = cljs.core.get.call(null,map__11305_11436__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11439 = cljs.core.get.call(null,map__11305_11436__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11437], null),cljs.core.fnil.call(null,((function (seq__11301_11431,chunk__11302_11432,count__11303_11433,i__11304_11434,seq__11294_11424,chunk__11295_11425,count__11296_11426,i__11297_11427,seq__11258_11320,chunk__11259_11321,count__11260_11322,i__11261_11323,map__11305_11435,map__11305_11436__$1,gline_11437,gcol_11438,name_11439,vec__11298_11428,column_11429,column_info_11430,vec__11291_11421,line_11422,columns_11423,seq__11258_11415__$1,temp__5457__auto___11414,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11438], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11422,new cljs.core.Keyword(null,"col","col",-1959363084),column_11429,new cljs.core.Keyword(null,"name","name",1843675177),name_11439], null));
});})(seq__11301_11431,chunk__11302_11432,count__11303_11433,i__11304_11434,seq__11294_11424,chunk__11295_11425,count__11296_11426,i__11297_11427,seq__11258_11320,chunk__11259_11321,count__11260_11322,i__11261_11323,map__11305_11435,map__11305_11436__$1,gline_11437,gcol_11438,name_11439,vec__11298_11428,column_11429,column_info_11430,vec__11291_11421,line_11422,columns_11423,seq__11258_11415__$1,temp__5457__auto___11414,inverted))
,cljs.core.sorted_map.call(null)));


var G__11440 = seq__11301_11431;
var G__11441 = chunk__11302_11432;
var G__11442 = count__11303_11433;
var G__11443 = (i__11304_11434 + (1));
seq__11301_11431 = G__11440;
chunk__11302_11432 = G__11441;
count__11303_11433 = G__11442;
i__11304_11434 = G__11443;
continue;
} else {
var temp__5457__auto___11444__$1 = cljs.core.seq.call(null,seq__11301_11431);
if(temp__5457__auto___11444__$1){
var seq__11301_11445__$1 = temp__5457__auto___11444__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11301_11445__$1)){
var c__4351__auto___11446 = cljs.core.chunk_first.call(null,seq__11301_11445__$1);
var G__11447 = cljs.core.chunk_rest.call(null,seq__11301_11445__$1);
var G__11448 = c__4351__auto___11446;
var G__11449 = cljs.core.count.call(null,c__4351__auto___11446);
var G__11450 = (0);
seq__11301_11431 = G__11447;
chunk__11302_11432 = G__11448;
count__11303_11433 = G__11449;
i__11304_11434 = G__11450;
continue;
} else {
var map__11307_11451 = cljs.core.first.call(null,seq__11301_11445__$1);
var map__11307_11452__$1 = ((((!((map__11307_11451 == null)))?(((((map__11307_11451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11307_11451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11307_11451):map__11307_11451);
var gline_11453 = cljs.core.get.call(null,map__11307_11452__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11454 = cljs.core.get.call(null,map__11307_11452__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11455 = cljs.core.get.call(null,map__11307_11452__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11453], null),cljs.core.fnil.call(null,((function (seq__11301_11431,chunk__11302_11432,count__11303_11433,i__11304_11434,seq__11294_11424,chunk__11295_11425,count__11296_11426,i__11297_11427,seq__11258_11320,chunk__11259_11321,count__11260_11322,i__11261_11323,map__11307_11451,map__11307_11452__$1,gline_11453,gcol_11454,name_11455,seq__11301_11445__$1,temp__5457__auto___11444__$1,vec__11298_11428,column_11429,column_info_11430,vec__11291_11421,line_11422,columns_11423,seq__11258_11415__$1,temp__5457__auto___11414,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11454], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11422,new cljs.core.Keyword(null,"col","col",-1959363084),column_11429,new cljs.core.Keyword(null,"name","name",1843675177),name_11455], null));
});})(seq__11301_11431,chunk__11302_11432,count__11303_11433,i__11304_11434,seq__11294_11424,chunk__11295_11425,count__11296_11426,i__11297_11427,seq__11258_11320,chunk__11259_11321,count__11260_11322,i__11261_11323,map__11307_11451,map__11307_11452__$1,gline_11453,gcol_11454,name_11455,seq__11301_11445__$1,temp__5457__auto___11444__$1,vec__11298_11428,column_11429,column_info_11430,vec__11291_11421,line_11422,columns_11423,seq__11258_11415__$1,temp__5457__auto___11414,inverted))
,cljs.core.sorted_map.call(null)));


var G__11456 = cljs.core.next.call(null,seq__11301_11445__$1);
var G__11457 = null;
var G__11458 = (0);
var G__11459 = (0);
seq__11301_11431 = G__11456;
chunk__11302_11432 = G__11457;
count__11303_11433 = G__11458;
i__11304_11434 = G__11459;
continue;
}
} else {
}
}
break;
}


var G__11460 = seq__11294_11424;
var G__11461 = chunk__11295_11425;
var G__11462 = count__11296_11426;
var G__11463 = (i__11297_11427 + (1));
seq__11294_11424 = G__11460;
chunk__11295_11425 = G__11461;
count__11296_11426 = G__11462;
i__11297_11427 = G__11463;
continue;
} else {
var temp__5457__auto___11464__$1 = cljs.core.seq.call(null,seq__11294_11424);
if(temp__5457__auto___11464__$1){
var seq__11294_11465__$1 = temp__5457__auto___11464__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11294_11465__$1)){
var c__4351__auto___11466 = cljs.core.chunk_first.call(null,seq__11294_11465__$1);
var G__11467 = cljs.core.chunk_rest.call(null,seq__11294_11465__$1);
var G__11468 = c__4351__auto___11466;
var G__11469 = cljs.core.count.call(null,c__4351__auto___11466);
var G__11470 = (0);
seq__11294_11424 = G__11467;
chunk__11295_11425 = G__11468;
count__11296_11426 = G__11469;
i__11297_11427 = G__11470;
continue;
} else {
var vec__11309_11471 = cljs.core.first.call(null,seq__11294_11465__$1);
var column_11472 = cljs.core.nth.call(null,vec__11309_11471,(0),null);
var column_info_11473 = cljs.core.nth.call(null,vec__11309_11471,(1),null);
var seq__11312_11474 = cljs.core.seq.call(null,column_info_11473);
var chunk__11313_11475 = null;
var count__11314_11476 = (0);
var i__11315_11477 = (0);
while(true){
if((i__11315_11477 < count__11314_11476)){
var map__11316_11478 = cljs.core._nth.call(null,chunk__11313_11475,i__11315_11477);
var map__11316_11479__$1 = ((((!((map__11316_11478 == null)))?(((((map__11316_11478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11316_11478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11316_11478):map__11316_11478);
var gline_11480 = cljs.core.get.call(null,map__11316_11479__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11481 = cljs.core.get.call(null,map__11316_11479__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11482 = cljs.core.get.call(null,map__11316_11479__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11480], null),cljs.core.fnil.call(null,((function (seq__11312_11474,chunk__11313_11475,count__11314_11476,i__11315_11477,seq__11294_11424,chunk__11295_11425,count__11296_11426,i__11297_11427,seq__11258_11320,chunk__11259_11321,count__11260_11322,i__11261_11323,map__11316_11478,map__11316_11479__$1,gline_11480,gcol_11481,name_11482,vec__11309_11471,column_11472,column_info_11473,seq__11294_11465__$1,temp__5457__auto___11464__$1,vec__11291_11421,line_11422,columns_11423,seq__11258_11415__$1,temp__5457__auto___11414,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11481], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11422,new cljs.core.Keyword(null,"col","col",-1959363084),column_11472,new cljs.core.Keyword(null,"name","name",1843675177),name_11482], null));
});})(seq__11312_11474,chunk__11313_11475,count__11314_11476,i__11315_11477,seq__11294_11424,chunk__11295_11425,count__11296_11426,i__11297_11427,seq__11258_11320,chunk__11259_11321,count__11260_11322,i__11261_11323,map__11316_11478,map__11316_11479__$1,gline_11480,gcol_11481,name_11482,vec__11309_11471,column_11472,column_info_11473,seq__11294_11465__$1,temp__5457__auto___11464__$1,vec__11291_11421,line_11422,columns_11423,seq__11258_11415__$1,temp__5457__auto___11414,inverted))
,cljs.core.sorted_map.call(null)));


var G__11483 = seq__11312_11474;
var G__11484 = chunk__11313_11475;
var G__11485 = count__11314_11476;
var G__11486 = (i__11315_11477 + (1));
seq__11312_11474 = G__11483;
chunk__11313_11475 = G__11484;
count__11314_11476 = G__11485;
i__11315_11477 = G__11486;
continue;
} else {
var temp__5457__auto___11487__$2 = cljs.core.seq.call(null,seq__11312_11474);
if(temp__5457__auto___11487__$2){
var seq__11312_11488__$1 = temp__5457__auto___11487__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11312_11488__$1)){
var c__4351__auto___11489 = cljs.core.chunk_first.call(null,seq__11312_11488__$1);
var G__11490 = cljs.core.chunk_rest.call(null,seq__11312_11488__$1);
var G__11491 = c__4351__auto___11489;
var G__11492 = cljs.core.count.call(null,c__4351__auto___11489);
var G__11493 = (0);
seq__11312_11474 = G__11490;
chunk__11313_11475 = G__11491;
count__11314_11476 = G__11492;
i__11315_11477 = G__11493;
continue;
} else {
var map__11318_11494 = cljs.core.first.call(null,seq__11312_11488__$1);
var map__11318_11495__$1 = ((((!((map__11318_11494 == null)))?(((((map__11318_11494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11318_11494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11318_11494):map__11318_11494);
var gline_11496 = cljs.core.get.call(null,map__11318_11495__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_11497 = cljs.core.get.call(null,map__11318_11495__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_11498 = cljs.core.get.call(null,map__11318_11495__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11496], null),cljs.core.fnil.call(null,((function (seq__11312_11474,chunk__11313_11475,count__11314_11476,i__11315_11477,seq__11294_11424,chunk__11295_11425,count__11296_11426,i__11297_11427,seq__11258_11320,chunk__11259_11321,count__11260_11322,i__11261_11323,map__11318_11494,map__11318_11495__$1,gline_11496,gcol_11497,name_11498,seq__11312_11488__$1,temp__5457__auto___11487__$2,vec__11309_11471,column_11472,column_info_11473,seq__11294_11465__$1,temp__5457__auto___11464__$1,vec__11291_11421,line_11422,columns_11423,seq__11258_11415__$1,temp__5457__auto___11414,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_11497], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_11422,new cljs.core.Keyword(null,"col","col",-1959363084),column_11472,new cljs.core.Keyword(null,"name","name",1843675177),name_11498], null));
});})(seq__11312_11474,chunk__11313_11475,count__11314_11476,i__11315_11477,seq__11294_11424,chunk__11295_11425,count__11296_11426,i__11297_11427,seq__11258_11320,chunk__11259_11321,count__11260_11322,i__11261_11323,map__11318_11494,map__11318_11495__$1,gline_11496,gcol_11497,name_11498,seq__11312_11488__$1,temp__5457__auto___11487__$2,vec__11309_11471,column_11472,column_info_11473,seq__11294_11465__$1,temp__5457__auto___11464__$1,vec__11291_11421,line_11422,columns_11423,seq__11258_11415__$1,temp__5457__auto___11414,inverted))
,cljs.core.sorted_map.call(null)));


var G__11499 = cljs.core.next.call(null,seq__11312_11488__$1);
var G__11500 = null;
var G__11501 = (0);
var G__11502 = (0);
seq__11312_11474 = G__11499;
chunk__11313_11475 = G__11500;
count__11314_11476 = G__11501;
i__11315_11477 = G__11502;
continue;
}
} else {
}
}
break;
}


var G__11503 = cljs.core.next.call(null,seq__11294_11465__$1);
var G__11504 = null;
var G__11505 = (0);
var G__11506 = (0);
seq__11294_11424 = G__11503;
chunk__11295_11425 = G__11504;
count__11296_11426 = G__11505;
i__11297_11427 = G__11506;
continue;
}
} else {
}
}
break;
}


var G__11507 = cljs.core.next.call(null,seq__11258_11415__$1);
var G__11508 = null;
var G__11509 = (0);
var G__11510 = (0);
seq__11258_11320 = G__11507;
chunk__11259_11321 = G__11508;
count__11260_11322 = G__11509;
i__11261_11323 = G__11510;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map
