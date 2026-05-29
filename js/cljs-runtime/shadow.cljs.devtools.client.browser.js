goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___21777 = arguments.length;
var i__5898__auto___21778 = (0);
while(true){
if((i__5898__auto___21778 < len__5897__auto___21777)){
args__5903__auto__.push((arguments[i__5898__auto___21778]));

var G__21779 = (i__5898__auto___21778 + (1));
i__5898__auto___21778 = G__21779;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"%cshadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"shadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21335){
var G__21336 = cljs.core.first(seq21335);
var seq21335__$1 = cljs.core.next(seq21335);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21336,seq21335__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21343 = cljs.core.seq(sources);
var chunk__21344 = null;
var count__21345 = (0);
var i__21346 = (0);
while(true){
if((i__21346 < count__21345)){
var map__21351 = chunk__21344.cljs$core$IIndexed$_nth$arity$2(null,i__21346);
var map__21351__$1 = cljs.core.__destructure_map(map__21351);
var src = map__21351__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21351__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21351__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21351__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21351__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21352){var e_21780 = e21352;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21780);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21780.message))));
}

var G__21781 = seq__21343;
var G__21782 = chunk__21344;
var G__21783 = count__21345;
var G__21784 = (i__21346 + (1));
seq__21343 = G__21781;
chunk__21344 = G__21782;
count__21345 = G__21783;
i__21346 = G__21784;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21343);
if(temp__5825__auto__){
var seq__21343__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21343__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__21343__$1);
var G__21785 = cljs.core.chunk_rest(seq__21343__$1);
var G__21786 = c__5694__auto__;
var G__21787 = cljs.core.count(c__5694__auto__);
var G__21788 = (0);
seq__21343 = G__21785;
chunk__21344 = G__21786;
count__21345 = G__21787;
i__21346 = G__21788;
continue;
} else {
var map__21353 = cljs.core.first(seq__21343__$1);
var map__21353__$1 = cljs.core.__destructure_map(map__21353);
var src = map__21353__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21353__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21353__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21353__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21353__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21354){var e_21789 = e21354;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21789);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21789.message))));
}

var G__21790 = cljs.core.next(seq__21343__$1);
var G__21791 = null;
var G__21792 = (0);
var G__21793 = (0);
seq__21343 = G__21790;
chunk__21344 = G__21791;
count__21345 = G__21792;
i__21346 = G__21793;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call async "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21358 = cljs.core.seq(js_requires);
var chunk__21359 = null;
var count__21360 = (0);
var i__21361 = (0);
while(true){
if((i__21361 < count__21360)){
var js_ns = chunk__21359.cljs$core$IIndexed$_nth$arity$2(null,i__21361);
var require_str_21794 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21794);


var G__21795 = seq__21358;
var G__21796 = chunk__21359;
var G__21797 = count__21360;
var G__21798 = (i__21361 + (1));
seq__21358 = G__21795;
chunk__21359 = G__21796;
count__21360 = G__21797;
i__21361 = G__21798;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21358);
if(temp__5825__auto__){
var seq__21358__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21358__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__21358__$1);
var G__21799 = cljs.core.chunk_rest(seq__21358__$1);
var G__21800 = c__5694__auto__;
var G__21801 = cljs.core.count(c__5694__auto__);
var G__21802 = (0);
seq__21358 = G__21799;
chunk__21359 = G__21800;
count__21360 = G__21801;
i__21361 = G__21802;
continue;
} else {
var js_ns = cljs.core.first(seq__21358__$1);
var require_str_21803 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21803);


var G__21804 = cljs.core.next(seq__21358__$1);
var G__21805 = null;
var G__21806 = (0);
var G__21807 = (0);
seq__21358 = G__21804;
chunk__21359 = G__21805;
count__21360 = G__21806;
i__21361 = G__21807;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21367){
var map__21368 = p__21367;
var map__21368__$1 = cljs.core.__destructure_map(map__21368);
var msg = map__21368__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21368__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21368__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5649__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21369(s__21370){
return (new cljs.core.LazySeq(null,(function (){
var s__21370__$1 = s__21370;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__21370__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var map__21375 = cljs.core.first(xs__6385__auto__);
var map__21375__$1 = cljs.core.__destructure_map(map__21375);
var src = map__21375__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21375__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21375__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5645__auto__ = ((function (s__21370__$1,map__21375,map__21375__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21368,map__21368__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21369_$_iter__21371(s__21372){
return (new cljs.core.LazySeq(null,((function (s__21370__$1,map__21375,map__21375__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21368,map__21368__$1,msg,info,reload_info){
return (function (){
var s__21372__$1 = s__21372;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__21372__$1);
if(temp__5825__auto____$1){
var s__21372__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21372__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__21372__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__21374 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__21373 = (0);
while(true){
if((i__21373 < size__5648__auto__)){
var warning = cljs.core._nth(c__5647__auto__,i__21373);
cljs.core.chunk_append(b__21374,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21809 = (i__21373 + (1));
i__21373 = G__21809;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21374),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21369_$_iter__21371(cljs.core.chunk_rest(s__21372__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21374),null);
}
} else {
var warning = cljs.core.first(s__21372__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21369_$_iter__21371(cljs.core.rest(s__21372__$2)));
}
} else {
return null;
}
break;
}
});})(s__21370__$1,map__21375,map__21375__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21368,map__21368__$1,msg,info,reload_info))
,null,null));
});})(s__21370__$1,map__21375,map__21375__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__21368,map__21368__$1,msg,info,reload_info))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(warnings));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21369(cljs.core.rest(s__21370__$1)));
} else {
var G__21810 = cljs.core.rest(s__21370__$1);
s__21370__$1 = G__21810;
continue;
}
} else {
var G__21811 = cljs.core.rest(s__21370__$1);
s__21370__$1 = G__21811;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21378_21812 = cljs.core.seq(warnings);
var chunk__21379_21813 = null;
var count__21380_21814 = (0);
var i__21381_21815 = (0);
while(true){
if((i__21381_21815 < count__21380_21814)){
var map__21384_21816 = chunk__21379_21813.cljs$core$IIndexed$_nth$arity$2(null,i__21381_21815);
var map__21384_21817__$1 = cljs.core.__destructure_map(map__21384_21816);
var w_21818 = map__21384_21817__$1;
var msg_21819__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21384_21817__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21384_21817__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21384_21817__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21384_21817__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21822)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21820)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21821)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21819__$1)));


var G__21823 = seq__21378_21812;
var G__21824 = chunk__21379_21813;
var G__21825 = count__21380_21814;
var G__21826 = (i__21381_21815 + (1));
seq__21378_21812 = G__21823;
chunk__21379_21813 = G__21824;
count__21380_21814 = G__21825;
i__21381_21815 = G__21826;
continue;
} else {
var temp__5825__auto___21827 = cljs.core.seq(seq__21378_21812);
if(temp__5825__auto___21827){
var seq__21378_21828__$1 = temp__5825__auto___21827;
if(cljs.core.chunked_seq_QMARK_(seq__21378_21828__$1)){
var c__5694__auto___21829 = cljs.core.chunk_first(seq__21378_21828__$1);
var G__21830 = cljs.core.chunk_rest(seq__21378_21828__$1);
var G__21831 = c__5694__auto___21829;
var G__21832 = cljs.core.count(c__5694__auto___21829);
var G__21833 = (0);
seq__21378_21812 = G__21830;
chunk__21379_21813 = G__21831;
count__21380_21814 = G__21832;
i__21381_21815 = G__21833;
continue;
} else {
var map__21385_21834 = cljs.core.first(seq__21378_21828__$1);
var map__21385_21835__$1 = cljs.core.__destructure_map(map__21385_21834);
var w_21836 = map__21385_21835__$1;
var msg_21837__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21385_21835__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21385_21835__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21385_21835__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21840 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21385_21835__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21840)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21838)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21839)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21837__$1)));


var G__21841 = cljs.core.next(seq__21378_21828__$1);
var G__21842 = null;
var G__21843 = (0);
var G__21844 = (0);
seq__21378_21812 = G__21841;
chunk__21379_21813 = G__21842;
count__21380_21814 = G__21843;
i__21381_21815 = G__21844;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21366_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21366_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new)+"?"))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5160__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5160__auto__){
var and__5160__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5160__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21388 = node_uri;
G__21388.setQuery(null);

G__21388.setPath(new$);

return G__21388;
})()));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21389){
var map__21390 = p__21389;
var map__21390__$1 = cljs.core.__destructure_map(map__21390);
var msg = map__21390__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21390__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21390__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21391 = cljs.core.seq(updates);
var chunk__21393 = null;
var count__21394 = (0);
var i__21395 = (0);
while(true){
if((i__21395 < count__21394)){
var path = chunk__21393.cljs$core$IIndexed$_nth$arity$2(null,i__21395);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21549_21845 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21553_21846 = null;
var count__21554_21847 = (0);
var i__21555_21848 = (0);
while(true){
if((i__21555_21848 < count__21554_21847)){
var node_21849 = chunk__21553_21846.cljs$core$IIndexed$_nth$arity$2(null,i__21555_21848);
if(cljs.core.not(node_21849.shadow$old)){
var path_match_21850 = shadow.cljs.devtools.client.browser.match_paths(node_21849.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21850)){
var new_link_21851 = (function (){var G__21601 = node_21849.cloneNode(true);
G__21601.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21850)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21601;
})();
(node_21849.shadow$old = true);

(new_link_21851.onload = ((function (seq__21549_21845,chunk__21553_21846,count__21554_21847,i__21555_21848,seq__21391,chunk__21393,count__21394,i__21395,new_link_21851,path_match_21850,node_21849,path,map__21390,map__21390__$1,msg,updates,reload_info){
return (function (e){
var seq__21607_21852 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21609_21853 = null;
var count__21610_21854 = (0);
var i__21611_21855 = (0);
while(true){
if((i__21611_21855 < count__21610_21854)){
var map__21624_21856 = chunk__21609_21853.cljs$core$IIndexed$_nth$arity$2(null,i__21611_21855);
var map__21624_21857__$1 = cljs.core.__destructure_map(map__21624_21856);
var task_21858 = map__21624_21857__$1;
var fn_str_21859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21624_21857__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21624_21857__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21861 = goog.getObjectByName(fn_str_21859,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21860)));

(fn_obj_21861.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21861.cljs$core$IFn$_invoke$arity$2(path,new_link_21851) : fn_obj_21861.call(null,path,new_link_21851));


var G__21862 = seq__21607_21852;
var G__21863 = chunk__21609_21853;
var G__21864 = count__21610_21854;
var G__21865 = (i__21611_21855 + (1));
seq__21607_21852 = G__21862;
chunk__21609_21853 = G__21863;
count__21610_21854 = G__21864;
i__21611_21855 = G__21865;
continue;
} else {
var temp__5825__auto___21866 = cljs.core.seq(seq__21607_21852);
if(temp__5825__auto___21866){
var seq__21607_21867__$1 = temp__5825__auto___21866;
if(cljs.core.chunked_seq_QMARK_(seq__21607_21867__$1)){
var c__5694__auto___21868 = cljs.core.chunk_first(seq__21607_21867__$1);
var G__21869 = cljs.core.chunk_rest(seq__21607_21867__$1);
var G__21870 = c__5694__auto___21868;
var G__21871 = cljs.core.count(c__5694__auto___21868);
var G__21872 = (0);
seq__21607_21852 = G__21869;
chunk__21609_21853 = G__21870;
count__21610_21854 = G__21871;
i__21611_21855 = G__21872;
continue;
} else {
var map__21625_21873 = cljs.core.first(seq__21607_21867__$1);
var map__21625_21874__$1 = cljs.core.__destructure_map(map__21625_21873);
var task_21875 = map__21625_21874__$1;
var fn_str_21876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21625_21874__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21625_21874__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21878 = goog.getObjectByName(fn_str_21876,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21877)));

(fn_obj_21878.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21878.cljs$core$IFn$_invoke$arity$2(path,new_link_21851) : fn_obj_21878.call(null,path,new_link_21851));


var G__21879 = cljs.core.next(seq__21607_21867__$1);
var G__21880 = null;
var G__21881 = (0);
var G__21882 = (0);
seq__21607_21852 = G__21879;
chunk__21609_21853 = G__21880;
count__21610_21854 = G__21881;
i__21611_21855 = G__21882;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21849);
});})(seq__21549_21845,chunk__21553_21846,count__21554_21847,i__21555_21848,seq__21391,chunk__21393,count__21394,i__21395,new_link_21851,path_match_21850,node_21849,path,map__21390,map__21390__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21850], 0));

goog.dom.insertSiblingAfter(new_link_21851,node_21849);


var G__21883 = seq__21549_21845;
var G__21884 = chunk__21553_21846;
var G__21885 = count__21554_21847;
var G__21886 = (i__21555_21848 + (1));
seq__21549_21845 = G__21883;
chunk__21553_21846 = G__21884;
count__21554_21847 = G__21885;
i__21555_21848 = G__21886;
continue;
} else {
var G__21887 = seq__21549_21845;
var G__21888 = chunk__21553_21846;
var G__21889 = count__21554_21847;
var G__21890 = (i__21555_21848 + (1));
seq__21549_21845 = G__21887;
chunk__21553_21846 = G__21888;
count__21554_21847 = G__21889;
i__21555_21848 = G__21890;
continue;
}
} else {
var G__21891 = seq__21549_21845;
var G__21892 = chunk__21553_21846;
var G__21893 = count__21554_21847;
var G__21894 = (i__21555_21848 + (1));
seq__21549_21845 = G__21891;
chunk__21553_21846 = G__21892;
count__21554_21847 = G__21893;
i__21555_21848 = G__21894;
continue;
}
} else {
var temp__5825__auto___21895 = cljs.core.seq(seq__21549_21845);
if(temp__5825__auto___21895){
var seq__21549_21896__$1 = temp__5825__auto___21895;
if(cljs.core.chunked_seq_QMARK_(seq__21549_21896__$1)){
var c__5694__auto___21897 = cljs.core.chunk_first(seq__21549_21896__$1);
var G__21898 = cljs.core.chunk_rest(seq__21549_21896__$1);
var G__21899 = c__5694__auto___21897;
var G__21900 = cljs.core.count(c__5694__auto___21897);
var G__21901 = (0);
seq__21549_21845 = G__21898;
chunk__21553_21846 = G__21899;
count__21554_21847 = G__21900;
i__21555_21848 = G__21901;
continue;
} else {
var node_21902 = cljs.core.first(seq__21549_21896__$1);
if(cljs.core.not(node_21902.shadow$old)){
var path_match_21903 = shadow.cljs.devtools.client.browser.match_paths(node_21902.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21903)){
var new_link_21904 = (function (){var G__21638 = node_21902.cloneNode(true);
G__21638.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21903)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21638;
})();
(node_21902.shadow$old = true);

(new_link_21904.onload = ((function (seq__21549_21845,chunk__21553_21846,count__21554_21847,i__21555_21848,seq__21391,chunk__21393,count__21394,i__21395,new_link_21904,path_match_21903,node_21902,seq__21549_21896__$1,temp__5825__auto___21895,path,map__21390,map__21390__$1,msg,updates,reload_info){
return (function (e){
var seq__21640_21905 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21642_21906 = null;
var count__21643_21907 = (0);
var i__21644_21908 = (0);
while(true){
if((i__21644_21908 < count__21643_21907)){
var map__21661_21909 = chunk__21642_21906.cljs$core$IIndexed$_nth$arity$2(null,i__21644_21908);
var map__21661_21910__$1 = cljs.core.__destructure_map(map__21661_21909);
var task_21911 = map__21661_21910__$1;
var fn_str_21912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21661_21910__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21913 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21661_21910__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21914 = goog.getObjectByName(fn_str_21912,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21913)));

(fn_obj_21914.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21914.cljs$core$IFn$_invoke$arity$2(path,new_link_21904) : fn_obj_21914.call(null,path,new_link_21904));


var G__21915 = seq__21640_21905;
var G__21916 = chunk__21642_21906;
var G__21917 = count__21643_21907;
var G__21918 = (i__21644_21908 + (1));
seq__21640_21905 = G__21915;
chunk__21642_21906 = G__21916;
count__21643_21907 = G__21917;
i__21644_21908 = G__21918;
continue;
} else {
var temp__5825__auto___21919__$1 = cljs.core.seq(seq__21640_21905);
if(temp__5825__auto___21919__$1){
var seq__21640_21920__$1 = temp__5825__auto___21919__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21640_21920__$1)){
var c__5694__auto___21921 = cljs.core.chunk_first(seq__21640_21920__$1);
var G__21922 = cljs.core.chunk_rest(seq__21640_21920__$1);
var G__21923 = c__5694__auto___21921;
var G__21924 = cljs.core.count(c__5694__auto___21921);
var G__21925 = (0);
seq__21640_21905 = G__21922;
chunk__21642_21906 = G__21923;
count__21643_21907 = G__21924;
i__21644_21908 = G__21925;
continue;
} else {
var map__21662_21926 = cljs.core.first(seq__21640_21920__$1);
var map__21662_21927__$1 = cljs.core.__destructure_map(map__21662_21926);
var task_21928 = map__21662_21927__$1;
var fn_str_21929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21662_21927__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21662_21927__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21931 = goog.getObjectByName(fn_str_21929,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21930)));

(fn_obj_21931.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21931.cljs$core$IFn$_invoke$arity$2(path,new_link_21904) : fn_obj_21931.call(null,path,new_link_21904));


var G__21932 = cljs.core.next(seq__21640_21920__$1);
var G__21933 = null;
var G__21934 = (0);
var G__21935 = (0);
seq__21640_21905 = G__21932;
chunk__21642_21906 = G__21933;
count__21643_21907 = G__21934;
i__21644_21908 = G__21935;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21902);
});})(seq__21549_21845,chunk__21553_21846,count__21554_21847,i__21555_21848,seq__21391,chunk__21393,count__21394,i__21395,new_link_21904,path_match_21903,node_21902,seq__21549_21896__$1,temp__5825__auto___21895,path,map__21390,map__21390__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21903], 0));

goog.dom.insertSiblingAfter(new_link_21904,node_21902);


var G__21936 = cljs.core.next(seq__21549_21896__$1);
var G__21937 = null;
var G__21938 = (0);
var G__21939 = (0);
seq__21549_21845 = G__21936;
chunk__21553_21846 = G__21937;
count__21554_21847 = G__21938;
i__21555_21848 = G__21939;
continue;
} else {
var G__21940 = cljs.core.next(seq__21549_21896__$1);
var G__21941 = null;
var G__21942 = (0);
var G__21943 = (0);
seq__21549_21845 = G__21940;
chunk__21553_21846 = G__21941;
count__21554_21847 = G__21942;
i__21555_21848 = G__21943;
continue;
}
} else {
var G__21944 = cljs.core.next(seq__21549_21896__$1);
var G__21945 = null;
var G__21946 = (0);
var G__21947 = (0);
seq__21549_21845 = G__21944;
chunk__21553_21846 = G__21945;
count__21554_21847 = G__21946;
i__21555_21848 = G__21947;
continue;
}
}
} else {
}
}
break;
}


var G__21948 = seq__21391;
var G__21949 = chunk__21393;
var G__21950 = count__21394;
var G__21951 = (i__21395 + (1));
seq__21391 = G__21948;
chunk__21393 = G__21949;
count__21394 = G__21950;
i__21395 = G__21951;
continue;
} else {
var G__21952 = seq__21391;
var G__21953 = chunk__21393;
var G__21954 = count__21394;
var G__21955 = (i__21395 + (1));
seq__21391 = G__21952;
chunk__21393 = G__21953;
count__21394 = G__21954;
i__21395 = G__21955;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__21391);
if(temp__5825__auto__){
var seq__21391__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21391__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__21391__$1);
var G__21956 = cljs.core.chunk_rest(seq__21391__$1);
var G__21957 = c__5694__auto__;
var G__21958 = cljs.core.count(c__5694__auto__);
var G__21959 = (0);
seq__21391 = G__21956;
chunk__21393 = G__21957;
count__21394 = G__21958;
i__21395 = G__21959;
continue;
} else {
var path = cljs.core.first(seq__21391__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21663_21960 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21667_21961 = null;
var count__21668_21962 = (0);
var i__21669_21963 = (0);
while(true){
if((i__21669_21963 < count__21668_21962)){
var node_21964 = chunk__21667_21961.cljs$core$IIndexed$_nth$arity$2(null,i__21669_21963);
if(cljs.core.not(node_21964.shadow$old)){
var path_match_21965 = shadow.cljs.devtools.client.browser.match_paths(node_21964.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21965)){
var new_link_21966 = (function (){var G__21703 = node_21964.cloneNode(true);
G__21703.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21965)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21703;
})();
(node_21964.shadow$old = true);

(new_link_21966.onload = ((function (seq__21663_21960,chunk__21667_21961,count__21668_21962,i__21669_21963,seq__21391,chunk__21393,count__21394,i__21395,new_link_21966,path_match_21965,node_21964,path,seq__21391__$1,temp__5825__auto__,map__21390,map__21390__$1,msg,updates,reload_info){
return (function (e){
var seq__21704_21967 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21706_21968 = null;
var count__21707_21969 = (0);
var i__21708_21970 = (0);
while(true){
if((i__21708_21970 < count__21707_21969)){
var map__21712_21971 = chunk__21706_21968.cljs$core$IIndexed$_nth$arity$2(null,i__21708_21970);
var map__21712_21972__$1 = cljs.core.__destructure_map(map__21712_21971);
var task_21973 = map__21712_21972__$1;
var fn_str_21974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21712_21972__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21712_21972__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21976 = goog.getObjectByName(fn_str_21974,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21975)));

(fn_obj_21976.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21976.cljs$core$IFn$_invoke$arity$2(path,new_link_21966) : fn_obj_21976.call(null,path,new_link_21966));


var G__21977 = seq__21704_21967;
var G__21978 = chunk__21706_21968;
var G__21979 = count__21707_21969;
var G__21980 = (i__21708_21970 + (1));
seq__21704_21967 = G__21977;
chunk__21706_21968 = G__21978;
count__21707_21969 = G__21979;
i__21708_21970 = G__21980;
continue;
} else {
var temp__5825__auto___21981__$1 = cljs.core.seq(seq__21704_21967);
if(temp__5825__auto___21981__$1){
var seq__21704_21982__$1 = temp__5825__auto___21981__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21704_21982__$1)){
var c__5694__auto___21983 = cljs.core.chunk_first(seq__21704_21982__$1);
var G__21984 = cljs.core.chunk_rest(seq__21704_21982__$1);
var G__21985 = c__5694__auto___21983;
var G__21986 = cljs.core.count(c__5694__auto___21983);
var G__21987 = (0);
seq__21704_21967 = G__21984;
chunk__21706_21968 = G__21985;
count__21707_21969 = G__21986;
i__21708_21970 = G__21987;
continue;
} else {
var map__21713_21988 = cljs.core.first(seq__21704_21982__$1);
var map__21713_21989__$1 = cljs.core.__destructure_map(map__21713_21988);
var task_21990 = map__21713_21989__$1;
var fn_str_21991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21713_21989__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21713_21989__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21993 = goog.getObjectByName(fn_str_21991,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21992)));

(fn_obj_21993.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21993.cljs$core$IFn$_invoke$arity$2(path,new_link_21966) : fn_obj_21993.call(null,path,new_link_21966));


var G__21994 = cljs.core.next(seq__21704_21982__$1);
var G__21995 = null;
var G__21996 = (0);
var G__21997 = (0);
seq__21704_21967 = G__21994;
chunk__21706_21968 = G__21995;
count__21707_21969 = G__21996;
i__21708_21970 = G__21997;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21964);
});})(seq__21663_21960,chunk__21667_21961,count__21668_21962,i__21669_21963,seq__21391,chunk__21393,count__21394,i__21395,new_link_21966,path_match_21965,node_21964,path,seq__21391__$1,temp__5825__auto__,map__21390,map__21390__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21965], 0));

goog.dom.insertSiblingAfter(new_link_21966,node_21964);


var G__21998 = seq__21663_21960;
var G__21999 = chunk__21667_21961;
var G__22000 = count__21668_21962;
var G__22001 = (i__21669_21963 + (1));
seq__21663_21960 = G__21998;
chunk__21667_21961 = G__21999;
count__21668_21962 = G__22000;
i__21669_21963 = G__22001;
continue;
} else {
var G__22002 = seq__21663_21960;
var G__22003 = chunk__21667_21961;
var G__22004 = count__21668_21962;
var G__22005 = (i__21669_21963 + (1));
seq__21663_21960 = G__22002;
chunk__21667_21961 = G__22003;
count__21668_21962 = G__22004;
i__21669_21963 = G__22005;
continue;
}
} else {
var G__22006 = seq__21663_21960;
var G__22007 = chunk__21667_21961;
var G__22008 = count__21668_21962;
var G__22009 = (i__21669_21963 + (1));
seq__21663_21960 = G__22006;
chunk__21667_21961 = G__22007;
count__21668_21962 = G__22008;
i__21669_21963 = G__22009;
continue;
}
} else {
var temp__5825__auto___22010__$1 = cljs.core.seq(seq__21663_21960);
if(temp__5825__auto___22010__$1){
var seq__21663_22011__$1 = temp__5825__auto___22010__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21663_22011__$1)){
var c__5694__auto___22012 = cljs.core.chunk_first(seq__21663_22011__$1);
var G__22013 = cljs.core.chunk_rest(seq__21663_22011__$1);
var G__22014 = c__5694__auto___22012;
var G__22015 = cljs.core.count(c__5694__auto___22012);
var G__22016 = (0);
seq__21663_21960 = G__22013;
chunk__21667_21961 = G__22014;
count__21668_21962 = G__22015;
i__21669_21963 = G__22016;
continue;
} else {
var node_22017 = cljs.core.first(seq__21663_22011__$1);
if(cljs.core.not(node_22017.shadow$old)){
var path_match_22018 = shadow.cljs.devtools.client.browser.match_paths(node_22017.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22018)){
var new_link_22019 = (function (){var G__21720 = node_22017.cloneNode(true);
G__21720.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22018)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21720;
})();
(node_22017.shadow$old = true);

(new_link_22019.onload = ((function (seq__21663_21960,chunk__21667_21961,count__21668_21962,i__21669_21963,seq__21391,chunk__21393,count__21394,i__21395,new_link_22019,path_match_22018,node_22017,seq__21663_22011__$1,temp__5825__auto___22010__$1,path,seq__21391__$1,temp__5825__auto__,map__21390,map__21390__$1,msg,updates,reload_info){
return (function (e){
var seq__21721_22020 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21723_22021 = null;
var count__21724_22022 = (0);
var i__21725_22023 = (0);
while(true){
if((i__21725_22023 < count__21724_22022)){
var map__21734_22024 = chunk__21723_22021.cljs$core$IIndexed$_nth$arity$2(null,i__21725_22023);
var map__21734_22025__$1 = cljs.core.__destructure_map(map__21734_22024);
var task_22026 = map__21734_22025__$1;
var fn_str_22027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21734_22025__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21734_22025__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22029 = goog.getObjectByName(fn_str_22027,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22028)));

(fn_obj_22029.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22029.cljs$core$IFn$_invoke$arity$2(path,new_link_22019) : fn_obj_22029.call(null,path,new_link_22019));


var G__22030 = seq__21721_22020;
var G__22031 = chunk__21723_22021;
var G__22032 = count__21724_22022;
var G__22033 = (i__21725_22023 + (1));
seq__21721_22020 = G__22030;
chunk__21723_22021 = G__22031;
count__21724_22022 = G__22032;
i__21725_22023 = G__22033;
continue;
} else {
var temp__5825__auto___22034__$2 = cljs.core.seq(seq__21721_22020);
if(temp__5825__auto___22034__$2){
var seq__21721_22035__$1 = temp__5825__auto___22034__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21721_22035__$1)){
var c__5694__auto___22036 = cljs.core.chunk_first(seq__21721_22035__$1);
var G__22037 = cljs.core.chunk_rest(seq__21721_22035__$1);
var G__22038 = c__5694__auto___22036;
var G__22039 = cljs.core.count(c__5694__auto___22036);
var G__22040 = (0);
seq__21721_22020 = G__22037;
chunk__21723_22021 = G__22038;
count__21724_22022 = G__22039;
i__21725_22023 = G__22040;
continue;
} else {
var map__21735_22041 = cljs.core.first(seq__21721_22035__$1);
var map__21735_22042__$1 = cljs.core.__destructure_map(map__21735_22041);
var task_22043 = map__21735_22042__$1;
var fn_str_22044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21735_22042__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21735_22042__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22046 = goog.getObjectByName(fn_str_22044,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22045)));

(fn_obj_22046.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22046.cljs$core$IFn$_invoke$arity$2(path,new_link_22019) : fn_obj_22046.call(null,path,new_link_22019));


var G__22047 = cljs.core.next(seq__21721_22035__$1);
var G__22048 = null;
var G__22049 = (0);
var G__22050 = (0);
seq__21721_22020 = G__22047;
chunk__21723_22021 = G__22048;
count__21724_22022 = G__22049;
i__21725_22023 = G__22050;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22017);
});})(seq__21663_21960,chunk__21667_21961,count__21668_21962,i__21669_21963,seq__21391,chunk__21393,count__21394,i__21395,new_link_22019,path_match_22018,node_22017,seq__21663_22011__$1,temp__5825__auto___22010__$1,path,seq__21391__$1,temp__5825__auto__,map__21390,map__21390__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22018], 0));

goog.dom.insertSiblingAfter(new_link_22019,node_22017);


var G__22051 = cljs.core.next(seq__21663_22011__$1);
var G__22052 = null;
var G__22053 = (0);
var G__22054 = (0);
seq__21663_21960 = G__22051;
chunk__21667_21961 = G__22052;
count__21668_21962 = G__22053;
i__21669_21963 = G__22054;
continue;
} else {
var G__22055 = cljs.core.next(seq__21663_22011__$1);
var G__22056 = null;
var G__22057 = (0);
var G__22058 = (0);
seq__21663_21960 = G__22055;
chunk__21667_21961 = G__22056;
count__21668_21962 = G__22057;
i__21669_21963 = G__22058;
continue;
}
} else {
var G__22059 = cljs.core.next(seq__21663_22011__$1);
var G__22060 = null;
var G__22061 = (0);
var G__22062 = (0);
seq__21663_21960 = G__22059;
chunk__21667_21961 = G__22060;
count__21668_21962 = G__22061;
i__21669_21963 = G__22062;
continue;
}
}
} else {
}
}
break;
}


var G__22063 = cljs.core.next(seq__21391__$1);
var G__22064 = null;
var G__22065 = (0);
var G__22066 = (0);
seq__21391 = G__22063;
chunk__21393 = G__22064;
count__21394 = G__22065;
i__21395 = G__22066;
continue;
} else {
var G__22067 = cljs.core.next(seq__21391__$1);
var G__22068 = null;
var G__22069 = (0);
var G__22070 = (0);
seq__21391 = G__22067;
chunk__21393 = G__22068;
count__21394 = G__22069;
i__21395 = G__22070;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null))))))))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)+" ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM)+"]"),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21744 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21744) : success.call(null,G__21744));
}catch (e21743){var e = e21743;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21745,success,fail){
var map__21746 = p__21745;
var map__21746__$1 = cljs.core.__destructure_map(map__21746);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21746__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21748 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21748) : success.call(null,G__21748));
}catch (e21747){var e = e21747;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21749,done,error){
var map__21750 = p__21749;
var map__21750__$1 = cljs.core.__destructure_map(map__21750);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21750__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21753,done,error){
var map__21754 = p__21753;
var map__21754__$1 = cljs.core.__destructure_map(map__21754);
var msg = map__21754__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21754__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21754__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21754__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21755){
var map__21756 = p__21755;
var map__21756__$1 = cljs.core.__destructure_map(map__21756);
var src = map__21756__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21756__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5160__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5160__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21757 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21757) : done.call(null,G__21757));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21758){
var map__21759 = p__21758;
var map__21759__$1 = cljs.core.__destructure_map(map__21759);
var msg__$1 = map__21759__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21759__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21760){var ex = e21760;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21761){
var map__21763 = p__21761;
var map__21763__$1 = cljs.core.__destructure_map(map__21763);
var env = map__21763__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21763__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))+" ready!"));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error((""+"Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."+" Is the watch for this build running?"));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21770){
var map__21771 = p__21770;
var map__21771__$1 = cljs.core.__destructure_map(map__21771);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21771__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21771__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21772){
var map__21773 = p__21772;
var map__21773__$1 = cljs.core.__destructure_map(map__21773);
var svc = map__21773__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
