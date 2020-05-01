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
goog.events.listen(cljs_browser_repl.router.history,goog.history.EventType.NAVIGATE,(function (p1__108024_SHARP_){
return cljs_browser_repl.router.handle_url_change_BANG_.call(null,p1__108024_SHARP_);
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
var action__13707__auto___108030 = (function (params__13708__auto__){
if(cljs.core.map_QMARK_.call(null,params__13708__auto__)){
var map__108025 = params__13708__auto__;
var map__108025__$1 = ((((!((map__108025 == null)))?(((((map__108025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__108025):map__108025);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/notebook/replica/file/index");
} else {
if(cljs.core.vector_QMARK_.call(null,params__13708__auto__)){
var vec__108027 = params__13708__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/notebook/replica/file/index");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__13707__auto___108030);

var action__13707__auto___108036 = (function (params__13708__auto__){
if(cljs.core.map_QMARK_.call(null,params__13708__auto__)){
var map__108031 = params__13708__auto__;
var map__108031__$1 = ((((!((map__108031 == null)))?(((((map__108031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__108031):map__108031);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/notebook/replica/file/new");
} else {
if(cljs.core.vector_QMARK_.call(null,params__13708__auto__)){
var vec__108033 = params__13708__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/notebook/replica/file/new");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/new",action__13707__auto___108036);

var action__13707__auto___108042 = (function (params__13708__auto__){
if(cljs.core.map_QMARK_.call(null,params__13708__auto__)){
var map__108037 = params__13708__auto__;
var map__108037__$1 = ((((!((map__108037 == null)))?(((((map__108037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__108037):map__108037);
var id = cljs.core.get.call(null,map__108037__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
if(cljs.core.vector_QMARK_.call(null,params__13708__auto__)){
var vec__108039 = params__13708__auto__;
var id = cljs.core.nth.call(null,vec__108039,(0),null);
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/gist/:id",action__13707__auto___108042);

var action__13707__auto___108048 = (function (params__13708__auto__){
if(cljs.core.map_QMARK_.call(null,params__13708__auto__)){
var map__108043 = params__13708__auto__;
var map__108043__$1 = ((((!((map__108043 == null)))?(((((map__108043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__108043):map__108043);
var id = cljs.core.get.call(null,map__108043__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__108043__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__13708__auto__)){
var vec__108045 = params__13708__auto__;
var id = cljs.core.nth.call(null,vec__108045,(0),null);
var file = cljs.core.nth.call(null,vec__108045,(1),null);
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/gist/:id/file/:file",action__13707__auto___108048);

var action__13707__auto___108054 = (function (params__13708__auto__){
if(cljs.core.map_QMARK_.call(null,params__13708__auto__)){
var map__108049 = params__13708__auto__;
var map__108049__$1 = ((((!((map__108049 == null)))?(((((map__108049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__108049):map__108049);
var id = cljs.core.get.call(null,map__108049__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
if(cljs.core.vector_QMARK_.call(null,params__13708__auto__)){
var vec__108051 = params__13708__auto__;
var id = cljs.core.nth.call(null,vec__108051,(0),null);
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/notebook/:id",action__13707__auto___108054);

var action__13707__auto___108060 = (function (params__13708__auto__){
if(cljs.core.map_QMARK_.call(null,params__13708__auto__)){
var map__108055 = params__13708__auto__;
var map__108055__$1 = ((((!((map__108055 == null)))?(((((map__108055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__108055):map__108055);
var id = cljs.core.get.call(null,map__108055__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__108055__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__13708__auto__)){
var vec__108057 = params__13708__auto__;
var id = cljs.core.nth.call(null,vec__108057,(0),null);
var file = cljs.core.nth.call(null,vec__108057,(1),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/notebook/:id/file/:file",action__13707__auto___108060);

var action__13707__auto___108066 = (function (params__13708__auto__){
if(cljs.core.map_QMARK_.call(null,params__13708__auto__)){
var map__108061 = params__13708__auto__;
var map__108061__$1 = ((((!((map__108061 == null)))?(((((map__108061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__108061):map__108061);
var id = cljs.core.get.call(null,map__108061__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__108061__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pos = cljs.core.get.call(null,map__108061__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
if(cljs.core.vector_QMARK_.call(null,params__13708__auto__)){
var vec__108063 = params__13708__auto__;
var id = cljs.core.nth.call(null,vec__108063,(0),null);
var file = cljs.core.nth.call(null,vec__108063,(1),null);
var pos = cljs.core.nth.call(null,vec__108063,(2),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/follow/:id/:file/:pos",action__13707__auto___108066);

var action__13707__auto___108072 = (function (params__13708__auto__){
if(cljs.core.map_QMARK_.call(null,params__13708__auto__)){
var map__108067 = params__13708__auto__;
var map__108067__$1 = ((((!((map__108067 == null)))?(((((map__108067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__108067):map__108067);
var pos = cljs.core.get.call(null,map__108067__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
if(cljs.core.vector_QMARK_.call(null,params__13708__auto__)){
var vec__108069 = params__13708__auto__;
var pos = cljs.core.nth.call(null,vec__108069,(0),null);
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/goto/:pos",action__13707__auto___108072);

cljs_browser_repl.router.cmd_BANG_ = (function cljs_browser_repl$router$cmd_BANG_(cmd){
cljs_browser_repl.actions.repl.repl_entry_BANG_.call(null,cljs.reader.read_string.call(null,cmd));

return cljs_browser_repl.router.replace_BANG_.call(null,"/idle");
});
var action__13707__auto___108078 = (function (params__13708__auto__){
if(cljs.core.map_QMARK_.call(null,params__13708__auto__)){
var map__108073 = params__13708__auto__;
var map__108073__$1 = ((((!((map__108073 == null)))?(((((map__108073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__108073):map__108073);
var query_params = cljs.core.get.call(null,map__108073__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return cljs_browser_repl.router.cmd_BANG_.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(query_params));
} else {
return null;
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__13708__auto__)){
var vec__108075 = params__13708__auto__;
var query_params = cljs.core.nth.call(null,vec__108075,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/cmd",action__13707__auto___108078);

var action__13707__auto___108084 = (function (params__13708__auto__){
if(cljs.core.map_QMARK_.call(null,params__13708__auto__)){
var map__108079 = params__13708__auto__;
var map__108079__$1 = ((((!((map__108079 == null)))?(((((map__108079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__108079):map__108079);
var query_params = cljs.core.get.call(null,map__108079__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
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
if(cljs.core.vector_QMARK_.call(null,params__13708__auto__)){
var vec__108081 = params__13708__auto__;
var query_params = cljs.core.nth.call(null,vec__108081,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/save",action__13707__auto___108084);

var action__13707__auto___108090 = (function (params__13708__auto__){
if(cljs.core.map_QMARK_.call(null,params__13708__auto__)){
var map__108085 = params__13708__auto__;
var map__108085__$1 = ((((!((map__108085 == null)))?(((((map__108085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__108085):map__108085);
var query_params = cljs.core.get.call(null,map__108085__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(query_params))){
return appendToCM(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.state.get_filtered_history.call(null))].join(''));
} else {
return appendToCM(CM,["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.history))].join(''));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__13708__auto__)){
var vec__108087 = params__13708__auto__;
var query_params = cljs.core.nth.call(null,vec__108087,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/hist2CM",action__13707__auto___108090);

var action__13707__auto___108096 = (function (params__13708__auto__){
if(cljs.core.map_QMARK_.call(null,params__13708__auto__)){
var map__108091 = params__13708__auto__;
var map__108091__$1 = ((((!((map__108091 == null)))?(((((map__108091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__108091):map__108091);
var file = cljs.core.get.call(null,map__108091__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return fromUrlToCM(file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__13708__auto__)){
var vec__108093 = params__13708__auto__;
var file = cljs.core.nth.call(null,vec__108093,(0),null);
return fromUrlToCM(file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/rscs/:file",action__13707__auto___108096);


//# sourceMappingURL=router.js.map
