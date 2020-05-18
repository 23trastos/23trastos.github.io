// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__11529 = s;
var map__11529__$1 = ((((!((map__11529 == null)))?(((((map__11529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11529):map__11529);
var name = cljs.core.get.call(null,map__11529__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__11529__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__11532 = info;
var map__11533 = G__11532;
var map__11533__$1 = ((((!((map__11533 == null)))?(((((map__11533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11533):map__11533);
var shadow = cljs.core.get.call(null,map__11533__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__11532__$1 = G__11532;
while(true){
var d__$2 = d__$1;
var map__11535 = G__11532__$1;
var map__11535__$1 = ((((!((map__11535 == null)))?(((((map__11535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11535):map__11535);
var shadow__$1 = cljs.core.get.call(null,map__11535__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__11537 = (d__$2 + (1));
var G__11538 = shadow__$1;
d__$1 = G__11537;
G__11532__$1 = G__11538;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__11539){
var map__11540 = p__11539;
var map__11540__$1 = ((((!((map__11540 == null)))?(((((map__11540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11540):map__11540);
var name_var = map__11540__$1;
var name = cljs.core.get.call(null,map__11540__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__11540__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__11542 = info;
var map__11542__$1 = ((((!((map__11542 == null)))?(((((map__11542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11542):map__11542);
var ns = cljs.core.get.call(null,map__11542__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__11542__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),".","$")),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__11545 = arguments.length;
switch (G__11545) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge_str.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__11547 = cp;
switch (G__11547) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad),cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__11549_11553 = cljs.core.seq.call(null,s);
var chunk__11550_11554 = null;
var count__11551_11555 = (0);
var i__11552_11556 = (0);
while(true){
if((i__11552_11556 < count__11551_11555)){
var c_11557 = cljs.core._nth.call(null,chunk__11550_11554,i__11552_11556);
sb.append(cljs.compiler.escape_char.call(null,c_11557));


var G__11558 = seq__11549_11553;
var G__11559 = chunk__11550_11554;
var G__11560 = count__11551_11555;
var G__11561 = (i__11552_11556 + (1));
seq__11549_11553 = G__11558;
chunk__11550_11554 = G__11559;
count__11551_11555 = G__11560;
i__11552_11556 = G__11561;
continue;
} else {
var temp__5457__auto___11562 = cljs.core.seq.call(null,seq__11549_11553);
if(temp__5457__auto___11562){
var seq__11549_11563__$1 = temp__5457__auto___11562;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11549_11563__$1)){
var c__4351__auto___11564 = cljs.core.chunk_first.call(null,seq__11549_11563__$1);
var G__11565 = cljs.core.chunk_rest.call(null,seq__11549_11563__$1);
var G__11566 = c__4351__auto___11564;
var G__11567 = cljs.core.count.call(null,c__4351__auto___11564);
var G__11568 = (0);
seq__11549_11553 = G__11565;
chunk__11550_11554 = G__11566;
count__11551_11555 = G__11567;
i__11552_11556 = G__11568;
continue;
} else {
var c_11569 = cljs.core.first.call(null,seq__11549_11563__$1);
sb.append(cljs.compiler.escape_char.call(null,c_11569));


var G__11570 = cljs.core.next.call(null,seq__11549_11563__$1);
var G__11571 = null;
var G__11572 = (0);
var G__11573 = (0);
seq__11549_11553 = G__11570;
chunk__11550_11554 = G__11571;
count__11551_11555 = G__11572;
i__11552_11556 = G__11573;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__9922__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__9922__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__11574_11579 = ast;
var map__11574_11580__$1 = ((((!((map__11574_11579 == null)))?(((((map__11574_11579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11574_11579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11574_11579):map__11574_11579);
var env_11581 = cljs.core.get.call(null,map__11574_11580__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_11581))){
var map__11576_11582 = env_11581;
var map__11576_11583__$1 = ((((!((map__11576_11582 == null)))?(((((map__11576_11582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11576_11582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11576_11582):map__11576_11582);
var line_11584 = cljs.core.get.call(null,map__11576_11583__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_11585 = cljs.core.get.call(null,map__11576_11583__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__11576_11582,map__11576_11583__$1,line_11584,column_11585,map__11574_11579,map__11574_11580__$1,env_11581,val__9922__auto__){
return (function (m){
var minfo = (function (){var G__11578 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__11578,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__11578;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_11584 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__11576_11582,map__11576_11583__$1,line_11584,column_11585,map__11574_11579,map__11574_11580__$1,env_11581,val__9922__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_11585)?(column_11585 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__11576_11582,map__11576_11583__$1,line_11584,column_11585,map__11574_11579,map__11574_11580__$1,env_11581,val__9922__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__11576_11582,map__11576_11583__$1,line_11584,column_11585,map__11574_11579,map__11574_11580__$1,env_11581,val__9922__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__11576_11582,map__11576_11583__$1,line_11584,column_11585,map__11574_11579,map__11574_11580__$1,env_11581,val__9922__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__11576_11582,map__11576_11583__$1,line_11584,column_11585,map__11574_11579,map__11574_11580__$1,env_11581,val__9922__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__9922__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11592 = arguments.length;
var i__4532__auto___11593 = (0);
while(true){
if((i__4532__auto___11593 < len__4531__auto___11592)){
args__4534__auto__.push((arguments[i__4532__auto___11593]));

var G__11594 = (i__4532__auto___11593 + (1));
i__4532__auto___11593 = G__11594;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__11588_11595 = cljs.core.seq.call(null,xs);
var chunk__11589_11596 = null;
var count__11590_11597 = (0);
var i__11591_11598 = (0);
while(true){
if((i__11591_11598 < count__11590_11597)){
var x_11599 = cljs.core._nth.call(null,chunk__11589_11596,i__11591_11598);
if((x_11599 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_11599)){
cljs.compiler.emit.call(null,x_11599);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_11599)){
cljs.core.apply.call(null,cljs.compiler.emits,x_11599);
} else {
if(goog.isFunction(x_11599)){
x_11599.call(null);
} else {
var s_11600 = cljs.core.print_str.call(null,x_11599);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__11588_11595,chunk__11589_11596,count__11590_11597,i__11591_11598,s_11600,x_11599){
return (function (p1__11586_SHARP_){
return (p1__11586_SHARP_ + cljs.core.count.call(null,s_11600));
});})(seq__11588_11595,chunk__11589_11596,count__11590_11597,i__11591_11598,s_11600,x_11599))
);
}

cljs.core.print.call(null,s_11600);

}
}
}
}


var G__11601 = seq__11588_11595;
var G__11602 = chunk__11589_11596;
var G__11603 = count__11590_11597;
var G__11604 = (i__11591_11598 + (1));
seq__11588_11595 = G__11601;
chunk__11589_11596 = G__11602;
count__11590_11597 = G__11603;
i__11591_11598 = G__11604;
continue;
} else {
var temp__5457__auto___11605 = cljs.core.seq.call(null,seq__11588_11595);
if(temp__5457__auto___11605){
var seq__11588_11606__$1 = temp__5457__auto___11605;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11588_11606__$1)){
var c__4351__auto___11607 = cljs.core.chunk_first.call(null,seq__11588_11606__$1);
var G__11608 = cljs.core.chunk_rest.call(null,seq__11588_11606__$1);
var G__11609 = c__4351__auto___11607;
var G__11610 = cljs.core.count.call(null,c__4351__auto___11607);
var G__11611 = (0);
seq__11588_11595 = G__11608;
chunk__11589_11596 = G__11609;
count__11590_11597 = G__11610;
i__11591_11598 = G__11611;
continue;
} else {
var x_11612 = cljs.core.first.call(null,seq__11588_11606__$1);
if((x_11612 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_11612)){
cljs.compiler.emit.call(null,x_11612);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_11612)){
cljs.core.apply.call(null,cljs.compiler.emits,x_11612);
} else {
if(goog.isFunction(x_11612)){
x_11612.call(null);
} else {
var s_11613 = cljs.core.print_str.call(null,x_11612);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__11588_11595,chunk__11589_11596,count__11590_11597,i__11591_11598,s_11613,x_11612,seq__11588_11606__$1,temp__5457__auto___11605){
return (function (p1__11586_SHARP_){
return (p1__11586_SHARP_ + cljs.core.count.call(null,s_11613));
});})(seq__11588_11595,chunk__11589_11596,count__11590_11597,i__11591_11598,s_11613,x_11612,seq__11588_11606__$1,temp__5457__auto___11605))
);
}

cljs.core.print.call(null,s_11613);

}
}
}
}


var G__11614 = cljs.core.next.call(null,seq__11588_11606__$1);
var G__11615 = null;
var G__11616 = (0);
var G__11617 = (0);
seq__11588_11595 = G__11614;
chunk__11589_11596 = G__11615;
count__11590_11597 = G__11616;
i__11591_11598 = G__11617;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.compiler.emits.cljs$lang$applyTo = (function (seq11587){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11587));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__4534__auto__ = [];
var len__4531__auto___11623 = arguments.length;
var i__4532__auto___11624 = (0);
while(true){
if((i__4532__auto___11624 < len__4531__auto___11623)){
args__4534__auto__.push((arguments[i__4532__auto___11624]));

var G__11625 = (i__4532__auto___11624 + (1));
i__4532__auto___11624 = G__11625;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

var _STAR_flush_on_newline_STAR_11619_11626 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_11619_11626;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__11620){
var map__11621 = p__11620;
var map__11621__$1 = ((((!((map__11621 == null)))?(((((map__11621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11621):map__11621);
var m = map__11621__$1;
var gen_line = cljs.core.get.call(null,map__11621__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq11618){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11618));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4462__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_11627_11629 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_11628_11630 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_11627_11629,_STAR_print_fn_STAR_11628_11630,sb__4462__auto__){
return (function (x__4463__auto__){
return sb__4462__auto__.append(x__4463__auto__);
});})(_STAR_print_newline_STAR_11627_11629,_STAR_print_fn_STAR_11628_11630,sb__4462__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11628_11630;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_11627_11629;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4462__auto__)].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant !== 'undefined')){
} else {
cljs.compiler.emit_constant = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.call(null,"NaN");
} else {
if(cljs.core.not.call(null,isFinite(x))){
return cljs.compiler.emits.call(null,(((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.call(null,"(",x,")");

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__11631 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__11631,(0),null);
var flags = cljs.core.nth.call(null,vec__11631,(1),null);
var pattern = cljs.core.nth.call(null,vec__11631,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
var temp__5455__auto__ = (function (){var and__3938__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__3938__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
var temp__5455__auto__ = (function (){var and__3938__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__3938__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__11635){
var map__11636 = p__11635;
var map__11636__$1 = ((((!((map__11636 == null)))?(((((map__11636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11636):map__11636);
var ast = map__11636__$1;
var info = cljs.core.get.call(null,map__11636__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__11636__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__11636__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5455__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__11638 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__11638__$1 = ((((!((map__11638 == null)))?(((((map__11638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11638):map__11638);
var cenv = map__11638__$1;
var options = cljs.core.get.call(null,map__11638__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__3949__auto__ = js_module_name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__11640 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__3938__auto__;
}
})())){
return clojure.set.difference.call(null,G__11640,cljs.analyzer.es5_allowed);
} else {
return G__11640;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__3949__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__11641 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__11641,reserved);
} else {
return G__11641;
}
})();
var env__11521__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__11642_11643 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__11642_11644__$1 = (((G__11642_11643 instanceof cljs.core.Keyword))?G__11642_11643.fqn:null);
switch (G__11642_11644__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__3938__auto__;
}
})())){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.call(null,info__$2);
}

break;
default:
cljs.compiler.emits.call(null,info__$2);

}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__11646){
var map__11647 = p__11646;
var map__11647__$1 = ((((!((map__11647 == null)))?(((((map__11647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11647):map__11647);
var arg = map__11647__$1;
var env = cljs.core.get.call(null,map__11647__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__11647__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__11647__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__11647__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__11649 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__11649__$1 = ((((!((map__11649 == null)))?(((((map__11649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11649):map__11649);
var name = cljs.core.get.call(null,map__11649__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__11521__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__11651){
var map__11652 = p__11651;
var map__11652__$1 = ((((!((map__11652 == null)))?(((((map__11652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11652):map__11652);
var expr = cljs.core.get.call(null,map__11652__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__11652__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__11652__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11521__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return ((cljs.core.every_QMARK_.call(null,(function (p1__11654_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__11654_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__11655){
var map__11656 = p__11655;
var map__11656__$1 = ((((!((map__11656 == null)))?(((((map__11656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11656):map__11656);
var env = cljs.core.get.call(null,map__11656__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__11656__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__11656__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__11521__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__11658){
var map__11659 = p__11658;
var map__11659__$1 = ((((!((map__11659 == null)))?(((((map__11659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11659):map__11659);
var items = cljs.core.get.call(null,map__11659__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__11659__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11521__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__11661){
var map__11662 = p__11661;
var map__11662__$1 = ((((!((map__11662 == null)))?(((((map__11662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11662):map__11662);
var items = cljs.core.get.call(null,map__11662__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__11662__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11521__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_11664 = cljs.core.count.call(null,items);
if((cnt_11664 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_11664,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return ((cljs.core.every_QMARK_.call(null,(function (p1__11665_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__11665_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__11666){
var map__11667 = p__11666;
var map__11667__$1 = ((((!((map__11667 == null)))?(((((map__11667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11667):map__11667);
var items = cljs.core.get.call(null,map__11667__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__11667__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11521__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",cljs.compiler.comma_sep.call(null,items),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__11669){
var map__11670 = p__11669;
var map__11670__$1 = ((((!((map__11670 == null)))?(((((map__11670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11670):map__11670);
var items = cljs.core.get.call(null,map__11670__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__11670__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__11670__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11521__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__5457__auto___11688 = cljs.core.seq.call(null,items);
if(temp__5457__auto___11688){
var items_11689__$1 = temp__5457__auto___11688;
var vec__11672_11690 = items_11689__$1;
var seq__11673_11691 = cljs.core.seq.call(null,vec__11672_11690);
var first__11674_11692 = cljs.core.first.call(null,seq__11673_11691);
var seq__11673_11693__$1 = cljs.core.next.call(null,seq__11673_11691);
var vec__11675_11694 = first__11674_11692;
var k_11695 = cljs.core.nth.call(null,vec__11675_11694,(0),null);
var v_11696 = cljs.core.nth.call(null,vec__11675_11694,(1),null);
var r_11697 = seq__11673_11693__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_11695),"\": ",v_11696);

var seq__11678_11698 = cljs.core.seq.call(null,r_11697);
var chunk__11679_11699 = null;
var count__11680_11700 = (0);
var i__11681_11701 = (0);
while(true){
if((i__11681_11701 < count__11680_11700)){
var vec__11682_11702 = cljs.core._nth.call(null,chunk__11679_11699,i__11681_11701);
var k_11703__$1 = cljs.core.nth.call(null,vec__11682_11702,(0),null);
var v_11704__$1 = cljs.core.nth.call(null,vec__11682_11702,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_11703__$1),"\": ",v_11704__$1);


var G__11705 = seq__11678_11698;
var G__11706 = chunk__11679_11699;
var G__11707 = count__11680_11700;
var G__11708 = (i__11681_11701 + (1));
seq__11678_11698 = G__11705;
chunk__11679_11699 = G__11706;
count__11680_11700 = G__11707;
i__11681_11701 = G__11708;
continue;
} else {
var temp__5457__auto___11709__$1 = cljs.core.seq.call(null,seq__11678_11698);
if(temp__5457__auto___11709__$1){
var seq__11678_11710__$1 = temp__5457__auto___11709__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11678_11710__$1)){
var c__4351__auto___11711 = cljs.core.chunk_first.call(null,seq__11678_11710__$1);
var G__11712 = cljs.core.chunk_rest.call(null,seq__11678_11710__$1);
var G__11713 = c__4351__auto___11711;
var G__11714 = cljs.core.count.call(null,c__4351__auto___11711);
var G__11715 = (0);
seq__11678_11698 = G__11712;
chunk__11679_11699 = G__11713;
count__11680_11700 = G__11714;
i__11681_11701 = G__11715;
continue;
} else {
var vec__11685_11716 = cljs.core.first.call(null,seq__11678_11710__$1);
var k_11717__$1 = cljs.core.nth.call(null,vec__11685_11716,(0),null);
var v_11718__$1 = cljs.core.nth.call(null,vec__11685_11716,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_11717__$1),"\": ",v_11718__$1);


var G__11719 = cljs.core.next.call(null,seq__11678_11710__$1);
var G__11720 = null;
var G__11721 = (0);
var G__11722 = (0);
seq__11678_11698 = G__11719;
chunk__11679_11699 = G__11720;
count__11680_11700 = G__11721;
i__11681_11701 = G__11722;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"})");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__11723){
var map__11724 = p__11723;
var map__11724__$1 = ((((!((map__11724 == null)))?(((((map__11724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11724):map__11724);
var items = cljs.core.get.call(null,map__11724__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__11724__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__11724__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__11724__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11521__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__11726){
var map__11727 = p__11726;
var map__11727__$1 = ((((!((map__11727 == null)))?(((((map__11727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11727):map__11727);
var form = cljs.core.get.call(null,map__11727__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__11727__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__11521__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__11729){
var map__11730 = p__11729;
var map__11730__$1 = ((((!((map__11730 == null)))?(((((map__11730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11730):map__11730);
var op = cljs.core.get.call(null,map__11730__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__11730__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__11730__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__3949__auto__ = (function (){var and__3938__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__3938__auto__){
var and__3938__auto____$1 = form;
if(cljs.core.truth_(and__3938__auto____$1)){
return !(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0)))))));
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var and__3938__auto__ = !((const_expr == null));
if(and__3938__auto__){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return and__3938__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__11732){
var map__11733 = p__11732;
var map__11733__$1 = ((((!((map__11733 == null)))?(((((map__11733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11733):map__11733);
var op = cljs.core.get.call(null,map__11733__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__11733__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__11733__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__3949__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
var and__3938__auto__ = !((const_expr == null));
if(and__3938__auto__){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return and__3938__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__11735){
var map__11736 = p__11735;
var map__11736__$1 = ((((!((map__11736 == null)))?(((((map__11736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11736):map__11736);
var test = cljs.core.get.call(null,map__11736__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__11736__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__11736__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__11736__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__11736__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__3949__auto__ = unchecked;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__11738){
var map__11739 = p__11738;
var map__11739__$1 = ((((!((map__11739 == null)))?(((((map__11739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11739):map__11739);
var v = cljs.core.get.call(null,map__11739__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__11739__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__11739__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__11739__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__11739__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__11741_11759 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__11742_11760 = null;
var count__11743_11761 = (0);
var i__11744_11762 = (0);
while(true){
if((i__11744_11762 < count__11743_11761)){
var vec__11745_11763 = cljs.core._nth.call(null,chunk__11742_11760,i__11744_11762);
var ts_11764 = cljs.core.nth.call(null,vec__11745_11763,(0),null);
var then_11765 = cljs.core.nth.call(null,vec__11745_11763,(1),null);
var seq__11748_11766 = cljs.core.seq.call(null,ts_11764);
var chunk__11749_11767 = null;
var count__11750_11768 = (0);
var i__11751_11769 = (0);
while(true){
if((i__11751_11769 < count__11750_11768)){
var test_11770 = cljs.core._nth.call(null,chunk__11749_11767,i__11751_11769);
cljs.compiler.emitln.call(null,"case ",test_11770,":");


var G__11771 = seq__11748_11766;
var G__11772 = chunk__11749_11767;
var G__11773 = count__11750_11768;
var G__11774 = (i__11751_11769 + (1));
seq__11748_11766 = G__11771;
chunk__11749_11767 = G__11772;
count__11750_11768 = G__11773;
i__11751_11769 = G__11774;
continue;
} else {
var temp__5457__auto___11775 = cljs.core.seq.call(null,seq__11748_11766);
if(temp__5457__auto___11775){
var seq__11748_11776__$1 = temp__5457__auto___11775;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11748_11776__$1)){
var c__4351__auto___11777 = cljs.core.chunk_first.call(null,seq__11748_11776__$1);
var G__11778 = cljs.core.chunk_rest.call(null,seq__11748_11776__$1);
var G__11779 = c__4351__auto___11777;
var G__11780 = cljs.core.count.call(null,c__4351__auto___11777);
var G__11781 = (0);
seq__11748_11766 = G__11778;
chunk__11749_11767 = G__11779;
count__11750_11768 = G__11780;
i__11751_11769 = G__11781;
continue;
} else {
var test_11782 = cljs.core.first.call(null,seq__11748_11776__$1);
cljs.compiler.emitln.call(null,"case ",test_11782,":");


var G__11783 = cljs.core.next.call(null,seq__11748_11776__$1);
var G__11784 = null;
var G__11785 = (0);
var G__11786 = (0);
seq__11748_11766 = G__11783;
chunk__11749_11767 = G__11784;
count__11750_11768 = G__11785;
i__11751_11769 = G__11786;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_11765);
} else {
cljs.compiler.emitln.call(null,then_11765);
}

cljs.compiler.emitln.call(null,"break;");


var G__11787 = seq__11741_11759;
var G__11788 = chunk__11742_11760;
var G__11789 = count__11743_11761;
var G__11790 = (i__11744_11762 + (1));
seq__11741_11759 = G__11787;
chunk__11742_11760 = G__11788;
count__11743_11761 = G__11789;
i__11744_11762 = G__11790;
continue;
} else {
var temp__5457__auto___11791 = cljs.core.seq.call(null,seq__11741_11759);
if(temp__5457__auto___11791){
var seq__11741_11792__$1 = temp__5457__auto___11791;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11741_11792__$1)){
var c__4351__auto___11793 = cljs.core.chunk_first.call(null,seq__11741_11792__$1);
var G__11794 = cljs.core.chunk_rest.call(null,seq__11741_11792__$1);
var G__11795 = c__4351__auto___11793;
var G__11796 = cljs.core.count.call(null,c__4351__auto___11793);
var G__11797 = (0);
seq__11741_11759 = G__11794;
chunk__11742_11760 = G__11795;
count__11743_11761 = G__11796;
i__11744_11762 = G__11797;
continue;
} else {
var vec__11752_11798 = cljs.core.first.call(null,seq__11741_11792__$1);
var ts_11799 = cljs.core.nth.call(null,vec__11752_11798,(0),null);
var then_11800 = cljs.core.nth.call(null,vec__11752_11798,(1),null);
var seq__11755_11801 = cljs.core.seq.call(null,ts_11799);
var chunk__11756_11802 = null;
var count__11757_11803 = (0);
var i__11758_11804 = (0);
while(true){
if((i__11758_11804 < count__11757_11803)){
var test_11805 = cljs.core._nth.call(null,chunk__11756_11802,i__11758_11804);
cljs.compiler.emitln.call(null,"case ",test_11805,":");


var G__11806 = seq__11755_11801;
var G__11807 = chunk__11756_11802;
var G__11808 = count__11757_11803;
var G__11809 = (i__11758_11804 + (1));
seq__11755_11801 = G__11806;
chunk__11756_11802 = G__11807;
count__11757_11803 = G__11808;
i__11758_11804 = G__11809;
continue;
} else {
var temp__5457__auto___11810__$1 = cljs.core.seq.call(null,seq__11755_11801);
if(temp__5457__auto___11810__$1){
var seq__11755_11811__$1 = temp__5457__auto___11810__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11755_11811__$1)){
var c__4351__auto___11812 = cljs.core.chunk_first.call(null,seq__11755_11811__$1);
var G__11813 = cljs.core.chunk_rest.call(null,seq__11755_11811__$1);
var G__11814 = c__4351__auto___11812;
var G__11815 = cljs.core.count.call(null,c__4351__auto___11812);
var G__11816 = (0);
seq__11755_11801 = G__11813;
chunk__11756_11802 = G__11814;
count__11757_11803 = G__11815;
i__11758_11804 = G__11816;
continue;
} else {
var test_11817 = cljs.core.first.call(null,seq__11755_11811__$1);
cljs.compiler.emitln.call(null,"case ",test_11817,":");


var G__11818 = cljs.core.next.call(null,seq__11755_11811__$1);
var G__11819 = null;
var G__11820 = (0);
var G__11821 = (0);
seq__11755_11801 = G__11818;
chunk__11756_11802 = G__11819;
count__11757_11803 = G__11820;
i__11758_11804 = G__11821;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_11800);
} else {
cljs.compiler.emitln.call(null,then_11800);
}

cljs.compiler.emitln.call(null,"break;");


var G__11822 = cljs.core.next.call(null,seq__11741_11792__$1);
var G__11823 = null;
var G__11824 = (0);
var G__11825 = (0);
seq__11741_11759 = G__11822;
chunk__11742_11760 = G__11823;
count__11743_11761 = G__11824;
i__11744_11762 = G__11825;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__11826){
var map__11827 = p__11826;
var map__11827__$1 = ((((!((map__11827 == null)))?(((((map__11827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11827):map__11827);
var throw$ = cljs.core.get.call(null,map__11827__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__11827__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__11830 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__11830,(0),null);
var rstr = cljs.core.nth.call(null,vec__11830,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__11830,fstr,rstr,ret_t,axstr){
return (function (p1__11829_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__11829_SHARP_);
});})(idx,vec__11830,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__11833 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11833),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__11833;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__11834_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__11834_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__11835 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__11836 = cljs.core.seq.call(null,vec__11835);
var first__11837 = cljs.core.first.call(null,seq__11836);
var seq__11836__$1 = cljs.core.next.call(null,seq__11836);
var p = first__11837;
var first__11837__$1 = cljs.core.first.call(null,seq__11836__$1);
var seq__11836__$2 = cljs.core.next.call(null,seq__11836__$1);
var ts = first__11837__$1;
var first__11837__$2 = cljs.core.first.call(null,seq__11836__$2);
var seq__11836__$3 = cljs.core.next.call(null,seq__11836__$2);
var n = first__11837__$2;
var xs = seq__11836__$3;
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__3938__auto__){
var and__3938__auto____$1 = ts;
if(cljs.core.truth_(and__3938__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__11838 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__11839 = cljs.core.seq.call(null,vec__11838);
var first__11840 = cljs.core.first.call(null,seq__11839);
var seq__11839__$1 = cljs.core.next.call(null,seq__11839);
var p = first__11840;
var first__11840__$1 = cljs.core.first.call(null,seq__11839__$1);
var seq__11839__$2 = cljs.core.next.call(null,seq__11839__$1);
var ts = first__11840__$1;
var xs = seq__11839__$2;
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__3938__auto__){
var and__3938__auto____$1 = ts;
if(cljs.core.truth_(and__3938__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__11843 = arguments.length;
switch (G__11843) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__11851 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__11841_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__11841_SHARP_);
} else {
return p1__11841_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__11852 = cljs.core.seq.call(null,vec__11851);
var first__11853 = cljs.core.first.call(null,seq__11852);
var seq__11852__$1 = cljs.core.next.call(null,seq__11852);
var x = first__11853;
var ys = seq__11852__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__11854 = cljs.core.seq.call(null,ys);
var chunk__11855 = null;
var count__11856 = (0);
var i__11857 = (0);
while(true){
if((i__11857 < count__11856)){
var next_line = cljs.core._nth.call(null,chunk__11855,i__11857);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__11863 = seq__11854;
var G__11864 = chunk__11855;
var G__11865 = count__11856;
var G__11866 = (i__11857 + (1));
seq__11854 = G__11863;
chunk__11855 = G__11864;
count__11856 = G__11865;
i__11857 = G__11866;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__11854);
if(temp__5457__auto__){
var seq__11854__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11854__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__11854__$1);
var G__11867 = cljs.core.chunk_rest.call(null,seq__11854__$1);
var G__11868 = c__4351__auto__;
var G__11869 = cljs.core.count.call(null,c__4351__auto__);
var G__11870 = (0);
seq__11854 = G__11867;
chunk__11855 = G__11868;
count__11856 = G__11869;
i__11857 = G__11870;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__11854__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__11871 = cljs.core.next.call(null,seq__11854__$1);
var G__11872 = null;
var G__11873 = (0);
var G__11874 = (0);
seq__11854 = G__11871;
chunk__11855 = G__11872;
count__11856 = G__11873;
i__11857 = G__11874;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__11858_11875 = cljs.core.seq.call(null,docs__$2);
var chunk__11859_11876 = null;
var count__11860_11877 = (0);
var i__11861_11878 = (0);
while(true){
if((i__11861_11878 < count__11860_11877)){
var e_11879 = cljs.core._nth.call(null,chunk__11859_11876,i__11861_11878);
if(cljs.core.truth_(e_11879)){
print_comment_lines.call(null,e_11879);
} else {
}


var G__11880 = seq__11858_11875;
var G__11881 = chunk__11859_11876;
var G__11882 = count__11860_11877;
var G__11883 = (i__11861_11878 + (1));
seq__11858_11875 = G__11880;
chunk__11859_11876 = G__11881;
count__11860_11877 = G__11882;
i__11861_11878 = G__11883;
continue;
} else {
var temp__5457__auto___11884 = cljs.core.seq.call(null,seq__11858_11875);
if(temp__5457__auto___11884){
var seq__11858_11885__$1 = temp__5457__auto___11884;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11858_11885__$1)){
var c__4351__auto___11886 = cljs.core.chunk_first.call(null,seq__11858_11885__$1);
var G__11887 = cljs.core.chunk_rest.call(null,seq__11858_11885__$1);
var G__11888 = c__4351__auto___11886;
var G__11889 = cljs.core.count.call(null,c__4351__auto___11886);
var G__11890 = (0);
seq__11858_11875 = G__11887;
chunk__11859_11876 = G__11888;
count__11860_11877 = G__11889;
i__11861_11878 = G__11890;
continue;
} else {
var e_11891 = cljs.core.first.call(null,seq__11858_11885__$1);
if(cljs.core.truth_(e_11891)){
print_comment_lines.call(null,e_11891);
} else {
}


var G__11892 = cljs.core.next.call(null,seq__11858_11885__$1);
var G__11893 = null;
var G__11894 = (0);
var G__11895 = (0);
seq__11858_11875 = G__11892;
chunk__11859_11876 = G__11893;
count__11860_11877 = G__11894;
i__11861_11878 = G__11895;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__3938__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__11897_SHARP_){
return goog.string.startsWith(p1__11897_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = opts;
if(cljs.core.truth_(and__3938__auto____$1)){
var and__3938__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__3938__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__3938__auto____$2;
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__11898){
var map__11899 = p__11898;
var map__11899__$1 = ((((!((map__11899 == null)))?(((((map__11899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11899):map__11899);
var name = cljs.core.get.call(null,map__11899__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__11899__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__11899__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__11899__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__11899__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__11899__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__11899__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__11899__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__11899__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__3949__auto__ = init;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__5455__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5455__auto__)){
var define = temp__5455__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(and__3938__auto__){
return test;
} else {
return and__3938__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__11901){
var map__11902 = p__11901;
var map__11902__$1 = ((((!((map__11902 == null)))?(((((map__11902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11902):map__11902);
var name = cljs.core.get.call(null,map__11902__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__11902__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__11902__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__11904_11922 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__11905_11923 = null;
var count__11906_11924 = (0);
var i__11907_11925 = (0);
while(true){
if((i__11907_11925 < count__11906_11924)){
var vec__11908_11926 = cljs.core._nth.call(null,chunk__11905_11923,i__11907_11925);
var i_11927 = cljs.core.nth.call(null,vec__11908_11926,(0),null);
var param_11928 = cljs.core.nth.call(null,vec__11908_11926,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_11928);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__11929 = seq__11904_11922;
var G__11930 = chunk__11905_11923;
var G__11931 = count__11906_11924;
var G__11932 = (i__11907_11925 + (1));
seq__11904_11922 = G__11929;
chunk__11905_11923 = G__11930;
count__11906_11924 = G__11931;
i__11907_11925 = G__11932;
continue;
} else {
var temp__5457__auto___11933 = cljs.core.seq.call(null,seq__11904_11922);
if(temp__5457__auto___11933){
var seq__11904_11934__$1 = temp__5457__auto___11933;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11904_11934__$1)){
var c__4351__auto___11935 = cljs.core.chunk_first.call(null,seq__11904_11934__$1);
var G__11936 = cljs.core.chunk_rest.call(null,seq__11904_11934__$1);
var G__11937 = c__4351__auto___11935;
var G__11938 = cljs.core.count.call(null,c__4351__auto___11935);
var G__11939 = (0);
seq__11904_11922 = G__11936;
chunk__11905_11923 = G__11937;
count__11906_11924 = G__11938;
i__11907_11925 = G__11939;
continue;
} else {
var vec__11911_11940 = cljs.core.first.call(null,seq__11904_11934__$1);
var i_11941 = cljs.core.nth.call(null,vec__11911_11940,(0),null);
var param_11942 = cljs.core.nth.call(null,vec__11911_11940,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_11942);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__11943 = cljs.core.next.call(null,seq__11904_11934__$1);
var G__11944 = null;
var G__11945 = (0);
var G__11946 = (0);
seq__11904_11922 = G__11943;
chunk__11905_11923 = G__11944;
count__11906_11924 = G__11945;
i__11907_11925 = G__11946;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__11914_11947 = cljs.core.seq.call(null,params);
var chunk__11915_11948 = null;
var count__11916_11949 = (0);
var i__11917_11950 = (0);
while(true){
if((i__11917_11950 < count__11916_11949)){
var param_11951 = cljs.core._nth.call(null,chunk__11915_11948,i__11917_11950);
cljs.compiler.emit.call(null,param_11951);

if(cljs.core._EQ_.call(null,param_11951,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11952 = seq__11914_11947;
var G__11953 = chunk__11915_11948;
var G__11954 = count__11916_11949;
var G__11955 = (i__11917_11950 + (1));
seq__11914_11947 = G__11952;
chunk__11915_11948 = G__11953;
count__11916_11949 = G__11954;
i__11917_11950 = G__11955;
continue;
} else {
var temp__5457__auto___11956 = cljs.core.seq.call(null,seq__11914_11947);
if(temp__5457__auto___11956){
var seq__11914_11957__$1 = temp__5457__auto___11956;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11914_11957__$1)){
var c__4351__auto___11958 = cljs.core.chunk_first.call(null,seq__11914_11957__$1);
var G__11959 = cljs.core.chunk_rest.call(null,seq__11914_11957__$1);
var G__11960 = c__4351__auto___11958;
var G__11961 = cljs.core.count.call(null,c__4351__auto___11958);
var G__11962 = (0);
seq__11914_11947 = G__11959;
chunk__11915_11948 = G__11960;
count__11916_11949 = G__11961;
i__11917_11950 = G__11962;
continue;
} else {
var param_11963 = cljs.core.first.call(null,seq__11914_11957__$1);
cljs.compiler.emit.call(null,param_11963);

if(cljs.core._EQ_.call(null,param_11963,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11964 = cljs.core.next.call(null,seq__11914_11957__$1);
var G__11965 = null;
var G__11966 = (0);
var G__11967 = (0);
seq__11914_11947 = G__11964;
chunk__11915_11948 = G__11965;
count__11916_11949 = G__11966;
i__11917_11950 = G__11967;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__11918_11968 = cljs.core.seq.call(null,params);
var chunk__11919_11969 = null;
var count__11920_11970 = (0);
var i__11921_11971 = (0);
while(true){
if((i__11921_11971 < count__11920_11970)){
var param_11972 = cljs.core._nth.call(null,chunk__11919_11969,i__11921_11971);
cljs.compiler.emit.call(null,param_11972);

if(cljs.core._EQ_.call(null,param_11972,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11973 = seq__11918_11968;
var G__11974 = chunk__11919_11969;
var G__11975 = count__11920_11970;
var G__11976 = (i__11921_11971 + (1));
seq__11918_11968 = G__11973;
chunk__11919_11969 = G__11974;
count__11920_11970 = G__11975;
i__11921_11971 = G__11976;
continue;
} else {
var temp__5457__auto___11977 = cljs.core.seq.call(null,seq__11918_11968);
if(temp__5457__auto___11977){
var seq__11918_11978__$1 = temp__5457__auto___11977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11918_11978__$1)){
var c__4351__auto___11979 = cljs.core.chunk_first.call(null,seq__11918_11978__$1);
var G__11980 = cljs.core.chunk_rest.call(null,seq__11918_11978__$1);
var G__11981 = c__4351__auto___11979;
var G__11982 = cljs.core.count.call(null,c__4351__auto___11979);
var G__11983 = (0);
seq__11918_11968 = G__11980;
chunk__11919_11969 = G__11981;
count__11920_11970 = G__11982;
i__11921_11971 = G__11983;
continue;
} else {
var param_11984 = cljs.core.first.call(null,seq__11918_11978__$1);
cljs.compiler.emit.call(null,param_11984);

if(cljs.core._EQ_.call(null,param_11984,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11985 = cljs.core.next.call(null,seq__11918_11978__$1);
var G__11986 = null;
var G__11987 = (0);
var G__11988 = (0);
seq__11918_11968 = G__11985;
chunk__11919_11969 = G__11986;
count__11920_11970 = G__11987;
i__11921_11971 = G__11988;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__11989 = cljs.core.seq.call(null,params);
var chunk__11990 = null;
var count__11991 = (0);
var i__11992 = (0);
while(true){
if((i__11992 < count__11991)){
var param = cljs.core._nth.call(null,chunk__11990,i__11992);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__11993 = seq__11989;
var G__11994 = chunk__11990;
var G__11995 = count__11991;
var G__11996 = (i__11992 + (1));
seq__11989 = G__11993;
chunk__11990 = G__11994;
count__11991 = G__11995;
i__11992 = G__11996;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__11989);
if(temp__5457__auto__){
var seq__11989__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11989__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__11989__$1);
var G__11997 = cljs.core.chunk_rest.call(null,seq__11989__$1);
var G__11998 = c__4351__auto__;
var G__11999 = cljs.core.count.call(null,c__4351__auto__);
var G__12000 = (0);
seq__11989 = G__11997;
chunk__11990 = G__11998;
count__11991 = G__11999;
i__11992 = G__12000;
continue;
} else {
var param = cljs.core.first.call(null,seq__11989__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__12001 = cljs.core.next.call(null,seq__11989__$1);
var G__12002 = null;
var G__12003 = (0);
var G__12004 = (0);
seq__11989 = G__12001;
chunk__11990 = G__12002;
count__11991 = G__12003;
i__11992 = G__12004;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__12005){
var map__12006 = p__12005;
var map__12006__$1 = ((((!((map__12006 == null)))?(((((map__12006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12006):map__12006);
var type = cljs.core.get.call(null,map__12006__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__12006__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__12006__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__12006__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__12006__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__12006__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__12006__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__12006__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__11521__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__12008){
var map__12009 = p__12008;
var map__12009__$1 = ((((!((map__12009 == null)))?(((((map__12009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12009):map__12009);
var f = map__12009__$1;
var type = cljs.core.get.call(null,map__12009__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__12009__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__12009__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__12009__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__12009__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__12009__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__12009__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__12009__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__11521__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_12019__$1 = (function (){var or__3949__auto__ = name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_12020 = cljs.compiler.munge.call(null,name_12019__$1);
var delegate_name_12021 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_12020),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_12021," = function (");

var seq__12011_12022 = cljs.core.seq.call(null,params);
var chunk__12012_12023 = null;
var count__12013_12024 = (0);
var i__12014_12025 = (0);
while(true){
if((i__12014_12025 < count__12013_12024)){
var param_12026 = cljs.core._nth.call(null,chunk__12012_12023,i__12014_12025);
cljs.compiler.emit.call(null,param_12026);

if(cljs.core._EQ_.call(null,param_12026,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__12027 = seq__12011_12022;
var G__12028 = chunk__12012_12023;
var G__12029 = count__12013_12024;
var G__12030 = (i__12014_12025 + (1));
seq__12011_12022 = G__12027;
chunk__12012_12023 = G__12028;
count__12013_12024 = G__12029;
i__12014_12025 = G__12030;
continue;
} else {
var temp__5457__auto___12031 = cljs.core.seq.call(null,seq__12011_12022);
if(temp__5457__auto___12031){
var seq__12011_12032__$1 = temp__5457__auto___12031;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12011_12032__$1)){
var c__4351__auto___12033 = cljs.core.chunk_first.call(null,seq__12011_12032__$1);
var G__12034 = cljs.core.chunk_rest.call(null,seq__12011_12032__$1);
var G__12035 = c__4351__auto___12033;
var G__12036 = cljs.core.count.call(null,c__4351__auto___12033);
var G__12037 = (0);
seq__12011_12022 = G__12034;
chunk__12012_12023 = G__12035;
count__12013_12024 = G__12036;
i__12014_12025 = G__12037;
continue;
} else {
var param_12038 = cljs.core.first.call(null,seq__12011_12032__$1);
cljs.compiler.emit.call(null,param_12038);

if(cljs.core._EQ_.call(null,param_12038,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__12039 = cljs.core.next.call(null,seq__12011_12032__$1);
var G__12040 = null;
var G__12041 = (0);
var G__12042 = (0);
seq__12011_12022 = G__12039;
chunk__12012_12023 = G__12040;
count__12013_12024 = G__12041;
i__12014_12025 = G__12042;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_12020," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_12043 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_12043,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_12021,".call(this,");

var seq__12015_12044 = cljs.core.seq.call(null,params);
var chunk__12016_12045 = null;
var count__12017_12046 = (0);
var i__12018_12047 = (0);
while(true){
if((i__12018_12047 < count__12017_12046)){
var param_12048 = cljs.core._nth.call(null,chunk__12016_12045,i__12018_12047);
cljs.compiler.emit.call(null,param_12048);

if(cljs.core._EQ_.call(null,param_12048,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__12049 = seq__12015_12044;
var G__12050 = chunk__12016_12045;
var G__12051 = count__12017_12046;
var G__12052 = (i__12018_12047 + (1));
seq__12015_12044 = G__12049;
chunk__12016_12045 = G__12050;
count__12017_12046 = G__12051;
i__12018_12047 = G__12052;
continue;
} else {
var temp__5457__auto___12053 = cljs.core.seq.call(null,seq__12015_12044);
if(temp__5457__auto___12053){
var seq__12015_12054__$1 = temp__5457__auto___12053;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12015_12054__$1)){
var c__4351__auto___12055 = cljs.core.chunk_first.call(null,seq__12015_12054__$1);
var G__12056 = cljs.core.chunk_rest.call(null,seq__12015_12054__$1);
var G__12057 = c__4351__auto___12055;
var G__12058 = cljs.core.count.call(null,c__4351__auto___12055);
var G__12059 = (0);
seq__12015_12044 = G__12056;
chunk__12016_12045 = G__12057;
count__12017_12046 = G__12058;
i__12018_12047 = G__12059;
continue;
} else {
var param_12060 = cljs.core.first.call(null,seq__12015_12054__$1);
cljs.compiler.emit.call(null,param_12060);

if(cljs.core._EQ_.call(null,param_12060,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__12061 = cljs.core.next.call(null,seq__12015_12054__$1);
var G__12062 = null;
var G__12063 = (0);
var G__12064 = (0);
seq__12015_12044 = G__12061;
chunk__12016_12045 = G__12062;
count__12017_12046 = G__12063;
i__12018_12047 = G__12064;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_12020,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_12020,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_12019__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_12020,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_12021,";");

cljs.compiler.emitln.call(null,"return ",mname_12020,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__12068){
var map__12069 = p__12068;
var map__12069__$1 = ((((!((map__12069 == null)))?(((((map__12069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12069):map__12069);
var name = cljs.core.get.call(null,map__12069__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__12069__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__12069__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__12069__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__12069__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__12069__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__12069__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__12069,map__12069__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__12065_SHARP_){
var and__3938__auto__ = p1__12065_SHARP_;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__12065_SHARP_));
} else {
return and__3938__auto__;
}
});})(map__12069,map__12069__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_12104__$1 = (function (){var or__3949__auto__ = name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_12105 = cljs.compiler.munge.call(null,name_12104__$1);
var maxparams_12106 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_12107 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_12104__$1,mname_12105,maxparams_12106,loop_locals,map__12069,map__12069__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_12105),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_12104__$1,mname_12105,maxparams_12106,loop_locals,map__12069,map__12069__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_12108 = cljs.core.sort_by.call(null,((function (name_12104__$1,mname_12105,maxparams_12106,mmap_12107,loop_locals,map__12069,map__12069__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__12066_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__12066_SHARP_)));
});})(name_12104__$1,mname_12105,maxparams_12106,mmap_12107,loop_locals,map__12069,map__12069__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_12107));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_12105," = null;");

var seq__12071_12109 = cljs.core.seq.call(null,ms_12108);
var chunk__12072_12110 = null;
var count__12073_12111 = (0);
var i__12074_12112 = (0);
while(true){
if((i__12074_12112 < count__12073_12111)){
var vec__12075_12113 = cljs.core._nth.call(null,chunk__12072_12110,i__12074_12112);
var n_12114 = cljs.core.nth.call(null,vec__12075_12113,(0),null);
var meth_12115 = cljs.core.nth.call(null,vec__12075_12113,(1),null);
cljs.compiler.emits.call(null,"var ",n_12114," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_12115))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_12115);
} else {
cljs.compiler.emit_fn_method.call(null,meth_12115);
}

cljs.compiler.emitln.call(null,";");


var G__12116 = seq__12071_12109;
var G__12117 = chunk__12072_12110;
var G__12118 = count__12073_12111;
var G__12119 = (i__12074_12112 + (1));
seq__12071_12109 = G__12116;
chunk__12072_12110 = G__12117;
count__12073_12111 = G__12118;
i__12074_12112 = G__12119;
continue;
} else {
var temp__5457__auto___12120 = cljs.core.seq.call(null,seq__12071_12109);
if(temp__5457__auto___12120){
var seq__12071_12121__$1 = temp__5457__auto___12120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12071_12121__$1)){
var c__4351__auto___12122 = cljs.core.chunk_first.call(null,seq__12071_12121__$1);
var G__12123 = cljs.core.chunk_rest.call(null,seq__12071_12121__$1);
var G__12124 = c__4351__auto___12122;
var G__12125 = cljs.core.count.call(null,c__4351__auto___12122);
var G__12126 = (0);
seq__12071_12109 = G__12123;
chunk__12072_12110 = G__12124;
count__12073_12111 = G__12125;
i__12074_12112 = G__12126;
continue;
} else {
var vec__12078_12127 = cljs.core.first.call(null,seq__12071_12121__$1);
var n_12128 = cljs.core.nth.call(null,vec__12078_12127,(0),null);
var meth_12129 = cljs.core.nth.call(null,vec__12078_12127,(1),null);
cljs.compiler.emits.call(null,"var ",n_12128," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_12129))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_12129);
} else {
cljs.compiler.emit_fn_method.call(null,meth_12129);
}

cljs.compiler.emitln.call(null,";");


var G__12130 = cljs.core.next.call(null,seq__12071_12121__$1);
var G__12131 = null;
var G__12132 = (0);
var G__12133 = (0);
seq__12071_12109 = G__12130;
chunk__12072_12110 = G__12131;
count__12073_12111 = G__12132;
i__12074_12112 = G__12133;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_12105," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_12106),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_12106)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_12106));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__12081_12134 = cljs.core.seq.call(null,ms_12108);
var chunk__12082_12135 = null;
var count__12083_12136 = (0);
var i__12084_12137 = (0);
while(true){
if((i__12084_12137 < count__12083_12136)){
var vec__12085_12138 = cljs.core._nth.call(null,chunk__12082_12135,i__12084_12137);
var n_12139 = cljs.core.nth.call(null,vec__12085_12138,(0),null);
var meth_12140 = cljs.core.nth.call(null,vec__12085_12138,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_12140))){
cljs.compiler.emitln.call(null,"default:");

var restarg_12141 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_12141," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_12142 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_12141," = new cljs.core.IndexedSeq(",a_12142,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_12139,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_12106)),(((cljs.core.count.call(null,maxparams_12106) > (1)))?", ":null),restarg_12141,");");
} else {
var pcnt_12143 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_12140));
cljs.compiler.emitln.call(null,"case ",pcnt_12143,":");

cljs.compiler.emitln.call(null,"return ",n_12139,".call(this",(((pcnt_12143 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_12143,maxparams_12106)),null,(1),null)),(2),null))),");");
}


var G__12144 = seq__12081_12134;
var G__12145 = chunk__12082_12135;
var G__12146 = count__12083_12136;
var G__12147 = (i__12084_12137 + (1));
seq__12081_12134 = G__12144;
chunk__12082_12135 = G__12145;
count__12083_12136 = G__12146;
i__12084_12137 = G__12147;
continue;
} else {
var temp__5457__auto___12148 = cljs.core.seq.call(null,seq__12081_12134);
if(temp__5457__auto___12148){
var seq__12081_12149__$1 = temp__5457__auto___12148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12081_12149__$1)){
var c__4351__auto___12150 = cljs.core.chunk_first.call(null,seq__12081_12149__$1);
var G__12151 = cljs.core.chunk_rest.call(null,seq__12081_12149__$1);
var G__12152 = c__4351__auto___12150;
var G__12153 = cljs.core.count.call(null,c__4351__auto___12150);
var G__12154 = (0);
seq__12081_12134 = G__12151;
chunk__12082_12135 = G__12152;
count__12083_12136 = G__12153;
i__12084_12137 = G__12154;
continue;
} else {
var vec__12088_12155 = cljs.core.first.call(null,seq__12081_12149__$1);
var n_12156 = cljs.core.nth.call(null,vec__12088_12155,(0),null);
var meth_12157 = cljs.core.nth.call(null,vec__12088_12155,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_12157))){
cljs.compiler.emitln.call(null,"default:");

var restarg_12158 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_12158," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_12159 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_12158," = new cljs.core.IndexedSeq(",a_12159,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_12156,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_12106)),(((cljs.core.count.call(null,maxparams_12106) > (1)))?", ":null),restarg_12158,");");
} else {
var pcnt_12160 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_12157));
cljs.compiler.emitln.call(null,"case ",pcnt_12160,":");

cljs.compiler.emitln.call(null,"return ",n_12156,".call(this",(((pcnt_12160 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_12160,maxparams_12106)),null,(1),null)),(2),null))),");");
}


var G__12161 = cljs.core.next.call(null,seq__12081_12149__$1);
var G__12162 = null;
var G__12163 = (0);
var G__12164 = (0);
seq__12081_12134 = G__12161;
chunk__12082_12135 = G__12162;
count__12083_12136 = G__12163;
i__12084_12137 = G__12164;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_12165 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_12108)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_12165,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_12105,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_12105,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_12104__$1,mname_12105,maxparams_12106,mmap_12107,ms_12108,loop_locals,map__12069,map__12069__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__12067_SHARP_){
var vec__12091 = p1__12067_SHARP_;
var n = cljs.core.nth.call(null,vec__12091,(0),null);
var m = cljs.core.nth.call(null,vec__12091,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_12104__$1,mname_12105,maxparams_12106,mmap_12107,ms_12108,loop_locals,map__12069,map__12069__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_12108),".cljs$lang$applyTo;");
} else {
}

var seq__12094_12166 = cljs.core.seq.call(null,ms_12108);
var chunk__12095_12167 = null;
var count__12096_12168 = (0);
var i__12097_12169 = (0);
while(true){
if((i__12097_12169 < count__12096_12168)){
var vec__12098_12170 = cljs.core._nth.call(null,chunk__12095_12167,i__12097_12169);
var n_12171 = cljs.core.nth.call(null,vec__12098_12170,(0),null);
var meth_12172 = cljs.core.nth.call(null,vec__12098_12170,(1),null);
var c_12173 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_12172));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_12172))){
cljs.compiler.emitln.call(null,mname_12105,".cljs$core$IFn$_invoke$arity$variadic = ",n_12171,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_12105,".cljs$core$IFn$_invoke$arity$",c_12173," = ",n_12171,";");
}


var G__12174 = seq__12094_12166;
var G__12175 = chunk__12095_12167;
var G__12176 = count__12096_12168;
var G__12177 = (i__12097_12169 + (1));
seq__12094_12166 = G__12174;
chunk__12095_12167 = G__12175;
count__12096_12168 = G__12176;
i__12097_12169 = G__12177;
continue;
} else {
var temp__5457__auto___12178 = cljs.core.seq.call(null,seq__12094_12166);
if(temp__5457__auto___12178){
var seq__12094_12179__$1 = temp__5457__auto___12178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12094_12179__$1)){
var c__4351__auto___12180 = cljs.core.chunk_first.call(null,seq__12094_12179__$1);
var G__12181 = cljs.core.chunk_rest.call(null,seq__12094_12179__$1);
var G__12182 = c__4351__auto___12180;
var G__12183 = cljs.core.count.call(null,c__4351__auto___12180);
var G__12184 = (0);
seq__12094_12166 = G__12181;
chunk__12095_12167 = G__12182;
count__12096_12168 = G__12183;
i__12097_12169 = G__12184;
continue;
} else {
var vec__12101_12185 = cljs.core.first.call(null,seq__12094_12179__$1);
var n_12186 = cljs.core.nth.call(null,vec__12101_12185,(0),null);
var meth_12187 = cljs.core.nth.call(null,vec__12101_12185,(1),null);
var c_12188 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_12187));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_12187))){
cljs.compiler.emitln.call(null,mname_12105,".cljs$core$IFn$_invoke$arity$variadic = ",n_12186,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_12105,".cljs$core$IFn$_invoke$arity$",c_12188," = ",n_12186,";");
}


var G__12189 = cljs.core.next.call(null,seq__12094_12179__$1);
var G__12190 = null;
var G__12191 = (0);
var G__12192 = (0);
seq__12094_12166 = G__12189;
chunk__12095_12167 = G__12190;
count__12096_12168 = G__12191;
i__12097_12169 = G__12192;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_12105,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__12193){
var map__12194 = p__12193;
var map__12194__$1 = ((((!((map__12194 == null)))?(((((map__12194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12194):map__12194);
var statements = cljs.core.get.call(null,map__12194__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__12194__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__12194__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__3938__auto__ = statements;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__3938__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__12196_12200 = cljs.core.seq.call(null,statements);
var chunk__12197_12201 = null;
var count__12198_12202 = (0);
var i__12199_12203 = (0);
while(true){
if((i__12199_12203 < count__12198_12202)){
var s_12204 = cljs.core._nth.call(null,chunk__12197_12201,i__12199_12203);
cljs.compiler.emitln.call(null,s_12204);


var G__12205 = seq__12196_12200;
var G__12206 = chunk__12197_12201;
var G__12207 = count__12198_12202;
var G__12208 = (i__12199_12203 + (1));
seq__12196_12200 = G__12205;
chunk__12197_12201 = G__12206;
count__12198_12202 = G__12207;
i__12199_12203 = G__12208;
continue;
} else {
var temp__5457__auto___12209 = cljs.core.seq.call(null,seq__12196_12200);
if(temp__5457__auto___12209){
var seq__12196_12210__$1 = temp__5457__auto___12209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12196_12210__$1)){
var c__4351__auto___12211 = cljs.core.chunk_first.call(null,seq__12196_12210__$1);
var G__12212 = cljs.core.chunk_rest.call(null,seq__12196_12210__$1);
var G__12213 = c__4351__auto___12211;
var G__12214 = cljs.core.count.call(null,c__4351__auto___12211);
var G__12215 = (0);
seq__12196_12200 = G__12212;
chunk__12197_12201 = G__12213;
count__12198_12202 = G__12214;
i__12199_12203 = G__12215;
continue;
} else {
var s_12216 = cljs.core.first.call(null,seq__12196_12210__$1);
cljs.compiler.emitln.call(null,s_12216);


var G__12217 = cljs.core.next.call(null,seq__12196_12210__$1);
var G__12218 = null;
var G__12219 = (0);
var G__12220 = (0);
seq__12196_12200 = G__12217;
chunk__12197_12201 = G__12218;
count__12198_12202 = G__12219;
i__12199_12203 = G__12220;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__3938__auto__ = statements;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__3938__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__12221){
var map__12222 = p__12221;
var map__12222__$1 = ((((!((map__12222 == null)))?(((((map__12222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12222):map__12222);
var env = cljs.core.get.call(null,map__12222__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__12222__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__12222__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__12222__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__12222__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__3949__auto__ = name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op finally))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__12224,is_loop){
var map__12225 = p__12224;
var map__12225__$1 = ((((!((map__12225 == null)))?(((((map__12225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12225):map__12225);
var bindings = cljs.core.get.call(null,map__12225__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__12225__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__12225__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_12227_12236 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_12227_12236,context,map__12225,map__12225__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_12227_12236,context,map__12225,map__12225__$1,bindings,expr,env))
,bindings):null));

try{var seq__12228_12237 = cljs.core.seq.call(null,bindings);
var chunk__12229_12238 = null;
var count__12230_12239 = (0);
var i__12231_12240 = (0);
while(true){
if((i__12231_12240 < count__12230_12239)){
var map__12232_12241 = cljs.core._nth.call(null,chunk__12229_12238,i__12231_12240);
var map__12232_12242__$1 = ((((!((map__12232_12241 == null)))?(((((map__12232_12241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12232_12241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12232_12241):map__12232_12241);
var binding_12243 = map__12232_12242__$1;
var init_12244 = cljs.core.get.call(null,map__12232_12242__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_12243);

cljs.compiler.emitln.call(null," = ",init_12244,";");


var G__12245 = seq__12228_12237;
var G__12246 = chunk__12229_12238;
var G__12247 = count__12230_12239;
var G__12248 = (i__12231_12240 + (1));
seq__12228_12237 = G__12245;
chunk__12229_12238 = G__12246;
count__12230_12239 = G__12247;
i__12231_12240 = G__12248;
continue;
} else {
var temp__5457__auto___12249 = cljs.core.seq.call(null,seq__12228_12237);
if(temp__5457__auto___12249){
var seq__12228_12250__$1 = temp__5457__auto___12249;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12228_12250__$1)){
var c__4351__auto___12251 = cljs.core.chunk_first.call(null,seq__12228_12250__$1);
var G__12252 = cljs.core.chunk_rest.call(null,seq__12228_12250__$1);
var G__12253 = c__4351__auto___12251;
var G__12254 = cljs.core.count.call(null,c__4351__auto___12251);
var G__12255 = (0);
seq__12228_12237 = G__12252;
chunk__12229_12238 = G__12253;
count__12230_12239 = G__12254;
i__12231_12240 = G__12255;
continue;
} else {
var map__12234_12256 = cljs.core.first.call(null,seq__12228_12250__$1);
var map__12234_12257__$1 = ((((!((map__12234_12256 == null)))?(((((map__12234_12256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12234_12256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12234_12256):map__12234_12256);
var binding_12258 = map__12234_12257__$1;
var init_12259 = cljs.core.get.call(null,map__12234_12257__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_12258);

cljs.compiler.emitln.call(null," = ",init_12259,";");


var G__12260 = cljs.core.next.call(null,seq__12228_12250__$1);
var G__12261 = null;
var G__12262 = (0);
var G__12263 = (0);
seq__12228_12237 = G__12260;
chunk__12229_12238 = G__12261;
count__12230_12239 = G__12262;
i__12231_12240 = G__12263;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_12227_12236;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__12264){
var map__12265 = p__12264;
var map__12265__$1 = ((((!((map__12265 == null)))?(((((map__12265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12265):map__12265);
var frame = cljs.core.get.call(null,map__12265__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__12265__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__12265__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4408__auto___12267 = cljs.core.count.call(null,exprs);
var i_12268 = (0);
while(true){
if((i_12268 < n__4408__auto___12267)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_12268)," = ",exprs.call(null,i_12268),";");

var G__12269 = (i_12268 + (1));
i_12268 = G__12269;
continue;
} else {
}
break;
}

var n__4408__auto___12270 = cljs.core.count.call(null,exprs);
var i_12271 = (0);
while(true){
if((i_12271 < n__4408__auto___12270)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_12271))," = ",temps.call(null,i_12271),";");

var G__12272 = (i_12271 + (1));
i_12271 = G__12272;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__12273){
var map__12274 = p__12273;
var map__12274__$1 = ((((!((map__12274 == null)))?(((((map__12274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12274):map__12274);
var bindings = cljs.core.get.call(null,map__12274__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__12274__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__12274__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__12276_12284 = cljs.core.seq.call(null,bindings);
var chunk__12277_12285 = null;
var count__12278_12286 = (0);
var i__12279_12287 = (0);
while(true){
if((i__12279_12287 < count__12278_12286)){
var map__12280_12288 = cljs.core._nth.call(null,chunk__12277_12285,i__12279_12287);
var map__12280_12289__$1 = ((((!((map__12280_12288 == null)))?(((((map__12280_12288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12280_12288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12280_12288):map__12280_12288);
var binding_12290 = map__12280_12289__$1;
var init_12291 = cljs.core.get.call(null,map__12280_12289__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_12290)," = ",init_12291,";");


var G__12292 = seq__12276_12284;
var G__12293 = chunk__12277_12285;
var G__12294 = count__12278_12286;
var G__12295 = (i__12279_12287 + (1));
seq__12276_12284 = G__12292;
chunk__12277_12285 = G__12293;
count__12278_12286 = G__12294;
i__12279_12287 = G__12295;
continue;
} else {
var temp__5457__auto___12296 = cljs.core.seq.call(null,seq__12276_12284);
if(temp__5457__auto___12296){
var seq__12276_12297__$1 = temp__5457__auto___12296;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12276_12297__$1)){
var c__4351__auto___12298 = cljs.core.chunk_first.call(null,seq__12276_12297__$1);
var G__12299 = cljs.core.chunk_rest.call(null,seq__12276_12297__$1);
var G__12300 = c__4351__auto___12298;
var G__12301 = cljs.core.count.call(null,c__4351__auto___12298);
var G__12302 = (0);
seq__12276_12284 = G__12299;
chunk__12277_12285 = G__12300;
count__12278_12286 = G__12301;
i__12279_12287 = G__12302;
continue;
} else {
var map__12282_12303 = cljs.core.first.call(null,seq__12276_12297__$1);
var map__12282_12304__$1 = ((((!((map__12282_12303 == null)))?(((((map__12282_12303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12282_12303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12282_12303):map__12282_12303);
var binding_12305 = map__12282_12304__$1;
var init_12306 = cljs.core.get.call(null,map__12282_12304__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_12305)," = ",init_12306,";");


var G__12307 = cljs.core.next.call(null,seq__12276_12297__$1);
var G__12308 = null;
var G__12309 = (0);
var G__12310 = (0);
seq__12276_12284 = G__12307;
chunk__12277_12285 = G__12308;
count__12278_12286 = G__12309;
i__12279_12287 = G__12310;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__12313){
var map__12314 = p__12313;
var map__12314__$1 = ((((!((map__12314 == null)))?(((((map__12314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12314):map__12314);
var expr = map__12314__$1;
var f = cljs.core.get.call(null,map__12314__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__12314__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__12314__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__3938__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__3938__auto__){
var and__3938__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__3938__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__3938__auto__ = protocol;
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = tag;
if(cljs.core.truth_(and__3938__auto____$1)){
var or__3949__auto__ = (function (){var and__3938__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(and__3938__auto____$2){
var and__3938__auto____$3 = protocol;
if(cljs.core.truth_(and__3938__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__3938__auto____$3;
}
} else {
return and__3938__auto____$2;
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var and__3938__auto____$2 = (function (){var or__3949__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(or__3949__auto____$1){
return or__3949__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__3938__auto____$2)){
var or__3949__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__3949__auto____$1){
return or__3949__auto____$1;
} else {
var and__3938__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__3938__auto____$3){
var and__3938__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"js","js",-886355190,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__3938__auto____$4){
var temp__5457__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,tag));
if(cljs.core.truth_(temp__5457__auto__)){
var ps = temp__5457__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__3938__auto____$4;
}
} else {
return and__3938__auto____$3;
}
}
} else {
return and__3938__auto____$2;
}
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})();
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = ((cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null))));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__3949__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__3949__auto__){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = (function (){var temp__5457__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
if(cljs.core.truth_(temp__5457__auto__)){
var ns_str = temp__5457__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return !(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns));
}
}
})():null);
var keyword_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),cljs.analyzer.infer_tag.call(null,env,f))) || (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword)))));
var vec__12316 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return (arity > mfa);
} else {
return and__3938__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12314,map__12314__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12314,map__12314__$1,expr,f,args,env){
return (function (p1__12311_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__12311_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12314,map__12314__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12314,map__12314__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12314,map__12314__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12314,map__12314__$1,expr,f,args,env){
return (function (p1__12312_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__12312_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12314,map__12314__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__12314,map__12314__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__12316,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__12316,(1),null);
var env__11521__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_12319 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_12319,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_12320 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_12320,args)),(((mfa_12320 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_12320,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = js_QMARK_;
if(or__3949__auto____$1){
return or__3949__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(((cljs.analyzer._STAR_cljs_static_fns_STAR_) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797))))){
var fprop_12321 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_12321," ? ",f__$1,fprop_12321,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_12321," ? ",f__$1,fprop_12321,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__12322){
var map__12323 = p__12322;
var map__12323__$1 = ((((!((map__12323 == null)))?(((((map__12323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12323):map__12323);
var ctor = cljs.core.get.call(null,map__12323__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__12323__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__12323__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11521__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__12325){
var map__12326 = p__12325;
var map__12326__$1 = ((((!((map__12326 == null)))?(((((map__12326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12326):map__12326);
var target = cljs.core.get.call(null,map__12326__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__12326__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__12326__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11521__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__12328 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__12328__$1 = ((((!((map__12328 == null)))?(((((map__12328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12328):map__12328);
var options = cljs.core.get.call(null,map__12328__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__12328__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__12329 = options;
var map__12329__$1 = ((((!((map__12329 == null)))?(((((map__12329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12329):map__12329);
var target = cljs.core.get.call(null,map__12329__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__12329__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__12330 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__12335 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__12335__$1 = ((((!((map__12335 == null)))?(((((map__12335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12335):map__12335);
var node_libs = cljs.core.get.call(null,map__12335__$1,true);
var libs_to_load = cljs.core.get.call(null,map__12335__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__12330,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__12330,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__12337_12353 = cljs.core.seq.call(null,libs_to_load);
var chunk__12338_12354 = null;
var count__12339_12355 = (0);
var i__12340_12356 = (0);
while(true){
if((i__12340_12356 < count__12339_12355)){
var lib_12357 = cljs.core._nth.call(null,chunk__12338_12354,i__12340_12356);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_12357)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12357),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12357),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12357),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12357),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_12357,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12357),"');");
}

}
}
}


var G__12358 = seq__12337_12353;
var G__12359 = chunk__12338_12354;
var G__12360 = count__12339_12355;
var G__12361 = (i__12340_12356 + (1));
seq__12337_12353 = G__12358;
chunk__12338_12354 = G__12359;
count__12339_12355 = G__12360;
i__12340_12356 = G__12361;
continue;
} else {
var temp__5457__auto___12362 = cljs.core.seq.call(null,seq__12337_12353);
if(temp__5457__auto___12362){
var seq__12337_12363__$1 = temp__5457__auto___12362;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12337_12363__$1)){
var c__4351__auto___12364 = cljs.core.chunk_first.call(null,seq__12337_12363__$1);
var G__12365 = cljs.core.chunk_rest.call(null,seq__12337_12363__$1);
var G__12366 = c__4351__auto___12364;
var G__12367 = cljs.core.count.call(null,c__4351__auto___12364);
var G__12368 = (0);
seq__12337_12353 = G__12365;
chunk__12338_12354 = G__12366;
count__12339_12355 = G__12367;
i__12340_12356 = G__12368;
continue;
} else {
var lib_12369 = cljs.core.first.call(null,seq__12337_12363__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_12369)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12369),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12369),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_12369),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12369),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_12369,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_12369),"');");
}

}
}
}


var G__12370 = cljs.core.next.call(null,seq__12337_12363__$1);
var G__12371 = null;
var G__12372 = (0);
var G__12373 = (0);
seq__12337_12353 = G__12370;
chunk__12338_12354 = G__12371;
count__12339_12355 = G__12372;
i__12340_12356 = G__12373;
continue;
}
} else {
}
}
break;
}

var seq__12341_12374 = cljs.core.seq.call(null,node_libs);
var chunk__12342_12375 = null;
var count__12343_12376 = (0);
var i__12344_12377 = (0);
while(true){
if((i__12344_12377 < count__12343_12376)){
var lib_12378 = cljs.core._nth.call(null,chunk__12342_12375,i__12344_12377);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_12378)," = require('",lib_12378,"');");


var G__12379 = seq__12341_12374;
var G__12380 = chunk__12342_12375;
var G__12381 = count__12343_12376;
var G__12382 = (i__12344_12377 + (1));
seq__12341_12374 = G__12379;
chunk__12342_12375 = G__12380;
count__12343_12376 = G__12381;
i__12344_12377 = G__12382;
continue;
} else {
var temp__5457__auto___12383 = cljs.core.seq.call(null,seq__12341_12374);
if(temp__5457__auto___12383){
var seq__12341_12384__$1 = temp__5457__auto___12383;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12341_12384__$1)){
var c__4351__auto___12385 = cljs.core.chunk_first.call(null,seq__12341_12384__$1);
var G__12386 = cljs.core.chunk_rest.call(null,seq__12341_12384__$1);
var G__12387 = c__4351__auto___12385;
var G__12388 = cljs.core.count.call(null,c__4351__auto___12385);
var G__12389 = (0);
seq__12341_12374 = G__12386;
chunk__12342_12375 = G__12387;
count__12343_12376 = G__12388;
i__12344_12377 = G__12389;
continue;
} else {
var lib_12390 = cljs.core.first.call(null,seq__12341_12384__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_12390)," = require('",lib_12390,"');");


var G__12391 = cljs.core.next.call(null,seq__12341_12384__$1);
var G__12392 = null;
var G__12393 = (0);
var G__12394 = (0);
seq__12341_12374 = G__12391;
chunk__12342_12375 = G__12392;
count__12343_12376 = G__12393;
i__12344_12377 = G__12394;
continue;
}
} else {
}
}
break;
}

var seq__12345_12395 = cljs.core.seq.call(null,global_exports_libs);
var chunk__12346_12396 = null;
var count__12347_12397 = (0);
var i__12348_12398 = (0);
while(true){
if((i__12348_12398 < count__12347_12397)){
var lib_12399 = cljs.core._nth.call(null,chunk__12346_12396,i__12348_12398);
var map__12349_12400 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_12399));
var map__12349_12401__$1 = ((((!((map__12349_12400 == null)))?(((((map__12349_12400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12349_12400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12349_12400):map__12349_12400);
var global_exports_12402 = cljs.core.get.call(null,map__12349_12401__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_12399)," = goog.global[\"",cljs.core.get.call(null,global_exports_12402,cljs.core.symbol.call(null,lib_12399)),"\"];");


var G__12403 = seq__12345_12395;
var G__12404 = chunk__12346_12396;
var G__12405 = count__12347_12397;
var G__12406 = (i__12348_12398 + (1));
seq__12345_12395 = G__12403;
chunk__12346_12396 = G__12404;
count__12347_12397 = G__12405;
i__12348_12398 = G__12406;
continue;
} else {
var temp__5457__auto___12407 = cljs.core.seq.call(null,seq__12345_12395);
if(temp__5457__auto___12407){
var seq__12345_12408__$1 = temp__5457__auto___12407;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12345_12408__$1)){
var c__4351__auto___12409 = cljs.core.chunk_first.call(null,seq__12345_12408__$1);
var G__12410 = cljs.core.chunk_rest.call(null,seq__12345_12408__$1);
var G__12411 = c__4351__auto___12409;
var G__12412 = cljs.core.count.call(null,c__4351__auto___12409);
var G__12413 = (0);
seq__12345_12395 = G__12410;
chunk__12346_12396 = G__12411;
count__12347_12397 = G__12412;
i__12348_12398 = G__12413;
continue;
} else {
var lib_12414 = cljs.core.first.call(null,seq__12345_12408__$1);
var map__12351_12415 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_12414));
var map__12351_12416__$1 = ((((!((map__12351_12415 == null)))?(((((map__12351_12415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12351_12415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12351_12415):map__12351_12415);
var global_exports_12417 = cljs.core.get.call(null,map__12351_12416__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_12414)," = goog.global[\"",cljs.core.get.call(null,global_exports_12417,cljs.core.symbol.call(null,lib_12414)),"\"];");


var G__12418 = cljs.core.next.call(null,seq__12345_12408__$1);
var G__12419 = null;
var G__12420 = (0);
var G__12421 = (0);
seq__12345_12395 = G__12418;
chunk__12346_12396 = G__12419;
count__12347_12397 = G__12420;
i__12348_12398 = G__12421;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__12422){
var map__12423 = p__12422;
var map__12423__$1 = ((((!((map__12423 == null)))?(((((map__12423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12423):map__12423);
var name = cljs.core.get.call(null,map__12423__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__12423__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__12423__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__12423__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__12423__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__12423__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__12423__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__12425){
var map__12426 = p__12425;
var map__12426__$1 = ((((!((map__12426 == null)))?(((((map__12426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12426):map__12426);
var name = cljs.core.get.call(null,map__12426__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__12426__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__12426__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__12426__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__12426__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__12426__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__12426__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__12428){
var map__12429 = p__12428;
var map__12429__$1 = ((((!((map__12429 == null)))?(((((map__12429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12429):map__12429);
var t = cljs.core.get.call(null,map__12429__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__12429__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__12429__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__12429__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__12429__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__12431_12449 = cljs.core.seq.call(null,protocols);
var chunk__12432_12450 = null;
var count__12433_12451 = (0);
var i__12434_12452 = (0);
while(true){
if((i__12434_12452 < count__12433_12451)){
var protocol_12453 = cljs.core._nth.call(null,chunk__12432_12450,i__12434_12452);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12453)].join('')),"}");


var G__12454 = seq__12431_12449;
var G__12455 = chunk__12432_12450;
var G__12456 = count__12433_12451;
var G__12457 = (i__12434_12452 + (1));
seq__12431_12449 = G__12454;
chunk__12432_12450 = G__12455;
count__12433_12451 = G__12456;
i__12434_12452 = G__12457;
continue;
} else {
var temp__5457__auto___12458 = cljs.core.seq.call(null,seq__12431_12449);
if(temp__5457__auto___12458){
var seq__12431_12459__$1 = temp__5457__auto___12458;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12431_12459__$1)){
var c__4351__auto___12460 = cljs.core.chunk_first.call(null,seq__12431_12459__$1);
var G__12461 = cljs.core.chunk_rest.call(null,seq__12431_12459__$1);
var G__12462 = c__4351__auto___12460;
var G__12463 = cljs.core.count.call(null,c__4351__auto___12460);
var G__12464 = (0);
seq__12431_12449 = G__12461;
chunk__12432_12450 = G__12462;
count__12433_12451 = G__12463;
i__12434_12452 = G__12464;
continue;
} else {
var protocol_12465 = cljs.core.first.call(null,seq__12431_12459__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12465)].join('')),"}");


var G__12466 = cljs.core.next.call(null,seq__12431_12459__$1);
var G__12467 = null;
var G__12468 = (0);
var G__12469 = (0);
seq__12431_12449 = G__12466;
chunk__12432_12450 = G__12467;
count__12433_12451 = G__12468;
i__12434_12452 = G__12469;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__12435_12470 = cljs.core.seq.call(null,fields__$1);
var chunk__12436_12471 = null;
var count__12437_12472 = (0);
var i__12438_12473 = (0);
while(true){
if((i__12438_12473 < count__12437_12472)){
var fld_12474 = cljs.core._nth.call(null,chunk__12436_12471,i__12438_12473);
cljs.compiler.emitln.call(null,"this.",fld_12474," = ",fld_12474,";");


var G__12475 = seq__12435_12470;
var G__12476 = chunk__12436_12471;
var G__12477 = count__12437_12472;
var G__12478 = (i__12438_12473 + (1));
seq__12435_12470 = G__12475;
chunk__12436_12471 = G__12476;
count__12437_12472 = G__12477;
i__12438_12473 = G__12478;
continue;
} else {
var temp__5457__auto___12479 = cljs.core.seq.call(null,seq__12435_12470);
if(temp__5457__auto___12479){
var seq__12435_12480__$1 = temp__5457__auto___12479;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12435_12480__$1)){
var c__4351__auto___12481 = cljs.core.chunk_first.call(null,seq__12435_12480__$1);
var G__12482 = cljs.core.chunk_rest.call(null,seq__12435_12480__$1);
var G__12483 = c__4351__auto___12481;
var G__12484 = cljs.core.count.call(null,c__4351__auto___12481);
var G__12485 = (0);
seq__12435_12470 = G__12482;
chunk__12436_12471 = G__12483;
count__12437_12472 = G__12484;
i__12438_12473 = G__12485;
continue;
} else {
var fld_12486 = cljs.core.first.call(null,seq__12435_12480__$1);
cljs.compiler.emitln.call(null,"this.",fld_12486," = ",fld_12486,";");


var G__12487 = cljs.core.next.call(null,seq__12435_12480__$1);
var G__12488 = null;
var G__12489 = (0);
var G__12490 = (0);
seq__12435_12470 = G__12487;
chunk__12436_12471 = G__12488;
count__12437_12472 = G__12489;
i__12438_12473 = G__12490;
continue;
}
} else {
}
}
break;
}

var seq__12439_12491 = cljs.core.seq.call(null,pmasks);
var chunk__12440_12492 = null;
var count__12441_12493 = (0);
var i__12442_12494 = (0);
while(true){
if((i__12442_12494 < count__12441_12493)){
var vec__12443_12495 = cljs.core._nth.call(null,chunk__12440_12492,i__12442_12494);
var pno_12496 = cljs.core.nth.call(null,vec__12443_12495,(0),null);
var pmask_12497 = cljs.core.nth.call(null,vec__12443_12495,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12496,"$ = ",pmask_12497,";");


var G__12498 = seq__12439_12491;
var G__12499 = chunk__12440_12492;
var G__12500 = count__12441_12493;
var G__12501 = (i__12442_12494 + (1));
seq__12439_12491 = G__12498;
chunk__12440_12492 = G__12499;
count__12441_12493 = G__12500;
i__12442_12494 = G__12501;
continue;
} else {
var temp__5457__auto___12502 = cljs.core.seq.call(null,seq__12439_12491);
if(temp__5457__auto___12502){
var seq__12439_12503__$1 = temp__5457__auto___12502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12439_12503__$1)){
var c__4351__auto___12504 = cljs.core.chunk_first.call(null,seq__12439_12503__$1);
var G__12505 = cljs.core.chunk_rest.call(null,seq__12439_12503__$1);
var G__12506 = c__4351__auto___12504;
var G__12507 = cljs.core.count.call(null,c__4351__auto___12504);
var G__12508 = (0);
seq__12439_12491 = G__12505;
chunk__12440_12492 = G__12506;
count__12441_12493 = G__12507;
i__12442_12494 = G__12508;
continue;
} else {
var vec__12446_12509 = cljs.core.first.call(null,seq__12439_12503__$1);
var pno_12510 = cljs.core.nth.call(null,vec__12446_12509,(0),null);
var pmask_12511 = cljs.core.nth.call(null,vec__12446_12509,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12510,"$ = ",pmask_12511,";");


var G__12512 = cljs.core.next.call(null,seq__12439_12503__$1);
var G__12513 = null;
var G__12514 = (0);
var G__12515 = (0);
seq__12439_12491 = G__12512;
chunk__12440_12492 = G__12513;
count__12441_12493 = G__12514;
i__12442_12494 = G__12515;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__12516){
var map__12517 = p__12516;
var map__12517__$1 = ((((!((map__12517 == null)))?(((((map__12517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12517):map__12517);
var t = cljs.core.get.call(null,map__12517__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__12517__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__12517__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__12517__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__12517__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__12519_12537 = cljs.core.seq.call(null,protocols);
var chunk__12520_12538 = null;
var count__12521_12539 = (0);
var i__12522_12540 = (0);
while(true){
if((i__12522_12540 < count__12521_12539)){
var protocol_12541 = cljs.core._nth.call(null,chunk__12520_12538,i__12522_12540);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12541)].join('')),"}");


var G__12542 = seq__12519_12537;
var G__12543 = chunk__12520_12538;
var G__12544 = count__12521_12539;
var G__12545 = (i__12522_12540 + (1));
seq__12519_12537 = G__12542;
chunk__12520_12538 = G__12543;
count__12521_12539 = G__12544;
i__12522_12540 = G__12545;
continue;
} else {
var temp__5457__auto___12546 = cljs.core.seq.call(null,seq__12519_12537);
if(temp__5457__auto___12546){
var seq__12519_12547__$1 = temp__5457__auto___12546;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12519_12547__$1)){
var c__4351__auto___12548 = cljs.core.chunk_first.call(null,seq__12519_12547__$1);
var G__12549 = cljs.core.chunk_rest.call(null,seq__12519_12547__$1);
var G__12550 = c__4351__auto___12548;
var G__12551 = cljs.core.count.call(null,c__4351__auto___12548);
var G__12552 = (0);
seq__12519_12537 = G__12549;
chunk__12520_12538 = G__12550;
count__12521_12539 = G__12551;
i__12522_12540 = G__12552;
continue;
} else {
var protocol_12553 = cljs.core.first.call(null,seq__12519_12547__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_12553)].join('')),"}");


var G__12554 = cljs.core.next.call(null,seq__12519_12547__$1);
var G__12555 = null;
var G__12556 = (0);
var G__12557 = (0);
seq__12519_12537 = G__12554;
chunk__12520_12538 = G__12555;
count__12521_12539 = G__12556;
i__12522_12540 = G__12557;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__12523_12558 = cljs.core.seq.call(null,fields__$1);
var chunk__12524_12559 = null;
var count__12525_12560 = (0);
var i__12526_12561 = (0);
while(true){
if((i__12526_12561 < count__12525_12560)){
var fld_12562 = cljs.core._nth.call(null,chunk__12524_12559,i__12526_12561);
cljs.compiler.emitln.call(null,"this.",fld_12562," = ",fld_12562,";");


var G__12563 = seq__12523_12558;
var G__12564 = chunk__12524_12559;
var G__12565 = count__12525_12560;
var G__12566 = (i__12526_12561 + (1));
seq__12523_12558 = G__12563;
chunk__12524_12559 = G__12564;
count__12525_12560 = G__12565;
i__12526_12561 = G__12566;
continue;
} else {
var temp__5457__auto___12567 = cljs.core.seq.call(null,seq__12523_12558);
if(temp__5457__auto___12567){
var seq__12523_12568__$1 = temp__5457__auto___12567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12523_12568__$1)){
var c__4351__auto___12569 = cljs.core.chunk_first.call(null,seq__12523_12568__$1);
var G__12570 = cljs.core.chunk_rest.call(null,seq__12523_12568__$1);
var G__12571 = c__4351__auto___12569;
var G__12572 = cljs.core.count.call(null,c__4351__auto___12569);
var G__12573 = (0);
seq__12523_12558 = G__12570;
chunk__12524_12559 = G__12571;
count__12525_12560 = G__12572;
i__12526_12561 = G__12573;
continue;
} else {
var fld_12574 = cljs.core.first.call(null,seq__12523_12568__$1);
cljs.compiler.emitln.call(null,"this.",fld_12574," = ",fld_12574,";");


var G__12575 = cljs.core.next.call(null,seq__12523_12568__$1);
var G__12576 = null;
var G__12577 = (0);
var G__12578 = (0);
seq__12523_12558 = G__12575;
chunk__12524_12559 = G__12576;
count__12525_12560 = G__12577;
i__12526_12561 = G__12578;
continue;
}
} else {
}
}
break;
}

var seq__12527_12579 = cljs.core.seq.call(null,pmasks);
var chunk__12528_12580 = null;
var count__12529_12581 = (0);
var i__12530_12582 = (0);
while(true){
if((i__12530_12582 < count__12529_12581)){
var vec__12531_12583 = cljs.core._nth.call(null,chunk__12528_12580,i__12530_12582);
var pno_12584 = cljs.core.nth.call(null,vec__12531_12583,(0),null);
var pmask_12585 = cljs.core.nth.call(null,vec__12531_12583,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12584,"$ = ",pmask_12585,";");


var G__12586 = seq__12527_12579;
var G__12587 = chunk__12528_12580;
var G__12588 = count__12529_12581;
var G__12589 = (i__12530_12582 + (1));
seq__12527_12579 = G__12586;
chunk__12528_12580 = G__12587;
count__12529_12581 = G__12588;
i__12530_12582 = G__12589;
continue;
} else {
var temp__5457__auto___12590 = cljs.core.seq.call(null,seq__12527_12579);
if(temp__5457__auto___12590){
var seq__12527_12591__$1 = temp__5457__auto___12590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12527_12591__$1)){
var c__4351__auto___12592 = cljs.core.chunk_first.call(null,seq__12527_12591__$1);
var G__12593 = cljs.core.chunk_rest.call(null,seq__12527_12591__$1);
var G__12594 = c__4351__auto___12592;
var G__12595 = cljs.core.count.call(null,c__4351__auto___12592);
var G__12596 = (0);
seq__12527_12579 = G__12593;
chunk__12528_12580 = G__12594;
count__12529_12581 = G__12595;
i__12530_12582 = G__12596;
continue;
} else {
var vec__12534_12597 = cljs.core.first.call(null,seq__12527_12591__$1);
var pno_12598 = cljs.core.nth.call(null,vec__12534_12597,(0),null);
var pmask_12599 = cljs.core.nth.call(null,vec__12534_12597,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_12598,"$ = ",pmask_12599,";");


var G__12600 = cljs.core.next.call(null,seq__12527_12591__$1);
var G__12601 = null;
var G__12602 = (0);
var G__12603 = (0);
seq__12527_12579 = G__12600;
chunk__12528_12580 = G__12601;
count__12529_12581 = G__12602;
i__12530_12582 = G__12603;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__12604){
var map__12605 = p__12604;
var map__12605__$1 = ((((!((map__12605 == null)))?(((((map__12605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12605):map__12605);
var target = cljs.core.get.call(null,map__12605__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__12605__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__12605__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__12605__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__12605__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__11521__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__12607){
var map__12608 = p__12607;
var map__12608__$1 = ((((!((map__12608 == null)))?(((((map__12608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12608):map__12608);
var op = cljs.core.get.call(null,map__12608__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__12608__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__12608__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__12608__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__12608__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__3938__auto__ = code;
if(cljs.core.truth_(and__3938__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__3938__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__11521__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__11521__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__12613 = cljs.core.seq.call(null,table);
var chunk__12614 = null;
var count__12615 = (0);
var i__12616 = (0);
while(true){
if((i__12616 < count__12615)){
var vec__12617 = cljs.core._nth.call(null,chunk__12614,i__12616);
var sym = cljs.core.nth.call(null,vec__12617,(0),null);
var value = cljs.core.nth.call(null,vec__12617,(1),null);
var ns_12623 = cljs.core.namespace.call(null,sym);
var name_12624 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__12625 = seq__12613;
var G__12626 = chunk__12614;
var G__12627 = count__12615;
var G__12628 = (i__12616 + (1));
seq__12613 = G__12625;
chunk__12614 = G__12626;
count__12615 = G__12627;
i__12616 = G__12628;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__12613);
if(temp__5457__auto__){
var seq__12613__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12613__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__12613__$1);
var G__12629 = cljs.core.chunk_rest.call(null,seq__12613__$1);
var G__12630 = c__4351__auto__;
var G__12631 = cljs.core.count.call(null,c__4351__auto__);
var G__12632 = (0);
seq__12613 = G__12629;
chunk__12614 = G__12630;
count__12615 = G__12631;
i__12616 = G__12632;
continue;
} else {
var vec__12620 = cljs.core.first.call(null,seq__12613__$1);
var sym = cljs.core.nth.call(null,vec__12620,(0),null);
var value = cljs.core.nth.call(null,vec__12620,(1),null);
var ns_12633 = cljs.core.namespace.call(null,sym);
var name_12634 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__12635 = cljs.core.next.call(null,seq__12613__$1);
var G__12636 = null;
var G__12637 = (0);
var G__12638 = (0);
seq__12613 = G__12635;
chunk__12614 = G__12636;
count__12615 = G__12637;
i__12616 = G__12638;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__12640 = arguments.length;
switch (G__12640) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)):null));
});

cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_12645 = cljs.core.first.call(null,ks);
var vec__12641_12646 = cljs.core.conj.call(null,prefix,k_12645);
var top_12647 = cljs.core.nth.call(null,vec__12641_12646,(0),null);
var prefix_SINGLEQUOTE__12648 = vec__12641_12646;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_12645)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__12648) == null)))){
if(!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_12647)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_12647))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__12648)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_12647);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__12648)),";");
}
} else {
}

var m_12649 = cljs.core.get.call(null,externs,k_12645);
if(cljs.core.empty_QMARK_.call(null,m_12649)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__12648,m_12649,top_level,known_externs);
}

var G__12650 = cljs.core.next.call(null,ks);
ks = G__12650;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
