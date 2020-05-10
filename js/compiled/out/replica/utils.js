// Compiled by ClojureScript 1.10.339 {}
goog.provide('replica.utils');
goog.require('cljs.core');
goog.require('goog.object');
replica.utils.global = (function (){var this$ = this;
return this$;
})();
if((typeof replica !== 'undefined') && (typeof replica.utils !== 'undefined') && (typeof replica.utils.resp !== 'undefined')){
} else {
replica.utils.resp = cljs.core.atom.call(null,null);
}
if((typeof replica !== 'undefined') && (typeof replica.utils !== 'undefined') && (typeof replica.utils.routes !== 'undefined')){
} else {
replica.utils.routes = cljs.core.atom.call(null,null);
}
if((typeof replica !== 'undefined') && (typeof replica.utils !== 'undefined') && (typeof replica.utils.info !== 'undefined')){
} else {
replica.utils.info = document.getElementById("right-info");
}
replica.utils.get_value = (function replica$utils$get_value(){
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,replica.utils.resp));
if(cljs.core.truth_((function (){var or__3949__auto__ = (value == null);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return cljs.core.re_find.call(null,/nil|-------/,value);
}
})())){
return null;
} else {
return value.replace((new RegExp(/\"/,new cljs.core.Symbol(null,"g","g",-916345864,null))),"");
}
});
replica.utils.error_BANG_ = (function replica$utils$error_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14584 = arguments.length;
var i__4532__auto___14585 = (0);
while(true){
if((i__4532__auto___14585 < len__4531__auto___14584)){
args__4534__auto__.push((arguments[i__4532__auto___14585]));

var G__14586 = (i__4532__auto___14585 + (1));
i__4532__auto___14585 = G__14586;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.utils.error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.utils.error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (origin,msgs){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,"@replica.",origin,": ",msgs)));
});

replica.utils.error_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.utils.error_BANG_.cljs$lang$applyTo = (function (seq14582){
var G__14583 = cljs.core.first.call(null,seq14582);
var seq14582__$1 = cljs.core.next.call(null,seq14582);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14583,seq14582__$1);
});

replica.utils.set_info_BANG_ = (function replica$utils$set_info_BANG_(string){
return replica.utils.info.innerHTML = string;
});
replica.utils.display_div_BANG_ = (function replica$utils$display_div_BANG_(id,display_QMARK_){
return displayDiv(id,display_QMARK_);
});
replica.utils.url_BANG_ = (function replica$utils$url_BANG_(url){
return assignUrl(url);
});
replica.utils.full_score_BANG_ = (function replica$utils$full_score_BANG_(full_QMARK_){
return goFullScore(full_QMARK_);
});
replica.utils.cmd_url = (function replica$utils$cmd_url(c){
return ["#/cmd?c=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('').replace((new RegExp(/\"/,new cljs.core.Symbol(null,"g","g",-916345864,null))),"\\\"")),"\""].join('');
});
/**
 * Sends a command to REPL by URL query
 */
replica.utils.url_command_BANG_ = (function replica$utils$url_command_BANG_(c){
return replica.utils.url_BANG_.call(null,replica.utils.cmd_url.call(null,c));
});
replica.utils.command_BANG_ = (function replica$utils$command_BANG_(var_args){
var G__14588 = arguments.length;
switch (G__14588) {
case 1:
return replica.utils.command_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return replica.utils.command_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replica.utils.command_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (c){
return replica.utils.command_BANG_.call(null,c,true,true);
});

replica.utils.command_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (c,hist_QMARK_,resp_QMARK_){
cljs.core.reset_BANG_.call(null,replica.utils.resp,null);

return toRepl(c,hist_QMARK_,resp_QMARK_);
});

replica.utils.command_BANG_.cljs$lang$maxFixedArity = 3;

replica.utils.get_js_value = (function replica$utils$get_js_value(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14592 = arguments.length;
var i__4532__auto___14593 = (0);
while(true){
if((i__4532__auto___14593 < len__4531__auto___14592)){
args__4534__auto__.push((arguments[i__4532__auto___14593]));

var G__14594 = (i__4532__auto___14593 + (1));
i__4532__auto___14593 = G__14594;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.utils.get_js_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.utils.get_js_value.cljs$core$IFn$_invoke$arity$variadic = (function (obj,path_to_key){
return cljs.core.apply.call(null,goog.object.getValueByKeys,obj,path_to_key);
});

replica.utils.get_js_value.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.utils.get_js_value.cljs$lang$applyTo = (function (seq14590){
var G__14591 = cljs.core.first.call(null,seq14590);
var seq14590__$1 = cljs.core.next.call(null,seq14590);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14591,seq14590__$1);
});

replica.utils.set_js_prop_BANG_ = (function replica$utils$set_js_prop_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14597 = arguments.length;
var i__4532__auto___14598 = (0);
while(true){
if((i__4532__auto___14598 < len__4531__auto___14597)){
args__4534__auto__.push((arguments[i__4532__auto___14598]));

var G__14599 = (i__4532__auto___14598 + (1));
i__4532__auto___14598 = G__14599;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.utils.set_js_prop_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.utils.set_js_prop_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,path_to_prop_value){
var target = cljs.core.butlast.call(null,path_to_prop_value);
return goog.object.set(cljs.core.apply.call(null,replica.utils.get_js_value,obj,cljs.core.butlast.call(null,target)),cljs.core.last.call(null,target),cljs.core.last.call(null,path_to_prop_value));
});

replica.utils.set_js_prop_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.utils.set_js_prop_BANG_.cljs$lang$applyTo = (function (seq14595){
var G__14596 = cljs.core.first.call(null,seq14595);
var seq14595__$1 = cljs.core.next.call(null,seq14595);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14596,seq14595__$1);
});

replica.utils.get_js_paths = (function replica$utils$get_js_paths(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14602 = arguments.length;
var i__4532__auto___14603 = (0);
while(true){
if((i__4532__auto___14603 < len__4531__auto___14602)){
args__4534__auto__.push((arguments[i__4532__auto___14603]));

var G__14604 = (i__4532__auto___14603 + (1));
i__4532__auto___14603 = G__14604;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.utils.get_js_paths.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.utils.get_js_paths.cljs$core$IFn$_invoke$arity$variadic = (function (obj,pre_paths){
return goog.object.getKeys(cljs.core.apply.call(null,goog.object.getValueByKeys,obj,pre_paths));
});

replica.utils.get_js_paths.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.utils.get_js_paths.cljs$lang$applyTo = (function (seq14600){
var G__14601 = cljs.core.first.call(null,seq14600);
var seq14600__$1 = cljs.core.next.call(null,seq14600);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14601,seq14600__$1);
});

replica.utils.proc_BANG_ = (function replica$utils$proc_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14607 = arguments.length;
var i__4532__auto___14608 = (0);
while(true){
if((i__4532__auto___14608 < len__4531__auto___14607)){
args__4534__auto__.push((arguments[i__4532__auto___14608]));

var G__14609 = (i__4532__auto___14608 + (1));
i__4532__auto___14608 = G__14609;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return replica.utils.proc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

replica.utils.proc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (route,args){
if(cljs.core._EQ_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,args))].join(''),"doc")){
return replica.utils.command_BANG_.call(null,["(doc ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,replica.utils.routes),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join('')))),")"].join(''));
} else {
return cljs.core.apply.call(null,cljs.core.second.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,replica.utils.routes),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join(''))),args);
}
});

replica.utils.proc_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
replica.utils.proc_BANG_.cljs$lang$applyTo = (function (seq14605){
var G__14606 = cljs.core.first.call(null,seq14605);
var seq14605__$1 = cljs.core.next.call(null,seq14605);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14606,seq14605__$1);
});

replica.utils.add_routes_BANG_ = (function replica$utils$add_routes_BANG_(var_args){
var G__14613 = arguments.length;
switch (G__14613) {
case 1:
return replica.utils.add_routes_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return replica.utils.add_routes_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replica.utils.add_routes_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (route_cmd_map){
return cljs.core.swap_BANG_.call(null,replica.utils.routes,cljs.core.merge,route_cmd_map);
});

replica.utils.add_routes_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pre_route,origin,route_cmd_map){
return replica.utils.add_routes_BANG_.call(null,cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__14610_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre_route),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14610_SHARP_)].join('');
}),cljs.core.keys.call(null,route_cmd_map)),cljs.core.map.call(null,(function (p1__14611_SHARP_){
return (new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(origin),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(origin)?"/":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14611_SHARP_)].join(''),(new cljs.core.List(null,cljs.core.eval.call(null,cljs.core.symbol.call(null,p1__14611_SHARP_)),null,(1),null)),(2),null));
}),cljs.core.vals.call(null,route_cmd_map))));
});

replica.utils.add_routes_BANG_.cljs$lang$maxFixedArity = 3;

replica.utils.doc_commands = (function replica$utils$doc_commands(fn_path,route_cmd_map,pre_router){
replica.utils.command_BANG_.call(null,["(doc ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_path),")"].join(''));

return replica.utils.command_BANG_.call(null,["(str \"Available commands are: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(pre_router)?["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre_router),"]+"].join(''):null)),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.array,cljs.core.keys.call(null,route_cmd_map)).join(" ")),")\")"].join(''),false,true);
});
replica.utils.regex2_SHARP_string = (function replica$utils$regex2_SHARP_string(regex){
return ["'#\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(regex.source),"\""].join('');
});
replica.utils.rand_str = (function replica$utils$rand_str(len){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,len,cljs.core.repeatedly.call(null,(function (){
return cljs.core.char$.call(null,(cljs.core.rand.call(null,(26)) + (65)));
}))));
});
replica.utils.create_command_BANG_ = (function replica$utils$create_command_BANG_(var_args){
var G__14616 = arguments.length;
switch (G__14616) {
case 1:
return replica.utils.create_command_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replica.utils.create_command_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replica.utils.create_command_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (command){
return replica.utils.create_command_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(command)].join(''),((cljs.core._EQ_.call(null,cljs.core.type.call(null,command),cljs.core.type.call(null,(new RegExp("")))))?replica.utils.regex2_SHARP_string.call(null,command):command));
});

replica.utils.create_command_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (label,command){
return appendLinkTo("menu",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)].join(''),replica.utils.cmd_url.call(null,command));
});

replica.utils.create_command_BANG_.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=utils.js.map
