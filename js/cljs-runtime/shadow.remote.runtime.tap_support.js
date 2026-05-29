goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__20766,p__20767){
var map__20773 = p__20766;
var map__20773__$1 = cljs.core.__destructure_map(map__20773);
var svc = map__20773__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20773__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20773__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20773__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20774 = p__20767;
var map__20774__$1 = cljs.core.__destructure_map(map__20774);
var msg = map__20774__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20774__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20774__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20774__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20774__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20782,p__20783){
var map__20784 = p__20782;
var map__20784__$1 = cljs.core.__destructure_map(map__20784);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20784__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20785 = p__20783;
var map__20785__$1 = cljs.core.__destructure_map(map__20785);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20785__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__20790,p__20791){
var map__20792 = p__20790;
var map__20792__$1 = cljs.core.__destructure_map(map__20792);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20792__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20792__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20793 = p__20791;
var map__20793__$1 = cljs.core.__destructure_map(map__20793);
var msg = map__20793__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20793__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__20795,tid){
var map__20796 = p__20795;
var map__20796__$1 = cljs.core.__destructure_map(map__20796);
var svc = map__20796__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20796__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20801 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20802 = null;
var count__20803 = (0);
var i__20804 = (0);
while(true){
if((i__20804 < count__20803)){
var vec__20811 = chunk__20802.cljs$core$IIndexed$_nth$arity$2(null,i__20804);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20811,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20811,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20838 = seq__20801;
var G__20839 = chunk__20802;
var G__20840 = count__20803;
var G__20841 = (i__20804 + (1));
seq__20801 = G__20838;
chunk__20802 = G__20839;
count__20803 = G__20840;
i__20804 = G__20841;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__20801);
if(temp__5825__auto__){
var seq__20801__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20801__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__20801__$1);
var G__20842 = cljs.core.chunk_rest(seq__20801__$1);
var G__20843 = c__5694__auto__;
var G__20844 = cljs.core.count(c__5694__auto__);
var G__20845 = (0);
seq__20801 = G__20842;
chunk__20802 = G__20843;
count__20803 = G__20844;
i__20804 = G__20845;
continue;
} else {
var vec__20816 = cljs.core.first(seq__20801__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20816,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20816,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20846 = cljs.core.next(seq__20801__$1);
var G__20847 = null;
var G__20848 = (0);
var G__20849 = (0);
seq__20801 = G__20846;
chunk__20802 = G__20847;
count__20803 = G__20848;
i__20804 = G__20849;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__20797_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__20797_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__20798_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__20798_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20799_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20799_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20800_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20800_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20826){
var map__20828 = p__20826;
var map__20828__$1 = cljs.core.__destructure_map(map__20828);
var svc = map__20828__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20828__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20828__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
