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
return cljs.core.reduce.call(null,(function (m,p__12814){
var vec__12815 = p__12814;
var i = cljs.core.nth.call(null,vec__12815,(0),null);
var v = cljs.core.nth.call(null,vec__12815,(1),null);
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
var vec__12818 = seg;
var gcol = cljs.core.nth.call(null,vec__12818,(0),null);
var source = cljs.core.nth.call(null,vec__12818,(1),null);
var line = cljs.core.nth.call(null,vec__12818,(2),null);
var col = cljs.core.nth.call(null,vec__12818,(3),null);
var name = cljs.core.nth.call(null,vec__12818,(4),null);
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
var vec__12821 = seg;
var gcol = cljs.core.nth.call(null,vec__12821,(0),null);
var source = cljs.core.nth.call(null,vec__12821,(1),null);
var line = cljs.core.nth.call(null,vec__12821,(2),null);
var col = cljs.core.nth.call(null,vec__12821,(3),null);
var name = cljs.core.nth.call(null,vec__12821,(4),null);
var vec__12824 = relseg;
var rgcol = cljs.core.nth.call(null,vec__12824,(0),null);
var rsource = cljs.core.nth.call(null,vec__12824,(1),null);
var rline = cljs.core.nth.call(null,vec__12824,(2),null);
var rcol = cljs.core.nth.call(null,vec__12824,(3),null);
var rname = cljs.core.nth.call(null,vec__12824,(4),null);
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
var map__12827 = segmap;
var map__12827__$1 = ((((!((map__12827 == null)))?(((((map__12827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12827):map__12827);
var gcol = cljs.core.get.call(null,map__12827__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__12827__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__12827__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__12827__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__12827__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__12827,map__12827__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__12827,map__12827__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__12827,map__12827__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__12827,map__12827__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__12827,map__12827__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__12827,map__12827__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__12830 = arguments.length;
switch (G__12830) {
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
var vec__12831 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__12835 = cljs.core.next.call(null,segs__$1);
var G__12836 = nrelseg;
var G__12837 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__12835;
relseg__$1 = G__12836;
result__$1 = G__12837;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__12831,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__12831,(1),null);
var G__12838 = (gline + (1));
var G__12839 = cljs.core.next.call(null,lines__$1);
var G__12840 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__12841 = result__$1;
gline = G__12838;
lines__$1 = G__12839;
relseg = G__12840;
result = G__12841;
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
var map__12843 = segmap;
var map__12843__$1 = ((((!((map__12843 == null)))?(((((map__12843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12843):map__12843);
var gcol = cljs.core.get.call(null,map__12843__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__12843__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__12843__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__12843__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__12843__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__12843,map__12843__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__12843,map__12843__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__12842_SHARP_){
return cljs.core.conj.call(null,p1__12842_SHARP_,d__$1);
});})(map__12843,map__12843__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__12843,map__12843__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__12846 = arguments.length;
switch (G__12846) {
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
var vec__12847 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__12851 = cljs.core.next.call(null,segs__$1);
var G__12852 = nrelseg;
var G__12853 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__12851;
relseg__$1 = G__12852;
result__$1 = G__12853;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__12847,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__12847,(1),null);
var G__12854 = (gline + (1));
var G__12855 = cljs.core.next.call(null,lines__$1);
var G__12856 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__12857 = result__$1;
gline = G__12854;
lines__$1 = G__12855;
relseg = G__12856;
result = G__12857;
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
return (function (p__12858){
var vec__12859 = p__12858;
var _ = cljs.core.nth.call(null,vec__12859,(0),null);
var source = cljs.core.nth.call(null,vec__12859,(1),null);
var line = cljs.core.nth.call(null,vec__12859,(2),null);
var col = cljs.core.nth.call(null,vec__12859,(3),null);
var name = cljs.core.nth.call(null,vec__12859,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__12862){
var vec__12863 = p__12862;
var gcol = cljs.core.nth.call(null,vec__12863,(0),null);
var sidx = cljs.core.nth.call(null,vec__12863,(1),null);
var line = cljs.core.nth.call(null,vec__12863,(2),null);
var col = cljs.core.nth.call(null,vec__12863,(3),null);
var name = cljs.core.nth.call(null,vec__12863,(4),null);
var seg = vec__12863;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__12863,gcol,sidx,line,col,name,seg,relseg){
return (function (p__12866){
var vec__12867 = p__12866;
var _ = cljs.core.nth.call(null,vec__12867,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__12867,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__12867,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__12867,(3),null);
var lname = cljs.core.nth.call(null,vec__12867,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__3949__auto__ = name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__12863,gcol,sidx,line,col,name,seg,relseg))
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
var seq__12873 = cljs.core.seq.call(null,infos);
var chunk__12874 = null;
var count__12875 = (0);
var i__12876 = (0);
while(true){
if((i__12876 < count__12875)){
var info = cljs.core._nth.call(null,chunk__12874,i__12876);
var segv_12955 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_12956 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_12957 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_12956 > (lc_12957 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__12873,chunk__12874,count__12875,i__12876,segv_12955,gline_12956,lc_12957,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_12956 - (lc_12957 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_12955], null));
});})(seq__12873,chunk__12874,count__12875,i__12876,segv_12955,gline_12956,lc_12957,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__12873,chunk__12874,count__12875,i__12876,segv_12955,gline_12956,lc_12957,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12956], null),cljs.core.conj,segv_12955);
});})(seq__12873,chunk__12874,count__12875,i__12876,segv_12955,gline_12956,lc_12957,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__12958 = seq__12873;
var G__12959 = chunk__12874;
var G__12960 = count__12875;
var G__12961 = (i__12876 + (1));
seq__12873 = G__12958;
chunk__12874 = G__12959;
count__12875 = G__12960;
i__12876 = G__12961;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__12873);
if(temp__5457__auto__){
var seq__12873__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12873__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__12873__$1);
var G__12962 = cljs.core.chunk_rest.call(null,seq__12873__$1);
var G__12963 = c__4351__auto__;
var G__12964 = cljs.core.count.call(null,c__4351__auto__);
var G__12965 = (0);
seq__12873 = G__12962;
chunk__12874 = G__12963;
count__12875 = G__12964;
i__12876 = G__12965;
continue;
} else {
var info = cljs.core.first.call(null,seq__12873__$1);
var segv_12966 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_12967 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_12968 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_12967 > (lc_12968 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__12873,chunk__12874,count__12875,i__12876,segv_12966,gline_12967,lc_12968,info,seq__12873__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_12967 - (lc_12968 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_12966], null));
});})(seq__12873,chunk__12874,count__12875,i__12876,segv_12966,gline_12967,lc_12968,info,seq__12873__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__12873,chunk__12874,count__12875,i__12876,segv_12966,gline_12967,lc_12968,info,seq__12873__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12967], null),cljs.core.conj,segv_12966);
});})(seq__12873,chunk__12874,count__12875,i__12876,segv_12966,gline_12967,lc_12968,info,seq__12873__$1,temp__5457__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__12969 = cljs.core.next.call(null,seq__12873__$1);
var G__12970 = null;
var G__12971 = (0);
var G__12972 = (0);
seq__12873 = G__12969;
chunk__12874 = G__12970;
count__12875 = G__12971;
i__12876 = G__12972;
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
var seq__12877_12973 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__12878_12974 = null;
var count__12879_12975 = (0);
var i__12880_12976 = (0);
while(true){
if((i__12880_12976 < count__12879_12975)){
var vec__12881_12977 = cljs.core._nth.call(null,chunk__12878_12974,i__12880_12976);
var source_idx_12978 = cljs.core.nth.call(null,vec__12881_12977,(0),null);
var vec__12884_12979 = cljs.core.nth.call(null,vec__12881_12977,(1),null);
var __12980 = cljs.core.nth.call(null,vec__12884_12979,(0),null);
var lines_12981__$1 = cljs.core.nth.call(null,vec__12884_12979,(1),null);
var seq__12887_12982 = cljs.core.seq.call(null,lines_12981__$1);
var chunk__12888_12983 = null;
var count__12889_12984 = (0);
var i__12890_12985 = (0);
while(true){
if((i__12890_12985 < count__12889_12984)){
var vec__12891_12986 = cljs.core._nth.call(null,chunk__12888_12983,i__12890_12985);
var line_12987 = cljs.core.nth.call(null,vec__12891_12986,(0),null);
var cols_12988 = cljs.core.nth.call(null,vec__12891_12986,(1),null);
var seq__12894_12989 = cljs.core.seq.call(null,cols_12988);
var chunk__12895_12990 = null;
var count__12896_12991 = (0);
var i__12897_12992 = (0);
while(true){
if((i__12897_12992 < count__12896_12991)){
var vec__12898_12993 = cljs.core._nth.call(null,chunk__12895_12990,i__12897_12992);
var col_12994 = cljs.core.nth.call(null,vec__12898_12993,(0),null);
var infos_12995 = cljs.core.nth.call(null,vec__12898_12993,(1),null);
encode_cols.call(null,infos_12995,source_idx_12978,line_12987,col_12994);


var G__12996 = seq__12894_12989;
var G__12997 = chunk__12895_12990;
var G__12998 = count__12896_12991;
var G__12999 = (i__12897_12992 + (1));
seq__12894_12989 = G__12996;
chunk__12895_12990 = G__12997;
count__12896_12991 = G__12998;
i__12897_12992 = G__12999;
continue;
} else {
var temp__5457__auto___13000 = cljs.core.seq.call(null,seq__12894_12989);
if(temp__5457__auto___13000){
var seq__12894_13001__$1 = temp__5457__auto___13000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12894_13001__$1)){
var c__4351__auto___13002 = cljs.core.chunk_first.call(null,seq__12894_13001__$1);
var G__13003 = cljs.core.chunk_rest.call(null,seq__12894_13001__$1);
var G__13004 = c__4351__auto___13002;
var G__13005 = cljs.core.count.call(null,c__4351__auto___13002);
var G__13006 = (0);
seq__12894_12989 = G__13003;
chunk__12895_12990 = G__13004;
count__12896_12991 = G__13005;
i__12897_12992 = G__13006;
continue;
} else {
var vec__12901_13007 = cljs.core.first.call(null,seq__12894_13001__$1);
var col_13008 = cljs.core.nth.call(null,vec__12901_13007,(0),null);
var infos_13009 = cljs.core.nth.call(null,vec__12901_13007,(1),null);
encode_cols.call(null,infos_13009,source_idx_12978,line_12987,col_13008);


var G__13010 = cljs.core.next.call(null,seq__12894_13001__$1);
var G__13011 = null;
var G__13012 = (0);
var G__13013 = (0);
seq__12894_12989 = G__13010;
chunk__12895_12990 = G__13011;
count__12896_12991 = G__13012;
i__12897_12992 = G__13013;
continue;
}
} else {
}
}
break;
}


var G__13014 = seq__12887_12982;
var G__13015 = chunk__12888_12983;
var G__13016 = count__12889_12984;
var G__13017 = (i__12890_12985 + (1));
seq__12887_12982 = G__13014;
chunk__12888_12983 = G__13015;
count__12889_12984 = G__13016;
i__12890_12985 = G__13017;
continue;
} else {
var temp__5457__auto___13018 = cljs.core.seq.call(null,seq__12887_12982);
if(temp__5457__auto___13018){
var seq__12887_13019__$1 = temp__5457__auto___13018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12887_13019__$1)){
var c__4351__auto___13020 = cljs.core.chunk_first.call(null,seq__12887_13019__$1);
var G__13021 = cljs.core.chunk_rest.call(null,seq__12887_13019__$1);
var G__13022 = c__4351__auto___13020;
var G__13023 = cljs.core.count.call(null,c__4351__auto___13020);
var G__13024 = (0);
seq__12887_12982 = G__13021;
chunk__12888_12983 = G__13022;
count__12889_12984 = G__13023;
i__12890_12985 = G__13024;
continue;
} else {
var vec__12904_13025 = cljs.core.first.call(null,seq__12887_13019__$1);
var line_13026 = cljs.core.nth.call(null,vec__12904_13025,(0),null);
var cols_13027 = cljs.core.nth.call(null,vec__12904_13025,(1),null);
var seq__12907_13028 = cljs.core.seq.call(null,cols_13027);
var chunk__12908_13029 = null;
var count__12909_13030 = (0);
var i__12910_13031 = (0);
while(true){
if((i__12910_13031 < count__12909_13030)){
var vec__12911_13032 = cljs.core._nth.call(null,chunk__12908_13029,i__12910_13031);
var col_13033 = cljs.core.nth.call(null,vec__12911_13032,(0),null);
var infos_13034 = cljs.core.nth.call(null,vec__12911_13032,(1),null);
encode_cols.call(null,infos_13034,source_idx_12978,line_13026,col_13033);


var G__13035 = seq__12907_13028;
var G__13036 = chunk__12908_13029;
var G__13037 = count__12909_13030;
var G__13038 = (i__12910_13031 + (1));
seq__12907_13028 = G__13035;
chunk__12908_13029 = G__13036;
count__12909_13030 = G__13037;
i__12910_13031 = G__13038;
continue;
} else {
var temp__5457__auto___13039__$1 = cljs.core.seq.call(null,seq__12907_13028);
if(temp__5457__auto___13039__$1){
var seq__12907_13040__$1 = temp__5457__auto___13039__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12907_13040__$1)){
var c__4351__auto___13041 = cljs.core.chunk_first.call(null,seq__12907_13040__$1);
var G__13042 = cljs.core.chunk_rest.call(null,seq__12907_13040__$1);
var G__13043 = c__4351__auto___13041;
var G__13044 = cljs.core.count.call(null,c__4351__auto___13041);
var G__13045 = (0);
seq__12907_13028 = G__13042;
chunk__12908_13029 = G__13043;
count__12909_13030 = G__13044;
i__12910_13031 = G__13045;
continue;
} else {
var vec__12914_13046 = cljs.core.first.call(null,seq__12907_13040__$1);
var col_13047 = cljs.core.nth.call(null,vec__12914_13046,(0),null);
var infos_13048 = cljs.core.nth.call(null,vec__12914_13046,(1),null);
encode_cols.call(null,infos_13048,source_idx_12978,line_13026,col_13047);


var G__13049 = cljs.core.next.call(null,seq__12907_13040__$1);
var G__13050 = null;
var G__13051 = (0);
var G__13052 = (0);
seq__12907_13028 = G__13049;
chunk__12908_13029 = G__13050;
count__12909_13030 = G__13051;
i__12910_13031 = G__13052;
continue;
}
} else {
}
}
break;
}


var G__13053 = cljs.core.next.call(null,seq__12887_13019__$1);
var G__13054 = null;
var G__13055 = (0);
var G__13056 = (0);
seq__12887_12982 = G__13053;
chunk__12888_12983 = G__13054;
count__12889_12984 = G__13055;
i__12890_12985 = G__13056;
continue;
}
} else {
}
}
break;
}


var G__13057 = seq__12877_12973;
var G__13058 = chunk__12878_12974;
var G__13059 = count__12879_12975;
var G__13060 = (i__12880_12976 + (1));
seq__12877_12973 = G__13057;
chunk__12878_12974 = G__13058;
count__12879_12975 = G__13059;
i__12880_12976 = G__13060;
continue;
} else {
var temp__5457__auto___13061 = cljs.core.seq.call(null,seq__12877_12973);
if(temp__5457__auto___13061){
var seq__12877_13062__$1 = temp__5457__auto___13061;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12877_13062__$1)){
var c__4351__auto___13063 = cljs.core.chunk_first.call(null,seq__12877_13062__$1);
var G__13064 = cljs.core.chunk_rest.call(null,seq__12877_13062__$1);
var G__13065 = c__4351__auto___13063;
var G__13066 = cljs.core.count.call(null,c__4351__auto___13063);
var G__13067 = (0);
seq__12877_12973 = G__13064;
chunk__12878_12974 = G__13065;
count__12879_12975 = G__13066;
i__12880_12976 = G__13067;
continue;
} else {
var vec__12917_13068 = cljs.core.first.call(null,seq__12877_13062__$1);
var source_idx_13069 = cljs.core.nth.call(null,vec__12917_13068,(0),null);
var vec__12920_13070 = cljs.core.nth.call(null,vec__12917_13068,(1),null);
var __13071 = cljs.core.nth.call(null,vec__12920_13070,(0),null);
var lines_13072__$1 = cljs.core.nth.call(null,vec__12920_13070,(1),null);
var seq__12923_13073 = cljs.core.seq.call(null,lines_13072__$1);
var chunk__12924_13074 = null;
var count__12925_13075 = (0);
var i__12926_13076 = (0);
while(true){
if((i__12926_13076 < count__12925_13075)){
var vec__12927_13077 = cljs.core._nth.call(null,chunk__12924_13074,i__12926_13076);
var line_13078 = cljs.core.nth.call(null,vec__12927_13077,(0),null);
var cols_13079 = cljs.core.nth.call(null,vec__12927_13077,(1),null);
var seq__12930_13080 = cljs.core.seq.call(null,cols_13079);
var chunk__12931_13081 = null;
var count__12932_13082 = (0);
var i__12933_13083 = (0);
while(true){
if((i__12933_13083 < count__12932_13082)){
var vec__12934_13084 = cljs.core._nth.call(null,chunk__12931_13081,i__12933_13083);
var col_13085 = cljs.core.nth.call(null,vec__12934_13084,(0),null);
var infos_13086 = cljs.core.nth.call(null,vec__12934_13084,(1),null);
encode_cols.call(null,infos_13086,source_idx_13069,line_13078,col_13085);


var G__13087 = seq__12930_13080;
var G__13088 = chunk__12931_13081;
var G__13089 = count__12932_13082;
var G__13090 = (i__12933_13083 + (1));
seq__12930_13080 = G__13087;
chunk__12931_13081 = G__13088;
count__12932_13082 = G__13089;
i__12933_13083 = G__13090;
continue;
} else {
var temp__5457__auto___13091__$1 = cljs.core.seq.call(null,seq__12930_13080);
if(temp__5457__auto___13091__$1){
var seq__12930_13092__$1 = temp__5457__auto___13091__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12930_13092__$1)){
var c__4351__auto___13093 = cljs.core.chunk_first.call(null,seq__12930_13092__$1);
var G__13094 = cljs.core.chunk_rest.call(null,seq__12930_13092__$1);
var G__13095 = c__4351__auto___13093;
var G__13096 = cljs.core.count.call(null,c__4351__auto___13093);
var G__13097 = (0);
seq__12930_13080 = G__13094;
chunk__12931_13081 = G__13095;
count__12932_13082 = G__13096;
i__12933_13083 = G__13097;
continue;
} else {
var vec__12937_13098 = cljs.core.first.call(null,seq__12930_13092__$1);
var col_13099 = cljs.core.nth.call(null,vec__12937_13098,(0),null);
var infos_13100 = cljs.core.nth.call(null,vec__12937_13098,(1),null);
encode_cols.call(null,infos_13100,source_idx_13069,line_13078,col_13099);


var G__13101 = cljs.core.next.call(null,seq__12930_13092__$1);
var G__13102 = null;
var G__13103 = (0);
var G__13104 = (0);
seq__12930_13080 = G__13101;
chunk__12931_13081 = G__13102;
count__12932_13082 = G__13103;
i__12933_13083 = G__13104;
continue;
}
} else {
}
}
break;
}


var G__13105 = seq__12923_13073;
var G__13106 = chunk__12924_13074;
var G__13107 = count__12925_13075;
var G__13108 = (i__12926_13076 + (1));
seq__12923_13073 = G__13105;
chunk__12924_13074 = G__13106;
count__12925_13075 = G__13107;
i__12926_13076 = G__13108;
continue;
} else {
var temp__5457__auto___13109__$1 = cljs.core.seq.call(null,seq__12923_13073);
if(temp__5457__auto___13109__$1){
var seq__12923_13110__$1 = temp__5457__auto___13109__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12923_13110__$1)){
var c__4351__auto___13111 = cljs.core.chunk_first.call(null,seq__12923_13110__$1);
var G__13112 = cljs.core.chunk_rest.call(null,seq__12923_13110__$1);
var G__13113 = c__4351__auto___13111;
var G__13114 = cljs.core.count.call(null,c__4351__auto___13111);
var G__13115 = (0);
seq__12923_13073 = G__13112;
chunk__12924_13074 = G__13113;
count__12925_13075 = G__13114;
i__12926_13076 = G__13115;
continue;
} else {
var vec__12940_13116 = cljs.core.first.call(null,seq__12923_13110__$1);
var line_13117 = cljs.core.nth.call(null,vec__12940_13116,(0),null);
var cols_13118 = cljs.core.nth.call(null,vec__12940_13116,(1),null);
var seq__12943_13119 = cljs.core.seq.call(null,cols_13118);
var chunk__12944_13120 = null;
var count__12945_13121 = (0);
var i__12946_13122 = (0);
while(true){
if((i__12946_13122 < count__12945_13121)){
var vec__12947_13123 = cljs.core._nth.call(null,chunk__12944_13120,i__12946_13122);
var col_13124 = cljs.core.nth.call(null,vec__12947_13123,(0),null);
var infos_13125 = cljs.core.nth.call(null,vec__12947_13123,(1),null);
encode_cols.call(null,infos_13125,source_idx_13069,line_13117,col_13124);


var G__13126 = seq__12943_13119;
var G__13127 = chunk__12944_13120;
var G__13128 = count__12945_13121;
var G__13129 = (i__12946_13122 + (1));
seq__12943_13119 = G__13126;
chunk__12944_13120 = G__13127;
count__12945_13121 = G__13128;
i__12946_13122 = G__13129;
continue;
} else {
var temp__5457__auto___13130__$2 = cljs.core.seq.call(null,seq__12943_13119);
if(temp__5457__auto___13130__$2){
var seq__12943_13131__$1 = temp__5457__auto___13130__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12943_13131__$1)){
var c__4351__auto___13132 = cljs.core.chunk_first.call(null,seq__12943_13131__$1);
var G__13133 = cljs.core.chunk_rest.call(null,seq__12943_13131__$1);
var G__13134 = c__4351__auto___13132;
var G__13135 = cljs.core.count.call(null,c__4351__auto___13132);
var G__13136 = (0);
seq__12943_13119 = G__13133;
chunk__12944_13120 = G__13134;
count__12945_13121 = G__13135;
i__12946_13122 = G__13136;
continue;
} else {
var vec__12950_13137 = cljs.core.first.call(null,seq__12943_13131__$1);
var col_13138 = cljs.core.nth.call(null,vec__12950_13137,(0),null);
var infos_13139 = cljs.core.nth.call(null,vec__12950_13137,(1),null);
encode_cols.call(null,infos_13139,source_idx_13069,line_13117,col_13138);


var G__13140 = cljs.core.next.call(null,seq__12943_13131__$1);
var G__13141 = null;
var G__13142 = (0);
var G__13143 = (0);
seq__12943_13119 = G__13140;
chunk__12944_13120 = G__13141;
count__12945_13121 = G__13142;
i__12946_13122 = G__13143;
continue;
}
} else {
}
}
break;
}


var G__13144 = cljs.core.next.call(null,seq__12923_13110__$1);
var G__13145 = null;
var G__13146 = (0);
var G__13147 = (0);
seq__12923_13073 = G__13144;
chunk__12924_13074 = G__13145;
count__12925_13075 = G__13146;
i__12926_13076 = G__13147;
continue;
}
} else {
}
}
break;
}


var G__13148 = cljs.core.next.call(null,seq__12877_13062__$1);
var G__13149 = null;
var G__13150 = (0);
var G__13151 = (0);
seq__12877_12973 = G__13148;
chunk__12878_12974 = G__13149;
count__12879_12975 = G__13150;
i__12880_12976 = G__13151;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__12953 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__12870_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__12870_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__12871_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__12871_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__12872_SHARP_){
return clojure.string.join.call(null,",",p1__12872_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__12954 = G__12953;
goog.object.set(G__12954,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__12954;
} else {
return G__12953;
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
var vec__13152 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__13152,(0),null);
var col_map = cljs.core.nth.call(null,vec__13152,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__13155 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__13155,(0),null);
var infos = cljs.core.nth.call(null,vec__13155,(1),null);
var G__13161 = cljs.core.next.call(null,col_map_seq);
var G__13162 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__13155,col,infos,vec__13152,line,col_map){
return (function (v,p__13158){
var map__13159 = p__13158;
var map__13159__$1 = ((((!((map__13159 == null)))?(((((map__13159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13159):map__13159);
var gline = cljs.core.get.call(null,map__13159__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__13159__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__13155,col,infos,vec__13152,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__13161;
new_cols = G__13162;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__13163 = cljs.core.next.call(null,line_map_seq);
var G__13164 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__13163;
new_lines = G__13164;
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
var seq__13165_13227 = cljs.core.seq.call(null,reverse_map);
var chunk__13166_13228 = null;
var count__13167_13229 = (0);
var i__13168_13230 = (0);
while(true){
if((i__13168_13230 < count__13167_13229)){
var vec__13169_13231 = cljs.core._nth.call(null,chunk__13166_13228,i__13168_13230);
var line_13232 = cljs.core.nth.call(null,vec__13169_13231,(0),null);
var columns_13233 = cljs.core.nth.call(null,vec__13169_13231,(1),null);
var seq__13172_13234 = cljs.core.seq.call(null,columns_13233);
var chunk__13173_13235 = null;
var count__13174_13236 = (0);
var i__13175_13237 = (0);
while(true){
if((i__13175_13237 < count__13174_13236)){
var vec__13176_13238 = cljs.core._nth.call(null,chunk__13173_13235,i__13175_13237);
var column_13239 = cljs.core.nth.call(null,vec__13176_13238,(0),null);
var column_info_13240 = cljs.core.nth.call(null,vec__13176_13238,(1),null);
var seq__13179_13241 = cljs.core.seq.call(null,column_info_13240);
var chunk__13180_13242 = null;
var count__13181_13243 = (0);
var i__13182_13244 = (0);
while(true){
if((i__13182_13244 < count__13181_13243)){
var map__13183_13245 = cljs.core._nth.call(null,chunk__13180_13242,i__13182_13244);
var map__13183_13246__$1 = ((((!((map__13183_13245 == null)))?(((((map__13183_13245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13183_13245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13183_13245):map__13183_13245);
var gline_13247 = cljs.core.get.call(null,map__13183_13246__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13248 = cljs.core.get.call(null,map__13183_13246__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13249 = cljs.core.get.call(null,map__13183_13246__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13247], null),cljs.core.fnil.call(null,((function (seq__13179_13241,chunk__13180_13242,count__13181_13243,i__13182_13244,seq__13172_13234,chunk__13173_13235,count__13174_13236,i__13175_13237,seq__13165_13227,chunk__13166_13228,count__13167_13229,i__13168_13230,map__13183_13245,map__13183_13246__$1,gline_13247,gcol_13248,name_13249,vec__13176_13238,column_13239,column_info_13240,vec__13169_13231,line_13232,columns_13233,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13248], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13232,new cljs.core.Keyword(null,"col","col",-1959363084),column_13239,new cljs.core.Keyword(null,"name","name",1843675177),name_13249], null));
});})(seq__13179_13241,chunk__13180_13242,count__13181_13243,i__13182_13244,seq__13172_13234,chunk__13173_13235,count__13174_13236,i__13175_13237,seq__13165_13227,chunk__13166_13228,count__13167_13229,i__13168_13230,map__13183_13245,map__13183_13246__$1,gline_13247,gcol_13248,name_13249,vec__13176_13238,column_13239,column_info_13240,vec__13169_13231,line_13232,columns_13233,inverted))
,cljs.core.sorted_map.call(null)));


var G__13250 = seq__13179_13241;
var G__13251 = chunk__13180_13242;
var G__13252 = count__13181_13243;
var G__13253 = (i__13182_13244 + (1));
seq__13179_13241 = G__13250;
chunk__13180_13242 = G__13251;
count__13181_13243 = G__13252;
i__13182_13244 = G__13253;
continue;
} else {
var temp__5457__auto___13254 = cljs.core.seq.call(null,seq__13179_13241);
if(temp__5457__auto___13254){
var seq__13179_13255__$1 = temp__5457__auto___13254;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13179_13255__$1)){
var c__4351__auto___13256 = cljs.core.chunk_first.call(null,seq__13179_13255__$1);
var G__13257 = cljs.core.chunk_rest.call(null,seq__13179_13255__$1);
var G__13258 = c__4351__auto___13256;
var G__13259 = cljs.core.count.call(null,c__4351__auto___13256);
var G__13260 = (0);
seq__13179_13241 = G__13257;
chunk__13180_13242 = G__13258;
count__13181_13243 = G__13259;
i__13182_13244 = G__13260;
continue;
} else {
var map__13185_13261 = cljs.core.first.call(null,seq__13179_13255__$1);
var map__13185_13262__$1 = ((((!((map__13185_13261 == null)))?(((((map__13185_13261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13185_13261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13185_13261):map__13185_13261);
var gline_13263 = cljs.core.get.call(null,map__13185_13262__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13264 = cljs.core.get.call(null,map__13185_13262__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13265 = cljs.core.get.call(null,map__13185_13262__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13263], null),cljs.core.fnil.call(null,((function (seq__13179_13241,chunk__13180_13242,count__13181_13243,i__13182_13244,seq__13172_13234,chunk__13173_13235,count__13174_13236,i__13175_13237,seq__13165_13227,chunk__13166_13228,count__13167_13229,i__13168_13230,map__13185_13261,map__13185_13262__$1,gline_13263,gcol_13264,name_13265,seq__13179_13255__$1,temp__5457__auto___13254,vec__13176_13238,column_13239,column_info_13240,vec__13169_13231,line_13232,columns_13233,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13264], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13232,new cljs.core.Keyword(null,"col","col",-1959363084),column_13239,new cljs.core.Keyword(null,"name","name",1843675177),name_13265], null));
});})(seq__13179_13241,chunk__13180_13242,count__13181_13243,i__13182_13244,seq__13172_13234,chunk__13173_13235,count__13174_13236,i__13175_13237,seq__13165_13227,chunk__13166_13228,count__13167_13229,i__13168_13230,map__13185_13261,map__13185_13262__$1,gline_13263,gcol_13264,name_13265,seq__13179_13255__$1,temp__5457__auto___13254,vec__13176_13238,column_13239,column_info_13240,vec__13169_13231,line_13232,columns_13233,inverted))
,cljs.core.sorted_map.call(null)));


var G__13266 = cljs.core.next.call(null,seq__13179_13255__$1);
var G__13267 = null;
var G__13268 = (0);
var G__13269 = (0);
seq__13179_13241 = G__13266;
chunk__13180_13242 = G__13267;
count__13181_13243 = G__13268;
i__13182_13244 = G__13269;
continue;
}
} else {
}
}
break;
}


var G__13270 = seq__13172_13234;
var G__13271 = chunk__13173_13235;
var G__13272 = count__13174_13236;
var G__13273 = (i__13175_13237 + (1));
seq__13172_13234 = G__13270;
chunk__13173_13235 = G__13271;
count__13174_13236 = G__13272;
i__13175_13237 = G__13273;
continue;
} else {
var temp__5457__auto___13274 = cljs.core.seq.call(null,seq__13172_13234);
if(temp__5457__auto___13274){
var seq__13172_13275__$1 = temp__5457__auto___13274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13172_13275__$1)){
var c__4351__auto___13276 = cljs.core.chunk_first.call(null,seq__13172_13275__$1);
var G__13277 = cljs.core.chunk_rest.call(null,seq__13172_13275__$1);
var G__13278 = c__4351__auto___13276;
var G__13279 = cljs.core.count.call(null,c__4351__auto___13276);
var G__13280 = (0);
seq__13172_13234 = G__13277;
chunk__13173_13235 = G__13278;
count__13174_13236 = G__13279;
i__13175_13237 = G__13280;
continue;
} else {
var vec__13187_13281 = cljs.core.first.call(null,seq__13172_13275__$1);
var column_13282 = cljs.core.nth.call(null,vec__13187_13281,(0),null);
var column_info_13283 = cljs.core.nth.call(null,vec__13187_13281,(1),null);
var seq__13190_13284 = cljs.core.seq.call(null,column_info_13283);
var chunk__13191_13285 = null;
var count__13192_13286 = (0);
var i__13193_13287 = (0);
while(true){
if((i__13193_13287 < count__13192_13286)){
var map__13194_13288 = cljs.core._nth.call(null,chunk__13191_13285,i__13193_13287);
var map__13194_13289__$1 = ((((!((map__13194_13288 == null)))?(((((map__13194_13288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13194_13288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13194_13288):map__13194_13288);
var gline_13290 = cljs.core.get.call(null,map__13194_13289__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13291 = cljs.core.get.call(null,map__13194_13289__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13292 = cljs.core.get.call(null,map__13194_13289__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13290], null),cljs.core.fnil.call(null,((function (seq__13190_13284,chunk__13191_13285,count__13192_13286,i__13193_13287,seq__13172_13234,chunk__13173_13235,count__13174_13236,i__13175_13237,seq__13165_13227,chunk__13166_13228,count__13167_13229,i__13168_13230,map__13194_13288,map__13194_13289__$1,gline_13290,gcol_13291,name_13292,vec__13187_13281,column_13282,column_info_13283,seq__13172_13275__$1,temp__5457__auto___13274,vec__13169_13231,line_13232,columns_13233,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13291], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13232,new cljs.core.Keyword(null,"col","col",-1959363084),column_13282,new cljs.core.Keyword(null,"name","name",1843675177),name_13292], null));
});})(seq__13190_13284,chunk__13191_13285,count__13192_13286,i__13193_13287,seq__13172_13234,chunk__13173_13235,count__13174_13236,i__13175_13237,seq__13165_13227,chunk__13166_13228,count__13167_13229,i__13168_13230,map__13194_13288,map__13194_13289__$1,gline_13290,gcol_13291,name_13292,vec__13187_13281,column_13282,column_info_13283,seq__13172_13275__$1,temp__5457__auto___13274,vec__13169_13231,line_13232,columns_13233,inverted))
,cljs.core.sorted_map.call(null)));


var G__13293 = seq__13190_13284;
var G__13294 = chunk__13191_13285;
var G__13295 = count__13192_13286;
var G__13296 = (i__13193_13287 + (1));
seq__13190_13284 = G__13293;
chunk__13191_13285 = G__13294;
count__13192_13286 = G__13295;
i__13193_13287 = G__13296;
continue;
} else {
var temp__5457__auto___13297__$1 = cljs.core.seq.call(null,seq__13190_13284);
if(temp__5457__auto___13297__$1){
var seq__13190_13298__$1 = temp__5457__auto___13297__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13190_13298__$1)){
var c__4351__auto___13299 = cljs.core.chunk_first.call(null,seq__13190_13298__$1);
var G__13300 = cljs.core.chunk_rest.call(null,seq__13190_13298__$1);
var G__13301 = c__4351__auto___13299;
var G__13302 = cljs.core.count.call(null,c__4351__auto___13299);
var G__13303 = (0);
seq__13190_13284 = G__13300;
chunk__13191_13285 = G__13301;
count__13192_13286 = G__13302;
i__13193_13287 = G__13303;
continue;
} else {
var map__13196_13304 = cljs.core.first.call(null,seq__13190_13298__$1);
var map__13196_13305__$1 = ((((!((map__13196_13304 == null)))?(((((map__13196_13304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13196_13304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13196_13304):map__13196_13304);
var gline_13306 = cljs.core.get.call(null,map__13196_13305__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13307 = cljs.core.get.call(null,map__13196_13305__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13308 = cljs.core.get.call(null,map__13196_13305__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13306], null),cljs.core.fnil.call(null,((function (seq__13190_13284,chunk__13191_13285,count__13192_13286,i__13193_13287,seq__13172_13234,chunk__13173_13235,count__13174_13236,i__13175_13237,seq__13165_13227,chunk__13166_13228,count__13167_13229,i__13168_13230,map__13196_13304,map__13196_13305__$1,gline_13306,gcol_13307,name_13308,seq__13190_13298__$1,temp__5457__auto___13297__$1,vec__13187_13281,column_13282,column_info_13283,seq__13172_13275__$1,temp__5457__auto___13274,vec__13169_13231,line_13232,columns_13233,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13307], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13232,new cljs.core.Keyword(null,"col","col",-1959363084),column_13282,new cljs.core.Keyword(null,"name","name",1843675177),name_13308], null));
});})(seq__13190_13284,chunk__13191_13285,count__13192_13286,i__13193_13287,seq__13172_13234,chunk__13173_13235,count__13174_13236,i__13175_13237,seq__13165_13227,chunk__13166_13228,count__13167_13229,i__13168_13230,map__13196_13304,map__13196_13305__$1,gline_13306,gcol_13307,name_13308,seq__13190_13298__$1,temp__5457__auto___13297__$1,vec__13187_13281,column_13282,column_info_13283,seq__13172_13275__$1,temp__5457__auto___13274,vec__13169_13231,line_13232,columns_13233,inverted))
,cljs.core.sorted_map.call(null)));


var G__13309 = cljs.core.next.call(null,seq__13190_13298__$1);
var G__13310 = null;
var G__13311 = (0);
var G__13312 = (0);
seq__13190_13284 = G__13309;
chunk__13191_13285 = G__13310;
count__13192_13286 = G__13311;
i__13193_13287 = G__13312;
continue;
}
} else {
}
}
break;
}


var G__13313 = cljs.core.next.call(null,seq__13172_13275__$1);
var G__13314 = null;
var G__13315 = (0);
var G__13316 = (0);
seq__13172_13234 = G__13313;
chunk__13173_13235 = G__13314;
count__13174_13236 = G__13315;
i__13175_13237 = G__13316;
continue;
}
} else {
}
}
break;
}


var G__13317 = seq__13165_13227;
var G__13318 = chunk__13166_13228;
var G__13319 = count__13167_13229;
var G__13320 = (i__13168_13230 + (1));
seq__13165_13227 = G__13317;
chunk__13166_13228 = G__13318;
count__13167_13229 = G__13319;
i__13168_13230 = G__13320;
continue;
} else {
var temp__5457__auto___13321 = cljs.core.seq.call(null,seq__13165_13227);
if(temp__5457__auto___13321){
var seq__13165_13322__$1 = temp__5457__auto___13321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13165_13322__$1)){
var c__4351__auto___13323 = cljs.core.chunk_first.call(null,seq__13165_13322__$1);
var G__13324 = cljs.core.chunk_rest.call(null,seq__13165_13322__$1);
var G__13325 = c__4351__auto___13323;
var G__13326 = cljs.core.count.call(null,c__4351__auto___13323);
var G__13327 = (0);
seq__13165_13227 = G__13324;
chunk__13166_13228 = G__13325;
count__13167_13229 = G__13326;
i__13168_13230 = G__13327;
continue;
} else {
var vec__13198_13328 = cljs.core.first.call(null,seq__13165_13322__$1);
var line_13329 = cljs.core.nth.call(null,vec__13198_13328,(0),null);
var columns_13330 = cljs.core.nth.call(null,vec__13198_13328,(1),null);
var seq__13201_13331 = cljs.core.seq.call(null,columns_13330);
var chunk__13202_13332 = null;
var count__13203_13333 = (0);
var i__13204_13334 = (0);
while(true){
if((i__13204_13334 < count__13203_13333)){
var vec__13205_13335 = cljs.core._nth.call(null,chunk__13202_13332,i__13204_13334);
var column_13336 = cljs.core.nth.call(null,vec__13205_13335,(0),null);
var column_info_13337 = cljs.core.nth.call(null,vec__13205_13335,(1),null);
var seq__13208_13338 = cljs.core.seq.call(null,column_info_13337);
var chunk__13209_13339 = null;
var count__13210_13340 = (0);
var i__13211_13341 = (0);
while(true){
if((i__13211_13341 < count__13210_13340)){
var map__13212_13342 = cljs.core._nth.call(null,chunk__13209_13339,i__13211_13341);
var map__13212_13343__$1 = ((((!((map__13212_13342 == null)))?(((((map__13212_13342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13212_13342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13212_13342):map__13212_13342);
var gline_13344 = cljs.core.get.call(null,map__13212_13343__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13345 = cljs.core.get.call(null,map__13212_13343__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13346 = cljs.core.get.call(null,map__13212_13343__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13344], null),cljs.core.fnil.call(null,((function (seq__13208_13338,chunk__13209_13339,count__13210_13340,i__13211_13341,seq__13201_13331,chunk__13202_13332,count__13203_13333,i__13204_13334,seq__13165_13227,chunk__13166_13228,count__13167_13229,i__13168_13230,map__13212_13342,map__13212_13343__$1,gline_13344,gcol_13345,name_13346,vec__13205_13335,column_13336,column_info_13337,vec__13198_13328,line_13329,columns_13330,seq__13165_13322__$1,temp__5457__auto___13321,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13345], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13329,new cljs.core.Keyword(null,"col","col",-1959363084),column_13336,new cljs.core.Keyword(null,"name","name",1843675177),name_13346], null));
});})(seq__13208_13338,chunk__13209_13339,count__13210_13340,i__13211_13341,seq__13201_13331,chunk__13202_13332,count__13203_13333,i__13204_13334,seq__13165_13227,chunk__13166_13228,count__13167_13229,i__13168_13230,map__13212_13342,map__13212_13343__$1,gline_13344,gcol_13345,name_13346,vec__13205_13335,column_13336,column_info_13337,vec__13198_13328,line_13329,columns_13330,seq__13165_13322__$1,temp__5457__auto___13321,inverted))
,cljs.core.sorted_map.call(null)));


var G__13347 = seq__13208_13338;
var G__13348 = chunk__13209_13339;
var G__13349 = count__13210_13340;
var G__13350 = (i__13211_13341 + (1));
seq__13208_13338 = G__13347;
chunk__13209_13339 = G__13348;
count__13210_13340 = G__13349;
i__13211_13341 = G__13350;
continue;
} else {
var temp__5457__auto___13351__$1 = cljs.core.seq.call(null,seq__13208_13338);
if(temp__5457__auto___13351__$1){
var seq__13208_13352__$1 = temp__5457__auto___13351__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13208_13352__$1)){
var c__4351__auto___13353 = cljs.core.chunk_first.call(null,seq__13208_13352__$1);
var G__13354 = cljs.core.chunk_rest.call(null,seq__13208_13352__$1);
var G__13355 = c__4351__auto___13353;
var G__13356 = cljs.core.count.call(null,c__4351__auto___13353);
var G__13357 = (0);
seq__13208_13338 = G__13354;
chunk__13209_13339 = G__13355;
count__13210_13340 = G__13356;
i__13211_13341 = G__13357;
continue;
} else {
var map__13214_13358 = cljs.core.first.call(null,seq__13208_13352__$1);
var map__13214_13359__$1 = ((((!((map__13214_13358 == null)))?(((((map__13214_13358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13214_13358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13214_13358):map__13214_13358);
var gline_13360 = cljs.core.get.call(null,map__13214_13359__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13361 = cljs.core.get.call(null,map__13214_13359__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13362 = cljs.core.get.call(null,map__13214_13359__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13360], null),cljs.core.fnil.call(null,((function (seq__13208_13338,chunk__13209_13339,count__13210_13340,i__13211_13341,seq__13201_13331,chunk__13202_13332,count__13203_13333,i__13204_13334,seq__13165_13227,chunk__13166_13228,count__13167_13229,i__13168_13230,map__13214_13358,map__13214_13359__$1,gline_13360,gcol_13361,name_13362,seq__13208_13352__$1,temp__5457__auto___13351__$1,vec__13205_13335,column_13336,column_info_13337,vec__13198_13328,line_13329,columns_13330,seq__13165_13322__$1,temp__5457__auto___13321,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13361], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13329,new cljs.core.Keyword(null,"col","col",-1959363084),column_13336,new cljs.core.Keyword(null,"name","name",1843675177),name_13362], null));
});})(seq__13208_13338,chunk__13209_13339,count__13210_13340,i__13211_13341,seq__13201_13331,chunk__13202_13332,count__13203_13333,i__13204_13334,seq__13165_13227,chunk__13166_13228,count__13167_13229,i__13168_13230,map__13214_13358,map__13214_13359__$1,gline_13360,gcol_13361,name_13362,seq__13208_13352__$1,temp__5457__auto___13351__$1,vec__13205_13335,column_13336,column_info_13337,vec__13198_13328,line_13329,columns_13330,seq__13165_13322__$1,temp__5457__auto___13321,inverted))
,cljs.core.sorted_map.call(null)));


var G__13363 = cljs.core.next.call(null,seq__13208_13352__$1);
var G__13364 = null;
var G__13365 = (0);
var G__13366 = (0);
seq__13208_13338 = G__13363;
chunk__13209_13339 = G__13364;
count__13210_13340 = G__13365;
i__13211_13341 = G__13366;
continue;
}
} else {
}
}
break;
}


var G__13367 = seq__13201_13331;
var G__13368 = chunk__13202_13332;
var G__13369 = count__13203_13333;
var G__13370 = (i__13204_13334 + (1));
seq__13201_13331 = G__13367;
chunk__13202_13332 = G__13368;
count__13203_13333 = G__13369;
i__13204_13334 = G__13370;
continue;
} else {
var temp__5457__auto___13371__$1 = cljs.core.seq.call(null,seq__13201_13331);
if(temp__5457__auto___13371__$1){
var seq__13201_13372__$1 = temp__5457__auto___13371__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13201_13372__$1)){
var c__4351__auto___13373 = cljs.core.chunk_first.call(null,seq__13201_13372__$1);
var G__13374 = cljs.core.chunk_rest.call(null,seq__13201_13372__$1);
var G__13375 = c__4351__auto___13373;
var G__13376 = cljs.core.count.call(null,c__4351__auto___13373);
var G__13377 = (0);
seq__13201_13331 = G__13374;
chunk__13202_13332 = G__13375;
count__13203_13333 = G__13376;
i__13204_13334 = G__13377;
continue;
} else {
var vec__13216_13378 = cljs.core.first.call(null,seq__13201_13372__$1);
var column_13379 = cljs.core.nth.call(null,vec__13216_13378,(0),null);
var column_info_13380 = cljs.core.nth.call(null,vec__13216_13378,(1),null);
var seq__13219_13381 = cljs.core.seq.call(null,column_info_13380);
var chunk__13220_13382 = null;
var count__13221_13383 = (0);
var i__13222_13384 = (0);
while(true){
if((i__13222_13384 < count__13221_13383)){
var map__13223_13385 = cljs.core._nth.call(null,chunk__13220_13382,i__13222_13384);
var map__13223_13386__$1 = ((((!((map__13223_13385 == null)))?(((((map__13223_13385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13223_13385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13223_13385):map__13223_13385);
var gline_13387 = cljs.core.get.call(null,map__13223_13386__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13388 = cljs.core.get.call(null,map__13223_13386__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13389 = cljs.core.get.call(null,map__13223_13386__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13387], null),cljs.core.fnil.call(null,((function (seq__13219_13381,chunk__13220_13382,count__13221_13383,i__13222_13384,seq__13201_13331,chunk__13202_13332,count__13203_13333,i__13204_13334,seq__13165_13227,chunk__13166_13228,count__13167_13229,i__13168_13230,map__13223_13385,map__13223_13386__$1,gline_13387,gcol_13388,name_13389,vec__13216_13378,column_13379,column_info_13380,seq__13201_13372__$1,temp__5457__auto___13371__$1,vec__13198_13328,line_13329,columns_13330,seq__13165_13322__$1,temp__5457__auto___13321,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13388], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13329,new cljs.core.Keyword(null,"col","col",-1959363084),column_13379,new cljs.core.Keyword(null,"name","name",1843675177),name_13389], null));
});})(seq__13219_13381,chunk__13220_13382,count__13221_13383,i__13222_13384,seq__13201_13331,chunk__13202_13332,count__13203_13333,i__13204_13334,seq__13165_13227,chunk__13166_13228,count__13167_13229,i__13168_13230,map__13223_13385,map__13223_13386__$1,gline_13387,gcol_13388,name_13389,vec__13216_13378,column_13379,column_info_13380,seq__13201_13372__$1,temp__5457__auto___13371__$1,vec__13198_13328,line_13329,columns_13330,seq__13165_13322__$1,temp__5457__auto___13321,inverted))
,cljs.core.sorted_map.call(null)));


var G__13390 = seq__13219_13381;
var G__13391 = chunk__13220_13382;
var G__13392 = count__13221_13383;
var G__13393 = (i__13222_13384 + (1));
seq__13219_13381 = G__13390;
chunk__13220_13382 = G__13391;
count__13221_13383 = G__13392;
i__13222_13384 = G__13393;
continue;
} else {
var temp__5457__auto___13394__$2 = cljs.core.seq.call(null,seq__13219_13381);
if(temp__5457__auto___13394__$2){
var seq__13219_13395__$1 = temp__5457__auto___13394__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13219_13395__$1)){
var c__4351__auto___13396 = cljs.core.chunk_first.call(null,seq__13219_13395__$1);
var G__13397 = cljs.core.chunk_rest.call(null,seq__13219_13395__$1);
var G__13398 = c__4351__auto___13396;
var G__13399 = cljs.core.count.call(null,c__4351__auto___13396);
var G__13400 = (0);
seq__13219_13381 = G__13397;
chunk__13220_13382 = G__13398;
count__13221_13383 = G__13399;
i__13222_13384 = G__13400;
continue;
} else {
var map__13225_13401 = cljs.core.first.call(null,seq__13219_13395__$1);
var map__13225_13402__$1 = ((((!((map__13225_13401 == null)))?(((((map__13225_13401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13225_13401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13225_13401):map__13225_13401);
var gline_13403 = cljs.core.get.call(null,map__13225_13402__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_13404 = cljs.core.get.call(null,map__13225_13402__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_13405 = cljs.core.get.call(null,map__13225_13402__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13403], null),cljs.core.fnil.call(null,((function (seq__13219_13381,chunk__13220_13382,count__13221_13383,i__13222_13384,seq__13201_13331,chunk__13202_13332,count__13203_13333,i__13204_13334,seq__13165_13227,chunk__13166_13228,count__13167_13229,i__13168_13230,map__13225_13401,map__13225_13402__$1,gline_13403,gcol_13404,name_13405,seq__13219_13395__$1,temp__5457__auto___13394__$2,vec__13216_13378,column_13379,column_info_13380,seq__13201_13372__$1,temp__5457__auto___13371__$1,vec__13198_13328,line_13329,columns_13330,seq__13165_13322__$1,temp__5457__auto___13321,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_13404], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_13329,new cljs.core.Keyword(null,"col","col",-1959363084),column_13379,new cljs.core.Keyword(null,"name","name",1843675177),name_13405], null));
});})(seq__13219_13381,chunk__13220_13382,count__13221_13383,i__13222_13384,seq__13201_13331,chunk__13202_13332,count__13203_13333,i__13204_13334,seq__13165_13227,chunk__13166_13228,count__13167_13229,i__13168_13230,map__13225_13401,map__13225_13402__$1,gline_13403,gcol_13404,name_13405,seq__13219_13395__$1,temp__5457__auto___13394__$2,vec__13216_13378,column_13379,column_info_13380,seq__13201_13372__$1,temp__5457__auto___13371__$1,vec__13198_13328,line_13329,columns_13330,seq__13165_13322__$1,temp__5457__auto___13321,inverted))
,cljs.core.sorted_map.call(null)));


var G__13406 = cljs.core.next.call(null,seq__13219_13395__$1);
var G__13407 = null;
var G__13408 = (0);
var G__13409 = (0);
seq__13219_13381 = G__13406;
chunk__13220_13382 = G__13407;
count__13221_13383 = G__13408;
i__13222_13384 = G__13409;
continue;
}
} else {
}
}
break;
}


var G__13410 = cljs.core.next.call(null,seq__13201_13372__$1);
var G__13411 = null;
var G__13412 = (0);
var G__13413 = (0);
seq__13201_13331 = G__13410;
chunk__13202_13332 = G__13411;
count__13203_13333 = G__13412;
i__13204_13334 = G__13413;
continue;
}
} else {
}
}
break;
}


var G__13414 = cljs.core.next.call(null,seq__13165_13322__$1);
var G__13415 = null;
var G__13416 = (0);
var G__13417 = (0);
seq__13165_13227 = G__13414;
chunk__13166_13228 = G__13415;
count__13167_13229 = G__13416;
i__13168_13230 = G__13417;
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
