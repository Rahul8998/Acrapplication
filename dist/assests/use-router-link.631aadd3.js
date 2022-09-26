import{d as L}from"./render.e4852632.js";import{R as E,L as P,f as w,m as j,s as N,k as T,c as u,g as V,j as I}from"./index.90532aa7.js";function K(e,r){const t=e.style;for(const a in r)t[a]=r[a]}function X(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const r=E(e)===!0?e.value:e;if(r)return r.$el||r}function Y(e,r){if(e==null||e.contains(r)===!0)return!0;for(let t=e.nextElementSibling;t!==null;t=t.nextElementSibling)if(t.contains(r))return!0;return!1}function M(e,r=250){let t=!1,a;return function(){return t===!1&&(t=!0,setTimeout(()=>{t=!1},r),a=e.apply(this,arguments)),a}}function q(e,r,t,a){t.modifiers.stop===!0&&N(e);const n=t.modifiers.color;let s=t.modifiers.center;s=s===!0||a===!0;const l=document.createElement("span"),o=document.createElement("span"),c=T(e),{left:g,top:$,width:m,height:y}=r.getBoundingClientRect(),p=Math.sqrt(m*m+y*y),v=p/2,k=`${(m-p)/2}px`,x=s?k:`${c.left-g-v}px`,i=`${(y-p)/2}px`,d=s?i:`${c.top-$-v}px`;o.className="q-ripple__inner",K(o,{height:`${p}px`,width:`${p}px`,transform:`translate3d(${x},${d},0) scale3d(.2,.2,1)`,opacity:0}),l.className=`q-ripple${n?" text-"+n:""}`,l.setAttribute("dir","ltr"),l.appendChild(o),r.appendChild(l);const h=()=>{l.remove(),clearTimeout(f)};t.abort.push(h);let f=setTimeout(()=>{o.classList.add("q-ripple__inner--enter"),o.style.transform=`translate3d(${k},${i},0) scale3d(1,1,1)`,o.style.opacity=.2,f=setTimeout(()=>{o.classList.remove("q-ripple__inner--enter"),o.classList.add("q-ripple__inner--leave"),o.style.opacity=0,f=setTimeout(()=>{l.remove(),t.abort.splice(t.abort.indexOf(h),1)},275)},250)},50)}function A(e,{modifiers:r,value:t,arg:a}){const n=Object.assign({},e.cfg.ripple,r,t);e.modifiers={early:n.early===!0,stop:n.stop===!0,center:n.center===!0,color:n.color||a,keyCodes:[].concat(n.keyCodes||13)}}var G=L({name:"ripple",beforeMount(e,r){const t=r.instance.$.appContext.config.globalProperties.$q.config||{};if(t.ripple===!1)return;const a={cfg:t,enabled:r.value!==!1,modifiers:{},abort:[],start(n){a.enabled===!0&&n.qSkipRipple!==!0&&n.type===(a.modifiers.early===!0?"pointerdown":"click")&&q(n,e,a,n.qKeyEvent===!0)},keystart:M(n=>{a.enabled===!0&&n.qSkipRipple!==!0&&P(n,a.modifiers.keyCodes)===!0&&n.type===`key${a.modifiers.early===!0?"down":"up"}`&&q(n,e,a,!0)},300)};A(a,r),e.__qripple=a,w(a,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,r){if(r.oldValue!==r.value){const t=e.__qripple;t!==void 0&&(t.enabled=r.value!==!1,t.enabled===!0&&Object(r.value)===r.value&&A(t,r))}},beforeUnmount(e){const r=e.__qripple;r!==void 0&&(r.abort.forEach(t=>{t()}),j(r,"main"),delete e._qripple)}});function J(e){if(Object(e.$parent)===e.$parent)return e.$parent;for(e=e.$.parent;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function S(e,r){typeof r.type=="symbol"?Array.isArray(r.children)===!0&&r.children.forEach(t=>{S(e,t)}):e.add(r)}function Q(e){const r=new Set;return e.forEach(t=>{S(r,t)}),Array.from(r)}function B(e){return e.appContext.config.globalProperties.$router!==void 0}function _(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function C(e,r){return(e.aliasOf||e)===(r.aliasOf||r)}function H(e,r){for(const t in r){const a=r[t],n=e[t];if(typeof a=="string"){if(a!==n)return!1}else if(Array.isArray(n)===!1||n.length!==a.length||a.some((s,l)=>s!==n[l]))return!1}return!0}function O(e,r){return Array.isArray(r)===!0?e.length===r.length&&e.every((t,a)=>t===r[a]):e.length===1&&e[0]===r}function z(e,r){return Array.isArray(e)===!0?O(e,r):Array.isArray(r)===!0?O(r,e):e===r}function D(e,r){if(Object.keys(e).length!==Object.keys(r).length)return!1;for(const t in e)if(z(e[t],r[t])===!1)return!1;return!0}const W={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Z(e){const r=V(),{props:t,proxy:a}=r,n=B(r),s=u(()=>t.disable!==!0&&t.href!==void 0),l=u(()=>n===!0&&t.disable!==!0&&s.value!==!0&&t.to!==void 0&&t.to!==null&&t.to!==""),o=u(()=>{if(l.value===!0)try{return a.$router.resolve(t.to)}catch{}return null}),c=u(()=>o.value!==null),g=u(()=>s.value===!0||c.value===!0),$=u(()=>t.type==="a"||g.value===!0?"a":t.tag||e||"div"),m=u(()=>s.value===!0?{href:t.href,target:t.target}:c.value===!0?{href:o.value.href,target:t.target}:{}),y=u(()=>{if(c.value===!1)return null;const{matched:i}=o.value,{length:d}=i,h=i[d-1];if(h===void 0)return-1;const f=a.$route.matched;if(f.length===0)return-1;const b=f.findIndex(C.bind(null,h));if(b>-1)return b;const R=_(i[d-2]);return d>1&&_(h)===R&&f[f.length-1].path!==R?f.findIndex(C.bind(null,i[d-2])):b}),p=u(()=>c.value===!0&&y.value>-1&&H(a.$route.params,o.value.params)),v=u(()=>p.value===!0&&y.value===a.$route.matched.length-1&&D(a.$route.params,o.value.params)),k=u(()=>c.value===!0?v.value===!0?` ${t.exactActiveClass} ${t.activeClass}`:t.exact===!0?"":p.value===!0?` ${t.activeClass}`:"":"");function x(i){return t.disable===!0||i.metaKey||i.altKey||i.ctrlKey||i.shiftKey||i.__qNavigate!==!0&&i.defaultPrevented===!0||i.button!==void 0&&i.button!==0||t.target==="_blank"?!1:(I(i),a.$router[t.replace===!0?"replace":"push"](t.to).catch(d=>d))}return{hasRouterLink:c,hasHrefLink:s,hasLink:g,linkTag:$,linkRoute:o,linkIsActive:p,linkIsExactActive:v,linkClass:k,linkProps:m,navigateToRouterLink:x}}export{G as R,Z as a,X as b,K as c,Y as d,Q as e,J as g,W as u,B as v};
