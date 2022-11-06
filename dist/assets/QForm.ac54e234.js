import{u as A,a as D}from"./use-dark.133b3596.js";import{c as P,a as E,h as S,i as B,g as k,r as I,a8 as Q,aF as R,p as V,a9 as j,s as F,q as O,v as $,aI as w}from"./index.7652e6fb.js";import{b as K}from"./focus-manager.32f8d49a.js";var H=P({name:"QCard",props:{...A,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(o,{slots:f}){const{proxy:{$q:c}}=k(),v=D(o,c),u=E(()=>"q-card"+(v.value===!0?" q-card--dark q-dark":"")+(o.bordered===!0?" q-card--bordered":"")+(o.square===!0?" q-card--square no-border-radius":"")+(o.flat===!0?" q-card--flat no-shadow":""));return()=>S(o.tag,{class:u.value},B(f.default))}}),J=P({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup(o,{slots:f,emit:c}){const v=k(),u=I(null);let i=0;const s=[];function m(e){const n=typeof e=="boolean"?e:o.noErrorFocus!==!0,l=++i,q=(t,r)=>{c("validation-"+(t===!0?"success":"error"),r)},p=t=>{const r=t.validate();return typeof r.then=="function"?r.then(a=>({valid:a,comp:t}),a=>({valid:!1,comp:t,err:a})):Promise.resolve({valid:r,comp:t})};return(o.greedy===!0?Promise.all(s.map(p)).then(t=>t.filter(r=>r.valid!==!0)):s.reduce((t,r)=>t.then(()=>p(r).then(a=>{if(a.valid===!1)return Promise.reject(a)})),Promise.resolve()).catch(t=>[t])).then(t=>{if(t===void 0||t.length===0)return l===i&&q(!0),!0;if(l===i){const{comp:r,err:a}=t[0];if(a!==void 0&&console.error(a),q(!1,r),n===!0){const x=t.find(({comp:C})=>typeof C.focus=="function"&&j(C.$)===!1);x!==void 0&&x.comp.focus()}}return!1})}function b(){i++,s.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function y(e){e!==void 0&&F(e);const n=i+1;m().then(l=>{n===i&&l===!0&&(o.onSubmit!==void 0?c("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function g(e){e!==void 0&&F(e),c("reset"),O(()=>{b(),o.autofocus===!0&&o.noResetFocus!==!0&&d()})}function d(){K(()=>{if(u.value===null)return;const e=u.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(u.value.querySelectorAll("[tabindex]"),n=>n.tabIndex>-1);e?.focus({preventScroll:!0})})}$(w,{bindComponent(e){s.push(e)},unbindComponent(e){const n=s.indexOf(e);n>-1&&s.splice(n,1)}});let h=!1;return Q(()=>{h=!0}),R(()=>{h===!0&&o.autofocus===!0&&d()}),V(()=>{o.autofocus===!0&&d()}),Object.assign(v.proxy,{validate:m,resetValidation:b,submit:y,reset:g,focus:d,getValidationComponents:()=>s}),()=>S("form",{class:"q-form",ref:u,onSubmit:y,onReset:g},B(f.default))}});export{J as Q,H as a};