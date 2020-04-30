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
goog.events.listen(cljs_browser_repl.router.history,goog.history.EventType.NAVIGATE,(function (p1__29103_SHARP_){
return cljs_browser_repl.router.handle_url_change_BANG_.call(null,p1__29103_SHARP_);
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
var action__13743__auto___29109 = (function (params__13744__auto__){
if(cljs.core.map_QMARK_.call(null,params__13744__auto__)){
var map__29104 = params__13744__auto__;
var map__29104__$1 = ((((!((map__29104 == null)))?(((((map__29104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29104):map__29104);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/notebook/replica/file/index");
} else {
if(cljs.core.vector_QMARK_.call(null,params__13744__auto__)){
var vec__29106 = params__13744__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/notebook/replica/file/index");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__13743__auto___29109);

var action__13743__auto___29115 = (function (params__13744__auto__){
if(cljs.core.map_QMARK_.call(null,params__13744__auto__)){
var map__29110 = params__13744__auto__;
var map__29110__$1 = ((((!((map__29110 == null)))?(((((map__29110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29110):map__29110);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/notebook/replica/file/new");
} else {
if(cljs.core.vector_QMARK_.call(null,params__13744__auto__)){
var vec__29112 = params__13744__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/notebook/replica/file/new");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/new",action__13743__auto___29115);

var action__13743__auto___29121 = (function (params__13744__auto__){
if(cljs.core.map_QMARK_.call(null,params__13744__auto__)){
var map__29116 = params__13744__auto__;
var map__29116__$1 = ((((!((map__29116 == null)))?(((((map__29116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29116):map__29116);
var id = cljs.core.get.call(null,map__29116__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
if(cljs.core.vector_QMARK_.call(null,params__13744__auto__)){
var vec__29118 = params__13744__auto__;
var id = cljs.core.nth.call(null,vec__29118,(0),null);
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/gist/:id",action__13743__auto___29121);

var action__13743__auto___29127 = (function (params__13744__auto__){
if(cljs.core.map_QMARK_.call(null,params__13744__auto__)){
var map__29122 = params__13744__auto__;
var map__29122__$1 = ((((!((map__29122 == null)))?(((((map__29122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29122):map__29122);
var id = cljs.core.get.call(null,map__29122__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__29122__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__13744__auto__)){
var vec__29124 = params__13744__auto__;
var id = cljs.core.nth.call(null,vec__29124,(0),null);
var file = cljs.core.nth.call(null,vec__29124,(1),null);
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/gist/:id/file/:file",action__13743__auto___29127);

var action__13743__auto___29133 = (function (params__13744__auto__){
if(cljs.core.map_QMARK_.call(null,params__13744__auto__)){
var map__29128 = params__13744__auto__;
var map__29128__$1 = ((((!((map__29128 == null)))?(((((map__29128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29128):map__29128);
var id = cljs.core.get.call(null,map__29128__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__29128__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__13744__auto__)){
var vec__29130 = params__13744__auto__;
var id = cljs.core.nth.call(null,vec__29130,(0),null);
var file = cljs.core.nth.call(null,vec__29130,(1),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/notebook/:id/file/:file",action__13743__auto___29133);

var action__13743__auto___29139 = (function (params__13744__auto__){
if(cljs.core.map_QMARK_.call(null,params__13744__auto__)){
var map__29134 = params__13744__auto__;
var map__29134__$1 = ((((!((map__29134 == null)))?(((((map__29134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29134):map__29134);
var id = cljs.core.get.call(null,map__29134__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__29134__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pos = cljs.core.get.call(null,map__29134__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
if(cljs.core.vector_QMARK_.call(null,params__13744__auto__)){
var vec__29136 = params__13744__auto__;
var id = cljs.core.nth.call(null,vec__29136,(0),null);
var file = cljs.core.nth.call(null,vec__29136,(1),null);
var pos = cljs.core.nth.call(null,vec__29136,(2),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/follow/:id/:file/:pos",action__13743__auto___29139);

var action__13743__auto___29145 = (function (params__13744__auto__){
if(cljs.core.map_QMARK_.call(null,params__13744__auto__)){
var map__29140 = params__13744__auto__;
var map__29140__$1 = ((((!((map__29140 == null)))?(((((map__29140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29140):map__29140);
var pos = cljs.core.get.call(null,map__29140__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
if(cljs.core.vector_QMARK_.call(null,params__13744__auto__)){
var vec__29142 = params__13744__auto__;
var pos = cljs.core.nth.call(null,vec__29142,(0),null);
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/goto/:pos",action__13743__auto___29145);

cljs_browser_repl.router.cmd_BANG_ = (function cljs_browser_repl$router$cmd_BANG_(cmd){
cljs_browser_repl.actions.repl.repl_entry_BANG_.call(null,cljs.reader.read_string.call(null,cmd));

return cljs_browser_repl.router.replace_BANG_.call(null,"/idle");
});
var action__13743__auto___29151 = (function (params__13744__auto__){
if(cljs.core.map_QMARK_.call(null,params__13744__auto__)){
var map__29146 = params__13744__auto__;
var map__29146__$1 = ((((!((map__29146 == null)))?(((((map__29146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29146):map__29146);
var query_params = cljs.core.get.call(null,map__29146__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return cljs_browser_repl.router.cmd_BANG_.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(query_params));
} else {
return null;
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__13744__auto__)){
var vec__29148 = params__13744__auto__;
var query_params = cljs.core.nth.call(null,vec__29148,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/cmd",action__13743__auto___29151);

var action__13743__auto___29157 = (function (params__13744__auto__){
if(cljs.core.map_QMARK_.call(null,params__13744__auto__)){
var map__29152 = params__13744__auto__;
var map__29152__$1 = ((((!((map__29152 == null)))?(((((map__29152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29152):map__29152);
var query_params = cljs.core.get.call(null,map__29152__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
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
if(cljs.core.vector_QMARK_.call(null,params__13744__auto__)){
var vec__29154 = params__13744__auto__;
var query_params = cljs.core.nth.call(null,vec__29154,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/save",action__13743__auto___29157);

var action__13743__auto___29163 = (function (params__13744__auto__){
if(cljs.core.map_QMARK_.call(null,params__13744__auto__)){
var map__29158 = params__13744__auto__;
var map__29158__$1 = ((((!((map__29158 == null)))?(((((map__29158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29158):map__29158);
var query_params = cljs.core.get.call(null,map__29158__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(query_params))){
return appendToCM(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.state.get_filtered_history.call(null))].join(''));
} else {
return appendToCM(CM,["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.history))].join(''));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__13744__auto__)){
var vec__29160 = params__13744__auto__;
var query_params = cljs.core.nth.call(null,vec__29160,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/hist2CM",action__13743__auto___29163);

var action__13743__auto___29169 = (function (params__13744__auto__){
if(cljs.core.map_QMARK_.call(null,params__13744__auto__)){
var map__29164 = params__13744__auto__;
var map__29164__$1 = ((((!((map__29164 == null)))?(((((map__29164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29164):map__29164);
var file = cljs.core.get.call(null,map__29164__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return fromUrlToCM(file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__13744__auto__)){
var vec__29166 = params__13744__auto__;
var file = cljs.core.nth.call(null,vec__29166,(0),null);
return fromUrlToCM(file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/rscs/:file",action__13743__auto___29169);


//# sourceMappingURL=router.js.map
