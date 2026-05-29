goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19980){
var map__19982 = p__19980;
var map__19982__$1 = cljs.core.__destructure_map(map__19982);
var m = map__19982__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19982__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19982__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/");
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)));
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19988_20249 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19989_20250 = null;
var count__19990_20251 = (0);
var i__19991_20252 = (0);
while(true){
if((i__19991_20252 < count__19990_20251)){
var f_20253 = chunk__19989_20250.cljs$core$IIndexed$_nth$arity$2(null,i__19991_20252);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20253], 0));


var G__20254 = seq__19988_20249;
var G__20255 = chunk__19989_20250;
var G__20256 = count__19990_20251;
var G__20257 = (i__19991_20252 + (1));
seq__19988_20249 = G__20254;
chunk__19989_20250 = G__20255;
count__19990_20251 = G__20256;
i__19991_20252 = G__20257;
continue;
} else {
var temp__5825__auto___20258 = cljs.core.seq(seq__19988_20249);
if(temp__5825__auto___20258){
var seq__19988_20259__$1 = temp__5825__auto___20258;
if(cljs.core.chunked_seq_QMARK_(seq__19988_20259__$1)){
var c__5694__auto___20260 = cljs.core.chunk_first(seq__19988_20259__$1);
var G__20261 = cljs.core.chunk_rest(seq__19988_20259__$1);
var G__20262 = c__5694__auto___20260;
var G__20263 = cljs.core.count(c__5694__auto___20260);
var G__20264 = (0);
seq__19988_20249 = G__20261;
chunk__19989_20250 = G__20262;
count__19990_20251 = G__20263;
i__19991_20252 = G__20264;
continue;
} else {
var f_20265 = cljs.core.first(seq__19988_20259__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20265], 0));


var G__20266 = cljs.core.next(seq__19988_20259__$1);
var G__20267 = null;
var G__20268 = (0);
var G__20269 = (0);
seq__19988_20249 = G__20266;
chunk__19989_20250 = G__20267;
count__19990_20251 = G__20268;
i__19991_20252 = G__20269;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20270 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5162__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20270], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20270)))?cljs.core.second(arglists_20270):arglists_20270)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m)))], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/special_forms#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)))], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20005_20272 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20006_20273 = null;
var count__20007_20274 = (0);
var i__20008_20275 = (0);
while(true){
if((i__20008_20275 < count__20007_20274)){
var vec__20023_20276 = chunk__20006_20273.cljs$core$IIndexed$_nth$arity$2(null,i__20008_20275);
var name_20277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20023_20276,(0),null);
var map__20026_20278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20023_20276,(1),null);
var map__20026_20279__$1 = cljs.core.__destructure_map(map__20026_20278);
var doc_20280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20026_20279__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20026_20279__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20277], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20281], 0));

if(cljs.core.truth_(doc_20280)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20280], 0));
} else {
}


var G__20282 = seq__20005_20272;
var G__20283 = chunk__20006_20273;
var G__20284 = count__20007_20274;
var G__20285 = (i__20008_20275 + (1));
seq__20005_20272 = G__20282;
chunk__20006_20273 = G__20283;
count__20007_20274 = G__20284;
i__20008_20275 = G__20285;
continue;
} else {
var temp__5825__auto___20286 = cljs.core.seq(seq__20005_20272);
if(temp__5825__auto___20286){
var seq__20005_20287__$1 = temp__5825__auto___20286;
if(cljs.core.chunked_seq_QMARK_(seq__20005_20287__$1)){
var c__5694__auto___20288 = cljs.core.chunk_first(seq__20005_20287__$1);
var G__20289 = cljs.core.chunk_rest(seq__20005_20287__$1);
var G__20290 = c__5694__auto___20288;
var G__20291 = cljs.core.count(c__5694__auto___20288);
var G__20292 = (0);
seq__20005_20272 = G__20289;
chunk__20006_20273 = G__20290;
count__20007_20274 = G__20291;
i__20008_20275 = G__20292;
continue;
} else {
var vec__20055_20293 = cljs.core.first(seq__20005_20287__$1);
var name_20294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20055_20293,(0),null);
var map__20058_20295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20055_20293,(1),null);
var map__20058_20296__$1 = cljs.core.__destructure_map(map__20058_20295);
var doc_20297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20058_20296__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20058_20296__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20294], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20298], 0));

if(cljs.core.truth_(doc_20297)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20297], 0));
} else {
}


var G__20299 = cljs.core.next(seq__20005_20287__$1);
var G__20300 = null;
var G__20301 = (0);
var G__20302 = (0);
seq__20005_20272 = G__20299;
chunk__20006_20273 = G__20300;
count__20007_20274 = G__20301;
i__20008_20275 = G__20302;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5825__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5825__auto__)){
var fnspec = temp__5825__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20107 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20108 = null;
var count__20109 = (0);
var i__20110 = (0);
while(true){
if((i__20110 < count__20109)){
var role = chunk__20108.cljs$core$IIndexed$_nth$arity$2(null,i__20110);
var temp__5825__auto___20303__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___20303__$1)){
var spec_20304 = temp__5825__auto___20303__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_20304)], 0));
} else {
}


var G__20305 = seq__20107;
var G__20306 = chunk__20108;
var G__20307 = count__20109;
var G__20308 = (i__20110 + (1));
seq__20107 = G__20305;
chunk__20108 = G__20306;
count__20109 = G__20307;
i__20110 = G__20308;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__20107);
if(temp__5825__auto____$1){
var seq__20107__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20107__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__20107__$1);
var G__20309 = cljs.core.chunk_rest(seq__20107__$1);
var G__20310 = c__5694__auto__;
var G__20311 = cljs.core.count(c__5694__auto__);
var G__20312 = (0);
seq__20107 = G__20309;
chunk__20108 = G__20310;
count__20109 = G__20311;
i__20110 = G__20312;
continue;
} else {
var role = cljs.core.first(seq__20107__$1);
var temp__5825__auto___20313__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___20313__$2)){
var spec_20314 = temp__5825__auto___20313__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_20314)], 0));
} else {
}


var G__20316 = cljs.core.next(seq__20107__$1);
var G__20317 = null;
var G__20318 = (0);
var G__20319 = (0);
seq__20107 = G__20316;
chunk__20108 = G__20317;
count__20109 = G__20318;
i__20110 = G__20319;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20152 = datafied_throwable;
var map__20152__$1 = cljs.core.__destructure_map(map__20152);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20152__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20152__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20152__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20153 = cljs.core.last(via);
var map__20153__$1 = cljs.core.__destructure_map(map__20153);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20153__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20153__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20153__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20154 = data;
var map__20154__$1 = cljs.core.__destructure_map(map__20154);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20154__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20154__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20154__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20155 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20155__$1 = cljs.core.__destructure_map(map__20155);
var top_data = map__20155__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20155__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20157 = phase;
var G__20157__$1 = (((G__20157 instanceof cljs.core.Keyword))?G__20157.fqn:null);
switch (G__20157__$1) {
case "read-source":
var map__20158 = data;
var map__20158__$1 = cljs.core.__destructure_map(map__20158);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20158__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20158__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20159 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20159__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20159,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20159);
var G__20159__$2 = (cljs.core.truth_((function (){var fexpr__20160 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20160.cljs$core$IFn$_invoke$arity$1 ? fexpr__20160.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20160.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20159__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20159__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20159__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20159__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20165 = top_data;
var G__20165__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20165,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20165);
var G__20165__$2 = (cljs.core.truth_((function (){var fexpr__20166 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20166.cljs$core$IFn$_invoke$arity$1 ? fexpr__20166.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20166.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20165__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20165__$1);
var G__20165__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20165__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20165__$2);
var G__20165__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20165__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20165__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20165__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20165__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20171 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20171,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20171,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20171,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20171,(3),null);
var G__20174 = top_data;
var G__20174__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20174,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20174);
var G__20174__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20174__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20174__$1);
var G__20174__$3 = (cljs.core.truth_((function (){var and__5160__auto__ = source__$1;
if(cljs.core.truth_(and__5160__auto__)){
return method;
} else {
return and__5160__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20174__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20174__$2);
var G__20174__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20174__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20174__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20174__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20174__$4;
}

break;
case "execution":
var vec__20175 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20175,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20175,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20175,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20175,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20150_SHARP_){
var or__5162__auto__ = (p1__20150_SHARP_ == null);
if(or__5162__auto__){
return or__5162__auto__;
} else {
var fexpr__20182 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20182.cljs$core$IFn$_invoke$arity$1 ? fexpr__20182.cljs$core$IFn$_invoke$arity$1(p1__20150_SHARP_) : fexpr__20182.call(null,p1__20150_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return line;
}
})();
var G__20188 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20188__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20188,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20188);
var G__20188__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20188__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20188__$1);
var G__20188__$3 = (cljs.core.truth_((function (){var or__5162__auto__ = fn;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var and__5160__auto__ = source__$1;
if(cljs.core.truth_(and__5160__auto__)){
return method;
} else {
return and__5160__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20188__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5162__auto__ = fn;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20188__$2);
var G__20188__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20188__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20188__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20188__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20188__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20157__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20191){
var map__20192 = p__20191;
var map__20192__$1 = cljs.core.__destructure_map(map__20192);
var triage_data = map__20192__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20192__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20192__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20192__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20192__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20192__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20192__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20192__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20192__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = source;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "<cljs repl>";
}
})())+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = line;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (1);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)):"")));
var class_name = cljs.core.name((function (){var or__5162__auto__ = class$;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":(""+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(simple_class)+")"));
var format = goog.string.format;
var G__20198 = phase;
var G__20198__$1 = (((G__20198 instanceof cljs.core.Keyword))?G__20198.fqn:null);
switch (G__20198__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20199 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20200 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__20201 = loc;
var G__20202 = (cljs.core.truth_(spec)?(function (){var sb__5816__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20203_20341 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20204_20342 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20205_20343 = true;
var _STAR_print_fn_STAR__temp_val__20206_20344 = (function (x__5817__auto__){
return sb__5816__auto__.append(x__5817__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20205_20343);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20206_20344);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20189_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20189_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20204_20342);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20203_20341);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5816__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20199,G__20200,G__20201,G__20202) : format.call(null,G__20199,G__20200,G__20201,G__20202));

break;
case "macroexpansion":
var G__20207 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20208 = cause_type;
var G__20209 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__20210 = loc;
var G__20211 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20207,G__20208,G__20209,G__20210,G__20211) : format.call(null,G__20207,G__20208,G__20209,G__20210,G__20211));

break;
case "compile-syntax-check":
var G__20212 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20213 = cause_type;
var G__20214 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__20215 = loc;
var G__20216 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20212,G__20213,G__20214,G__20215,G__20216) : format.call(null,G__20212,G__20213,G__20214,G__20215,G__20216));

break;
case "compilation":
var G__20217 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20218 = cause_type;
var G__20219 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__20220 = loc;
var G__20221 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20217,G__20218,G__20219,G__20220,G__20221) : format.call(null,G__20217,G__20218,G__20219,G__20220,G__20221));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20222 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20223 = symbol;
var G__20224 = loc;
var G__20225 = (function (){var sb__5816__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20227_20347 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20228_20348 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20229_20349 = true;
var _STAR_print_fn_STAR__temp_val__20230_20350 = (function (x__5817__auto__){
return sb__5816__auto__.append(x__5817__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20229_20349);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20230_20350);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20190_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20190_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20228_20348);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20227_20347);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5816__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20222,G__20223,G__20224,G__20225) : format.call(null,G__20222,G__20223,G__20224,G__20225));
} else {
var G__20231 = "Execution error%s at %s(%s).\n%s\n";
var G__20232 = cause_type;
var G__20233 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__20234 = loc;
var G__20235 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20231,G__20232,G__20233,G__20234,G__20235) : format.call(null,G__20231,G__20232,G__20233,G__20234,G__20235));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20198__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
