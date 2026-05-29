goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14995 = (function (f,blockable,meta14996){
this.f = f;
this.blockable = blockable;
this.meta14996 = meta14996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14997,meta14996__$1){
var self__ = this;
var _14997__$1 = this;
return (new cljs.core.async.t_cljs$core$async14995(self__.f,self__.blockable,meta14996__$1));
}));

(cljs.core.async.t_cljs$core$async14995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14997){
var self__ = this;
var _14997__$1 = this;
return self__.meta14996;
}));

(cljs.core.async.t_cljs$core$async14995.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14995.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14995.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14995.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14996","meta14996",1893020853,null)], null);
}));

(cljs.core.async.t_cljs$core$async14995.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14995");

(cljs.core.async.t_cljs$core$async14995.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async14995");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14995.
 */
cljs.core.async.__GT_t_cljs$core$async14995 = (function cljs$core$async$__GT_t_cljs$core$async14995(f,blockable,meta14996){
return (new cljs.core.async.t_cljs$core$async14995(f,blockable,meta14996));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14971 = arguments.length;
switch (G__14971) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14995(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__15038 = arguments.length;
switch (G__15038) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15049 = arguments.length;
switch (G__15049) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__15053 = arguments.length;
switch (G__15053) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17068 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17068) : fn1.call(null,val_17068));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17068) : fn1.call(null,val_17068));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__15058 = arguments.length;
switch (G__15058) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5762__auto___17070 = n;
var x_17071 = (0);
while(true){
if((x_17071 < n__5762__auto___17070)){
(a[x_17071] = x_17071);

var G__17072 = (x_17071 + (1));
x_17071 = G__17072;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15061 = (function (flag,meta15062){
this.flag = flag;
this.meta15062 = meta15062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15063,meta15062__$1){
var self__ = this;
var _15063__$1 = this;
return (new cljs.core.async.t_cljs$core$async15061(self__.flag,meta15062__$1));
}));

(cljs.core.async.t_cljs$core$async15061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15063){
var self__ = this;
var _15063__$1 = this;
return self__.meta15062;
}));

(cljs.core.async.t_cljs$core$async15061.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15061.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15062","meta15062",771328594,null)], null);
}));

(cljs.core.async.t_cljs$core$async15061.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15061");

(cljs.core.async.t_cljs$core$async15061.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async15061");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15061.
 */
cljs.core.async.__GT_t_cljs$core$async15061 = (function cljs$core$async$__GT_t_cljs$core$async15061(flag,meta15062){
return (new cljs.core.async.t_cljs$core$async15061(flag,meta15062));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15061(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15067 = (function (flag,cb,meta15068){
this.flag = flag;
this.cb = cb;
this.meta15068 = meta15068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15069,meta15068__$1){
var self__ = this;
var _15069__$1 = this;
return (new cljs.core.async.t_cljs$core$async15067(self__.flag,self__.cb,meta15068__$1));
}));

(cljs.core.async.t_cljs$core$async15067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15069){
var self__ = this;
var _15069__$1 = this;
return self__.meta15068;
}));

(cljs.core.async.t_cljs$core$async15067.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15067.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15067.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15067.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15068","meta15068",-1456241163,null)], null);
}));

(cljs.core.async.t_cljs$core$async15067.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15067.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15067");

(cljs.core.async.t_cljs$core$async15067.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async15067");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15067.
 */
cljs.core.async.__GT_t_cljs$core$async15067 = (function cljs$core$async$__GT_t_cljs$core$async15067(flag,cb,meta15068){
return (new cljs.core.async.t_cljs$core$async15067(flag,cb,meta15068));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15067(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_17073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_17073)){
if((!(((port_17073.cljs$core$IFn$_invoke$arity$1 ? port_17073.cljs$core$IFn$_invoke$arity$1((1)) : port_17073.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__17074 = (i + (1));
i = G__17074;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__15080_SHARP_){
var G__15086 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15080_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15086) : fret.call(null,G__15086));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__15081_SHARP_){
var G__15088 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15081_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15088) : fret.call(null,G__15088));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5162__auto__ = wport;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17075 = (i + (1));
i = G__17075;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5162__auto__ = ret;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5160__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5160__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__5903__auto__ = [];
var len__5897__auto___17076 = arguments.length;
var i__5898__auto___17077 = (0);
while(true){
if((i__5898__auto___17077 < len__5897__auto___17076)){
args__5903__auto__.push((arguments[i__5898__auto___17077]));

var G__17078 = (i__5898__auto___17077 + (1));
i__5898__auto___17077 = G__17078;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15091){
var map__15092 = p__15091;
var map__15092__$1 = cljs.core.__destructure_map(map__15092);
var opts = map__15092__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15089){
var G__15090 = cljs.core.first(seq15089);
var seq15089__$1 = cljs.core.next(seq15089);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15090,seq15089__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__15108 = arguments.length;
switch (G__15108) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14888__auto___17080 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14826__auto__ = (function (state_15140){
var state_val_15141 = (state_15140[(1)]);
if((state_val_15141 === (7))){
var inst_15135 = (state_15140[(2)]);
var state_15140__$1 = state_15140;
var statearr_15147_17083 = state_15140__$1;
(statearr_15147_17083[(2)] = inst_15135);

(statearr_15147_17083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (1))){
var state_15140__$1 = state_15140;
var statearr_15154_17084 = state_15140__$1;
(statearr_15154_17084[(2)] = null);

(statearr_15154_17084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (4))){
var inst_15116 = (state_15140[(7)]);
var inst_15116__$1 = (state_15140[(2)]);
var inst_15117 = (inst_15116__$1 == null);
var state_15140__$1 = (function (){var statearr_15162 = state_15140;
(statearr_15162[(7)] = inst_15116__$1);

return statearr_15162;
})();
if(cljs.core.truth_(inst_15117)){
var statearr_15167_17085 = state_15140__$1;
(statearr_15167_17085[(1)] = (5));

} else {
var statearr_15169_17086 = state_15140__$1;
(statearr_15169_17086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (13))){
var state_15140__$1 = state_15140;
var statearr_15175_17087 = state_15140__$1;
(statearr_15175_17087[(2)] = null);

(statearr_15175_17087[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (6))){
var inst_15116 = (state_15140[(7)]);
var state_15140__$1 = state_15140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15140__$1,(11),to,inst_15116);
} else {
if((state_val_15141 === (3))){
var inst_15138 = (state_15140[(2)]);
var state_15140__$1 = state_15140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15140__$1,inst_15138);
} else {
if((state_val_15141 === (12))){
var state_15140__$1 = state_15140;
var statearr_15178_17088 = state_15140__$1;
(statearr_15178_17088[(2)] = null);

(statearr_15178_17088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (2))){
var state_15140__$1 = state_15140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15140__$1,(4),from);
} else {
if((state_val_15141 === (11))){
var inst_15128 = (state_15140[(2)]);
var state_15140__$1 = state_15140;
if(cljs.core.truth_(inst_15128)){
var statearr_15181_17089 = state_15140__$1;
(statearr_15181_17089[(1)] = (12));

} else {
var statearr_15182_17090 = state_15140__$1;
(statearr_15182_17090[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (9))){
var state_15140__$1 = state_15140;
var statearr_15183_17091 = state_15140__$1;
(statearr_15183_17091[(2)] = null);

(statearr_15183_17091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (5))){
var state_15140__$1 = state_15140;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15186_17092 = state_15140__$1;
(statearr_15186_17092[(1)] = (8));

} else {
var statearr_15188_17093 = state_15140__$1;
(statearr_15188_17093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (14))){
var inst_15133 = (state_15140[(2)]);
var state_15140__$1 = state_15140;
var statearr_15189_17094 = state_15140__$1;
(statearr_15189_17094[(2)] = inst_15133);

(statearr_15189_17094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (10))){
var inst_15123 = (state_15140[(2)]);
var state_15140__$1 = state_15140;
var statearr_15191_17095 = state_15140__$1;
(statearr_15191_17095[(2)] = inst_15123);

(statearr_15191_17095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15141 === (8))){
var inst_15120 = cljs.core.async.close_BANG_(to);
var state_15140__$1 = state_15140;
var statearr_15192_17096 = state_15140__$1;
(statearr_15192_17096[(2)] = inst_15120);

(statearr_15192_17096[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__14827__auto__ = null;
var cljs$core$async$state_machine__14827__auto____0 = (function (){
var statearr_15195 = [null,null,null,null,null,null,null,null];
(statearr_15195[(0)] = cljs$core$async$state_machine__14827__auto__);

(statearr_15195[(1)] = (1));

return statearr_15195;
});
var cljs$core$async$state_machine__14827__auto____1 = (function (state_15140){
while(true){
var ret_value__14828__auto__ = (function (){try{while(true){
var result__14829__auto__ = switch__14826__auto__(state_15140);
if(cljs.core.keyword_identical_QMARK_(result__14829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14829__auto__;
}
break;
}
}catch (e15196){var ex__14830__auto__ = e15196;
var statearr_15197_17097 = state_15140;
(statearr_15197_17097[(2)] = ex__14830__auto__);


if(cljs.core.seq((state_15140[(4)]))){
var statearr_15199_17098 = state_15140;
(statearr_15199_17098[(1)] = cljs.core.first((state_15140[(4)])));

} else {
throw ex__14830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17099 = state_15140;
state_15140 = G__17099;
continue;
} else {
return ret_value__14828__auto__;
}
break;
}
});
cljs$core$async$state_machine__14827__auto__ = function(state_15140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14827__auto____1.call(this,state_15140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14827__auto____0;
cljs$core$async$state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14827__auto____1;
return cljs$core$async$state_machine__14827__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_15201 = f__14889__auto__();
(statearr_15201[(6)] = c__14888__auto___17080);

return statearr_15201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15202){
var vec__15203 = p__15202;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15203,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15203,(1),null);
var job = vec__15203;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14888__auto___17102 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14826__auto__ = (function (state_15210){
var state_val_15211 = (state_15210[(1)]);
if((state_val_15211 === (1))){
var state_15210__$1 = state_15210;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15210__$1,(2),res,v);
} else {
if((state_val_15211 === (2))){
var inst_15207 = (state_15210[(2)]);
var inst_15208 = cljs.core.async.close_BANG_(res);
var state_15210__$1 = (function (){var statearr_15218 = state_15210;
(statearr_15218[(7)] = inst_15207);

return statearr_15218;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15210__$1,inst_15208);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____0 = (function (){
var statearr_15219 = [null,null,null,null,null,null,null,null];
(statearr_15219[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__);

(statearr_15219[(1)] = (1));

return statearr_15219;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____1 = (function (state_15210){
while(true){
var ret_value__14828__auto__ = (function (){try{while(true){
var result__14829__auto__ = switch__14826__auto__(state_15210);
if(cljs.core.keyword_identical_QMARK_(result__14829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14829__auto__;
}
break;
}
}catch (e15220){var ex__14830__auto__ = e15220;
var statearr_15221_17103 = state_15210;
(statearr_15221_17103[(2)] = ex__14830__auto__);


if(cljs.core.seq((state_15210[(4)]))){
var statearr_15226_17104 = state_15210;
(statearr_15226_17104[(1)] = cljs.core.first((state_15210[(4)])));

} else {
throw ex__14830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17105 = state_15210;
state_15210 = G__17105;
continue;
} else {
return ret_value__14828__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__ = function(state_15210){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____1.call(this,state_15210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_15229 = f__14889__auto__();
(statearr_15229[(6)] = c__14888__auto___17102);

return statearr_15229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15230){
var vec__15231 = p__15230;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15231,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15231,(1),null);
var job = vec__15231;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5762__auto___17106 = n;
var __17107 = (0);
while(true){
if((__17107 < n__5762__auto___17106)){
var G__15234_17108 = type;
var G__15234_17109__$1 = (((G__15234_17108 instanceof cljs.core.Keyword))?G__15234_17108.fqn:null);
switch (G__15234_17109__$1) {
case "compute":
var c__14888__auto___17111 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17107,c__14888__auto___17111,G__15234_17108,G__15234_17109__$1,n__5762__auto___17106,jobs,results,process__$1,async){
return (function (){
var f__14889__auto__ = (function (){var switch__14826__auto__ = ((function (__17107,c__14888__auto___17111,G__15234_17108,G__15234_17109__$1,n__5762__auto___17106,jobs,results,process__$1,async){
return (function (state_15247){
var state_val_15248 = (state_15247[(1)]);
if((state_val_15248 === (1))){
var state_15247__$1 = state_15247;
var statearr_15255_17112 = state_15247__$1;
(statearr_15255_17112[(2)] = null);

(statearr_15255_17112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15248 === (2))){
var state_15247__$1 = state_15247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15247__$1,(4),jobs);
} else {
if((state_val_15248 === (3))){
var inst_15245 = (state_15247[(2)]);
var state_15247__$1 = state_15247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15247__$1,inst_15245);
} else {
if((state_val_15248 === (4))){
var inst_15237 = (state_15247[(2)]);
var inst_15238 = process__$1(inst_15237);
var state_15247__$1 = state_15247;
if(cljs.core.truth_(inst_15238)){
var statearr_15258_17113 = state_15247__$1;
(statearr_15258_17113[(1)] = (5));

} else {
var statearr_15261_17114 = state_15247__$1;
(statearr_15261_17114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15248 === (5))){
var state_15247__$1 = state_15247;
var statearr_15262_17115 = state_15247__$1;
(statearr_15262_17115[(2)] = null);

(statearr_15262_17115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15248 === (6))){
var state_15247__$1 = state_15247;
var statearr_15263_17116 = state_15247__$1;
(statearr_15263_17116[(2)] = null);

(statearr_15263_17116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15248 === (7))){
var inst_15243 = (state_15247[(2)]);
var state_15247__$1 = state_15247;
var statearr_15264_17117 = state_15247__$1;
(statearr_15264_17117[(2)] = inst_15243);

(statearr_15264_17117[(1)] = (3));


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
});})(__17107,c__14888__auto___17111,G__15234_17108,G__15234_17109__$1,n__5762__auto___17106,jobs,results,process__$1,async))
;
return ((function (__17107,switch__14826__auto__,c__14888__auto___17111,G__15234_17108,G__15234_17109__$1,n__5762__auto___17106,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____0 = (function (){
var statearr_15265 = [null,null,null,null,null,null,null];
(statearr_15265[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__);

(statearr_15265[(1)] = (1));

return statearr_15265;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____1 = (function (state_15247){
while(true){
var ret_value__14828__auto__ = (function (){try{while(true){
var result__14829__auto__ = switch__14826__auto__(state_15247);
if(cljs.core.keyword_identical_QMARK_(result__14829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14829__auto__;
}
break;
}
}catch (e15266){var ex__14830__auto__ = e15266;
var statearr_15267_17118 = state_15247;
(statearr_15267_17118[(2)] = ex__14830__auto__);


if(cljs.core.seq((state_15247[(4)]))){
var statearr_15268_17119 = state_15247;
(statearr_15268_17119[(1)] = cljs.core.first((state_15247[(4)])));

} else {
throw ex__14830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17120 = state_15247;
state_15247 = G__17120;
continue;
} else {
return ret_value__14828__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__ = function(state_15247){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____1.call(this,state_15247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__;
})()
;})(__17107,switch__14826__auto__,c__14888__auto___17111,G__15234_17108,G__15234_17109__$1,n__5762__auto___17106,jobs,results,process__$1,async))
})();
var state__14890__auto__ = (function (){var statearr_15270 = f__14889__auto__();
(statearr_15270[(6)] = c__14888__auto___17111);

return statearr_15270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
});})(__17107,c__14888__auto___17111,G__15234_17108,G__15234_17109__$1,n__5762__auto___17106,jobs,results,process__$1,async))
);


break;
case "async":
var c__14888__auto___17121 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17107,c__14888__auto___17121,G__15234_17108,G__15234_17109__$1,n__5762__auto___17106,jobs,results,process__$1,async){
return (function (){
var f__14889__auto__ = (function (){var switch__14826__auto__ = ((function (__17107,c__14888__auto___17121,G__15234_17108,G__15234_17109__$1,n__5762__auto___17106,jobs,results,process__$1,async){
return (function (state_15283){
var state_val_15284 = (state_15283[(1)]);
if((state_val_15284 === (1))){
var state_15283__$1 = state_15283;
var statearr_15285_17122 = state_15283__$1;
(statearr_15285_17122[(2)] = null);

(statearr_15285_17122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (2))){
var state_15283__$1 = state_15283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15283__$1,(4),jobs);
} else {
if((state_val_15284 === (3))){
var inst_15281 = (state_15283[(2)]);
var state_15283__$1 = state_15283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15283__$1,inst_15281);
} else {
if((state_val_15284 === (4))){
var inst_15273 = (state_15283[(2)]);
var inst_15274 = async(inst_15273);
var state_15283__$1 = state_15283;
if(cljs.core.truth_(inst_15274)){
var statearr_15286_17123 = state_15283__$1;
(statearr_15286_17123[(1)] = (5));

} else {
var statearr_15287_17124 = state_15283__$1;
(statearr_15287_17124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (5))){
var state_15283__$1 = state_15283;
var statearr_15289_17125 = state_15283__$1;
(statearr_15289_17125[(2)] = null);

(statearr_15289_17125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (6))){
var state_15283__$1 = state_15283;
var statearr_15290_17126 = state_15283__$1;
(statearr_15290_17126[(2)] = null);

(statearr_15290_17126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15284 === (7))){
var inst_15279 = (state_15283[(2)]);
var state_15283__$1 = state_15283;
var statearr_15291_17128 = state_15283__$1;
(statearr_15291_17128[(2)] = inst_15279);

(statearr_15291_17128[(1)] = (3));


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
});})(__17107,c__14888__auto___17121,G__15234_17108,G__15234_17109__$1,n__5762__auto___17106,jobs,results,process__$1,async))
;
return ((function (__17107,switch__14826__auto__,c__14888__auto___17121,G__15234_17108,G__15234_17109__$1,n__5762__auto___17106,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____0 = (function (){
var statearr_15294 = [null,null,null,null,null,null,null];
(statearr_15294[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__);

(statearr_15294[(1)] = (1));

return statearr_15294;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____1 = (function (state_15283){
while(true){
var ret_value__14828__auto__ = (function (){try{while(true){
var result__14829__auto__ = switch__14826__auto__(state_15283);
if(cljs.core.keyword_identical_QMARK_(result__14829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14829__auto__;
}
break;
}
}catch (e15295){var ex__14830__auto__ = e15295;
var statearr_15296_17129 = state_15283;
(statearr_15296_17129[(2)] = ex__14830__auto__);


if(cljs.core.seq((state_15283[(4)]))){
var statearr_15297_17130 = state_15283;
(statearr_15297_17130[(1)] = cljs.core.first((state_15283[(4)])));

} else {
throw ex__14830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17131 = state_15283;
state_15283 = G__17131;
continue;
} else {
return ret_value__14828__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__ = function(state_15283){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____1.call(this,state_15283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__;
})()
;})(__17107,switch__14826__auto__,c__14888__auto___17121,G__15234_17108,G__15234_17109__$1,n__5762__auto___17106,jobs,results,process__$1,async))
})();
var state__14890__auto__ = (function (){var statearr_15298 = f__14889__auto__();
(statearr_15298[(6)] = c__14888__auto___17121);

return statearr_15298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
});})(__17107,c__14888__auto___17121,G__15234_17108,G__15234_17109__$1,n__5762__auto___17106,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15234_17109__$1))));

}

var G__17132 = (__17107 + (1));
__17107 = G__17132;
continue;
} else {
}
break;
}

var c__14888__auto___17133 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14826__auto__ = (function (state_15323){
var state_val_15324 = (state_15323[(1)]);
if((state_val_15324 === (7))){
var inst_15317 = (state_15323[(2)]);
var state_15323__$1 = state_15323;
var statearr_15327_17134 = state_15323__$1;
(statearr_15327_17134[(2)] = inst_15317);

(statearr_15327_17134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15324 === (1))){
var state_15323__$1 = state_15323;
var statearr_15328_17136 = state_15323__$1;
(statearr_15328_17136[(2)] = null);

(statearr_15328_17136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15324 === (4))){
var inst_15302 = (state_15323[(7)]);
var inst_15302__$1 = (state_15323[(2)]);
var inst_15303 = (inst_15302__$1 == null);
var state_15323__$1 = (function (){var statearr_15329 = state_15323;
(statearr_15329[(7)] = inst_15302__$1);

return statearr_15329;
})();
if(cljs.core.truth_(inst_15303)){
var statearr_15331_17137 = state_15323__$1;
(statearr_15331_17137[(1)] = (5));

} else {
var statearr_15332_17138 = state_15323__$1;
(statearr_15332_17138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15324 === (6))){
var inst_15302 = (state_15323[(7)]);
var inst_15307 = (state_15323[(8)]);
var inst_15307__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15308 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15309 = [inst_15302,inst_15307__$1];
var inst_15310 = (new cljs.core.PersistentVector(null,2,(5),inst_15308,inst_15309,null));
var state_15323__$1 = (function (){var statearr_15335 = state_15323;
(statearr_15335[(8)] = inst_15307__$1);

return statearr_15335;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15323__$1,(8),jobs,inst_15310);
} else {
if((state_val_15324 === (3))){
var inst_15319 = (state_15323[(2)]);
var state_15323__$1 = state_15323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15323__$1,inst_15319);
} else {
if((state_val_15324 === (2))){
var state_15323__$1 = state_15323;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15323__$1,(4),from);
} else {
if((state_val_15324 === (9))){
var inst_15314 = (state_15323[(2)]);
var state_15323__$1 = (function (){var statearr_15336 = state_15323;
(statearr_15336[(9)] = inst_15314);

return statearr_15336;
})();
var statearr_15337_17139 = state_15323__$1;
(statearr_15337_17139[(2)] = null);

(statearr_15337_17139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15324 === (5))){
var inst_15305 = cljs.core.async.close_BANG_(jobs);
var state_15323__$1 = state_15323;
var statearr_15338_17140 = state_15323__$1;
(statearr_15338_17140[(2)] = inst_15305);

(statearr_15338_17140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15324 === (8))){
var inst_15307 = (state_15323[(8)]);
var inst_15312 = (state_15323[(2)]);
var state_15323__$1 = (function (){var statearr_15343 = state_15323;
(statearr_15343[(10)] = inst_15312);

return statearr_15343;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15323__$1,(9),results,inst_15307);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____0 = (function (){
var statearr_15354 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15354[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__);

(statearr_15354[(1)] = (1));

return statearr_15354;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____1 = (function (state_15323){
while(true){
var ret_value__14828__auto__ = (function (){try{while(true){
var result__14829__auto__ = switch__14826__auto__(state_15323);
if(cljs.core.keyword_identical_QMARK_(result__14829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14829__auto__;
}
break;
}
}catch (e15355){var ex__14830__auto__ = e15355;
var statearr_15356_17142 = state_15323;
(statearr_15356_17142[(2)] = ex__14830__auto__);


if(cljs.core.seq((state_15323[(4)]))){
var statearr_15357_17143 = state_15323;
(statearr_15357_17143[(1)] = cljs.core.first((state_15323[(4)])));

} else {
throw ex__14830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17144 = state_15323;
state_15323 = G__17144;
continue;
} else {
return ret_value__14828__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__ = function(state_15323){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____1.call(this,state_15323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_15358 = f__14889__auto__();
(statearr_15358[(6)] = c__14888__auto___17133);

return statearr_15358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));


var c__14888__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14826__auto__ = (function (state_15396){
var state_val_15397 = (state_15396[(1)]);
if((state_val_15397 === (7))){
var inst_15392 = (state_15396[(2)]);
var state_15396__$1 = state_15396;
var statearr_15400_17147 = state_15396__$1;
(statearr_15400_17147[(2)] = inst_15392);

(statearr_15400_17147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15397 === (20))){
var state_15396__$1 = state_15396;
var statearr_15402_17148 = state_15396__$1;
(statearr_15402_17148[(2)] = null);

(statearr_15402_17148[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15397 === (1))){
var state_15396__$1 = state_15396;
var statearr_15403_17149 = state_15396__$1;
(statearr_15403_17149[(2)] = null);

(statearr_15403_17149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15397 === (4))){
var inst_15361 = (state_15396[(7)]);
var inst_15361__$1 = (state_15396[(2)]);
var inst_15362 = (inst_15361__$1 == null);
var state_15396__$1 = (function (){var statearr_15408 = state_15396;
(statearr_15408[(7)] = inst_15361__$1);

return statearr_15408;
})();
if(cljs.core.truth_(inst_15362)){
var statearr_15409_17150 = state_15396__$1;
(statearr_15409_17150[(1)] = (5));

} else {
var statearr_15411_17151 = state_15396__$1;
(statearr_15411_17151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15397 === (15))){
var inst_15374 = (state_15396[(8)]);
var state_15396__$1 = state_15396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15396__$1,(18),to,inst_15374);
} else {
if((state_val_15397 === (21))){
var inst_15387 = (state_15396[(2)]);
var state_15396__$1 = state_15396;
var statearr_15415_17152 = state_15396__$1;
(statearr_15415_17152[(2)] = inst_15387);

(statearr_15415_17152[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15397 === (13))){
var inst_15389 = (state_15396[(2)]);
var state_15396__$1 = (function (){var statearr_15416 = state_15396;
(statearr_15416[(9)] = inst_15389);

return statearr_15416;
})();
var statearr_15417_17153 = state_15396__$1;
(statearr_15417_17153[(2)] = null);

(statearr_15417_17153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15397 === (6))){
var inst_15361 = (state_15396[(7)]);
var state_15396__$1 = state_15396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15396__$1,(11),inst_15361);
} else {
if((state_val_15397 === (17))){
var inst_15382 = (state_15396[(2)]);
var state_15396__$1 = state_15396;
if(cljs.core.truth_(inst_15382)){
var statearr_15418_17154 = state_15396__$1;
(statearr_15418_17154[(1)] = (19));

} else {
var statearr_15419_17155 = state_15396__$1;
(statearr_15419_17155[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15397 === (3))){
var inst_15394 = (state_15396[(2)]);
var state_15396__$1 = state_15396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15396__$1,inst_15394);
} else {
if((state_val_15397 === (12))){
var inst_15371 = (state_15396[(10)]);
var state_15396__$1 = state_15396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15396__$1,(14),inst_15371);
} else {
if((state_val_15397 === (2))){
var state_15396__$1 = state_15396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15396__$1,(4),results);
} else {
if((state_val_15397 === (19))){
var state_15396__$1 = state_15396;
var statearr_15423_17156 = state_15396__$1;
(statearr_15423_17156[(2)] = null);

(statearr_15423_17156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15397 === (11))){
var inst_15371 = (state_15396[(2)]);
var state_15396__$1 = (function (){var statearr_15426 = state_15396;
(statearr_15426[(10)] = inst_15371);

return statearr_15426;
})();
var statearr_15427_17157 = state_15396__$1;
(statearr_15427_17157[(2)] = null);

(statearr_15427_17157[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15397 === (9))){
var state_15396__$1 = state_15396;
var statearr_15428_17158 = state_15396__$1;
(statearr_15428_17158[(2)] = null);

(statearr_15428_17158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15397 === (5))){
var state_15396__$1 = state_15396;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15429_17160 = state_15396__$1;
(statearr_15429_17160[(1)] = (8));

} else {
var statearr_15430_17161 = state_15396__$1;
(statearr_15430_17161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15397 === (14))){
var inst_15374 = (state_15396[(8)]);
var inst_15376 = (state_15396[(11)]);
var inst_15374__$1 = (state_15396[(2)]);
var inst_15375 = (inst_15374__$1 == null);
var inst_15376__$1 = cljs.core.not(inst_15375);
var state_15396__$1 = (function (){var statearr_15431 = state_15396;
(statearr_15431[(8)] = inst_15374__$1);

(statearr_15431[(11)] = inst_15376__$1);

return statearr_15431;
})();
if(inst_15376__$1){
var statearr_15432_17162 = state_15396__$1;
(statearr_15432_17162[(1)] = (15));

} else {
var statearr_15433_17163 = state_15396__$1;
(statearr_15433_17163[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15397 === (16))){
var inst_15376 = (state_15396[(11)]);
var state_15396__$1 = state_15396;
var statearr_15434_17164 = state_15396__$1;
(statearr_15434_17164[(2)] = inst_15376);

(statearr_15434_17164[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15397 === (10))){
var inst_15368 = (state_15396[(2)]);
var state_15396__$1 = state_15396;
var statearr_15435_17165 = state_15396__$1;
(statearr_15435_17165[(2)] = inst_15368);

(statearr_15435_17165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15397 === (18))){
var inst_15379 = (state_15396[(2)]);
var state_15396__$1 = state_15396;
var statearr_15436_17166 = state_15396__$1;
(statearr_15436_17166[(2)] = inst_15379);

(statearr_15436_17166[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15397 === (8))){
var inst_15365 = cljs.core.async.close_BANG_(to);
var state_15396__$1 = state_15396;
var statearr_15437_17167 = state_15396__$1;
(statearr_15437_17167[(2)] = inst_15365);

(statearr_15437_17167[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____0 = (function (){
var statearr_15438 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15438[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__);

(statearr_15438[(1)] = (1));

return statearr_15438;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____1 = (function (state_15396){
while(true){
var ret_value__14828__auto__ = (function (){try{while(true){
var result__14829__auto__ = switch__14826__auto__(state_15396);
if(cljs.core.keyword_identical_QMARK_(result__14829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14829__auto__;
}
break;
}
}catch (e15439){var ex__14830__auto__ = e15439;
var statearr_15440_17170 = state_15396;
(statearr_15440_17170[(2)] = ex__14830__auto__);


if(cljs.core.seq((state_15396[(4)]))){
var statearr_15441_17171 = state_15396;
(statearr_15441_17171[(1)] = cljs.core.first((state_15396[(4)])));

} else {
throw ex__14830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17172 = state_15396;
state_15396 = G__17172;
continue;
} else {
return ret_value__14828__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__ = function(state_15396){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____1.call(this,state_15396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14827__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14827__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_15442 = f__14889__auto__();
(statearr_15442[(6)] = c__14888__auto__);

return statearr_15442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));

return c__14888__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15447 = arguments.length;
switch (G__15447) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__15449 = arguments.length;
switch (G__15449) {
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
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__15455 = arguments.length;
switch (G__15455) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14888__auto___17178 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14826__auto__ = (function (state_15481){
var state_val_15482 = (state_15481[(1)]);
if((state_val_15482 === (7))){
var inst_15477 = (state_15481[(2)]);
var state_15481__$1 = state_15481;
var statearr_15483_17180 = state_15481__$1;
(statearr_15483_17180[(2)] = inst_15477);

(statearr_15483_17180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (1))){
var state_15481__$1 = state_15481;
var statearr_15484_17181 = state_15481__$1;
(statearr_15484_17181[(2)] = null);

(statearr_15484_17181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (4))){
var inst_15458 = (state_15481[(7)]);
var inst_15458__$1 = (state_15481[(2)]);
var inst_15459 = (inst_15458__$1 == null);
var state_15481__$1 = (function (){var statearr_15485 = state_15481;
(statearr_15485[(7)] = inst_15458__$1);

return statearr_15485;
})();
if(cljs.core.truth_(inst_15459)){
var statearr_15486_17182 = state_15481__$1;
(statearr_15486_17182[(1)] = (5));

} else {
var statearr_15487_17183 = state_15481__$1;
(statearr_15487_17183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (13))){
var state_15481__$1 = state_15481;
var statearr_15489_17185 = state_15481__$1;
(statearr_15489_17185[(2)] = null);

(statearr_15489_17185[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (6))){
var inst_15458 = (state_15481[(7)]);
var inst_15464 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15458) : p.call(null,inst_15458));
var state_15481__$1 = state_15481;
if(cljs.core.truth_(inst_15464)){
var statearr_15490_17188 = state_15481__$1;
(statearr_15490_17188[(1)] = (9));

} else {
var statearr_15491_17189 = state_15481__$1;
(statearr_15491_17189[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (3))){
var inst_15479 = (state_15481[(2)]);
var state_15481__$1 = state_15481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15481__$1,inst_15479);
} else {
if((state_val_15482 === (12))){
var state_15481__$1 = state_15481;
var statearr_15494_17190 = state_15481__$1;
(statearr_15494_17190[(2)] = null);

(statearr_15494_17190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (2))){
var state_15481__$1 = state_15481;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15481__$1,(4),ch);
} else {
if((state_val_15482 === (11))){
var inst_15458 = (state_15481[(7)]);
var inst_15468 = (state_15481[(2)]);
var state_15481__$1 = state_15481;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15481__$1,(8),inst_15468,inst_15458);
} else {
if((state_val_15482 === (9))){
var state_15481__$1 = state_15481;
var statearr_15495_17191 = state_15481__$1;
(statearr_15495_17191[(2)] = tc);

(statearr_15495_17191[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (5))){
var inst_15461 = cljs.core.async.close_BANG_(tc);
var inst_15462 = cljs.core.async.close_BANG_(fc);
var state_15481__$1 = (function (){var statearr_15496 = state_15481;
(statearr_15496[(8)] = inst_15461);

return statearr_15496;
})();
var statearr_15497_17192 = state_15481__$1;
(statearr_15497_17192[(2)] = inst_15462);

(statearr_15497_17192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (14))){
var inst_15475 = (state_15481[(2)]);
var state_15481__$1 = state_15481;
var statearr_15498_17193 = state_15481__$1;
(statearr_15498_17193[(2)] = inst_15475);

(statearr_15498_17193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (10))){
var state_15481__$1 = state_15481;
var statearr_15499_17194 = state_15481__$1;
(statearr_15499_17194[(2)] = fc);

(statearr_15499_17194[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15482 === (8))){
var inst_15470 = (state_15481[(2)]);
var state_15481__$1 = state_15481;
if(cljs.core.truth_(inst_15470)){
var statearr_15500_17195 = state_15481__$1;
(statearr_15500_17195[(1)] = (12));

} else {
var statearr_15501_17196 = state_15481__$1;
(statearr_15501_17196[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__14827__auto__ = null;
var cljs$core$async$state_machine__14827__auto____0 = (function (){
var statearr_15502 = [null,null,null,null,null,null,null,null,null];
(statearr_15502[(0)] = cljs$core$async$state_machine__14827__auto__);

(statearr_15502[(1)] = (1));

return statearr_15502;
});
var cljs$core$async$state_machine__14827__auto____1 = (function (state_15481){
while(true){
var ret_value__14828__auto__ = (function (){try{while(true){
var result__14829__auto__ = switch__14826__auto__(state_15481);
if(cljs.core.keyword_identical_QMARK_(result__14829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14829__auto__;
}
break;
}
}catch (e15503){var ex__14830__auto__ = e15503;
var statearr_15504_17197 = state_15481;
(statearr_15504_17197[(2)] = ex__14830__auto__);


if(cljs.core.seq((state_15481[(4)]))){
var statearr_15509_17198 = state_15481;
(statearr_15509_17198[(1)] = cljs.core.first((state_15481[(4)])));

} else {
throw ex__14830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17199 = state_15481;
state_15481 = G__17199;
continue;
} else {
return ret_value__14828__auto__;
}
break;
}
});
cljs$core$async$state_machine__14827__auto__ = function(state_15481){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14827__auto____1.call(this,state_15481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14827__auto____0;
cljs$core$async$state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14827__auto____1;
return cljs$core$async$state_machine__14827__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_15518 = f__14889__auto__();
(statearr_15518[(6)] = c__14888__auto___17178);

return statearr_15518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14888__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14826__auto__ = (function (state_15542){
var state_val_15543 = (state_15542[(1)]);
if((state_val_15543 === (7))){
var inst_15538 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
var statearr_15546_17200 = state_15542__$1;
(statearr_15546_17200[(2)] = inst_15538);

(statearr_15546_17200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (1))){
var inst_15521 = init;
var inst_15522 = inst_15521;
var state_15542__$1 = (function (){var statearr_15548 = state_15542;
(statearr_15548[(7)] = inst_15522);

return statearr_15548;
})();
var statearr_15549_17201 = state_15542__$1;
(statearr_15549_17201[(2)] = null);

(statearr_15549_17201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (4))){
var inst_15525 = (state_15542[(8)]);
var inst_15525__$1 = (state_15542[(2)]);
var inst_15526 = (inst_15525__$1 == null);
var state_15542__$1 = (function (){var statearr_15552 = state_15542;
(statearr_15552[(8)] = inst_15525__$1);

return statearr_15552;
})();
if(cljs.core.truth_(inst_15526)){
var statearr_15557_17205 = state_15542__$1;
(statearr_15557_17205[(1)] = (5));

} else {
var statearr_15560_17206 = state_15542__$1;
(statearr_15560_17206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (6))){
var inst_15522 = (state_15542[(7)]);
var inst_15525 = (state_15542[(8)]);
var inst_15529 = (state_15542[(9)]);
var inst_15529__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15522,inst_15525) : f.call(null,inst_15522,inst_15525));
var inst_15530 = cljs.core.reduced_QMARK_(inst_15529__$1);
var state_15542__$1 = (function (){var statearr_15561 = state_15542;
(statearr_15561[(9)] = inst_15529__$1);

return statearr_15561;
})();
if(inst_15530){
var statearr_15562_17207 = state_15542__$1;
(statearr_15562_17207[(1)] = (8));

} else {
var statearr_15566_17208 = state_15542__$1;
(statearr_15566_17208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (3))){
var inst_15540 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15542__$1,inst_15540);
} else {
if((state_val_15543 === (2))){
var state_15542__$1 = state_15542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15542__$1,(4),ch);
} else {
if((state_val_15543 === (9))){
var inst_15529 = (state_15542[(9)]);
var inst_15522 = inst_15529;
var state_15542__$1 = (function (){var statearr_15572 = state_15542;
(statearr_15572[(7)] = inst_15522);

return statearr_15572;
})();
var statearr_15573_17209 = state_15542__$1;
(statearr_15573_17209[(2)] = null);

(statearr_15573_17209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (5))){
var inst_15522 = (state_15542[(7)]);
var state_15542__$1 = state_15542;
var statearr_15577_17210 = state_15542__$1;
(statearr_15577_17210[(2)] = inst_15522);

(statearr_15577_17210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (10))){
var inst_15536 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
var statearr_15580_17211 = state_15542__$1;
(statearr_15580_17211[(2)] = inst_15536);

(statearr_15580_17211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (8))){
var inst_15529 = (state_15542[(9)]);
var inst_15532 = cljs.core.deref(inst_15529);
var state_15542__$1 = state_15542;
var statearr_15584_17212 = state_15542__$1;
(statearr_15584_17212[(2)] = inst_15532);

(statearr_15584_17212[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14827__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14827__auto____0 = (function (){
var statearr_15587 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15587[(0)] = cljs$core$async$reduce_$_state_machine__14827__auto__);

(statearr_15587[(1)] = (1));

return statearr_15587;
});
var cljs$core$async$reduce_$_state_machine__14827__auto____1 = (function (state_15542){
while(true){
var ret_value__14828__auto__ = (function (){try{while(true){
var result__14829__auto__ = switch__14826__auto__(state_15542);
if(cljs.core.keyword_identical_QMARK_(result__14829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14829__auto__;
}
break;
}
}catch (e15590){var ex__14830__auto__ = e15590;
var statearr_15591_17213 = state_15542;
(statearr_15591_17213[(2)] = ex__14830__auto__);


if(cljs.core.seq((state_15542[(4)]))){
var statearr_15592_17218 = state_15542;
(statearr_15592_17218[(1)] = cljs.core.first((state_15542[(4)])));

} else {
throw ex__14830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17219 = state_15542;
state_15542 = G__17219;
continue;
} else {
return ret_value__14828__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14827__auto__ = function(state_15542){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14827__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14827__auto____1.call(this,state_15542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14827__auto____0;
cljs$core$async$reduce_$_state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14827__auto____1;
return cljs$core$async$reduce_$_state_machine__14827__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_15593 = f__14889__auto__();
(statearr_15593[(6)] = c__14888__auto__);

return statearr_15593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));

return c__14888__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14888__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14826__auto__ = (function (state_15601){
var state_val_15602 = (state_15601[(1)]);
if((state_val_15602 === (1))){
var inst_15595 = cljs.core.async.reduce(f__$1,init,ch);
var state_15601__$1 = state_15601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15601__$1,(2),inst_15595);
} else {
if((state_val_15602 === (2))){
var inst_15598 = (state_15601[(2)]);
var inst_15599 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15598) : f__$1.call(null,inst_15598));
var state_15601__$1 = state_15601;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15601__$1,inst_15599);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14827__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14827__auto____0 = (function (){
var statearr_15603 = [null,null,null,null,null,null,null];
(statearr_15603[(0)] = cljs$core$async$transduce_$_state_machine__14827__auto__);

(statearr_15603[(1)] = (1));

return statearr_15603;
});
var cljs$core$async$transduce_$_state_machine__14827__auto____1 = (function (state_15601){
while(true){
var ret_value__14828__auto__ = (function (){try{while(true){
var result__14829__auto__ = switch__14826__auto__(state_15601);
if(cljs.core.keyword_identical_QMARK_(result__14829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14829__auto__;
}
break;
}
}catch (e15604){var ex__14830__auto__ = e15604;
var statearr_15605_17220 = state_15601;
(statearr_15605_17220[(2)] = ex__14830__auto__);


if(cljs.core.seq((state_15601[(4)]))){
var statearr_15608_17221 = state_15601;
(statearr_15608_17221[(1)] = cljs.core.first((state_15601[(4)])));

} else {
throw ex__14830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17222 = state_15601;
state_15601 = G__17222;
continue;
} else {
return ret_value__14828__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14827__auto__ = function(state_15601){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14827__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14827__auto____1.call(this,state_15601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14827__auto____0;
cljs$core$async$transduce_$_state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14827__auto____1;
return cljs$core$async$transduce_$_state_machine__14827__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_15613 = f__14889__auto__();
(statearr_15613[(6)] = c__14888__auto__);

return statearr_15613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));

return c__14888__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15617 = arguments.length;
switch (G__15617) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14888__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14826__auto__ = (function (state_15654){
var state_val_15655 = (state_15654[(1)]);
if((state_val_15655 === (7))){
var inst_15636 = (state_15654[(2)]);
var state_15654__$1 = state_15654;
var statearr_15656_17224 = state_15654__$1;
(statearr_15656_17224[(2)] = inst_15636);

(statearr_15656_17224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15655 === (1))){
var inst_15626 = cljs.core.seq(coll);
var inst_15627 = inst_15626;
var state_15654__$1 = (function (){var statearr_15657 = state_15654;
(statearr_15657[(7)] = inst_15627);

return statearr_15657;
})();
var statearr_15658_17225 = state_15654__$1;
(statearr_15658_17225[(2)] = null);

(statearr_15658_17225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15655 === (4))){
var inst_15627 = (state_15654[(7)]);
var inst_15634 = cljs.core.first(inst_15627);
var state_15654__$1 = state_15654;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15654__$1,(7),ch,inst_15634);
} else {
if((state_val_15655 === (13))){
var inst_15648 = (state_15654[(2)]);
var state_15654__$1 = state_15654;
var statearr_15660_17226 = state_15654__$1;
(statearr_15660_17226[(2)] = inst_15648);

(statearr_15660_17226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15655 === (6))){
var inst_15639 = (state_15654[(2)]);
var state_15654__$1 = state_15654;
if(cljs.core.truth_(inst_15639)){
var statearr_15663_17227 = state_15654__$1;
(statearr_15663_17227[(1)] = (8));

} else {
var statearr_15666_17228 = state_15654__$1;
(statearr_15666_17228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15655 === (3))){
var inst_15652 = (state_15654[(2)]);
var state_15654__$1 = state_15654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15654__$1,inst_15652);
} else {
if((state_val_15655 === (12))){
var state_15654__$1 = state_15654;
var statearr_15672_17229 = state_15654__$1;
(statearr_15672_17229[(2)] = null);

(statearr_15672_17229[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15655 === (2))){
var inst_15627 = (state_15654[(7)]);
var state_15654__$1 = state_15654;
if(cljs.core.truth_(inst_15627)){
var statearr_15674_17230 = state_15654__$1;
(statearr_15674_17230[(1)] = (4));

} else {
var statearr_15675_17231 = state_15654__$1;
(statearr_15675_17231[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15655 === (11))){
var inst_15645 = cljs.core.async.close_BANG_(ch);
var state_15654__$1 = state_15654;
var statearr_15677_17232 = state_15654__$1;
(statearr_15677_17232[(2)] = inst_15645);

(statearr_15677_17232[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15655 === (9))){
var state_15654__$1 = state_15654;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15678_17237 = state_15654__$1;
(statearr_15678_17237[(1)] = (11));

} else {
var statearr_15679_17238 = state_15654__$1;
(statearr_15679_17238[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15655 === (5))){
var inst_15627 = (state_15654[(7)]);
var state_15654__$1 = state_15654;
var statearr_15682_17239 = state_15654__$1;
(statearr_15682_17239[(2)] = inst_15627);

(statearr_15682_17239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15655 === (10))){
var inst_15650 = (state_15654[(2)]);
var state_15654__$1 = state_15654;
var statearr_15683_17240 = state_15654__$1;
(statearr_15683_17240[(2)] = inst_15650);

(statearr_15683_17240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15655 === (8))){
var inst_15627 = (state_15654[(7)]);
var inst_15641 = cljs.core.next(inst_15627);
var inst_15627__$1 = inst_15641;
var state_15654__$1 = (function (){var statearr_15684 = state_15654;
(statearr_15684[(7)] = inst_15627__$1);

return statearr_15684;
})();
var statearr_15685_17241 = state_15654__$1;
(statearr_15685_17241[(2)] = null);

(statearr_15685_17241[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__14827__auto__ = null;
var cljs$core$async$state_machine__14827__auto____0 = (function (){
var statearr_15694 = [null,null,null,null,null,null,null,null];
(statearr_15694[(0)] = cljs$core$async$state_machine__14827__auto__);

(statearr_15694[(1)] = (1));

return statearr_15694;
});
var cljs$core$async$state_machine__14827__auto____1 = (function (state_15654){
while(true){
var ret_value__14828__auto__ = (function (){try{while(true){
var result__14829__auto__ = switch__14826__auto__(state_15654);
if(cljs.core.keyword_identical_QMARK_(result__14829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14829__auto__;
}
break;
}
}catch (e15699){var ex__14830__auto__ = e15699;
var statearr_15700_17242 = state_15654;
(statearr_15700_17242[(2)] = ex__14830__auto__);


if(cljs.core.seq((state_15654[(4)]))){
var statearr_15701_17243 = state_15654;
(statearr_15701_17243[(1)] = cljs.core.first((state_15654[(4)])));

} else {
throw ex__14830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17244 = state_15654;
state_15654 = G__17244;
continue;
} else {
return ret_value__14828__auto__;
}
break;
}
});
cljs$core$async$state_machine__14827__auto__ = function(state_15654){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14827__auto____1.call(this,state_15654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14827__auto____0;
cljs$core$async$state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14827__auto____1;
return cljs$core$async$state_machine__14827__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_15702 = f__14889__auto__();
(statearr_15702[(6)] = c__14888__auto__);

return statearr_15702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));

return c__14888__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15705 = arguments.length;
switch (G__15705) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17246 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17246(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17250 = (function (m,ch,close_QMARK_){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5520__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5518__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17250(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17256 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17256(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17260 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17260(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15741 = (function (ch,cs,meta15742){
this.ch = ch;
this.cs = cs;
this.meta15742 = meta15742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15743,meta15742__$1){
var self__ = this;
var _15743__$1 = this;
return (new cljs.core.async.t_cljs$core$async15741(self__.ch,self__.cs,meta15742__$1));
}));

(cljs.core.async.t_cljs$core$async15741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15743){
var self__ = this;
var _15743__$1 = this;
return self__.meta15742;
}));

(cljs.core.async.t_cljs$core$async15741.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15741.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15741.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15741.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15741.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15741.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15741.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15742","meta15742",1645706379,null)], null);
}));

(cljs.core.async.t_cljs$core$async15741.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15741");

(cljs.core.async.t_cljs$core$async15741.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async15741");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15741.
 */
cljs.core.async.__GT_t_cljs$core$async15741 = (function cljs$core$async$__GT_t_cljs$core$async15741(ch,cs,meta15742){
return (new cljs.core.async.t_cljs$core$async15741(ch,cs,meta15742));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15741(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14888__auto___17265 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14826__auto__ = (function (state_15883){
var state_val_15884 = (state_15883[(1)]);
if((state_val_15884 === (7))){
var inst_15879 = (state_15883[(2)]);
var state_15883__$1 = state_15883;
var statearr_15887_17266 = state_15883__$1;
(statearr_15887_17266[(2)] = inst_15879);

(statearr_15887_17266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (20))){
var inst_15782 = (state_15883[(7)]);
var inst_15794 = cljs.core.first(inst_15782);
var inst_15795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15794,(0),null);
var inst_15796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15794,(1),null);
var state_15883__$1 = (function (){var statearr_15888 = state_15883;
(statearr_15888[(8)] = inst_15795);

return statearr_15888;
})();
if(cljs.core.truth_(inst_15796)){
var statearr_15889_17267 = state_15883__$1;
(statearr_15889_17267[(1)] = (22));

} else {
var statearr_15890_17268 = state_15883__$1;
(statearr_15890_17268[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (27))){
var inst_15826 = (state_15883[(9)]);
var inst_15828 = (state_15883[(10)]);
var inst_15833 = (state_15883[(11)]);
var inst_15751 = (state_15883[(12)]);
var inst_15833__$1 = cljs.core._nth(inst_15826,inst_15828);
var inst_15834 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15833__$1,inst_15751,done);
var state_15883__$1 = (function (){var statearr_15893 = state_15883;
(statearr_15893[(11)] = inst_15833__$1);

return statearr_15893;
})();
if(cljs.core.truth_(inst_15834)){
var statearr_15894_17269 = state_15883__$1;
(statearr_15894_17269[(1)] = (30));

} else {
var statearr_15895_17270 = state_15883__$1;
(statearr_15895_17270[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (1))){
var state_15883__$1 = state_15883;
var statearr_15896_17271 = state_15883__$1;
(statearr_15896_17271[(2)] = null);

(statearr_15896_17271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (24))){
var inst_15782 = (state_15883[(7)]);
var inst_15802 = (state_15883[(2)]);
var inst_15803 = cljs.core.next(inst_15782);
var inst_15760 = inst_15803;
var inst_15761 = null;
var inst_15762 = (0);
var inst_15763 = (0);
var state_15883__$1 = (function (){var statearr_15899 = state_15883;
(statearr_15899[(13)] = inst_15802);

(statearr_15899[(14)] = inst_15760);

(statearr_15899[(15)] = inst_15761);

(statearr_15899[(16)] = inst_15762);

(statearr_15899[(17)] = inst_15763);

return statearr_15899;
})();
var statearr_15900_17272 = state_15883__$1;
(statearr_15900_17272[(2)] = null);

(statearr_15900_17272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (39))){
var state_15883__$1 = state_15883;
var statearr_15906_17273 = state_15883__$1;
(statearr_15906_17273[(2)] = null);

(statearr_15906_17273[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (4))){
var inst_15751 = (state_15883[(12)]);
var inst_15751__$1 = (state_15883[(2)]);
var inst_15752 = (inst_15751__$1 == null);
var state_15883__$1 = (function (){var statearr_15907 = state_15883;
(statearr_15907[(12)] = inst_15751__$1);

return statearr_15907;
})();
if(cljs.core.truth_(inst_15752)){
var statearr_15908_17278 = state_15883__$1;
(statearr_15908_17278[(1)] = (5));

} else {
var statearr_15911_17279 = state_15883__$1;
(statearr_15911_17279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (15))){
var inst_15763 = (state_15883[(17)]);
var inst_15760 = (state_15883[(14)]);
var inst_15761 = (state_15883[(15)]);
var inst_15762 = (state_15883[(16)]);
var inst_15778 = (state_15883[(2)]);
var inst_15779 = (inst_15763 + (1));
var tmp15903 = inst_15761;
var tmp15904 = inst_15762;
var tmp15905 = inst_15760;
var inst_15760__$1 = tmp15905;
var inst_15761__$1 = tmp15903;
var inst_15762__$1 = tmp15904;
var inst_15763__$1 = inst_15779;
var state_15883__$1 = (function (){var statearr_15912 = state_15883;
(statearr_15912[(18)] = inst_15778);

(statearr_15912[(14)] = inst_15760__$1);

(statearr_15912[(15)] = inst_15761__$1);

(statearr_15912[(16)] = inst_15762__$1);

(statearr_15912[(17)] = inst_15763__$1);

return statearr_15912;
})();
var statearr_15913_17283 = state_15883__$1;
(statearr_15913_17283[(2)] = null);

(statearr_15913_17283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (21))){
var inst_15806 = (state_15883[(2)]);
var state_15883__$1 = state_15883;
var statearr_15918_17284 = state_15883__$1;
(statearr_15918_17284[(2)] = inst_15806);

(statearr_15918_17284[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (31))){
var inst_15833 = (state_15883[(11)]);
var inst_15837 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15833);
var state_15883__$1 = state_15883;
var statearr_15919_17285 = state_15883__$1;
(statearr_15919_17285[(2)] = inst_15837);

(statearr_15919_17285[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (32))){
var inst_15828 = (state_15883[(10)]);
var inst_15825 = (state_15883[(19)]);
var inst_15826 = (state_15883[(9)]);
var inst_15827 = (state_15883[(20)]);
var inst_15839 = (state_15883[(2)]);
var inst_15840 = (inst_15828 + (1));
var tmp15914 = inst_15826;
var tmp15915 = inst_15827;
var tmp15916 = inst_15825;
var inst_15825__$1 = tmp15916;
var inst_15826__$1 = tmp15914;
var inst_15827__$1 = tmp15915;
var inst_15828__$1 = inst_15840;
var state_15883__$1 = (function (){var statearr_15922 = state_15883;
(statearr_15922[(21)] = inst_15839);

(statearr_15922[(19)] = inst_15825__$1);

(statearr_15922[(9)] = inst_15826__$1);

(statearr_15922[(20)] = inst_15827__$1);

(statearr_15922[(10)] = inst_15828__$1);

return statearr_15922;
})();
var statearr_15923_17286 = state_15883__$1;
(statearr_15923_17286[(2)] = null);

(statearr_15923_17286[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (40))){
var inst_15852 = (state_15883[(22)]);
var inst_15856 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15852);
var state_15883__$1 = state_15883;
var statearr_15925_17287 = state_15883__$1;
(statearr_15925_17287[(2)] = inst_15856);

(statearr_15925_17287[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (33))){
var inst_15843 = (state_15883[(23)]);
var inst_15845 = cljs.core.chunked_seq_QMARK_(inst_15843);
var state_15883__$1 = state_15883;
if(inst_15845){
var statearr_15927_17288 = state_15883__$1;
(statearr_15927_17288[(1)] = (36));

} else {
var statearr_15928_17289 = state_15883__$1;
(statearr_15928_17289[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (13))){
var inst_15772 = (state_15883[(24)]);
var inst_15775 = cljs.core.async.close_BANG_(inst_15772);
var state_15883__$1 = state_15883;
var statearr_15929_17293 = state_15883__$1;
(statearr_15929_17293[(2)] = inst_15775);

(statearr_15929_17293[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (22))){
var inst_15795 = (state_15883[(8)]);
var inst_15799 = cljs.core.async.close_BANG_(inst_15795);
var state_15883__$1 = state_15883;
var statearr_15930_17294 = state_15883__$1;
(statearr_15930_17294[(2)] = inst_15799);

(statearr_15930_17294[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (36))){
var inst_15843 = (state_15883[(23)]);
var inst_15847 = cljs.core.chunk_first(inst_15843);
var inst_15848 = cljs.core.chunk_rest(inst_15843);
var inst_15849 = cljs.core.count(inst_15847);
var inst_15825 = inst_15848;
var inst_15826 = inst_15847;
var inst_15827 = inst_15849;
var inst_15828 = (0);
var state_15883__$1 = (function (){var statearr_15932 = state_15883;
(statearr_15932[(19)] = inst_15825);

(statearr_15932[(9)] = inst_15826);

(statearr_15932[(20)] = inst_15827);

(statearr_15932[(10)] = inst_15828);

return statearr_15932;
})();
var statearr_15933_17298 = state_15883__$1;
(statearr_15933_17298[(2)] = null);

(statearr_15933_17298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (41))){
var inst_15843 = (state_15883[(23)]);
var inst_15858 = (state_15883[(2)]);
var inst_15859 = cljs.core.next(inst_15843);
var inst_15825 = inst_15859;
var inst_15826 = null;
var inst_15827 = (0);
var inst_15828 = (0);
var state_15883__$1 = (function (){var statearr_15938 = state_15883;
(statearr_15938[(25)] = inst_15858);

(statearr_15938[(19)] = inst_15825);

(statearr_15938[(9)] = inst_15826);

(statearr_15938[(20)] = inst_15827);

(statearr_15938[(10)] = inst_15828);

return statearr_15938;
})();
var statearr_15940_17299 = state_15883__$1;
(statearr_15940_17299[(2)] = null);

(statearr_15940_17299[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (43))){
var state_15883__$1 = state_15883;
var statearr_15943_17301 = state_15883__$1;
(statearr_15943_17301[(2)] = null);

(statearr_15943_17301[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (29))){
var inst_15867 = (state_15883[(2)]);
var state_15883__$1 = state_15883;
var statearr_15947_17302 = state_15883__$1;
(statearr_15947_17302[(2)] = inst_15867);

(statearr_15947_17302[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (44))){
var inst_15876 = (state_15883[(2)]);
var state_15883__$1 = (function (){var statearr_15949 = state_15883;
(statearr_15949[(26)] = inst_15876);

return statearr_15949;
})();
var statearr_15951_17303 = state_15883__$1;
(statearr_15951_17303[(2)] = null);

(statearr_15951_17303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (6))){
var inst_15817 = (state_15883[(27)]);
var inst_15816 = cljs.core.deref(cs);
var inst_15817__$1 = cljs.core.keys(inst_15816);
var inst_15818 = cljs.core.count(inst_15817__$1);
var inst_15819 = cljs.core.reset_BANG_(dctr,inst_15818);
var inst_15824 = cljs.core.seq(inst_15817__$1);
var inst_15825 = inst_15824;
var inst_15826 = null;
var inst_15827 = (0);
var inst_15828 = (0);
var state_15883__$1 = (function (){var statearr_15957 = state_15883;
(statearr_15957[(27)] = inst_15817__$1);

(statearr_15957[(28)] = inst_15819);

(statearr_15957[(19)] = inst_15825);

(statearr_15957[(9)] = inst_15826);

(statearr_15957[(20)] = inst_15827);

(statearr_15957[(10)] = inst_15828);

return statearr_15957;
})();
var statearr_15959_17305 = state_15883__$1;
(statearr_15959_17305[(2)] = null);

(statearr_15959_17305[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (28))){
var inst_15825 = (state_15883[(19)]);
var inst_15843 = (state_15883[(23)]);
var inst_15843__$1 = cljs.core.seq(inst_15825);
var state_15883__$1 = (function (){var statearr_15965 = state_15883;
(statearr_15965[(23)] = inst_15843__$1);

return statearr_15965;
})();
if(inst_15843__$1){
var statearr_15966_17306 = state_15883__$1;
(statearr_15966_17306[(1)] = (33));

} else {
var statearr_15967_17307 = state_15883__$1;
(statearr_15967_17307[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (25))){
var inst_15828 = (state_15883[(10)]);
var inst_15827 = (state_15883[(20)]);
var inst_15830 = (inst_15828 < inst_15827);
var inst_15831 = inst_15830;
var state_15883__$1 = state_15883;
if(cljs.core.truth_(inst_15831)){
var statearr_15973_17308 = state_15883__$1;
(statearr_15973_17308[(1)] = (27));

} else {
var statearr_15974_17309 = state_15883__$1;
(statearr_15974_17309[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (34))){
var state_15883__$1 = state_15883;
var statearr_15976_17313 = state_15883__$1;
(statearr_15976_17313[(2)] = null);

(statearr_15976_17313[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (17))){
var state_15883__$1 = state_15883;
var statearr_15980_17314 = state_15883__$1;
(statearr_15980_17314[(2)] = null);

(statearr_15980_17314[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (3))){
var inst_15881 = (state_15883[(2)]);
var state_15883__$1 = state_15883;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15883__$1,inst_15881);
} else {
if((state_val_15884 === (12))){
var inst_15811 = (state_15883[(2)]);
var state_15883__$1 = state_15883;
var statearr_15982_17315 = state_15883__$1;
(statearr_15982_17315[(2)] = inst_15811);

(statearr_15982_17315[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (2))){
var state_15883__$1 = state_15883;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15883__$1,(4),ch);
} else {
if((state_val_15884 === (23))){
var state_15883__$1 = state_15883;
var statearr_15983_17316 = state_15883__$1;
(statearr_15983_17316[(2)] = null);

(statearr_15983_17316[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (35))){
var inst_15865 = (state_15883[(2)]);
var state_15883__$1 = state_15883;
var statearr_15984_17317 = state_15883__$1;
(statearr_15984_17317[(2)] = inst_15865);

(statearr_15984_17317[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (19))){
var inst_15782 = (state_15883[(7)]);
var inst_15786 = cljs.core.chunk_first(inst_15782);
var inst_15787 = cljs.core.chunk_rest(inst_15782);
var inst_15788 = cljs.core.count(inst_15786);
var inst_15760 = inst_15787;
var inst_15761 = inst_15786;
var inst_15762 = inst_15788;
var inst_15763 = (0);
var state_15883__$1 = (function (){var statearr_15988 = state_15883;
(statearr_15988[(14)] = inst_15760);

(statearr_15988[(15)] = inst_15761);

(statearr_15988[(16)] = inst_15762);

(statearr_15988[(17)] = inst_15763);

return statearr_15988;
})();
var statearr_15996_17318 = state_15883__$1;
(statearr_15996_17318[(2)] = null);

(statearr_15996_17318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (11))){
var inst_15760 = (state_15883[(14)]);
var inst_15782 = (state_15883[(7)]);
var inst_15782__$1 = cljs.core.seq(inst_15760);
var state_15883__$1 = (function (){var statearr_15999 = state_15883;
(statearr_15999[(7)] = inst_15782__$1);

return statearr_15999;
})();
if(inst_15782__$1){
var statearr_16001_17319 = state_15883__$1;
(statearr_16001_17319[(1)] = (16));

} else {
var statearr_16002_17320 = state_15883__$1;
(statearr_16002_17320[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (9))){
var inst_15813 = (state_15883[(2)]);
var state_15883__$1 = state_15883;
var statearr_16004_17321 = state_15883__$1;
(statearr_16004_17321[(2)] = inst_15813);

(statearr_16004_17321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (5))){
var inst_15758 = cljs.core.deref(cs);
var inst_15759 = cljs.core.seq(inst_15758);
var inst_15760 = inst_15759;
var inst_15761 = null;
var inst_15762 = (0);
var inst_15763 = (0);
var state_15883__$1 = (function (){var statearr_16007 = state_15883;
(statearr_16007[(14)] = inst_15760);

(statearr_16007[(15)] = inst_15761);

(statearr_16007[(16)] = inst_15762);

(statearr_16007[(17)] = inst_15763);

return statearr_16007;
})();
var statearr_16008_17326 = state_15883__$1;
(statearr_16008_17326[(2)] = null);

(statearr_16008_17326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (14))){
var state_15883__$1 = state_15883;
var statearr_16009_17327 = state_15883__$1;
(statearr_16009_17327[(2)] = null);

(statearr_16009_17327[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (45))){
var inst_15873 = (state_15883[(2)]);
var state_15883__$1 = state_15883;
var statearr_16010_17328 = state_15883__$1;
(statearr_16010_17328[(2)] = inst_15873);

(statearr_16010_17328[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (26))){
var inst_15817 = (state_15883[(27)]);
var inst_15869 = (state_15883[(2)]);
var inst_15870 = cljs.core.seq(inst_15817);
var state_15883__$1 = (function (){var statearr_16014 = state_15883;
(statearr_16014[(29)] = inst_15869);

return statearr_16014;
})();
if(inst_15870){
var statearr_16015_17329 = state_15883__$1;
(statearr_16015_17329[(1)] = (42));

} else {
var statearr_16016_17330 = state_15883__$1;
(statearr_16016_17330[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (16))){
var inst_15782 = (state_15883[(7)]);
var inst_15784 = cljs.core.chunked_seq_QMARK_(inst_15782);
var state_15883__$1 = state_15883;
if(inst_15784){
var statearr_16017_17331 = state_15883__$1;
(statearr_16017_17331[(1)] = (19));

} else {
var statearr_16018_17332 = state_15883__$1;
(statearr_16018_17332[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (38))){
var inst_15862 = (state_15883[(2)]);
var state_15883__$1 = state_15883;
var statearr_16019_17333 = state_15883__$1;
(statearr_16019_17333[(2)] = inst_15862);

(statearr_16019_17333[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (30))){
var state_15883__$1 = state_15883;
var statearr_16020_17334 = state_15883__$1;
(statearr_16020_17334[(2)] = null);

(statearr_16020_17334[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (10))){
var inst_15761 = (state_15883[(15)]);
var inst_15763 = (state_15883[(17)]);
var inst_15771 = cljs.core._nth(inst_15761,inst_15763);
var inst_15772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15771,(0),null);
var inst_15773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15771,(1),null);
var state_15883__$1 = (function (){var statearr_16022 = state_15883;
(statearr_16022[(24)] = inst_15772);

return statearr_16022;
})();
if(cljs.core.truth_(inst_15773)){
var statearr_16023_17335 = state_15883__$1;
(statearr_16023_17335[(1)] = (13));

} else {
var statearr_16024_17336 = state_15883__$1;
(statearr_16024_17336[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (18))){
var inst_15809 = (state_15883[(2)]);
var state_15883__$1 = state_15883;
var statearr_16025_17337 = state_15883__$1;
(statearr_16025_17337[(2)] = inst_15809);

(statearr_16025_17337[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (42))){
var state_15883__$1 = state_15883;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15883__$1,(45),dchan);
} else {
if((state_val_15884 === (37))){
var inst_15843 = (state_15883[(23)]);
var inst_15852 = (state_15883[(22)]);
var inst_15751 = (state_15883[(12)]);
var inst_15852__$1 = cljs.core.first(inst_15843);
var inst_15853 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15852__$1,inst_15751,done);
var state_15883__$1 = (function (){var statearr_16026 = state_15883;
(statearr_16026[(22)] = inst_15852__$1);

return statearr_16026;
})();
if(cljs.core.truth_(inst_15853)){
var statearr_16027_17338 = state_15883__$1;
(statearr_16027_17338[(1)] = (39));

} else {
var statearr_16028_17339 = state_15883__$1;
(statearr_16028_17339[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15884 === (8))){
var inst_15763 = (state_15883[(17)]);
var inst_15762 = (state_15883[(16)]);
var inst_15765 = (inst_15763 < inst_15762);
var inst_15766 = inst_15765;
var state_15883__$1 = state_15883;
if(cljs.core.truth_(inst_15766)){
var statearr_16030_17340 = state_15883__$1;
(statearr_16030_17340[(1)] = (10));

} else {
var statearr_16031_17341 = state_15883__$1;
(statearr_16031_17341[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__14827__auto__ = null;
var cljs$core$async$mult_$_state_machine__14827__auto____0 = (function (){
var statearr_16033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16033[(0)] = cljs$core$async$mult_$_state_machine__14827__auto__);

(statearr_16033[(1)] = (1));

return statearr_16033;
});
var cljs$core$async$mult_$_state_machine__14827__auto____1 = (function (state_15883){
while(true){
var ret_value__14828__auto__ = (function (){try{while(true){
var result__14829__auto__ = switch__14826__auto__(state_15883);
if(cljs.core.keyword_identical_QMARK_(result__14829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14829__auto__;
}
break;
}
}catch (e16034){var ex__14830__auto__ = e16034;
var statearr_16037_17342 = state_15883;
(statearr_16037_17342[(2)] = ex__14830__auto__);


if(cljs.core.seq((state_15883[(4)]))){
var statearr_16038_17343 = state_15883;
(statearr_16038_17343[(1)] = cljs.core.first((state_15883[(4)])));

} else {
throw ex__14830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17344 = state_15883;
state_15883 = G__17344;
continue;
} else {
return ret_value__14828__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14827__auto__ = function(state_15883){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14827__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14827__auto____1.call(this,state_15883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14827__auto____0;
cljs$core$async$mult_$_state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14827__auto____1;
return cljs$core$async$mult_$_state_machine__14827__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_16040 = f__14889__auto__();
(statearr_16040[(6)] = c__14888__auto___17265);

return statearr_16040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16048 = arguments.length;
switch (G__16048) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17348 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17348(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17349 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17349(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17350 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17350(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17352 = (function (m,state_map){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5520__auto__.call(null,m,state_map));
} else {
var m__5518__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5518__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17352(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17353 = (function (m,mode){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5520__auto__.call(null,m,mode));
} else {
var m__5518__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5518__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17353(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___17354 = arguments.length;
var i__5898__auto___17355 = (0);
while(true){
if((i__5898__auto___17355 < len__5897__auto___17354)){
args__5903__auto__.push((arguments[i__5898__auto___17355]));

var G__17356 = (i__5898__auto___17355 + (1));
i__5898__auto___17355 = G__17356;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16079){
var map__16080 = p__16079;
var map__16080__$1 = cljs.core.__destructure_map(map__16080);
var opts = map__16080__$1;
var statearr_16081_17357 = state;
(statearr_16081_17357[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16082_17358 = state;
(statearr_16082_17358[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_16084_17359 = state;
(statearr_16084_17359[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16072){
var G__16073 = cljs.core.first(seq16072);
var seq16072__$1 = cljs.core.next(seq16072);
var G__16074 = cljs.core.first(seq16072__$1);
var seq16072__$2 = cljs.core.next(seq16072__$1);
var G__16075 = cljs.core.first(seq16072__$2);
var seq16072__$3 = cljs.core.next(seq16072__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16073,G__16074,G__16075,seq16072__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16096 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16097){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16097 = meta16097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16098,meta16097__$1){
var self__ = this;
var _16098__$1 = this;
return (new cljs.core.async.t_cljs$core$async16096(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16097__$1));
}));

(cljs.core.async.t_cljs$core$async16096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16098){
var self__ = this;
var _16098__$1 = this;
return self__.meta16097;
}));

(cljs.core.async.t_cljs$core$async16096.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16096.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16096.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16096.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16096.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16096.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16096.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16096.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16096.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16097","meta16097",326330053,null)], null);
}));

(cljs.core.async.t_cljs$core$async16096.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16096");

(cljs.core.async.t_cljs$core$async16096.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async16096");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16096.
 */
cljs.core.async.__GT_t_cljs$core$async16096 = (function cljs$core$async$__GT_t_cljs$core$async16096(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16097){
return (new cljs.core.async.t_cljs$core$async16096(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16097));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16096(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14888__auto___17364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14826__auto__ = (function (state_16226){
var state_val_16227 = (state_16226[(1)]);
if((state_val_16227 === (7))){
var inst_16174 = (state_16226[(2)]);
var state_16226__$1 = state_16226;
if(cljs.core.truth_(inst_16174)){
var statearr_16232_17365 = state_16226__$1;
(statearr_16232_17365[(1)] = (8));

} else {
var statearr_16233_17366 = state_16226__$1;
(statearr_16233_17366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (20))){
var inst_16161 = (state_16226[(7)]);
var state_16226__$1 = state_16226;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16226__$1,(23),out,inst_16161);
} else {
if((state_val_16227 === (1))){
var inst_16126 = calc_state();
var inst_16128 = cljs.core.__destructure_map(inst_16126);
var inst_16130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16128,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16128,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16128,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16138 = inst_16126;
var state_16226__$1 = (function (){var statearr_16234 = state_16226;
(statearr_16234[(8)] = inst_16130);

(statearr_16234[(9)] = inst_16132);

(statearr_16234[(10)] = inst_16137);

(statearr_16234[(11)] = inst_16138);

return statearr_16234;
})();
var statearr_16235_17367 = state_16226__$1;
(statearr_16235_17367[(2)] = null);

(statearr_16235_17367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (24))){
var inst_16144 = (state_16226[(12)]);
var inst_16138 = inst_16144;
var state_16226__$1 = (function (){var statearr_16237 = state_16226;
(statearr_16237[(11)] = inst_16138);

return statearr_16237;
})();
var statearr_16240_17368 = state_16226__$1;
(statearr_16240_17368[(2)] = null);

(statearr_16240_17368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (4))){
var inst_16161 = (state_16226[(7)]);
var inst_16164 = (state_16226[(13)]);
var inst_16156 = (state_16226[(2)]);
var inst_16161__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16156,(0),null);
var inst_16162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16156,(1),null);
var inst_16164__$1 = (inst_16161__$1 == null);
var state_16226__$1 = (function (){var statearr_16246 = state_16226;
(statearr_16246[(7)] = inst_16161__$1);

(statearr_16246[(14)] = inst_16162);

(statearr_16246[(13)] = inst_16164__$1);

return statearr_16246;
})();
if(cljs.core.truth_(inst_16164__$1)){
var statearr_16248_17369 = state_16226__$1;
(statearr_16248_17369[(1)] = (5));

} else {
var statearr_16249_17370 = state_16226__$1;
(statearr_16249_17370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (15))){
var inst_16145 = (state_16226[(15)]);
var inst_16200 = (state_16226[(16)]);
var inst_16200__$1 = cljs.core.empty_QMARK_(inst_16145);
var state_16226__$1 = (function (){var statearr_16250 = state_16226;
(statearr_16250[(16)] = inst_16200__$1);

return statearr_16250;
})();
if(inst_16200__$1){
var statearr_16251_17377 = state_16226__$1;
(statearr_16251_17377[(1)] = (17));

} else {
var statearr_16252_17378 = state_16226__$1;
(statearr_16252_17378[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (21))){
var inst_16144 = (state_16226[(12)]);
var inst_16138 = inst_16144;
var state_16226__$1 = (function (){var statearr_16253 = state_16226;
(statearr_16253[(11)] = inst_16138);

return statearr_16253;
})();
var statearr_16255_17380 = state_16226__$1;
(statearr_16255_17380[(2)] = null);

(statearr_16255_17380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (13))){
var inst_16188 = (state_16226[(2)]);
var inst_16193 = calc_state();
var inst_16138 = inst_16193;
var state_16226__$1 = (function (){var statearr_16258 = state_16226;
(statearr_16258[(17)] = inst_16188);

(statearr_16258[(11)] = inst_16138);

return statearr_16258;
})();
var statearr_16259_17381 = state_16226__$1;
(statearr_16259_17381[(2)] = null);

(statearr_16259_17381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (22))){
var inst_16220 = (state_16226[(2)]);
var state_16226__$1 = state_16226;
var statearr_16263_17382 = state_16226__$1;
(statearr_16263_17382[(2)] = inst_16220);

(statearr_16263_17382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (6))){
var inst_16162 = (state_16226[(14)]);
var inst_16172 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16162,change);
var state_16226__$1 = state_16226;
var statearr_16264_17387 = state_16226__$1;
(statearr_16264_17387[(2)] = inst_16172);

(statearr_16264_17387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (25))){
var state_16226__$1 = state_16226;
var statearr_16265_17388 = state_16226__$1;
(statearr_16265_17388[(2)] = null);

(statearr_16265_17388[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (17))){
var inst_16150 = (state_16226[(18)]);
var inst_16162 = (state_16226[(14)]);
var inst_16202 = (inst_16150.cljs$core$IFn$_invoke$arity$1 ? inst_16150.cljs$core$IFn$_invoke$arity$1(inst_16162) : inst_16150.call(null,inst_16162));
var inst_16203 = cljs.core.not(inst_16202);
var state_16226__$1 = state_16226;
var statearr_16269_17389 = state_16226__$1;
(statearr_16269_17389[(2)] = inst_16203);

(statearr_16269_17389[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (3))){
var inst_16224 = (state_16226[(2)]);
var state_16226__$1 = state_16226;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16226__$1,inst_16224);
} else {
if((state_val_16227 === (12))){
var state_16226__$1 = state_16226;
var statearr_16271_17390 = state_16226__$1;
(statearr_16271_17390[(2)] = null);

(statearr_16271_17390[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (2))){
var inst_16138 = (state_16226[(11)]);
var inst_16144 = (state_16226[(12)]);
var inst_16144__$1 = cljs.core.__destructure_map(inst_16138);
var inst_16145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16144__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16144__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16144__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16226__$1 = (function (){var statearr_16274 = state_16226;
(statearr_16274[(12)] = inst_16144__$1);

(statearr_16274[(15)] = inst_16145);

(statearr_16274[(18)] = inst_16150);

return statearr_16274;
})();
return cljs.core.async.ioc_alts_BANG_(state_16226__$1,(4),inst_16151);
} else {
if((state_val_16227 === (23))){
var inst_16211 = (state_16226[(2)]);
var state_16226__$1 = state_16226;
if(cljs.core.truth_(inst_16211)){
var statearr_16275_17391 = state_16226__$1;
(statearr_16275_17391[(1)] = (24));

} else {
var statearr_16276_17392 = state_16226__$1;
(statearr_16276_17392[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (19))){
var inst_16206 = (state_16226[(2)]);
var state_16226__$1 = state_16226;
var statearr_16277_17393 = state_16226__$1;
(statearr_16277_17393[(2)] = inst_16206);

(statearr_16277_17393[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (11))){
var inst_16162 = (state_16226[(14)]);
var inst_16185 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16162);
var state_16226__$1 = state_16226;
var statearr_16278_17394 = state_16226__$1;
(statearr_16278_17394[(2)] = inst_16185);

(statearr_16278_17394[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (9))){
var inst_16145 = (state_16226[(15)]);
var inst_16162 = (state_16226[(14)]);
var inst_16196 = (state_16226[(19)]);
var inst_16196__$1 = (inst_16145.cljs$core$IFn$_invoke$arity$1 ? inst_16145.cljs$core$IFn$_invoke$arity$1(inst_16162) : inst_16145.call(null,inst_16162));
var state_16226__$1 = (function (){var statearr_16280 = state_16226;
(statearr_16280[(19)] = inst_16196__$1);

return statearr_16280;
})();
if(cljs.core.truth_(inst_16196__$1)){
var statearr_16281_17395 = state_16226__$1;
(statearr_16281_17395[(1)] = (14));

} else {
var statearr_16282_17396 = state_16226__$1;
(statearr_16282_17396[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (5))){
var inst_16164 = (state_16226[(13)]);
var state_16226__$1 = state_16226;
var statearr_16283_17397 = state_16226__$1;
(statearr_16283_17397[(2)] = inst_16164);

(statearr_16283_17397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (14))){
var inst_16196 = (state_16226[(19)]);
var state_16226__$1 = state_16226;
var statearr_16284_17398 = state_16226__$1;
(statearr_16284_17398[(2)] = inst_16196);

(statearr_16284_17398[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (26))){
var inst_16216 = (state_16226[(2)]);
var state_16226__$1 = state_16226;
var statearr_16287_17399 = state_16226__$1;
(statearr_16287_17399[(2)] = inst_16216);

(statearr_16287_17399[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (16))){
var inst_16208 = (state_16226[(2)]);
var state_16226__$1 = state_16226;
if(cljs.core.truth_(inst_16208)){
var statearr_16288_17400 = state_16226__$1;
(statearr_16288_17400[(1)] = (20));

} else {
var statearr_16289_17401 = state_16226__$1;
(statearr_16289_17401[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (10))){
var inst_16222 = (state_16226[(2)]);
var state_16226__$1 = state_16226;
var statearr_16290_17402 = state_16226__$1;
(statearr_16290_17402[(2)] = inst_16222);

(statearr_16290_17402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (18))){
var inst_16200 = (state_16226[(16)]);
var state_16226__$1 = state_16226;
var statearr_16292_17403 = state_16226__$1;
(statearr_16292_17403[(2)] = inst_16200);

(statearr_16292_17403[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16227 === (8))){
var inst_16161 = (state_16226[(7)]);
var inst_16182 = (inst_16161 == null);
var state_16226__$1 = state_16226;
if(cljs.core.truth_(inst_16182)){
var statearr_16294_17404 = state_16226__$1;
(statearr_16294_17404[(1)] = (11));

} else {
var statearr_16295_17405 = state_16226__$1;
(statearr_16295_17405[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__14827__auto__ = null;
var cljs$core$async$mix_$_state_machine__14827__auto____0 = (function (){
var statearr_16297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16297[(0)] = cljs$core$async$mix_$_state_machine__14827__auto__);

(statearr_16297[(1)] = (1));

return statearr_16297;
});
var cljs$core$async$mix_$_state_machine__14827__auto____1 = (function (state_16226){
while(true){
var ret_value__14828__auto__ = (function (){try{while(true){
var result__14829__auto__ = switch__14826__auto__(state_16226);
if(cljs.core.keyword_identical_QMARK_(result__14829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14829__auto__;
}
break;
}
}catch (e16299){var ex__14830__auto__ = e16299;
var statearr_16300_17406 = state_16226;
(statearr_16300_17406[(2)] = ex__14830__auto__);


if(cljs.core.seq((state_16226[(4)]))){
var statearr_16301_17407 = state_16226;
(statearr_16301_17407[(1)] = cljs.core.first((state_16226[(4)])));

} else {
throw ex__14830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17408 = state_16226;
state_16226 = G__17408;
continue;
} else {
return ret_value__14828__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14827__auto__ = function(state_16226){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14827__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14827__auto____1.call(this,state_16226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14827__auto____0;
cljs$core$async$mix_$_state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14827__auto____1;
return cljs$core$async$mix_$_state_machine__14827__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_16303 = f__14889__auto__();
(statearr_16303[(6)] = c__14888__auto___17364);

return statearr_16303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_17409 = (function (p,v,ch,close_QMARK_){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5520__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5518__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17409(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17410 = (function (p,v,ch){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5520__auto__.call(null,p,v,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5518__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17410(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17413 = (function() {
var G__17414 = null;
var G__17414__1 = (function (p){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5520__auto__.call(null,p));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5518__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17414__2 = (function (p,v){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5520__auto__.call(null,p,v));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5518__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17414 = function(p,v){
switch(arguments.length){
case 1:
return G__17414__1.call(this,p);
case 2:
return G__17414__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17414.cljs$core$IFn$_invoke$arity$1 = G__17414__1;
G__17414.cljs$core$IFn$_invoke$arity$2 = G__17414__2;
return G__17414;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16312 = arguments.length;
switch (G__16312) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17413(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17413(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16316 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16317){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16317 = meta16317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16318,meta16317__$1){
var self__ = this;
var _16318__$1 = this;
return (new cljs.core.async.t_cljs$core$async16316(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16317__$1));
}));

(cljs.core.async.t_cljs$core$async16316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16318){
var self__ = this;
var _16318__$1 = this;
return self__.meta16317;
}));

(cljs.core.async.t_cljs$core$async16316.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16316.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16316.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16316.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16316.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16316.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16316.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16316.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16317","meta16317",-1723463700,null)], null);
}));

(cljs.core.async.t_cljs$core$async16316.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16316");

(cljs.core.async.t_cljs$core$async16316.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async16316");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16316.
 */
cljs.core.async.__GT_t_cljs$core$async16316 = (function cljs$core$async$__GT_t_cljs$core$async16316(ch,topic_fn,buf_fn,mults,ensure_mult,meta16317){
return (new cljs.core.async.t_cljs$core$async16316(ch,topic_fn,buf_fn,mults,ensure_mult,meta16317));
});


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
var G__16315 = arguments.length;
switch (G__16315) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16313_SHARP_){
if(cljs.core.truth_((p1__16313_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16313_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16313_SHARP_.call(null,topic)))){
return p1__16313_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16313_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16316(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14888__auto___17421 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14826__auto__ = (function (state_16390){
var state_val_16391 = (state_16390[(1)]);
if((state_val_16391 === (7))){
var inst_16386 = (state_16390[(2)]);
var state_16390__$1 = state_16390;
var statearr_16392_17422 = state_16390__$1;
(statearr_16392_17422[(2)] = inst_16386);

(statearr_16392_17422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16391 === (20))){
var state_16390__$1 = state_16390;
var statearr_16393_17423 = state_16390__$1;
(statearr_16393_17423[(2)] = null);

(statearr_16393_17423[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16391 === (1))){
var state_16390__$1 = state_16390;
var statearr_16394_17424 = state_16390__$1;
(statearr_16394_17424[(2)] = null);

(statearr_16394_17424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16391 === (24))){
var inst_16369 = (state_16390[(7)]);
var inst_16378 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16369);
var state_16390__$1 = state_16390;
var statearr_16395_17425 = state_16390__$1;
(statearr_16395_17425[(2)] = inst_16378);

(statearr_16395_17425[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16391 === (4))){
var inst_16321 = (state_16390[(8)]);
var inst_16321__$1 = (state_16390[(2)]);
var inst_16322 = (inst_16321__$1 == null);
var state_16390__$1 = (function (){var statearr_16396 = state_16390;
(statearr_16396[(8)] = inst_16321__$1);

return statearr_16396;
})();
if(cljs.core.truth_(inst_16322)){
var statearr_16397_17426 = state_16390__$1;
(statearr_16397_17426[(1)] = (5));

} else {
var statearr_16398_17427 = state_16390__$1;
(statearr_16398_17427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16391 === (15))){
var inst_16363 = (state_16390[(2)]);
var state_16390__$1 = state_16390;
var statearr_16399_17428 = state_16390__$1;
(statearr_16399_17428[(2)] = inst_16363);

(statearr_16399_17428[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16391 === (21))){
var inst_16383 = (state_16390[(2)]);
var state_16390__$1 = (function (){var statearr_16400 = state_16390;
(statearr_16400[(9)] = inst_16383);

return statearr_16400;
})();
var statearr_16401_17429 = state_16390__$1;
(statearr_16401_17429[(2)] = null);

(statearr_16401_17429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16391 === (13))){
var inst_16345 = (state_16390[(10)]);
var inst_16347 = cljs.core.chunked_seq_QMARK_(inst_16345);
var state_16390__$1 = state_16390;
if(inst_16347){
var statearr_16403_17430 = state_16390__$1;
(statearr_16403_17430[(1)] = (16));

} else {
var statearr_16404_17431 = state_16390__$1;
(statearr_16404_17431[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16391 === (22))){
var inst_16375 = (state_16390[(2)]);
var state_16390__$1 = state_16390;
if(cljs.core.truth_(inst_16375)){
var statearr_16405_17432 = state_16390__$1;
(statearr_16405_17432[(1)] = (23));

} else {
var statearr_16406_17433 = state_16390__$1;
(statearr_16406_17433[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16391 === (6))){
var inst_16321 = (state_16390[(8)]);
var inst_16369 = (state_16390[(7)]);
var inst_16371 = (state_16390[(11)]);
var inst_16369__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16321) : topic_fn.call(null,inst_16321));
var inst_16370 = cljs.core.deref(mults);
var inst_16371__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16370,inst_16369__$1);
var state_16390__$1 = (function (){var statearr_16412 = state_16390;
(statearr_16412[(7)] = inst_16369__$1);

(statearr_16412[(11)] = inst_16371__$1);

return statearr_16412;
})();
if(cljs.core.truth_(inst_16371__$1)){
var statearr_16413_17434 = state_16390__$1;
(statearr_16413_17434[(1)] = (19));

} else {
var statearr_16414_17435 = state_16390__$1;
(statearr_16414_17435[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16391 === (25))){
var inst_16380 = (state_16390[(2)]);
var state_16390__$1 = state_16390;
var statearr_16415_17436 = state_16390__$1;
(statearr_16415_17436[(2)] = inst_16380);

(statearr_16415_17436[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16391 === (17))){
var inst_16345 = (state_16390[(10)]);
var inst_16354 = cljs.core.first(inst_16345);
var inst_16355 = cljs.core.async.muxch_STAR_(inst_16354);
var inst_16356 = cljs.core.async.close_BANG_(inst_16355);
var inst_16357 = cljs.core.next(inst_16345);
var inst_16331 = inst_16357;
var inst_16332 = null;
var inst_16333 = (0);
var inst_16334 = (0);
var state_16390__$1 = (function (){var statearr_16417 = state_16390;
(statearr_16417[(12)] = inst_16356);

(statearr_16417[(13)] = inst_16331);

(statearr_16417[(14)] = inst_16332);

(statearr_16417[(15)] = inst_16333);

(statearr_16417[(16)] = inst_16334);

return statearr_16417;
})();
var statearr_16418_17437 = state_16390__$1;
(statearr_16418_17437[(2)] = null);

(statearr_16418_17437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16391 === (3))){
var inst_16388 = (state_16390[(2)]);
var state_16390__$1 = state_16390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16390__$1,inst_16388);
} else {
if((state_val_16391 === (12))){
var inst_16365 = (state_16390[(2)]);
var state_16390__$1 = state_16390;
var statearr_16419_17438 = state_16390__$1;
(statearr_16419_17438[(2)] = inst_16365);

(statearr_16419_17438[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16391 === (2))){
var state_16390__$1 = state_16390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16390__$1,(4),ch);
} else {
if((state_val_16391 === (23))){
var state_16390__$1 = state_16390;
var statearr_16425_17439 = state_16390__$1;
(statearr_16425_17439[(2)] = null);

(statearr_16425_17439[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16391 === (19))){
var inst_16371 = (state_16390[(11)]);
var inst_16321 = (state_16390[(8)]);
var inst_16373 = cljs.core.async.muxch_STAR_(inst_16371);
var state_16390__$1 = state_16390;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16390__$1,(22),inst_16373,inst_16321);
} else {
if((state_val_16391 === (11))){
var inst_16331 = (state_16390[(13)]);
var inst_16345 = (state_16390[(10)]);
var inst_16345__$1 = cljs.core.seq(inst_16331);
var state_16390__$1 = (function (){var statearr_16429 = state_16390;
(statearr_16429[(10)] = inst_16345__$1);

return statearr_16429;
})();
if(inst_16345__$1){
var statearr_16431_17443 = state_16390__$1;
(statearr_16431_17443[(1)] = (13));

} else {
var statearr_16436_17444 = state_16390__$1;
(statearr_16436_17444[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16391 === (9))){
var inst_16367 = (state_16390[(2)]);
var state_16390__$1 = state_16390;
var statearr_16442_17445 = state_16390__$1;
(statearr_16442_17445[(2)] = inst_16367);

(statearr_16442_17445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16391 === (5))){
var inst_16328 = cljs.core.deref(mults);
var inst_16329 = cljs.core.vals(inst_16328);
var inst_16330 = cljs.core.seq(inst_16329);
var inst_16331 = inst_16330;
var inst_16332 = null;
var inst_16333 = (0);
var inst_16334 = (0);
var state_16390__$1 = (function (){var statearr_16450 = state_16390;
(statearr_16450[(13)] = inst_16331);

(statearr_16450[(14)] = inst_16332);

(statearr_16450[(15)] = inst_16333);

(statearr_16450[(16)] = inst_16334);

return statearr_16450;
})();
var statearr_16451_17447 = state_16390__$1;
(statearr_16451_17447[(2)] = null);

(statearr_16451_17447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16391 === (14))){
var state_16390__$1 = state_16390;
var statearr_16455_17448 = state_16390__$1;
(statearr_16455_17448[(2)] = null);

(statearr_16455_17448[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16391 === (16))){
var inst_16345 = (state_16390[(10)]);
var inst_16349 = cljs.core.chunk_first(inst_16345);
var inst_16350 = cljs.core.chunk_rest(inst_16345);
var inst_16351 = cljs.core.count(inst_16349);
var inst_16331 = inst_16350;
var inst_16332 = inst_16349;
var inst_16333 = inst_16351;
var inst_16334 = (0);
var state_16390__$1 = (function (){var statearr_16457 = state_16390;
(statearr_16457[(13)] = inst_16331);

(statearr_16457[(14)] = inst_16332);

(statearr_16457[(15)] = inst_16333);

(statearr_16457[(16)] = inst_16334);

return statearr_16457;
})();
var statearr_16458_17449 = state_16390__$1;
(statearr_16458_17449[(2)] = null);

(statearr_16458_17449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16391 === (10))){
var inst_16332 = (state_16390[(14)]);
var inst_16334 = (state_16390[(16)]);
var inst_16331 = (state_16390[(13)]);
var inst_16333 = (state_16390[(15)]);
var inst_16339 = cljs.core._nth(inst_16332,inst_16334);
var inst_16340 = cljs.core.async.muxch_STAR_(inst_16339);
var inst_16341 = cljs.core.async.close_BANG_(inst_16340);
var inst_16342 = (inst_16334 + (1));
var tmp16452 = inst_16333;
var tmp16453 = inst_16331;
var tmp16454 = inst_16332;
var inst_16331__$1 = tmp16453;
var inst_16332__$1 = tmp16454;
var inst_16333__$1 = tmp16452;
var inst_16334__$1 = inst_16342;
var state_16390__$1 = (function (){var statearr_16460 = state_16390;
(statearr_16460[(17)] = inst_16341);

(statearr_16460[(13)] = inst_16331__$1);

(statearr_16460[(14)] = inst_16332__$1);

(statearr_16460[(15)] = inst_16333__$1);

(statearr_16460[(16)] = inst_16334__$1);

return statearr_16460;
})();
var statearr_16461_17450 = state_16390__$1;
(statearr_16461_17450[(2)] = null);

(statearr_16461_17450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16391 === (18))){
var inst_16360 = (state_16390[(2)]);
var state_16390__$1 = state_16390;
var statearr_16462_17451 = state_16390__$1;
(statearr_16462_17451[(2)] = inst_16360);

(statearr_16462_17451[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16391 === (8))){
var inst_16334 = (state_16390[(16)]);
var inst_16333 = (state_16390[(15)]);
var inst_16336 = (inst_16334 < inst_16333);
var inst_16337 = inst_16336;
var state_16390__$1 = state_16390;
if(cljs.core.truth_(inst_16337)){
var statearr_16463_17452 = state_16390__$1;
(statearr_16463_17452[(1)] = (10));

} else {
var statearr_16464_17453 = state_16390__$1;
(statearr_16464_17453[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__14827__auto__ = null;
var cljs$core$async$state_machine__14827__auto____0 = (function (){
var statearr_16466 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16466[(0)] = cljs$core$async$state_machine__14827__auto__);

(statearr_16466[(1)] = (1));

return statearr_16466;
});
var cljs$core$async$state_machine__14827__auto____1 = (function (state_16390){
while(true){
var ret_value__14828__auto__ = (function (){try{while(true){
var result__14829__auto__ = switch__14826__auto__(state_16390);
if(cljs.core.keyword_identical_QMARK_(result__14829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14829__auto__;
}
break;
}
}catch (e16468){var ex__14830__auto__ = e16468;
var statearr_16469_17454 = state_16390;
(statearr_16469_17454[(2)] = ex__14830__auto__);


if(cljs.core.seq((state_16390[(4)]))){
var statearr_16470_17455 = state_16390;
(statearr_16470_17455[(1)] = cljs.core.first((state_16390[(4)])));

} else {
throw ex__14830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17456 = state_16390;
state_16390 = G__17456;
continue;
} else {
return ret_value__14828__auto__;
}
break;
}
});
cljs$core$async$state_machine__14827__auto__ = function(state_16390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14827__auto____1.call(this,state_16390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14827__auto____0;
cljs$core$async$state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14827__auto____1;
return cljs$core$async$state_machine__14827__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_16473 = f__14889__auto__();
(statearr_16473[(6)] = c__14888__auto___17421);

return statearr_16473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16475 = arguments.length;
switch (G__16475) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16479 = arguments.length;
switch (G__16479) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__16482 = arguments.length;
switch (G__16482) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14888__auto___17460 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14826__auto__ = (function (state_16532){
var state_val_16533 = (state_16532[(1)]);
if((state_val_16533 === (7))){
var state_16532__$1 = state_16532;
var statearr_16534_17461 = state_16532__$1;
(statearr_16534_17461[(2)] = null);

(statearr_16534_17461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (1))){
var state_16532__$1 = state_16532;
var statearr_16535_17462 = state_16532__$1;
(statearr_16535_17462[(2)] = null);

(statearr_16535_17462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (4))){
var inst_16492 = (state_16532[(7)]);
var inst_16491 = (state_16532[(8)]);
var inst_16494 = (inst_16492 < inst_16491);
var state_16532__$1 = state_16532;
if(cljs.core.truth_(inst_16494)){
var statearr_16536_17463 = state_16532__$1;
(statearr_16536_17463[(1)] = (6));

} else {
var statearr_16537_17464 = state_16532__$1;
(statearr_16537_17464[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (15))){
var inst_16518 = (state_16532[(9)]);
var inst_16523 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16518);
var state_16532__$1 = state_16532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16532__$1,(17),out,inst_16523);
} else {
if((state_val_16533 === (13))){
var inst_16518 = (state_16532[(9)]);
var inst_16518__$1 = (state_16532[(2)]);
var inst_16519 = cljs.core.some(cljs.core.nil_QMARK_,inst_16518__$1);
var state_16532__$1 = (function (){var statearr_16538 = state_16532;
(statearr_16538[(9)] = inst_16518__$1);

return statearr_16538;
})();
if(cljs.core.truth_(inst_16519)){
var statearr_16541_17465 = state_16532__$1;
(statearr_16541_17465[(1)] = (14));

} else {
var statearr_16542_17466 = state_16532__$1;
(statearr_16542_17466[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (6))){
var state_16532__$1 = state_16532;
var statearr_16543_17467 = state_16532__$1;
(statearr_16543_17467[(2)] = null);

(statearr_16543_17467[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (17))){
var inst_16525 = (state_16532[(2)]);
var state_16532__$1 = (function (){var statearr_16545 = state_16532;
(statearr_16545[(10)] = inst_16525);

return statearr_16545;
})();
var statearr_16546_17468 = state_16532__$1;
(statearr_16546_17468[(2)] = null);

(statearr_16546_17468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (3))){
var inst_16530 = (state_16532[(2)]);
var state_16532__$1 = state_16532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16532__$1,inst_16530);
} else {
if((state_val_16533 === (12))){
var _ = (function (){var statearr_16547 = state_16532;
(statearr_16547[(4)] = cljs.core.rest((state_16532[(4)])));

return statearr_16547;
})();
var state_16532__$1 = state_16532;
var ex16544 = (state_16532__$1[(2)]);
var statearr_16548_17469 = state_16532__$1;
(statearr_16548_17469[(5)] = ex16544);


if((ex16544 instanceof Object)){
var statearr_16549_17470 = state_16532__$1;
(statearr_16549_17470[(1)] = (11));

(statearr_16549_17470[(5)] = null);

} else {
throw ex16544;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (2))){
var inst_16490 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16491 = cnt;
var inst_16492 = (0);
var state_16532__$1 = (function (){var statearr_16551 = state_16532;
(statearr_16551[(11)] = inst_16490);

(statearr_16551[(8)] = inst_16491);

(statearr_16551[(7)] = inst_16492);

return statearr_16551;
})();
var statearr_16552_17471 = state_16532__$1;
(statearr_16552_17471[(2)] = null);

(statearr_16552_17471[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (11))){
var inst_16497 = (state_16532[(2)]);
var inst_16498 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16532__$1 = (function (){var statearr_16553 = state_16532;
(statearr_16553[(12)] = inst_16497);

return statearr_16553;
})();
var statearr_16554_17472 = state_16532__$1;
(statearr_16554_17472[(2)] = inst_16498);

(statearr_16554_17472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (9))){
var inst_16492 = (state_16532[(7)]);
var _ = (function (){var statearr_16558 = state_16532;
(statearr_16558[(4)] = cljs.core.cons((12),(state_16532[(4)])));

return statearr_16558;
})();
var inst_16504 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16492) : chs__$1.call(null,inst_16492));
var inst_16505 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16492) : done.call(null,inst_16492));
var inst_16506 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16504,inst_16505);
var ___$1 = (function (){var statearr_16560 = state_16532;
(statearr_16560[(4)] = cljs.core.rest((state_16532[(4)])));

return statearr_16560;
})();
var state_16532__$1 = state_16532;
var statearr_16563_17473 = state_16532__$1;
(statearr_16563_17473[(2)] = inst_16506);

(statearr_16563_17473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (5))){
var inst_16516 = (state_16532[(2)]);
var state_16532__$1 = (function (){var statearr_16565 = state_16532;
(statearr_16565[(13)] = inst_16516);

return statearr_16565;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16532__$1,(13),dchan);
} else {
if((state_val_16533 === (14))){
var inst_16521 = cljs.core.async.close_BANG_(out);
var state_16532__$1 = state_16532;
var statearr_16566_17474 = state_16532__$1;
(statearr_16566_17474[(2)] = inst_16521);

(statearr_16566_17474[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (16))){
var inst_16528 = (state_16532[(2)]);
var state_16532__$1 = state_16532;
var statearr_16567_17475 = state_16532__$1;
(statearr_16567_17475[(2)] = inst_16528);

(statearr_16567_17475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (10))){
var inst_16492 = (state_16532[(7)]);
var inst_16509 = (state_16532[(2)]);
var inst_16510 = (inst_16492 + (1));
var inst_16492__$1 = inst_16510;
var state_16532__$1 = (function (){var statearr_16568 = state_16532;
(statearr_16568[(14)] = inst_16509);

(statearr_16568[(7)] = inst_16492__$1);

return statearr_16568;
})();
var statearr_16569_17476 = state_16532__$1;
(statearr_16569_17476[(2)] = null);

(statearr_16569_17476[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16533 === (8))){
var inst_16514 = (state_16532[(2)]);
var state_16532__$1 = state_16532;
var statearr_16570_17477 = state_16532__$1;
(statearr_16570_17477[(2)] = inst_16514);

(statearr_16570_17477[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__14827__auto__ = null;
var cljs$core$async$state_machine__14827__auto____0 = (function (){
var statearr_16571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16571[(0)] = cljs$core$async$state_machine__14827__auto__);

(statearr_16571[(1)] = (1));

return statearr_16571;
});
var cljs$core$async$state_machine__14827__auto____1 = (function (state_16532){
while(true){
var ret_value__14828__auto__ = (function (){try{while(true){
var result__14829__auto__ = switch__14826__auto__(state_16532);
if(cljs.core.keyword_identical_QMARK_(result__14829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14829__auto__;
}
break;
}
}catch (e16572){var ex__14830__auto__ = e16572;
var statearr_16573_17478 = state_16532;
(statearr_16573_17478[(2)] = ex__14830__auto__);


if(cljs.core.seq((state_16532[(4)]))){
var statearr_16576_17479 = state_16532;
(statearr_16576_17479[(1)] = cljs.core.first((state_16532[(4)])));

} else {
throw ex__14830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17480 = state_16532;
state_16532 = G__17480;
continue;
} else {
return ret_value__14828__auto__;
}
break;
}
});
cljs$core$async$state_machine__14827__auto__ = function(state_16532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14827__auto____1.call(this,state_16532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14827__auto____0;
cljs$core$async$state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14827__auto____1;
return cljs$core$async$state_machine__14827__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_16579 = f__14889__auto__();
(statearr_16579[(6)] = c__14888__auto___17460);

return statearr_16579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16584 = arguments.length;
switch (G__16584) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14888__auto___17482 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14826__auto__ = (function (state_16621){
var state_val_16622 = (state_16621[(1)]);
if((state_val_16622 === (7))){
var inst_16599 = (state_16621[(7)]);
var inst_16600 = (state_16621[(8)]);
var inst_16599__$1 = (state_16621[(2)]);
var inst_16600__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16599__$1,(0),null);
var inst_16601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16599__$1,(1),null);
var inst_16603 = (inst_16600__$1 == null);
var state_16621__$1 = (function (){var statearr_16628 = state_16621;
(statearr_16628[(7)] = inst_16599__$1);

(statearr_16628[(8)] = inst_16600__$1);

(statearr_16628[(9)] = inst_16601);

return statearr_16628;
})();
if(cljs.core.truth_(inst_16603)){
var statearr_16629_17487 = state_16621__$1;
(statearr_16629_17487[(1)] = (8));

} else {
var statearr_16632_17488 = state_16621__$1;
(statearr_16632_17488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (1))){
var inst_16586 = cljs.core.vec(chs);
var inst_16587 = inst_16586;
var state_16621__$1 = (function (){var statearr_16633 = state_16621;
(statearr_16633[(10)] = inst_16587);

return statearr_16633;
})();
var statearr_16634_17490 = state_16621__$1;
(statearr_16634_17490[(2)] = null);

(statearr_16634_17490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (4))){
var inst_16587 = (state_16621[(10)]);
var state_16621__$1 = state_16621;
return cljs.core.async.ioc_alts_BANG_(state_16621__$1,(7),inst_16587);
} else {
if((state_val_16622 === (6))){
var inst_16617 = (state_16621[(2)]);
var state_16621__$1 = state_16621;
var statearr_16635_17491 = state_16621__$1;
(statearr_16635_17491[(2)] = inst_16617);

(statearr_16635_17491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (3))){
var inst_16619 = (state_16621[(2)]);
var state_16621__$1 = state_16621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16621__$1,inst_16619);
} else {
if((state_val_16622 === (2))){
var inst_16587 = (state_16621[(10)]);
var inst_16589 = cljs.core.count(inst_16587);
var inst_16590 = (inst_16589 > (0));
var state_16621__$1 = state_16621;
if(cljs.core.truth_(inst_16590)){
var statearr_16637_17492 = state_16621__$1;
(statearr_16637_17492[(1)] = (4));

} else {
var statearr_16638_17493 = state_16621__$1;
(statearr_16638_17493[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (11))){
var inst_16587 = (state_16621[(10)]);
var inst_16610 = (state_16621[(2)]);
var tmp16636 = inst_16587;
var inst_16587__$1 = tmp16636;
var state_16621__$1 = (function (){var statearr_16639 = state_16621;
(statearr_16639[(11)] = inst_16610);

(statearr_16639[(10)] = inst_16587__$1);

return statearr_16639;
})();
var statearr_16640_17494 = state_16621__$1;
(statearr_16640_17494[(2)] = null);

(statearr_16640_17494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (9))){
var inst_16600 = (state_16621[(8)]);
var state_16621__$1 = state_16621;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16621__$1,(11),out,inst_16600);
} else {
if((state_val_16622 === (5))){
var inst_16615 = cljs.core.async.close_BANG_(out);
var state_16621__$1 = state_16621;
var statearr_16641_17495 = state_16621__$1;
(statearr_16641_17495[(2)] = inst_16615);

(statearr_16641_17495[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (10))){
var inst_16613 = (state_16621[(2)]);
var state_16621__$1 = state_16621;
var statearr_16642_17496 = state_16621__$1;
(statearr_16642_17496[(2)] = inst_16613);

(statearr_16642_17496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16622 === (8))){
var inst_16587 = (state_16621[(10)]);
var inst_16599 = (state_16621[(7)]);
var inst_16600 = (state_16621[(8)]);
var inst_16601 = (state_16621[(9)]);
var inst_16605 = (function (){var cs = inst_16587;
var vec__16595 = inst_16599;
var v = inst_16600;
var c = inst_16601;
return (function (p1__16582_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16582_SHARP_);
});
})();
var inst_16606 = cljs.core.filterv(inst_16605,inst_16587);
var inst_16587__$1 = inst_16606;
var state_16621__$1 = (function (){var statearr_16644 = state_16621;
(statearr_16644[(10)] = inst_16587__$1);

return statearr_16644;
})();
var statearr_16645_17497 = state_16621__$1;
(statearr_16645_17497[(2)] = null);

(statearr_16645_17497[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__14827__auto__ = null;
var cljs$core$async$state_machine__14827__auto____0 = (function (){
var statearr_16648 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16648[(0)] = cljs$core$async$state_machine__14827__auto__);

(statearr_16648[(1)] = (1));

return statearr_16648;
});
var cljs$core$async$state_machine__14827__auto____1 = (function (state_16621){
while(true){
var ret_value__14828__auto__ = (function (){try{while(true){
var result__14829__auto__ = switch__14826__auto__(state_16621);
if(cljs.core.keyword_identical_QMARK_(result__14829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14829__auto__;
}
break;
}
}catch (e16649){var ex__14830__auto__ = e16649;
var statearr_16650_17499 = state_16621;
(statearr_16650_17499[(2)] = ex__14830__auto__);


if(cljs.core.seq((state_16621[(4)]))){
var statearr_16651_17500 = state_16621;
(statearr_16651_17500[(1)] = cljs.core.first((state_16621[(4)])));

} else {
throw ex__14830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17501 = state_16621;
state_16621 = G__17501;
continue;
} else {
return ret_value__14828__auto__;
}
break;
}
});
cljs$core$async$state_machine__14827__auto__ = function(state_16621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14827__auto____1.call(this,state_16621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14827__auto____0;
cljs$core$async$state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14827__auto____1;
return cljs$core$async$state_machine__14827__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_16652 = f__14889__auto__();
(statearr_16652[(6)] = c__14888__auto___17482);

return statearr_16652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16654 = arguments.length;
switch (G__16654) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14888__auto___17504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14826__auto__ = (function (state_16678){
var state_val_16679 = (state_16678[(1)]);
if((state_val_16679 === (7))){
var inst_16660 = (state_16678[(7)]);
var inst_16660__$1 = (state_16678[(2)]);
var inst_16661 = (inst_16660__$1 == null);
var inst_16662 = cljs.core.not(inst_16661);
var state_16678__$1 = (function (){var statearr_16680 = state_16678;
(statearr_16680[(7)] = inst_16660__$1);

return statearr_16680;
})();
if(inst_16662){
var statearr_16681_17505 = state_16678__$1;
(statearr_16681_17505[(1)] = (8));

} else {
var statearr_16682_17506 = state_16678__$1;
(statearr_16682_17506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16679 === (1))){
var inst_16655 = (0);
var state_16678__$1 = (function (){var statearr_16683 = state_16678;
(statearr_16683[(8)] = inst_16655);

return statearr_16683;
})();
var statearr_16684_17508 = state_16678__$1;
(statearr_16684_17508[(2)] = null);

(statearr_16684_17508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16679 === (4))){
var state_16678__$1 = state_16678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16678__$1,(7),ch);
} else {
if((state_val_16679 === (6))){
var inst_16673 = (state_16678[(2)]);
var state_16678__$1 = state_16678;
var statearr_16685_17509 = state_16678__$1;
(statearr_16685_17509[(2)] = inst_16673);

(statearr_16685_17509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16679 === (3))){
var inst_16675 = (state_16678[(2)]);
var inst_16676 = cljs.core.async.close_BANG_(out);
var state_16678__$1 = (function (){var statearr_16686 = state_16678;
(statearr_16686[(9)] = inst_16675);

return statearr_16686;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16678__$1,inst_16676);
} else {
if((state_val_16679 === (2))){
var inst_16655 = (state_16678[(8)]);
var inst_16657 = (inst_16655 < n);
var state_16678__$1 = state_16678;
if(cljs.core.truth_(inst_16657)){
var statearr_16687_17510 = state_16678__$1;
(statearr_16687_17510[(1)] = (4));

} else {
var statearr_16688_17511 = state_16678__$1;
(statearr_16688_17511[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16679 === (11))){
var inst_16655 = (state_16678[(8)]);
var inst_16665 = (state_16678[(2)]);
var inst_16666 = (inst_16655 + (1));
var inst_16655__$1 = inst_16666;
var state_16678__$1 = (function (){var statearr_16689 = state_16678;
(statearr_16689[(10)] = inst_16665);

(statearr_16689[(8)] = inst_16655__$1);

return statearr_16689;
})();
var statearr_16690_17516 = state_16678__$1;
(statearr_16690_17516[(2)] = null);

(statearr_16690_17516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16679 === (9))){
var state_16678__$1 = state_16678;
var statearr_16691_17517 = state_16678__$1;
(statearr_16691_17517[(2)] = null);

(statearr_16691_17517[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16679 === (5))){
var state_16678__$1 = state_16678;
var statearr_16692_17518 = state_16678__$1;
(statearr_16692_17518[(2)] = null);

(statearr_16692_17518[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16679 === (10))){
var inst_16670 = (state_16678[(2)]);
var state_16678__$1 = state_16678;
var statearr_16693_17519 = state_16678__$1;
(statearr_16693_17519[(2)] = inst_16670);

(statearr_16693_17519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16679 === (8))){
var inst_16660 = (state_16678[(7)]);
var state_16678__$1 = state_16678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16678__$1,(11),out,inst_16660);
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
});
return (function() {
var cljs$core$async$state_machine__14827__auto__ = null;
var cljs$core$async$state_machine__14827__auto____0 = (function (){
var statearr_16694 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16694[(0)] = cljs$core$async$state_machine__14827__auto__);

(statearr_16694[(1)] = (1));

return statearr_16694;
});
var cljs$core$async$state_machine__14827__auto____1 = (function (state_16678){
while(true){
var ret_value__14828__auto__ = (function (){try{while(true){
var result__14829__auto__ = switch__14826__auto__(state_16678);
if(cljs.core.keyword_identical_QMARK_(result__14829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14829__auto__;
}
break;
}
}catch (e16695){var ex__14830__auto__ = e16695;
var statearr_16696_17520 = state_16678;
(statearr_16696_17520[(2)] = ex__14830__auto__);


if(cljs.core.seq((state_16678[(4)]))){
var statearr_16697_17521 = state_16678;
(statearr_16697_17521[(1)] = cljs.core.first((state_16678[(4)])));

} else {
throw ex__14830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17522 = state_16678;
state_16678 = G__17522;
continue;
} else {
return ret_value__14828__auto__;
}
break;
}
});
cljs$core$async$state_machine__14827__auto__ = function(state_16678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14827__auto____1.call(this,state_16678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14827__auto____0;
cljs$core$async$state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14827__auto____1;
return cljs$core$async$state_machine__14827__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_16700 = f__14889__auto__();
(statearr_16700[(6)] = c__14888__auto___17504);

return statearr_16700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16705 = (function (f,ch,meta16703,_,fn1,meta16706){
this.f = f;
this.ch = ch;
this.meta16703 = meta16703;
this._ = _;
this.fn1 = fn1;
this.meta16706 = meta16706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16707,meta16706__$1){
var self__ = this;
var _16707__$1 = this;
return (new cljs.core.async.t_cljs$core$async16705(self__.f,self__.ch,self__.meta16703,self__._,self__.fn1,meta16706__$1));
}));

(cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16707){
var self__ = this;
var _16707__$1 = this;
return self__.meta16706;
}));

(cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16705.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16701_SHARP_){
var G__16708 = (((p1__16701_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16701_SHARP_) : self__.f.call(null,p1__16701_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16708) : f1.call(null,G__16708));
});
}));

(cljs.core.async.t_cljs$core$async16705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16703","meta16703",862253772,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16702","cljs.core.async/t_cljs$core$async16702",-1925562994,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16706","meta16706",890086644,null)], null);
}));

(cljs.core.async.t_cljs$core$async16705.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16705");

(cljs.core.async.t_cljs$core$async16705.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async16705");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16705.
 */
cljs.core.async.__GT_t_cljs$core$async16705 = (function cljs$core$async$__GT_t_cljs$core$async16705(f,ch,meta16703,_,fn1,meta16706){
return (new cljs.core.async.t_cljs$core$async16705(f,ch,meta16703,_,fn1,meta16706));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16702 = (function (f,ch,meta16703){
this.f = f;
this.ch = ch;
this.meta16703 = meta16703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16704,meta16703__$1){
var self__ = this;
var _16704__$1 = this;
return (new cljs.core.async.t_cljs$core$async16702(self__.f,self__.ch,meta16703__$1));
}));

(cljs.core.async.t_cljs$core$async16702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16704){
var self__ = this;
var _16704__$1 = this;
return self__.meta16703;
}));

(cljs.core.async.t_cljs$core$async16702.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16702.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16702.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16702.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16702.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16705(self__.f,self__.ch,self__.meta16703,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5160__auto__ = ret;
if(cljs.core.truth_(and__5160__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5160__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16709 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16709) : self__.f.call(null,G__16709));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16702.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16702.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16703","meta16703",862253772,null)], null);
}));

(cljs.core.async.t_cljs$core$async16702.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16702");

(cljs.core.async.t_cljs$core$async16702.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async16702");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16702.
 */
cljs.core.async.__GT_t_cljs$core$async16702 = (function cljs$core$async$__GT_t_cljs$core$async16702(f,ch,meta16703){
return (new cljs.core.async.t_cljs$core$async16702(f,ch,meta16703));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16702(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16710 = (function (f,ch,meta16711){
this.f = f;
this.ch = ch;
this.meta16711 = meta16711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16712,meta16711__$1){
var self__ = this;
var _16712__$1 = this;
return (new cljs.core.async.t_cljs$core$async16710(self__.f,self__.ch,meta16711__$1));
}));

(cljs.core.async.t_cljs$core$async16710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16712){
var self__ = this;
var _16712__$1 = this;
return self__.meta16711;
}));

(cljs.core.async.t_cljs$core$async16710.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16710.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16710.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16710.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16710.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16710.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16710.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16711","meta16711",-871677842,null)], null);
}));

(cljs.core.async.t_cljs$core$async16710.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16710.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16710");

(cljs.core.async.t_cljs$core$async16710.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async16710");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16710.
 */
cljs.core.async.__GT_t_cljs$core$async16710 = (function cljs$core$async$__GT_t_cljs$core$async16710(f,ch,meta16711){
return (new cljs.core.async.t_cljs$core$async16710(f,ch,meta16711));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16710(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16713 = (function (p,ch,meta16714){
this.p = p;
this.ch = ch;
this.meta16714 = meta16714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16715,meta16714__$1){
var self__ = this;
var _16715__$1 = this;
return (new cljs.core.async.t_cljs$core$async16713(self__.p,self__.ch,meta16714__$1));
}));

(cljs.core.async.t_cljs$core$async16713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16715){
var self__ = this;
var _16715__$1 = this;
return self__.meta16714;
}));

(cljs.core.async.t_cljs$core$async16713.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16713.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16713.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16713.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16713.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16713.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16713.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16714","meta16714",1216066501,null)], null);
}));

(cljs.core.async.t_cljs$core$async16713.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16713");

(cljs.core.async.t_cljs$core$async16713.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async16713");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16713.
 */
cljs.core.async.__GT_t_cljs$core$async16713 = (function cljs$core$async$__GT_t_cljs$core$async16713(p,ch,meta16714){
return (new cljs.core.async.t_cljs$core$async16713(p,ch,meta16714));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16713(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16717 = arguments.length;
switch (G__16717) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14888__auto___17531 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14826__auto__ = (function (state_16738){
var state_val_16739 = (state_16738[(1)]);
if((state_val_16739 === (7))){
var inst_16734 = (state_16738[(2)]);
var state_16738__$1 = state_16738;
var statearr_16740_17532 = state_16738__$1;
(statearr_16740_17532[(2)] = inst_16734);

(statearr_16740_17532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (1))){
var state_16738__$1 = state_16738;
var statearr_16741_17533 = state_16738__$1;
(statearr_16741_17533[(2)] = null);

(statearr_16741_17533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (4))){
var inst_16720 = (state_16738[(7)]);
var inst_16720__$1 = (state_16738[(2)]);
var inst_16721 = (inst_16720__$1 == null);
var state_16738__$1 = (function (){var statearr_16742 = state_16738;
(statearr_16742[(7)] = inst_16720__$1);

return statearr_16742;
})();
if(cljs.core.truth_(inst_16721)){
var statearr_16743_17534 = state_16738__$1;
(statearr_16743_17534[(1)] = (5));

} else {
var statearr_16744_17535 = state_16738__$1;
(statearr_16744_17535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (6))){
var inst_16720 = (state_16738[(7)]);
var inst_16725 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16720) : p.call(null,inst_16720));
var state_16738__$1 = state_16738;
if(cljs.core.truth_(inst_16725)){
var statearr_16745_17536 = state_16738__$1;
(statearr_16745_17536[(1)] = (8));

} else {
var statearr_16746_17537 = state_16738__$1;
(statearr_16746_17537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (3))){
var inst_16736 = (state_16738[(2)]);
var state_16738__$1 = state_16738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16738__$1,inst_16736);
} else {
if((state_val_16739 === (2))){
var state_16738__$1 = state_16738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16738__$1,(4),ch);
} else {
if((state_val_16739 === (11))){
var inst_16728 = (state_16738[(2)]);
var state_16738__$1 = state_16738;
var statearr_16747_17538 = state_16738__$1;
(statearr_16747_17538[(2)] = inst_16728);

(statearr_16747_17538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (9))){
var state_16738__$1 = state_16738;
var statearr_16748_17539 = state_16738__$1;
(statearr_16748_17539[(2)] = null);

(statearr_16748_17539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (5))){
var inst_16723 = cljs.core.async.close_BANG_(out);
var state_16738__$1 = state_16738;
var statearr_16749_17540 = state_16738__$1;
(statearr_16749_17540[(2)] = inst_16723);

(statearr_16749_17540[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (10))){
var inst_16731 = (state_16738[(2)]);
var state_16738__$1 = (function (){var statearr_16750 = state_16738;
(statearr_16750[(8)] = inst_16731);

return statearr_16750;
})();
var statearr_16751_17541 = state_16738__$1;
(statearr_16751_17541[(2)] = null);

(statearr_16751_17541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16739 === (8))){
var inst_16720 = (state_16738[(7)]);
var state_16738__$1 = state_16738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16738__$1,(11),out,inst_16720);
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
});
return (function() {
var cljs$core$async$state_machine__14827__auto__ = null;
var cljs$core$async$state_machine__14827__auto____0 = (function (){
var statearr_16752 = [null,null,null,null,null,null,null,null,null];
(statearr_16752[(0)] = cljs$core$async$state_machine__14827__auto__);

(statearr_16752[(1)] = (1));

return statearr_16752;
});
var cljs$core$async$state_machine__14827__auto____1 = (function (state_16738){
while(true){
var ret_value__14828__auto__ = (function (){try{while(true){
var result__14829__auto__ = switch__14826__auto__(state_16738);
if(cljs.core.keyword_identical_QMARK_(result__14829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14829__auto__;
}
break;
}
}catch (e16753){var ex__14830__auto__ = e16753;
var statearr_16754_17543 = state_16738;
(statearr_16754_17543[(2)] = ex__14830__auto__);


if(cljs.core.seq((state_16738[(4)]))){
var statearr_16755_17544 = state_16738;
(statearr_16755_17544[(1)] = cljs.core.first((state_16738[(4)])));

} else {
throw ex__14830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17545 = state_16738;
state_16738 = G__17545;
continue;
} else {
return ret_value__14828__auto__;
}
break;
}
});
cljs$core$async$state_machine__14827__auto__ = function(state_16738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14827__auto____1.call(this,state_16738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14827__auto____0;
cljs$core$async$state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14827__auto____1;
return cljs$core$async$state_machine__14827__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_16756 = f__14889__auto__();
(statearr_16756[(6)] = c__14888__auto___17531);

return statearr_16756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16758 = arguments.length;
switch (G__16758) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14888__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14826__auto__ = (function (state_16822){
var state_val_16823 = (state_16822[(1)]);
if((state_val_16823 === (7))){
var inst_16818 = (state_16822[(2)]);
var state_16822__$1 = state_16822;
var statearr_16824_17549 = state_16822__$1;
(statearr_16824_17549[(2)] = inst_16818);

(statearr_16824_17549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (20))){
var inst_16787 = (state_16822[(7)]);
var inst_16799 = (state_16822[(2)]);
var inst_16800 = cljs.core.next(inst_16787);
var inst_16772 = inst_16800;
var inst_16773 = null;
var inst_16774 = (0);
var inst_16775 = (0);
var state_16822__$1 = (function (){var statearr_16825 = state_16822;
(statearr_16825[(8)] = inst_16799);

(statearr_16825[(9)] = inst_16772);

(statearr_16825[(10)] = inst_16773);

(statearr_16825[(11)] = inst_16774);

(statearr_16825[(12)] = inst_16775);

return statearr_16825;
})();
var statearr_16826_17550 = state_16822__$1;
(statearr_16826_17550[(2)] = null);

(statearr_16826_17550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (1))){
var state_16822__$1 = state_16822;
var statearr_16827_17551 = state_16822__$1;
(statearr_16827_17551[(2)] = null);

(statearr_16827_17551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (4))){
var inst_16761 = (state_16822[(13)]);
var inst_16761__$1 = (state_16822[(2)]);
var inst_16762 = (inst_16761__$1 == null);
var state_16822__$1 = (function (){var statearr_16828 = state_16822;
(statearr_16828[(13)] = inst_16761__$1);

return statearr_16828;
})();
if(cljs.core.truth_(inst_16762)){
var statearr_16829_17552 = state_16822__$1;
(statearr_16829_17552[(1)] = (5));

} else {
var statearr_16830_17553 = state_16822__$1;
(statearr_16830_17553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (15))){
var state_16822__$1 = state_16822;
var statearr_16834_17554 = state_16822__$1;
(statearr_16834_17554[(2)] = null);

(statearr_16834_17554[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (21))){
var state_16822__$1 = state_16822;
var statearr_16835_17555 = state_16822__$1;
(statearr_16835_17555[(2)] = null);

(statearr_16835_17555[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (13))){
var inst_16775 = (state_16822[(12)]);
var inst_16772 = (state_16822[(9)]);
var inst_16773 = (state_16822[(10)]);
var inst_16774 = (state_16822[(11)]);
var inst_16782 = (state_16822[(2)]);
var inst_16783 = (inst_16775 + (1));
var tmp16831 = inst_16773;
var tmp16832 = inst_16774;
var tmp16833 = inst_16772;
var inst_16772__$1 = tmp16833;
var inst_16773__$1 = tmp16831;
var inst_16774__$1 = tmp16832;
var inst_16775__$1 = inst_16783;
var state_16822__$1 = (function (){var statearr_16836 = state_16822;
(statearr_16836[(14)] = inst_16782);

(statearr_16836[(9)] = inst_16772__$1);

(statearr_16836[(10)] = inst_16773__$1);

(statearr_16836[(11)] = inst_16774__$1);

(statearr_16836[(12)] = inst_16775__$1);

return statearr_16836;
})();
var statearr_16837_17564 = state_16822__$1;
(statearr_16837_17564[(2)] = null);

(statearr_16837_17564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (22))){
var state_16822__$1 = state_16822;
var statearr_16838_17565 = state_16822__$1;
(statearr_16838_17565[(2)] = null);

(statearr_16838_17565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (6))){
var inst_16761 = (state_16822[(13)]);
var inst_16770 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16761) : f.call(null,inst_16761));
var inst_16771 = cljs.core.seq(inst_16770);
var inst_16772 = inst_16771;
var inst_16773 = null;
var inst_16774 = (0);
var inst_16775 = (0);
var state_16822__$1 = (function (){var statearr_16839 = state_16822;
(statearr_16839[(9)] = inst_16772);

(statearr_16839[(10)] = inst_16773);

(statearr_16839[(11)] = inst_16774);

(statearr_16839[(12)] = inst_16775);

return statearr_16839;
})();
var statearr_16840_17566 = state_16822__$1;
(statearr_16840_17566[(2)] = null);

(statearr_16840_17566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (17))){
var inst_16787 = (state_16822[(7)]);
var inst_16792 = cljs.core.chunk_first(inst_16787);
var inst_16793 = cljs.core.chunk_rest(inst_16787);
var inst_16794 = cljs.core.count(inst_16792);
var inst_16772 = inst_16793;
var inst_16773 = inst_16792;
var inst_16774 = inst_16794;
var inst_16775 = (0);
var state_16822__$1 = (function (){var statearr_16841 = state_16822;
(statearr_16841[(9)] = inst_16772);

(statearr_16841[(10)] = inst_16773);

(statearr_16841[(11)] = inst_16774);

(statearr_16841[(12)] = inst_16775);

return statearr_16841;
})();
var statearr_16842_17567 = state_16822__$1;
(statearr_16842_17567[(2)] = null);

(statearr_16842_17567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (3))){
var inst_16820 = (state_16822[(2)]);
var state_16822__$1 = state_16822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16822__$1,inst_16820);
} else {
if((state_val_16823 === (12))){
var inst_16808 = (state_16822[(2)]);
var state_16822__$1 = state_16822;
var statearr_16843_17571 = state_16822__$1;
(statearr_16843_17571[(2)] = inst_16808);

(statearr_16843_17571[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (2))){
var state_16822__$1 = state_16822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16822__$1,(4),in$);
} else {
if((state_val_16823 === (23))){
var inst_16816 = (state_16822[(2)]);
var state_16822__$1 = state_16822;
var statearr_16844_17574 = state_16822__$1;
(statearr_16844_17574[(2)] = inst_16816);

(statearr_16844_17574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (19))){
var inst_16803 = (state_16822[(2)]);
var state_16822__$1 = state_16822;
var statearr_16845_17575 = state_16822__$1;
(statearr_16845_17575[(2)] = inst_16803);

(statearr_16845_17575[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (11))){
var inst_16772 = (state_16822[(9)]);
var inst_16787 = (state_16822[(7)]);
var inst_16787__$1 = cljs.core.seq(inst_16772);
var state_16822__$1 = (function (){var statearr_16846 = state_16822;
(statearr_16846[(7)] = inst_16787__$1);

return statearr_16846;
})();
if(inst_16787__$1){
var statearr_16847_17579 = state_16822__$1;
(statearr_16847_17579[(1)] = (14));

} else {
var statearr_16848_17580 = state_16822__$1;
(statearr_16848_17580[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (9))){
var inst_16810 = (state_16822[(2)]);
var inst_16811 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16822__$1 = (function (){var statearr_16849 = state_16822;
(statearr_16849[(15)] = inst_16810);

return statearr_16849;
})();
if(cljs.core.truth_(inst_16811)){
var statearr_16850_17581 = state_16822__$1;
(statearr_16850_17581[(1)] = (21));

} else {
var statearr_16851_17582 = state_16822__$1;
(statearr_16851_17582[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (5))){
var inst_16764 = cljs.core.async.close_BANG_(out);
var state_16822__$1 = state_16822;
var statearr_16852_17583 = state_16822__$1;
(statearr_16852_17583[(2)] = inst_16764);

(statearr_16852_17583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (14))){
var inst_16787 = (state_16822[(7)]);
var inst_16790 = cljs.core.chunked_seq_QMARK_(inst_16787);
var state_16822__$1 = state_16822;
if(inst_16790){
var statearr_16853_17584 = state_16822__$1;
(statearr_16853_17584[(1)] = (17));

} else {
var statearr_16854_17588 = state_16822__$1;
(statearr_16854_17588[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (16))){
var inst_16806 = (state_16822[(2)]);
var state_16822__$1 = state_16822;
var statearr_16855_17589 = state_16822__$1;
(statearr_16855_17589[(2)] = inst_16806);

(statearr_16855_17589[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16823 === (10))){
var inst_16773 = (state_16822[(10)]);
var inst_16775 = (state_16822[(12)]);
var inst_16780 = cljs.core._nth(inst_16773,inst_16775);
var state_16822__$1 = state_16822;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16822__$1,(13),out,inst_16780);
} else {
if((state_val_16823 === (18))){
var inst_16787 = (state_16822[(7)]);
var inst_16797 = cljs.core.first(inst_16787);
var state_16822__$1 = state_16822;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16822__$1,(20),out,inst_16797);
} else {
if((state_val_16823 === (8))){
var inst_16775 = (state_16822[(12)]);
var inst_16774 = (state_16822[(11)]);
var inst_16777 = (inst_16775 < inst_16774);
var inst_16778 = inst_16777;
var state_16822__$1 = state_16822;
if(cljs.core.truth_(inst_16778)){
var statearr_16856_17590 = state_16822__$1;
(statearr_16856_17590[(1)] = (10));

} else {
var statearr_16857_17591 = state_16822__$1;
(statearr_16857_17591[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14827__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14827__auto____0 = (function (){
var statearr_16858 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16858[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14827__auto__);

(statearr_16858[(1)] = (1));

return statearr_16858;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14827__auto____1 = (function (state_16822){
while(true){
var ret_value__14828__auto__ = (function (){try{while(true){
var result__14829__auto__ = switch__14826__auto__(state_16822);
if(cljs.core.keyword_identical_QMARK_(result__14829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14829__auto__;
}
break;
}
}catch (e16859){var ex__14830__auto__ = e16859;
var statearr_16860_17594 = state_16822;
(statearr_16860_17594[(2)] = ex__14830__auto__);


if(cljs.core.seq((state_16822[(4)]))){
var statearr_16861_17595 = state_16822;
(statearr_16861_17595[(1)] = cljs.core.first((state_16822[(4)])));

} else {
throw ex__14830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17597 = state_16822;
state_16822 = G__17597;
continue;
} else {
return ret_value__14828__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14827__auto__ = function(state_16822){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14827__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14827__auto____1.call(this,state_16822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14827__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14827__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14827__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_16862 = f__14889__auto__();
(statearr_16862[(6)] = c__14888__auto__);

return statearr_16862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));

return c__14888__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16864 = arguments.length;
switch (G__16864) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16866 = arguments.length;
switch (G__16866) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16868 = arguments.length;
switch (G__16868) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14888__auto___17601 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14826__auto__ = (function (state_16892){
var state_val_16893 = (state_16892[(1)]);
if((state_val_16893 === (7))){
var inst_16887 = (state_16892[(2)]);
var state_16892__$1 = state_16892;
var statearr_16894_17603 = state_16892__$1;
(statearr_16894_17603[(2)] = inst_16887);

(statearr_16894_17603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (1))){
var inst_16869 = null;
var state_16892__$1 = (function (){var statearr_16895 = state_16892;
(statearr_16895[(7)] = inst_16869);

return statearr_16895;
})();
var statearr_16896_17604 = state_16892__$1;
(statearr_16896_17604[(2)] = null);

(statearr_16896_17604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (4))){
var inst_16872 = (state_16892[(8)]);
var inst_16872__$1 = (state_16892[(2)]);
var inst_16873 = (inst_16872__$1 == null);
var inst_16874 = cljs.core.not(inst_16873);
var state_16892__$1 = (function (){var statearr_16897 = state_16892;
(statearr_16897[(8)] = inst_16872__$1);

return statearr_16897;
})();
if(inst_16874){
var statearr_16898_17605 = state_16892__$1;
(statearr_16898_17605[(1)] = (5));

} else {
var statearr_16899_17606 = state_16892__$1;
(statearr_16899_17606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (6))){
var state_16892__$1 = state_16892;
var statearr_16900_17607 = state_16892__$1;
(statearr_16900_17607[(2)] = null);

(statearr_16900_17607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (3))){
var inst_16889 = (state_16892[(2)]);
var inst_16890 = cljs.core.async.close_BANG_(out);
var state_16892__$1 = (function (){var statearr_16901 = state_16892;
(statearr_16901[(9)] = inst_16889);

return statearr_16901;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16892__$1,inst_16890);
} else {
if((state_val_16893 === (2))){
var state_16892__$1 = state_16892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16892__$1,(4),ch);
} else {
if((state_val_16893 === (11))){
var inst_16872 = (state_16892[(8)]);
var inst_16881 = (state_16892[(2)]);
var inst_16869 = inst_16872;
var state_16892__$1 = (function (){var statearr_16902 = state_16892;
(statearr_16902[(10)] = inst_16881);

(statearr_16902[(7)] = inst_16869);

return statearr_16902;
})();
var statearr_16903_17608 = state_16892__$1;
(statearr_16903_17608[(2)] = null);

(statearr_16903_17608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (9))){
var inst_16872 = (state_16892[(8)]);
var state_16892__$1 = state_16892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16892__$1,(11),out,inst_16872);
} else {
if((state_val_16893 === (5))){
var inst_16872 = (state_16892[(8)]);
var inst_16869 = (state_16892[(7)]);
var inst_16876 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16872,inst_16869);
var state_16892__$1 = state_16892;
if(inst_16876){
var statearr_16905_17613 = state_16892__$1;
(statearr_16905_17613[(1)] = (8));

} else {
var statearr_16906_17614 = state_16892__$1;
(statearr_16906_17614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (10))){
var inst_16884 = (state_16892[(2)]);
var state_16892__$1 = state_16892;
var statearr_16907_17615 = state_16892__$1;
(statearr_16907_17615[(2)] = inst_16884);

(statearr_16907_17615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16893 === (8))){
var inst_16869 = (state_16892[(7)]);
var tmp16904 = inst_16869;
var inst_16869__$1 = tmp16904;
var state_16892__$1 = (function (){var statearr_16908 = state_16892;
(statearr_16908[(7)] = inst_16869__$1);

return statearr_16908;
})();
var statearr_16909_17616 = state_16892__$1;
(statearr_16909_17616[(2)] = null);

(statearr_16909_17616[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__14827__auto__ = null;
var cljs$core$async$state_machine__14827__auto____0 = (function (){
var statearr_16910 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16910[(0)] = cljs$core$async$state_machine__14827__auto__);

(statearr_16910[(1)] = (1));

return statearr_16910;
});
var cljs$core$async$state_machine__14827__auto____1 = (function (state_16892){
while(true){
var ret_value__14828__auto__ = (function (){try{while(true){
var result__14829__auto__ = switch__14826__auto__(state_16892);
if(cljs.core.keyword_identical_QMARK_(result__14829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14829__auto__;
}
break;
}
}catch (e16911){var ex__14830__auto__ = e16911;
var statearr_16912_17617 = state_16892;
(statearr_16912_17617[(2)] = ex__14830__auto__);


if(cljs.core.seq((state_16892[(4)]))){
var statearr_16913_17618 = state_16892;
(statearr_16913_17618[(1)] = cljs.core.first((state_16892[(4)])));

} else {
throw ex__14830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17619 = state_16892;
state_16892 = G__17619;
continue;
} else {
return ret_value__14828__auto__;
}
break;
}
});
cljs$core$async$state_machine__14827__auto__ = function(state_16892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14827__auto____1.call(this,state_16892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14827__auto____0;
cljs$core$async$state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14827__auto____1;
return cljs$core$async$state_machine__14827__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_16914 = f__14889__auto__();
(statearr_16914[(6)] = c__14888__auto___17601);

return statearr_16914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16916 = arguments.length;
switch (G__16916) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14888__auto___17621 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14826__auto__ = (function (state_16956){
var state_val_16957 = (state_16956[(1)]);
if((state_val_16957 === (7))){
var inst_16952 = (state_16956[(2)]);
var state_16956__$1 = state_16956;
var statearr_16958_17622 = state_16956__$1;
(statearr_16958_17622[(2)] = inst_16952);

(statearr_16958_17622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16957 === (1))){
var inst_16917 = (new Array(n));
var inst_16918 = inst_16917;
var inst_16919 = (0);
var state_16956__$1 = (function (){var statearr_16959 = state_16956;
(statearr_16959[(7)] = inst_16918);

(statearr_16959[(8)] = inst_16919);

return statearr_16959;
})();
var statearr_16960_17623 = state_16956__$1;
(statearr_16960_17623[(2)] = null);

(statearr_16960_17623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16957 === (4))){
var inst_16922 = (state_16956[(9)]);
var inst_16922__$1 = (state_16956[(2)]);
var inst_16923 = (inst_16922__$1 == null);
var inst_16924 = cljs.core.not(inst_16923);
var state_16956__$1 = (function (){var statearr_16961 = state_16956;
(statearr_16961[(9)] = inst_16922__$1);

return statearr_16961;
})();
if(inst_16924){
var statearr_16962_17625 = state_16956__$1;
(statearr_16962_17625[(1)] = (5));

} else {
var statearr_16963_17626 = state_16956__$1;
(statearr_16963_17626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16957 === (15))){
var inst_16946 = (state_16956[(2)]);
var state_16956__$1 = state_16956;
var statearr_16964_17627 = state_16956__$1;
(statearr_16964_17627[(2)] = inst_16946);

(statearr_16964_17627[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16957 === (13))){
var state_16956__$1 = state_16956;
var statearr_16965_17628 = state_16956__$1;
(statearr_16965_17628[(2)] = null);

(statearr_16965_17628[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16957 === (6))){
var inst_16919 = (state_16956[(8)]);
var inst_16942 = (inst_16919 > (0));
var state_16956__$1 = state_16956;
if(cljs.core.truth_(inst_16942)){
var statearr_16966_17629 = state_16956__$1;
(statearr_16966_17629[(1)] = (12));

} else {
var statearr_16967_17630 = state_16956__$1;
(statearr_16967_17630[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16957 === (3))){
var inst_16954 = (state_16956[(2)]);
var state_16956__$1 = state_16956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16956__$1,inst_16954);
} else {
if((state_val_16957 === (12))){
var inst_16918 = (state_16956[(7)]);
var inst_16944 = cljs.core.vec(inst_16918);
var state_16956__$1 = state_16956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16956__$1,(15),out,inst_16944);
} else {
if((state_val_16957 === (2))){
var state_16956__$1 = state_16956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16956__$1,(4),ch);
} else {
if((state_val_16957 === (11))){
var inst_16934 = (state_16956[(2)]);
var inst_16936 = (new Array(n));
var inst_16918 = inst_16936;
var inst_16919 = (0);
var state_16956__$1 = (function (){var statearr_16968 = state_16956;
(statearr_16968[(10)] = inst_16934);

(statearr_16968[(7)] = inst_16918);

(statearr_16968[(8)] = inst_16919);

return statearr_16968;
})();
var statearr_16969_17632 = state_16956__$1;
(statearr_16969_17632[(2)] = null);

(statearr_16969_17632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16957 === (9))){
var inst_16918 = (state_16956[(7)]);
var inst_16932 = cljs.core.vec(inst_16918);
var state_16956__$1 = state_16956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16956__$1,(11),out,inst_16932);
} else {
if((state_val_16957 === (5))){
var inst_16918 = (state_16956[(7)]);
var inst_16919 = (state_16956[(8)]);
var inst_16922 = (state_16956[(9)]);
var inst_16927 = (state_16956[(11)]);
var inst_16926 = (inst_16918[inst_16919] = inst_16922);
var inst_16927__$1 = (inst_16919 + (1));
var inst_16928 = (inst_16927__$1 < n);
var state_16956__$1 = (function (){var statearr_16970 = state_16956;
(statearr_16970[(12)] = inst_16926);

(statearr_16970[(11)] = inst_16927__$1);

return statearr_16970;
})();
if(cljs.core.truth_(inst_16928)){
var statearr_16971_17634 = state_16956__$1;
(statearr_16971_17634[(1)] = (8));

} else {
var statearr_16972_17635 = state_16956__$1;
(statearr_16972_17635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16957 === (14))){
var inst_16949 = (state_16956[(2)]);
var inst_16950 = cljs.core.async.close_BANG_(out);
var state_16956__$1 = (function (){var statearr_16974 = state_16956;
(statearr_16974[(13)] = inst_16949);

return statearr_16974;
})();
var statearr_16975_17636 = state_16956__$1;
(statearr_16975_17636[(2)] = inst_16950);

(statearr_16975_17636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16957 === (10))){
var inst_16939 = (state_16956[(2)]);
var state_16956__$1 = state_16956;
var statearr_16976_17637 = state_16956__$1;
(statearr_16976_17637[(2)] = inst_16939);

(statearr_16976_17637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16957 === (8))){
var inst_16918 = (state_16956[(7)]);
var inst_16927 = (state_16956[(11)]);
var tmp16973 = inst_16918;
var inst_16918__$1 = tmp16973;
var inst_16919 = inst_16927;
var state_16956__$1 = (function (){var statearr_16977 = state_16956;
(statearr_16977[(7)] = inst_16918__$1);

(statearr_16977[(8)] = inst_16919);

return statearr_16977;
})();
var statearr_16978_17638 = state_16956__$1;
(statearr_16978_17638[(2)] = null);

(statearr_16978_17638[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__14827__auto__ = null;
var cljs$core$async$state_machine__14827__auto____0 = (function (){
var statearr_16979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16979[(0)] = cljs$core$async$state_machine__14827__auto__);

(statearr_16979[(1)] = (1));

return statearr_16979;
});
var cljs$core$async$state_machine__14827__auto____1 = (function (state_16956){
while(true){
var ret_value__14828__auto__ = (function (){try{while(true){
var result__14829__auto__ = switch__14826__auto__(state_16956);
if(cljs.core.keyword_identical_QMARK_(result__14829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14829__auto__;
}
break;
}
}catch (e16980){var ex__14830__auto__ = e16980;
var statearr_16981_17648 = state_16956;
(statearr_16981_17648[(2)] = ex__14830__auto__);


if(cljs.core.seq((state_16956[(4)]))){
var statearr_16982_17649 = state_16956;
(statearr_16982_17649[(1)] = cljs.core.first((state_16956[(4)])));

} else {
throw ex__14830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17650 = state_16956;
state_16956 = G__17650;
continue;
} else {
return ret_value__14828__auto__;
}
break;
}
});
cljs$core$async$state_machine__14827__auto__ = function(state_16956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14827__auto____1.call(this,state_16956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14827__auto____0;
cljs$core$async$state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14827__auto____1;
return cljs$core$async$state_machine__14827__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_16983 = f__14889__auto__();
(statearr_16983[(6)] = c__14888__auto___17621);

return statearr_16983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16985 = arguments.length;
switch (G__16985) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14888__auto___17654 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14889__auto__ = (function (){var switch__14826__auto__ = (function (state_17030){
var state_val_17031 = (state_17030[(1)]);
if((state_val_17031 === (7))){
var inst_17026 = (state_17030[(2)]);
var state_17030__$1 = state_17030;
var statearr_17032_17655 = state_17030__$1;
(statearr_17032_17655[(2)] = inst_17026);

(statearr_17032_17655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (1))){
var inst_16986 = [];
var inst_16987 = inst_16986;
var inst_16988 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17030__$1 = (function (){var statearr_17033 = state_17030;
(statearr_17033[(7)] = inst_16987);

(statearr_17033[(8)] = inst_16988);

return statearr_17033;
})();
var statearr_17034_17656 = state_17030__$1;
(statearr_17034_17656[(2)] = null);

(statearr_17034_17656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (4))){
var inst_16991 = (state_17030[(9)]);
var inst_16991__$1 = (state_17030[(2)]);
var inst_16992 = (inst_16991__$1 == null);
var inst_16993 = cljs.core.not(inst_16992);
var state_17030__$1 = (function (){var statearr_17035 = state_17030;
(statearr_17035[(9)] = inst_16991__$1);

return statearr_17035;
})();
if(inst_16993){
var statearr_17036_17657 = state_17030__$1;
(statearr_17036_17657[(1)] = (5));

} else {
var statearr_17037_17658 = state_17030__$1;
(statearr_17037_17658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (15))){
var inst_16987 = (state_17030[(7)]);
var inst_17018 = cljs.core.vec(inst_16987);
var state_17030__$1 = state_17030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17030__$1,(18),out,inst_17018);
} else {
if((state_val_17031 === (13))){
var inst_17013 = (state_17030[(2)]);
var state_17030__$1 = state_17030;
var statearr_17038_17659 = state_17030__$1;
(statearr_17038_17659[(2)] = inst_17013);

(statearr_17038_17659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (6))){
var inst_16987 = (state_17030[(7)]);
var inst_17015 = inst_16987.length;
var inst_17016 = (inst_17015 > (0));
var state_17030__$1 = state_17030;
if(cljs.core.truth_(inst_17016)){
var statearr_17039_17660 = state_17030__$1;
(statearr_17039_17660[(1)] = (15));

} else {
var statearr_17040_17661 = state_17030__$1;
(statearr_17040_17661[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (17))){
var inst_17023 = (state_17030[(2)]);
var inst_17024 = cljs.core.async.close_BANG_(out);
var state_17030__$1 = (function (){var statearr_17041 = state_17030;
(statearr_17041[(10)] = inst_17023);

return statearr_17041;
})();
var statearr_17042_17662 = state_17030__$1;
(statearr_17042_17662[(2)] = inst_17024);

(statearr_17042_17662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (3))){
var inst_17028 = (state_17030[(2)]);
var state_17030__$1 = state_17030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17030__$1,inst_17028);
} else {
if((state_val_17031 === (12))){
var inst_16987 = (state_17030[(7)]);
var inst_17006 = cljs.core.vec(inst_16987);
var state_17030__$1 = state_17030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17030__$1,(14),out,inst_17006);
} else {
if((state_val_17031 === (2))){
var state_17030__$1 = state_17030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17030__$1,(4),ch);
} else {
if((state_val_17031 === (11))){
var inst_16987 = (state_17030[(7)]);
var inst_16991 = (state_17030[(9)]);
var inst_16995 = (state_17030[(11)]);
var inst_17003 = inst_16987.push(inst_16991);
var tmp17043 = inst_16987;
var inst_16987__$1 = tmp17043;
var inst_16988 = inst_16995;
var state_17030__$1 = (function (){var statearr_17044 = state_17030;
(statearr_17044[(12)] = inst_17003);

(statearr_17044[(7)] = inst_16987__$1);

(statearr_17044[(8)] = inst_16988);

return statearr_17044;
})();
var statearr_17045_17664 = state_17030__$1;
(statearr_17045_17664[(2)] = null);

(statearr_17045_17664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (9))){
var inst_16988 = (state_17030[(8)]);
var inst_16999 = cljs.core.keyword_identical_QMARK_(inst_16988,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17030__$1 = state_17030;
var statearr_17046_17665 = state_17030__$1;
(statearr_17046_17665[(2)] = inst_16999);

(statearr_17046_17665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (5))){
var inst_16991 = (state_17030[(9)]);
var inst_16995 = (state_17030[(11)]);
var inst_16988 = (state_17030[(8)]);
var inst_16996 = (state_17030[(13)]);
var inst_16995__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16991) : f.call(null,inst_16991));
var inst_16996__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16995__$1,inst_16988);
var state_17030__$1 = (function (){var statearr_17047 = state_17030;
(statearr_17047[(11)] = inst_16995__$1);

(statearr_17047[(13)] = inst_16996__$1);

return statearr_17047;
})();
if(inst_16996__$1){
var statearr_17048_17666 = state_17030__$1;
(statearr_17048_17666[(1)] = (8));

} else {
var statearr_17049_17667 = state_17030__$1;
(statearr_17049_17667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (14))){
var inst_16991 = (state_17030[(9)]);
var inst_16995 = (state_17030[(11)]);
var inst_17008 = (state_17030[(2)]);
var inst_17009 = [];
var inst_17010 = inst_17009.push(inst_16991);
var inst_16987 = inst_17009;
var inst_16988 = inst_16995;
var state_17030__$1 = (function (){var statearr_17050 = state_17030;
(statearr_17050[(14)] = inst_17008);

(statearr_17050[(15)] = inst_17010);

(statearr_17050[(7)] = inst_16987);

(statearr_17050[(8)] = inst_16988);

return statearr_17050;
})();
var statearr_17051_17668 = state_17030__$1;
(statearr_17051_17668[(2)] = null);

(statearr_17051_17668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (16))){
var state_17030__$1 = state_17030;
var statearr_17052_17669 = state_17030__$1;
(statearr_17052_17669[(2)] = null);

(statearr_17052_17669[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (10))){
var inst_17001 = (state_17030[(2)]);
var state_17030__$1 = state_17030;
if(cljs.core.truth_(inst_17001)){
var statearr_17053_17670 = state_17030__$1;
(statearr_17053_17670[(1)] = (11));

} else {
var statearr_17054_17671 = state_17030__$1;
(statearr_17054_17671[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (18))){
var inst_17020 = (state_17030[(2)]);
var state_17030__$1 = state_17030;
var statearr_17055_17672 = state_17030__$1;
(statearr_17055_17672[(2)] = inst_17020);

(statearr_17055_17672[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (8))){
var inst_16996 = (state_17030[(13)]);
var state_17030__$1 = state_17030;
var statearr_17056_17673 = state_17030__$1;
(statearr_17056_17673[(2)] = inst_16996);

(statearr_17056_17673[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__14827__auto__ = null;
var cljs$core$async$state_machine__14827__auto____0 = (function (){
var statearr_17057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17057[(0)] = cljs$core$async$state_machine__14827__auto__);

(statearr_17057[(1)] = (1));

return statearr_17057;
});
var cljs$core$async$state_machine__14827__auto____1 = (function (state_17030){
while(true){
var ret_value__14828__auto__ = (function (){try{while(true){
var result__14829__auto__ = switch__14826__auto__(state_17030);
if(cljs.core.keyword_identical_QMARK_(result__14829__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14829__auto__;
}
break;
}
}catch (e17058){var ex__14830__auto__ = e17058;
var statearr_17059_17674 = state_17030;
(statearr_17059_17674[(2)] = ex__14830__auto__);


if(cljs.core.seq((state_17030[(4)]))){
var statearr_17060_17675 = state_17030;
(statearr_17060_17675[(1)] = cljs.core.first((state_17030[(4)])));

} else {
throw ex__14830__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14828__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17683 = state_17030;
state_17030 = G__17683;
continue;
} else {
return ret_value__14828__auto__;
}
break;
}
});
cljs$core$async$state_machine__14827__auto__ = function(state_17030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14827__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14827__auto____1.call(this,state_17030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14827__auto____0;
cljs$core$async$state_machine__14827__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14827__auto____1;
return cljs$core$async$state_machine__14827__auto__;
})()
})();
var state__14890__auto__ = (function (){var statearr_17061 = f__14889__auto__();
(statearr_17061[(6)] = c__14888__auto___17654);

return statearr_17061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14890__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
