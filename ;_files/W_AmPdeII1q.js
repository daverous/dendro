/*!CK:3136320898!*//*1439812718,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["QH8Oj"]); }

__d('legacy:ui-tokenizer-source',['ui_tokenizer_source'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();b.ui_tokenizer_source=c('ui_tokenizer_source');},3);
__d('CovercardArrow',['ContextualDialogArrow','CSS','DOMQuery','Locale','Style','csx','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=-45,p=45,q=9;if(k.isRTL()){o=-o;p=-p;}function r(t){'use strict';this._layer=t;}r.prototype.enable=function(){'use strict';this._layer.enableBehavior(h);var t=this._layer.getContentRoot();this._arrowWrapper=j.scry(t,"._7lh")[0];if(!this._arrowWrapper)return;this._arrowShadow=j.scry(this._arrowWrapper,"._7li")[0];if(!this._arrowShadow)return;var u=null;if(s(this._arrowWrapper))u=this._renderArrowWithRotate.bind(this);if(!u)return;if(k.isRTL())i.addClass(t,"_7lf");this._subscription=this._layer.subscribe('reposition',function(v,w){var x=w.getPosition()=='below';i.conditionClass(t,"_53ih",x);x&&u(w);});};r.prototype.disable=function(){'use strict';this._subscription&&this._subscription.unsubscribe();this._subscription=null;};r.prototype._calculateArrowOffset=function(t){'use strict';var u=h.getOffsetPercent(t),v=h.getOffset(t,u,this._layer),w=l.get(this._layer.getContentRoot(),'width');return parseInt(w,10)*(u/100)+v;};r.prototype._renderArrowWithRotate=function(t){'use strict';var u=j.scry(this._arrowWrapper,"._7lj")[0];if(!u){var v=this._layer.getContentRoot();i.addClass(v,"_4nfk");}var w=j.scry(this._arrowWrapper,"._1ubp")[0];if(!w)return;var x=s(this._arrowWrapper);if(!x)return;var y=this._calculateArrowOffset(t),z=q+y,aa=-q;if(k.isRTL()){z=-z;aa=-aa;}this._arrowWrapper.style[x]='translate('+z+'px, -'+q+'px) '+'rotate('+p+'deg)';if(u)u.style[x]='rotate('+o+'deg) '+'translate('+ -z+'px, '+(q-12)+'px)';w.style[x]='rotate('+o+'deg) '+'translate('+aa+'px, 0)';};function s(t){if(!t)t=document.body;var u=['transform','WebkitTransform','msTransform','MozTransform','OTransform'],v;while(v=u.shift())if(t.style[v]!==undefined)return v;return null;}f.exports=r;},null);