!function s(r,a,l){function c(e,t){if(!a[e]){if(!r[e]){var i="function"==typeof require&&require;if(!t&&i)return i(e,!0);if(u)return u(e,!0);var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}var o=a[e]={exports:{}};r[e][0].call(o.exports,function(t){return c(r[e][1][t]||t)},o,o.exports,s,r,a,l)}return a[e].exports}for(var u="function"==typeof require&&require,t=0;t<l.length;t++)c(l[t]);return c}({1:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=n(t("../../index")),s=n(t("dom-css"));function n(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function c(t,e,i){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(i):o.value}})(t,e,i||t)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var d=function(){function n(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(e=l(this,u(n).call(this,t))).createExtraBound(),e.sections=null,e.dom.sections=Array.prototype.slice.call(t.sections,0),e}var t,e,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(n,o["default"]),t=n,(e=[{key:"createExtraBound",value:function(){var e=this;["getCache","inViewport"].forEach(function(t){return e[t]=e[t].bind(e)})}},{key:"resize",value:function(){var i=this;this.dom.sections.forEach(function(t,e){return(0,s.default)(t,{display:"block",position:"relative",top:0,transform:"none"})}),this.vars.bounding=this.dom.sections[this.dom.sections.length-1].getBoundingClientRect().bottom-(this.vars.native?0:this.vars.height),(0,s.default)(this.dom.section,"height",this.vars.bounding),this.getCache(),this.dom.sections.forEach(function(t,e){return(0,s.default)(t,{position:"fixed",width:"100%",top:i.sections[e].top})}),c(u(n.prototype),"resize",this).call(this)}},{key:"getCache",value:function(){var o=this;this.sections=[],this.dom.sections.forEach(function(t,e){var i=t.getBoundingClientRect(),n={el:t,state:!0,top:i.top,bottom:i.bottom,speed:"-1"};o.sections.push(n)})}},{key:"run",value:function(){this.dom.sections.forEach(this.inViewport),c(u(n.prototype),"run",this).call(this)}},{key:"inViewport",value:function(t,e){if(this.sections){var i=this.sections[e],n=this.vars.current*i.speed,o=Math.round(i.top+n);0<Math.round(i.bottom+n)&&o<this.vars.height?(t.style.display="block",t.style[this.prefix]=this.getTransform(n)):(t.style.display="none",t.style[this.prefix]="none")}}}])&&a(t.prototype,e),i&&a(t,i),n}();i.default=d},{"../../index":3,"dom-css":8}],2:[function(t,e,i){"use strict";var n;new(((n=t("./custom"))&&n.__esModule?n:{default:n}).default)({extends:!0,native:!0,section:document.querySelector(".vs-sections"),sections:document.querySelectorAll(".vs-split")}).init()},{"./custom":1}],3:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var l=n(t("dom-classes")),c=n(t("dom-create-element")),u=n(t("prefix")),h=n(t("virtual-scroll")),d=n(t("dom-events"));function n(t){return t&&t.__esModule?t:{default:t}}function v(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var o=function(){function i(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),this.createBound(),this.options=t,this.prefix=(0,u.default)("transform"),this.rAF=void 0,this.isRAFCanceled=!1;var e=this.constructor.name?this.constructor.name:"Smooth";this.extends=void 0===t.extends?this.constructor!==i:t.extends,this.callback=this.options.callback||null,this.vars={direction:this.options.direction||"vertical",native:this.options.native||!1,ease:this.options.ease||.075,preload:this.options.preload||!1,current:0,last:0,target:0,height:window.innerHeight,width:window.innerWidth,bounding:0,timer:null,ticking:!1},this.vs=this.vars.native?null:new h.default({limitInertia:this.options.vs&&this.options.vs.limitInertia||!1,mouseMultiplier:this.options.vs&&this.options.vs.mouseMultiplier||1,touchMultiplier:this.options.vs&&this.options.vs.touchMultiplier||1.5,firefoxMultiplier:this.options.vs&&this.options.vs.firefoxMultiplier||30,preventTouch:this.options.vs&&this.options.vs.preventTouch||!0}),this.dom={listener:this.options.listener||document.body,section:this.options.section||document.querySelector(".vs-section")||null,scrollbar:this.vars.native||this.options.noscrollbar?null:{state:{clicked:!1,x:0},el:(0,c.default)({selector:"div",styles:"vs-scrollbar vs-".concat(this.vars.direction," vs-scrollbar-").concat(e.toLowerCase())}),drag:{el:(0,c.default)({selector:"div",styles:"vs-scrolldrag"}),delta:0,height:50}}}}var t,e,n,o,s;function r(){return o.apply(this,arguments)}function a(){return s.apply(this,arguments)}return t=i,(e=[{key:"createBound",value:function(){var e=this;["run","calc","debounce","resize","mouseUp","mouseDown","mouseMove","calcScroll","scrollTo"].forEach(function(t){return e[t]=e[t].bind(e)})}},{key:"init",value:function(){this.addClasses(),this.vars.preload&&this.preloadImages(),this.vars.native?this.addFakeScrollHeight():this.options.noscrollbar||this.addFakeScrollBar(),this.addEvents(),this.resize()}},{key:"addClasses",value:function(){var t=this.vars.native?"native":"virtual",e="vertical"===this.vars.direction?"y":"x";l.default.add(this.dom.listener,"is-".concat(t,"-scroll")),l.default.add(this.dom.listener,"".concat(e,"-scroll"))}},{key:"preloadImages",value:function(){var i=this,n=Array.prototype.slice.call(this.dom.listener.querySelectorAll("img"),0);n.forEach(function(t){var e=document.createElement("img");d.default.once(e,"load",function(){n.splice(n.indexOf(t),1),0===n.length&&i.resize()}),e.src=t.getAttribute("src")})}},{key:"calc",value:function(t){var e="horizontal"==this.vars.direction?t.deltaX:t.deltaY;this.vars.target+=-1*e,this.clampTarget()}},{key:"debounce",value:function(){var t=this,e=this.dom.listener===document.body;this.vars.target="vertical"===this.vars.direction?e?window.scrollY||window.pageYOffset:this.dom.listener.scrollTop:e?window.scrollX||window.pageXOffset:this.dom.listener.scrollLeft,clearTimeout(this.vars.timer),this.vars.ticking||(this.vars.ticking=!0,l.default.add(this.dom.listener,"is-scrolling")),this.vars.timer=setTimeout(function(){t.vars.ticking=!1,l.default.remove(t.dom.listener,"is-scrolling")},200)}},{key:"run",value:function(){if(!this.isRAFCanceled){if(this.vars.current+=(this.vars.target-this.vars.current)*this.vars.ease,this.vars.current<.1&&(this.vars.current=0),this.requestAnimationFrame(),this.extends||(this.dom.section.style[this.prefix]=this.getTransform(-this.vars.current.toFixed(2))),!this.vars.native&&!this.options.noscrollbar){var t=this.dom.scrollbar.drag.height,e="vertical"===this.vars.direction?this.vars.height:this.vars.width,i=Math.abs(this.vars.current)/(this.vars.bounding/(e-t))+t/.5-t,n=Math.max(0,Math.min(i-t,i+t));this.dom.scrollbar.drag.el.style[this.prefix]=this.getTransform(n.toFixed(2))}this.callback&&this.vars.current!==this.vars.last&&this.callback(this.vars.current),this.vars.last=this.vars.current}}},{key:"getTransform",value:function(t){return"vertical"===this.vars.direction?"translate3d(0,".concat(t,"px,0)"):"translate3d(".concat(t,"px,0,0)")}},{key:"on",value:function(t){var e=!(0<arguments.length&&void 0!==t)||t;this.isRAFCanceled&&(this.isRAFCanceled=!1);var i=this.dom.listener===document.body?window:this.dom.listener;this.vars.native?d.default.on(i,"scroll",this.debounce):this.vs&&this.vs.on(this.calc),e&&this.requestAnimationFrame()}},{key:"off",value:function(t){var e=!(0<arguments.length&&void 0!==t)||t,i=this.dom.listener===document.body?window:this.dom.listener;this.vars.native?d.default.off(i,"scroll",this.debounce):this.vs&&this.vs.off(this.calc),e&&this.cancelAnimationFrame()}},{key:"requestAnimationFrame",value:(s=function(){this.rAF=requestAnimationFrame(this.run)},a.toString=function(){return s.toString()},a)},{key:"cancelAnimationFrame",value:(o=function(){this.isRAFCanceled=!0,cancelAnimationFrame(this.rAF)},r.toString=function(){return o.toString()},r)},{key:"addEvents",value:function(){this.on(),d.default.on(window,"resize",this.resize)}},{key:"removeEvents",value:function(){this.off(),d.default.off(window,"resize",this.resize)}},{key:"addFakeScrollBar",value:function(){this.dom.listener.appendChild(this.dom.scrollbar.el),this.dom.scrollbar.el.appendChild(this.dom.scrollbar.drag.el),d.default.on(this.dom.scrollbar.el,"click",this.calcScroll),d.default.on(this.dom.scrollbar.el,"mousedown",this.mouseDown),d.default.on(document,"mousemove",this.mouseMove),d.default.on(document,"mouseup",this.mouseUp)}},{key:"removeFakeScrollBar",value:function(){d.default.off(this.dom.scrollbar.el,"click",this.calcScroll),d.default.off(this.dom.scrollbar.el,"mousedown",this.mouseDown),d.default.off(document,"mousemove",this.mouseMove),d.default.off(document,"mouseup",this.mouseUp),this.dom.listener.removeChild(this.dom.scrollbar.el)}},{key:"mouseDown",value:function(t){t.preventDefault(),1==t.which&&(this.dom.scrollbar.state.clicked=!0)}},{key:"mouseUp",value:function(){this.dom.scrollbar.state.clicked=!1,l.default.remove(this.dom.listener,"is-dragging")}},{key:"mouseMove",value:function(t){this.dom.scrollbar.state.clicked&&this.calcScroll(t)}},{key:"addFakeScrollHeight",value:function(){this.dom.scroll=(0,c.default)({selector:"div",styles:"vs-scroll-view"}),this.dom.listener.appendChild(this.dom.scroll)}},{key:"removeFakeScrollHeight",value:function(){this.dom.listener.removeChild(this.dom.scroll)}},{key:"calcScroll",value:function(t){var e="vertical"==this.vars.direction?t.clientY:t.clientX,i="vertical"==this.vars.direction?this.vars.height:this.vars.width,n=e*(this.vars.bounding/i);l.default.add(this.dom.listener,"is-dragging"),this.vars.target=n,this.clampTarget(),this.dom.scrollbar&&(this.dom.scrollbar.drag.delta=this.vars.target)}},{key:"scrollTo",value:function(t){this.vars.native?"vertical"==this.vars.direction?window.scrollTo(0,t):window.scrollTo(t,0):(this.vars.target=t,this.clampTarget())}},{key:"resize",value:function(){var t="vertical"===this.vars.direction?"height":"width";if(this.vars.height=window.innerHeight,this.vars.width=window.innerWidth,!this.extends){var e=this.dom.section.getBoundingClientRect();this.vars.bounding="vertical"===this.vars.direction?e.height-(this.vars.native?0:this.vars.height):e.right-(this.vars.native?0:this.vars.width)}this.vars.native||this.options.noscrollbar?this.vars.native&&(this.dom.scroll.style[t]="".concat(this.vars.bounding,"px")):(this.dom.scrollbar.drag.height=this.vars.height*(this.vars.height/(this.vars.bounding+this.vars.height)),this.dom.scrollbar.drag.el.style[t]="".concat(this.dom.scrollbar.drag.height,"px")),this.vars.native||this.clampTarget()}},{key:"clampTarget",value:function(){this.vars.target=Math.round(Math.max(0,Math.min(this.vars.target,this.vars.bounding)))}},{key:"destroy",value:function(){this.vars.native?(l.default.remove(this.dom.listener,"is-native-scroll"),this.removeFakeScrollHeight()):(l.default.remove(this.dom.listener,"is-virtual-scroll"),this.options.noscrollbar||this.removeFakeScrollBar()),"vertical"===this.vars.direction?l.default.remove(this.dom.listener,"y-scroll"):l.default.remove(this.dom.listener,"x-scroll"),this.vars.current=0,this.vs&&(this.vs.destroy(),this.vs=null),this.removeEvents()}}])&&v(t.prototype,e),n&&v(t,n),i}();i.default=o,window.Smooth=o},{"dom-classes":6,"dom-create-element":7,"dom-events":9,prefix:14,"virtual-scroll":23}],4:[function(t,e,i){var n={animationIterationCount:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridColumn:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,stopOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0};e.exports=function(t,e){return"number"!=typeof e||n[t]?e:e+"px"}},{}],5:[function(t,e,i){"use strict";var s=Object.prototype.toString,r=Object.prototype.hasOwnProperty;function a(t,e){return function(){return t.apply(e,arguments)}}e.exports=function(t){if(!t)return console.warn("bindAll requires at least one argument.");var e=Array.prototype.slice.call(arguments,1);if(0===e.length)for(var i in t)r.call(t,i)&&"function"==typeof t[i]&&"[object Function]"==s.call(t[i])&&e.push(i);for(var n=0;n<e.length;n++){var o=e[n];t[o]=a(t[o],t)}}},{}],6:[function(t,e,i){var o=t("indexof"),n=/\s+/,s=Object.prototype.toString;function r(t){if(t.classList)return t.classList;var e=t.className.replace(/^\s+|\s+$/g,"").split(n);return""===e[0]&&e.shift(),e}function a(t,e){if(t.classList)t.classList.add(e);else{var i=r(t);~o(i,e)||i.push(e),t.className=i.join(" ")}}function l(t,e){return t.classList?t.classList.contains(e):!!~o(r(t),e)}function c(t,e){if("[object RegExp]"==s.call(e))return u(t,e);if(t.classList)t.classList.remove(e);else{var i=r(t),n=o(i,e);~n&&i.splice(n,1),t.className=i.join(" ")}}function u(t,e,i){for(var n=Array.prototype.slice.call(r(t)),o=0;o<n.length;o++)e.test(n[o])&&c(t,n[o])}e.exports=r,e.exports.add=a,e.exports.contains=l,e.exports.has=l,e.exports.toggle=function(t,e){if(t.classList)return t.classList.toggle(e);(l(t,e)?c:a)(t,e)},e.exports.remove=c,e.exports.removeMatching=u},{indexof:10}],7:[function(t,e,i){e.exports=function(t){t=t||{};var e=document.createElement(t.selector);if(t.attr)for(var i in t.attr)t.attr.hasOwnProperty(i)&&e.setAttribute(i,t.attr[i]);return"a"==t.selector&&t.link&&(e.href=t.link,t.target&&e.setAttribute("target",t.target)),"img"==t.selector&&t.src&&(e.src=t.src,t.lazyload&&(e.style.opacity=0,e.onload=function(){e.style.opacity=1})),t.id&&(e.id=t.id),t.styles&&(e.className=t.styles),t.html&&(e.innerHTML=t.html),t.children&&e.appendChild(t.children),e}},{}],8:[function(t,e,i){var a=t("prefix-style"),l=t("to-camel-case"),c={float:"cssFloat"},u=t("add-px-to-style");function n(t,e,i){var n,o,s,r=c[e];if(void 0===r&&(o=l(n=e),s=a(o),c[o]=c[n]=c[s]=s,r=s),r){if(void 0===i)return t.style[r];t.style[r]=u(r,i)}}function o(){2===arguments.length?"string"==typeof arguments[1]?arguments[0].style.cssText=arguments[1]:function(t,e){for(var i in e)e.hasOwnProperty(i)&&n(t,i,e[i])}(arguments[0],arguments[1]):n(arguments[0],arguments[1],arguments[2])}e.exports=o,e.exports.set=o,e.exports.get=function(i,t){return Array.isArray(t)?t.reduce(function(t,e){return t[e]=n(i,e||""),t},{}):n(i,t||"")}},{"add-px-to-style":4,"prefix-style":13,"to-camel-case":19}],9:[function(t,e,i){var o=t("synthetic-dom-events"),r=function(t,e,i,n){return t.addEventListener(e,i,n||!1)},a=function(t,e,i,n){return t.removeEventListener(e,i,n||!1)},n=function(t,e,i){var n=o(e,i);t.dispatchEvent(n)};document.addEventListener||(r=function(t,e,i){return t.attachEvent("on"+e,i)}),document.removeEventListener||(a=function(t,e,i){return t.detachEvent("on"+e,i)}),document.dispatchEvent||(n=function(t,e,i){var n=o(e,i);return t.fireEvent("on"+n.type,n)}),e.exports={on:r,off:a,once:function(i,n,o,s){r(i,n,function t(e){a(i,n,t,s),o(e)},s)},emit:n}},{"synthetic-dom-events":15}],10:[function(t,e,i){var n=[].indexOf;e.exports=function(t,e){if(n)return t.indexOf(e);for(var i=0;i<t.length;++i)if(t[i]===e)return i;return-1}},{}],11:[function(t,e,i){(function(){function t(t,e,i,n){this.stability=null!=t?Math.abs(t):8,this.sensitivity=null!=e?1+Math.abs(e):100,this.tolerance=null!=i?1+Math.abs(i):1.1,this.delay=null!=n?n:150,this.lastUpDeltas=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:e<=t;1<=e?t++:t--)i.push(null);return i}.call(this),this.lastDownDeltas=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:e<=t;1<=e?t++:t--)i.push(null);return i}.call(this),this.deltasTimestamp=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:e<=t;1<=e?t++:t--)i.push(null);return i}.call(this)}(null!=i?i:this).Lethargy=(t.prototype.check=function(t){var e;return null!=(t=t.originalEvent||t).wheelDelta?e=t.wheelDelta:null!=t.deltaY?e=-40*t.deltaY:null==t.detail&&0!==t.detail||(e=-40*t.detail),this.deltasTimestamp.push(Date.now()),this.deltasTimestamp.shift(),0<e?(this.lastUpDeltas.push(e),this.lastUpDeltas.shift(),this.isInertia(1)):(this.lastDownDeltas.push(e),this.lastDownDeltas.shift(),this.isInertia(-1))},t.prototype.isInertia=function(t){var e,i,n,o,s,r,a;return null===(e=-1===t?this.lastDownDeltas:this.lastUpDeltas)[0]?t:!(this.deltasTimestamp[2*this.stability-2]+this.delay>Date.now()&&e[0]===e[2*this.stability-1])&&(n=e.slice(0,this.stability),i=e.slice(this.stability,2*this.stability),a=n.reduce(function(t,e){return t+e}),s=i.reduce(function(t,e){return t+e}),r=a/n.length,o=s/i.length,Math.abs(r)<Math.abs(o*this.tolerance)&&this.sensitivity<Math.abs(o)&&t)},t.prototype.showLastUpDeltas=function(){return this.lastUpDeltas},t.prototype.showLastDownDeltas=function(){return this.lastDownDeltas},t)}).call(this)},{}],12:[function(t,e,i){"use strict";var l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"!==Object.keys(Object.assign({},n)).join("")?void 0:1}catch(t){return}}()?Object.assign:function(t,e){for(var i,n,o=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),s=1;s<arguments.length;s++){for(var r in i=Object(arguments[s]))c.call(i,r)&&(o[r]=i[r]);if(l){n=l(i);for(var a=0;a<n.length;a++)u.call(i,n[a])&&(o[n[a]]=i[n[a]])}}return o}},{}],13:[function(t,e,i){var s=null,r=["Webkit","Moz","O","ms"];e.exports=function(t){var e=(s=s||document.createElement("div")).style;if(t in e)return t;for(var i=t.charAt(0).toUpperCase()+t.slice(1),n=r.length;0<=n;n--){var o=r[n]+i;if(o in e)return o}return!1}},{}],14:[function(t,e,i){var o="undefined"!=typeof document?document.createElement("p").style:{},s=["O","ms","Moz","Webkit"],n=/([A-Z])/g,r={};function a(t){if(t=t.replace(/-([a-z])/g,function(t,e){return e.toUpperCase()}),void 0!==o[t])return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),i=s.length;i--;){var n=s[i]+e;if(void 0!==o[n])return n}return t}e.exports=function(t){return t in r?r[t]:r[t]=a(t)},e.exports.dash=function(t){return t=a(t),n.test(t)&&(t="-"+t.replace(n,"-$1"),n.lastIndex=0),t.toLowerCase()}},{}],15:[function(t,e,i){window;var p=document||{},m=(p.documentElement,!0);try{p.createEvent("KeyEvents")}catch(t){m=!1}e.exports=p.createEvent?function(t,e){e=e||{};var i=g(t),n=i;"KeyboardEvent"===i&&m&&(i="KeyEvents",n="KeyEvent");var o,s,r=p.createEvent(i),a="init"+n,l="function"==typeof r[a]?a:"initEvent",c=y[l],u=[],h={};e.type=t;for(var d=0;d<c.length;++d){var v=e[f=c[d]];void 0===v&&(v=r[f]),h[f]=!0,u.push(v)}for(var f in r[l].apply(r,u),"KeyboardEvent"===i&&(s=e,(o=r).ctrlKey==(s.ctrlKey||!1)&&o.altKey==(s.altKey||!1)&&o.shiftKey==(s.shiftKey||!1)&&o.metaKey==(s.metaKey||!1)&&o.keyCode==(s.keyCode||0)&&o.charCode==(s.charCode||0)||((o=document.createEvent("Event")).initEvent(s.type,s.bubbles,s.cancelable),o.ctrlKey=s.ctrlKey||!1,o.altKey=s.altKey||!1,o.shiftKey=s.shiftKey||!1,o.metaKey=s.metaKey||!1,o.keyCode=s.keyCode||0,o.charCode=s.charCode||0),r=o),e)h[f]||(r[f]=e[f]);return r}:function(t,e){e=e||{};var i=p.createEventObject();for(var n in i.type=t,e)void 0!==e[n]&&(i[n]=e[n]);return i};var y=t("./init.json"),o=t("./types.json"),g=function(){var e={};for(var t in o)for(var i=o[t],n=0;n<i.length;n++)e[i[n]]=t;return function(t){return e[t]||"Event"}}()},{"./init.json":16,"./types.json":17}],16:[function(t,e,i){e.exports={initEvent:["type","bubbles","cancelable"],initUIEvent:["type","bubbles","cancelable","view","detail"],initMouseEvent:["type","bubbles","cancelable","view","detail","screenX","screenY","clientX","clientY","ctrlKey","altKey","shiftKey","metaKey","button","relatedTarget"],initMutationEvent:["type","bubbles","cancelable","relatedNode","prevValue","newValue","attrName","attrChange"],initKeyboardEvent:["type","bubbles","cancelable","view","ctrlKey","altKey","shiftKey","metaKey","keyCode","charCode"],initKeyEvent:["type","bubbles","cancelable","view","ctrlKey","altKey","shiftKey","metaKey","keyCode","charCode"]}},{}],17:[function(t,e,i){e.exports={MouseEvent:["click","mousedown","mouseup","mouseover","mousemove","mouseout"],KeyboardEvent:["keydown","keyup","keypress"],MutationEvent:["DOMSubtreeModified","DOMNodeInserted","DOMNodeRemoved","DOMNodeRemovedFromDocument","DOMNodeInsertedIntoDocument","DOMAttrModified","DOMCharacterDataModified"],HTMLEvents:["load","unload","abort","error","select","change","submit","reset","focus","blur","resize","scroll"],UIEvent:["DOMFocusIn","DOMFocusOut","DOMActivate"]}},{}],18:[function(t,e,i){function n(){}n.prototype={on:function(t,e,i){var n=this.e||(this.e={});return(n[t]||(n[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){var n=this;function o(){n.off(t,o),e.apply(i,arguments)}return o._=e,this.on(t,o,i)},emit:function(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),n=0,o=i.length;n<o;n++)i[n].fn.apply(i[n].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),n=i[t],o=[];if(n&&e)for(var s=0,r=n.length;s<r;s++)n[s].fn!==e&&n[s].fn._!==e&&o.push(n[s]);return o.length?i[t]=o:delete i[t],this}},e.exports=n},{}],19:[function(t,e,i){var n=t("to-space-case");e.exports=function(t){return n(t).replace(/\s(\w)/g,function(t,e){return e.toUpperCase()})}},{"to-space-case":21}],20:[function(t,e,i){e.exports=function(t){return n.test(t)?t.toLowerCase():o.test(t)?(function(t){return t.replace(r,function(t,e){return e?" "+e:""})}(t)||t).toLowerCase():s.test(t)?function(t){return t.replace(a,function(t,e,i){return e+" "+i.toLowerCase().split("").join(" ")})}(t).toLowerCase():t.toLowerCase()};var n=/\s/,o=/(_|-|\.|:)/,s=/([a-z][A-Z]|[A-Z][a-z])/;var r=/[\W_]+(.|$)/g;var a=/(.)([A-Z]+)/g},{}],21:[function(t,e,i){var n=t("to-no-case");e.exports=function(t){return n(t).replace(/[\W_]+(.|$)/g,function(t,e){return e?" "+e:""}).trim()}},{"to-no-case":20}],22:[function(t,e,i){"use strict";e.exports=function(t){return JSON.parse(JSON.stringify(t))}},{}],23:[function(t,e,i){"use strict";var n=t("object-assign"),o=t("tiny-emitter"),s=t("lethargy").Lethargy,r=t("./support"),a=(t("./clone"),t("bindall-standalone")),l="virtualscroll";e.exports=f;var c=37,u=38,h=39,d=40,v=32;function f(t){a(this,"_onWheel","_onMouseWheel","_onTouchStart","_onTouchMove","_onKeyDown"),this.el=window,t&&t.el&&(this.el=t.el,delete t.el),this.options=n({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",limitInertia:!1},t),this.options.limitInertia&&(this._lethargy=new s),this._emitter=new o,this._event={y:0,x:0,deltaX:0,deltaY:0},this.touchStartX=null,this.touchStartY=null,this.bodyTouchAction=null,void 0!==this.options.passive&&(this.listenerOptions={passive:this.options.passive})}f.prototype._notify=function(t){var e=this._event;e.x+=e.deltaX,e.y+=e.deltaY,this._emitter.emit(l,{x:e.x,y:e.y,deltaX:e.deltaX,deltaY:e.deltaY,originalEvent:t})},f.prototype._onWheel=function(t){var e=this.options;if(!this._lethargy||!1!==this._lethargy.check(t)){var i=this._event;i.deltaX=t.wheelDeltaX||-1*t.deltaX,i.deltaY=t.wheelDeltaY||-1*t.deltaY,r.isFirefox&&1==t.deltaMode&&(i.deltaX*=e.firefoxMultiplier,i.deltaY*=e.firefoxMultiplier),i.deltaX*=e.mouseMultiplier,i.deltaY*=e.mouseMultiplier,this._notify(t)}},f.prototype._onMouseWheel=function(t){if(!this.options.limitInertia||!1!==this._lethargy.check(t)){var e=this._event;e.deltaX=t.wheelDeltaX?t.wheelDeltaX:0,e.deltaY=t.wheelDeltaY?t.wheelDeltaY:t.wheelDelta,this._notify(t)}},f.prototype._onTouchStart=function(t){var e=t.targetTouches?t.targetTouches[0]:t;this.touchStartX=e.pageX,this.touchStartY=e.pageY},f.prototype._onTouchMove=function(t){var e=this.options;e.preventTouch&&!t.target.classList.contains(e.unpreventTouchClass)&&t.preventDefault();var i=this._event,n=t.targetTouches?t.targetTouches[0]:t;i.deltaX=(n.pageX-this.touchStartX)*e.touchMultiplier,i.deltaY=(n.pageY-this.touchStartY)*e.touchMultiplier,this.touchStartX=n.pageX,this.touchStartY=n.pageY,this._notify(t)},f.prototype._onKeyDown=function(t){var e=this._event;e.deltaX=e.deltaY=0;var i=window.innerHeight-40;switch(t.keyCode){case c:case u:e.deltaY=this.options.keyStep;break;case h:case d:e.deltaY=-this.options.keyStep;break;case v&&t.shiftKey:e.deltaY=i;break;case v:e.deltaY=-i;break;default:return}this._notify(t)},f.prototype._bind=function(){r.hasWheelEvent&&this.el.addEventListener("wheel",this._onWheel,this.listenerOptions),r.hasMouseWheelEvent&&this.el.addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),r.hasTouch&&(this.el.addEventListener("touchstart",this._onTouchStart,this.listenerOptions),this.el.addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),r.hasPointer&&r.hasTouchWin&&(this.bodyTouchAction=document.body.style.msTouchAction,document.body.style.msTouchAction="none",this.el.addEventListener("MSPointerDown",this._onTouchStart,!0),this.el.addEventListener("MSPointerMove",this._onTouchMove,!0)),r.hasKeyDown&&document.addEventListener("keydown",this._onKeyDown)},f.prototype._unbind=function(){r.hasWheelEvent&&this.el.removeEventListener("wheel",this._onWheel),r.hasMouseWheelEvent&&this.el.removeEventListener("mousewheel",this._onMouseWheel),r.hasTouch&&(this.el.removeEventListener("touchstart",this._onTouchStart),this.el.removeEventListener("touchmove",this._onTouchMove)),r.hasPointer&&r.hasTouchWin&&(document.body.style.msTouchAction=this.bodyTouchAction,this.el.removeEventListener("MSPointerDown",this._onTouchStart,!0),this.el.removeEventListener("MSPointerMove",this._onTouchMove,!0)),r.hasKeyDown&&document.removeEventListener("keydown",this._onKeyDown)},f.prototype.on=function(t,e){this._emitter.on(l,t,e);var i=this._emitter.e;i&&i[l]&&1===i[l].length&&this._bind()},f.prototype.off=function(t,e){this._emitter.off(l,t,e);var i=this._emitter.e;(!i[l]||i[l].length<=0)&&this._unbind()},f.prototype.reset=function(){var t=this._event;t.x=0,t.y=0},f.prototype.destroy=function(){this._emitter.off(),this._unbind()}},{"./clone":22,"./support":24,"bindall-standalone":5,lethargy:11,"object-assign":12,"tiny-emitter":18}],24:[function(t,e,i){"use strict";e.exports={hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in document,hasTouchWin:navigator.msMaxTouchPoints&&1<navigator.msMaxTouchPoints,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:-1<navigator.userAgent.indexOf("Firefox")}},{}]},{},[2]);