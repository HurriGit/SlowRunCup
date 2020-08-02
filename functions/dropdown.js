!function(e,t){for(var o in t)e[o]=t[o]}(exports,function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=11)}({11:function(e,t){!function(e,t){"use strict";let o={alignment:"left",autoFocus:!0,constrainWidth:!0,container:null,coverTrigger:!0,closeOnClick:!0,hover:!1,inDuration:150,outDuration:250,onOpenStart:null,onOpenEnd:null,onCloseStart:null,onCloseEnd:null,onItemClick:null};class n extends Component{constructor(t,o){super(n,t,o),this.el.M_Dropdown=this,n._dropdowns.push(this),this.id=M.getIdFromTrigger(t),this.dropdownEl=document.getElementById(this.id),this.$dropdownEl=e(this.dropdownEl),this.options=e.extend({},n.defaults,o),this.isOpen=!1,this.isScrollable=!1,this.isTouchMoving=!1,this.focusedIndex=-1,this.filterQuery=[],this.options.container?e(this.options.container).append(this.dropdownEl):this.$el.after(this.dropdownEl),this._makeDropdownFocusable(),this._resetFilterQueryBound=this._resetFilterQuery.bind(this),this._handleDocumentClickBound=this._handleDocumentClick.bind(this),this._handleDocumentTouchmoveBound=this._handleDocumentTouchmove.bind(this),this._handleDropdownClickBound=this._handleDropdownClick.bind(this),this._handleDropdownKeydownBound=this._handleDropdownKeydown.bind(this),this._handleTriggerKeydownBound=this._handleTriggerKeydown.bind(this),this._setupEventHandlers()}static get defaults(){return o}static init(e,t){return super.init(this,e,t)}static getInstance(e){return(e.jquery?e[0]:e).M_Dropdown}destroy(){this._resetDropdownStyles(),this._removeEventHandlers(),n._dropdowns.splice(n._dropdowns.indexOf(this),1),this.el.M_Dropdown=void 0}_setupEventHandlers(){this.el.addEventListener("keydown",this._handleTriggerKeydownBound),this.dropdownEl.addEventListener("click",this._handleDropdownClickBound),this.options.hover?(this._handleMouseEnterBound=this._handleMouseEnter.bind(this),this.el.addEventListener("mouseenter",this._handleMouseEnterBound),this._handleMouseLeaveBound=this._handleMouseLeave.bind(this),this.el.addEventListener("mouseleave",this._handleMouseLeaveBound),this.dropdownEl.addEventListener("mouseleave",this._handleMouseLeaveBound)):(this._handleClickBound=this._handleClick.bind(this),this.el.addEventListener("click",this._handleClickBound))}_removeEventHandlers(){this.el.removeEventListener("keydown",this._handleTriggerKeydownBound),this.dropdownEl.removeEventListener("click",this._handleDropdownClickBound),this.options.hover?(this.el.removeEventListener("mouseenter",this._handleMouseEnterBound),this.el.removeEventListener("mouseleave",this._handleMouseLeaveBound),this.dropdownEl.removeEventListener("mouseleave",this._handleMouseLeaveBound)):this.el.removeEventListener("click",this._handleClickBound)}_setupTemporaryEventHandlers(){document.body.addEventListener("click",this._handleDocumentClickBound,!0),document.body.addEventListener("touchend",this._handleDocumentClickBound),document.body.addEventListener("touchmove",this._handleDocumentTouchmoveBound),this.dropdownEl.addEventListener("keydown",this._handleDropdownKeydownBound)}_removeTemporaryEventHandlers(){document.body.removeEventListener("click",this._handleDocumentClickBound,!0),document.body.removeEventListener("touchend",this._handleDocumentClickBound),document.body.removeEventListener("touchmove",this._handleDocumentTouchmoveBound),this.dropdownEl.removeEventListener("keydown",this._handleDropdownKeydownBound)}_handleClick(e){e.preventDefault(),this.open()}_handleMouseEnter(){this.open()}_handleMouseLeave(t){let o=t.toElement||t.relatedTarget,n=!!e(o).closest(".dropdown-content").length,i=!1,s=e(o).closest(".dropdown-trigger");s.length&&s[0].M_Dropdown&&s[0].M_Dropdown.isOpen&&(i=!0),i||n||this.close()}_handleDocumentClick(t){let o=e(t.target);this.options.closeOnClick&&o.closest(".dropdown-content").length&&!this.isTouchMoving?setTimeout(()=>{this.close()},0):!o.closest(".dropdown-trigger").length&&o.closest(".dropdown-content").length||setTimeout(()=>{this.close()},0),this.isTouchMoving=!1}_handleTriggerKeydown(e){e.which!==M.keys.ARROW_DOWN&&e.which!==M.keys.ENTER||this.isOpen||(e.preventDefault(),this.open())}_handleDocumentTouchmove(t){e(t.target).closest(".dropdown-content").length&&(this.isTouchMoving=!0)}_handleDropdownClick(t){if("function"==typeof this.options.onItemClick){let o=e(t.target).closest("li")[0];this.options.onItemClick.call(this,o)}}_handleDropdownKeydown(t){if(t.which===M.keys.TAB)t.preventDefault(),this.close();else if(t.which!==M.keys.ARROW_DOWN&&t.which!==M.keys.ARROW_UP||!this.isOpen)if(t.which===M.keys.ENTER&&this.isOpen){let t=this.dropdownEl.children[this.focusedIndex],o=e(t).find("a, button").first();o.length?o[0].click():t&&t.click()}else t.which===M.keys.ESC&&this.isOpen&&(t.preventDefault(),this.close());else{t.preventDefault();let e=t.which===M.keys.ARROW_DOWN?1:-1,o=this.focusedIndex,n=!1;do{if(o+=e,this.dropdownEl.children[o]&&-1!==this.dropdownEl.children[o].tabIndex){n=!0;break}}while(o<this.dropdownEl.children.length&&o>=0);n&&(this.focusedIndex=o,this._focusFocusedItem())}let o=String.fromCharCode(t.which).toLowerCase();if(o&&-1===[9,13,27,38,40].indexOf(t.which)){this.filterQuery.push(o);let t=this.filterQuery.join(""),n=e(this.dropdownEl).find("li").filter(o=>0===e(o).text().toLowerCase().indexOf(t))[0];n&&(this.focusedIndex=e(n).index(),this._focusFocusedItem())}this.filterTimeout=setTimeout(this._resetFilterQueryBound,1e3)}_resetFilterQuery(){this.filterQuery=[]}_resetDropdownStyles(){this.$dropdownEl.css({display:"",width:"",height:"",left:"",top:"","transform-origin":"",transform:"",opacity:""})}_makeDropdownFocusable(){this.dropdownEl.tabIndex=0,e(this.dropdownEl).children().each((function(e){e.getAttribute("tabindex")||e.setAttribute("tabindex",0)}))}_focusFocusedItem(){this.focusedIndex>=0&&this.focusedIndex<this.dropdownEl.children.length&&this.options.autoFocus&&this.dropdownEl.children[this.focusedIndex].focus()}_getDropdownPosition(){this.el.offsetParent.getBoundingClientRect();let e=this.el.getBoundingClientRect(),t=this.dropdownEl.getBoundingClientRect(),o=t.height,n=t.width,i=e.left-t.left,s=e.top-t.top,d={left:i,top:s,height:o,width:n},h=this.dropdownEl.offsetParent?this.dropdownEl.offsetParent:this.dropdownEl.parentNode,r=M.checkPossibleAlignments(this.el,h,d,this.options.coverTrigger?0:e.height),l="top",c=this.options.alignment;if(s+=this.options.coverTrigger?0:e.height,this.isScrollable=!1,r.top||(r.bottom?l="bottom":(this.isScrollable=!0,r.spaceOnTop>r.spaceOnBottom?(l="bottom",o+=r.spaceOnTop,s-=r.spaceOnTop):o+=r.spaceOnBottom)),!r[c]){let e="left"===c?"right":"left";r[e]?c=e:r.spaceOnLeft>r.spaceOnRight?(c="right",n+=r.spaceOnLeft,i-=r.spaceOnLeft):(c="left",n+=r.spaceOnRight)}return"bottom"===l&&(s=s-t.height+(this.options.coverTrigger?e.height:0)),"right"===c&&(i=i-t.width+e.width),{x:i,y:s,verticalAlignment:l,horizontalAlignment:c,height:o,width:n}}_animateIn(){t.remove(this.dropdownEl),t({targets:this.dropdownEl,opacity:{value:[0,1],easing:"easeOutQuad"},scaleX:[.3,1],scaleY:[.3,1],duration:this.options.inDuration,easing:"easeOutQuint",complete:e=>{this.options.autoFocus&&this.dropdownEl.focus(),"function"==typeof this.options.onOpenEnd&&this.options.onOpenEnd.call(this,this.el)}})}_animateOut(){t.remove(this.dropdownEl),t({targets:this.dropdownEl,opacity:{value:0,easing:"easeOutQuint"},scaleX:.3,scaleY:.3,duration:this.options.outDuration,easing:"easeOutQuint",complete:e=>{this._resetDropdownStyles(),"function"==typeof this.options.onCloseEnd&&this.options.onCloseEnd.call(this,this.el)}})}_placeDropdown(){let e=this.options.constrainWidth?this.el.getBoundingClientRect().width:this.dropdownEl.getBoundingClientRect().width;this.dropdownEl.style.width=e+"px";let t=this._getDropdownPosition();this.dropdownEl.style.left=t.x+"px",this.dropdownEl.style.top=t.y+"px",this.dropdownEl.style.height=t.height+"px",this.dropdownEl.style.width=t.width+"px",this.dropdownEl.style.transformOrigin=`${"left"===t.horizontalAlignment?"0":"100%"} ${"top"===t.verticalAlignment?"0":"100%"}`}open(){this.isOpen||(this.isOpen=!0,"function"==typeof this.options.onOpenStart&&this.options.onOpenStart.call(this,this.el),this._resetDropdownStyles(),this.dropdownEl.style.display="block",this._placeDropdown(),this._animateIn(),this._setupTemporaryEventHandlers())}close(){this.isOpen&&(this.isOpen=!1,this.focusedIndex=-1,"function"==typeof this.options.onCloseStart&&this.options.onCloseStart.call(this,this.el),this._animateOut(),this._removeTemporaryEventHandlers(),this.options.autoFocus&&this.el.focus())}recalculateDimensions(){this.isOpen&&(this.$dropdownEl.css({width:"",height:"",left:"",top:"","transform-origin":""}),this._placeDropdown())}}n._dropdowns=[],M.Dropdown=n,M.jQueryLoaded&&M.initializeJqueryWrapper(n,"dropdown","M_Dropdown")}(cash,M.anime)}}));