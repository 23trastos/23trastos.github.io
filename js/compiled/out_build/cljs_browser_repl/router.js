// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_browser_repl.router');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('cljs.reader');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('cljs_browser_repl.state');
goog.require('cljs_browser_repl.actions.notebook');
goog.require('cljs_browser_repl.net.file');
goog.require('cljs_browser_repl.actions.repl');
goog.require('goog.History');
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
if((typeof cljs_browser_repl !== 'undefined') && (typeof cljs_browser_repl.router !== 'undefined') && (typeof cljs_browser_repl.router.history !== 'undefined')){
} else {
cljs_browser_repl.router.history = (new goog.History());
}
cljs_browser_repl.router.scroll_top = (function cljs_browser_repl$router$scroll_top(){
return window.scrollY;
});
cljs_browser_repl.router.set_scroll_top_BANG_ = (function cljs_browser_repl$router$set_scroll_top_BANG_(){
var state = (function (){var or__3949__auto__ = history.state;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ({});
}
})();
(state["scroll-top"] = cljs_browser_repl.router.scroll_top.call(null));

return history.replaceState(state);
});
cljs_browser_repl.router.get_scroll_top = (function cljs_browser_repl$router$get_scroll_top(){
var temp__5457__auto__ = history.state;
if(cljs.core.truth_(temp__5457__auto__)){
var state = temp__5457__auto__;
return (state["scroll-top"]);
} else {
return null;
}
});
cljs_browser_repl.router.handle_url_change_BANG_ = (function cljs_browser_repl$router$handle_url_change_BANG_(e){
return secretary.core.dispatch_BANG_.call(null,e.token);
});
cljs_browser_repl.router.init = (function cljs_browser_repl$router$init(){
goog.events.listen(cljs_browser_repl.router.history,goog.history.EventType.NAVIGATE,(function (p1__22047_SHARP_){
return cljs_browser_repl.router.handle_url_change_BANG_.call(null,p1__22047_SHARP_);
}));

cljs_browser_repl.router.history.setEnabled(true);

var input = goog.dom.getElement("file-input");
return goog.events.listen(input,goog.events.EventType.CHANGE,cljs_browser_repl.actions.notebook.from_loaded_file_BANG_);
});
cljs_browser_repl.router.navigate_BANG_ = (function cljs_browser_repl$router$navigate_BANG_(url){
return cljs_browser_repl.router.history.setToken(url);
});
cljs_browser_repl.router.replace_BANG_ = (function cljs_browser_repl$router$replace_BANG_(url){
return cljs_browser_repl.router.history.replaceToken(url);
});
cljs_browser_repl.router.get_token = (function cljs_browser_repl$router$get_token(){
return cljs_browser_repl.router.history.getToken();
});
var action__21920__auto___22053 = (function (params__21921__auto__){
if(cljs.core.map_QMARK_.call(null,params__21921__auto__)){
var map__22048 = params__21921__auto__;
var map__22048__$1 = ((((!((map__22048 == null)))?(((((map__22048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22048):map__22048);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/index");
} else {
if(cljs.core.vector_QMARK_.call(null,params__21921__auto__)){
var vec__22050 = params__21921__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/index");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__21920__auto___22053);

var action__21920__auto___22059 = (function (params__21921__auto__){
if(cljs.core.map_QMARK_.call(null,params__21921__auto__)){
var map__22054 = params__21921__auto__;
var map__22054__$1 = ((((!((map__22054 == null)))?(((((map__22054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22054):map__22054);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/new");
} else {
if(cljs.core.vector_QMARK_.call(null,params__21921__auto__)){
var vec__22056 = params__21921__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/new");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/new",action__21920__auto___22059);

var action__21920__auto___22065 = (function (params__21921__auto__){
if(cljs.core.map_QMARK_.call(null,params__21921__auto__)){
var map__22060 = params__21921__auto__;
var map__22060__$1 = ((((!((map__22060 == null)))?(((((map__22060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22060):map__22060);
var id = cljs.core.get.call(null,map__22060__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__22060__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__21921__auto__)){
var vec__22062 = params__21921__auto__;
var id = cljs.core.nth.call(null,vec__22062,(0),null);
var file = cljs.core.nth.call(null,vec__22062,(1),null);
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/gist/:id/file/:file",action__21920__auto___22065);

var action__21920__auto___22071 = (function (params__21921__auto__){
if(cljs.core.map_QMARK_.call(null,params__21921__auto__)){
var map__22066 = params__21921__auto__;
var map__22066__$1 = ((((!((map__22066 == null)))?(((((map__22066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22066):map__22066);
var id = cljs.core.get.call(null,map__22066__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21921__auto__)){
var vec__22068 = params__21921__auto__;
var id = cljs.core.nth.call(null,vec__22068,(0),null);
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/notebook/:id",action__21920__auto___22071);

var action__21920__auto___22077 = (function (params__21921__auto__){
if(cljs.core.map_QMARK_.call(null,params__21921__auto__)){
var map__22072 = params__21921__auto__;
var map__22072__$1 = ((((!((map__22072 == null)))?(((((map__22072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22072):map__22072);
var id = cljs.core.get.call(null,map__22072__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__22072__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__21921__auto__)){
var vec__22074 = params__21921__auto__;
var id = cljs.core.nth.call(null,vec__22074,(0),null);
var file = cljs.core.nth.call(null,vec__22074,(1),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/notebook/:id/file/:file",action__21920__auto___22077);

var action__21920__auto___22083 = (function (params__21921__auto__){
if(cljs.core.map_QMARK_.call(null,params__21921__auto__)){
var map__22078 = params__21921__auto__;
var map__22078__$1 = ((((!((map__22078 == null)))?(((((map__22078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22078):map__22078);
var file = cljs.core.get.call(null,map__22078__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,"replica",file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__21921__auto__)){
var vec__22080 = params__21921__auto__;
var file = cljs.core.nth.call(null,vec__22080,(0),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,"replica",file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/replica/:file",action__21920__auto___22083);

var action__21920__auto___22089 = (function (params__21921__auto__){
if(cljs.core.map_QMARK_.call(null,params__21921__auto__)){
var map__22084 = params__21921__auto__;
var map__22084__$1 = ((((!((map__22084 == null)))?(((((map__22084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22084):map__22084);
var id = cljs.core.get.call(null,map__22084__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__22084__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pos = cljs.core.get.call(null,map__22084__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
if(cljs.core.vector_QMARK_.call(null,params__21921__auto__)){
var vec__22086 = params__21921__auto__;
var id = cljs.core.nth.call(null,vec__22086,(0),null);
var file = cljs.core.nth.call(null,vec__22086,(1),null);
var pos = cljs.core.nth.call(null,vec__22086,(2),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/follow/:id/:file/:pos",action__21920__auto___22089);

var action__21920__auto___22095 = (function (params__21921__auto__){
if(cljs.core.map_QMARK_.call(null,params__21921__auto__)){
var map__22090 = params__21921__auto__;
var map__22090__$1 = ((((!((map__22090 == null)))?(((((map__22090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22090):map__22090);
var pos = cljs.core.get.call(null,map__22090__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21921__auto__)){
var vec__22092 = params__21921__auto__;
var pos = cljs.core.nth.call(null,vec__22092,(0),null);
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/goto/:pos",action__21920__auto___22095);

cljs_browser_repl.router.cmd_BANG_ = (function cljs_browser_repl$router$cmd_BANG_(cmd){
cljs_browser_repl.actions.repl.repl_entry_BANG_.call(null,cljs.reader.read_string.call(null,cmd));

return cljs_browser_repl.router.replace_BANG_.call(null,"/idle");
});
var action__21920__auto___22101 = (function (params__21921__auto__){
if(cljs.core.map_QMARK_.call(null,params__21921__auto__)){
var map__22096 = params__21921__auto__;
var map__22096__$1 = ((((!((map__22096 == null)))?(((((map__22096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22096):map__22096);
var query_params = cljs.core.get.call(null,map__22096__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return cljs_browser_repl.router.cmd_BANG_.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(query_params));
} else {
return null;
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__21921__auto__)){
var vec__22098 = params__21921__auto__;
var query_params = cljs.core.nth.call(null,vec__22098,(0),null);
if(cljs.core.truth_(query_params)){
return cljs_browser_repl.router.cmd_BANG_.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(query_params));
} else {
return null;
}
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/cmd",action__21920__auto___22101);

var action__21920__auto___22108 = (function (params__21921__auto__){
if(cljs.core.map_QMARK_.call(null,params__21921__auto__)){
var map__22103 = params__21921__auto__;
var map__22103__$1 = ((((!((map__22103 == null)))?(((((map__22103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22103):map__22103);
var query_params = cljs.core.get.call(null,map__22103__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var file_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(query_params);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return prompt("Name:","my-replication");
}
})())].join('');
if(cljs.core._EQ_.call(null,file_name,"")){
return null;
} else {
return cljs_browser_repl.net.file.download_object_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"scene","scene",1523800415)],[cljs.core.deref.call(null,cljs_browser_repl.state.history),cljs.core.mapv.call(null,((function (file_name,map__22103,map__22103__$1,query_params){
return (function (p1__22102_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217)],[p1__22102_SHARP_.name,p1__22102_SHARP_.doc.getValue()]);
});})(file_name,map__22103,map__22103__$1,query_params))
,cmDocs),dropTextTo(INS,"/ITL/scene get;/ITL/scene/* get x y xorigin yorigin rotatex rotatey rotatez shear scale color penWidth penColor penStyle brushStyle fontSize fontFamily fontStyle fontWeight effect;").join("")]))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),".edn"].join(''));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__21921__auto__)){
var vec__22105 = params__21921__auto__;
var query_params = cljs.core.nth.call(null,vec__22105,(0),null);
var file_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(query_params);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return prompt("Name:","my-replication");
}
})())].join('');
if(cljs.core._EQ_.call(null,file_name,"")){
return null;
} else {
return cljs_browser_repl.net.file.download_object_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"scene","scene",1523800415)],[cljs.core.deref.call(null,cljs_browser_repl.state.history),cljs.core.mapv.call(null,((function (file_name,vec__22105,query_params){
return (function (p1__22102_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217)],[p1__22102_SHARP_.name,p1__22102_SHARP_.doc.getValue()]);
});})(file_name,vec__22105,query_params))
,cmDocs),dropTextTo(INS,"/ITL/scene get;/ITL/scene/* get x y xorigin yorigin rotatex rotatey rotatez shear scale color penWidth penColor penStyle brushStyle fontSize fontFamily fontStyle fontWeight effect;").join("")]))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),".edn"].join(''));
}
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/save",action__21920__auto___22108);

var action__21920__auto___22114 = (function (params__21921__auto__){
if(cljs.core.map_QMARK_.call(null,params__21921__auto__)){
var map__22109 = params__21921__auto__;
var map__22109__$1 = ((((!((map__22109 == null)))?(((((map__22109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22109):map__22109);
var query_params = cljs.core.get.call(null,map__22109__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(query_params))){
return appendToCM(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.state.get_filtered_history.call(null))].join(''));
} else {
return appendToCM(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.history))].join(''));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__21921__auto__)){
var vec__22111 = params__21921__auto__;
var query_params = cljs.core.nth.call(null,vec__22111,(0),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(query_params))){
return appendToCM(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.state.get_filtered_history.call(null))].join(''));
} else {
return appendToCM(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.history))].join(''));
}
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/hist2CM",action__21920__auto___22114);

var action__21920__auto___22120 = (function (params__21921__auto__){
if(cljs.core.map_QMARK_.call(null,params__21921__auto__)){
var map__22115 = params__21921__auto__;
var map__22115__$1 = ((((!((map__22115 == null)))?(((((map__22115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22115):map__22115);
var file = cljs.core.get.call(null,map__22115__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return fromUrlToCM(file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__21921__auto__)){
var vec__22117 = params__21921__auto__;
var file = cljs.core.nth.call(null,vec__22117,(0),null);
return fromUrlToCM(file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/rscs/:file",action__21920__auto___22120);


//# sourceMappingURL=router.js.map
