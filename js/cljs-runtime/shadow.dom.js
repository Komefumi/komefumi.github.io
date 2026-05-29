goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12608 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12608(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12612 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12612(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11951 = coll;
var G__11952 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11951,G__11952) : shadow.dom.lazy_native_coll_seq.call(null,G__11951,G__11952));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5162__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11978 = arguments.length;
switch (G__11978) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11986 = arguments.length;
switch (G__11986) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11990 = arguments.length;
switch (G__11990) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11996 = arguments.length;
switch (G__11996) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__12001 = arguments.length;
switch (G__12001) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__12011 = arguments.length;
switch (G__12011) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5162__auto__ = (!((typeof document !== 'undefined')));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e12017){if((e12017 instanceof Object)){
var e = e12017;
return console.log("didnt support attachEvent",el,e);
} else {
throw e12017;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5162__auto__ = (!((typeof document !== 'undefined')));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__12020 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__12021 = null;
var count__12022 = (0);
var i__12023 = (0);
while(true){
if((i__12023 < count__12022)){
var el = chunk__12021.cljs$core$IIndexed$_nth$arity$2(null,i__12023);
var handler_12659__$1 = ((function (seq__12020,chunk__12021,count__12022,i__12023,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__12020,chunk__12021,count__12022,i__12023,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12659__$1);


var G__12662 = seq__12020;
var G__12663 = chunk__12021;
var G__12664 = count__12022;
var G__12665 = (i__12023 + (1));
seq__12020 = G__12662;
chunk__12021 = G__12663;
count__12022 = G__12664;
i__12023 = G__12665;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__12020);
if(temp__5825__auto__){
var seq__12020__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12020__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__12020__$1);
var G__12667 = cljs.core.chunk_rest(seq__12020__$1);
var G__12669 = c__5694__auto__;
var G__12670 = cljs.core.count(c__5694__auto__);
var G__12671 = (0);
seq__12020 = G__12667;
chunk__12021 = G__12669;
count__12022 = G__12670;
i__12023 = G__12671;
continue;
} else {
var el = cljs.core.first(seq__12020__$1);
var handler_12676__$1 = ((function (seq__12020,chunk__12021,count__12022,i__12023,el,seq__12020__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__12020,chunk__12021,count__12022,i__12023,el,seq__12020__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12676__$1);


var G__12682 = cljs.core.next(seq__12020__$1);
var G__12683 = null;
var G__12684 = (0);
var G__12685 = (0);
seq__12020 = G__12682;
chunk__12021 = G__12683;
count__12022 = G__12684;
i__12023 = G__12685;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__12038 = arguments.length;
switch (G__12038) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__12055 = cljs.core.seq(events);
var chunk__12056 = null;
var count__12057 = (0);
var i__12058 = (0);
while(true){
if((i__12058 < count__12057)){
var vec__12066 = chunk__12056.cljs$core$IIndexed$_nth$arity$2(null,i__12058);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12066,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12066,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12716 = seq__12055;
var G__12717 = chunk__12056;
var G__12718 = count__12057;
var G__12719 = (i__12058 + (1));
seq__12055 = G__12716;
chunk__12056 = G__12717;
count__12057 = G__12718;
i__12058 = G__12719;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__12055);
if(temp__5825__auto__){
var seq__12055__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12055__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__12055__$1);
var G__12725 = cljs.core.chunk_rest(seq__12055__$1);
var G__12726 = c__5694__auto__;
var G__12727 = cljs.core.count(c__5694__auto__);
var G__12728 = (0);
seq__12055 = G__12725;
chunk__12056 = G__12726;
count__12057 = G__12727;
i__12058 = G__12728;
continue;
} else {
var vec__12074 = cljs.core.first(seq__12055__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12074,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12074,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12730 = cljs.core.next(seq__12055__$1);
var G__12743 = null;
var G__12744 = (0);
var G__12745 = (0);
seq__12055 = G__12730;
chunk__12056 = G__12743;
count__12057 = G__12744;
i__12058 = G__12745;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__12077 = cljs.core.seq(styles);
var chunk__12078 = null;
var count__12079 = (0);
var i__12080 = (0);
while(true){
if((i__12080 < count__12079)){
var vec__12087 = chunk__12078.cljs$core$IIndexed$_nth$arity$2(null,i__12080);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12087,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12087,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12752 = seq__12077;
var G__12753 = chunk__12078;
var G__12754 = count__12079;
var G__12755 = (i__12080 + (1));
seq__12077 = G__12752;
chunk__12078 = G__12753;
count__12079 = G__12754;
i__12080 = G__12755;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__12077);
if(temp__5825__auto__){
var seq__12077__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12077__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__12077__$1);
var G__12756 = cljs.core.chunk_rest(seq__12077__$1);
var G__12757 = c__5694__auto__;
var G__12758 = cljs.core.count(c__5694__auto__);
var G__12759 = (0);
seq__12077 = G__12756;
chunk__12078 = G__12757;
count__12079 = G__12758;
i__12080 = G__12759;
continue;
} else {
var vec__12092 = cljs.core.first(seq__12077__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12092,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12092,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12760 = cljs.core.next(seq__12077__$1);
var G__12761 = null;
var G__12762 = (0);
var G__12763 = (0);
seq__12077 = G__12760;
chunk__12078 = G__12761;
count__12079 = G__12762;
i__12080 = G__12763;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__12099_12765 = key;
var G__12099_12766__$1 = (((G__12099_12765 instanceof cljs.core.Keyword))?G__12099_12765.fqn:null);
switch (G__12099_12766__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12801 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5162__auto__ = goog.string.startsWith(ks_12801,"data-");
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return goog.string.startsWith(ks_12801,"aria-");
}
})())){
el.setAttribute(ks_12801,value);
} else {
(el[ks_12801] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__12150){
var map__12151 = p__12150;
var map__12151__$1 = cljs.core.__destructure_map(map__12151);
var props = map__12151__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12151__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__12152 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12152,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12152,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12152,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__12155 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__12155,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__12155;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__12158 = arguments.length;
switch (G__12158) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__12173){
var vec__12174 = p__12173;
var seq__12175 = cljs.core.seq(vec__12174);
var first__12176 = cljs.core.first(seq__12175);
var seq__12175__$1 = cljs.core.next(seq__12175);
var nn = first__12176;
var first__12176__$1 = cljs.core.first(seq__12175__$1);
var seq__12175__$2 = cljs.core.next(seq__12175__$1);
var np = first__12176__$1;
var nc = seq__12175__$2;
var node = vec__12174;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12179 = nn;
var G__12180 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12179,G__12180) : create_fn.call(null,G__12179,G__12180));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12182 = nn;
var G__12183 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12182,G__12183) : create_fn.call(null,G__12182,G__12183));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__12185 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12185,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12185,(1),null);
var seq__12189_12829 = cljs.core.seq(node_children);
var chunk__12190_12830 = null;
var count__12191_12831 = (0);
var i__12192_12832 = (0);
while(true){
if((i__12192_12832 < count__12191_12831)){
var child_struct_12841 = chunk__12190_12830.cljs$core$IIndexed$_nth$arity$2(null,i__12192_12832);
var children_12842 = shadow.dom.dom_node(child_struct_12841);
if(cljs.core.seq_QMARK_(children_12842)){
var seq__12209_12843 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12842));
var chunk__12211_12844 = null;
var count__12212_12845 = (0);
var i__12213_12846 = (0);
while(true){
if((i__12213_12846 < count__12212_12845)){
var child_12847 = chunk__12211_12844.cljs$core$IIndexed$_nth$arity$2(null,i__12213_12846);
if(cljs.core.truth_(child_12847)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12847);


var G__12854 = seq__12209_12843;
var G__12855 = chunk__12211_12844;
var G__12856 = count__12212_12845;
var G__12857 = (i__12213_12846 + (1));
seq__12209_12843 = G__12854;
chunk__12211_12844 = G__12855;
count__12212_12845 = G__12856;
i__12213_12846 = G__12857;
continue;
} else {
var G__12859 = seq__12209_12843;
var G__12860 = chunk__12211_12844;
var G__12861 = count__12212_12845;
var G__12862 = (i__12213_12846 + (1));
seq__12209_12843 = G__12859;
chunk__12211_12844 = G__12860;
count__12212_12845 = G__12861;
i__12213_12846 = G__12862;
continue;
}
} else {
var temp__5825__auto___12863 = cljs.core.seq(seq__12209_12843);
if(temp__5825__auto___12863){
var seq__12209_12864__$1 = temp__5825__auto___12863;
if(cljs.core.chunked_seq_QMARK_(seq__12209_12864__$1)){
var c__5694__auto___12865 = cljs.core.chunk_first(seq__12209_12864__$1);
var G__12866 = cljs.core.chunk_rest(seq__12209_12864__$1);
var G__12867 = c__5694__auto___12865;
var G__12868 = cljs.core.count(c__5694__auto___12865);
var G__12869 = (0);
seq__12209_12843 = G__12866;
chunk__12211_12844 = G__12867;
count__12212_12845 = G__12868;
i__12213_12846 = G__12869;
continue;
} else {
var child_12871 = cljs.core.first(seq__12209_12864__$1);
if(cljs.core.truth_(child_12871)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12871);


var G__12872 = cljs.core.next(seq__12209_12864__$1);
var G__12873 = null;
var G__12874 = (0);
var G__12875 = (0);
seq__12209_12843 = G__12872;
chunk__12211_12844 = G__12873;
count__12212_12845 = G__12874;
i__12213_12846 = G__12875;
continue;
} else {
var G__12876 = cljs.core.next(seq__12209_12864__$1);
var G__12877 = null;
var G__12878 = (0);
var G__12879 = (0);
seq__12209_12843 = G__12876;
chunk__12211_12844 = G__12877;
count__12212_12845 = G__12878;
i__12213_12846 = G__12879;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12842);
}


var G__12880 = seq__12189_12829;
var G__12881 = chunk__12190_12830;
var G__12882 = count__12191_12831;
var G__12883 = (i__12192_12832 + (1));
seq__12189_12829 = G__12880;
chunk__12190_12830 = G__12881;
count__12191_12831 = G__12882;
i__12192_12832 = G__12883;
continue;
} else {
var temp__5825__auto___12884 = cljs.core.seq(seq__12189_12829);
if(temp__5825__auto___12884){
var seq__12189_12885__$1 = temp__5825__auto___12884;
if(cljs.core.chunked_seq_QMARK_(seq__12189_12885__$1)){
var c__5694__auto___12886 = cljs.core.chunk_first(seq__12189_12885__$1);
var G__12887 = cljs.core.chunk_rest(seq__12189_12885__$1);
var G__12888 = c__5694__auto___12886;
var G__12889 = cljs.core.count(c__5694__auto___12886);
var G__12890 = (0);
seq__12189_12829 = G__12887;
chunk__12190_12830 = G__12888;
count__12191_12831 = G__12889;
i__12192_12832 = G__12890;
continue;
} else {
var child_struct_12891 = cljs.core.first(seq__12189_12885__$1);
var children_12892 = shadow.dom.dom_node(child_struct_12891);
if(cljs.core.seq_QMARK_(children_12892)){
var seq__12215_12894 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12892));
var chunk__12217_12895 = null;
var count__12218_12896 = (0);
var i__12219_12897 = (0);
while(true){
if((i__12219_12897 < count__12218_12896)){
var child_12898 = chunk__12217_12895.cljs$core$IIndexed$_nth$arity$2(null,i__12219_12897);
if(cljs.core.truth_(child_12898)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12898);


var G__12899 = seq__12215_12894;
var G__12900 = chunk__12217_12895;
var G__12901 = count__12218_12896;
var G__12902 = (i__12219_12897 + (1));
seq__12215_12894 = G__12899;
chunk__12217_12895 = G__12900;
count__12218_12896 = G__12901;
i__12219_12897 = G__12902;
continue;
} else {
var G__12904 = seq__12215_12894;
var G__12905 = chunk__12217_12895;
var G__12906 = count__12218_12896;
var G__12907 = (i__12219_12897 + (1));
seq__12215_12894 = G__12904;
chunk__12217_12895 = G__12905;
count__12218_12896 = G__12906;
i__12219_12897 = G__12907;
continue;
}
} else {
var temp__5825__auto___12908__$1 = cljs.core.seq(seq__12215_12894);
if(temp__5825__auto___12908__$1){
var seq__12215_12909__$1 = temp__5825__auto___12908__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12215_12909__$1)){
var c__5694__auto___12910 = cljs.core.chunk_first(seq__12215_12909__$1);
var G__12911 = cljs.core.chunk_rest(seq__12215_12909__$1);
var G__12912 = c__5694__auto___12910;
var G__12913 = cljs.core.count(c__5694__auto___12910);
var G__12914 = (0);
seq__12215_12894 = G__12911;
chunk__12217_12895 = G__12912;
count__12218_12896 = G__12913;
i__12219_12897 = G__12914;
continue;
} else {
var child_12915 = cljs.core.first(seq__12215_12909__$1);
if(cljs.core.truth_(child_12915)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12915);


var G__12916 = cljs.core.next(seq__12215_12909__$1);
var G__12917 = null;
var G__12918 = (0);
var G__12919 = (0);
seq__12215_12894 = G__12916;
chunk__12217_12895 = G__12917;
count__12218_12896 = G__12918;
i__12219_12897 = G__12919;
continue;
} else {
var G__12921 = cljs.core.next(seq__12215_12909__$1);
var G__12922 = null;
var G__12923 = (0);
var G__12924 = (0);
seq__12215_12894 = G__12921;
chunk__12217_12895 = G__12922;
count__12218_12896 = G__12923;
i__12219_12897 = G__12924;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12892);
}


var G__12926 = cljs.core.next(seq__12189_12885__$1);
var G__12927 = null;
var G__12928 = (0);
var G__12929 = (0);
seq__12189_12829 = G__12926;
chunk__12190_12830 = G__12927;
count__12191_12831 = G__12928;
i__12192_12832 = G__12929;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12241 = cljs.core.seq(node);
var chunk__12242 = null;
var count__12243 = (0);
var i__12244 = (0);
while(true){
if((i__12244 < count__12243)){
var n = chunk__12242.cljs$core$IIndexed$_nth$arity$2(null,i__12244);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12937 = seq__12241;
var G__12938 = chunk__12242;
var G__12939 = count__12243;
var G__12940 = (i__12244 + (1));
seq__12241 = G__12937;
chunk__12242 = G__12938;
count__12243 = G__12939;
i__12244 = G__12940;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__12241);
if(temp__5825__auto__){
var seq__12241__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12241__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__12241__$1);
var G__12941 = cljs.core.chunk_rest(seq__12241__$1);
var G__12942 = c__5694__auto__;
var G__12943 = cljs.core.count(c__5694__auto__);
var G__12944 = (0);
seq__12241 = G__12941;
chunk__12242 = G__12942;
count__12243 = G__12943;
i__12244 = G__12944;
continue;
} else {
var n = cljs.core.first(seq__12241__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12945 = cljs.core.next(seq__12241__$1);
var G__12946 = null;
var G__12947 = (0);
var G__12948 = (0);
seq__12241 = G__12945;
chunk__12242 = G__12946;
count__12243 = G__12947;
i__12244 = G__12948;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12250 = arguments.length;
switch (G__12250) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12256 = arguments.length;
switch (G__12256) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12268 = arguments.length;
switch (G__12268) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5162__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5903__auto__ = [];
var len__5897__auto___13059 = arguments.length;
var i__5898__auto___13060 = (0);
while(true){
if((i__5898__auto___13060 < len__5897__auto___13059)){
args__5903__auto__.push((arguments[i__5898__auto___13060]));

var G__13061 = (i__5898__auto___13060 + (1));
i__5898__auto___13060 = G__13061;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12279_13064 = cljs.core.seq(nodes);
var chunk__12280_13065 = null;
var count__12281_13066 = (0);
var i__12282_13067 = (0);
while(true){
if((i__12282_13067 < count__12281_13066)){
var node_13071 = chunk__12280_13065.cljs$core$IIndexed$_nth$arity$2(null,i__12282_13067);
fragment.appendChild(shadow.dom._to_dom(node_13071));


var G__13073 = seq__12279_13064;
var G__13074 = chunk__12280_13065;
var G__13075 = count__12281_13066;
var G__13076 = (i__12282_13067 + (1));
seq__12279_13064 = G__13073;
chunk__12280_13065 = G__13074;
count__12281_13066 = G__13075;
i__12282_13067 = G__13076;
continue;
} else {
var temp__5825__auto___13079 = cljs.core.seq(seq__12279_13064);
if(temp__5825__auto___13079){
var seq__12279_13081__$1 = temp__5825__auto___13079;
if(cljs.core.chunked_seq_QMARK_(seq__12279_13081__$1)){
var c__5694__auto___13094 = cljs.core.chunk_first(seq__12279_13081__$1);
var G__13096 = cljs.core.chunk_rest(seq__12279_13081__$1);
var G__13097 = c__5694__auto___13094;
var G__13098 = cljs.core.count(c__5694__auto___13094);
var G__13099 = (0);
seq__12279_13064 = G__13096;
chunk__12280_13065 = G__13097;
count__12281_13066 = G__13098;
i__12282_13067 = G__13099;
continue;
} else {
var node_13102 = cljs.core.first(seq__12279_13081__$1);
fragment.appendChild(shadow.dom._to_dom(node_13102));


var G__13104 = cljs.core.next(seq__12279_13081__$1);
var G__13105 = null;
var G__13106 = (0);
var G__13107 = (0);
seq__12279_13064 = G__13104;
chunk__12280_13065 = G__13105;
count__12281_13066 = G__13106;
i__12282_13067 = G__13107;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12278){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12278));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12283_13117 = cljs.core.seq(scripts);
var chunk__12284_13118 = null;
var count__12285_13119 = (0);
var i__12286_13120 = (0);
while(true){
if((i__12286_13120 < count__12285_13119)){
var vec__12293_13121 = chunk__12284_13118.cljs$core$IIndexed$_nth$arity$2(null,i__12286_13120);
var script_tag_13122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12293_13121,(0),null);
var script_body_13123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12293_13121,(1),null);
eval(script_body_13123);


var G__13141 = seq__12283_13117;
var G__13142 = chunk__12284_13118;
var G__13143 = count__12285_13119;
var G__13144 = (i__12286_13120 + (1));
seq__12283_13117 = G__13141;
chunk__12284_13118 = G__13142;
count__12285_13119 = G__13143;
i__12286_13120 = G__13144;
continue;
} else {
var temp__5825__auto___13145 = cljs.core.seq(seq__12283_13117);
if(temp__5825__auto___13145){
var seq__12283_13146__$1 = temp__5825__auto___13145;
if(cljs.core.chunked_seq_QMARK_(seq__12283_13146__$1)){
var c__5694__auto___13147 = cljs.core.chunk_first(seq__12283_13146__$1);
var G__13149 = cljs.core.chunk_rest(seq__12283_13146__$1);
var G__13150 = c__5694__auto___13147;
var G__13151 = cljs.core.count(c__5694__auto___13147);
var G__13152 = (0);
seq__12283_13117 = G__13149;
chunk__12284_13118 = G__13150;
count__12285_13119 = G__13151;
i__12286_13120 = G__13152;
continue;
} else {
var vec__12296_13157 = cljs.core.first(seq__12283_13146__$1);
var script_tag_13158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12296_13157,(0),null);
var script_body_13159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12296_13157,(1),null);
eval(script_body_13159);


var G__13165 = cljs.core.next(seq__12283_13146__$1);
var G__13166 = null;
var G__13167 = (0);
var G__13168 = (0);
seq__12283_13117 = G__13165;
chunk__12284_13118 = G__13166;
count__12285_13119 = G__13167;
i__12286_13120 = G__13168;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12299){
var vec__12300 = p__12299;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12300,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12300,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12307 = arguments.length;
switch (G__12307) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12308 = cljs.core.seq(style_keys);
var chunk__12309 = null;
var count__12310 = (0);
var i__12311 = (0);
while(true){
if((i__12311 < count__12310)){
var it = chunk__12309.cljs$core$IIndexed$_nth$arity$2(null,i__12311);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13209 = seq__12308;
var G__13210 = chunk__12309;
var G__13211 = count__12310;
var G__13212 = (i__12311 + (1));
seq__12308 = G__13209;
chunk__12309 = G__13210;
count__12310 = G__13211;
i__12311 = G__13212;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__12308);
if(temp__5825__auto__){
var seq__12308__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12308__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__12308__$1);
var G__13218 = cljs.core.chunk_rest(seq__12308__$1);
var G__13219 = c__5694__auto__;
var G__13220 = cljs.core.count(c__5694__auto__);
var G__13221 = (0);
seq__12308 = G__13218;
chunk__12309 = G__13219;
count__12310 = G__13220;
i__12311 = G__13221;
continue;
} else {
var it = cljs.core.first(seq__12308__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13222 = cljs.core.next(seq__12308__$1);
var G__13223 = null;
var G__13224 = (0);
var G__13225 = (0);
seq__12308 = G__13222;
chunk__12309 = G__13223;
count__12310 = G__13224;
i__12311 = G__13225;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k12316,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__12324 = k12316;
var G__12324__$1 = (((G__12324 instanceof cljs.core.Keyword))?G__12324.fqn:null);
switch (G__12324__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12316,else__5472__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__12325){
var vec__12326 = p__12325;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12326,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12326,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12315){
var self__ = this;
var G__12315__$1 = this;
return (new cljs.core.RecordIter((0),G__12315__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12317,other12318){
var self__ = this;
var this12317__$1 = this;
return (((!((other12318 == null)))) && ((((this12317__$1.constructor === other12318.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12317__$1.x,other12318.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12317__$1.y,other12318.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12317__$1.__extmap,other12318.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k12316){
var self__ = this;
var this__5476__auto____$1 = this;
var G__12341 = k12316;
var G__12341__$1 = (((G__12341 instanceof cljs.core.Keyword))?G__12341.fqn:null);
switch (G__12341__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12316);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12315){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12342 = cljs.core.keyword_identical_QMARK_;
var expr__12343 = k__5478__auto__;
if(cljs.core.truth_((pred__12342.cljs$core$IFn$_invoke$arity$2 ? pred__12342.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12343) : pred__12342.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12343)))){
return (new shadow.dom.Coordinate(G__12315,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12342.cljs$core$IFn$_invoke$arity$2 ? pred__12342.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12343) : pred__12342.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12343)))){
return (new shadow.dom.Coordinate(self__.x,G__12315,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__12315),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__12315){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12315,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12320){
var extmap__5511__auto__ = (function (){var G__12355 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12320,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12320)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12355);
} else {
return G__12355;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12320),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12320),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k12360,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__12369 = k12360;
var G__12369__$1 = (((G__12369 instanceof cljs.core.Keyword))?G__12369.fqn:null);
switch (G__12369__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12360,else__5472__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__12371){
var vec__12372 = p__12371;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12372,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12372,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#shadow.dom.Size{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12359){
var self__ = this;
var G__12359__$1 = this;
return (new cljs.core.RecordIter((0),G__12359__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12361,other12362){
var self__ = this;
var this12361__$1 = this;
return (((!((other12362 == null)))) && ((((this12361__$1.constructor === other12362.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12361__$1.w,other12362.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12361__$1.h,other12362.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12361__$1.__extmap,other12362.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k12360){
var self__ = this;
var this__5476__auto____$1 = this;
var G__12389 = k12360;
var G__12389__$1 = (((G__12389 instanceof cljs.core.Keyword))?G__12389.fqn:null);
switch (G__12389__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12360);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12359){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12390 = cljs.core.keyword_identical_QMARK_;
var expr__12391 = k__5478__auto__;
if(cljs.core.truth_((pred__12390.cljs$core$IFn$_invoke$arity$2 ? pred__12390.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12391) : pred__12390.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12391)))){
return (new shadow.dom.Size(G__12359,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12390.cljs$core$IFn$_invoke$arity$2 ? pred__12390.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12391) : pred__12390.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12391)))){
return (new shadow.dom.Size(self__.w,G__12359,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__12359),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__12359){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12359,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12367){
var extmap__5511__auto__ = (function (){var G__12393 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12367,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12367)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12393);
} else {
return G__12393;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12367),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12367),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5759__auto__ = opts;
var l__5760__auto__ = a__5759__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5760__auto__)){
var G__13291 = (i + (1));
var G__13292 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13291;
ret = G__13292;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12400){
var vec__12401 = p__12400;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12401,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12401,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12410 = arguments.length;
switch (G__12410) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5823__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5823__auto__)){
var child = temp__5823__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__13307 = ps;
var G__13308 = (i + (1));
el__$1 = G__13307;
i = G__13308;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12430 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12430,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12430,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12430,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12436_13312 = cljs.core.seq(props);
var chunk__12437_13313 = null;
var count__12438_13314 = (0);
var i__12439_13315 = (0);
while(true){
if((i__12439_13315 < count__12438_13314)){
var vec__12468_13317 = chunk__12437_13313.cljs$core$IIndexed$_nth$arity$2(null,i__12439_13315);
var k_13318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12468_13317,(0),null);
var v_13319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12468_13317,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_13318);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13318),v_13319);


var G__13323 = seq__12436_13312;
var G__13324 = chunk__12437_13313;
var G__13325 = count__12438_13314;
var G__13326 = (i__12439_13315 + (1));
seq__12436_13312 = G__13323;
chunk__12437_13313 = G__13324;
count__12438_13314 = G__13325;
i__12439_13315 = G__13326;
continue;
} else {
var temp__5825__auto___13328 = cljs.core.seq(seq__12436_13312);
if(temp__5825__auto___13328){
var seq__12436_13330__$1 = temp__5825__auto___13328;
if(cljs.core.chunked_seq_QMARK_(seq__12436_13330__$1)){
var c__5694__auto___13332 = cljs.core.chunk_first(seq__12436_13330__$1);
var G__13333 = cljs.core.chunk_rest(seq__12436_13330__$1);
var G__13334 = c__5694__auto___13332;
var G__13335 = cljs.core.count(c__5694__auto___13332);
var G__13336 = (0);
seq__12436_13312 = G__13333;
chunk__12437_13313 = G__13334;
count__12438_13314 = G__13335;
i__12439_13315 = G__13336;
continue;
} else {
var vec__12478_13337 = cljs.core.first(seq__12436_13330__$1);
var k_13338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12478_13337,(0),null);
var v_13339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12478_13337,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_13338);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13338),v_13339);


var G__13342 = cljs.core.next(seq__12436_13330__$1);
var G__13343 = null;
var G__13344 = (0);
var G__13345 = (0);
seq__12436_13312 = G__13342;
chunk__12437_13313 = G__13343;
count__12438_13314 = G__13344;
i__12439_13315 = G__13345;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12493 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12493,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12493,(1),null);
var seq__12499_13346 = cljs.core.seq(node_children);
var chunk__12501_13347 = null;
var count__12502_13348 = (0);
var i__12503_13349 = (0);
while(true){
if((i__12503_13349 < count__12502_13348)){
var child_struct_13350 = chunk__12501_13347.cljs$core$IIndexed$_nth$arity$2(null,i__12503_13349);
if((!((child_struct_13350 == null)))){
if(typeof child_struct_13350 === 'string'){
var text_13353 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13353)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_13350)));
} else {
var children_13354 = shadow.dom.svg_node(child_struct_13350);
if(cljs.core.seq_QMARK_(children_13354)){
var seq__12565_13355 = cljs.core.seq(children_13354);
var chunk__12567_13356 = null;
var count__12568_13357 = (0);
var i__12569_13358 = (0);
while(true){
if((i__12569_13358 < count__12568_13357)){
var child_13359 = chunk__12567_13356.cljs$core$IIndexed$_nth$arity$2(null,i__12569_13358);
if(cljs.core.truth_(child_13359)){
node.appendChild(child_13359);


var G__13360 = seq__12565_13355;
var G__13361 = chunk__12567_13356;
var G__13362 = count__12568_13357;
var G__13363 = (i__12569_13358 + (1));
seq__12565_13355 = G__13360;
chunk__12567_13356 = G__13361;
count__12568_13357 = G__13362;
i__12569_13358 = G__13363;
continue;
} else {
var G__13364 = seq__12565_13355;
var G__13365 = chunk__12567_13356;
var G__13366 = count__12568_13357;
var G__13367 = (i__12569_13358 + (1));
seq__12565_13355 = G__13364;
chunk__12567_13356 = G__13365;
count__12568_13357 = G__13366;
i__12569_13358 = G__13367;
continue;
}
} else {
var temp__5825__auto___13368 = cljs.core.seq(seq__12565_13355);
if(temp__5825__auto___13368){
var seq__12565_13369__$1 = temp__5825__auto___13368;
if(cljs.core.chunked_seq_QMARK_(seq__12565_13369__$1)){
var c__5694__auto___13370 = cljs.core.chunk_first(seq__12565_13369__$1);
var G__13371 = cljs.core.chunk_rest(seq__12565_13369__$1);
var G__13372 = c__5694__auto___13370;
var G__13373 = cljs.core.count(c__5694__auto___13370);
var G__13374 = (0);
seq__12565_13355 = G__13371;
chunk__12567_13356 = G__13372;
count__12568_13357 = G__13373;
i__12569_13358 = G__13374;
continue;
} else {
var child_13375 = cljs.core.first(seq__12565_13369__$1);
if(cljs.core.truth_(child_13375)){
node.appendChild(child_13375);


var G__13377 = cljs.core.next(seq__12565_13369__$1);
var G__13378 = null;
var G__13379 = (0);
var G__13380 = (0);
seq__12565_13355 = G__13377;
chunk__12567_13356 = G__13378;
count__12568_13357 = G__13379;
i__12569_13358 = G__13380;
continue;
} else {
var G__13381 = cljs.core.next(seq__12565_13369__$1);
var G__13382 = null;
var G__13383 = (0);
var G__13384 = (0);
seq__12565_13355 = G__13381;
chunk__12567_13356 = G__13382;
count__12568_13357 = G__13383;
i__12569_13358 = G__13384;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13354);
}
}


var G__13386 = seq__12499_13346;
var G__13387 = chunk__12501_13347;
var G__13388 = count__12502_13348;
var G__13389 = (i__12503_13349 + (1));
seq__12499_13346 = G__13386;
chunk__12501_13347 = G__13387;
count__12502_13348 = G__13388;
i__12503_13349 = G__13389;
continue;
} else {
var G__13391 = seq__12499_13346;
var G__13392 = chunk__12501_13347;
var G__13393 = count__12502_13348;
var G__13394 = (i__12503_13349 + (1));
seq__12499_13346 = G__13391;
chunk__12501_13347 = G__13392;
count__12502_13348 = G__13393;
i__12503_13349 = G__13394;
continue;
}
} else {
var temp__5825__auto___13395 = cljs.core.seq(seq__12499_13346);
if(temp__5825__auto___13395){
var seq__12499_13396__$1 = temp__5825__auto___13395;
if(cljs.core.chunked_seq_QMARK_(seq__12499_13396__$1)){
var c__5694__auto___13398 = cljs.core.chunk_first(seq__12499_13396__$1);
var G__13399 = cljs.core.chunk_rest(seq__12499_13396__$1);
var G__13400 = c__5694__auto___13398;
var G__13401 = cljs.core.count(c__5694__auto___13398);
var G__13402 = (0);
seq__12499_13346 = G__13399;
chunk__12501_13347 = G__13400;
count__12502_13348 = G__13401;
i__12503_13349 = G__13402;
continue;
} else {
var child_struct_13404 = cljs.core.first(seq__12499_13396__$1);
if((!((child_struct_13404 == null)))){
if(typeof child_struct_13404 === 'string'){
var text_13406 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13406)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_13404)));
} else {
var children_13407 = shadow.dom.svg_node(child_struct_13404);
if(cljs.core.seq_QMARK_(children_13407)){
var seq__12582_13408 = cljs.core.seq(children_13407);
var chunk__12584_13409 = null;
var count__12585_13410 = (0);
var i__12586_13411 = (0);
while(true){
if((i__12586_13411 < count__12585_13410)){
var child_13412 = chunk__12584_13409.cljs$core$IIndexed$_nth$arity$2(null,i__12586_13411);
if(cljs.core.truth_(child_13412)){
node.appendChild(child_13412);


var G__13413 = seq__12582_13408;
var G__13414 = chunk__12584_13409;
var G__13415 = count__12585_13410;
var G__13416 = (i__12586_13411 + (1));
seq__12582_13408 = G__13413;
chunk__12584_13409 = G__13414;
count__12585_13410 = G__13415;
i__12586_13411 = G__13416;
continue;
} else {
var G__13417 = seq__12582_13408;
var G__13418 = chunk__12584_13409;
var G__13419 = count__12585_13410;
var G__13420 = (i__12586_13411 + (1));
seq__12582_13408 = G__13417;
chunk__12584_13409 = G__13418;
count__12585_13410 = G__13419;
i__12586_13411 = G__13420;
continue;
}
} else {
var temp__5825__auto___13421__$1 = cljs.core.seq(seq__12582_13408);
if(temp__5825__auto___13421__$1){
var seq__12582_13422__$1 = temp__5825__auto___13421__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12582_13422__$1)){
var c__5694__auto___13423 = cljs.core.chunk_first(seq__12582_13422__$1);
var G__13424 = cljs.core.chunk_rest(seq__12582_13422__$1);
var G__13425 = c__5694__auto___13423;
var G__13427 = cljs.core.count(c__5694__auto___13423);
var G__13428 = (0);
seq__12582_13408 = G__13424;
chunk__12584_13409 = G__13425;
count__12585_13410 = G__13427;
i__12586_13411 = G__13428;
continue;
} else {
var child_13430 = cljs.core.first(seq__12582_13422__$1);
if(cljs.core.truth_(child_13430)){
node.appendChild(child_13430);


var G__13432 = cljs.core.next(seq__12582_13422__$1);
var G__13433 = null;
var G__13434 = (0);
var G__13435 = (0);
seq__12582_13408 = G__13432;
chunk__12584_13409 = G__13433;
count__12585_13410 = G__13434;
i__12586_13411 = G__13435;
continue;
} else {
var G__13436 = cljs.core.next(seq__12582_13422__$1);
var G__13437 = null;
var G__13438 = (0);
var G__13439 = (0);
seq__12582_13408 = G__13436;
chunk__12584_13409 = G__13437;
count__12585_13410 = G__13438;
i__12586_13411 = G__13439;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13407);
}
}


var G__13440 = cljs.core.next(seq__12499_13396__$1);
var G__13441 = null;
var G__13442 = (0);
var G__13443 = (0);
seq__12499_13346 = G__13440;
chunk__12501_13347 = G__13441;
count__12502_13348 = G__13442;
i__12503_13349 = G__13443;
continue;
} else {
var G__13445 = cljs.core.next(seq__12499_13396__$1);
var G__13446 = null;
var G__13447 = (0);
var G__13448 = (0);
seq__12499_13346 = G__13445;
chunk__12501_13347 = G__13446;
count__12502_13348 = G__13447;
i__12503_13349 = G__13448;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___13453 = arguments.length;
var i__5898__auto___13454 = (0);
while(true){
if((i__5898__auto___13454 < len__5897__auto___13453)){
args__5903__auto__.push((arguments[i__5898__auto___13454]));

var G__13459 = (i__5898__auto___13454 + (1));
i__5898__auto___13454 = G__13459;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12606){
var G__12607 = cljs.core.first(seq12606);
var seq12606__$1 = cljs.core.next(seq12606);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12607,seq12606__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
