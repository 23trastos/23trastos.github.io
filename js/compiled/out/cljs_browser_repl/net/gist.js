// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_browser_repl.net.gist');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljs.pprint');
goog.require('cljs_browser_repl.state');
goog.require('cljs.reader');
/**
 * Retrieves a gist by id. Returns a channel that will be filled with a clj-http
 *   response {:success true :body ...}
 */
cljs_browser_repl.net.gist.get_BANG_ = (function cljs_browser_repl$net$gist$get_BANG_(id){
return cljs_http.client.get.call(null,["https://api.github.com/gists/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null));
});
cljs_browser_repl.net.gist.invalid_gist = (function cljs_browser_repl$net$gist$invalid_gist(gist,err){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_browser_repl.state.to_repl_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(err),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__4462__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_12079_12081 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_12080_12082 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_12079_12081,_STAR_print_fn_STAR_12080_12082,sb__4462__auto__){
return (function (x__4463__auto__){
return sb__4462__auto__.append(x__4463__auto__);
});})(_STAR_print_newline_STAR_12079_12081,_STAR_print_fn_STAR_12080_12082,sb__4462__auto__))
;

try{cljs.pprint.pprint.call(null,gist);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12080_12082;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_12079_12081;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4462__auto__)].join('');
})())].join(''))], null);
});
/**
 * Given a gist it will return a list of commands for the repl to run.
 *   The gist must not be truncated, must have an index.json file.
 */
cljs_browser_repl.net.gist.get_commands = (function cljs_browser_repl$net$gist$get_commands(var_args){
var G__12085 = arguments.length;
switch (G__12085) {
case 1:
return cljs_browser_repl.net.gist.get_commands.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_browser_repl.net.gist.get_commands.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs_browser_repl.net.gist.get_commands.cljs$core$IFn$_invoke$arity$1 = (function (gist){
return cljs_browser_repl.net.gist.get_commands.call(null,gist,"index");
});

cljs_browser_repl.net.gist.get_commands.cljs$core$IFn$_invoke$arity$2 = (function (gist,file_name){
var files = cljs.core.get_in.call(null,gist,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"files","files",-472457450)], null));
var file = (function (){var or__3949__auto__ = cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),".edn"].join('')).call(null,files);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),".json"].join('')).call(null,files);
}
})();
if(cljs.core.truth_((function (){var and__3938__auto__ = file;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"truncated","truncated",298102102).cljs$core$IFn$_invoke$arity$1(file));
} else {
return and__3938__auto__;
}
})())){
var pred__12086 = cljs.core._EQ_;
var expr__12087 = new cljs.core.Keyword(null,"language","language",-1591107564).cljs$core$IFn$_invoke$arity$1(file);
if(cljs.core.truth_(pred__12086.call(null,"edn",expr__12087))){
return cljs.reader.read_string.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(file));
} else {
if(cljs.core.truth_(pred__12086.call(null,"JSON",expr__12087))){
try{return cljs.core.map.call(null,((function (pred__12086,expr__12087,files,file){
return (function (p1__12083_SHARP_){
return cljs.core.assoc.call(null,p1__12083_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__12083_SHARP_)));
});})(pred__12086,expr__12087,files,file))
,cljs.core.js__GT_clj.call(null,JSON.parse(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(file)),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
}catch (e12089){var e = e12089;
return cljs_browser_repl.net.gist.invalid_gist.call(null,gist,e);
}} else {
return cljs_browser_repl.net.gist.invalid_gist.call(null,gist,"Invalid gist contents.");
}
}
} else {
return null;
}
});

cljs_browser_repl.net.gist.get_commands.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=gist.js.map
