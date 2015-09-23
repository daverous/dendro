/*!CK:4164593543!*//*1439175455,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["LlbV6"]); }

__d('NotificationCounter',['Arbiter','ChatConfig','DocumentTitle','FavIcon','JSLogger','UserActivity'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n={messages:0,notifications:0,requests:0},o;if(i.get('unreadFavicon'))k.setToggleResources(i.get('unreadFaviconURL'));var p={init:function(q){h.subscribe('update_title',this._handleUpdate.bind(this));h.subscribe('jewel/count-updated',this._handleCountUpdate.bind(this));},getCount:function(){var q=0;for(var r in n){var s=Number(n[r]);if(typeof n[r]=='string'&&isNaN(s))return n[r];if(isNaN(s)||s<0){l.create('jewels').error('bad_count',{jewel:r,count:n[r]});continue;}q+=s;}return q;},updateTitle:function(){var q=this.getCount(),r=j.get();r=q?'('+q+') '+r:r;j.set(r,true);if(i.get('unreadFavicon')){if(!m.isOnTab()&&(o>0&&q===0||o===0&&q>0||o>0&&!k.isToggledResource()))k.toggle();o=q;}},_handleCountUpdate:function(q,r){n[r.jewel]=r.count;this.updateTitle();},_handleUpdate:function(q,r){this.updateTitle();}};f.exports=p;},null);
__d("XNotificationsSyncController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/notifications\/sync\/",{lastSync:{type:"Int",required:true}});},null,{});
__d('NotificationSync',['Arbiter','AsyncRequest','ChannelConstants','JSLogger','NotificationConstants','NotificationUpdates','XNotificationsSyncController'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=k.create('notifications'),p='channel_reload',q=0;function r(w){var x=m.getserverTime()?m.getserverTime():q,y=n.getURIBuilder().setInt('lastSync',x).getURI();w.setHandler(s).setOption('suppressErrorAlerts',true).setErrorHandler(t).setMethod('GET').setReadOnly(true).setURI(y).setAllowCrossPageTransition(true);}function s(w){var x=w.getPayload();if(x.syncPayload)m.handleUpdate(l.PayloadSourceType.SYNC,x.syncPayload);}function t(w){}function u(){var w=new i();w.setIsBackgroundRequest(true);r(w);w.send();o.bump(p);}var v={setup:function(w){q=w;h.subscribe(j.ON_INVALID_HISTORY,u);}};f.exports=v;},null);
__d('NotificationJewelController',['Arbiter','Event','NotificationConstants','NotificationCounter','NotificationSeenState','NotificationSync','NotificationUpdates','createObjectFrom','curry'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q=0;function r(t){h.inform('jewel/count-updated',{jewel:t,count:l.getUnseenIDs().length},h.BEHAVIOR_STATE);}function s(t,u,v,w){'use strict';var x=null;if(u.list&&u.unseenNotifs&&u.startTime){x=u.list;v=u.unseenNotifs;w=u.startTime;}else x=u;k.init();var y=i.listen(t.getRoot(),'mouseover',function(){y.remove();y=null;x.open();});if(t.isOpen()){x.open();}else var z=t.subscribe('opened',function(){z.unsubscribe();z=null;x.open();});var aa=x.pause.bind(x);t.subscribe('opened',function(){setTimeout(aa,0);r(t.name);});t.subscribe('closed',function(){x.unpause();r(t.name);});n.subscribe('seen-state-updated',p(r,t.name));n.handleUpdate(j.PayloadSourceType.INITIAL_LOAD,{seenState:o(v,q)});m.setup(w);r(t.name);}f.exports=s;},null);