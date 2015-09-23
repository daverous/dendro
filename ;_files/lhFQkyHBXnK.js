/*!CK:617571577!*//*1440389916,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Ui8v4"]); }

__d('Tour',['Arbiter','LayerDestroyOnHide','LayerHideOnEscape','NavigationMessage','PageEvents'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();function m(){'use strict';if(m._instance)m._instance.setTourComplete();m._instance=this;}m.prototype.init=function(){'use strict';this._pageLeaveToken=h.subscribe(l.AJAXPIPE_ONUNLOAD,this.handleLeavePage.bind(this));this._navigationBeginToken=h.subscribe(k.NAVIGATION_BEGIN,this.handleTransition.bind(this));this.steps={};return this;};m.prototype.registerStep=function(n,o){'use strict';n.disableBehavior(i);n.disableBehavior(j);this.steps[o]=n;n.subscribe('show',function(){n.inform('tour-dialog-show',n);});if(!this.getTourStarted())this.setTourStart();};m.prototype._unsubscribeSubscriptions=function(){'use strict';this._navigationBeginToken.unsubscribe();this._pageLeaveToken.unsubscribe();};m.prototype.handleLeavePage=function(){'use strict';this._unsubscribeSubscriptions();};m.prototype.handleTransition=function(){'use strict';this._unsubscribeSubscriptions();};m.prototype.handleTourStart=function(){'use strict';};m.prototype.handleTourStop=function(){'use strict';};m.prototype.handleTourComplete=function(){'use strict';};m.prototype.showStep=function(n){'use strict';var o=this.steps[n];if(!(this.openDialog==o))this.hideOpenDialog();if(!o)return;this.openDialog=o;o.show();};m.prototype.hideOpenDialog=function(){'use strict';if(this.openDialog){this.openDialog.hide();this.openDialog=null;}};m.prototype.getTourStarted=function(){'use strict';return this.tourStarted;};m.prototype.setTourStart=function(){'use strict';this.tourStarted=true;this.handleTourStart();};m.prototype.setTourStop=function(){'use strict';this.tourStarted=false;this.hideOpenDialog();this.handleTourStop();};m.prototype.setTourComplete=function(){'use strict';if(this.tourComplete)return;this.setTourStop();this.tourComplete=true;this.handleTourComplete();};m.prototype.hideStep=function(n){'use strict';var o=this.steps[n];o&&o.hide();};m.getInstance=function(){'use strict';return m._instance||(m._instance=new m());};Object.assign(m.prototype,{tourStarted:false,tourComplete:false,_navigationBeginToken:null,_pageLeaveToken:null,steps:{},openDialog:null});f.exports=m;},null);
__d('PageFanning',['Animation','AsyncRequest','CSS','DOM','Parent','URI','ActorURI','$','collectDataAttributes'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q={setFanStatus:function(s,t,u,v,w,x,y){var z={ft:{}};if(s)z={ft:p(s,['ft']).ft};w=w||function(da){var ea=da.getPayload();if(!ea||!s)return;if(ea.reload){q.reloadOnFanStatusChanged();}else r(s,ea);};var aa={fbpage_id:t,add:u,reload:v};if(y!=null)Object.assign(aa,y);Object.assign(aa,z);var ba='/ajax/pages/fan_status.php';if(y!=null&&y.actor_id!=null)ba=n.create(ba,y.actor_id);var ca=new i().setURI(ba).setData(aa).setNectarModuleDataSafe(s).setHandler(w);if(x)ca.setErrorHandler(x);ca.send();return false;},reloadOnFanStatusChanged:function(){var s=m.getRequestURI();window.location.href=s;},toggleLikeOnFanStatusChanged:function(s,t){var u=o('liked_pages_like_action_'+s),v=o('liked_pages_undo_action_'+s);j.conditionClass(u,'hidden_elem',t);j.conditionClass(v,'hidden_elem',!t);}};function r(s,t){var u=t.feedback;if(!u)return;if(l.byClass(s,'fbTimelineEscapeSectionItem'))s=l.byClass(s,'fan_status_inactive')||s;var v=k.create('span',{className:'fan_status_inactive'},u);s.parentNode.replaceChild(v,s);var w=function(){if(t.can_repeat_action)v.parentNode.replaceChild(s,v);};new h(v).duration(3000).checkpoint().to('backgroundColor','#FFFFFF').duration(1000).ondone(w).go();}f.exports=q;},null);
__d("XPagesLikeCountController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pages\/x\/updateLikeCountDomString\/",{page_id:{type:"Int",required:true},like_id:{type:"String",required:true}});},null,{});
__d('PageLikeButton',['Arbiter','AsyncRequest','AsyncResponse','Event','FeedBlacklistButton','PageFanning','PageLikeConstants','SubscribeButton','Tour','XPagesLikeCountController'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();var r={init:function(s,t,u,v,w,x,y,z,aa,ba,ca,da){h.subscribe(n.LIKED,(function(ea,fa){if(this._shouldUpdateButton(v,da,fa)){s.swap();if(!aa)u.suppressNextMouseEnter&&u.suppressNextMouseEnter();}}).bind(this));h.subscribe(n.UNLIKED,(function(ea,fa){if(this._shouldUpdateButton(v,da,fa)){s.unswap();u.hideFlyout&&u.hideFlyout();}}).bind(this));if(ca)h.subscribe(n.SPM_CALLOUT,(function(ea,fa){if(this._shouldUpdateButton(v,da,fa)){ca.show();h._releaseAllEvents(n.SPM_CALLOUT);}}).bind(this));k.listen(t,'click',(function(event){var ea=s.getCurrentButton();if(da&&da.actor_id!==null){var fa={actor_id:da.actor_id};this._likeButtonAction(v,w,x,y,ea,event,fa);}else this._likeButtonAction(v,w,x,y,ea,event);}).bind(this));},initCallout:function(s,t){var u=document.getElementById('pageActionLikeCalloutButton');k.listen(u,'click',this._likeButtonAction(s,t,null,null,null));},initUnlike:function(s,t,u,v){var w=v?v.actor_id:null;k.listen(s,'click',(function(event){this.doUnlikeAction(event,t,u,w);}).bind(this));},doUnlikeAction:function(event,s,t,u){this._saveLike(event.getTarget(),s,false,function(v){h.inform(n.LIKED,{profile_id:s,actor_id:u});j.defaultErrorHandler(v);},t,null,null,{actor_id:u});this.informUnlike(s,u);},informLike:function(s,t,u,v){var w=v?v.actor_id:w,x={profile_id:s,actor_id:w,target:t,origin:u};h.inform(n.LIKED,x);x.connected=true;h.inform(o.SUBSCRIBED,x);h.inform(l.UNBLACKLIST,x);},informLikeSuccess:function(s){var t={profile_id:s};h.inform(n.LIKED_SUCCESS,t);h.inform(n.SPM_CALLOUT,t);},informUnlike:function(s,t){var u={profile_id:s,actor_id:t};setTimeout(h.inform.bind(h,n.UNLIKED,u),0);u.connected=false;setTimeout(h.inform.bind(h,o.UNSUBSCRIBED,u),0);h.inform(l.BLACKLIST,u);},updateLikeCount:function(s,t){h.subscribe(n.LIKED_SUCCESS,function(u,v){var w=v.profile_id;if(t==w){var x=q.getURIBuilder().setInt('page_id',t).setString('like_id',s).getURI();new i().setURI(x).send();}});},_saveLike:function(s,t,u,v,w,x,y,z){var aa=z?z.actor_id:null;p.getInstance().hideStep('low_page_likes');m.setFanStatus(s,t,u,false,function(){r.informLikeSuccess(t);},v,{fan_origin:w,fan_source:x,cat:y,actor_id:aa});},_likeButtonAction:function(s,t,u,v,w,event,x){var y=x?x.actor_id:null;this._saveLike(event.getTarget(),s,true,function(z){h.inform(n.UNLIKED,{profile_id:s,actor_id:y});j.defaultErrorHandler(z);},t,u,v,x);r.informLike(s,w,t,x);},_shouldUpdateButton:function(s,t,u){var v=t?t.actor_id:null;if(s===u.profile_id){if(v===null)return true;if(u.actor_id!==null&&v===u.actor_id)return true;}return false;}};f.exports=r;b.PageLikeButton=r;},null);
__d('HoverButton',['AsyncRequest','CSS','DOM','URI','cx'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();function m(n,o,p,q){'use strict';this._button=n;this._flyout=o;this._flyoutAjaxify=q;this._flyoutContent=p;o.subscribe('show',this._onShow.bind(this));o.subscribe('hide',this._onHide.bind(this));}m.prototype.showFlyoutBriefly=function(){'use strict';this.showFlyout();this._flyout.hideFlyoutDelayed(5000);};m.prototype.showFlyout=function(){'use strict';this._flyout.showFlyout(this._button,true);this._flyout.inform('show',this._button);};m.prototype.hideFlyout=function(){'use strict';this._flyout.hideFlyout(true);this._flyout.inform('hide',this._button);};m.prototype.enableButton=function(){'use strict';this._flyout.initNode(this._button);};m.prototype.disableButton=function(){'use strict';this.hideFlyout();this._flyout.deactivateNode(this._button);};m.prototype._onShow=function(n,o){'use strict';i.addClass(o,"_52nd");if(i.hasClass(o,'uiButton')||i.hasClass(o,"_42fu"))i.addClass(o,'selected');if(this._flyoutAjaxify){i.addClass(this._flyoutContent,'async_saving');new h().setURI(new k(this._flyoutAjaxify)).setHandler((function(p){i.removeClass(this._flyoutContent,'async_saving');j.setContent(this._flyoutContent,p.payload);}).bind(this)).send();this._flyoutAjaxify=null;}};m.prototype._onHide=function(n,o){'use strict';i.removeClass(o,"_52nd");if(i.hasClass(o,'uiButton')||i.hasClass(o,"_42fu"))i.removeClass(o,'selected');};m.prototype.destroy=function(){'use strict';this.hideFlyout();this._flyout.destroy();};m.prototype.suppressNextMouseEnter=function(){'use strict';this._flyout.setActiveNode(this._button);};Object.assign(m.prototype,{_button:null,_flyout:null,_flyoutAjaxify:null,_flyoutContent:null});f.exports=m;},null);
__d('HoverFlyout',['Arbiter','ArbiterMixin','DataStore','Event','Keys','arrayContains','mixin','removeFromArray','shield'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q,r;q=babelHelpers.inherits(s,n(i));r=q&&q.prototype;function s(t,u,v,w){'use strict';r.constructor.call(this);if(t){this._showDelay=v;this._hideDelay=w;this.init(t);if(u)this.initNode(u);}h.subscribe('SwapButtonDEPRECATED/focusOnJoinButton',p(this.hideFlyout,this),h.SUBSCRIBE_ALL);}s.prototype.init=function(t){'use strict';this._flyout=t;this._showDelay=this._showDelay||0;this._hideDelay=this._hideDelay||100;this._showTimeout=null;this._hideTimeout=null;this._flyoutSubscriptions=[this._flyout.subscribe('mouseenter',this._onFlyoutMouseEnter.bind(this)),this._flyout.subscribe('mouseleave',p(this.hideFlyout,this))];this._nodes=[];this._dataStoreUnique='HoverFlyout_'+Date.now()+'_listeners';return this;};s.prototype.initNode=function(t){'use strict';if(m(this._nodes,t))return this;this._nodes.push(t);j.set(t,this._dataStoreUnique,[k.listen(t,'mouseenter',this._onNodeMouseEnter.bind(this,t)),k.listen(t,'mouseleave',p(this.hideFlyout,this)),k.listen(t,'click',this._onNodeMouseEnter.bind(this,t)),k.listen(t,'keydown',this._onNodeKeyEscape.bind(this))]);return this;};s.prototype.deactivateNode=function(t){'use strict';var u=j.get(t,this._dataStoreUnique);if(u)while(u.length)u.pop().remove();o(this._nodes,t);};s.prototype.setShowDelay=function(t){'use strict';this._showDelay=t;return this;};s.prototype.setHideDelay=function(t){'use strict';this._hideDelay=t;return this;};s.prototype.showFlyout=function(t,u){'use strict';this.setActiveNode(t);if(u){this._flyout.setContext(t).show();this.inform('show',t);}else this._showTimeout=setTimeout(this.showFlyout.bind(this,t,true),this._showDelay);return this;};s.prototype.hideFlyout=function(t){'use strict';clearTimeout(this._showTimeout);if(t){this._flyout.hide();this._activeNode&&this.inform('hide',this._activeNode);this._activeNode=null;}else this._hideTimeout=setTimeout(this.hideFlyout.bind(this,true),this._hideDelay);};s.prototype.hideFlyoutDelayed=function(t){'use strict';clearTimeout(this._showTimeout);clearTimeout(this._hideTimeout);this._hideTimeout=setTimeout(this.hideFlyout.bind(this,true),t);};s.prototype.getActiveNode=function(){'use strict';return this._activeNode;};s.prototype.setActiveNode=function(t){'use strict';clearTimeout(this._hideTimeout);if(this._activeNode&&this._activeNode!==t)this.hideFlyout(true);this._activeNode=t;return this;};s.prototype.clearNodes=function(){'use strict';for(var t=this._nodes.length;t>0;t--)this.deactivateNode(this._nodes[t-1]);};s.prototype.destroy=function(){'use strict';while(this._flyoutSubscriptions.length)this._flyout.unsubscribe(this._flyoutSubscriptions.pop());this.clearNodes();};s.prototype._onNodeMouseEnter=function(t){'use strict';if(this._activeNode===t){clearTimeout(this._hideTimeout);}else this.showFlyout(t);};s.prototype._onFlyoutMouseEnter=function(){'use strict';clearTimeout(this._hideTimeout);};s.prototype._onNodeKeyEscape=function(event){'use strict';if(k.getKeyCode(event)===l.ESC){this._activeNode&&this.inform('hide',this._activeNode);this._activeNode=null;}};f.exports=b.HoverFlyout||s;},null);