goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__21337__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__21337 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21338__i = 0, G__21338__a = new Array(arguments.length -  0);
while (G__21338__i < G__21338__a.length) {G__21338__a[G__21338__i] = arguments[G__21338__i + 0]; ++G__21338__i;}
  args = new cljs.core.IndexedSeq(G__21338__a,0,null);
} 
return G__21337__delegate.call(this,args);};
G__21337.cljs$lang$maxFixedArity = 0;
G__21337.cljs$lang$applyTo = (function (arglist__21339){
var args = cljs.core.seq(arglist__21339);
return G__21337__delegate(args);
});
G__21337.cljs$core$IFn$_invoke$arity$variadic = G__21337__delegate;
return G__21337;
})()
);

(o.error = (function() { 
var G__21340__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__21340 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21341__i = 0, G__21341__a = new Array(arguments.length -  0);
while (G__21341__i < G__21341__a.length) {G__21341__a[G__21341__i] = arguments[G__21341__i + 0]; ++G__21341__i;}
  args = new cljs.core.IndexedSeq(G__21341__a,0,null);
} 
return G__21340__delegate.call(this,args);};
G__21340.cljs$lang$maxFixedArity = 0;
G__21340.cljs$lang$applyTo = (function (arglist__21342){
var args = cljs.core.seq(arglist__21342);
return G__21340__delegate(args);
});
G__21340.cljs$core$IFn$_invoke$arity$variadic = G__21340__delegate;
return G__21340;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
