// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs_browser_repl.ui.repl_input');
goog.require('cljs.core');
goog.require('reagent.dom');
goog.require('clojure.string');
goog.require('cljs_browser_repl.state');
goog.require('cljs_browser_repl.compiler');
goog.require('cljs_browser_repl.actions.repl');
goog.require('replica.utils');
cljs_browser_repl.ui.repl_input.get_val = (function cljs_browser_repl$ui$repl_input$get_val(e){
return e.target.value;
});
/**
 * When shift+enter adds a new line. When only enter if the input is valid it
 *   runs the callback function and clears value and triggers the resize. If the
 *   input is not valid i'll do as if it was a shift+enter
 */
cljs_browser_repl.ui.repl_input.enter_pressed_BANG_ = (function cljs_browser_repl$ui$repl_input$enter_pressed_BANG_(e){
var shift_QMARK_ = e.shiftKey;
var ctrl_QMARK_ = e.ctrlKey;
var string = clojure.string.trim.call(null,cljs_browser_repl.ui.repl_input.get_val.call(null,e));
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.not.call(null,shift_QMARK_);
if(and__3938__auto__){
return cljs_browser_repl.compiler.is_readable_QMARK_.call(null,cljs_browser_repl.ui.repl_input.get_val.call(null,e));
} else {
return and__3938__auto__;
}
})())){
if(cljs.core.truth_(ctrl_QMARK_)){
replica.utils.create_command_BANG_.call(null,string);
} else {
cljs_browser_repl.actions.repl.repl_entry_BANG_.call(null,string);
}

e.preventDefault();

return cljs_browser_repl.actions.repl.new_input_BANG_.call(null,"");
} else {
return null;
}
});
cljs_browser_repl.ui.repl_input.repl_input_raw = (function cljs_browser_repl$ui$repl_input$repl_input_raw(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.repl-input","div.repl-input",-1804001456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.repl-input-pre","span.repl-input-pre",-619018267),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.current_ns))," =>"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.repl-input-post","div.repl-input-post",-811847672),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.repl-input-input","textarea.repl-input-input",117805625),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
var G__11844 = e.key;
switch (G__11844) {
case "Enter":
return cljs_browser_repl.ui.repl_input.enter_pressed_BANG_.call(null,e);

break;
case "Escape":
return e.target.blur();

break;
default:
return null;

}
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__11843_SHARP_){
return cljs_browser_repl.actions.repl.new_input_BANG_.call(null,cljs_browser_repl.ui.repl_input.get_val.call(null,p1__11843_SHARP_));
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type any cljs/INScore/replica valid code and press ENTER to evaluate",new cljs.core.Keyword(null,"rows","rows",850049680),(1),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,cljs_browser_repl.state.input)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["repl-input-msg ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.repl_info)))].join('')], null),new cljs.core.Keyword(null,"msg","msg",-1386103444).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs_browser_repl.state.repl_info))], null)], null)], null);
});
cljs_browser_repl.ui.repl_input.repl_input = cljs_browser_repl.ui.repl_input.repl_input_raw;

//# sourceMappingURL=repl_input.js.map
