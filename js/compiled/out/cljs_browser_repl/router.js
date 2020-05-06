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
goog.events.listen(cljs_browser_repl.router.history,goog.history.EventType.NAVIGATE,(function (p1__20654_SHARP_){
return cljs_browser_repl.router.handle_url_change_BANG_.call(null,p1__20654_SHARP_);
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
var action__13462__auto___20660 = (function (params__13463__auto__){
if(cljs.core.map_QMARK_.call(null,params__13463__auto__)){
var map__20655 = params__13463__auto__;
var map__20655__$1 = ((((!((map__20655 == null)))?(((((map__20655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20655):map__20655);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/notebook/replica/file/index");
} else {
if(cljs.core.vector_QMARK_.call(null,params__13463__auto__)){
var vec__20657 = params__13463__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/notebook/replica/file/index");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__13462__auto___20660);

var action__13462__auto___20666 = (function (params__13463__auto__){
if(cljs.core.map_QMARK_.call(null,params__13463__auto__)){
var map__20661 = params__13463__auto__;
var map__20661__$1 = ((((!((map__20661 == null)))?(((((map__20661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20661):map__20661);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/notebook/replica/file/new");
} else {
if(cljs.core.vector_QMARK_.call(null,params__13463__auto__)){
var vec__20663 = params__13463__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/notebook/replica/file/new");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/new",action__13462__auto___20666);

var action__13462__auto___20672 = (function (params__13463__auto__){
if(cljs.core.map_QMARK_.call(null,params__13463__auto__)){
var map__20667 = params__13463__auto__;
var map__20667__$1 = ((((!((map__20667 == null)))?(((((map__20667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20667):map__20667);
var id = cljs.core.get.call(null,map__20667__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
if(cljs.core.vector_QMARK_.call(null,params__13463__auto__)){
var vec__20669 = params__13463__auto__;
var id = cljs.core.nth.call(null,vec__20669,(0),null);
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/gist/:id",action__13462__auto___20672);

var action__13462__auto___20678 = (function (params__13463__auto__){
if(cljs.core.map_QMARK_.call(null,params__13463__auto__)){
var map__20673 = params__13463__auto__;
var map__20673__$1 = ((((!((map__20673 == null)))?(((((map__20673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20673):map__20673);
var id = cljs.core.get.call(null,map__20673__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__20673__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__13463__auto__)){
var vec__20675 = params__13463__auto__;
var id = cljs.core.nth.call(null,vec__20675,(0),null);
var file = cljs.core.nth.call(null,vec__20675,(1),null);
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/gist/:id/file/:file",action__13462__auto___20678);

var action__13462__auto___20684 = (function (params__13463__auto__){
if(cljs.core.map_QMARK_.call(null,params__13463__auto__)){
var map__20679 = params__13463__auto__;
var map__20679__$1 = ((((!((map__20679 == null)))?(((((map__20679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20679):map__20679);
var id = cljs.core.get.call(null,map__20679__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
if(cljs.core.vector_QMARK_.call(null,params__13463__auto__)){
var vec__20681 = params__13463__auto__;
var id = cljs.core.nth.call(null,vec__20681,(0),null);
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/notebook/:id",action__13462__auto___20684);

var action__13462__auto___20690 = (function (params__13463__auto__){
if(cljs.core.map_QMARK_.call(null,params__13463__auto__)){
var map__20685 = params__13463__auto__;
var map__20685__$1 = ((((!((map__20685 == null)))?(((((map__20685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20685):map__20685);
var id = cljs.core.get.call(null,map__20685__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__20685__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__13463__auto__)){
var vec__20687 = params__13463__auto__;
var id = cljs.core.nth.call(null,vec__20687,(0),null);
var file = cljs.core.nth.call(null,vec__20687,(1),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/notebook/:id/file/:file",action__13462__auto___20690);

var action__13462__auto___20696 = (function (params__13463__auto__){
if(cljs.core.map_QMARK_.call(null,params__13463__auto__)){
var map__20691 = params__13463__auto__;
var map__20691__$1 = ((((!((map__20691 == null)))?(((((map__20691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20691):map__20691);
var id = cljs.core.get.call(null,map__20691__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__20691__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pos = cljs.core.get.call(null,map__20691__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
if(cljs.core.vector_QMARK_.call(null,params__13463__auto__)){
var vec__20693 = params__13463__auto__;
var id = cljs.core.nth.call(null,vec__20693,(0),null);
var file = cljs.core.nth.call(null,vec__20693,(1),null);
var pos = cljs.core.nth.call(null,vec__20693,(2),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/follow/:id/:file/:pos",action__13462__auto___20696);

var action__13462__auto___20702 = (function (params__13463__auto__){
if(cljs.core.map_QMARK_.call(null,params__13463__auto__)){
var map__20697 = params__13463__auto__;
var map__20697__$1 = ((((!((map__20697 == null)))?(((((map__20697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20697):map__20697);
var pos = cljs.core.get.call(null,map__20697__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
if(cljs.core.vector_QMARK_.call(null,params__13463__auto__)){
var vec__20699 = params__13463__auto__;
var pos = cljs.core.nth.call(null,vec__20699,(0),null);
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/goto/:pos",action__13462__auto___20702);

cljs_browser_repl.router.cmd_BANG_ = (function cljs_browser_repl$router$cmd_BANG_(cmd){
cljs_browser_repl.actions.repl.repl_entry_BANG_.call(null,cljs.reader.read_string.call(null,cmd));

return cljs_browser_repl.router.replace_BANG_.call(null,"/idle");
});
var action__13462__auto___20708 = (function (params__13463__auto__){
if(cljs.core.map_QMARK_.call(null,params__13463__auto__)){
var map__20703 = params__13463__auto__;
var map__20703__$1 = ((((!((map__20703 == null)))?(((((map__20703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20703):map__20703);
var query_params = cljs.core.get.call(null,map__20703__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return cljs_browser_repl.router.cmd_BANG_.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(query_params));
} else {
return null;
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__13463__auto__)){
var vec__20705 = params__13463__auto__;
var query_params = cljs.core.nth.call(null,vec__20705,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/cmd",action__13462__auto___20708);

var action__13462__auto___20714 = (function (params__13463__auto__){
if(cljs.core.map_QMARK_.call(null,params__13463__auto__)){
var map__20709 = params__13463__auto__;
var map__20709__$1 = ((((!((map__20709 == null)))?(((((map__20709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20709):map__20709);
var query_params = cljs.core.get.call(null,map__20709__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
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
if(cljs.core.vector_QMARK_.call(null,params__13463__auto__)){
var vec__20711 = params__13463__auto__;
var query_params = cljs.core.nth.call(null,vec__20711,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/save",action__13462__auto___20714);

var action__13462__auto___20720 = (function (params__13463__auto__){
if(cljs.core.map_QMARK_.call(null,params__13463__auto__)){
var map__20715 = params__13463__auto__;
var map__20715__$1 = ((((!((map__20715 == null)))?(((((map__20715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20715):map__20715);
var query_params = cljs.core.get.call(null,map__20715__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(query_params))){
return appendToCM(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.state.get_filtered_history.call(null))].join(''));
} else {
return appendToCM(CM,["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.history))].join(''));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__13463__auto__)){
var vec__20717 = params__13463__auto__;
var query_params = cljs.core.nth.call(null,vec__20717,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/hist2CM",action__13462__auto___20720);

var action__13462__auto___20726 = (function (params__13463__auto__){
if(cljs.core.map_QMARK_.call(null,params__13463__auto__)){
var map__20721 = params__13463__auto__;
var map__20721__$1 = ((((!((map__20721 == null)))?(((((map__20721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20721):map__20721);
var file = cljs.core.get.call(null,map__20721__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return fromUrlToCM(file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__13463__auto__)){
var vec__20723 = params__13463__auto__;
var file = cljs.core.nth.call(null,vec__20723,(0),null);
return fromUrlToCM(file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/rscs/:file",action__13462__auto___20726);


//# sourceMappingURL=router.js.map
