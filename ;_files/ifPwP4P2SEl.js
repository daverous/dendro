/*!CK:703168790!*//*1439175445,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["87tQA"]); }

__d('TickerStoryList',['Event','Animation','Arbiter','AsyncRequest','AsyncSignal','Bootloader','ChannelConstants','LegacyContextualDialog','CSS','DOM','HTML','Keys','LayerFadeOnHide','LiveTimer','NavigationMessage','Parent','Rect','Run','ScrollableArea','SelectorDeprecated','Style','TickerController','TickerReadStateTracking','Toggler','URI','UserActivity','UserAgent_DEPRECATED','Vector','DOMVector','BanzaiODS','clickRefAction','collectDataAttributes','containsNode','cx','csx','ex','emptyFunction','ge','getElementText','goURI','throttle','tickerPhoteSnowLiftOpenStatus'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra,sa,ta,ua,va,wa){if(c.__markCompiled)c.__markCompiled();var xa=15000,ya={};function za(ab,bb,cb){ya[ab.id]=this;ca.setActiveInstance(this);this._root=ab;this._content=q.find(ab,'.ticker_stream');this._stories=q.find(this._root,'.tickerActivityStories');this._scrollableArea=bb;this._container=q.find(ab,'div.uiScrollableAreaWrap');this._newestStory={};this._objectIDs=[];this._fetchedStories={};this._fetchedStoriesDialog={};this._storyDialogResources={};this._removedStoryIDs=[];this._storiesToRemove=[];var db=Date.now();this._initTime=db;this._lastUpdate=db;this._lastPull=db;this._lastInsert=db;this._pollOnly=false;this._autoloadStoryIndex=1;this._scrollTopThreshold=100;this._scrollTopPrompt=q.find(this._root,'.scrollTopPrompt');this._scrollTopPromptVisible=false;this._maxStoriesToKeep=50;this._minStoriesToKeep=25;this._tickerInSidebarMode=!!w.byClass(this._root,'fbChatSidebar');this._loadStoriesWithActions();la('ticker_flyout');la('ticker_flyout_prefetch');la('ticker_flyout_loadtime');la('ticker_stream');this._uaCurStoryIDFetch=null;this._uaCurStoryIDPrefetch=null;var eb=q.create('div',{className:'storyQueue hidden_elem'});this._storyQueue=eb;q.appendContent(this._root,eb);this._lastKStories={head:null,tail:null,count:0,actors:{},apps:{},stories:{}};this._dedupeKeys={};this._initObjectIDs();this._initConfig(cb);this._resetMorePager();this._initListeners();this._initSubscriptions(cb);j.inform('ticker/init',this,j.BEHAVIOR_PERSISTENT);this._poll();}Object.assign(za,{instances:function(){return ya;}});Object.assign(za.prototype,{ADS_IDLE_MS:300000,FLYOUT_MAX_HEIGHT:450,FLYOUT_OFFSET_THRESHOLD:20,FLYOUT_COMMENT_OFFSET:15,FLYOUT_VIEWPORT_PADDING:75,FLYOUT_ACTION_FOOTER_PADDING:8,FLYOUT_TARGET_HEIGHT_OFFSET:25,DEFAULT_LOOK_BEHIND:10,init:function(ab,bb,cb){new za(ab,bb,cb);},_lastKStoriesInsert:function(ab){this._lastKStories.stories[ab.getAttribute("data-story-key")]=true;var bb={story:ab,next:null};if(this._lastKStories.head)this._lastKStories.head.next=bb;this._lastKStories.head=bb;this._lastKStories.count++;if(!this._lastKStories.tail)this._lastKStories.tail=this._lastKStories.head;var cb=ab.getAttribute("data-actor");if(!this._lastKStories.actors[cb])this._lastKStories.actors[cb]=0;this._lastKStories.actors[cb]++;var db=ab.getAttribute("data-app");if(db){if(!this._lastKStories.apps[db])this._lastKStories.apps[db]=0;this._lastKStories.apps[db]++;}if(this._lastKStories.count>this.DEFAULT_LOOK_BEHIND){while(this._lastKStories.tail&&!this._lastKStoriesRemove(this._lastKStories.tail.story))this._lastKStories.tail=this._lastKStories.tail.next;if(!this._lastKStories.tail)this._lastKStories.head=null;}},_lastKStoriesRemove:function(ab){var bb=ab.getAttribute("data-story-key"),cb=ab.getAttribute("data-actor"),db=ab.getAttribute("data-app");if(this._lastKStories.stories[bb]){delete this._lastKStories.stories[bb];this._lastKStories.actors[cb]--;if(db)this._lastKStories.apps[db]--;this._lastKStories.count--;return true;}else return false;},_loadStoriesWithActions:function(){var ab=sa('rightCol');if(!ab)return;this._toggleWrapper=q.scry(ab,'.tickerToggleWrapper')[0];if(this._toggleWrapper){var bb=q.scry(this._stories,'.tickerStoryWithButton');this._storiesWithActions={};for(var cb=0;cb<bb.length;cb++){var db=bb[cb];this._storiesWithActions[db.getAttribute('data-story-key')]=db;}}},_initConfig:function(ab){Object.assign(this,{_newest:ab.newest,_page_newest:ab.newest,_timeout:ab.timeout,_heartbeatTimeout:Math.min(5000,ab.heartbeatTimeout),_maxHeartbeatTimeout:Math.max(30000,ab.maxHeartbeatTimeout),_pullTimeout:Math.max(30000,ab.pullTimeout),_insertTimeout:ab.insertTimeout,_maxQueueLength:ab.maxQueueLength,_heartbeatEndpoint:ab.heartbeatEndpoint,_popupOnHover:ab.popupOnHover,_userIdleTimeout:ab.userIdleTimeout,_pollOnly:ab.pollOnly,_tickerSource:ab.tickerSource,_logFlyouts:ab.logFlyouts,_userScrollGaurdDelay:ab.userScrollGaurdDelay,_rescheduleScrollToTopDelay:ab.rescheduleScrollToTopDelay});},_initListeners:function(){this._listeners=h.listen(this._root,{click:this._handleClick.bind(this),keydown:this._handleKeydown.bind(this),mouseout:this._handleMouseout.bind(this),mouseover:this._handleMouseover.bind(this),mousedown:this._tickerDeClicker.bind(this),mouseup:this._handleMouseup.bind(this)});this._listeners.scroll=h.listen(this._container,'scroll',this._handleScroll.bind(this));setTimeout(this._initInfiniteScrollListener.bind(this),0);},_initSubscriptions:function(ab){y.onLeave(this._cleanup.bind(this));this._subscriptions=[j.subscribe(v.NAVIGATION_BEGIN,this._onNavHandler.bind(this)),j.subscribe('composer/publish',this._handleComposerPublish.bind(this)),j.subscribe('Ticker/storiesInserted',this._handleStoriesInserted.bind(this)),j.subscribe('Ticker/fixed',this._setFixed.bind(this,true)),j.subscribe('Ticker/unfixed',this._setFixed.bind(this,false)),j.subscribe('Ticker/resized',this._checkInfiniteScroll.bind(this)),j.subscribe('ufi/comment',this._scrollDialogToBottom.bind(this)),j.subscribe('ufi/changed',this._redrawFlyout.bind(this)),j.subscribe('Ticker/chatOpened',this._handleChatOpened.bind(this))];if(!ab.pollOnly)this._subscriptions.push(j.subscribe(n.getArbiterType('ticker_update'),this._handleTickerPush.bind(this)));if(ab.pushChannel&&!ab.pollOnly)this.setPushChannel(ab.pushChannel);},_handleClick:function(event){if(!(event.button===1||event.altKey||event.ctrlKey||event.metaKey))event.prevent();var ab=event.getTarget();if(this._getButtonFromNode(ab)){this._logUserAction(ab,'click',event);this._handleActionButton(event);return;}var bb=this._getStoryFromNode(ab),cb=w.byClass(ab,'tickerStoryAllowClick');if(!bb||bb==this._selectedStory||cb)return;if(this._storyIsHidden(bb))return;if(bb==this._activeStory&&!this._selectedStory)this._selecting=true;if(this._storyCanOpenExternally(bb)){var db=bb.getAttribute('data-href');if(db&&!ab.getAttribute('href')){var eb={href:db},fb=ma(ab,['ft','gt']);la('click',eb,event,'FORCE',fb);}else this._logUserAction(ab,'click',event);this._openStoryExternally(bb,event);return;}this._logUserAction(ab,'flyout',event);this._activateStory(bb,'click');this._selectStory(bb);},_handleMouseover:function(event){this._setLocked(true);var ab=event.getTarget(),bb=this._getOpenableStory(ab);if(!bb){var cb=w.byClass(ab,"_5wvy");if(cb){clearTimeout(parseInt(cb.getAttribute('data-timeout-token'),10));var db=setTimeout(function(){za.removeMarkup(cb,bb);},xa);cb.setAttribute('data-timeout-token',db);}return;}event.kill();if(this._popupOnHover){if(!(bb.id in this._fetchedStories))this._uaCurStoryIDPrefetch=bb.id;this._fetchStory(bb);}if(this._selectedStory)return;if(this._popupOnHover){this._clearHoverTimeouts();var eb=this._storyCanOpenExternally(bb)?500:1000,fb=this._activeStory?75:eb;this._hoverShowTimeout=this._setTimeout((function(){this._activateStory(bb,'hover');this._logUserAction(ab,'flyout',event);}).bind(this),fb);}},_handleMouseout:function(event){var ab=event.getTarget();this._setLocked(false);if(ab==this._getStoryFromNode(ab)){var bb=q.scry(ab.parentNode,'.openToggler');for(var cb=0;cb<bb.length;cb++)aa.toggle(bb[cb]);}this._clearClickedStory();this._scheduleHide();},_handleKeydown:function(event){this._tickerDeClicker(event);var ab=this._activeStory;if(!ab)return;var bb=h.getKeyCode(event);switch(bb){case s.UP:case s.DOWN:var cb=this._getInsertedStories(),db;if(event.getModifiers().any){db=bb===s.UP?0:cb.length-1;}else db=cb.indexOf(ab)+(bb===s.UP?-1:1);ab=cb[db];break;case s.ESC:this._deactivateStory(true);return;default:return;}event.kill();if(!ab)return;this._activateStory(ab,'keypress');this._selectStory(ab);},_fadeTopmostStoryButton:function(){var ab=0,bb=15;if(this._storiesWithActions)for(var cb in this._storiesWithActions){var db=this._storiesWithActions[cb],eb=q.scry(db,'.tickerInlineActionButton')[0],fb=q.scry(eb,'.tickerActionIcon')[0],gb=ia.getElementPosition(eb).y-ia.getElementPosition(this._toggleWrapper).y;if(gb<ab){ba.set(eb,'opacity',0);ba.set(fb,'opacity',0);}else if(gb>=ab&&gb<bb){var hb=(gb-ab)/(bb-ab);ba.set(eb,'opacity',hb);ba.set(fb,'opacity',hb);break;}else{ba.set(eb,'opacity',1);ba.set(fb,'opacity',1);}}},_handleScroll:function(){var ab=wa.checkIsOpen();if(ab)this._preventFlyoutDismiss=true;if(!this._preventScrollDismiss&&!ab){if(!this._preventFlyoutDismiss){this._deactivateStory(true);}else this._preventFlyoutDismiss=false;}else this._preventScrollDismiss=false;if(!this._handleScrollThrottled)this._handleScrollThrottled=va(this._handleScrollInner.bind(this));this._handleScrollThrottled();},_handleScrollInner:function(){this._fadeTopmostStoryButton();this._checkInfiniteScroll();this._setIsUserScrolling();if(!this._scrollLogged){this._scrollLogged=true;var ab=this._stories.childNodes.length,bb=this._stories.getAttribute('data-gt'),cb={ticker_scroll:1,number_stories:ab,source:bb};la('scroll',null,null,'FORCE',{gt:cb});}},_setIsUserScrolling:function(){clearTimeout(this._userScrollingToken);if(this._isScrolledToTop()){this._userScrolling=false;return;}this._userScrolling=true;this._userScrollingToken=setTimeout((function(){this._userScrolling=false;this._userScrollingToken=null;}).bind(this),this._userScrollGaurdDelay);},_isUserScrolling:function(){return this._userScrolling;},_handleStoriesInserted:function(){this._initInfiniteScrollListener();if(this._scrollableArea instanceof z)this._scrollableArea.adjustGripper();},_handleActionButton:function(event){var ab=event.getTarget(),bb=this._getOpenableStory(ab),cb=this._getStoryDialog(bb);if(cb)var db=cb.subscribe('beforehide',function(){cb.unsubscribe(db);return false;});},_handleScrollToTopClick:function(){this._scrollToTop(this._poll.bind(this));},_scheduleScrollToTop:function(){this._scrollToTopToken&&clearTimeout(this._scrollToTopToken);this._scrollToTopToken=setTimeout((function(){if(this._isLocked()||this._isUserScrolling()){this._scheduleScrollToTop();}else{this._scrollToTopToken=null;this._scrollToTop();}}).bind(this),this._rescheduleScrollToTopDelay);},_scrollToTop:function(ab){new i(this._container).to('scrollTop',0).ease(i.ease.end).ondone(ab).go();},_clearHoverTimeouts:function(){clearTimeout(this._hoverShowTimeout);clearTimeout(this._hoverHideTimeout);},_getAllStories:function(){return q.scry(this._root,'div.fbFeedTickerStory');},_findStoryById:function(ab){var bb=q.scry(this._root,'.fbFeedTickerStory'),cb;for(story in bb){cb=bb[story];if(ab==this._getStoryDialogParams(cb).token)return cb;}return null;},_getInsertedStories:function(){return this._getAllStories().filter(function(ab){return !p.hasClass(ab,'queuedStory');});},_getQueuedStories:function(){return q.scry(this._storyQueue,'.fbFeedTickerStory.queuedStory');},_getButtonFromNode:function(ab){return w.byClass(ab,'tickerInlineOverlay');},_getStoryFromNode:function(ab){return w.byClass(ab,'fbFeedTickerStory');},_getActionButtonFromStory:function(ab){return q.scry(ab,'.tickerInlineActionButton')[0];},_getOpenableStory:function(ab){var bb=this._getStoryFromNode(ab);return this._storyCanOpenDialog(bb)?bb:null;},_getStoryDialog:function(ab){return this._fetchedStoriesDialog[ab.id]||o.getInstance(ab);},_getStoryDialogParams:function(ab){var bb=ab&&ab.getAttribute('data-flyoutdata')||null;return bb&&JSON.parse(bb)||null;},_storyCanOpenDialog:function(ab){return !!this._getStoryDialogParams(ab)&&!this._storyIsHidden(ab);},_storyCanOpenExternally:function(ab){return !!ab.getAttribute('data-href')||!this._storyCanOpenDialog(ab);},_storyIsHidden:function(ab){return p.hasClass(ab,'tickerStoryHidden');},hideActiveStory:function(){this._activeStory&&this.hideStory(this._activeStory);},hideStory:function(ab){this._deactivateStory();if(ta(ab)==='')q.remove(ab);p.addClass(ab,'tickerStoryHidden');p.removeClass(ab,'tickerStoryClickable');},undoHideStory:function(ab){p.addClass(ab,'tickerStoryClickable');p.removeClass(ab,'tickerStoryHidden');},insertStoriesAtBottom:function(ab){if(!ab)return;var bb=q.create('div');bb.appendChild(ab);var cb=q.scry(bb,'.fbFeedTickerStory'),db=q.find(bb,'.tickerMorePager'),eb=[];for(var fb=0;fb<cb.length;fb++)if(!this.dedupeStory(cb[fb]))eb.push(cb[fb]);if(eb.length){eb.push(db);q.replace(q.find(this._root,'.tickerMorePager'),eb);}j.inform('Ticker/storiesInserted');},_scheduleHide:function(){if(this._popupOnHover&&!this._selectedStory){this._clearHoverTimeouts();this._hoverHideTimeout=this._setTimeout(this._deactivateStory.bind(this),100);}},_setScrollTopPromptVisible:function(ab){this._scrollTopPromptVisible=ab;p.conditionShow(this._scrollTopPrompt,ab);if(ab&&!this._listeners.scrollTop){this._listeners.scrollTop=h.listen(this._scrollTopPrompt,{click:this._handleScrollToTopClick.bind(this)});}else if(!ab&&this._listeners.scrollTop){this._listeners.scrollTop.click.remove();this._listeners.scrollTop=null;}},_isUserIdle:function(){return !ga.isActive(this._userIdleTimeout);},_schedulePoll:function(){clearTimeout(this._pollToken);this._pollToken=this._setTimeout(this._poll.bind(this),this._timeout);},_poll:function(){if(!this._isTickerVisible())return;if(this._storiesToRemove.length>0){if(this._isInsertingStory)return this._schedulePoll();var ab=this._storiesToRemove.pop();this.removeStory(ab);}var bb=!this._isScrolledToTop()&&this._getQueuedStories().length;this._setScrollTopPromptVisible(bb);var cb=Date.now(),db=cb-this._lastInsert;if(db<this._insertTimeout||this._isLocked())return this._schedulePoll();var eb=this._getQueuedStories(),fb=this._isUserIdle(),gb=eb.length>0;if(gb){var hb=eb.shift();this.insertStory(hb);return this._schedulePoll();}if(fb)return ga.subscribeOnce(this._poll.bind(this));var ib=false,jb=false;if(this._pollOnly){jb=cb-this._lastUpdate>this._heartbeatTimeout;}else ib=cb-this._lastPull>this._pullTimeout;var kb=ib||jb;if(!kb)return this._schedulePoll();this.update({pull:ib,fullpoll:jb});},_updatePollOnlyHeartbeatTimeout:function(){if(this._pollOnly&&this._heartbeatTimeout<this._maxHeartbeatTimeout)this._heartbeatTimeout=Math.min(this._heartbeatTimeout+5000,this._maxHeartbeatTimeout);},update:function(ab){this._updatePollOnlyHeartbeatTimeout();if(!this._pollOnly)return this._schedulePoll();var bb={newest:ab.fullpoll||ab.cache_update?this._newest:this._page_newest,source:this._tickerSource};if(!bb.newest||bb.newest==='0')throw new Error(qa('Trying to request new ticker stories with an invalid cursor %s, with'+' the settings fullpoll %s, cache_update %s, value coming from this.%s',typeof bb.newest==='string'?'"'+bb.newest+'"':bb.newest,ab.fullpoll,ab.cache_update,ab.fullpoll||ab.cache_update?'_newest':'_page_newest'));Object.assign(bb,ab);new k().setURI(this._heartbeatEndpoint).setReadOnly(true).setOption('retries',0).setData(bb).setHandler(this._handleResponse.bind(this)).setFinallyHandler(this._poll.bind(this)).setAllowCrossPageTransition(true).send();this._lastUpdate=Date.now();if(bb.pull)this._lastPull=this._lastUpdate;},insertStory:function(ab){this._lastInsert=Date.now();window.LiveTimer&&u.addTimeStamps(ab);p.removeClass(ab,'queuedStory');if(this._isUserScrolling()){this._fadeStoryIn(ab);}else this._scrollToTop(this._flyStoryIn.bind(this,ab));if(this._storiesWithActions&&p.hasClass(ab,'tickerStoryWithButton'))this._storiesWithActions[ab.getAttribute('data-story-key')]=ab;this._removeOldStories();},_removeOldStories:function(){var ab=this._getInsertedStories();if(ab.length<=this._maxStoriesToKeep)return;var bb=this._minStoriesToKeep,cb=ab.slice(bb);cb.forEach(q.remove);if(this._storiesWithActions)for(var db=0;db<cb.length;db++)delete this._storiesWithActions[cb[db].getAttribute('data-story-key')];this._resetMorePager();},_resetMorePager:function(){var ab=this._getInsertedStories();if(!ab||!ab.length)return;var bb=ab[ab.length-1].getAttribute('data-ticker-timestamp'),cb=q.scry(this._root,'.tickerMorePager a')[0];if(!cb||!bb)return;var db=new fa(cb.getAttribute('ajaxify'));db.addQueryData({oldest:bb});cb.setAttribute('ajaxify',db);},_setLocked:function(ab){this._locked=ab;},_isLocked:function(){return !!(this._locked||this._activeStory);},informAndRemoveStory:function(ab,bb,cb){var db=this._getStoryFromNode(ab),eb=db.getAttribute('data-story-key');q.setContent(db,bb);p.addClass(db,'highlightedStory');this._setTimeout(this.removeStory.bind(this,eb),cb||6000);},_getStoryByStoryKey:function(ab){var bb=this._getAllStories();for(var cb=0;cb<bb.length;cb++){var db=bb[cb];if(db.getAttribute('data-story-key')==ab)return db;}return null;},removeStory:function(ab){this._removedStoryIDs[ab]=true;var bb=this._getStoryByStoryKey(ab);if(!bb)return;if(this._storiesWithActions)delete this._storiesWithActions[ab];if(bb==this._activeStory)this._deactivateStory();var cb=this._getStoryDialog(bb);cb&&cb.destroy();this._lastKStoriesRemove(bb);var db=bb.getAttribute("data-dedupe-key");if(db)delete this._dedupeKeys[db];if(p.hasClass(bb,'queuedStory')){q.remove(bb);return;}this._animateStoryOut(bb);},_isScrolledToTop:function(){return this._container.scrollTop<=this._scrollTopThreshold;},_flyStoryIn:function(ab){var bb=q.create('div',{style:{marginTop:'-1000px'}},ab);ba.set(bb,'opacity',0);q.prependContent(this._stories,bb);var cb=ia.getElementDimensions(bb).y;ba.set(bb,'marginTop','-'+cb+'px');this._isInsertingStory=true;new i(bb).to('marginTop',0).ease(i.ease.end).checkpoint(.5).to('opacity',1).ondone((function(){q.replace(bb,ab);this._afterInsert(ab);this._isInsertingStory=false;}).bind(this)).go();},_fadeStoryIn:function(ab){new i(this._stories).to('opacity',.5).ondone((function(){q.prependContent(this._stories,ab);this._container.scrollTop=this._container.scrollTop+this._stories.firstChild.offsetHeight;this._scheduleScrollToTop();new i(this._stories).to('opacity',1).ondone((function(){this._afterInsert(ab);}).bind(this)).go();}).bind(this)).go();},_animateStoryOut:function(ab){var bb=q.create('div',{style:{overflow:'hidden',position:'relative'}});q.insertBefore(ab,bb);q.appendContent(bb,ab);new i(bb).to('top',20).to('height',0).to('opacity',0).ease(i.ease.end).ondone((function(){q.remove(bb);j.inform('Ticker/animateOut');}).bind(this)).go();},_afterInsert:function(ab){j.inform('Ticker/afterInsert');},setPushChannel:function(ab){this._pushSubscription&&this._pushSubscription.unsubscribe();this._pushSubscription=j.subscribe(n.getArbiterType(ab),this._handleTickerPush.bind(this));e(['ChatConfig','ChannelConnection'],(function(bb,cb){this._channelConnection=cb;this._checkChannelConnection();this._channelConnectionSubscription=this._channelConnection.subscribe([this._channelConnection.CONNECTED,this._channelConnection.RECONNECTING,this._channelConnection.SHUTDOWN,this._channelConnection.MUTE_WARNING,this._channelConnection.UNMUTE_WARNING],this._handleChannelConnection.bind(this));}).bind(this));},_checkChannelConnection:function(){p.conditionClass(this._root,'disconnected',this._channelConnection.disconnected());},_handleTickerPush:function(ab,bb){var cb=bb.obj;if(cb.delete_id){this._storiesToRemove.push(cb.delete_id);return;}var db=cb.story_xhp;if(!db)return;var eb=r(db).getRootNode();if(!cb.story_time||cb.story_time==='0')throw new Error(qa('An invalid story time was pushed: %s, for ticker story: %s',typeof cb.story_time==='string'?'"'+cb.story_time+'"':cb.story_time,eb.getAttribute('data-flyoutdata')));this._newest=cb.story_time;this.queueStory(eb,cb.flyout_js_cmds);this._newestStory={actorID:cb.actor,storyKey:eb.getAttribute('data-story-key')};},_handleComposerPublish:function(ab,bb){bb.tickerMarkup&&this.insertStory(bb.tickerMarkup);},_logRender:function(){if(this._loggedRender)return;var ab=this._tickerInSidebarMode;if(ab||w.byClass(this._content,'home_right_column')){new l('/ajax/log_ticker_render.php',{sidebar_mode:ab}).send();this._loggedRender=true;}},_isTickerVisible:function(){var ab=ca.getActiveInstance()==this;ab&&this._logRender();return ab;},_handleResponse:function(ab){var bb=ab.getPayload();if(bb.newest)this._newest=this._page_newest=bb.newest;if(bb.content)if(bb.content instanceof Array){for(var cb=0;cb<bb.content.length;cb++)this.queueStoryMarkup(bb.content[cb]);}else this.queueStoryMarkup(bb.content);},queueStoryMarkup:function(ab){var bb=r(ab).getRootNode();this.queueStory(bb);},dedupeStory:function(ab){var bb=ab.getAttribute('data-story-key'),cb=bb&&(!!this._objectIDs[bb]||!!this._removedStoryIDs[bb]);cb=cb||!!this._lastKStories.actors[ab.getAttribute('data-actor')]||!!this._lastKStories.apps[ab.getAttribute('data-app')];var db=ab.getAttribute('data-dedupe-key');cb=cb||db&&this._dedupeKeys[db];if(ab.getAttribute('data-force-push'))cb=false;bb&&(this._objectIDs[bb]=true);return cb;},queueStory:function(ab,bb){if(this.dedupeStory(ab))return;this._lastKStoriesInsert(ab);var cb=ab.getAttribute("data-dedupe-key");if(cb)this._dedupeKeys[cb]=true;p.addClass(ab,'queuedStory');q.appendContent(this._storyQueue,ab);var db=bb&&bb.length;if(db)bb.forEach(function(fb){new Function(fb).apply();});ab.setAttribute('id',ab.id+'_'+this._root.id);var eb=this._getQueuedStories();eb.slice(0,-this._maxQueueLength).forEach(q.remove);if(db)this._fetchedStories[ab.id]=true;},_cleanup:function(){ca.clearRHCplaceholder();if(!w.byClass(this._content,'hasRightCol'))return;this._objectIDs=[];this._subscriptions.forEach(j.unsubscribe);this._channelConnectionSubscription&&this._channelConnection.unsubscribe(this._channelConnectionSubscription);this._pushSubscription&&this._pushSubscription.unsubscribe();for(var ab in this._listeners)this._listeners[ab]&&this._listeners[ab].remove();clearTimeout(this._pollToken);this._pollToken=null;this._cleanupInputFocusListener();this._cleanupContentResizeListener();j.inform('Ticker/cleanup');},_onNavHandler:function(ab,bb){var cb=bb.params.key;if(cb!='lf'&&cb!='h')this._cleanup();},registerStoryDialog:function(ab,bb){if(this._uaCurStoryIDFetch==ab.id)this._uaCurStoryIDFetch=null;if(this._uaCurStoryIDPrefetch==ab.id)this._uaCurStoryIDPrefetch=null;this._fetchedStories[ab.id]=true;this._fetchedStoriesDialog[ab.id]=bb;bb.setContext(ab);bb.subscribe('hide',this._deactivateStory.bind(this,true));bb.subscribe('success',this._focusStory.bind(this,ab));bb.subscribe('beforehide',(function(){if(this._selecting){this._selecting=false;return false;}}).bind(this));if(this._popupOnHover){bb.subscribe('mouseenter',this._clearHoverTimeouts.bind(this));bb.subscribe('mouseleave',this._scheduleHide.bind(this));bb.subscribe('show',(function(){setTimeout(this._highlightDialogScrollbar.bind(this,bb),0);var cb=h.listen(bb.getContent(),'mousedown',(function(){this._selectStory(ab);cb.remove();}).bind(this));}).bind(this));}if(ab==this._activeStory)this._openDialog(bb);},_highlightDialogScrollbar:function(ab){var bb=q.scry(ab.getContent(),'.uiScrollableArea')[0];bb&&z.poke(bb);},_openStoryExternally:function(ab,event){var bb=ab.getAttribute('data-href');if(!bb||bb=='#')return;var cb=ab.getAttribute('data-story-rel');switch(cb){case 'theater':this._deactivateAndClearStory();m.loadModules(["PhotoViewer"],function(fb){fb.bootstrap(bb,ab);});return;case 'async':this._deactivateAndClearStory();k.bootstrap(bb,ab);return;}var db=ab.getAttribute('data-target'),eb=event.which!=1||event.getModifiers().any||db=='_blank';eb?window.open(bb,'_blank'):ua(bb);},_deactivateAndClearStory:function(){this._clearHoverTimeouts();this._deactivateStory();},_focusStoryWillTriggerScroll:function(ab){var bb=this._container,cb=bb.clientHeight,db=ab.offsetHeight,eb=bb.scrollTop,fb=eb+cb,gb=ab.offsetTop,hb=gb+db;return gb<eb||hb>fb;},_focusStory:function(ab){if(this._focusStoryWillTriggerScroll(ab))this._preventScrollDismiss=true;var bb=new x(ab),cb=w.byClass(ab,'scrollable'),db=bb.boundWithin(new x(cb)).getPositionVector(),eb=bb.getPositionVector().sub(db);if(eb.y!==0)eb.scrollElementBy(cb);ab.focus();},_selectStory:function(ab){this._selectedStory=ab;p.addClass(ab,'tickerStorySelected');p.addClass(this._root,'tickerChildSelected');},_activateStory:function(ab,bb){this._clearHoverTimeouts();if(ab==this._activeStory||!this._storyCanOpenDialog(ab))return;this._deactivateStory();this._focusStory(ab);this._activeStory=ab;p.addClass(ab,'tickerStoryActive');window.Toggler&&ea.hide();if(this._logFlyouts){bb=bb||'unknown';new l('/ajax/feed/ticker/flyout.php',{src:bb}).send();}da.log(ab);var cb=this._getStoryDialog(ab);if(cb){if(this._storyDialogResources[ab.id])m.loadResources(this._storyDialogResources[ab.id]);this._openDialog(cb);ka.bumpEntityKey('ticker_stories','flyouts.open');return;}if(!(ab.id in this._fetchedStories))this._uaCurStoryIDFetch=ab.id;this._fetchStory(ab);},handleRemoveStory:function(){this._deactivateStory(true);},_deactivateStory:function(ab){if(this._activeStory===this._deactivatingStory)return;this._deactivatingStory=this._activeStory;if(this._dialog){if(ab){this._dialog.enableBehavior(t);}else this._dialog.disableBehavior(t);this._dialog.hide();}if(this._activeStory){p.removeClass(this._activeStory,'tickerStoryActive');p.removeClass(this._activeStory,'tickerStorySelected');p.removeClass(this._root,'tickerChildSelected');}this._dialog=this._selectedStory=this._activeStory=null;this._cleanupInputFocusListener();this._cleanupContentResizeListener();this._deactivatingStory=null;},_logUserAction:function(ab,bb,event){la(bb,ab,event,'FORCE');},_fetchStory:function(ab){clearTimeout(this._fetchToken);var bb=[],cb=this._getInsertedStories(),db=cb.indexOf(ab);[-1,0,1].forEach(function(eb){var fb=cb[db+eb];fb&&bb.push(fb);},this);this._fetchToken=setTimeout(this._fetchStories.bind(this,bb),100);},_fetchStories:function(ab){var bb=[],cb,db=function(eb){clearTimeout(cb);ab.forEach(function(fb){p.conditionClass(fb,'tickerStoryFetching',eb);});};ab=ab.filter(function(eb){if(eb.id in this._fetchedStories)return false;this._fetchedStories[eb.id]=true;var fb=this._getStoryDialogParams(eb);if(!fb)return false;fb.uniq_id=eb.getAttribute('id');fb.referrer=this._tickerSource;bb.push(fb);return true;},this);if(!bb.length)return;cb=this._setTimeout(db.bind(null,true),500);new k('/ajax/feed/ticker/multi_story').setInitialHandler(this._handleDialogResponse.bind(this,bb)).setFinallyHandler(db.bind(null,false)).setErrorHandler(ra).setData({stories:bb}).setAllowCrossPageTransition(this._tickerInSidebarMode).send();},_handleDialogResponse:function(ab,bb){if(bb&&bb.resource_map){var cb=[];for(var db in bb.resource_map){var eb=bb.resource_map[db];if(eb.type==='css'&&!eb.permanent)cb.push(db);}if(cb.length>0)for(var fb=0;fb<ab.length;fb++)this._storyDialogResources[ab[fb].uniq_id]=cb;}},_tickerDeClicker:function(event){var ab=event.getTarget(),bb=w.byTag(ab,'a'),cb=this._getStoryFromNode(ab),db=this._getButtonFromNode(ab);if(cb&&bb&&!db&&p.hasClass(cb,'tickerStoryClickable')&&!p.hasClass(bb,'tickerStoryAllowClick')&&!this._storyIsHidden(cb))bb.setAttribute('rel','ignore');var eb=event.button==2,fb=event.type==='keydown',gb=cb&&this._getActionButtonFromStory(cb);if(!eb&&gb&&!fb)this._setClickedStory(cb);},_handleMouseup:function(event){this._clearClickedStory();},_setClickedStory:function(ab){this._clearClickedStory();p.addClass(ab,'tickerStoryClicked');this._clickedStory=ab;},_clearClickedStory:function(){if(this._clickedStory){p.removeClass(this._clickedStory,'tickerStoryClicked');this._clickedStory=null;}},_initInfiniteScrollListener:function(){var ab=this._getInsertedStories();if(this._storiesWithActions)for(var bb=0;bb<ab.length;bb++){var cb=ab[bb];if(p.hasClass(cb,'tickerStoryWithButton'))this._storiesWithActions[cb.getAttribute('data-story-key')]=cb;}var db=Math.max(0,ab.length-this._autoloadStoryIndex);this._infiniteScrollStory=ab[db];this._checkInfiniteScroll();},_checkInfiniteScroll:function(){if(this._infiniteScrollStory){var ab=ia.getElementPosition(this._infiniteScrollStory).y,bb=ia.getElementPosition(this._container).y+ia.getElementDimensions(this._container).y;if(ab<bb){var cb=q.scry(this._root,'.tickerMorePager a')[0];if(cb){var db=w.byClass(cb,'stat_elem')||cb;new k(cb.getAttribute('ajaxify')).setReadOnly(true).setRelativeTo(cb).setStatusElement(db).setAllowCrossPageTransition(true).send();}this._infiniteScrollStory=null;this._autoloadStoryIndex=5;}}},_setFixed:function(ab){if(!this._selectedStory)return;var bb=this._getStoryDialog(this._selectedStory);if(bb){bb.setFixed&&bb.setFixed(ab);bb.updatePosition();}},_setTimeout:function(ab,bb){return setTimeout(ab,bb,!this._tickerInSidebarMode);},_scrollDialogToBottom:function(){var ab=this._dialog&&this._dialog.getContent(),bb=ab&&q.scry(ab,'.uiScrollableAreaWrap')[0],cb=bb&&z.getInstance(bb);cb&&cb.scrollToBottom();},_redrawFlyout:function(ab,bb){if(this._hasUFIUpdated)return;var cb=this._dialog;if(cb&&cb.isShown()&&na(cb.getContent(),bb.form)){this._hasUFIUpdated=true;this._updateDialogPosition();}},_openDialog:function(ab){if(!this._tickerInSidebarMode)p.addClass(ab.getRoot(),'tickerStoryOverlayOnTop');this._hasUFIUpdated=false;var bb=ja.getScrollPosition();this._dialog=ab.show();window.scrollTo(bb.x,bb.y);this._updateDialogPosition();this._writeSwfFrame(ab);setTimeout(this._initCommentFocusListener.bind(this),0);setTimeout(this._initContentResizeListener.bind(this),0);this._stupidIE7VideoResizeHack(ab);},_stupidIE7VideoResizeHack:function(ab){if(ha.ie()===7){var bb=q.scry(ab.getContent(),'.uiVideoThumb .img');bb.forEach(function(cb){ba.set(cb,'width','');});}},_updateDialogPosition:function(){var ab=this._tickerInSidebarMode||!!w.byClass(this._root,'fixed_elem');this._dialog.setFixed&&this._dialog.setFixed(ab);this._adjustFlyoutContentHeight();this._dialog.updatePosition();},_writeSwfFrame:function(ab){var bb=this._dialog&&this._dialog.getContent(),cb=q.scry(bb,'.swfObject')[0];if(!cb)return;var db=cb.getAttribute('data-swfid');if(db&&window[db]){var eb=window[db];eb.write(cb);}},_initCommentFocusListener:function(){var ab=this._dialog&&this._dialog.getContent(),bb=ab&&q.scry(ab,'.tickerDialogFooter textarea')[0];if(!bb)return;this._listeners.inputFocus=h.listen(bb,'focus',this._scrollDialogToBottom.bind(this));},_cleanupInputFocusListener:function(){if(this._listeners.inputFocus){this._listeners.inputFocus.remove();this._listeners.inputFocus=null;}},_initContentResizeListener:function(){var ab=this._dialog&&this._dialog.getContent();if(!ab)return;this._listeners.contentResize=h.listen(ab,'click',(function(){setTimeout(this._dialog.updatePosition.bind(this._dialog),0);}).bind(this));},_cleanupContentResizeListener:function(){if(this._listeners.contentResize){this._listeners.contentResize.remove();this._listeners.contentResize=null;}},_adjustFlyoutContentHeight:function(){var ab=this._dialog&&this._dialog.getContent(),bb=ab&&q.scry(ab,'.uiScrollableAreaWrap')[0];if(!bb)return;var cb=ia.getElementDimensions(bb),db=ia.getElementPosition(bb),eb=q.scry(bb,'.uiUfi .uiUfiComment'),fb=q.scry(bb,"._12tg")[0],gb=q.scry(bb,".UFILikeSentence")[0],hb=this.FLYOUT_MAX_HEIGHT;if(fb||gb){var ib=this._getUfiItemAndTop(fb,gb),jb=ib[0],kb=ib[1];hb=Math.max(hb,this.FLYOUT_TARGET_HEIGHT_OFFSET+bb.scrollTop+kb+jb.offsetHeight-db.y);}var lb=ia.getViewportDimensions().y-this.FLYOUT_VIEWPORT_PADDING;hb=Math.min(hb,lb);var mb=hb-this.FLYOUT_TARGET_HEIGHT_OFFSET;for(var nb=0;nb<eb.length;nb++){var ob=eb[nb],pb=ia.getElementPosition(ob),qb=pb.y-db.y;if(Math.abs(qb-mb)<=this.FLYOUT_OFFSET_THRESHOLD){mb=qb+this.FLYOUT_COMMENT_OFFSET;break;}}if(cb.y>=mb){ba.set(bb,'height',mb+'px');ba.set(bb,'max-height',null);}else{ba.set(bb,'max-height',hb+'px');ba.set(bb,'height',null);}},_getUfiItemAndTop:function(ab,bb){var cb=ab&&ia.getElementPosition(ab).y||0,db=bb&&ia.getElementPosition(bb).y||0,eb=[ab,cb+this.FLYOUT_ACTION_FOOTER_PADDING],fb=[bb,db];return cb>db?eb:fb;},_initObjectIDs:function(){var ab=this._getAllStories();for(var bb=ab.length-1;bb>=0;bb--){var cb=ab[bb].getAttribute('data-story-key');if(cb){this._objectIDs[cb]=true;this._lastKStoriesInsert(ab[bb]);var db=ab[bb].getAttribute("data-dedupe-key");if(db)this._dedupeKeys[db]=true;}}},_handleChatOpened:function(){this._deactivateStory();},_handleChannelConnection:function(){this._checkChannelConnection();},getNewest:function(){return this._newest;}});f.exports=za;},null);