!function(t,e){for(var i in e)t[i]=e[i]}(exports,function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=7)}({7:function(t,e){!function(t){"use strict";let e={data:[],placeholder:"",secondaryPlaceholder:"",autocompleteOptions:{},limit:1/0,onChipAdd:null,onChipSelect:null,onChipDelete:null};class i extends Component{constructor(e,s){super(i,e,s),this.el.M_Chips=this,this.options=t.extend({},i.defaults,s),this.$el.addClass("chips input-field"),this.chipsData=[],this.$chips=t(),this._setupInput(),this.hasAutocomplete=Object.keys(this.options.autocompleteOptions).length>0,this.$input.attr("id")||this.$input.attr("id",M.guid()),this.options.data.length&&(this.chipsData=this.options.data,this._renderChips(this.chipsData)),this.hasAutocomplete&&this._setupAutocomplete(),this._setPlaceholder(),this._setupLabel(),this._setupEventHandlers()}static get defaults(){return e}static init(t,e){return super.init(this,t,e)}static getInstance(t){return(t.jquery?t[0]:t).M_Chips}getData(){return this.chipsData}destroy(){this._removeEventHandlers(),this.$chips.remove(),this.el.M_Chips=void 0}_setupEventHandlers(){this._handleChipClickBound=this._handleChipClick.bind(this),this._handleInputKeydownBound=this._handleInputKeydown.bind(this),this._handleInputFocusBound=this._handleInputFocus.bind(this),this._handleInputBlurBound=this._handleInputBlur.bind(this),this.el.addEventListener("click",this._handleChipClickBound),document.addEventListener("keydown",i._handleChipsKeydown),document.addEventListener("keyup",i._handleChipsKeyup),this.el.addEventListener("blur",i._handleChipsBlur,!0),this.$input[0].addEventListener("focus",this._handleInputFocusBound),this.$input[0].addEventListener("blur",this._handleInputBlurBound),this.$input[0].addEventListener("keydown",this._handleInputKeydownBound)}_removeEventHandlers(){this.el.removeEventListener("click",this._handleChipClickBound),document.removeEventListener("keydown",i._handleChipsKeydown),document.removeEventListener("keyup",i._handleChipsKeyup),this.el.removeEventListener("blur",i._handleChipsBlur,!0),this.$input[0].removeEventListener("focus",this._handleInputFocusBound),this.$input[0].removeEventListener("blur",this._handleInputBlurBound),this.$input[0].removeEventListener("keydown",this._handleInputKeydownBound)}_handleChipClick(e){let i=t(e.target).closest(".chip"),s=t(e.target).is(".close");if(i.length){let t=i.index();s?(this.deleteChip(t),this.$input[0].focus()):this.selectChip(t)}else this.$input[0].focus()}static _handleChipsKeydown(e){i._keydown=!0;let s=t(e.target).closest(".chips"),n=e.target&&s.length;if(t(e.target).is("input, textarea")||!n)return;let h=s[0].M_Chips;if(8===e.keyCode||46===e.keyCode){e.preventDefault();let t=h.chipsData.length;if(h._selectedChip){let e=h._selectedChip.index();h.deleteChip(e),h._selectedChip=null,t=Math.max(e-1,0)}h.chipsData.length&&h.selectChip(t)}else if(37===e.keyCode){if(h._selectedChip){let t=h._selectedChip.index()-1;if(t<0)return;h.selectChip(t)}}else if(39===e.keyCode&&h._selectedChip){let t=h._selectedChip.index()+1;t>=h.chipsData.length?h.$input[0].focus():h.selectChip(t)}}static _handleChipsKeyup(t){i._keydown=!1}static _handleChipsBlur(e){if(!i._keydown){t(e.target).closest(".chips")[0].M_Chips._selectedChip=null}}_handleInputFocus(){this.$el.addClass("focus")}_handleInputBlur(){this.$el.removeClass("focus")}_handleInputKeydown(t){if(i._keydown=!0,13===t.keyCode){if(this.hasAutocomplete&&this.autocomplete&&this.autocomplete.isOpen)return;t.preventDefault(),this.addChip({tag:this.$input[0].value}),this.$input[0].value=""}else 8!==t.keyCode&&37!==t.keyCode||""!==this.$input[0].value||!this.chipsData.length||(t.preventDefault(),this.selectChip(this.chipsData.length-1))}_renderChip(e){if(!e.tag)return;let i=document.createElement("div"),s=document.createElement("i");if(i.classList.add("chip"),i.textContent=e.tag,i.setAttribute("tabindex",0),t(s).addClass("material-icons close"),s.textContent="close",e.image){let t=document.createElement("img");t.setAttribute("src",e.image),i.insertBefore(t,i.firstChild)}return i.appendChild(s),i}_renderChips(){this.$chips.remove();for(let t=0;t<this.chipsData.length;t++){let e=this._renderChip(this.chipsData[t]);this.$el.append(e),this.$chips.add(e)}this.$el.append(this.$input[0])}_setupAutocomplete(){this.options.autocompleteOptions.onAutocomplete=t=>{this.addChip({tag:t}),this.$input[0].value="",this.$input[0].focus()},this.autocomplete=M.Autocomplete.init(this.$input[0],this.options.autocompleteOptions)}_setupInput(){this.$input=this.$el.find("input"),this.$input.length||(this.$input=t("<input></input>"),this.$el.append(this.$input)),this.$input.addClass("input")}_setupLabel(){this.$label=this.$el.find("label"),this.$label.length&&this.$label.setAttribute("for",this.$input.attr("id"))}_setPlaceholder(){void 0!==this.chipsData&&!this.chipsData.length&&this.options.placeholder?t(this.$input).prop("placeholder",this.options.placeholder):(void 0===this.chipsData||this.chipsData.length)&&this.options.secondaryPlaceholder&&t(this.$input).prop("placeholder",this.options.secondaryPlaceholder)}_isValid(t){if(t.hasOwnProperty("tag")&&""!==t.tag){let e=!1;for(let i=0;i<this.chipsData.length;i++)if(this.chipsData[i].tag===t.tag){e=!0;break}return!e}return!1}addChip(e){if(!this._isValid(e)||this.chipsData.length>=this.options.limit)return;let i=this._renderChip(e);this.$chips.add(i),this.chipsData.push(e),t(this.$input).before(i),this._setPlaceholder(),"function"==typeof this.options.onChipAdd&&this.options.onChipAdd.call(this,this.$el,i)}deleteChip(e){let i=this.$chips.eq(e);this.$chips.eq(e).remove(),this.$chips=this.$chips.filter((function(e){return t(e).index()>=0})),this.chipsData.splice(e,1),this._setPlaceholder(),"function"==typeof this.options.onChipDelete&&this.options.onChipDelete.call(this,this.$el,i[0])}selectChip(t){let e=this.$chips.eq(t);this._selectedChip=e,e[0].focus(),"function"==typeof this.options.onChipSelect&&this.options.onChipSelect.call(this,this.$el,e[0])}}i._keydown=!1,M.Chips=i,M.jQueryLoaded&&M.initializeJqueryWrapper(i,"chips","M_Chips"),t(document).ready((function(){t(document.body).on("click",".chip .close",(function(){let e=t(this).closest(".chips");e.length&&e[0].M_Chips||t(this).closest(".chip").remove()}))}))}(cash)}}));