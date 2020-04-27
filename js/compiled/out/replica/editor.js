// Compiled by ClojureScript 1.10.339 {}
goog.provide('replica.editor');
goog.require('cljs.core');
goog.require('cljsjs.codemirror');
goog.require('replica.utils');
if((typeof replica !== 'undefined') && (typeof replica.editor !== 'undefined') && (typeof replica.editor.cm !== 'undefined')){
} else {
replica.editor.cm = CodeMirror.fromTextArea(document.getElementById("code"),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),true], null)));
}
if(cljs.core.truth_(replica.editor.cm)){
replica.utils.set_info_BANG_.call(null,"CodeMirror ready!");
} else {
}
/**
 * Retrieves the content from the CodeMirror editor as a string.
 */
replica.editor.rd = (function replica$editor$rd(var_args){
var G__27814 = arguments.length;
switch (G__27814) {
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
return replica.editor.cm.getValue(split_line_with_str);
});

replica.editor.rd.cljs$lang$maxFixedArity = 1;

/**
 * Sets the content of the CodeMirror editor.
 */
replica.editor.s_BANG_ = (function replica$editor$s_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___27817 = arguments.length;
var i__4532__auto___27818 = (0);
while(true){
if((i__4532__auto___27818 < len__4531__auto___27817)){
args__4534__auto__.push((arguments[i__4532__auto___27818]));

var G__27819 = (i__4532__auto___27818 + (1));
i__4532__auto___27818 = G__27819;
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
replica.editor.s_BANG_.cljs$lang$applyTo = (function (seq27816){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27816));
});

/**
 * Reads the editor code from line 'n'
 */
replica.editor.r = (function replica$editor$r(var_args){
var G__27821 = arguments.length;
switch (G__27821) {
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
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replica.editor.r.cljs$core$IFn$_invoke$arity$0 = (function (){
return replica.editor.rd.call(null);
});

replica.editor.r.cljs$core$IFn$_invoke$arity$1 = (function (n){
return replica.editor.cm.getLine((n - (1)));
});

replica.editor.r.cljs$core$IFn$_invoke$arity$2 = (function (start_line,end_line){
return replica.editor.r.call(null,start_line,end_line," ");
});

replica.editor.r.cljs$core$IFn$_invoke$arity$3 = (function (start_line,end_line,split_line_with_str){
return clojure.string.join.call(null,split_line_with_str,cljs.core.map.call(null,replica.editor.r,cljs.core.range.call(null,start_line,(end_line + (1)))));
});

replica.editor.r.cljs$lang$maxFixedArity = 3;

/**
 * Processes lines of the CodeMirror editor as arguments to the r function. If no argument is provided every line is processed as a separate command. Be aware and happy that you can insert also (cljs code), even call (r ... with args) inside a route. This can generate dangerous and beautiful loops!
 */
replica.editor.p_BANG_ = (function replica$editor$p_BANG_(var_args){
var G__27824 = arguments.length;
switch (G__27824) {
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
var line = replica.editor.r.call(null,n);
var G__27825 = cljs.core.subs.call(null,line,(0),(1));
switch (G__27825) {
case "(":
return replica.utils.command_BANG_.call(null,line);

break;
case "'":
return replica.utils.command_BANG_.call(null,["(apply replica.core/r [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"])"].join(''));

break;
default:
return "skip";

}
});

replica.editor.p_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (start_line,end_line){
return cljs.core.map.call(null,replica.editor.p_BANG_,cljs.core.range.call(null,start_line,(end_line + (1))));
});

replica.editor.p_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Loads the full content of the CodeMirror editor and processes it as an entire cljs code file.
 */
replica.editor.l_BANG_ = (function replica$editor$l_BANG_(){
return replica.utils.command_BANG_.call(null,["(do ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(replica.editor.rd.call(null)),")"].join(''));
});
replica.editor.routes = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"rd","rd",1457806895,null),new cljs.core.Symbol(null,"rd","rd",1457806895,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"s!","s!",1444851462,null),new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"p!","p!",1194187378,null),new cljs.core.Symbol(null,"l","l",-1258542346,null),new cljs.core.Symbol(null,"l!","l!",788782111,null)], null);
/**
 * 'e' is a route to the code editor built-in functions inside replica.
 */
replica.editor.e = (function replica$editor$e(var_args){
var args__4534__auto__ = [];
var len__4531__auto___27831 = arguments.length;
var i__4532__auto___27832 = (0);
while(true){
if((i__4532__auto___27832 < len__4531__auto___27831)){
args__4534__auto__.push((arguments[i__4532__auto___27832]));

var G__27833 = (i__4532__auto___27832 + (1));
i__4532__auto___27832 = G__27833;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.editor.e.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.editor.e.cljs$core$IFn$_invoke$arity$variadic = (function (route,args){
var G__27830 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join('');
switch (G__27830) {
case "doc":
return replica.utils.doc_commands.call(null,new cljs.core.Symbol("replica.editor","e","replica.editor/e",-1089389128,null),replica.editor.routes,new cljs.core.Symbol(null,"e","e",-1273166571,null));

break;
default:
return cljs.core.apply.call(null,replica.utils.proc_BANG_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"e","e",-1273166571,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join(''),args);

}
});

replica.editor.e.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.editor.e.cljs$lang$applyTo = (function (seq27828){
var G__27829 = cljs.core.first.call(null,seq27828);
var seq27828__$1 = cljs.core.next.call(null,seq27828);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27829,seq27828__$1);
});

replica.utils.add_routes_BANG_.call(null,new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"replica.editor","replica.editor",2137293831,null),replica.editor.routes);

//# sourceMappingURL=editor.js.map
