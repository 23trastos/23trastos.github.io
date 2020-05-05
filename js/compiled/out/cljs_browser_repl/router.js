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
goog.events.listen(cljs_browser_repl.router.history,goog.history.EventType.NAVIGATE,(function (p1__22073_SHARP_){
return cljs_browser_repl.router.handle_url_change_BANG_.call(null,p1__22073_SHARP_);
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
var action__21946__auto___22079 = (function (params__21947__auto__){
if(cljs.core.map_QMARK_.call(null,params__21947__auto__)){
var map__22074 = params__21947__auto__;
var map__22074__$1 = ((((!((map__22074 == null)))?(((((map__22074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22074):map__22074);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/notebook/replica/file/index");
} else {
if(cljs.core.vector_QMARK_.call(null,params__21947__auto__)){
var vec__22076 = params__21947__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/notebook/replica/file/index");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__21946__auto___22079);

var action__21946__auto___22085 = (function (params__21947__auto__){
if(cljs.core.map_QMARK_.call(null,params__21947__auto__)){
var map__22080 = params__21947__auto__;
var map__22080__$1 = ((((!((map__22080 == null)))?(((((map__22080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22080):map__22080);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/notebook/replica/file/new");
} else {
if(cljs.core.vector_QMARK_.call(null,params__21947__auto__)){
var vec__22082 = params__21947__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/notebook/replica/file/new");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/new",action__21946__auto___22085);

var action__21946__auto___22091 = (function (params__21947__auto__){
if(cljs.core.map_QMARK_.call(null,params__21947__auto__)){
var map__22086 = params__21947__auto__;
var map__22086__$1 = ((((!((map__22086 == null)))?(((((map__22086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22086):map__22086);
var id = cljs.core.get.call(null,map__22086__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21947__auto__)){
var vec__22088 = params__21947__auto__;
var id = cljs.core.nth.call(null,vec__22088,(0),null);
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/gist/:id",action__21946__auto___22091);

var action__21946__auto___22097 = (function (params__21947__auto__){
if(cljs.core.map_QMARK_.call(null,params__21947__auto__)){
var map__22092 = params__21947__auto__;
var map__22092__$1 = ((((!((map__22092 == null)))?(((((map__22092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22092):map__22092);
var id = cljs.core.get.call(null,map__22092__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__22092__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__21947__auto__)){
var vec__22094 = params__21947__auto__;
var id = cljs.core.nth.call(null,vec__22094,(0),null);
var file = cljs.core.nth.call(null,vec__22094,(1),null);
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/gist/:id/file/:file",action__21946__auto___22097);

var action__21946__auto___22103 = (function (params__21947__auto__){
if(cljs.core.map_QMARK_.call(null,params__21947__auto__)){
var map__22098 = params__21947__auto__;
var map__22098__$1 = ((((!((map__22098 == null)))?(((((map__22098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22098):map__22098);
var id = cljs.core.get.call(null,map__22098__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21947__auto__)){
var vec__22100 = params__21947__auto__;
var id = cljs.core.nth.call(null,vec__22100,(0),null);
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/notebook/:id",action__21946__auto___22103);

var action__21946__auto___22109 = (function (params__21947__auto__){
if(cljs.core.map_QMARK_.call(null,params__21947__auto__)){
var map__22104 = params__21947__auto__;
var map__22104__$1 = ((((!((map__22104 == null)))?(((((map__22104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22104):map__22104);
var id = cljs.core.get.call(null,map__22104__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__22104__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__21947__auto__)){
var vec__22106 = params__21947__auto__;
var id = cljs.core.nth.call(null,vec__22106,(0),null);
var file = cljs.core.nth.call(null,vec__22106,(1),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/notebook/:id/file/:file",action__21946__auto___22109);

var action__21946__auto___22115 = (function (params__21947__auto__){
if(cljs.core.map_QMARK_.call(null,params__21947__auto__)){
var map__22110 = params__21947__auto__;
var map__22110__$1 = ((((!((map__22110 == null)))?(((((map__22110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22110):map__22110);
var id = cljs.core.get.call(null,map__22110__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__22110__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pos = cljs.core.get.call(null,map__22110__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
if(cljs.core.vector_QMARK_.call(null,params__21947__auto__)){
var vec__22112 = params__21947__auto__;
var id = cljs.core.nth.call(null,vec__22112,(0),null);
var file = cljs.core.nth.call(null,vec__22112,(1),null);
var pos = cljs.core.nth.call(null,vec__22112,(2),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/follow/:id/:file/:pos",action__21946__auto___22115);

var action__21946__auto___22121 = (function (params__21947__auto__){
if(cljs.core.map_QMARK_.call(null,params__21947__auto__)){
var map__22116 = params__21947__auto__;
var map__22116__$1 = ((((!((map__22116 == null)))?(((((map__22116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22116):map__22116);
var pos = cljs.core.get.call(null,map__22116__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21947__auto__)){
var vec__22118 = params__21947__auto__;
var pos = cljs.core.nth.call(null,vec__22118,(0),null);
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/goto/:pos",action__21946__auto___22121);

cljs_browser_repl.router.cmd_BANG_ = (function cljs_browser_repl$router$cmd_BANG_(cmd){
cljs_browser_repl.actions.repl.repl_entry_BANG_.call(null,cljs.reader.read_string.call(null,cmd));

return cljs_browser_repl.router.replace_BANG_.call(null,"/idle");
});
var action__21946__auto___22127 = (function (params__21947__auto__){
if(cljs.core.map_QMARK_.call(null,params__21947__auto__)){
var map__22122 = params__21947__auto__;
var map__22122__$1 = ((((!((map__22122 == null)))?(((((map__22122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22122):map__22122);
var query_params = cljs.core.get.call(null,map__22122__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return cljs_browser_repl.router.cmd_BANG_.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(query_params));
} else {
return null;
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__21947__auto__)){
var vec__22124 = params__21947__auto__;
var query_params = cljs.core.nth.call(null,vec__22124,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/cmd",action__21946__auto___22127);

var action__21946__auto___22133 = (function (params__21947__auto__){
if(cljs.core.map_QMARK_.call(null,params__21947__auto__)){
var map__22128 = params__21947__auto__;
var map__22128__$1 = ((((!((map__22128 == null)))?(((((map__22128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22128):map__22128);
var query_params = cljs.core.get.call(null,map__22128__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
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
return cljs_browser_repl.net.file.download_object_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.history))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),".edn"].join(''));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__21947__auto__)){
var vec__22130 = params__21947__auto__;
var query_params = cljs.core.nth.call(null,vec__22130,(0),null);
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
return cljs_browser_repl.net.file.download_object_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.history))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),".edn"].join(''));
}
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/save",action__21946__auto___22133);

var action__21946__auto___22139 = (function (params__21947__auto__){
if(cljs.core.map_QMARK_.call(null,params__21947__auto__)){
var map__22134 = params__21947__auto__;
var map__22134__$1 = ((((!((map__22134 == null)))?(((((map__22134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22134):map__22134);
var query_params = cljs.core.get.call(null,map__22134__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(query_params))){
return appendToCM(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.state.get_filtered_history.call(null))].join(''));
} else {
return appendToCM(CM,["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.history))].join(''));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__21947__auto__)){
var vec__22136 = params__21947__auto__;
var query_params = cljs.core.nth.call(null,vec__22136,(0),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(query_params))){
return appendToCM(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.state.get_filtered_history.call(null))].join(''));
} else {
return appendToCM(CM,["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.history))].join(''));
}
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/hist2CM",action__21946__auto___22139);

var action__21946__auto___22145 = (function (params__21947__auto__){
if(cljs.core.map_QMARK_.call(null,params__21947__auto__)){
var map__22140 = params__21947__auto__;
var map__22140__$1 = ((((!((map__22140 == null)))?(((((map__22140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22140):map__22140);
var file = cljs.core.get.call(null,map__22140__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return fromUrlToCM(file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__21947__auto__)){
var vec__22142 = params__21947__auto__;
var file = cljs.core.nth.call(null,vec__22142,(0),null);
return fromUrlToCM(file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/rscs/:file",action__21946__auto___22145);


//# sourceMappingURL=router.js.map
