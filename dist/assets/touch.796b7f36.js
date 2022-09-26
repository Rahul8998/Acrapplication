import{P as Xe,r as T,D as Pe,E as ce,n as P,G as de,w as y,a as $,o as E,g as I,H as Ye,k as g,I as fe,s as Ge,h as N,J as Je,c as x,K as w,L as Ze,T as et,C as He,m as tt,j as ot,M as he,N as nt}from"./index.a153618e.js";import{v as it,g as F,b as lt,c as ve,d as rt}from"./use-router-link.ae539cc4.js";import{u as st,a as at}from"./use-dark.4f362a00.js";import{r as me,a as ut,c as ct}from"./format.1a94cd50.js";import{c as ke,h as dt}from"./render.b874c987.js";function ft(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Xe.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const ht={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function vt({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:o,proxy:l,emit:u}=I(),i=T(null);let c;function r(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const s={};n===void 0&&(Object.assign(s,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){Pe(a,13)===!0&&s.toggle(a)},contextClick(a){l.hide(a),ce(a),P(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:ce,mobileTouch(a){if(s.mobileCleanup(a),r(a)!==!0)return;l.hide(a),i.value.classList.add("non-selectable");const p=a.target;de(s,"anchor",[[p,"touchmove","mobileCleanup","passive"],[p,"touchend","mobileCleanup","passive"],[p,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),c=setTimeout(()=>{l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),clearTimeout(c),e.value===!0&&a!==void 0&&ft()}}),n=function(a=o.contextMenu){if(o.noParentEvent===!0||i.value===null)return;let p;a===!0?l.$q.platform.is.mobile===!0?p=[[i.value,"touchstart","mobileTouch","passive"]]:p=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:p=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],de(s,"anchor",p)});function d(){Ye(s,"anchor")}function v(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;n()}function m(){if(o.target===!1||o.target===""||l.$el.parentNode===null)i.value=null;else if(o.target===!0)v(l.$el.parentNode);else{let a=o.target;if(typeof o.target=="string")try{a=document.querySelector(o.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,n()):(i.value=null,console.error(`Anchor: target "${o.target}" not found`))}}return y(()=>o.contextMenu,a=>{i.value!==null&&(d(),n(a))}),y(()=>o.target,()=>{i.value!==null&&d(),m()}),y(()=>o.noParentEvent,a=>{i.value!==null&&(a===!0?d():n())}),$(()=>{m(),t!==!0&&o.modelValue===!0&&i.value===null&&u("update:modelValue",!1)}),E(()=>{clearTimeout(c),d()}),{anchorEl:i,canShow:r,anchorEvents:s}}function mt(e,t){const n=T(null);let o;function l(c,r){const s=`${r!==void 0?"add":"remove"}EventListener`,d=r!==void 0?r:o;c!==window&&c[s]("scroll",d,g.passive),window[s]("scroll",d,g.passive),o=r}function u(){n.value!==null&&(l(n.value),n.value=null)}const i=y(()=>e.noParentEvent,()=>{n.value!==null&&(u(),t())});return E(i),{localScrollTarget:n,unconfigureScrollTarget:u,changeScrollEvent:l}}const pt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},gt=["before-show","show","before-hide","hide"];function wt({showing:e,canShow:t,hideOnRouteChange:n,handleShow:o,handleHide:l,processOnMount:u}){const i=I(),{props:c,emit:r,proxy:s}=i;let d;function v(h){e.value===!0?p(h):m(h)}function m(h){if(c.disable===!0||h!==void 0&&h.qAnchorHandled===!0||t!==void 0&&t(h)!==!0)return;const b=c["onUpdate:modelValue"]!==void 0;b===!0&&(r("update:modelValue",!0),d=h,P(()=>{d===h&&(d=void 0)})),(c.modelValue===null||b===!1)&&a(h)}function a(h){e.value!==!0&&(e.value=!0,r("before-show",h),o!==void 0?o(h):r("show",h))}function p(h){if(c.disable===!0)return;const b=c["onUpdate:modelValue"]!==void 0;b===!0&&(r("update:modelValue",!1),d=h,P(()=>{d===h&&(d=void 0)})),(c.modelValue===null||b===!1)&&A(h)}function A(h){e.value!==!1&&(e.value=!1,r("before-hide",h),l!==void 0?l(h):r("hide",h))}function W(h){c.disable===!0&&h===!0?c["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!1):h===!0!==e.value&&(h===!0?a:A)(d)}y(()=>c.modelValue,W),n!==void 0&&it(i)===!0&&y(()=>s.$route.fullPath,()=>{n.value===!0&&e.value===!0&&p()}),u===!0&&$(()=>{W(c.modelValue)});const z={show:m,hide:p,toggle:v};return Object.assign(s,z),z}let yt=document.body;function bt(e){const t=document.createElement("div");if(e!==void 0&&(t.id=e),fe.globalNodes!==void 0){const n=fe.globalNodes.class;n!==void 0&&(t.className=n)}return yt.appendChild(t),t}function xt(e){e.remove()}const q=[];function oo(e){return q.find(t=>t.__qPortalInnerRef.value!==null&&t.__qPortalInnerRef.value.contains(e))}function qe(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return F(e)}else if(e.__qPortalInnerRef!==void 0){const n=F(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=F(e)}while(e!=null)}function no(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortalInnerRef!==void 0){if(n--,e.$options.name==="QMenu"){e=qe(e,t);continue}e.hide(t)}e=F(e)}}function Tt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Et(e,t,n,o){const l=T(!1),u=T(!1);let i=null;const c={},r=o===!0&&Tt(e);function s(v){if(v===!0){me(c),u.value=!0;return}u.value=!1,l.value===!1&&(r===!1&&i===null&&(i=bt()),l.value=!0,q.push(e.proxy),ut(c))}function d(v){if(u.value=!1,v!==!0)return;me(c),l.value=!1;const m=q.indexOf(e.proxy);m>-1&&q.splice(m,1),i!==null&&(xt(i),i=null)}return Ge(()=>{d(!0)}),Object.assign(e.proxy,{__qPortalInnerRef:t}),{showPortal:s,hidePortal:d,portalIsActive:l,portalIsAccessible:u,renderPortal:()=>r===!0?n():l.value===!0?[N(Je,{to:i},n())]:void 0}}const Lt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function St(e,t){const n=T(t.value);return y(t,o=>{P(()=>{n.value=o})}),{transition:x(()=>"q-transition--"+(n.value===!0?e.transitionHide:e.transitionShow)),transitionStyle:x(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Ct(){let e;return E(()=>{e=void 0}),{registerTick(t){e=t,P(()=>{e===t&&(e(),e=void 0)})},removeTick(){e=void 0}}}function Pt(){let e;return E(()=>{clearTimeout(e)}),{registerTimeout(t,n){clearTimeout(e),e=setTimeout(t,n)},removeTimeout(){clearTimeout(e)}}}const Ht=[null,document,document.body,document.scrollingElement,document.documentElement];function kt(e,t){let n=lt(t);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return Ht.includes(n)?window:n}function qt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Mt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let B;function Wt(){if(B!==void 0)return B;const e=document.createElement("p"),t=document.createElement("div");ve(e,{width:"100%",height:"200px"}),ve(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const n=e.offsetWidth;t.style.overflow="scroll";let o=e.offsetWidth;return n===o&&(o=t.clientWidth),t.remove(),B=n-o,B}function zt(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const L=[];let M;function Ot(e){M=e.keyCode===27}function Rt(){M===!0&&(M=!1)}function Vt(e){M===!0&&(M=!1,Pe(e,27)===!0&&L[L.length-1](e))}function Me(e){window[e]("keydown",Ot),window[e]("blur",Rt),window[e]("keyup",Vt),M=!1}function $t(e){w.is.desktop===!0&&(L.push(e),L.length===1&&Me("addEventListener"))}function pe(e){const t=L.indexOf(e);t>-1&&(L.splice(t,1),L.length===0&&Me("removeEventListener"))}const S=[];function We(e){S[S.length-1](e)}function At(e){w.is.desktop===!0&&(S.push(e),S.length===1&&document.body.addEventListener("focusin",We))}function Bt(e){const t=S.indexOf(e);t>-1&&(S.splice(t,1),S.length===0&&document.body.removeEventListener("focusin",We))}let ze;const{notPassiveCapture:_}=g,C=[];function j(e){clearTimeout(ze);const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=q.length-1;for(;n>=0;){const o=q[n].$;if(o.type.name!=="QDialog")break;if(o.props.seamless!==!0)return;n--}for(let o=C.length-1;o>=0;o--){const l=C[o];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function Dt(e){C.push(e),C.length===1&&(document.addEventListener("mousedown",j,_),document.addEventListener("touchstart",j,_))}function ge(e){const t=C.findIndex(n=>n===e);t>-1&&(C.splice(t,1),C.length===0&&(clearTimeout(ze),document.removeEventListener("mousedown",j,_),document.removeEventListener("touchstart",j,_)))}let we,ye;function be(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Ft(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const Z={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{Z[`${e}#ltr`]=e,Z[`${e}#rtl`]=e});function xe(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:Z[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function Nt(e,t){let{top:n,left:o,right:l,bottom:u,width:i,height:c}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],o-=t[0],u+=t[1],l+=t[0],i+=t[0],c+=t[1]),{top:n,left:o,right:l,bottom:u,width:i,height:c,middle:o+(l-o)/2,center:n+(u-n)/2}}function _t(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function jt(e){if(w.is.ios===!0&&window.visualViewport!==void 0){const c=document.body.style,{offsetLeft:r,offsetTop:s}=window.visualViewport;r!==we&&(c.setProperty("--q-pe-left",r+"px"),we=r),s!==ye&&(c.setProperty("--q-pe-top",s+"px"),ye=s)}let t;const{scrollLeft:n,scrollTop:o}=e.el;if(e.absoluteOffset===void 0)t=Nt(e.anchorEl,e.cover===!0?[0,0]:e.offset);else{const{top:c,left:r}=e.anchorEl.getBoundingClientRect(),s=c+e.absoluteOffset.top,d=r+e.absoluteOffset.left;t={top:s,left:d,width:1,height:1,right:d+1,center:s,middle:d,bottom:s+1}}let l={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(l.minWidth=t.width+"px",e.cover===!0&&(l.minHeight=t.height+"px")),Object.assign(e.el.style,l);const u=_t(e.el),i={top:t[e.anchorOrigin.vertical]-u[e.selfOrigin.vertical],left:t[e.anchorOrigin.horizontal]-u[e.selfOrigin.horizontal]};It(i,t,u,e.anchorOrigin,e.selfOrigin),l={top:i.top+"px",left:i.left+"px"},i.maxHeight!==void 0&&(l.maxHeight=i.maxHeight+"px",t.height>i.maxHeight&&(l.minHeight=l.maxHeight)),i.maxWidth!==void 0&&(l.maxWidth=i.maxWidth+"px",t.width>i.maxWidth&&(l.minWidth=l.maxWidth)),Object.assign(e.el.style,l),e.el.scrollTop!==o&&(e.el.scrollTop=o),e.el.scrollLeft!==n&&(e.el.scrollLeft=n)}function It(e,t,n,o,l){const u=n.bottom,i=n.right,c=Wt(),r=window.innerHeight-c,s=document.body.clientWidth;if(e.top<0||e.top+u>r)if(l.vertical==="center")e.top=t[o.vertical]>r/2?Math.max(0,r-u):0,e.maxHeight=Math.min(u,r);else if(t[o.vertical]>r/2){const d=Math.min(r,o.vertical==="center"?t.center:o.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(u,d),e.top=Math.max(0,d-u)}else e.top=Math.max(0,o.vertical==="center"?t.center:o.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(u,r-e.top);if(e.left<0||e.left+i>s)if(e.maxWidth=Math.min(i,s),l.horizontal==="middle")e.left=t[o.horizontal]>s/2?Math.max(0,s-i):0;else if(t[o.horizontal]>s/2){const d=Math.min(s,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(i,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,o.horizontal==="middle"?t.middle:o.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(i,s-e.left)}var io=ke({name:"QMenu",inheritAttrs:!1,props:{...ht,...pt,...st,...Lt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:be},self:{type:String,validator:be},offset:{type:Array,validator:Ft},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...gt,"click","escape-key"],setup(e,{slots:t,emit:n,attrs:o}){let l=null,u,i,c;const r=I(),{proxy:s}=r,{$q:d}=s,v=T(null),m=T(!1),a=x(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),p=at(e,d),{registerTick:A,removeTick:W}=Ct(),{registerTimeout:z,removeTimeout:h}=Pt(),{transition:b,transitionStyle:Re}=St(e,m),{localScrollTarget:te,changeScrollEvent:Ve,unconfigureScrollTarget:$e}=mt(e,ae),{anchorEl:H,canShow:Ae}=vt({showing:m}),{hide:oe}=wt({showing:m,canShow:Ae,handleShow:_e,handleHide:je,hideOnRouteChange:a,processOnMount:!0}),{showPortal:ne,hidePortal:ie,renderPortal:Be}=Et(r,v,Qe),Q={anchorEl:H,innerRef:v,onClickOutside(f){if(e.persistent!==!0&&m.value===!0)return oe(f),(f.type==="touchstart"||f.target.classList.contains("q-dialog__backdrop"))&&He(f),!0}},le=x(()=>xe(e.anchor||(e.cover===!0?"center middle":"bottom start"),d.lang.rtl)),De=x(()=>e.cover===!0?le.value:xe(e.self||"top start",d.lang.rtl)),Fe=x(()=>(e.square===!0?" q-menu--square":"")+(p.value===!0?" q-menu--dark q-dark":"")),Ne=x(()=>e.autoClose===!0?{onClick:Ie}:{}),re=x(()=>m.value===!0&&e.persistent!==!0);y(re,f=>{f===!0?($t(U),Dt(Q)):(pe(U),ge(Q))});function K(){ct(()=>{let f=v.value;f&&f.contains(document.activeElement)!==!0&&(f=f.querySelector("[autofocus], [data-autofocus]")||f,f.focus({preventScroll:!0}))})}function _e(f){if(W(),h(),l=e.noRefocus===!1?document.activeElement:null,At(ue),ne(),ae(),u=void 0,f!==void 0&&(e.touchPosition||e.contextMenu)){const X=Ze(f);if(X.left!==void 0){const{top:Ke,left:Ue}=H.value.getBoundingClientRect();u={left:X.left-Ue,top:X.top-Ke}}}i===void 0&&(i=y(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,O)),e.noFocus!==!0&&document.activeElement.blur(),A(()=>{O(),e.noFocus!==!0&&K()}),z(()=>{d.platform.is.ios===!0&&(c=e.autoClose,v.value.click()),O(),ne(!0),n("show",f)},e.transitionDuration)}function je(f){W(),h(),ie(),se(!0),l!==null&&(f===void 0||f.qClickOutside!==!0)&&(l.focus(),l=null),z(()=>{ie(!0),n("hide",f)},e.transitionDuration)}function se(f){u=void 0,i!==void 0&&(i(),i=void 0),(f===!0||m.value===!0)&&(Bt(ue),$e(),ge(Q),pe(U)),f!==!0&&(l=null)}function ae(){(H.value!==null||e.scrollTarget!==void 0)&&(te.value=kt(H.value,e.scrollTarget),Ve(te.value,O))}function Ie(f){c!==!0?(qe(s,f),n("click",f)):c=!1}function ue(f){re.value===!0&&e.noFocus!==!0&&rt(v.value,f.target)!==!0&&K()}function U(f){n("escape-key"),oe(f)}function O(){const f=v.value;f===null||H.value===null||jt({el:f,offset:e.offset,anchorEl:H.value,anchorOrigin:le.value,selfOrigin:De.value,absoluteOffset:u,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Qe(){return N(et,{name:b.value,appear:!0},()=>m.value===!0?N("div",{...o,ref:v,tabindex:-1,class:["q-menu q-position-engine scroll"+Fe.value,o.class],style:[o.style,Re.value],...Ne.value},dt(t.default)):null)}return E(se),Object.assign(s,{focus:K,updatePosition:O}),Be}});function Qt(){const e=T(!tt.value);return e.value===!1&&$(()=>{e.value=!0}),e}const Oe=typeof ResizeObserver!="undefined",Te=Oe===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var lo=ke({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let n=null,o,l={width:-1,height:-1};function u(r){r===!0||e.debounce===0||e.debounce==="0"?i():n===null&&(n=setTimeout(i,e.debounce))}function i(){if(clearTimeout(n),n=null,o){const{offsetWidth:r,offsetHeight:s}=o;(r!==l.width||s!==l.height)&&(l={width:r,height:s},t("resize",l))}}const c=I();if(Object.assign(c.proxy,{trigger:u}),Oe===!0){let r;return $(()=>{P(()=>{o=c.proxy.$el.parentNode,o&&(r=new ResizeObserver(u),r.observe(o),i())})}),E(()=>{clearTimeout(n),r!==void 0&&(r.disconnect!==void 0?r.disconnect():o&&r.unobserve(o))}),ot}else{let d=function(){clearTimeout(n),s!==void 0&&(s.removeEventListener!==void 0&&s.removeEventListener("resize",u,g.passive),s=void 0)},v=function(){d(),o&&o.contentDocument&&(s=o.contentDocument.defaultView,s.addEventListener("resize",u,g.passive),i())};const r=Qt();let s;return $(()=>{P(()=>{o=c.proxy.$el,o&&v()})}),E(d),()=>{if(r.value===!0)return N("object",{style:Te.style,tabindex:-1,type:"text/html",data:Te.url,"aria-hidden":"true",onLoad:v})}}}});function ro(e,t,n){let o;function l(){o!==void 0&&(he.remove(o),o=void 0)}return E(()=>{e.value===!0&&l()}),{removeFromHistory:l,addToHistory(){o={condition:()=>n.value===!0,handler:t},he.add(o)}}}let R=0,Y,G,V,J=!1,Ee,Le,k;function Kt(e){Ut(e)&&He(e)}function Ut(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=nt(e),n=e.shiftKey&&!e.deltaX,o=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),l=n||o?e.deltaY:e.deltaX;for(let u=0;u<t.length;u++){const i=t[u];if(zt(i,o))return o?l<0&&i.scrollTop===0?!0:l>0&&i.scrollTop+i.clientHeight===i.scrollHeight:l<0&&i.scrollLeft===0?!0:l>0&&i.scrollLeft+i.clientWidth===i.scrollWidth}return!0}function Se(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function D(e){J!==!0&&(J=!0,requestAnimationFrame(()=>{J=!1;const{height:t}=e.target,{clientHeight:n,scrollTop:o}=document.scrollingElement;(V===void 0||t!==window.innerHeight)&&(V=n-t,document.scrollingElement.scrollTop=o),o>V&&(document.scrollingElement.scrollTop-=Math.ceil((o-V)/8))}))}function Ce(e){const t=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:o,overflowX:l}=window.getComputedStyle(t);Y=Mt(window),G=qt(window),Ee=t.style.left,Le=t.style.top,t.style.left=`-${Y}px`,t.style.top=`-${G}px`,l!=="hidden"&&(l==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),o!=="hidden"&&(o==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,w.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",D,g.passiveCapture),window.visualViewport.addEventListener("scroll",D,g.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Se,g.passiveCapture))}w.is.desktop===!0&&w.is.mac===!0&&window[`${e}EventListener`]("wheel",Kt,g.notPassive),e==="remove"&&(w.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",D,g.passiveCapture),window.visualViewport.removeEventListener("scroll",D,g.passiveCapture)):window.removeEventListener("scroll",Se,g.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=Ee,t.style.top=Le,window.scrollTo(Y,G),V=void 0)}function Xt(e){let t="add";if(e===!0){if(R++,k!==void 0){clearTimeout(k),k=void 0;return}if(R>1)return}else{if(R===0||(R--,R>0))return;if(t="remove",w.is.ios===!0&&w.is.nativeMobile===!0){clearTimeout(k),k=setTimeout(()=>{Ce(t),k=void 0},100);return}}Ce(t)}function so(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,Xt(t))}}}const ee={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Yt=Object.keys(ee);ee.all=!0;function ao(e){const t={};for(const n of Yt)e[n]===!0&&(t[n]=!0);return Object.keys(t).length===0?ee:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}function uo(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}export{lo as Q,gt as a,Pt as b,wt as c,ro as d,so as e,qt as f,kt as g,Mt as h,Wt as i,io as j,ao as k,ft as l,oo as m,no as n,ht as o,vt as p,Lt as q,Ct as r,uo as s,Et as t,pt as u,Bt as v,pe as w,At as x,$t as y};
