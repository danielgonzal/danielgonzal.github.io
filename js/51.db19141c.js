"use strict";(self["webpackChunkportafolio"]=self["webpackChunkportafolio"]||[]).push([[51],{2051:function(t,e,n){n.r(e),n.d(e,{default:function(){return Vu}});n(6699);var s=n(9964),i=n(6750),r=n(6878),o=n(5352),a=r.Z.extend({name:"v-progress-circular",directives:{intersect:i.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,o.kb)(this.calculatedSize),width:(0,o.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(t,e,n){this.isVisible=n}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),l=a,h=n(144),u=n(4101);function c(t,e){return()=>(0,u.Kd)(`The ${t} component must be used inside a ${e}`)}function d(t,e,n){const s=e&&n?{register:c(e,n),unregister:c(e,n)}:null;return h.ZP.extend({name:"registrable-inject",inject:{[t]:{default:s}}})}function f(t,e,n){return d(t,e,n).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(){this.$emit("change")}}})}f("itemGroup");function p(t="value",e="input"){return h.ZP.extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(n){!!n!==this[t]&&this.$emit(e,n)}}})}p();var g=n(4390),m=n(4263),y=n(8860),v=n(4338),w=n(7678);const b=(0,w.Z)(s.Z,y.Z,m.Z,v.Z,f("btnToggle"),p("inputValue"));var E=b.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...y.Z.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return g.Z.options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,u.fK)(t,e,this)}))},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(l,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:n,data:s}=this.generateRouteLink(),i=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===n&&(s.attrs.type=this.type,s.attrs.disabled=this.disabled),s.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(n,this.disabled?s:i(this.color,s),e)}}),T=n(4324),S=T.Z,I=n(6669),C=(0,w.Z)(I.Z).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render(t,e){const{children:n,listeners:s,props:i}=e,a={staticClass:"v-label",class:{"v-label--active":i.value,"v-label--is-disabled":i.disabled,...(0,I.X)(e)},attrs:{for:i.for,"aria-hidden":!i.for},on:s,style:{left:(0,o.kb)(i.left),right:(0,o.kb)(i.right),position:i.absolute?"absolute":"relative"},ref:"label"};return t("label",r.Z.options.methods.setTextColor(i.focused&&i.color,a),n)}}),A=C,D=(0,w.Z)(r.Z,I.Z).extend({name:"v-messages",props:{value:{type:Array,default:()=>[]}},methods:{genChildren(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e},(0,o.z9)(this,"default",{message:t,key:e})||[t])}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),N=D,k=n(2500);const x=(0,w.Z)(r.Z,d("form"),I.Z);var _=x.extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:()=>[]},messages:{type:[String,Array],default:()=>[]},readonly:Boolean,rules:{type:Array,default:()=>[]},success:Boolean,successMessages:{type:[String,Array],default:()=>[]},validateOnBlur:Boolean,value:{required:!1}},data(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess(){return this.internalSuccessMessages.length>0||this.success},externalError(){return this.internalErrorMessages.length>0||this.error},hasMessages(){return this.validationTarget.length>0},hasState(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages(){return this.genInternalMessages(this.errorMessages)},internalMessages(){return this.genInternalMessages(this.messages)},internalSuccessMessages(){return this.genInternalMessages(this.successMessages)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",t)}},isDisabled(){return this.disabled||!!this.form&&this.form.disabled},isInteractive(){return!this.isDisabled&&!this.isReadonly},isReadonly(){return this.readonly||!!this.form&&this.form.readonly},shouldValidate(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler(t,e){(0,o.vZ)(t,e)||this.validate()},deep:!0},internalValue(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused(t){t||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting(){setTimeout((()=>{this.hasInput=!1,this.hasFocused=!1,this.isResetting=!1,this.validate()}),0)},hasError(t){this.shouldValidate&&this.$emit("update:error",t)},value(t){this.lazyValue=t}},beforeMount(){this.validate()},created(){this.form&&this.form.register(this)},beforeDestroy(){this.form&&this.form.unregister(this)},methods:{genInternalMessages(t){return t?Array.isArray(t)?t:[t]:[]},reset(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:null},resetValidation(){this.isResetting=!0},validate(t=!1,e){const n=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(let s=0;s<this.rules.length;s++){const t=this.rules[s],i="function"===typeof t?t(e):t;!1===i||"string"===typeof i?n.push(i||""):"boolean"!==typeof i&&(0,u.N6)(`Rules should return a string or boolean, received '${typeof i}' instead`,this)}return this.errorBucket=n,this.valid=0===n.length,this.valid}}}),R=n(1767);const L=(0,w.Z)(k.Z,_);var V=L.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes(){return{"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.isDisabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.isReadonly,"v-input--dense":this.dense,"v-input--hide-spin-buttons":this.hideSpinButtons,...this.themeClasses}},computedId(){return this.id||`input-${this._uid}`},hasDetails(){return this.messagesToDisplay.length>0},hasHint(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel(){return!(!this.$slots.label&&!this.label)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty(){return!!this.lazyValue},isLabelActive(){return this.isDirty},messagesToDisplay(){return this.hasHint?[this.hint]:this.hasMessages?this.validations.map((t=>{if("string"===typeof t)return t;const e=t(this.internalValue);return"string"===typeof e?e:""})).filter((t=>""!==t)):[]},showDetails(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value(t){this.lazyValue=t}},beforeCreate(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl(){return this.$createElement("div",{staticClass:"v-input__control",attrs:{title:this.attrs$.title}},[this.genInputSlot(),this.genMessages()])},genDefaultSlot(){return[this.genLabel(),this.$slots.default]},genIcon(t,e,n={}){const s=this[`${t}Icon`],i=`click:${(0,o.GL)(t)}`,r=!(!this.listeners$[i]&&!e),a=(0,R.ZP)({attrs:{"aria-label":r?(0,o.GL)(t).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,light:this.light},on:r?{click:t=>{t.preventDefault(),t.stopPropagation(),this.$emit(i,t),e&&e(t)},mouseup:t=>{t.preventDefault(),t.stopPropagation()}}:void 0},n);return this.$createElement("div",{staticClass:"v-input__icon",class:t?`v-input__icon--${(0,o.GL)(t)}`:void 0},[this.$createElement(S,a,s)])},genInputSlot(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:(0,o.kb)(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel(){return this.hasLabel?this.$createElement(A,{props:{color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages(){return this.showDetails?this.$createElement(N,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:t=>(0,o.z9)(this,"message",t)}}):null},genSlot(t,e,n){if(!n.length)return null;const s=`${t}-${e}`;return this.$createElement("div",{staticClass:`v-input__${s}`,ref:s},n)},genPrependSlot(){const t=[];return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot(){const t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick(t){this.$emit("click",t)},onMouseDown(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}}),O=V,M=(0,w.Z)(I.Z).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render(t,e){const{props:n}=e,s=parseInt(n.max,10),i=parseInt(n.value,10),r=s?`${i} / ${s}`:String(n.value),o=s&&i>s;return t("div",{staticClass:"v-counter",class:{"error--text":o,...(0,I.X)(e)}},r)}}),F=M;function P(t){return h.ZP.extend({name:"intersectable",data:()=>({isIntersecting:!1}),mounted(){i.Z.inserted(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},destroyed(){i.Z.unbind(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},methods:{onObserve(e,n,s){if(this.isIntersecting=s,s)for(let i=0,r=t.onVisible.length;i<r;i++){const e=this[t.onVisible[i]];"function"!==typeof e?(0,u.Kd)(t.onVisible[i]+" method is not available on the instance but referenced in intersectable mixin options"):e()}}}})}var U=n(5472);function $(t,e,n){const s=e.value,i=e.options||{passive:!0};window.addEventListener("resize",s,i),t._onResize=Object(t._onResize),t._onResize[n.context._uid]={callback:s,options:i},e.modifiers&&e.modifiers.quiet||s()}function B(t,e,n){var s;if(null==(s=t._onResize)||!s[n.context._uid])return;const{callback:i,options:r}=t._onResize[n.context._uid];window.removeEventListener("resize",i,r),delete t._onResize[n.context._uid]}const j={inserted:$,unbind:B};var z=j,G=n(7069);function q(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}const e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}const K=(0,w.Z)(O,P({onVisible:["onResize","tryAutofocus"]}),U.Z),H=["color","file","time","date","datetime-local","week","month"];var Q=K.extend().extend({name:"v-text-field",directives:{resize:z,ripple:G.Z},inheritAttrs:!1,props:{appendOuterIcon:String,autofocus:Boolean,clearable:Boolean,clearIcon:{type:String,default:"$clear"},counter:[Boolean,Number,String],counterValue:Function,filled:Boolean,flat:Boolean,fullWidth:Boolean,label:String,outlined:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,persistentPlaceholder:Boolean,reverse:Boolean,rounded:Boolean,shaped:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:()=>({badInput:!1,labelWidth:0,prefixWidth:0,prependWidth:0,initialValue:null,isBooted:!1,isClearing:!1}),computed:{classes(){return{...O.options.computed.classes.call(this),"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--filled":this.filled,"v-text-field--is-booted":this.isBooted,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outlined":this.outlined,"v-text-field--placeholder":this.placeholder,"v-text-field--rounded":this.rounded,"v-text-field--shaped":this.shaped}},computedColor(){const t=_.options.computed.computedColor.call(this);return this.soloInverted&&this.isFocused?this.color||"primary":t},computedCounterValue(){return"function"===typeof this.counterValue?this.counterValue(this.internalValue):[...(this.internalValue||"").toString()].length},hasCounter(){return!1!==this.counter&&null!=this.counter},hasDetails(){return O.options.computed.hasDetails.call(this)||this.hasCounter},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",this.lazyValue)}},isDirty(){var t;return(null==(t=this.lazyValue)?void 0:t.toString().length)>0||this.badInput},isEnclosed(){return this.filled||this.isSolo||this.outlined},isLabelActive(){return this.isDirty||H.includes(this.type)},isSingle(){return this.isSolo||this.singleLine||this.fullWidth||this.filled&&!this.hasLabel},isSolo(){return this.solo||this.soloInverted},labelPosition(){let t=this.prefix&&!this.labelValue?this.prefixWidth:0;return this.labelValue&&this.prependWidth&&(t-=this.prependWidth),this.$vuetify.rtl===this.reverse?{left:t,right:"auto"}:{left:"auto",right:t}},showLabel(){return this.hasLabel&&!(this.isSingle&&this.labelValue)},labelValue(){return this.isFocused||this.isLabelActive||this.persistentPlaceholder}},watch:{outlined:"setLabelWidth",label(){this.$nextTick(this.setLabelWidth)},prefix(){this.$nextTick(this.setPrefixWidth)},isFocused:"updateValue",value(t){this.lazyValue=t}},created(){this.$attrs.hasOwnProperty("box")&&(0,u.fK)("box","filled",this),this.$attrs.hasOwnProperty("browser-autocomplete")&&(0,u.fK)("browser-autocomplete","autocomplete",this),this.shaped&&!(this.filled||this.outlined||this.isSolo)&&(0,u.Kd)("shaped should be used with either filled or outlined",this)},mounted(){this.$watch((()=>this.labelValue),this.setLabelWidth),this.autofocus&&this.tryAutofocus(),requestAnimationFrame((()=>{this.isBooted=!0,requestAnimationFrame((()=>{this.isIntersecting||this.onResize()}))}))},methods:{focus(){this.onFocus()},blur(t){window.requestAnimationFrame((()=>{this.$refs.input&&this.$refs.input.blur()}))},clearableCallback(){this.$refs.input&&this.$refs.input.focus(),this.$nextTick((()=>this.internalValue=null))},genAppendSlot(){const t=[];return this.$slots["append-outer"]?t.push(this.$slots["append-outer"]):this.appendOuterIcon&&t.push(this.genIcon("appendOuter")),this.genSlot("append","outer",t)},genPrependInnerSlot(){const t=[];return this.$slots["prepend-inner"]?t.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&t.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",t)},genIconSlot(){const t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","inner",t)},genInputSlot(){const t=O.options.methods.genInputSlot.call(this),e=this.genPrependInnerSlot();return e&&(t.children=t.children||[],t.children.unshift(e)),t},genClearIcon(){return this.clearable?this.isDirty?this.genSlot("append","inner",[this.genIcon("clear",this.clearableCallback)]):this.genSlot("append","inner",[this.$createElement("div")]):null},genCounter(){var t,e,n;if(!this.hasCounter)return null;const s=!0===this.counter?this.attrs$.maxlength:this.counter,i={dark:this.dark,light:this.light,max:s,value:this.computedCounterValue};return null!=(t=null==(e=(n=this.$scopedSlots).counter)?void 0:e.call(n,{props:i}))?t:this.$createElement(F,{props:i})},genControl(){return O.options.methods.genControl.call(this)},genDefaultSlot(){return[this.genFieldset(),this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genFieldset(){return this.outlined?this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()]):null},genLabel(){if(!this.showLabel)return null;const t={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),for:this.computedId,left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$createElement(A,t,this.$slots.label||this.label)},genLegend(){const t=this.singleLine||!this.labelValue&&!this.isDirty?0:this.labelWidth,e=this.$createElement("span",{domProps:{innerHTML:"&#8203;"},staticClass:"notranslate"});return this.$createElement("legend",{style:{width:this.isSingle?void 0:(0,o.kb)(t)}},[e])},genInput(){const t=Object.assign({},this.listeners$);delete t.change;const{title:e,...n}=this.attrs$;return this.$createElement("input",{style:{},domProps:{value:"number"===this.type&&Object.is(this.lazyValue,-0)?"-0":this.lazyValue},attrs:{...n,autofocus:this.autofocus,disabled:this.isDisabled,id:this.computedId,placeholder:this.persistentPlaceholder||this.isFocused||!this.hasLabel?this.placeholder:void 0,readonly:this.isReadonly,type:this.type},on:Object.assign(t,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]})},genMessages(){if(!this.showDetails)return null;const t=O.options.methods.genMessages.call(this),e=this.genCounter();return this.$createElement("div",{staticClass:"v-text-field__details"},[t,e])},genTextFieldSlot(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix(t){return this.$createElement("div",{class:`v-text-field__${t}`,ref:t},this[t])},onBlur(t){this.isFocused=!1,t&&this.$nextTick((()=>this.$emit("blur",t)))},onClick(){this.isFocused||this.isDisabled||!this.$refs.input||this.$refs.input.focus()},onFocus(t){if(!this.$refs.input)return;const e=q(this.$el);return e?e.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,t&&this.$emit("focus",t))):void 0},onInput(t){const e=t.target;this.internalValue=e.value,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){t.keyCode===o.Do.enter&&this.lazyValue!==this.initialValue&&(this.initialValue=this.lazyValue,this.$emit("change",this.initialValue)),this.$emit("keydown",t)},onMouseDown(t){t.target!==this.$refs.input&&(t.preventDefault(),t.stopPropagation()),O.options.methods.onMouseDown.call(this,t)},onMouseUp(t){this.hasMouseDown&&this.focus(),O.options.methods.onMouseUp.call(this,t)},setLabelWidth(){this.outlined&&(this.labelWidth=this.$refs.label?Math.min(.75*this.$refs.label.scrollWidth+6,this.$el.offsetWidth-24):0)},setPrefixWidth(){this.$refs.prefix&&(this.prefixWidth=this.$refs.prefix.offsetWidth)},setPrependWidth(){this.outlined&&this.$refs["prepend-inner"]&&(this.prependWidth=this.$refs["prepend-inner"].offsetWidth)},tryAutofocus(){if(!this.autofocus||"undefined"===typeof document||!this.$refs.input)return!1;const t=q(this.$el);return!(!t||t.activeElement===this.$refs.input)&&(this.$refs.input.focus(),!0)},updateValue(t){this.hasColor=t,t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onResize(){this.setLabelWidth(),this.setPrefixWidth(),this.setPrependWidth()}}});const W=(0,w.Z)(Q);var X,Z=W.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...Q.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick((()=>{var e;t?this.calculateInputHeight():null==(e=this.$refs.input)||e.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(n,e)+"px"},genInput(){const t=Q.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){Q.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),Y=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Formulario de Contacto")]),e("br"),e("div",[e(Q,{staticClass:"fondo",attrs:{disabled:t.enviando,label:"Nombre"},model:{value:t.nombreContacto,callback:function(e){t.nombreContacto=e},expression:"nombreContacto"}}),e(Z,{staticClass:"fondo",attrs:{disabled:t.enviando,label:"Mensaje"},model:{value:t.cuerpoMensaje,callback:function(e){t.cuerpoMensaje=e},expression:"cuerpoMensaje"}}),e(E,{attrs:{disabled:t.enviando},on:{click:function(e){return t.enviarFormulario()}}},[t._v("Enviar")])],1)])},J=[],tt=n(5816),et=n(8463),nt=n(3333),st=n(4444),it="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},rt={},ot=ot||{},at=it||self;function lt(){}function ht(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function ut(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function ct(t){return Object.prototype.hasOwnProperty.call(t,dt)&&t[dt]||(t[dt]=++ft)}var dt="closure_uid_"+(1e9*Math.random()>>>0),ft=0;function pt(t,e,n){return t.call.apply(t.bind,arguments)}function gt(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function mt(t,e,n){return mt=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?pt:gt,mt.apply(null,arguments)}function yt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function vt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function wt(){this.s=this.s,this.o=this.o}var bt=0,Et={};wt.prototype.s=!1,wt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=bt)){var t=ct(this);delete Et[t]}},wt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Tt=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},St=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i="string"===typeof t?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function It(t){t:{var e=js;const n=t.length,s="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function Ct(t){return Array.prototype.concat.apply([],arguments)}function At(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Dt(t){return/^[\s\xa0]*$/.test(t)}var Nt,kt=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function xt(t,e){return-1!=t.indexOf(e)}function _t(t,e){return t<e?-1:t>e?1:0}t:{var Rt=at.navigator;if(Rt){var Lt=Rt.userAgent;if(Lt){Nt=Lt;break t}}Nt=""}function Vt(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Ot(t){const e={};for(const n in t)e[n]=t[n];return e}var Mt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ft(t,e){let n,s;for(let i=1;i<arguments.length;i++){for(n in s=arguments[i],s)t[n]=s[n];for(let e=0;e<Mt.length;e++)n=Mt[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Pt(t){return Pt[" "](t),t}function Ut(t){var e=Yt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}Pt[" "]=lt;var $t,Bt=xt(Nt,"Opera"),jt=xt(Nt,"Trident")||xt(Nt,"MSIE"),zt=xt(Nt,"Edge"),Gt=zt||jt,qt=xt(Nt,"Gecko")&&!(xt(Nt.toLowerCase(),"webkit")&&!xt(Nt,"Edge"))&&!(xt(Nt,"Trident")||xt(Nt,"MSIE"))&&!xt(Nt,"Edge"),Kt=xt(Nt.toLowerCase(),"webkit")&&!xt(Nt,"Edge");function Ht(){var t=at.document;return t?t.documentMode:void 0}t:{var Qt="",Wt=function(){var t=Nt;return qt?/rv:([^\);]+)(\)|;)/.exec(t):zt?/Edge\/([\d\.]+)/.exec(t):jt?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):Kt?/WebKit\/(\S+)/.exec(t):Bt?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Wt&&(Qt=Wt?Wt[1]:""),jt){var Xt=Ht();if(null!=Xt&&Xt>parseFloat(Qt)){$t=String(Xt);break t}}$t=Qt}var Zt,Yt={};function Jt(){return Ut((function(){let t=0;const e=kt(String($t)).split("."),n=kt("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=_t(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||_t(0==i[2].length,0==r[2].length)||_t(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(at.document&&jt){var te=Ht();Zt=te||(parseInt($t,10)||void 0)}else Zt=void 0;var ee=Zt,ne=function(){if(!at.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{at.addEventListener("test",lt,e),at.removeEventListener("test",lt,e)}catch(n){}return t}();function se(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function ie(t,e){if(se.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(qt){t:{try{Pt(e.nodeName);var i=!0;break t}catch(r){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:re[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ie.Z.h.call(this)}}se.prototype.h=function(){this.defaultPrevented=!0},vt(ie,se);var re={2:"touch",3:"pen",4:"mouse"};ie.prototype.h=function(){ie.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var oe="closure_listenable_"+(1e6*Math.random()|0),ae=0;function le(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++ae,this.ca=this.fa=!1}function he(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ue(t){this.src=t,this.g={},this.h=0}function ce(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=Tt(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(he(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function de(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}ue.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=de(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new le(e,this.src,r,!!s,i),e.fa=n,t.push(e)),e};var fe="closure_lm_"+(1e6*Math.random()|0),pe={};function ge(t,e,n,s,i){if(s&&s.once)return ve(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ge(t,e[r],n,s,i);return null}return n=Ce(n),t&&t[oe]?t.N(e,n,ut(s)?!!s.capture:!!s,i):me(t,e,n,!1,s,i)}function me(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=ut(i)?!!i.capture:!!i,a=Se(t);if(a||(t[fe]=a=new ue(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=ye(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)ne||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Ee(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function ye(){function t(n){return e.call(t.src,t.listener,n)}var e=Te;return t}function ve(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)ve(t,e[r],n,s,i);return null}return n=Ce(n),t&&t[oe]?t.O(e,n,ut(s)?!!s.capture:!!s,i):me(t,e,n,!0,s,i)}function we(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)we(t,e[r],n,s,i);else s=ut(s)?!!s.capture:!!s,n=Ce(n),t&&t[oe]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=de(r,n,s,i),-1<n&&(he(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Se(t))&&(e=t.g[e.toString()],t=-1,e&&(t=de(e,n,s,i)),(n=-1<t?e[t]:null)&&be(n))}function be(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[oe])ce(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Ee(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Se(e))?(ce(n,t),0==n.h&&(n.src=null,e[fe]=null)):he(t)}}}function Ee(t){return t in pe?pe[t]:pe[t]="on"+t}function Te(t,e){if(t.ca)t=!0;else{e=new ie(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&be(t),t=n.call(s,e)}return t}function Se(t){return t=t[fe],t instanceof ue?t:null}var Ie="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ce(t){return"function"===typeof t?t:(t[Ie]||(t[Ie]=function(e){return t.handleEvent(e)}),t[Ie])}function Ae(){wt.call(this),this.i=new ue(this),this.P=this,this.I=null}function De(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"===typeof e)e=new se(e,t);else if(e instanceof se)e.target=e.target||t;else{var i=e;e=new se(s,t),Ft(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Ne(o,s,!0,e)&&i}if(o=e.g=t,i=Ne(o,s,!0,e)&&i,i=Ne(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Ne(o,s,!1,e)&&i}function Ne(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&ce(t.i,o),i=!1!==a.call(l,s)&&i}}return i&&!s.defaultPrevented}vt(Ae,wt),Ae.prototype[oe]=!0,Ae.prototype.removeEventListener=function(t,e,n,s){we(this,t,e,n,s)},Ae.prototype.M=function(){if(Ae.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)he(n[s]);delete e.g[t],e.h--}}this.I=null},Ae.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},Ae.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var ke=at.JSON.stringify;function xe(){var t=Ue;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class _e{constructor(){this.h=this.g=null}add(t,e){const n=Le.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Re,Le=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Ve),(t=>t.reset()));class Ve{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Oe(t){at.setTimeout((()=>{throw t}),0)}function Me(t,e){Re||Fe(),Pe||(Re(),Pe=!0),Ue.add(t,e)}function Fe(){var t=at.Promise.resolve(void 0);Re=function(){t.then($e)}}var Pe=!1,Ue=new _e;function $e(){for(var t;t=xe();){try{t.h.call(t.g)}catch(n){Oe(n)}var e=Le;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Pe=!1}function Be(t,e){Ae.call(this),this.h=t||1,this.g=e||at,this.j=mt(this.kb,this),this.l=Date.now()}function je(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function ze(t,e,n){if("function"===typeof t)n&&(t=mt(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=mt(t.handleEvent,t)}return 2147483647<Number(e)?-1:at.setTimeout(t,e||0)}function Ge(t){t.g=ze((()=>{t.g=null,t.i&&(t.i=!1,Ge(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}vt(Be,Ae),X=Be.prototype,X.da=!1,X.S=null,X.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),De(this,"tick"),this.da&&(je(this),this.start()))}},X.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},X.M=function(){Be.Z.M.call(this),je(this),delete this.g};class qe extends wt{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ge(this)}M(){super.M(),this.g&&(at.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ke(t){wt.call(this),this.h=t,this.g={}}vt(Ke,wt);var He=[];function Qe(t,e,n,s){Array.isArray(n)||(n&&(He[0]=n.toString()),n=He);for(var i=0;i<n.length;i++){var r=ge(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function We(t){Vt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&be(t)}),t),t.g={}}function Xe(){this.g=!0}function Ze(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var h=a[l].split("=");if(1<h.length){var u=h[0];h=h[1];var c=u.split("_");o=2<=c.length&&"type"==c[1]?o+(u+"=")+h+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Ye(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}function Je(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+en(t,n)+(s?" "+s:"")}))}function tn(t,e){t.info((function(){return"TIMEOUT: "+e}))}function en(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return ke(n)}catch(a){return e}}Ke.prototype.M=function(){Ke.Z.M.call(this),We(this)},Ke.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Xe.prototype.Aa=function(){this.g=!1},Xe.prototype.info=function(){};var nn={},sn=null;function rn(){return sn=sn||new Ae}function on(t){se.call(this,nn.Ma,t)}function an(t){const e=rn();De(e,new on(e,t))}function ln(t,e){se.call(this,nn.STAT_EVENT,t),this.stat=e}function hn(t){const e=rn();De(e,new ln(e,t))}function un(t,e){se.call(this,nn.Na,t),this.size=e}function cn(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return at.setTimeout((function(){t()}),e)}nn.Ma="serverreachability",vt(on,se),nn.STAT_EVENT="statevent",vt(ln,se),nn.Na="timingevent",vt(un,se);var dn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},fn={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function pn(){}function gn(t){return t.h||(t.h=t.i())}function mn(){}pn.prototype.h=null;var yn,vn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function wn(){se.call(this,"d")}function bn(){se.call(this,"c")}function En(){}function Tn(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Ke(this),this.P=In,t=Gt?125:void 0,this.W=new Be(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Sn}function Sn(){this.i=null,this.g="",this.h=!1}vt(wn,se),vt(bn,se),vt(En,pn),En.prototype.g=function(){return new XMLHttpRequest},En.prototype.i=function(){return{}},yn=new En;var In=45e3,Cn={},An={};function Dn(t,e,n){t.K=1,t.v=Yn(Kn(e)),t.s=n,t.U=!0,Nn(t,null)}function Nn(t,e){t.F=Date.now(),Rn(t),t.A=Kn(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),fs(n.h,"t",s),t.C=0,n=t.l.H,t.h=new Sn,t.g=wi(t.l,n?e:null,!t.s),0<t.O&&(t.L=new qe(mt(t.Ia,t,t.g),t.O)),Qe(t.V,t.g,"readystatechange",t.gb),e=t.H?Ot(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),an(1),Ze(t.j,t.u,t.A,t.m,t.X,t.s)}function kn(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function xn(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=_n(t,n),s==An){4==e&&(t.o=4,hn(14),i=!1),Je(t.j,t.m,null,"[Incomplete Response]");break}if(s==Cn){t.o=4,hn(15),Je(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Je(t.j,t.m,s,null),Fn(t,s)}kn(t)&&s!=An&&s!=Cn&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,hn(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ci(e),e.L=!0,hn(11))):(Je(t.j,t.m,n,"[Invalid Chunked Response]"),Mn(t),On(t))}function _n(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?An:(n=Number(e.substring(n,s)),isNaN(n)?Cn:(s+=1,s+n>e.length?An:(e=e.substr(s,n),t.C=s+n,e)))}function Rn(t){t.Y=Date.now()+t.P,Ln(t,t.P)}function Ln(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=cn(mt(t.eb,t),e)}function Vn(t){t.B&&(at.clearTimeout(t.B),t.B=null)}function On(t){0==t.l.G||t.I||pi(t.l,t)}function Mn(t){Vn(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,je(t.W),We(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Fn(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Es(n.i,t)))if(n.I=t.N,!t.J&&Es(n.i,t)&&3==n.G){try{var s=n.Ca.g.parse(e)}catch(h){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;fi(n),ei(n)}ui(n),hn(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=cn(mt(n.ab,n),6e3));if(1>=bs(n.i)&&n.ka){try{n.ka()}catch(h){}n.ka=void 0}}else mi(n,11)}else if((t.J||n.g==t)&&fi(n),!Dt(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let h=i[e];if(n.U=h[0],h=h[1],2==n.G)if("c"==h[0]){n.J=h[1],n.la=h[2];const e=h[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=h[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const u=h[5];null!=u&&"number"===typeof u&&0<u&&(s=1.5*u,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const c=t.g;if(c){const t=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.i;!r.g&&(xt(t,"spdy")||xt(t,"quic")||xt(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Ts(r,r.h),r.h=null))}if(s.D){const t=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.sa=t,Zn(s.F,s.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=vi(s,s.H?s.la:null,s.W),o.J){Ss(s.i,o);var a=o,l=s.K;l&&a.setTimeout(l),a.B&&(Vn(a),Rn(a)),s.g=o}else hi(s);0<n.l.length&&ii(n)}else"stop"!=h[0]&&"close"!=h[0]||mi(n,7);else 3==n.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?mi(n,7):ti(n):"noop"!=h[0]&&n.j&&n.j.wa(h),n.A=0)}an(4)}catch(h){}}function Pn(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(ht(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}function Un(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(ht(t)||"string"===typeof t)St(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(ht(t)||"string"===typeof t){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=Pn(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function $n(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof $n)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}function Bn(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];jn(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)s=t.g[e],jn(i,s)||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}function jn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}X=Tn.prototype,X.setTimeout=function(t){this.P=t},X.gb=function(t){t=t.target;const e=this.L;e&&3==Qs(t)?e.l():this.Ia(t)},X.Ia=function(t){try{if(t==this.g)t:{const u=Qs(this.g);var e=this.g.Da();const c=this.g.ba();if(!(3>u)&&(3!=u||Gt||this.g&&(this.h.h||this.g.ga()||Ws(this.g)))){this.I||4!=u||7==e||an(8==e||0>=c?3:2),Vn(this);var n=this.g.ba();this.N=n;e:if(kn(this)){var s=Ws(this.g);t="";var i=s.length,r=4==Qs(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Mn(this),On(this);var o="";break e}this.h.i=new at.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Ye(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Dt(a)){var h=a;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,hn(12),Mn(this),On(this);break t}Je(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Fn(this,n)}this.U?(xn(this,u,o),Gt&&this.i&&3==u&&(Qe(this.V,this.W,"tick",this.fb),this.W.start())):(Je(this.j,this.m,o,null),Fn(this,o)),4==u&&Mn(this),this.i&&!this.I&&(4==u?pi(this.l,this):(this.i=!1,Rn(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,hn(12)):(this.o=0,hn(13)),Mn(this),On(this)}}}catch(u){}},X.fb=function(){if(this.g){var t=Qs(this.g),e=this.g.ga();this.C<e.length&&(Vn(this),xn(this,t,e),this.i&&4!=t&&Rn(this))}},X.cancel=function(){this.I=!0,Mn(this)},X.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(tn(this.j,this.A),2!=this.K&&(an(3),hn(17)),Mn(this),this.o=2,On(this)):Ln(this,this.Y-t)},X=$n.prototype,X.R=function(){Bn(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},X.T=function(){return Bn(this),this.g.concat()},X.get=function(t,e){return jn(this.h,t)?this.h[t]:e},X.set=function(t,e){jn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},X.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};var zn=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Gn(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function qn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof qn){this.g=void 0!==e?e:t.g,Hn(this,t.j),this.s=t.s,Qn(this,t.i),Wn(this,t.m),this.l=t.l,e=t.h;var n=new hs;n.i=e.i,e.g&&(n.g=new $n(e.g),n.h=e.h),Xn(this,n),this.o=t.o}else t&&(n=String(t).match(zn))?(this.g=!!e,Hn(this,n[1]||"",!0),this.s=es(n[2]||""),Qn(this,n[3]||"",!0),Wn(this,n[4]),this.l=es(n[5]||"",!0),Xn(this,n[6]||"",!0),this.o=es(n[7]||"")):(this.g=!!e,this.h=new hs(null,this.g))}function Kn(t){return new qn(t)}function Hn(t,e,n){t.j=n?es(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Qn(t,e,n){t.i=n?es(e,!0):e}function Wn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Xn(t,e,n){e instanceof hs?(t.h=e,gs(t.h,t.g)):(n||(e=ns(e,as)),t.h=new hs(e,t.g))}function Zn(t,e,n){t.h.set(e,n)}function Yn(t){return Zn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Jn(t){return t instanceof qn?Kn(t):new qn(t,void 0)}function ts(t,e,n,s){var i=new qn(null,void 0);return t&&Hn(i,t),e&&Qn(i,e),n&&Wn(i,n),s&&(i.l=s),i}function es(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ns(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,ss),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ss(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}qn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ns(e,is,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(ns(e,is,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(ns(n,"/"==n.charAt(0)?os:rs,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ns(n,ls)),t.join("")};var is=/[#\/\?@]/g,rs=/[#\?:]/g,os=/[#\?]/g,as=/[#\?@]/g,ls=/#/g;function hs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function us(t){t.g||(t.g=new $n,t.h=0,t.i&&Gn(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function cs(t,e){us(t),e=ps(t,e),jn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,jn(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Bn(t)))}function ds(t,e){return us(t),e=ps(t,e),jn(t.g.h,e)}function fs(t,e,n){cs(t,e),0<n.length&&(t.i=null,t.g.set(ps(t,e),At(n)),t.h+=n.length)}function ps(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function gs(t,e){e&&!t.j&&(us(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(cs(this,e),fs(this,n,t))}),t)),t.j=e}X=hs.prototype,X.add=function(t,e){us(this),this.i=null,t=ps(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},X.forEach=function(t,e){us(this),this.g.forEach((function(n,s){St(n,(function(n){t.call(e,n,s,this)}),this)}),this)},X.T=function(){us(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n},X.R=function(t){us(this);var e=[];if("string"===typeof t)ds(this,t)&&(e=Ct(e,this.g.get(ps(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Ct(e,t[n])}return e},X.set=function(t,e){return us(this),this.i=null,t=ps(this,t),ds(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},X.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},X.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;""!==s[r]&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};var ms=class{constructor(t,e){this.h=t,this.g=e}};function ys(t){this.l=t||vs,at.PerformanceNavigationTiming?(t=at.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(at.g&&at.g.Ea&&at.g.Ea()&&at.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vs=10;function ws(t){return!!t.h||!!t.g&&t.g.size>=t.j}function bs(t){return t.h?1:t.g?t.g.size:0}function Es(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Ts(t,e){t.g?t.g.add(e):t.h=e}function Ss(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Is(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return At(t.i)}function Cs(){}function As(){this.g=new Cs}function Ds(t,e,n){const s=n||"";try{Un(t,(function(t,n){let i=t;ut(t)&&(i=ke(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Ns(t,e){const n=new Xe;if(at.Image){const s=new Image;s.onload=yt(ks,n,s,"TestLoadImage: loaded",!0,e),s.onerror=yt(ks,n,s,"TestLoadImage: error",!1,e),s.onabort=yt(ks,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=yt(ks,n,s,"TestLoadImage: timeout",!1,e),at.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}function ks(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(r){}}function xs(t){this.l=t.$b||null,this.j=t.ib||!1}function _s(t,e){Ae.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Rs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ys.prototype.cancel=function(){if(this.i=Is(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Cs.prototype.stringify=function(t){return at.JSON.stringify(t,void 0)},Cs.prototype.parse=function(t){return at.JSON.parse(t,void 0)},vt(xs,pn),xs.prototype.g=function(){return new _s(this.l,this.j)},xs.prototype.i=function(t){return function(){return t}}({}),vt(_s,Ae);var Rs=0;function Ls(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Vs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Os(t)}function Os(t){t.onreadystatechange&&t.onreadystatechange.call(t)}X=_s.prototype,X.open=function(t,e){if(this.readyState!=Rs)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Os(this)},X.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||at).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},X.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Vs(this)),this.readyState=Rs},X.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Os(this)),this.g&&(this.readyState=3,Os(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof at.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ls(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},X.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Vs(this):Os(this),3==this.readyState&&Ls(this)}},X.Ua=function(t){this.g&&(this.response=this.responseText=t,Vs(this))},X.Ta=function(t){this.g&&(this.response=t,Vs(this))},X.ha=function(){this.g&&Vs(this)},X.setRequestHeader=function(t,e){this.v.append(t,e)},X.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},X.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(_s.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Ms=at.JSON.parse;function Fs(t){Ae.call(this),this.headers=new $n,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ps,this.K=this.L=!1}vt(Fs,Ae);var Ps="",Us=/^https?$/i,$s=["POST","PUT"];function Bs(t){return jt&&Jt()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function js(t){return"content-type"==t.toLowerCase()}function zs(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Gs(t),Ks(t)}function Gs(t){t.D||(t.D=!0,De(t,"complete"),De(t,"error"))}function qs(t){if(t.h&&"undefined"!=typeof ot&&(!t.C[1]||4!=Qs(t)||2!=t.ba()))if(t.v&&4==Qs(t))ze(t.Fa,0,t);else if(De(t,"readystatechange"),4==Qs(t)){t.h=!1;try{const l=t.ba();t:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===l){var i=String(t.H).match(zn)[1]||null;if(!i&&at.self&&at.self.location){var r=at.self.location.protocol;i=r.substr(0,r.length-1)}s=!Us.test(i?i.toLowerCase():"")}n=s}if(n)De(t,"complete"),De(t,"success");else{t.m=6;try{var o=2<Qs(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",Gs(t)}}finally{Ks(t)}}}function Ks(t,e){if(t.g){Hs(t);const s=t.g,i=t.C[0]?lt:null;t.g=null,t.C=null,e||De(t,"ready");try{s.onreadystatechange=i}catch(n){}}}function Hs(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(at.clearTimeout(t.A),t.A=null)}function Qs(t){return t.g?t.g.readyState:0}function Ws(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ps:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Xs(t){let e="";return Vt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Zs(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Xs(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Zn(t,e,n))}function Ys(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Js(t){this.za=0,this.l=[],this.h=new Xe,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ys("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ys("baseRetryDelayMs",5e3,t),this.$a=Ys("retryDelaySeedMs",1e4,t),this.Ya=Ys("forwardChannelMaxRetries",2,t),this.ra=Ys("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new ys(t&&t.concurrentRequestLimit),this.Ca=new As,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ti(t){if(ni(t),3==t.G){var e=t.V++,n=Kn(t.F);Zn(n,"SID",t.J),Zn(n,"RID",e),Zn(n,"TYPE","terminate"),ai(t,n),e=new Tn(t,t.h,e,void 0),e.K=2,e.v=Yn(Kn(n)),n=!1,at.navigator&&at.navigator.sendBeacon&&(n=at.navigator.sendBeacon(e.v.toString(),"")),!n&&at.Image&&((new Image).src=e.v,n=!0),n||(e.g=wi(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Rn(e)}yi(t)}function ei(t){t.g&&(ci(t),t.g.cancel(),t.g=null)}function ni(t){ei(t),t.u&&(at.clearTimeout(t.u),t.u=null),fi(t),t.i.cancel(),t.m&&("number"===typeof t.m&&at.clearTimeout(t.m),t.m=null)}function si(t,e){t.l.push(new ms(t.Za++,e)),3==t.G&&ii(t)}function ii(t){ws(t.i)||t.m||(t.m=!0,Me(t.Ha,t),t.C=0)}function ri(t,e){return!(bs(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=cn(mt(t.Ha,t,e),gi(t,t.C)),t.C++,!0))}function oi(t,e){var n;n=e?e.m:t.V++;const s=Kn(t.F);Zn(s,"SID",t.J),Zn(s,"RID",n),Zn(s,"AID",t.U),ai(t,s),t.o&&t.s&&Zs(s,t.o,t.s),n=new Tn(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=li(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Ts(t.i,n),Dn(n,s,e)}function ai(t,e){t.j&&Un({},(function(t,n){Zn(e,n,t)}))}function li(t,e,n){n=Math.min(t.l.length,n);var s=t.j?mt(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),r=!1;else try{Ds(a,t,"req"+n+"_")}catch(Hi){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,s}function hi(t){t.g||t.u||(t.Y=1,Me(t.Ga,t),t.A=0)}function ui(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=cn(mt(t.Ga,t),gi(t,t.A)),t.A++,!0)}function ci(t){null!=t.B&&(at.clearTimeout(t.B),t.B=null)}function di(t){t.g=new Tn(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Kn(t.oa);Zn(e,"RID","rpc"),Zn(e,"SID",t.J),Zn(e,"CI",t.N?"0":"1"),Zn(e,"AID",t.U),ai(t,e),Zn(e,"TYPE","xmlhttp"),t.o&&t.s&&Zs(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Yn(Kn(e)),n.s=null,n.U=!0,Nn(n,t)}function fi(t){null!=t.v&&(at.clearTimeout(t.v),t.v=null)}function pi(t,e){var n=null;if(t.g==e){fi(t),ci(t),t.g=null;var s=2}else{if(!Es(t.i,e))return;n=e.D,Ss(t.i,e),s=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=rn(),De(s,new un(s,n,e,i)),ii(t)}else hi(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==s&&ri(t,e)||2==s&&ui(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:mi(t,5);break;case 4:mi(t,10);break;case 3:mi(t,6);break;default:mi(t,2)}}function gi(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function mi(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var s=mt(t.jb,t);n||(n=new qn("//www.google.com/images/cleardot.gif"),at.location&&"http"==at.location.protocol||Hn(n,"https"),Yn(n)),Ns(n.toString(),s)}else hn(2);t.G=0,t.j&&t.j.va(e),yi(t),ni(t)}function yi(t){t.G=0,t.I=-1,t.j&&(0==Is(t.i).length&&0==t.l.length||(t.i.i.length=0,At(t.l),t.l.length=0),t.j.ua())}function vi(t,e,n){let s=Jn(n);if(""!=s.i)e&&Qn(s,e+"."+s.i),Wn(s,s.m);else{const t=at.location;s=ts(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&Vt(t.aa,(function(t,e){Zn(s,e,t)})),e=t.D,n=t.sa,e&&n&&Zn(s,e,n),Zn(s,"VER",t.ma),ai(t,s),s}function wi(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Fs(new xs({ib:!0})):new Fs(t.qa),e.L=t.H,e}function bi(){}function Ei(){if(jt&&!(10<=Number(ee)))throw Error("Environmental error: no available transport.")}function Ti(t,e){Ae.call(this),this.g=new Js(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Dt(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Dt(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ci(this)}function Si(t){wn.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ii(){bn.call(this),this.status=1}function Ci(t){this.g=t}X=Fs.prototype,X.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():yn.g(),this.C=this.u?gn(this.u):gn(yn),this.g.onreadystatechange=mt(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){return void zs(this,r)}t=n||"";const i=new $n(this.headers);s&&Un(s,(function(t,e){i.set(e,t)})),s=It(i.T()),n=at.FormData&&t instanceof at.FormData,!(0<=Tt($s,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Hs(this),0<this.B&&((this.K=Bs(this.g))?(this.g.timeout=this.B,this.g.ontimeout=mt(this.pa,this)):this.A=ze(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){zs(this,r)}},X.pa=function(){"undefined"!=typeof ot&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,De(this,"timeout"),this.abort(8))},X.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,De(this,"complete"),De(this,"abort"),Ks(this))},X.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ks(this,!0)),Fs.Z.M.call(this)},X.Fa=function(){this.s||(this.F||this.v||this.l?qs(this):this.cb())},X.cb=function(){qs(this)},X.ba=function(){try{return 2<Qs(this)?this.g.status:-1}catch(t){return-1}},X.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},X.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Ms(e)}},X.Da=function(){return this.m},X.La=function(){return"string"===typeof this.j?this.j:String(this.j)},X=Js.prototype,X.ma=8,X.G=1,X.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},X.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Tn(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=Ot(r),Ft(r,this.P)):r=this.P),null===this.o&&(i.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var s=this.l[n];if(s="__data__"in s.g&&(s=s.g.__data__,"string"===typeof s)?s.length:void 0,void 0===s)break;if(e+=s,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=li(this,i,e),n=Kn(this.F),Zn(n,"RID",t),Zn(n,"CVER",22),this.D&&Zn(n,"X-HTTP-Session-Id",this.D),ai(this,n),this.o&&r&&Zs(n,this.o,r),Ts(this.i,i),this.Ra&&Zn(n,"TYPE","init"),this.ja?(Zn(n,"$req",e),Zn(n,"SID","null"),i.$=!0,Dn(i,n,null)):Dn(i,n,e),this.G=2}}else 3==this.G&&(t?oi(this,t):0==this.l.length||ws(this.i)||oi(this))},X.Ga=function(){if(this.u=null,di(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=cn(mt(this.bb,this),t)}},X.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,hn(10),ei(this),di(this))},X.ab=function(){null!=this.v&&(this.v=null,ei(this),ui(this),hn(19))},X.jb=function(t){t?(this.h.info("Successfully pinged google.com"),hn(2)):(this.h.info("Failed to ping google.com"),hn(1))},X=bi.prototype,X.xa=function(){},X.wa=function(){},X.va=function(){},X.ua=function(){},X.Oa=function(){},Ei.prototype.g=function(t,e){return new Ti(t,e)},vt(Ti,Ae),Ti.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Me(mt(t.hb,t,e))),hn(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=vi(t,null,t.W),ii(t)},Ti.prototype.close=function(){ti(this.g)},Ti.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,si(this.g,e)}else this.v?(e={},e.__data__=ke(t),si(this.g,e)):si(this.g,t)},Ti.prototype.M=function(){this.g.j=null,delete this.j,ti(this.g),delete this.g,Ti.Z.M.call(this)},vt(Si,wn),vt(Ii,bn),vt(Ci,bi),Ci.prototype.xa=function(){De(this.g,"a")},Ci.prototype.wa=function(t){De(this.g,new Si(t))},Ci.prototype.va=function(t){De(this.g,new Ii(t))},Ci.prototype.ua=function(){De(this.g,"b")},Ei.prototype.createWebChannel=Ei.prototype.g,Ti.prototype.send=Ti.prototype.u,Ti.prototype.open=Ti.prototype.m,Ti.prototype.close=Ti.prototype.close,dn.NO_ERROR=0,dn.TIMEOUT=8,dn.HTTP_ERROR=6,fn.COMPLETE="complete",mn.EventType=vn,vn.OPEN="a",vn.CLOSE="b",vn.ERROR="c",vn.MESSAGE="d",Ae.prototype.listen=Ae.prototype.N,Fs.prototype.listenOnce=Fs.prototype.O,Fs.prototype.getLastError=Fs.prototype.La,Fs.prototype.getLastErrorCode=Fs.prototype.Da,Fs.prototype.getStatus=Fs.prototype.ba,Fs.prototype.getResponseJson=Fs.prototype.Qa,Fs.prototype.getResponseText=Fs.prototype.ga,Fs.prototype.send=Fs.prototype.ea;var Ai=rt.createWebChannelTransport=function(){return new Ei},Di=rt.getStatEventTarget=function(){return rn()},Ni=rt.ErrorCode=dn,ki=rt.EventType=fn,xi=rt.Event=nn,_i=rt.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Ri=rt.FetchXmlHttpFactory=xs,Li=rt.WebChannel=mn,Vi=rt.XhrIo=Fs;const Oi="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Mi.UNAUTHENTICATED=new Mi(null),Mi.GOOGLE_CREDENTIALS=new Mi("google-credentials-uid"),Mi.FIRST_PARTY=new Mi("first-party-uid"),Mi.MOCK_USER=new Mi("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Fi="9.9.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new nt.Yd("@firebase/firestore");function Ui(){return Pi.logLevel}function $i(t,...e){if(Pi.logLevel<=nt["in"].DEBUG){const n=e.map(zi);Pi.debug(`Firestore (${Fi}): ${t}`,...n)}}function Bi(t,...e){if(Pi.logLevel<=nt["in"].ERROR){const n=e.map(zi);Pi.error(`Firestore (${Fi}): ${t}`,...n)}}function ji(t,...e){if(Pi.logLevel<=nt["in"].WARN){const n=e.map(zi);Pi.warn(`Firestore (${Fi}): ${t}`,...n)}}function zi(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(t="Unexpected state"){const e=`FIRESTORE (${Fi}) INTERNAL ASSERTION FAILED: `+t;throw Bi(e),new Error(e)}function qi(t,e){t||Gi()}function Ki(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Qi extends st.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Zi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Mi.UNAUTHENTICATED)))}shutdown(){}}class Yi{constructor(t){this.t=t,this.currentUser=Mi.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Wi;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Wi,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{$i("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):($i("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Wi)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?($i("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(qi("string"==typeof e.accessToken),new Xi(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return qi(null===t||"string"==typeof t),new Mi(t)}}class Ji{constructor(t,e,n){this.type="FirstParty",this.user=Mi.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const s=t.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class tr{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new Ji(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Mi.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class er{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nr{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&$i("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,$i("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{$i("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?s(t):$i("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(qi("string"==typeof t.token),this.p=t.token,new er(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=sr(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function rr(t,e){return t<e?-1:t>e?1:0}function or(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ar{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Qi(Hi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Qi(Hi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Qi(Hi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Qi(Hi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ar.fromMillis(Date.now())}static fromDate(t){return ar.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ar(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?rr(this.nanoseconds,t.nanoseconds):rr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t){this.timestamp=t}static fromTimestamp(t){return new lr(t)}static min(){return new lr(new ar(0,0))}static max(){return new lr(new ar(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t,e,n){void 0===e?e=0:e>t.length&&Gi(),void 0===n?n=t.length-e:n>t.length-e&&Gi(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===hr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof hr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ur extends hr{construct(t,e,n){return new ur(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Qi(Hi.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ur(e)}static emptyPath(){return new ur([])}}const cr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dr extends hr{construct(t,e,n){return new dr(t,e,n)}static isValidIdentifier(t){return cr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dr.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new dr(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new Qi(Hi.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new Qi(Hi.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Qi(Hi.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new Qi(Hi.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new dr(e)}static emptyPath(){return new dr([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t){this.path=t}static fromPath(t){return new fr(ur.fromString(t))}static fromName(t){return new fr(ur.fromString(t).popFirst(5))}static empty(){return new fr(ur.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ur.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ur.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new fr(new ur(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}pr.UNKNOWN_ID=-1;function gr(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=lr.fromTimestamp(1e9===s?new ar(n+1,0):new ar(n,s));return new yr(i,fr.empty(),e)}function mr(t){return new yr(t.readTime,t.key,-1)}class yr{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new yr(lr.min(),fr.empty(),-1)}static max(){return new yr(lr.max(),fr.empty(),-1)}}function vr(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=fr.comparator(t.documentKey,e.documentKey),0!==n?n:rr(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class br{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Er(t){if(t.code!==Hi.FAILED_PRECONDITION||t.message!==wr)throw t;$i("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Gi(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Tr(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Tr?e:Tr.resolve(e)}catch(t){return Tr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Tr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Tr.reject(e)}static resolve(t){return new Tr(((e,n)=>{e(t)}))}static reject(t){return new Tr(((e,n)=>{n(t)}))}static waitFor(t){return new Tr(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=Tr.resolve(!1);for(const n of t)e=e.next((t=>t?Tr.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new Tr(((n,s)=>{const i=t.length,r=new Array(i);let o=0;for(let a=0;a<i;a++){const l=a;e(t[l]).next((t=>{r[l]=t,++o,o===i&&n(r)}),(t=>s(t)))}}))}static doWhile(t,e){return new Tr(((n,s)=>{const i=()=>{!0===t()?e().next((()=>{i()}),s):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ir{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ar(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Dr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ir.ot=-1;class Nr{constructor(t,e){this.comparator=t,this.root=e||xr.EMPTY}insert(t,e){return new Nr(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,xr.BLACK,null,null))}remove(t){return new Nr(this.comparator,this.root.remove(t,this.comparator).copy(null,null,xr.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new kr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new kr(this.root,t,this.comparator,!1)}getReverseIterator(){return new kr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new kr(this.root,t,this.comparator,!0)}}class kr{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class xr{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:xr.RED,this.left=null!=s?s:xr.EMPTY,this.right=null!=i?i:xr.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new xr(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return xr.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return xr.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,xr.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,xr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Gi();if(this.right.isRed())throw Gi();const t=this.left.check();if(t!==this.right.check())throw Gi();return t+(this.isRed()?0:1)}}xr.EMPTY=null,xr.RED=!0,xr.BLACK=!1,xr.EMPTY=new class{constructor(){this.size=0}get key(){throw Gi()}get value(){throw Gi()}get color(){throw Gi()}get left(){throw Gi()}get right(){throw Gi()}copy(t,e,n,s,i){return this}insert(t,e,n){return new xr(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _r{constructor(t){this.comparator=t,this.data=new Nr(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Rr(this.data.getIterator())}getIteratorFrom(t){return new Rr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof _r))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new _r(this.comparator);return e.data=t,e}}class Rr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lr{constructor(t){this.fields=t,t.sort(dr.comparator)}static empty(){return new Lr([])}unionWith(t){let e=new _r(dr.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Lr(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return or(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vr{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Vr(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Vr(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return rr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Vr.EMPTY_BYTE_STRING=new Vr("");const Or=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mr(t){if(qi(!!t),"string"==typeof t){let e=0;const n=Or.exec(t);if(qi(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Fr(t.seconds),nanos:Fr(t.nanos)}}function Fr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Pr(t){return"string"==typeof t?Vr.fromBase64String(t):Vr.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function $r(t){const e=Mr(t.mapValue.fields.__local_write_time__.timestampValue);return new ar(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class jr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new jr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof jr&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(t){return null==t}function Gr(t){return 0===t&&1/t==-1/0}function qr(t){return"number"==typeof t&&Number.isInteger(t)&&!Gr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Hr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ur(t)?4:io(t)?9007199254740991:10:Gi()}function Qr(t,e){if(t===e)return!0;const n=Hr(t);if(n!==Hr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return $r(t).isEqual($r(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Mr(t.timestampValue),s=Mr(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Pr(t.bytesValue).isEqual(Pr(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Fr(t.geoPointValue.latitude)===Fr(e.geoPointValue.latitude)&&Fr(t.geoPointValue.longitude)===Fr(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Fr(t.integerValue)===Fr(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Fr(t.doubleValue),s=Fr(e.doubleValue);return n===s?Gr(n)===Gr(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return or(t.arrayValue.values||[],e.arrayValue.values||[],Qr);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(Cr(n)!==Cr(s))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===s[i]||!Qr(n[i],s[i])))return!1;return!0}(t,e);default:return Gi()}}function Wr(t,e){return void 0!==(t.values||[]).find((t=>Qr(t,e)))}function Xr(t,e){if(t===e)return 0;const n=Hr(t),s=Hr(e);if(n!==s)return rr(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return rr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Fr(t.integerValue||t.doubleValue),s=Fr(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return Zr(t.timestampValue,e.timestampValue);case 4:return Zr($r(t),$r(e));case 5:return rr(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Pr(t),s=Pr(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let i=0;i<n.length&&i<s.length;i++){const t=rr(n[i],s[i]);if(0!==t)return t}return rr(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=rr(Fr(t.latitude),Fr(e.latitude));return 0!==n?n:rr(Fr(t.longitude),Fr(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let i=0;i<n.length&&i<s.length;++i){const t=Xr(n[i],s[i]);if(t)return t}return rr(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Kr.mapValue&&e===Kr.mapValue)return 0;if(t===Kr.mapValue)return 1;if(e===Kr.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let o=0;o<s.length&&o<r.length;++o){const t=rr(s[o],r[o]);if(0!==t)return t;const e=Xr(n[s[o]],i[r[o]]);if(0!==e)return e}return rr(s.length,r.length)}(t.mapValue,e.mapValue);default:throw Gi()}}function Zr(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return rr(t,e);const n=Mr(t),s=Mr(e),i=rr(n.seconds,s.seconds);return 0!==i?i:rr(n.nanos,s.nanos)}function Yr(t){return Jr(t)}function Jr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Mr(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Pr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,fr.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=Jr(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${Jr(t.fields[i])}`;return n+"}"}(t.mapValue):Gi();var e,n}function to(t){return!!t&&"integerValue"in t}function eo(t){return!!t&&"arrayValue"in t}function no(t){return!!t&&"mapValue"in t}function so(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ar(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=so(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=so(t.arrayValue.values[n]);return e}return Object.assign({},t)}function io(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ro{constructor(t){this.value=t}static empty(){return new ro({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!no(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=so(e)}setAll(t){let e=dr.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=so(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());no(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Qr(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];no(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Ar(e,((e,n)=>t[e]=n));for(const s of n)delete t[s]}clone(){return new ro(so(this.value))}}function oo(t){const e=[];return Ar(t.fields,((t,n)=>{const s=new dr([t]);if(no(n)){const t=oo(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new Lr(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ao{constructor(t,e,n,s,i,r){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.data=i,this.documentState=r}static newInvalidDocument(t){return new ao(t,0,lr.min(),lr.min(),ro.empty(),0)}static newFoundDocument(t,e,n){return new ao(t,1,e,lr.min(),n,0)}static newNoDocument(t,e){return new ao(t,2,e,lr.min(),ro.empty(),0)}static newUnknownDocument(t,e){return new ao(t,3,e,lr.min(),ro.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ro.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ro.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=lr.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ao&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ao(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.ut=null}}function ho(t,e=null,n=[],s=[],i=null,r=null,o=null){return new lo(t,e,n,s,i,r,o)}function uo(t){const e=Ki(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+Yr(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),zr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Yr(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Yr(t))).join(",")),e.ut=t}return e.ut}function co(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Yr(e.value)}`;var e})).join(", ")}]`),zr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Yr(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Yr(t))).join(",")),`Target(${e})`}function fo(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Co(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!Qr(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Do(t.startAt,e.startAt)&&Do(t.endAt,e.endAt)}class po extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new go(t,e,n):"array-contains"===e?new wo(t,n):"in"===e?new bo(t,n):"not-in"===e?new Eo(t,n):"array-contains-any"===e?new To(t,n):new po(t,e,n)}static ct(t,e,n){return"in"===e?new mo(t,n):new yo(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(Xr(e,this.value)):null!==e&&Hr(this.value)===Hr(e)&&this.at(Xr(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Gi()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class go extends po{constructor(t,e,n){super(t,e,n),this.key=fr.fromName(n.referenceValue)}matches(t){const e=fr.comparator(t.key,this.key);return this.at(e)}}class mo extends po{constructor(t,e){super(t,"in",e),this.keys=vo("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class yo extends po{constructor(t,e){super(t,"not-in",e),this.keys=vo("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function vo(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>fr.fromName(t.referenceValue)))}class wo extends po{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return eo(e)&&Wr(e.arrayValue,this.value)}}class bo extends po{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Wr(this.value.arrayValue,e)}}class Eo extends po{constructor(t,e){super(t,"not-in",e)}matches(t){if(Wr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Wr(this.value.arrayValue,e)}}class To extends po{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!eo(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Wr(this.value.arrayValue,t)))}}class So{constructor(t,e){this.position=t,this.inclusive=e}}class Io{constructor(t,e="asc"){this.field=t,this.dir=e}}function Co(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ao(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?fr.comparator(fr.fromName(o.referenceValue),n.key):Xr(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function Do(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qr(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function ko(t,e,n,s,i,r,o,a){return new No(t,e,n,s,i,r,o,a)}function xo(t){return new No(t)}function _o(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Ro(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Lo(t){for(const e of t.filters)if(e.ht())return e.field;return null}function Vo(t){return null!==t.collectionGroup}function Oo(t){const e=Ki(t);if(null===e.lt){e.lt=[];const t=Lo(e),n=Ro(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new Io(t)),e.lt.push(new Io(dr.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Io(dr.keyField(),t))}}}return e.lt}function Mo(t){const e=Ki(t);if(!e.ft)if("F"===e.limitType)e.ft=ho(e.path,e.collectionGroup,Oo(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Oo(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Io(i.field,e))}const n=e.endAt?new So(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new So(e.startAt.position,e.startAt.inclusive):null;e.ft=ho(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.ft}function Fo(t,e,n){return new No(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Po(t,e){return fo(Mo(t),Mo(e))&&t.limitType===e.limitType}function Uo(t){return`${uo(Mo(t))}|lt:${t.limitType}`}function $o(t){return`Query(target=${co(Mo(t))}; limitType=${t.limitType})`}function Bo(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):fr.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=Ao(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,Oo(t),e))&&!(t.endAt&&!function(t,e,n){const s=Ao(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,Oo(t),e))}(t,e)}function jo(t){return(e,n)=>{let s=!1;for(const i of Oo(t)){const t=zo(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function zo(t,e,n){const s=t.field.isKeyField()?fr.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?Xr(s,i):Gi()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Gi()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gr(e)?"-0":e}}function qo(t){return{integerValue:""+t}}function Ko(t,e){return qr(e)?qo(e):Go(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this._=void 0}}function Qo(t,e,n){return t instanceof Zo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Yo?Jo(t,e):t instanceof ta?ea(t,e):function(t,e){const n=Xo(t,e),s=sa(n)+sa(t._t);return to(n)&&to(t._t)?qo(s):Go(t.wt,s)}(t,e)}function Wo(t,e,n){return t instanceof Yo?Jo(t,e):t instanceof ta?ea(t,e):n}function Xo(t,e){return t instanceof na?to(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Zo extends Ho{}class Yo extends Ho{constructor(t){super(),this.elements=t}}function Jo(t,e){const n=ia(e);for(const s of t.elements)n.some((t=>Qr(t,s)))||n.push(s);return{arrayValue:{values:n}}}class ta extends Ho{constructor(t){super(),this.elements=t}}function ea(t,e){let n=ia(e);for(const s of t.elements)n=n.filter((t=>!Qr(t,s)));return{arrayValue:{values:n}}}class na extends Ho{constructor(t,e){super(),this.wt=t,this._t=e}}function sa(t){return Fr(t.integerValue||t.doubleValue)}function ia(t){return eo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Yo&&e instanceof Yo||t instanceof ta&&e instanceof ta?or(t.elements,e.elements,Qr):t instanceof na&&e instanceof na?Qr(t._t,e._t):t instanceof Zo&&e instanceof Zo}(t.transform,e.transform)}class oa{constructor(t,e){this.version=t,this.transformResults=e}}class aa{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new aa}static exists(t){return new aa(void 0,t)}static updateTime(t){return new aa(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function la(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class ha{}function ua(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new ba(t.key,aa.none()):new ga(t.key,t.data,aa.none());{const n=t.data,s=ro.empty();let i=new _r(dr.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),i=i.add(t)}return new ma(t.key,s,new Lr(i.toArray()),aa.none())}}function ca(t,e,n){t instanceof ga?function(t,e,n){const s=t.value.clone(),i=va(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof ma?function(t,e,n){if(!la(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=va(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(ya(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function da(t,e,n,s){return t instanceof ga?function(t,e,n,s){if(!la(t.precondition,e))return n;const i=t.value.clone(),r=wa(t.fieldTransforms,s,e);return i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,s):t instanceof ma?function(t,e,n,s){if(!la(t.precondition,e))return n;const i=wa(t.fieldTransforms,s,e),r=e.data;return r.setAll(ya(t)),r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return la(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function fa(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),i=Xo(s.transform,t||null);null!=i&&(null===n&&(n=ro.empty()),n.set(s.field,i))}return n||null}function pa(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&or(t,e,((t,e)=>ra(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ga extends ha{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ma extends ha{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ya(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function va(t,e,n){const s=new Map;qi(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Wo(o,a,n[i]))}return s}function wa(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,Qo(t,r,e))}return s}class ba extends ha{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ea extends ha{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ta,Sa;function Ia(t){switch(t){default:return Gi();case Hi.CANCELLED:case Hi.UNKNOWN:case Hi.DEADLINE_EXCEEDED:case Hi.RESOURCE_EXHAUSTED:case Hi.INTERNAL:case Hi.UNAVAILABLE:case Hi.UNAUTHENTICATED:return!1;case Hi.INVALID_ARGUMENT:case Hi.NOT_FOUND:case Hi.ALREADY_EXISTS:case Hi.PERMISSION_DENIED:case Hi.FAILED_PRECONDITION:case Hi.ABORTED:case Hi.OUT_OF_RANGE:case Hi.UNIMPLEMENTED:case Hi.DATA_LOSS:return!0}}function Ca(t){if(void 0===t)return Bi("GRPC error has no .code"),Hi.UNKNOWN;switch(t){case Ta.OK:return Hi.OK;case Ta.CANCELLED:return Hi.CANCELLED;case Ta.UNKNOWN:return Hi.UNKNOWN;case Ta.DEADLINE_EXCEEDED:return Hi.DEADLINE_EXCEEDED;case Ta.RESOURCE_EXHAUSTED:return Hi.RESOURCE_EXHAUSTED;case Ta.INTERNAL:return Hi.INTERNAL;case Ta.UNAVAILABLE:return Hi.UNAVAILABLE;case Ta.UNAUTHENTICATED:return Hi.UNAUTHENTICATED;case Ta.INVALID_ARGUMENT:return Hi.INVALID_ARGUMENT;case Ta.NOT_FOUND:return Hi.NOT_FOUND;case Ta.ALREADY_EXISTS:return Hi.ALREADY_EXISTS;case Ta.PERMISSION_DENIED:return Hi.PERMISSION_DENIED;case Ta.FAILED_PRECONDITION:return Hi.FAILED_PRECONDITION;case Ta.ABORTED:return Hi.ABORTED;case Ta.OUT_OF_RANGE:return Hi.OUT_OF_RANGE;case Ta.UNIMPLEMENTED:return Hi.UNIMPLEMENTED;case Ta.DATA_LOSS:return Hi.DATA_LOSS;default:return Gi()}}(Sa=Ta||(Ta={}))[Sa.OK=0]="OK",Sa[Sa.CANCELLED=1]="CANCELLED",Sa[Sa.UNKNOWN=2]="UNKNOWN",Sa[Sa.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Sa[Sa.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Sa[Sa.NOT_FOUND=5]="NOT_FOUND",Sa[Sa.ALREADY_EXISTS=6]="ALREADY_EXISTS",Sa[Sa.PERMISSION_DENIED=7]="PERMISSION_DENIED",Sa[Sa.UNAUTHENTICATED=16]="UNAUTHENTICATED",Sa[Sa.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Sa[Sa.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Sa[Sa.ABORTED=10]="ABORTED",Sa[Sa.OUT_OF_RANGE=11]="OUT_OF_RANGE",Sa[Sa.UNIMPLEMENTED=12]="UNIMPLEMENTED",Sa[Sa.INTERNAL=13]="INTERNAL",Sa[Sa.UNAVAILABLE=14]="UNAVAILABLE",Sa[Sa.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Aa{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[s,i]of n)if(this.equalsFn(s,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ar(this.inner,((e,n)=>{for(const[s,i]of n)t(s,i)}))}isEmpty(){return Dr(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=new Nr(fr.comparator);function Na(){return Da}const ka=new Nr(fr.comparator);function xa(...t){let e=ka;for(const n of t)e=e.insert(n.key,n);return e}function _a(t){let e=ka;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Ra(){return Va()}function La(){return Va()}function Va(){return new Aa((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Oa=new Nr(fr.comparator),Ma=new _r(fr.comparator);function Fa(...t){let e=Ma;for(const n of t)e=e.add(n);return e}const Pa=new _r(rr);function Ua(){return Pa}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"}})(),(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}})();class $a{constructor(t,e){this.databaseId=t,this.dt=e}}function Ba(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ja(t,e){return t.dt?e.toBase64():e.toUint8Array()}function za(t,e){return Ba(t,e.toTimestamp())}function Ga(t){return qi(!!t),lr.fromTimestamp(function(t){const e=Mr(t);return new ar(e.seconds,e.nanos)}(t))}function qa(t,e){return function(t){return new ur(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Ka(t){const e=ur.fromString(t);return qi(ol(e)),e}function Ha(t,e){return qa(t.databaseId,e.path)}function Qa(t){const e=Ka(t);return 4===e.length?ur.emptyPath():Xa(e)}function Wa(t){return new ur(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Xa(t){return qi(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Za(t,e,n){return{name:Ha(t,e),fields:n.value.mapValue.fields}}function Ya(t,e){let n;if(e instanceof ga)n={update:Za(t,e.key,e.value)};else if(e instanceof ba)n={delete:Ha(t,e.key)};else if(e instanceof ma)n={update:Za(t,e.key,e.data),updateMask:rl(e.fieldMask)};else{if(!(e instanceof Ea))return Gi();n={verify:Ha(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Zo)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Yo)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ta)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof na)return{fieldPath:e.field.canonicalString(),increment:n._t};throw Gi()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:za(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Gi()}(t,e.precondition)),n}function Ja(t,e){return t&&t.length>0?(qi(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Ga(t.updateTime):Ga(e);return n.isEqual(lr.min())&&(n=Ga(e)),new oa(n,t.transformResults||[])}(t,e)))):[]}function tl(t){let e=Qa(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){qi(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=el(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Io(nl(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,zr(e)?null:e}(n.limit));let l=null;n.startAt&&(l=function(t){const e=!!t.before,n=t.values||[];return new So(n,e)}(n.startAt));let h=null;return n.endAt&&(h=function(t){const e=!t.before,n=t.values||[];return new So(n,e)}(n.endAt)),ko(e,i,o,r,a,"F",l,h)}function el(t){return t?void 0!==t.unaryFilter?[il(t)]:void 0!==t.fieldFilter?[sl(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>el(t))).reduce(((t,e)=>t.concat(e))):Gi():[]}function nl(t){return dr.fromServerFormat(t.fieldPath)}function sl(t){return po.create(nl(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Gi()}}(t.fieldFilter.op),t.fieldFilter.value)}function il(t){switch(t.unaryFilter.op){case"IS_NAN":const e=nl(t.unaryFilter.field);return po.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=nl(t.unaryFilter.field);return po.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=nl(t.unaryFilter.field);return po.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=nl(t.unaryFilter.field);return po.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Gi()}}function rl(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ol(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ll=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],hl=ll;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ul{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const e=this.mutations[s];e.key.isEqual(t.key)&&ca(e,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=da(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=da(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=La();return this.mutations.forEach((s=>{const i=t.get(s.key),r=i.overlayedDocument;let o=this.applyToLocalView(r,i.mutatedFields);o=e.has(s.key)?null:o;const a=ua(r,o);null!==a&&n.set(s.key,a),r.isValidDocument()||r.convertToNoDocument(lr.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Fa())}isEqual(t){return this.batchId===t.batchId&&or(this.mutations,t.mutations,((t,e)=>pa(t,e)))&&or(this.baseMutations,t.baseMutations,((t,e)=>pa(t,e)))}}class cl{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){qi(t.mutations.length===n.length);let s=Oa;const i=t.mutations;for(let r=0;r<i.length;r++)s=s.insert(i[r].key,n[r].version);return new cl(t,e,n,s)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(t){this.ne=t}}function pl(t){const e=tl({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Fo(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gl{constructor(){}re(t,e){this.oe(t,e),e.ue()}oe(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae(Fr(t.integerValue));else if("doubleValue"in t){const n=Fr(t.doubleValue);isNaN(n)?this.ce(e,13):(this.ce(e,15),Gr(n)?e.ae(0):e.ae(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ce(e,20),"string"==typeof n?e.he(n):(e.he(`${n.seconds||""}`),e.ae(n.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de(Pr(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ce(e,45),e.ae(n.latitude||0),e.ae(n.longitude||0)}else"mapValue"in t?io(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):Gi()}le(t,e){this.ce(e,25),this.ge(t,e)}ge(t,e){e.he(t)}we(t,e){const n=t.fields||{};this.ce(e,55);for(const s of Object.keys(n))this.le(s,e),this.oe(n[s],e)}me(t,e){const n=t.values||[];this.ce(e,50);for(const s of n)this.oe(s,e)}_e(t,e){this.ce(e,37),fr.fromName(t).path.forEach((t=>{this.ce(e,60),this.ge(t,e)}))}ce(t,e){t.ae(e)}fe(t){t.ae(2)}}gl.ye=new gl;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ml{constructor(){this.ze=new yl}addToCollectionParentIndex(t,e){return this.ze.add(e),Tr.resolve()}getCollectionParents(t,e){return Tr.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return Tr.resolve()}deleteFieldIndex(t,e){return Tr.resolve()}getDocumentsMatchingTarget(t,e){return Tr.resolve(null)}getIndexType(t,e){return Tr.resolve(0)}getFieldIndexes(t,e){return Tr.resolve([])}getNextCollectionGroupToUpdate(t){return Tr.resolve(null)}getMinOffset(t,e){return Tr.resolve(yr.min())}getMinOffsetFromCollectionGroup(t,e){return Tr.resolve(yr.min())}updateCollectionGroup(t,e,n){return Tr.resolve()}updateIndexEntries(t,e){return Tr.resolve()}}class yl{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new _r(ur.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new _r(ur.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class vl{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new vl(t,vl.DEFAULT_COLLECTION_PERCENTILE,vl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vl.DEFAULT_COLLECTION_PERCENTILE=10,vl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vl.DEFAULT=new vl(41943040,vl.DEFAULT_COLLECTION_PERCENTILE,vl.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vl.DISABLED=new vl(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wl{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new wl(0)}static Rn(){return new wl(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bl{constructor(){this.changes=new Aa((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ao.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Tr.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class El{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&da(n.mutation,t,Lr.empty(),ar.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Fa()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Fa()){const s=Ra();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=xa();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Ra();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Fa())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let i=Na();const r=Va(),o=Va();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof ma)?i=i.insert(e.key,e):void 0!==o&&(r.set(e.key,o.mutation.getFieldMask()),da(o.mutation,e,o.mutation.getFieldMask(),ar.now()))})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new El(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Va();let s=new Nr(((t,e)=>t-e)),i=Fa();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||Lr.empty();o=i.applyToLocalView(r,o),n.set(t,o);const a=(s.get(i.batchId)||Fa()).add(t);s=s.insert(i.batchId,a)}))})).next((()=>{const r=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,l=s.value,h=La();l.forEach((t=>{if(!i.has(t)){const s=ua(e.get(t),n.get(t));null!==s&&h.set(t,s),i=i.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,h))}return Tr.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return fr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Vo(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const r=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):Tr.resolve(Ra());let o=-1,a=i;return r.next((e=>Tr.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Tr.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Fa()))).next((t=>({batchId:o,changes:_a(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new fr(e)).next((t=>{let e=xa();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let i=xa();return this.indexManager.getCollectionParents(t,s).next((r=>Tr.forEach(r,(r=>{const o=function(t,e){return new No(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===s.get(n)&&(s=s.insert(n,ao.newInvalidDocument(n)))}));let n=xa();return s.forEach(((s,i)=>{const r=t.get(s);void 0!==r&&da(r.mutation,i,Lr.empty(),ar.now()),Bo(e,i)&&(n=n.insert(s,i))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):Tr.resolve(ao.newInvalidDocument(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,e){return Tr.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:Ga(n.createTime)}),Tr.resolve()}getNamedQuery(t,e){return Tr.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,function(t){return{name:t.name,query:pl(t.bundledQuery),readTime:Ga(t.readTime)}}(e)),Tr.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(){this.overlays=new Nr(fr.comparator),this.Xn=new Map}getOverlay(t,e){return Tr.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Ra();return Tr.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.ie(t,e,s)})),Tr.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Xn.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.Xn.delete(n)),Tr.resolve()}getOverlaysForCollection(t,e,n){const s=Ra(),i=e.length+1,r=new fr(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return Tr.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new Nr(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Ra(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Ra(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=s)break;return Tr.resolve(o)}ie(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.Xn.get(s.largestBatchId).delete(n.key);this.Xn.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new dl(e,n));let i=this.Xn.get(e);void 0===i&&(i=Fa(),this.Xn.set(e,i)),this.Xn.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(){this.Zn=new _r(Al.ts),this.es=new _r(Al.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new Al(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new Al(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new fr(new ur([])),n=new Al(e,t),s=new Al(e,t+1),i=[];return this.es.forEachInRange([n,s],(t=>{this.rs(t),i.push(t.key)})),i}cs(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new fr(new ur([])),n=new Al(e,t),s=new Al(e,t+1);let i=Fa();return this.es.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Al(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Al{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return fr.comparator(t.key,e.key)||rr(t.ls,e.ls)}static ns(t,e){return rr(t.ls,e.ls)||fr.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new _r(Al.ts)}checkEmpty(t){return Tr.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new ul(i,e,n,s);this.mutationQueue.push(r);for(const o of s)this.ds=this.ds.add(new Al(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Tr.resolve(r)}lookupMutationBatch(t,e){return Tr.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ws(n),i=s<0?0:s;return Tr.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Tr.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return Tr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Al(e,0),s=new Al(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,s],(t=>{const e=this._s(t.ls);i.push(e)})),Tr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new _r(rr);return e.forEach((t=>{const e=new Al(t,0),s=new Al(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,s],(t=>{n=n.add(t.ls)}))})),Tr.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;fr.isDocumentKey(i)||(i=i.child(""));const r=new Al(new fr(i),0);let o=new _r(rr);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.ls)),!0)}),r),Tr.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){qi(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return Tr.forEach(e.mutations,(s=>{const i=new Al(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.ds=n}))}In(t){}containsKey(t,e){const n=new Al(e,0),s=this.ds.firstAfterOrEqual(n);return Tr.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,Tr.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t){this.ps=t,this.docs=new Nr(fr.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Tr.resolve(n?n.document.mutableCopy():ao.newInvalidDocument(e))}getEntries(t,e){let n=Na();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ao.newInvalidDocument(t))})),Tr.resolve(n)}getAllFromCollection(t,e,n){let s=Na();const i=new fr(e.child("")),r=this.docs.getIteratorFrom(i);for(;r.hasNext();){const{key:t,value:{document:i}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||vr(mr(i),n)<=0||(s=s.insert(i.key,i.mutableCopy()))}return Tr.resolve(s)}getAllFromCollectionGroup(t,e,n,s){Gi()}Is(t,e){return Tr.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new kl(this)}getSize(t){return Tr.resolve(this.size)}}class kl extends bl{constructor(t){super(),this.zn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.zn.addEntry(t,s)):this.zn.removeEntry(n)})),Tr.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t){this.persistence=t,this.Ts=new Aa((t=>uo(t)),fo),this.lastRemoteSnapshotVersion=lr.min(),this.highestTargetId=0,this.Es=0,this.As=new Cl,this.targetCount=0,this.Rs=wl.An()}forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),Tr.resolve()}getLastRemoteSnapshotVersion(t){return Tr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Tr.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),Tr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),Tr.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new wl(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,Tr.resolve()}updateTargetData(t,e){return this.vn(e),Tr.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,Tr.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Ts.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),Tr.waitFor(i).next((()=>s))}getTargetCount(t){return Tr.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return Tr.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),Tr.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),Tr.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),Tr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return Tr.resolve(n)}containsKey(t,e){return Tr.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t,e){this.bs={},this.overlays={},this.Ps=new Ir(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new xl(this),this.indexManager=new ml,this.remoteDocumentCache=function(t){return new Nl(t)}((t=>this.referenceDelegate.Ss(t))),this.wt=new fl(e),this.Ds=new Sl(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Il,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new Dl(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){$i("MemoryPersistence","Starting transaction:",t);const s=new Rl(this.Ps.next());return this.referenceDelegate.Cs(),n(s).next((t=>this.referenceDelegate.xs(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Ns(t,e){return Tr.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class Rl extends br{constructor(t){super(),this.currentSequenceNumber=t}}class Ll{constructor(t){this.persistence=t,this.ks=new Cl,this.Os=null}static Ms(t){return new Ll(t)}get Fs(){if(this.Os)return this.Os;throw Gi()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),Tr.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),Tr.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),Tr.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach((t=>this.Fs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Fs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Cs(){this.Os=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Tr.forEach(this.Fs,(n=>{const s=fr.fromPath(n);return this.$s(t,s).next((t=>{t||e.removeEntry(s,lr.min())}))})).next((()=>(this.Os=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())}))}Ss(t){return 0}$s(t,e){return Tr.or([()=>Tr.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vl{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=s}static Vi(t,e){let n=Fa(),s=Fa();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Vl(t,e.fromCache,n,s)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(){this.Si=!1}initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,s){return this.Ci(t,e).next((i=>i||this.xi(t,e,s,n))).next((n=>n||this.Ni(t,e)))}Ci(t,e){return Tr.resolve(null)}xi(t,e,n,s){return _o(e)||s.isEqual(lr.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next((i=>{const r=this.ki(e,i);return this.Oi(e,r,n,s)?this.Ni(t,e):(Ui()<=nt["in"].DEBUG&&$i("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),$o(e)),this.Mi(t,r,e,gr(s,-1)))}))}ki(t,e){let n=new _r(jo(t));return e.forEach(((e,s)=>{Bo(t,s)&&(n=n.add(s))})),n}Oi(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ni(t,e){return Ui()<=nt["in"].DEBUG&&$i("QueryEngine","Using full collection scan to execute query:",$o(e)),this.Di.getDocumentsMatchingQuery(t,e,yr.min())}Mi(t,e,n,s){return this.Di.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(t,e,n,s){this.persistence=t,this.Fi=e,this.wt=s,this.$i=new Nr(rr),this.Bi=new Aa((t=>uo(t)),fo),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Tl(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.$i)))}}function Fl(t,e,n,s){return new Ml(t,e,n,s)}async function Pl(t,e){const n=Ki(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((i=>(s=i,n.qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=Fa();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ki:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function Ul(t,e){const n=Ki(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const i=n.batch,r=i.keys();let o=Tr.resolve();return r.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);qi(null!==r),e.version.compareTo(r)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Fa();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,s)))}))}function $l(t){const e=Ki(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Vs.getLastRemoteSnapshotVersion(t)))}function Bl(t,e){const n=Ki(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}class jl{constructor(){this.activeTargetIds=Ua()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class zl{constructor(){this.Fr=new jl,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new jl,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{Br(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){$i("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){$i("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,e,n,s,i){const r=this.oo(t,e);$i("RestConnection","Sending: ",r,n);const o={};return this.uo(o,s,i),this.co(t,r,o,n).then((t=>($i("RestConnection","Received: ",t),t)),(e=>{throw ji("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}ao(t,e,n,s,i,r){return this.ro(t,e,n,s,i)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Fi,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=Kl[t];return`${this.so}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,s){return new Promise(((i,r)=>{const o=new Vi;o.listenOnce(ki.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Ni.NO_ERROR:const e=o.getResponseJson();$i("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Ni.TIMEOUT:$i("Connection",'RPC "'+t+'" timed out'),r(new Qi(Hi.DEADLINE_EXCEEDED,"Request time out"));break;case Ni.HTTP_ERROR:const n=o.getStatus();if($i("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Hi).indexOf(e)>=0?e:Hi.UNKNOWN}(t.status);r(new Qi(e,t.message))}else r(new Qi(Hi.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new Qi(Hi.UNAVAILABLE,"Connection failed."));break;default:Gi()}}finally{$i("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const s=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Ai(),r=Di(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Ri({})),this.uo(o.initMessageHeaders,e,n),(0,st.uI)()||(0,st.b$)()||(0,st.d)()||(0,st.w1)()||(0,st.Mn)()||(0,st.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=s.join("");$i("Connection","Creating WebChannel: "+a,o);const l=i.createWebChannel(a,o);let h=!1,u=!1;const c=new Hl({jr:t=>{u?$i("Connection","Not sending because WebChannel is closed:",t):(h||($i("Connection","Opening WebChannel transport."),l.open(),h=!0),$i("Connection","WebChannel sending:",t),l.send(t))},Wr:()=>l.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(l,Li.EventType.OPEN,(()=>{u||$i("Connection","WebChannel transport opened.")})),d(l,Li.EventType.CLOSE,(()=>{u||(u=!0,$i("Connection","WebChannel transport closed"),c.eo())})),d(l,Li.EventType.ERROR,(t=>{u||(u=!0,ji("Connection","WebChannel transport errored:",t),c.eo(new Qi(Hi.UNAVAILABLE,"The operation could not be completed")))})),d(l,Li.EventType.MESSAGE,(t=>{var e;if(!u){const n=t.data[0];qi(!!n);const s=n,i=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(i){$i("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Ta[t];if(void 0!==e)return Ca(e)}(t),n=i.message;void 0===e&&(e=Hi.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),u=!0,c.eo(new Qi(e,n)),l.close()}else $i("Connection","WebChannel received:",n),c.no(n)}})),d(r,xi.STAT_EVENT,(t=>{t.stat===_i.PROXY?$i("Connection","Detected buffering proxy"):t.stat===_i.NOPROXY&&$i("Connection","Detected no buffering proxy")})),setTimeout((()=>{c.Zr()}),0),c}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(t){return new $a(t,!0)}class Zl{constructor(t,e,n=1e3,s=1.5,i=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=s,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),s=Math.max(0,e-n);s>0&&$i("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,s,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t,e,n,s,i,r,o,a){this.js=t,this.Ao=n,this.Ro=s,this.bo=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Zl(t,e)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===Hi.RESOURCE_EXHAUSTED?(Bi(e.toString()),Bi("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===Hi.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new Qi(Hi.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return $i("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget((()=>this.Po===t?e():($i("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Jl extends Yl{constructor(t,e,n,s,i,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,r),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(qi(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const e=Ja(t.writeResults,t.commitTime),n=Ga(t.commitTime);return this.listener.Jo(n,e)}return qi(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=Wa(this.wt),this.Mo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Ya(this.wt,t)))};this.Mo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=s,this.Zo=!1}tu(){if(this.Zo)throw new Qi(Hi.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.bo.ro(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Hi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Qi(Hi.UNKNOWN,t.toString())}))}ao(t,e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.bo.ao(t,e,n,i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Hi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Qi(Hi.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}}class eh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Bi(e),this.su=!1):$i("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br((t=>{n.enqueueAndForget((async()=>{rh(this)&&($i("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Ki(t);e.lu.add(4),await ih(e),e._u.set("Unknown"),e.lu.delete(4),await sh(e)}(this))}))})),this._u=new eh(n,s)}}async function sh(t){if(rh(t))for(const e of t.fu)await e(!0)}async function ih(t){for(const e of t.fu)await e(!1)}function rh(t){return 0===Ki(t).lu.size}async function oh(t,e,n){if(!Sr(e))throw e;t.lu.add(1),await ih(t),t._u.set("Offline"),n||(n=()=>$l(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{$i("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await sh(t)}))}function ah(t,e){return e().catch((n=>oh(t,n,e)))}async function lh(t){const e=Ki(t),n=wh(e);let s=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;hh(e);)try{const t=await Bl(e.localStore,s);if(null===t){0===e.au.length&&n.ko();break}s=t.batchId,uh(e,t)}catch(t){await oh(e,t)}ch(e)&&dh(e)}function hh(t){return rh(t)&&t.au.length<10}function uh(t,e){t.au.push(e);const n=wh(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function ch(t){return rh(t)&&!wh(t).Do()&&t.au.length>0}function dh(t){wh(t).start()}async function fh(t){wh(t).Xo()}async function ph(t){const e=wh(t);for(const n of t.au)e.Ho(n.mutations)}async function gh(t,e,n){const s=t.au.shift(),i=cl.from(s,e,n);await ah(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await lh(t)}async function mh(t,e){e&&wh(t).zo&&await async function(t,e){if(n=e.code,Ia(n)&&n!==Hi.ABORTED){const n=t.au.shift();wh(t).No(),await ah(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await lh(t)}var n}(t,e),ch(t)&&dh(t)}async function yh(t,e){const n=Ki(t);n.asyncQueue.verifyOperationInProgress(),$i("RemoteStore","RemoteStore received new credentials");const s=rh(n);n.lu.add(3),await ih(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await sh(n)}async function vh(t,e){const n=Ki(t);e?(n.lu.delete(2),await sh(n)):e||(n.lu.add(2),await ih(n),n._u.set("Unknown"))}function wh(t){return t.gu||(t.gu=function(t,e,n){const s=Ki(t);return s.tu(),new Jl(e,s.bo,s.authCredentials,s.appCheckCredentials,s.wt,n)}(t.datastore,t.asyncQueue,{zr:fh.bind(null,t),Jr:mh.bind(null,t),Yo:ph.bind(null,t),Jo:gh.bind(null,t)}),t.fu.push((async e=>{e?(t.gu.No(),await lh(t)):(await t.gu.stop(),t.au.length>0&&($i("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))}))),t.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class bh{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Wi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new bh(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Qi(Hi.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Eh(t,e){if(Bi("AsyncQueue",`${e}: ${t}`),Sr(t))return new Qi(Hi.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this.queries=new Aa((t=>Uo(t)),Po),this.onlineState="Unknown",this.Tu=new Set}}function Sh(t){t.Tu.forEach((t=>{t.next()}))}class Ih{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.Zu={},this.tc=new Aa((t=>Uo(t)),Po),this.ec=new Map,this.nc=new Set,this.sc=new Nr(fr.comparator),this.ic=new Map,this.rc=new Cl,this.oc={},this.uc=new Map,this.cc=wl.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function Ch(t,e,n){const s=Lh(t);try{const t=await function(t,e){const n=Ki(t),s=ar.now(),i=e.reduce(((t,e)=>t.add(e.key)),Fa());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Na(),l=Fa();return n.Ui.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(l=l.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{r=i;const o=[];for(const t of e){const e=fa(t,r.get(t.key).overlayedDocument);null!=e&&o.push(new ma(t.key,e,oo(e.value.mapValue),aa.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)})).next((e=>{o=e;const s=e.applyToLocalDocumentSet(r,l);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:_a(r)})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.oc[t.currentUser.toKey()];s||(s=new Nr(rr)),s=s.insert(e,n),t.oc[t.currentUser.toKey()]=s}(s,t.batchId,n),await _h(s,t.changes),await lh(s.remoteStore)}catch(t){const e=Eh(t,"Failed to persist write");n.reject(e)}}function Ah(t,e,n){const s=Ki(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.tc.forEach(((n,s)=>{const i=s.view.Eu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Ki(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.Eu(e)&&(s=!0)})),s&&Sh(n)}(s.eventManager,e),t.length&&s.Zu.Go(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Dh(t,e){const n=Ki(t),s=e.batch.batchId;try{const t=await Ul(n.localStore,e);xh(n,s,null),kh(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await _h(n,t)}catch(t){await Er(t)}}async function Nh(t,e,n){const s=Ki(t);try{const t=await function(t,e){const n=Ki(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(qi(null!==e),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(s.localStore,e);xh(s,e,n),kh(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await _h(s,t)}catch(n){await Er(n)}}function kh(t,e){(t.uc.get(e)||[]).forEach((t=>{t.resolve()})),t.uc.delete(e)}function xh(t,e,n){const s=Ki(t);let i=s.oc[s.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),s.oc[s.currentUser.toKey()]=i}}async function _h(t,e,n){const s=Ki(t),i=[],r=[],o=[];s.tc.isEmpty()||(s.tc.forEach(((t,a)=>{o.push(s.hc(a,e,n).then((t=>{if(t){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Vl.Vi(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.Zu.Go(i),await async function(t,e){const n=Ki(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Tr.forEach(e,(e=>Tr.forEach(e.Pi,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>Tr.forEach(e.vi,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!Sr(t))throw t;$i("LocalStore","Failed to update sequence numbers: "+t)}for(const s of e){const t=s.targetId;if(!s.fromCache){const e=n.$i.get(t),s=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(s);n.$i=n.$i.insert(t,i)}}}(s.localStore,r))}async function Rh(t,e){const n=Ki(t);if(!n.currentUser.isEqual(e)){$i("SyncEngine","User change. New user:",e.toKey());const t=await Pl(n.localStore,e);n.currentUser=e,function(t,e){t.uc.forEach((t=>{t.forEach((t=>{t.reject(new Qi(Hi.CANCELLED,e))}))})),t.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await _h(n,t.Ki)}}function Lh(t){const e=Ki(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Dh.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Nh.bind(null,e),e}class Vh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=Xl(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return Fl(this.persistence,new Ol,t.initialUser,this.wt)}_c(t){return new _l(Ll.Ms,this.wt)}dc(t){return new zl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Oh{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Ah(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rh.bind(null,this.syncEngine),await vh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Th}createDatastore(t){const e=Xl(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new Ql(s));var s;return function(t,e,n,s){return new th(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>Ah(this.syncEngine,t,0),r=ql.V()?new ql:new Gl,new nh(e,n,s,i,r);var e,n,s,i,r}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new Ih(t,e,n,s,i,r);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Ki(t);$i("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await ih(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mh{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Mi.UNAUTHENTICATED,this.clientId=ir.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{$i("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>($i("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Qi(Hi.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Wi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Eh(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Fh(t,e){t.asyncQueue.verifyOperationInProgress(),$i("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await Pl(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function Ph(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Uh(t);$i("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>yh(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>yh(e.remoteStore,n))),t.onlineComponents=e}async function Uh(t){return t.offlineComponents||($i("FirestoreClient","Using default OfflineComponentProvider"),await Fh(t,new Vh)),t.offlineComponents}async function $h(t){return t.onlineComponents||($i("FirestoreClient","Using default OnlineComponentProvider"),await Ph(t,new Oh)),t.onlineComponents}function Bh(t){return $h(t).then((t=>t.syncEngine))}const jh=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(t,e,n){if(!n)throw new Qi(Hi.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Gh(t,e,n,s){if(!0===e&&!0===s)throw new Qi(Hi.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function qh(t){if(!fr.isDocumentKey(t))throw new Qi(Hi.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Kh(t){if(fr.isDocumentKey(t))throw new Qi(Hi.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Hh(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Gi()}function Qh(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Qi(Hi.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hh(t);throw new Qi(Hi.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wh{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Qi(Hi.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Qi(Hi.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Gh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wh({}),this._settingsFrozen=!1,t instanceof jr?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Qi(Hi.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jr(t.options.projectId)}(t))}get app(){if(!this._app)throw new Qi(Hi.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Qi(Hi.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wh(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Zi;switch(t.type){case"gapi":const e=t.client;return qi(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new tr(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Qi(Hi.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=jh.get(t);e&&($i("ComponentProvider","Removing Datastore"),jh.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zh{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jh(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Zh(this.firestore,t,this._key)}}class Yh{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Yh(this.firestore,t,this._query)}}class Jh extends Yh{constructor(t,e,n){super(t,e,xo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Zh(this.firestore,null,new fr(t))}withConverter(t){return new Jh(this.firestore,t,this._path)}}function tu(t,e,...n){if(t=(0,st.m9)(t),zh("collection","path",e),t instanceof Xh){const s=ur.fromString(e,...n);return Kh(s),new Jh(t,null,s)}{if(!(t instanceof Zh||t instanceof Jh))throw new Qi(Hi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ur.fromString(e,...n));return Kh(s),new Jh(t.firestore,null,s)}}function eu(t,e,...n){if(t=(0,st.m9)(t),1===arguments.length&&(e=ir.I()),zh("doc","path",e),t instanceof Xh){const s=ur.fromString(e,...n);return qh(s),new Zh(t,null,new fr(s))}{if(!(t instanceof Zh||t instanceof Jh))throw new Qi(Hi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ur.fromString(e,...n));return qh(s),new Zh(t.firestore,t instanceof Jh?t.converter:null,new fr(s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nu{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Zl(this,"async_queue_retry"),this.Kc=()=>{const t=Wl();t&&$i("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=Wl();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=Wl();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new Wi;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(vt){if(!Sr(vt))throw vt;$i("AsyncQueue","Operation failed with retryable error: "+vt)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Bi("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const s=bh.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(s),s}Gc(){this.Bc&&Gi()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}class su extends Xh{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new nu,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ou(this),this._firestoreClient.terminate()}}function iu(t=(0,tt.Mq)()){return(0,tt.qX)(t,"firestore").getImmediate()}function ru(t){return t._firestoreClient||ou(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ou(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new Br(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Mh(t._authCredentials,t._appCheckCredentials,t._queue,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class au{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Qi(Hi.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dr(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lu{constructor(t){this._byteString=t}static fromBase64String(t){try{return new lu(Vr.fromBase64String(t))}catch(t){throw new Qi(Hi.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new lu(Vr.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Qi(Hi.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Qi(Hi.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return rr(this._lat,t._lat)||rr(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=/^__.*__$/;class du{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new ma(t,this.data,this.fieldMask,e,this.fieldTransforms):new ga(t,this.data,e,this.fieldTransforms)}}function fu(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Gi()}}class pu{constructor(t,e,n,s,i,r){this.settings=t,this.databaseId=e,this.wt=n,this.ignoreUndefinedProperties=s,void 0===i&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=r||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new pu(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.ta({path:n,na:!1});return s.sa(t),s}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.ta({path:n,na:!1});return s.Xc(),s}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return Cu(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(0===t.length)throw this.oa("Document fields must not be empty");if(fu(this.Zc)&&cu.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class gu{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.wt=n||Xl(t)}aa(t,e,n,s=!1){return new pu({Zc:t,methodName:e,ca:n,path:dr.emptyPath(),na:!1,ua:s},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function mu(t){const e=t._freezeSettings(),n=Xl(t._databaseId);return new gu(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yu(t,e,n,s,i,r={}){const o=t.aa(r.merge||r.mergeFields?2:0,e,n,i);Eu("Data must be an object, but it was:",o,s);const a=wu(s,o);let l,h;if(r.merge)l=new Lr(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const s of r.mergeFields){const i=Tu(e,s,n);if(!o.contains(i))throw new Qi(Hi.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Au(t,i)||t.push(i)}l=new Lr(t),h=o.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,h=o.fieldTransforms;return new du(new ro(a),l,h)}function vu(t,e){if(bu(t=(0,st.m9)(t)))return Eu("Unsupported field value:",e,t),wu(t,e);if(t instanceof hu)return function(t,e){if(!fu(e.Zc))throw e.oa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.oa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&4!==e.Zc)throw e.oa("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const i of t){let t=vu(i,e.ra(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,st.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Ko(e.wt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=ar.fromDate(t);return{timestampValue:Ba(e.wt,n)}}if(t instanceof ar){const n=new ar(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ba(e.wt,n)}}if(t instanceof uu)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof lu)return{bytesValue:ja(e.wt,t._byteString)};if(t instanceof Zh){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.oa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:qa(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.oa(`Unsupported field value: ${Hh(t)}`)}(t,e)}function wu(t,e){const n={};return Dr(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ar(t,((t,s)=>{const i=vu(s,e.ea(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function bu(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof ar||t instanceof uu||t instanceof lu||t instanceof Zh||t instanceof hu)}function Eu(t,e,n){if(!bu(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=Hh(n);throw"an object"===s?e.oa(t+" a custom object"):e.oa(t+" "+s)}}function Tu(t,e,n){if((e=(0,st.m9)(e))instanceof au)return e._internalPath;if("string"==typeof e)return Iu(t,e);throw Cu("Field path arguments must be of type string or ",t,!1,void 0,n)}const Su=new RegExp("[~\\*/\\[\\]]");function Iu(t,e,n){if(e.search(Su)>=0)throw Cu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new au(...e.split("."))._internalPath}catch(s){throw Cu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Cu(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new Qi(Hi.INVALID_ARGUMENT,a+t+l)}function Au(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Du(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}function Nu(t,e){const n=Qh(t.firestore,su),s=eu(t),i=Du(t.converter,e);return ku(n,[yu(mu(t.firestore),"addDoc",s._key,i,null!==t.converter,{}).toMutation(s._key,aa.exists(!1))]).then((()=>s))}function ku(t,e){return function(t,e){const n=new Wi;return t.asyncQueue.enqueueAndForget((async()=>Ch(await Bh(t),e,n))),n.promise}(ru(t),e)}!function(t,e=!0){!function(t){Fi=t}(tt.Jn),(0,tt.Xd)(new et.wA("firestore",((t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=new su(s,new Yi(t.getProvider("auth-internal")),new nr(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),(0,tt.KN)(Oi,"3.4.12",t),(0,tt.KN)(Oi,"3.4.12","esm2017")}();var xu={name:"component-name",data:function(){return{nombreContacto:"",cuerpoMensaje:"",enviando:!1}},methods:{async enviarFormulario(){this.enviando=!0;try{let t=new Date,e=(t.getDate()>9?""+t.getDate():"0"+t.getDate())+"/"+(t.getMonth()>8?""+(t.getMonth()+1):"0"+(t.getMonth()+1))+"/"+t.getFullYear(),n=(t.getHours()>9?""+t.getHours():"0"+t.getHours())+":"+(t.getMinutes()>9?""+t.getMinutes():"0"+t.getMinutes())+":"+(t.getSeconds()>9?""+t.getSeconds():"0"+t.getSeconds()),s={Nombre:this.nombreContacto,Mensaje:this.cuerpoMensaje,fecha:e,hora:n};const i=iu(this.app),r=await Nu(tu(i,"mensajes"),s);""!=r.id?(this.nombreContacto="",this.cuerpoMensaje="",alert("Mensaje enviado")):alert("Error al enviar mensaje")}catch(t){alert(t)}this.enviando=!1}}},_u=xu,Ru=n(1001),Lu=(0,Ru.Z)(_u,Y,J,!1,null,"2287b272",null),Vu=Lu.exports}}]);
//# sourceMappingURL=51.db19141c.js.map