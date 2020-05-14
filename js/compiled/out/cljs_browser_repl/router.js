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
goog.events.listen(cljs_browser_repl.router.history,goog.history.EventType.NAVIGATE,(function (p1__13690_SHARP_){
return cljs_browser_repl.router.handle_url_change_BANG_.call(null,p1__13690_SHARP_);
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
var action__11750__auto___13696 = (function (params__11751__auto__){
if(cljs.core.map_QMARK_.call(null,params__11751__auto__)){
var map__13691 = params__11751__auto__;
var map__13691__$1 = ((((!((map__13691 == null)))?(((((map__13691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13691):map__13691);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/index");
} else {
if(cljs.core.vector_QMARK_.call(null,params__11751__auto__)){
var vec__13693 = params__11751__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/index");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,/\//,action__11750__auto___13696);

var action__11750__auto___13702 = (function (params__11751__auto__){
if(cljs.core.map_QMARK_.call(null,params__11751__auto__)){
var map__13697 = params__11751__auto__;
var map__13697__$1 = ((((!((map__13697 == null)))?(((((map__13697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13697):map__13697);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/new");
} else {
if(cljs.core.vector_QMARK_.call(null,params__11751__auto__)){
var vec__13699 = params__11751__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/new");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/new",action__11750__auto___13702);

var action__11750__auto___13708 = (function (params__11751__auto__){
if(cljs.core.map_QMARK_.call(null,params__11751__auto__)){
var map__13703 = params__11751__auto__;
var map__13703__$1 = ((((!((map__13703 == null)))?(((((map__13703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13703):map__13703);
var id = cljs.core.get.call(null,map__13703__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__13703__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11751__auto__)){
var vec__13705 = params__11751__auto__;
var id = cljs.core.nth.call(null,vec__13705,(0),null);
var file = cljs.core.nth.call(null,vec__13705,(1),null);
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/gist/:id/file/:file",action__11750__auto___13708);

var action__11750__auto___13714 = (function (params__11751__auto__){
if(cljs.core.map_QMARK_.call(null,params__11751__auto__)){
var map__13709 = params__11751__auto__;
var map__13709__$1 = ((((!((map__13709 == null)))?(((((map__13709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13709):map__13709);
var id = cljs.core.get.call(null,map__13709__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
if(cljs.core.vector_QMARK_.call(null,params__11751__auto__)){
var vec__13711 = params__11751__auto__;
var id = cljs.core.nth.call(null,vec__13711,(0),null);
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/notebook/:id",action__11750__auto___13714);

var action__11750__auto___13720 = (function (params__11751__auto__){
if(cljs.core.map_QMARK_.call(null,params__11751__auto__)){
var map__13715 = params__11751__auto__;
var map__13715__$1 = ((((!((map__13715 == null)))?(((((map__13715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13715):map__13715);
var id = cljs.core.get.call(null,map__13715__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__13715__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11751__auto__)){
var vec__13717 = params__11751__auto__;
var id = cljs.core.nth.call(null,vec__13717,(0),null);
var file = cljs.core.nth.call(null,vec__13717,(1),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/notebook/:id/file/:file",action__11750__auto___13720);

var action__11750__auto___13726 = (function (params__11751__auto__){
if(cljs.core.map_QMARK_.call(null,params__11751__auto__)){
var map__13721 = params__11751__auto__;
var map__13721__$1 = ((((!((map__13721 == null)))?(((((map__13721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13721):map__13721);
var file = cljs.core.get.call(null,map__13721__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,"replica",file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11751__auto__)){
var vec__13723 = params__11751__auto__;
var file = cljs.core.nth.call(null,vec__13723,(0),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,"replica",file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/replica/:file",action__11750__auto___13726);

var action__11750__auto___13732 = (function (params__11751__auto__){
if(cljs.core.map_QMARK_.call(null,params__11751__auto__)){
var map__13727 = params__11751__auto__;
var map__13727__$1 = ((((!((map__13727 == null)))?(((((map__13727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13727):map__13727);
var id = cljs.core.get.call(null,map__13727__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__13727__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pos = cljs.core.get.call(null,map__13727__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11751__auto__)){
var vec__13729 = params__11751__auto__;
var id = cljs.core.nth.call(null,vec__13729,(0),null);
var file = cljs.core.nth.call(null,vec__13729,(1),null);
var pos = cljs.core.nth.call(null,vec__13729,(2),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/follow/:id/:file/:pos",action__11750__auto___13732);

var action__11750__auto___13738 = (function (params__11751__auto__){
if(cljs.core.map_QMARK_.call(null,params__11751__auto__)){
var map__13733 = params__11751__auto__;
var map__13733__$1 = ((((!((map__13733 == null)))?(((((map__13733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13733):map__13733);
var pos = cljs.core.get.call(null,map__13733__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
if(cljs.core.vector_QMARK_.call(null,params__11751__auto__)){
var vec__13735 = params__11751__auto__;
var pos = cljs.core.nth.call(null,vec__13735,(0),null);
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/goto/:pos",action__11750__auto___13738);

cljs_browser_repl.router.cmd_BANG_ = (function cljs_browser_repl$router$cmd_BANG_(cmd){
cljs_browser_repl.actions.repl.repl_entry_BANG_.call(null,cljs.reader.read_string.call(null,cmd));

return cljs_browser_repl.router.replace_BANG_.call(null,"/idle");
});
var action__11750__auto___13744 = (function (params__11751__auto__){
if(cljs.core.map_QMARK_.call(null,params__11751__auto__)){
var map__13739 = params__11751__auto__;
var map__13739__$1 = ((((!((map__13739 == null)))?(((((map__13739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13739):map__13739);
var query_params = cljs.core.get.call(null,map__13739__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return cljs_browser_repl.router.cmd_BANG_.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(query_params));
} else {
return null;
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__11751__auto__)){
var vec__13741 = params__11751__auto__;
var query_params = cljs.core.nth.call(null,vec__13741,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/cmd",action__11750__auto___13744);

var action__11750__auto___13751 = (function (params__11751__auto__){
if(cljs.core.map_QMARK_.call(null,params__11751__auto__)){
var map__13746 = params__11751__auto__;
var map__13746__$1 = ((((!((map__13746 == null)))?(((((map__13746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13746):map__13746);
var query_params = cljs.core.get.call(null,map__13746__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
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
return cljs_browser_repl.net.file.download_object_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"scene","scene",1523800415)],[cljs.core.deref.call(null,cljs_browser_repl.state.history),cljs.core.mapv.call(null,((function (file_name,map__13746,map__13746__$1,query_params){
return (function (p1__13745_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217)],[p1__13745_SHARP_.name,p1__13745_SHARP_.doc.getValue()]);
});})(file_name,map__13746,map__13746__$1,query_params))
,cmDocs),dropTextTo(INS,"/ITL/scene get;/ITL/scene/* get x y xorigin yorigin rotatex rotatey rotatez shear scale color penWidth penColor penStyle brushStyle fontSize fontFamily fontStyle fontWeight effect;").join("")]))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),".edn"].join(''));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__11751__auto__)){
var vec__13748 = params__11751__auto__;
var query_params = cljs.core.nth.call(null,vec__13748,(0),null);
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
return cljs_browser_repl.net.file.download_object_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"scene","scene",1523800415)],[cljs.core.deref.call(null,cljs_browser_repl.state.history),cljs.core.mapv.call(null,((function (file_name,vec__13748,query_params){
return (function (p1__13745_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217)],[p1__13745_SHARP_.name,p1__13745_SHARP_.doc.getValue()]);
});})(file_name,vec__13748,query_params))
,cmDocs),dropTextTo(INS,"/ITL/scene get;/ITL/scene/* get x y xorigin yorigin rotatex rotatey rotatez shear scale color penWidth penColor penStyle brushStyle fontSize fontFamily fontStyle fontWeight effect;").join("")]))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),".edn"].join(''));
}
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/save",action__11750__auto___13751);

var action__11750__auto___13757 = (function (params__11751__auto__){
if(cljs.core.map_QMARK_.call(null,params__11751__auto__)){
var map__13752 = params__11751__auto__;
var map__13752__$1 = ((((!((map__13752 == null)))?(((((map__13752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13752):map__13752);
var query_params = cljs.core.get.call(null,map__13752__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(query_params))){
return appendToCM(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.state.get_filtered_history.call(null))].join(''));
} else {
return appendToCM(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.history))].join(''));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__11751__auto__)){
var vec__13754 = params__11751__auto__;
var query_params = cljs.core.nth.call(null,vec__13754,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/hist2CM",action__11750__auto___13757);

var action__11750__auto___13763 = (function (params__11751__auto__){
if(cljs.core.map_QMARK_.call(null,params__11751__auto__)){
var map__13758 = params__11751__auto__;
var map__13758__$1 = ((((!((map__13758 == null)))?(((((map__13758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13758):map__13758);
var query_params = cljs.core.get.call(null,map__13758__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
return initMediaRecorder(((cljs.core.not.call(null,new cljs.core.Keyword(null,"onlyAudio","onlyAudio",-871820517).cljs$core$IFn$_invoke$arity$1(query_params))) || (false)));
} else {
if(cljs.core.vector_QMARK_.call(null,params__11751__auto__)){
var vec__13760 = params__11751__auto__;
var query_params = cljs.core.nth.call(null,vec__13760,(0),null);
return initMediaRecorder(((cljs.core.not.call(null,new cljs.core.Keyword(null,"onlyAudio","onlyAudio",-871820517).cljs$core$IFn$_invoke$arity$1(query_params))) || (false)));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/initRec",action__11750__auto___13763);

var action__11750__auto___13769 = (function (params__11751__auto__){
if(cljs.core.map_QMARK_.call(null,params__11751__auto__)){
var map__13764 = params__11751__auto__;
var map__13764__$1 = ((((!((map__13764 == null)))?(((((map__13764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13764):map__13764);
var file = cljs.core.get.call(null,map__13764__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return fromUrlToCM(file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__11751__auto__)){
var vec__13766 = params__11751__auto__;
var file = cljs.core.nth.call(null,vec__13766,(0),null);
return fromUrlToCM(file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/rscs/:file",action__11750__auto___13769);


//# sourceMappingURL=router.js.map
