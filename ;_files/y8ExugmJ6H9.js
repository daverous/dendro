/*!CK:1699346073!*//*1439175452,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["ArbyC"]); }

__d('AsyncDOM',['CSS','DOM'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={invoke:function(k,l){for(var m=0;m<k.length;++m){var n=k[m],o=n[0],p=n[1],q=n[2],r=n[3],s=q&&l||null;if(p)s=i.scry(s||document.documentElement,p)[0];switch(o){case 'eval':new Function(r).apply(s);break;case 'hide':h.hide(s);break;case 'show':h.show(s);break;case 'setContent':i.setContent(s,r);break;case 'appendContent':i.appendContent(s,r);break;case 'prependContent':i.prependContent(s,r);break;case 'insertAfter':i.insertAfter(s,r);break;case 'insertBefore':i.insertBefore(s,r);break;case 'remove':i.remove(s);break;case 'replace':i.replace(s,r);break;default:}}}};f.exports=j;},null);
__d('PluginLikebox',['AsyncDOM','AsyncRequest','CSS','DOMEvent','DOMEventListener','DOMQuery','EmbedLikeButton','Event','MorePagerFetchOnScroll','PlatformWidgetEndpoint','Popup'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s=3;function t(u,v,w){this.stream_id=u;this.force_wall=v;this.width=w;this.retries=0;this.load();l.add(m.find(document.body,'.pluginLikeboxStream'),'click',function(x){var y=new k(x),z=y.target.parentNode;if(j.hasClass(z,'text_exposed_link')){y.kill();j.addClass(m.find(z,'^.text_exposed_root'),'text_exposed');}var aa=y.target.href?y.target:y.target.parentNode.href?y.target.parentNode:null;if(aa&&aa.pathname==='/sharer/sharer.php'){y.kill();r.open(aa.href,670,340);}});}Object.assign(t.prototype,{load:function(u){new i().setMethod('GET').setURI(q.plugins('likebox','stream')).setData({id:this.stream_id,dom:u?'pluginLikeboxMoreStories':'pluginLikeboxStream',force_wall:this.force_wall,nobootload:1,inlinecss:1,max_timestamp:u,width:this.width}).setReadOnly(true).setErrorHandler(function(){}).setHandler(this.handleResponse.bind(this)).setRequestHeader('X-ALT-REFERER',document.referrer).send();},handleResponse:function(u){if(u.inlinecss){var v=document.createElement('style');v.setAttribute("type","text/css");document.getElementsByTagName('head')[0].appendChild(v);if(v.styleSheet){v.styleSheet.cssText=u.inlinecss;}else v.appendChild(document.createTextNode(u.inlinecss));}h.invoke(u.domops);(function(){var z=m.scry(document.body,'.embeddedForm'),aa='embeddedProcessed';z.map(function(ba){if(!j.hasClass(ba,aa)){var ca=m.find(ba,'.embeddedLikeButton'),da=m.find(ba,'.embeddedUnlikeButton');m.scry(ca,'a').concat(m.scry(da,'a')).forEach(function(ea){o.listen(ea,'click',function(fa){fa.preventDefault();});});n.addClientId(m.find(ba,'input[name="client_id"]'));n.init(ca,da,m.find(ba,'input[name="like_action"]'),ba);j.addClass(ba,aa);}});})();var w=m.scry(document.body,"#pluginLikeboxMoreStories a");if(!w.length)return;w=w[0];var x=(function(){this.load(parseInt(w.getAttribute('data-timestamp'),10));var z=m.find(w.parentNode,'.uiMorePagerLoader');j.addClass(z,'uiMorePagerPrimary');j.removeClass(z,'uiMorePagerLoader');j.hide(w);}).bind(this);l.add(w,'click',function(z){new k(z).kill();x();});new p(w,0).setPagerInViewHandler(x);var y=parseInt(w.getAttribute('data-storycount'),10);if(y===0){if(this.retries<=s){this.retries++;x();}else j.hide(w);}else this.retries=0;return i.suppressOnloadToken;}});f.exports=t;},null);