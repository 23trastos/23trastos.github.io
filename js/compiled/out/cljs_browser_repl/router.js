// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_browser_repl.router');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('cljs.reader');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('cljs_browser_repl.state');
goog.require('cljs_browser_repl.actions.repl');
goog.require('cljs_browser_repl.actions.notebook');
goog.require('cljs_browser_repl.net.file');
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
goog.events.listen(cljs_browser_repl.router.history,goog.history.EventType.NAVIGATE,(function (p1__17814_SHARP_){
return cljs_browser_repl.router.handle_url_change_BANG_.call(null,p1__17814_SHARP_);
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
var action__11718__auto___17820 = (function (params__11719__auto__){
if(cljs.core.map_QMARK_.call(null,params__11719__auto__)){
var map__17815 = params__11719__auto__;
var map__17815__$1 = ((((!((map__17815 == null)))?(((((map__17815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17815):map__17815);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/notebook/replica/file/index");
} else {
if(cljs.core.vector_QMARK_.call(null,params__11719__auto__)){
var vec__17817 = params__11719__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/notebook/replica/file/index");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__11718__auto___17820);

var action__11718__auto___17826 = (function (params__11719__auto__){
if(cljs.core.map_QMARK_.call(null,params__11719__auto__)){
var map__17821 = params__11719__auto__;
var map__17821__$1 = ((((!((map__17821 == null)))?(((((map__17821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17821):map__17821);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/notebook/replica/file/new");
} else {
if(cljs.core.vector_QMARK_.call(null,params__11719__auto__)){
var vec__17823 = params__11719__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/notebook/replica/file/new");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/new",action__11718__auto___17826);

var action__11718__auto___17832 = (function (params__11719__auto__){
if(cljs.core.map_QMARK_.call(null,params__11719__auto__)){
var map__17827 = params__11719__auto__;
var map__17827__$1 = ((((!((map__17827 == null)))?(((((map__17827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17827):map__17827);
var id = cljs.core.get.call(null,map__17827__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
if(cljs.core.vector_QMARK_.call(null,params__11719__auto__)){
var vec__17829 = params__11719__auto__;
var id = cljs.core.nth.call(null,vec__17829,(0),null);
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/gist/:id",action__11718__auto___17832);

var action__11718__auto___17838 = (function (params__11719__auto__){
if(cljs.core.map_QMARK_.call(null,params__11719__auto__)){
var map__17833 = params__11719__auto__;
var map__17833__$1 = ((((!((map__17833 == null)))?(((((map__17833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17833):map__17833);
var id = cljs.core.get.call(null,map__17833__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__17833__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11719__auto__)){
var vec__17835 = params__11719__auto__;
var id = cljs.core.nth.call(null,vec__17835,(0),null);
var file = cljs.core.nth.call(null,vec__17835,(1),null);
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/gist/:id/file/:file",action__11718__auto___17838);

var action__11718__auto___17844 = (function (params__11719__auto__){
if(cljs.core.map_QMARK_.call(null,params__11719__auto__)){
var map__17839 = params__11719__auto__;
var map__17839__$1 = ((((!((map__17839 == null)))?(((((map__17839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17839):map__17839);
var id = cljs.core.get.call(null,map__17839__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__17839__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11719__auto__)){
var vec__17841 = params__11719__auto__;
var id = cljs.core.nth.call(null,vec__17841,(0),null);
var file = cljs.core.nth.call(null,vec__17841,(1),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/notebook/:id/file/:file",action__11718__auto___17844);

var action__11718__auto___17850 = (function (params__11719__auto__){
if(cljs.core.map_QMARK_.call(null,params__11719__auto__)){
var map__17845 = params__11719__auto__;
var map__17845__$1 = ((((!((map__17845 == null)))?(((((map__17845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17845):map__17845);
var id = cljs.core.get.call(null,map__17845__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__17845__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pos = cljs.core.get.call(null,map__17845__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11719__auto__)){
var vec__17847 = params__11719__auto__;
var id = cljs.core.nth.call(null,vec__17847,(0),null);
var file = cljs.core.nth.call(null,vec__17847,(1),null);
var pos = cljs.core.nth.call(null,vec__17847,(2),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/follow/:id/:file/:pos",action__11718__auto___17850);

var action__11718__auto___17856 = (function (params__11719__auto__){
if(cljs.core.map_QMARK_.call(null,params__11719__auto__)){
var map__17851 = params__11719__auto__;
var map__17851__$1 = ((((!((map__17851 == null)))?(((((map__17851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17851):map__17851);
var pos = cljs.core.get.call(null,map__17851__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
if(cljs.core.vector_QMARK_.call(null,params__11719__auto__)){
var vec__17853 = params__11719__auto__;
var pos = cljs.core.nth.call(null,vec__17853,(0),null);
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/goto/:pos",action__11718__auto___17856);

cljs_browser_repl.router.cmd_BANG_ = (function cljs_browser_repl$router$cmd_BANG_(cmd){
cljs_browser_repl.actions.repl.repl_entry_BANG_.call(null,cljs.reader.read_string.call(null,cmd));

return cljs_browser_repl.router.replace_BANG_.call(null,"/idle");
});
var action__11718__auto___17862 = (function (params__11719__auto__){
if(cljs.core.map_QMARK_.call(null,params__11719__auto__)){
var map__17857 = params__11719__auto__;
var map__17857__$1 = ((((!((map__17857 == null)))?(((((map__17857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17857):map__17857);
var query_params = cljs.core.get.call(null,map__17857__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return cljs_browser_repl.router.cmd_BANG_.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(query_params));
} else {
return null;
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__11719__auto__)){
var vec__17859 = params__11719__auto__;
var query_params = cljs.core.nth.call(null,vec__17859,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/cmd",action__11718__auto___17862);

var action__11718__auto___17868 = (function (params__11719__auto__){
if(cljs.core.map_QMARK_.call(null,params__11719__auto__)){
var map__17863 = params__11719__auto__;
var map__17863__$1 = ((((!((map__17863 == null)))?(((((map__17863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17863):map__17863);
var query_params = cljs.core.get.call(null,map__17863__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
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
if(cljs.core.vector_QMARK_.call(null,params__11719__auto__)){
var vec__17865 = params__11719__auto__;
var query_params = cljs.core.nth.call(null,vec__17865,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/save",action__11718__auto___17868);

var action__11718__auto___17874 = (function (params__11719__auto__){
if(cljs.core.map_QMARK_.call(null,params__11719__auto__)){
var map__17869 = params__11719__auto__;
var map__17869__$1 = ((((!((map__17869 == null)))?(((((map__17869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17869):map__17869);
return cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.history,cljs.core.vec.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"date","date",-1463434462),cljs_browser_repl.state.get_filtered_history.call(null))));
} else {
if(cljs.core.vector_QMARK_.call(null,params__11719__auto__)){
var vec__17871 = params__11719__auto__;
return cljs.core.reset_BANG_.call(null,cljs_browser_repl.state.history,cljs.core.vec.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"date","date",-1463434462),cljs_browser_repl.state.get_filtered_history.call(null))));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/filter",action__11718__auto___17874);


//# sourceMappingURL=router.js.map
