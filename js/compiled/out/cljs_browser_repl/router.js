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
goog.events.listen(cljs_browser_repl.router.history,goog.history.EventType.NAVIGATE,(function (p1__11712_SHARP_){
return cljs_browser_repl.router.handle_url_change_BANG_.call(null,p1__11712_SHARP_);
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
var action__11700__auto___11718 = (function (params__11701__auto__){
if(cljs.core.map_QMARK_.call(null,params__11701__auto__)){
var map__11713 = params__11701__auto__;
var map__11713__$1 = ((((!((map__11713 == null)))?(((((map__11713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11713):map__11713);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/index");
} else {
if(cljs.core.vector_QMARK_.call(null,params__11701__auto__)){
var vec__11715 = params__11701__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/index");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__11700__auto___11718);

var action__11700__auto___11724 = (function (params__11701__auto__){
if(cljs.core.map_QMARK_.call(null,params__11701__auto__)){
var map__11719 = params__11701__auto__;
var map__11719__$1 = ((((!((map__11719 == null)))?(((((map__11719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11719):map__11719);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/new");
} else {
if(cljs.core.vector_QMARK_.call(null,params__11701__auto__)){
var vec__11721 = params__11701__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/new");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/new",action__11700__auto___11724);

var action__11700__auto___11730 = (function (params__11701__auto__){
if(cljs.core.map_QMARK_.call(null,params__11701__auto__)){
var map__11725 = params__11701__auto__;
var map__11725__$1 = ((((!((map__11725 == null)))?(((((map__11725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11725):map__11725);
var id = cljs.core.get.call(null,map__11725__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__11725__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11701__auto__)){
var vec__11727 = params__11701__auto__;
var id = cljs.core.nth.call(null,vec__11727,(0),null);
var file = cljs.core.nth.call(null,vec__11727,(1),null);
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/gist/:id/file/:file",action__11700__auto___11730);

var action__11700__auto___11736 = (function (params__11701__auto__){
if(cljs.core.map_QMARK_.call(null,params__11701__auto__)){
var map__11731 = params__11701__auto__;
var map__11731__$1 = ((((!((map__11731 == null)))?(((((map__11731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11731):map__11731);
var id = cljs.core.get.call(null,map__11731__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
if(cljs.core.vector_QMARK_.call(null,params__11701__auto__)){
var vec__11733 = params__11701__auto__;
var id = cljs.core.nth.call(null,vec__11733,(0),null);
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/notebook/:id",action__11700__auto___11736);

var action__11700__auto___11742 = (function (params__11701__auto__){
if(cljs.core.map_QMARK_.call(null,params__11701__auto__)){
var map__11737 = params__11701__auto__;
var map__11737__$1 = ((((!((map__11737 == null)))?(((((map__11737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11737):map__11737);
var id = cljs.core.get.call(null,map__11737__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__11737__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11701__auto__)){
var vec__11739 = params__11701__auto__;
var id = cljs.core.nth.call(null,vec__11739,(0),null);
var file = cljs.core.nth.call(null,vec__11739,(1),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/notebook/:id/file/:file",action__11700__auto___11742);

var action__11700__auto___11748 = (function (params__11701__auto__){
if(cljs.core.map_QMARK_.call(null,params__11701__auto__)){
var map__11743 = params__11701__auto__;
var map__11743__$1 = ((((!((map__11743 == null)))?(((((map__11743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11743):map__11743);
var file = cljs.core.get.call(null,map__11743__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,"replica",file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11701__auto__)){
var vec__11745 = params__11701__auto__;
var file = cljs.core.nth.call(null,vec__11745,(0),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,"replica",file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/replica/:file",action__11700__auto___11748);

var action__11700__auto___11754 = (function (params__11701__auto__){
if(cljs.core.map_QMARK_.call(null,params__11701__auto__)){
var map__11749 = params__11701__auto__;
var map__11749__$1 = ((((!((map__11749 == null)))?(((((map__11749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11749):map__11749);
var id = cljs.core.get.call(null,map__11749__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__11749__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pos = cljs.core.get.call(null,map__11749__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11701__auto__)){
var vec__11751 = params__11701__auto__;
var id = cljs.core.nth.call(null,vec__11751,(0),null);
var file = cljs.core.nth.call(null,vec__11751,(1),null);
var pos = cljs.core.nth.call(null,vec__11751,(2),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/follow/:id/:file/:pos",action__11700__auto___11754);

var action__11700__auto___11760 = (function (params__11701__auto__){
if(cljs.core.map_QMARK_.call(null,params__11701__auto__)){
var map__11755 = params__11701__auto__;
var map__11755__$1 = ((((!((map__11755 == null)))?(((((map__11755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11755):map__11755);
var pos = cljs.core.get.call(null,map__11755__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
if(cljs.core.vector_QMARK_.call(null,params__11701__auto__)){
var vec__11757 = params__11701__auto__;
var pos = cljs.core.nth.call(null,vec__11757,(0),null);
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/goto/:pos",action__11700__auto___11760);

cljs_browser_repl.router.cmd_BANG_ = (function cljs_browser_repl$router$cmd_BANG_(cmd){
cljs_browser_repl.actions.repl.repl_entry_BANG_.call(null,cljs.reader.read_string.call(null,cmd));

return cljs_browser_repl.router.replace_BANG_.call(null,"/idle");
});
var action__11700__auto___11766 = (function (params__11701__auto__){
if(cljs.core.map_QMARK_.call(null,params__11701__auto__)){
var map__11761 = params__11701__auto__;
var map__11761__$1 = ((((!((map__11761 == null)))?(((((map__11761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11761):map__11761);
var query_params = cljs.core.get.call(null,map__11761__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return cljs_browser_repl.router.cmd_BANG_.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(query_params));
} else {
return null;
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__11701__auto__)){
var vec__11763 = params__11701__auto__;
var query_params = cljs.core.nth.call(null,vec__11763,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/cmd",action__11700__auto___11766);

var action__11700__auto___11772 = (function (params__11701__auto__){
if(cljs.core.map_QMARK_.call(null,params__11701__auto__)){
var map__11767 = params__11701__auto__;
var map__11767__$1 = ((((!((map__11767 == null)))?(((((map__11767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11767):map__11767);
var query_params = cljs.core.get.call(null,map__11767__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
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
if(cljs.core.vector_QMARK_.call(null,params__11701__auto__)){
var vec__11769 = params__11701__auto__;
var query_params = cljs.core.nth.call(null,vec__11769,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/save",action__11700__auto___11772);

var action__11700__auto___11778 = (function (params__11701__auto__){
if(cljs.core.map_QMARK_.call(null,params__11701__auto__)){
var map__11773 = params__11701__auto__;
var map__11773__$1 = ((((!((map__11773 == null)))?(((((map__11773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11773):map__11773);
var query_params = cljs.core.get.call(null,map__11773__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(query_params))){
return appendToCM(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.state.get_filtered_history.call(null))].join(''));
} else {
return appendToCM(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.history))].join(''));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__11701__auto__)){
var vec__11775 = params__11701__auto__;
var query_params = cljs.core.nth.call(null,vec__11775,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/hist2CM",action__11700__auto___11778);

var action__11700__auto___11784 = (function (params__11701__auto__){
if(cljs.core.map_QMARK_.call(null,params__11701__auto__)){
var map__11779 = params__11701__auto__;
var map__11779__$1 = ((((!((map__11779 == null)))?(((((map__11779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11779):map__11779);
var query_params = cljs.core.get.call(null,map__11779__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
return initMediaRecorder(((cljs.core.not.call(null,new cljs.core.Keyword(null,"onlyAudio","onlyAudio",-871820517).cljs$core$IFn$_invoke$arity$1(query_params))) || (false)));
} else {
if(cljs.core.vector_QMARK_.call(null,params__11701__auto__)){
var vec__11781 = params__11701__auto__;
var query_params = cljs.core.nth.call(null,vec__11781,(0),null);
return initMediaRecorder(((cljs.core.not.call(null,new cljs.core.Keyword(null,"onlyAudio","onlyAudio",-871820517).cljs$core$IFn$_invoke$arity$1(query_params))) || (false)));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/initRec",action__11700__auto___11784);

var action__11700__auto___11790 = (function (params__11701__auto__){
if(cljs.core.map_QMARK_.call(null,params__11701__auto__)){
var map__11785 = params__11701__auto__;
var map__11785__$1 = ((((!((map__11785 == null)))?(((((map__11785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11785):map__11785);
var file = cljs.core.get.call(null,map__11785__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return fromUrlToCM(file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11701__auto__)){
var vec__11787 = params__11701__auto__;
var file = cljs.core.nth.call(null,vec__11787,(0),null);
return fromUrlToCM(file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/rscs/:file",action__11700__auto___11790);


//# sourceMappingURL=router.js.map
