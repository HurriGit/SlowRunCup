!function(t,e){for(var n in e)t[n]=e[n]}(exports,function(t){var e={};function n(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}({2:function(t,e){!function(t,e){"use strict";let n={direction:"top",hoverEnabled:!0,toolbarEnabled:!1};t.fn.reverse=[].reverse;class s extends Component{constructor(e,n){super(s,e,n),this.el.M_FloatingActionButton=this,this.options=t.extend({},s.defaults,n),this.isOpen=!1,this.$anchor=this.$el.children("a").first(),this.$menu=this.$el.children("ul").first(),this.$floatingBtns=this.$el.find("ul .btn-floating"),this.$floatingBtnsReverse=this.$el.find("ul .btn-floating").reverse(),this.offsetY=0,this.offsetX=0,this.$el.addClass("direction-"+this.options.direction),"top"===this.options.direction?this.offsetY=40:"right"===this.options.direction?this.offsetX=-40:"bottom"===this.options.direction?this.offsetY=-40:this.offsetX=40,this._setupEventHandlers()}static get defaults(){return n}static init(t,e){return super.init(this,t,e)}static getInstance(t){return(t.jquery?t[0]:t).M_FloatingActionButton}destroy(){this._removeEventHandlers(),this.el.M_FloatingActionButton=void 0}_setupEventHandlers(){this._handleFABClickBound=this._handleFABClick.bind(this),this._handleOpenBound=this.open.bind(this),this._handleCloseBound=this.close.bind(this),this.options.hoverEnabled&&!this.options.toolbarEnabled?(this.el.addEventListener("mouseenter",this._handleOpenBound),this.el.addEventListener("mouseleave",this._handleCloseBound)):this.el.addEventListener("click",this._handleFABClickBound)}_removeEventHandlers(){this.options.hoverEnabled&&!this.options.toolbarEnabled?(this.el.removeEventListener("mouseenter",this._handleOpenBound),this.el.removeEventListener("mouseleave",this._handleCloseBound)):this.el.removeEventListener("click",this._handleFABClickBound)}_handleFABClick(){this.isOpen?this.close():this.open()}_handleDocumentClick(e){t(e.target).closest(this.$menu).length||this.close()}open(){this.isOpen||(this.options.toolbarEnabled?this._animateInToolbar():this._animateInFAB(),this.isOpen=!0)}close(){this.isOpen&&(this.options.toolbarEnabled?(window.removeEventListener("scroll",this._handleCloseBound,!0),document.body.removeEventListener("click",this._handleDocumentClickBound,!0),this._animateOutToolbar()):this._animateOutFAB(),this.isOpen=!1)}_animateInFAB(){this.$el.addClass("active");let t=0;this.$floatingBtnsReverse.each(n=>{e({targets:n,opacity:1,scale:[.4,1],translateY:[this.offsetY,0],translateX:[this.offsetX,0],duration:275,delay:t,easing:"easeInOutQuad"}),t+=40})}_animateOutFAB(){this.$floatingBtnsReverse.each(t=>{e.remove(t),e({targets:t,opacity:0,scale:.4,translateY:this.offsetY,translateX:this.offsetX,duration:175,easing:"easeOutQuad",complete:()=>{this.$el.removeClass("active")}})})}_animateInToolbar(){let e,n=window.innerWidth,s=window.innerHeight,i=this.el.getBoundingClientRect(),o=t('<div class="fab-backdrop"></div>'),r=this.$anchor.css("background-color");this.$anchor.append(o),this.offsetX=i.left-n/2+i.width/2,this.offsetY=s-i.bottom,e=n/o[0].clientWidth,this.btnBottom=i.bottom,this.btnLeft=i.left,this.btnWidth=i.width,this.$el.addClass("active"),this.$el.css({"text-align":"center",width:"100%",bottom:0,left:0,transform:"translateX("+this.offsetX+"px)",transition:"none"}),this.$anchor.css({transform:"translateY("+-this.offsetY+"px)",transition:"none"}),o.css({"background-color":r}),setTimeout(()=>{this.$el.css({transform:"",transition:"transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"}),this.$anchor.css({overflow:"visible",transform:"",transition:"transform .2s"}),setTimeout(()=>{this.$el.css({overflow:"hidden","background-color":r}),o.css({transform:"scale("+e+")",transition:"transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"}),this.$menu.children("li").children("a").css({opacity:1}),this._handleDocumentClickBound=this._handleDocumentClick.bind(this),window.addEventListener("scroll",this._handleCloseBound,!0),document.body.addEventListener("click",this._handleDocumentClickBound,!0)},100)},0)}_animateOutToolbar(){let t=window.innerWidth,e=window.innerHeight,n=this.$el.find(".fab-backdrop"),s=this.$anchor.css("background-color");this.offsetX=this.btnLeft-t/2+this.btnWidth/2,this.offsetY=e-this.btnBottom,this.$el.removeClass("active"),this.$el.css({"background-color":"transparent",transition:"none"}),this.$anchor.css({transition:"none"}),n.css({transform:"scale(0)","background-color":s}),this.$menu.children("li").children("a").css({opacity:""}),setTimeout(()=>{n.remove(),this.$el.css({"text-align":"",width:"",bottom:"",left:"",overflow:"","background-color":"",transform:"translate3d("+-this.offsetX+"px,0,0)"}),this.$anchor.css({overflow:"",transform:"translate3d(0,"+this.offsetY+"px,0)"}),setTimeout(()=>{this.$el.css({transform:"translate3d(0,0,0)",transition:"transform .2s"}),this.$anchor.css({transform:"translate3d(0,0,0)",transition:"transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"})},20)},200)}}M.FloatingActionButton=s,M.jQueryLoaded&&M.initializeJqueryWrapper(s,"floatingActionButton","M_FloatingActionButton")}(cash,M.anime)}}));