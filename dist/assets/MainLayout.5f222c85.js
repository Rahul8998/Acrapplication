import{c as G,r as q,a as i,w,o as ue,e as Oe,f as Le,h as p,T as ot,g as ee,i as _e,s as it,j as E,k as rt,l as Pe,m as ge,n as Ee,p as Fe,q as Be,t as Z,u as Qe,v as Ne,x as ut,y as st,z as ct,A as dt,B as ve,C as ft,D as vt,E as mt,F as J,G as Y,H as c,I as u,Q as Ce,J as V,K as O,L as ht,M as ie,O as gt,R as bt,S as yt,U as wt,V as xt,W as re,X as kt,Y as St,Z as ze}from"./index.e8331cb9.js";import{Q as Ct,a as Tt}from"./QToolbar.45726721.js";import{u as pt,a as Ue,b as qt,v as Me,c as _t,d as je,e as Pt,f as Ke,g as $t,h as Ot,i as Lt,j as Xe,k as Bt,r as Ae,s as Qt,l as De,m as Ge,p as He,n as zt,o as Mt,q as At,t as Dt,w as Ht,x as Te,Q as Vt}from"./use-prevent-scroll.1f51212c.js";import{Q as Ve,a as X,b as D}from"./QList.a4049a9a.js";import{Q as qe}from"./touch.1dc7867b.js";import{Q as Rt,a as Wt}from"./QSeparator.247a4dbf.js";import{u as It,a as Et}from"./use-dark.0d932583.js";import{T as pe}from"./TouchPan.81b3451f.js";import{b as me}from"./format.3e32b8d9.js";import{u as Ft}from"./use-quasar.79cd8cf2.js";import{u as Nt}from"./auth.ab91115b.js";import"./focus-manager.32f8d49a.js";import"./axios.19845faa.js";var Re=G({name:"QTooltip",inheritAttrs:!1,props:{...pt,...Ue,...qt,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:Me},self:{type:String,default:"top middle",validator:Me},offset:{type:Array,default:()=>[14,14],validator:_t},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...je],setup(e,{slots:_,emit:r,attrs:n}){let l,d;const x=ee(),{proxy:{$q:y}}=x,S=q(null),s=q(!1),a=i(()=>He(e.anchor,y.lang.rtl)),k=i(()=>He(e.self,y.lang.rtl)),L=i(()=>e.persistent!==!0),{registerTick:h,removeTick:g}=Pt(),{registerTimeout:B}=Ke(),{transition:T,transitionStyle:b}=$t(e,s),{localScrollTarget:o,changeScrollEvent:P,unconfigureScrollTarget:f}=Ot(e,ce),{anchorEl:m,canShow:$,anchorEvents:z}=Lt({showing:s,configureAnchorEl:K}),{show:j,hide:H}=Xe({showing:s,canShow:$,handleShow:F,handleHide:te,hideOnRouteChange:L,processOnMount:!0});Object.assign(z,{delayShow:le,delayHide:ne});const{showPortal:M,hidePortal:W,renderPortal:se}=Bt(x,S,ye);if(y.platform.is.mobile===!0){const C={anchorEl:m,innerRef:S,onClickOutside(I){return H(I),I.target.classList.contains("q-dialog__backdrop")&&it(I),!0}},oe=i(()=>e.modelValue===null&&e.persistent!==!0&&s.value===!0);w(oe,I=>{(I===!0?zt:Ae)(C)}),ue(()=>{Ae(C)})}function F(C){M(),h(()=>{d=new MutationObserver(()=>R()),d.observe(S.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),R(),ce()}),l===void 0&&(l=w(()=>y.screen.width+"|"+y.screen.height+"|"+e.self+"|"+e.anchor+"|"+y.lang.rtl,R)),B(()=>{M(!0),r("show",C)},e.transitionDuration)}function te(C){g(),W(),ae(),B(()=>{W(!0),r("hide",C)},e.transitionDuration)}function ae(){d!==void 0&&(d.disconnect(),d=void 0),l!==void 0&&(l(),l=void 0),f(),Oe(z,"tooltipTemp")}function R(){const C=S.value;m.value===null||!C||Qt({el:C,offset:e.offset,anchorEl:m.value,anchorOrigin:a.value,selfOrigin:k.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function le(C){if(y.platform.is.mobile===!0){De(),document.body.classList.add("non-selectable");const oe=m.value,I=["touchmove","touchcancel","touchend","click"].map(de=>[oe,de,"delayHide","passiveCapture"]);Le(z,"tooltipTemp",I)}B(()=>{j(C)},e.delay)}function ne(C){y.platform.is.mobile===!0&&(Oe(z,"tooltipTemp"),De(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),B(()=>{H(C)},e.hideDelay)}function K(){if(e.noParentEvent===!0||m.value===null)return;const C=y.platform.is.mobile===!0?[[m.value,"touchstart","delayShow","passive"]]:[[m.value,"mouseenter","delayShow","passive"],[m.value,"mouseleave","delayHide","passive"]];Le(z,"anchor",C)}function ce(){if(m.value!==null||e.scrollTarget!==void 0){o.value=Ge(m.value,e.scrollTarget);const C=e.noParentEvent===!0?R:H;P(o.value,C)}}function be(){return s.value===!0?p("div",{...n,ref:S,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",n.class],style:[n.style,b.value],role:"tooltip"},_e(_.default)):null}function ye(){return p(ot,{name:T.value,appear:!0},be)}return ue(ae),Object.assign(x.proxy,{updatePosition:R}),se}}),Ut=G({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:_,emit:r}){const{proxy:{$q:n}}=ee(),l=Pe(ge,E);if(l===E)return console.error("QHeader needs to be child of QLayout"),E;const d=q(parseInt(e.heightHint,10)),x=q(!0),y=i(()=>e.reveal===!0||l.view.value.indexOf("H")>-1||n.platform.is.ios&&l.isContainer.value===!0),S=i(()=>{if(e.modelValue!==!0)return 0;if(y.value===!0)return x.value===!0?d.value:0;const o=d.value-l.scroll.value.position;return o>0?o:0}),s=i(()=>e.modelValue!==!0||y.value===!0&&x.value!==!0),a=i(()=>e.modelValue===!0&&s.value===!0&&e.reveal===!0),k=i(()=>"q-header q-layout__section--marginal "+(y.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),L=i(()=>{const o=l.rows.value.top,P={};return o[0]==="l"&&l.left.space===!0&&(P[n.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),o[2]==="r"&&l.right.space===!0&&(P[n.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),P});function h(o,P){l.update("header",o,P)}function g(o,P){o.value!==P&&(o.value=P)}function B({height:o}){g(d,o),h("size",o)}function T(o){a.value===!0&&g(x,!0),r("focusin",o)}w(()=>e.modelValue,o=>{h("space",o),g(x,!0),l.animate()}),w(S,o=>{h("offset",o)}),w(()=>e.reveal,o=>{o===!1&&g(x,e.modelValue)}),w(x,o=>{l.animate(),r("reveal",o)}),w(l.scroll,o=>{e.reveal===!0&&g(x,o.direction==="up"||o.position<=e.revealOffset||o.position-o.inflectionPoint<100)});const b={};return l.instances.header=b,e.modelValue===!0&&h("size",d.value),h("space",e.modelValue),h("offset",S.value),ue(()=>{l.instances.header===b&&(l.instances.header=void 0,h("size",0),h("offset",0),h("space",!1))}),()=>{const o=rt(_.default,[]);return e.elevated===!0&&o.push(p("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(p(qe,{debounce:0,onResize:B})),p("header",{class:k.value,style:L.value,onFocusin:T},o)}}});const jt=["top","middle","bottom"];var he=G({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>jt.includes(e)}},setup(e,{slots:_}){const r=i(()=>e.align!==void 0?{verticalAlign:e.align}:null),n=i(()=>{const l=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(l!==void 0?` text-${l}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>p("div",{class:n.value,style:r.value,role:"status","aria-label":e.label},Ee(_.default,e.label!==void 0?[e.label]:[]))}});const We=150;var Kt=G({name:"QDrawer",inheritAttrs:!1,props:{...Ue,...It,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...je,"on-layout","mini-state"],setup(e,{slots:_,emit:r,attrs:n}){const l=ee(),{proxy:{$q:d}}=l,x=Et(e,d),{preventBodyScroll:y}=At(),{registerTimeout:S,removeTimeout:s}=Ke(),a=Pe(ge,E);if(a===E)return console.error("QDrawer needs to be child of QLayout"),E;let k,L,h;const g=q(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),B=i(()=>e.mini===!0&&g.value!==!0),T=i(()=>B.value===!0?e.miniWidth:e.width),b=q(e.showIfAbove===!0&&g.value===!1?!0:e.modelValue===!0),o=i(()=>e.persistent!==!0&&(g.value===!0||ce.value===!0));function P(t,v){if(z(),t!==!1&&a.animate(),A(0),g.value===!0){const Q=a.instances[R.value];Q!==void 0&&Q.belowBreakpoint===!0&&Q.hide(!1),N(1),a.isContainer.value!==!0&&y(!0)}else N(0),t!==!1&&xe(!1);S(()=>{t!==!1&&xe(!0),v!==!0&&r("show",t)},We)}function f(t,v){j(),t!==!1&&a.animate(),N(0),A(W.value*T.value),ke(),v!==!0?S(()=>{r("hide",t)},We):s()}const{show:m,hide:$}=Xe({showing:b,hideOnRouteChange:o,handleShow:P,handleHide:f}),{addToHistory:z,removeFromHistory:j}=Mt(b,$,o),H={belowBreakpoint:g,hide:$},M=i(()=>e.side==="right"),W=i(()=>(d.lang.rtl===!0?-1:1)*(M.value===!0?1:-1)),se=q(0),F=q(!1),te=q(!1),ae=q(T.value*W.value),R=i(()=>M.value===!0?"left":"right"),le=i(()=>b.value===!0&&g.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:T.value:0),ne=i(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(M.value?"R":"L")>-1||d.platform.is.ios===!0&&a.isContainer.value===!0),K=i(()=>e.overlay===!1&&b.value===!0&&g.value===!1),ce=i(()=>e.overlay===!0&&b.value===!0&&g.value===!1),be=i(()=>"fullscreen q-drawer__backdrop"+(b.value===!1&&F.value===!1?" hidden":"")),ye=i(()=>({backgroundColor:`rgba(0,0,0,${se.value*.4})`})),C=i(()=>M.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),oe=i(()=>M.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),I=i(()=>{const t={};return a.header.space===!0&&C.value===!1&&(ne.value===!0?t.top=`${a.header.offset}px`:a.header.space===!0&&(t.top=`${a.header.size}px`)),a.footer.space===!0&&oe.value===!1&&(ne.value===!0?t.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(t.bottom=`${a.footer.size}px`)),t}),de=i(()=>{const t={width:`${T.value}px`,transform:`translateX(${ae.value}px)`};return g.value===!0?t:Object.assign(t,I.value)}),Je=i(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),Ye=i(()=>`q-drawer q-drawer--${e.side}`+(te.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(x.value===!0?" q-drawer--dark q-dark":"")+(F.value===!0?" no-transition":b.value===!0?"":" q-layout--prevent-focus")+(g.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(ne.value===!0||K.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(C.value===!0?" q-drawer--top-padding":""))),Ze=i(()=>{const t=d.lang.rtl===!0?e.side:R.value;return[[pe,lt,void 0,{[t]:!0,mouse:!0}]]}),et=i(()=>{const t=d.lang.rtl===!0?R.value:e.side;return[[pe,$e,void 0,{[t]:!0,mouse:!0}]]}),tt=i(()=>{const t=d.lang.rtl===!0?R.value:e.side;return[[pe,$e,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function we(){nt(g,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}w(g,t=>{t===!0?(k=b.value,b.value===!0&&$(!1)):e.overlay===!1&&e.behavior!=="mobile"&&k!==!1&&(b.value===!0?(A(0),N(0),ke()):m(!1))}),w(()=>e.side,(t,v)=>{a.instances[v]===H&&(a.instances[v]=void 0,a[v].space=!1,a[v].offset=0),a.instances[t]=H,a[t].size=T.value,a[t].space=K.value,a[t].offset=le.value}),w(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&we()}),w(()=>e.behavior+e.breakpoint,we),w(a.isContainer,t=>{b.value===!0&&y(t!==!0),t===!0&&we()}),w(a.scrollbarWidth,()=>{A(b.value===!0?0:void 0)}),w(le,t=>{U("offset",t)}),w(K,t=>{r("on-layout",t),U("space",t)}),w(M,()=>{A()}),w(T,t=>{A(),Se(e.miniToOverlay,t)}),w(()=>e.miniToOverlay,t=>{Se(t,T.value)}),w(()=>d.lang.rtl,()=>{A()}),w(()=>e.mini,()=>{e.modelValue===!0&&(at(),a.animate())}),w(B,t=>{r("mini-state",t)});function A(t){t===void 0?Be(()=>{t=b.value===!0?0:T.value,A(W.value*t)}):(a.isContainer.value===!0&&M.value===!0&&(g.value===!0||Math.abs(t)===T.value)&&(t+=W.value*a.scrollbarWidth.value),ae.value=t)}function N(t){se.value=t}function xe(t){const v=t===!0?"remove":a.isContainer.value!==!0?"add":"";v!==""&&document.body.classList[v]("q-body--drawer-toggle")}function at(){clearTimeout(L),l.proxy&&l.proxy.$el&&l.proxy.$el.classList.add("q-drawer--mini-animate"),te.value=!0,L=setTimeout(()=>{te.value=!1,l&&l.proxy&&l.proxy.$el&&l.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function lt(t){if(b.value!==!1)return;const v=T.value,Q=me(t.distance.x,0,v);if(t.isFinal===!0){Q>=Math.min(75,v)===!0?m():(a.animate(),N(0),A(W.value*v)),F.value=!1;return}A((d.lang.rtl===!0?M.value!==!0:M.value)?Math.max(v-Q,0):Math.min(0,Q-v)),N(me(Q/v,0,1)),t.isFirst===!0&&(F.value=!0)}function $e(t){if(b.value!==!0)return;const v=T.value,Q=t.direction===e.side,fe=(d.lang.rtl===!0?Q!==!0:Q)?me(t.distance.x,0,v):0;if(t.isFinal===!0){Math.abs(fe)<Math.min(75,v)===!0?(a.animate(),N(1),A(0)):$(),F.value=!1;return}A(W.value*fe),N(me(1-fe/v,0,1)),t.isFirst===!0&&(F.value=!0)}function ke(){y(!1),xe(!0)}function U(t,v){a.update(e.side,t,v)}function nt(t,v){t.value!==v&&(t.value=v)}function Se(t,v){U("size",t===!0?e.miniWidth:v)}return a.instances[e.side]=H,Se(e.miniToOverlay,T.value),U("space",K.value),U("offset",le.value),e.showIfAbove===!0&&e.modelValue!==!0&&b.value===!0&&e["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!0),Fe(()=>{r("on-layout",K.value),r("mini-state",B.value),k=e.showIfAbove===!0;const t=()=>{(b.value===!0?P:f)(!1,!0)};if(a.totalWidth.value!==0){Be(t);return}h=w(a.totalWidth,()=>{h(),h=void 0,b.value===!1&&e.showIfAbove===!0&&g.value===!1?m(!1):t()})}),ue(()=>{h!==void 0&&h(),clearTimeout(L),b.value===!0&&ke(),a.instances[e.side]===H&&(a.instances[e.side]=void 0,U("size",0),U("offset",0),U("space",!1))}),()=>{const t=[];g.value===!0&&(e.noSwipeOpen===!1&&t.push(Z(p("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ze.value)),t.push(Qe("div",{ref:"backdrop",class:be.value,style:ye.value,"aria-hidden":"true",onClick:$},void 0,"backdrop",e.noSwipeBackdrop!==!0&&b.value===!0,()=>tt.value)));const v=B.value===!0&&_.mini!==void 0,Q=[p("div",{...n,key:""+v,class:[Je.value,n.class]},v===!0?_.mini():_e(_.default))];return e.elevated===!0&&b.value===!0&&Q.push(p("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(Qe("aside",{ref:"content",class:Ye.value,style:de.value},Q,"contentclose",e.noSwipeClose!==!0&&g.value===!0,()=>et.value)),p("div",{class:"q-drawer-container"},t)}}}),Xt=G({name:"QPageContainer",setup(e,{slots:_}){const{proxy:{$q:r}}=ee(),n=Pe(ge,E);if(n===E)return console.error("QPageContainer needs to be child of QLayout"),E;Ne(ut,!0);const l=i(()=>{const d={};return n.header.space===!0&&(d.paddingTop=`${n.header.size}px`),n.right.space===!0&&(d[`padding${r.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(d.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(d[`padding${r.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),d});return()=>p("div",{class:"q-page-container",style:l.value},_e(_.default))}});const{passive:Ie}=ct,Gt=["both","horizontal","vertical"];var Jt=G({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Gt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:_}){const r={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,l,d;w(()=>e.scrollTarget,()=>{S(),y()});function x(){n!==null&&n();const k=Math.max(0,Dt(l)),L=Ht(l),h={top:k-r.position.top,left:L-r.position.left};if(e.axis==="vertical"&&h.top===0||e.axis==="horizontal"&&h.left===0)return;const g=Math.abs(h.top)>=Math.abs(h.left)?h.top<0?"up":"down":h.left<0?"left":"right";r.position={top:k,left:L},r.directionChanged=r.direction!==g,r.delta=h,r.directionChanged===!0&&(r.direction=g,r.inflectionPoint=r.position),_("scroll",{...r})}function y(){l=Ge(d,e.scrollTarget),l.addEventListener("scroll",s,Ie),s(!0)}function S(){l!==void 0&&(l.removeEventListener("scroll",s,Ie),l=void 0)}function s(k){if(k===!0||e.debounce===0||e.debounce==="0")x();else if(n===null){const[L,h]=e.debounce?[setTimeout(x,e.debounce),clearTimeout]:[requestAnimationFrame(x),cancelAnimationFrame];n=()=>{h(L),n=null}}}const{proxy:a}=ee();return Fe(()=>{d=a.$el.parentNode,y()}),ue(()=>{n!==null&&n(),S()}),Object.assign(a,{trigger:s,getPosition:()=>r}),st}}),Yt=G({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:_,emit:r}){const{proxy:{$q:n}}=ee(),l=q(null),d=q(n.screen.height),x=q(e.container===!0?0:n.screen.width),y=q({position:0,direction:"down",inflectionPoint:0}),S=q(0),s=q(dt.value===!0?0:Te()),a=i(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),k=i(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),L=i(()=>s.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${s.value}px`}:null),h=i(()=>s.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${s.value}px`,width:`calc(100% + ${s.value}px)`}:null);function g(f){if(e.container===!0||document.qScrollPrevented!==!0){const m={position:f.position.top,direction:f.direction,directionChanged:f.directionChanged,inflectionPoint:f.inflectionPoint.top,delta:f.delta.top};y.value=m,e.onScroll!==void 0&&r("scroll",m)}}function B(f){const{height:m,width:$}=f;let z=!1;d.value!==m&&(z=!0,d.value=m,e.onScrollHeight!==void 0&&r("scroll-height",m),b()),x.value!==$&&(z=!0,x.value=$),z===!0&&e.onResize!==void 0&&r("resize",f)}function T({height:f}){S.value!==f&&(S.value=f,b())}function b(){if(e.container===!0){const f=d.value>S.value?Te():0;s.value!==f&&(s.value=f)}}let o;const P={instances:{},view:i(()=>e.view),isContainer:i(()=>e.container),rootRef:l,height:d,containerHeight:S,scrollbarWidth:s,totalWidth:i(()=>x.value+s.value),rows:i(()=>{const f=e.view.toLowerCase().split(" ");return{top:f[0].split(""),middle:f[1].split(""),bottom:f[2].split("")}}),header:ve({size:0,offset:0,space:!1}),right:ve({size:300,offset:0,space:!1}),footer:ve({size:0,offset:0,space:!1}),left:ve({size:300,offset:0,space:!1}),scroll:y,animate(){o!==void 0?clearTimeout(o):document.body.classList.add("q-body--layout-animate"),o=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),o=void 0},155)},update(f,m,$){P[f][m]=$}};if(Ne(ge,P),Te()>0){let $=function(){f=null,m.classList.remove("hide-scrollbar")},z=function(){if(f===null){if(m.scrollHeight>n.screen.height)return;m.classList.add("hide-scrollbar")}else clearTimeout(f);f=setTimeout($,300)},j=function(H){f!==null&&H==="remove"&&(clearTimeout(f),$()),window[`${H}EventListener`]("resize",z)},f=null;const m=document.body;w(()=>e.container!==!0?"add":"remove",j),e.container!==!0&&j("add"),ft(()=>{j("remove")})}return()=>{const f=Ee(_.default,[p(Jt,{onScroll:g}),p(qe,{onResize:B})]),m=p("div",{class:a.value,style:k.value,ref:e.container===!0?void 0:l,tabindex:-1},f);return e.container===!0?p("div",{class:"q-layout-container overflow-hidden",ref:l},[p(qe,{onResize:T}),p("div",{class:"absolute-full",style:L.value},[p("div",{class:"scroll",style:h.value},[m])])]):m}}});const Zt={class:"q-pa-sm"},ma=vt({__name:"MainLayout",setup(e){const _=Nt(),r=Ft(),n=q("null"),l=q(!1);function d(){l.value=!l.value}function x(){r.dark.toggle(),r.dark.isActive?localStorage.setItem("dark","true"):localStorage.setItem("dark","false")}function y(){_.logout()}return(S,s)=>{const a=mt("router-view");return J(),Y(Yt,{view:"hHh Lpr lFf"},{default:c(()=>[u(Ut,{elevated:""},{default:c(()=>[u(Ct,null,{default:c(()=>[u(Ce,{flat:"",dense:"",round:"",icon:V(gt),"aria-label":"Menu",onClick:d},null,8,["icon"]),u(Tt,null,{default:c(()=>[O(" ACR App ")]),_:1}),u(Ce,{class:"q-mr-md",flat:"",dense:"",round:"",color:V(r).dark.isActive?"black":"white",icon:V(r).dark.isActive?V(bt):V(yt),"aria-label":"Toggle Dark Mode",onClick:x},{default:c(()=>[u(Re,null,{default:c(()=>[O("toggle Dark Mode")]),_:1})]),_:1},8,["color","icon"]),u(Ce,{round:"",dense:"","aria-label":"Personall Settings",class:"q-mr-sm",unelevated:"",color:"secondary",icon:V(wt)},{default:c(()=>[u(Vt,{"auto-close":"",offset:[110,0]},{default:c(()=>[u(Ve,{style:{"min-width":"150px"}},{default:c(()=>[u(X,{"aria-label":"Profile",clickable:"",to:{name:"UserProfile"}},{default:c(()=>[u(D,null,{default:c(()=>[O("Profile")]),_:1})]),_:1}),u(X,{"aria-label":"Logout",clickable:"",onClick:y},{default:c(()=>[u(D,null,{default:c(()=>[O("Logout")]),_:1})]),_:1})]),_:1})]),_:1}),u(Re,null,{default:c(()=>[O("Profile")]),_:1})]),_:1},8,["icon"])]),_:1})]),_:1}),u(Kt,{modelValue:l.value,"onUpdate:modelValue":s[5]||(s[5]=k=>l.value=k),"show-if-above":"",bordered:"",width:200},{default:c(()=>[u(Ve,{class:"rounded-borders text-primary","aria-label":"Menu"},{default:c(()=>[u(Rt,{header:"",class:"text-primary"},{default:c(()=>[O("MENU")]),_:1}),ht("div",Zt,[Z((J(),Y(X,{clickable:"","aria-label":"Inbox",active:n.value==="inbox",onClick:s[0]||(s[0]=k=>n.value="inbox"),"active-class":"my-menu-link",to:{name:"inbox"}},{default:c(()=>[u(D,{avatar:""},{default:c(()=>[u(ie,{name:V(xt)},null,8,["name"])]),_:1}),u(D,null,{default:c(()=>[O("Inbox")]),_:1}),u(he,{rounded:"",transparent:"",align:"middle",class:"q-my-sm"},{default:c(()=>[O("1")]),_:1})]),_:1},8,["active"])),[[re]]),Z((J(),Y(X,{clickable:"","aria-label":"Outbox",active:n.value==="outbox",onClick:s[1]||(s[1]=k=>n.value="outbox"),"active-class":"my-menu-link"},{default:c(()=>[u(D,{avatar:""},{default:c(()=>[u(ie,{name:V(kt)},null,8,["name"])]),_:1}),u(D,null,{default:c(()=>[O("Outbox")]),_:1}),u(he,{rounded:"",transparent:"",align:"middle",class:"q-my-sm"},{default:c(()=>[O("1")]),_:1})]),_:1},8,["active"])),[[re]]),Z((J(),Y(X,{clickable:"","aria-label":"fill ACR",active:n.value==="edit",onClick:s[2]||(s[2]=k=>n.value="edit"),"active-class":"my-menu-link",to:{name:"acr"}},{default:c(()=>[u(D,{avatar:""},{default:c(()=>[u(ie,{name:V(St)},null,8,["name"])]),_:1}),u(D,null,{default:c(()=>[O(" Fill ACR ")]),_:1})]),_:1},8,["active"])),[[re]]),u(Wt,{spaced:""}),Z((J(),Y(X,{clickable:"","aria-label":"In Progress",active:n.value==="progress",onClick:s[3]||(s[3]=k=>n.value="progress"),"active-class":"my-menu-link",to:{name:"InProgress"}},{default:c(()=>[u(D,{avatar:""},{default:c(()=>[u(ie,{name:V(ze)},null,8,["name"])]),_:1}),u(D,null,{default:c(()=>[O("In progress")]),_:1}),u(he,{rounded:"",transparent:"",align:"middle",class:"q-my-sm"},{default:c(()=>[O("1")]),_:1})]),_:1},8,["active"])),[[re]]),Z((J(),Y(X,{clickable:"","aria-label":"Completed ACR",active:n.value==="completed",onClick:s[4]||(s[4]=k=>n.value="completed"),"active-class":"my-menu-link",to:{name:"completed"}},{default:c(()=>[u(D,{avatar:""},{default:c(()=>[u(ie,{name:V(ze)},null,8,["name"])]),_:1}),u(D,null,{default:c(()=>[O("completed")]),_:1}),u(he,{rounded:"",transparent:"",align:"middle",class:"q-my-sm"},{default:c(()=>[O("1")]),_:1})]),_:1},8,["active"])),[[re]])])]),_:1})]),_:1},8,["modelValue"]),u(Xt,null,{default:c(()=>[u(a)]),_:1})]),_:1})}}});export{ma as default};
