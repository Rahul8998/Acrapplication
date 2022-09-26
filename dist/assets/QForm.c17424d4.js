import{u as Q,a as D}from"./use-dark.0a1a006e.js";import{c as S,h as B}from"./render.6feafea9.js";import{c as E,h as k,g as A,r as R,p as V,a5 as I,a6 as O,a as j,C as F,n as w,a7 as K}from"./index.2437c116.js";import{c as M}from"./format.35298d60.js";var H=S({name:"QCard",props:{...Q,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(t,{slots:v}){const c=A(),p=D(t,c.proxy.$q),u=E(()=>"q-card"+(p.value===!0?" q-card--dark q-dark":"")+(t.bordered===!0?" q-card--bordered":"")+(t.square===!0?" q-card--square no-border-radius":"")+(t.flat===!0?" q-card--flat no-shadow":""));return()=>k(t.tag,{class:u.value},B(v.default))}}),J=S({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup(t,{slots:v,emit:c}){const p=A(),u=R(null);let i=0;const a=[];function b(e){const r=[],d=typeof e=="boolean"?e:t.noErrorFocus!==!0,x=++i,m=(n,o)=>{c("validation-"+(n===!0?"success":"error"),o)};for(let n=0;n<a.length;n++){const o=a[n],l=o.validate();if(typeof l.then=="function")r.push(l.then(s=>({valid:s,comp:o}),s=>({valid:!1,comp:o,err:s})));else if(l!==!0){if(t.greedy===!1)return m(!1,o),d===!0&&typeof o.focus=="function"&&o.focus(),Promise.resolve(!1);r.push({valid:!1,comp:o})}}return r.length===0?(m(!0),Promise.resolve(!0)):Promise.all(r).then(n=>{const o=n.filter(P=>P.valid!==!0);if(o.length===0)return x===i&&m(!0),!0;const{valid:l,comp:s,err:C}=o[0];return x===i&&(C!==void 0&&console.error(C),m(!1,s),d===!0&&l!==!0&&typeof s.focus=="function"&&s.focus()),!1})}function g(){i++,a.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function y(e){e!==void 0&&F(e);const r=i+1;b().then(d=>{r===i&&d===!0&&(t.onSubmit!==void 0?c("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function h(e){e!==void 0&&F(e),c("reset"),w(()=>{g(),t.autofocus===!0&&t.noResetFocus!==!0&&f()})}function f(){M(()=>{if(u.value===null)return;const e=u.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(u.value.querySelectorAll("[tabindex]"),r=>r.tabIndex>-1);e!=null&&e.focus({preventScroll:!0})})}V(K,{bindComponent(e){a.push(e)},unbindComponent(e){const r=a.indexOf(e);r>-1&&a.splice(r,1)}});let q=!1;return I(()=>{q=!0}),O(()=>{q===!0&&t.autofocus===!0&&f()}),j(()=>{t.autofocus===!0&&f()}),Object.assign(p.proxy,{validate:b,resetValidation:g,submit:y,reset:h,focus:f,getValidationComponents:()=>a}),()=>k("form",{class:"q-form",ref:u,onSubmit:y,onReset:h},B(v.default))}});export{J as Q,H as a};
