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
var G__20048 = arguments.length;
switch (G__20048) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20049 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20049 = (function (f,blockable,meta20050){
this.f = f;
this.blockable = blockable;
this.meta20050 = meta20050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20051,meta20050__$1){
var self__ = this;
var _20051__$1 = this;
return (new cljs.core.async.t_cljs$core$async20049(self__.f,self__.blockable,meta20050__$1));
});

cljs.core.async.t_cljs$core$async20049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20051){
var self__ = this;
var _20051__$1 = this;
return self__.meta20050;
});

cljs.core.async.t_cljs$core$async20049.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20049.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20049.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20049.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20049.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20050","meta20050",-423129984,null)], null);
});

cljs.core.async.t_cljs$core$async20049.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20049.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20049";

cljs.core.async.t_cljs$core$async20049.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async20049");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20049.
 */
cljs.core.async.__GT_t_cljs$core$async20049 = (function cljs$core$async$__GT_t_cljs$core$async20049(f__$1,blockable__$1,meta20050){
return (new cljs.core.async.t_cljs$core$async20049(f__$1,blockable__$1,meta20050));
});

}

return (new cljs.core.async.t_cljs$core$async20049(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__20055 = arguments.length;
switch (G__20055) {
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
var G__20058 = arguments.length;
switch (G__20058) {
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
var G__20061 = arguments.length;
switch (G__20061) {
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
var val_20063 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20063);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20063,ret){
return (function (){
return fn1.call(null,val_20063);
});})(val_20063,ret))
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
var G__20065 = arguments.length;
switch (G__20065) {
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
var n__4408__auto___20067 = n;
var x_20068 = (0);
while(true){
if((x_20068 < n__4408__auto___20067)){
(a[x_20068] = x_20068);

var G__20069 = (x_20068 + (1));
x_20068 = G__20069;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20070 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20070 = (function (flag,meta20071){
this.flag = flag;
this.meta20071 = meta20071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20072,meta20071__$1){
var self__ = this;
var _20072__$1 = this;
return (new cljs.core.async.t_cljs$core$async20070(self__.flag,meta20071__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20070.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20072){
var self__ = this;
var _20072__$1 = this;
return self__.meta20071;
});})(flag))
;

cljs.core.async.t_cljs$core$async20070.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20070.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20070.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20070.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20070.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20071","meta20071",-480090238,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20070.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20070";

cljs.core.async.t_cljs$core$async20070.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async20070");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20070.
 */
cljs.core.async.__GT_t_cljs$core$async20070 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20070(flag__$1,meta20071){
return (new cljs.core.async.t_cljs$core$async20070(flag__$1,meta20071));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20070(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20073 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20073 = (function (flag,cb,meta20074){
this.flag = flag;
this.cb = cb;
this.meta20074 = meta20074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20075,meta20074__$1){
var self__ = this;
var _20075__$1 = this;
return (new cljs.core.async.t_cljs$core$async20073(self__.flag,self__.cb,meta20074__$1));
});

cljs.core.async.t_cljs$core$async20073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20075){
var self__ = this;
var _20075__$1 = this;
return self__.meta20074;
});

cljs.core.async.t_cljs$core$async20073.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20073.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20073.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20073.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20074","meta20074",-1798614013,null)], null);
});

cljs.core.async.t_cljs$core$async20073.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20073.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20073";

cljs.core.async.t_cljs$core$async20073.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async20073");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20073.
 */
cljs.core.async.__GT_t_cljs$core$async20073 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20073(flag__$1,cb__$1,meta20074){
return (new cljs.core.async.t_cljs$core$async20073(flag__$1,cb__$1,meta20074));
});

}

return (new cljs.core.async.t_cljs$core$async20073(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__20076_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20076_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20077_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20077_SHARP_,port], null));
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
var G__20078 = (i + (1));
i = G__20078;
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
var len__4531__auto___20084 = arguments.length;
var i__4532__auto___20085 = (0);
while(true){
if((i__4532__auto___20085 < len__4531__auto___20084)){
args__4534__auto__.push((arguments[i__4532__auto___20085]));

var G__20086 = (i__4532__auto___20085 + (1));
i__4532__auto___20085 = G__20086;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20081){
var map__20082 = p__20081;
var map__20082__$1 = ((((!((map__20082 == null)))?(((((map__20082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20082):map__20082);
var opts = map__20082__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20079){
var G__20080 = cljs.core.first.call(null,seq20079);
var seq20079__$1 = cljs.core.next.call(null,seq20079);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20080,seq20079__$1);
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
var G__20088 = arguments.length;
switch (G__20088) {
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
var c__18074__auto___20135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18074__auto___20135){
return (function (){
var f__18075__auto__ = (function (){var switch__17949__auto__ = ((function (c__18074__auto___20135){
return (function (state_20112){
var state_val_20113 = (state_20112[(1)]);
if((state_val_20113 === (7))){
var inst_20108 = (state_20112[(2)]);
var state_20112__$1 = state_20112;
var statearr_20114_20136 = state_20112__$1;
(statearr_20114_20136[(2)] = inst_20108);

(statearr_20114_20136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20113 === (1))){
var state_20112__$1 = state_20112;
var statearr_20115_20137 = state_20112__$1;
(statearr_20115_20137[(2)] = null);

(statearr_20115_20137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20113 === (4))){
var inst_20091 = (state_20112[(7)]);
var inst_20091__$1 = (state_20112[(2)]);
var inst_20092 = (inst_20091__$1 == null);
var state_20112__$1 = (function (){var statearr_20116 = state_20112;
(statearr_20116[(7)] = inst_20091__$1);

return statearr_20116;
})();
if(cljs.core.truth_(inst_20092)){
var statearr_20117_20138 = state_20112__$1;
(statearr_20117_20138[(1)] = (5));

} else {
var statearr_20118_20139 = state_20112__$1;
(statearr_20118_20139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20113 === (13))){
var state_20112__$1 = state_20112;
var statearr_20119_20140 = state_20112__$1;
(statearr_20119_20140[(2)] = null);

(statearr_20119_20140[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20113 === (6))){
var inst_20091 = (state_20112[(7)]);
var state_20112__$1 = state_20112;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20112__$1,(11),to,inst_20091);
} else {
if((state_val_20113 === (3))){
var inst_20110 = (state_20112[(2)]);
var state_20112__$1 = state_20112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20112__$1,inst_20110);
} else {
if((state_val_20113 === (12))){
var state_20112__$1 = state_20112;
var statearr_20120_20141 = state_20112__$1;
(statearr_20120_20141[(2)] = null);

(statearr_20120_20141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20113 === (2))){
var state_20112__$1 = state_20112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20112__$1,(4),from);
} else {
if((state_val_20113 === (11))){
var inst_20101 = (state_20112[(2)]);
var state_20112__$1 = state_20112;
if(cljs.core.truth_(inst_20101)){
var statearr_20121_20142 = state_20112__$1;
(statearr_20121_20142[(1)] = (12));

} else {
var statearr_20122_20143 = state_20112__$1;
(statearr_20122_20143[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20113 === (9))){
var state_20112__$1 = state_20112;
var statearr_20123_20144 = state_20112__$1;
(statearr_20123_20144[(2)] = null);

(statearr_20123_20144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20113 === (5))){
var state_20112__$1 = state_20112;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20124_20145 = state_20112__$1;
(statearr_20124_20145[(1)] = (8));

} else {
var statearr_20125_20146 = state_20112__$1;
(statearr_20125_20146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20113 === (14))){
var inst_20106 = (state_20112[(2)]);
var state_20112__$1 = state_20112;
var statearr_20126_20147 = state_20112__$1;
(statearr_20126_20147[(2)] = inst_20106);

(statearr_20126_20147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20113 === (10))){
var inst_20098 = (state_20112[(2)]);
var state_20112__$1 = state_20112;
var statearr_20127_20148 = state_20112__$1;
(statearr_20127_20148[(2)] = inst_20098);

(statearr_20127_20148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20113 === (8))){
var inst_20095 = cljs.core.async.close_BANG_.call(null,to);
var state_20112__$1 = state_20112;
var statearr_20128_20149 = state_20112__$1;
(statearr_20128_20149[(2)] = inst_20095);

(statearr_20128_20149[(1)] = (10));


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
});})(c__18074__auto___20135))
;
return ((function (switch__17949__auto__,c__18074__auto___20135){
return (function() {
var cljs$core$async$state_machine__17950__auto__ = null;
var cljs$core$async$state_machine__17950__auto____0 = (function (){
var statearr_20129 = [null,null,null,null,null,null,null,null];
(statearr_20129[(0)] = cljs$core$async$state_machine__17950__auto__);

(statearr_20129[(1)] = (1));

return statearr_20129;
});
var cljs$core$async$state_machine__17950__auto____1 = (function (state_20112){
while(true){
var ret_value__17951__auto__ = (function (){try{while(true){
var result__17952__auto__ = switch__17949__auto__.call(null,state_20112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17952__auto__;
}
break;
}
}catch (e20130){var ex__17953__auto__ = e20130;
var statearr_20131_20150 = state_20112;
(statearr_20131_20150[(2)] = ex__17953__auto__);


if(cljs.core.seq.call(null,(state_20112[(4)]))){
var statearr_20132_20151 = state_20112;
(statearr_20132_20151[(1)] = cljs.core.first.call(null,(state_20112[(4)])));

} else {
throw ex__17953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20152 = state_20112;
state_20112 = G__20152;
continue;
} else {
return ret_value__17951__auto__;
}
break;
}
});
cljs$core$async$state_machine__17950__auto__ = function(state_20112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17950__auto____1.call(this,state_20112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17950__auto____0;
cljs$core$async$state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17950__auto____1;
return cljs$core$async$state_machine__17950__auto__;
})()
;})(switch__17949__auto__,c__18074__auto___20135))
})();
var state__18076__auto__ = (function (){var statearr_20133 = f__18075__auto__.call(null);
(statearr_20133[(6)] = c__18074__auto___20135);

return statearr_20133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18076__auto__);
});})(c__18074__auto___20135))
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
return (function (p__20153){
var vec__20154 = p__20153;
var v = cljs.core.nth.call(null,vec__20154,(0),null);
var p = cljs.core.nth.call(null,vec__20154,(1),null);
var job = vec__20154;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18074__auto___20330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18074__auto___20330,res,vec__20154,v,p,job,jobs,results){
return (function (){
var f__18075__auto__ = (function (){var switch__17949__auto__ = ((function (c__18074__auto___20330,res,vec__20154,v,p,job,jobs,results){
return (function (state_20161){
var state_val_20162 = (state_20161[(1)]);
if((state_val_20162 === (1))){
var state_20161__$1 = state_20161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20161__$1,(2),res,v);
} else {
if((state_val_20162 === (2))){
var inst_20158 = (state_20161[(2)]);
var inst_20159 = cljs.core.async.close_BANG_.call(null,res);
var state_20161__$1 = (function (){var statearr_20163 = state_20161;
(statearr_20163[(7)] = inst_20158);

return statearr_20163;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20161__$1,inst_20159);
} else {
return null;
}
}
});})(c__18074__auto___20330,res,vec__20154,v,p,job,jobs,results))
;
return ((function (switch__17949__auto__,c__18074__auto___20330,res,vec__20154,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____0 = (function (){
var statearr_20164 = [null,null,null,null,null,null,null,null];
(statearr_20164[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__);

(statearr_20164[(1)] = (1));

return statearr_20164;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____1 = (function (state_20161){
while(true){
var ret_value__17951__auto__ = (function (){try{while(true){
var result__17952__auto__ = switch__17949__auto__.call(null,state_20161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17952__auto__;
}
break;
}
}catch (e20165){var ex__17953__auto__ = e20165;
var statearr_20166_20331 = state_20161;
(statearr_20166_20331[(2)] = ex__17953__auto__);


if(cljs.core.seq.call(null,(state_20161[(4)]))){
var statearr_20167_20332 = state_20161;
(statearr_20167_20332[(1)] = cljs.core.first.call(null,(state_20161[(4)])));

} else {
throw ex__17953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20333 = state_20161;
state_20161 = G__20333;
continue;
} else {
return ret_value__17951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__ = function(state_20161){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____1.call(this,state_20161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__;
})()
;})(switch__17949__auto__,c__18074__auto___20330,res,vec__20154,v,p,job,jobs,results))
})();
var state__18076__auto__ = (function (){var statearr_20168 = f__18075__auto__.call(null);
(statearr_20168[(6)] = c__18074__auto___20330);

return statearr_20168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18076__auto__);
});})(c__18074__auto___20330,res,vec__20154,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20169){
var vec__20170 = p__20169;
var v = cljs.core.nth.call(null,vec__20170,(0),null);
var p = cljs.core.nth.call(null,vec__20170,(1),null);
var job = vec__20170;
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
var n__4408__auto___20334 = n;
var __20335 = (0);
while(true){
if((__20335 < n__4408__auto___20334)){
var G__20173_20336 = type;
var G__20173_20337__$1 = (((G__20173_20336 instanceof cljs.core.Keyword))?G__20173_20336.fqn:null);
switch (G__20173_20337__$1) {
case "compute":
var c__18074__auto___20339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20335,c__18074__auto___20339,G__20173_20336,G__20173_20337__$1,n__4408__auto___20334,jobs,results,process,async){
return (function (){
var f__18075__auto__ = (function (){var switch__17949__auto__ = ((function (__20335,c__18074__auto___20339,G__20173_20336,G__20173_20337__$1,n__4408__auto___20334,jobs,results,process,async){
return (function (state_20186){
var state_val_20187 = (state_20186[(1)]);
if((state_val_20187 === (1))){
var state_20186__$1 = state_20186;
var statearr_20188_20340 = state_20186__$1;
(statearr_20188_20340[(2)] = null);

(statearr_20188_20340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20187 === (2))){
var state_20186__$1 = state_20186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20186__$1,(4),jobs);
} else {
if((state_val_20187 === (3))){
var inst_20184 = (state_20186[(2)]);
var state_20186__$1 = state_20186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20186__$1,inst_20184);
} else {
if((state_val_20187 === (4))){
var inst_20176 = (state_20186[(2)]);
var inst_20177 = process.call(null,inst_20176);
var state_20186__$1 = state_20186;
if(cljs.core.truth_(inst_20177)){
var statearr_20189_20341 = state_20186__$1;
(statearr_20189_20341[(1)] = (5));

} else {
var statearr_20190_20342 = state_20186__$1;
(statearr_20190_20342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20187 === (5))){
var state_20186__$1 = state_20186;
var statearr_20191_20343 = state_20186__$1;
(statearr_20191_20343[(2)] = null);

(statearr_20191_20343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20187 === (6))){
var state_20186__$1 = state_20186;
var statearr_20192_20344 = state_20186__$1;
(statearr_20192_20344[(2)] = null);

(statearr_20192_20344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20187 === (7))){
var inst_20182 = (state_20186[(2)]);
var state_20186__$1 = state_20186;
var statearr_20193_20345 = state_20186__$1;
(statearr_20193_20345[(2)] = inst_20182);

(statearr_20193_20345[(1)] = (3));


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
});})(__20335,c__18074__auto___20339,G__20173_20336,G__20173_20337__$1,n__4408__auto___20334,jobs,results,process,async))
;
return ((function (__20335,switch__17949__auto__,c__18074__auto___20339,G__20173_20336,G__20173_20337__$1,n__4408__auto___20334,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____0 = (function (){
var statearr_20194 = [null,null,null,null,null,null,null];
(statearr_20194[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__);

(statearr_20194[(1)] = (1));

return statearr_20194;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____1 = (function (state_20186){
while(true){
var ret_value__17951__auto__ = (function (){try{while(true){
var result__17952__auto__ = switch__17949__auto__.call(null,state_20186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17952__auto__;
}
break;
}
}catch (e20195){var ex__17953__auto__ = e20195;
var statearr_20196_20346 = state_20186;
(statearr_20196_20346[(2)] = ex__17953__auto__);


if(cljs.core.seq.call(null,(state_20186[(4)]))){
var statearr_20197_20347 = state_20186;
(statearr_20197_20347[(1)] = cljs.core.first.call(null,(state_20186[(4)])));

} else {
throw ex__17953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20348 = state_20186;
state_20186 = G__20348;
continue;
} else {
return ret_value__17951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__ = function(state_20186){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____1.call(this,state_20186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__;
})()
;})(__20335,switch__17949__auto__,c__18074__auto___20339,G__20173_20336,G__20173_20337__$1,n__4408__auto___20334,jobs,results,process,async))
})();
var state__18076__auto__ = (function (){var statearr_20198 = f__18075__auto__.call(null);
(statearr_20198[(6)] = c__18074__auto___20339);

return statearr_20198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18076__auto__);
});})(__20335,c__18074__auto___20339,G__20173_20336,G__20173_20337__$1,n__4408__auto___20334,jobs,results,process,async))
);


break;
case "async":
var c__18074__auto___20349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20335,c__18074__auto___20349,G__20173_20336,G__20173_20337__$1,n__4408__auto___20334,jobs,results,process,async){
return (function (){
var f__18075__auto__ = (function (){var switch__17949__auto__ = ((function (__20335,c__18074__auto___20349,G__20173_20336,G__20173_20337__$1,n__4408__auto___20334,jobs,results,process,async){
return (function (state_20211){
var state_val_20212 = (state_20211[(1)]);
if((state_val_20212 === (1))){
var state_20211__$1 = state_20211;
var statearr_20213_20350 = state_20211__$1;
(statearr_20213_20350[(2)] = null);

(statearr_20213_20350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20212 === (2))){
var state_20211__$1 = state_20211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20211__$1,(4),jobs);
} else {
if((state_val_20212 === (3))){
var inst_20209 = (state_20211[(2)]);
var state_20211__$1 = state_20211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20211__$1,inst_20209);
} else {
if((state_val_20212 === (4))){
var inst_20201 = (state_20211[(2)]);
var inst_20202 = async.call(null,inst_20201);
var state_20211__$1 = state_20211;
if(cljs.core.truth_(inst_20202)){
var statearr_20214_20351 = state_20211__$1;
(statearr_20214_20351[(1)] = (5));

} else {
var statearr_20215_20352 = state_20211__$1;
(statearr_20215_20352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20212 === (5))){
var state_20211__$1 = state_20211;
var statearr_20216_20353 = state_20211__$1;
(statearr_20216_20353[(2)] = null);

(statearr_20216_20353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20212 === (6))){
var state_20211__$1 = state_20211;
var statearr_20217_20354 = state_20211__$1;
(statearr_20217_20354[(2)] = null);

(statearr_20217_20354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20212 === (7))){
var inst_20207 = (state_20211[(2)]);
var state_20211__$1 = state_20211;
var statearr_20218_20355 = state_20211__$1;
(statearr_20218_20355[(2)] = inst_20207);

(statearr_20218_20355[(1)] = (3));


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
});})(__20335,c__18074__auto___20349,G__20173_20336,G__20173_20337__$1,n__4408__auto___20334,jobs,results,process,async))
;
return ((function (__20335,switch__17949__auto__,c__18074__auto___20349,G__20173_20336,G__20173_20337__$1,n__4408__auto___20334,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____0 = (function (){
var statearr_20219 = [null,null,null,null,null,null,null];
(statearr_20219[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__);

(statearr_20219[(1)] = (1));

return statearr_20219;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____1 = (function (state_20211){
while(true){
var ret_value__17951__auto__ = (function (){try{while(true){
var result__17952__auto__ = switch__17949__auto__.call(null,state_20211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17952__auto__;
}
break;
}
}catch (e20220){var ex__17953__auto__ = e20220;
var statearr_20221_20356 = state_20211;
(statearr_20221_20356[(2)] = ex__17953__auto__);


if(cljs.core.seq.call(null,(state_20211[(4)]))){
var statearr_20222_20357 = state_20211;
(statearr_20222_20357[(1)] = cljs.core.first.call(null,(state_20211[(4)])));

} else {
throw ex__17953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20358 = state_20211;
state_20211 = G__20358;
continue;
} else {
return ret_value__17951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__ = function(state_20211){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____1.call(this,state_20211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__;
})()
;})(__20335,switch__17949__auto__,c__18074__auto___20349,G__20173_20336,G__20173_20337__$1,n__4408__auto___20334,jobs,results,process,async))
})();
var state__18076__auto__ = (function (){var statearr_20223 = f__18075__auto__.call(null);
(statearr_20223[(6)] = c__18074__auto___20349);

return statearr_20223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18076__auto__);
});})(__20335,c__18074__auto___20349,G__20173_20336,G__20173_20337__$1,n__4408__auto___20334,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20173_20337__$1)].join('')));

}

var G__20359 = (__20335 + (1));
__20335 = G__20359;
continue;
} else {
}
break;
}

var c__18074__auto___20360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18074__auto___20360,jobs,results,process,async){
return (function (){
var f__18075__auto__ = (function (){var switch__17949__auto__ = ((function (c__18074__auto___20360,jobs,results,process,async){
return (function (state_20245){
var state_val_20246 = (state_20245[(1)]);
if((state_val_20246 === (1))){
var state_20245__$1 = state_20245;
var statearr_20247_20361 = state_20245__$1;
(statearr_20247_20361[(2)] = null);

(statearr_20247_20361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20246 === (2))){
var state_20245__$1 = state_20245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20245__$1,(4),from);
} else {
if((state_val_20246 === (3))){
var inst_20243 = (state_20245[(2)]);
var state_20245__$1 = state_20245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20245__$1,inst_20243);
} else {
if((state_val_20246 === (4))){
var inst_20226 = (state_20245[(7)]);
var inst_20226__$1 = (state_20245[(2)]);
var inst_20227 = (inst_20226__$1 == null);
var state_20245__$1 = (function (){var statearr_20248 = state_20245;
(statearr_20248[(7)] = inst_20226__$1);

return statearr_20248;
})();
if(cljs.core.truth_(inst_20227)){
var statearr_20249_20362 = state_20245__$1;
(statearr_20249_20362[(1)] = (5));

} else {
var statearr_20250_20363 = state_20245__$1;
(statearr_20250_20363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20246 === (5))){
var inst_20229 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20245__$1 = state_20245;
var statearr_20251_20364 = state_20245__$1;
(statearr_20251_20364[(2)] = inst_20229);

(statearr_20251_20364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20246 === (6))){
var inst_20231 = (state_20245[(8)]);
var inst_20226 = (state_20245[(7)]);
var inst_20231__$1 = cljs.core.async.chan.call(null,(1));
var inst_20232 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20233 = [inst_20226,inst_20231__$1];
var inst_20234 = (new cljs.core.PersistentVector(null,2,(5),inst_20232,inst_20233,null));
var state_20245__$1 = (function (){var statearr_20252 = state_20245;
(statearr_20252[(8)] = inst_20231__$1);

return statearr_20252;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20245__$1,(8),jobs,inst_20234);
} else {
if((state_val_20246 === (7))){
var inst_20241 = (state_20245[(2)]);
var state_20245__$1 = state_20245;
var statearr_20253_20365 = state_20245__$1;
(statearr_20253_20365[(2)] = inst_20241);

(statearr_20253_20365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20246 === (8))){
var inst_20231 = (state_20245[(8)]);
var inst_20236 = (state_20245[(2)]);
var state_20245__$1 = (function (){var statearr_20254 = state_20245;
(statearr_20254[(9)] = inst_20236);

return statearr_20254;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20245__$1,(9),results,inst_20231);
} else {
if((state_val_20246 === (9))){
var inst_20238 = (state_20245[(2)]);
var state_20245__$1 = (function (){var statearr_20255 = state_20245;
(statearr_20255[(10)] = inst_20238);

return statearr_20255;
})();
var statearr_20256_20366 = state_20245__$1;
(statearr_20256_20366[(2)] = null);

(statearr_20256_20366[(1)] = (2));


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
});})(c__18074__auto___20360,jobs,results,process,async))
;
return ((function (switch__17949__auto__,c__18074__auto___20360,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____0 = (function (){
var statearr_20257 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20257[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__);

(statearr_20257[(1)] = (1));

return statearr_20257;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____1 = (function (state_20245){
while(true){
var ret_value__17951__auto__ = (function (){try{while(true){
var result__17952__auto__ = switch__17949__auto__.call(null,state_20245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17952__auto__;
}
break;
}
}catch (e20258){var ex__17953__auto__ = e20258;
var statearr_20259_20367 = state_20245;
(statearr_20259_20367[(2)] = ex__17953__auto__);


if(cljs.core.seq.call(null,(state_20245[(4)]))){
var statearr_20260_20368 = state_20245;
(statearr_20260_20368[(1)] = cljs.core.first.call(null,(state_20245[(4)])));

} else {
throw ex__17953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20369 = state_20245;
state_20245 = G__20369;
continue;
} else {
return ret_value__17951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__ = function(state_20245){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____1.call(this,state_20245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__;
})()
;})(switch__17949__auto__,c__18074__auto___20360,jobs,results,process,async))
})();
var state__18076__auto__ = (function (){var statearr_20261 = f__18075__auto__.call(null);
(statearr_20261[(6)] = c__18074__auto___20360);

return statearr_20261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18076__auto__);
});})(c__18074__auto___20360,jobs,results,process,async))
);


var c__18074__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18074__auto__,jobs,results,process,async){
return (function (){
var f__18075__auto__ = (function (){var switch__17949__auto__ = ((function (c__18074__auto__,jobs,results,process,async){
return (function (state_20299){
var state_val_20300 = (state_20299[(1)]);
if((state_val_20300 === (7))){
var inst_20295 = (state_20299[(2)]);
var state_20299__$1 = state_20299;
var statearr_20301_20370 = state_20299__$1;
(statearr_20301_20370[(2)] = inst_20295);

(statearr_20301_20370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (20))){
var state_20299__$1 = state_20299;
var statearr_20302_20371 = state_20299__$1;
(statearr_20302_20371[(2)] = null);

(statearr_20302_20371[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (1))){
var state_20299__$1 = state_20299;
var statearr_20303_20372 = state_20299__$1;
(statearr_20303_20372[(2)] = null);

(statearr_20303_20372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (4))){
var inst_20264 = (state_20299[(7)]);
var inst_20264__$1 = (state_20299[(2)]);
var inst_20265 = (inst_20264__$1 == null);
var state_20299__$1 = (function (){var statearr_20304 = state_20299;
(statearr_20304[(7)] = inst_20264__$1);

return statearr_20304;
})();
if(cljs.core.truth_(inst_20265)){
var statearr_20305_20373 = state_20299__$1;
(statearr_20305_20373[(1)] = (5));

} else {
var statearr_20306_20374 = state_20299__$1;
(statearr_20306_20374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (15))){
var inst_20277 = (state_20299[(8)]);
var state_20299__$1 = state_20299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20299__$1,(18),to,inst_20277);
} else {
if((state_val_20300 === (21))){
var inst_20290 = (state_20299[(2)]);
var state_20299__$1 = state_20299;
var statearr_20307_20375 = state_20299__$1;
(statearr_20307_20375[(2)] = inst_20290);

(statearr_20307_20375[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (13))){
var inst_20292 = (state_20299[(2)]);
var state_20299__$1 = (function (){var statearr_20308 = state_20299;
(statearr_20308[(9)] = inst_20292);

return statearr_20308;
})();
var statearr_20309_20376 = state_20299__$1;
(statearr_20309_20376[(2)] = null);

(statearr_20309_20376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (6))){
var inst_20264 = (state_20299[(7)]);
var state_20299__$1 = state_20299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20299__$1,(11),inst_20264);
} else {
if((state_val_20300 === (17))){
var inst_20285 = (state_20299[(2)]);
var state_20299__$1 = state_20299;
if(cljs.core.truth_(inst_20285)){
var statearr_20310_20377 = state_20299__$1;
(statearr_20310_20377[(1)] = (19));

} else {
var statearr_20311_20378 = state_20299__$1;
(statearr_20311_20378[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (3))){
var inst_20297 = (state_20299[(2)]);
var state_20299__$1 = state_20299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20299__$1,inst_20297);
} else {
if((state_val_20300 === (12))){
var inst_20274 = (state_20299[(10)]);
var state_20299__$1 = state_20299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20299__$1,(14),inst_20274);
} else {
if((state_val_20300 === (2))){
var state_20299__$1 = state_20299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20299__$1,(4),results);
} else {
if((state_val_20300 === (19))){
var state_20299__$1 = state_20299;
var statearr_20312_20379 = state_20299__$1;
(statearr_20312_20379[(2)] = null);

(statearr_20312_20379[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (11))){
var inst_20274 = (state_20299[(2)]);
var state_20299__$1 = (function (){var statearr_20313 = state_20299;
(statearr_20313[(10)] = inst_20274);

return statearr_20313;
})();
var statearr_20314_20380 = state_20299__$1;
(statearr_20314_20380[(2)] = null);

(statearr_20314_20380[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (9))){
var state_20299__$1 = state_20299;
var statearr_20315_20381 = state_20299__$1;
(statearr_20315_20381[(2)] = null);

(statearr_20315_20381[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (5))){
var state_20299__$1 = state_20299;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20316_20382 = state_20299__$1;
(statearr_20316_20382[(1)] = (8));

} else {
var statearr_20317_20383 = state_20299__$1;
(statearr_20317_20383[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (14))){
var inst_20279 = (state_20299[(11)]);
var inst_20277 = (state_20299[(8)]);
var inst_20277__$1 = (state_20299[(2)]);
var inst_20278 = (inst_20277__$1 == null);
var inst_20279__$1 = cljs.core.not.call(null,inst_20278);
var state_20299__$1 = (function (){var statearr_20318 = state_20299;
(statearr_20318[(11)] = inst_20279__$1);

(statearr_20318[(8)] = inst_20277__$1);

return statearr_20318;
})();
if(inst_20279__$1){
var statearr_20319_20384 = state_20299__$1;
(statearr_20319_20384[(1)] = (15));

} else {
var statearr_20320_20385 = state_20299__$1;
(statearr_20320_20385[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (16))){
var inst_20279 = (state_20299[(11)]);
var state_20299__$1 = state_20299;
var statearr_20321_20386 = state_20299__$1;
(statearr_20321_20386[(2)] = inst_20279);

(statearr_20321_20386[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (10))){
var inst_20271 = (state_20299[(2)]);
var state_20299__$1 = state_20299;
var statearr_20322_20387 = state_20299__$1;
(statearr_20322_20387[(2)] = inst_20271);

(statearr_20322_20387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (18))){
var inst_20282 = (state_20299[(2)]);
var state_20299__$1 = state_20299;
var statearr_20323_20388 = state_20299__$1;
(statearr_20323_20388[(2)] = inst_20282);

(statearr_20323_20388[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (8))){
var inst_20268 = cljs.core.async.close_BANG_.call(null,to);
var state_20299__$1 = state_20299;
var statearr_20324_20389 = state_20299__$1;
(statearr_20324_20389[(2)] = inst_20268);

(statearr_20324_20389[(1)] = (10));


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
});})(c__18074__auto__,jobs,results,process,async))
;
return ((function (switch__17949__auto__,c__18074__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____0 = (function (){
var statearr_20325 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20325[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__);

(statearr_20325[(1)] = (1));

return statearr_20325;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____1 = (function (state_20299){
while(true){
var ret_value__17951__auto__ = (function (){try{while(true){
var result__17952__auto__ = switch__17949__auto__.call(null,state_20299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17952__auto__;
}
break;
}
}catch (e20326){var ex__17953__auto__ = e20326;
var statearr_20327_20390 = state_20299;
(statearr_20327_20390[(2)] = ex__17953__auto__);


if(cljs.core.seq.call(null,(state_20299[(4)]))){
var statearr_20328_20391 = state_20299;
(statearr_20328_20391[(1)] = cljs.core.first.call(null,(state_20299[(4)])));

} else {
throw ex__17953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20392 = state_20299;
state_20299 = G__20392;
continue;
} else {
return ret_value__17951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__ = function(state_20299){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____1.call(this,state_20299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17950__auto__;
})()
;})(switch__17949__auto__,c__18074__auto__,jobs,results,process,async))
})();
var state__18076__auto__ = (function (){var statearr_20329 = f__18075__auto__.call(null);
(statearr_20329[(6)] = c__18074__auto__);

return statearr_20329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18076__auto__);
});})(c__18074__auto__,jobs,results,process,async))
);

return c__18074__auto__;
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
var G__20394 = arguments.length;
switch (G__20394) {
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
var G__20397 = arguments.length;
switch (G__20397) {
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
var G__20400 = arguments.length;
switch (G__20400) {
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
var c__18074__auto___20450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18074__auto___20450,tc,fc){
return (function (){
var f__18075__auto__ = (function (){var switch__17949__auto__ = ((function (c__18074__auto___20450,tc,fc){
return (function (state_20426){
var state_val_20427 = (state_20426[(1)]);
if((state_val_20427 === (7))){
var inst_20422 = (state_20426[(2)]);
var state_20426__$1 = state_20426;
var statearr_20428_20451 = state_20426__$1;
(statearr_20428_20451[(2)] = inst_20422);

(statearr_20428_20451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20427 === (1))){
var state_20426__$1 = state_20426;
var statearr_20429_20452 = state_20426__$1;
(statearr_20429_20452[(2)] = null);

(statearr_20429_20452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20427 === (4))){
var inst_20403 = (state_20426[(7)]);
var inst_20403__$1 = (state_20426[(2)]);
var inst_20404 = (inst_20403__$1 == null);
var state_20426__$1 = (function (){var statearr_20430 = state_20426;
(statearr_20430[(7)] = inst_20403__$1);

return statearr_20430;
})();
if(cljs.core.truth_(inst_20404)){
var statearr_20431_20453 = state_20426__$1;
(statearr_20431_20453[(1)] = (5));

} else {
var statearr_20432_20454 = state_20426__$1;
(statearr_20432_20454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20427 === (13))){
var state_20426__$1 = state_20426;
var statearr_20433_20455 = state_20426__$1;
(statearr_20433_20455[(2)] = null);

(statearr_20433_20455[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20427 === (6))){
var inst_20403 = (state_20426[(7)]);
var inst_20409 = p.call(null,inst_20403);
var state_20426__$1 = state_20426;
if(cljs.core.truth_(inst_20409)){
var statearr_20434_20456 = state_20426__$1;
(statearr_20434_20456[(1)] = (9));

} else {
var statearr_20435_20457 = state_20426__$1;
(statearr_20435_20457[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20427 === (3))){
var inst_20424 = (state_20426[(2)]);
var state_20426__$1 = state_20426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20426__$1,inst_20424);
} else {
if((state_val_20427 === (12))){
var state_20426__$1 = state_20426;
var statearr_20436_20458 = state_20426__$1;
(statearr_20436_20458[(2)] = null);

(statearr_20436_20458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20427 === (2))){
var state_20426__$1 = state_20426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20426__$1,(4),ch);
} else {
if((state_val_20427 === (11))){
var inst_20403 = (state_20426[(7)]);
var inst_20413 = (state_20426[(2)]);
var state_20426__$1 = state_20426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20426__$1,(8),inst_20413,inst_20403);
} else {
if((state_val_20427 === (9))){
var state_20426__$1 = state_20426;
var statearr_20437_20459 = state_20426__$1;
(statearr_20437_20459[(2)] = tc);

(statearr_20437_20459[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20427 === (5))){
var inst_20406 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20407 = cljs.core.async.close_BANG_.call(null,fc);
var state_20426__$1 = (function (){var statearr_20438 = state_20426;
(statearr_20438[(8)] = inst_20406);

return statearr_20438;
})();
var statearr_20439_20460 = state_20426__$1;
(statearr_20439_20460[(2)] = inst_20407);

(statearr_20439_20460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20427 === (14))){
var inst_20420 = (state_20426[(2)]);
var state_20426__$1 = state_20426;
var statearr_20440_20461 = state_20426__$1;
(statearr_20440_20461[(2)] = inst_20420);

(statearr_20440_20461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20427 === (10))){
var state_20426__$1 = state_20426;
var statearr_20441_20462 = state_20426__$1;
(statearr_20441_20462[(2)] = fc);

(statearr_20441_20462[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20427 === (8))){
var inst_20415 = (state_20426[(2)]);
var state_20426__$1 = state_20426;
if(cljs.core.truth_(inst_20415)){
var statearr_20442_20463 = state_20426__$1;
(statearr_20442_20463[(1)] = (12));

} else {
var statearr_20443_20464 = state_20426__$1;
(statearr_20443_20464[(1)] = (13));

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
});})(c__18074__auto___20450,tc,fc))
;
return ((function (switch__17949__auto__,c__18074__auto___20450,tc,fc){
return (function() {
var cljs$core$async$state_machine__17950__auto__ = null;
var cljs$core$async$state_machine__17950__auto____0 = (function (){
var statearr_20444 = [null,null,null,null,null,null,null,null,null];
(statearr_20444[(0)] = cljs$core$async$state_machine__17950__auto__);

(statearr_20444[(1)] = (1));

return statearr_20444;
});
var cljs$core$async$state_machine__17950__auto____1 = (function (state_20426){
while(true){
var ret_value__17951__auto__ = (function (){try{while(true){
var result__17952__auto__ = switch__17949__auto__.call(null,state_20426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17952__auto__;
}
break;
}
}catch (e20445){var ex__17953__auto__ = e20445;
var statearr_20446_20465 = state_20426;
(statearr_20446_20465[(2)] = ex__17953__auto__);


if(cljs.core.seq.call(null,(state_20426[(4)]))){
var statearr_20447_20466 = state_20426;
(statearr_20447_20466[(1)] = cljs.core.first.call(null,(state_20426[(4)])));

} else {
throw ex__17953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20467 = state_20426;
state_20426 = G__20467;
continue;
} else {
return ret_value__17951__auto__;
}
break;
}
});
cljs$core$async$state_machine__17950__auto__ = function(state_20426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17950__auto____1.call(this,state_20426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17950__auto____0;
cljs$core$async$state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17950__auto____1;
return cljs$core$async$state_machine__17950__auto__;
})()
;})(switch__17949__auto__,c__18074__auto___20450,tc,fc))
})();
var state__18076__auto__ = (function (){var statearr_20448 = f__18075__auto__.call(null);
(statearr_20448[(6)] = c__18074__auto___20450);

return statearr_20448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18076__auto__);
});})(c__18074__auto___20450,tc,fc))
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
var c__18074__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18074__auto__){
return (function (){
var f__18075__auto__ = (function (){var switch__17949__auto__ = ((function (c__18074__auto__){
return (function (state_20489){
var state_val_20490 = (state_20489[(1)]);
if((state_val_20490 === (7))){
var inst_20485 = (state_20489[(2)]);
var state_20489__$1 = state_20489;
var statearr_20491_20510 = state_20489__$1;
(statearr_20491_20510[(2)] = inst_20485);

(statearr_20491_20510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20490 === (1))){
var inst_20468 = init;
var inst_20469 = inst_20468;
var state_20489__$1 = (function (){var statearr_20492 = state_20489;
(statearr_20492[(7)] = inst_20469);

return statearr_20492;
})();
var statearr_20493_20511 = state_20489__$1;
(statearr_20493_20511[(2)] = null);

(statearr_20493_20511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20490 === (4))){
var inst_20472 = (state_20489[(8)]);
var inst_20472__$1 = (state_20489[(2)]);
var inst_20473 = (inst_20472__$1 == null);
var state_20489__$1 = (function (){var statearr_20494 = state_20489;
(statearr_20494[(8)] = inst_20472__$1);

return statearr_20494;
})();
if(cljs.core.truth_(inst_20473)){
var statearr_20495_20512 = state_20489__$1;
(statearr_20495_20512[(1)] = (5));

} else {
var statearr_20496_20513 = state_20489__$1;
(statearr_20496_20513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20490 === (6))){
var inst_20476 = (state_20489[(9)]);
var inst_20472 = (state_20489[(8)]);
var inst_20469 = (state_20489[(7)]);
var inst_20476__$1 = f.call(null,inst_20469,inst_20472);
var inst_20477 = cljs.core.reduced_QMARK_.call(null,inst_20476__$1);
var state_20489__$1 = (function (){var statearr_20497 = state_20489;
(statearr_20497[(9)] = inst_20476__$1);

return statearr_20497;
})();
if(inst_20477){
var statearr_20498_20514 = state_20489__$1;
(statearr_20498_20514[(1)] = (8));

} else {
var statearr_20499_20515 = state_20489__$1;
(statearr_20499_20515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20490 === (3))){
var inst_20487 = (state_20489[(2)]);
var state_20489__$1 = state_20489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20489__$1,inst_20487);
} else {
if((state_val_20490 === (2))){
var state_20489__$1 = state_20489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20489__$1,(4),ch);
} else {
if((state_val_20490 === (9))){
var inst_20476 = (state_20489[(9)]);
var inst_20469 = inst_20476;
var state_20489__$1 = (function (){var statearr_20500 = state_20489;
(statearr_20500[(7)] = inst_20469);

return statearr_20500;
})();
var statearr_20501_20516 = state_20489__$1;
(statearr_20501_20516[(2)] = null);

(statearr_20501_20516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20490 === (5))){
var inst_20469 = (state_20489[(7)]);
var state_20489__$1 = state_20489;
var statearr_20502_20517 = state_20489__$1;
(statearr_20502_20517[(2)] = inst_20469);

(statearr_20502_20517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20490 === (10))){
var inst_20483 = (state_20489[(2)]);
var state_20489__$1 = state_20489;
var statearr_20503_20518 = state_20489__$1;
(statearr_20503_20518[(2)] = inst_20483);

(statearr_20503_20518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20490 === (8))){
var inst_20476 = (state_20489[(9)]);
var inst_20479 = cljs.core.deref.call(null,inst_20476);
var state_20489__$1 = state_20489;
var statearr_20504_20519 = state_20489__$1;
(statearr_20504_20519[(2)] = inst_20479);

(statearr_20504_20519[(1)] = (10));


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
});})(c__18074__auto__))
;
return ((function (switch__17949__auto__,c__18074__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__17950__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17950__auto____0 = (function (){
var statearr_20505 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20505[(0)] = cljs$core$async$reduce_$_state_machine__17950__auto__);

(statearr_20505[(1)] = (1));

return statearr_20505;
});
var cljs$core$async$reduce_$_state_machine__17950__auto____1 = (function (state_20489){
while(true){
var ret_value__17951__auto__ = (function (){try{while(true){
var result__17952__auto__ = switch__17949__auto__.call(null,state_20489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17952__auto__;
}
break;
}
}catch (e20506){var ex__17953__auto__ = e20506;
var statearr_20507_20520 = state_20489;
(statearr_20507_20520[(2)] = ex__17953__auto__);


if(cljs.core.seq.call(null,(state_20489[(4)]))){
var statearr_20508_20521 = state_20489;
(statearr_20508_20521[(1)] = cljs.core.first.call(null,(state_20489[(4)])));

} else {
throw ex__17953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20522 = state_20489;
state_20489 = G__20522;
continue;
} else {
return ret_value__17951__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17950__auto__ = function(state_20489){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17950__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17950__auto____1.call(this,state_20489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17950__auto____0;
cljs$core$async$reduce_$_state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17950__auto____1;
return cljs$core$async$reduce_$_state_machine__17950__auto__;
})()
;})(switch__17949__auto__,c__18074__auto__))
})();
var state__18076__auto__ = (function (){var statearr_20509 = f__18075__auto__.call(null);
(statearr_20509[(6)] = c__18074__auto__);

return statearr_20509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18076__auto__);
});})(c__18074__auto__))
);

return c__18074__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__18074__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18074__auto__,f__$1){
return (function (){
var f__18075__auto__ = (function (){var switch__17949__auto__ = ((function (c__18074__auto__,f__$1){
return (function (state_20528){
var state_val_20529 = (state_20528[(1)]);
if((state_val_20529 === (1))){
var inst_20523 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_20528__$1 = state_20528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20528__$1,(2),inst_20523);
} else {
if((state_val_20529 === (2))){
var inst_20525 = (state_20528[(2)]);
var inst_20526 = f__$1.call(null,inst_20525);
var state_20528__$1 = state_20528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20528__$1,inst_20526);
} else {
return null;
}
}
});})(c__18074__auto__,f__$1))
;
return ((function (switch__17949__auto__,c__18074__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__17950__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17950__auto____0 = (function (){
var statearr_20530 = [null,null,null,null,null,null,null];
(statearr_20530[(0)] = cljs$core$async$transduce_$_state_machine__17950__auto__);

(statearr_20530[(1)] = (1));

return statearr_20530;
});
var cljs$core$async$transduce_$_state_machine__17950__auto____1 = (function (state_20528){
while(true){
var ret_value__17951__auto__ = (function (){try{while(true){
var result__17952__auto__ = switch__17949__auto__.call(null,state_20528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17952__auto__;
}
break;
}
}catch (e20531){var ex__17953__auto__ = e20531;
var statearr_20532_20535 = state_20528;
(statearr_20532_20535[(2)] = ex__17953__auto__);


if(cljs.core.seq.call(null,(state_20528[(4)]))){
var statearr_20533_20536 = state_20528;
(statearr_20533_20536[(1)] = cljs.core.first.call(null,(state_20528[(4)])));

} else {
throw ex__17953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20537 = state_20528;
state_20528 = G__20537;
continue;
} else {
return ret_value__17951__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17950__auto__ = function(state_20528){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17950__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17950__auto____1.call(this,state_20528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17950__auto____0;
cljs$core$async$transduce_$_state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17950__auto____1;
return cljs$core$async$transduce_$_state_machine__17950__auto__;
})()
;})(switch__17949__auto__,c__18074__auto__,f__$1))
})();
var state__18076__auto__ = (function (){var statearr_20534 = f__18075__auto__.call(null);
(statearr_20534[(6)] = c__18074__auto__);

return statearr_20534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18076__auto__);
});})(c__18074__auto__,f__$1))
);

return c__18074__auto__;
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
var G__20539 = arguments.length;
switch (G__20539) {
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
var c__18074__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18074__auto__){
return (function (){
var f__18075__auto__ = (function (){var switch__17949__auto__ = ((function (c__18074__auto__){
return (function (state_20564){
var state_val_20565 = (state_20564[(1)]);
if((state_val_20565 === (7))){
var inst_20546 = (state_20564[(2)]);
var state_20564__$1 = state_20564;
var statearr_20566_20588 = state_20564__$1;
(statearr_20566_20588[(2)] = inst_20546);

(statearr_20566_20588[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (1))){
var inst_20540 = cljs.core.seq.call(null,coll);
var inst_20541 = inst_20540;
var state_20564__$1 = (function (){var statearr_20567 = state_20564;
(statearr_20567[(7)] = inst_20541);

return statearr_20567;
})();
var statearr_20568_20589 = state_20564__$1;
(statearr_20568_20589[(2)] = null);

(statearr_20568_20589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (4))){
var inst_20541 = (state_20564[(7)]);
var inst_20544 = cljs.core.first.call(null,inst_20541);
var state_20564__$1 = state_20564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20564__$1,(7),ch,inst_20544);
} else {
if((state_val_20565 === (13))){
var inst_20558 = (state_20564[(2)]);
var state_20564__$1 = state_20564;
var statearr_20569_20590 = state_20564__$1;
(statearr_20569_20590[(2)] = inst_20558);

(statearr_20569_20590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (6))){
var inst_20549 = (state_20564[(2)]);
var state_20564__$1 = state_20564;
if(cljs.core.truth_(inst_20549)){
var statearr_20570_20591 = state_20564__$1;
(statearr_20570_20591[(1)] = (8));

} else {
var statearr_20571_20592 = state_20564__$1;
(statearr_20571_20592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (3))){
var inst_20562 = (state_20564[(2)]);
var state_20564__$1 = state_20564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20564__$1,inst_20562);
} else {
if((state_val_20565 === (12))){
var state_20564__$1 = state_20564;
var statearr_20572_20593 = state_20564__$1;
(statearr_20572_20593[(2)] = null);

(statearr_20572_20593[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (2))){
var inst_20541 = (state_20564[(7)]);
var state_20564__$1 = state_20564;
if(cljs.core.truth_(inst_20541)){
var statearr_20573_20594 = state_20564__$1;
(statearr_20573_20594[(1)] = (4));

} else {
var statearr_20574_20595 = state_20564__$1;
(statearr_20574_20595[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (11))){
var inst_20555 = cljs.core.async.close_BANG_.call(null,ch);
var state_20564__$1 = state_20564;
var statearr_20575_20596 = state_20564__$1;
(statearr_20575_20596[(2)] = inst_20555);

(statearr_20575_20596[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (9))){
var state_20564__$1 = state_20564;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20576_20597 = state_20564__$1;
(statearr_20576_20597[(1)] = (11));

} else {
var statearr_20577_20598 = state_20564__$1;
(statearr_20577_20598[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (5))){
var inst_20541 = (state_20564[(7)]);
var state_20564__$1 = state_20564;
var statearr_20578_20599 = state_20564__$1;
(statearr_20578_20599[(2)] = inst_20541);

(statearr_20578_20599[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (10))){
var inst_20560 = (state_20564[(2)]);
var state_20564__$1 = state_20564;
var statearr_20579_20600 = state_20564__$1;
(statearr_20579_20600[(2)] = inst_20560);

(statearr_20579_20600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20565 === (8))){
var inst_20541 = (state_20564[(7)]);
var inst_20551 = cljs.core.next.call(null,inst_20541);
var inst_20541__$1 = inst_20551;
var state_20564__$1 = (function (){var statearr_20580 = state_20564;
(statearr_20580[(7)] = inst_20541__$1);

return statearr_20580;
})();
var statearr_20581_20601 = state_20564__$1;
(statearr_20581_20601[(2)] = null);

(statearr_20581_20601[(1)] = (2));


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
});})(c__18074__auto__))
;
return ((function (switch__17949__auto__,c__18074__auto__){
return (function() {
var cljs$core$async$state_machine__17950__auto__ = null;
var cljs$core$async$state_machine__17950__auto____0 = (function (){
var statearr_20582 = [null,null,null,null,null,null,null,null];
(statearr_20582[(0)] = cljs$core$async$state_machine__17950__auto__);

(statearr_20582[(1)] = (1));

return statearr_20582;
});
var cljs$core$async$state_machine__17950__auto____1 = (function (state_20564){
while(true){
var ret_value__17951__auto__ = (function (){try{while(true){
var result__17952__auto__ = switch__17949__auto__.call(null,state_20564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17952__auto__;
}
break;
}
}catch (e20583){var ex__17953__auto__ = e20583;
var statearr_20584_20602 = state_20564;
(statearr_20584_20602[(2)] = ex__17953__auto__);


if(cljs.core.seq.call(null,(state_20564[(4)]))){
var statearr_20585_20603 = state_20564;
(statearr_20585_20603[(1)] = cljs.core.first.call(null,(state_20564[(4)])));

} else {
throw ex__17953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20604 = state_20564;
state_20564 = G__20604;
continue;
} else {
return ret_value__17951__auto__;
}
break;
}
});
cljs$core$async$state_machine__17950__auto__ = function(state_20564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17950__auto____1.call(this,state_20564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17950__auto____0;
cljs$core$async$state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17950__auto____1;
return cljs$core$async$state_machine__17950__auto__;
})()
;})(switch__17949__auto__,c__18074__auto__))
})();
var state__18076__auto__ = (function (){var statearr_20586 = f__18075__auto__.call(null);
(statearr_20586[(6)] = c__18074__auto__);

return statearr_20586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18076__auto__);
});})(c__18074__auto__))
);

return c__18074__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20605 = (function (ch,cs,meta20606){
this.ch = ch;
this.cs = cs;
this.meta20606 = meta20606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20607,meta20606__$1){
var self__ = this;
var _20607__$1 = this;
return (new cljs.core.async.t_cljs$core$async20605(self__.ch,self__.cs,meta20606__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20607){
var self__ = this;
var _20607__$1 = this;
return self__.meta20606;
});})(cs))
;

cljs.core.async.t_cljs$core$async20605.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20605.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20605.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20605.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20605.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20605.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20605.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20606","meta20606",1203377071,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20605.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20605";

cljs.core.async.t_cljs$core$async20605.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async20605");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20605.
 */
cljs.core.async.__GT_t_cljs$core$async20605 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20605(ch__$1,cs__$1,meta20606){
return (new cljs.core.async.t_cljs$core$async20605(ch__$1,cs__$1,meta20606));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20605(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18074__auto___20824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18074__auto___20824,cs,m,dchan,dctr,done){
return (function (){
var f__18075__auto__ = (function (){var switch__17949__auto__ = ((function (c__18074__auto___20824,cs,m,dchan,dctr,done){
return (function (state_20740){
var state_val_20741 = (state_20740[(1)]);
if((state_val_20741 === (7))){
var inst_20736 = (state_20740[(2)]);
var state_20740__$1 = state_20740;
var statearr_20742_20825 = state_20740__$1;
(statearr_20742_20825[(2)] = inst_20736);

(statearr_20742_20825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (20))){
var inst_20641 = (state_20740[(7)]);
var inst_20653 = cljs.core.first.call(null,inst_20641);
var inst_20654 = cljs.core.nth.call(null,inst_20653,(0),null);
var inst_20655 = cljs.core.nth.call(null,inst_20653,(1),null);
var state_20740__$1 = (function (){var statearr_20743 = state_20740;
(statearr_20743[(8)] = inst_20654);

return statearr_20743;
})();
if(cljs.core.truth_(inst_20655)){
var statearr_20744_20826 = state_20740__$1;
(statearr_20744_20826[(1)] = (22));

} else {
var statearr_20745_20827 = state_20740__$1;
(statearr_20745_20827[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (27))){
var inst_20685 = (state_20740[(9)]);
var inst_20610 = (state_20740[(10)]);
var inst_20690 = (state_20740[(11)]);
var inst_20683 = (state_20740[(12)]);
var inst_20690__$1 = cljs.core._nth.call(null,inst_20683,inst_20685);
var inst_20691 = cljs.core.async.put_BANG_.call(null,inst_20690__$1,inst_20610,done);
var state_20740__$1 = (function (){var statearr_20746 = state_20740;
(statearr_20746[(11)] = inst_20690__$1);

return statearr_20746;
})();
if(cljs.core.truth_(inst_20691)){
var statearr_20747_20828 = state_20740__$1;
(statearr_20747_20828[(1)] = (30));

} else {
var statearr_20748_20829 = state_20740__$1;
(statearr_20748_20829[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (1))){
var state_20740__$1 = state_20740;
var statearr_20749_20830 = state_20740__$1;
(statearr_20749_20830[(2)] = null);

(statearr_20749_20830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (24))){
var inst_20641 = (state_20740[(7)]);
var inst_20660 = (state_20740[(2)]);
var inst_20661 = cljs.core.next.call(null,inst_20641);
var inst_20619 = inst_20661;
var inst_20620 = null;
var inst_20621 = (0);
var inst_20622 = (0);
var state_20740__$1 = (function (){var statearr_20750 = state_20740;
(statearr_20750[(13)] = inst_20660);

(statearr_20750[(14)] = inst_20619);

(statearr_20750[(15)] = inst_20621);

(statearr_20750[(16)] = inst_20620);

(statearr_20750[(17)] = inst_20622);

return statearr_20750;
})();
var statearr_20751_20831 = state_20740__$1;
(statearr_20751_20831[(2)] = null);

(statearr_20751_20831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (39))){
var state_20740__$1 = state_20740;
var statearr_20755_20832 = state_20740__$1;
(statearr_20755_20832[(2)] = null);

(statearr_20755_20832[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (4))){
var inst_20610 = (state_20740[(10)]);
var inst_20610__$1 = (state_20740[(2)]);
var inst_20611 = (inst_20610__$1 == null);
var state_20740__$1 = (function (){var statearr_20756 = state_20740;
(statearr_20756[(10)] = inst_20610__$1);

return statearr_20756;
})();
if(cljs.core.truth_(inst_20611)){
var statearr_20757_20833 = state_20740__$1;
(statearr_20757_20833[(1)] = (5));

} else {
var statearr_20758_20834 = state_20740__$1;
(statearr_20758_20834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (15))){
var inst_20619 = (state_20740[(14)]);
var inst_20621 = (state_20740[(15)]);
var inst_20620 = (state_20740[(16)]);
var inst_20622 = (state_20740[(17)]);
var inst_20637 = (state_20740[(2)]);
var inst_20638 = (inst_20622 + (1));
var tmp20752 = inst_20619;
var tmp20753 = inst_20621;
var tmp20754 = inst_20620;
var inst_20619__$1 = tmp20752;
var inst_20620__$1 = tmp20754;
var inst_20621__$1 = tmp20753;
var inst_20622__$1 = inst_20638;
var state_20740__$1 = (function (){var statearr_20759 = state_20740;
(statearr_20759[(18)] = inst_20637);

(statearr_20759[(14)] = inst_20619__$1);

(statearr_20759[(15)] = inst_20621__$1);

(statearr_20759[(16)] = inst_20620__$1);

(statearr_20759[(17)] = inst_20622__$1);

return statearr_20759;
})();
var statearr_20760_20835 = state_20740__$1;
(statearr_20760_20835[(2)] = null);

(statearr_20760_20835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (21))){
var inst_20664 = (state_20740[(2)]);
var state_20740__$1 = state_20740;
var statearr_20764_20836 = state_20740__$1;
(statearr_20764_20836[(2)] = inst_20664);

(statearr_20764_20836[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (31))){
var inst_20690 = (state_20740[(11)]);
var inst_20694 = cljs.core.async.untap_STAR_.call(null,m,inst_20690);
var state_20740__$1 = state_20740;
var statearr_20765_20837 = state_20740__$1;
(statearr_20765_20837[(2)] = inst_20694);

(statearr_20765_20837[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (32))){
var inst_20682 = (state_20740[(19)]);
var inst_20685 = (state_20740[(9)]);
var inst_20684 = (state_20740[(20)]);
var inst_20683 = (state_20740[(12)]);
var inst_20696 = (state_20740[(2)]);
var inst_20697 = (inst_20685 + (1));
var tmp20761 = inst_20682;
var tmp20762 = inst_20684;
var tmp20763 = inst_20683;
var inst_20682__$1 = tmp20761;
var inst_20683__$1 = tmp20763;
var inst_20684__$1 = tmp20762;
var inst_20685__$1 = inst_20697;
var state_20740__$1 = (function (){var statearr_20766 = state_20740;
(statearr_20766[(19)] = inst_20682__$1);

(statearr_20766[(9)] = inst_20685__$1);

(statearr_20766[(20)] = inst_20684__$1);

(statearr_20766[(21)] = inst_20696);

(statearr_20766[(12)] = inst_20683__$1);

return statearr_20766;
})();
var statearr_20767_20838 = state_20740__$1;
(statearr_20767_20838[(2)] = null);

(statearr_20767_20838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (40))){
var inst_20709 = (state_20740[(22)]);
var inst_20713 = cljs.core.async.untap_STAR_.call(null,m,inst_20709);
var state_20740__$1 = state_20740;
var statearr_20768_20839 = state_20740__$1;
(statearr_20768_20839[(2)] = inst_20713);

(statearr_20768_20839[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (33))){
var inst_20700 = (state_20740[(23)]);
var inst_20702 = cljs.core.chunked_seq_QMARK_.call(null,inst_20700);
var state_20740__$1 = state_20740;
if(inst_20702){
var statearr_20769_20840 = state_20740__$1;
(statearr_20769_20840[(1)] = (36));

} else {
var statearr_20770_20841 = state_20740__$1;
(statearr_20770_20841[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (13))){
var inst_20631 = (state_20740[(24)]);
var inst_20634 = cljs.core.async.close_BANG_.call(null,inst_20631);
var state_20740__$1 = state_20740;
var statearr_20771_20842 = state_20740__$1;
(statearr_20771_20842[(2)] = inst_20634);

(statearr_20771_20842[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (22))){
var inst_20654 = (state_20740[(8)]);
var inst_20657 = cljs.core.async.close_BANG_.call(null,inst_20654);
var state_20740__$1 = state_20740;
var statearr_20772_20843 = state_20740__$1;
(statearr_20772_20843[(2)] = inst_20657);

(statearr_20772_20843[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (36))){
var inst_20700 = (state_20740[(23)]);
var inst_20704 = cljs.core.chunk_first.call(null,inst_20700);
var inst_20705 = cljs.core.chunk_rest.call(null,inst_20700);
var inst_20706 = cljs.core.count.call(null,inst_20704);
var inst_20682 = inst_20705;
var inst_20683 = inst_20704;
var inst_20684 = inst_20706;
var inst_20685 = (0);
var state_20740__$1 = (function (){var statearr_20773 = state_20740;
(statearr_20773[(19)] = inst_20682);

(statearr_20773[(9)] = inst_20685);

(statearr_20773[(20)] = inst_20684);

(statearr_20773[(12)] = inst_20683);

return statearr_20773;
})();
var statearr_20774_20844 = state_20740__$1;
(statearr_20774_20844[(2)] = null);

(statearr_20774_20844[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (41))){
var inst_20700 = (state_20740[(23)]);
var inst_20715 = (state_20740[(2)]);
var inst_20716 = cljs.core.next.call(null,inst_20700);
var inst_20682 = inst_20716;
var inst_20683 = null;
var inst_20684 = (0);
var inst_20685 = (0);
var state_20740__$1 = (function (){var statearr_20775 = state_20740;
(statearr_20775[(19)] = inst_20682);

(statearr_20775[(9)] = inst_20685);

(statearr_20775[(20)] = inst_20684);

(statearr_20775[(25)] = inst_20715);

(statearr_20775[(12)] = inst_20683);

return statearr_20775;
})();
var statearr_20776_20845 = state_20740__$1;
(statearr_20776_20845[(2)] = null);

(statearr_20776_20845[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (43))){
var state_20740__$1 = state_20740;
var statearr_20777_20846 = state_20740__$1;
(statearr_20777_20846[(2)] = null);

(statearr_20777_20846[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (29))){
var inst_20724 = (state_20740[(2)]);
var state_20740__$1 = state_20740;
var statearr_20778_20847 = state_20740__$1;
(statearr_20778_20847[(2)] = inst_20724);

(statearr_20778_20847[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (44))){
var inst_20733 = (state_20740[(2)]);
var state_20740__$1 = (function (){var statearr_20779 = state_20740;
(statearr_20779[(26)] = inst_20733);

return statearr_20779;
})();
var statearr_20780_20848 = state_20740__$1;
(statearr_20780_20848[(2)] = null);

(statearr_20780_20848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (6))){
var inst_20674 = (state_20740[(27)]);
var inst_20673 = cljs.core.deref.call(null,cs);
var inst_20674__$1 = cljs.core.keys.call(null,inst_20673);
var inst_20675 = cljs.core.count.call(null,inst_20674__$1);
var inst_20676 = cljs.core.reset_BANG_.call(null,dctr,inst_20675);
var inst_20681 = cljs.core.seq.call(null,inst_20674__$1);
var inst_20682 = inst_20681;
var inst_20683 = null;
var inst_20684 = (0);
var inst_20685 = (0);
var state_20740__$1 = (function (){var statearr_20781 = state_20740;
(statearr_20781[(27)] = inst_20674__$1);

(statearr_20781[(19)] = inst_20682);

(statearr_20781[(9)] = inst_20685);

(statearr_20781[(20)] = inst_20684);

(statearr_20781[(28)] = inst_20676);

(statearr_20781[(12)] = inst_20683);

return statearr_20781;
})();
var statearr_20782_20849 = state_20740__$1;
(statearr_20782_20849[(2)] = null);

(statearr_20782_20849[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (28))){
var inst_20682 = (state_20740[(19)]);
var inst_20700 = (state_20740[(23)]);
var inst_20700__$1 = cljs.core.seq.call(null,inst_20682);
var state_20740__$1 = (function (){var statearr_20783 = state_20740;
(statearr_20783[(23)] = inst_20700__$1);

return statearr_20783;
})();
if(inst_20700__$1){
var statearr_20784_20850 = state_20740__$1;
(statearr_20784_20850[(1)] = (33));

} else {
var statearr_20785_20851 = state_20740__$1;
(statearr_20785_20851[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (25))){
var inst_20685 = (state_20740[(9)]);
var inst_20684 = (state_20740[(20)]);
var inst_20687 = (inst_20685 < inst_20684);
var inst_20688 = inst_20687;
var state_20740__$1 = state_20740;
if(cljs.core.truth_(inst_20688)){
var statearr_20786_20852 = state_20740__$1;
(statearr_20786_20852[(1)] = (27));

} else {
var statearr_20787_20853 = state_20740__$1;
(statearr_20787_20853[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (34))){
var state_20740__$1 = state_20740;
var statearr_20788_20854 = state_20740__$1;
(statearr_20788_20854[(2)] = null);

(statearr_20788_20854[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (17))){
var state_20740__$1 = state_20740;
var statearr_20789_20855 = state_20740__$1;
(statearr_20789_20855[(2)] = null);

(statearr_20789_20855[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (3))){
var inst_20738 = (state_20740[(2)]);
var state_20740__$1 = state_20740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20740__$1,inst_20738);
} else {
if((state_val_20741 === (12))){
var inst_20669 = (state_20740[(2)]);
var state_20740__$1 = state_20740;
var statearr_20790_20856 = state_20740__$1;
(statearr_20790_20856[(2)] = inst_20669);

(statearr_20790_20856[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (2))){
var state_20740__$1 = state_20740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20740__$1,(4),ch);
} else {
if((state_val_20741 === (23))){
var state_20740__$1 = state_20740;
var statearr_20791_20857 = state_20740__$1;
(statearr_20791_20857[(2)] = null);

(statearr_20791_20857[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (35))){
var inst_20722 = (state_20740[(2)]);
var state_20740__$1 = state_20740;
var statearr_20792_20858 = state_20740__$1;
(statearr_20792_20858[(2)] = inst_20722);

(statearr_20792_20858[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (19))){
var inst_20641 = (state_20740[(7)]);
var inst_20645 = cljs.core.chunk_first.call(null,inst_20641);
var inst_20646 = cljs.core.chunk_rest.call(null,inst_20641);
var inst_20647 = cljs.core.count.call(null,inst_20645);
var inst_20619 = inst_20646;
var inst_20620 = inst_20645;
var inst_20621 = inst_20647;
var inst_20622 = (0);
var state_20740__$1 = (function (){var statearr_20793 = state_20740;
(statearr_20793[(14)] = inst_20619);

(statearr_20793[(15)] = inst_20621);

(statearr_20793[(16)] = inst_20620);

(statearr_20793[(17)] = inst_20622);

return statearr_20793;
})();
var statearr_20794_20859 = state_20740__$1;
(statearr_20794_20859[(2)] = null);

(statearr_20794_20859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (11))){
var inst_20619 = (state_20740[(14)]);
var inst_20641 = (state_20740[(7)]);
var inst_20641__$1 = cljs.core.seq.call(null,inst_20619);
var state_20740__$1 = (function (){var statearr_20795 = state_20740;
(statearr_20795[(7)] = inst_20641__$1);

return statearr_20795;
})();
if(inst_20641__$1){
var statearr_20796_20860 = state_20740__$1;
(statearr_20796_20860[(1)] = (16));

} else {
var statearr_20797_20861 = state_20740__$1;
(statearr_20797_20861[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (9))){
var inst_20671 = (state_20740[(2)]);
var state_20740__$1 = state_20740;
var statearr_20798_20862 = state_20740__$1;
(statearr_20798_20862[(2)] = inst_20671);

(statearr_20798_20862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (5))){
var inst_20617 = cljs.core.deref.call(null,cs);
var inst_20618 = cljs.core.seq.call(null,inst_20617);
var inst_20619 = inst_20618;
var inst_20620 = null;
var inst_20621 = (0);
var inst_20622 = (0);
var state_20740__$1 = (function (){var statearr_20799 = state_20740;
(statearr_20799[(14)] = inst_20619);

(statearr_20799[(15)] = inst_20621);

(statearr_20799[(16)] = inst_20620);

(statearr_20799[(17)] = inst_20622);

return statearr_20799;
})();
var statearr_20800_20863 = state_20740__$1;
(statearr_20800_20863[(2)] = null);

(statearr_20800_20863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (14))){
var state_20740__$1 = state_20740;
var statearr_20801_20864 = state_20740__$1;
(statearr_20801_20864[(2)] = null);

(statearr_20801_20864[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (45))){
var inst_20730 = (state_20740[(2)]);
var state_20740__$1 = state_20740;
var statearr_20802_20865 = state_20740__$1;
(statearr_20802_20865[(2)] = inst_20730);

(statearr_20802_20865[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (26))){
var inst_20674 = (state_20740[(27)]);
var inst_20726 = (state_20740[(2)]);
var inst_20727 = cljs.core.seq.call(null,inst_20674);
var state_20740__$1 = (function (){var statearr_20803 = state_20740;
(statearr_20803[(29)] = inst_20726);

return statearr_20803;
})();
if(inst_20727){
var statearr_20804_20866 = state_20740__$1;
(statearr_20804_20866[(1)] = (42));

} else {
var statearr_20805_20867 = state_20740__$1;
(statearr_20805_20867[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (16))){
var inst_20641 = (state_20740[(7)]);
var inst_20643 = cljs.core.chunked_seq_QMARK_.call(null,inst_20641);
var state_20740__$1 = state_20740;
if(inst_20643){
var statearr_20806_20868 = state_20740__$1;
(statearr_20806_20868[(1)] = (19));

} else {
var statearr_20807_20869 = state_20740__$1;
(statearr_20807_20869[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (38))){
var inst_20719 = (state_20740[(2)]);
var state_20740__$1 = state_20740;
var statearr_20808_20870 = state_20740__$1;
(statearr_20808_20870[(2)] = inst_20719);

(statearr_20808_20870[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (30))){
var state_20740__$1 = state_20740;
var statearr_20809_20871 = state_20740__$1;
(statearr_20809_20871[(2)] = null);

(statearr_20809_20871[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (10))){
var inst_20620 = (state_20740[(16)]);
var inst_20622 = (state_20740[(17)]);
var inst_20630 = cljs.core._nth.call(null,inst_20620,inst_20622);
var inst_20631 = cljs.core.nth.call(null,inst_20630,(0),null);
var inst_20632 = cljs.core.nth.call(null,inst_20630,(1),null);
var state_20740__$1 = (function (){var statearr_20810 = state_20740;
(statearr_20810[(24)] = inst_20631);

return statearr_20810;
})();
if(cljs.core.truth_(inst_20632)){
var statearr_20811_20872 = state_20740__$1;
(statearr_20811_20872[(1)] = (13));

} else {
var statearr_20812_20873 = state_20740__$1;
(statearr_20812_20873[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (18))){
var inst_20667 = (state_20740[(2)]);
var state_20740__$1 = state_20740;
var statearr_20813_20874 = state_20740__$1;
(statearr_20813_20874[(2)] = inst_20667);

(statearr_20813_20874[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (42))){
var state_20740__$1 = state_20740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20740__$1,(45),dchan);
} else {
if((state_val_20741 === (37))){
var inst_20709 = (state_20740[(22)]);
var inst_20700 = (state_20740[(23)]);
var inst_20610 = (state_20740[(10)]);
var inst_20709__$1 = cljs.core.first.call(null,inst_20700);
var inst_20710 = cljs.core.async.put_BANG_.call(null,inst_20709__$1,inst_20610,done);
var state_20740__$1 = (function (){var statearr_20814 = state_20740;
(statearr_20814[(22)] = inst_20709__$1);

return statearr_20814;
})();
if(cljs.core.truth_(inst_20710)){
var statearr_20815_20875 = state_20740__$1;
(statearr_20815_20875[(1)] = (39));

} else {
var statearr_20816_20876 = state_20740__$1;
(statearr_20816_20876[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20741 === (8))){
var inst_20621 = (state_20740[(15)]);
var inst_20622 = (state_20740[(17)]);
var inst_20624 = (inst_20622 < inst_20621);
var inst_20625 = inst_20624;
var state_20740__$1 = state_20740;
if(cljs.core.truth_(inst_20625)){
var statearr_20817_20877 = state_20740__$1;
(statearr_20817_20877[(1)] = (10));

} else {
var statearr_20818_20878 = state_20740__$1;
(statearr_20818_20878[(1)] = (11));

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
});})(c__18074__auto___20824,cs,m,dchan,dctr,done))
;
return ((function (switch__17949__auto__,c__18074__auto___20824,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__17950__auto__ = null;
var cljs$core$async$mult_$_state_machine__17950__auto____0 = (function (){
var statearr_20819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20819[(0)] = cljs$core$async$mult_$_state_machine__17950__auto__);

(statearr_20819[(1)] = (1));

return statearr_20819;
});
var cljs$core$async$mult_$_state_machine__17950__auto____1 = (function (state_20740){
while(true){
var ret_value__17951__auto__ = (function (){try{while(true){
var result__17952__auto__ = switch__17949__auto__.call(null,state_20740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17952__auto__;
}
break;
}
}catch (e20820){var ex__17953__auto__ = e20820;
var statearr_20821_20879 = state_20740;
(statearr_20821_20879[(2)] = ex__17953__auto__);


if(cljs.core.seq.call(null,(state_20740[(4)]))){
var statearr_20822_20880 = state_20740;
(statearr_20822_20880[(1)] = cljs.core.first.call(null,(state_20740[(4)])));

} else {
throw ex__17953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20881 = state_20740;
state_20740 = G__20881;
continue;
} else {
return ret_value__17951__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17950__auto__ = function(state_20740){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17950__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17950__auto____1.call(this,state_20740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17950__auto____0;
cljs$core$async$mult_$_state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17950__auto____1;
return cljs$core$async$mult_$_state_machine__17950__auto__;
})()
;})(switch__17949__auto__,c__18074__auto___20824,cs,m,dchan,dctr,done))
})();
var state__18076__auto__ = (function (){var statearr_20823 = f__18075__auto__.call(null);
(statearr_20823[(6)] = c__18074__auto___20824);

return statearr_20823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18076__auto__);
});})(c__18074__auto___20824,cs,m,dchan,dctr,done))
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
var G__20883 = arguments.length;
switch (G__20883) {
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
var len__4531__auto___20895 = arguments.length;
var i__4532__auto___20896 = (0);
while(true){
if((i__4532__auto___20896 < len__4531__auto___20895)){
args__4534__auto__.push((arguments[i__4532__auto___20896]));

var G__20897 = (i__4532__auto___20896 + (1));
i__4532__auto___20896 = G__20897;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20889){
var map__20890 = p__20889;
var map__20890__$1 = ((((!((map__20890 == null)))?(((((map__20890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20890):map__20890);
var opts = map__20890__$1;
var statearr_20892_20898 = state;
(statearr_20892_20898[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__20890,map__20890__$1,opts){
return (function (val){
var statearr_20893_20899 = state;
(statearr_20893_20899[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20890,map__20890__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_20894_20900 = state;
(statearr_20894_20900[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20885){
var G__20886 = cljs.core.first.call(null,seq20885);
var seq20885__$1 = cljs.core.next.call(null,seq20885);
var G__20887 = cljs.core.first.call(null,seq20885__$1);
var seq20885__$2 = cljs.core.next.call(null,seq20885__$1);
var G__20888 = cljs.core.first.call(null,seq20885__$2);
var seq20885__$3 = cljs.core.next.call(null,seq20885__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20886,G__20887,G__20888,seq20885__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async20901 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20901 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta20902){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta20902 = meta20902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async20901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20903,meta20902__$1){
var self__ = this;
var _20903__$1 = this;
return (new cljs.core.async.t_cljs$core$async20901(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta20902__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20901.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20903){
var self__ = this;
var _20903__$1 = this;
return self__.meta20902;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20901.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20901.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20901.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async20901.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20901.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20901.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20901.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20901.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async20901.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta20902","meta20902",-1135581106,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20901.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20901";

cljs.core.async.t_cljs$core$async20901.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async20901");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20901.
 */
cljs.core.async.__GT_t_cljs$core$async20901 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async20901(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta20902){
return (new cljs.core.async.t_cljs$core$async20901(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta20902));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async20901(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18074__auto___21066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18074__auto___21066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18075__auto__ = (function (){var switch__17949__auto__ = ((function (c__18074__auto___21066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21005){
var state_val_21006 = (state_21005[(1)]);
if((state_val_21006 === (7))){
var inst_20920 = (state_21005[(2)]);
var state_21005__$1 = state_21005;
var statearr_21007_21067 = state_21005__$1;
(statearr_21007_21067[(2)] = inst_20920);

(statearr_21007_21067[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (20))){
var inst_20932 = (state_21005[(7)]);
var state_21005__$1 = state_21005;
var statearr_21008_21068 = state_21005__$1;
(statearr_21008_21068[(2)] = inst_20932);

(statearr_21008_21068[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (27))){
var state_21005__$1 = state_21005;
var statearr_21009_21069 = state_21005__$1;
(statearr_21009_21069[(2)] = null);

(statearr_21009_21069[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (1))){
var inst_20907 = (state_21005[(8)]);
var inst_20907__$1 = calc_state.call(null);
var inst_20909 = (inst_20907__$1 == null);
var inst_20910 = cljs.core.not.call(null,inst_20909);
var state_21005__$1 = (function (){var statearr_21010 = state_21005;
(statearr_21010[(8)] = inst_20907__$1);

return statearr_21010;
})();
if(inst_20910){
var statearr_21011_21070 = state_21005__$1;
(statearr_21011_21070[(1)] = (2));

} else {
var statearr_21012_21071 = state_21005__$1;
(statearr_21012_21071[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (24))){
var inst_20965 = (state_21005[(9)]);
var inst_20956 = (state_21005[(10)]);
var inst_20979 = (state_21005[(11)]);
var inst_20979__$1 = inst_20956.call(null,inst_20965);
var state_21005__$1 = (function (){var statearr_21013 = state_21005;
(statearr_21013[(11)] = inst_20979__$1);

return statearr_21013;
})();
if(cljs.core.truth_(inst_20979__$1)){
var statearr_21014_21072 = state_21005__$1;
(statearr_21014_21072[(1)] = (29));

} else {
var statearr_21015_21073 = state_21005__$1;
(statearr_21015_21073[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (4))){
var inst_20923 = (state_21005[(2)]);
var state_21005__$1 = state_21005;
if(cljs.core.truth_(inst_20923)){
var statearr_21016_21074 = state_21005__$1;
(statearr_21016_21074[(1)] = (8));

} else {
var statearr_21017_21075 = state_21005__$1;
(statearr_21017_21075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (15))){
var inst_20950 = (state_21005[(2)]);
var state_21005__$1 = state_21005;
if(cljs.core.truth_(inst_20950)){
var statearr_21018_21076 = state_21005__$1;
(statearr_21018_21076[(1)] = (19));

} else {
var statearr_21019_21077 = state_21005__$1;
(statearr_21019_21077[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (21))){
var inst_20955 = (state_21005[(12)]);
var inst_20955__$1 = (state_21005[(2)]);
var inst_20956 = cljs.core.get.call(null,inst_20955__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20957 = cljs.core.get.call(null,inst_20955__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20958 = cljs.core.get.call(null,inst_20955__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21005__$1 = (function (){var statearr_21020 = state_21005;
(statearr_21020[(13)] = inst_20957);

(statearr_21020[(10)] = inst_20956);

(statearr_21020[(12)] = inst_20955__$1);

return statearr_21020;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21005__$1,(22),inst_20958);
} else {
if((state_val_21006 === (31))){
var inst_20987 = (state_21005[(2)]);
var state_21005__$1 = state_21005;
if(cljs.core.truth_(inst_20987)){
var statearr_21021_21078 = state_21005__$1;
(statearr_21021_21078[(1)] = (32));

} else {
var statearr_21022_21079 = state_21005__$1;
(statearr_21022_21079[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (32))){
var inst_20964 = (state_21005[(14)]);
var state_21005__$1 = state_21005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21005__$1,(35),out,inst_20964);
} else {
if((state_val_21006 === (33))){
var inst_20955 = (state_21005[(12)]);
var inst_20932 = inst_20955;
var state_21005__$1 = (function (){var statearr_21023 = state_21005;
(statearr_21023[(7)] = inst_20932);

return statearr_21023;
})();
var statearr_21024_21080 = state_21005__$1;
(statearr_21024_21080[(2)] = null);

(statearr_21024_21080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (13))){
var inst_20932 = (state_21005[(7)]);
var inst_20939 = inst_20932.cljs$lang$protocol_mask$partition0$;
var inst_20940 = (inst_20939 & (64));
var inst_20941 = inst_20932.cljs$core$ISeq$;
var inst_20942 = (cljs.core.PROTOCOL_SENTINEL === inst_20941);
var inst_20943 = ((inst_20940) || (inst_20942));
var state_21005__$1 = state_21005;
if(cljs.core.truth_(inst_20943)){
var statearr_21025_21081 = state_21005__$1;
(statearr_21025_21081[(1)] = (16));

} else {
var statearr_21026_21082 = state_21005__$1;
(statearr_21026_21082[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (22))){
var inst_20965 = (state_21005[(9)]);
var inst_20964 = (state_21005[(14)]);
var inst_20963 = (state_21005[(2)]);
var inst_20964__$1 = cljs.core.nth.call(null,inst_20963,(0),null);
var inst_20965__$1 = cljs.core.nth.call(null,inst_20963,(1),null);
var inst_20966 = (inst_20964__$1 == null);
var inst_20967 = cljs.core._EQ_.call(null,inst_20965__$1,change);
var inst_20968 = ((inst_20966) || (inst_20967));
var state_21005__$1 = (function (){var statearr_21027 = state_21005;
(statearr_21027[(9)] = inst_20965__$1);

(statearr_21027[(14)] = inst_20964__$1);

return statearr_21027;
})();
if(cljs.core.truth_(inst_20968)){
var statearr_21028_21083 = state_21005__$1;
(statearr_21028_21083[(1)] = (23));

} else {
var statearr_21029_21084 = state_21005__$1;
(statearr_21029_21084[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (36))){
var inst_20955 = (state_21005[(12)]);
var inst_20932 = inst_20955;
var state_21005__$1 = (function (){var statearr_21030 = state_21005;
(statearr_21030[(7)] = inst_20932);

return statearr_21030;
})();
var statearr_21031_21085 = state_21005__$1;
(statearr_21031_21085[(2)] = null);

(statearr_21031_21085[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (29))){
var inst_20979 = (state_21005[(11)]);
var state_21005__$1 = state_21005;
var statearr_21032_21086 = state_21005__$1;
(statearr_21032_21086[(2)] = inst_20979);

(statearr_21032_21086[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (6))){
var state_21005__$1 = state_21005;
var statearr_21033_21087 = state_21005__$1;
(statearr_21033_21087[(2)] = false);

(statearr_21033_21087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (28))){
var inst_20975 = (state_21005[(2)]);
var inst_20976 = calc_state.call(null);
var inst_20932 = inst_20976;
var state_21005__$1 = (function (){var statearr_21034 = state_21005;
(statearr_21034[(7)] = inst_20932);

(statearr_21034[(15)] = inst_20975);

return statearr_21034;
})();
var statearr_21035_21088 = state_21005__$1;
(statearr_21035_21088[(2)] = null);

(statearr_21035_21088[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (25))){
var inst_21001 = (state_21005[(2)]);
var state_21005__$1 = state_21005;
var statearr_21036_21089 = state_21005__$1;
(statearr_21036_21089[(2)] = inst_21001);

(statearr_21036_21089[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (34))){
var inst_20999 = (state_21005[(2)]);
var state_21005__$1 = state_21005;
var statearr_21037_21090 = state_21005__$1;
(statearr_21037_21090[(2)] = inst_20999);

(statearr_21037_21090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (17))){
var state_21005__$1 = state_21005;
var statearr_21038_21091 = state_21005__$1;
(statearr_21038_21091[(2)] = false);

(statearr_21038_21091[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (3))){
var state_21005__$1 = state_21005;
var statearr_21039_21092 = state_21005__$1;
(statearr_21039_21092[(2)] = false);

(statearr_21039_21092[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (12))){
var inst_21003 = (state_21005[(2)]);
var state_21005__$1 = state_21005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21005__$1,inst_21003);
} else {
if((state_val_21006 === (2))){
var inst_20907 = (state_21005[(8)]);
var inst_20912 = inst_20907.cljs$lang$protocol_mask$partition0$;
var inst_20913 = (inst_20912 & (64));
var inst_20914 = inst_20907.cljs$core$ISeq$;
var inst_20915 = (cljs.core.PROTOCOL_SENTINEL === inst_20914);
var inst_20916 = ((inst_20913) || (inst_20915));
var state_21005__$1 = state_21005;
if(cljs.core.truth_(inst_20916)){
var statearr_21040_21093 = state_21005__$1;
(statearr_21040_21093[(1)] = (5));

} else {
var statearr_21041_21094 = state_21005__$1;
(statearr_21041_21094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (23))){
var inst_20964 = (state_21005[(14)]);
var inst_20970 = (inst_20964 == null);
var state_21005__$1 = state_21005;
if(cljs.core.truth_(inst_20970)){
var statearr_21042_21095 = state_21005__$1;
(statearr_21042_21095[(1)] = (26));

} else {
var statearr_21043_21096 = state_21005__$1;
(statearr_21043_21096[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (35))){
var inst_20990 = (state_21005[(2)]);
var state_21005__$1 = state_21005;
if(cljs.core.truth_(inst_20990)){
var statearr_21044_21097 = state_21005__$1;
(statearr_21044_21097[(1)] = (36));

} else {
var statearr_21045_21098 = state_21005__$1;
(statearr_21045_21098[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (19))){
var inst_20932 = (state_21005[(7)]);
var inst_20952 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20932);
var state_21005__$1 = state_21005;
var statearr_21046_21099 = state_21005__$1;
(statearr_21046_21099[(2)] = inst_20952);

(statearr_21046_21099[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (11))){
var inst_20932 = (state_21005[(7)]);
var inst_20936 = (inst_20932 == null);
var inst_20937 = cljs.core.not.call(null,inst_20936);
var state_21005__$1 = state_21005;
if(inst_20937){
var statearr_21047_21100 = state_21005__$1;
(statearr_21047_21100[(1)] = (13));

} else {
var statearr_21048_21101 = state_21005__$1;
(statearr_21048_21101[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (9))){
var inst_20907 = (state_21005[(8)]);
var state_21005__$1 = state_21005;
var statearr_21049_21102 = state_21005__$1;
(statearr_21049_21102[(2)] = inst_20907);

(statearr_21049_21102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (5))){
var state_21005__$1 = state_21005;
var statearr_21050_21103 = state_21005__$1;
(statearr_21050_21103[(2)] = true);

(statearr_21050_21103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (14))){
var state_21005__$1 = state_21005;
var statearr_21051_21104 = state_21005__$1;
(statearr_21051_21104[(2)] = false);

(statearr_21051_21104[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (26))){
var inst_20965 = (state_21005[(9)]);
var inst_20972 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20965);
var state_21005__$1 = state_21005;
var statearr_21052_21105 = state_21005__$1;
(statearr_21052_21105[(2)] = inst_20972);

(statearr_21052_21105[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (16))){
var state_21005__$1 = state_21005;
var statearr_21053_21106 = state_21005__$1;
(statearr_21053_21106[(2)] = true);

(statearr_21053_21106[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (38))){
var inst_20995 = (state_21005[(2)]);
var state_21005__$1 = state_21005;
var statearr_21054_21107 = state_21005__$1;
(statearr_21054_21107[(2)] = inst_20995);

(statearr_21054_21107[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (30))){
var inst_20965 = (state_21005[(9)]);
var inst_20957 = (state_21005[(13)]);
var inst_20956 = (state_21005[(10)]);
var inst_20982 = cljs.core.empty_QMARK_.call(null,inst_20956);
var inst_20983 = inst_20957.call(null,inst_20965);
var inst_20984 = cljs.core.not.call(null,inst_20983);
var inst_20985 = ((inst_20982) && (inst_20984));
var state_21005__$1 = state_21005;
var statearr_21055_21108 = state_21005__$1;
(statearr_21055_21108[(2)] = inst_20985);

(statearr_21055_21108[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (10))){
var inst_20907 = (state_21005[(8)]);
var inst_20928 = (state_21005[(2)]);
var inst_20929 = cljs.core.get.call(null,inst_20928,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20930 = cljs.core.get.call(null,inst_20928,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20931 = cljs.core.get.call(null,inst_20928,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20932 = inst_20907;
var state_21005__$1 = (function (){var statearr_21056 = state_21005;
(statearr_21056[(16)] = inst_20930);

(statearr_21056[(17)] = inst_20929);

(statearr_21056[(18)] = inst_20931);

(statearr_21056[(7)] = inst_20932);

return statearr_21056;
})();
var statearr_21057_21109 = state_21005__$1;
(statearr_21057_21109[(2)] = null);

(statearr_21057_21109[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (18))){
var inst_20947 = (state_21005[(2)]);
var state_21005__$1 = state_21005;
var statearr_21058_21110 = state_21005__$1;
(statearr_21058_21110[(2)] = inst_20947);

(statearr_21058_21110[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (37))){
var state_21005__$1 = state_21005;
var statearr_21059_21111 = state_21005__$1;
(statearr_21059_21111[(2)] = null);

(statearr_21059_21111[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21006 === (8))){
var inst_20907 = (state_21005[(8)]);
var inst_20925 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20907);
var state_21005__$1 = state_21005;
var statearr_21060_21112 = state_21005__$1;
(statearr_21060_21112[(2)] = inst_20925);

(statearr_21060_21112[(1)] = (10));


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
});})(c__18074__auto___21066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__17949__auto__,c__18074__auto___21066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__17950__auto__ = null;
var cljs$core$async$mix_$_state_machine__17950__auto____0 = (function (){
var statearr_21061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21061[(0)] = cljs$core$async$mix_$_state_machine__17950__auto__);

(statearr_21061[(1)] = (1));

return statearr_21061;
});
var cljs$core$async$mix_$_state_machine__17950__auto____1 = (function (state_21005){
while(true){
var ret_value__17951__auto__ = (function (){try{while(true){
var result__17952__auto__ = switch__17949__auto__.call(null,state_21005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17952__auto__;
}
break;
}
}catch (e21062){var ex__17953__auto__ = e21062;
var statearr_21063_21113 = state_21005;
(statearr_21063_21113[(2)] = ex__17953__auto__);


if(cljs.core.seq.call(null,(state_21005[(4)]))){
var statearr_21064_21114 = state_21005;
(statearr_21064_21114[(1)] = cljs.core.first.call(null,(state_21005[(4)])));

} else {
throw ex__17953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21115 = state_21005;
state_21005 = G__21115;
continue;
} else {
return ret_value__17951__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17950__auto__ = function(state_21005){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17950__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17950__auto____1.call(this,state_21005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17950__auto____0;
cljs$core$async$mix_$_state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17950__auto____1;
return cljs$core$async$mix_$_state_machine__17950__auto__;
})()
;})(switch__17949__auto__,c__18074__auto___21066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18076__auto__ = (function (){var statearr_21065 = f__18075__auto__.call(null);
(statearr_21065[(6)] = c__18074__auto___21066);

return statearr_21065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18076__auto__);
});})(c__18074__auto___21066,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__21117 = arguments.length;
switch (G__21117) {
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
var G__21121 = arguments.length;
switch (G__21121) {
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
return (function (p1__21119_SHARP_){
if(cljs.core.truth_(p1__21119_SHARP_.call(null,topic))){
return p1__21119_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21119_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21122 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21122 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21123){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21123 = meta21123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21124,meta21123__$1){
var self__ = this;
var _21124__$1 = this;
return (new cljs.core.async.t_cljs$core$async21122(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21123__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21122.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21124){
var self__ = this;
var _21124__$1 = this;
return self__.meta21123;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21122.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21122.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21122.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21122.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21122.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async21122.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21122.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21122.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21123","meta21123",-403585273,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21122.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21122";

cljs.core.async.t_cljs$core$async21122.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async21122");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21122.
 */
cljs.core.async.__GT_t_cljs$core$async21122 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21122(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21123){
return (new cljs.core.async.t_cljs$core$async21122(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21123));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21122(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18074__auto___21243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18074__auto___21243,mults,ensure_mult,p){
return (function (){
var f__18075__auto__ = (function (){var switch__17949__auto__ = ((function (c__18074__auto___21243,mults,ensure_mult,p){
return (function (state_21196){
var state_val_21197 = (state_21196[(1)]);
if((state_val_21197 === (7))){
var inst_21192 = (state_21196[(2)]);
var state_21196__$1 = state_21196;
var statearr_21198_21244 = state_21196__$1;
(statearr_21198_21244[(2)] = inst_21192);

(statearr_21198_21244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (20))){
var state_21196__$1 = state_21196;
var statearr_21199_21245 = state_21196__$1;
(statearr_21199_21245[(2)] = null);

(statearr_21199_21245[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (1))){
var state_21196__$1 = state_21196;
var statearr_21200_21246 = state_21196__$1;
(statearr_21200_21246[(2)] = null);

(statearr_21200_21246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (24))){
var inst_21175 = (state_21196[(7)]);
var inst_21184 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21175);
var state_21196__$1 = state_21196;
var statearr_21201_21247 = state_21196__$1;
(statearr_21201_21247[(2)] = inst_21184);

(statearr_21201_21247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (4))){
var inst_21127 = (state_21196[(8)]);
var inst_21127__$1 = (state_21196[(2)]);
var inst_21128 = (inst_21127__$1 == null);
var state_21196__$1 = (function (){var statearr_21202 = state_21196;
(statearr_21202[(8)] = inst_21127__$1);

return statearr_21202;
})();
if(cljs.core.truth_(inst_21128)){
var statearr_21203_21248 = state_21196__$1;
(statearr_21203_21248[(1)] = (5));

} else {
var statearr_21204_21249 = state_21196__$1;
(statearr_21204_21249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (15))){
var inst_21169 = (state_21196[(2)]);
var state_21196__$1 = state_21196;
var statearr_21205_21250 = state_21196__$1;
(statearr_21205_21250[(2)] = inst_21169);

(statearr_21205_21250[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (21))){
var inst_21189 = (state_21196[(2)]);
var state_21196__$1 = (function (){var statearr_21206 = state_21196;
(statearr_21206[(9)] = inst_21189);

return statearr_21206;
})();
var statearr_21207_21251 = state_21196__$1;
(statearr_21207_21251[(2)] = null);

(statearr_21207_21251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (13))){
var inst_21151 = (state_21196[(10)]);
var inst_21153 = cljs.core.chunked_seq_QMARK_.call(null,inst_21151);
var state_21196__$1 = state_21196;
if(inst_21153){
var statearr_21208_21252 = state_21196__$1;
(statearr_21208_21252[(1)] = (16));

} else {
var statearr_21209_21253 = state_21196__$1;
(statearr_21209_21253[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (22))){
var inst_21181 = (state_21196[(2)]);
var state_21196__$1 = state_21196;
if(cljs.core.truth_(inst_21181)){
var statearr_21210_21254 = state_21196__$1;
(statearr_21210_21254[(1)] = (23));

} else {
var statearr_21211_21255 = state_21196__$1;
(statearr_21211_21255[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (6))){
var inst_21177 = (state_21196[(11)]);
var inst_21127 = (state_21196[(8)]);
var inst_21175 = (state_21196[(7)]);
var inst_21175__$1 = topic_fn.call(null,inst_21127);
var inst_21176 = cljs.core.deref.call(null,mults);
var inst_21177__$1 = cljs.core.get.call(null,inst_21176,inst_21175__$1);
var state_21196__$1 = (function (){var statearr_21212 = state_21196;
(statearr_21212[(11)] = inst_21177__$1);

(statearr_21212[(7)] = inst_21175__$1);

return statearr_21212;
})();
if(cljs.core.truth_(inst_21177__$1)){
var statearr_21213_21256 = state_21196__$1;
(statearr_21213_21256[(1)] = (19));

} else {
var statearr_21214_21257 = state_21196__$1;
(statearr_21214_21257[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (25))){
var inst_21186 = (state_21196[(2)]);
var state_21196__$1 = state_21196;
var statearr_21215_21258 = state_21196__$1;
(statearr_21215_21258[(2)] = inst_21186);

(statearr_21215_21258[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (17))){
var inst_21151 = (state_21196[(10)]);
var inst_21160 = cljs.core.first.call(null,inst_21151);
var inst_21161 = cljs.core.async.muxch_STAR_.call(null,inst_21160);
var inst_21162 = cljs.core.async.close_BANG_.call(null,inst_21161);
var inst_21163 = cljs.core.next.call(null,inst_21151);
var inst_21137 = inst_21163;
var inst_21138 = null;
var inst_21139 = (0);
var inst_21140 = (0);
var state_21196__$1 = (function (){var statearr_21216 = state_21196;
(statearr_21216[(12)] = inst_21139);

(statearr_21216[(13)] = inst_21138);

(statearr_21216[(14)] = inst_21137);

(statearr_21216[(15)] = inst_21162);

(statearr_21216[(16)] = inst_21140);

return statearr_21216;
})();
var statearr_21217_21259 = state_21196__$1;
(statearr_21217_21259[(2)] = null);

(statearr_21217_21259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (3))){
var inst_21194 = (state_21196[(2)]);
var state_21196__$1 = state_21196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21196__$1,inst_21194);
} else {
if((state_val_21197 === (12))){
var inst_21171 = (state_21196[(2)]);
var state_21196__$1 = state_21196;
var statearr_21218_21260 = state_21196__$1;
(statearr_21218_21260[(2)] = inst_21171);

(statearr_21218_21260[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (2))){
var state_21196__$1 = state_21196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21196__$1,(4),ch);
} else {
if((state_val_21197 === (23))){
var state_21196__$1 = state_21196;
var statearr_21219_21261 = state_21196__$1;
(statearr_21219_21261[(2)] = null);

(statearr_21219_21261[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (19))){
var inst_21177 = (state_21196[(11)]);
var inst_21127 = (state_21196[(8)]);
var inst_21179 = cljs.core.async.muxch_STAR_.call(null,inst_21177);
var state_21196__$1 = state_21196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21196__$1,(22),inst_21179,inst_21127);
} else {
if((state_val_21197 === (11))){
var inst_21137 = (state_21196[(14)]);
var inst_21151 = (state_21196[(10)]);
var inst_21151__$1 = cljs.core.seq.call(null,inst_21137);
var state_21196__$1 = (function (){var statearr_21220 = state_21196;
(statearr_21220[(10)] = inst_21151__$1);

return statearr_21220;
})();
if(inst_21151__$1){
var statearr_21221_21262 = state_21196__$1;
(statearr_21221_21262[(1)] = (13));

} else {
var statearr_21222_21263 = state_21196__$1;
(statearr_21222_21263[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (9))){
var inst_21173 = (state_21196[(2)]);
var state_21196__$1 = state_21196;
var statearr_21223_21264 = state_21196__$1;
(statearr_21223_21264[(2)] = inst_21173);

(statearr_21223_21264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (5))){
var inst_21134 = cljs.core.deref.call(null,mults);
var inst_21135 = cljs.core.vals.call(null,inst_21134);
var inst_21136 = cljs.core.seq.call(null,inst_21135);
var inst_21137 = inst_21136;
var inst_21138 = null;
var inst_21139 = (0);
var inst_21140 = (0);
var state_21196__$1 = (function (){var statearr_21224 = state_21196;
(statearr_21224[(12)] = inst_21139);

(statearr_21224[(13)] = inst_21138);

(statearr_21224[(14)] = inst_21137);

(statearr_21224[(16)] = inst_21140);

return statearr_21224;
})();
var statearr_21225_21265 = state_21196__$1;
(statearr_21225_21265[(2)] = null);

(statearr_21225_21265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (14))){
var state_21196__$1 = state_21196;
var statearr_21229_21266 = state_21196__$1;
(statearr_21229_21266[(2)] = null);

(statearr_21229_21266[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (16))){
var inst_21151 = (state_21196[(10)]);
var inst_21155 = cljs.core.chunk_first.call(null,inst_21151);
var inst_21156 = cljs.core.chunk_rest.call(null,inst_21151);
var inst_21157 = cljs.core.count.call(null,inst_21155);
var inst_21137 = inst_21156;
var inst_21138 = inst_21155;
var inst_21139 = inst_21157;
var inst_21140 = (0);
var state_21196__$1 = (function (){var statearr_21230 = state_21196;
(statearr_21230[(12)] = inst_21139);

(statearr_21230[(13)] = inst_21138);

(statearr_21230[(14)] = inst_21137);

(statearr_21230[(16)] = inst_21140);

return statearr_21230;
})();
var statearr_21231_21267 = state_21196__$1;
(statearr_21231_21267[(2)] = null);

(statearr_21231_21267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (10))){
var inst_21139 = (state_21196[(12)]);
var inst_21138 = (state_21196[(13)]);
var inst_21137 = (state_21196[(14)]);
var inst_21140 = (state_21196[(16)]);
var inst_21145 = cljs.core._nth.call(null,inst_21138,inst_21140);
var inst_21146 = cljs.core.async.muxch_STAR_.call(null,inst_21145);
var inst_21147 = cljs.core.async.close_BANG_.call(null,inst_21146);
var inst_21148 = (inst_21140 + (1));
var tmp21226 = inst_21139;
var tmp21227 = inst_21138;
var tmp21228 = inst_21137;
var inst_21137__$1 = tmp21228;
var inst_21138__$1 = tmp21227;
var inst_21139__$1 = tmp21226;
var inst_21140__$1 = inst_21148;
var state_21196__$1 = (function (){var statearr_21232 = state_21196;
(statearr_21232[(12)] = inst_21139__$1);

(statearr_21232[(13)] = inst_21138__$1);

(statearr_21232[(14)] = inst_21137__$1);

(statearr_21232[(16)] = inst_21140__$1);

(statearr_21232[(17)] = inst_21147);

return statearr_21232;
})();
var statearr_21233_21268 = state_21196__$1;
(statearr_21233_21268[(2)] = null);

(statearr_21233_21268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (18))){
var inst_21166 = (state_21196[(2)]);
var state_21196__$1 = state_21196;
var statearr_21234_21269 = state_21196__$1;
(statearr_21234_21269[(2)] = inst_21166);

(statearr_21234_21269[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21197 === (8))){
var inst_21139 = (state_21196[(12)]);
var inst_21140 = (state_21196[(16)]);
var inst_21142 = (inst_21140 < inst_21139);
var inst_21143 = inst_21142;
var state_21196__$1 = state_21196;
if(cljs.core.truth_(inst_21143)){
var statearr_21235_21270 = state_21196__$1;
(statearr_21235_21270[(1)] = (10));

} else {
var statearr_21236_21271 = state_21196__$1;
(statearr_21236_21271[(1)] = (11));

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
});})(c__18074__auto___21243,mults,ensure_mult,p))
;
return ((function (switch__17949__auto__,c__18074__auto___21243,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__17950__auto__ = null;
var cljs$core$async$state_machine__17950__auto____0 = (function (){
var statearr_21237 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21237[(0)] = cljs$core$async$state_machine__17950__auto__);

(statearr_21237[(1)] = (1));

return statearr_21237;
});
var cljs$core$async$state_machine__17950__auto____1 = (function (state_21196){
while(true){
var ret_value__17951__auto__ = (function (){try{while(true){
var result__17952__auto__ = switch__17949__auto__.call(null,state_21196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17952__auto__;
}
break;
}
}catch (e21238){var ex__17953__auto__ = e21238;
var statearr_21239_21272 = state_21196;
(statearr_21239_21272[(2)] = ex__17953__auto__);


if(cljs.core.seq.call(null,(state_21196[(4)]))){
var statearr_21240_21273 = state_21196;
(statearr_21240_21273[(1)] = cljs.core.first.call(null,(state_21196[(4)])));

} else {
throw ex__17953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21274 = state_21196;
state_21196 = G__21274;
continue;
} else {
return ret_value__17951__auto__;
}
break;
}
});
cljs$core$async$state_machine__17950__auto__ = function(state_21196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17950__auto____1.call(this,state_21196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17950__auto____0;
cljs$core$async$state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17950__auto____1;
return cljs$core$async$state_machine__17950__auto__;
})()
;})(switch__17949__auto__,c__18074__auto___21243,mults,ensure_mult,p))
})();
var state__18076__auto__ = (function (){var statearr_21241 = f__18075__auto__.call(null);
(statearr_21241[(6)] = c__18074__auto___21243);

return statearr_21241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18076__auto__);
});})(c__18074__auto___21243,mults,ensure_mult,p))
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
var G__21276 = arguments.length;
switch (G__21276) {
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
var G__21279 = arguments.length;
switch (G__21279) {
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
var G__21282 = arguments.length;
switch (G__21282) {
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
var c__18074__auto___21360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18074__auto___21360,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18075__auto__ = (function (){var switch__17949__auto__ = ((function (c__18074__auto___21360,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21325){
var state_val_21326 = (state_21325[(1)]);
if((state_val_21326 === (7))){
var state_21325__$1 = state_21325;
var statearr_21327_21361 = state_21325__$1;
(statearr_21327_21361[(2)] = null);

(statearr_21327_21361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21326 === (1))){
var state_21325__$1 = state_21325;
var statearr_21328_21362 = state_21325__$1;
(statearr_21328_21362[(2)] = null);

(statearr_21328_21362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21326 === (4))){
var inst_21286 = (state_21325[(7)]);
var inst_21285 = (state_21325[(8)]);
var inst_21288 = (inst_21286 < inst_21285);
var state_21325__$1 = state_21325;
if(cljs.core.truth_(inst_21288)){
var statearr_21329_21363 = state_21325__$1;
(statearr_21329_21363[(1)] = (6));

} else {
var statearr_21330_21364 = state_21325__$1;
(statearr_21330_21364[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21326 === (15))){
var inst_21311 = (state_21325[(9)]);
var inst_21316 = cljs.core.apply.call(null,f,inst_21311);
var state_21325__$1 = state_21325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21325__$1,(17),out,inst_21316);
} else {
if((state_val_21326 === (13))){
var inst_21311 = (state_21325[(9)]);
var inst_21311__$1 = (state_21325[(2)]);
var inst_21312 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21311__$1);
var state_21325__$1 = (function (){var statearr_21331 = state_21325;
(statearr_21331[(9)] = inst_21311__$1);

return statearr_21331;
})();
if(cljs.core.truth_(inst_21312)){
var statearr_21332_21365 = state_21325__$1;
(statearr_21332_21365[(1)] = (14));

} else {
var statearr_21333_21366 = state_21325__$1;
(statearr_21333_21366[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21326 === (6))){
var state_21325__$1 = state_21325;
var statearr_21334_21367 = state_21325__$1;
(statearr_21334_21367[(2)] = null);

(statearr_21334_21367[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21326 === (17))){
var inst_21318 = (state_21325[(2)]);
var state_21325__$1 = (function (){var statearr_21336 = state_21325;
(statearr_21336[(10)] = inst_21318);

return statearr_21336;
})();
var statearr_21337_21368 = state_21325__$1;
(statearr_21337_21368[(2)] = null);

(statearr_21337_21368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21326 === (3))){
var inst_21323 = (state_21325[(2)]);
var state_21325__$1 = state_21325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21325__$1,inst_21323);
} else {
if((state_val_21326 === (12))){
var _ = (function (){var statearr_21338 = state_21325;
(statearr_21338[(4)] = cljs.core.rest.call(null,(state_21325[(4)])));

return statearr_21338;
})();
var state_21325__$1 = state_21325;
var ex21335 = (state_21325__$1[(2)]);
var statearr_21339_21369 = state_21325__$1;
(statearr_21339_21369[(5)] = ex21335);


if((ex21335 instanceof Object)){
var statearr_21340_21370 = state_21325__$1;
(statearr_21340_21370[(1)] = (11));

(statearr_21340_21370[(5)] = null);

} else {
throw ex21335;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21326 === (2))){
var inst_21284 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21285 = cnt;
var inst_21286 = (0);
var state_21325__$1 = (function (){var statearr_21341 = state_21325;
(statearr_21341[(11)] = inst_21284);

(statearr_21341[(7)] = inst_21286);

(statearr_21341[(8)] = inst_21285);

return statearr_21341;
})();
var statearr_21342_21371 = state_21325__$1;
(statearr_21342_21371[(2)] = null);

(statearr_21342_21371[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21326 === (11))){
var inst_21290 = (state_21325[(2)]);
var inst_21291 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21325__$1 = (function (){var statearr_21343 = state_21325;
(statearr_21343[(12)] = inst_21290);

return statearr_21343;
})();
var statearr_21344_21372 = state_21325__$1;
(statearr_21344_21372[(2)] = inst_21291);

(statearr_21344_21372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21326 === (9))){
var inst_21286 = (state_21325[(7)]);
var _ = (function (){var statearr_21345 = state_21325;
(statearr_21345[(4)] = cljs.core.cons.call(null,(12),(state_21325[(4)])));

return statearr_21345;
})();
var inst_21297 = chs__$1.call(null,inst_21286);
var inst_21298 = done.call(null,inst_21286);
var inst_21299 = cljs.core.async.take_BANG_.call(null,inst_21297,inst_21298);
var ___$1 = (function (){var statearr_21346 = state_21325;
(statearr_21346[(4)] = cljs.core.rest.call(null,(state_21325[(4)])));

return statearr_21346;
})();
var state_21325__$1 = state_21325;
var statearr_21347_21373 = state_21325__$1;
(statearr_21347_21373[(2)] = inst_21299);

(statearr_21347_21373[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21326 === (5))){
var inst_21309 = (state_21325[(2)]);
var state_21325__$1 = (function (){var statearr_21348 = state_21325;
(statearr_21348[(13)] = inst_21309);

return statearr_21348;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21325__$1,(13),dchan);
} else {
if((state_val_21326 === (14))){
var inst_21314 = cljs.core.async.close_BANG_.call(null,out);
var state_21325__$1 = state_21325;
var statearr_21349_21374 = state_21325__$1;
(statearr_21349_21374[(2)] = inst_21314);

(statearr_21349_21374[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21326 === (16))){
var inst_21321 = (state_21325[(2)]);
var state_21325__$1 = state_21325;
var statearr_21350_21375 = state_21325__$1;
(statearr_21350_21375[(2)] = inst_21321);

(statearr_21350_21375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21326 === (10))){
var inst_21286 = (state_21325[(7)]);
var inst_21302 = (state_21325[(2)]);
var inst_21303 = (inst_21286 + (1));
var inst_21286__$1 = inst_21303;
var state_21325__$1 = (function (){var statearr_21351 = state_21325;
(statearr_21351[(14)] = inst_21302);

(statearr_21351[(7)] = inst_21286__$1);

return statearr_21351;
})();
var statearr_21352_21376 = state_21325__$1;
(statearr_21352_21376[(2)] = null);

(statearr_21352_21376[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21326 === (8))){
var inst_21307 = (state_21325[(2)]);
var state_21325__$1 = state_21325;
var statearr_21353_21377 = state_21325__$1;
(statearr_21353_21377[(2)] = inst_21307);

(statearr_21353_21377[(1)] = (5));


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
});})(c__18074__auto___21360,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__17949__auto__,c__18074__auto___21360,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__17950__auto__ = null;
var cljs$core$async$state_machine__17950__auto____0 = (function (){
var statearr_21354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21354[(0)] = cljs$core$async$state_machine__17950__auto__);

(statearr_21354[(1)] = (1));

return statearr_21354;
});
var cljs$core$async$state_machine__17950__auto____1 = (function (state_21325){
while(true){
var ret_value__17951__auto__ = (function (){try{while(true){
var result__17952__auto__ = switch__17949__auto__.call(null,state_21325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17952__auto__;
}
break;
}
}catch (e21355){var ex__17953__auto__ = e21355;
var statearr_21356_21378 = state_21325;
(statearr_21356_21378[(2)] = ex__17953__auto__);


if(cljs.core.seq.call(null,(state_21325[(4)]))){
var statearr_21357_21379 = state_21325;
(statearr_21357_21379[(1)] = cljs.core.first.call(null,(state_21325[(4)])));

} else {
throw ex__17953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21380 = state_21325;
state_21325 = G__21380;
continue;
} else {
return ret_value__17951__auto__;
}
break;
}
});
cljs$core$async$state_machine__17950__auto__ = function(state_21325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17950__auto____1.call(this,state_21325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17950__auto____0;
cljs$core$async$state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17950__auto____1;
return cljs$core$async$state_machine__17950__auto__;
})()
;})(switch__17949__auto__,c__18074__auto___21360,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18076__auto__ = (function (){var statearr_21358 = f__18075__auto__.call(null);
(statearr_21358[(6)] = c__18074__auto___21360);

return statearr_21358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18076__auto__);
});})(c__18074__auto___21360,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__21383 = arguments.length;
switch (G__21383) {
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
var c__18074__auto___21438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18074__auto___21438,out){
return (function (){
var f__18075__auto__ = (function (){var switch__17949__auto__ = ((function (c__18074__auto___21438,out){
return (function (state_21415){
var state_val_21416 = (state_21415[(1)]);
if((state_val_21416 === (7))){
var inst_21395 = (state_21415[(7)]);
var inst_21394 = (state_21415[(8)]);
var inst_21394__$1 = (state_21415[(2)]);
var inst_21395__$1 = cljs.core.nth.call(null,inst_21394__$1,(0),null);
var inst_21396 = cljs.core.nth.call(null,inst_21394__$1,(1),null);
var inst_21397 = (inst_21395__$1 == null);
var state_21415__$1 = (function (){var statearr_21417 = state_21415;
(statearr_21417[(7)] = inst_21395__$1);

(statearr_21417[(8)] = inst_21394__$1);

(statearr_21417[(9)] = inst_21396);

return statearr_21417;
})();
if(cljs.core.truth_(inst_21397)){
var statearr_21418_21439 = state_21415__$1;
(statearr_21418_21439[(1)] = (8));

} else {
var statearr_21419_21440 = state_21415__$1;
(statearr_21419_21440[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21416 === (1))){
var inst_21384 = cljs.core.vec.call(null,chs);
var inst_21385 = inst_21384;
var state_21415__$1 = (function (){var statearr_21420 = state_21415;
(statearr_21420[(10)] = inst_21385);

return statearr_21420;
})();
var statearr_21421_21441 = state_21415__$1;
(statearr_21421_21441[(2)] = null);

(statearr_21421_21441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21416 === (4))){
var inst_21385 = (state_21415[(10)]);
var state_21415__$1 = state_21415;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21415__$1,(7),inst_21385);
} else {
if((state_val_21416 === (6))){
var inst_21411 = (state_21415[(2)]);
var state_21415__$1 = state_21415;
var statearr_21422_21442 = state_21415__$1;
(statearr_21422_21442[(2)] = inst_21411);

(statearr_21422_21442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21416 === (3))){
var inst_21413 = (state_21415[(2)]);
var state_21415__$1 = state_21415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21415__$1,inst_21413);
} else {
if((state_val_21416 === (2))){
var inst_21385 = (state_21415[(10)]);
var inst_21387 = cljs.core.count.call(null,inst_21385);
var inst_21388 = (inst_21387 > (0));
var state_21415__$1 = state_21415;
if(cljs.core.truth_(inst_21388)){
var statearr_21424_21443 = state_21415__$1;
(statearr_21424_21443[(1)] = (4));

} else {
var statearr_21425_21444 = state_21415__$1;
(statearr_21425_21444[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21416 === (11))){
var inst_21385 = (state_21415[(10)]);
var inst_21404 = (state_21415[(2)]);
var tmp21423 = inst_21385;
var inst_21385__$1 = tmp21423;
var state_21415__$1 = (function (){var statearr_21426 = state_21415;
(statearr_21426[(10)] = inst_21385__$1);

(statearr_21426[(11)] = inst_21404);

return statearr_21426;
})();
var statearr_21427_21445 = state_21415__$1;
(statearr_21427_21445[(2)] = null);

(statearr_21427_21445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21416 === (9))){
var inst_21395 = (state_21415[(7)]);
var state_21415__$1 = state_21415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21415__$1,(11),out,inst_21395);
} else {
if((state_val_21416 === (5))){
var inst_21409 = cljs.core.async.close_BANG_.call(null,out);
var state_21415__$1 = state_21415;
var statearr_21428_21446 = state_21415__$1;
(statearr_21428_21446[(2)] = inst_21409);

(statearr_21428_21446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21416 === (10))){
var inst_21407 = (state_21415[(2)]);
var state_21415__$1 = state_21415;
var statearr_21429_21447 = state_21415__$1;
(statearr_21429_21447[(2)] = inst_21407);

(statearr_21429_21447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21416 === (8))){
var inst_21385 = (state_21415[(10)]);
var inst_21395 = (state_21415[(7)]);
var inst_21394 = (state_21415[(8)]);
var inst_21396 = (state_21415[(9)]);
var inst_21399 = (function (){var cs = inst_21385;
var vec__21390 = inst_21394;
var v = inst_21395;
var c = inst_21396;
return ((function (cs,vec__21390,v,c,inst_21385,inst_21395,inst_21394,inst_21396,state_val_21416,c__18074__auto___21438,out){
return (function (p1__21381_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21381_SHARP_);
});
;})(cs,vec__21390,v,c,inst_21385,inst_21395,inst_21394,inst_21396,state_val_21416,c__18074__auto___21438,out))
})();
var inst_21400 = cljs.core.filterv.call(null,inst_21399,inst_21385);
var inst_21385__$1 = inst_21400;
var state_21415__$1 = (function (){var statearr_21430 = state_21415;
(statearr_21430[(10)] = inst_21385__$1);

return statearr_21430;
})();
var statearr_21431_21448 = state_21415__$1;
(statearr_21431_21448[(2)] = null);

(statearr_21431_21448[(1)] = (2));


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
});})(c__18074__auto___21438,out))
;
return ((function (switch__17949__auto__,c__18074__auto___21438,out){
return (function() {
var cljs$core$async$state_machine__17950__auto__ = null;
var cljs$core$async$state_machine__17950__auto____0 = (function (){
var statearr_21432 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21432[(0)] = cljs$core$async$state_machine__17950__auto__);

(statearr_21432[(1)] = (1));

return statearr_21432;
});
var cljs$core$async$state_machine__17950__auto____1 = (function (state_21415){
while(true){
var ret_value__17951__auto__ = (function (){try{while(true){
var result__17952__auto__ = switch__17949__auto__.call(null,state_21415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17952__auto__;
}
break;
}
}catch (e21433){var ex__17953__auto__ = e21433;
var statearr_21434_21449 = state_21415;
(statearr_21434_21449[(2)] = ex__17953__auto__);


if(cljs.core.seq.call(null,(state_21415[(4)]))){
var statearr_21435_21450 = state_21415;
(statearr_21435_21450[(1)] = cljs.core.first.call(null,(state_21415[(4)])));

} else {
throw ex__17953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21451 = state_21415;
state_21415 = G__21451;
continue;
} else {
return ret_value__17951__auto__;
}
break;
}
});
cljs$core$async$state_machine__17950__auto__ = function(state_21415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17950__auto____1.call(this,state_21415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17950__auto____0;
cljs$core$async$state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17950__auto____1;
return cljs$core$async$state_machine__17950__auto__;
})()
;})(switch__17949__auto__,c__18074__auto___21438,out))
})();
var state__18076__auto__ = (function (){var statearr_21436 = f__18075__auto__.call(null);
(statearr_21436[(6)] = c__18074__auto___21438);

return statearr_21436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18076__auto__);
});})(c__18074__auto___21438,out))
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
var G__21453 = arguments.length;
switch (G__21453) {
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
var c__18074__auto___21499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18074__auto___21499,out){
return (function (){
var f__18075__auto__ = (function (){var switch__17949__auto__ = ((function (c__18074__auto___21499,out){
return (function (state_21477){
var state_val_21478 = (state_21477[(1)]);
if((state_val_21478 === (7))){
var inst_21459 = (state_21477[(7)]);
var inst_21459__$1 = (state_21477[(2)]);
var inst_21460 = (inst_21459__$1 == null);
var inst_21461 = cljs.core.not.call(null,inst_21460);
var state_21477__$1 = (function (){var statearr_21479 = state_21477;
(statearr_21479[(7)] = inst_21459__$1);

return statearr_21479;
})();
if(inst_21461){
var statearr_21480_21500 = state_21477__$1;
(statearr_21480_21500[(1)] = (8));

} else {
var statearr_21481_21501 = state_21477__$1;
(statearr_21481_21501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21478 === (1))){
var inst_21454 = (0);
var state_21477__$1 = (function (){var statearr_21482 = state_21477;
(statearr_21482[(8)] = inst_21454);

return statearr_21482;
})();
var statearr_21483_21502 = state_21477__$1;
(statearr_21483_21502[(2)] = null);

(statearr_21483_21502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21478 === (4))){
var state_21477__$1 = state_21477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21477__$1,(7),ch);
} else {
if((state_val_21478 === (6))){
var inst_21472 = (state_21477[(2)]);
var state_21477__$1 = state_21477;
var statearr_21484_21503 = state_21477__$1;
(statearr_21484_21503[(2)] = inst_21472);

(statearr_21484_21503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21478 === (3))){
var inst_21474 = (state_21477[(2)]);
var inst_21475 = cljs.core.async.close_BANG_.call(null,out);
var state_21477__$1 = (function (){var statearr_21485 = state_21477;
(statearr_21485[(9)] = inst_21474);

return statearr_21485;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21477__$1,inst_21475);
} else {
if((state_val_21478 === (2))){
var inst_21454 = (state_21477[(8)]);
var inst_21456 = (inst_21454 < n);
var state_21477__$1 = state_21477;
if(cljs.core.truth_(inst_21456)){
var statearr_21486_21504 = state_21477__$1;
(statearr_21486_21504[(1)] = (4));

} else {
var statearr_21487_21505 = state_21477__$1;
(statearr_21487_21505[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21478 === (11))){
var inst_21454 = (state_21477[(8)]);
var inst_21464 = (state_21477[(2)]);
var inst_21465 = (inst_21454 + (1));
var inst_21454__$1 = inst_21465;
var state_21477__$1 = (function (){var statearr_21488 = state_21477;
(statearr_21488[(8)] = inst_21454__$1);

(statearr_21488[(10)] = inst_21464);

return statearr_21488;
})();
var statearr_21489_21506 = state_21477__$1;
(statearr_21489_21506[(2)] = null);

(statearr_21489_21506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21478 === (9))){
var state_21477__$1 = state_21477;
var statearr_21490_21507 = state_21477__$1;
(statearr_21490_21507[(2)] = null);

(statearr_21490_21507[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21478 === (5))){
var state_21477__$1 = state_21477;
var statearr_21491_21508 = state_21477__$1;
(statearr_21491_21508[(2)] = null);

(statearr_21491_21508[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21478 === (10))){
var inst_21469 = (state_21477[(2)]);
var state_21477__$1 = state_21477;
var statearr_21492_21509 = state_21477__$1;
(statearr_21492_21509[(2)] = inst_21469);

(statearr_21492_21509[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21478 === (8))){
var inst_21459 = (state_21477[(7)]);
var state_21477__$1 = state_21477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21477__$1,(11),out,inst_21459);
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
});})(c__18074__auto___21499,out))
;
return ((function (switch__17949__auto__,c__18074__auto___21499,out){
return (function() {
var cljs$core$async$state_machine__17950__auto__ = null;
var cljs$core$async$state_machine__17950__auto____0 = (function (){
var statearr_21493 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21493[(0)] = cljs$core$async$state_machine__17950__auto__);

(statearr_21493[(1)] = (1));

return statearr_21493;
});
var cljs$core$async$state_machine__17950__auto____1 = (function (state_21477){
while(true){
var ret_value__17951__auto__ = (function (){try{while(true){
var result__17952__auto__ = switch__17949__auto__.call(null,state_21477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17952__auto__;
}
break;
}
}catch (e21494){var ex__17953__auto__ = e21494;
var statearr_21495_21510 = state_21477;
(statearr_21495_21510[(2)] = ex__17953__auto__);


if(cljs.core.seq.call(null,(state_21477[(4)]))){
var statearr_21496_21511 = state_21477;
(statearr_21496_21511[(1)] = cljs.core.first.call(null,(state_21477[(4)])));

} else {
throw ex__17953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21512 = state_21477;
state_21477 = G__21512;
continue;
} else {
return ret_value__17951__auto__;
}
break;
}
});
cljs$core$async$state_machine__17950__auto__ = function(state_21477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17950__auto____1.call(this,state_21477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17950__auto____0;
cljs$core$async$state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17950__auto____1;
return cljs$core$async$state_machine__17950__auto__;
})()
;})(switch__17949__auto__,c__18074__auto___21499,out))
})();
var state__18076__auto__ = (function (){var statearr_21497 = f__18075__auto__.call(null);
(statearr_21497[(6)] = c__18074__auto___21499);

return statearr_21497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18076__auto__);
});})(c__18074__auto___21499,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21514 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21514 = (function (f,ch,meta21515){
this.f = f;
this.ch = ch;
this.meta21515 = meta21515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21516,meta21515__$1){
var self__ = this;
var _21516__$1 = this;
return (new cljs.core.async.t_cljs$core$async21514(self__.f,self__.ch,meta21515__$1));
});

cljs.core.async.t_cljs$core$async21514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21516){
var self__ = this;
var _21516__$1 = this;
return self__.meta21515;
});

cljs.core.async.t_cljs$core$async21514.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21514.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21514.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21514.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21514.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21517 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21517 = (function (f,ch,meta21515,_,fn1,meta21518){
this.f = f;
this.ch = ch;
this.meta21515 = meta21515;
this._ = _;
this.fn1 = fn1;
this.meta21518 = meta21518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21519,meta21518__$1){
var self__ = this;
var _21519__$1 = this;
return (new cljs.core.async.t_cljs$core$async21517(self__.f,self__.ch,self__.meta21515,self__._,self__.fn1,meta21518__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21517.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21519){
var self__ = this;
var _21519__$1 = this;
return self__.meta21518;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21517.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21517.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21517.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21517.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21513_SHARP_){
return f1.call(null,(((p1__21513_SHARP_ == null))?null:self__.f.call(null,p1__21513_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21517.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21515","meta21515",-1745718228,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21514","cljs.core.async/t_cljs$core$async21514",360589052,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21518","meta21518",-823866874,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21517.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21517.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21517";

cljs.core.async.t_cljs$core$async21517.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async21517");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21517.
 */
cljs.core.async.__GT_t_cljs$core$async21517 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21517(f__$1,ch__$1,meta21515__$1,___$2,fn1__$1,meta21518){
return (new cljs.core.async.t_cljs$core$async21517(f__$1,ch__$1,meta21515__$1,___$2,fn1__$1,meta21518));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21517(self__.f,self__.ch,self__.meta21515,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async21514.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21514.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21514.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21515","meta21515",-1745718228,null)], null);
});

cljs.core.async.t_cljs$core$async21514.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21514.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21514";

cljs.core.async.t_cljs$core$async21514.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async21514");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21514.
 */
cljs.core.async.__GT_t_cljs$core$async21514 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21514(f__$1,ch__$1,meta21515){
return (new cljs.core.async.t_cljs$core$async21514(f__$1,ch__$1,meta21515));
});

}

return (new cljs.core.async.t_cljs$core$async21514(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21520 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21520 = (function (f,ch,meta21521){
this.f = f;
this.ch = ch;
this.meta21521 = meta21521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21522,meta21521__$1){
var self__ = this;
var _21522__$1 = this;
return (new cljs.core.async.t_cljs$core$async21520(self__.f,self__.ch,meta21521__$1));
});

cljs.core.async.t_cljs$core$async21520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21522){
var self__ = this;
var _21522__$1 = this;
return self__.meta21521;
});

cljs.core.async.t_cljs$core$async21520.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21520.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21520.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21520.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21520.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21520.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21520.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21521","meta21521",-872653935,null)], null);
});

cljs.core.async.t_cljs$core$async21520.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21520.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21520";

cljs.core.async.t_cljs$core$async21520.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async21520");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21520.
 */
cljs.core.async.__GT_t_cljs$core$async21520 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21520(f__$1,ch__$1,meta21521){
return (new cljs.core.async.t_cljs$core$async21520(f__$1,ch__$1,meta21521));
});

}

return (new cljs.core.async.t_cljs$core$async21520(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21523 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21523 = (function (p,ch,meta21524){
this.p = p;
this.ch = ch;
this.meta21524 = meta21524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21525,meta21524__$1){
var self__ = this;
var _21525__$1 = this;
return (new cljs.core.async.t_cljs$core$async21523(self__.p,self__.ch,meta21524__$1));
});

cljs.core.async.t_cljs$core$async21523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21525){
var self__ = this;
var _21525__$1 = this;
return self__.meta21524;
});

cljs.core.async.t_cljs$core$async21523.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21523.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21523.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21523.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21523.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21523.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21523.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21523.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21524","meta21524",974236711,null)], null);
});

cljs.core.async.t_cljs$core$async21523.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21523";

cljs.core.async.t_cljs$core$async21523.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async21523");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21523.
 */
cljs.core.async.__GT_t_cljs$core$async21523 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21523(p__$1,ch__$1,meta21524){
return (new cljs.core.async.t_cljs$core$async21523(p__$1,ch__$1,meta21524));
});

}

return (new cljs.core.async.t_cljs$core$async21523(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__21527 = arguments.length;
switch (G__21527) {
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
var c__18074__auto___21568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18074__auto___21568,out){
return (function (){
var f__18075__auto__ = (function (){var switch__17949__auto__ = ((function (c__18074__auto___21568,out){
return (function (state_21548){
var state_val_21549 = (state_21548[(1)]);
if((state_val_21549 === (7))){
var inst_21544 = (state_21548[(2)]);
var state_21548__$1 = state_21548;
var statearr_21550_21569 = state_21548__$1;
(statearr_21550_21569[(2)] = inst_21544);

(statearr_21550_21569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21549 === (1))){
var state_21548__$1 = state_21548;
var statearr_21551_21570 = state_21548__$1;
(statearr_21551_21570[(2)] = null);

(statearr_21551_21570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21549 === (4))){
var inst_21530 = (state_21548[(7)]);
var inst_21530__$1 = (state_21548[(2)]);
var inst_21531 = (inst_21530__$1 == null);
var state_21548__$1 = (function (){var statearr_21552 = state_21548;
(statearr_21552[(7)] = inst_21530__$1);

return statearr_21552;
})();
if(cljs.core.truth_(inst_21531)){
var statearr_21553_21571 = state_21548__$1;
(statearr_21553_21571[(1)] = (5));

} else {
var statearr_21554_21572 = state_21548__$1;
(statearr_21554_21572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21549 === (6))){
var inst_21530 = (state_21548[(7)]);
var inst_21535 = p.call(null,inst_21530);
var state_21548__$1 = state_21548;
if(cljs.core.truth_(inst_21535)){
var statearr_21555_21573 = state_21548__$1;
(statearr_21555_21573[(1)] = (8));

} else {
var statearr_21556_21574 = state_21548__$1;
(statearr_21556_21574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21549 === (3))){
var inst_21546 = (state_21548[(2)]);
var state_21548__$1 = state_21548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21548__$1,inst_21546);
} else {
if((state_val_21549 === (2))){
var state_21548__$1 = state_21548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21548__$1,(4),ch);
} else {
if((state_val_21549 === (11))){
var inst_21538 = (state_21548[(2)]);
var state_21548__$1 = state_21548;
var statearr_21557_21575 = state_21548__$1;
(statearr_21557_21575[(2)] = inst_21538);

(statearr_21557_21575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21549 === (9))){
var state_21548__$1 = state_21548;
var statearr_21558_21576 = state_21548__$1;
(statearr_21558_21576[(2)] = null);

(statearr_21558_21576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21549 === (5))){
var inst_21533 = cljs.core.async.close_BANG_.call(null,out);
var state_21548__$1 = state_21548;
var statearr_21559_21577 = state_21548__$1;
(statearr_21559_21577[(2)] = inst_21533);

(statearr_21559_21577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21549 === (10))){
var inst_21541 = (state_21548[(2)]);
var state_21548__$1 = (function (){var statearr_21560 = state_21548;
(statearr_21560[(8)] = inst_21541);

return statearr_21560;
})();
var statearr_21561_21578 = state_21548__$1;
(statearr_21561_21578[(2)] = null);

(statearr_21561_21578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21549 === (8))){
var inst_21530 = (state_21548[(7)]);
var state_21548__$1 = state_21548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21548__$1,(11),out,inst_21530);
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
});})(c__18074__auto___21568,out))
;
return ((function (switch__17949__auto__,c__18074__auto___21568,out){
return (function() {
var cljs$core$async$state_machine__17950__auto__ = null;
var cljs$core$async$state_machine__17950__auto____0 = (function (){
var statearr_21562 = [null,null,null,null,null,null,null,null,null];
(statearr_21562[(0)] = cljs$core$async$state_machine__17950__auto__);

(statearr_21562[(1)] = (1));

return statearr_21562;
});
var cljs$core$async$state_machine__17950__auto____1 = (function (state_21548){
while(true){
var ret_value__17951__auto__ = (function (){try{while(true){
var result__17952__auto__ = switch__17949__auto__.call(null,state_21548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17952__auto__;
}
break;
}
}catch (e21563){var ex__17953__auto__ = e21563;
var statearr_21564_21579 = state_21548;
(statearr_21564_21579[(2)] = ex__17953__auto__);


if(cljs.core.seq.call(null,(state_21548[(4)]))){
var statearr_21565_21580 = state_21548;
(statearr_21565_21580[(1)] = cljs.core.first.call(null,(state_21548[(4)])));

} else {
throw ex__17953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21581 = state_21548;
state_21548 = G__21581;
continue;
} else {
return ret_value__17951__auto__;
}
break;
}
});
cljs$core$async$state_machine__17950__auto__ = function(state_21548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17950__auto____1.call(this,state_21548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17950__auto____0;
cljs$core$async$state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17950__auto____1;
return cljs$core$async$state_machine__17950__auto__;
})()
;})(switch__17949__auto__,c__18074__auto___21568,out))
})();
var state__18076__auto__ = (function (){var statearr_21566 = f__18075__auto__.call(null);
(statearr_21566[(6)] = c__18074__auto___21568);

return statearr_21566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18076__auto__);
});})(c__18074__auto___21568,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__21583 = arguments.length;
switch (G__21583) {
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
var c__18074__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18074__auto__){
return (function (){
var f__18075__auto__ = (function (){var switch__17949__auto__ = ((function (c__18074__auto__){
return (function (state_21646){
var state_val_21647 = (state_21646[(1)]);
if((state_val_21647 === (7))){
var inst_21642 = (state_21646[(2)]);
var state_21646__$1 = state_21646;
var statearr_21648_21687 = state_21646__$1;
(statearr_21648_21687[(2)] = inst_21642);

(statearr_21648_21687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21647 === (20))){
var inst_21612 = (state_21646[(7)]);
var inst_21623 = (state_21646[(2)]);
var inst_21624 = cljs.core.next.call(null,inst_21612);
var inst_21598 = inst_21624;
var inst_21599 = null;
var inst_21600 = (0);
var inst_21601 = (0);
var state_21646__$1 = (function (){var statearr_21649 = state_21646;
(statearr_21649[(8)] = inst_21600);

(statearr_21649[(9)] = inst_21623);

(statearr_21649[(10)] = inst_21598);

(statearr_21649[(11)] = inst_21601);

(statearr_21649[(12)] = inst_21599);

return statearr_21649;
})();
var statearr_21650_21688 = state_21646__$1;
(statearr_21650_21688[(2)] = null);

(statearr_21650_21688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21647 === (1))){
var state_21646__$1 = state_21646;
var statearr_21651_21689 = state_21646__$1;
(statearr_21651_21689[(2)] = null);

(statearr_21651_21689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21647 === (4))){
var inst_21587 = (state_21646[(13)]);
var inst_21587__$1 = (state_21646[(2)]);
var inst_21588 = (inst_21587__$1 == null);
var state_21646__$1 = (function (){var statearr_21652 = state_21646;
(statearr_21652[(13)] = inst_21587__$1);

return statearr_21652;
})();
if(cljs.core.truth_(inst_21588)){
var statearr_21653_21690 = state_21646__$1;
(statearr_21653_21690[(1)] = (5));

} else {
var statearr_21654_21691 = state_21646__$1;
(statearr_21654_21691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21647 === (15))){
var state_21646__$1 = state_21646;
var statearr_21658_21692 = state_21646__$1;
(statearr_21658_21692[(2)] = null);

(statearr_21658_21692[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21647 === (21))){
var state_21646__$1 = state_21646;
var statearr_21659_21693 = state_21646__$1;
(statearr_21659_21693[(2)] = null);

(statearr_21659_21693[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21647 === (13))){
var inst_21600 = (state_21646[(8)]);
var inst_21598 = (state_21646[(10)]);
var inst_21601 = (state_21646[(11)]);
var inst_21599 = (state_21646[(12)]);
var inst_21608 = (state_21646[(2)]);
var inst_21609 = (inst_21601 + (1));
var tmp21655 = inst_21600;
var tmp21656 = inst_21598;
var tmp21657 = inst_21599;
var inst_21598__$1 = tmp21656;
var inst_21599__$1 = tmp21657;
var inst_21600__$1 = tmp21655;
var inst_21601__$1 = inst_21609;
var state_21646__$1 = (function (){var statearr_21660 = state_21646;
(statearr_21660[(8)] = inst_21600__$1);

(statearr_21660[(14)] = inst_21608);

(statearr_21660[(10)] = inst_21598__$1);

(statearr_21660[(11)] = inst_21601__$1);

(statearr_21660[(12)] = inst_21599__$1);

return statearr_21660;
})();
var statearr_21661_21694 = state_21646__$1;
(statearr_21661_21694[(2)] = null);

(statearr_21661_21694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21647 === (22))){
var state_21646__$1 = state_21646;
var statearr_21662_21695 = state_21646__$1;
(statearr_21662_21695[(2)] = null);

(statearr_21662_21695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21647 === (6))){
var inst_21587 = (state_21646[(13)]);
var inst_21596 = f.call(null,inst_21587);
var inst_21597 = cljs.core.seq.call(null,inst_21596);
var inst_21598 = inst_21597;
var inst_21599 = null;
var inst_21600 = (0);
var inst_21601 = (0);
var state_21646__$1 = (function (){var statearr_21663 = state_21646;
(statearr_21663[(8)] = inst_21600);

(statearr_21663[(10)] = inst_21598);

(statearr_21663[(11)] = inst_21601);

(statearr_21663[(12)] = inst_21599);

return statearr_21663;
})();
var statearr_21664_21696 = state_21646__$1;
(statearr_21664_21696[(2)] = null);

(statearr_21664_21696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21647 === (17))){
var inst_21612 = (state_21646[(7)]);
var inst_21616 = cljs.core.chunk_first.call(null,inst_21612);
var inst_21617 = cljs.core.chunk_rest.call(null,inst_21612);
var inst_21618 = cljs.core.count.call(null,inst_21616);
var inst_21598 = inst_21617;
var inst_21599 = inst_21616;
var inst_21600 = inst_21618;
var inst_21601 = (0);
var state_21646__$1 = (function (){var statearr_21665 = state_21646;
(statearr_21665[(8)] = inst_21600);

(statearr_21665[(10)] = inst_21598);

(statearr_21665[(11)] = inst_21601);

(statearr_21665[(12)] = inst_21599);

return statearr_21665;
})();
var statearr_21666_21697 = state_21646__$1;
(statearr_21666_21697[(2)] = null);

(statearr_21666_21697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21647 === (3))){
var inst_21644 = (state_21646[(2)]);
var state_21646__$1 = state_21646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21646__$1,inst_21644);
} else {
if((state_val_21647 === (12))){
var inst_21632 = (state_21646[(2)]);
var state_21646__$1 = state_21646;
var statearr_21667_21698 = state_21646__$1;
(statearr_21667_21698[(2)] = inst_21632);

(statearr_21667_21698[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21647 === (2))){
var state_21646__$1 = state_21646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21646__$1,(4),in$);
} else {
if((state_val_21647 === (23))){
var inst_21640 = (state_21646[(2)]);
var state_21646__$1 = state_21646;
var statearr_21668_21699 = state_21646__$1;
(statearr_21668_21699[(2)] = inst_21640);

(statearr_21668_21699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21647 === (19))){
var inst_21627 = (state_21646[(2)]);
var state_21646__$1 = state_21646;
var statearr_21669_21700 = state_21646__$1;
(statearr_21669_21700[(2)] = inst_21627);

(statearr_21669_21700[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21647 === (11))){
var inst_21612 = (state_21646[(7)]);
var inst_21598 = (state_21646[(10)]);
var inst_21612__$1 = cljs.core.seq.call(null,inst_21598);
var state_21646__$1 = (function (){var statearr_21670 = state_21646;
(statearr_21670[(7)] = inst_21612__$1);

return statearr_21670;
})();
if(inst_21612__$1){
var statearr_21671_21701 = state_21646__$1;
(statearr_21671_21701[(1)] = (14));

} else {
var statearr_21672_21702 = state_21646__$1;
(statearr_21672_21702[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21647 === (9))){
var inst_21634 = (state_21646[(2)]);
var inst_21635 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21646__$1 = (function (){var statearr_21673 = state_21646;
(statearr_21673[(15)] = inst_21634);

return statearr_21673;
})();
if(cljs.core.truth_(inst_21635)){
var statearr_21674_21703 = state_21646__$1;
(statearr_21674_21703[(1)] = (21));

} else {
var statearr_21675_21704 = state_21646__$1;
(statearr_21675_21704[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21647 === (5))){
var inst_21590 = cljs.core.async.close_BANG_.call(null,out);
var state_21646__$1 = state_21646;
var statearr_21676_21705 = state_21646__$1;
(statearr_21676_21705[(2)] = inst_21590);

(statearr_21676_21705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21647 === (14))){
var inst_21612 = (state_21646[(7)]);
var inst_21614 = cljs.core.chunked_seq_QMARK_.call(null,inst_21612);
var state_21646__$1 = state_21646;
if(inst_21614){
var statearr_21677_21706 = state_21646__$1;
(statearr_21677_21706[(1)] = (17));

} else {
var statearr_21678_21707 = state_21646__$1;
(statearr_21678_21707[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21647 === (16))){
var inst_21630 = (state_21646[(2)]);
var state_21646__$1 = state_21646;
var statearr_21679_21708 = state_21646__$1;
(statearr_21679_21708[(2)] = inst_21630);

(statearr_21679_21708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21647 === (10))){
var inst_21601 = (state_21646[(11)]);
var inst_21599 = (state_21646[(12)]);
var inst_21606 = cljs.core._nth.call(null,inst_21599,inst_21601);
var state_21646__$1 = state_21646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21646__$1,(13),out,inst_21606);
} else {
if((state_val_21647 === (18))){
var inst_21612 = (state_21646[(7)]);
var inst_21621 = cljs.core.first.call(null,inst_21612);
var state_21646__$1 = state_21646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21646__$1,(20),out,inst_21621);
} else {
if((state_val_21647 === (8))){
var inst_21600 = (state_21646[(8)]);
var inst_21601 = (state_21646[(11)]);
var inst_21603 = (inst_21601 < inst_21600);
var inst_21604 = inst_21603;
var state_21646__$1 = state_21646;
if(cljs.core.truth_(inst_21604)){
var statearr_21680_21709 = state_21646__$1;
(statearr_21680_21709[(1)] = (10));

} else {
var statearr_21681_21710 = state_21646__$1;
(statearr_21681_21710[(1)] = (11));

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
});})(c__18074__auto__))
;
return ((function (switch__17949__auto__,c__18074__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17950__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17950__auto____0 = (function (){
var statearr_21682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21682[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17950__auto__);

(statearr_21682[(1)] = (1));

return statearr_21682;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17950__auto____1 = (function (state_21646){
while(true){
var ret_value__17951__auto__ = (function (){try{while(true){
var result__17952__auto__ = switch__17949__auto__.call(null,state_21646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17952__auto__;
}
break;
}
}catch (e21683){var ex__17953__auto__ = e21683;
var statearr_21684_21711 = state_21646;
(statearr_21684_21711[(2)] = ex__17953__auto__);


if(cljs.core.seq.call(null,(state_21646[(4)]))){
var statearr_21685_21712 = state_21646;
(statearr_21685_21712[(1)] = cljs.core.first.call(null,(state_21646[(4)])));

} else {
throw ex__17953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21713 = state_21646;
state_21646 = G__21713;
continue;
} else {
return ret_value__17951__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17950__auto__ = function(state_21646){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17950__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17950__auto____1.call(this,state_21646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17950__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17950__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17950__auto__;
})()
;})(switch__17949__auto__,c__18074__auto__))
})();
var state__18076__auto__ = (function (){var statearr_21686 = f__18075__auto__.call(null);
(statearr_21686[(6)] = c__18074__auto__);

return statearr_21686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18076__auto__);
});})(c__18074__auto__))
);

return c__18074__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__21715 = arguments.length;
switch (G__21715) {
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
var G__21718 = arguments.length;
switch (G__21718) {
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
var G__21721 = arguments.length;
switch (G__21721) {
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
var c__18074__auto___21769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18074__auto___21769,out){
return (function (){
var f__18075__auto__ = (function (){var switch__17949__auto__ = ((function (c__18074__auto___21769,out){
return (function (state_21745){
var state_val_21746 = (state_21745[(1)]);
if((state_val_21746 === (7))){
var inst_21740 = (state_21745[(2)]);
var state_21745__$1 = state_21745;
var statearr_21747_21770 = state_21745__$1;
(statearr_21747_21770[(2)] = inst_21740);

(statearr_21747_21770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21746 === (1))){
var inst_21722 = null;
var state_21745__$1 = (function (){var statearr_21748 = state_21745;
(statearr_21748[(7)] = inst_21722);

return statearr_21748;
})();
var statearr_21749_21771 = state_21745__$1;
(statearr_21749_21771[(2)] = null);

(statearr_21749_21771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21746 === (4))){
var inst_21725 = (state_21745[(8)]);
var inst_21725__$1 = (state_21745[(2)]);
var inst_21726 = (inst_21725__$1 == null);
var inst_21727 = cljs.core.not.call(null,inst_21726);
var state_21745__$1 = (function (){var statearr_21750 = state_21745;
(statearr_21750[(8)] = inst_21725__$1);

return statearr_21750;
})();
if(inst_21727){
var statearr_21751_21772 = state_21745__$1;
(statearr_21751_21772[(1)] = (5));

} else {
var statearr_21752_21773 = state_21745__$1;
(statearr_21752_21773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21746 === (6))){
var state_21745__$1 = state_21745;
var statearr_21753_21774 = state_21745__$1;
(statearr_21753_21774[(2)] = null);

(statearr_21753_21774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21746 === (3))){
var inst_21742 = (state_21745[(2)]);
var inst_21743 = cljs.core.async.close_BANG_.call(null,out);
var state_21745__$1 = (function (){var statearr_21754 = state_21745;
(statearr_21754[(9)] = inst_21742);

return statearr_21754;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21745__$1,inst_21743);
} else {
if((state_val_21746 === (2))){
var state_21745__$1 = state_21745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21745__$1,(4),ch);
} else {
if((state_val_21746 === (11))){
var inst_21725 = (state_21745[(8)]);
var inst_21734 = (state_21745[(2)]);
var inst_21722 = inst_21725;
var state_21745__$1 = (function (){var statearr_21755 = state_21745;
(statearr_21755[(7)] = inst_21722);

(statearr_21755[(10)] = inst_21734);

return statearr_21755;
})();
var statearr_21756_21775 = state_21745__$1;
(statearr_21756_21775[(2)] = null);

(statearr_21756_21775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21746 === (9))){
var inst_21725 = (state_21745[(8)]);
var state_21745__$1 = state_21745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21745__$1,(11),out,inst_21725);
} else {
if((state_val_21746 === (5))){
var inst_21722 = (state_21745[(7)]);
var inst_21725 = (state_21745[(8)]);
var inst_21729 = cljs.core._EQ_.call(null,inst_21725,inst_21722);
var state_21745__$1 = state_21745;
if(inst_21729){
var statearr_21758_21776 = state_21745__$1;
(statearr_21758_21776[(1)] = (8));

} else {
var statearr_21759_21777 = state_21745__$1;
(statearr_21759_21777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21746 === (10))){
var inst_21737 = (state_21745[(2)]);
var state_21745__$1 = state_21745;
var statearr_21760_21778 = state_21745__$1;
(statearr_21760_21778[(2)] = inst_21737);

(statearr_21760_21778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21746 === (8))){
var inst_21722 = (state_21745[(7)]);
var tmp21757 = inst_21722;
var inst_21722__$1 = tmp21757;
var state_21745__$1 = (function (){var statearr_21761 = state_21745;
(statearr_21761[(7)] = inst_21722__$1);

return statearr_21761;
})();
var statearr_21762_21779 = state_21745__$1;
(statearr_21762_21779[(2)] = null);

(statearr_21762_21779[(1)] = (2));


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
});})(c__18074__auto___21769,out))
;
return ((function (switch__17949__auto__,c__18074__auto___21769,out){
return (function() {
var cljs$core$async$state_machine__17950__auto__ = null;
var cljs$core$async$state_machine__17950__auto____0 = (function (){
var statearr_21763 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21763[(0)] = cljs$core$async$state_machine__17950__auto__);

(statearr_21763[(1)] = (1));

return statearr_21763;
});
var cljs$core$async$state_machine__17950__auto____1 = (function (state_21745){
while(true){
var ret_value__17951__auto__ = (function (){try{while(true){
var result__17952__auto__ = switch__17949__auto__.call(null,state_21745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17952__auto__;
}
break;
}
}catch (e21764){var ex__17953__auto__ = e21764;
var statearr_21765_21780 = state_21745;
(statearr_21765_21780[(2)] = ex__17953__auto__);


if(cljs.core.seq.call(null,(state_21745[(4)]))){
var statearr_21766_21781 = state_21745;
(statearr_21766_21781[(1)] = cljs.core.first.call(null,(state_21745[(4)])));

} else {
throw ex__17953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21782 = state_21745;
state_21745 = G__21782;
continue;
} else {
return ret_value__17951__auto__;
}
break;
}
});
cljs$core$async$state_machine__17950__auto__ = function(state_21745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17950__auto____1.call(this,state_21745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17950__auto____0;
cljs$core$async$state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17950__auto____1;
return cljs$core$async$state_machine__17950__auto__;
})()
;})(switch__17949__auto__,c__18074__auto___21769,out))
})();
var state__18076__auto__ = (function (){var statearr_21767 = f__18075__auto__.call(null);
(statearr_21767[(6)] = c__18074__auto___21769);

return statearr_21767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18076__auto__);
});})(c__18074__auto___21769,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__21784 = arguments.length;
switch (G__21784) {
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
var c__18074__auto___21851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18074__auto___21851,out){
return (function (){
var f__18075__auto__ = (function (){var switch__17949__auto__ = ((function (c__18074__auto___21851,out){
return (function (state_21822){
var state_val_21823 = (state_21822[(1)]);
if((state_val_21823 === (7))){
var inst_21818 = (state_21822[(2)]);
var state_21822__$1 = state_21822;
var statearr_21824_21852 = state_21822__$1;
(statearr_21824_21852[(2)] = inst_21818);

(statearr_21824_21852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (1))){
var inst_21785 = (new Array(n));
var inst_21786 = inst_21785;
var inst_21787 = (0);
var state_21822__$1 = (function (){var statearr_21825 = state_21822;
(statearr_21825[(7)] = inst_21787);

(statearr_21825[(8)] = inst_21786);

return statearr_21825;
})();
var statearr_21826_21853 = state_21822__$1;
(statearr_21826_21853[(2)] = null);

(statearr_21826_21853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (4))){
var inst_21790 = (state_21822[(9)]);
var inst_21790__$1 = (state_21822[(2)]);
var inst_21791 = (inst_21790__$1 == null);
var inst_21792 = cljs.core.not.call(null,inst_21791);
var state_21822__$1 = (function (){var statearr_21827 = state_21822;
(statearr_21827[(9)] = inst_21790__$1);

return statearr_21827;
})();
if(inst_21792){
var statearr_21828_21854 = state_21822__$1;
(statearr_21828_21854[(1)] = (5));

} else {
var statearr_21829_21855 = state_21822__$1;
(statearr_21829_21855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (15))){
var inst_21812 = (state_21822[(2)]);
var state_21822__$1 = state_21822;
var statearr_21830_21856 = state_21822__$1;
(statearr_21830_21856[(2)] = inst_21812);

(statearr_21830_21856[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (13))){
var state_21822__$1 = state_21822;
var statearr_21831_21857 = state_21822__$1;
(statearr_21831_21857[(2)] = null);

(statearr_21831_21857[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (6))){
var inst_21787 = (state_21822[(7)]);
var inst_21808 = (inst_21787 > (0));
var state_21822__$1 = state_21822;
if(cljs.core.truth_(inst_21808)){
var statearr_21832_21858 = state_21822__$1;
(statearr_21832_21858[(1)] = (12));

} else {
var statearr_21833_21859 = state_21822__$1;
(statearr_21833_21859[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (3))){
var inst_21820 = (state_21822[(2)]);
var state_21822__$1 = state_21822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21822__$1,inst_21820);
} else {
if((state_val_21823 === (12))){
var inst_21786 = (state_21822[(8)]);
var inst_21810 = cljs.core.vec.call(null,inst_21786);
var state_21822__$1 = state_21822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21822__$1,(15),out,inst_21810);
} else {
if((state_val_21823 === (2))){
var state_21822__$1 = state_21822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21822__$1,(4),ch);
} else {
if((state_val_21823 === (11))){
var inst_21802 = (state_21822[(2)]);
var inst_21803 = (new Array(n));
var inst_21786 = inst_21803;
var inst_21787 = (0);
var state_21822__$1 = (function (){var statearr_21834 = state_21822;
(statearr_21834[(7)] = inst_21787);

(statearr_21834[(10)] = inst_21802);

(statearr_21834[(8)] = inst_21786);

return statearr_21834;
})();
var statearr_21835_21860 = state_21822__$1;
(statearr_21835_21860[(2)] = null);

(statearr_21835_21860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (9))){
var inst_21786 = (state_21822[(8)]);
var inst_21800 = cljs.core.vec.call(null,inst_21786);
var state_21822__$1 = state_21822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21822__$1,(11),out,inst_21800);
} else {
if((state_val_21823 === (5))){
var inst_21795 = (state_21822[(11)]);
var inst_21787 = (state_21822[(7)]);
var inst_21786 = (state_21822[(8)]);
var inst_21790 = (state_21822[(9)]);
var inst_21794 = (inst_21786[inst_21787] = inst_21790);
var inst_21795__$1 = (inst_21787 + (1));
var inst_21796 = (inst_21795__$1 < n);
var state_21822__$1 = (function (){var statearr_21836 = state_21822;
(statearr_21836[(11)] = inst_21795__$1);

(statearr_21836[(12)] = inst_21794);

return statearr_21836;
})();
if(cljs.core.truth_(inst_21796)){
var statearr_21837_21861 = state_21822__$1;
(statearr_21837_21861[(1)] = (8));

} else {
var statearr_21838_21862 = state_21822__$1;
(statearr_21838_21862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (14))){
var inst_21815 = (state_21822[(2)]);
var inst_21816 = cljs.core.async.close_BANG_.call(null,out);
var state_21822__$1 = (function (){var statearr_21840 = state_21822;
(statearr_21840[(13)] = inst_21815);

return statearr_21840;
})();
var statearr_21841_21863 = state_21822__$1;
(statearr_21841_21863[(2)] = inst_21816);

(statearr_21841_21863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (10))){
var inst_21806 = (state_21822[(2)]);
var state_21822__$1 = state_21822;
var statearr_21842_21864 = state_21822__$1;
(statearr_21842_21864[(2)] = inst_21806);

(statearr_21842_21864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (8))){
var inst_21795 = (state_21822[(11)]);
var inst_21786 = (state_21822[(8)]);
var tmp21839 = inst_21786;
var inst_21786__$1 = tmp21839;
var inst_21787 = inst_21795;
var state_21822__$1 = (function (){var statearr_21843 = state_21822;
(statearr_21843[(7)] = inst_21787);

(statearr_21843[(8)] = inst_21786__$1);

return statearr_21843;
})();
var statearr_21844_21865 = state_21822__$1;
(statearr_21844_21865[(2)] = null);

(statearr_21844_21865[(1)] = (2));


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
});})(c__18074__auto___21851,out))
;
return ((function (switch__17949__auto__,c__18074__auto___21851,out){
return (function() {
var cljs$core$async$state_machine__17950__auto__ = null;
var cljs$core$async$state_machine__17950__auto____0 = (function (){
var statearr_21845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21845[(0)] = cljs$core$async$state_machine__17950__auto__);

(statearr_21845[(1)] = (1));

return statearr_21845;
});
var cljs$core$async$state_machine__17950__auto____1 = (function (state_21822){
while(true){
var ret_value__17951__auto__ = (function (){try{while(true){
var result__17952__auto__ = switch__17949__auto__.call(null,state_21822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17952__auto__;
}
break;
}
}catch (e21846){var ex__17953__auto__ = e21846;
var statearr_21847_21866 = state_21822;
(statearr_21847_21866[(2)] = ex__17953__auto__);


if(cljs.core.seq.call(null,(state_21822[(4)]))){
var statearr_21848_21867 = state_21822;
(statearr_21848_21867[(1)] = cljs.core.first.call(null,(state_21822[(4)])));

} else {
throw ex__17953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21868 = state_21822;
state_21822 = G__21868;
continue;
} else {
return ret_value__17951__auto__;
}
break;
}
});
cljs$core$async$state_machine__17950__auto__ = function(state_21822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17950__auto____1.call(this,state_21822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17950__auto____0;
cljs$core$async$state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17950__auto____1;
return cljs$core$async$state_machine__17950__auto__;
})()
;})(switch__17949__auto__,c__18074__auto___21851,out))
})();
var state__18076__auto__ = (function (){var statearr_21849 = f__18075__auto__.call(null);
(statearr_21849[(6)] = c__18074__auto___21851);

return statearr_21849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18076__auto__);
});})(c__18074__auto___21851,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__21870 = arguments.length;
switch (G__21870) {
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
var c__18074__auto___21941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18074__auto___21941,out){
return (function (){
var f__18075__auto__ = (function (){var switch__17949__auto__ = ((function (c__18074__auto___21941,out){
return (function (state_21912){
var state_val_21913 = (state_21912[(1)]);
if((state_val_21913 === (7))){
var inst_21908 = (state_21912[(2)]);
var state_21912__$1 = state_21912;
var statearr_21914_21942 = state_21912__$1;
(statearr_21914_21942[(2)] = inst_21908);

(statearr_21914_21942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (1))){
var inst_21871 = [];
var inst_21872 = inst_21871;
var inst_21873 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21912__$1 = (function (){var statearr_21915 = state_21912;
(statearr_21915[(7)] = inst_21873);

(statearr_21915[(8)] = inst_21872);

return statearr_21915;
})();
var statearr_21916_21943 = state_21912__$1;
(statearr_21916_21943[(2)] = null);

(statearr_21916_21943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (4))){
var inst_21876 = (state_21912[(9)]);
var inst_21876__$1 = (state_21912[(2)]);
var inst_21877 = (inst_21876__$1 == null);
var inst_21878 = cljs.core.not.call(null,inst_21877);
var state_21912__$1 = (function (){var statearr_21917 = state_21912;
(statearr_21917[(9)] = inst_21876__$1);

return statearr_21917;
})();
if(inst_21878){
var statearr_21918_21944 = state_21912__$1;
(statearr_21918_21944[(1)] = (5));

} else {
var statearr_21919_21945 = state_21912__$1;
(statearr_21919_21945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (15))){
var inst_21902 = (state_21912[(2)]);
var state_21912__$1 = state_21912;
var statearr_21920_21946 = state_21912__$1;
(statearr_21920_21946[(2)] = inst_21902);

(statearr_21920_21946[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (13))){
var state_21912__$1 = state_21912;
var statearr_21921_21947 = state_21912__$1;
(statearr_21921_21947[(2)] = null);

(statearr_21921_21947[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (6))){
var inst_21872 = (state_21912[(8)]);
var inst_21897 = inst_21872.length;
var inst_21898 = (inst_21897 > (0));
var state_21912__$1 = state_21912;
if(cljs.core.truth_(inst_21898)){
var statearr_21922_21948 = state_21912__$1;
(statearr_21922_21948[(1)] = (12));

} else {
var statearr_21923_21949 = state_21912__$1;
(statearr_21923_21949[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (3))){
var inst_21910 = (state_21912[(2)]);
var state_21912__$1 = state_21912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21912__$1,inst_21910);
} else {
if((state_val_21913 === (12))){
var inst_21872 = (state_21912[(8)]);
var inst_21900 = cljs.core.vec.call(null,inst_21872);
var state_21912__$1 = state_21912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21912__$1,(15),out,inst_21900);
} else {
if((state_val_21913 === (2))){
var state_21912__$1 = state_21912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21912__$1,(4),ch);
} else {
if((state_val_21913 === (11))){
var inst_21880 = (state_21912[(10)]);
var inst_21876 = (state_21912[(9)]);
var inst_21890 = (state_21912[(2)]);
var inst_21891 = [];
var inst_21892 = inst_21891.push(inst_21876);
var inst_21872 = inst_21891;
var inst_21873 = inst_21880;
var state_21912__$1 = (function (){var statearr_21924 = state_21912;
(statearr_21924[(7)] = inst_21873);

(statearr_21924[(8)] = inst_21872);

(statearr_21924[(11)] = inst_21892);

(statearr_21924[(12)] = inst_21890);

return statearr_21924;
})();
var statearr_21925_21950 = state_21912__$1;
(statearr_21925_21950[(2)] = null);

(statearr_21925_21950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (9))){
var inst_21872 = (state_21912[(8)]);
var inst_21888 = cljs.core.vec.call(null,inst_21872);
var state_21912__$1 = state_21912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21912__$1,(11),out,inst_21888);
} else {
if((state_val_21913 === (5))){
var inst_21873 = (state_21912[(7)]);
var inst_21880 = (state_21912[(10)]);
var inst_21876 = (state_21912[(9)]);
var inst_21880__$1 = f.call(null,inst_21876);
var inst_21881 = cljs.core._EQ_.call(null,inst_21880__$1,inst_21873);
var inst_21882 = cljs.core.keyword_identical_QMARK_.call(null,inst_21873,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21883 = ((inst_21881) || (inst_21882));
var state_21912__$1 = (function (){var statearr_21926 = state_21912;
(statearr_21926[(10)] = inst_21880__$1);

return statearr_21926;
})();
if(cljs.core.truth_(inst_21883)){
var statearr_21927_21951 = state_21912__$1;
(statearr_21927_21951[(1)] = (8));

} else {
var statearr_21928_21952 = state_21912__$1;
(statearr_21928_21952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (14))){
var inst_21905 = (state_21912[(2)]);
var inst_21906 = cljs.core.async.close_BANG_.call(null,out);
var state_21912__$1 = (function (){var statearr_21930 = state_21912;
(statearr_21930[(13)] = inst_21905);

return statearr_21930;
})();
var statearr_21931_21953 = state_21912__$1;
(statearr_21931_21953[(2)] = inst_21906);

(statearr_21931_21953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (10))){
var inst_21895 = (state_21912[(2)]);
var state_21912__$1 = state_21912;
var statearr_21932_21954 = state_21912__$1;
(statearr_21932_21954[(2)] = inst_21895);

(statearr_21932_21954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21913 === (8))){
var inst_21880 = (state_21912[(10)]);
var inst_21876 = (state_21912[(9)]);
var inst_21872 = (state_21912[(8)]);
var inst_21885 = inst_21872.push(inst_21876);
var tmp21929 = inst_21872;
var inst_21872__$1 = tmp21929;
var inst_21873 = inst_21880;
var state_21912__$1 = (function (){var statearr_21933 = state_21912;
(statearr_21933[(7)] = inst_21873);

(statearr_21933[(14)] = inst_21885);

(statearr_21933[(8)] = inst_21872__$1);

return statearr_21933;
})();
var statearr_21934_21955 = state_21912__$1;
(statearr_21934_21955[(2)] = null);

(statearr_21934_21955[(1)] = (2));


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
});})(c__18074__auto___21941,out))
;
return ((function (switch__17949__auto__,c__18074__auto___21941,out){
return (function() {
var cljs$core$async$state_machine__17950__auto__ = null;
var cljs$core$async$state_machine__17950__auto____0 = (function (){
var statearr_21935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21935[(0)] = cljs$core$async$state_machine__17950__auto__);

(statearr_21935[(1)] = (1));

return statearr_21935;
});
var cljs$core$async$state_machine__17950__auto____1 = (function (state_21912){
while(true){
var ret_value__17951__auto__ = (function (){try{while(true){
var result__17952__auto__ = switch__17949__auto__.call(null,state_21912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17952__auto__;
}
break;
}
}catch (e21936){var ex__17953__auto__ = e21936;
var statearr_21937_21956 = state_21912;
(statearr_21937_21956[(2)] = ex__17953__auto__);


if(cljs.core.seq.call(null,(state_21912[(4)]))){
var statearr_21938_21957 = state_21912;
(statearr_21938_21957[(1)] = cljs.core.first.call(null,(state_21912[(4)])));

} else {
throw ex__17953__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21958 = state_21912;
state_21912 = G__21958;
continue;
} else {
return ret_value__17951__auto__;
}
break;
}
});
cljs$core$async$state_machine__17950__auto__ = function(state_21912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17950__auto____1.call(this,state_21912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17950__auto____0;
cljs$core$async$state_machine__17950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17950__auto____1;
return cljs$core$async$state_machine__17950__auto__;
})()
;})(switch__17949__auto__,c__18074__auto___21941,out))
})();
var state__18076__auto__ = (function (){var statearr_21939 = f__18075__auto__.call(null);
(statearr_21939[(6)] = c__18074__auto___21941);

return statearr_21939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18076__auto__);
});})(c__18074__auto___21941,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
