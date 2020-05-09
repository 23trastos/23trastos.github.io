// Compiled by ClojureScript 1.10.339 {}
goog.provide('replica.editor');
goog.require('cljs.core');
goog.require('cljsjs.codemirror');
goog.require('cljsjs.codemirror.addon.search.searchcursor');
goog.require('cljsjs.codemirror.addon.dialog.dialog');
goog.require('cljsjs.codemirror.mode.clojure');
goog.require('cljsjs.codemirror.addon.edit.matchbrackets');
goog.require('cljsjs.codemirror.addon.edit.closebrackets');
goog.require('replica.utils');
if((typeof replica !== 'undefined') && (typeof replica.editor !== 'undefined') && (typeof replica.editor.cm !== 'undefined')){
} else {
replica.editor.cm = CodeMirror.fromTextArea(document.getElementById("code"),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),true,new cljs.core.Keyword(null,"mode","mode",654403691),"clojure",new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),true], null)));
}
CM = replica.editor.cm;
replica.utils.set_info_BANG_.call(null,"CodeMirror loaded");
if((typeof replica !== 'undefined') && (typeof replica.editor !== 'undefined') && (typeof replica.editor.search !== 'undefined')){
} else {
replica.editor.search = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),null,new cljs.core.Keyword(null,"cursor","cursor",1011937484),null], null));
}
replica.editor.untab = (function replica$editor$untab(s){
return s.replace((new RegExp(/\s\s+/,new cljs.core.Symbol(null,"g","g",-916345864,null)))," ").trim();
});
/**
 * Retrieves all the content from the CodeMirror editor as a string.
 */
replica.editor.rd = (function replica$editor$rd(var_args){
var G__19568 = arguments.length;
switch (G__19568) {
case 0:
return replica.editor.rd.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return replica.editor.rd.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replica.editor.rd.cljs$core$IFn$_invoke$arity$0 = (function (){
return replica.editor.rd.call(null," ");
});

replica.editor.rd.cljs$core$IFn$_invoke$arity$1 = (function (split_line_with_str){
return replica.editor.untab.call(null,replica.editor.cm.getValue(split_line_with_str));
});

replica.editor.rd.cljs$lang$maxFixedArity = 1;

/**
 * Sets the content of the CodeMirror editor.
 */
replica.editor.s_BANG_ = (function replica$editor$s_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19571 = arguments.length;
var i__4532__auto___19572 = (0);
while(true){
if((i__4532__auto___19572 < len__4531__auto___19571)){
args__4534__auto__.push((arguments[i__4532__auto___19572]));

var G__19573 = (i__4532__auto___19572 + (1));
i__4532__auto___19572 = G__19573;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return replica.editor.s_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

replica.editor.s_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return replica.editor.cm.setValue(cljs.core.apply.call(null,cljs.core.str,values));
});

replica.editor.s_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
replica.editor.s_BANG_.cljs$lang$applyTo = (function (seq19570){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19570));
});

/**
 * Replaces part of the content of the editor.
 */
replica.editor.rplc_BANG_ = (function replica$editor$rplc_BANG_(var_args){
var G__19575 = arguments.length;
switch (G__19575) {
case 2:
return replica.editor.rplc_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return replica.editor.rplc_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return replica.editor.rplc_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replica.editor.rplc_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (string,line){
return replica.editor.rplc_BANG_.call(null,string,line,line);
});

replica.editor.rplc_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (string,start_line,end_line){
return replica.editor.rplc_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(string),"\n"].join(''),start_line,(0),end_line,(0));
});

replica.editor.rplc_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (string,start_line,start_char,end_line,end_char){
return replica.editor.cm.replaceRange(string,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),(start_line - (1)),new cljs.core.Keyword(null,"ch","ch",-554717905),start_char], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),end_line,new cljs.core.Keyword(null,"ch","ch",-554717905),end_char], null)));
});

replica.editor.rplc_BANG_.cljs$lang$maxFixedArity = 5;

/**
 * Kills lines.
 */
replica.editor.kl_BANG_ = (function replica$editor$kl_BANG_(var_args){
var G__19578 = arguments.length;
switch (G__19578) {
case 1:
return replica.editor.kl_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replica.editor.kl_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replica.editor.kl_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (line){
return replica.editor.kl_BANG_.call(null,line,line);
});

replica.editor.kl_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (start_line,end_line){
return replica.editor.rplc_BANG_.call(null,"",start_line,(0),end_line,(0));
});

replica.editor.kl_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Reads lines from code editor.
 */
replica.editor.r = (function replica$editor$r(var_args){
var G__19581 = arguments.length;
switch (G__19581) {
case 0:
return replica.editor.r.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return replica.editor.r.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replica.editor.r.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return replica.editor.r.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return replica.editor.r.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return replica.editor.r.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replica.editor.r.cljs$core$IFn$_invoke$arity$0 = (function (){
return replica.editor.rd.call(null);
});

replica.editor.r.cljs$core$IFn$_invoke$arity$1 = (function (line){
return replica.editor.cm.getLine((line - (1)));
});

replica.editor.r.cljs$core$IFn$_invoke$arity$2 = (function (start_line,end_line){
return replica.editor.r.call(null,start_line,end_line," ");
});

replica.editor.r.cljs$core$IFn$_invoke$arity$3 = (function (start_line,end_line,split_line_with_str){
return replica.editor.r.call(null,start_line,(0),end_line,(0),split_line_with_str);
});

replica.editor.r.cljs$core$IFn$_invoke$arity$4 = (function (start_line,start_char,end_line,end_char){
return replica.editor.r.call(null,start_line,start_char,end_line,end_char," ");
});

replica.editor.r.cljs$core$IFn$_invoke$arity$5 = (function (start_line,start_char,end_line,end_char,split_line_with_str){
return replica.editor.untab.call(null,replica.editor.cm.getRange(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),(start_line - (1)),new cljs.core.Keyword(null,"ch","ch",-554717905),start_char], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),end_line,new cljs.core.Keyword(null,"ch","ch",-554717905),end_char], null)),split_line_with_str));
});

replica.editor.r.cljs$lang$maxFixedArity = 5;

/**
 * Iterates over eachLine with a function [line-number text].
 */
replica.editor.itl = (function replica$editor$itl(var_args){
var G__19584 = arguments.length;
switch (G__19584) {
case 1:
return replica.editor.itl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return replica.editor.itl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replica.editor.itl.cljs$core$IFn$_invoke$arity$1 = (function (function$){
return replica.editor.cm.eachLine((function (lh){
return function$.call(null,(replica.editor.cm.getLineNumber(lh) + (1)),lh.text);
}));
});

replica.editor.itl.cljs$core$IFn$_invoke$arity$3 = (function (start_line,end_line,function$){
return replica.editor.cm.eachLine((start_line - (1)),end_line,(function (lh){
return function$.call(null,(replica.editor.cm.getLineNumber(lh) + (1)),lh.text);
}));
});

replica.editor.itl.cljs$lang$maxFixedArity = 3;

/**
 * Returns nil or the next {:from {:line :ch} :to {:line :ch}} matching the provided regexp. It will ignore any line containing a regexp definition in the form #"...
 */
replica.editor.where = (function replica$editor$where(regexp){
if(cljs.core._EQ_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replica.editor.search)))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(regexp)].join(''))){
} else {
cljs.core.reset_BANG_.call(null,replica.editor.search,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),regexp,new cljs.core.Keyword(null,"cursor","cursor",1011937484),replica.editor.cm.getSearchCursor(regexp)], null));
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"cursor","cursor",1011937484).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replica.editor.search)).findNext())){
var from = new cljs.core.Keyword(null,"cursor","cursor",1011937484).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replica.editor.search)).from();
var to = new cljs.core.Keyword(null,"cursor","cursor",1011937484).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replica.editor.search)).to();
if(cljs.core.truth_(cljs.core.re_find.call(null,/'cmd|#\"/,replica.editor.cm.getLine(from.line)))){
return replica.editor.where.call(null,regexp);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),(from.line + (1)),new cljs.core.Keyword(null,"ch","ch",-554717905),from.ch], null),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),(to.line + (1)),new cljs.core.Keyword(null,"ch","ch",-554717905),to.ch], null)], null);
}
} else {
return cljs.core.swap_BANG_.call(null,replica.editor.search,cljs.core.assoc,new cljs.core.Keyword(null,"query","query",-1288509510),null);
}
});
/**
 * Returns nil or the next line (number) matching the provided string or regexp. It will ignore any line containing a regexp definition in the form #"...
 */
replica.editor.whl = (function replica$editor$whl(var_args){
var G__19587 = arguments.length;
switch (G__19587) {
case 1:
return replica.editor.whl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replica.editor.whl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replica.editor.whl.cljs$core$IFn$_invoke$arity$1 = (function (match){
return replica.editor.whl.call(null,match,false);
});

replica.editor.whl.cljs$core$IFn$_invoke$arity$2 = (function (match,only_first_QMARK_){
var regexp = ((cljs.core._EQ_.call(null,cljs.core.type.call(null,match),cljs.core.type.call(null,(new RegExp("")))))?match:cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join('')));
if(cljs.core.truth_(only_first_QMARK_)){
cljs.core.swap_BANG_.call(null,replica.editor.search,new cljs.core.Keyword(null,"query","query",-1288509510),null);
} else {
}

return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(replica.editor.where.call(null,regexp)));
});

replica.editor.whl.cljs$lang$maxFixedArity = 2;

/**
 * Processes lines of the CodeMirror editor as REPL commands. If no argument is provided every line is processed as a separate command. Be aware and happy that you can insert also (cljs code), even call (r ... with args) inside a route. This can generate dangerous and beautiful loops!
 */
replica.editor.p_BANG_ = (function replica$editor$p_BANG_(var_args){
var G__19590 = arguments.length;
switch (G__19590) {
case 0:
return replica.editor.p_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return replica.editor.p_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replica.editor.p_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replica.editor.p_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return replica.editor.p_BANG_.call(null,(1),replica.editor.cm.lineCount());
});

replica.editor.p_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return replica.utils.command_BANG_.call(null,replica.editor.r.call(null,n),false,false);
});

replica.editor.p_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (start_line,end_line){
return cljs.core.map.call(null,replica.editor.p_BANG_,cljs.core.range.call(null,start_line,(end_line + (1))));
});

replica.editor.p_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Bounding Labels are useful! Returns the inner-bound lines (start end) between the two first regexp matches.
 */
replica.editor.bl = (function replica$editor$bl(regexp){
cljs.core.swap_BANG_.call(null,replica.editor.search,cljs.core.assoc,new cljs.core.Keyword(null,"query","query",-1288509510),null);

var start = (replica.editor.whl.call(null,regexp) + (1));
var end = (replica.editor.whl.call(null,regexp) - (1));
return (new cljs.core.List(null,start,(new cljs.core.List(null,end,null,(1),null)),(2),null));
});
/**
 * Reads the lines IN BETWEEN two regexp matches. It will ignore any line containing a regexp definition in the form #"...
 */
replica.editor.rl = (function replica$editor$rl(regexp){
return cljs.core.apply.call(null,replica.editor.r,replica.editor.bl.call(null,regexp));
});
/**
 * Processes the lines IN BETWEEN two regexp matches. It will ignore any line containing a regexp definition in the form #"...
 */
replica.editor.pl_BANG_ = (function replica$editor$pl_BANG_(regexp){
return cljs.core.apply.call(null,replica.editor.p_BANG_,replica.editor.bl.call(null,regexp));
});
/**
 * Loads the full content of the CodeMirror editor and processes it as an entire cljs code file.
 */
replica.editor.l_BANG_ = (function replica$editor$l_BANG_(){
return replica.utils.command_BANG_.call(null,["(do ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(replica.editor.rd.call(null)),")"].join(''));
});
replica.editor.lf_BANG_ = (function replica$editor$lf_BANG_(var_args){
var G__19593 = arguments.length;
switch (G__19593) {
case 1:
return replica.editor.lf_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replica.editor.lf_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replica.editor.lf_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (url){
return replica.editor.lf_BANG_.call(null,url,null);
});

replica.editor.lf_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (url,callback){

return fromUrlToCM(url,callback);
});

replica.editor.lf_BANG_.cljs$lang$maxFixedArity = 2;

replica.editor.routes = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"where","where",-404264438,null),new cljs.core.Symbol(null,"l","l",-1258542346,null),new cljs.core.Symbol(null,"rl","rl",1709558636,null),new cljs.core.Symbol(null,"bl","bl",1648689361,null),new cljs.core.Symbol(null,"rplc","rplc",1680360464,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.Symbol(null,"whl","whl",-1560281257,null),new cljs.core.Symbol(null,"itl","itl",872960054,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"kl","kl",-246253553,null),new cljs.core.Symbol(null,"lf","lf",-730651479,null),new cljs.core.Symbol(null,"rd","rd",1457806895,null)],[new cljs.core.Symbol(null,"where","where",-404264438,null),new cljs.core.Symbol(null,"l!","l!",788782111,null),new cljs.core.Symbol(null,"rl","rl",1709558636,null),new cljs.core.Symbol(null,"bl","bl",1648689361,null),new cljs.core.Symbol(null,"rplc!","rplc!",1634745156,null),new cljs.core.Symbol(null,"pl!","pl!",1425650406,null),new cljs.core.Symbol(null,"p!","p!",1194187378,null),new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.Symbol(null,"whl","whl",-1560281257,null),new cljs.core.Symbol(null,"itl","itl",872960054,null),new cljs.core.Symbol(null,"s!","s!",1444851462,null),new cljs.core.Symbol(null,"kl!","kl!",730058299,null),new cljs.core.Symbol(null,"lf!","lf!",837602460,null),new cljs.core.Symbol(null,"rd","rd",1457806895,null)]);
/**
 * 'e' is a route to the code editor built-in functions inside replica.
 */
replica.editor.e = (function replica$editor$e(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19598 = arguments.length;
var i__4532__auto___19599 = (0);
while(true){
if((i__4532__auto___19599 < len__4531__auto___19598)){
args__4534__auto__.push((arguments[i__4532__auto___19599]));

var G__19600 = (i__4532__auto___19599 + (1));
i__4532__auto___19599 = G__19600;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.editor.e.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.editor.e.cljs$core$IFn$_invoke$arity$variadic = (function (route,args){
var G__19597 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join('');
switch (G__19597) {
case "doc":
return replica.utils.doc_commands.call(null,new cljs.core.Symbol("replica.editor","e","replica.editor/e",-1089389128,null),replica.editor.routes,new cljs.core.Symbol(null,"e","e",-1273166571,null));

break;
default:
return cljs.core.apply.call(null,replica.utils.proc_BANG_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"e","e",-1273166571,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join(''),args);

}
});

replica.editor.e.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.editor.e.cljs$lang$applyTo = (function (seq19595){
var G__19596 = cljs.core.first.call(null,seq19595);
var seq19595__$1 = cljs.core.next.call(null,seq19595);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19596,seq19595__$1);
});

replica.utils.add_routes_BANG_.call(null,new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"replica.editor","replica.editor",2137293831,null),replica.editor.routes);

//# sourceMappingURL=editor.js.map
