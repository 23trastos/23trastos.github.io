// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_browser_repl.ui.repl_input');
goog.require('cljs.core');
goog.require('reagent.dom');
goog.require('clojure.string');
goog.require('cljs_browser_repl.state');
goog.require('cljs_browser_repl.compiler');
goog.require('cljs_browser_repl.actions.repl');
goog.require('replica.utils');
cljs_browser_repl.ui.repl_input.resize = (function cljs_browser_repl$ui$repl_input$resize(node){
node.style.height = "auto";

return node.style.height = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node.scrollHeight),"px"].join('');
});
cljs_browser_repl.ui.repl_input.get_val = (function cljs_browser_repl$ui$repl_input$get_val(e){
return e.target.value;
});
/**
 * When shift+enter adds a new line. When only enter if the input is valid it
 *   runs the callback function and clears value and triggers the resize. If the
 *   input is not valid i'll do as if it was a shift+enter
 */
cljs_browser_repl.ui.repl_input.enter_pressed_BANG_ = (function cljs_browser_repl$ui$repl_input$enter_pressed_BANG_(e,valid_QMARK_,send_input){
var shift_QMARK_ = e.shiftKey;
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.not.call(null,shift_QMARK_);
if(and__3938__auto__){
return valid_QMARK_;
} else {
return and__3938__auto__;
}
})())){
send_input.call(null,clojure.string.trim.call(null,cljs_browser_repl.ui.repl_input.get_val.call(null,e)));

e.preventDefault();

return cljs_browser_repl.actions.repl.new_input_BANG_.call(null,"");
} else {
return null;
}
});
cljs_browser_repl.ui.repl_input.repl_input_raw = (function cljs_browser_repl$ui$repl_input$repl_input_raw(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.repl-input","div.repl-input",-1804001456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.repl-input-pre","span.repl-input-pre",-619018267),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_ns))," =>"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.repl-input-post","div.repl-input-post",-811847672),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.repl-input-input","textarea.repl-input-input",117805625),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
if(cljs.core.truth_(e.ctrlKey)){
var G__22199_22201 = e.key;
switch (G__22199_22201) {
case "Enter":
replica.utils.create_command_BANG_.call(null,clojure.string.trim.call(null,cljs_browser_repl.ui.repl_input.get_val.call(null,e)));

break;
default:

}
} else {
}

var G__22200 = e.key;
switch (G__22200) {
case "Enter":
return cljs_browser_repl.ui.repl_input.enter_pressed_BANG_.call(null,e,cljs_browser_repl.compiler.is_readable_QMARK_.call(null,cljs_browser_repl.ui.repl_input.get_val.call(null,e)),cljs_browser_repl.actions.repl.repl_entry_BANG_);

break;
case "Escape":
return e.target.blur();

break;
default:
return null;

}
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__22198_SHARP_){
return cljs_browser_repl.actions.repl.new_input_BANG_.call(null,cljs_browser_repl.ui.repl_input.get_val.call(null,p1__22198_SHARP_));
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"REPL here. Type any cljs valid code and press ENTER to evaluate",new cljs.core.Keyword(null,"rows","rows",850049680),(1),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,cljs_browser_repl.state.input)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["repl-input-msg ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.repl_info)))].join('')], null),new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.repl_info))], null)], null)], null);
});
cljs_browser_repl.ui.repl_input.repl_input = cljs.core.with_meta.call(null,cljs_browser_repl.ui.repl_input.repl_input_raw,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,old_argv){
var input = reagent.dom.dom_node.call(null,this$).querySelector(".repl-input-input");
return cljs_browser_repl.ui.repl_input.resize.call(null,input);
})], null));

//# sourceMappingURL=repl_input.js.map
