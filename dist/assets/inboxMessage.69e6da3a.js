import{T as A}from"./TouchPan.57fcd2d6.js";import{u as D,a as I}from"./use-dark.57e3ac37.js";import{c as $,r as d,a as u,w as x,h as m,i as b,u as j,n as O,q as F,g as L,F as N,G as R,H as C,I as w}from"./index.2ccf8a2e.js";import{_ as T}from"./inboxUpdate.31935783.js";import{_ as P}from"./inboxComponent.87acf2b0.js";import"./touch.ffc8e863.js";import"./use-prevent-scroll.268eb1b2.js";import"./focus-manager.32f8d49a.js";import"./QImg.732ecf54.js";import"./annexureFour.ea596508.js";import"./auth.0d990e55.js";import"./axios.d2218ac7.js";import"./authheader.813c6670.js";import"./QSeparator.27995ce6.js";import"./QTable.d43c108a.js";import"./QList.283ea28a.js";import"./use-key-composition.507d4dea.js";import"./QChip.2c7f0dfe.js";import"./format.3e32b8d9.js";import"./QInput.40c09fee.js";import"./QTr.80a5222a.js";import"./QTabPanels.d8cb7e25.js";import"./QForm.f34b644b.js";import"./annexure.89873c71.js";import"./use-quasar.926219a2.js";var Q=$({name:"QSplitter",props:{...D,modelValue:{type:Number,required:!0},reverse:Boolean,unit:{type:String,default:"%",validator:e=>["%","px"].includes(e)},limits:{type:Array,validator:e=>e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"?!1:e[0]>=0&&e[0]<=e[1]},emitImmediately:Boolean,horizontal:Boolean,disable:Boolean,beforeClass:[Array,String,Object],afterClass:[Array,String,Object],separatorClass:[Array,String,Object],separatorStyle:[Array,String,Object]},emits:["update:modelValue"],setup(e,{slots:a,emit:o}){const{proxy:{$q:s}}=L(),c=I(e,s),n=d(null),f={before:d(null),after:d(null)},k=u(()=>`q-splitter no-wrap ${e.horizontal===!0?"q-splitter--horizontal column":"q-splitter--vertical row"} q-splitter--${e.disable===!0?"disabled":"workable"}`+(c.value===!0?" q-splitter--dark":"")),v=u(()=>e.horizontal===!0?"height":"width"),y=u(()=>e.reverse!==!0?"before":"after"),r=u(()=>e.limits!==void 0?e.limits:e.unit==="%"?[10,90]:[50,1/0]);function p(t){return(e.unit==="%"?t:Math.round(t))+e.unit}const V=u(()=>({[y.value]:{[v.value]:p(e.modelValue)}}));let g,_,q,S,l;function M(t){if(t.isFirst===!0){const h=n.value.getBoundingClientRect()[v.value];g=e.horizontal===!0?"up":"left",_=e.unit==="%"?100:h,q=Math.min(_,r.value[1],Math.max(r.value[0],e.modelValue)),S=(e.reverse!==!0?1:-1)*(e.horizontal===!0?1:s.lang.rtl===!0?-1:1)*(e.unit==="%"?h===0?0:100/h:1),n.value.classList.add("q-splitter--active");return}if(t.isFinal===!0){l!==e.modelValue&&o("update:modelValue",l),n.value.classList.remove("q-splitter--active");return}const i=q+S*(t.direction===g?-1:1)*t.distance[e.horizontal===!0?"y":"x"];l=Math.min(_,r.value[1],Math.max(r.value[0],i)),f[y.value].value.style[v.value]=p(l),e.emitImmediately===!0&&e.modelValue!==l&&o("update:modelValue",l)}const B=u(()=>[[A,M,void 0,{[e.horizontal===!0?"vertical":"horizontal"]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function z(t,i){t<i[0]?o("update:modelValue",i[0]):t>i[1]&&o("update:modelValue",i[1])}return x(()=>e.modelValue,t=>{z(t,r.value)}),x(()=>e.limits,()=>{F(()=>{z(e.modelValue,r.value)})}),()=>{const t=[m("div",{ref:f.before,class:["q-splitter__panel q-splitter__before"+(e.reverse===!0?" col":""),e.beforeClass],style:V.value.before},b(a.before)),m("div",{class:["q-splitter__separator",e.separatorClass],style:e.separatorStyle,"aria-disabled":e.disable===!0?"true":void 0},[j("div",{class:"q-splitter__separator-area absolute-full"},b(a.separator),"sep",e.disable!==!0,()=>B.value)]),m("div",{ref:f.after,class:["q-splitter__panel q-splitter__after"+(e.reverse===!0?"":" col"),e.afterClass],style:V.value.after},b(a.after))];return m("div",{class:k.value,ref:n},O(a.default,t))}}});const _e={__name:"inboxMessage",setup(e){const a=d(40);return(o,s)=>(N(),R(Q,{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=c=>a.value=c),class:"window-height"},{before:C(()=>[w(P)]),after:C(()=>[w(T)]),_:1},8,["modelValue"]))}};export{_e as default};
