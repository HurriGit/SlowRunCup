!function(t,e){for(var s in e)t[s]=e[s]}(exports,function(t){var e={};function s(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}return s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=26)}({26:function(t,e){!function(t,e){"use strict";let s={html:"",displayLength:4e3,inDuration:300,outDuration:375,classes:"",completeCallback:null,activationPercent:.8};class n{constructor(e){this.options=t.extend({},n.defaults,e),this.message=this.options.html,this.panning=!1,this.timeRemaining=this.options.displayLength,0===n._toasts.length&&n._createContainer(),n._toasts.push(this);let s=this._createToast();s.M_Toast=this,this.el=s,this.$el=t(s),this._animateIn(),this._setTimer()}static get defaults(){return s}static getInstance(t){return(t.jquery?t[0]:t).M_Toast}static _createContainer(){let t=document.createElement("div");t.setAttribute("id","toast-container"),t.addEventListener("touchstart",n._onDragStart),t.addEventListener("touchmove",n._onDragMove),t.addEventListener("touchend",n._onDragEnd),t.addEventListener("mousedown",n._onDragStart),document.addEventListener("mousemove",n._onDragMove),document.addEventListener("mouseup",n._onDragEnd),document.body.appendChild(t),n._container=t}static _removeContainer(){document.removeEventListener("mousemove",n._onDragMove),document.removeEventListener("mouseup",n._onDragEnd),t(n._container).remove(),n._container=null}static _onDragStart(e){if(e.target&&t(e.target).closest(".toast").length){let s=t(e.target).closest(".toast")[0].M_Toast;s.panning=!0,n._draggedToast=s,s.el.classList.add("panning"),s.el.style.transition="",s.startingXPos=n._xPos(e),s.time=Date.now(),s.xPos=n._xPos(e)}}static _onDragMove(t){if(n._draggedToast){t.preventDefault();let e=n._draggedToast;e.deltaX=Math.abs(e.xPos-n._xPos(t)),e.xPos=n._xPos(t),e.velocityX=e.deltaX/(Date.now()-e.time),e.time=Date.now();let s=e.xPos-e.startingXPos,a=e.el.offsetWidth*e.options.activationPercent;e.el.style.transform=`translateX(${s}px)`,e.el.style.opacity=1-Math.abs(s/a)}}static _onDragEnd(){if(n._draggedToast){let t=n._draggedToast;t.panning=!1,t.el.classList.remove("panning");let e=t.xPos-t.startingXPos,s=t.el.offsetWidth*t.options.activationPercent;Math.abs(e)>s||t.velocityX>1?(t.wasSwiped=!0,t.dismiss()):(t.el.style.transition="transform .2s, opacity .2s",t.el.style.transform="",t.el.style.opacity=""),n._draggedToast=null}}static _xPos(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}static dismissAll(){for(let t in n._toasts)n._toasts[t].dismiss()}_createToast(){let e=document.createElement("div");return e.classList.add("toast"),this.options.classes.length&&t(e).addClass(this.options.classes),("object"==typeof HTMLElement?this.message instanceof HTMLElement:this.message&&"object"==typeof this.message&&null!==this.message&&1===this.message.nodeType&&"string"==typeof this.message.nodeName)?e.appendChild(this.message):this.message.jquery?t(e).append(this.message[0]):e.innerHTML=this.message,n._container.appendChild(e),e}_animateIn(){e({targets:this.el,top:0,opacity:1,duration:this.options.inDuration,easing:"easeOutCubic"})}_setTimer(){this.timeRemaining!==1/0&&(this.counterInterval=setInterval(()=>{this.panning||(this.timeRemaining-=20),this.timeRemaining<=0&&this.dismiss()},20))}dismiss(){window.clearInterval(this.counterInterval);let t=this.el.offsetWidth*this.options.activationPercent;this.wasSwiped&&(this.el.style.transition="transform .05s, opacity .05s",this.el.style.transform=`translateX(${t}px)`,this.el.style.opacity=0),e({targets:this.el,opacity:0,marginTop:-40,duration:this.options.outDuration,easing:"easeOutExpo",complete:()=>{"function"==typeof this.options.completeCallback&&this.options.completeCallback(),this.$el.remove(),n._toasts.splice(n._toasts.indexOf(this),1),0===n._toasts.length&&n._removeContainer()}})}}n._toasts=[],n._container=null,n._draggedToast=null,M.Toast=n,M.toast=function(t){return new n(t)}}(cash,M.anime)}}));