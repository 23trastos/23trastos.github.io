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
goog.events.listen(cljs_browser_repl.router.history,goog.history.EventType.NAVIGATE,(function (p1__20897_SHARP_){
return cljs_browser_repl.router.handle_url_change_BANG_.call(null,p1__20897_SHARP_);
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
var action__11713__auto___20903 = (function (params__11714__auto__){
if(cljs.core.map_QMARK_.call(null,params__11714__auto__)){
var map__20898 = params__11714__auto__;
var map__20898__$1 = ((((!((map__20898 == null)))?(((((map__20898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20898):map__20898);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/index");
} else {
if(cljs.core.vector_QMARK_.call(null,params__11714__auto__)){
var vec__20900 = params__11714__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/index");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__11713__auto___20903);

var action__11713__auto___20909 = (function (params__11714__auto__){
if(cljs.core.map_QMARK_.call(null,params__11714__auto__)){
var map__20904 = params__11714__auto__;
var map__20904__$1 = ((((!((map__20904 == null)))?(((((map__20904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20904):map__20904);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/new");
} else {
if(cljs.core.vector_QMARK_.call(null,params__11714__auto__)){
var vec__20906 = params__11714__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/new");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/new",action__11713__auto___20909);

var action__11713__auto___20915 = (function (params__11714__auto__){
if(cljs.core.map_QMARK_.call(null,params__11714__auto__)){
var map__20910 = params__11714__auto__;
var map__20910__$1 = ((((!((map__20910 == null)))?(((((map__20910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20910):map__20910);
var id = cljs.core.get.call(null,map__20910__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__20910__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11714__auto__)){
var vec__20912 = params__11714__auto__;
var id = cljs.core.nth.call(null,vec__20912,(0),null);
var file = cljs.core.nth.call(null,vec__20912,(1),null);
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/gist/:id/file/:file",action__11713__auto___20915);

var action__11713__auto___20921 = (function (params__11714__auto__){
if(cljs.core.map_QMARK_.call(null,params__11714__auto__)){
var map__20916 = params__11714__auto__;
var map__20916__$1 = ((((!((map__20916 == null)))?(((((map__20916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20916):map__20916);
var id = cljs.core.get.call(null,map__20916__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
if(cljs.core.vector_QMARK_.call(null,params__11714__auto__)){
var vec__20918 = params__11714__auto__;
var id = cljs.core.nth.call(null,vec__20918,(0),null);
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/notebook/:id",action__11713__auto___20921);

var action__11713__auto___20927 = (function (params__11714__auto__){
if(cljs.core.map_QMARK_.call(null,params__11714__auto__)){
var map__20922 = params__11714__auto__;
var map__20922__$1 = ((((!((map__20922 == null)))?(((((map__20922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20922):map__20922);
var id = cljs.core.get.call(null,map__20922__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__20922__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11714__auto__)){
var vec__20924 = params__11714__auto__;
var id = cljs.core.nth.call(null,vec__20924,(0),null);
var file = cljs.core.nth.call(null,vec__20924,(1),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/notebook/:id/file/:file",action__11713__auto___20927);

var action__11713__auto___20933 = (function (params__11714__auto__){
if(cljs.core.map_QMARK_.call(null,params__11714__auto__)){
var map__20928 = params__11714__auto__;
var map__20928__$1 = ((((!((map__20928 == null)))?(((((map__20928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20928):map__20928);
var file = cljs.core.get.call(null,map__20928__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,"replica",file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11714__auto__)){
var vec__20930 = params__11714__auto__;
var file = cljs.core.nth.call(null,vec__20930,(0),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,"replica",file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/replica/:file",action__11713__auto___20933);

var action__11713__auto___20939 = (function (params__11714__auto__){
if(cljs.core.map_QMARK_.call(null,params__11714__auto__)){
var map__20934 = params__11714__auto__;
var map__20934__$1 = ((((!((map__20934 == null)))?(((((map__20934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20934):map__20934);
var id = cljs.core.get.call(null,map__20934__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__20934__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pos = cljs.core.get.call(null,map__20934__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11714__auto__)){
var vec__20936 = params__11714__auto__;
var id = cljs.core.nth.call(null,vec__20936,(0),null);
var file = cljs.core.nth.call(null,vec__20936,(1),null);
var pos = cljs.core.nth.call(null,vec__20936,(2),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/follow/:id/:file/:pos",action__11713__auto___20939);

var action__11713__auto___20945 = (function (params__11714__auto__){
if(cljs.core.map_QMARK_.call(null,params__11714__auto__)){
var map__20940 = params__11714__auto__;
var map__20940__$1 = ((((!((map__20940 == null)))?(((((map__20940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20940):map__20940);
var pos = cljs.core.get.call(null,map__20940__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
if(cljs.core.vector_QMARK_.call(null,params__11714__auto__)){
var vec__20942 = params__11714__auto__;
var pos = cljs.core.nth.call(null,vec__20942,(0),null);
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/goto/:pos",action__11713__auto___20945);

cljs_browser_repl.router.cmd_BANG_ = (function cljs_browser_repl$router$cmd_BANG_(cmd){
cljs_browser_repl.actions.repl.repl_entry_BANG_.call(null,cljs.reader.read_string.call(null,cmd));

return cljs_browser_repl.router.replace_BANG_.call(null,"/idle");
});
var action__11713__auto___20951 = (function (params__11714__auto__){
if(cljs.core.map_QMARK_.call(null,params__11714__auto__)){
var map__20946 = params__11714__auto__;
var map__20946__$1 = ((((!((map__20946 == null)))?(((((map__20946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20946):map__20946);
var query_params = cljs.core.get.call(null,map__20946__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return cljs_browser_repl.router.cmd_BANG_.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(query_params));
} else {
return null;
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__11714__auto__)){
var vec__20948 = params__11714__auto__;
var query_params = cljs.core.nth.call(null,vec__20948,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/cmd",action__11713__auto___20951);

var action__11713__auto___20957 = (function (params__11714__auto__){
if(cljs.core.map_QMARK_.call(null,params__11714__auto__)){
var map__20952 = params__11714__auto__;
var map__20952__$1 = ((((!((map__20952 == null)))?(((((map__20952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20952):map__20952);
var query_params = cljs.core.get.call(null,map__20952__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
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
if(cljs.core.vector_QMARK_.call(null,params__11714__auto__)){
var vec__20954 = params__11714__auto__;
var query_params = cljs.core.nth.call(null,vec__20954,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/save",action__11713__auto___20957);

var action__11713__auto___20963 = (function (params__11714__auto__){
if(cljs.core.map_QMARK_.call(null,params__11714__auto__)){
var map__20958 = params__11714__auto__;
var map__20958__$1 = ((((!((map__20958 == null)))?(((((map__20958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20958):map__20958);
var query_params = cljs.core.get.call(null,map__20958__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(query_params))){
return appendToCM(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.state.get_filtered_history.call(null))].join(''));
} else {
return appendToCM(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.history))].join(''));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__11714__auto__)){
var vec__20960 = params__11714__auto__;
var query_params = cljs.core.nth.call(null,vec__20960,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/hist2CM",action__11713__auto___20963);

var action__11713__auto___20969 = (function (params__11714__auto__){
if(cljs.core.map_QMARK_.call(null,params__11714__auto__)){
var map__20964 = params__11714__auto__;
var map__20964__$1 = ((((!((map__20964 == null)))?(((((map__20964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20964):map__20964);
var query_params = cljs.core.get.call(null,map__20964__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
return initMediaRecorder(((cljs.core.not.call(null,new cljs.core.Keyword(null,"onlyAudio","onlyAudio",-871820517).cljs$core$IFn$_invoke$arity$1(query_params))) || (false)));
} else {
if(cljs.core.vector_QMARK_.call(null,params__11714__auto__)){
var vec__20966 = params__11714__auto__;
var query_params = cljs.core.nth.call(null,vec__20966,(0),null);
return initMediaRecorder(((cljs.core.not.call(null,new cljs.core.Keyword(null,"onlyAudio","onlyAudio",-871820517).cljs$core$IFn$_invoke$arity$1(query_params))) || (false)));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/initRec",action__11713__auto___20969);

var action__11713__auto___20975 = (function (params__11714__auto__){
if(cljs.core.map_QMARK_.call(null,params__11714__auto__)){
var map__20970 = params__11714__auto__;
var map__20970__$1 = ((((!((map__20970 == null)))?(((((map__20970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20970):map__20970);
var file = cljs.core.get.call(null,map__20970__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return fromUrlToCM(file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11714__auto__)){
var vec__20972 = params__11714__auto__;
var file = cljs.core.nth.call(null,vec__20972,(0),null);
return fromUrlToCM(file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/rscs/:file",action__11713__auto___20975);


//# sourceMappingURL=router.js.map
