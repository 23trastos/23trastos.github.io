// Compiled by ClojureScript 1.10.339 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4243__auto__ = (((value == null))?null:value);
var m__4244__auto__ = (devtools.format._header[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,value);
} else {
var m__4244__auto____$1 = (devtools.format._header["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4243__auto__ = (((value == null))?null:value);
var m__4244__auto__ = (devtools.format._has_body[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,value);
} else {
var m__4244__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4243__auto__ = (((value == null))?null:value);
var m__4244__auto__ = (devtools.format._body[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,value);
} else {
var m__4244__auto____$1 = (devtools.format._body["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22200 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22200["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22201 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22201["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22202 = temp__5455__auto____$2;
return (o22202["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22203 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22203["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22204 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22204["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22205 = temp__5455__auto____$2;
return (o22205["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22206 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22206["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22207 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22207["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22208 = temp__5455__auto____$2;
return (o22208["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22209 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22209["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22210 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22210["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22211 = temp__5455__auto____$2;
return (o22211["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22212 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22212["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22213 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22213["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22214 = temp__5455__auto____$2;
return (o22214["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22215 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22215["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22216 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22216["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22217 = temp__5455__auto____$2;
return (o22217["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22218 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22218["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22219 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22219["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22220 = temp__5455__auto____$2;
return (o22220["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22222 = arguments.length;
var i__4532__auto___22223 = (0);
while(true){
if((i__4532__auto___22223 < len__4531__auto___22222)){
args__4534__auto__.push((arguments[i__4532__auto___22223]));

var G__22224 = (i__4532__auto___22223 + (1));
i__4532__auto___22223 = G__22224;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.render_markup.cljs$lang$applyTo = (function (seq22221){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22221));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22226 = arguments.length;
var i__4532__auto___22227 = (0);
while(true){
if((i__4532__auto___22227 < len__4531__auto___22226)){
args__4534__auto__.push((arguments[i__4532__auto___22227]));

var G__22228 = (i__4532__auto___22227 + (1));
i__4532__auto___22227 = G__22228;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_template.cljs$lang$applyTo = (function (seq22225){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22225));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22230 = arguments.length;
var i__4532__auto___22231 = (0);
while(true){
if((i__4532__auto___22231 < len__4531__auto___22230)){
args__4534__auto__.push((arguments[i__4532__auto___22231]));

var G__22232 = (i__4532__auto___22231 + (1));
i__4532__auto___22231 = G__22232;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_group.cljs$lang$applyTo = (function (seq22229){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22229));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22234 = arguments.length;
var i__4532__auto___22235 = (0);
while(true){
if((i__4532__auto___22235 < len__4531__auto___22234)){
args__4534__auto__.push((arguments[i__4532__auto___22235]));

var G__22236 = (i__4532__auto___22235 + (1));
i__4532__auto___22235 = G__22236;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq22233){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22233));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22238 = arguments.length;
var i__4532__auto___22239 = (0);
while(true){
if((i__4532__auto___22239 < len__4531__auto___22238)){
args__4534__auto__.push((arguments[i__4532__auto___22239]));

var G__22240 = (i__4532__auto___22239 + (1));
i__4532__auto___22239 = G__22240;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.template.cljs$lang$applyTo = (function (seq22237){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22237));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22242 = arguments.length;
var i__4532__auto___22243 = (0);
while(true){
if((i__4532__auto___22243 < len__4531__auto___22242)){
args__4534__auto__.push((arguments[i__4532__auto___22243]));

var G__22244 = (i__4532__auto___22243 + (1));
i__4532__auto___22243 = G__22244;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.group.cljs$lang$applyTo = (function (seq22241){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22241));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22246 = arguments.length;
var i__4532__auto___22247 = (0);
while(true){
if((i__4532__auto___22247 < len__4531__auto___22246)){
args__4534__auto__.push((arguments[i__4532__auto___22247]));

var G__22248 = (i__4532__auto___22247 + (1));
i__4532__auto___22247 = G__22248;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.surrogate.cljs$lang$applyTo = (function (seq22245){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22245));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22256 = arguments.length;
var i__4532__auto___22257 = (0);
while(true){
if((i__4532__auto___22257 < len__4531__auto___22256)){
args__4534__auto__.push((arguments[i__4532__auto___22257]));

var G__22258 = (i__4532__auto___22257 + (1));
i__4532__auto___22257 = G__22258;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__22252){
var vec__22253 = p__22252;
var state_override = cljs.core.nth.call(null,vec__22253,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__22253,state_override){
return (function (p1__22249_SHARP_){
return cljs.core.merge.call(null,p1__22249_SHARP_,state_override);
});})(vec__22253,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq22250){
var G__22251 = cljs.core.first.call(null,seq22250);
var seq22250__$1 = cljs.core.next.call(null,seq22250);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22251,seq22250__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22260 = arguments.length;
var i__4532__auto___22261 = (0);
while(true){
if((i__4532__auto___22261 < len__4531__auto___22260)){
args__4534__auto__.push((arguments[i__4532__auto___22261]));

var G__22262 = (i__4532__auto___22261 + (1));
i__4532__auto___22261 = G__22262;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.build_header.cljs$lang$applyTo = (function (seq22259){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22259));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4534__auto__ = [];
var len__4531__auto___22265 = arguments.length;
var i__4532__auto___22266 = (0);
while(true){
if((i__4532__auto___22266 < len__4531__auto___22265)){
args__4534__auto__.push((arguments[i__4532__auto___22266]));

var G__22267 = (i__4532__auto___22266 + (1));
i__4532__auto___22266 = G__22267;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq22263){
var G__22264 = cljs.core.first.call(null,seq22263);
var seq22263__$1 = cljs.core.next.call(null,seq22263);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22264,seq22263__$1);
});


//# sourceMappingURL=format.js.map
