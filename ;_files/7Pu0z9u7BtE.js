/*!CK:1328662078!*//*1441681617,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["ttd1y"]); }

__d("PrivacyConst",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={BaseValue:{FRIEND_LIST:129,FRIENDS_PLUS_GAMER_FRIENDS:128,FRIENDS_MINUS_ACQUAINTANCES:127,FACEBOOK_EMPLOYEES:112,CUSTOM:111,EVERYONE:80,NETWORKS_FRIENDS_OF_FRIENDS:60,NETWORKS_FRIENDS:55,FRIENDS_OF_FRIENDS:50,ALL_FRIENDS:40,SELF:10,NOBODY:0},CustomPrivacyTokens:{FRIENDS:247124075410460,FRIENDS_OF_FRIENDS:498125493540100},FriendsValue:{EVERYONE:80,NETWORKS_FRIENDS:55,FRIENDS_OF_FRIENDS:50,ALL_FRIENDS:40,SOME_FRIENDS:30,SELF:10,NO_FRIENDS:0},PostParam:{EVERYONE:300645083384735,NETWORKS_FRIENDS:123780391104836,FRIENDS_OF_FRIENDS:275425949243301,FRIENDS:291667064279714,FRIENDS_MINUS_ACQUAINTANCES:284920934947802,ONLY_ME:286958161406148,FB_ONLY:411331705596297,EVENT_PUBLIC:1493271774218406,EVENT_OPEN_INVITE:854618297899786,EVENT_GUESTS_AND_FRIENDS:1439959856260766,EVENT_INVITE_ONLY:599950423437029},PrivacyField:{CURRENT_COMPOSER:8787670733,DEFAULT_COMPOSER:875106179167765,TIMELINE_TAGGED_CONTENT_VISIBILITY:8787530733,WALL_POSTS:8787370733,TAG_EXPANDED_CONTENT:8787795733,SEARCH_BY_PHONE:8787815733,SEARCH_BY_EMAIL:8787820733,CAN_FRIEND:8787540733,DEPRECATED_APP_DEFAULT:8787700733,SEARCH_BY_NAME:8787755733,SEARCH_BY_CONTACT_INFO:8787760733,SCREENNAME:8787335733,CURRENT_ADDRESS:8787355733,FRIENDS:8787365733,WEBSITE:8787375733,STATUS_UPDATES:8787395733,BIRTHDAY:8787510733,BIRTHYEAR:8787805733,CAN_COMMENT:8787535733,CAN_MESSAGE:8787545733,RELATIONSHIPS:8787550733,PROFILE_PICTURE_ALBUM:8787565733,DASHBOARD_ACTIVITY:8787575733,FAMILY:8787585733,INTERESTED_IN_LOOKING_FOR:8787590733,PLACES:8787620733,NAME_DAY:8787810733,LANGUAGES:8787625733,QUOTATIONS:8787630733,ABOUT_ME:8787635733,POLITICAL:8787640733,RELIGIOUS:8787645733,CURRENT_CITY:8787650733,HOMETOWN:8787655733,PROFILE_LIKES_AND_INTERESTS:8787660733,BLURB:8787665733,OTHER_LIKES_AND_INTERESTS:8787680733,SUBSCRIBERS:8787690733,SUBSCRIBED_TO:8787695733,PERSONAL_CONTACT_DEFAULT:8787765733,PAGE_CONTACT_DEFAULT:8787770733,AUTO_GENERATED_FB_EMAIL:8787775733,SKILLS:8787780733,CUSTOM_GENDERS:237760973066217,LOCATION_DO_NOT_WRITE_DIRECTLY:8787785733,SOCIAL_ADS:7719929599,PLATFORM_ADS:126540474531,BASS_ADS:183468681673909,ACTIVITIES:144331422306930,INTERESTS:113693108715766,MUSIC:172372399483077,BOOKS:100725463352700,GAMES:199298603444535,MOVIES:201146206594049,TV_SHOWS:129665560441221,SPORTS_PLAYED:129991670408857,FAVORITE_TEAMS:225288534151802,FAVORITE_ATHLETES:203380763033334,PEOPLE_I_ADMIRE:210380795648667,FAVORITE_FOODS:585935528106425,FAVORITE_RESTAURANTS:172588449584647,FAVORITE_WEBSITES:180412195459106,CLOTHING_BRANDS:397391233714082,LAST_POST_PRIVACY:314763985364212,SECOND_TO_LAST_POST_PRIVACY:321179124722698,PREVIOUS_SECONDARY_COMPOSER:864562253561430,RECENT_COMPOSER:358304524327898,NOW_COMPOSER:421290164697736,BACKSTAGE_PRIVACY:809506612451171},TagExpansion:{NONE:0,TAGGEES:1,FRIENDS_OF_TAGGEES:2},EventExpansion:{NONE:0,EVENT_INVITEES:1,EVENT_GROUP:2},ExpansionType:{NONE:0,TAGS_ONLY:1,EVENT_INVITEES_ONLY:2,EVENT_GROUP_ONLY:3,TAGS_AND_EVENT_INVITEES:4,TAGS_AND_EVENT_GROUP:5}};},null,{});
__d("ModuleDependencies",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(l,m,n){var o=c.__debug.modules[n],p=c.__debug.deps;if(m[n])return;m[n]=true;if(!o){p[n]&&(l[n]=true);return;}if(!o.dependencies||!o.dependencies.length){if(o.waiting)l[n]=true;return;}o.dependencies.forEach(function(q){h(l,m,q);});}function i(l){if(c.__debug){var m={};h(m,{},l);var n=Object.keys(m);n.sort();return n;}return null;}function j(){var l={loading:{},missing:[]};if(!c.__debug)return l;var m={},n=c.__debug.modules,o=c.__debug.deps;for(var p in n){var q=n[p];if(q.waiting){var r={};h(r,{},q.id);delete r[q.id];l.loading[q.id]=Object.keys(r);l.loading[q.id].sort();l.loading[q.id].forEach(function(s){if(!(s in n)&&o[s])m[s]=1;});}}l.missing=Object.keys(m);l.missing.sort();return l;}var k={setRequireDebug:function(l){c.__debug=l;},getMissing:i,getNotLoadedModules:j};f.exports=k;},null);
__d('DesktopHscrollUnitEventConstants',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={HSCROLL_ITEM_INSERTED_EVENT:'DesktopHScrollUnit/itemInserted',HSCROLL_ITEM_SHOWN_EVENT:'DesktopHScrollUnit/itemShown',HSCROLL_ITEM_HIDE_EVENT:'DesktopHScrollUnit/HideIndividualItem',HSCROLL_ITEM_SCROLL_BEFORE_XOUT_EVENT:'DesktopHScrollUnit/scrollItemBeforeXout',HSCROLL_ITEM_UNHIDE_EVENT:'DesktopHScrollUnit/unhideIndividualItem',HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN:'logLastAdXout',HSCROLL_PAGER_ITEM_HIDE_EVENT:'onXoutIndividualItem'};},null);
__d('BusinessURI.brands',['BizSiteIdentifier.brands','BusinessConf','URI'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k,l;k=babelHelpers.inherits(m,j);l=k&&k.prototype;function m(o,p){'use strict';l.constructor.call(this,o);if(h.isBizSite()){var q=p||h.getBusinessID();if(q)this.addQueryData(i.BIZ_ID_PARAM_NAME,q);if(!this.$BusinessURI1(this.getSubdomain()))this.setSubdomain(i.DOMAIN);}return this;}m.prototype.$BusinessURI1=function(o){'use strict';return o==='developers';};var n=function(o,p){return new m(o,p);};f.exports=n;},null);
__d('CenteredContainer.react',['React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.PropTypes,l=h.createClass({displayName:'CenteredContainer',propTypes:{fullHeight:k.bool,vertical:k.bool,horizontal:k.bool},getDefaultProps:function(){return {fullHeight:false,vertical:false,horizontal:true};},render:function(){var m=(this.props.vertical?"_3bwv":'')+(this.props.horizontal?' '+"_3bww":''),n=h.Children.map(this.props.children,function(p){return (h.createElement('div',{className:"_3bwx"},p));}),o=j(this.props.className,this.props.fullHeight?"_5bpf":'');return (h.createElement('div',babelHelpers._extends({},this.props,{className:o}),h.createElement('div',{className:m},h.createElement('div',{className:"_3bwy"},n))));}});f.exports=l;},null);
__d('DialogPosition',['Vector'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=40,j,k={calculateTopMargin:function(l,m){if(j)return j;var n=h.getViewportDimensions(),o=Math.floor((n.x+l)*(n.y-m)/(4*n.x));return Math.max(o,i);},setFixedTopMargin:function(l){j=l;}};f.exports=k;},null);
__d('LayerTogglerContext',['Toggler'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j){'use strict';this._layer=j;}i.prototype.enable=function(){'use strict';this._root=this._layer.getRoot();h.createInstance(this._root).setSticky(false);};i.prototype.disable=function(){'use strict';h.destroyInstance(this._root);this._root=null;};f.exports=i;},null);
__d('ModalLayer',['Arbiter','ArbiterMixin','CSS','DataStore','DOM','DOMDimensions','DOMQuery','Event','Scroll','ScrollAwareDOM','Style','UserAgent_DEPRECATED','Vector','csx','cx','debounceAcrossTransitions','isAsyncScrollQuery','removeFromArray','setTimeoutAcrossTransitions'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){if(c.__markCompiled)c.__markCompiled();var aa=[],ba=null,ca=null,da=null;function ea(){if(!da)da=n.scry(document.body,"._li")[0];return da;}function fa(ma){var na={position:t.getScrollPosition()},oa=ma.offsetTop-na.position.y;j.addClass(ma,"_31e");r.set(ma,'top',oa+'px');h.inform('reflow');na.listener=q.subscribe('scroll',function(pa,qa){if(n.contains(ma,qa.target)){var ra=ma.offsetTop-qa.delta.y;r.set(ma,'top',ra+'px');na.position=na.position.add(qa.delta);return false;}});k.set(ma,'ModalLayerData',na);}function ga(ma,na){var oa=k.get(ma,'ModalLayerData');if(oa){var pa=function(){j.removeClass(ma,"_31e");r.set(ma,'top','');if(na){var sa=n.getDocumentScrollElement();p.setTop(sa,oa.position.y);if(p.getTop(sa)!==oa.position.y){p.setTop(sa,oa.position.y+1);p.setTop(sa,oa.position.y);}}h.inform('reflow');oa.listener.unsubscribe();oa.listener=null;k.remove(ma,'ModalLayerData');};if(na&&x()){var qa=l.create('div',{className:"_42w"});r.set(qa,'height',ma.offsetHeight+'px');l.appendContent(document.body,qa);var ra=n.getDocumentScrollElement();p.setTop(ra,oa.position.y);na=false;setTimeout(function(){pa();l.remove(qa);},0);}else pa();}}function ha(){var ma=ea();if(!j.hasClass(ma,"_31e"))fa(ma);}function ia(){if(!aa.length)ga(ea(),true);}function ja(){var ma=aa.length;while(ma--){var na=aa[ma],oa=na.getLayerRoot();ka(oa,'');var pa=na.getLayerContentRoot(),qa=pa.offsetWidth+m.measureElementBox(pa,'width',0,0,1);ka(oa,qa);}}function ka(ma,na){r.set(ma,'min-width',na+(na?'px':''));}function la(ma){'use strict';this._layer=ma;this._enabled=false;}la.prototype.enable=function(){'use strict';if(!ea())return;this._subscription=this._layer.subscribe(['show','hide'],(function(ma){ma=='show'?this._addModal():this._removeModal();}).bind(this));if(this._layer.isShown())this._addModal();this._enabled=true;};la.prototype.disable=function(){'use strict';if(!ea())return;this._subscription.unsubscribe();this._subscription=null;if(this._layer.isShown())this._removeModal();this._enabled=false;};la.prototype._addModal=function(){'use strict';var ma=this.getLayerRoot();j.addClass(ma,"_3qw");this._wash=l.create('div',{className:"_3ixn"});l.prependContent(ma,this._wash);var na=aa[aa.length-1];if(na){fa(na.getLayerRoot());}else ha();var oa=n.getDocumentScrollElement();p.setTop(oa,0);if(!aa.length){var pa=w(ja,100);ba=o.listen(window,'resize',pa);ca=h.subscribe('reflow',pa);}aa.push(this);la.inform('show',this);setTimeout(ja,0);};la.prototype._removeModal=function(){'use strict';var ma=this.getLayerRoot();j.removeClass(ma,"_3qw");l.remove(this._wash);this._wash=null;ka(ma,'');var na=this===aa[aa.length-1];y(aa,this);if(!aa.length){ba.remove();ba=null;ca.unsubscribe();ca=null;}var oa=o.listen(document.documentElement,'mousewheel',o.prevent),pa=oa.remove.bind(oa);z((function(){var qa=aa[aa.length-1];if(qa){ga(qa.getLayerRoot(),na);la.inform('show',qa);}else{ia();la.inform('hide',this);}if(aa.length)setTimeout(ja,0);setTimeout(pa,0);}).bind(this),400);};la.prototype.getLayerRoot=function(){'use strict';return this._enabled?this._layer.getRoot():null;};la.prototype.getLayerContentRoot=function(){'use strict';return this._enabled?this._layer.getContentRoot():null;};la.getTopmostModalLayer=function(){'use strict';return aa[aa.length-1];};la.unfixed=function(ma){'use strict';if(s.chrome()){var na=ea();if(na&&j.hasClass(na,"_31e")){var oa=n.getDocumentScrollElement(),pa=p.getTop(oa);ga(na,true);ma();fa(na);p.setTop(oa,pa);return;}}ma();};Object.assign(la,i);f.exports=la;},null);
__d('DialogX',['Arbiter','CSS','DialogPosition','Event','JSXDOM','Layer','LayerAutoFocus','LayerButtons','LayerFormHooks','LayerRefocusOnHide','LayerTabIsolation','LayerTogglerContext','ModalLayer','Style','Vector','cx','debounce','goURI','shield'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){if(c.__markCompiled)c.__markCompiled();var aa,ba;aa=babelHelpers.inherits(ca,m);ba=aa&&aa.prototype;ca.prototype._configure=function(ea,fa){'use strict';ba._configure.call(this,ea,fa);i.addClass(this.getRoot(),"_4-hy");if(ea.autohide)var ga=this.subscribe('show',(function(){ga.unsubscribe();setTimeout(z(this.hide,this),ea.autohide);}).bind(this));if(ea.redirectURI)var ha=this.subscribe('hide',function(){ha.unsubscribe();y(ea.redirectURI);});this._fixedTopPosition=ea.fixedTopPosition;};ca.prototype._getDefaultBehaviors=function(){'use strict';return ba._getDefaultBehaviors.call(this).concat([da,t,n,o,p,r,s,q]);};ca.prototype._buildWrapper=function(ea,fa){'use strict';var ga=ea.xui?"_4t2a":"_t",ha=ea.xui?"_59s7":"_1yv";this._innerContent=l.div(null,fa);this._wrapper=l.div({className:ha,role:"dialog","aria-labelledby":ea.titleID||null},l.div({className:ga},this._innerContent));this.setWidth(ea.width);return (l.div({className:"_10"},this._wrapper));};ca.prototype.getContentRoot=function(){'use strict';return this._wrapper;};ca.prototype.getInnerContent=function(){'use strict';return this._innerContent;};ca.prototype.updatePosition=function(){'use strict';var ea;if(this._fixedTopPosition!=undefined){ea=this._fixedTopPosition;}else{var fa=v.getElementDimensions(this._wrapper);ea=j.calculateTopMargin(fa.x,fa.y);}u.set(this._wrapper,'margin-top',ea+'px');this.inform('update_position',{type:'DialogX',top:ea});};ca.prototype.setWidth=function(ea){'use strict';ea=Math.floor(ea);if(ea===this._width)return;this._width=ea;u.set(this._wrapper,'width',ea+'px');};ca.prototype.getWidth=function(){'use strict';return this._width;};ca.prototype.getFixedTopPosition=function(){'use strict';return this._fixedTopPosition;};function ca(){'use strict';aa.apply(this,arguments);}function da(ea){'use strict';this._layer=ea;}da.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe(['show','hide'],(function(ea){if(ea==='show'){this._attach();h.inform('layer_shown',{type:'DialogX'});}else{this._detach();h.inform('layer_hidden',{type:'DialogX'});}}).bind(this));};da.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;this._resize&&this._detach();};da.prototype._attach=function(){'use strict';this._layer.updatePosition();this._resize=k.listen(window,'resize',x(this._layer.updatePosition.bind(this._layer)));};da.prototype._detach=function(){'use strict';this._resize.remove();this._resize=null;};Object.assign(da.prototype,{_subscription:null,_resize:null});f.exports=ca;},null);
__d('LayerHideOnBlur',['requestAnimationFrame'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j){'use strict';this._layer=j;}i.prototype.enable=function(){'use strict';this._subscriptions=[this._layer.subscribe('show',this._attach.bind(this)),this._layer.subscribe('hide',this._detach.bind(this))];if(this._layer.isShown())this._attach();};i.prototype.disable=function(){'use strict';this._detach();while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();this._subscriptions=null;};i.prototype._detach=function(){'use strict';this._onBlur&&this._onBlur.unsubscribe();this._onBlur=null;};i.prototype._attach=function(){'use strict';this._onBlur=this._layer.subscribe('blur',(function(){return h((function(){this._layer.hide();return false;}).bind(this));}).bind(this));};Object.assign(i.prototype,{_subscriptions:null,_onBlur:null});f.exports=i;},null);
__d('AbstractDialog.react',['DialogX','LayerHideOnBlur','LayerHideOnEscape','React','ReactDOM'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=k.PropTypes,n={createSpec:function(o){return {displayName:o.displayName,propTypes:{behaviors:m.object,className:m.string,modal:m.bool,autohide:m.number,width:m.number,titleID:m.string,causalElement:m.object,causalElementRef:m.func,shown:m.bool,layerHideOnBlur:m.bool,hideOnEscape:m.bool,onToggle:m.func,fixedTopPosition:m.number},createLayer:function(p){var q=this.props.className,r=babelHelpers._extends({width:this.props.width,xui:true,autohide:this.props.autohide,classNames:q?q.split(' '):null,titleID:this.props.titleID,causalElement:this._getCausalElement(),fixedTopPosition:this.props.fixedTopPosition},o||{}),s=babelHelpers._extends({},o.addedBehaviors,this.props.behaviors);if(this.props.layerHideOnBlur!==false)s.LayerHideOnBlur=i;if(this.props.hideOnEscape===true)s.LayerHideOnEscape=j;r.addedBehaviors=this.enumerateBehaviors(s);var t=new h(r,p);t.conditionShow(this.props.shown);return t;},receiveProps:function(p,q){this.updateBehaviors(q.behaviors,p.behaviors);if(this.layer){this.layer.setCausalElement(this._getCausalElement());this.layer.conditionShow(p.shown);this.layer.setWidth(p.width);p.shown&&this.layer.updatePosition();}},_getCausalElement:function(){var p;if(this.props.causalElementRef){p=l.findDOMNode(this.props.causalElementRef());}else p=this.props.causalElement;return p;}};}};f.exports=n;},null);
__d('XUIDialogCancelButton.react',['React','XUIDialogButton.react','fbt'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.createClass({displayName:'XUIDialogCancelButton',render:function(){return (h.createElement(i,babelHelpers._extends({},this.props,{action:'cancel',label:j._("Cancel")})));}});f.exports=k;},null);
__d('XUIDialog.react',['AbstractDialog.react','LayerFadeOnShow','ReactLayer'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=j.createClass(h.createSpec({displayName:'XUIDialog',addedBehaviors:{LayerFadeOnShow:i}}));f.exports=k;},null);
__d('sliceChildren',['ReactChildren'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();'use strict';function i(j,k,l){if(j==null)return j;var m=h.toArray(j);return m.slice(k,l);}f.exports=i;},null);
__d('XUIDialogTitle.react',['LeftRight.react','React','XUICloseButton.react','cx','fbt','sliceChildren','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=i.PropTypes,p=i.createClass({displayName:'XUIDialogTitle',propTypes:{closeButtonText:o.string,showCloseButton:o.bool},getDefaultProps:function(){return {closeButtonText:l._("Close"),showCloseButton:true};},render:function(){var q=null;if(this.props.showCloseButton)q=i.createElement(j,{label:this.props.closeButtonText,className:"layerCancel _51-t"});return (i.createElement('div',babelHelpers._extends({},this.props,{className:n(this.props.className,"_4-i0")}),i.createElement(h,null,i.createElement('h3',{className:"_52c9"},m(this.props.children,0,1)),i.createElement('div',{className:"_51-u"},m(this.props.children,1),q))));}});f.exports=p;},null);
__d('Visibility',['mixInEventEmitter'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i,j;if(typeof document.hidden!=='undefined'){i='hidden';j='visibilitychange';}else if(typeof document.mozHidden!=='undefined'){i='mozHidden';j='mozvisibilitychange';}else if(typeof document.msHidden!=='undefined'){i='msHidden';j='msvisibilitychange';}else if(typeof document.webkitHidden!=='undefined'){i='webkitHidden';j='webkitvisibilitychange';}function k(){return i?document[i]:false;}var l={HIDDEN:'hidden',VISIBLE:'visible',isHidden:k};h(l,{visible:true,hidden:true});if(document.addEventListener&&j)document.addEventListener(j,function m(){l.emit(k()?l.HIDDEN:l.VISIBLE);});f.exports=l;},null);
__d("cancelAnimationFramePolyfill",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.oCancelAnimationFrame||b.msCancelAnimationFrame||b.clearTimeout;f.exports=h;},null);
__d("coalesce",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){for(var i=0;i<arguments.length;++i)if(arguments[i]!=null)return arguments[i];return null;}f.exports=h;},null);
__d('cancelAnimationFrame',['cancelAnimationFramePolyfill'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();f.exports=h.bind(b);},null);
__d('LitestandMessages',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={NEWSFEED_LOAD:'LitestandMessages/NewsFeedLoad',LEAVE_HOME:'LitestandMessages/LeaveHome',UPDATE_HOME_COUNT:'LitestandMessages/UpdateHomeCount',STORIES_INSERTED:'LitestandMessages/StoriesInserted',NEWER_STORIES_INSERTED:'LitestandMessages/NewerStoriesInserted',NEW_STORIES_CONTAINER_CREATED:'LitestandMessages/NewStoriesContainer',NEW_STORIES_DISPLAYED:'LitestandMessages/NewStoriesDisplayed',RHC_RELOADED:'LitestandMessages/RHCReloaded',PILL_PAGELET_REQUEST_SENT:'LitestandMessages/PullPageletRequestSent'};f.exports=h;},null);
__d("Ease",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={makePowerOut:function(i){var j=h.makePowerIn(i);return function(k){return 1-j(1-k);};},makePowerIn:function(i){return function(j){var k=Math.pow(j,i);return (k*10000|0)/10000;};},makePowerInOut:function(i){var j=h.makePowerIn(i),k=h.makePowerOut(i);return function(l){return l<.5?.5*j(l*2):.5*k(l*2-1)+.5;};},expoOut:function(i){return 1-Math.pow(2,-10*i);},expoIn:function(i){return 1-h.expoOut(1-i);},expoInOut:function(i){return i<.5?.5*h.expoIn(i*2):.5*h.expoOut(i*2-1)+.5;},sineOut:function(i){return Math.sin(i*Math.PI*.5);},sineIn:function(i){return 1-Math.cos(i*Math.PI*.5);},sineInOut:function(i){return -.5*(Math.cos(Math.PI*i)-1);},circOut:function(i){i--;return Math.sqrt(1-i*i);},circIn:function(i){return 1-h.circOut(1-i);},circInOut:function(i){return i<.5?.5*h.circIn(i*2):.5*h.circOut(i*2-1)+.5;},bounceOut:function(i){if(i<1/2.75){return 7.5625*i*i;}else if(i<2/2.75){return 7.5625*(i-=1.5/2.75)*i+.75;}else if(i<2.5/2.75){return 7.5625*(i-=2.25/2.75)*i+.9375;}else return 7.5625*(i-=2.625/2.75)*i+.984375;},bounceIn:function(i){return 1-h.bounceOut(1-i);},bounceInOut:function(i){return i<.5?.5*h.bounceIn(i*2):.5*h.bounceOut(i*2-1)+.5;},makeBounceOut:function(i){i=i||1;return function(j){j=(1-Math.cos(j*Math.PI*i))*(1-j)+j;return 1-Math.abs(1-j);};},makeBounceIn:function(i){var j=h.makeBounceOut(i);return function(k){return 1-j(1-k);};},makeElasticOut:function(i,j){i<1&&(i=1);var k=Math.PI*2;return function(l){if(l===0||l===1)return l;var m=j/k*Math.asin(1/i);return i*Math.pow(2,-10*l)*Math.sin((l-m)*k/j)+1;};},makeElasticIn:function(i,j){var k=h.makeElasticOut(i,j);return function(l){return 1-k(1-l);};},makeElasticInOut:function(i,j){j*=1.5;var k=h.makeElasticIn(i,j),l=h.makeElasticOut(i,j);return function(m){return m<.5?.5*k(m*2):.5*l(m*2-1)+.5;};},makeBackOut:function(i){var j=h.makeBackIn(i);return function(k){return 1-j(1-k);};},makeBackIn:function(i){return function(j){return j*j*((i+1)*j-i);};},makeBackInOut:function(i){i*=1.525;var j=h.makeBackIn(i),k=h.makeBackOut(i);return function(l){return l<.5?.5*j(l*2):.5*k(l*2-1)+.5;};}};h.elasticOut=h.makeElasticOut(1,.3);h.elasticIn=h.makeElasticIn(1,.3);h.elasticInOut=h.makeElasticInOut(1,.3);h.backOut=h.makeBackOut(1.7);h.backIn=h.makeBackIn(1.7);h.backInOut=h.makeBackInOut(1.7);f.exports=h;},null);
__d("DOMWrapper",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h,i,j={setRoot:function(k){h=k;},getRoot:function(){return h||document.body;},setWindow:function(k){i=k;},getWindow:function(){return i||self;}};f.exports=j;},null);
__d('Flash',['DOMEventListener','DOMWrapper','QueryString','UserAgent_DEPRECATED','guid','htmlSpecialChars'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n={},o,p=i.getWindow().document;function q(v){var w=p.getElementById(v);if(w)w.parentNode.removeChild(w);delete n[v];}function r(){for(var v in n)if(n.hasOwnProperty(v))q(v);}function s(v){return v.replace(/\d+/g,function(w){return '000'.substring(w.length)+w;});}function t(v){if(!o){if(k.ie()>=9)h.add(window,'unload',r);o=true;}n[v]=v;}var u={embed:function(v,w,x,y){var z=l();v=m(v).replace(/&amp;/g,'&');x=babelHelpers._extends({allowscriptaccess:'always',flashvars:y,movie:v},x);if(typeof x.flashvars=='object')x.flashvars=j.encode(x.flashvars);var aa=[];for(var ba in x)if(x.hasOwnProperty(ba)&&x[ba])aa.push('<param name="'+m(ba)+'" value="'+m(x[ba])+'">');var ca=w.appendChild(p.createElement('span')),da='<object '+(k.ie()?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ':'type="application/x-shockwave-flash"')+'data="'+v+'" '+(x.height?'height="'+x.height+'" ':'')+(x.width?'width="'+x.width+'" ':'')+'id="'+z+'">'+aa.join('')+'</object>';ca.innerHTML=da;var ea=ca.firstChild;t(z);return ea;},remove:q,getVersion:function(){var v='Shockwave Flash',w='application/x-shockwave-flash',x='ShockwaveFlash.ShockwaveFlash',y;if(navigator.plugins&&typeof navigator.plugins[v]=='object'){var z=navigator.plugins[v].description;if(z&&navigator.mimeTypes&&navigator.mimeTypes[w]&&navigator.mimeTypes[w].enabledPlugin)y=z.match(/\d+/g);}if(!y)try{y=new ActiveXObject(x).GetVariable('$version').match(/(\d+),(\d+),(\d+),(\d+)/);y=Array.prototype.slice.call(y,1);}catch(aa){}return y;},getVersionString:function(){var v=u.getVersion();return v?v.join('.'):'';},checkMinVersion:function(v){var w=u.getVersion();if(!w)return false;return s(w.join('.'))>=s(v);},isAvailable:function(){return !!u.getVersion();}};f.exports=u;},null);
__d('MenuDeprecated',['Event','Arbiter','CSS','DataStore','DOM','HTML','Keys','Parent','Style','UserAgent_DEPRECATED','emptyFunction','Run'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s='menu:mouseover',t=null;function u(ea){if(j.hasClass(ea,'uiMenuContainer'))return ea;return o.byClass(ea,'uiMenu');}function v(ea){return o.byClass(ea,'uiMenuItem');}function w(ea){if(document.activeElement){var fa=v(document.activeElement);return ea.indexOf(fa);}return -1;}function x(ea){return l.find(ea,'a.itemAnchor');}function y(ea){return j.hasClass(ea,'checked');}function z(ea){return !j.hasClass(ea,'disabled')&&p.get(ea,'display')!=='none';}function aa(event){var ea=document.activeElement;if(!ea||!o.byClass(ea,'uiMenu')||!l.isInputNode(ea)){var fa=v(event.getTarget());fa&&da.focusItem(fa);}}function ba(ea){q.firefox()&&x(ea).blur();da.inform('select',{menu:u(ea),item:ea});}var ca=function(){ca=r;var ea={};ea.click=function(event){var fa=v(event.getTarget());if(fa&&z(fa)){ba(fa);var ga=x(fa),ha=ga.href,ia=ga.getAttribute('rel');return ia&&ia!=='ignore'||ha&&ha.charAt(ha.length-1)!=='#';}};ea.keydown=function(event){var fa=event.getTarget();if(event.getModifiers().any)return;if(!t||l.isInputNode(fa))return;var ga=h.getKeyCode(event),ha;switch(ga){case n.UP:case n.DOWN:var ia=da.getEnabledItems(t);ha=w(ia);da.focusItem(ia[ha+(ga===n.UP?-1:1)]);return false;case n.SPACE:var ja=v(fa);if(ja){ba(ja);event.prevent();}break;default:var ka=String.fromCharCode(ga).toLowerCase(),la=da.getEnabledItems(t);ha=w(la);var ma=ha,na=la.length;while(~ha&&(ma=++ma%na)!==ha||!~ha&&++ma<na){var oa=da.getItemLabel(la[ma]);if(oa&&oa.charAt(0).toLowerCase()===ka){da.focusItem(la[ma]);return false;}}}};h.listen(document.body,ea);},da=Object.assign(new i(),{focusItem:function(ea){if(ea&&z(ea)){this._removeSelected(u(ea));j.addClass(ea,'selected');x(ea).focus();}},getEnabledItems:function(ea){return da.getItems(ea).filter(z);},getCheckedItems:function(ea){return da.getItems(ea).filter(y);},getItems:function(ea){return l.scry(ea,'li.uiMenuItem');},getItemLabel:function(ea){return ea.getAttribute('data-label',2)||'';},isItemChecked:function(ea){return j.hasClass(ea,'checked');},autoregister:function(ea,fa,ga){ea.subscribe('show',function(){da.register(fa,ga);});ea.subscribe('hide',function(){da.unregister(fa);});},register:function(ea,fa){ea=u(ea);ca();if(!k.get(ea,s))k.set(ea,s,h.listen(ea,'mouseover',aa));if(fa!==false)t=ea;},setItemEnabled:function(ea,fa){if(!fa&&!l.scry(ea,'span.disabledAnchor')[0])l.appendContent(ea,l.create('span',{className:l.find(ea,'a').className+' disabledAnchor'},m(x(ea).innerHTML)));j.conditionClass(ea,'disabled',!fa);},toggleItem:function(ea){var fa=!da.isItemChecked(ea);da.setItemChecked(ea,fa);},setItemChecked:function(ea,fa){j.conditionClass(ea,'checked',fa);x(ea).setAttribute('aria-checked',fa);},unregister:function(ea){ea=u(ea);var fa=k.remove(ea,s);fa&&fa.remove();t=null;this._removeSelected(ea);},_removeSelected:function(ea){da.getItems(ea).filter(function(fa){return j.hasClass(fa,'selected');}).forEach(function(fa){j.removeClass(fa,'selected');});}});f.exports=da;},null);
__d('UserActivity',['Arbiter','Event'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=5000,k=500,l=-5,m=Date.now(),n=m,o=false,p=Date.now(),q=true,r=0,s=Date.now(),t={subscribeOnce:function(x){var y=t.subscribe(function(){t.unsubscribe(y);x();});return y;},subscribe:function(x){return h.subscribe('useractivity/activity',x);},unsubscribe:function(x){x.unsubscribe();},isActive:function(x){return new Date()-m<(x||j);},isOnTab:function(){return q;},hasBeenInactive:function(){return o;},resetActiveStatus:function(){q=true;o=false;},getLastInActiveEnds:function(){return p;},getLastActive:function(){return m;},setIdleTime:function(x){r=x;},getLastLeaveTime:function(){return s;},getLastInformTime:function(){return n;}};function u(event){m=Date.now();var x=m-n;if(x>k){n=m;if(!q)s=m;if(x>=(r||j)){o=true;p=m;}h.inform('useractivity/activity',{event:event,idleness:x,last_inform:n});}else if(x<l)n=m;}function v(event){q=true;p=Date.now();u(event);h.inform('useractivity/focus');}function w(event){q=false;o=true;s=Date.now();}i.listen(window,'scroll',u);i.listen(window,'focus',v);i.listen(window,'blur',w);i.listen(document.documentElement,{DOMMouseScroll:u,mousewheel:u,keydown:u,mouseover:u,mousemove:u,click:u});h.subscribe('Event/stop',function(x,y){u(y.event);});f.exports=t;},null);
__d('goOrReplace',['URI'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j,k,l){var m=new h(k),n=b.Quickling;if(j.pathname=='/'&&m.getPath()!='/'&&n&&n.isActive()&&n.isPageActive(m)){var o=j.search?{}:{q:''};m=new h().setPath('/').setQueryData(o).setFragment(m.getUnqualifiedURI().toString());k=m.toString();}if(l){j.replace(k);}else if(j.href==k){j.reload();}else j.href=k;}f.exports=i;},null);
__d('PrivacySelectorNewDispatcher',['Dispatcher'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i='selector',j=Object.assign(new h(),{handleUpdateFromSelector:function(k){this.dispatch(babelHelpers._extends({payloadSource:i},k));}});f.exports=j;},null);
__d('ContextualLayerUpdateOnScroll',['Event'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j){'use strict';this._layer=j;}i.prototype.enable=function(){'use strict';this._subscriptions=[this._layer.subscribe('show',this._attachScrollListener.bind(this)),this._layer.subscribe('hide',this._removeScrollListener.bind(this))];};i.prototype.disable=function(){'use strict';while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();};i.prototype._attachScrollListener=function(){'use strict';if(this._listener)return;var j=this._layer.getContextScrollParent();this._listener=h.listen(j,'scroll',this._layer.updatePosition.bind(this._layer));};i.prototype._removeScrollListener=function(){'use strict';this._listener&&this._listener.remove();this._listener=null;};Object.assign(i.prototype,{_subscriptions:[]});f.exports=i;},null);
__d("LoadingDialogDimensions",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={HEIGHT:96,WIDTH:300};f.exports=h;},null);
__d('AsyncDialog',['AsyncRequest','CSS','DialogX','DOM','Keys','LayerFadeOnShow','LoadingDialogDimensions','Parent','React','ReactDOM','URI','XUISpinner.react','XUIDialogTitle.react','cx','emptyFunction','forEachObject'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){if(c.__markCompiled)c.__markCompiled();var x,y;function z(ha){var ia=n.WIDTH,ja;if(ha){ia=parseInt(ha.getAttribute('data-dialog-width'),10)||ia;ja=ha.getAttribute('data-dialog-title')||ja;}if(!x){var ka=k.create('div',{className:"_57-x"});x=new j({width:ia,addedBehaviors:[m],xui:true},k.create('div',null,ka));y=k.create('div');k.insertBefore(ka,y);q.render(p.createElement(s,{size:'large'}),ka);x.subscribe(['key','blur'],function(la,ma){if(la=='blur'||la=='key'&&ma.keyCode==l.ESC){da();return false;}});}if(ja){q.render(p.createElement(t,{showCloseButton:false},ja),y);}else k.empty(y);x.setWidth(ia);return x;}var aa={},ba=1,ca=[];function da(){w(aa,function(ha,ia){ha.abandon();ea(ia);});}function ea(ha){delete aa[ha];if(!Object.keys(aa).length)z().hide();}function fa(ha,ia){var ja=ba++;ca[ja]=ia;aa[ja]=ha;var ka=ea.bind(null,''+ja);Object.assign(ha.getData(),{__asyncDialog:ja});var la=ha.getRelativeTo();z(la).setCausalElement(la).show();var ma=ha.finallyHandler;ha.setFinallyHandler(function(pa){var qa=pa.getPayload();if(qa&&qa.asyncURL)ga.send(new h(qa.asyncURL));ka();ma&&ma(pa);});var na=ha.abortHandler||v,oa=ha.interceptHandler||v;ha.setInterceptHandler(function(){try{oa();}finally{ka();}}).setAbortHandler(function(){try{na();}finally{ka();}});ha.send();}var ga={send:function(ha,ia){fa(ha,ia||v);},bootstrap:function(ha,ia,ja){if(!ha)return;var ka=o.byClass(ia,'stat_elem')||ia;if(ka&&i.hasClass(ka,'async_saving'))return false;var la=new r(ha).getQueryData(),ma=ja==='dialog',na=new h().setURI(ha).setData(la).setMethod(ma?'GET':'POST').setReadOnly(ma).setRelativeTo(ia).setStatusElement(ka).setNectarModuleDataSafe(ia);ga.send(na);},respond:function(ha,ia){var ja=ca[ha];if(ja){ja(ia);delete ca[ha];}},getLoadingDialog:function(){return z();}};f.exports=ga;},null);
__d("XPrivacyCustomDialogController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/privacy\/custom_dialog\/",{id:{type:"String",required:true},option_id:{type:"String",required:true},autosave:{type:"Bool",defaultValue:false},explain_tags:{type:"Bool",defaultValue:false},limit_community:{type:"Bool",defaultValue:false},limit_facebook:{type:"Bool",defaultValue:false},limit_fof:{type:"Bool",defaultValue:false},limit_tagexpand:{type:"Bool",defaultValue:false},is_new_privacy_selector:{type:"Bool",defaultValue:false},render_location:{type:"Int"},content_type:{type:"String"},post_param:{type:"String"},privacy_data:{type:"String"},source:{type:"String"},tags:{type:"IntVector"},tag_expansion_button:{type:"String"},__asyncDialog:{type:"Int"}});},null,{});
__d("XPrivacyRemindersDismissController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/privacy\/reminders\/dismiss\/",{type:{type:"String",required:true},log_plite:{type:"Bool",defaultValue:false}});},null,{});