/*!CK:3806525808!*//*1439303835,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["XWDv7"]); }

__d('EventHovercard',['Arbiter','DOM'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(){}Object.assign(j,{EVENT_ACTION:'HOVERCARD_EVENT_ACTION',registerEventActions:function(k,l){var m=l.parentNode;h.subscribe(this.EVENT_ACTION,function(n,o){if(o.eid==k)i.setContent(m,o.markup);});},informEventAction:function(k,l){h.inform(this.EVENT_ACTION,{eid:k,markup:l});}});f.exports=j;},null);