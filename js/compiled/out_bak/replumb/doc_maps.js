// Compiled by ClojureScript 1.10.339 {}
goog.provide('replumb.doc_maps');
goog.require('cljs.core');
replumb.doc_maps.special_doc_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"try","try",-1273693247,null),new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"recur","recur",1202958259,null),new cljs.core.Symbol(null,"set!","set!",250714521,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"throw","throw",595905694,null),new cljs.core.Symbol(null,"def","def",597100991,null)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"try","try",-1273693247,null),new cljs.core.Symbol(null,"expr*","expr*",1589098295,null),new cljs.core.Symbol(null,"catch-clause*","catch-clause*",-964586959,null),new cljs.core.Symbol(null,"finally-clause?","finally-clause?",1528454240,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"catch-clause => (catch classname name expr*)\n  finally-clause => (finally expr*)\n  Catches and handles JavaScript exceptions."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"exprs*","exprs*",-655728998,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Evaluates the expressions in order and returns the value of\n  the last. If no expressions are supplied, returns nil."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"test","test",-2076896892,null),new cljs.core.Symbol(null,"then","then",2101129597,null),new cljs.core.Symbol(null,"else?","else?",1919791169,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Evaluates test. If not the singular values nil or false,\n  evaluates and yields then, otherwise, evaluates and yields else. If\n  else is not supplied it defaults to nil."], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"Constructor.","Constructor.",-1235287741,null),new cljs.core.Symbol(null,"args*","args*",-422966086,null)),cljs.core.list(new cljs.core.Symbol(null,"new","new",-444906321,null),new cljs.core.Symbol(null,"Constructor","Constructor",568976268,null),new cljs.core.Symbol(null,"args*","args*",-422966086,null))], null),new cljs.core.Keyword(null,"url","url",276297046),"java_interop#new",new cljs.core.Keyword(null,"doc","doc",1913296891),"The args, if any, are evaluated from left to right, and\n  passed to the JavaScript constructor. The constructed object is\n  returned."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"docstring?","docstring?",-180217883,null),new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),new cljs.core.Symbol(null,"references*","references*",-66310813,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"You must currently use the ns form only with the following caveats\n\n    * You must use the :only form of :use\n    * :require supports :as and :refer\n      - both options can be skipped\n      - in this case a symbol can be used as a libspec directly\n        - that is, (:require lib.foo) and (:require [lib.foo]) are both\n          supported and mean the same thing\n      - prefix lists are not supported\n    * The only option for :refer-clojure is :exclude\n    * :import is available for importing Google Closure classes\n      - ClojureScript types and records should be brought in with :use\n        or :require :refer, not :import ed\n    * Macros are written in Clojure, and are referenced via the new\n      :require-macros / :use-macros options to ns\n      - :require-macros and :use-macros support the same forms that\n        :require and :use do\n\n  Implicit macro loading: If a namespace is required or used, and that\n  namespace itself requires or uses macros from its own namespace, then\n  the macros will be implicitly required or used using the same\n  specifications. This oftentimes leads to simplified library usage,\n  such that the consuming namespace need not be concerned about\n  explicitly distinguishing between whether certain vars are functions\n  or macros.\n\n  Inline macro specification: As a convenience, :require can be given\n  either :include-macros true or :refer-macros [syms...]. Both desugar\n  into forms which explicitly load the matching Clojure file containing\n  macros. (This works independently of whether the namespace being\n  required internally requires or uses its own macros.) For example:\n\n  (ns testme.core\n  (:require [foo.core :as foo :refer [foo-fn] :include-macros true]\n            [woz.core :as woz :refer [woz-fn] :refer-macros [app jx]]))\n\n  is sugar for\n\n  (ns testme.core\n  (:require [foo.core :as foo :refer [foo-fn]]\n            [woz.core :as woz :refer [woz-fn]])\n  (:require-macros [foo.core :as foo]\n                   [woz.core :as woz :refer [app jx]]))"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),new cljs.core.Symbol(null,"exprs*","exprs*",-655728998,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Evaluates the exprs in order, then, in parallel, rebinds\n  the bindings of the recursion point to the values of the exprs.\n  Execution then jumps back to the recursion point, a loop or fn method."], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),new cljs.core.Symbol(null,"var-symbol","var-symbol",-1433547785,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null)),cljs.core.list(new cljs.core.Symbol(null,"set!","set!",250714521,null),cljs.core.list(new cljs.core.Symbol(null,".-",".-",-1911493695,null),new cljs.core.Symbol(null,"instance-expr","instance-expr",-511471609,null),new cljs.core.Symbol(null,"instanceFieldName-symbol","instanceFieldName-symbol",866178706,null)),new cljs.core.Symbol(null,"expr","expr",-1908713478,null))], null),new cljs.core.Keyword(null,"url","url",276297046),"vars#set",new cljs.core.Keyword(null,"doc","doc",1913296891),"Used to set vars and JavaScript object fields"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,".instanceMethod",".instanceMethod",1947849091,null),new cljs.core.Symbol(null,"instance","instance",-480817523,null),new cljs.core.Symbol(null,"args*","args*",-422966086,null)),cljs.core.list(new cljs.core.Symbol(null,".-instanceField",".-instanceField",-615422244,null),new cljs.core.Symbol(null,"instance","instance",-480817523,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"The instance member form works for methods and fields.\n  They all expand into calls to the dot operator at macroexpansion time."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"symbol","symbol",601958831,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"The symbol must resolve to a var, and the Var object\nitself (not its value) is returned. The reader macro #'x expands to (var x)."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"form","form",16469056,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Yields the unevaluated form."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"The expr is evaluated and thrown."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"symbol","symbol",601958831,null),new cljs.core.Symbol(null,"doc-string?","doc-string?",393166599,null),new cljs.core.Symbol(null,"init?","init?",2078713026,null))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and interns a global var with the name\n  of symbol in the current namespace (*ns*) or locates such a var if\n  it already exists.  If init is supplied, it is evaluated, and the\n  root binding of the var is set to the resulting value.  If init is\n  not supplied, the root binding of the var is unaffected."], null)]);
replumb.doc_maps.repl_special_doc_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"doc","doc",-741138878,null),new cljs.core.Symbol(null,"import","import",241030818,null),new cljs.core.Symbol(null,"find-doc","find-doc",-1096800949,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null),new cljs.core.Symbol(null,"pst","pst",-1996688947,null),new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),new cljs.core.Symbol(null,"require","require",1172530194,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"load-file","load-file",1215944857,null),new cljs.core.Symbol(null,"require-macros","require-macros",-1946488353,null),new cljs.core.Symbol(null,"apropos","apropos",-1511857537,null)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Prints documentation for a var or special form given its name"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"import-symbols-or-lists","import-symbols-or-lists",-2088338377,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"import-list => (closure-namespace constructor-name-symbols*)\n\n  For each name in constructor-name-symbols, adds a mapping from name to the\n  constructor named by closure-namespace to the current namespace. Use :import in the ns\n  macro in preference to calling this directly."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re-string-or-pattern","re-string-or-pattern",1573211781,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Prints documentation for any var whose documentation or name\n  contains a match for re-string-or-pattern"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",2082130287,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Prints a sorted directory of public vars in a namespace"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Prints a stack trace of the exception.\n\n  If none supplied, uses the root cause of the most recent repl exception (*e)"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Sets *cljs-ns* to the namespace named by the symbol, creating it if needed."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"  Loads libs, skipping any that are already loaded. Each argument is\n  either a libspec that identifies a lib or a flag that modifies how all the identified\n  libs are loaded. Use :require in the ns macro in preference to calling this\n  directly.\n\n  Libs\n\n  A 'lib' is a named set of resources in classpath whose contents define a\n  library of ClojureScript code. Lib names are symbols and each lib is associated\n  with a ClojureScript namespace. A lib's name also locates its root directory\n  within classpath using Java's package name to classpath-relative path mapping.\n  All resources in a lib should be contained in the directory structure under its\n  root directory. All definitions a lib makes should be in its associated namespace.\n\n  'require loads a lib by loading its root resource. The root resource path\n  is derived from the lib name in the following manner:\n  Consider a lib named by the symbol 'x.y.z; it has the root directory\n  <classpath>/x/y/, and its root resource is <classpath>/x/y/z.clj. The root\n  resource should contain code to create the lib's namespace (usually by using\n  the ns macro) and load any additional lib resources.\n\n  Libspecs\n\n  A libspec is a lib name or a vector containing a lib name followed by\n  options expressed as sequential keywords and arguments.\n\n  Recognized options:\n  :as takes a symbol as its argument and makes that symbol an alias to the\n    lib's namespace in the current namespace.\n  :refer takes a list of symbols to refer from the namespace..\n  :refer-macros takes a list of macro symbols to refer from the namespace.\n  :include-macros true causes macros from the namespace to be required.\n\n  Flags\n\n  A flag is a keyword.\n  Recognized flags: :reload, :reload-all, :verbose\n  :reload forces loading of all the identified libs even if they are\n    already loaded\n  :reload-all implies :reload and also forces loading of all libs that the\n    identified libs directly or indirectly load via require or use\n  :verbose triggers printing information about each load, alias, and refer\n\n  Example:\n\n  The following would load the library clojure.string :as string.\n\n  (require '[clojure/string :as string])"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Prints the source code for the given symbol, if it can find it.\n  This requires that the symbol resolve to a Var defined in a\n  namespace for which the source is available.\n\n  Example: (source filter)"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Sequentially read and evaluate the set of forms\n                          contained in the file."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Similar to the require REPL special function but\n    only for macros."], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"str-or-pattern","str-or-pattern",985040835,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a regular expression or stringable thing, return a seq of all\n  public definitions in all currently-loaded namespaces that match the\n  str-or-pattern."], null)]);
replumb.doc_maps.special_doc = (function replumb$doc_maps$special_doc(name_symbol){
return cljs.core.assoc.call(null,replumb.doc_maps.special_doc_map.call(null,name_symbol),new cljs.core.Keyword(null,"name","name",1843675177),name_symbol,new cljs.core.Keyword(null,"special-form","special-form",-1326536374),true);
});
replumb.doc_maps.repl_special_doc = (function replumb$doc_maps$repl_special_doc(name_symbol){
return cljs.core.assoc.call(null,replumb.doc_maps.repl_special_doc_map.call(null,name_symbol),new cljs.core.Keyword(null,"name","name",1843675177),name_symbol,new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725),true);
});
replumb.doc_maps.repl_special_QMARK_ = (function replumb$doc_maps$repl_special_QMARK_(form){
var and__3938__auto__ = cljs.core.seq_QMARK_.call(null,form);
if(and__3938__auto__){
return replumb.doc_maps.repl_special_doc_map.call(null,cljs.core.first.call(null,form));
} else {
return and__3938__auto__;
}
});

//# sourceMappingURL=doc_maps.js.map
