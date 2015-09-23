/*!CK:1353247492!*//*1441690848,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["KM03q"]); }

__d('IntlPolishNumberType',['IntlVariations'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={getNumberVariationType:function(j){var k=j%100,l=k%10;return j===1?h.NUMBER_SINGULAR:l>=2&&l<=4&&!(k>=12&&k<=14)?h.NUMBER_DUAL:h.NUMBER_PLURAL;}};f.exports=i;},null);
__d('IntlSemiticSimplifiedNumberType',['IntlVariations'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={getNumberVariationType:function(j){var k=j%100;return j===2?h.NUMBER_DUAL:k>=3&&k<=10?h.NUMBER_PLURAL:h.NUMBER_SINGULAR;}};f.exports=i;},null);