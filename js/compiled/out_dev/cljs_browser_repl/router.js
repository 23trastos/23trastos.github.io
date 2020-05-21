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
goog.events.listen(cljs_browser_repl.router.history,goog.history.EventType.NAVIGATE,(function (p1__12336_SHARP_){
return cljs_browser_repl.router.handle_url_change_BANG_.call(null,p1__12336_SHARP_);
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
var action__12157__auto___12342 = (function (params__12158__auto__){
if(cljs.core.map_QMARK_.call(null,params__12158__auto__)){
var map__12337 = params__12158__auto__;
var map__12337__$1 = ((((!((map__12337 == null)))?(((((map__12337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12337):map__12337);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/index");
} else {
if(cljs.core.vector_QMARK_.call(null,params__12158__auto__)){
var vec__12339 = params__12158__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/index");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__12157__auto___12342);

var action__12157__auto___12348 = (function (params__12158__auto__){
if(cljs.core.map_QMARK_.call(null,params__12158__auto__)){
var map__12343 = params__12158__auto__;
var map__12343__$1 = ((((!((map__12343 == null)))?(((((map__12343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12343):map__12343);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/new");
} else {
if(cljs.core.vector_QMARK_.call(null,params__12158__auto__)){
var vec__12345 = params__12158__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/new");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/new",action__12157__auto___12348);

var action__12157__auto___12354 = (function (params__12158__auto__){
if(cljs.core.map_QMARK_.call(null,params__12158__auto__)){
var map__12349 = params__12158__auto__;
var map__12349__$1 = ((((!((map__12349 == null)))?(((((map__12349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12349):map__12349);
var id = cljs.core.get.call(null,map__12349__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__12349__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__12158__auto__)){
var vec__12351 = params__12158__auto__;
var id = cljs.core.nth.call(null,vec__12351,(0),null);
var file = cljs.core.nth.call(null,vec__12351,(1),null);
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/gist/:id/file/:file",action__12157__auto___12354);

var action__12157__auto___12360 = (function (params__12158__auto__){
if(cljs.core.map_QMARK_.call(null,params__12158__auto__)){
var map__12355 = params__12158__auto__;
var map__12355__$1 = ((((!((map__12355 == null)))?(((((map__12355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12355):map__12355);
var id = cljs.core.get.call(null,map__12355__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
if(cljs.core.vector_QMARK_.call(null,params__12158__auto__)){
var vec__12357 = params__12158__auto__;
var id = cljs.core.nth.call(null,vec__12357,(0),null);
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/notebook/:id",action__12157__auto___12360);

var action__12157__auto___12366 = (function (params__12158__auto__){
if(cljs.core.map_QMARK_.call(null,params__12158__auto__)){
var map__12361 = params__12158__auto__;
var map__12361__$1 = ((((!((map__12361 == null)))?(((((map__12361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12361):map__12361);
var id = cljs.core.get.call(null,map__12361__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__12361__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__12158__auto__)){
var vec__12363 = params__12158__auto__;
var id = cljs.core.nth.call(null,vec__12363,(0),null);
var file = cljs.core.nth.call(null,vec__12363,(1),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/notebook/:id/file/:file",action__12157__auto___12366);

var action__12157__auto___12372 = (function (params__12158__auto__){
if(cljs.core.map_QMARK_.call(null,params__12158__auto__)){
var map__12367 = params__12158__auto__;
var map__12367__$1 = ((((!((map__12367 == null)))?(((((map__12367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12367):map__12367);
var file = cljs.core.get.call(null,map__12367__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,"replica",file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__12158__auto__)){
var vec__12369 = params__12158__auto__;
var file = cljs.core.nth.call(null,vec__12369,(0),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,"replica",file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/replica/:file",action__12157__auto___12372);

var action__12157__auto___12378 = (function (params__12158__auto__){
if(cljs.core.map_QMARK_.call(null,params__12158__auto__)){
var map__12373 = params__12158__auto__;
var map__12373__$1 = ((((!((map__12373 == null)))?(((((map__12373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12373):map__12373);
var id = cljs.core.get.call(null,map__12373__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__12373__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pos = cljs.core.get.call(null,map__12373__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
if(cljs.core.vector_QMARK_.call(null,params__12158__auto__)){
var vec__12375 = params__12158__auto__;
var id = cljs.core.nth.call(null,vec__12375,(0),null);
var file = cljs.core.nth.call(null,vec__12375,(1),null);
var pos = cljs.core.nth.call(null,vec__12375,(2),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/follow/:id/:file/:pos",action__12157__auto___12378);

var action__12157__auto___12384 = (function (params__12158__auto__){
if(cljs.core.map_QMARK_.call(null,params__12158__auto__)){
var map__12379 = params__12158__auto__;
var map__12379__$1 = ((((!((map__12379 == null)))?(((((map__12379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12379):map__12379);
var pos = cljs.core.get.call(null,map__12379__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
if(cljs.core.vector_QMARK_.call(null,params__12158__auto__)){
var vec__12381 = params__12158__auto__;
var pos = cljs.core.nth.call(null,vec__12381,(0),null);
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/goto/:pos",action__12157__auto___12384);

cljs_browser_repl.router.cmd_BANG_ = (function cljs_browser_repl$router$cmd_BANG_(cmd){
cljs_browser_repl.actions.repl.repl_entry_BANG_.call(null,cljs.reader.read_string.call(null,cmd));

return cljs_browser_repl.router.replace_BANG_.call(null,"/idle");
});
var action__12157__auto___12390 = (function (params__12158__auto__){
if(cljs.core.map_QMARK_.call(null,params__12158__auto__)){
var map__12385 = params__12158__auto__;
var map__12385__$1 = ((((!((map__12385 == null)))?(((((map__12385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12385):map__12385);
var query_params = cljs.core.get.call(null,map__12385__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return cljs_browser_repl.router.cmd_BANG_.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(query_params));
} else {
return null;
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__12158__auto__)){
var vec__12387 = params__12158__auto__;
var query_params = cljs.core.nth.call(null,vec__12387,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/cmd",action__12157__auto___12390);

var action__12157__auto___12397 = (function (params__12158__auto__){
if(cljs.core.map_QMARK_.call(null,params__12158__auto__)){
var map__12392 = params__12158__auto__;
var map__12392__$1 = ((((!((map__12392 == null)))?(((((map__12392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12392):map__12392);
var query_params = cljs.core.get.call(null,map__12392__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
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
return cljs_browser_repl.net.file.download_object_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"scene","scene",1523800415)],[cljs.core.deref.call(null,cljs_browser_repl.state.history),cljs.core.mapv.call(null,((function (file_name,map__12392,map__12392__$1,query_params){
return (function (p1__12391_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217)],[p1__12391_SHARP_.name,p1__12391_SHARP_.doc.getValue()]);
});})(file_name,map__12392,map__12392__$1,query_params))
,cmDocs),dropTextTo(INS,"/ITL/scene get;/ITL/scene/* get x y xorigin yorigin rotatex rotatey rotatez shear scale color penWidth penColor penStyle brushStyle fontSize fontFamily fontStyle fontWeight effect;").join("")]))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),".edn"].join(''));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__12158__auto__)){
var vec__12394 = params__12158__auto__;
var query_params = cljs.core.nth.call(null,vec__12394,(0),null);
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
return cljs_browser_repl.net.file.download_object_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"scene","scene",1523800415)],[cljs.core.deref.call(null,cljs_browser_repl.state.history),cljs.core.mapv.call(null,((function (file_name,vec__12394,query_params){
return (function (p1__12391_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217)],[p1__12391_SHARP_.name,p1__12391_SHARP_.doc.getValue()]);
});})(file_name,vec__12394,query_params))
,cmDocs),dropTextTo(INS,"/ITL/scene get;/ITL/scene/* get x y xorigin yorigin rotatex rotatey rotatez shear scale color penWidth penColor penStyle brushStyle fontSize fontFamily fontStyle fontWeight effect;").join("")]))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),".edn"].join(''));
}
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/save",action__12157__auto___12397);

var action__12157__auto___12403 = (function (params__12158__auto__){
if(cljs.core.map_QMARK_.call(null,params__12158__auto__)){
var map__12398 = params__12158__auto__;
var map__12398__$1 = ((((!((map__12398 == null)))?(((((map__12398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12398):map__12398);
var query_params = cljs.core.get.call(null,map__12398__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(query_params))){
return appendToCM(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.state.get_filtered_history.call(null))].join(''));
} else {
return appendToCM(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.history))].join(''));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__12158__auto__)){
var vec__12400 = params__12158__auto__;
var query_params = cljs.core.nth.call(null,vec__12400,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/hist2CM",action__12157__auto___12403);

var action__12157__auto___12409 = (function (params__12158__auto__){
if(cljs.core.map_QMARK_.call(null,params__12158__auto__)){
var map__12404 = params__12158__auto__;
var map__12404__$1 = ((((!((map__12404 == null)))?(((((map__12404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12404):map__12404);
var file = cljs.core.get.call(null,map__12404__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return fromUrlToCM(file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__12158__auto__)){
var vec__12406 = params__12158__auto__;
var file = cljs.core.nth.call(null,vec__12406,(0),null);
return fromUrlToCM(file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/rscs/:file",action__12157__auto___12409);


//# sourceMappingURL=router.js.map
