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
goog.events.listen(cljs_browser_repl.router.history,goog.history.EventType.NAVIGATE,(function (p1__13124_SHARP_){
return cljs_browser_repl.router.handle_url_change_BANG_.call(null,p1__13124_SHARP_);
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
var action__9529__auto___13130 = (function (params__9530__auto__){
if(cljs.core.map_QMARK_.call(null,params__9530__auto__)){
var map__13125 = params__9530__auto__;
var map__13125__$1 = ((((!((map__13125 == null)))?(((((map__13125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13125):map__13125);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/index");
} else {
if(cljs.core.vector_QMARK_.call(null,params__9530__auto__)){
var vec__13127 = params__9530__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/index");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__9529__auto___13130);

var action__9529__auto___13136 = (function (params__9530__auto__){
if(cljs.core.map_QMARK_.call(null,params__9530__auto__)){
var map__13131 = params__9530__auto__;
var map__13131__$1 = ((((!((map__13131 == null)))?(((((map__13131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13131):map__13131);
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/new");
} else {
if(cljs.core.vector_QMARK_.call(null,params__9530__auto__)){
var vec__13133 = params__9530__auto__;
return cljs_browser_repl.router.navigate_BANG_.call(null,"/replica/new");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/new",action__9529__auto___13136);

var action__9529__auto___13142 = (function (params__9530__auto__){
if(cljs.core.map_QMARK_.call(null,params__9530__auto__)){
var map__13137 = params__9530__auto__;
var map__13137__$1 = ((((!((map__13137 == null)))?(((((map__13137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13137):map__13137);
var id = cljs.core.get.call(null,map__13137__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__13137__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__9530__auto__)){
var vec__13139 = params__9530__auto__;
var id = cljs.core.nth.call(null,vec__13139,(0),null);
var file = cljs.core.nth.call(null,vec__13139,(1),null);
return cljs_browser_repl.actions.notebook.from_gist_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/gist/:id/file/:file",action__9529__auto___13142);

var action__9529__auto___13148 = (function (params__9530__auto__){
if(cljs.core.map_QMARK_.call(null,params__9530__auto__)){
var map__13143 = params__9530__auto__;
var map__13143__$1 = ((((!((map__13143 == null)))?(((((map__13143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13143):map__13143);
var id = cljs.core.get.call(null,map__13143__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
if(cljs.core.vector_QMARK_.call(null,params__9530__auto__)){
var vec__13145 = params__9530__auto__;
var id = cljs.core.nth.call(null,vec__13145,(0),null);
return cljs_browser_repl.router.replace_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.router.get_token.call(null)),"/file/index"].join(''));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/notebook/:id",action__9529__auto___13148);

var action__9529__auto___13154 = (function (params__9530__auto__){
if(cljs.core.map_QMARK_.call(null,params__9530__auto__)){
var map__13149 = params__9530__auto__;
var map__13149__$1 = ((((!((map__13149 == null)))?(((((map__13149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13149):map__13149);
var id = cljs.core.get.call(null,map__13149__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__13149__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__9530__auto__)){
var vec__13151 = params__9530__auto__;
var id = cljs.core.nth.call(null,vec__13151,(0),null);
var file = cljs.core.nth.call(null,vec__13151,(1),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/notebook/:id/file/:file",action__9529__auto___13154);

var action__9529__auto___13160 = (function (params__9530__auto__){
if(cljs.core.map_QMARK_.call(null,params__9530__auto__)){
var map__13155 = params__9530__auto__;
var map__13155__$1 = ((((!((map__13155 == null)))?(((((map__13155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13155):map__13155);
var file = cljs.core.get.call(null,map__13155__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,"replica",file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__9530__auto__)){
var vec__13157 = params__9530__auto__;
var file = cljs.core.nth.call(null,vec__13157,(0),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,"replica",file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/replica/:file",action__9529__auto___13160);

var action__9529__auto___13166 = (function (params__9530__auto__){
if(cljs.core.map_QMARK_.call(null,params__9530__auto__)){
var map__13161 = params__9530__auto__;
var map__13161__$1 = ((((!((map__13161 == null)))?(((((map__13161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13161):map__13161);
var id = cljs.core.get.call(null,map__13161__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file = cljs.core.get.call(null,map__13161__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var pos = cljs.core.get.call(null,map__13161__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
if(cljs.core.vector_QMARK_.call(null,params__9530__auto__)){
var vec__13163 = params__9530__auto__;
var id = cljs.core.nth.call(null,vec__13163,(0),null);
var file = cljs.core.nth.call(null,vec__13163,(1),null);
var pos = cljs.core.nth.call(null,vec__13163,(2),null);
return cljs_browser_repl.actions.notebook.from_filesystem_BANG_.call(null,id,file,pos,false);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/follow/:id/:file/:pos",action__9529__auto___13166);

var action__9529__auto___13172 = (function (params__9530__auto__){
if(cljs.core.map_QMARK_.call(null,params__9530__auto__)){
var map__13167 = params__9530__auto__;
var map__13167__$1 = ((((!((map__13167 == null)))?(((((map__13167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13167):map__13167);
var pos = cljs.core.get.call(null,map__13167__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
if(cljs.core.vector_QMARK_.call(null,params__9530__auto__)){
var vec__13169 = params__9530__auto__;
var pos = cljs.core.nth.call(null,vec__13169,(0),null);
return cljs_browser_repl.actions.notebook.goto_BANG_.call(null,cljs.reader.read_string.call(null,pos));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/goto/:pos",action__9529__auto___13172);

cljs_browser_repl.router.cmd_BANG_ = (function cljs_browser_repl$router$cmd_BANG_(cmd){
cljs_browser_repl.actions.repl.repl_entry_BANG_.call(null,cljs.reader.read_string.call(null,cmd));

return cljs_browser_repl.router.replace_BANG_.call(null,"/idle");
});
var action__9529__auto___13178 = (function (params__9530__auto__){
if(cljs.core.map_QMARK_.call(null,params__9530__auto__)){
var map__13173 = params__9530__auto__;
var map__13173__$1 = ((((!((map__13173 == null)))?(((((map__13173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13173):map__13173);
var query_params = cljs.core.get.call(null,map__13173__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return cljs_browser_repl.router.cmd_BANG_.call(null,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(query_params));
} else {
return null;
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__9530__auto__)){
var vec__13175 = params__9530__auto__;
var query_params = cljs.core.nth.call(null,vec__13175,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/cmd",action__9529__auto___13178);

var action__9529__auto___13185 = (function (params__9530__auto__){
if(cljs.core.map_QMARK_.call(null,params__9530__auto__)){
var map__13180 = params__9530__auto__;
var map__13180__$1 = ((((!((map__13180 == null)))?(((((map__13180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13180):map__13180);
var query_params = cljs.core.get.call(null,map__13180__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
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
return cljs_browser_repl.net.file.download_object_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"scene","scene",1523800415)],[cljs.core.deref.call(null,cljs_browser_repl.state.history),cljs.core.mapv.call(null,((function (file_name,map__13180,map__13180__$1,query_params){
return (function (p1__13179_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217)],[p1__13179_SHARP_.name,p1__13179_SHARP_.doc.getValue()]);
});})(file_name,map__13180,map__13180__$1,query_params))
,cmDocs),dropTextTo(INS,"/ITL/scene get;/ITL/scene/* get x y xorigin yorigin rotatex rotatey rotatez shear scale color penWidth penColor penStyle brushStyle fontSize fontFamily fontStyle fontWeight effect;").join("")]))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),".edn"].join(''));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__9530__auto__)){
var vec__13182 = params__9530__auto__;
var query_params = cljs.core.nth.call(null,vec__13182,(0),null);
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
return cljs_browser_repl.net.file.download_object_BANG_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"scene","scene",1523800415)],[cljs.core.deref.call(null,cljs_browser_repl.state.history),cljs.core.mapv.call(null,((function (file_name,vec__13182,query_params){
return (function (p1__13179_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217)],[p1__13179_SHARP_.name,p1__13179_SHARP_.doc.getValue()]);
});})(file_name,vec__13182,query_params))
,cmDocs),dropTextTo(INS,"/ITL/scene get;/ITL/scene/* get x y xorigin yorigin rotatex rotatey rotatez shear scale color penWidth penColor penStyle brushStyle fontSize fontFamily fontStyle fontWeight effect;").join("")]))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),".edn"].join(''));
}
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/save",action__9529__auto___13185);

var action__9529__auto___13191 = (function (params__9530__auto__){
if(cljs.core.map_QMARK_.call(null,params__9530__auto__)){
var map__13186 = params__9530__auto__;
var map__13186__$1 = ((((!((map__13186 == null)))?(((((map__13186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13186):map__13186);
var query_params = cljs.core.get.call(null,map__13186__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(query_params))){
return appendToCM(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_browser_repl.state.get_filtered_history.call(null))].join(''));
} else {
return appendToCM(["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.history))].join(''));
}
} else {
if(cljs.core.vector_QMARK_.call(null,params__9530__auto__)){
var vec__13188 = params__9530__auto__;
var query_params = cljs.core.nth.call(null,vec__13188,(0),null);
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
secretary.core.add_route_BANG_.call(null,"/hist2CM",action__9529__auto___13191);

var action__9529__auto___13197 = (function (params__9530__auto__){
if(cljs.core.map_QMARK_.call(null,params__9530__auto__)){
var map__13192 = params__9530__auto__;
var map__13192__$1 = ((((!((map__13192 == null)))?(((((map__13192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13192):map__13192);
var file = cljs.core.get.call(null,map__13192__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return fromUrlToCM(file);
} else {
if(cljs.core.vector_QMARK_.call(null,params__9530__auto__)){
var vec__13194 = params__9530__auto__;
var file = cljs.core.nth.call(null,vec__13194,(0),null);
return fromUrlToCM(file);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/rscs/:file",action__9529__auto___13197);


//# sourceMappingURL=router.js.map
