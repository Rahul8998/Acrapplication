import{T as A}from"./TouchPan.184083cf.js";import{u as D,a as I}from"./use-dark.a1c2cb9d.js";import{c as $,r as d,a as u,w as x,h as m,i as b,u as j,n as O,q as F,g as L,F as N,G as R,H as C,I as w}from"./index.872d3aec.js";import{_ as T}from"./inboxUpdate.51b2b77e.js";import{_ as P}from"./inboxComponent.0405077f.js";import"./touch.4b136302.js";import"./use-prevent-scroll.c11de46b.js";import"./focus-manager.32f8d49a.js";import"./QImg.192e1531.js";import"./annexureFour.bae3f0aa.js";import"./auth.3b199503.js";import"./axios.d41132e1.js";import"./authheader.813c6670.js";import"./QSeparator.ecf877e2.js";import"./QTable.58a7ad1b.js";import"./QList.4ba07574.js";import"./use-key-composition.46d760f6.js";import"./QChip.33016f52.js";import"./format.3e32b8d9.js";import"./QInput.f4010c88.js";import"./QTr.1c07961b.js";import"./QTabPanels.8edd02c8.js";import"./QForm.d704e376.js";import"./annexure.f2a87bb5.js";import"./use-quasar.b93fecc9.js";var Q=$({name:"QSplitter",props:{...D,modelValue:{type:Number,required:!0},reverse:Boolean,unit:{type:String,default:"%",validator:e=>["%","px"].includes(e)},limits:{type:Array,validator:e=>e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"?!1:e[0]>=0&&e[0]<=e[1]},emitImmediately:Boolean,horizontal:Boolean,disable:Boolean,beforeClass:[Array,String,Object],afterClass:[Array,String,Object],separatorClass:[Array,String,Object],separatorStyle:[Array,String,Object]},emits:["update:modelValue"],setup(e,{slots:a,emit:o}){const{proxy:{$q:s}}=L(),c=I(e,s),n=d(null),f={before:d(null),after:d(null)},k=u(()=>`q-splitter no-wrap ${e.horizontal===!0?"q-splitter--horizontal column":"q-splitter--vertical row"} q-splitter--${e.disable===!0?"disabled":"workable"}`+(c.value===!0?" q-splitter--dark":"")),v=u(()=>e.horizontal===!0?"height":"width"),y=u(()=>e.reverse!==!0?"before":"after"),r=u(()=>e.limits!==void 0?e.limits:e.unit==="%"?[10,90]:[50,1/0]);function p(t){return(e.unit==="%"?t:Math.round(t))+e.unit}const V=u(()=>({[y.value]:{[v.value]:p(e.modelValue)}}));let g,_,q,S,l;function M(t){if(t.isFirst===!0){const h=n.value.getBoundingClientRect()[v.value];g=e.horizontal===!0?"up":"left",_=e.unit==="%"?100:h,q=Math.min(_,r.value[1],Math.max(r.value[0],e.modelValue)),S=(e.reverse!==!0?1:-1)*(e.horizontal===!0?1:s.lang.rtl===!0?-1:1)*(e.unit==="%"?h===0?0:100/h:1),n.value.classList.add("q-splitter--active");return}if(t.isFinal===!0){l!==e.modelValue&&o("update:modelValue",l),n.value.classList.remove("q-splitter--active");return}const i=q+S*(t.direction===g?-1:1)*t.distance[e.horizontal===!0?"y":"x"];l=Math.min(_,r.value[1],Math.max(r.value[0],i)),f[y.value].value.style[v.value]=p(l),e.emitImmediately===!0&&e.modelValue!==l&&o("update:modelValue",l)}const B=u(()=>[[A,M,void 0,{[e.horizontal===!0?"vertical":"horizontal"]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function z(t,i){t<i[0]?o("update:modelValue",i[0]):t>i[1]&&o("update:modelValue",i[1])}return x(()=>e.modelValue,t=>{z(t,r.value)}),x(()=>e.limits,()=>{F(()=>{z(e.modelValue,r.value)})}),()=>{const t=[m("div",{ref:f.before,class:["q-splitter__panel q-splitter__before"+(e.reverse===!0?" col":""),e.beforeClass],style:V.value.before},b(a.before)),m("div",{class:["q-splitter__separator",e.separatorClass],style:e.separatorStyle,"aria-disabled":e.disable===!0?"true":void 0},[j("div",{class:"q-splitter__separator-area absolute-full"},b(a.separator),"sep",e.disable!==!0,()=>B.value)]),m("div",{ref:f.after,class:["q-splitter__panel q-splitter__after"+(e.reverse===!0?"":" col"),e.afterClass],style:V.value.after},b(a.after))];return m("div",{class:k.value,ref:n},O(a.default,t))}}});const _e={__name:"inboxMessage",setup(e){const a=d(40);return(o,s)=>(N(),R(Q,{modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=c=>a.value=c),class:"window-height"},{before:C(()=>[w(P)]),after:C(()=>[w(T)]),_:1},8,["modelValue"]))}};export{_e as default};
