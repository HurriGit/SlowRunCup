!function(t,e){for(var s in e)t[s]=e[s]}(exports,function(t){var e={};function s(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}return s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=17)}({17:function(t,e){!function(t){"use strict";let e={top:0,bottom:1/0,offset:0,onPositionChange:null};class s extends Component{constructor(e,n){super(s,e,n),this.el.M_Pushpin=this,this.options=t.extend({},s.defaults,n),this.originalOffset=this.el.offsetTop,s._pushpins.push(this),this._setupEventHandlers(),this._updatePosition()}static get defaults(){return e}static init(t,e){return super.init(this,t,e)}static getInstance(t){return(t.jquery?t[0]:t).M_Pushpin}destroy(){this.el.style.top=null,this._removePinClasses(),this._removeEventHandlers();let t=s._pushpins.indexOf(this);s._pushpins.splice(t,1)}static _updateElements(){for(let t in s._pushpins){s._pushpins[t]._updatePosition()}}_setupEventHandlers(){document.addEventListener("scroll",s._updateElements)}_removeEventHandlers(){document.removeEventListener("scroll",s._updateElements)}_updatePosition(){let t=M.getDocumentScrollTop()+this.options.offset;this.options.top<=t&&this.options.bottom>=t&&!this.el.classList.contains("pinned")&&(this._removePinClasses(),this.el.style.top=this.options.offset+"px",this.el.classList.add("pinned"),"function"==typeof this.options.onPositionChange&&this.options.onPositionChange.call(this,"pinned")),t<this.options.top&&!this.el.classList.contains("pin-top")&&(this._removePinClasses(),this.el.style.top=0,this.el.classList.add("pin-top"),"function"==typeof this.options.onPositionChange&&this.options.onPositionChange.call(this,"pin-top")),t>this.options.bottom&&!this.el.classList.contains("pin-bottom")&&(this._removePinClasses(),this.el.classList.add("pin-bottom"),this.el.style.top=this.options.bottom-this.originalOffset+"px","function"==typeof this.options.onPositionChange&&this.options.onPositionChange.call(this,"pin-bottom"))}_removePinClasses(){this.el.classList.remove("pin-top"),this.el.classList.remove("pinned"),this.el.classList.remove("pin-bottom")}}s._pushpins=[],M.Pushpin=s,M.jQueryLoaded&&M.initializeJqueryWrapper(s,"pushpin","M_Pushpin")}(cash)}}));