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
goog.events.listen(cljs_browser_repl.router.history,goog.history.EventType.NAVIGATE,(function (p1__12173_SHARP_){
return cljs_browser_repl.router.handle_url_change_BANG_.call(null,p1__12173_SHARP_);
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
var action__11713__auto___12179 = (function (params__11714__auto__){
if(cljs.core.map_QMARK_.call(null,params__11714__auto__)){
var map__12174 = params__11714__auto__;
var map__12174__$1 = ((((!((map__12174 == null)))?(((((map__12174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12174):map__12174);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/index");
} else {
if(cljs.core.vector_QMARK_.call(null,params__11714__auto__)){
var vec__12176 = params__11714__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/index");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__11713__auto___12179);

var action__11713__auto___12185 = (function (params__11714__auto__){
if(cljs.core.map_QMARK_.call(null,params__11714__auto__)){
var map__12180 = params__11714__auto__;
var map__12180__$1 = ((((!((map__12180 == null)))?(((((map__12180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12180):map__12180);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/new");
} else {
if(cljs.core.vector_QMARK_.call(null,params__11714__auto__)){
var vec__12182 = params__11714__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/new");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/new",action__11713__auto___12185);

var action__11713__auto___12191 = (function (params__11714__auto__){
if(cljs.core.map_QMARK_.call(null,params__11714__auto__)){
var map__12186 = params__11714__auto__;
var map__12186__$1 = ((((!((map__12186 == null)))?(((((map__12186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12186):map__12186);
var id = cljs.core.get.call(null,map__12186__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__12186__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11714__auto__)){
var vec__12188 = params__11714__auto__;
var id = cljs.core.nth.call(null,vec__12188,(0),null);
var file = cljs.core.nth.call(null,vec__12188,(1),null);
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/gist/:id/file/:file",action__11713__auto___12191);

var action__11713__auto___12197 = (function (params__11714__auto__){
if(cljs.core.map_QMARK_.call(null,params__11714__auto__)){
var map__12192 = params__11714__auto__;
var map__12192__$1 = ((((!((map__12192 == null)))?(((((map__12192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12192):map__12192);
var id = cljs.core.get.call(null,map__12192__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
if(cljs.core.vector_QMARK_.call(null,params__11714__auto__)){
var vec__12194 = params__11714__auto__;
var id = cljs.core.nth.call(null,vec__12194,(0),null);
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/notebook/:id",action__11713__auto___12197);

var action__11713__auto___12203 = (function (params__11714__auto__){
if(cljs.core.map_QMARK_.call(null,params__11714__auto__)){
var map__12198 = params__11714__auto__;
var map__12198__$1 = ((((!((map__12198 == null)))?(((((map__12198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12198):map__12198);
var id = cljs.core.get.call(null,map__12198__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__12198__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11714__auto__)){
var vec__12200 = params__11714__auto__;
var id = cljs.core.nth.call(null,vec__12200,(0),null);
var file = cljs.core.nth.call(null,vec__12200,(1),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/notebook/:id/file/:file",action__11713__auto___12203);

var action__11713__auto___12209 = (function (params__11714__auto__){
if(cljs.core.map_QMARK_.call(null,params__11714__auto__)){
var map__12204 = params__11714__auto__;
var map__12204__$1 = ((((!((map__12204 == null)))?(((((map__12204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12204):map__12204);
var file = cljs.core.get.call(null,map__12204__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,"replica",file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11714__auto__)){
var vec__12206 = params__11714__auto__;
var file = cljs.core.nth.call(null,vec__12206,(0),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,"replica",file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/replica/:file",action__11713__auto___12209);

var action__11713__auto___12215 = (function (params__11714__auto__){
if(cljs.core.map_QMARK_.call(null,params__11714__auto__)){
var map__12210 = params__11714__auto__;
var map__12210__$1 = ((((!((map__12210 == null)))?(((((map__12210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12210):map__12210);
var id = cljs.core.get.call(null,map__12210__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__12210__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pos = cljs.core.get.call(null,map__12210__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11714__auto__)){
var vec__12212 = params__11714__auto__;
var id = cljs.core.nth.call(null,vec__12212,(0),null);
var file = cljs.core.nth.call(null,vec__12212,(1),null);
var pos = cljs.core.nth.call(null,vec__12212,(2),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/follow/:id/:file/:pos",action__11713__auto___12215);

var action__11713__auto___12221 = (function (params__11714__auto__){
if(cljs.core.map_QMARK_.call(null,params__11714__auto__)){
var map__12216 = params__11714__auto__;
var map__12216__$1 = ((((!((map__12216 == null)))?(((((map__12216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12216):map__12216);
var pos = cljs.core.get.call(null,map__12216__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
if(cljs.core.vector_QMARK_.call(null,params__11714__auto__)){
var vec__12218 = params__11714__auto__;
var pos = cljs.core.nth.call(null,vec__12218,(0),null);
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/goto/:pos",action__11713__auto___12221);

cljs_browser_repl.router.cmd_BANG_ = (function cljs_browser_repl$router$cmd_BANG_(cmd){
cljs_browser_repl.actions.repl.repl_entry_BANG_.call(null,cljs.reader.read_string.call(null,cmd));

return cljs_browser_repl.router.replace_BANG_.call(null,"/idle");
});
var action__11713__auto___12227 = (function (params__11714__auto__){
if(cljs.core.map_QMARK_.call(null,params__11714__auto__)){
var map__12222 = params__11714__auto__;
var map__12222__$1 = ((((!((map__12222 == null)))?(((((map__12222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12222):map__12222);
var query_params = cljs.core.get.call(null,map__12222__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return cljs_browser_repl.router.cmd_BANG_.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(query_params));
} else {
return null;
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__11714__auto__)){
var vec__12224 = params__11714__auto__;
var query_params = cljs.core.nth.call(null,vec__12224,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/cmd",action__11713__auto___12227);

var action__11713__auto___12233 = (function (params__11714__auto__){
if(cljs.core.map_QMARK_.call(null,params__11714__auto__)){
var map__12228 = params__11714__auto__;
var map__12228__$1 = ((((!((map__12228 == null)))?(((((map__12228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12228):map__12228);
var query_params = cljs.core.get.call(null,map__12228__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
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
var vec__12230 = params__11714__auto__;
var query_params = cljs.core.nth.call(null,vec__12230,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/save",action__11713__auto___12233);

var action__11713__auto___12239 = (function (params__11714__auto__){
if(cljs.core.map_QMARK_.call(null,params__11714__auto__)){
var map__12234 = params__11714__auto__;
var map__12234__$1 = ((((!((map__12234 == null)))?(((((map__12234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12234):map__12234);
var query_params = cljs.core.get.call(null,map__12234__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(query_params))){
return appendToCM(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.state.get_filtered_history.call(null))].join(''));
} else {
return appendToCM(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.history))].join(''));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__11714__auto__)){
var vec__12236 = params__11714__auto__;
var query_params = cljs.core.nth.call(null,vec__12236,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/hist2CM",action__11713__auto___12239);

var action__11713__auto___12245 = (function (params__11714__auto__){
if(cljs.core.map_QMARK_.call(null,params__11714__auto__)){
var map__12240 = params__11714__auto__;
var map__12240__$1 = ((((!((map__12240 == null)))?(((((map__12240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12240):map__12240);
var query_params = cljs.core.get.call(null,map__12240__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
return initMediaRecorder(((cljs.core.not.call(null,new cljs.core.Keyword(null,"onlyAudio","onlyAudio",-871820517).cljs$core$IFn$_invoke$arity$1(query_params))) || (false)));
} else {
if(cljs.core.vector_QMARK_.call(null,params__11714__auto__)){
var vec__12242 = params__11714__auto__;
var query_params = cljs.core.nth.call(null,vec__12242,(0),null);
return initMediaRecorder(((cljs.core.not.call(null,new cljs.core.Keyword(null,"onlyAudio","onlyAudio",-871820517).cljs$core$IFn$_invoke$arity$1(query_params))) || (false)));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/initRec",action__11713__auto___12245);

var action__11713__auto___12251 = (function (params__11714__auto__){
if(cljs.core.map_QMARK_.call(null,params__11714__auto__)){
var map__12246 = params__11714__auto__;
var map__12246__$1 = ((((!((map__12246 == null)))?(((((map__12246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12246):map__12246);
var file = cljs.core.get.call(null,map__12246__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return fromUrlToCM(file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11714__auto__)){
var vec__12248 = params__11714__auto__;
var file = cljs.core.nth.call(null,vec__12248,(0),null);
return fromUrlToCM(file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/rscs/:file",action__11713__auto___12251);


//# sourceMappingURL=router.js.map
