// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14855 = arguments.length;
switch (G__14855) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14856 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14856 = (function (f,blockable,meta14857){
this.f = f;
this.blockable = blockable;
this.meta14857 = meta14857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14858,meta14857__$1){
var self__ = this;
var _14858__$1 = this;
return (new cljs.core.async.t_cljs$core$async14856(self__.f,self__.blockable,meta14857__$1));
});

cljs.core.async.t_cljs$core$async14856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14858){
var self__ = this;
var _14858__$1 = this;
return self__.meta14857;
});

cljs.core.async.t_cljs$core$async14856.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14856.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14856.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async14856.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14856.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14857","meta14857",705526294,null)], null);
});

cljs.core.async.t_cljs$core$async14856.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14856.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14856";

cljs.core.async.t_cljs$core$async14856.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async14856");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14856.
 */
cljs.core.async.__GT_t_cljs$core$async14856 = (function cljs$core$async$__GT_t_cljs$core$async14856(f__$1,blockable__$1,meta14857){
return (new cljs.core.async.t_cljs$core$async14856(f__$1,blockable__$1,meta14857));
});

}

return (new cljs.core.async.t_cljs$core$async14856(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14862 = arguments.length;
switch (G__14862) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14865 = arguments.length;
switch (G__14865) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14868 = arguments.length;
switch (G__14868) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_14870 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_14870);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_14870,ret){
return (function (){
return fn1.call(null,val_14870);
});})(val_14870,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14872 = arguments.length;
switch (G__14872) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___14874 = n;
var x_14875 = (0);
while(true){
if((x_14875 < n__4408__auto___14874)){
(a[x_14875] = x_14875);

var G__14876 = (x_14875 + (1));
x_14875 = G__14876;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14877 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14877 = (function (flag,meta14878){
this.flag = flag;
this.meta14878 = meta14878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14879,meta14878__$1){
var self__ = this;
var _14879__$1 = this;
return (new cljs.core.async.t_cljs$core$async14877(self__.flag,meta14878__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async14877.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14879){
var self__ = this;
var _14879__$1 = this;
return self__.meta14878;
});})(flag))
;

cljs.core.async.t_cljs$core$async14877.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14877.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async14877.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14877.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14877.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14878","meta14878",-1941417212,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async14877.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14877.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14877";

cljs.core.async.t_cljs$core$async14877.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async14877");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14877.
 */
cljs.core.async.__GT_t_cljs$core$async14877 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14877(flag__$1,meta14878){
return (new cljs.core.async.t_cljs$core$async14877(flag__$1,meta14878));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async14877(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14880 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14880 = (function (flag,cb,meta14881){
this.flag = flag;
this.cb = cb;
this.meta14881 = meta14881;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14882,meta14881__$1){
var self__ = this;
var _14882__$1 = this;
return (new cljs.core.async.t_cljs$core$async14880(self__.flag,self__.cb,meta14881__$1));
});

cljs.core.async.t_cljs$core$async14880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14882){
var self__ = this;
var _14882__$1 = this;
return self__.meta14881;
});

cljs.core.async.t_cljs$core$async14880.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14880.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async14880.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14880.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async14880.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14881","meta14881",987001612,null)], null);
});

cljs.core.async.t_cljs$core$async14880.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14880.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14880";

cljs.core.async.t_cljs$core$async14880.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async14880");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14880.
 */
cljs.core.async.__GT_t_cljs$core$async14880 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14880(flag__$1,cb__$1,meta14881){
return (new cljs.core.async.t_cljs$core$async14880(flag__$1,cb__$1,meta14881));
});

}

return (new cljs.core.async.t_cljs$core$async14880(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14883_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14883_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14884_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14884_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14885 = (i + (1));
i = G__14885;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14891 = arguments.length;
var i__4532__auto___14892 = (0);
while(true){
if((i__4532__auto___14892 < len__4531__auto___14891)){
args__4534__auto__.push((arguments[i__4532__auto___14892]));

var G__14893 = (i__4532__auto___14892 + (1));
i__4532__auto___14892 = G__14893;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14888){
var map__14889 = p__14888;
var map__14889__$1 = ((((!((map__14889 == null)))?(((((map__14889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14889):map__14889);
var opts = map__14889__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14886){
var G__14887 = cljs.core.first.call(null,seq14886);
var seq14886__$1 = cljs.core.next.call(null,seq14886);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14887,seq14886__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14895 = arguments.length;
switch (G__14895) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14795__auto___14942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14795__auto___14942){
return (function (){
var f__14796__auto__ = (function (){var switch__14721__auto__ = ((function (c__14795__auto___14942){
return (function (state_14919){
var state_val_14920 = (state_14919[(1)]);
if((state_val_14920 === (7))){
var inst_14915 = (state_14919[(2)]);
var state_14919__$1 = state_14919;
var statearr_14921_14943 = state_14919__$1;
(statearr_14921_14943[(2)] = inst_14915);

(statearr_14921_14943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14920 === (1))){
var state_14919__$1 = state_14919;
var statearr_14922_14944 = state_14919__$1;
(statearr_14922_14944[(2)] = null);

(statearr_14922_14944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14920 === (4))){
var inst_14898 = (state_14919[(7)]);
var inst_14898__$1 = (state_14919[(2)]);
var inst_14899 = (inst_14898__$1 == null);
var state_14919__$1 = (function (){var statearr_14923 = state_14919;
(statearr_14923[(7)] = inst_14898__$1);

return statearr_14923;
})();
if(cljs.core.truth_(inst_14899)){
var statearr_14924_14945 = state_14919__$1;
(statearr_14924_14945[(1)] = (5));

} else {
var statearr_14925_14946 = state_14919__$1;
(statearr_14925_14946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14920 === (13))){
var state_14919__$1 = state_14919;
var statearr_14926_14947 = state_14919__$1;
(statearr_14926_14947[(2)] = null);

(statearr_14926_14947[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14920 === (6))){
var inst_14898 = (state_14919[(7)]);
var state_14919__$1 = state_14919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14919__$1,(11),to,inst_14898);
} else {
if((state_val_14920 === (3))){
var inst_14917 = (state_14919[(2)]);
var state_14919__$1 = state_14919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14919__$1,inst_14917);
} else {
if((state_val_14920 === (12))){
var state_14919__$1 = state_14919;
var statearr_14927_14948 = state_14919__$1;
(statearr_14927_14948[(2)] = null);

(statearr_14927_14948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14920 === (2))){
var state_14919__$1 = state_14919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14919__$1,(4),from);
} else {
if((state_val_14920 === (11))){
var inst_14908 = (state_14919[(2)]);
var state_14919__$1 = state_14919;
if(cljs.core.truth_(inst_14908)){
var statearr_14928_14949 = state_14919__$1;
(statearr_14928_14949[(1)] = (12));

} else {
var statearr_14929_14950 = state_14919__$1;
(statearr_14929_14950[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14920 === (9))){
var state_14919__$1 = state_14919;
var statearr_14930_14951 = state_14919__$1;
(statearr_14930_14951[(2)] = null);

(statearr_14930_14951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14920 === (5))){
var state_14919__$1 = state_14919;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14931_14952 = state_14919__$1;
(statearr_14931_14952[(1)] = (8));

} else {
var statearr_14932_14953 = state_14919__$1;
(statearr_14932_14953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14920 === (14))){
var inst_14913 = (state_14919[(2)]);
var state_14919__$1 = state_14919;
var statearr_14933_14954 = state_14919__$1;
(statearr_14933_14954[(2)] = inst_14913);

(statearr_14933_14954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14920 === (10))){
var inst_14905 = (state_14919[(2)]);
var state_14919__$1 = state_14919;
var statearr_14934_14955 = state_14919__$1;
(statearr_14934_14955[(2)] = inst_14905);

(statearr_14934_14955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14920 === (8))){
var inst_14902 = cljs.core.async.close_BANG_.call(null,to);
var state_14919__$1 = state_14919;
var statearr_14935_14956 = state_14919__$1;
(statearr_14935_14956[(2)] = inst_14902);

(statearr_14935_14956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14795__auto___14942))
;
return ((function (switch__14721__auto__,c__14795__auto___14942){
return (function() {
var cljs$core$async$state_machine__14722__auto__ = null;
var cljs$core$async$state_machine__14722__auto____0 = (function (){
var statearr_14936 = [null,null,null,null,null,null,null,null];
(statearr_14936[(0)] = cljs$core$async$state_machine__14722__auto__);

(statearr_14936[(1)] = (1));

return statearr_14936;
});
var cljs$core$async$state_machine__14722__auto____1 = (function (state_14919){
while(true){
var ret_value__14723__auto__ = (function (){try{while(true){
var result__14724__auto__ = switch__14721__auto__.call(null,state_14919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14724__auto__;
}
break;
}
}catch (e14937){var ex__14725__auto__ = e14937;
var statearr_14938_14957 = state_14919;
(statearr_14938_14957[(2)] = ex__14725__auto__);


if(cljs.core.seq.call(null,(state_14919[(4)]))){
var statearr_14939_14958 = state_14919;
(statearr_14939_14958[(1)] = cljs.core.first.call(null,(state_14919[(4)])));

} else {
throw ex__14725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14959 = state_14919;
state_14919 = G__14959;
continue;
} else {
return ret_value__14723__auto__;
}
break;
}
});
cljs$core$async$state_machine__14722__auto__ = function(state_14919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14722__auto____1.call(this,state_14919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14722__auto____0;
cljs$core$async$state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14722__auto____1;
return cljs$core$async$state_machine__14722__auto__;
})()
;})(switch__14721__auto__,c__14795__auto___14942))
})();
var state__14797__auto__ = (function (){var statearr_14940 = f__14796__auto__.call(null);
(statearr_14940[(6)] = c__14795__auto___14942);

return statearr_14940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14797__auto__);
});})(c__14795__auto___14942))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__14960){
var vec__14961 = p__14960;
var v = cljs.core.nth.call(null,vec__14961,(0),null);
var p = cljs.core.nth.call(null,vec__14961,(1),null);
var job = vec__14961;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__14795__auto___15137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14795__auto___15137,res,vec__14961,v,p,job,jobs,results){
return (function (){
var f__14796__auto__ = (function (){var switch__14721__auto__ = ((function (c__14795__auto___15137,res,vec__14961,v,p,job,jobs,results){
return (function (state_14968){
var state_val_14969 = (state_14968[(1)]);
if((state_val_14969 === (1))){
var state_14968__$1 = state_14968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14968__$1,(2),res,v);
} else {
if((state_val_14969 === (2))){
var inst_14965 = (state_14968[(2)]);
var inst_14966 = cljs.core.async.close_BANG_.call(null,res);
var state_14968__$1 = (function (){var statearr_14970 = state_14968;
(statearr_14970[(7)] = inst_14965);

return statearr_14970;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14968__$1,inst_14966);
} else {
return null;
}
}
});})(c__14795__auto___15137,res,vec__14961,v,p,job,jobs,results))
;
return ((function (switch__14721__auto__,c__14795__auto___15137,res,vec__14961,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____0 = (function (){
var statearr_14971 = [null,null,null,null,null,null,null,null];
(statearr_14971[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__);

(statearr_14971[(1)] = (1));

return statearr_14971;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____1 = (function (state_14968){
while(true){
var ret_value__14723__auto__ = (function (){try{while(true){
var result__14724__auto__ = switch__14721__auto__.call(null,state_14968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14724__auto__;
}
break;
}
}catch (e14972){var ex__14725__auto__ = e14972;
var statearr_14973_15138 = state_14968;
(statearr_14973_15138[(2)] = ex__14725__auto__);


if(cljs.core.seq.call(null,(state_14968[(4)]))){
var statearr_14974_15139 = state_14968;
(statearr_14974_15139[(1)] = cljs.core.first.call(null,(state_14968[(4)])));

} else {
throw ex__14725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15140 = state_14968;
state_14968 = G__15140;
continue;
} else {
return ret_value__14723__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__ = function(state_14968){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____1.call(this,state_14968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__;
})()
;})(switch__14721__auto__,c__14795__auto___15137,res,vec__14961,v,p,job,jobs,results))
})();
var state__14797__auto__ = (function (){var statearr_14975 = f__14796__auto__.call(null);
(statearr_14975[(6)] = c__14795__auto___15137);

return statearr_14975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14797__auto__);
});})(c__14795__auto___15137,res,vec__14961,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14976){
var vec__14977 = p__14976;
var v = cljs.core.nth.call(null,vec__14977,(0),null);
var p = cljs.core.nth.call(null,vec__14977,(1),null);
var job = vec__14977;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___15141 = n;
var __15142 = (0);
while(true){
if((__15142 < n__4408__auto___15141)){
var G__14980_15143 = type;
var G__14980_15144__$1 = (((G__14980_15143 instanceof cljs.core.Keyword))?G__14980_15143.fqn:null);
switch (G__14980_15144__$1) {
case "compute":
var c__14795__auto___15146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15142,c__14795__auto___15146,G__14980_15143,G__14980_15144__$1,n__4408__auto___15141,jobs,results,process,async){
return (function (){
var f__14796__auto__ = (function (){var switch__14721__auto__ = ((function (__15142,c__14795__auto___15146,G__14980_15143,G__14980_15144__$1,n__4408__auto___15141,jobs,results,process,async){
return (function (state_14993){
var state_val_14994 = (state_14993[(1)]);
if((state_val_14994 === (1))){
var state_14993__$1 = state_14993;
var statearr_14995_15147 = state_14993__$1;
(statearr_14995_15147[(2)] = null);

(statearr_14995_15147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14994 === (2))){
var state_14993__$1 = state_14993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14993__$1,(4),jobs);
} else {
if((state_val_14994 === (3))){
var inst_14991 = (state_14993[(2)]);
var state_14993__$1 = state_14993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14993__$1,inst_14991);
} else {
if((state_val_14994 === (4))){
var inst_14983 = (state_14993[(2)]);
var inst_14984 = process.call(null,inst_14983);
var state_14993__$1 = state_14993;
if(cljs.core.truth_(inst_14984)){
var statearr_14996_15148 = state_14993__$1;
(statearr_14996_15148[(1)] = (5));

} else {
var statearr_14997_15149 = state_14993__$1;
(statearr_14997_15149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14994 === (5))){
var state_14993__$1 = state_14993;
var statearr_14998_15150 = state_14993__$1;
(statearr_14998_15150[(2)] = null);

(statearr_14998_15150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14994 === (6))){
var state_14993__$1 = state_14993;
var statearr_14999_15151 = state_14993__$1;
(statearr_14999_15151[(2)] = null);

(statearr_14999_15151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14994 === (7))){
var inst_14989 = (state_14993[(2)]);
var state_14993__$1 = state_14993;
var statearr_15000_15152 = state_14993__$1;
(statearr_15000_15152[(2)] = inst_14989);

(statearr_15000_15152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15142,c__14795__auto___15146,G__14980_15143,G__14980_15144__$1,n__4408__auto___15141,jobs,results,process,async))
;
return ((function (__15142,switch__14721__auto__,c__14795__auto___15146,G__14980_15143,G__14980_15144__$1,n__4408__auto___15141,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____0 = (function (){
var statearr_15001 = [null,null,null,null,null,null,null];
(statearr_15001[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__);

(statearr_15001[(1)] = (1));

return statearr_15001;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____1 = (function (state_14993){
while(true){
var ret_value__14723__auto__ = (function (){try{while(true){
var result__14724__auto__ = switch__14721__auto__.call(null,state_14993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14724__auto__;
}
break;
}
}catch (e15002){var ex__14725__auto__ = e15002;
var statearr_15003_15153 = state_14993;
(statearr_15003_15153[(2)] = ex__14725__auto__);


if(cljs.core.seq.call(null,(state_14993[(4)]))){
var statearr_15004_15154 = state_14993;
(statearr_15004_15154[(1)] = cljs.core.first.call(null,(state_14993[(4)])));

} else {
throw ex__14725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15155 = state_14993;
state_14993 = G__15155;
continue;
} else {
return ret_value__14723__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__ = function(state_14993){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____1.call(this,state_14993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__;
})()
;})(__15142,switch__14721__auto__,c__14795__auto___15146,G__14980_15143,G__14980_15144__$1,n__4408__auto___15141,jobs,results,process,async))
})();
var state__14797__auto__ = (function (){var statearr_15005 = f__14796__auto__.call(null);
(statearr_15005[(6)] = c__14795__auto___15146);

return statearr_15005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14797__auto__);
});})(__15142,c__14795__auto___15146,G__14980_15143,G__14980_15144__$1,n__4408__auto___15141,jobs,results,process,async))
);


break;
case "async":
var c__14795__auto___15156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__15142,c__14795__auto___15156,G__14980_15143,G__14980_15144__$1,n__4408__auto___15141,jobs,results,process,async){
return (function (){
var f__14796__auto__ = (function (){var switch__14721__auto__ = ((function (__15142,c__14795__auto___15156,G__14980_15143,G__14980_15144__$1,n__4408__auto___15141,jobs,results,process,async){
return (function (state_15018){
var state_val_15019 = (state_15018[(1)]);
if((state_val_15019 === (1))){
var state_15018__$1 = state_15018;
var statearr_15020_15157 = state_15018__$1;
(statearr_15020_15157[(2)] = null);

(statearr_15020_15157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15019 === (2))){
var state_15018__$1 = state_15018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15018__$1,(4),jobs);
} else {
if((state_val_15019 === (3))){
var inst_15016 = (state_15018[(2)]);
var state_15018__$1 = state_15018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15018__$1,inst_15016);
} else {
if((state_val_15019 === (4))){
var inst_15008 = (state_15018[(2)]);
var inst_15009 = async.call(null,inst_15008);
var state_15018__$1 = state_15018;
if(cljs.core.truth_(inst_15009)){
var statearr_15021_15158 = state_15018__$1;
(statearr_15021_15158[(1)] = (5));

} else {
var statearr_15022_15159 = state_15018__$1;
(statearr_15022_15159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15019 === (5))){
var state_15018__$1 = state_15018;
var statearr_15023_15160 = state_15018__$1;
(statearr_15023_15160[(2)] = null);

(statearr_15023_15160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15019 === (6))){
var state_15018__$1 = state_15018;
var statearr_15024_15161 = state_15018__$1;
(statearr_15024_15161[(2)] = null);

(statearr_15024_15161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15019 === (7))){
var inst_15014 = (state_15018[(2)]);
var state_15018__$1 = state_15018;
var statearr_15025_15162 = state_15018__$1;
(statearr_15025_15162[(2)] = inst_15014);

(statearr_15025_15162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15142,c__14795__auto___15156,G__14980_15143,G__14980_15144__$1,n__4408__auto___15141,jobs,results,process,async))
;
return ((function (__15142,switch__14721__auto__,c__14795__auto___15156,G__14980_15143,G__14980_15144__$1,n__4408__auto___15141,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____0 = (function (){
var statearr_15026 = [null,null,null,null,null,null,null];
(statearr_15026[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__);

(statearr_15026[(1)] = (1));

return statearr_15026;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____1 = (function (state_15018){
while(true){
var ret_value__14723__auto__ = (function (){try{while(true){
var result__14724__auto__ = switch__14721__auto__.call(null,state_15018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14724__auto__;
}
break;
}
}catch (e15027){var ex__14725__auto__ = e15027;
var statearr_15028_15163 = state_15018;
(statearr_15028_15163[(2)] = ex__14725__auto__);


if(cljs.core.seq.call(null,(state_15018[(4)]))){
var statearr_15029_15164 = state_15018;
(statearr_15029_15164[(1)] = cljs.core.first.call(null,(state_15018[(4)])));

} else {
throw ex__14725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15165 = state_15018;
state_15018 = G__15165;
continue;
} else {
return ret_value__14723__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__ = function(state_15018){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____1.call(this,state_15018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__;
})()
;})(__15142,switch__14721__auto__,c__14795__auto___15156,G__14980_15143,G__14980_15144__$1,n__4408__auto___15141,jobs,results,process,async))
})();
var state__14797__auto__ = (function (){var statearr_15030 = f__14796__auto__.call(null);
(statearr_15030[(6)] = c__14795__auto___15156);

return statearr_15030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14797__auto__);
});})(__15142,c__14795__auto___15156,G__14980_15143,G__14980_15144__$1,n__4408__auto___15141,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14980_15144__$1)].join('')));

}

var G__15166 = (__15142 + (1));
__15142 = G__15166;
continue;
} else {
}
break;
}

var c__14795__auto___15167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14795__auto___15167,jobs,results,process,async){
return (function (){
var f__14796__auto__ = (function (){var switch__14721__auto__ = ((function (c__14795__auto___15167,jobs,results,process,async){
return (function (state_15052){
var state_val_15053 = (state_15052[(1)]);
if((state_val_15053 === (1))){
var state_15052__$1 = state_15052;
var statearr_15054_15168 = state_15052__$1;
(statearr_15054_15168[(2)] = null);

(statearr_15054_15168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15053 === (2))){
var state_15052__$1 = state_15052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15052__$1,(4),from);
} else {
if((state_val_15053 === (3))){
var inst_15050 = (state_15052[(2)]);
var state_15052__$1 = state_15052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15052__$1,inst_15050);
} else {
if((state_val_15053 === (4))){
var inst_15033 = (state_15052[(7)]);
var inst_15033__$1 = (state_15052[(2)]);
var inst_15034 = (inst_15033__$1 == null);
var state_15052__$1 = (function (){var statearr_15055 = state_15052;
(statearr_15055[(7)] = inst_15033__$1);

return statearr_15055;
})();
if(cljs.core.truth_(inst_15034)){
var statearr_15056_15169 = state_15052__$1;
(statearr_15056_15169[(1)] = (5));

} else {
var statearr_15057_15170 = state_15052__$1;
(statearr_15057_15170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15053 === (5))){
var inst_15036 = cljs.core.async.close_BANG_.call(null,jobs);
var state_15052__$1 = state_15052;
var statearr_15058_15171 = state_15052__$1;
(statearr_15058_15171[(2)] = inst_15036);

(statearr_15058_15171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15053 === (6))){
var inst_15033 = (state_15052[(7)]);
var inst_15038 = (state_15052[(8)]);
var inst_15038__$1 = cljs.core.async.chan.call(null,(1));
var inst_15039 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15040 = [inst_15033,inst_15038__$1];
var inst_15041 = (new cljs.core.PersistentVector(null,2,(5),inst_15039,inst_15040,null));
var state_15052__$1 = (function (){var statearr_15059 = state_15052;
(statearr_15059[(8)] = inst_15038__$1);

return statearr_15059;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15052__$1,(8),jobs,inst_15041);
} else {
if((state_val_15053 === (7))){
var inst_15048 = (state_15052[(2)]);
var state_15052__$1 = state_15052;
var statearr_15060_15172 = state_15052__$1;
(statearr_15060_15172[(2)] = inst_15048);

(statearr_15060_15172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15053 === (8))){
var inst_15038 = (state_15052[(8)]);
var inst_15043 = (state_15052[(2)]);
var state_15052__$1 = (function (){var statearr_15061 = state_15052;
(statearr_15061[(9)] = inst_15043);

return statearr_15061;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15052__$1,(9),results,inst_15038);
} else {
if((state_val_15053 === (9))){
var inst_15045 = (state_15052[(2)]);
var state_15052__$1 = (function (){var statearr_15062 = state_15052;
(statearr_15062[(10)] = inst_15045);

return statearr_15062;
})();
var statearr_15063_15173 = state_15052__$1;
(statearr_15063_15173[(2)] = null);

(statearr_15063_15173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__14795__auto___15167,jobs,results,process,async))
;
return ((function (switch__14721__auto__,c__14795__auto___15167,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____0 = (function (){
var statearr_15064 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15064[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__);

(statearr_15064[(1)] = (1));

return statearr_15064;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____1 = (function (state_15052){
while(true){
var ret_value__14723__auto__ = (function (){try{while(true){
var result__14724__auto__ = switch__14721__auto__.call(null,state_15052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14724__auto__;
}
break;
}
}catch (e15065){var ex__14725__auto__ = e15065;
var statearr_15066_15174 = state_15052;
(statearr_15066_15174[(2)] = ex__14725__auto__);


if(cljs.core.seq.call(null,(state_15052[(4)]))){
var statearr_15067_15175 = state_15052;
(statearr_15067_15175[(1)] = cljs.core.first.call(null,(state_15052[(4)])));

} else {
throw ex__14725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15176 = state_15052;
state_15052 = G__15176;
continue;
} else {
return ret_value__14723__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__ = function(state_15052){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____1.call(this,state_15052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__;
})()
;})(switch__14721__auto__,c__14795__auto___15167,jobs,results,process,async))
})();
var state__14797__auto__ = (function (){var statearr_15068 = f__14796__auto__.call(null);
(statearr_15068[(6)] = c__14795__auto___15167);

return statearr_15068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14797__auto__);
});})(c__14795__auto___15167,jobs,results,process,async))
);


var c__14795__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14795__auto__,jobs,results,process,async){
return (function (){
var f__14796__auto__ = (function (){var switch__14721__auto__ = ((function (c__14795__auto__,jobs,results,process,async){
return (function (state_15106){
var state_val_15107 = (state_15106[(1)]);
if((state_val_15107 === (7))){
var inst_15102 = (state_15106[(2)]);
var state_15106__$1 = state_15106;
var statearr_15108_15177 = state_15106__$1;
(statearr_15108_15177[(2)] = inst_15102);

(statearr_15108_15177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15107 === (20))){
var state_15106__$1 = state_15106;
var statearr_15109_15178 = state_15106__$1;
(statearr_15109_15178[(2)] = null);

(statearr_15109_15178[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15107 === (1))){
var state_15106__$1 = state_15106;
var statearr_15110_15179 = state_15106__$1;
(statearr_15110_15179[(2)] = null);

(statearr_15110_15179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15107 === (4))){
var inst_15071 = (state_15106[(7)]);
var inst_15071__$1 = (state_15106[(2)]);
var inst_15072 = (inst_15071__$1 == null);
var state_15106__$1 = (function (){var statearr_15111 = state_15106;
(statearr_15111[(7)] = inst_15071__$1);

return statearr_15111;
})();
if(cljs.core.truth_(inst_15072)){
var statearr_15112_15180 = state_15106__$1;
(statearr_15112_15180[(1)] = (5));

} else {
var statearr_15113_15181 = state_15106__$1;
(statearr_15113_15181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15107 === (15))){
var inst_15084 = (state_15106[(8)]);
var state_15106__$1 = state_15106;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15106__$1,(18),to,inst_15084);
} else {
if((state_val_15107 === (21))){
var inst_15097 = (state_15106[(2)]);
var state_15106__$1 = state_15106;
var statearr_15114_15182 = state_15106__$1;
(statearr_15114_15182[(2)] = inst_15097);

(statearr_15114_15182[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15107 === (13))){
var inst_15099 = (state_15106[(2)]);
var state_15106__$1 = (function (){var statearr_15115 = state_15106;
(statearr_15115[(9)] = inst_15099);

return statearr_15115;
})();
var statearr_15116_15183 = state_15106__$1;
(statearr_15116_15183[(2)] = null);

(statearr_15116_15183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15107 === (6))){
var inst_15071 = (state_15106[(7)]);
var state_15106__$1 = state_15106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15106__$1,(11),inst_15071);
} else {
if((state_val_15107 === (17))){
var inst_15092 = (state_15106[(2)]);
var state_15106__$1 = state_15106;
if(cljs.core.truth_(inst_15092)){
var statearr_15117_15184 = state_15106__$1;
(statearr_15117_15184[(1)] = (19));

} else {
var statearr_15118_15185 = state_15106__$1;
(statearr_15118_15185[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15107 === (3))){
var inst_15104 = (state_15106[(2)]);
var state_15106__$1 = state_15106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15106__$1,inst_15104);
} else {
if((state_val_15107 === (12))){
var inst_15081 = (state_15106[(10)]);
var state_15106__$1 = state_15106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15106__$1,(14),inst_15081);
} else {
if((state_val_15107 === (2))){
var state_15106__$1 = state_15106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15106__$1,(4),results);
} else {
if((state_val_15107 === (19))){
var state_15106__$1 = state_15106;
var statearr_15119_15186 = state_15106__$1;
(statearr_15119_15186[(2)] = null);

(statearr_15119_15186[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15107 === (11))){
var inst_15081 = (state_15106[(2)]);
var state_15106__$1 = (function (){var statearr_15120 = state_15106;
(statearr_15120[(10)] = inst_15081);

return statearr_15120;
})();
var statearr_15121_15187 = state_15106__$1;
(statearr_15121_15187[(2)] = null);

(statearr_15121_15187[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15107 === (9))){
var state_15106__$1 = state_15106;
var statearr_15122_15188 = state_15106__$1;
(statearr_15122_15188[(2)] = null);

(statearr_15122_15188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15107 === (5))){
var state_15106__$1 = state_15106;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15123_15189 = state_15106__$1;
(statearr_15123_15189[(1)] = (8));

} else {
var statearr_15124_15190 = state_15106__$1;
(statearr_15124_15190[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15107 === (14))){
var inst_15086 = (state_15106[(11)]);
var inst_15084 = (state_15106[(8)]);
var inst_15084__$1 = (state_15106[(2)]);
var inst_15085 = (inst_15084__$1 == null);
var inst_15086__$1 = cljs.core.not.call(null,inst_15085);
var state_15106__$1 = (function (){var statearr_15125 = state_15106;
(statearr_15125[(11)] = inst_15086__$1);

(statearr_15125[(8)] = inst_15084__$1);

return statearr_15125;
})();
if(inst_15086__$1){
var statearr_15126_15191 = state_15106__$1;
(statearr_15126_15191[(1)] = (15));

} else {
var statearr_15127_15192 = state_15106__$1;
(statearr_15127_15192[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15107 === (16))){
var inst_15086 = (state_15106[(11)]);
var state_15106__$1 = state_15106;
var statearr_15128_15193 = state_15106__$1;
(statearr_15128_15193[(2)] = inst_15086);

(statearr_15128_15193[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15107 === (10))){
var inst_15078 = (state_15106[(2)]);
var state_15106__$1 = state_15106;
var statearr_15129_15194 = state_15106__$1;
(statearr_15129_15194[(2)] = inst_15078);

(statearr_15129_15194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15107 === (18))){
var inst_15089 = (state_15106[(2)]);
var state_15106__$1 = state_15106;
var statearr_15130_15195 = state_15106__$1;
(statearr_15130_15195[(2)] = inst_15089);

(statearr_15130_15195[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15107 === (8))){
var inst_15075 = cljs.core.async.close_BANG_.call(null,to);
var state_15106__$1 = state_15106;
var statearr_15131_15196 = state_15106__$1;
(statearr_15131_15196[(2)] = inst_15075);

(statearr_15131_15196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14795__auto__,jobs,results,process,async))
;
return ((function (switch__14721__auto__,c__14795__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____0 = (function (){
var statearr_15132 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15132[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__);

(statearr_15132[(1)] = (1));

return statearr_15132;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____1 = (function (state_15106){
while(true){
var ret_value__14723__auto__ = (function (){try{while(true){
var result__14724__auto__ = switch__14721__auto__.call(null,state_15106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14724__auto__;
}
break;
}
}catch (e15133){var ex__14725__auto__ = e15133;
var statearr_15134_15197 = state_15106;
(statearr_15134_15197[(2)] = ex__14725__auto__);


if(cljs.core.seq.call(null,(state_15106[(4)]))){
var statearr_15135_15198 = state_15106;
(statearr_15135_15198[(1)] = cljs.core.first.call(null,(state_15106[(4)])));

} else {
throw ex__14725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15199 = state_15106;
state_15106 = G__15199;
continue;
} else {
return ret_value__14723__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__ = function(state_15106){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____1.call(this,state_15106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14722__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14722__auto__;
})()
;})(switch__14721__auto__,c__14795__auto__,jobs,results,process,async))
})();
var state__14797__auto__ = (function (){var statearr_15136 = f__14796__auto__.call(null);
(statearr_15136[(6)] = c__14795__auto__);

return statearr_15136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14797__auto__);
});})(c__14795__auto__,jobs,results,process,async))
);

return c__14795__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15201 = arguments.length;
switch (G__15201) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15204 = arguments.length;
switch (G__15204) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15207 = arguments.length;
switch (G__15207) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__14795__auto___15257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14795__auto___15257,tc,fc){
return (function (){
var f__14796__auto__ = (function (){var switch__14721__auto__ = ((function (c__14795__auto___15257,tc,fc){
return (function (state_15233){
var state_val_15234 = (state_15233[(1)]);
if((state_val_15234 === (7))){
var inst_15229 = (state_15233[(2)]);
var state_15233__$1 = state_15233;
var statearr_15235_15258 = state_15233__$1;
(statearr_15235_15258[(2)] = inst_15229);

(statearr_15235_15258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15234 === (1))){
var state_15233__$1 = state_15233;
var statearr_15236_15259 = state_15233__$1;
(statearr_15236_15259[(2)] = null);

(statearr_15236_15259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15234 === (4))){
var inst_15210 = (state_15233[(7)]);
var inst_15210__$1 = (state_15233[(2)]);
var inst_15211 = (inst_15210__$1 == null);
var state_15233__$1 = (function (){var statearr_15237 = state_15233;
(statearr_15237[(7)] = inst_15210__$1);

return statearr_15237;
})();
if(cljs.core.truth_(inst_15211)){
var statearr_15238_15260 = state_15233__$1;
(statearr_15238_15260[(1)] = (5));

} else {
var statearr_15239_15261 = state_15233__$1;
(statearr_15239_15261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15234 === (13))){
var state_15233__$1 = state_15233;
var statearr_15240_15262 = state_15233__$1;
(statearr_15240_15262[(2)] = null);

(statearr_15240_15262[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15234 === (6))){
var inst_15210 = (state_15233[(7)]);
var inst_15216 = p.call(null,inst_15210);
var state_15233__$1 = state_15233;
if(cljs.core.truth_(inst_15216)){
var statearr_15241_15263 = state_15233__$1;
(statearr_15241_15263[(1)] = (9));

} else {
var statearr_15242_15264 = state_15233__$1;
(statearr_15242_15264[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15234 === (3))){
var inst_15231 = (state_15233[(2)]);
var state_15233__$1 = state_15233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15233__$1,inst_15231);
} else {
if((state_val_15234 === (12))){
var state_15233__$1 = state_15233;
var statearr_15243_15265 = state_15233__$1;
(statearr_15243_15265[(2)] = null);

(statearr_15243_15265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15234 === (2))){
var state_15233__$1 = state_15233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15233__$1,(4),ch);
} else {
if((state_val_15234 === (11))){
var inst_15210 = (state_15233[(7)]);
var inst_15220 = (state_15233[(2)]);
var state_15233__$1 = state_15233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15233__$1,(8),inst_15220,inst_15210);
} else {
if((state_val_15234 === (9))){
var state_15233__$1 = state_15233;
var statearr_15244_15266 = state_15233__$1;
(statearr_15244_15266[(2)] = tc);

(statearr_15244_15266[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15234 === (5))){
var inst_15213 = cljs.core.async.close_BANG_.call(null,tc);
var inst_15214 = cljs.core.async.close_BANG_.call(null,fc);
var state_15233__$1 = (function (){var statearr_15245 = state_15233;
(statearr_15245[(8)] = inst_15213);

return statearr_15245;
})();
var statearr_15246_15267 = state_15233__$1;
(statearr_15246_15267[(2)] = inst_15214);

(statearr_15246_15267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15234 === (14))){
var inst_15227 = (state_15233[(2)]);
var state_15233__$1 = state_15233;
var statearr_15247_15268 = state_15233__$1;
(statearr_15247_15268[(2)] = inst_15227);

(statearr_15247_15268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15234 === (10))){
var state_15233__$1 = state_15233;
var statearr_15248_15269 = state_15233__$1;
(statearr_15248_15269[(2)] = fc);

(statearr_15248_15269[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15234 === (8))){
var inst_15222 = (state_15233[(2)]);
var state_15233__$1 = state_15233;
if(cljs.core.truth_(inst_15222)){
var statearr_15249_15270 = state_15233__$1;
(statearr_15249_15270[(1)] = (12));

} else {
var statearr_15250_15271 = state_15233__$1;
(statearr_15250_15271[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14795__auto___15257,tc,fc))
;
return ((function (switch__14721__auto__,c__14795__auto___15257,tc,fc){
return (function() {
var cljs$core$async$state_machine__14722__auto__ = null;
var cljs$core$async$state_machine__14722__auto____0 = (function (){
var statearr_15251 = [null,null,null,null,null,null,null,null,null];
(statearr_15251[(0)] = cljs$core$async$state_machine__14722__auto__);

(statearr_15251[(1)] = (1));

return statearr_15251;
});
var cljs$core$async$state_machine__14722__auto____1 = (function (state_15233){
while(true){
var ret_value__14723__auto__ = (function (){try{while(true){
var result__14724__auto__ = switch__14721__auto__.call(null,state_15233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14724__auto__;
}
break;
}
}catch (e15252){var ex__14725__auto__ = e15252;
var statearr_15253_15272 = state_15233;
(statearr_15253_15272[(2)] = ex__14725__auto__);


if(cljs.core.seq.call(null,(state_15233[(4)]))){
var statearr_15254_15273 = state_15233;
(statearr_15254_15273[(1)] = cljs.core.first.call(null,(state_15233[(4)])));

} else {
throw ex__14725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15274 = state_15233;
state_15233 = G__15274;
continue;
} else {
return ret_value__14723__auto__;
}
break;
}
});
cljs$core$async$state_machine__14722__auto__ = function(state_15233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14722__auto____1.call(this,state_15233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14722__auto____0;
cljs$core$async$state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14722__auto____1;
return cljs$core$async$state_machine__14722__auto__;
})()
;})(switch__14721__auto__,c__14795__auto___15257,tc,fc))
})();
var state__14797__auto__ = (function (){var statearr_15255 = f__14796__auto__.call(null);
(statearr_15255[(6)] = c__14795__auto___15257);

return statearr_15255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14797__auto__);
});})(c__14795__auto___15257,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14795__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14795__auto__){
return (function (){
var f__14796__auto__ = (function (){var switch__14721__auto__ = ((function (c__14795__auto__){
return (function (state_15296){
var state_val_15297 = (state_15296[(1)]);
if((state_val_15297 === (7))){
var inst_15292 = (state_15296[(2)]);
var state_15296__$1 = state_15296;
var statearr_15298_15317 = state_15296__$1;
(statearr_15298_15317[(2)] = inst_15292);

(statearr_15298_15317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15297 === (1))){
var inst_15275 = init;
var inst_15276 = inst_15275;
var state_15296__$1 = (function (){var statearr_15299 = state_15296;
(statearr_15299[(7)] = inst_15276);

return statearr_15299;
})();
var statearr_15300_15318 = state_15296__$1;
(statearr_15300_15318[(2)] = null);

(statearr_15300_15318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15297 === (4))){
var inst_15279 = (state_15296[(8)]);
var inst_15279__$1 = (state_15296[(2)]);
var inst_15280 = (inst_15279__$1 == null);
var state_15296__$1 = (function (){var statearr_15301 = state_15296;
(statearr_15301[(8)] = inst_15279__$1);

return statearr_15301;
})();
if(cljs.core.truth_(inst_15280)){
var statearr_15302_15319 = state_15296__$1;
(statearr_15302_15319[(1)] = (5));

} else {
var statearr_15303_15320 = state_15296__$1;
(statearr_15303_15320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15297 === (6))){
var inst_15276 = (state_15296[(7)]);
var inst_15283 = (state_15296[(9)]);
var inst_15279 = (state_15296[(8)]);
var inst_15283__$1 = f.call(null,inst_15276,inst_15279);
var inst_15284 = cljs.core.reduced_QMARK_.call(null,inst_15283__$1);
var state_15296__$1 = (function (){var statearr_15304 = state_15296;
(statearr_15304[(9)] = inst_15283__$1);

return statearr_15304;
})();
if(inst_15284){
var statearr_15305_15321 = state_15296__$1;
(statearr_15305_15321[(1)] = (8));

} else {
var statearr_15306_15322 = state_15296__$1;
(statearr_15306_15322[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15297 === (3))){
var inst_15294 = (state_15296[(2)]);
var state_15296__$1 = state_15296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15296__$1,inst_15294);
} else {
if((state_val_15297 === (2))){
var state_15296__$1 = state_15296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15296__$1,(4),ch);
} else {
if((state_val_15297 === (9))){
var inst_15283 = (state_15296[(9)]);
var inst_15276 = inst_15283;
var state_15296__$1 = (function (){var statearr_15307 = state_15296;
(statearr_15307[(7)] = inst_15276);

return statearr_15307;
})();
var statearr_15308_15323 = state_15296__$1;
(statearr_15308_15323[(2)] = null);

(statearr_15308_15323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15297 === (5))){
var inst_15276 = (state_15296[(7)]);
var state_15296__$1 = state_15296;
var statearr_15309_15324 = state_15296__$1;
(statearr_15309_15324[(2)] = inst_15276);

(statearr_15309_15324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15297 === (10))){
var inst_15290 = (state_15296[(2)]);
var state_15296__$1 = state_15296;
var statearr_15310_15325 = state_15296__$1;
(statearr_15310_15325[(2)] = inst_15290);

(statearr_15310_15325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15297 === (8))){
var inst_15283 = (state_15296[(9)]);
var inst_15286 = cljs.core.deref.call(null,inst_15283);
var state_15296__$1 = state_15296;
var statearr_15311_15326 = state_15296__$1;
(statearr_15311_15326[(2)] = inst_15286);

(statearr_15311_15326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__14795__auto__))
;
return ((function (switch__14721__auto__,c__14795__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__14722__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14722__auto____0 = (function (){
var statearr_15312 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15312[(0)] = cljs$core$async$reduce_$_state_machine__14722__auto__);

(statearr_15312[(1)] = (1));

return statearr_15312;
});
var cljs$core$async$reduce_$_state_machine__14722__auto____1 = (function (state_15296){
while(true){
var ret_value__14723__auto__ = (function (){try{while(true){
var result__14724__auto__ = switch__14721__auto__.call(null,state_15296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14724__auto__;
}
break;
}
}catch (e15313){var ex__14725__auto__ = e15313;
var statearr_15314_15327 = state_15296;
(statearr_15314_15327[(2)] = ex__14725__auto__);


if(cljs.core.seq.call(null,(state_15296[(4)]))){
var statearr_15315_15328 = state_15296;
(statearr_15315_15328[(1)] = cljs.core.first.call(null,(state_15296[(4)])));

} else {
throw ex__14725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15329 = state_15296;
state_15296 = G__15329;
continue;
} else {
return ret_value__14723__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14722__auto__ = function(state_15296){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14722__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14722__auto____1.call(this,state_15296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14722__auto____0;
cljs$core$async$reduce_$_state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14722__auto____1;
return cljs$core$async$reduce_$_state_machine__14722__auto__;
})()
;})(switch__14721__auto__,c__14795__auto__))
})();
var state__14797__auto__ = (function (){var statearr_15316 = f__14796__auto__.call(null);
(statearr_15316[(6)] = c__14795__auto__);

return statearr_15316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14797__auto__);
});})(c__14795__auto__))
);

return c__14795__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__14795__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14795__auto__,f__$1){
return (function (){
var f__14796__auto__ = (function (){var switch__14721__auto__ = ((function (c__14795__auto__,f__$1){
return (function (state_15335){
var state_val_15336 = (state_15335[(1)]);
if((state_val_15336 === (1))){
var inst_15330 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_15335__$1 = state_15335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15335__$1,(2),inst_15330);
} else {
if((state_val_15336 === (2))){
var inst_15332 = (state_15335[(2)]);
var inst_15333 = f__$1.call(null,inst_15332);
var state_15335__$1 = state_15335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15335__$1,inst_15333);
} else {
return null;
}
}
});})(c__14795__auto__,f__$1))
;
return ((function (switch__14721__auto__,c__14795__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__14722__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14722__auto____0 = (function (){
var statearr_15337 = [null,null,null,null,null,null,null];
(statearr_15337[(0)] = cljs$core$async$transduce_$_state_machine__14722__auto__);

(statearr_15337[(1)] = (1));

return statearr_15337;
});
var cljs$core$async$transduce_$_state_machine__14722__auto____1 = (function (state_15335){
while(true){
var ret_value__14723__auto__ = (function (){try{while(true){
var result__14724__auto__ = switch__14721__auto__.call(null,state_15335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14724__auto__;
}
break;
}
}catch (e15338){var ex__14725__auto__ = e15338;
var statearr_15339_15342 = state_15335;
(statearr_15339_15342[(2)] = ex__14725__auto__);


if(cljs.core.seq.call(null,(state_15335[(4)]))){
var statearr_15340_15343 = state_15335;
(statearr_15340_15343[(1)] = cljs.core.first.call(null,(state_15335[(4)])));

} else {
throw ex__14725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15344 = state_15335;
state_15335 = G__15344;
continue;
} else {
return ret_value__14723__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14722__auto__ = function(state_15335){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14722__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14722__auto____1.call(this,state_15335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14722__auto____0;
cljs$core$async$transduce_$_state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14722__auto____1;
return cljs$core$async$transduce_$_state_machine__14722__auto__;
})()
;})(switch__14721__auto__,c__14795__auto__,f__$1))
})();
var state__14797__auto__ = (function (){var statearr_15341 = f__14796__auto__.call(null);
(statearr_15341[(6)] = c__14795__auto__);

return statearr_15341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14797__auto__);
});})(c__14795__auto__,f__$1))
);

return c__14795__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15346 = arguments.length;
switch (G__15346) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14795__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14795__auto__){
return (function (){
var f__14796__auto__ = (function (){var switch__14721__auto__ = ((function (c__14795__auto__){
return (function (state_15371){
var state_val_15372 = (state_15371[(1)]);
if((state_val_15372 === (7))){
var inst_15353 = (state_15371[(2)]);
var state_15371__$1 = state_15371;
var statearr_15373_15395 = state_15371__$1;
(statearr_15373_15395[(2)] = inst_15353);

(statearr_15373_15395[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (1))){
var inst_15347 = cljs.core.seq.call(null,coll);
var inst_15348 = inst_15347;
var state_15371__$1 = (function (){var statearr_15374 = state_15371;
(statearr_15374[(7)] = inst_15348);

return statearr_15374;
})();
var statearr_15375_15396 = state_15371__$1;
(statearr_15375_15396[(2)] = null);

(statearr_15375_15396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (4))){
var inst_15348 = (state_15371[(7)]);
var inst_15351 = cljs.core.first.call(null,inst_15348);
var state_15371__$1 = state_15371;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15371__$1,(7),ch,inst_15351);
} else {
if((state_val_15372 === (13))){
var inst_15365 = (state_15371[(2)]);
var state_15371__$1 = state_15371;
var statearr_15376_15397 = state_15371__$1;
(statearr_15376_15397[(2)] = inst_15365);

(statearr_15376_15397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (6))){
var inst_15356 = (state_15371[(2)]);
var state_15371__$1 = state_15371;
if(cljs.core.truth_(inst_15356)){
var statearr_15377_15398 = state_15371__$1;
(statearr_15377_15398[(1)] = (8));

} else {
var statearr_15378_15399 = state_15371__$1;
(statearr_15378_15399[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (3))){
var inst_15369 = (state_15371[(2)]);
var state_15371__$1 = state_15371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15371__$1,inst_15369);
} else {
if((state_val_15372 === (12))){
var state_15371__$1 = state_15371;
var statearr_15379_15400 = state_15371__$1;
(statearr_15379_15400[(2)] = null);

(statearr_15379_15400[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (2))){
var inst_15348 = (state_15371[(7)]);
var state_15371__$1 = state_15371;
if(cljs.core.truth_(inst_15348)){
var statearr_15380_15401 = state_15371__$1;
(statearr_15380_15401[(1)] = (4));

} else {
var statearr_15381_15402 = state_15371__$1;
(statearr_15381_15402[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (11))){
var inst_15362 = cljs.core.async.close_BANG_.call(null,ch);
var state_15371__$1 = state_15371;
var statearr_15382_15403 = state_15371__$1;
(statearr_15382_15403[(2)] = inst_15362);

(statearr_15382_15403[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (9))){
var state_15371__$1 = state_15371;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15383_15404 = state_15371__$1;
(statearr_15383_15404[(1)] = (11));

} else {
var statearr_15384_15405 = state_15371__$1;
(statearr_15384_15405[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (5))){
var inst_15348 = (state_15371[(7)]);
var state_15371__$1 = state_15371;
var statearr_15385_15406 = state_15371__$1;
(statearr_15385_15406[(2)] = inst_15348);

(statearr_15385_15406[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (10))){
var inst_15367 = (state_15371[(2)]);
var state_15371__$1 = state_15371;
var statearr_15386_15407 = state_15371__$1;
(statearr_15386_15407[(2)] = inst_15367);

(statearr_15386_15407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15372 === (8))){
var inst_15348 = (state_15371[(7)]);
var inst_15358 = cljs.core.next.call(null,inst_15348);
var inst_15348__$1 = inst_15358;
var state_15371__$1 = (function (){var statearr_15387 = state_15371;
(statearr_15387[(7)] = inst_15348__$1);

return statearr_15387;
})();
var statearr_15388_15408 = state_15371__$1;
(statearr_15388_15408[(2)] = null);

(statearr_15388_15408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14795__auto__))
;
return ((function (switch__14721__auto__,c__14795__auto__){
return (function() {
var cljs$core$async$state_machine__14722__auto__ = null;
var cljs$core$async$state_machine__14722__auto____0 = (function (){
var statearr_15389 = [null,null,null,null,null,null,null,null];
(statearr_15389[(0)] = cljs$core$async$state_machine__14722__auto__);

(statearr_15389[(1)] = (1));

return statearr_15389;
});
var cljs$core$async$state_machine__14722__auto____1 = (function (state_15371){
while(true){
var ret_value__14723__auto__ = (function (){try{while(true){
var result__14724__auto__ = switch__14721__auto__.call(null,state_15371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14724__auto__;
}
break;
}
}catch (e15390){var ex__14725__auto__ = e15390;
var statearr_15391_15409 = state_15371;
(statearr_15391_15409[(2)] = ex__14725__auto__);


if(cljs.core.seq.call(null,(state_15371[(4)]))){
var statearr_15392_15410 = state_15371;
(statearr_15392_15410[(1)] = cljs.core.first.call(null,(state_15371[(4)])));

} else {
throw ex__14725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15411 = state_15371;
state_15371 = G__15411;
continue;
} else {
return ret_value__14723__auto__;
}
break;
}
});
cljs$core$async$state_machine__14722__auto__ = function(state_15371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14722__auto____1.call(this,state_15371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14722__auto____0;
cljs$core$async$state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14722__auto____1;
return cljs$core$async$state_machine__14722__auto__;
})()
;})(switch__14721__auto__,c__14795__auto__))
})();
var state__14797__auto__ = (function (){var statearr_15393 = f__14796__auto__.call(null);
(statearr_15393[(6)] = c__14795__auto__);

return statearr_15393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14797__auto__);
});})(c__14795__auto__))
);

return c__14795__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15412 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15412 = (function (ch,cs,meta15413){
this.ch = ch;
this.cs = cs;
this.meta15413 = meta15413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15414,meta15413__$1){
var self__ = this;
var _15414__$1 = this;
return (new cljs.core.async.t_cljs$core$async15412(self__.ch,self__.cs,meta15413__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async15412.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15414){
var self__ = this;
var _15414__$1 = this;
return self__.meta15413;
});})(cs))
;

cljs.core.async.t_cljs$core$async15412.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15412.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async15412.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15412.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15412.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15412.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15412.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15413","meta15413",-1332096295,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async15412.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15412.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15412";

cljs.core.async.t_cljs$core$async15412.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async15412");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15412.
 */
cljs.core.async.__GT_t_cljs$core$async15412 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async15412(ch__$1,cs__$1,meta15413){
return (new cljs.core.async.t_cljs$core$async15412(ch__$1,cs__$1,meta15413));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async15412(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__14795__auto___15631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14795__auto___15631,cs,m,dchan,dctr,done){
return (function (){
var f__14796__auto__ = (function (){var switch__14721__auto__ = ((function (c__14795__auto___15631,cs,m,dchan,dctr,done){
return (function (state_15547){
var state_val_15548 = (state_15547[(1)]);
if((state_val_15548 === (7))){
var inst_15543 = (state_15547[(2)]);
var state_15547__$1 = state_15547;
var statearr_15549_15632 = state_15547__$1;
(statearr_15549_15632[(2)] = inst_15543);

(statearr_15549_15632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (20))){
var inst_15448 = (state_15547[(7)]);
var inst_15460 = cljs.core.first.call(null,inst_15448);
var inst_15461 = cljs.core.nth.call(null,inst_15460,(0),null);
var inst_15462 = cljs.core.nth.call(null,inst_15460,(1),null);
var state_15547__$1 = (function (){var statearr_15550 = state_15547;
(statearr_15550[(8)] = inst_15461);

return statearr_15550;
})();
if(cljs.core.truth_(inst_15462)){
var statearr_15551_15633 = state_15547__$1;
(statearr_15551_15633[(1)] = (22));

} else {
var statearr_15552_15634 = state_15547__$1;
(statearr_15552_15634[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (27))){
var inst_15417 = (state_15547[(9)]);
var inst_15497 = (state_15547[(10)]);
var inst_15492 = (state_15547[(11)]);
var inst_15490 = (state_15547[(12)]);
var inst_15497__$1 = cljs.core._nth.call(null,inst_15490,inst_15492);
var inst_15498 = cljs.core.async.put_BANG_.call(null,inst_15497__$1,inst_15417,done);
var state_15547__$1 = (function (){var statearr_15553 = state_15547;
(statearr_15553[(10)] = inst_15497__$1);

return statearr_15553;
})();
if(cljs.core.truth_(inst_15498)){
var statearr_15554_15635 = state_15547__$1;
(statearr_15554_15635[(1)] = (30));

} else {
var statearr_15555_15636 = state_15547__$1;
(statearr_15555_15636[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (1))){
var state_15547__$1 = state_15547;
var statearr_15556_15637 = state_15547__$1;
(statearr_15556_15637[(2)] = null);

(statearr_15556_15637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (24))){
var inst_15448 = (state_15547[(7)]);
var inst_15467 = (state_15547[(2)]);
var inst_15468 = cljs.core.next.call(null,inst_15448);
var inst_15426 = inst_15468;
var inst_15427 = null;
var inst_15428 = (0);
var inst_15429 = (0);
var state_15547__$1 = (function (){var statearr_15557 = state_15547;
(statearr_15557[(13)] = inst_15427);

(statearr_15557[(14)] = inst_15429);

(statearr_15557[(15)] = inst_15467);

(statearr_15557[(16)] = inst_15426);

(statearr_15557[(17)] = inst_15428);

return statearr_15557;
})();
var statearr_15558_15638 = state_15547__$1;
(statearr_15558_15638[(2)] = null);

(statearr_15558_15638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (39))){
var state_15547__$1 = state_15547;
var statearr_15562_15639 = state_15547__$1;
(statearr_15562_15639[(2)] = null);

(statearr_15562_15639[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (4))){
var inst_15417 = (state_15547[(9)]);
var inst_15417__$1 = (state_15547[(2)]);
var inst_15418 = (inst_15417__$1 == null);
var state_15547__$1 = (function (){var statearr_15563 = state_15547;
(statearr_15563[(9)] = inst_15417__$1);

return statearr_15563;
})();
if(cljs.core.truth_(inst_15418)){
var statearr_15564_15640 = state_15547__$1;
(statearr_15564_15640[(1)] = (5));

} else {
var statearr_15565_15641 = state_15547__$1;
(statearr_15565_15641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (15))){
var inst_15427 = (state_15547[(13)]);
var inst_15429 = (state_15547[(14)]);
var inst_15426 = (state_15547[(16)]);
var inst_15428 = (state_15547[(17)]);
var inst_15444 = (state_15547[(2)]);
var inst_15445 = (inst_15429 + (1));
var tmp15559 = inst_15427;
var tmp15560 = inst_15426;
var tmp15561 = inst_15428;
var inst_15426__$1 = tmp15560;
var inst_15427__$1 = tmp15559;
var inst_15428__$1 = tmp15561;
var inst_15429__$1 = inst_15445;
var state_15547__$1 = (function (){var statearr_15566 = state_15547;
(statearr_15566[(13)] = inst_15427__$1);

(statearr_15566[(14)] = inst_15429__$1);

(statearr_15566[(18)] = inst_15444);

(statearr_15566[(16)] = inst_15426__$1);

(statearr_15566[(17)] = inst_15428__$1);

return statearr_15566;
})();
var statearr_15567_15642 = state_15547__$1;
(statearr_15567_15642[(2)] = null);

(statearr_15567_15642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (21))){
var inst_15471 = (state_15547[(2)]);
var state_15547__$1 = state_15547;
var statearr_15571_15643 = state_15547__$1;
(statearr_15571_15643[(2)] = inst_15471);

(statearr_15571_15643[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (31))){
var inst_15497 = (state_15547[(10)]);
var inst_15501 = cljs.core.async.untap_STAR_.call(null,m,inst_15497);
var state_15547__$1 = state_15547;
var statearr_15572_15644 = state_15547__$1;
(statearr_15572_15644[(2)] = inst_15501);

(statearr_15572_15644[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (32))){
var inst_15491 = (state_15547[(19)]);
var inst_15489 = (state_15547[(20)]);
var inst_15492 = (state_15547[(11)]);
var inst_15490 = (state_15547[(12)]);
var inst_15503 = (state_15547[(2)]);
var inst_15504 = (inst_15492 + (1));
var tmp15568 = inst_15491;
var tmp15569 = inst_15489;
var tmp15570 = inst_15490;
var inst_15489__$1 = tmp15569;
var inst_15490__$1 = tmp15570;
var inst_15491__$1 = tmp15568;
var inst_15492__$1 = inst_15504;
var state_15547__$1 = (function (){var statearr_15573 = state_15547;
(statearr_15573[(19)] = inst_15491__$1);

(statearr_15573[(20)] = inst_15489__$1);

(statearr_15573[(21)] = inst_15503);

(statearr_15573[(11)] = inst_15492__$1);

(statearr_15573[(12)] = inst_15490__$1);

return statearr_15573;
})();
var statearr_15574_15645 = state_15547__$1;
(statearr_15574_15645[(2)] = null);

(statearr_15574_15645[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (40))){
var inst_15516 = (state_15547[(22)]);
var inst_15520 = cljs.core.async.untap_STAR_.call(null,m,inst_15516);
var state_15547__$1 = state_15547;
var statearr_15575_15646 = state_15547__$1;
(statearr_15575_15646[(2)] = inst_15520);

(statearr_15575_15646[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (33))){
var inst_15507 = (state_15547[(23)]);
var inst_15509 = cljs.core.chunked_seq_QMARK_.call(null,inst_15507);
var state_15547__$1 = state_15547;
if(inst_15509){
var statearr_15576_15647 = state_15547__$1;
(statearr_15576_15647[(1)] = (36));

} else {
var statearr_15577_15648 = state_15547__$1;
(statearr_15577_15648[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (13))){
var inst_15438 = (state_15547[(24)]);
var inst_15441 = cljs.core.async.close_BANG_.call(null,inst_15438);
var state_15547__$1 = state_15547;
var statearr_15578_15649 = state_15547__$1;
(statearr_15578_15649[(2)] = inst_15441);

(statearr_15578_15649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (22))){
var inst_15461 = (state_15547[(8)]);
var inst_15464 = cljs.core.async.close_BANG_.call(null,inst_15461);
var state_15547__$1 = state_15547;
var statearr_15579_15650 = state_15547__$1;
(statearr_15579_15650[(2)] = inst_15464);

(statearr_15579_15650[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (36))){
var inst_15507 = (state_15547[(23)]);
var inst_15511 = cljs.core.chunk_first.call(null,inst_15507);
var inst_15512 = cljs.core.chunk_rest.call(null,inst_15507);
var inst_15513 = cljs.core.count.call(null,inst_15511);
var inst_15489 = inst_15512;
var inst_15490 = inst_15511;
var inst_15491 = inst_15513;
var inst_15492 = (0);
var state_15547__$1 = (function (){var statearr_15580 = state_15547;
(statearr_15580[(19)] = inst_15491);

(statearr_15580[(20)] = inst_15489);

(statearr_15580[(11)] = inst_15492);

(statearr_15580[(12)] = inst_15490);

return statearr_15580;
})();
var statearr_15581_15651 = state_15547__$1;
(statearr_15581_15651[(2)] = null);

(statearr_15581_15651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (41))){
var inst_15507 = (state_15547[(23)]);
var inst_15522 = (state_15547[(2)]);
var inst_15523 = cljs.core.next.call(null,inst_15507);
var inst_15489 = inst_15523;
var inst_15490 = null;
var inst_15491 = (0);
var inst_15492 = (0);
var state_15547__$1 = (function (){var statearr_15582 = state_15547;
(statearr_15582[(25)] = inst_15522);

(statearr_15582[(19)] = inst_15491);

(statearr_15582[(20)] = inst_15489);

(statearr_15582[(11)] = inst_15492);

(statearr_15582[(12)] = inst_15490);

return statearr_15582;
})();
var statearr_15583_15652 = state_15547__$1;
(statearr_15583_15652[(2)] = null);

(statearr_15583_15652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (43))){
var state_15547__$1 = state_15547;
var statearr_15584_15653 = state_15547__$1;
(statearr_15584_15653[(2)] = null);

(statearr_15584_15653[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (29))){
var inst_15531 = (state_15547[(2)]);
var state_15547__$1 = state_15547;
var statearr_15585_15654 = state_15547__$1;
(statearr_15585_15654[(2)] = inst_15531);

(statearr_15585_15654[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (44))){
var inst_15540 = (state_15547[(2)]);
var state_15547__$1 = (function (){var statearr_15586 = state_15547;
(statearr_15586[(26)] = inst_15540);

return statearr_15586;
})();
var statearr_15587_15655 = state_15547__$1;
(statearr_15587_15655[(2)] = null);

(statearr_15587_15655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (6))){
var inst_15481 = (state_15547[(27)]);
var inst_15480 = cljs.core.deref.call(null,cs);
var inst_15481__$1 = cljs.core.keys.call(null,inst_15480);
var inst_15482 = cljs.core.count.call(null,inst_15481__$1);
var inst_15483 = cljs.core.reset_BANG_.call(null,dctr,inst_15482);
var inst_15488 = cljs.core.seq.call(null,inst_15481__$1);
var inst_15489 = inst_15488;
var inst_15490 = null;
var inst_15491 = (0);
var inst_15492 = (0);
var state_15547__$1 = (function (){var statearr_15588 = state_15547;
(statearr_15588[(27)] = inst_15481__$1);

(statearr_15588[(19)] = inst_15491);

(statearr_15588[(28)] = inst_15483);

(statearr_15588[(20)] = inst_15489);

(statearr_15588[(11)] = inst_15492);

(statearr_15588[(12)] = inst_15490);

return statearr_15588;
})();
var statearr_15589_15656 = state_15547__$1;
(statearr_15589_15656[(2)] = null);

(statearr_15589_15656[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (28))){
var inst_15489 = (state_15547[(20)]);
var inst_15507 = (state_15547[(23)]);
var inst_15507__$1 = cljs.core.seq.call(null,inst_15489);
var state_15547__$1 = (function (){var statearr_15590 = state_15547;
(statearr_15590[(23)] = inst_15507__$1);

return statearr_15590;
})();
if(inst_15507__$1){
var statearr_15591_15657 = state_15547__$1;
(statearr_15591_15657[(1)] = (33));

} else {
var statearr_15592_15658 = state_15547__$1;
(statearr_15592_15658[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (25))){
var inst_15491 = (state_15547[(19)]);
var inst_15492 = (state_15547[(11)]);
var inst_15494 = (inst_15492 < inst_15491);
var inst_15495 = inst_15494;
var state_15547__$1 = state_15547;
if(cljs.core.truth_(inst_15495)){
var statearr_15593_15659 = state_15547__$1;
(statearr_15593_15659[(1)] = (27));

} else {
var statearr_15594_15660 = state_15547__$1;
(statearr_15594_15660[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (34))){
var state_15547__$1 = state_15547;
var statearr_15595_15661 = state_15547__$1;
(statearr_15595_15661[(2)] = null);

(statearr_15595_15661[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (17))){
var state_15547__$1 = state_15547;
var statearr_15596_15662 = state_15547__$1;
(statearr_15596_15662[(2)] = null);

(statearr_15596_15662[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (3))){
var inst_15545 = (state_15547[(2)]);
var state_15547__$1 = state_15547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15547__$1,inst_15545);
} else {
if((state_val_15548 === (12))){
var inst_15476 = (state_15547[(2)]);
var state_15547__$1 = state_15547;
var statearr_15597_15663 = state_15547__$1;
(statearr_15597_15663[(2)] = inst_15476);

(statearr_15597_15663[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (2))){
var state_15547__$1 = state_15547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15547__$1,(4),ch);
} else {
if((state_val_15548 === (23))){
var state_15547__$1 = state_15547;
var statearr_15598_15664 = state_15547__$1;
(statearr_15598_15664[(2)] = null);

(statearr_15598_15664[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (35))){
var inst_15529 = (state_15547[(2)]);
var state_15547__$1 = state_15547;
var statearr_15599_15665 = state_15547__$1;
(statearr_15599_15665[(2)] = inst_15529);

(statearr_15599_15665[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (19))){
var inst_15448 = (state_15547[(7)]);
var inst_15452 = cljs.core.chunk_first.call(null,inst_15448);
var inst_15453 = cljs.core.chunk_rest.call(null,inst_15448);
var inst_15454 = cljs.core.count.call(null,inst_15452);
var inst_15426 = inst_15453;
var inst_15427 = inst_15452;
var inst_15428 = inst_15454;
var inst_15429 = (0);
var state_15547__$1 = (function (){var statearr_15600 = state_15547;
(statearr_15600[(13)] = inst_15427);

(statearr_15600[(14)] = inst_15429);

(statearr_15600[(16)] = inst_15426);

(statearr_15600[(17)] = inst_15428);

return statearr_15600;
})();
var statearr_15601_15666 = state_15547__$1;
(statearr_15601_15666[(2)] = null);

(statearr_15601_15666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (11))){
var inst_15448 = (state_15547[(7)]);
var inst_15426 = (state_15547[(16)]);
var inst_15448__$1 = cljs.core.seq.call(null,inst_15426);
var state_15547__$1 = (function (){var statearr_15602 = state_15547;
(statearr_15602[(7)] = inst_15448__$1);

return statearr_15602;
})();
if(inst_15448__$1){
var statearr_15603_15667 = state_15547__$1;
(statearr_15603_15667[(1)] = (16));

} else {
var statearr_15604_15668 = state_15547__$1;
(statearr_15604_15668[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (9))){
var inst_15478 = (state_15547[(2)]);
var state_15547__$1 = state_15547;
var statearr_15605_15669 = state_15547__$1;
(statearr_15605_15669[(2)] = inst_15478);

(statearr_15605_15669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (5))){
var inst_15424 = cljs.core.deref.call(null,cs);
var inst_15425 = cljs.core.seq.call(null,inst_15424);
var inst_15426 = inst_15425;
var inst_15427 = null;
var inst_15428 = (0);
var inst_15429 = (0);
var state_15547__$1 = (function (){var statearr_15606 = state_15547;
(statearr_15606[(13)] = inst_15427);

(statearr_15606[(14)] = inst_15429);

(statearr_15606[(16)] = inst_15426);

(statearr_15606[(17)] = inst_15428);

return statearr_15606;
})();
var statearr_15607_15670 = state_15547__$1;
(statearr_15607_15670[(2)] = null);

(statearr_15607_15670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (14))){
var state_15547__$1 = state_15547;
var statearr_15608_15671 = state_15547__$1;
(statearr_15608_15671[(2)] = null);

(statearr_15608_15671[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (45))){
var inst_15537 = (state_15547[(2)]);
var state_15547__$1 = state_15547;
var statearr_15609_15672 = state_15547__$1;
(statearr_15609_15672[(2)] = inst_15537);

(statearr_15609_15672[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (26))){
var inst_15481 = (state_15547[(27)]);
var inst_15533 = (state_15547[(2)]);
var inst_15534 = cljs.core.seq.call(null,inst_15481);
var state_15547__$1 = (function (){var statearr_15610 = state_15547;
(statearr_15610[(29)] = inst_15533);

return statearr_15610;
})();
if(inst_15534){
var statearr_15611_15673 = state_15547__$1;
(statearr_15611_15673[(1)] = (42));

} else {
var statearr_15612_15674 = state_15547__$1;
(statearr_15612_15674[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (16))){
var inst_15448 = (state_15547[(7)]);
var inst_15450 = cljs.core.chunked_seq_QMARK_.call(null,inst_15448);
var state_15547__$1 = state_15547;
if(inst_15450){
var statearr_15613_15675 = state_15547__$1;
(statearr_15613_15675[(1)] = (19));

} else {
var statearr_15614_15676 = state_15547__$1;
(statearr_15614_15676[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (38))){
var inst_15526 = (state_15547[(2)]);
var state_15547__$1 = state_15547;
var statearr_15615_15677 = state_15547__$1;
(statearr_15615_15677[(2)] = inst_15526);

(statearr_15615_15677[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (30))){
var state_15547__$1 = state_15547;
var statearr_15616_15678 = state_15547__$1;
(statearr_15616_15678[(2)] = null);

(statearr_15616_15678[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (10))){
var inst_15427 = (state_15547[(13)]);
var inst_15429 = (state_15547[(14)]);
var inst_15437 = cljs.core._nth.call(null,inst_15427,inst_15429);
var inst_15438 = cljs.core.nth.call(null,inst_15437,(0),null);
var inst_15439 = cljs.core.nth.call(null,inst_15437,(1),null);
var state_15547__$1 = (function (){var statearr_15617 = state_15547;
(statearr_15617[(24)] = inst_15438);

return statearr_15617;
})();
if(cljs.core.truth_(inst_15439)){
var statearr_15618_15679 = state_15547__$1;
(statearr_15618_15679[(1)] = (13));

} else {
var statearr_15619_15680 = state_15547__$1;
(statearr_15619_15680[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (18))){
var inst_15474 = (state_15547[(2)]);
var state_15547__$1 = state_15547;
var statearr_15620_15681 = state_15547__$1;
(statearr_15620_15681[(2)] = inst_15474);

(statearr_15620_15681[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (42))){
var state_15547__$1 = state_15547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15547__$1,(45),dchan);
} else {
if((state_val_15548 === (37))){
var inst_15417 = (state_15547[(9)]);
var inst_15516 = (state_15547[(22)]);
var inst_15507 = (state_15547[(23)]);
var inst_15516__$1 = cljs.core.first.call(null,inst_15507);
var inst_15517 = cljs.core.async.put_BANG_.call(null,inst_15516__$1,inst_15417,done);
var state_15547__$1 = (function (){var statearr_15621 = state_15547;
(statearr_15621[(22)] = inst_15516__$1);

return statearr_15621;
})();
if(cljs.core.truth_(inst_15517)){
var statearr_15622_15682 = state_15547__$1;
(statearr_15622_15682[(1)] = (39));

} else {
var statearr_15623_15683 = state_15547__$1;
(statearr_15623_15683[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15548 === (8))){
var inst_15429 = (state_15547[(14)]);
var inst_15428 = (state_15547[(17)]);
var inst_15431 = (inst_15429 < inst_15428);
var inst_15432 = inst_15431;
var state_15547__$1 = state_15547;
if(cljs.core.truth_(inst_15432)){
var statearr_15624_15684 = state_15547__$1;
(statearr_15624_15684[(1)] = (10));

} else {
var statearr_15625_15685 = state_15547__$1;
(statearr_15625_15685[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14795__auto___15631,cs,m,dchan,dctr,done))
;
return ((function (switch__14721__auto__,c__14795__auto___15631,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__14722__auto__ = null;
var cljs$core$async$mult_$_state_machine__14722__auto____0 = (function (){
var statearr_15626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15626[(0)] = cljs$core$async$mult_$_state_machine__14722__auto__);

(statearr_15626[(1)] = (1));

return statearr_15626;
});
var cljs$core$async$mult_$_state_machine__14722__auto____1 = (function (state_15547){
while(true){
var ret_value__14723__auto__ = (function (){try{while(true){
var result__14724__auto__ = switch__14721__auto__.call(null,state_15547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14724__auto__;
}
break;
}
}catch (e15627){var ex__14725__auto__ = e15627;
var statearr_15628_15686 = state_15547;
(statearr_15628_15686[(2)] = ex__14725__auto__);


if(cljs.core.seq.call(null,(state_15547[(4)]))){
var statearr_15629_15687 = state_15547;
(statearr_15629_15687[(1)] = cljs.core.first.call(null,(state_15547[(4)])));

} else {
throw ex__14725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15688 = state_15547;
state_15547 = G__15688;
continue;
} else {
return ret_value__14723__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14722__auto__ = function(state_15547){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14722__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14722__auto____1.call(this,state_15547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14722__auto____0;
cljs$core$async$mult_$_state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14722__auto____1;
return cljs$core$async$mult_$_state_machine__14722__auto__;
})()
;})(switch__14721__auto__,c__14795__auto___15631,cs,m,dchan,dctr,done))
})();
var state__14797__auto__ = (function (){var statearr_15630 = f__14796__auto__.call(null);
(statearr_15630[(6)] = c__14795__auto___15631);

return statearr_15630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14797__auto__);
});})(c__14795__auto___15631,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15690 = arguments.length;
switch (G__15690) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15702 = arguments.length;
var i__4532__auto___15703 = (0);
while(true){
if((i__4532__auto___15703 < len__4531__auto___15702)){
args__4534__auto__.push((arguments[i__4532__auto___15703]));

var G__15704 = (i__4532__auto___15703 + (1));
i__4532__auto___15703 = G__15704;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15696){
var map__15697 = p__15696;
var map__15697__$1 = ((((!((map__15697 == null)))?(((((map__15697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15697):map__15697);
var opts = map__15697__$1;
var statearr_15699_15705 = state;
(statearr_15699_15705[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__15697,map__15697__$1,opts){
return (function (val){
var statearr_15700_15706 = state;
(statearr_15700_15706[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__15697,map__15697__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_15701_15707 = state;
(statearr_15701_15707[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15692){
var G__15693 = cljs.core.first.call(null,seq15692);
var seq15692__$1 = cljs.core.next.call(null,seq15692);
var G__15694 = cljs.core.first.call(null,seq15692__$1);
var seq15692__$2 = cljs.core.next.call(null,seq15692__$1);
var G__15695 = cljs.core.first.call(null,seq15692__$2);
var seq15692__$3 = cljs.core.next.call(null,seq15692__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15693,G__15694,G__15695,seq15692__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15708 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15708 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta15709){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta15709 = meta15709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15710,meta15709__$1){
var self__ = this;
var _15710__$1 = this;
return (new cljs.core.async.t_cljs$core$async15708(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta15709__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15708.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15710){
var self__ = this;
var _15710__$1 = this;
return self__.meta15709;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15708.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15708.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15708.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15708.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15708.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15708.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15708.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15708.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15708.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta15709","meta15709",1023607193,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15708.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15708";

cljs.core.async.t_cljs$core$async15708.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async15708");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15708.
 */
cljs.core.async.__GT_t_cljs$core$async15708 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15708(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta15709){
return (new cljs.core.async.t_cljs$core$async15708(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta15709));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15708(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14795__auto___15873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14795__auto___15873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14796__auto__ = (function (){var switch__14721__auto__ = ((function (c__14795__auto___15873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15812){
var state_val_15813 = (state_15812[(1)]);
if((state_val_15813 === (7))){
var inst_15727 = (state_15812[(2)]);
var state_15812__$1 = state_15812;
var statearr_15814_15874 = state_15812__$1;
(statearr_15814_15874[(2)] = inst_15727);

(statearr_15814_15874[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (20))){
var inst_15739 = (state_15812[(7)]);
var state_15812__$1 = state_15812;
var statearr_15815_15875 = state_15812__$1;
(statearr_15815_15875[(2)] = inst_15739);

(statearr_15815_15875[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (27))){
var state_15812__$1 = state_15812;
var statearr_15816_15876 = state_15812__$1;
(statearr_15816_15876[(2)] = null);

(statearr_15816_15876[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (1))){
var inst_15714 = (state_15812[(8)]);
var inst_15714__$1 = calc_state.call(null);
var inst_15716 = (inst_15714__$1 == null);
var inst_15717 = cljs.core.not.call(null,inst_15716);
var state_15812__$1 = (function (){var statearr_15817 = state_15812;
(statearr_15817[(8)] = inst_15714__$1);

return statearr_15817;
})();
if(inst_15717){
var statearr_15818_15877 = state_15812__$1;
(statearr_15818_15877[(1)] = (2));

} else {
var statearr_15819_15878 = state_15812__$1;
(statearr_15819_15878[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (24))){
var inst_15772 = (state_15812[(9)]);
var inst_15786 = (state_15812[(10)]);
var inst_15763 = (state_15812[(11)]);
var inst_15786__$1 = inst_15763.call(null,inst_15772);
var state_15812__$1 = (function (){var statearr_15820 = state_15812;
(statearr_15820[(10)] = inst_15786__$1);

return statearr_15820;
})();
if(cljs.core.truth_(inst_15786__$1)){
var statearr_15821_15879 = state_15812__$1;
(statearr_15821_15879[(1)] = (29));

} else {
var statearr_15822_15880 = state_15812__$1;
(statearr_15822_15880[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (4))){
var inst_15730 = (state_15812[(2)]);
var state_15812__$1 = state_15812;
if(cljs.core.truth_(inst_15730)){
var statearr_15823_15881 = state_15812__$1;
(statearr_15823_15881[(1)] = (8));

} else {
var statearr_15824_15882 = state_15812__$1;
(statearr_15824_15882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (15))){
var inst_15757 = (state_15812[(2)]);
var state_15812__$1 = state_15812;
if(cljs.core.truth_(inst_15757)){
var statearr_15825_15883 = state_15812__$1;
(statearr_15825_15883[(1)] = (19));

} else {
var statearr_15826_15884 = state_15812__$1;
(statearr_15826_15884[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (21))){
var inst_15762 = (state_15812[(12)]);
var inst_15762__$1 = (state_15812[(2)]);
var inst_15763 = cljs.core.get.call(null,inst_15762__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15764 = cljs.core.get.call(null,inst_15762__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15765 = cljs.core.get.call(null,inst_15762__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15812__$1 = (function (){var statearr_15827 = state_15812;
(statearr_15827[(12)] = inst_15762__$1);

(statearr_15827[(11)] = inst_15763);

(statearr_15827[(13)] = inst_15764);

return statearr_15827;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15812__$1,(22),inst_15765);
} else {
if((state_val_15813 === (31))){
var inst_15794 = (state_15812[(2)]);
var state_15812__$1 = state_15812;
if(cljs.core.truth_(inst_15794)){
var statearr_15828_15885 = state_15812__$1;
(statearr_15828_15885[(1)] = (32));

} else {
var statearr_15829_15886 = state_15812__$1;
(statearr_15829_15886[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (32))){
var inst_15771 = (state_15812[(14)]);
var state_15812__$1 = state_15812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15812__$1,(35),out,inst_15771);
} else {
if((state_val_15813 === (33))){
var inst_15762 = (state_15812[(12)]);
var inst_15739 = inst_15762;
var state_15812__$1 = (function (){var statearr_15830 = state_15812;
(statearr_15830[(7)] = inst_15739);

return statearr_15830;
})();
var statearr_15831_15887 = state_15812__$1;
(statearr_15831_15887[(2)] = null);

(statearr_15831_15887[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (13))){
var inst_15739 = (state_15812[(7)]);
var inst_15746 = inst_15739.cljs$lang$protocol_mask$partition0$;
var inst_15747 = (inst_15746 & (64));
var inst_15748 = inst_15739.cljs$core$ISeq$;
var inst_15749 = (cljs.core.PROTOCOL_SENTINEL === inst_15748);
var inst_15750 = ((inst_15747) || (inst_15749));
var state_15812__$1 = state_15812;
if(cljs.core.truth_(inst_15750)){
var statearr_15832_15888 = state_15812__$1;
(statearr_15832_15888[(1)] = (16));

} else {
var statearr_15833_15889 = state_15812__$1;
(statearr_15833_15889[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (22))){
var inst_15771 = (state_15812[(14)]);
var inst_15772 = (state_15812[(9)]);
var inst_15770 = (state_15812[(2)]);
var inst_15771__$1 = cljs.core.nth.call(null,inst_15770,(0),null);
var inst_15772__$1 = cljs.core.nth.call(null,inst_15770,(1),null);
var inst_15773 = (inst_15771__$1 == null);
var inst_15774 = cljs.core._EQ_.call(null,inst_15772__$1,change);
var inst_15775 = ((inst_15773) || (inst_15774));
var state_15812__$1 = (function (){var statearr_15834 = state_15812;
(statearr_15834[(14)] = inst_15771__$1);

(statearr_15834[(9)] = inst_15772__$1);

return statearr_15834;
})();
if(cljs.core.truth_(inst_15775)){
var statearr_15835_15890 = state_15812__$1;
(statearr_15835_15890[(1)] = (23));

} else {
var statearr_15836_15891 = state_15812__$1;
(statearr_15836_15891[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (36))){
var inst_15762 = (state_15812[(12)]);
var inst_15739 = inst_15762;
var state_15812__$1 = (function (){var statearr_15837 = state_15812;
(statearr_15837[(7)] = inst_15739);

return statearr_15837;
})();
var statearr_15838_15892 = state_15812__$1;
(statearr_15838_15892[(2)] = null);

(statearr_15838_15892[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (29))){
var inst_15786 = (state_15812[(10)]);
var state_15812__$1 = state_15812;
var statearr_15839_15893 = state_15812__$1;
(statearr_15839_15893[(2)] = inst_15786);

(statearr_15839_15893[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (6))){
var state_15812__$1 = state_15812;
var statearr_15840_15894 = state_15812__$1;
(statearr_15840_15894[(2)] = false);

(statearr_15840_15894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (28))){
var inst_15782 = (state_15812[(2)]);
var inst_15783 = calc_state.call(null);
var inst_15739 = inst_15783;
var state_15812__$1 = (function (){var statearr_15841 = state_15812;
(statearr_15841[(15)] = inst_15782);

(statearr_15841[(7)] = inst_15739);

return statearr_15841;
})();
var statearr_15842_15895 = state_15812__$1;
(statearr_15842_15895[(2)] = null);

(statearr_15842_15895[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (25))){
var inst_15808 = (state_15812[(2)]);
var state_15812__$1 = state_15812;
var statearr_15843_15896 = state_15812__$1;
(statearr_15843_15896[(2)] = inst_15808);

(statearr_15843_15896[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (34))){
var inst_15806 = (state_15812[(2)]);
var state_15812__$1 = state_15812;
var statearr_15844_15897 = state_15812__$1;
(statearr_15844_15897[(2)] = inst_15806);

(statearr_15844_15897[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (17))){
var state_15812__$1 = state_15812;
var statearr_15845_15898 = state_15812__$1;
(statearr_15845_15898[(2)] = false);

(statearr_15845_15898[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (3))){
var state_15812__$1 = state_15812;
var statearr_15846_15899 = state_15812__$1;
(statearr_15846_15899[(2)] = false);

(statearr_15846_15899[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (12))){
var inst_15810 = (state_15812[(2)]);
var state_15812__$1 = state_15812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15812__$1,inst_15810);
} else {
if((state_val_15813 === (2))){
var inst_15714 = (state_15812[(8)]);
var inst_15719 = inst_15714.cljs$lang$protocol_mask$partition0$;
var inst_15720 = (inst_15719 & (64));
var inst_15721 = inst_15714.cljs$core$ISeq$;
var inst_15722 = (cljs.core.PROTOCOL_SENTINEL === inst_15721);
var inst_15723 = ((inst_15720) || (inst_15722));
var state_15812__$1 = state_15812;
if(cljs.core.truth_(inst_15723)){
var statearr_15847_15900 = state_15812__$1;
(statearr_15847_15900[(1)] = (5));

} else {
var statearr_15848_15901 = state_15812__$1;
(statearr_15848_15901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (23))){
var inst_15771 = (state_15812[(14)]);
var inst_15777 = (inst_15771 == null);
var state_15812__$1 = state_15812;
if(cljs.core.truth_(inst_15777)){
var statearr_15849_15902 = state_15812__$1;
(statearr_15849_15902[(1)] = (26));

} else {
var statearr_15850_15903 = state_15812__$1;
(statearr_15850_15903[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (35))){
var inst_15797 = (state_15812[(2)]);
var state_15812__$1 = state_15812;
if(cljs.core.truth_(inst_15797)){
var statearr_15851_15904 = state_15812__$1;
(statearr_15851_15904[(1)] = (36));

} else {
var statearr_15852_15905 = state_15812__$1;
(statearr_15852_15905[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (19))){
var inst_15739 = (state_15812[(7)]);
var inst_15759 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15739);
var state_15812__$1 = state_15812;
var statearr_15853_15906 = state_15812__$1;
(statearr_15853_15906[(2)] = inst_15759);

(statearr_15853_15906[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (11))){
var inst_15739 = (state_15812[(7)]);
var inst_15743 = (inst_15739 == null);
var inst_15744 = cljs.core.not.call(null,inst_15743);
var state_15812__$1 = state_15812;
if(inst_15744){
var statearr_15854_15907 = state_15812__$1;
(statearr_15854_15907[(1)] = (13));

} else {
var statearr_15855_15908 = state_15812__$1;
(statearr_15855_15908[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (9))){
var inst_15714 = (state_15812[(8)]);
var state_15812__$1 = state_15812;
var statearr_15856_15909 = state_15812__$1;
(statearr_15856_15909[(2)] = inst_15714);

(statearr_15856_15909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (5))){
var state_15812__$1 = state_15812;
var statearr_15857_15910 = state_15812__$1;
(statearr_15857_15910[(2)] = true);

(statearr_15857_15910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (14))){
var state_15812__$1 = state_15812;
var statearr_15858_15911 = state_15812__$1;
(statearr_15858_15911[(2)] = false);

(statearr_15858_15911[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (26))){
var inst_15772 = (state_15812[(9)]);
var inst_15779 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15772);
var state_15812__$1 = state_15812;
var statearr_15859_15912 = state_15812__$1;
(statearr_15859_15912[(2)] = inst_15779);

(statearr_15859_15912[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (16))){
var state_15812__$1 = state_15812;
var statearr_15860_15913 = state_15812__$1;
(statearr_15860_15913[(2)] = true);

(statearr_15860_15913[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (38))){
var inst_15802 = (state_15812[(2)]);
var state_15812__$1 = state_15812;
var statearr_15861_15914 = state_15812__$1;
(statearr_15861_15914[(2)] = inst_15802);

(statearr_15861_15914[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (30))){
var inst_15772 = (state_15812[(9)]);
var inst_15763 = (state_15812[(11)]);
var inst_15764 = (state_15812[(13)]);
var inst_15789 = cljs.core.empty_QMARK_.call(null,inst_15763);
var inst_15790 = inst_15764.call(null,inst_15772);
var inst_15791 = cljs.core.not.call(null,inst_15790);
var inst_15792 = ((inst_15789) && (inst_15791));
var state_15812__$1 = state_15812;
var statearr_15862_15915 = state_15812__$1;
(statearr_15862_15915[(2)] = inst_15792);

(statearr_15862_15915[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (10))){
var inst_15714 = (state_15812[(8)]);
var inst_15735 = (state_15812[(2)]);
var inst_15736 = cljs.core.get.call(null,inst_15735,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15737 = cljs.core.get.call(null,inst_15735,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15738 = cljs.core.get.call(null,inst_15735,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15739 = inst_15714;
var state_15812__$1 = (function (){var statearr_15863 = state_15812;
(statearr_15863[(7)] = inst_15739);

(statearr_15863[(16)] = inst_15736);

(statearr_15863[(17)] = inst_15737);

(statearr_15863[(18)] = inst_15738);

return statearr_15863;
})();
var statearr_15864_15916 = state_15812__$1;
(statearr_15864_15916[(2)] = null);

(statearr_15864_15916[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (18))){
var inst_15754 = (state_15812[(2)]);
var state_15812__$1 = state_15812;
var statearr_15865_15917 = state_15812__$1;
(statearr_15865_15917[(2)] = inst_15754);

(statearr_15865_15917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (37))){
var state_15812__$1 = state_15812;
var statearr_15866_15918 = state_15812__$1;
(statearr_15866_15918[(2)] = null);

(statearr_15866_15918[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (8))){
var inst_15714 = (state_15812[(8)]);
var inst_15732 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15714);
var state_15812__$1 = state_15812;
var statearr_15867_15919 = state_15812__$1;
(statearr_15867_15919[(2)] = inst_15732);

(statearr_15867_15919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14795__auto___15873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14721__auto__,c__14795__auto___15873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__14722__auto__ = null;
var cljs$core$async$mix_$_state_machine__14722__auto____0 = (function (){
var statearr_15868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15868[(0)] = cljs$core$async$mix_$_state_machine__14722__auto__);

(statearr_15868[(1)] = (1));

return statearr_15868;
});
var cljs$core$async$mix_$_state_machine__14722__auto____1 = (function (state_15812){
while(true){
var ret_value__14723__auto__ = (function (){try{while(true){
var result__14724__auto__ = switch__14721__auto__.call(null,state_15812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14724__auto__;
}
break;
}
}catch (e15869){var ex__14725__auto__ = e15869;
var statearr_15870_15920 = state_15812;
(statearr_15870_15920[(2)] = ex__14725__auto__);


if(cljs.core.seq.call(null,(state_15812[(4)]))){
var statearr_15871_15921 = state_15812;
(statearr_15871_15921[(1)] = cljs.core.first.call(null,(state_15812[(4)])));

} else {
throw ex__14725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15922 = state_15812;
state_15812 = G__15922;
continue;
} else {
return ret_value__14723__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14722__auto__ = function(state_15812){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14722__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14722__auto____1.call(this,state_15812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14722__auto____0;
cljs$core$async$mix_$_state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14722__auto____1;
return cljs$core$async$mix_$_state_machine__14722__auto__;
})()
;})(switch__14721__auto__,c__14795__auto___15873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14797__auto__ = (function (){var statearr_15872 = f__14796__auto__.call(null);
(statearr_15872[(6)] = c__14795__auto___15873);

return statearr_15872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14797__auto__);
});})(c__14795__auto___15873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15924 = arguments.length;
switch (G__15924) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15928 = arguments.length;
switch (G__15928) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__15926_SHARP_){
if(cljs.core.truth_(p1__15926_SHARP_.call(null,topic))){
return p1__15926_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15926_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15929 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15929 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15930){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15930 = meta15930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15931,meta15930__$1){
var self__ = this;
var _15931__$1 = this;
return (new cljs.core.async.t_cljs$core$async15929(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15930__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15929.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15931){
var self__ = this;
var _15931__$1 = this;
return self__.meta15930;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15929.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15929.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15929.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15929.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15929.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15929.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15929.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15929.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15930","meta15930",1947584218,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15929.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15929.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15929";

cljs.core.async.t_cljs$core$async15929.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async15929");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15929.
 */
cljs.core.async.__GT_t_cljs$core$async15929 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15929(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15930){
return (new cljs.core.async.t_cljs$core$async15929(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15930));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15929(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14795__auto___16050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14795__auto___16050,mults,ensure_mult,p){
return (function (){
var f__14796__auto__ = (function (){var switch__14721__auto__ = ((function (c__14795__auto___16050,mults,ensure_mult,p){
return (function (state_16003){
var state_val_16004 = (state_16003[(1)]);
if((state_val_16004 === (7))){
var inst_15999 = (state_16003[(2)]);
var state_16003__$1 = state_16003;
var statearr_16005_16051 = state_16003__$1;
(statearr_16005_16051[(2)] = inst_15999);

(statearr_16005_16051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (20))){
var state_16003__$1 = state_16003;
var statearr_16006_16052 = state_16003__$1;
(statearr_16006_16052[(2)] = null);

(statearr_16006_16052[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (1))){
var state_16003__$1 = state_16003;
var statearr_16007_16053 = state_16003__$1;
(statearr_16007_16053[(2)] = null);

(statearr_16007_16053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (24))){
var inst_15982 = (state_16003[(7)]);
var inst_15991 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15982);
var state_16003__$1 = state_16003;
var statearr_16008_16054 = state_16003__$1;
(statearr_16008_16054[(2)] = inst_15991);

(statearr_16008_16054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (4))){
var inst_15934 = (state_16003[(8)]);
var inst_15934__$1 = (state_16003[(2)]);
var inst_15935 = (inst_15934__$1 == null);
var state_16003__$1 = (function (){var statearr_16009 = state_16003;
(statearr_16009[(8)] = inst_15934__$1);

return statearr_16009;
})();
if(cljs.core.truth_(inst_15935)){
var statearr_16010_16055 = state_16003__$1;
(statearr_16010_16055[(1)] = (5));

} else {
var statearr_16011_16056 = state_16003__$1;
(statearr_16011_16056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (15))){
var inst_15976 = (state_16003[(2)]);
var state_16003__$1 = state_16003;
var statearr_16012_16057 = state_16003__$1;
(statearr_16012_16057[(2)] = inst_15976);

(statearr_16012_16057[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (21))){
var inst_15996 = (state_16003[(2)]);
var state_16003__$1 = (function (){var statearr_16013 = state_16003;
(statearr_16013[(9)] = inst_15996);

return statearr_16013;
})();
var statearr_16014_16058 = state_16003__$1;
(statearr_16014_16058[(2)] = null);

(statearr_16014_16058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (13))){
var inst_15958 = (state_16003[(10)]);
var inst_15960 = cljs.core.chunked_seq_QMARK_.call(null,inst_15958);
var state_16003__$1 = state_16003;
if(inst_15960){
var statearr_16015_16059 = state_16003__$1;
(statearr_16015_16059[(1)] = (16));

} else {
var statearr_16016_16060 = state_16003__$1;
(statearr_16016_16060[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (22))){
var inst_15988 = (state_16003[(2)]);
var state_16003__$1 = state_16003;
if(cljs.core.truth_(inst_15988)){
var statearr_16017_16061 = state_16003__$1;
(statearr_16017_16061[(1)] = (23));

} else {
var statearr_16018_16062 = state_16003__$1;
(statearr_16018_16062[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (6))){
var inst_15984 = (state_16003[(11)]);
var inst_15934 = (state_16003[(8)]);
var inst_15982 = (state_16003[(7)]);
var inst_15982__$1 = topic_fn.call(null,inst_15934);
var inst_15983 = cljs.core.deref.call(null,mults);
var inst_15984__$1 = cljs.core.get.call(null,inst_15983,inst_15982__$1);
var state_16003__$1 = (function (){var statearr_16019 = state_16003;
(statearr_16019[(11)] = inst_15984__$1);

(statearr_16019[(7)] = inst_15982__$1);

return statearr_16019;
})();
if(cljs.core.truth_(inst_15984__$1)){
var statearr_16020_16063 = state_16003__$1;
(statearr_16020_16063[(1)] = (19));

} else {
var statearr_16021_16064 = state_16003__$1;
(statearr_16021_16064[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (25))){
var inst_15993 = (state_16003[(2)]);
var state_16003__$1 = state_16003;
var statearr_16022_16065 = state_16003__$1;
(statearr_16022_16065[(2)] = inst_15993);

(statearr_16022_16065[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (17))){
var inst_15958 = (state_16003[(10)]);
var inst_15967 = cljs.core.first.call(null,inst_15958);
var inst_15968 = cljs.core.async.muxch_STAR_.call(null,inst_15967);
var inst_15969 = cljs.core.async.close_BANG_.call(null,inst_15968);
var inst_15970 = cljs.core.next.call(null,inst_15958);
var inst_15944 = inst_15970;
var inst_15945 = null;
var inst_15946 = (0);
var inst_15947 = (0);
var state_16003__$1 = (function (){var statearr_16023 = state_16003;
(statearr_16023[(12)] = inst_15969);

(statearr_16023[(13)] = inst_15947);

(statearr_16023[(14)] = inst_15945);

(statearr_16023[(15)] = inst_15944);

(statearr_16023[(16)] = inst_15946);

return statearr_16023;
})();
var statearr_16024_16066 = state_16003__$1;
(statearr_16024_16066[(2)] = null);

(statearr_16024_16066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (3))){
var inst_16001 = (state_16003[(2)]);
var state_16003__$1 = state_16003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16003__$1,inst_16001);
} else {
if((state_val_16004 === (12))){
var inst_15978 = (state_16003[(2)]);
var state_16003__$1 = state_16003;
var statearr_16025_16067 = state_16003__$1;
(statearr_16025_16067[(2)] = inst_15978);

(statearr_16025_16067[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (2))){
var state_16003__$1 = state_16003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16003__$1,(4),ch);
} else {
if((state_val_16004 === (23))){
var state_16003__$1 = state_16003;
var statearr_16026_16068 = state_16003__$1;
(statearr_16026_16068[(2)] = null);

(statearr_16026_16068[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (19))){
var inst_15984 = (state_16003[(11)]);
var inst_15934 = (state_16003[(8)]);
var inst_15986 = cljs.core.async.muxch_STAR_.call(null,inst_15984);
var state_16003__$1 = state_16003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16003__$1,(22),inst_15986,inst_15934);
} else {
if((state_val_16004 === (11))){
var inst_15958 = (state_16003[(10)]);
var inst_15944 = (state_16003[(15)]);
var inst_15958__$1 = cljs.core.seq.call(null,inst_15944);
var state_16003__$1 = (function (){var statearr_16027 = state_16003;
(statearr_16027[(10)] = inst_15958__$1);

return statearr_16027;
})();
if(inst_15958__$1){
var statearr_16028_16069 = state_16003__$1;
(statearr_16028_16069[(1)] = (13));

} else {
var statearr_16029_16070 = state_16003__$1;
(statearr_16029_16070[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (9))){
var inst_15980 = (state_16003[(2)]);
var state_16003__$1 = state_16003;
var statearr_16030_16071 = state_16003__$1;
(statearr_16030_16071[(2)] = inst_15980);

(statearr_16030_16071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (5))){
var inst_15941 = cljs.core.deref.call(null,mults);
var inst_15942 = cljs.core.vals.call(null,inst_15941);
var inst_15943 = cljs.core.seq.call(null,inst_15942);
var inst_15944 = inst_15943;
var inst_15945 = null;
var inst_15946 = (0);
var inst_15947 = (0);
var state_16003__$1 = (function (){var statearr_16031 = state_16003;
(statearr_16031[(13)] = inst_15947);

(statearr_16031[(14)] = inst_15945);

(statearr_16031[(15)] = inst_15944);

(statearr_16031[(16)] = inst_15946);

return statearr_16031;
})();
var statearr_16032_16072 = state_16003__$1;
(statearr_16032_16072[(2)] = null);

(statearr_16032_16072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (14))){
var state_16003__$1 = state_16003;
var statearr_16036_16073 = state_16003__$1;
(statearr_16036_16073[(2)] = null);

(statearr_16036_16073[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (16))){
var inst_15958 = (state_16003[(10)]);
var inst_15962 = cljs.core.chunk_first.call(null,inst_15958);
var inst_15963 = cljs.core.chunk_rest.call(null,inst_15958);
var inst_15964 = cljs.core.count.call(null,inst_15962);
var inst_15944 = inst_15963;
var inst_15945 = inst_15962;
var inst_15946 = inst_15964;
var inst_15947 = (0);
var state_16003__$1 = (function (){var statearr_16037 = state_16003;
(statearr_16037[(13)] = inst_15947);

(statearr_16037[(14)] = inst_15945);

(statearr_16037[(15)] = inst_15944);

(statearr_16037[(16)] = inst_15946);

return statearr_16037;
})();
var statearr_16038_16074 = state_16003__$1;
(statearr_16038_16074[(2)] = null);

(statearr_16038_16074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (10))){
var inst_15947 = (state_16003[(13)]);
var inst_15945 = (state_16003[(14)]);
var inst_15944 = (state_16003[(15)]);
var inst_15946 = (state_16003[(16)]);
var inst_15952 = cljs.core._nth.call(null,inst_15945,inst_15947);
var inst_15953 = cljs.core.async.muxch_STAR_.call(null,inst_15952);
var inst_15954 = cljs.core.async.close_BANG_.call(null,inst_15953);
var inst_15955 = (inst_15947 + (1));
var tmp16033 = inst_15945;
var tmp16034 = inst_15944;
var tmp16035 = inst_15946;
var inst_15944__$1 = tmp16034;
var inst_15945__$1 = tmp16033;
var inst_15946__$1 = tmp16035;
var inst_15947__$1 = inst_15955;
var state_16003__$1 = (function (){var statearr_16039 = state_16003;
(statearr_16039[(17)] = inst_15954);

(statearr_16039[(13)] = inst_15947__$1);

(statearr_16039[(14)] = inst_15945__$1);

(statearr_16039[(15)] = inst_15944__$1);

(statearr_16039[(16)] = inst_15946__$1);

return statearr_16039;
})();
var statearr_16040_16075 = state_16003__$1;
(statearr_16040_16075[(2)] = null);

(statearr_16040_16075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (18))){
var inst_15973 = (state_16003[(2)]);
var state_16003__$1 = state_16003;
var statearr_16041_16076 = state_16003__$1;
(statearr_16041_16076[(2)] = inst_15973);

(statearr_16041_16076[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16004 === (8))){
var inst_15947 = (state_16003[(13)]);
var inst_15946 = (state_16003[(16)]);
var inst_15949 = (inst_15947 < inst_15946);
var inst_15950 = inst_15949;
var state_16003__$1 = state_16003;
if(cljs.core.truth_(inst_15950)){
var statearr_16042_16077 = state_16003__$1;
(statearr_16042_16077[(1)] = (10));

} else {
var statearr_16043_16078 = state_16003__$1;
(statearr_16043_16078[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14795__auto___16050,mults,ensure_mult,p))
;
return ((function (switch__14721__auto__,c__14795__auto___16050,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__14722__auto__ = null;
var cljs$core$async$state_machine__14722__auto____0 = (function (){
var statearr_16044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16044[(0)] = cljs$core$async$state_machine__14722__auto__);

(statearr_16044[(1)] = (1));

return statearr_16044;
});
var cljs$core$async$state_machine__14722__auto____1 = (function (state_16003){
while(true){
var ret_value__14723__auto__ = (function (){try{while(true){
var result__14724__auto__ = switch__14721__auto__.call(null,state_16003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14724__auto__;
}
break;
}
}catch (e16045){var ex__14725__auto__ = e16045;
var statearr_16046_16079 = state_16003;
(statearr_16046_16079[(2)] = ex__14725__auto__);


if(cljs.core.seq.call(null,(state_16003[(4)]))){
var statearr_16047_16080 = state_16003;
(statearr_16047_16080[(1)] = cljs.core.first.call(null,(state_16003[(4)])));

} else {
throw ex__14725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16081 = state_16003;
state_16003 = G__16081;
continue;
} else {
return ret_value__14723__auto__;
}
break;
}
});
cljs$core$async$state_machine__14722__auto__ = function(state_16003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14722__auto____1.call(this,state_16003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14722__auto____0;
cljs$core$async$state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14722__auto____1;
return cljs$core$async$state_machine__14722__auto__;
})()
;})(switch__14721__auto__,c__14795__auto___16050,mults,ensure_mult,p))
})();
var state__14797__auto__ = (function (){var statearr_16048 = f__14796__auto__.call(null);
(statearr_16048[(6)] = c__14795__auto___16050);

return statearr_16048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14797__auto__);
});})(c__14795__auto___16050,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16083 = arguments.length;
switch (G__16083) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16086 = arguments.length;
switch (G__16086) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16089 = arguments.length;
switch (G__16089) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__14795__auto___16167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14795__auto___16167,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14796__auto__ = (function (){var switch__14721__auto__ = ((function (c__14795__auto___16167,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16132){
var state_val_16133 = (state_16132[(1)]);
if((state_val_16133 === (7))){
var state_16132__$1 = state_16132;
var statearr_16134_16168 = state_16132__$1;
(statearr_16134_16168[(2)] = null);

(statearr_16134_16168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16133 === (1))){
var state_16132__$1 = state_16132;
var statearr_16135_16169 = state_16132__$1;
(statearr_16135_16169[(2)] = null);

(statearr_16135_16169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16133 === (4))){
var inst_16092 = (state_16132[(7)]);
var inst_16093 = (state_16132[(8)]);
var inst_16095 = (inst_16093 < inst_16092);
var state_16132__$1 = state_16132;
if(cljs.core.truth_(inst_16095)){
var statearr_16136_16170 = state_16132__$1;
(statearr_16136_16170[(1)] = (6));

} else {
var statearr_16137_16171 = state_16132__$1;
(statearr_16137_16171[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16133 === (15))){
var inst_16118 = (state_16132[(9)]);
var inst_16123 = cljs.core.apply.call(null,f,inst_16118);
var state_16132__$1 = state_16132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16132__$1,(17),out,inst_16123);
} else {
if((state_val_16133 === (13))){
var inst_16118 = (state_16132[(9)]);
var inst_16118__$1 = (state_16132[(2)]);
var inst_16119 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16118__$1);
var state_16132__$1 = (function (){var statearr_16138 = state_16132;
(statearr_16138[(9)] = inst_16118__$1);

return statearr_16138;
})();
if(cljs.core.truth_(inst_16119)){
var statearr_16139_16172 = state_16132__$1;
(statearr_16139_16172[(1)] = (14));

} else {
var statearr_16140_16173 = state_16132__$1;
(statearr_16140_16173[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16133 === (6))){
var state_16132__$1 = state_16132;
var statearr_16141_16174 = state_16132__$1;
(statearr_16141_16174[(2)] = null);

(statearr_16141_16174[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16133 === (17))){
var inst_16125 = (state_16132[(2)]);
var state_16132__$1 = (function (){var statearr_16143 = state_16132;
(statearr_16143[(10)] = inst_16125);

return statearr_16143;
})();
var statearr_16144_16175 = state_16132__$1;
(statearr_16144_16175[(2)] = null);

(statearr_16144_16175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16133 === (3))){
var inst_16130 = (state_16132[(2)]);
var state_16132__$1 = state_16132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16132__$1,inst_16130);
} else {
if((state_val_16133 === (12))){
var _ = (function (){var statearr_16145 = state_16132;
(statearr_16145[(4)] = cljs.core.rest.call(null,(state_16132[(4)])));

return statearr_16145;
})();
var state_16132__$1 = state_16132;
var ex16142 = (state_16132__$1[(2)]);
var statearr_16146_16176 = state_16132__$1;
(statearr_16146_16176[(5)] = ex16142);


if((ex16142 instanceof Object)){
var statearr_16147_16177 = state_16132__$1;
(statearr_16147_16177[(1)] = (11));

(statearr_16147_16177[(5)] = null);

} else {
throw ex16142;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16133 === (2))){
var inst_16091 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_16092 = cnt;
var inst_16093 = (0);
var state_16132__$1 = (function (){var statearr_16148 = state_16132;
(statearr_16148[(7)] = inst_16092);

(statearr_16148[(8)] = inst_16093);

(statearr_16148[(11)] = inst_16091);

return statearr_16148;
})();
var statearr_16149_16178 = state_16132__$1;
(statearr_16149_16178[(2)] = null);

(statearr_16149_16178[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16133 === (11))){
var inst_16097 = (state_16132[(2)]);
var inst_16098 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_16132__$1 = (function (){var statearr_16150 = state_16132;
(statearr_16150[(12)] = inst_16097);

return statearr_16150;
})();
var statearr_16151_16179 = state_16132__$1;
(statearr_16151_16179[(2)] = inst_16098);

(statearr_16151_16179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16133 === (9))){
var inst_16093 = (state_16132[(8)]);
var _ = (function (){var statearr_16152 = state_16132;
(statearr_16152[(4)] = cljs.core.cons.call(null,(12),(state_16132[(4)])));

return statearr_16152;
})();
var inst_16104 = chs__$1.call(null,inst_16093);
var inst_16105 = done.call(null,inst_16093);
var inst_16106 = cljs.core.async.take_BANG_.call(null,inst_16104,inst_16105);
var ___$1 = (function (){var statearr_16153 = state_16132;
(statearr_16153[(4)] = cljs.core.rest.call(null,(state_16132[(4)])));

return statearr_16153;
})();
var state_16132__$1 = state_16132;
var statearr_16154_16180 = state_16132__$1;
(statearr_16154_16180[(2)] = inst_16106);

(statearr_16154_16180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16133 === (5))){
var inst_16116 = (state_16132[(2)]);
var state_16132__$1 = (function (){var statearr_16155 = state_16132;
(statearr_16155[(13)] = inst_16116);

return statearr_16155;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16132__$1,(13),dchan);
} else {
if((state_val_16133 === (14))){
var inst_16121 = cljs.core.async.close_BANG_.call(null,out);
var state_16132__$1 = state_16132;
var statearr_16156_16181 = state_16132__$1;
(statearr_16156_16181[(2)] = inst_16121);

(statearr_16156_16181[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16133 === (16))){
var inst_16128 = (state_16132[(2)]);
var state_16132__$1 = state_16132;
var statearr_16157_16182 = state_16132__$1;
(statearr_16157_16182[(2)] = inst_16128);

(statearr_16157_16182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16133 === (10))){
var inst_16093 = (state_16132[(8)]);
var inst_16109 = (state_16132[(2)]);
var inst_16110 = (inst_16093 + (1));
var inst_16093__$1 = inst_16110;
var state_16132__$1 = (function (){var statearr_16158 = state_16132;
(statearr_16158[(8)] = inst_16093__$1);

(statearr_16158[(14)] = inst_16109);

return statearr_16158;
})();
var statearr_16159_16183 = state_16132__$1;
(statearr_16159_16183[(2)] = null);

(statearr_16159_16183[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16133 === (8))){
var inst_16114 = (state_16132[(2)]);
var state_16132__$1 = state_16132;
var statearr_16160_16184 = state_16132__$1;
(statearr_16160_16184[(2)] = inst_16114);

(statearr_16160_16184[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14795__auto___16167,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14721__auto__,c__14795__auto___16167,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__14722__auto__ = null;
var cljs$core$async$state_machine__14722__auto____0 = (function (){
var statearr_16161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16161[(0)] = cljs$core$async$state_machine__14722__auto__);

(statearr_16161[(1)] = (1));

return statearr_16161;
});
var cljs$core$async$state_machine__14722__auto____1 = (function (state_16132){
while(true){
var ret_value__14723__auto__ = (function (){try{while(true){
var result__14724__auto__ = switch__14721__auto__.call(null,state_16132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14724__auto__;
}
break;
}
}catch (e16162){var ex__14725__auto__ = e16162;
var statearr_16163_16185 = state_16132;
(statearr_16163_16185[(2)] = ex__14725__auto__);


if(cljs.core.seq.call(null,(state_16132[(4)]))){
var statearr_16164_16186 = state_16132;
(statearr_16164_16186[(1)] = cljs.core.first.call(null,(state_16132[(4)])));

} else {
throw ex__14725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16187 = state_16132;
state_16132 = G__16187;
continue;
} else {
return ret_value__14723__auto__;
}
break;
}
});
cljs$core$async$state_machine__14722__auto__ = function(state_16132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14722__auto____1.call(this,state_16132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14722__auto____0;
cljs$core$async$state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14722__auto____1;
return cljs$core$async$state_machine__14722__auto__;
})()
;})(switch__14721__auto__,c__14795__auto___16167,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14797__auto__ = (function (){var statearr_16165 = f__14796__auto__.call(null);
(statearr_16165[(6)] = c__14795__auto___16167);

return statearr_16165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14797__auto__);
});})(c__14795__auto___16167,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16190 = arguments.length;
switch (G__16190) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14795__auto___16245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14795__auto___16245,out){
return (function (){
var f__14796__auto__ = (function (){var switch__14721__auto__ = ((function (c__14795__auto___16245,out){
return (function (state_16222){
var state_val_16223 = (state_16222[(1)]);
if((state_val_16223 === (7))){
var inst_16201 = (state_16222[(7)]);
var inst_16202 = (state_16222[(8)]);
var inst_16201__$1 = (state_16222[(2)]);
var inst_16202__$1 = cljs.core.nth.call(null,inst_16201__$1,(0),null);
var inst_16203 = cljs.core.nth.call(null,inst_16201__$1,(1),null);
var inst_16204 = (inst_16202__$1 == null);
var state_16222__$1 = (function (){var statearr_16224 = state_16222;
(statearr_16224[(7)] = inst_16201__$1);

(statearr_16224[(9)] = inst_16203);

(statearr_16224[(8)] = inst_16202__$1);

return statearr_16224;
})();
if(cljs.core.truth_(inst_16204)){
var statearr_16225_16246 = state_16222__$1;
(statearr_16225_16246[(1)] = (8));

} else {
var statearr_16226_16247 = state_16222__$1;
(statearr_16226_16247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (1))){
var inst_16191 = cljs.core.vec.call(null,chs);
var inst_16192 = inst_16191;
var state_16222__$1 = (function (){var statearr_16227 = state_16222;
(statearr_16227[(10)] = inst_16192);

return statearr_16227;
})();
var statearr_16228_16248 = state_16222__$1;
(statearr_16228_16248[(2)] = null);

(statearr_16228_16248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (4))){
var inst_16192 = (state_16222[(10)]);
var state_16222__$1 = state_16222;
return cljs.core.async.ioc_alts_BANG_.call(null,state_16222__$1,(7),inst_16192);
} else {
if((state_val_16223 === (6))){
var inst_16218 = (state_16222[(2)]);
var state_16222__$1 = state_16222;
var statearr_16229_16249 = state_16222__$1;
(statearr_16229_16249[(2)] = inst_16218);

(statearr_16229_16249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (3))){
var inst_16220 = (state_16222[(2)]);
var state_16222__$1 = state_16222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16222__$1,inst_16220);
} else {
if((state_val_16223 === (2))){
var inst_16192 = (state_16222[(10)]);
var inst_16194 = cljs.core.count.call(null,inst_16192);
var inst_16195 = (inst_16194 > (0));
var state_16222__$1 = state_16222;
if(cljs.core.truth_(inst_16195)){
var statearr_16231_16250 = state_16222__$1;
(statearr_16231_16250[(1)] = (4));

} else {
var statearr_16232_16251 = state_16222__$1;
(statearr_16232_16251[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (11))){
var inst_16192 = (state_16222[(10)]);
var inst_16211 = (state_16222[(2)]);
var tmp16230 = inst_16192;
var inst_16192__$1 = tmp16230;
var state_16222__$1 = (function (){var statearr_16233 = state_16222;
(statearr_16233[(11)] = inst_16211);

(statearr_16233[(10)] = inst_16192__$1);

return statearr_16233;
})();
var statearr_16234_16252 = state_16222__$1;
(statearr_16234_16252[(2)] = null);

(statearr_16234_16252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (9))){
var inst_16202 = (state_16222[(8)]);
var state_16222__$1 = state_16222;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16222__$1,(11),out,inst_16202);
} else {
if((state_val_16223 === (5))){
var inst_16216 = cljs.core.async.close_BANG_.call(null,out);
var state_16222__$1 = state_16222;
var statearr_16235_16253 = state_16222__$1;
(statearr_16235_16253[(2)] = inst_16216);

(statearr_16235_16253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (10))){
var inst_16214 = (state_16222[(2)]);
var state_16222__$1 = state_16222;
var statearr_16236_16254 = state_16222__$1;
(statearr_16236_16254[(2)] = inst_16214);

(statearr_16236_16254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16223 === (8))){
var inst_16192 = (state_16222[(10)]);
var inst_16201 = (state_16222[(7)]);
var inst_16203 = (state_16222[(9)]);
var inst_16202 = (state_16222[(8)]);
var inst_16206 = (function (){var cs = inst_16192;
var vec__16197 = inst_16201;
var v = inst_16202;
var c = inst_16203;
return ((function (cs,vec__16197,v,c,inst_16192,inst_16201,inst_16203,inst_16202,state_val_16223,c__14795__auto___16245,out){
return (function (p1__16188_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__16188_SHARP_);
});
;})(cs,vec__16197,v,c,inst_16192,inst_16201,inst_16203,inst_16202,state_val_16223,c__14795__auto___16245,out))
})();
var inst_16207 = cljs.core.filterv.call(null,inst_16206,inst_16192);
var inst_16192__$1 = inst_16207;
var state_16222__$1 = (function (){var statearr_16237 = state_16222;
(statearr_16237[(10)] = inst_16192__$1);

return statearr_16237;
})();
var statearr_16238_16255 = state_16222__$1;
(statearr_16238_16255[(2)] = null);

(statearr_16238_16255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14795__auto___16245,out))
;
return ((function (switch__14721__auto__,c__14795__auto___16245,out){
return (function() {
var cljs$core$async$state_machine__14722__auto__ = null;
var cljs$core$async$state_machine__14722__auto____0 = (function (){
var statearr_16239 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16239[(0)] = cljs$core$async$state_machine__14722__auto__);

(statearr_16239[(1)] = (1));

return statearr_16239;
});
var cljs$core$async$state_machine__14722__auto____1 = (function (state_16222){
while(true){
var ret_value__14723__auto__ = (function (){try{while(true){
var result__14724__auto__ = switch__14721__auto__.call(null,state_16222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14724__auto__;
}
break;
}
}catch (e16240){var ex__14725__auto__ = e16240;
var statearr_16241_16256 = state_16222;
(statearr_16241_16256[(2)] = ex__14725__auto__);


if(cljs.core.seq.call(null,(state_16222[(4)]))){
var statearr_16242_16257 = state_16222;
(statearr_16242_16257[(1)] = cljs.core.first.call(null,(state_16222[(4)])));

} else {
throw ex__14725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16258 = state_16222;
state_16222 = G__16258;
continue;
} else {
return ret_value__14723__auto__;
}
break;
}
});
cljs$core$async$state_machine__14722__auto__ = function(state_16222){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14722__auto____1.call(this,state_16222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14722__auto____0;
cljs$core$async$state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14722__auto____1;
return cljs$core$async$state_machine__14722__auto__;
})()
;})(switch__14721__auto__,c__14795__auto___16245,out))
})();
var state__14797__auto__ = (function (){var statearr_16243 = f__14796__auto__.call(null);
(statearr_16243[(6)] = c__14795__auto___16245);

return statearr_16243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14797__auto__);
});})(c__14795__auto___16245,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16260 = arguments.length;
switch (G__16260) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14795__auto___16306 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14795__auto___16306,out){
return (function (){
var f__14796__auto__ = (function (){var switch__14721__auto__ = ((function (c__14795__auto___16306,out){
return (function (state_16284){
var state_val_16285 = (state_16284[(1)]);
if((state_val_16285 === (7))){
var inst_16266 = (state_16284[(7)]);
var inst_16266__$1 = (state_16284[(2)]);
var inst_16267 = (inst_16266__$1 == null);
var inst_16268 = cljs.core.not.call(null,inst_16267);
var state_16284__$1 = (function (){var statearr_16286 = state_16284;
(statearr_16286[(7)] = inst_16266__$1);

return statearr_16286;
})();
if(inst_16268){
var statearr_16287_16307 = state_16284__$1;
(statearr_16287_16307[(1)] = (8));

} else {
var statearr_16288_16308 = state_16284__$1;
(statearr_16288_16308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16285 === (1))){
var inst_16261 = (0);
var state_16284__$1 = (function (){var statearr_16289 = state_16284;
(statearr_16289[(8)] = inst_16261);

return statearr_16289;
})();
var statearr_16290_16309 = state_16284__$1;
(statearr_16290_16309[(2)] = null);

(statearr_16290_16309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16285 === (4))){
var state_16284__$1 = state_16284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16284__$1,(7),ch);
} else {
if((state_val_16285 === (6))){
var inst_16279 = (state_16284[(2)]);
var state_16284__$1 = state_16284;
var statearr_16291_16310 = state_16284__$1;
(statearr_16291_16310[(2)] = inst_16279);

(statearr_16291_16310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16285 === (3))){
var inst_16281 = (state_16284[(2)]);
var inst_16282 = cljs.core.async.close_BANG_.call(null,out);
var state_16284__$1 = (function (){var statearr_16292 = state_16284;
(statearr_16292[(9)] = inst_16281);

return statearr_16292;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16284__$1,inst_16282);
} else {
if((state_val_16285 === (2))){
var inst_16261 = (state_16284[(8)]);
var inst_16263 = (inst_16261 < n);
var state_16284__$1 = state_16284;
if(cljs.core.truth_(inst_16263)){
var statearr_16293_16311 = state_16284__$1;
(statearr_16293_16311[(1)] = (4));

} else {
var statearr_16294_16312 = state_16284__$1;
(statearr_16294_16312[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16285 === (11))){
var inst_16261 = (state_16284[(8)]);
var inst_16271 = (state_16284[(2)]);
var inst_16272 = (inst_16261 + (1));
var inst_16261__$1 = inst_16272;
var state_16284__$1 = (function (){var statearr_16295 = state_16284;
(statearr_16295[(8)] = inst_16261__$1);

(statearr_16295[(10)] = inst_16271);

return statearr_16295;
})();
var statearr_16296_16313 = state_16284__$1;
(statearr_16296_16313[(2)] = null);

(statearr_16296_16313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16285 === (9))){
var state_16284__$1 = state_16284;
var statearr_16297_16314 = state_16284__$1;
(statearr_16297_16314[(2)] = null);

(statearr_16297_16314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16285 === (5))){
var state_16284__$1 = state_16284;
var statearr_16298_16315 = state_16284__$1;
(statearr_16298_16315[(2)] = null);

(statearr_16298_16315[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16285 === (10))){
var inst_16276 = (state_16284[(2)]);
var state_16284__$1 = state_16284;
var statearr_16299_16316 = state_16284__$1;
(statearr_16299_16316[(2)] = inst_16276);

(statearr_16299_16316[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16285 === (8))){
var inst_16266 = (state_16284[(7)]);
var state_16284__$1 = state_16284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16284__$1,(11),out,inst_16266);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14795__auto___16306,out))
;
return ((function (switch__14721__auto__,c__14795__auto___16306,out){
return (function() {
var cljs$core$async$state_machine__14722__auto__ = null;
var cljs$core$async$state_machine__14722__auto____0 = (function (){
var statearr_16300 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16300[(0)] = cljs$core$async$state_machine__14722__auto__);

(statearr_16300[(1)] = (1));

return statearr_16300;
});
var cljs$core$async$state_machine__14722__auto____1 = (function (state_16284){
while(true){
var ret_value__14723__auto__ = (function (){try{while(true){
var result__14724__auto__ = switch__14721__auto__.call(null,state_16284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14724__auto__;
}
break;
}
}catch (e16301){var ex__14725__auto__ = e16301;
var statearr_16302_16317 = state_16284;
(statearr_16302_16317[(2)] = ex__14725__auto__);


if(cljs.core.seq.call(null,(state_16284[(4)]))){
var statearr_16303_16318 = state_16284;
(statearr_16303_16318[(1)] = cljs.core.first.call(null,(state_16284[(4)])));

} else {
throw ex__14725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16319 = state_16284;
state_16284 = G__16319;
continue;
} else {
return ret_value__14723__auto__;
}
break;
}
});
cljs$core$async$state_machine__14722__auto__ = function(state_16284){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14722__auto____1.call(this,state_16284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14722__auto____0;
cljs$core$async$state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14722__auto____1;
return cljs$core$async$state_machine__14722__auto__;
})()
;})(switch__14721__auto__,c__14795__auto___16306,out))
})();
var state__14797__auto__ = (function (){var statearr_16304 = f__14796__auto__.call(null);
(statearr_16304[(6)] = c__14795__auto___16306);

return statearr_16304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14797__auto__);
});})(c__14795__auto___16306,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16321 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16321 = (function (f,ch,meta16322){
this.f = f;
this.ch = ch;
this.meta16322 = meta16322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16323,meta16322__$1){
var self__ = this;
var _16323__$1 = this;
return (new cljs.core.async.t_cljs$core$async16321(self__.f,self__.ch,meta16322__$1));
});

cljs.core.async.t_cljs$core$async16321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16323){
var self__ = this;
var _16323__$1 = this;
return self__.meta16322;
});

cljs.core.async.t_cljs$core$async16321.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16321.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16321.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16321.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16321.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16324 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16324 = (function (f,ch,meta16322,_,fn1,meta16325){
this.f = f;
this.ch = ch;
this.meta16322 = meta16322;
this._ = _;
this.fn1 = fn1;
this.meta16325 = meta16325;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16326,meta16325__$1){
var self__ = this;
var _16326__$1 = this;
return (new cljs.core.async.t_cljs$core$async16324(self__.f,self__.ch,self__.meta16322,self__._,self__.fn1,meta16325__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16324.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16326){
var self__ = this;
var _16326__$1 = this;
return self__.meta16325;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16324.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16324.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16324.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16324.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16320_SHARP_){
return f1.call(null,(((p1__16320_SHARP_ == null))?null:self__.f.call(null,p1__16320_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16324.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16322","meta16322",178820799,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16321","cljs.core.async/t_cljs$core$async16321",1549597677,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16325","meta16325",-547240939,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16324.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16324.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16324";

cljs.core.async.t_cljs$core$async16324.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async16324");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16324.
 */
cljs.core.async.__GT_t_cljs$core$async16324 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16324(f__$1,ch__$1,meta16322__$1,___$2,fn1__$1,meta16325){
return (new cljs.core.async.t_cljs$core$async16324(f__$1,ch__$1,meta16322__$1,___$2,fn1__$1,meta16325));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16324(self__.f,self__.ch,self__.meta16322,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async16321.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16321.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16321.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16322","meta16322",178820799,null)], null);
});

cljs.core.async.t_cljs$core$async16321.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16321.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16321";

cljs.core.async.t_cljs$core$async16321.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async16321");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16321.
 */
cljs.core.async.__GT_t_cljs$core$async16321 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16321(f__$1,ch__$1,meta16322){
return (new cljs.core.async.t_cljs$core$async16321(f__$1,ch__$1,meta16322));
});

}

return (new cljs.core.async.t_cljs$core$async16321(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16327 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16327 = (function (f,ch,meta16328){
this.f = f;
this.ch = ch;
this.meta16328 = meta16328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16329,meta16328__$1){
var self__ = this;
var _16329__$1 = this;
return (new cljs.core.async.t_cljs$core$async16327(self__.f,self__.ch,meta16328__$1));
});

cljs.core.async.t_cljs$core$async16327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16329){
var self__ = this;
var _16329__$1 = this;
return self__.meta16328;
});

cljs.core.async.t_cljs$core$async16327.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16327.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16327.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16327.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16327.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16327.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async16327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16328","meta16328",-1576303426,null)], null);
});

cljs.core.async.t_cljs$core$async16327.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16327";

cljs.core.async.t_cljs$core$async16327.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async16327");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16327.
 */
cljs.core.async.__GT_t_cljs$core$async16327 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16327(f__$1,ch__$1,meta16328){
return (new cljs.core.async.t_cljs$core$async16327(f__$1,ch__$1,meta16328));
});

}

return (new cljs.core.async.t_cljs$core$async16327(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16330 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16330 = (function (p,ch,meta16331){
this.p = p;
this.ch = ch;
this.meta16331 = meta16331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16332,meta16331__$1){
var self__ = this;
var _16332__$1 = this;
return (new cljs.core.async.t_cljs$core$async16330(self__.p,self__.ch,meta16331__$1));
});

cljs.core.async.t_cljs$core$async16330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16332){
var self__ = this;
var _16332__$1 = this;
return self__.meta16331;
});

cljs.core.async.t_cljs$core$async16330.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16330.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16330.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16330.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16330.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16330.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16330.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16331","meta16331",-395462540,null)], null);
});

cljs.core.async.t_cljs$core$async16330.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16330";

cljs.core.async.t_cljs$core$async16330.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async16330");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16330.
 */
cljs.core.async.__GT_t_cljs$core$async16330 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16330(p__$1,ch__$1,meta16331){
return (new cljs.core.async.t_cljs$core$async16330(p__$1,ch__$1,meta16331));
});

}

return (new cljs.core.async.t_cljs$core$async16330(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16334 = arguments.length;
switch (G__16334) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14795__auto___16375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14795__auto___16375,out){
return (function (){
var f__14796__auto__ = (function (){var switch__14721__auto__ = ((function (c__14795__auto___16375,out){
return (function (state_16355){
var state_val_16356 = (state_16355[(1)]);
if((state_val_16356 === (7))){
var inst_16351 = (state_16355[(2)]);
var state_16355__$1 = state_16355;
var statearr_16357_16376 = state_16355__$1;
(statearr_16357_16376[(2)] = inst_16351);

(statearr_16357_16376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16356 === (1))){
var state_16355__$1 = state_16355;
var statearr_16358_16377 = state_16355__$1;
(statearr_16358_16377[(2)] = null);

(statearr_16358_16377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16356 === (4))){
var inst_16337 = (state_16355[(7)]);
var inst_16337__$1 = (state_16355[(2)]);
var inst_16338 = (inst_16337__$1 == null);
var state_16355__$1 = (function (){var statearr_16359 = state_16355;
(statearr_16359[(7)] = inst_16337__$1);

return statearr_16359;
})();
if(cljs.core.truth_(inst_16338)){
var statearr_16360_16378 = state_16355__$1;
(statearr_16360_16378[(1)] = (5));

} else {
var statearr_16361_16379 = state_16355__$1;
(statearr_16361_16379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16356 === (6))){
var inst_16337 = (state_16355[(7)]);
var inst_16342 = p.call(null,inst_16337);
var state_16355__$1 = state_16355;
if(cljs.core.truth_(inst_16342)){
var statearr_16362_16380 = state_16355__$1;
(statearr_16362_16380[(1)] = (8));

} else {
var statearr_16363_16381 = state_16355__$1;
(statearr_16363_16381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16356 === (3))){
var inst_16353 = (state_16355[(2)]);
var state_16355__$1 = state_16355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16355__$1,inst_16353);
} else {
if((state_val_16356 === (2))){
var state_16355__$1 = state_16355;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16355__$1,(4),ch);
} else {
if((state_val_16356 === (11))){
var inst_16345 = (state_16355[(2)]);
var state_16355__$1 = state_16355;
var statearr_16364_16382 = state_16355__$1;
(statearr_16364_16382[(2)] = inst_16345);

(statearr_16364_16382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16356 === (9))){
var state_16355__$1 = state_16355;
var statearr_16365_16383 = state_16355__$1;
(statearr_16365_16383[(2)] = null);

(statearr_16365_16383[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16356 === (5))){
var inst_16340 = cljs.core.async.close_BANG_.call(null,out);
var state_16355__$1 = state_16355;
var statearr_16366_16384 = state_16355__$1;
(statearr_16366_16384[(2)] = inst_16340);

(statearr_16366_16384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16356 === (10))){
var inst_16348 = (state_16355[(2)]);
var state_16355__$1 = (function (){var statearr_16367 = state_16355;
(statearr_16367[(8)] = inst_16348);

return statearr_16367;
})();
var statearr_16368_16385 = state_16355__$1;
(statearr_16368_16385[(2)] = null);

(statearr_16368_16385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16356 === (8))){
var inst_16337 = (state_16355[(7)]);
var state_16355__$1 = state_16355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16355__$1,(11),out,inst_16337);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14795__auto___16375,out))
;
return ((function (switch__14721__auto__,c__14795__auto___16375,out){
return (function() {
var cljs$core$async$state_machine__14722__auto__ = null;
var cljs$core$async$state_machine__14722__auto____0 = (function (){
var statearr_16369 = [null,null,null,null,null,null,null,null,null];
(statearr_16369[(0)] = cljs$core$async$state_machine__14722__auto__);

(statearr_16369[(1)] = (1));

return statearr_16369;
});
var cljs$core$async$state_machine__14722__auto____1 = (function (state_16355){
while(true){
var ret_value__14723__auto__ = (function (){try{while(true){
var result__14724__auto__ = switch__14721__auto__.call(null,state_16355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14724__auto__;
}
break;
}
}catch (e16370){var ex__14725__auto__ = e16370;
var statearr_16371_16386 = state_16355;
(statearr_16371_16386[(2)] = ex__14725__auto__);


if(cljs.core.seq.call(null,(state_16355[(4)]))){
var statearr_16372_16387 = state_16355;
(statearr_16372_16387[(1)] = cljs.core.first.call(null,(state_16355[(4)])));

} else {
throw ex__14725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16388 = state_16355;
state_16355 = G__16388;
continue;
} else {
return ret_value__14723__auto__;
}
break;
}
});
cljs$core$async$state_machine__14722__auto__ = function(state_16355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14722__auto____1.call(this,state_16355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14722__auto____0;
cljs$core$async$state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14722__auto____1;
return cljs$core$async$state_machine__14722__auto__;
})()
;})(switch__14721__auto__,c__14795__auto___16375,out))
})();
var state__14797__auto__ = (function (){var statearr_16373 = f__14796__auto__.call(null);
(statearr_16373[(6)] = c__14795__auto___16375);

return statearr_16373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14797__auto__);
});})(c__14795__auto___16375,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16390 = arguments.length;
switch (G__16390) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14795__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14795__auto__){
return (function (){
var f__14796__auto__ = (function (){var switch__14721__auto__ = ((function (c__14795__auto__){
return (function (state_16453){
var state_val_16454 = (state_16453[(1)]);
if((state_val_16454 === (7))){
var inst_16449 = (state_16453[(2)]);
var state_16453__$1 = state_16453;
var statearr_16455_16494 = state_16453__$1;
(statearr_16455_16494[(2)] = inst_16449);

(statearr_16455_16494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16454 === (20))){
var inst_16419 = (state_16453[(7)]);
var inst_16430 = (state_16453[(2)]);
var inst_16431 = cljs.core.next.call(null,inst_16419);
var inst_16405 = inst_16431;
var inst_16406 = null;
var inst_16407 = (0);
var inst_16408 = (0);
var state_16453__$1 = (function (){var statearr_16456 = state_16453;
(statearr_16456[(8)] = inst_16430);

(statearr_16456[(9)] = inst_16408);

(statearr_16456[(10)] = inst_16406);

(statearr_16456[(11)] = inst_16407);

(statearr_16456[(12)] = inst_16405);

return statearr_16456;
})();
var statearr_16457_16495 = state_16453__$1;
(statearr_16457_16495[(2)] = null);

(statearr_16457_16495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16454 === (1))){
var state_16453__$1 = state_16453;
var statearr_16458_16496 = state_16453__$1;
(statearr_16458_16496[(2)] = null);

(statearr_16458_16496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16454 === (4))){
var inst_16394 = (state_16453[(13)]);
var inst_16394__$1 = (state_16453[(2)]);
var inst_16395 = (inst_16394__$1 == null);
var state_16453__$1 = (function (){var statearr_16459 = state_16453;
(statearr_16459[(13)] = inst_16394__$1);

return statearr_16459;
})();
if(cljs.core.truth_(inst_16395)){
var statearr_16460_16497 = state_16453__$1;
(statearr_16460_16497[(1)] = (5));

} else {
var statearr_16461_16498 = state_16453__$1;
(statearr_16461_16498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16454 === (15))){
var state_16453__$1 = state_16453;
var statearr_16465_16499 = state_16453__$1;
(statearr_16465_16499[(2)] = null);

(statearr_16465_16499[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16454 === (21))){
var state_16453__$1 = state_16453;
var statearr_16466_16500 = state_16453__$1;
(statearr_16466_16500[(2)] = null);

(statearr_16466_16500[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16454 === (13))){
var inst_16408 = (state_16453[(9)]);
var inst_16406 = (state_16453[(10)]);
var inst_16407 = (state_16453[(11)]);
var inst_16405 = (state_16453[(12)]);
var inst_16415 = (state_16453[(2)]);
var inst_16416 = (inst_16408 + (1));
var tmp16462 = inst_16406;
var tmp16463 = inst_16407;
var tmp16464 = inst_16405;
var inst_16405__$1 = tmp16464;
var inst_16406__$1 = tmp16462;
var inst_16407__$1 = tmp16463;
var inst_16408__$1 = inst_16416;
var state_16453__$1 = (function (){var statearr_16467 = state_16453;
(statearr_16467[(9)] = inst_16408__$1);

(statearr_16467[(14)] = inst_16415);

(statearr_16467[(10)] = inst_16406__$1);

(statearr_16467[(11)] = inst_16407__$1);

(statearr_16467[(12)] = inst_16405__$1);

return statearr_16467;
})();
var statearr_16468_16501 = state_16453__$1;
(statearr_16468_16501[(2)] = null);

(statearr_16468_16501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16454 === (22))){
var state_16453__$1 = state_16453;
var statearr_16469_16502 = state_16453__$1;
(statearr_16469_16502[(2)] = null);

(statearr_16469_16502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16454 === (6))){
var inst_16394 = (state_16453[(13)]);
var inst_16403 = f.call(null,inst_16394);
var inst_16404 = cljs.core.seq.call(null,inst_16403);
var inst_16405 = inst_16404;
var inst_16406 = null;
var inst_16407 = (0);
var inst_16408 = (0);
var state_16453__$1 = (function (){var statearr_16470 = state_16453;
(statearr_16470[(9)] = inst_16408);

(statearr_16470[(10)] = inst_16406);

(statearr_16470[(11)] = inst_16407);

(statearr_16470[(12)] = inst_16405);

return statearr_16470;
})();
var statearr_16471_16503 = state_16453__$1;
(statearr_16471_16503[(2)] = null);

(statearr_16471_16503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16454 === (17))){
var inst_16419 = (state_16453[(7)]);
var inst_16423 = cljs.core.chunk_first.call(null,inst_16419);
var inst_16424 = cljs.core.chunk_rest.call(null,inst_16419);
var inst_16425 = cljs.core.count.call(null,inst_16423);
var inst_16405 = inst_16424;
var inst_16406 = inst_16423;
var inst_16407 = inst_16425;
var inst_16408 = (0);
var state_16453__$1 = (function (){var statearr_16472 = state_16453;
(statearr_16472[(9)] = inst_16408);

(statearr_16472[(10)] = inst_16406);

(statearr_16472[(11)] = inst_16407);

(statearr_16472[(12)] = inst_16405);

return statearr_16472;
})();
var statearr_16473_16504 = state_16453__$1;
(statearr_16473_16504[(2)] = null);

(statearr_16473_16504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16454 === (3))){
var inst_16451 = (state_16453[(2)]);
var state_16453__$1 = state_16453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16453__$1,inst_16451);
} else {
if((state_val_16454 === (12))){
var inst_16439 = (state_16453[(2)]);
var state_16453__$1 = state_16453;
var statearr_16474_16505 = state_16453__$1;
(statearr_16474_16505[(2)] = inst_16439);

(statearr_16474_16505[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16454 === (2))){
var state_16453__$1 = state_16453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16453__$1,(4),in$);
} else {
if((state_val_16454 === (23))){
var inst_16447 = (state_16453[(2)]);
var state_16453__$1 = state_16453;
var statearr_16475_16506 = state_16453__$1;
(statearr_16475_16506[(2)] = inst_16447);

(statearr_16475_16506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16454 === (19))){
var inst_16434 = (state_16453[(2)]);
var state_16453__$1 = state_16453;
var statearr_16476_16507 = state_16453__$1;
(statearr_16476_16507[(2)] = inst_16434);

(statearr_16476_16507[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16454 === (11))){
var inst_16405 = (state_16453[(12)]);
var inst_16419 = (state_16453[(7)]);
var inst_16419__$1 = cljs.core.seq.call(null,inst_16405);
var state_16453__$1 = (function (){var statearr_16477 = state_16453;
(statearr_16477[(7)] = inst_16419__$1);

return statearr_16477;
})();
if(inst_16419__$1){
var statearr_16478_16508 = state_16453__$1;
(statearr_16478_16508[(1)] = (14));

} else {
var statearr_16479_16509 = state_16453__$1;
(statearr_16479_16509[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16454 === (9))){
var inst_16441 = (state_16453[(2)]);
var inst_16442 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_16453__$1 = (function (){var statearr_16480 = state_16453;
(statearr_16480[(15)] = inst_16441);

return statearr_16480;
})();
if(cljs.core.truth_(inst_16442)){
var statearr_16481_16510 = state_16453__$1;
(statearr_16481_16510[(1)] = (21));

} else {
var statearr_16482_16511 = state_16453__$1;
(statearr_16482_16511[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16454 === (5))){
var inst_16397 = cljs.core.async.close_BANG_.call(null,out);
var state_16453__$1 = state_16453;
var statearr_16483_16512 = state_16453__$1;
(statearr_16483_16512[(2)] = inst_16397);

(statearr_16483_16512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16454 === (14))){
var inst_16419 = (state_16453[(7)]);
var inst_16421 = cljs.core.chunked_seq_QMARK_.call(null,inst_16419);
var state_16453__$1 = state_16453;
if(inst_16421){
var statearr_16484_16513 = state_16453__$1;
(statearr_16484_16513[(1)] = (17));

} else {
var statearr_16485_16514 = state_16453__$1;
(statearr_16485_16514[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16454 === (16))){
var inst_16437 = (state_16453[(2)]);
var state_16453__$1 = state_16453;
var statearr_16486_16515 = state_16453__$1;
(statearr_16486_16515[(2)] = inst_16437);

(statearr_16486_16515[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16454 === (10))){
var inst_16408 = (state_16453[(9)]);
var inst_16406 = (state_16453[(10)]);
var inst_16413 = cljs.core._nth.call(null,inst_16406,inst_16408);
var state_16453__$1 = state_16453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16453__$1,(13),out,inst_16413);
} else {
if((state_val_16454 === (18))){
var inst_16419 = (state_16453[(7)]);
var inst_16428 = cljs.core.first.call(null,inst_16419);
var state_16453__$1 = state_16453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16453__$1,(20),out,inst_16428);
} else {
if((state_val_16454 === (8))){
var inst_16408 = (state_16453[(9)]);
var inst_16407 = (state_16453[(11)]);
var inst_16410 = (inst_16408 < inst_16407);
var inst_16411 = inst_16410;
var state_16453__$1 = state_16453;
if(cljs.core.truth_(inst_16411)){
var statearr_16487_16516 = state_16453__$1;
(statearr_16487_16516[(1)] = (10));

} else {
var statearr_16488_16517 = state_16453__$1;
(statearr_16488_16517[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14795__auto__))
;
return ((function (switch__14721__auto__,c__14795__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14722__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14722__auto____0 = (function (){
var statearr_16489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16489[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14722__auto__);

(statearr_16489[(1)] = (1));

return statearr_16489;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14722__auto____1 = (function (state_16453){
while(true){
var ret_value__14723__auto__ = (function (){try{while(true){
var result__14724__auto__ = switch__14721__auto__.call(null,state_16453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14724__auto__;
}
break;
}
}catch (e16490){var ex__14725__auto__ = e16490;
var statearr_16491_16518 = state_16453;
(statearr_16491_16518[(2)] = ex__14725__auto__);


if(cljs.core.seq.call(null,(state_16453[(4)]))){
var statearr_16492_16519 = state_16453;
(statearr_16492_16519[(1)] = cljs.core.first.call(null,(state_16453[(4)])));

} else {
throw ex__14725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16520 = state_16453;
state_16453 = G__16520;
continue;
} else {
return ret_value__14723__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14722__auto__ = function(state_16453){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14722__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14722__auto____1.call(this,state_16453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14722__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14722__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14722__auto__;
})()
;})(switch__14721__auto__,c__14795__auto__))
})();
var state__14797__auto__ = (function (){var statearr_16493 = f__14796__auto__.call(null);
(statearr_16493[(6)] = c__14795__auto__);

return statearr_16493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14797__auto__);
});})(c__14795__auto__))
);

return c__14795__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16522 = arguments.length;
switch (G__16522) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16525 = arguments.length;
switch (G__16525) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16528 = arguments.length;
switch (G__16528) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14795__auto___16576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14795__auto___16576,out){
return (function (){
var f__14796__auto__ = (function (){var switch__14721__auto__ = ((function (c__14795__auto___16576,out){
return (function (state_16552){
var state_val_16553 = (state_16552[(1)]);
if((state_val_16553 === (7))){
var inst_16547 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
var statearr_16554_16577 = state_16552__$1;
(statearr_16554_16577[(2)] = inst_16547);

(statearr_16554_16577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16553 === (1))){
var inst_16529 = null;
var state_16552__$1 = (function (){var statearr_16555 = state_16552;
(statearr_16555[(7)] = inst_16529);

return statearr_16555;
})();
var statearr_16556_16578 = state_16552__$1;
(statearr_16556_16578[(2)] = null);

(statearr_16556_16578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16553 === (4))){
var inst_16532 = (state_16552[(8)]);
var inst_16532__$1 = (state_16552[(2)]);
var inst_16533 = (inst_16532__$1 == null);
var inst_16534 = cljs.core.not.call(null,inst_16533);
var state_16552__$1 = (function (){var statearr_16557 = state_16552;
(statearr_16557[(8)] = inst_16532__$1);

return statearr_16557;
})();
if(inst_16534){
var statearr_16558_16579 = state_16552__$1;
(statearr_16558_16579[(1)] = (5));

} else {
var statearr_16559_16580 = state_16552__$1;
(statearr_16559_16580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16553 === (6))){
var state_16552__$1 = state_16552;
var statearr_16560_16581 = state_16552__$1;
(statearr_16560_16581[(2)] = null);

(statearr_16560_16581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16553 === (3))){
var inst_16549 = (state_16552[(2)]);
var inst_16550 = cljs.core.async.close_BANG_.call(null,out);
var state_16552__$1 = (function (){var statearr_16561 = state_16552;
(statearr_16561[(9)] = inst_16549);

return statearr_16561;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16552__$1,inst_16550);
} else {
if((state_val_16553 === (2))){
var state_16552__$1 = state_16552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16552__$1,(4),ch);
} else {
if((state_val_16553 === (11))){
var inst_16532 = (state_16552[(8)]);
var inst_16541 = (state_16552[(2)]);
var inst_16529 = inst_16532;
var state_16552__$1 = (function (){var statearr_16562 = state_16552;
(statearr_16562[(7)] = inst_16529);

(statearr_16562[(10)] = inst_16541);

return statearr_16562;
})();
var statearr_16563_16582 = state_16552__$1;
(statearr_16563_16582[(2)] = null);

(statearr_16563_16582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16553 === (9))){
var inst_16532 = (state_16552[(8)]);
var state_16552__$1 = state_16552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16552__$1,(11),out,inst_16532);
} else {
if((state_val_16553 === (5))){
var inst_16529 = (state_16552[(7)]);
var inst_16532 = (state_16552[(8)]);
var inst_16536 = cljs.core._EQ_.call(null,inst_16532,inst_16529);
var state_16552__$1 = state_16552;
if(inst_16536){
var statearr_16565_16583 = state_16552__$1;
(statearr_16565_16583[(1)] = (8));

} else {
var statearr_16566_16584 = state_16552__$1;
(statearr_16566_16584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16553 === (10))){
var inst_16544 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
var statearr_16567_16585 = state_16552__$1;
(statearr_16567_16585[(2)] = inst_16544);

(statearr_16567_16585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16553 === (8))){
var inst_16529 = (state_16552[(7)]);
var tmp16564 = inst_16529;
var inst_16529__$1 = tmp16564;
var state_16552__$1 = (function (){var statearr_16568 = state_16552;
(statearr_16568[(7)] = inst_16529__$1);

return statearr_16568;
})();
var statearr_16569_16586 = state_16552__$1;
(statearr_16569_16586[(2)] = null);

(statearr_16569_16586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14795__auto___16576,out))
;
return ((function (switch__14721__auto__,c__14795__auto___16576,out){
return (function() {
var cljs$core$async$state_machine__14722__auto__ = null;
var cljs$core$async$state_machine__14722__auto____0 = (function (){
var statearr_16570 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16570[(0)] = cljs$core$async$state_machine__14722__auto__);

(statearr_16570[(1)] = (1));

return statearr_16570;
});
var cljs$core$async$state_machine__14722__auto____1 = (function (state_16552){
while(true){
var ret_value__14723__auto__ = (function (){try{while(true){
var result__14724__auto__ = switch__14721__auto__.call(null,state_16552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14724__auto__;
}
break;
}
}catch (e16571){var ex__14725__auto__ = e16571;
var statearr_16572_16587 = state_16552;
(statearr_16572_16587[(2)] = ex__14725__auto__);


if(cljs.core.seq.call(null,(state_16552[(4)]))){
var statearr_16573_16588 = state_16552;
(statearr_16573_16588[(1)] = cljs.core.first.call(null,(state_16552[(4)])));

} else {
throw ex__14725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16589 = state_16552;
state_16552 = G__16589;
continue;
} else {
return ret_value__14723__auto__;
}
break;
}
});
cljs$core$async$state_machine__14722__auto__ = function(state_16552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14722__auto____1.call(this,state_16552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14722__auto____0;
cljs$core$async$state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14722__auto____1;
return cljs$core$async$state_machine__14722__auto__;
})()
;})(switch__14721__auto__,c__14795__auto___16576,out))
})();
var state__14797__auto__ = (function (){var statearr_16574 = f__14796__auto__.call(null);
(statearr_16574[(6)] = c__14795__auto___16576);

return statearr_16574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14797__auto__);
});})(c__14795__auto___16576,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16591 = arguments.length;
switch (G__16591) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14795__auto___16658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14795__auto___16658,out){
return (function (){
var f__14796__auto__ = (function (){var switch__14721__auto__ = ((function (c__14795__auto___16658,out){
return (function (state_16629){
var state_val_16630 = (state_16629[(1)]);
if((state_val_16630 === (7))){
var inst_16625 = (state_16629[(2)]);
var state_16629__$1 = state_16629;
var statearr_16631_16659 = state_16629__$1;
(statearr_16631_16659[(2)] = inst_16625);

(statearr_16631_16659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16630 === (1))){
var inst_16592 = (new Array(n));
var inst_16593 = inst_16592;
var inst_16594 = (0);
var state_16629__$1 = (function (){var statearr_16632 = state_16629;
(statearr_16632[(7)] = inst_16593);

(statearr_16632[(8)] = inst_16594);

return statearr_16632;
})();
var statearr_16633_16660 = state_16629__$1;
(statearr_16633_16660[(2)] = null);

(statearr_16633_16660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16630 === (4))){
var inst_16597 = (state_16629[(9)]);
var inst_16597__$1 = (state_16629[(2)]);
var inst_16598 = (inst_16597__$1 == null);
var inst_16599 = cljs.core.not.call(null,inst_16598);
var state_16629__$1 = (function (){var statearr_16634 = state_16629;
(statearr_16634[(9)] = inst_16597__$1);

return statearr_16634;
})();
if(inst_16599){
var statearr_16635_16661 = state_16629__$1;
(statearr_16635_16661[(1)] = (5));

} else {
var statearr_16636_16662 = state_16629__$1;
(statearr_16636_16662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16630 === (15))){
var inst_16619 = (state_16629[(2)]);
var state_16629__$1 = state_16629;
var statearr_16637_16663 = state_16629__$1;
(statearr_16637_16663[(2)] = inst_16619);

(statearr_16637_16663[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16630 === (13))){
var state_16629__$1 = state_16629;
var statearr_16638_16664 = state_16629__$1;
(statearr_16638_16664[(2)] = null);

(statearr_16638_16664[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16630 === (6))){
var inst_16594 = (state_16629[(8)]);
var inst_16615 = (inst_16594 > (0));
var state_16629__$1 = state_16629;
if(cljs.core.truth_(inst_16615)){
var statearr_16639_16665 = state_16629__$1;
(statearr_16639_16665[(1)] = (12));

} else {
var statearr_16640_16666 = state_16629__$1;
(statearr_16640_16666[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16630 === (3))){
var inst_16627 = (state_16629[(2)]);
var state_16629__$1 = state_16629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16629__$1,inst_16627);
} else {
if((state_val_16630 === (12))){
var inst_16593 = (state_16629[(7)]);
var inst_16617 = cljs.core.vec.call(null,inst_16593);
var state_16629__$1 = state_16629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16629__$1,(15),out,inst_16617);
} else {
if((state_val_16630 === (2))){
var state_16629__$1 = state_16629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16629__$1,(4),ch);
} else {
if((state_val_16630 === (11))){
var inst_16609 = (state_16629[(2)]);
var inst_16610 = (new Array(n));
var inst_16593 = inst_16610;
var inst_16594 = (0);
var state_16629__$1 = (function (){var statearr_16641 = state_16629;
(statearr_16641[(7)] = inst_16593);

(statearr_16641[(10)] = inst_16609);

(statearr_16641[(8)] = inst_16594);

return statearr_16641;
})();
var statearr_16642_16667 = state_16629__$1;
(statearr_16642_16667[(2)] = null);

(statearr_16642_16667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16630 === (9))){
var inst_16593 = (state_16629[(7)]);
var inst_16607 = cljs.core.vec.call(null,inst_16593);
var state_16629__$1 = state_16629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16629__$1,(11),out,inst_16607);
} else {
if((state_val_16630 === (5))){
var inst_16593 = (state_16629[(7)]);
var inst_16594 = (state_16629[(8)]);
var inst_16597 = (state_16629[(9)]);
var inst_16602 = (state_16629[(11)]);
var inst_16601 = (inst_16593[inst_16594] = inst_16597);
var inst_16602__$1 = (inst_16594 + (1));
var inst_16603 = (inst_16602__$1 < n);
var state_16629__$1 = (function (){var statearr_16643 = state_16629;
(statearr_16643[(12)] = inst_16601);

(statearr_16643[(11)] = inst_16602__$1);

return statearr_16643;
})();
if(cljs.core.truth_(inst_16603)){
var statearr_16644_16668 = state_16629__$1;
(statearr_16644_16668[(1)] = (8));

} else {
var statearr_16645_16669 = state_16629__$1;
(statearr_16645_16669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16630 === (14))){
var inst_16622 = (state_16629[(2)]);
var inst_16623 = cljs.core.async.close_BANG_.call(null,out);
var state_16629__$1 = (function (){var statearr_16647 = state_16629;
(statearr_16647[(13)] = inst_16622);

return statearr_16647;
})();
var statearr_16648_16670 = state_16629__$1;
(statearr_16648_16670[(2)] = inst_16623);

(statearr_16648_16670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16630 === (10))){
var inst_16613 = (state_16629[(2)]);
var state_16629__$1 = state_16629;
var statearr_16649_16671 = state_16629__$1;
(statearr_16649_16671[(2)] = inst_16613);

(statearr_16649_16671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16630 === (8))){
var inst_16593 = (state_16629[(7)]);
var inst_16602 = (state_16629[(11)]);
var tmp16646 = inst_16593;
var inst_16593__$1 = tmp16646;
var inst_16594 = inst_16602;
var state_16629__$1 = (function (){var statearr_16650 = state_16629;
(statearr_16650[(7)] = inst_16593__$1);

(statearr_16650[(8)] = inst_16594);

return statearr_16650;
})();
var statearr_16651_16672 = state_16629__$1;
(statearr_16651_16672[(2)] = null);

(statearr_16651_16672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14795__auto___16658,out))
;
return ((function (switch__14721__auto__,c__14795__auto___16658,out){
return (function() {
var cljs$core$async$state_machine__14722__auto__ = null;
var cljs$core$async$state_machine__14722__auto____0 = (function (){
var statearr_16652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16652[(0)] = cljs$core$async$state_machine__14722__auto__);

(statearr_16652[(1)] = (1));

return statearr_16652;
});
var cljs$core$async$state_machine__14722__auto____1 = (function (state_16629){
while(true){
var ret_value__14723__auto__ = (function (){try{while(true){
var result__14724__auto__ = switch__14721__auto__.call(null,state_16629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14724__auto__;
}
break;
}
}catch (e16653){var ex__14725__auto__ = e16653;
var statearr_16654_16673 = state_16629;
(statearr_16654_16673[(2)] = ex__14725__auto__);


if(cljs.core.seq.call(null,(state_16629[(4)]))){
var statearr_16655_16674 = state_16629;
(statearr_16655_16674[(1)] = cljs.core.first.call(null,(state_16629[(4)])));

} else {
throw ex__14725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16675 = state_16629;
state_16629 = G__16675;
continue;
} else {
return ret_value__14723__auto__;
}
break;
}
});
cljs$core$async$state_machine__14722__auto__ = function(state_16629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14722__auto____1.call(this,state_16629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14722__auto____0;
cljs$core$async$state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14722__auto____1;
return cljs$core$async$state_machine__14722__auto__;
})()
;})(switch__14721__auto__,c__14795__auto___16658,out))
})();
var state__14797__auto__ = (function (){var statearr_16656 = f__14796__auto__.call(null);
(statearr_16656[(6)] = c__14795__auto___16658);

return statearr_16656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14797__auto__);
});})(c__14795__auto___16658,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16677 = arguments.length;
switch (G__16677) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14795__auto___16748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14795__auto___16748,out){
return (function (){
var f__14796__auto__ = (function (){var switch__14721__auto__ = ((function (c__14795__auto___16748,out){
return (function (state_16719){
var state_val_16720 = (state_16719[(1)]);
if((state_val_16720 === (7))){
var inst_16715 = (state_16719[(2)]);
var state_16719__$1 = state_16719;
var statearr_16721_16749 = state_16719__$1;
(statearr_16721_16749[(2)] = inst_16715);

(statearr_16721_16749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16720 === (1))){
var inst_16678 = [];
var inst_16679 = inst_16678;
var inst_16680 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16719__$1 = (function (){var statearr_16722 = state_16719;
(statearr_16722[(7)] = inst_16680);

(statearr_16722[(8)] = inst_16679);

return statearr_16722;
})();
var statearr_16723_16750 = state_16719__$1;
(statearr_16723_16750[(2)] = null);

(statearr_16723_16750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16720 === (4))){
var inst_16683 = (state_16719[(9)]);
var inst_16683__$1 = (state_16719[(2)]);
var inst_16684 = (inst_16683__$1 == null);
var inst_16685 = cljs.core.not.call(null,inst_16684);
var state_16719__$1 = (function (){var statearr_16724 = state_16719;
(statearr_16724[(9)] = inst_16683__$1);

return statearr_16724;
})();
if(inst_16685){
var statearr_16725_16751 = state_16719__$1;
(statearr_16725_16751[(1)] = (5));

} else {
var statearr_16726_16752 = state_16719__$1;
(statearr_16726_16752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16720 === (15))){
var inst_16709 = (state_16719[(2)]);
var state_16719__$1 = state_16719;
var statearr_16727_16753 = state_16719__$1;
(statearr_16727_16753[(2)] = inst_16709);

(statearr_16727_16753[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16720 === (13))){
var state_16719__$1 = state_16719;
var statearr_16728_16754 = state_16719__$1;
(statearr_16728_16754[(2)] = null);

(statearr_16728_16754[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16720 === (6))){
var inst_16679 = (state_16719[(8)]);
var inst_16704 = inst_16679.length;
var inst_16705 = (inst_16704 > (0));
var state_16719__$1 = state_16719;
if(cljs.core.truth_(inst_16705)){
var statearr_16729_16755 = state_16719__$1;
(statearr_16729_16755[(1)] = (12));

} else {
var statearr_16730_16756 = state_16719__$1;
(statearr_16730_16756[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16720 === (3))){
var inst_16717 = (state_16719[(2)]);
var state_16719__$1 = state_16719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16719__$1,inst_16717);
} else {
if((state_val_16720 === (12))){
var inst_16679 = (state_16719[(8)]);
var inst_16707 = cljs.core.vec.call(null,inst_16679);
var state_16719__$1 = state_16719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16719__$1,(15),out,inst_16707);
} else {
if((state_val_16720 === (2))){
var state_16719__$1 = state_16719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16719__$1,(4),ch);
} else {
if((state_val_16720 === (11))){
var inst_16687 = (state_16719[(10)]);
var inst_16683 = (state_16719[(9)]);
var inst_16697 = (state_16719[(2)]);
var inst_16698 = [];
var inst_16699 = inst_16698.push(inst_16683);
var inst_16679 = inst_16698;
var inst_16680 = inst_16687;
var state_16719__$1 = (function (){var statearr_16731 = state_16719;
(statearr_16731[(11)] = inst_16697);

(statearr_16731[(7)] = inst_16680);

(statearr_16731[(8)] = inst_16679);

(statearr_16731[(12)] = inst_16699);

return statearr_16731;
})();
var statearr_16732_16757 = state_16719__$1;
(statearr_16732_16757[(2)] = null);

(statearr_16732_16757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16720 === (9))){
var inst_16679 = (state_16719[(8)]);
var inst_16695 = cljs.core.vec.call(null,inst_16679);
var state_16719__$1 = state_16719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16719__$1,(11),out,inst_16695);
} else {
if((state_val_16720 === (5))){
var inst_16680 = (state_16719[(7)]);
var inst_16687 = (state_16719[(10)]);
var inst_16683 = (state_16719[(9)]);
var inst_16687__$1 = f.call(null,inst_16683);
var inst_16688 = cljs.core._EQ_.call(null,inst_16687__$1,inst_16680);
var inst_16689 = cljs.core.keyword_identical_QMARK_.call(null,inst_16680,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_16690 = ((inst_16688) || (inst_16689));
var state_16719__$1 = (function (){var statearr_16733 = state_16719;
(statearr_16733[(10)] = inst_16687__$1);

return statearr_16733;
})();
if(cljs.core.truth_(inst_16690)){
var statearr_16734_16758 = state_16719__$1;
(statearr_16734_16758[(1)] = (8));

} else {
var statearr_16735_16759 = state_16719__$1;
(statearr_16735_16759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16720 === (14))){
var inst_16712 = (state_16719[(2)]);
var inst_16713 = cljs.core.async.close_BANG_.call(null,out);
var state_16719__$1 = (function (){var statearr_16737 = state_16719;
(statearr_16737[(13)] = inst_16712);

return statearr_16737;
})();
var statearr_16738_16760 = state_16719__$1;
(statearr_16738_16760[(2)] = inst_16713);

(statearr_16738_16760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16720 === (10))){
var inst_16702 = (state_16719[(2)]);
var state_16719__$1 = state_16719;
var statearr_16739_16761 = state_16719__$1;
(statearr_16739_16761[(2)] = inst_16702);

(statearr_16739_16761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16720 === (8))){
var inst_16687 = (state_16719[(10)]);
var inst_16679 = (state_16719[(8)]);
var inst_16683 = (state_16719[(9)]);
var inst_16692 = inst_16679.push(inst_16683);
var tmp16736 = inst_16679;
var inst_16679__$1 = tmp16736;
var inst_16680 = inst_16687;
var state_16719__$1 = (function (){var statearr_16740 = state_16719;
(statearr_16740[(7)] = inst_16680);

(statearr_16740[(14)] = inst_16692);

(statearr_16740[(8)] = inst_16679__$1);

return statearr_16740;
})();
var statearr_16741_16762 = state_16719__$1;
(statearr_16741_16762[(2)] = null);

(statearr_16741_16762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14795__auto___16748,out))
;
return ((function (switch__14721__auto__,c__14795__auto___16748,out){
return (function() {
var cljs$core$async$state_machine__14722__auto__ = null;
var cljs$core$async$state_machine__14722__auto____0 = (function (){
var statearr_16742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16742[(0)] = cljs$core$async$state_machine__14722__auto__);

(statearr_16742[(1)] = (1));

return statearr_16742;
});
var cljs$core$async$state_machine__14722__auto____1 = (function (state_16719){
while(true){
var ret_value__14723__auto__ = (function (){try{while(true){
var result__14724__auto__ = switch__14721__auto__.call(null,state_16719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14724__auto__;
}
break;
}
}catch (e16743){var ex__14725__auto__ = e16743;
var statearr_16744_16763 = state_16719;
(statearr_16744_16763[(2)] = ex__14725__auto__);


if(cljs.core.seq.call(null,(state_16719[(4)]))){
var statearr_16745_16764 = state_16719;
(statearr_16745_16764[(1)] = cljs.core.first.call(null,(state_16719[(4)])));

} else {
throw ex__14725__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16765 = state_16719;
state_16719 = G__16765;
continue;
} else {
return ret_value__14723__auto__;
}
break;
}
});
cljs$core$async$state_machine__14722__auto__ = function(state_16719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14722__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14722__auto____1.call(this,state_16719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14722__auto____0;
cljs$core$async$state_machine__14722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14722__auto____1;
return cljs$core$async$state_machine__14722__auto__;
})()
;})(switch__14721__auto__,c__14795__auto___16748,out))
})();
var state__14797__auto__ = (function (){var statearr_16746 = f__14796__auto__.call(null);
(statearr_16746[(6)] = c__14795__auto___16748);

return statearr_16746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14797__auto__);
});})(c__14795__auto___16748,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
