import{P as Ze,r as T,D as Pe,E as fe,n as k,G as ve,w as y,a as V,o as E,g as A,H as et,k as w,I as he,s as tt,h as z,J as ot,c as g,K as b,L as nt,T as it,C as He,m as lt,j as rt,M as me,N as at}from"./index.2437c116.js";import{v as st,g as N,b as ut,c as ge,d as ct}from"./use-router-link.b395b64e.js";import{u as ze,a as Me}from"./use-dark.0a1a006e.js";import{r as pe,a as dt,c as ft}from"./format.35298d60.js";import{c as j,h as We}from"./render.6feafea9.js";function vt(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Ze.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const ht={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function mt({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:o,proxy:i,emit:u}=A(),l=T(null);let d;function r(s){return l.value===null?!1:s===void 0||s.touches===void 0||s.touches.length<=1}const a={};n===void 0&&(Object.assign(a,{hide(s){i.hide(s)},toggle(s){i.toggle(s),s.qAnchorHandled=!0},toggleKey(s){Pe(s,13)===!0&&a.toggle(s)},contextClick(s){i.hide(s),fe(s),k(()=>{i.show(s),s.qAnchorHandled=!0})},prevent:fe,mobileTouch(s){if(a.mobileCleanup(s),r(s)!==!0)return;i.hide(s),l.value.classList.add("non-selectable");const p=s.target;ve(a,"anchor",[[p,"touchmove","mobileCleanup","passive"],[p,"touchend","mobileCleanup","passive"],[p,"touchcancel","mobileCleanup","passive"],[l.value,"contextmenu","prevent","notPassive"]]),d=setTimeout(()=>{i.show(s),s.qAnchorHandled=!0},300)},mobileCleanup(s){l.value.classList.remove("non-selectable"),clearTimeout(d),e.value===!0&&s!==void 0&&vt()}}),n=function(s=o.contextMenu){if(o.noParentEvent===!0||l.value===null)return;let p;s===!0?i.$q.platform.is.mobile===!0?p=[[l.value,"touchstart","mobileTouch","passive"]]:p=[[l.value,"mousedown","hide","passive"],[l.value,"contextmenu","contextClick","notPassive"]]:p=[[l.value,"click","toggle","passive"],[l.value,"keyup","toggleKey","passive"]],ve(a,"anchor",p)});function c(){et(a,"anchor")}function h(s){for(l.value=s;l.value.classList.contains("q-anchor--skip");)l.value=l.value.parentNode;n()}function m(){if(o.target===!1||o.target===""||i.$el.parentNode===null)l.value=null;else if(o.target===!0)h(i.$el.parentNode);else{let s=o.target;if(typeof o.target=="string")try{s=document.querySelector(o.target)}catch{s=void 0}s!=null?(l.value=s.$el||s,n()):(l.value=null,console.error(`Anchor: target "${o.target}" not found`))}}return y(()=>o.contextMenu,s=>{l.value!==null&&(c(),n(s))}),y(()=>o.target,()=>{l.value!==null&&c(),m()}),y(()=>o.noParentEvent,s=>{l.value!==null&&(s===!0?c():n())}),V(()=>{m(),t!==!0&&o.modelValue===!0&&l.value===null&&u("update:modelValue",!1)}),E(()=>{clearTimeout(d),c()}),{anchorEl:l,canShow:r,anchorEvents:a}}function gt(e,t){const n=T(null);let o;function i(d,r){const a=`${r!==void 0?"add":"remove"}EventListener`,c=r!==void 0?r:o;d!==window&&d[a]("scroll",c,w.passive),window[a]("scroll",c,w.passive),o=r}function u(){n.value!==null&&(i(n.value),n.value=null)}const l=y(()=>e.noParentEvent,()=>{n.value!==null&&(u(),t())});return E(l),{localScrollTarget:n,unconfigureScrollTarget:u,changeScrollEvent:i}}const pt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},wt=["before-show","show","before-hide","hide"];function bt({showing:e,canShow:t,hideOnRouteChange:n,handleShow:o,handleHide:i,processOnMount:u}){const l=A(),{props:d,emit:r,proxy:a}=l;let c;function h(v){e.value===!0?p(v):m(v)}function m(v){if(d.disable===!0||v!==void 0&&v.qAnchorHandled===!0||t!==void 0&&t(v)!==!0)return;const x=d["onUpdate:modelValue"]!==void 0;x===!0&&(r("update:modelValue",!0),c=v,k(()=>{c===v&&(c=void 0)})),(d.modelValue===null||x===!1)&&s(v)}function s(v){e.value!==!0&&(e.value=!0,r("before-show",v),o!==void 0?o(v):r("show",v))}function p(v){if(d.disable===!0)return;const x=d["onUpdate:modelValue"]!==void 0;x===!0&&(r("update:modelValue",!1),c=v,k(()=>{c===v&&(c=void 0)})),(d.modelValue===null||x===!1)&&_(v)}function _(v){e.value!==!1&&(e.value=!1,r("before-hide",v),i!==void 0?i(v):r("hide",v))}function W(v){d.disable===!0&&v===!0?d["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!1):v===!0!==e.value&&(v===!0?s:_)(c)}y(()=>d.modelValue,W),n!==void 0&&st(l)===!0&&y(()=>a.$route.fullPath,()=>{n.value===!0&&e.value===!0&&p()}),u===!0&&V(()=>{W(d.modelValue)});const $={show:m,hide:p,toggle:h};return Object.assign(a,$),$}let yt=document.body;function xt(e){const t=document.createElement("div");if(e!==void 0&&(t.id=e),he.globalNodes!==void 0){const n=he.globalNodes.class;n!==void 0&&(t.className=n)}return yt.appendChild(t),t}function Tt(e){e.remove()}const H=[];function io(e){return H.find(t=>t.__qPortalInnerRef.value!==null&&t.__qPortalInnerRef.value.contains(e))}function $e(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return N(e)}else if(e.__qPortalInnerRef!==void 0){const n=N(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=N(e)}while(e!=null)}function lo(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortalInnerRef!==void 0){if(n--,e.$options.name==="QMenu"){e=$e(e,t);continue}e.hide(t)}e=N(e)}}function Et(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function St(e,t,n,o){const i=T(!1),u=T(!1);let l=null;const d={},r=o===!0&&Et(e);function a(h){if(h===!0){pe(d),u.value=!0;return}u.value=!1,i.value===!1&&(r===!1&&l===null&&(l=xt()),i.value=!0,H.push(e.proxy),dt(d))}function c(h){if(u.value=!1,h!==!0)return;pe(d),i.value=!1;const m=H.indexOf(e.proxy);m>-1&&H.splice(m,1),l!==null&&(Tt(l),l=null)}return tt(()=>{c(!0)}),Object.assign(e.proxy,{__qPortalInnerRef:t}),{showPortal:a,hidePortal:c,portalIsActive:i,portalIsAccessible:u,renderPortal:()=>r===!0?n():i.value===!0?[z(ot,{to:l},n())]:void 0}}const Lt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Ct(e,t){const n=T(t.value);return y(t,o=>{k(()=>{n.value=o})}),{transition:g(()=>"q-transition--"+(n.value===!0?e.transitionHide:e.transitionShow)),transitionStyle:g(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function kt(){let e;return E(()=>{e=void 0}),{registerTick(t){e=t,k(()=>{e===t&&(e(),e=void 0)})},removeTick(){e=void 0}}}function qt(){let e;return E(()=>{clearTimeout(e)}),{registerTimeout(t,n){clearTimeout(e),e=setTimeout(t,n)},removeTimeout(){clearTimeout(e)}}}const Pt=[null,document,document.body,document.scrollingElement,document.documentElement];function Ht(e,t){let n=ut(t);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return Pt.includes(n)?window:n}function zt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Mt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let D;function Wt(){if(D!==void 0)return D;const e=document.createElement("p"),t=document.createElement("div");ge(e,{width:"100%",height:"200px"}),ge(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const n=e.offsetWidth;t.style.overflow="scroll";let o=e.offsetWidth;return n===o&&(o=t.clientWidth),t.remove(),D=n-o,D}function $t(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const S=[];let M;function Ot(e){M=e.keyCode===27}function Rt(){M===!0&&(M=!1)}function Bt(e){M===!0&&(M=!1,Pe(e,27)===!0&&S[S.length-1](e))}function Oe(e){window[e]("keydown",Ot),window[e]("blur",Rt),window[e]("keyup",Bt),M=!1}function Vt(e){b.is.desktop===!0&&(S.push(e),S.length===1&&Oe("addEventListener"))}function we(e){const t=S.indexOf(e);t>-1&&(S.splice(t,1),S.length===0&&Oe("removeEventListener"))}const L=[];function Re(e){L[L.length-1](e)}function At(e){b.is.desktop===!0&&(L.push(e),L.length===1&&document.body.addEventListener("focusin",Re))}function _t(e){const t=L.indexOf(e);t>-1&&(L.splice(t,1),L.length===0&&document.body.removeEventListener("focusin",Re))}let Be;const{notPassiveCapture:Q}=w,C=[];function I(e){clearTimeout(Be);const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=H.length-1;for(;n>=0;){const o=H[n].$;if(o.type.name!=="QDialog")break;if(o.props.seamless!==!0)return;n--}for(let o=C.length-1;o>=0;o--){const i=C[o];if((i.anchorEl.value===null||i.anchorEl.value.contains(t)===!1)&&(t===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(t)===!1))e.qClickOutside=!0,i.onClickOutside(e);else return}}function Dt(e){C.push(e),C.length===1&&(document.addEventListener("mousedown",I,Q),document.addEventListener("touchstart",I,Q))}function be(e){const t=C.findIndex(n=>n===e);t>-1&&(C.splice(t,1),C.length===0&&(clearTimeout(Be),document.removeEventListener("mousedown",I,Q),document.removeEventListener("touchstart",I,Q)))}let ye,xe;function Te(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Ft(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const te={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{te[`${e}#ltr`]=e,te[`${e}#rtl`]=e});function Ee(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:te[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function Nt(e,t){let{top:n,left:o,right:i,bottom:u,width:l,height:d}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],o-=t[0],u+=t[1],i+=t[0],l+=t[0],d+=t[1]),{top:n,left:o,right:i,bottom:u,width:l,height:d,middle:o+(i-o)/2,center:n+(u-n)/2}}function Qt(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function It(e){if(b.is.ios===!0&&window.visualViewport!==void 0){const d=document.body.style,{offsetLeft:r,offsetTop:a}=window.visualViewport;r!==ye&&(d.setProperty("--q-pe-left",r+"px"),ye=r),a!==xe&&(d.setProperty("--q-pe-top",a+"px"),xe=a)}let t;const{scrollLeft:n,scrollTop:o}=e.el;if(e.absoluteOffset===void 0)t=Nt(e.anchorEl,e.cover===!0?[0,0]:e.offset);else{const{top:d,left:r}=e.anchorEl.getBoundingClientRect(),a=d+e.absoluteOffset.top,c=r+e.absoluteOffset.left;t={top:a,left:c,width:1,height:1,right:c+1,center:a,middle:c,bottom:a+1}}let i={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(i.minWidth=t.width+"px",e.cover===!0&&(i.minHeight=t.height+"px")),Object.assign(e.el.style,i);const u=Qt(e.el),l={top:t[e.anchorOrigin.vertical]-u[e.selfOrigin.vertical],left:t[e.anchorOrigin.horizontal]-u[e.selfOrigin.horizontal]};jt(l,t,u,e.anchorOrigin,e.selfOrigin),i={top:l.top+"px",left:l.left+"px"},l.maxHeight!==void 0&&(i.maxHeight=l.maxHeight+"px",t.height>l.maxHeight&&(i.minHeight=i.maxHeight)),l.maxWidth!==void 0&&(i.maxWidth=l.maxWidth+"px",t.width>l.maxWidth&&(i.minWidth=i.maxWidth)),Object.assign(e.el.style,i),e.el.scrollTop!==o&&(e.el.scrollTop=o),e.el.scrollLeft!==n&&(e.el.scrollLeft=n)}function jt(e,t,n,o,i){const u=n.bottom,l=n.right,d=Wt(),r=window.innerHeight-d,a=document.body.clientWidth;if(e.top<0||e.top+u>r)if(i.vertical==="center")e.top=t[o.vertical]>r/2?Math.max(0,r-u):0,e.maxHeight=Math.min(u,r);else if(t[o.vertical]>r/2){const c=Math.min(r,o.vertical==="center"?t.center:o.vertical===i.vertical?t.bottom:t.top);e.maxHeight=Math.min(u,c),e.top=Math.max(0,c-u)}else e.top=Math.max(0,o.vertical==="center"?t.center:o.vertical===i.vertical?t.top:t.bottom),e.maxHeight=Math.min(u,r-e.top);if(e.left<0||e.left+l>a)if(e.maxWidth=Math.min(l,a),i.horizontal==="middle")e.left=t[o.horizontal]>a/2?Math.max(0,a-l):0;else if(t[o.horizontal]>a/2){const c=Math.min(a,o.horizontal==="middle"?t.middle:o.horizontal===i.horizontal?t.right:t.left);e.maxWidth=Math.min(l,c),e.left=Math.max(0,c-e.maxWidth)}else e.left=Math.max(0,o.horizontal==="middle"?t.middle:o.horizontal===i.horizontal?t.left:t.right),e.maxWidth=Math.min(l,a-e.left)}var ro=j({name:"QMenu",inheritAttrs:!1,props:{...ht,...pt,...ze,...Lt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Te},self:{type:String,validator:Te},offset:{type:Array,validator:Ft},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...wt,"click","escape-key"],setup(e,{slots:t,emit:n,attrs:o}){let i=null,u,l,d;const r=A(),{proxy:a}=r,{$q:c}=a,h=T(null),m=T(!1),s=g(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),p=Me(e,c),{registerTick:_,removeTick:W}=kt(),{registerTimeout:$,removeTimeout:v}=qt(),{transition:x,transitionStyle:Ae}=Ct(e,m),{localScrollTarget:ne,changeScrollEvent:_e,unconfigureScrollTarget:De}=gt(e,ce),{anchorEl:q,canShow:Fe}=mt({showing:m}),{hide:ie}=bt({showing:m,canShow:Fe,handleShow:Ke,handleHide:Ue,hideOnRouteChange:s,processOnMount:!0}),{showPortal:le,hidePortal:re,renderPortal:Ne}=St(r,h,Ye),K={anchorEl:q,innerRef:h,onClickOutside(f){if(e.persistent!==!0&&m.value===!0)return ie(f),(f.type==="touchstart"||f.target.classList.contains("q-dialog__backdrop"))&&He(f),!0}},ae=g(()=>Ee(e.anchor||(e.cover===!0?"center middle":"bottom start"),c.lang.rtl)),Qe=g(()=>e.cover===!0?ae.value:Ee(e.self||"top start",c.lang.rtl)),Ie=g(()=>(e.square===!0?" q-menu--square":"")+(p.value===!0?" q-menu--dark q-dark":"")),je=g(()=>e.autoClose===!0?{onClick:Xe}:{}),se=g(()=>m.value===!0&&e.persistent!==!0);y(se,f=>{f===!0?(Vt(X),Dt(K)):(we(X),be(K))});function U(){ft(()=>{let f=h.value;f&&f.contains(document.activeElement)!==!0&&(f=f.querySelector("[autofocus], [data-autofocus]")||f,f.focus({preventScroll:!0}))})}function Ke(f){if(W(),v(),i=e.noRefocus===!1?document.activeElement:null,At(de),le(),ce(),u=void 0,f!==void 0&&(e.touchPosition||e.contextMenu)){const Y=nt(f);if(Y.left!==void 0){const{top:Ge,left:Je}=q.value.getBoundingClientRect();u={left:Y.left-Je,top:Y.top-Ge}}}l===void 0&&(l=y(()=>c.screen.width+"|"+c.screen.height+"|"+e.self+"|"+e.anchor+"|"+c.lang.rtl,O)),e.noFocus!==!0&&document.activeElement.blur(),_(()=>{O(),e.noFocus!==!0&&U()}),$(()=>{c.platform.is.ios===!0&&(d=e.autoClose,h.value.click()),O(),le(!0),n("show",f)},e.transitionDuration)}function Ue(f){W(),v(),re(),ue(!0),i!==null&&(f===void 0||f.qClickOutside!==!0)&&(i.focus(),i=null),$(()=>{re(!0),n("hide",f)},e.transitionDuration)}function ue(f){u=void 0,l!==void 0&&(l(),l=void 0),(f===!0||m.value===!0)&&(_t(de),De(),be(K),we(X)),f!==!0&&(i=null)}function ce(){(q.value!==null||e.scrollTarget!==void 0)&&(ne.value=Ht(q.value,e.scrollTarget),_e(ne.value,O))}function Xe(f){d!==!0?($e(a,f),n("click",f)):d=!1}function de(f){se.value===!0&&e.noFocus!==!0&&ct(h.value,f.target)!==!0&&U()}function X(f){n("escape-key"),ie(f)}function O(){const f=h.value;f===null||q.value===null||It({el:f,offset:e.offset,anchorEl:q.value,anchorOrigin:ae.value,selfOrigin:Qe.value,absoluteOffset:u,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Ye(){return z(it,{name:x.value,appear:!0},()=>m.value===!0?z("div",{...o,ref:h,tabindex:-1,class:["q-menu q-position-engine scroll"+Ie.value,o.class],style:[o.style,Ae.value],...je.value},We(t.default)):null)}return E(ue),Object.assign(a,{focus:U,updatePosition:O}),Ne}});function Kt(){const e=T(!lt.value);return e.value===!1&&V(()=>{e.value=!0}),e}const Ve=typeof ResizeObserver!="undefined",Se=Ve===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ao=j({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let n=null,o,i={width:-1,height:-1};function u(r){r===!0||e.debounce===0||e.debounce==="0"?l():n===null&&(n=setTimeout(l,e.debounce))}function l(){if(clearTimeout(n),n=null,o){const{offsetWidth:r,offsetHeight:a}=o;(r!==i.width||a!==i.height)&&(i={width:r,height:a},t("resize",i))}}const d=A();if(Object.assign(d.proxy,{trigger:u}),Ve===!0){let r;return V(()=>{k(()=>{o=d.proxy.$el.parentNode,o&&(r=new ResizeObserver(u),r.observe(o),l())})}),E(()=>{clearTimeout(n),r!==void 0&&(r.disconnect!==void 0?r.disconnect():o&&r.unobserve(o))}),rt}else{let c=function(){clearTimeout(n),a!==void 0&&(a.removeEventListener!==void 0&&a.removeEventListener("resize",u,w.passive),a=void 0)},h=function(){c(),o&&o.contentDocument&&(a=o.contentDocument.defaultView,a.addEventListener("resize",u,w.passive),l())};const r=Kt();let a;return V(()=>{k(()=>{o=d.proxy.$el,o&&h()})}),E(c),()=>{if(r.value===!0)return z("object",{style:Se.style,tabindex:-1,type:"text/html",data:Se.url,"aria-hidden":"true",onLoad:h})}}}}),so=j({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=g(()=>parseInt(e.lines,10)),o=g(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),i=g(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>z("div",{style:i.value,class:o.value},We(t.default))}});const Ut={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},G={xs:2,sm:4,md:8,lg:16,xl:24};var uo=j({name:"QSeparator",props:{...ze,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const t=A(),n=Me(e,t.proxy.$q),o=g(()=>e.vertical===!0?"vertical":"horizontal"),i=g(()=>` q-separator--${o.value}`),u=g(()=>e.inset!==!1?`${i.value}-${Ut[e.inset]}`:""),l=g(()=>`q-separator${i.value}${u.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(n.value===!0?" q-separator--dark":"")),d=g(()=>{const r={};if(e.size!==void 0&&(r[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const a=e.spaced===!0?`${G.md}px`:e.spaced in G?`${G[e.spaced]}px`:e.spaced,c=e.vertical===!0?["Left","Right"]:["Top","Bottom"];r[`margin${c[0]}`]=r[`margin${c[1]}`]=a}return r});return()=>z("hr",{class:l.value,style:d.value,"aria-orientation":o.value})}});function co(e,t,n){let o;function i(){o!==void 0&&(me.remove(o),o=void 0)}return E(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){o={condition:()=>n.value===!0,handler:t},me.add(o)}}}let R=0,J,Z,B,ee=!1,Le,Ce,P;function Xt(e){Yt(e)&&He(e)}function Yt(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=at(e),n=e.shiftKey&&!e.deltaX,o=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=n||o?e.deltaY:e.deltaX;for(let u=0;u<t.length;u++){const l=t[u];if($t(l,o))return o?i<0&&l.scrollTop===0?!0:i>0&&l.scrollTop+l.clientHeight===l.scrollHeight:i<0&&l.scrollLeft===0?!0:i>0&&l.scrollLeft+l.clientWidth===l.scrollWidth}return!0}function ke(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function F(e){ee!==!0&&(ee=!0,requestAnimationFrame(()=>{ee=!1;const{height:t}=e.target,{clientHeight:n,scrollTop:o}=document.scrollingElement;(B===void 0||t!==window.innerHeight)&&(B=n-t,document.scrollingElement.scrollTop=o),o>B&&(document.scrollingElement.scrollTop-=Math.ceil((o-B)/8))}))}function qe(e){const t=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:o,overflowX:i}=window.getComputedStyle(t);J=Mt(window),Z=zt(window),Le=t.style.left,Ce=t.style.top,t.style.left=`-${J}px`,t.style.top=`-${Z}px`,i!=="hidden"&&(i==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),o!=="hidden"&&(o==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,b.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",F,w.passiveCapture),window.visualViewport.addEventListener("scroll",F,w.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",ke,w.passiveCapture))}b.is.desktop===!0&&b.is.mac===!0&&window[`${e}EventListener`]("wheel",Xt,w.notPassive),e==="remove"&&(b.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",F,w.passiveCapture),window.visualViewport.removeEventListener("scroll",F,w.passiveCapture)):window.removeEventListener("scroll",ke,w.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=Le,t.style.top=Ce,window.scrollTo(J,Z),B=void 0)}function Gt(e){let t="add";if(e===!0){if(R++,P!==void 0){clearTimeout(P),P=void 0;return}if(R>1)return}else{if(R===0||(R--,R>0))return;if(t="remove",b.is.ios===!0&&b.is.nativeMobile===!0){clearTimeout(P),P=setTimeout(()=>{qe(t),P=void 0},100);return}}qe(t)}function fo(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,Gt(t))}}}const oe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Jt=Object.keys(oe);oe.all=!0;function vo(e){const t={};for(const n of Jt)e[n]===!0&&(t[n]=!0);return Object.keys(t).length===0?oe:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}function ho(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}export{Vt as A,ao as Q,wt as a,qt as b,bt as c,co as d,fo as e,zt as f,Ht as g,Mt as h,Wt as i,ro as j,so as k,uo as l,vo as m,vt as n,io as o,lo as p,ht as q,mt as r,ho as s,Lt as t,pt as u,kt as v,St as w,_t as x,we as y,At as z};
