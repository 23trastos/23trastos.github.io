// Compiled by ClojureScript 1.10.339 {}
goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_.call(null)){
return null;
} else {
oops.state.mark_error_reported_BANG_.call(null);

var G__15060 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__15060)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__15060)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__15060)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15060)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__15061 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__15061)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__15061)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__15061)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15061)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15069 = arguments.length;
var i__4532__auto___15070 = (0);
while(true){
if((i__4532__auto___15070 < len__4531__auto___15069)){
args__4534__auto__.push((arguments[i__4532__auto___15070]));

var G__15071 = (i__4532__auto___15070 + (1));
i__4532__auto___15070 = G__15071;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__15064){
var vec__15065 = p__15064;
var info = cljs.core.nth.call(null,vec__15065,(0),null);

if(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id)){
} else {
var G__15068_15072 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__15068_15072)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__15068_15072)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__15068_15072)){
} else {
if(cljs.core._EQ_.call(null,null,G__15068_15072)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15068_15072)].join('')));

}
}
}
}
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq15062){
var G__15063 = cljs.core.first.call(null,seq15062);
var seq15062__$1 = cljs.core.next.call(null,seq15062);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15063,seq15062__$1);
});

oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.call(null,mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((((cljs.core._EQ_.call(null,mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isBoolean(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isNumber(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isString(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((cljs.core.not.call(null,goog.isObject(obj)))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_.call(null,key);

oops.state.set_last_access_modifier_BANG_.call(null,mode);
} else {
}

var and__3938__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.call(null,mode,(0))) && (cljs.core.not.call(null,goog.object.containsKey(obj,key)))))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null)):true):true);
if(cljs.core.truth_(and__3938__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5459__auto__ = oops.helpers.get_property_descriptor.call(null,obj,key);
if((temp__5459__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_.call(null,obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_.call(null,obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
} else {
return true;

}
}
} else {
var descriptor_15073 = temp__5459__auto__;
var temp__5459__auto____$1 = oops.helpers.determine_property_non_writable_reason.call(null,descriptor_15073);
if((temp__5459__auto____$1 == null)){
return true;
} else {
var reason_15074 = temp__5459__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_.call(null,obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_15074,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
}
}
} else {
return true;
}
} else {
return and__3938__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.call(null,mode,(1))) && ((fn == null)))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.call(null,mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_15076 = oops.config.get_child_factory.call(null);
var child_factory_15076__$1 = (function (){var G__15077 = child_factory_15076;
var G__15077__$1 = (((G__15077 instanceof cljs.core.Keyword))?G__15077.fqn:null);
switch (G__15077__$1) {
case "js-obj":
return ((function (G__15077,G__15077__$1,child_factory_15076){
return (function (){
return {};
});
;})(G__15077,G__15077__$1,child_factory_15076))

break;
case "js-array":
return ((function (G__15077,G__15077__$1,child_factory_15076){
return (function (){
return [];
});
;})(G__15077,G__15077__$1,child_factory_15076))

break;
default:
return child_factory_15076;

}
})();

var child_obj_15075 = child_factory_15076__$1.call(null,obj,key);
if(oops.core.validate_object_access_dynamically.call(null,obj,(2),key,false,true,true)){
(obj[key] = child_obj_15075);
} else {
}

return child_obj_15075;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_15081 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_15081);

return selector_path_15081;
} else {
var selector_path_15082 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_15082);

return selector_path_15082;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5461__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if((temp__5461__auto__ == null)){
return null;
} else {
var issue_15083 = temp__5461__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_15083);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true,true,false)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true,true,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_15092 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_15092,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_15085 = (function (){var path_15084 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_15084,(0));

return path_15084;
})();
var len_15086 = path_15085.length;
var i_15087 = (0);
var obj_15088 = obj;
while(true){
if((i_15087 < len_15086)){
var mode_15089 = (path_15085[i_15087]);
var key_15090 = (path_15085[(i_15087 + (1))]);
var next_obj_15091 = oops.core.get_key_dynamically.call(null,obj_15088,key_15090,mode_15089);
var G__15093 = mode_15089;
switch (G__15093) {
case (0):
var G__15095 = (i_15087 + (2));
var G__15096 = next_obj_15091;
i_15087 = G__15095;
obj_15088 = G__15096;
continue;

break;
case (1):
if(!((next_obj_15091 == null))){
var G__15097 = (i_15087 + (2));
var G__15098 = next_obj_15091;
i_15087 = G__15097;
obj_15088 = G__15098;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_15091 == null))){
var G__15099 = (i_15087 + (2));
var G__15100 = next_obj_15091;
i_15087 = G__15099;
obj_15088 = G__15100;
continue;
} else {
var G__15101 = (i_15087 + (2));
var G__15102 = oops.core.punch_key_dynamically_BANG_.call(null,obj_15088,key_15090);
i_15087 = G__15101;
obj_15088 = G__15102;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15093)].join('')));

}
} else {
return obj_15088;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_15128 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_15128,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_15104 = (function (){var path_15103 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_15103,(0));

return path_15103;
})();
var len_15105 = path_15104.length;
if((len_15105 < (4))){
return [obj,(function (){var path_15107 = path_15104;
var len_15108 = path_15107.length;
var i_15109 = (0);
var obj_15110 = obj;
while(true){
if((i_15109 < len_15108)){
var mode_15111 = (path_15107[i_15109]);
var key_15112 = (path_15107[(i_15109 + (1))]);
var next_obj_15113 = oops.core.get_key_dynamically.call(null,obj_15110,key_15112,mode_15111);
var G__15129 = mode_15111;
switch (G__15129) {
case (0):
var G__15133 = (i_15109 + (2));
var G__15134 = next_obj_15113;
i_15109 = G__15133;
obj_15110 = G__15134;
continue;

break;
case (1):
if(!((next_obj_15113 == null))){
var G__15135 = (i_15109 + (2));
var G__15136 = next_obj_15113;
i_15109 = G__15135;
obj_15110 = G__15136;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_15113 == null))){
var G__15137 = (i_15109 + (2));
var G__15138 = next_obj_15113;
i_15109 = G__15137;
obj_15110 = G__15138;
continue;
} else {
var G__15139 = (i_15109 + (2));
var G__15140 = oops.core.punch_key_dynamically_BANG_.call(null,obj_15110,key_15112);
i_15109 = G__15139;
obj_15110 = G__15140;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15129)].join('')));

}
} else {
return obj_15110;
}
break;
}
})()];
} else {
var target_obj_15106 = (function (){var path_15114 = path_15104.slice((0),(len_15105 - (2)));
var len_15115 = path_15114.length;
var i_15116 = (0);
var obj_15117 = obj;
while(true){
if((i_15116 < len_15115)){
var mode_15118 = (path_15114[i_15116]);
var key_15119 = (path_15114[(i_15116 + (1))]);
var next_obj_15120 = oops.core.get_key_dynamically.call(null,obj_15117,key_15119,mode_15118);
var G__15130 = mode_15118;
switch (G__15130) {
case (0):
var G__15142 = (i_15116 + (2));
var G__15143 = next_obj_15120;
i_15116 = G__15142;
obj_15117 = G__15143;
continue;

break;
case (1):
if(!((next_obj_15120 == null))){
var G__15144 = (i_15116 + (2));
var G__15145 = next_obj_15120;
i_15116 = G__15144;
obj_15117 = G__15145;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_15120 == null))){
var G__15146 = (i_15116 + (2));
var G__15147 = next_obj_15120;
i_15116 = G__15146;
obj_15117 = G__15147;
continue;
} else {
var G__15148 = (i_15116 + (2));
var G__15149 = oops.core.punch_key_dynamically_BANG_.call(null,obj_15117,key_15119);
i_15116 = G__15148;
obj_15117 = G__15149;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15130)].join('')));

}
} else {
return obj_15117;
}
break;
}
})();
return [target_obj_15106,(function (){var path_15121 = [(path_15104[(len_15105 - (2))]),(path_15104[(len_15105 - (1))])];
var len_15122 = path_15121.length;
var i_15123 = (0);
var obj_15124 = target_obj_15106;
while(true){
if((i_15123 < len_15122)){
var mode_15125 = (path_15121[i_15123]);
var key_15126 = (path_15121[(i_15123 + (1))]);
var next_obj_15127 = oops.core.get_key_dynamically.call(null,obj_15124,key_15126,mode_15125);
var G__15131 = mode_15125;
switch (G__15131) {
case (0):
var G__15151 = (i_15123 + (2));
var G__15152 = next_obj_15127;
i_15123 = G__15151;
obj_15124 = G__15152;
continue;

break;
case (1):
if(!((next_obj_15127 == null))){
var G__15153 = (i_15123 + (2));
var G__15154 = next_obj_15127;
i_15123 = G__15153;
obj_15124 = G__15154;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_15127 == null))){
var G__15155 = (i_15123 + (2));
var G__15156 = next_obj_15127;
i_15123 = G__15155;
obj_15124 = G__15156;
continue;
} else {
var G__15157 = (i_15123 + (2));
var G__15158 = oops.core.punch_key_dynamically_BANG_.call(null,obj_15124,key_15126);
i_15123 = G__15157;
obj_15124 = G__15158;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15131)].join('')));

}
} else {
return obj_15124;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_15173 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_15173,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_15160 = (function (){var path_15159 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_15159,(1));

return path_15159;
})();
var len_15163 = path_15160.length;
var parent_obj_path_15164 = path_15160.slice((0),(len_15163 - (2)));
var key_15161 = (path_15160[(len_15163 - (1))]);
var mode_15162 = (path_15160[(len_15163 - (2))]);
var parent_obj_15165 = (function (){var path_15166 = parent_obj_path_15164;
var len_15167 = path_15166.length;
var i_15168 = (0);
var obj_15169 = obj;
while(true){
if((i_15168 < len_15167)){
var mode_15170 = (path_15166[i_15168]);
var key_15171 = (path_15166[(i_15168 + (1))]);
var next_obj_15172 = oops.core.get_key_dynamically.call(null,obj_15169,key_15171,mode_15170);
var G__15174 = mode_15170;
switch (G__15174) {
case (0):
var G__15176 = (i_15168 + (2));
var G__15177 = next_obj_15172;
i_15168 = G__15176;
obj_15169 = G__15177;
continue;

break;
case (1):
if(!((next_obj_15172 == null))){
var G__15178 = (i_15168 + (2));
var G__15179 = next_obj_15172;
i_15168 = G__15178;
obj_15169 = G__15179;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_15172 == null))){
var G__15180 = (i_15168 + (2));
var G__15181 = next_obj_15172;
i_15168 = G__15180;
obj_15169 = G__15181;
continue;
} else {
var G__15182 = (i_15168 + (2));
var G__15183 = oops.core.punch_key_dynamically_BANG_.call(null,obj_15169,key_15171);
i_15168 = G__15182;
obj_15169 = G__15183;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15174)].join('')));

}
} else {
return obj_15169;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_15165,key_15161,val,mode_15162);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map
