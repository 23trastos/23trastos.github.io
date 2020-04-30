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
var map__14560 = s;
var map__14560__$1 = ((((!((map__14560 == null)))?(((((map__14560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14560):map__14560);
var name = cljs.core.get.call(null,map__14560__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__14560__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__14563 = info;
var map__14564 = G__14563;
var map__14564__$1 = ((((!((map__14564 == null)))?(((((map__14564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14564):map__14564);
var shadow = cljs.core.get.call(null,map__14564__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__14563__$1 = G__14563;
while(true){
var d__$2 = d__$1;
var map__14566 = G__14563__$1;
var map__14566__$1 = ((((!((map__14566 == null)))?(((((map__14566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14566):map__14566);
var shadow__$1 = cljs.core.get.call(null,map__14566__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__14568 = (d__$2 + (1));
var G__14569 = shadow__$1;
d__$1 = G__14568;
G__14563__$1 = G__14569;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__14570){
var map__14571 = p__14570;
var map__14571__$1 = ((((!((map__14571 == null)))?(((((map__14571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14571):map__14571);
var name_var = map__14571__$1;
var name = cljs.core.get.call(null,map__14571__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__14571__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),"..","_DOT__DOT_");
var map__14573 = info;
var map__14573__$1 = ((((!((map__14573 == null)))?(((((map__14573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14573):map__14573);
var ns = cljs.core.get.call(null,map__14573__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__14573__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var G__14576 = arguments.length;
switch (G__14576) {
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
var G__14578 = cp;
switch (G__14578) {
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
var seq__14580_14584 = cljs.core.seq.call(null,s);
var chunk__14581_14585 = null;
var count__14582_14586 = (0);
var i__14583_14587 = (0);
while(true){
if((i__14583_14587 < count__14582_14586)){
var c_14588 = cljs.core._nth.call(null,chunk__14581_14585,i__14583_14587);
sb.append(cljs.compiler.escape_char.call(null,c_14588));


var G__14589 = seq__14580_14584;
var G__14590 = chunk__14581_14585;
var G__14591 = count__14582_14586;
var G__14592 = (i__14583_14587 + (1));
seq__14580_14584 = G__14589;
chunk__14581_14585 = G__14590;
count__14582_14586 = G__14591;
i__14583_14587 = G__14592;
continue;
} else {
var temp__5457__auto___14593 = cljs.core.seq.call(null,seq__14580_14584);
if(temp__5457__auto___14593){
var seq__14580_14594__$1 = temp__5457__auto___14593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14580_14594__$1)){
var c__4351__auto___14595 = cljs.core.chunk_first.call(null,seq__14580_14594__$1);
var G__14596 = cljs.core.chunk_rest.call(null,seq__14580_14594__$1);
var G__14597 = c__4351__auto___14595;
var G__14598 = cljs.core.count.call(null,c__4351__auto___14595);
var G__14599 = (0);
seq__14580_14584 = G__14596;
chunk__14581_14585 = G__14597;
count__14582_14586 = G__14598;
i__14583_14587 = G__14599;
continue;
} else {
var c_14600 = cljs.core.first.call(null,seq__14580_14594__$1);
sb.append(cljs.compiler.escape_char.call(null,c_14600));


var G__14601 = cljs.core.next.call(null,seq__14580_14594__$1);
var G__14602 = null;
var G__14603 = (0);
var G__14604 = (0);
seq__14580_14584 = G__14601;
chunk__14581_14585 = G__14602;
count__14582_14586 = G__14603;
i__14583_14587 = G__14604;
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
var val__10299__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__10299__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__14605_14610 = ast;
var map__14605_14611__$1 = ((((!((map__14605_14610 == null)))?(((((map__14605_14610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14605_14610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14605_14610):map__14605_14610);
var env_14612 = cljs.core.get.call(null,map__14605_14611__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_14612))){
var map__14607_14613 = env_14612;
var map__14607_14614__$1 = ((((!((map__14607_14613 == null)))?(((((map__14607_14613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14607_14613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14607_14613):map__14607_14613);
var line_14615 = cljs.core.get.call(null,map__14607_14614__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_14616 = cljs.core.get.call(null,map__14607_14614__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__14607_14613,map__14607_14614__$1,line_14615,column_14616,map__14605_14610,map__14605_14611__$1,env_14612,val__10299__auto__){
return (function (m){
var minfo = (function (){var G__14609 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__14609,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__14609;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_14615 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__14607_14613,map__14607_14614__$1,line_14615,column_14616,map__14605_14610,map__14605_14611__$1,env_14612,val__10299__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_14616)?(column_14616 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__14607_14613,map__14607_14614__$1,line_14615,column_14616,map__14605_14610,map__14605_14611__$1,env_14612,val__10299__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__14607_14613,map__14607_14614__$1,line_14615,column_14616,map__14605_14610,map__14605_14611__$1,env_14612,val__10299__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__14607_14613,map__14607_14614__$1,line_14615,column_14616,map__14605_14610,map__14605_14611__$1,env_14612,val__10299__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__14607_14613,map__14607_14614__$1,line_14615,column_14616,map__14605_14610,map__14605_14611__$1,env_14612,val__10299__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__10299__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14623 = arguments.length;
var i__4532__auto___14624 = (0);
while(true){
if((i__4532__auto___14624 < len__4531__auto___14623)){
args__4534__auto__.push((arguments[i__4532__auto___14624]));

var G__14625 = (i__4532__auto___14624 + (1));
i__4532__auto___14624 = G__14625;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__14619_14626 = cljs.core.seq.call(null,xs);
var chunk__14620_14627 = null;
var count__14621_14628 = (0);
var i__14622_14629 = (0);
while(true){
if((i__14622_14629 < count__14621_14628)){
var x_14630 = cljs.core._nth.call(null,chunk__14620_14627,i__14622_14629);
if((x_14630 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_14630)){
cljs.compiler.emit.call(null,x_14630);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_14630)){
cljs.core.apply.call(null,cljs.compiler.emits,x_14630);
} else {
if(goog.isFunction(x_14630)){
x_14630.call(null);
} else {
var s_14631 = cljs.core.print_str.call(null,x_14630);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__14619_14626,chunk__14620_14627,count__14621_14628,i__14622_14629,s_14631,x_14630){
return (function (p1__14617_SHARP_){
return (p1__14617_SHARP_ + cljs.core.count.call(null,s_14631));
});})(seq__14619_14626,chunk__14620_14627,count__14621_14628,i__14622_14629,s_14631,x_14630))
);
}

cljs.core.print.call(null,s_14631);

}
}
}
}


var G__14632 = seq__14619_14626;
var G__14633 = chunk__14620_14627;
var G__14634 = count__14621_14628;
var G__14635 = (i__14622_14629 + (1));
seq__14619_14626 = G__14632;
chunk__14620_14627 = G__14633;
count__14621_14628 = G__14634;
i__14622_14629 = G__14635;
continue;
} else {
var temp__5457__auto___14636 = cljs.core.seq.call(null,seq__14619_14626);
if(temp__5457__auto___14636){
var seq__14619_14637__$1 = temp__5457__auto___14636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14619_14637__$1)){
var c__4351__auto___14638 = cljs.core.chunk_first.call(null,seq__14619_14637__$1);
var G__14639 = cljs.core.chunk_rest.call(null,seq__14619_14637__$1);
var G__14640 = c__4351__auto___14638;
var G__14641 = cljs.core.count.call(null,c__4351__auto___14638);
var G__14642 = (0);
seq__14619_14626 = G__14639;
chunk__14620_14627 = G__14640;
count__14621_14628 = G__14641;
i__14622_14629 = G__14642;
continue;
} else {
var x_14643 = cljs.core.first.call(null,seq__14619_14637__$1);
if((x_14643 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_14643)){
cljs.compiler.emit.call(null,x_14643);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_14643)){
cljs.core.apply.call(null,cljs.compiler.emits,x_14643);
} else {
if(goog.isFunction(x_14643)){
x_14643.call(null);
} else {
var s_14644 = cljs.core.print_str.call(null,x_14643);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__14619_14626,chunk__14620_14627,count__14621_14628,i__14622_14629,s_14644,x_14643,seq__14619_14637__$1,temp__5457__auto___14636){
return (function (p1__14617_SHARP_){
return (p1__14617_SHARP_ + cljs.core.count.call(null,s_14644));
});})(seq__14619_14626,chunk__14620_14627,count__14621_14628,i__14622_14629,s_14644,x_14643,seq__14619_14637__$1,temp__5457__auto___14636))
);
}

cljs.core.print.call(null,s_14644);

}
}
}
}


var G__14645 = cljs.core.next.call(null,seq__14619_14637__$1);
var G__14646 = null;
var G__14647 = (0);
var G__14648 = (0);
seq__14619_14626 = G__14645;
chunk__14620_14627 = G__14646;
count__14621_14628 = G__14647;
i__14622_14629 = G__14648;
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
cljs.compiler.emits.cljs$lang$applyTo = (function (seq14618){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14618));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14654 = arguments.length;
var i__4532__auto___14655 = (0);
while(true){
if((i__4532__auto___14655 < len__4531__auto___14654)){
args__4534__auto__.push((arguments[i__4532__auto___14655]));

var G__14656 = (i__4532__auto___14655 + (1));
i__4532__auto___14655 = G__14656;
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

var _STAR_flush_on_newline_STAR_14650_14657 = cljs.core._STAR_flush_on_newline_STAR_;
cljs.core._STAR_flush_on_newline_STAR_ = false;

try{cljs.core.println.call(null);
}finally {cljs.core._STAR_flush_on_newline_STAR_ = _STAR_flush_on_newline_STAR_14650_14657;
}
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__14651){
var map__14652 = p__14651;
var map__14652__$1 = ((((!((map__14652 == null)))?(((((map__14652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14652):map__14652);
var m = map__14652__$1;
var gen_line = cljs.core.get.call(null,map__14652__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.compiler.emitln.cljs$lang$applyTo = (function (seq14649){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14649));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4462__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14658_14660 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14659_14661 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14658_14660,_STAR_print_fn_STAR_14659_14661,sb__4462__auto__){
return (function (x__4463__auto__){
return sb__4462__auto__.append(x__4463__auto__);
});})(_STAR_print_newline_STAR_14658_14660,_STAR_print_fn_STAR_14659_14661,sb__4462__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14659_14661;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14658_14660;
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
var vec__14662 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''));
var _ = cljs.core.nth.call(null,vec__14662,(0),null);
var flags = cljs.core.nth.call(null,vec__14662,(1),null);
var pattern = cljs.core.nth.call(null,vec__14662,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__14666){
var map__14667 = p__14666;
var map__14667__$1 = ((((!((map__14667 == null)))?(((((map__14667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14667):map__14667);
var ast = map__14667__$1;
var info = cljs.core.get.call(null,map__14667__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__14667__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__14667__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5455__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5455__auto__)){
var const_expr = temp__5455__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__14669 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__14669__$1 = ((((!((map__14669 == null)))?(((((map__14669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14669):map__14669);
var cenv = map__14669__$1;
var options = cljs.core.get.call(null,map__14669__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__14671 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.namespace.call(null,var_name) == null));
} else {
return and__3938__auto__;
}
})())){
return clojure.set.difference.call(null,G__14671,cljs.analyzer.es5_allowed);
} else {
return G__14671;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__3949__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__14672 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__14672,reserved);
} else {
return G__14672;
}
})();
var env__13428__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__14673_14674 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__14673_14675__$1 = (((G__14673_14674 instanceof cljs.core.Keyword))?G__14673_14674.fqn:null);
switch (G__14673_14675__$1) {
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__14677){
var map__14678 = p__14677;
var map__14678__$1 = ((((!((map__14678 == null)))?(((((map__14678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14678):map__14678);
var arg = map__14678__$1;
var env = cljs.core.get.call(null,map__14678__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__14678__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__14678__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__14678__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__14680 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__14680__$1 = ((((!((map__14680 == null)))?(((((map__14680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14680):map__14680);
var name = cljs.core.get.call(null,map__14680__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__13428__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__14682){
var map__14683 = p__14682;
var map__14683__$1 = ((((!((map__14683 == null)))?(((((map__14683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14683):map__14683);
var expr = cljs.core.get.call(null,map__14683__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__14683__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__14683__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13428__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return ((cljs.core.every_QMARK_.call(null,(function (p1__14685_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__14685_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__14686){
var map__14687 = p__14686;
var map__14687__$1 = ((((!((map__14687 == null)))?(((((map__14687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14687):map__14687);
var env = cljs.core.get.call(null,map__14687__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__14687__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__14687__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__13428__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__14689){
var map__14690 = p__14689;
var map__14690__$1 = ((((!((map__14690 == null)))?(((((map__14690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14690):map__14690);
var items = cljs.core.get.call(null,map__14690__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__14690__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13428__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__14692){
var map__14693 = p__14692;
var map__14693__$1 = ((((!((map__14693 == null)))?(((((map__14693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14693):map__14693);
var items = cljs.core.get.call(null,map__14693__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__14693__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13428__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_14695 = cljs.core.count.call(null,items);
if((cnt_14695 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_14695,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return ((cljs.core.every_QMARK_.call(null,(function (p1__14696_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__14696_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items))));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__14697){
var map__14698 = p__14697;
var map__14698__$1 = ((((!((map__14698 == null)))?(((((map__14698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14698):map__14698);
var items = cljs.core.get.call(null,map__14698__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__14698__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13428__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__14700){
var map__14701 = p__14700;
var map__14701__$1 = ((((!((map__14701 == null)))?(((((map__14701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14701):map__14701);
var items = cljs.core.get.call(null,map__14701__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__14701__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__14701__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13428__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__5457__auto___14719 = cljs.core.seq.call(null,items);
if(temp__5457__auto___14719){
var items_14720__$1 = temp__5457__auto___14719;
var vec__14703_14721 = items_14720__$1;
var seq__14704_14722 = cljs.core.seq.call(null,vec__14703_14721);
var first__14705_14723 = cljs.core.first.call(null,seq__14704_14722);
var seq__14704_14724__$1 = cljs.core.next.call(null,seq__14704_14722);
var vec__14706_14725 = first__14705_14723;
var k_14726 = cljs.core.nth.call(null,vec__14706_14725,(0),null);
var v_14727 = cljs.core.nth.call(null,vec__14706_14725,(1),null);
var r_14728 = seq__14704_14724__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_14726),"\": ",v_14727);

var seq__14709_14729 = cljs.core.seq.call(null,r_14728);
var chunk__14710_14730 = null;
var count__14711_14731 = (0);
var i__14712_14732 = (0);
while(true){
if((i__14712_14732 < count__14711_14731)){
var vec__14713_14733 = cljs.core._nth.call(null,chunk__14710_14730,i__14712_14732);
var k_14734__$1 = cljs.core.nth.call(null,vec__14713_14733,(0),null);
var v_14735__$1 = cljs.core.nth.call(null,vec__14713_14733,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_14734__$1),"\": ",v_14735__$1);


var G__14736 = seq__14709_14729;
var G__14737 = chunk__14710_14730;
var G__14738 = count__14711_14731;
var G__14739 = (i__14712_14732 + (1));
seq__14709_14729 = G__14736;
chunk__14710_14730 = G__14737;
count__14711_14731 = G__14738;
i__14712_14732 = G__14739;
continue;
} else {
var temp__5457__auto___14740__$1 = cljs.core.seq.call(null,seq__14709_14729);
if(temp__5457__auto___14740__$1){
var seq__14709_14741__$1 = temp__5457__auto___14740__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14709_14741__$1)){
var c__4351__auto___14742 = cljs.core.chunk_first.call(null,seq__14709_14741__$1);
var G__14743 = cljs.core.chunk_rest.call(null,seq__14709_14741__$1);
var G__14744 = c__4351__auto___14742;
var G__14745 = cljs.core.count.call(null,c__4351__auto___14742);
var G__14746 = (0);
seq__14709_14729 = G__14743;
chunk__14710_14730 = G__14744;
count__14711_14731 = G__14745;
i__14712_14732 = G__14746;
continue;
} else {
var vec__14716_14747 = cljs.core.first.call(null,seq__14709_14741__$1);
var k_14748__$1 = cljs.core.nth.call(null,vec__14716_14747,(0),null);
var v_14749__$1 = cljs.core.nth.call(null,vec__14716_14747,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_14748__$1),"\": ",v_14749__$1);


var G__14750 = cljs.core.next.call(null,seq__14709_14741__$1);
var G__14751 = null;
var G__14752 = (0);
var G__14753 = (0);
seq__14709_14729 = G__14750;
chunk__14710_14730 = G__14751;
count__14711_14731 = G__14752;
i__14712_14732 = G__14753;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"record-value","record-value",-367500392),(function (p__14754){
var map__14755 = p__14754;
var map__14755__$1 = ((((!((map__14755 == null)))?(((((map__14755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14755):map__14755);
var items = cljs.core.get.call(null,map__14755__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var ns = cljs.core.get.call(null,map__14755__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__14755__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__14755__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13428__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__14757){
var map__14758 = p__14757;
var map__14758__$1 = ((((!((map__14758 == null)))?(((((map__14758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14758):map__14758);
var form = cljs.core.get.call(null,map__14758__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__14758__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__13428__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__14760){
var map__14761 = p__14760;
var map__14761__$1 = ((((!((map__14761 == null)))?(((((map__14761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14761):map__14761);
var op = cljs.core.get.call(null,map__14761__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__14761__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__14761__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__14763){
var map__14764 = p__14763;
var map__14764__$1 = ((((!((map__14764 == null)))?(((((map__14764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14764):map__14764);
var op = cljs.core.get.call(null,map__14764__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__14764__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__14764__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__14766){
var map__14767 = p__14766;
var map__14767__$1 = ((((!((map__14767 == null)))?(((((map__14767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14767):map__14767);
var test = cljs.core.get.call(null,map__14767__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__14767__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__14767__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__14767__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__14767__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__14769){
var map__14770 = p__14769;
var map__14770__$1 = ((((!((map__14770 == null)))?(((((map__14770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14770):map__14770);
var v = cljs.core.get.call(null,map__14770__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__14770__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__14770__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__14770__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__14770__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__14772_14790 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__14773_14791 = null;
var count__14774_14792 = (0);
var i__14775_14793 = (0);
while(true){
if((i__14775_14793 < count__14774_14792)){
var vec__14776_14794 = cljs.core._nth.call(null,chunk__14773_14791,i__14775_14793);
var ts_14795 = cljs.core.nth.call(null,vec__14776_14794,(0),null);
var then_14796 = cljs.core.nth.call(null,vec__14776_14794,(1),null);
var seq__14779_14797 = cljs.core.seq.call(null,ts_14795);
var chunk__14780_14798 = null;
var count__14781_14799 = (0);
var i__14782_14800 = (0);
while(true){
if((i__14782_14800 < count__14781_14799)){
var test_14801 = cljs.core._nth.call(null,chunk__14780_14798,i__14782_14800);
cljs.compiler.emitln.call(null,"case ",test_14801,":");


var G__14802 = seq__14779_14797;
var G__14803 = chunk__14780_14798;
var G__14804 = count__14781_14799;
var G__14805 = (i__14782_14800 + (1));
seq__14779_14797 = G__14802;
chunk__14780_14798 = G__14803;
count__14781_14799 = G__14804;
i__14782_14800 = G__14805;
continue;
} else {
var temp__5457__auto___14806 = cljs.core.seq.call(null,seq__14779_14797);
if(temp__5457__auto___14806){
var seq__14779_14807__$1 = temp__5457__auto___14806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14779_14807__$1)){
var c__4351__auto___14808 = cljs.core.chunk_first.call(null,seq__14779_14807__$1);
var G__14809 = cljs.core.chunk_rest.call(null,seq__14779_14807__$1);
var G__14810 = c__4351__auto___14808;
var G__14811 = cljs.core.count.call(null,c__4351__auto___14808);
var G__14812 = (0);
seq__14779_14797 = G__14809;
chunk__14780_14798 = G__14810;
count__14781_14799 = G__14811;
i__14782_14800 = G__14812;
continue;
} else {
var test_14813 = cljs.core.first.call(null,seq__14779_14807__$1);
cljs.compiler.emitln.call(null,"case ",test_14813,":");


var G__14814 = cljs.core.next.call(null,seq__14779_14807__$1);
var G__14815 = null;
var G__14816 = (0);
var G__14817 = (0);
seq__14779_14797 = G__14814;
chunk__14780_14798 = G__14815;
count__14781_14799 = G__14816;
i__14782_14800 = G__14817;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_14796);
} else {
cljs.compiler.emitln.call(null,then_14796);
}

cljs.compiler.emitln.call(null,"break;");


var G__14818 = seq__14772_14790;
var G__14819 = chunk__14773_14791;
var G__14820 = count__14774_14792;
var G__14821 = (i__14775_14793 + (1));
seq__14772_14790 = G__14818;
chunk__14773_14791 = G__14819;
count__14774_14792 = G__14820;
i__14775_14793 = G__14821;
continue;
} else {
var temp__5457__auto___14822 = cljs.core.seq.call(null,seq__14772_14790);
if(temp__5457__auto___14822){
var seq__14772_14823__$1 = temp__5457__auto___14822;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14772_14823__$1)){
var c__4351__auto___14824 = cljs.core.chunk_first.call(null,seq__14772_14823__$1);
var G__14825 = cljs.core.chunk_rest.call(null,seq__14772_14823__$1);
var G__14826 = c__4351__auto___14824;
var G__14827 = cljs.core.count.call(null,c__4351__auto___14824);
var G__14828 = (0);
seq__14772_14790 = G__14825;
chunk__14773_14791 = G__14826;
count__14774_14792 = G__14827;
i__14775_14793 = G__14828;
continue;
} else {
var vec__14783_14829 = cljs.core.first.call(null,seq__14772_14823__$1);
var ts_14830 = cljs.core.nth.call(null,vec__14783_14829,(0),null);
var then_14831 = cljs.core.nth.call(null,vec__14783_14829,(1),null);
var seq__14786_14832 = cljs.core.seq.call(null,ts_14830);
var chunk__14787_14833 = null;
var count__14788_14834 = (0);
var i__14789_14835 = (0);
while(true){
if((i__14789_14835 < count__14788_14834)){
var test_14836 = cljs.core._nth.call(null,chunk__14787_14833,i__14789_14835);
cljs.compiler.emitln.call(null,"case ",test_14836,":");


var G__14837 = seq__14786_14832;
var G__14838 = chunk__14787_14833;
var G__14839 = count__14788_14834;
var G__14840 = (i__14789_14835 + (1));
seq__14786_14832 = G__14837;
chunk__14787_14833 = G__14838;
count__14788_14834 = G__14839;
i__14789_14835 = G__14840;
continue;
} else {
var temp__5457__auto___14841__$1 = cljs.core.seq.call(null,seq__14786_14832);
if(temp__5457__auto___14841__$1){
var seq__14786_14842__$1 = temp__5457__auto___14841__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14786_14842__$1)){
var c__4351__auto___14843 = cljs.core.chunk_first.call(null,seq__14786_14842__$1);
var G__14844 = cljs.core.chunk_rest.call(null,seq__14786_14842__$1);
var G__14845 = c__4351__auto___14843;
var G__14846 = cljs.core.count.call(null,c__4351__auto___14843);
var G__14847 = (0);
seq__14786_14832 = G__14844;
chunk__14787_14833 = G__14845;
count__14788_14834 = G__14846;
i__14789_14835 = G__14847;
continue;
} else {
var test_14848 = cljs.core.first.call(null,seq__14786_14842__$1);
cljs.compiler.emitln.call(null,"case ",test_14848,":");


var G__14849 = cljs.core.next.call(null,seq__14786_14842__$1);
var G__14850 = null;
var G__14851 = (0);
var G__14852 = (0);
seq__14786_14832 = G__14849;
chunk__14787_14833 = G__14850;
count__14788_14834 = G__14851;
i__14789_14835 = G__14852;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_14831);
} else {
cljs.compiler.emitln.call(null,then_14831);
}

cljs.compiler.emitln.call(null,"break;");


var G__14853 = cljs.core.next.call(null,seq__14772_14823__$1);
var G__14854 = null;
var G__14855 = (0);
var G__14856 = (0);
seq__14772_14790 = G__14853;
chunk__14773_14791 = G__14854;
count__14774_14792 = G__14855;
i__14775_14793 = G__14856;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__14857){
var map__14858 = p__14857;
var map__14858__$1 = ((((!((map__14858 == null)))?(((((map__14858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14858):map__14858);
var throw$ = cljs.core.get.call(null,map__14858__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__14858__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__14861 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__14861,(0),null);
var rstr = cljs.core.nth.call(null,vec__14861,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__14861,fstr,rstr,ret_t,axstr){
return (function (p1__14860_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__14860_SHARP_);
});})(idx,vec__14861,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__14864 = ["function(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",args_ts)),")"].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14864),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__14864;
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
return (function (p1__14865_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__14865_SHARP_);
});})(ts__$1,xs))
,xs))),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__14866 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__14867 = cljs.core.seq.call(null,vec__14866);
var first__14868 = cljs.core.first.call(null,seq__14867);
var seq__14867__$1 = cljs.core.next.call(null,seq__14867);
var p = first__14868;
var first__14868__$1 = cljs.core.first.call(null,seq__14867__$1);
var seq__14867__$2 = cljs.core.next.call(null,seq__14867__$1);
var ts = first__14868__$1;
var first__14868__$2 = cljs.core.first.call(null,seq__14867__$2);
var seq__14867__$3 = cljs.core.next.call(null,seq__14867__$2);
var n = first__14868__$2;
var xs = seq__14867__$3;
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
var vec__14869 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__14870 = cljs.core.seq.call(null,vec__14869);
var first__14871 = cljs.core.first.call(null,seq__14870);
var seq__14870__$1 = cljs.core.next.call(null,seq__14870);
var p = first__14871;
var first__14871__$1 = cljs.core.first.call(null,seq__14870__$1);
var seq__14870__$2 = cljs.core.next.call(null,seq__14870__$1);
var ts = first__14871__$1;
var xs = seq__14870__$2;
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
var G__14874 = arguments.length;
switch (G__14874) {
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
var vec__14882 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__14872_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__14872_SHARP_);
} else {
return p1__14872_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__14883 = cljs.core.seq.call(null,vec__14882);
var first__14884 = cljs.core.first.call(null,seq__14883);
var seq__14883__$1 = cljs.core.next.call(null,seq__14883);
var x = first__14884;
var ys = seq__14883__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__14885 = cljs.core.seq.call(null,ys);
var chunk__14886 = null;
var count__14887 = (0);
var i__14888 = (0);
while(true){
if((i__14888 < count__14887)){
var next_line = cljs.core._nth.call(null,chunk__14886,i__14888);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__14894 = seq__14885;
var G__14895 = chunk__14886;
var G__14896 = count__14887;
var G__14897 = (i__14888 + (1));
seq__14885 = G__14894;
chunk__14886 = G__14895;
count__14887 = G__14896;
i__14888 = G__14897;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__14885);
if(temp__5457__auto__){
var seq__14885__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14885__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__14885__$1);
var G__14898 = cljs.core.chunk_rest.call(null,seq__14885__$1);
var G__14899 = c__4351__auto__;
var G__14900 = cljs.core.count.call(null,c__4351__auto__);
var G__14901 = (0);
seq__14885 = G__14898;
chunk__14886 = G__14899;
count__14887 = G__14900;
i__14888 = G__14901;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__14885__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__14902 = cljs.core.next.call(null,seq__14885__$1);
var G__14903 = null;
var G__14904 = (0);
var G__14905 = (0);
seq__14885 = G__14902;
chunk__14886 = G__14903;
count__14887 = G__14904;
i__14888 = G__14905;
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

var seq__14889_14906 = cljs.core.seq.call(null,docs__$2);
var chunk__14890_14907 = null;
var count__14891_14908 = (0);
var i__14892_14909 = (0);
while(true){
if((i__14892_14909 < count__14891_14908)){
var e_14910 = cljs.core._nth.call(null,chunk__14890_14907,i__14892_14909);
if(cljs.core.truth_(e_14910)){
print_comment_lines.call(null,e_14910);
} else {
}


var G__14911 = seq__14889_14906;
var G__14912 = chunk__14890_14907;
var G__14913 = count__14891_14908;
var G__14914 = (i__14892_14909 + (1));
seq__14889_14906 = G__14911;
chunk__14890_14907 = G__14912;
count__14891_14908 = G__14913;
i__14892_14909 = G__14914;
continue;
} else {
var temp__5457__auto___14915 = cljs.core.seq.call(null,seq__14889_14906);
if(temp__5457__auto___14915){
var seq__14889_14916__$1 = temp__5457__auto___14915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14889_14916__$1)){
var c__4351__auto___14917 = cljs.core.chunk_first.call(null,seq__14889_14916__$1);
var G__14918 = cljs.core.chunk_rest.call(null,seq__14889_14916__$1);
var G__14919 = c__4351__auto___14917;
var G__14920 = cljs.core.count.call(null,c__4351__auto___14917);
var G__14921 = (0);
seq__14889_14906 = G__14918;
chunk__14890_14907 = G__14919;
count__14891_14908 = G__14920;
i__14892_14909 = G__14921;
continue;
} else {
var e_14922 = cljs.core.first.call(null,seq__14889_14916__$1);
if(cljs.core.truth_(e_14922)){
print_comment_lines.call(null,e_14922);
} else {
}


var G__14923 = cljs.core.next.call(null,seq__14889_14916__$1);
var G__14924 = null;
var G__14925 = (0);
var G__14926 = (0);
seq__14889_14906 = G__14923;
chunk__14890_14907 = G__14924;
count__14891_14908 = G__14925;
i__14892_14909 = G__14926;
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
return (function (p1__14928_SHARP_){
return goog.string.startsWith(p1__14928_SHARP_,"@define");
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__14929){
var map__14930 = p__14929;
var map__14930__$1 = ((((!((map__14930 == null)))?(((((map__14930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14930):map__14930);
var name = cljs.core.get.call(null,map__14930__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__14930__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__14930__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__14930__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__14930__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__14930__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__14930__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__14930__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__14930__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__14932){
var map__14933 = p__14932;
var map__14933__$1 = ((((!((map__14933 == null)))?(((((map__14933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14933):map__14933);
var name = cljs.core.get.call(null,map__14933__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__14933__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__14933__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__14935_14953 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__14936_14954 = null;
var count__14937_14955 = (0);
var i__14938_14956 = (0);
while(true){
if((i__14938_14956 < count__14937_14955)){
var vec__14939_14957 = cljs.core._nth.call(null,chunk__14936_14954,i__14938_14956);
var i_14958 = cljs.core.nth.call(null,vec__14939_14957,(0),null);
var param_14959 = cljs.core.nth.call(null,vec__14939_14957,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_14959);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__14960 = seq__14935_14953;
var G__14961 = chunk__14936_14954;
var G__14962 = count__14937_14955;
var G__14963 = (i__14938_14956 + (1));
seq__14935_14953 = G__14960;
chunk__14936_14954 = G__14961;
count__14937_14955 = G__14962;
i__14938_14956 = G__14963;
continue;
} else {
var temp__5457__auto___14964 = cljs.core.seq.call(null,seq__14935_14953);
if(temp__5457__auto___14964){
var seq__14935_14965__$1 = temp__5457__auto___14964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14935_14965__$1)){
var c__4351__auto___14966 = cljs.core.chunk_first.call(null,seq__14935_14965__$1);
var G__14967 = cljs.core.chunk_rest.call(null,seq__14935_14965__$1);
var G__14968 = c__4351__auto___14966;
var G__14969 = cljs.core.count.call(null,c__4351__auto___14966);
var G__14970 = (0);
seq__14935_14953 = G__14967;
chunk__14936_14954 = G__14968;
count__14937_14955 = G__14969;
i__14938_14956 = G__14970;
continue;
} else {
var vec__14942_14971 = cljs.core.first.call(null,seq__14935_14965__$1);
var i_14972 = cljs.core.nth.call(null,vec__14942_14971,(0),null);
var param_14973 = cljs.core.nth.call(null,vec__14942_14971,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_14973);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__14974 = cljs.core.next.call(null,seq__14935_14965__$1);
var G__14975 = null;
var G__14976 = (0);
var G__14977 = (0);
seq__14935_14953 = G__14974;
chunk__14936_14954 = G__14975;
count__14937_14955 = G__14976;
i__14938_14956 = G__14977;
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

var seq__14945_14978 = cljs.core.seq.call(null,params);
var chunk__14946_14979 = null;
var count__14947_14980 = (0);
var i__14948_14981 = (0);
while(true){
if((i__14948_14981 < count__14947_14980)){
var param_14982 = cljs.core._nth.call(null,chunk__14946_14979,i__14948_14981);
cljs.compiler.emit.call(null,param_14982);

if(cljs.core._EQ_.call(null,param_14982,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__14983 = seq__14945_14978;
var G__14984 = chunk__14946_14979;
var G__14985 = count__14947_14980;
var G__14986 = (i__14948_14981 + (1));
seq__14945_14978 = G__14983;
chunk__14946_14979 = G__14984;
count__14947_14980 = G__14985;
i__14948_14981 = G__14986;
continue;
} else {
var temp__5457__auto___14987 = cljs.core.seq.call(null,seq__14945_14978);
if(temp__5457__auto___14987){
var seq__14945_14988__$1 = temp__5457__auto___14987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14945_14988__$1)){
var c__4351__auto___14989 = cljs.core.chunk_first.call(null,seq__14945_14988__$1);
var G__14990 = cljs.core.chunk_rest.call(null,seq__14945_14988__$1);
var G__14991 = c__4351__auto___14989;
var G__14992 = cljs.core.count.call(null,c__4351__auto___14989);
var G__14993 = (0);
seq__14945_14978 = G__14990;
chunk__14946_14979 = G__14991;
count__14947_14980 = G__14992;
i__14948_14981 = G__14993;
continue;
} else {
var param_14994 = cljs.core.first.call(null,seq__14945_14988__$1);
cljs.compiler.emit.call(null,param_14994);

if(cljs.core._EQ_.call(null,param_14994,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__14995 = cljs.core.next.call(null,seq__14945_14988__$1);
var G__14996 = null;
var G__14997 = (0);
var G__14998 = (0);
seq__14945_14978 = G__14995;
chunk__14946_14979 = G__14996;
count__14947_14980 = G__14997;
i__14948_14981 = G__14998;
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

var seq__14949_14999 = cljs.core.seq.call(null,params);
var chunk__14950_15000 = null;
var count__14951_15001 = (0);
var i__14952_15002 = (0);
while(true){
if((i__14952_15002 < count__14951_15001)){
var param_15003 = cljs.core._nth.call(null,chunk__14950_15000,i__14952_15002);
cljs.compiler.emit.call(null,param_15003);

if(cljs.core._EQ_.call(null,param_15003,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15004 = seq__14949_14999;
var G__15005 = chunk__14950_15000;
var G__15006 = count__14951_15001;
var G__15007 = (i__14952_15002 + (1));
seq__14949_14999 = G__15004;
chunk__14950_15000 = G__15005;
count__14951_15001 = G__15006;
i__14952_15002 = G__15007;
continue;
} else {
var temp__5457__auto___15008 = cljs.core.seq.call(null,seq__14949_14999);
if(temp__5457__auto___15008){
var seq__14949_15009__$1 = temp__5457__auto___15008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14949_15009__$1)){
var c__4351__auto___15010 = cljs.core.chunk_first.call(null,seq__14949_15009__$1);
var G__15011 = cljs.core.chunk_rest.call(null,seq__14949_15009__$1);
var G__15012 = c__4351__auto___15010;
var G__15013 = cljs.core.count.call(null,c__4351__auto___15010);
var G__15014 = (0);
seq__14949_14999 = G__15011;
chunk__14950_15000 = G__15012;
count__14951_15001 = G__15013;
i__14952_15002 = G__15014;
continue;
} else {
var param_15015 = cljs.core.first.call(null,seq__14949_15009__$1);
cljs.compiler.emit.call(null,param_15015);

if(cljs.core._EQ_.call(null,param_15015,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15016 = cljs.core.next.call(null,seq__14949_15009__$1);
var G__15017 = null;
var G__15018 = (0);
var G__15019 = (0);
seq__14949_14999 = G__15016;
chunk__14950_15000 = G__15017;
count__14951_15001 = G__15018;
i__14952_15002 = G__15019;
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
var seq__15020 = cljs.core.seq.call(null,params);
var chunk__15021 = null;
var count__15022 = (0);
var i__15023 = (0);
while(true){
if((i__15023 < count__15022)){
var param = cljs.core._nth.call(null,chunk__15021,i__15023);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15024 = seq__15020;
var G__15025 = chunk__15021;
var G__15026 = count__15022;
var G__15027 = (i__15023 + (1));
seq__15020 = G__15024;
chunk__15021 = G__15025;
count__15022 = G__15026;
i__15023 = G__15027;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__15020);
if(temp__5457__auto__){
var seq__15020__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15020__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__15020__$1);
var G__15028 = cljs.core.chunk_rest.call(null,seq__15020__$1);
var G__15029 = c__4351__auto__;
var G__15030 = cljs.core.count.call(null,c__4351__auto__);
var G__15031 = (0);
seq__15020 = G__15028;
chunk__15021 = G__15029;
count__15022 = G__15030;
i__15023 = G__15031;
continue;
} else {
var param = cljs.core.first.call(null,seq__15020__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15032 = cljs.core.next.call(null,seq__15020__$1);
var G__15033 = null;
var G__15034 = (0);
var G__15035 = (0);
seq__15020 = G__15032;
chunk__15021 = G__15033;
count__15022 = G__15034;
i__15023 = G__15035;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__15036){
var map__15037 = p__15036;
var map__15037__$1 = ((((!((map__15037 == null)))?(((((map__15037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15037):map__15037);
var type = cljs.core.get.call(null,map__15037__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__15037__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__15037__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__15037__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__15037__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__15037__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__15037__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__15037__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__13428__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__15039){
var map__15040 = p__15039;
var map__15040__$1 = ((((!((map__15040 == null)))?(((((map__15040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15040):map__15040);
var f = map__15040__$1;
var type = cljs.core.get.call(null,map__15040__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__15040__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__15040__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__15040__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__15040__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__15040__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__15040__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__15040__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__13428__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_15050__$1 = (function (){var or__3949__auto__ = name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_15051 = cljs.compiler.munge.call(null,name_15050__$1);
var delegate_name_15052 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_15051),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_15052," = function (");

var seq__15042_15053 = cljs.core.seq.call(null,params);
var chunk__15043_15054 = null;
var count__15044_15055 = (0);
var i__15045_15056 = (0);
while(true){
if((i__15045_15056 < count__15044_15055)){
var param_15057 = cljs.core._nth.call(null,chunk__15043_15054,i__15045_15056);
cljs.compiler.emit.call(null,param_15057);

if(cljs.core._EQ_.call(null,param_15057,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15058 = seq__15042_15053;
var G__15059 = chunk__15043_15054;
var G__15060 = count__15044_15055;
var G__15061 = (i__15045_15056 + (1));
seq__15042_15053 = G__15058;
chunk__15043_15054 = G__15059;
count__15044_15055 = G__15060;
i__15045_15056 = G__15061;
continue;
} else {
var temp__5457__auto___15062 = cljs.core.seq.call(null,seq__15042_15053);
if(temp__5457__auto___15062){
var seq__15042_15063__$1 = temp__5457__auto___15062;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15042_15063__$1)){
var c__4351__auto___15064 = cljs.core.chunk_first.call(null,seq__15042_15063__$1);
var G__15065 = cljs.core.chunk_rest.call(null,seq__15042_15063__$1);
var G__15066 = c__4351__auto___15064;
var G__15067 = cljs.core.count.call(null,c__4351__auto___15064);
var G__15068 = (0);
seq__15042_15053 = G__15065;
chunk__15043_15054 = G__15066;
count__15044_15055 = G__15067;
i__15045_15056 = G__15068;
continue;
} else {
var param_15069 = cljs.core.first.call(null,seq__15042_15063__$1);
cljs.compiler.emit.call(null,param_15069);

if(cljs.core._EQ_.call(null,param_15069,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15070 = cljs.core.next.call(null,seq__15042_15063__$1);
var G__15071 = null;
var G__15072 = (0);
var G__15073 = (0);
seq__15042_15053 = G__15070;
chunk__15043_15054 = G__15071;
count__15044_15055 = G__15072;
i__15045_15056 = G__15073;
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

cljs.compiler.emitln.call(null,"var ",mname_15051," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_15074 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_15074,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_15052,".call(this,");

var seq__15046_15075 = cljs.core.seq.call(null,params);
var chunk__15047_15076 = null;
var count__15048_15077 = (0);
var i__15049_15078 = (0);
while(true){
if((i__15049_15078 < count__15048_15077)){
var param_15079 = cljs.core._nth.call(null,chunk__15047_15076,i__15049_15078);
cljs.compiler.emit.call(null,param_15079);

if(cljs.core._EQ_.call(null,param_15079,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15080 = seq__15046_15075;
var G__15081 = chunk__15047_15076;
var G__15082 = count__15048_15077;
var G__15083 = (i__15049_15078 + (1));
seq__15046_15075 = G__15080;
chunk__15047_15076 = G__15081;
count__15048_15077 = G__15082;
i__15049_15078 = G__15083;
continue;
} else {
var temp__5457__auto___15084 = cljs.core.seq.call(null,seq__15046_15075);
if(temp__5457__auto___15084){
var seq__15046_15085__$1 = temp__5457__auto___15084;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15046_15085__$1)){
var c__4351__auto___15086 = cljs.core.chunk_first.call(null,seq__15046_15085__$1);
var G__15087 = cljs.core.chunk_rest.call(null,seq__15046_15085__$1);
var G__15088 = c__4351__auto___15086;
var G__15089 = cljs.core.count.call(null,c__4351__auto___15086);
var G__15090 = (0);
seq__15046_15075 = G__15087;
chunk__15047_15076 = G__15088;
count__15048_15077 = G__15089;
i__15049_15078 = G__15090;
continue;
} else {
var param_15091 = cljs.core.first.call(null,seq__15046_15085__$1);
cljs.compiler.emit.call(null,param_15091);

if(cljs.core._EQ_.call(null,param_15091,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__15092 = cljs.core.next.call(null,seq__15046_15085__$1);
var G__15093 = null;
var G__15094 = (0);
var G__15095 = (0);
seq__15046_15075 = G__15092;
chunk__15047_15076 = G__15093;
count__15048_15077 = G__15094;
i__15049_15078 = G__15095;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_15051,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_15051,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_15050__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_15051,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_15052,";");

cljs.compiler.emitln.call(null,"return ",mname_15051,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__15099){
var map__15100 = p__15099;
var map__15100__$1 = ((((!((map__15100 == null)))?(((((map__15100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15100):map__15100);
var name = cljs.core.get.call(null,map__15100__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__15100__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__15100__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__15100__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__15100__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__15100__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__15100__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__15100,map__15100__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__15096_SHARP_){
var and__3938__auto__ = p1__15096_SHARP_;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__15096_SHARP_));
} else {
return and__3938__auto__;
}
});})(map__15100,map__15100__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_15135__$1 = (function (){var or__3949__auto__ = name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_15136 = cljs.compiler.munge.call(null,name_15135__$1);
var maxparams_15137 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_15138 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_15135__$1,mname_15136,maxparams_15137,loop_locals,map__15100,map__15100__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_15136),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_15135__$1,mname_15136,maxparams_15137,loop_locals,map__15100,map__15100__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_15139 = cljs.core.sort_by.call(null,((function (name_15135__$1,mname_15136,maxparams_15137,mmap_15138,loop_locals,map__15100,map__15100__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__15097_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__15097_SHARP_)));
});})(name_15135__$1,mname_15136,maxparams_15137,mmap_15138,loop_locals,map__15100,map__15100__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_15138));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_15136," = null;");

var seq__15102_15140 = cljs.core.seq.call(null,ms_15139);
var chunk__15103_15141 = null;
var count__15104_15142 = (0);
var i__15105_15143 = (0);
while(true){
if((i__15105_15143 < count__15104_15142)){
var vec__15106_15144 = cljs.core._nth.call(null,chunk__15103_15141,i__15105_15143);
var n_15145 = cljs.core.nth.call(null,vec__15106_15144,(0),null);
var meth_15146 = cljs.core.nth.call(null,vec__15106_15144,(1),null);
cljs.compiler.emits.call(null,"var ",n_15145," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_15146))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_15146);
} else {
cljs.compiler.emit_fn_method.call(null,meth_15146);
}

cljs.compiler.emitln.call(null,";");


var G__15147 = seq__15102_15140;
var G__15148 = chunk__15103_15141;
var G__15149 = count__15104_15142;
var G__15150 = (i__15105_15143 + (1));
seq__15102_15140 = G__15147;
chunk__15103_15141 = G__15148;
count__15104_15142 = G__15149;
i__15105_15143 = G__15150;
continue;
} else {
var temp__5457__auto___15151 = cljs.core.seq.call(null,seq__15102_15140);
if(temp__5457__auto___15151){
var seq__15102_15152__$1 = temp__5457__auto___15151;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15102_15152__$1)){
var c__4351__auto___15153 = cljs.core.chunk_first.call(null,seq__15102_15152__$1);
var G__15154 = cljs.core.chunk_rest.call(null,seq__15102_15152__$1);
var G__15155 = c__4351__auto___15153;
var G__15156 = cljs.core.count.call(null,c__4351__auto___15153);
var G__15157 = (0);
seq__15102_15140 = G__15154;
chunk__15103_15141 = G__15155;
count__15104_15142 = G__15156;
i__15105_15143 = G__15157;
continue;
} else {
var vec__15109_15158 = cljs.core.first.call(null,seq__15102_15152__$1);
var n_15159 = cljs.core.nth.call(null,vec__15109_15158,(0),null);
var meth_15160 = cljs.core.nth.call(null,vec__15109_15158,(1),null);
cljs.compiler.emits.call(null,"var ",n_15159," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_15160))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_15160);
} else {
cljs.compiler.emit_fn_method.call(null,meth_15160);
}

cljs.compiler.emitln.call(null,";");


var G__15161 = cljs.core.next.call(null,seq__15102_15152__$1);
var G__15162 = null;
var G__15163 = (0);
var G__15164 = (0);
seq__15102_15140 = G__15161;
chunk__15103_15141 = G__15162;
count__15104_15142 = G__15163;
i__15105_15143 = G__15164;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_15136," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_15137),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_15137)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_15137));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__15112_15165 = cljs.core.seq.call(null,ms_15139);
var chunk__15113_15166 = null;
var count__15114_15167 = (0);
var i__15115_15168 = (0);
while(true){
if((i__15115_15168 < count__15114_15167)){
var vec__15116_15169 = cljs.core._nth.call(null,chunk__15113_15166,i__15115_15168);
var n_15170 = cljs.core.nth.call(null,vec__15116_15169,(0),null);
var meth_15171 = cljs.core.nth.call(null,vec__15116_15169,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_15171))){
cljs.compiler.emitln.call(null,"default:");

var restarg_15172 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_15172," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_15173 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_15172," = new cljs.core.IndexedSeq(",a_15173,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_15170,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_15137)),(((cljs.core.count.call(null,maxparams_15137) > (1)))?", ":null),restarg_15172,");");
} else {
var pcnt_15174 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15171));
cljs.compiler.emitln.call(null,"case ",pcnt_15174,":");

cljs.compiler.emitln.call(null,"return ",n_15170,".call(this",(((pcnt_15174 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_15174,maxparams_15137)),null,(1),null)),(2),null))),");");
}


var G__15175 = seq__15112_15165;
var G__15176 = chunk__15113_15166;
var G__15177 = count__15114_15167;
var G__15178 = (i__15115_15168 + (1));
seq__15112_15165 = G__15175;
chunk__15113_15166 = G__15176;
count__15114_15167 = G__15177;
i__15115_15168 = G__15178;
continue;
} else {
var temp__5457__auto___15179 = cljs.core.seq.call(null,seq__15112_15165);
if(temp__5457__auto___15179){
var seq__15112_15180__$1 = temp__5457__auto___15179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15112_15180__$1)){
var c__4351__auto___15181 = cljs.core.chunk_first.call(null,seq__15112_15180__$1);
var G__15182 = cljs.core.chunk_rest.call(null,seq__15112_15180__$1);
var G__15183 = c__4351__auto___15181;
var G__15184 = cljs.core.count.call(null,c__4351__auto___15181);
var G__15185 = (0);
seq__15112_15165 = G__15182;
chunk__15113_15166 = G__15183;
count__15114_15167 = G__15184;
i__15115_15168 = G__15185;
continue;
} else {
var vec__15119_15186 = cljs.core.first.call(null,seq__15112_15180__$1);
var n_15187 = cljs.core.nth.call(null,vec__15119_15186,(0),null);
var meth_15188 = cljs.core.nth.call(null,vec__15119_15186,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_15188))){
cljs.compiler.emitln.call(null,"default:");

var restarg_15189 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_15189," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_15190 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_15189," = new cljs.core.IndexedSeq(",a_15190,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_15187,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_15137)),(((cljs.core.count.call(null,maxparams_15137) > (1)))?", ":null),restarg_15189,");");
} else {
var pcnt_15191 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15188));
cljs.compiler.emitln.call(null,"case ",pcnt_15191,":");

cljs.compiler.emitln.call(null,"return ",n_15187,".call(this",(((pcnt_15191 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_15191,maxparams_15137)),null,(1),null)),(2),null))),");");
}


var G__15192 = cljs.core.next.call(null,seq__15112_15180__$1);
var G__15193 = null;
var G__15194 = (0);
var G__15195 = (0);
seq__15112_15165 = G__15192;
chunk__15113_15166 = G__15193;
count__15114_15167 = G__15194;
i__15115_15168 = G__15195;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_15196 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_15139)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_15196,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_15136,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_15136,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_15135__$1,mname_15136,maxparams_15137,mmap_15138,ms_15139,loop_locals,map__15100,map__15100__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__15098_SHARP_){
var vec__15122 = p1__15098_SHARP_;
var n = cljs.core.nth.call(null,vec__15122,(0),null);
var m = cljs.core.nth.call(null,vec__15122,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_15135__$1,mname_15136,maxparams_15137,mmap_15138,ms_15139,loop_locals,map__15100,map__15100__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_15139),".cljs$lang$applyTo;");
} else {
}

var seq__15125_15197 = cljs.core.seq.call(null,ms_15139);
var chunk__15126_15198 = null;
var count__15127_15199 = (0);
var i__15128_15200 = (0);
while(true){
if((i__15128_15200 < count__15127_15199)){
var vec__15129_15201 = cljs.core._nth.call(null,chunk__15126_15198,i__15128_15200);
var n_15202 = cljs.core.nth.call(null,vec__15129_15201,(0),null);
var meth_15203 = cljs.core.nth.call(null,vec__15129_15201,(1),null);
var c_15204 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15203));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_15203))){
cljs.compiler.emitln.call(null,mname_15136,".cljs$core$IFn$_invoke$arity$variadic = ",n_15202,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_15136,".cljs$core$IFn$_invoke$arity$",c_15204," = ",n_15202,";");
}


var G__15205 = seq__15125_15197;
var G__15206 = chunk__15126_15198;
var G__15207 = count__15127_15199;
var G__15208 = (i__15128_15200 + (1));
seq__15125_15197 = G__15205;
chunk__15126_15198 = G__15206;
count__15127_15199 = G__15207;
i__15128_15200 = G__15208;
continue;
} else {
var temp__5457__auto___15209 = cljs.core.seq.call(null,seq__15125_15197);
if(temp__5457__auto___15209){
var seq__15125_15210__$1 = temp__5457__auto___15209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15125_15210__$1)){
var c__4351__auto___15211 = cljs.core.chunk_first.call(null,seq__15125_15210__$1);
var G__15212 = cljs.core.chunk_rest.call(null,seq__15125_15210__$1);
var G__15213 = c__4351__auto___15211;
var G__15214 = cljs.core.count.call(null,c__4351__auto___15211);
var G__15215 = (0);
seq__15125_15197 = G__15212;
chunk__15126_15198 = G__15213;
count__15127_15199 = G__15214;
i__15128_15200 = G__15215;
continue;
} else {
var vec__15132_15216 = cljs.core.first.call(null,seq__15125_15210__$1);
var n_15217 = cljs.core.nth.call(null,vec__15132_15216,(0),null);
var meth_15218 = cljs.core.nth.call(null,vec__15132_15216,(1),null);
var c_15219 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15218));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_15218))){
cljs.compiler.emitln.call(null,mname_15136,".cljs$core$IFn$_invoke$arity$variadic = ",n_15217,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_15136,".cljs$core$IFn$_invoke$arity$",c_15219," = ",n_15217,";");
}


var G__15220 = cljs.core.next.call(null,seq__15125_15210__$1);
var G__15221 = null;
var G__15222 = (0);
var G__15223 = (0);
seq__15125_15197 = G__15220;
chunk__15126_15198 = G__15221;
count__15127_15199 = G__15222;
i__15128_15200 = G__15223;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_15136,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__15224){
var map__15225 = p__15224;
var map__15225__$1 = ((((!((map__15225 == null)))?(((((map__15225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15225):map__15225);
var statements = cljs.core.get.call(null,map__15225__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__15225__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__15225__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__15227_15231 = cljs.core.seq.call(null,statements);
var chunk__15228_15232 = null;
var count__15229_15233 = (0);
var i__15230_15234 = (0);
while(true){
if((i__15230_15234 < count__15229_15233)){
var s_15235 = cljs.core._nth.call(null,chunk__15228_15232,i__15230_15234);
cljs.compiler.emitln.call(null,s_15235);


var G__15236 = seq__15227_15231;
var G__15237 = chunk__15228_15232;
var G__15238 = count__15229_15233;
var G__15239 = (i__15230_15234 + (1));
seq__15227_15231 = G__15236;
chunk__15228_15232 = G__15237;
count__15229_15233 = G__15238;
i__15230_15234 = G__15239;
continue;
} else {
var temp__5457__auto___15240 = cljs.core.seq.call(null,seq__15227_15231);
if(temp__5457__auto___15240){
var seq__15227_15241__$1 = temp__5457__auto___15240;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15227_15241__$1)){
var c__4351__auto___15242 = cljs.core.chunk_first.call(null,seq__15227_15241__$1);
var G__15243 = cljs.core.chunk_rest.call(null,seq__15227_15241__$1);
var G__15244 = c__4351__auto___15242;
var G__15245 = cljs.core.count.call(null,c__4351__auto___15242);
var G__15246 = (0);
seq__15227_15231 = G__15243;
chunk__15228_15232 = G__15244;
count__15229_15233 = G__15245;
i__15230_15234 = G__15246;
continue;
} else {
var s_15247 = cljs.core.first.call(null,seq__15227_15241__$1);
cljs.compiler.emitln.call(null,s_15247);


var G__15248 = cljs.core.next.call(null,seq__15227_15241__$1);
var G__15249 = null;
var G__15250 = (0);
var G__15251 = (0);
seq__15227_15231 = G__15248;
chunk__15228_15232 = G__15249;
count__15229_15233 = G__15250;
i__15230_15234 = G__15251;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__15252){
var map__15253 = p__15252;
var map__15253__$1 = ((((!((map__15253 == null)))?(((((map__15253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15253):map__15253);
var env = cljs.core.get.call(null,map__15253__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__15253__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__15253__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__15253__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__15253__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__15255,is_loop){
var map__15256 = p__15255;
var map__15256__$1 = ((((!((map__15256 == null)))?(((((map__15256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15256):map__15256);
var bindings = cljs.core.get.call(null,map__15256__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__15256__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__15256__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_15258_15267 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_15258_15267,context,map__15256,map__15256__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
});})(_STAR_lexical_renames_STAR_15258_15267,context,map__15256,map__15256__$1,bindings,expr,env))
,bindings):null));

try{var seq__15259_15268 = cljs.core.seq.call(null,bindings);
var chunk__15260_15269 = null;
var count__15261_15270 = (0);
var i__15262_15271 = (0);
while(true){
if((i__15262_15271 < count__15261_15270)){
var map__15263_15272 = cljs.core._nth.call(null,chunk__15260_15269,i__15262_15271);
var map__15263_15273__$1 = ((((!((map__15263_15272 == null)))?(((((map__15263_15272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15263_15272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15263_15272):map__15263_15272);
var binding_15274 = map__15263_15273__$1;
var init_15275 = cljs.core.get.call(null,map__15263_15273__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_15274);

cljs.compiler.emitln.call(null," = ",init_15275,";");


var G__15276 = seq__15259_15268;
var G__15277 = chunk__15260_15269;
var G__15278 = count__15261_15270;
var G__15279 = (i__15262_15271 + (1));
seq__15259_15268 = G__15276;
chunk__15260_15269 = G__15277;
count__15261_15270 = G__15278;
i__15262_15271 = G__15279;
continue;
} else {
var temp__5457__auto___15280 = cljs.core.seq.call(null,seq__15259_15268);
if(temp__5457__auto___15280){
var seq__15259_15281__$1 = temp__5457__auto___15280;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15259_15281__$1)){
var c__4351__auto___15282 = cljs.core.chunk_first.call(null,seq__15259_15281__$1);
var G__15283 = cljs.core.chunk_rest.call(null,seq__15259_15281__$1);
var G__15284 = c__4351__auto___15282;
var G__15285 = cljs.core.count.call(null,c__4351__auto___15282);
var G__15286 = (0);
seq__15259_15268 = G__15283;
chunk__15260_15269 = G__15284;
count__15261_15270 = G__15285;
i__15262_15271 = G__15286;
continue;
} else {
var map__15265_15287 = cljs.core.first.call(null,seq__15259_15281__$1);
var map__15265_15288__$1 = ((((!((map__15265_15287 == null)))?(((((map__15265_15287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15265_15287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15265_15287):map__15265_15287);
var binding_15289 = map__15265_15288__$1;
var init_15290 = cljs.core.get.call(null,map__15265_15288__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_15289);

cljs.compiler.emitln.call(null," = ",init_15290,";");


var G__15291 = cljs.core.next.call(null,seq__15259_15281__$1);
var G__15292 = null;
var G__15293 = (0);
var G__15294 = (0);
seq__15259_15268 = G__15291;
chunk__15260_15269 = G__15292;
count__15261_15270 = G__15293;
i__15262_15271 = G__15294;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_15258_15267;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__15295){
var map__15296 = p__15295;
var map__15296__$1 = ((((!((map__15296 == null)))?(((((map__15296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15296):map__15296);
var frame = cljs.core.get.call(null,map__15296__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__15296__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__15296__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4408__auto___15298 = cljs.core.count.call(null,exprs);
var i_15299 = (0);
while(true){
if((i_15299 < n__4408__auto___15298)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_15299)," = ",exprs.call(null,i_15299),";");

var G__15300 = (i_15299 + (1));
i_15299 = G__15300;
continue;
} else {
}
break;
}

var n__4408__auto___15301 = cljs.core.count.call(null,exprs);
var i_15302 = (0);
while(true){
if((i_15302 < n__4408__auto___15301)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_15302))," = ",temps.call(null,i_15302),";");

var G__15303 = (i_15302 + (1));
i_15302 = G__15303;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__15304){
var map__15305 = p__15304;
var map__15305__$1 = ((((!((map__15305 == null)))?(((((map__15305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15305):map__15305);
var bindings = cljs.core.get.call(null,map__15305__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__15305__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__15305__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__15307_15315 = cljs.core.seq.call(null,bindings);
var chunk__15308_15316 = null;
var count__15309_15317 = (0);
var i__15310_15318 = (0);
while(true){
if((i__15310_15318 < count__15309_15317)){
var map__15311_15319 = cljs.core._nth.call(null,chunk__15308_15316,i__15310_15318);
var map__15311_15320__$1 = ((((!((map__15311_15319 == null)))?(((((map__15311_15319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15311_15319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15311_15319):map__15311_15319);
var binding_15321 = map__15311_15320__$1;
var init_15322 = cljs.core.get.call(null,map__15311_15320__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_15321)," = ",init_15322,";");


var G__15323 = seq__15307_15315;
var G__15324 = chunk__15308_15316;
var G__15325 = count__15309_15317;
var G__15326 = (i__15310_15318 + (1));
seq__15307_15315 = G__15323;
chunk__15308_15316 = G__15324;
count__15309_15317 = G__15325;
i__15310_15318 = G__15326;
continue;
} else {
var temp__5457__auto___15327 = cljs.core.seq.call(null,seq__15307_15315);
if(temp__5457__auto___15327){
var seq__15307_15328__$1 = temp__5457__auto___15327;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15307_15328__$1)){
var c__4351__auto___15329 = cljs.core.chunk_first.call(null,seq__15307_15328__$1);
var G__15330 = cljs.core.chunk_rest.call(null,seq__15307_15328__$1);
var G__15331 = c__4351__auto___15329;
var G__15332 = cljs.core.count.call(null,c__4351__auto___15329);
var G__15333 = (0);
seq__15307_15315 = G__15330;
chunk__15308_15316 = G__15331;
count__15309_15317 = G__15332;
i__15310_15318 = G__15333;
continue;
} else {
var map__15313_15334 = cljs.core.first.call(null,seq__15307_15328__$1);
var map__15313_15335__$1 = ((((!((map__15313_15334 == null)))?(((((map__15313_15334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15313_15334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15313_15334):map__15313_15334);
var binding_15336 = map__15313_15335__$1;
var init_15337 = cljs.core.get.call(null,map__15313_15335__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_15336)," = ",init_15337,";");


var G__15338 = cljs.core.next.call(null,seq__15307_15328__$1);
var G__15339 = null;
var G__15340 = (0);
var G__15341 = (0);
seq__15307_15315 = G__15338;
chunk__15308_15316 = G__15339;
count__15309_15317 = G__15340;
i__15310_15318 = G__15341;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__15344){
var map__15345 = p__15344;
var map__15345__$1 = ((((!((map__15345 == null)))?(((((map__15345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15345):map__15345);
var expr = map__15345__$1;
var f = cljs.core.get.call(null,map__15345__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__15345__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__15345__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__15347 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15345,map__15345__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15345,map__15345__$1,expr,f,args,env){
return (function (p1__15342_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__15342_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15345,map__15345__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15345,map__15345__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15345,map__15345__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15345,map__15345__$1,expr,f,args,env){
return (function (p1__15343_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__15343_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15345,map__15345__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15345,map__15345__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__15347,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__15347,(1),null);
var env__13428__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_15350 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_15350,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_15351 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_15351,args)),(((mfa_15351 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_15351,args)),"], 0))");
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
var fprop_15352 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.analyzer._STAR_fn_invoke_direct_STAR_){
cljs.compiler.emits.call(null,"(",f__$1,fprop_15352," ? ",f__$1,fprop_15352,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_15352," ? ",f__$1,fprop_15352,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__15353){
var map__15354 = p__15353;
var map__15354__$1 = ((((!((map__15354 == null)))?(((((map__15354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15354):map__15354);
var ctor = cljs.core.get.call(null,map__15354__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__15354__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__15354__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13428__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__15356){
var map__15357 = p__15356;
var map__15357__$1 = ((((!((map__15357 == null)))?(((((map__15357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15357):map__15357);
var target = cljs.core.get.call(null,map__15357__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__15357__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__15357__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13428__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__15359 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__15359__$1 = ((((!((map__15359 == null)))?(((((map__15359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15359):map__15359);
var options = cljs.core.get.call(null,map__15359__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__15359__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__15360 = options;
var map__15360__$1 = ((((!((map__15360 == null)))?(((((map__15360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15360):map__15360);
var target = cljs.core.get.call(null,map__15360__$1,new cljs.core.Keyword(null,"target","target",253001721));
var optimizations = cljs.core.get.call(null,map__15360__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__15361 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__15366 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__15366__$1 = ((((!((map__15366 == null)))?(((((map__15366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15366):map__15366);
var node_libs = cljs.core.get.call(null,map__15366__$1,true);
var libs_to_load = cljs.core.get.call(null,map__15366__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__15361,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__15361,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__15368_15384 = cljs.core.seq.call(null,libs_to_load);
var chunk__15369_15385 = null;
var count__15370_15386 = (0);
var i__15371_15387 = (0);
while(true){
if((i__15371_15387 < count__15370_15386)){
var lib_15388 = cljs.core._nth.call(null,chunk__15369_15385,i__15371_15387);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_15388)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_15388),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15388),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_15388),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15388),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_15388,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15388),"');");
}

}
}
}


var G__15389 = seq__15368_15384;
var G__15390 = chunk__15369_15385;
var G__15391 = count__15370_15386;
var G__15392 = (i__15371_15387 + (1));
seq__15368_15384 = G__15389;
chunk__15369_15385 = G__15390;
count__15370_15386 = G__15391;
i__15371_15387 = G__15392;
continue;
} else {
var temp__5457__auto___15393 = cljs.core.seq.call(null,seq__15368_15384);
if(temp__5457__auto___15393){
var seq__15368_15394__$1 = temp__5457__auto___15393;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15368_15394__$1)){
var c__4351__auto___15395 = cljs.core.chunk_first.call(null,seq__15368_15394__$1);
var G__15396 = cljs.core.chunk_rest.call(null,seq__15368_15394__$1);
var G__15397 = c__4351__auto___15395;
var G__15398 = cljs.core.count.call(null,c__4351__auto___15395);
var G__15399 = (0);
seq__15368_15384 = G__15396;
chunk__15369_15385 = G__15397;
count__15370_15386 = G__15398;
i__15371_15387 = G__15399;
continue;
} else {
var lib_15400 = cljs.core.first.call(null,seq__15368_15394__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_15400)) && (!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478)))))){
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_15400),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15400),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_15400),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15400),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_15400,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_15400),"');");
}

}
}
}


var G__15401 = cljs.core.next.call(null,seq__15368_15394__$1);
var G__15402 = null;
var G__15403 = (0);
var G__15404 = (0);
seq__15368_15384 = G__15401;
chunk__15369_15385 = G__15402;
count__15370_15386 = G__15403;
i__15371_15387 = G__15404;
continue;
}
} else {
}
}
break;
}

var seq__15372_15405 = cljs.core.seq.call(null,node_libs);
var chunk__15373_15406 = null;
var count__15374_15407 = (0);
var i__15375_15408 = (0);
while(true){
if((i__15375_15408 < count__15374_15407)){
var lib_15409 = cljs.core._nth.call(null,chunk__15373_15406,i__15375_15408);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_15409)," = require('",lib_15409,"');");


var G__15410 = seq__15372_15405;
var G__15411 = chunk__15373_15406;
var G__15412 = count__15374_15407;
var G__15413 = (i__15375_15408 + (1));
seq__15372_15405 = G__15410;
chunk__15373_15406 = G__15411;
count__15374_15407 = G__15412;
i__15375_15408 = G__15413;
continue;
} else {
var temp__5457__auto___15414 = cljs.core.seq.call(null,seq__15372_15405);
if(temp__5457__auto___15414){
var seq__15372_15415__$1 = temp__5457__auto___15414;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15372_15415__$1)){
var c__4351__auto___15416 = cljs.core.chunk_first.call(null,seq__15372_15415__$1);
var G__15417 = cljs.core.chunk_rest.call(null,seq__15372_15415__$1);
var G__15418 = c__4351__auto___15416;
var G__15419 = cljs.core.count.call(null,c__4351__auto___15416);
var G__15420 = (0);
seq__15372_15405 = G__15417;
chunk__15373_15406 = G__15418;
count__15374_15407 = G__15419;
i__15375_15408 = G__15420;
continue;
} else {
var lib_15421 = cljs.core.first.call(null,seq__15372_15415__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_15421)," = require('",lib_15421,"');");


var G__15422 = cljs.core.next.call(null,seq__15372_15415__$1);
var G__15423 = null;
var G__15424 = (0);
var G__15425 = (0);
seq__15372_15405 = G__15422;
chunk__15373_15406 = G__15423;
count__15374_15407 = G__15424;
i__15375_15408 = G__15425;
continue;
}
} else {
}
}
break;
}

var seq__15376_15426 = cljs.core.seq.call(null,global_exports_libs);
var chunk__15377_15427 = null;
var count__15378_15428 = (0);
var i__15379_15429 = (0);
while(true){
if((i__15379_15429 < count__15378_15428)){
var lib_15430 = cljs.core._nth.call(null,chunk__15377_15427,i__15379_15429);
var map__15380_15431 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_15430));
var map__15380_15432__$1 = ((((!((map__15380_15431 == null)))?(((((map__15380_15431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15380_15431.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15380_15431):map__15380_15431);
var global_exports_15433 = cljs.core.get.call(null,map__15380_15432__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_15430)," = goog.global[\"",cljs.core.get.call(null,global_exports_15433,cljs.core.symbol.call(null,lib_15430)),"\"];");


var G__15434 = seq__15376_15426;
var G__15435 = chunk__15377_15427;
var G__15436 = count__15378_15428;
var G__15437 = (i__15379_15429 + (1));
seq__15376_15426 = G__15434;
chunk__15377_15427 = G__15435;
count__15378_15428 = G__15436;
i__15379_15429 = G__15437;
continue;
} else {
var temp__5457__auto___15438 = cljs.core.seq.call(null,seq__15376_15426);
if(temp__5457__auto___15438){
var seq__15376_15439__$1 = temp__5457__auto___15438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15376_15439__$1)){
var c__4351__auto___15440 = cljs.core.chunk_first.call(null,seq__15376_15439__$1);
var G__15441 = cljs.core.chunk_rest.call(null,seq__15376_15439__$1);
var G__15442 = c__4351__auto___15440;
var G__15443 = cljs.core.count.call(null,c__4351__auto___15440);
var G__15444 = (0);
seq__15376_15426 = G__15441;
chunk__15377_15427 = G__15442;
count__15378_15428 = G__15443;
i__15379_15429 = G__15444;
continue;
} else {
var lib_15445 = cljs.core.first.call(null,seq__15376_15439__$1);
var map__15382_15446 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_15445));
var map__15382_15447__$1 = ((((!((map__15382_15446 == null)))?(((((map__15382_15446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15382_15446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15382_15446):map__15382_15446);
var global_exports_15448 = cljs.core.get.call(null,map__15382_15447__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib_15445)," = goog.global[\"",cljs.core.get.call(null,global_exports_15448,cljs.core.symbol.call(null,lib_15445)),"\"];");


var G__15449 = cljs.core.next.call(null,seq__15376_15439__$1);
var G__15450 = null;
var G__15451 = (0);
var G__15452 = (0);
seq__15376_15426 = G__15449;
chunk__15377_15427 = G__15450;
count__15378_15428 = G__15451;
i__15379_15429 = G__15452;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__15453){
var map__15454 = p__15453;
var map__15454__$1 = ((((!((map__15454 == null)))?(((((map__15454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15454):map__15454);
var name = cljs.core.get.call(null,map__15454__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__15454__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__15454__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__15454__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__15454__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__15454__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__15454__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"null;");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__15456){
var map__15457 = p__15456;
var map__15457__$1 = ((((!((map__15457 == null)))?(((((map__15457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15457):map__15457);
var name = cljs.core.get.call(null,map__15457__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__15457__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__15457__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__15457__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__15457__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__15457__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__15457__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__15459){
var map__15460 = p__15459;
var map__15460__$1 = ((((!((map__15460 == null)))?(((((map__15460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15460):map__15460);
var t = cljs.core.get.call(null,map__15460__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__15460__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__15460__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__15460__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__15460__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__15462_15480 = cljs.core.seq.call(null,protocols);
var chunk__15463_15481 = null;
var count__15464_15482 = (0);
var i__15465_15483 = (0);
while(true){
if((i__15465_15483 < count__15464_15482)){
var protocol_15484 = cljs.core._nth.call(null,chunk__15463_15481,i__15465_15483);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_15484)].join('')),"}");


var G__15485 = seq__15462_15480;
var G__15486 = chunk__15463_15481;
var G__15487 = count__15464_15482;
var G__15488 = (i__15465_15483 + (1));
seq__15462_15480 = G__15485;
chunk__15463_15481 = G__15486;
count__15464_15482 = G__15487;
i__15465_15483 = G__15488;
continue;
} else {
var temp__5457__auto___15489 = cljs.core.seq.call(null,seq__15462_15480);
if(temp__5457__auto___15489){
var seq__15462_15490__$1 = temp__5457__auto___15489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15462_15490__$1)){
var c__4351__auto___15491 = cljs.core.chunk_first.call(null,seq__15462_15490__$1);
var G__15492 = cljs.core.chunk_rest.call(null,seq__15462_15490__$1);
var G__15493 = c__4351__auto___15491;
var G__15494 = cljs.core.count.call(null,c__4351__auto___15491);
var G__15495 = (0);
seq__15462_15480 = G__15492;
chunk__15463_15481 = G__15493;
count__15464_15482 = G__15494;
i__15465_15483 = G__15495;
continue;
} else {
var protocol_15496 = cljs.core.first.call(null,seq__15462_15490__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_15496)].join('')),"}");


var G__15497 = cljs.core.next.call(null,seq__15462_15490__$1);
var G__15498 = null;
var G__15499 = (0);
var G__15500 = (0);
seq__15462_15480 = G__15497;
chunk__15463_15481 = G__15498;
count__15464_15482 = G__15499;
i__15465_15483 = G__15500;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__15466_15501 = cljs.core.seq.call(null,fields__$1);
var chunk__15467_15502 = null;
var count__15468_15503 = (0);
var i__15469_15504 = (0);
while(true){
if((i__15469_15504 < count__15468_15503)){
var fld_15505 = cljs.core._nth.call(null,chunk__15467_15502,i__15469_15504);
cljs.compiler.emitln.call(null,"this.",fld_15505," = ",fld_15505,";");


var G__15506 = seq__15466_15501;
var G__15507 = chunk__15467_15502;
var G__15508 = count__15468_15503;
var G__15509 = (i__15469_15504 + (1));
seq__15466_15501 = G__15506;
chunk__15467_15502 = G__15507;
count__15468_15503 = G__15508;
i__15469_15504 = G__15509;
continue;
} else {
var temp__5457__auto___15510 = cljs.core.seq.call(null,seq__15466_15501);
if(temp__5457__auto___15510){
var seq__15466_15511__$1 = temp__5457__auto___15510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15466_15511__$1)){
var c__4351__auto___15512 = cljs.core.chunk_first.call(null,seq__15466_15511__$1);
var G__15513 = cljs.core.chunk_rest.call(null,seq__15466_15511__$1);
var G__15514 = c__4351__auto___15512;
var G__15515 = cljs.core.count.call(null,c__4351__auto___15512);
var G__15516 = (0);
seq__15466_15501 = G__15513;
chunk__15467_15502 = G__15514;
count__15468_15503 = G__15515;
i__15469_15504 = G__15516;
continue;
} else {
var fld_15517 = cljs.core.first.call(null,seq__15466_15511__$1);
cljs.compiler.emitln.call(null,"this.",fld_15517," = ",fld_15517,";");


var G__15518 = cljs.core.next.call(null,seq__15466_15511__$1);
var G__15519 = null;
var G__15520 = (0);
var G__15521 = (0);
seq__15466_15501 = G__15518;
chunk__15467_15502 = G__15519;
count__15468_15503 = G__15520;
i__15469_15504 = G__15521;
continue;
}
} else {
}
}
break;
}

var seq__15470_15522 = cljs.core.seq.call(null,pmasks);
var chunk__15471_15523 = null;
var count__15472_15524 = (0);
var i__15473_15525 = (0);
while(true){
if((i__15473_15525 < count__15472_15524)){
var vec__15474_15526 = cljs.core._nth.call(null,chunk__15471_15523,i__15473_15525);
var pno_15527 = cljs.core.nth.call(null,vec__15474_15526,(0),null);
var pmask_15528 = cljs.core.nth.call(null,vec__15474_15526,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_15527,"$ = ",pmask_15528,";");


var G__15529 = seq__15470_15522;
var G__15530 = chunk__15471_15523;
var G__15531 = count__15472_15524;
var G__15532 = (i__15473_15525 + (1));
seq__15470_15522 = G__15529;
chunk__15471_15523 = G__15530;
count__15472_15524 = G__15531;
i__15473_15525 = G__15532;
continue;
} else {
var temp__5457__auto___15533 = cljs.core.seq.call(null,seq__15470_15522);
if(temp__5457__auto___15533){
var seq__15470_15534__$1 = temp__5457__auto___15533;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15470_15534__$1)){
var c__4351__auto___15535 = cljs.core.chunk_first.call(null,seq__15470_15534__$1);
var G__15536 = cljs.core.chunk_rest.call(null,seq__15470_15534__$1);
var G__15537 = c__4351__auto___15535;
var G__15538 = cljs.core.count.call(null,c__4351__auto___15535);
var G__15539 = (0);
seq__15470_15522 = G__15536;
chunk__15471_15523 = G__15537;
count__15472_15524 = G__15538;
i__15473_15525 = G__15539;
continue;
} else {
var vec__15477_15540 = cljs.core.first.call(null,seq__15470_15534__$1);
var pno_15541 = cljs.core.nth.call(null,vec__15477_15540,(0),null);
var pmask_15542 = cljs.core.nth.call(null,vec__15477_15540,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_15541,"$ = ",pmask_15542,";");


var G__15543 = cljs.core.next.call(null,seq__15470_15534__$1);
var G__15544 = null;
var G__15545 = (0);
var G__15546 = (0);
seq__15470_15522 = G__15543;
chunk__15471_15523 = G__15544;
count__15472_15524 = G__15545;
i__15473_15525 = G__15546;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__15547){
var map__15548 = p__15547;
var map__15548__$1 = ((((!((map__15548 == null)))?(((((map__15548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15548):map__15548);
var t = cljs.core.get.call(null,map__15548__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__15548__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__15548__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__15548__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__15548__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__15550_15568 = cljs.core.seq.call(null,protocols);
var chunk__15551_15569 = null;
var count__15552_15570 = (0);
var i__15553_15571 = (0);
while(true){
if((i__15553_15571 < count__15552_15570)){
var protocol_15572 = cljs.core._nth.call(null,chunk__15551_15569,i__15553_15571);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_15572)].join('')),"}");


var G__15573 = seq__15550_15568;
var G__15574 = chunk__15551_15569;
var G__15575 = count__15552_15570;
var G__15576 = (i__15553_15571 + (1));
seq__15550_15568 = G__15573;
chunk__15551_15569 = G__15574;
count__15552_15570 = G__15575;
i__15553_15571 = G__15576;
continue;
} else {
var temp__5457__auto___15577 = cljs.core.seq.call(null,seq__15550_15568);
if(temp__5457__auto___15577){
var seq__15550_15578__$1 = temp__5457__auto___15577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15550_15578__$1)){
var c__4351__auto___15579 = cljs.core.chunk_first.call(null,seq__15550_15578__$1);
var G__15580 = cljs.core.chunk_rest.call(null,seq__15550_15578__$1);
var G__15581 = c__4351__auto___15579;
var G__15582 = cljs.core.count.call(null,c__4351__auto___15579);
var G__15583 = (0);
seq__15550_15568 = G__15580;
chunk__15551_15569 = G__15581;
count__15552_15570 = G__15582;
i__15553_15571 = G__15583;
continue;
} else {
var protocol_15584 = cljs.core.first.call(null,seq__15550_15578__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_15584)].join('')),"}");


var G__15585 = cljs.core.next.call(null,seq__15550_15578__$1);
var G__15586 = null;
var G__15587 = (0);
var G__15588 = (0);
seq__15550_15568 = G__15585;
chunk__15551_15569 = G__15586;
count__15552_15570 = G__15587;
i__15553_15571 = G__15588;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__15554_15589 = cljs.core.seq.call(null,fields__$1);
var chunk__15555_15590 = null;
var count__15556_15591 = (0);
var i__15557_15592 = (0);
while(true){
if((i__15557_15592 < count__15556_15591)){
var fld_15593 = cljs.core._nth.call(null,chunk__15555_15590,i__15557_15592);
cljs.compiler.emitln.call(null,"this.",fld_15593," = ",fld_15593,";");


var G__15594 = seq__15554_15589;
var G__15595 = chunk__15555_15590;
var G__15596 = count__15556_15591;
var G__15597 = (i__15557_15592 + (1));
seq__15554_15589 = G__15594;
chunk__15555_15590 = G__15595;
count__15556_15591 = G__15596;
i__15557_15592 = G__15597;
continue;
} else {
var temp__5457__auto___15598 = cljs.core.seq.call(null,seq__15554_15589);
if(temp__5457__auto___15598){
var seq__15554_15599__$1 = temp__5457__auto___15598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15554_15599__$1)){
var c__4351__auto___15600 = cljs.core.chunk_first.call(null,seq__15554_15599__$1);
var G__15601 = cljs.core.chunk_rest.call(null,seq__15554_15599__$1);
var G__15602 = c__4351__auto___15600;
var G__15603 = cljs.core.count.call(null,c__4351__auto___15600);
var G__15604 = (0);
seq__15554_15589 = G__15601;
chunk__15555_15590 = G__15602;
count__15556_15591 = G__15603;
i__15557_15592 = G__15604;
continue;
} else {
var fld_15605 = cljs.core.first.call(null,seq__15554_15599__$1);
cljs.compiler.emitln.call(null,"this.",fld_15605," = ",fld_15605,";");


var G__15606 = cljs.core.next.call(null,seq__15554_15599__$1);
var G__15607 = null;
var G__15608 = (0);
var G__15609 = (0);
seq__15554_15589 = G__15606;
chunk__15555_15590 = G__15607;
count__15556_15591 = G__15608;
i__15557_15592 = G__15609;
continue;
}
} else {
}
}
break;
}

var seq__15558_15610 = cljs.core.seq.call(null,pmasks);
var chunk__15559_15611 = null;
var count__15560_15612 = (0);
var i__15561_15613 = (0);
while(true){
if((i__15561_15613 < count__15560_15612)){
var vec__15562_15614 = cljs.core._nth.call(null,chunk__15559_15611,i__15561_15613);
var pno_15615 = cljs.core.nth.call(null,vec__15562_15614,(0),null);
var pmask_15616 = cljs.core.nth.call(null,vec__15562_15614,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_15615,"$ = ",pmask_15616,";");


var G__15617 = seq__15558_15610;
var G__15618 = chunk__15559_15611;
var G__15619 = count__15560_15612;
var G__15620 = (i__15561_15613 + (1));
seq__15558_15610 = G__15617;
chunk__15559_15611 = G__15618;
count__15560_15612 = G__15619;
i__15561_15613 = G__15620;
continue;
} else {
var temp__5457__auto___15621 = cljs.core.seq.call(null,seq__15558_15610);
if(temp__5457__auto___15621){
var seq__15558_15622__$1 = temp__5457__auto___15621;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15558_15622__$1)){
var c__4351__auto___15623 = cljs.core.chunk_first.call(null,seq__15558_15622__$1);
var G__15624 = cljs.core.chunk_rest.call(null,seq__15558_15622__$1);
var G__15625 = c__4351__auto___15623;
var G__15626 = cljs.core.count.call(null,c__4351__auto___15623);
var G__15627 = (0);
seq__15558_15610 = G__15624;
chunk__15559_15611 = G__15625;
count__15560_15612 = G__15626;
i__15561_15613 = G__15627;
continue;
} else {
var vec__15565_15628 = cljs.core.first.call(null,seq__15558_15622__$1);
var pno_15629 = cljs.core.nth.call(null,vec__15565_15628,(0),null);
var pmask_15630 = cljs.core.nth.call(null,vec__15565_15628,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_15629,"$ = ",pmask_15630,";");


var G__15631 = cljs.core.next.call(null,seq__15558_15622__$1);
var G__15632 = null;
var G__15633 = (0);
var G__15634 = (0);
seq__15558_15610 = G__15631;
chunk__15559_15611 = G__15632;
count__15560_15612 = G__15633;
i__15561_15613 = G__15634;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__15635){
var map__15636 = p__15635;
var map__15636__$1 = ((((!((map__15636 == null)))?(((((map__15636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15636):map__15636);
var target = cljs.core.get.call(null,map__15636__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__15636__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__15636__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__15636__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__15636__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__13428__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__15638){
var map__15639 = p__15638;
var map__15639__$1 = ((((!((map__15639 == null)))?(((((map__15639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15639):map__15639);
var op = cljs.core.get.call(null,map__15639__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__15639__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__15639__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__15639__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__15639__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__3938__auto__ = code;
if(cljs.core.truth_(and__3938__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__3938__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__13428__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__13428__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__15644 = cljs.core.seq.call(null,table);
var chunk__15645 = null;
var count__15646 = (0);
var i__15647 = (0);
while(true){
if((i__15647 < count__15646)){
var vec__15648 = cljs.core._nth.call(null,chunk__15645,i__15647);
var sym = cljs.core.nth.call(null,vec__15648,(0),null);
var value = cljs.core.nth.call(null,vec__15648,(1),null);
var ns_15654 = cljs.core.namespace.call(null,sym);
var name_15655 = cljs.core.name.call(null,sym);
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


var G__15656 = seq__15644;
var G__15657 = chunk__15645;
var G__15658 = count__15646;
var G__15659 = (i__15647 + (1));
seq__15644 = G__15656;
chunk__15645 = G__15657;
count__15646 = G__15658;
i__15647 = G__15659;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__15644);
if(temp__5457__auto__){
var seq__15644__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15644__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__15644__$1);
var G__15660 = cljs.core.chunk_rest.call(null,seq__15644__$1);
var G__15661 = c__4351__auto__;
var G__15662 = cljs.core.count.call(null,c__4351__auto__);
var G__15663 = (0);
seq__15644 = G__15660;
chunk__15645 = G__15661;
count__15646 = G__15662;
i__15647 = G__15663;
continue;
} else {
var vec__15651 = cljs.core.first.call(null,seq__15644__$1);
var sym = cljs.core.nth.call(null,vec__15651,(0),null);
var value = cljs.core.nth.call(null,vec__15651,(1),null);
var ns_15664 = cljs.core.namespace.call(null,sym);
var name_15665 = cljs.core.name.call(null,sym);
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


var G__15666 = cljs.core.next.call(null,seq__15644__$1);
var G__15667 = null;
var G__15668 = (0);
var G__15669 = (0);
seq__15644 = G__15666;
chunk__15645 = G__15667;
count__15646 = G__15668;
i__15647 = G__15669;
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
var G__15671 = arguments.length;
switch (G__15671) {
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
var k_15676 = cljs.core.first.call(null,ks);
var vec__15672_15677 = cljs.core.conj.call(null,prefix,k_15676);
var top_15678 = cljs.core.nth.call(null,vec__15672_15677,(0),null);
var prefix_SINGLEQUOTE__15679 = vec__15672_15677;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_15676)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__15679) == null)))){
if(!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_15678)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_15678))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__15679)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_15678);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__15679)),";");
}
} else {
}

var m_15680 = cljs.core.get.call(null,externs,k_15676);
if(cljs.core.empty_QMARK_.call(null,m_15680)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__15679,m_15680,top_level,known_externs);
}

var G__15681 = cljs.core.next.call(null,ks);
ks = G__15681;
continue;
} else {
return null;
}
break;
}
});

cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=compiler.js.map
