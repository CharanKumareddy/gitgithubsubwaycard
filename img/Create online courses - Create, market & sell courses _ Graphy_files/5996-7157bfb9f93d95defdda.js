(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5996],{57369:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var s=n(87462),l=n(45987),c=n(67294);function u(e,t){var n=t.disableHysteresis,n=void 0!==n&&n,o=t.threshold,o=void 0===o?100:o,t=t.target,r=e.current;return t&&(e.current=void 0!==t.pageYOffset?t.pageYOffset:t.scrollTop),!(!n&&void 0!==r&&e.current<r)&&e.current>o}var p="undefined"!=typeof window?window:null;function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.getTrigger,n=void 0===t?u:t,t=e.target,o=void 0===t?p:t,r=(0,l.Z)(e,["getTrigger","target"]),i=c.useRef(),t=c.useState(function(){return n(i,r)}),e=t[0],a=t[1];return c.useEffect(function(){function e(){a(n(i,(0,s.Z)({target:o},r)))}return e(),o.addEventListener("scroll",e),function(){o.removeEventListener("scroll",e)}},[o,n,JSON.stringify(r)]),e}},80533:function(e,t,r){"use strict";r.d(t,{h:function(){return T}});var o=r(94578),i=!("undefined"==typeof window||!window.document||!window.document.createElement);var n=void 0;function a(){return n=void 0===n?function(){if(!i)return!1;if(!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}catch(e){}return e}():n}function s(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function l(e){this.target=e,this.events={}}l.prototype.getEventHandlers=function(e,t){return t=String(e)+" "+String((e=t)?!0===e?100:(e.capture<<0)+(e.passive<<1)+(e.once<<2):0),this.events[t]||(this.events[t]={handlers:[],handleEvent:void 0},this.events[t].nextHandlers=this.events[t].handlers),this.events[t]},l.prototype.handleEvent=function(e,t,n){(e=this.getEventHandlers(e,t)).handlers=e.nextHandlers,e.handlers.forEach(function(e){e&&e(n)})},l.prototype.add=function(t,n,o){var r=this,i=this.getEventHandlers(t,o),a=(s(i),0===i.nextHandlers.length&&(i.handleEvent=this.handleEvent.bind(this,t,o),this.target.addEventListener(t,i.handleEvent,o)),i.nextHandlers.push(n),!0);return function(){var e;a&&(a=!1,s(i),e=i.nextHandlers.indexOf(n),i.nextHandlers.splice(e,1),0===i.nextHandlers.length&&(r.target&&r.target.removeEventListener(t,i.handleEvent,o),i.handleEvent=void 0))}};var c="__consolidated_events_handlers__";function u(e,t,n,o){e[c]||(e[c]=new l(e));o=function(e){if(e)return a()?e:!!e.capture}(o);return e[c].add(t,n,o)}var p=r(67294),d=r(35834);function f(e,t){n=e;var n=!isNaN(parseFloat(n))&&isFinite(n)?parseFloat(n):"px"===n.slice(-2)?parseFloat(n.slice(0,-2)):void 0;return"number"==typeof n?n:"number"==typeof(n=function(e){if("%"===e.slice(-1))return parseFloat(e.slice(0,-1))/100}(e))?n*t:void 0}var h="above",v="inside",w="below",m="invisible";function y(e){return"string"==typeof e.type}var g;var E=[];function b(t){E.push(t),g=g||setTimeout(function(){var e;for(g=null;e=E.shift();)e()},0);var n=!0;return function(){var e;n&&(n=!1,-1!==(e=E.indexOf(t))&&(E.splice(e,1),!E.length&&g&&(clearTimeout(g),g=null)))}}var O="undefined"!=typeof window,t={debug:!1,scrollableAncestor:void 0,children:void 0,topOffset:"0px",bottomOffset:"0px",horizontal:!1,onEnter:function(){},onLeave:function(){},onPositionChange:function(){},fireOnRapidScroll:!0},T=function(n){function e(e){var t=n.call(this,e)||this;return t.refElement=function(e){t._ref=e},t}(0,o.Z)(e,n);var t=e.prototype;return t.componentDidMount=function(){var n=this;O&&(this.cancelOnNextTick=b(function(){n.cancelOnNextTick=null;var e=n.props,t=e.children,e=(e.debug,t),t=n._ref;if(e&&!y(e)&&!t)throw new Error("<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.");n._handleScroll=n._handleScroll.bind(n),n.scrollableAncestor=n._findScrollableAncestor(),n.scrollEventListenerUnsubscribe=u(n.scrollableAncestor,"scroll",n._handleScroll,{passive:!0}),n.resizeEventListenerUnsubscribe=u(window,"resize",n._handleScroll,{passive:!0}),n._handleScroll(null)}))},t.componentDidUpdate=function(){var e=this;O&&this.scrollableAncestor&&!this.cancelOnNextTick&&(this.cancelOnNextTick=b(function(){e.cancelOnNextTick=null,e._handleScroll(null)}))},t.componentWillUnmount=function(){O&&(this.scrollEventListenerUnsubscribe&&this.scrollEventListenerUnsubscribe(),this.resizeEventListenerUnsubscribe&&this.resizeEventListenerUnsubscribe(),this.cancelOnNextTick&&this.cancelOnNextTick())},t._findScrollableAncestor=function(){var e=this.props,t=e.horizontal,e=e.scrollableAncestor;if(e)return"window"===(e=e)?r.g.window:e;for(var n=this._ref;n.parentNode;){if((n=n.parentNode)===document.body)return window;var o=window.getComputedStyle(n),o=(t?o.getPropertyValue("overflow-x"):o.getPropertyValue("overflow-y"))||o.getPropertyValue("overflow");if("auto"===o||"scroll"===o||"overlay"===o)return n}return window},t._handleScroll=function(e){var t,n,o,r,i,a,s,l;this._ref&&(t=this._getBounds(),n=(n=t).viewportBottom-n.viewportTop==0?m:n.viewportTop<=n.waypointTop&&n.waypointTop<=n.viewportBottom||n.viewportTop<=n.waypointBottom&&n.waypointBottom<=n.viewportBottom||n.waypointTop<=n.viewportTop&&n.viewportBottom<=n.waypointBottom?v:n.viewportBottom<n.waypointTop?w:n.waypointTop<n.viewportTop?h:m,o=this._previousPosition,(s=this.props).debug,r=s.onPositionChange,i=s.onEnter,a=s.onLeave,s=s.fireOnRapidScroll,o!==(this._previousPosition=n)&&(l={currentPosition:n,previousPosition:o,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom},r.call(this,l),n==v?i.call(this,l):o===v&&a.call(this,l),s&&(o===w&&n==h||o===h&&n==w)&&(i.call(this,{currentPosition:v,previousPosition:o,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}),a.call(this,{currentPosition:n,previousPosition:v,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}))))},t._getBounds=function(){var e,t=this.props,n=t.horizontal,t=(t.debug,this._ref.getBoundingClientRect()),o=t.left,r=t.top,i=t.right,t=t.bottom,o=n?o:r,r=n?i:t,i=this.scrollableAncestor===window?(e=n?window.innerWidth:window.innerHeight,0):(e=n?this.scrollableAncestor.offsetWidth:this.scrollableAncestor.offsetHeight,n?this.scrollableAncestor.getBoundingClientRect().left:this.scrollableAncestor.getBoundingClientRect().top),t=this.props,n=t.bottomOffset;return{waypointTop:o,waypointBottom:r,viewportTop:i+f(t.topOffset,e),viewportBottom:i+e-f(n,e)}},t.render=function(){var t=this,n=this.props.children;return n?y(n)||(0,d.isForwardRef)(n)?p.cloneElement(n,{ref:function(e){t.refElement(e),n.ref&&("function"==typeof n.ref?n.ref(e):n.ref.current=e)}}):p.cloneElement(n,{innerRef:this.refElement}):p.createElement("span",{ref:this.refElement,style:{fontSize:0}})},e}(p.PureComponent);T.above=h,T.below=w,T.inside=v,T.invisible=m,T.defaultProps=t,T.displayName="Waypoint"},25058:function(e,t){"use strict";var n,o=60103,r=60106,i=60107,a=60108,s=60114,l=60109,c=60110,u=60112,p=60113,d=60120,f=60115,h=60116;
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function v(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case i:case s:case a:case p:case d:return e;default:switch(e=e&&e.$$typeof){case c:case u:case h:case f:case l:return e;default:return t}}case r:return t}}}"function"==typeof Symbol&&Symbol.for&&(o=(n=Symbol.for)("react.element"),r=n("react.portal"),i=n("react.fragment"),a=n("react.strict_mode"),s=n("react.profiler"),l=n("react.provider"),c=n("react.context"),u=n("react.forward_ref"),p=n("react.suspense"),d=n("react.suspense_list"),f=n("react.memo"),h=n("react.lazy"),n("react.block"),n("react.server.block"),n("react.fundamental"),n("react.debug_trace_mode"),n("react.legacy_hidden"));t.isForwardRef=function(e){return v(e)===u}},35834:function(e,t,n){"use strict";e.exports=n(25058)},31304:function(e){var t;t=function(){var i=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}'),a=JSON.parse('{"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"}}');function e(e,n){if("string"!=typeof e)throw new Error("slugify: string argument expected");var o=a[(n="string"==typeof n?{replacement:n}:n||{}).locale]||{},r=void 0===n.replacement?"-":n.replacement,t=void 0===n.trim||n.trim,e=e.normalize().split("").reduce(function(e,t){return e+(o[t]||i[t]||(t===r?" ":t)).replace(n.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")},"");return n.strict&&(e=e.replace(/[^A-Za-z0-9\s]/g,"")),e=(e=t?e.trim():e).replace(/\s+/g,r),e=n.lower?e.toLowerCase():e}return e.extend=function(e){Object.assign(i,e)},e},e.exports=t(),e.exports.default=t()}}]);