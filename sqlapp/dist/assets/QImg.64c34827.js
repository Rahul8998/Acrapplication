import{u as N,b as Q,a as B,c as $}from"./QBtn.7164ec9c.js";import{R as j}from"./use-router-link.28aa69be.js";import{u as D,a as O}from"./use-dark.850c1241.js";import{c as R,d as P,f as V,h as L}from"./render.56577fcc.js";import{c as u,h as l,g as M,C as E,r as v,w as F,o as H,T as K}from"./index.645177e3.js";const A={xs:8,sm:10,md:14,lg:20,xl:24};var ee=R({name:"QChip",props:{...D,...N,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:c,emit:n}){const{proxy:{$q:g}}=M(),h=O(e,g),a=Q(e,A),o=u(()=>e.selected===!0||e.icon!==void 0),s=u(()=>e.selected===!0?e.iconSelected||g.iconSet.chip.selected:e.icon),d=u(()=>e.iconRemove||g.iconSet.chip.remove),r=u(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),C=u(()=>{const i=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(i?` text-${i} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(r.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(h.value===!0?" q-chip--dark q-dark":"")}),S=u(()=>e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0});function k(i){i.keyCode===13&&b(i)}function b(i){e.disable||(n("update:selected",!e.selected),n("click",i))}function m(i){(i.keyCode===void 0||i.keyCode===13)&&(E(i),e.disable===!1&&(n("update:modelValue",!1),n("remove")))}function y(){const i=[];r.value===!0&&i.push(l("div",{class:"q-focus-helper"})),o.value===!0&&i.push(l(B,{class:"q-chip__icon q-chip__icon--left",name:s.value}));const q=e.label!==void 0?[l("div",{class:"ellipsis"},[e.label])]:void 0;return i.push(l("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},V(c.default,q))),e.iconRight&&i.push(l(B,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&i.push(l(B,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:d.value,...S.value,onClick:m,onKeyup:m})),i}return()=>{if(e.modelValue===!1)return;const i={class:C.value,style:a.value};return r.value===!0&&Object.assign(i,S.value,{onClick:b,onKeyup:k}),P("div",i,y(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[j,e.ripple]])}}});const U={ratio:[String,Number]};function W(e,c){return u(()=>{const n=Number(e.ratio||(c!==void 0?c.value:void 0));return isNaN(n)!==!0&&n>0?{paddingBottom:`${100/n}%`}:null})}const G=16/9;var te=R({name:"QImg",props:{...U,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:G},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:c,emit:n}){const g=v(e.initialRatio),h=W(e,g);let a;const o=[v(null),v(e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null)],s=v(0),d=v(!1),r=v(!1),C=u(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),S=u(()=>({width:e.width,height:e.height})),k=u(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),b=u(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));F(()=>m(),y);function m(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function y(t){if(clearTimeout(a),r.value=!1,t===null){d.value=!1,o[0].value=null,o[1].value=null;return}d.value=!0,o[s.value].value=t}function i({target:t}){a!==null&&(clearTimeout(a),g.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,q(t,1))}function q(t,f){a===null||f===1e3||(t.complete===!0?x(t):a=setTimeout(()=>{q(t,f+1)},50))}function x(t){a!==null&&(s.value=s.value===1?0:1,o[s.value].value=null,d.value=!1,r.value=!1,n("load",t.currentSrc||t.src))}function z(t){clearTimeout(a),d.value=!1,r.value=!0,o[0].value=null,o[1].value=null,n("error",t)}function T(t,f){return l("div",{class:"q-img__container absolute-full",key:t},f)}function w(t){const f=o[t].value,_={key:"img_"+t,class:k.value,style:b.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...f};return s.value===t?(_.class+=" q-img__image--waiting",Object.assign(_,{onLoad:i,onError:z})):_.class+=" q-img__image--loaded",T("img"+t,l("img",_))}function I(){return d.value!==!0?l("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},L(c[r.value===!0?"error":"default"])):l("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},c.loading!==void 0?c.loading():e.noSpinner===!0?void 0:[l($,{color:e.spinnerColor,size:e.spinnerSize})])}return y(m()),H(()=>{clearTimeout(a),a=null}),()=>{const t=[];return h.value!==null&&t.push(l("div",{key:"filler",style:h.value})),r.value!==!0&&(o[0].value!==null&&t.push(w(0)),o[1].value!==null&&t.push(w(1))),t.push(l(K,{name:"q-transition--fade"},I)),l("div",{class:C.value,style:S.value,role:"img","aria-label":e.alt},t)}}});export{te as Q,ee as a};
