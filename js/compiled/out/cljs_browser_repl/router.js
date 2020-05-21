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
goog.events.listen(cljs_browser_repl.router.history,goog.history.EventType.NAVIGATE,(function (p1__11872_SHARP_){
return cljs_browser_repl.router.handle_url_change_BANG_.call(null,p1__11872_SHARP_);
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
var action__11860__auto___11878 = (function (params__11861__auto__){
if(cljs.core.map_QMARK_.call(null,params__11861__auto__)){
var map__11873 = params__11861__auto__;
var map__11873__$1 = ((((!((map__11873 == null)))?(((((map__11873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11873):map__11873);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/index");
} else {
if(cljs.core.vector_QMARK_.call(null,params__11861__auto__)){
var vec__11875 = params__11861__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/index");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__11860__auto___11878);

var action__11860__auto___11884 = (function (params__11861__auto__){
if(cljs.core.map_QMARK_.call(null,params__11861__auto__)){
var map__11879 = params__11861__auto__;
var map__11879__$1 = ((((!((map__11879 == null)))?(((((map__11879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11879):map__11879);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/new");
} else {
if(cljs.core.vector_QMARK_.call(null,params__11861__auto__)){
var vec__11881 = params__11861__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/new");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/new",action__11860__auto___11884);

var action__11860__auto___11890 = (function (params__11861__auto__){
if(cljs.core.map_QMARK_.call(null,params__11861__auto__)){
var map__11885 = params__11861__auto__;
var map__11885__$1 = ((((!((map__11885 == null)))?(((((map__11885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11885):map__11885);
var id = cljs.core.get.call(null,map__11885__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__11885__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11861__auto__)){
var vec__11887 = params__11861__auto__;
var id = cljs.core.nth.call(null,vec__11887,(0),null);
var file = cljs.core.nth.call(null,vec__11887,(1),null);
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/gist/:id/file/:file",action__11860__auto___11890);

var action__11860__auto___11896 = (function (params__11861__auto__){
if(cljs.core.map_QMARK_.call(null,params__11861__auto__)){
var map__11891 = params__11861__auto__;
var map__11891__$1 = ((((!((map__11891 == null)))?(((((map__11891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11891):map__11891);
var id = cljs.core.get.call(null,map__11891__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
if(cljs.core.vector_QMARK_.call(null,params__11861__auto__)){
var vec__11893 = params__11861__auto__;
var id = cljs.core.nth.call(null,vec__11893,(0),null);
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/notebook/:id",action__11860__auto___11896);

var action__11860__auto___11902 = (function (params__11861__auto__){
if(cljs.core.map_QMARK_.call(null,params__11861__auto__)){
var map__11897 = params__11861__auto__;
var map__11897__$1 = ((((!((map__11897 == null)))?(((((map__11897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11897):map__11897);
var id = cljs.core.get.call(null,map__11897__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__11897__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11861__auto__)){
var vec__11899 = params__11861__auto__;
var id = cljs.core.nth.call(null,vec__11899,(0),null);
var file = cljs.core.nth.call(null,vec__11899,(1),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/notebook/:id/file/:file",action__11860__auto___11902);

var action__11860__auto___11908 = (function (params__11861__auto__){
if(cljs.core.map_QMARK_.call(null,params__11861__auto__)){
var map__11903 = params__11861__auto__;
var map__11903__$1 = ((((!((map__11903 == null)))?(((((map__11903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11903):map__11903);
var file = cljs.core.get.call(null,map__11903__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,"replica",file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11861__auto__)){
var vec__11905 = params__11861__auto__;
var file = cljs.core.nth.call(null,vec__11905,(0),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,"replica",file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/replica/:file",action__11860__auto___11908);

var action__11860__auto___11914 = (function (params__11861__auto__){
if(cljs.core.map_QMARK_.call(null,params__11861__auto__)){
var map__11909 = params__11861__auto__;
var map__11909__$1 = ((((!((map__11909 == null)))?(((((map__11909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11909):map__11909);
var id = cljs.core.get.call(null,map__11909__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__11909__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pos = cljs.core.get.call(null,map__11909__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11861__auto__)){
var vec__11911 = params__11861__auto__;
var id = cljs.core.nth.call(null,vec__11911,(0),null);
var file = cljs.core.nth.call(null,vec__11911,(1),null);
var pos = cljs.core.nth.call(null,vec__11911,(2),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/follow/:id/:file/:pos",action__11860__auto___11914);

var action__11860__auto___11920 = (function (params__11861__auto__){
if(cljs.core.map_QMARK_.call(null,params__11861__auto__)){
var map__11915 = params__11861__auto__;
var map__11915__$1 = ((((!((map__11915 == null)))?(((((map__11915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11915):map__11915);
var pos = cljs.core.get.call(null,map__11915__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
if(cljs.core.vector_QMARK_.call(null,params__11861__auto__)){
var vec__11917 = params__11861__auto__;
var pos = cljs.core.nth.call(null,vec__11917,(0),null);
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/goto/:pos",action__11860__auto___11920);

cljs_browser_repl.router.cmd_BANG_ = (function cljs_browser_repl$router$cmd_BANG_(cmd){
cljs_browser_repl.actions.repl.repl_entry_BANG_.call(null,cljs.reader.read_string.call(null,cmd));

return cljs_browser_repl.router.replace_BANG_.call(null,"/idle");
});
var action__11860__auto___11926 = (function (params__11861__auto__){
if(cljs.core.map_QMARK_.call(null,params__11861__auto__)){
var map__11921 = params__11861__auto__;
var map__11921__$1 = ((((!((map__11921 == null)))?(((((map__11921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11921):map__11921);
var query_params = cljs.core.get.call(null,map__11921__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return cljs_browser_repl.router.cmd_BANG_.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(query_params));
} else {
return null;
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__11861__auto__)){
var vec__11923 = params__11861__auto__;
var query_params = cljs.core.nth.call(null,vec__11923,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/cmd",action__11860__auto___11926);

var action__11860__auto___11933 = (function (params__11861__auto__){
if(cljs.core.map_QMARK_.call(null,params__11861__auto__)){
var map__11928 = params__11861__auto__;
var map__11928__$1 = ((((!((map__11928 == null)))?(((((map__11928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11928):map__11928);
var query_params = cljs.core.get.call(null,map__11928__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
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
return cljs_browser_repl.net.file.download_object_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"scene","scene",1523800415)],[cljs.core.deref.call(null,cljs_browser_repl.state.history),cljs.core.mapv.call(null,((function (file_name,map__11928,map__11928__$1,query_params){
return (function (p1__11927_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217)],[p1__11927_SHARP_.name,p1__11927_SHARP_.doc.getValue()]);
});})(file_name,map__11928,map__11928__$1,query_params))
,cmDocs),dropTextTo(INS,"/ITL/scene get;/ITL/scene/* get x y xorigin yorigin rotatex rotatey rotatez shear scale color penWidth penColor penStyle brushStyle fontSize fontFamily fontStyle fontWeight effect;").join("")]))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),".edn"].join(''));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__11861__auto__)){
var vec__11930 = params__11861__auto__;
var query_params = cljs.core.nth.call(null,vec__11930,(0),null);
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
return cljs_browser_repl.net.file.download_object_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"scene","scene",1523800415)],[cljs.core.deref.call(null,cljs_browser_repl.state.history),cljs.core.mapv.call(null,((function (file_name,vec__11930,query_params){
return (function (p1__11927_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217)],[p1__11927_SHARP_.name,p1__11927_SHARP_.doc.getValue()]);
});})(file_name,vec__11930,query_params))
,cmDocs),dropTextTo(INS,"/ITL/scene get;/ITL/scene/* get x y xorigin yorigin rotatex rotatey rotatez shear scale color penWidth penColor penStyle brushStyle fontSize fontFamily fontStyle fontWeight effect;").join("")]))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),".edn"].join(''));
}
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/save",action__11860__auto___11933);

var action__11860__auto___11939 = (function (params__11861__auto__){
if(cljs.core.map_QMARK_.call(null,params__11861__auto__)){
var map__11934 = params__11861__auto__;
var map__11934__$1 = ((((!((map__11934 == null)))?(((((map__11934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11934):map__11934);
var query_params = cljs.core.get.call(null,map__11934__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(query_params))){
return appendToCM(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.state.get_filtered_history.call(null))].join(''));
} else {
return appendToCM(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.history))].join(''));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__11861__auto__)){
var vec__11936 = params__11861__auto__;
var query_params = cljs.core.nth.call(null,vec__11936,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/hist2CM",action__11860__auto___11939);

var action__11860__auto___11945 = (function (params__11861__auto__){
if(cljs.core.map_QMARK_.call(null,params__11861__auto__)){
var map__11940 = params__11861__auto__;
var map__11940__$1 = ((((!((map__11940 == null)))?(((((map__11940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11940):map__11940);
var file = cljs.core.get.call(null,map__11940__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return fromUrlToCM(file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11861__auto__)){
var vec__11942 = params__11861__auto__;
var file = cljs.core.nth.call(null,vec__11942,(0),null);
return fromUrlToCM(file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/rscs/:file",action__11860__auto___11945);


//# sourceMappingURL=router.js.map
