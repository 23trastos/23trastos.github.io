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
goog.events.listen(cljs_browser_repl.router.history,goog.history.EventType.NAVIGATE,(function (p1__11762_SHARP_){
return cljs_browser_repl.router.handle_url_change_BANG_.call(null,p1__11762_SHARP_);
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
var action__11750__auto___11768 = (function (params__11751__auto__){
if(cljs.core.map_QMARK_.call(null,params__11751__auto__)){
var map__11763 = params__11751__auto__;
var map__11763__$1 = ((((!((map__11763 == null)))?(((((map__11763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11763):map__11763);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/index");
} else {
if(cljs.core.vector_QMARK_.call(null,params__11751__auto__)){
var vec__11765 = params__11751__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/index");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__11750__auto___11768);

var action__11750__auto___11774 = (function (params__11751__auto__){
if(cljs.core.map_QMARK_.call(null,params__11751__auto__)){
var map__11769 = params__11751__auto__;
var map__11769__$1 = ((((!((map__11769 == null)))?(((((map__11769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11769):map__11769);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/new");
} else {
if(cljs.core.vector_QMARK_.call(null,params__11751__auto__)){
var vec__11771 = params__11751__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/new");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/new",action__11750__auto___11774);

var action__11750__auto___11780 = (function (params__11751__auto__){
if(cljs.core.map_QMARK_.call(null,params__11751__auto__)){
var map__11775 = params__11751__auto__;
var map__11775__$1 = ((((!((map__11775 == null)))?(((((map__11775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11775):map__11775);
var id = cljs.core.get.call(null,map__11775__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__11775__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11751__auto__)){
var vec__11777 = params__11751__auto__;
var id = cljs.core.nth.call(null,vec__11777,(0),null);
var file = cljs.core.nth.call(null,vec__11777,(1),null);
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/gist/:id/file/:file",action__11750__auto___11780);

var action__11750__auto___11786 = (function (params__11751__auto__){
if(cljs.core.map_QMARK_.call(null,params__11751__auto__)){
var map__11781 = params__11751__auto__;
var map__11781__$1 = ((((!((map__11781 == null)))?(((((map__11781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11781):map__11781);
var id = cljs.core.get.call(null,map__11781__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
if(cljs.core.vector_QMARK_.call(null,params__11751__auto__)){
var vec__11783 = params__11751__auto__;
var id = cljs.core.nth.call(null,vec__11783,(0),null);
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/notebook/:id",action__11750__auto___11786);

var action__11750__auto___11792 = (function (params__11751__auto__){
if(cljs.core.map_QMARK_.call(null,params__11751__auto__)){
var map__11787 = params__11751__auto__;
var map__11787__$1 = ((((!((map__11787 == null)))?(((((map__11787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11787):map__11787);
var id = cljs.core.get.call(null,map__11787__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__11787__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11751__auto__)){
var vec__11789 = params__11751__auto__;
var id = cljs.core.nth.call(null,vec__11789,(0),null);
var file = cljs.core.nth.call(null,vec__11789,(1),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/notebook/:id/file/:file",action__11750__auto___11792);

var action__11750__auto___11798 = (function (params__11751__auto__){
if(cljs.core.map_QMARK_.call(null,params__11751__auto__)){
var map__11793 = params__11751__auto__;
var map__11793__$1 = ((((!((map__11793 == null)))?(((((map__11793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11793):map__11793);
var file = cljs.core.get.call(null,map__11793__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,"replica",file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11751__auto__)){
var vec__11795 = params__11751__auto__;
var file = cljs.core.nth.call(null,vec__11795,(0),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,"replica",file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/replica/:file",action__11750__auto___11798);

var action__11750__auto___11804 = (function (params__11751__auto__){
if(cljs.core.map_QMARK_.call(null,params__11751__auto__)){
var map__11799 = params__11751__auto__;
var map__11799__$1 = ((((!((map__11799 == null)))?(((((map__11799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11799):map__11799);
var id = cljs.core.get.call(null,map__11799__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__11799__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pos = cljs.core.get.call(null,map__11799__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11751__auto__)){
var vec__11801 = params__11751__auto__;
var id = cljs.core.nth.call(null,vec__11801,(0),null);
var file = cljs.core.nth.call(null,vec__11801,(1),null);
var pos = cljs.core.nth.call(null,vec__11801,(2),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/follow/:id/:file/:pos",action__11750__auto___11804);

var action__11750__auto___11810 = (function (params__11751__auto__){
if(cljs.core.map_QMARK_.call(null,params__11751__auto__)){
var map__11805 = params__11751__auto__;
var map__11805__$1 = ((((!((map__11805 == null)))?(((((map__11805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11805):map__11805);
var pos = cljs.core.get.call(null,map__11805__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
if(cljs.core.vector_QMARK_.call(null,params__11751__auto__)){
var vec__11807 = params__11751__auto__;
var pos = cljs.core.nth.call(null,vec__11807,(0),null);
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/goto/:pos",action__11750__auto___11810);

cljs_browser_repl.router.cmd_BANG_ = (function cljs_browser_repl$router$cmd_BANG_(cmd){
cljs_browser_repl.actions.repl.repl_entry_BANG_.call(null,cljs.reader.read_string.call(null,cmd));

return cljs_browser_repl.router.replace_BANG_.call(null,"/idle");
});
var action__11750__auto___11816 = (function (params__11751__auto__){
if(cljs.core.map_QMARK_.call(null,params__11751__auto__)){
var map__11811 = params__11751__auto__;
var map__11811__$1 = ((((!((map__11811 == null)))?(((((map__11811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11811):map__11811);
var query_params = cljs.core.get.call(null,map__11811__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return cljs_browser_repl.router.cmd_BANG_.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(query_params));
} else {
return null;
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__11751__auto__)){
var vec__11813 = params__11751__auto__;
var query_params = cljs.core.nth.call(null,vec__11813,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/cmd",action__11750__auto___11816);

var action__11750__auto___11822 = (function (params__11751__auto__){
if(cljs.core.map_QMARK_.call(null,params__11751__auto__)){
var map__11817 = params__11751__auto__;
var map__11817__$1 = ((((!((map__11817 == null)))?(((((map__11817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11817):map__11817);
var query_params = cljs.core.get.call(null,map__11817__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
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
if(cljs.core.vector_QMARK_.call(null,params__11751__auto__)){
var vec__11819 = params__11751__auto__;
var query_params = cljs.core.nth.call(null,vec__11819,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/save",action__11750__auto___11822);

var action__11750__auto___11828 = (function (params__11751__auto__){
if(cljs.core.map_QMARK_.call(null,params__11751__auto__)){
var map__11823 = params__11751__auto__;
var map__11823__$1 = ((((!((map__11823 == null)))?(((((map__11823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11823):map__11823);
var query_params = cljs.core.get.call(null,map__11823__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(query_params))){
return appendToCM(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.state.get_filtered_history.call(null))].join(''));
} else {
return appendToCM(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.history))].join(''));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__11751__auto__)){
var vec__11825 = params__11751__auto__;
var query_params = cljs.core.nth.call(null,vec__11825,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/hist2CM",action__11750__auto___11828);

var action__11750__auto___11834 = (function (params__11751__auto__){
if(cljs.core.map_QMARK_.call(null,params__11751__auto__)){
var map__11829 = params__11751__auto__;
var map__11829__$1 = ((((!((map__11829 == null)))?(((((map__11829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11829):map__11829);
var query_params = cljs.core.get.call(null,map__11829__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
return initMediaRecorder(((cljs.core.not.call(null,new cljs.core.Keyword(null,"onlyAudio","onlyAudio",-871820517).cljs$core$IFn$_invoke$arity$1(query_params))) || (false)));
} else {
if(cljs.core.vector_QMARK_.call(null,params__11751__auto__)){
var vec__11831 = params__11751__auto__;
var query_params = cljs.core.nth.call(null,vec__11831,(0),null);
return initMediaRecorder(((cljs.core.not.call(null,new cljs.core.Keyword(null,"onlyAudio","onlyAudio",-871820517).cljs$core$IFn$_invoke$arity$1(query_params))) || (false)));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/initRec",action__11750__auto___11834);

var action__11750__auto___11840 = (function (params__11751__auto__){
if(cljs.core.map_QMARK_.call(null,params__11751__auto__)){
var map__11835 = params__11751__auto__;
var map__11835__$1 = ((((!((map__11835 == null)))?(((((map__11835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11835):map__11835);
var file = cljs.core.get.call(null,map__11835__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return fromUrlToCM(file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11751__auto__)){
var vec__11837 = params__11751__auto__;
var file = cljs.core.nth.call(null,vec__11837,(0),null);
return fromUrlToCM(file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/rscs/:file",action__11750__auto___11840);


//# sourceMappingURL=router.js.map
