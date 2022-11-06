import{h as P,c as G,j as ue,r as A,a as m,o as Ae,p as Ne,l as je,t as Ke,W as ze,aC as Re,s as X,a0 as Oe,aD as Ue,M as ee,n as He,g as te,aE as Xe,y as fe,w as O,a8 as Ge,aF as Ye,i as ne,v as Je,ai as Ze,ac as H,aj as et,f as Z,ak as ce,ad as qe,e as ve,T as tt,aG as nt,q as at,aH as ot,u as rt}from"./index.aac94ed7.js";import{c as it}from"./use-key-composition.b79b30be.js";import{Q as lt,g as xe,s as ke}from"./touch.b4adfc74.js";import{e as de,f as Se,l as st}from"./use-prevent-scroll.dc297578.js";import{r as ut}from"./QTable.bbf60474.js";import{u as ct,a as vt}from"./use-dark.10ed0641.js";const dt=P("div",{class:"q-space"});var It=G({name:"QSpace",setup(){return()=>dt}});function ft(){const e=new Map;return{getCache:function(r,d){return e[r]===void 0?e[r]=d:e[r]},getCacheWithFn:function(r,d){return e[r]===void 0?e[r]=d():e[r]}}}let ht=0;const bt=["click","keydown"],mt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${ht++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function gt(e,r,d,u){const o=je(Re,ue);if(o===ue)return console.error("QTab/QRouteTab component needs to be child of QTabs"),ue;const{proxy:n}=te(),i=A(null),T=A(null),I=A(null),$=m(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),g=m(()=>o.currentModel.value===e.name),D=m(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(g.value===!0?" q-tab--active"+(o.tabProps.value.activeClass?" "+o.tabProps.value.activeClass:"")+(o.tabProps.value.activeColor?` text-${o.tabProps.value.activeColor}`:"")+(o.tabProps.value.activeBgColor?` bg-${o.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&o.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||o.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(u!==void 0?u.linkClass.value:"")),h=m(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(o.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),C=m(()=>e.disable===!0||o.hasFocus.value===!0||g.value===!1&&o.hasActiveTab.value===!0?-1:e.tabindex||0);function q(c,b){if(b!==!0&&i.value!==null&&i.value.focus(),e.disable===!0){u!==void 0&&u.hasRouterLink.value===!0&&X(c);return}if(u===void 0){o.updateModel({name:e.name}),d("click",c);return}if(u.hasRouterLink.value===!0){const L=(k={})=>{let _;const K=k.to===void 0||Xe(k.to,e.to)===!0?o.avoidRouteWatcher=it():null;return u.navigateToRouterLink(c,{...k,returnRouterError:!0}).catch(x=>{_=x}).then(x=>{if(K===o.avoidRouteWatcher&&(o.avoidRouteWatcher=!1,_===void 0&&(x===void 0||x.message.startsWith("Avoided redundant navigation")===!0)&&o.updateModel({name:e.name})),k.returnRouterError===!0)return _!==void 0?Promise.reject(_):x})};d("click",c,L),c.defaultPrevented!==!0&&L();return}d("click",c)}function R(c){Oe(c,[13,32])?q(c,!0):Ue(c)!==!0&&c.keyCode>=35&&c.keyCode<=40&&c.altKey!==!0&&c.metaKey!==!0&&o.onKbdNavigate(c.keyCode,n.$el)===!0&&X(c),d("keydown",c)}function B(){const c=o.tabProps.value.narrowIndicator,b=[],L=P("div",{ref:I,class:["q-tab__indicator",o.tabProps.value.indicatorClass]});e.icon!==void 0&&b.push(P(ee,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&b.push(P("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&b.push(e.alertIcon!==void 0?P(ee,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):P("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),c===!0&&b.push(L);const k=[P("div",{class:"q-focus-helper",tabindex:-1,ref:i}),P("div",{class:h.value},He(r.default,b))];return c===!1&&k.push(L),k}const E={name:m(()=>e.name),rootRef:T,tabIndicatorRef:I,routeData:u};Ae(()=>{o.unregisterTab(E)}),Ne(()=>{o.registerTab(E)});function j(c,b){const L={ref:T,class:D.value,tabindex:C.value,role:"tab","aria-selected":g.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:q,onKeydown:R,...b};return Ke(P(c,L,B()),[[ze,$.value]])}return{renderTab:j,$tabs:o}}var Bt=G({name:"QTab",props:mt,emits:bt,setup(e,{slots:r,emit:d}){const{renderTab:u}=gt(e,r,d);return()=>u("div")}});function pt(e,r,d){const u=d===!0?["left","right"]:["top","bottom"];return`absolute-${r===!0?u[0]:u[1]}${e?` text-${e}`:""}`}const yt=["left","center","right","justify"];var Mt=G({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>yt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:r,emit:d}){const{proxy:u}=te(),{$q:o}=u,{registerTick:n}=de(),{registerTick:i}=de(),{registerTick:T}=de(),{registerTimeout:I,removeTimeout:$}=Se(),{registerTimeout:g,removeTimeout:D}=Se(),h=A(null),C=A(null),q=A(e.modelValue),R=A(!1),B=A(!0),E=A(!1),j=A(!1),c=m(()=>o.platform.is.desktop===!0||e.mobileArrows===!0),b=[],L=A(0),k=A(!1);let _,K,x,Q=c.value===!0?be:fe;const ae=m(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:pt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),oe=m(()=>{const t=L.value,a=q.value;for(let l=0;l<t;l++)if(b[l].name.value===a)return!0;return!1}),s=m(()=>`q-tabs__content--align-${R.value===!0?"left":j.value===!0?"justify":e.align}`),p=m(()=>`q-tabs row no-wrap items-center q-tabs--${R.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${c.value===!0&&e.outsideArrows===!0?"outside":"inside"}`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),M=m(()=>"q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position "+s.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")+(o.platform.is.mobile===!0?" scroll":"")),V=m(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),Y=m(()=>e.vertical!==!0&&o.lang.rtl===!0),re=m(()=>ut===!1&&Y.value===!0);O(Y,Q),O(()=>e.modelValue,t=>{ie({name:t,setCurrent:!0,skipEmit:!0})}),O(()=>e.outsideArrows,()=>{U()}),O(c,t=>{Q=t===!0?be:fe,U()});function ie({name:t,setCurrent:a,skipEmit:l,fromRoute:y}){q.value!==t&&(l!==!0&&e["onUpdate:modelValue"]!==void 0&&d("update:modelValue",t),(a===!0||e["onUpdate:modelValue"]===void 0)&&(Le(q.value,t),q.value=t))}function U(){n(()=>{he({width:h.value.offsetWidth,height:h.value.offsetHeight})})}function he(t){if(V.value===void 0||C.value===null)return;const a=t[V.value.container],l=Math.min(C.value[V.value.scroll],Array.prototype.reduce.call(C.value.children,(w,f)=>w+(f[V.value.content]||0),0)),y=a>0&&l>a;R.value=y,y===!0&&i(Q),j.value=a<parseInt(e.breakpoint,10)}function Le(t,a){const l=t!=null&&t!==""?b.find(w=>w.name.value===t):null,y=a!=null&&a!==""?b.find(w=>w.name.value===a):null;if(l&&y){const w=l.tabIndicatorRef.value,f=y.tabIndicatorRef.value;clearTimeout(_),w.style.transition="none",w.style.transform="none",f.style.transition="none",f.style.transform="none";const v=w.getBoundingClientRect(),S=f.getBoundingClientRect();f.style.transform=e.vertical===!0?`translate3d(0,${v.top-S.top}px,0) scale3d(1,${S.height?v.height/S.height:1},1)`:`translate3d(${v.left-S.left}px,0,0) scale3d(${S.width?v.width/S.width:1},1,1)`,T(()=>{_=setTimeout(()=>{f.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",f.style.transform="none"},70)})}y&&R.value===!0&&z(y.rootRef.value)}function z(t){const{left:a,width:l,top:y,height:w}=C.value.getBoundingClientRect(),f=t.getBoundingClientRect();let v=e.vertical===!0?f.top-y:f.left-a;if(v<0){C.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(v),Q();return}v+=e.vertical===!0?f.height-w:f.width-l,v>0&&(C.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(v),Q())}function be(){const t=C.value;if(t!==null){const a=t.getBoundingClientRect(),l=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);Y.value===!0?(B.value=Math.ceil(l+a.width)<t.scrollWidth-1,E.value=l>0):(B.value=l>0,E.value=e.vertical===!0?Math.ceil(l+a.height)<t.scrollHeight:Math.ceil(l+a.width)<t.scrollWidth)}}function me(t){W(),K=setInterval(()=>{Me(t)===!0&&W()},5)}function ge(){me(re.value===!0?Number.MAX_SAFE_INTEGER:0)}function pe(){me(re.value===!0?0:Number.MAX_SAFE_INTEGER)}function W(){clearInterval(K)}function Ie(t,a){const l=Array.prototype.filter.call(C.value.children,S=>S===a||S.matches&&S.matches(".q-tab.q-focusable")===!0),y=l.length;if(y===0)return;if(t===36)return z(l[0]),l[0].focus(),!0;if(t===35)return z(l[y-1]),l[y-1].focus(),!0;const w=t===(e.vertical===!0?38:37),f=t===(e.vertical===!0?40:39),v=w===!0?-1:f===!0?1:void 0;if(v!==void 0){const S=Y.value===!0?-1:1,F=l.indexOf(a)+v*S;return F>=0&&F<y&&(z(l[F]),l[F].focus({preventScroll:!0})),!0}}const Be=m(()=>re.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,a)=>{t.scrollLeft=-a}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,a)=>{t.scrollTop=a}}:{get:t=>t.scrollLeft,set:(t,a)=>{t.scrollLeft=a}});function Me(t){const a=C.value,{get:l,set:y}=Be.value;let w=!1,f=l(a);const v=t<f?-1:1;return f+=v*5,f<0?(w=!0,f=0):(v===-1&&f<=t||v===1&&f>=t)&&(w=!0,f=t),y(a,f),Q(),w}function ye(t,a){for(const l in t)if(t[l]!==a[l])return!1;return!0}function $e(){let t=null,a={matchedLen:0,queryDiff:9999,hrefLen:0};const l=b.filter(v=>v.routeData!==void 0&&v.routeData.hasRouterLink.value===!0),{hash:y,query:w}=u.$route,f=Object.keys(w).length;for(const v of l){const S=v.routeData.exact.value===!0;if(v.routeData[S===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:F,query:le,matched:We,href:Fe}=v.routeData.resolvedLink.value,se=Object.keys(le).length;if(S===!0){if(F!==y||se!==f||ye(w,le)===!1)continue;t=v.name.value;break}if(F!==""&&F!==y||se!==0&&ye(le,w)===!1)continue;const N={matchedLen:We.length,queryDiff:f-se,hrefLen:Fe.length-F.length};if(N.matchedLen>a.matchedLen){t=v.name.value,a=N;continue}else if(N.matchedLen!==a.matchedLen)continue;if(N.queryDiff<a.queryDiff)t=v.name.value,a=N;else if(N.queryDiff!==a.queryDiff)continue;N.hrefLen>a.hrefLen&&(t=v.name.value,a=N)}t===null&&b.some(v=>v.routeData===void 0&&v.name.value===q.value)===!0||ie({name:t,setCurrent:!0})}function De(t){if($(),k.value!==!0&&h.value!==null&&t.target&&typeof t.target.closest=="function"){const a=t.target.closest(".q-tab");a&&h.value.contains(a)===!0&&(k.value=!0,R.value===!0&&z(a))}}function Ee(){I(()=>{k.value=!1},30)}function J(){Ce.avoidRouteWatcher===!1?g($e):D()}function Te(){if(x===void 0){const t=O(()=>u.$route.fullPath,J);x=()=>{t(),x=void 0}}}function Qe(t){b.push(t),L.value++,U(),t.routeData===void 0||u.$route===void 0?g(()=>{if(R.value===!0){const a=q.value,l=a!=null&&a!==""?b.find(y=>y.name.value===a):null;l&&z(l.rootRef.value)}}):(Te(),t.routeData.hasRouterLink.value===!0&&J())}function Ve(t){b.splice(b.indexOf(t),1),L.value--,U(),x!==void 0&&t.routeData!==void 0&&(b.every(a=>a.routeData===void 0)===!0&&x(),J())}const Ce={currentModel:q,tabProps:ae,hasFocus:k,hasActiveTab:oe,registerTab:Qe,unregisterTab:Ve,verifyRouteModel:J,updateModel:ie,onKbdNavigate:Ie,avoidRouteWatcher:!1};Je(Re,Ce);function we(){clearTimeout(_),W(),x!==void 0&&x()}let Pe;return Ae(we),Ge(()=>{Pe=x!==void 0,we()}),Ye(()=>{Pe===!0&&Te(),U()}),()=>{const t=[P(lt,{onResize:he}),P("div",{ref:C,class:M.value,onScroll:Q},ne(r.default))];return c.value===!0&&t.push(P(ee,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(B.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||o.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ge,onTouchstartPassive:ge,onMouseupPassive:W,onMouseleavePassive:W,onTouchendPassive:W}),P(ee,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(E.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||o.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:pe,onTouchstartPassive:pe,onMouseupPassive:W,onMouseleavePassive:W,onTouchendPassive:W})),P("div",{ref:h,class:p.value,role:"tablist",onFocusin:De,onFocusout:Ee},t)}}});function Tt(e){const r=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((d,u)=>{const o=parseFloat(d);o&&(r[u]=o)}),r}var Ct=Ze({name:"touch-swipe",beforeMount(e,{value:r,arg:d,modifiers:u}){if(u.mouse!==!0&&H.has.touch!==!0)return;const o=u.mouseCapture===!0?"Capture":"",n={handler:r,sensitivity:Tt(d),direction:xe(u),noop:fe,mouseStart(i){ke(i,n)&&et(i)&&(Z(n,"temp",[[document,"mousemove","move",`notPassive${o}`],[document,"mouseup","end","notPassiveCapture"]]),n.start(i,!0))},touchStart(i){if(ke(i,n)){const T=i.target;Z(n,"temp",[[T,"touchmove","move","notPassiveCapture"],[T,"touchcancel","end","notPassiveCapture"],[T,"touchend","end","notPassiveCapture"]]),n.start(i)}},start(i,T){H.is.firefox===!0&&ce(e,!0);const I=qe(i);n.event={x:I.left,y:I.top,time:Date.now(),mouse:T===!0,dir:!1}},move(i){if(n.event===void 0)return;if(n.event.dir!==!1){X(i);return}const T=Date.now()-n.event.time;if(T===0)return;const I=qe(i),$=I.left-n.event.x,g=Math.abs($),D=I.top-n.event.y,h=Math.abs(D);if(n.event.mouse!==!0){if(g<n.sensitivity[1]&&h<n.sensitivity[1]){n.end(i);return}}else if(g<n.sensitivity[2]&&h<n.sensitivity[2])return;const C=g/T,q=h/T;n.direction.vertical===!0&&g<h&&g<100&&q>n.sensitivity[0]&&(n.event.dir=D<0?"up":"down"),n.direction.horizontal===!0&&g>h&&h<100&&C>n.sensitivity[0]&&(n.event.dir=$<0?"left":"right"),n.direction.up===!0&&g<h&&D<0&&g<100&&q>n.sensitivity[0]&&(n.event.dir="up"),n.direction.down===!0&&g<h&&D>0&&g<100&&q>n.sensitivity[0]&&(n.event.dir="down"),n.direction.left===!0&&g>h&&$<0&&h<100&&C>n.sensitivity[0]&&(n.event.dir="left"),n.direction.right===!0&&g>h&&$>0&&h<100&&C>n.sensitivity[0]&&(n.event.dir="right"),n.event.dir!==!1?(X(i),n.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),st(),n.styleCleanup=R=>{n.styleCleanup=void 0,document.body.classList.remove("non-selectable");const B=()=>{document.body.classList.remove("no-pointer-events--children")};R===!0?setTimeout(B,50):B()}),n.handler({evt:i,touch:n.event.mouse!==!0,mouse:n.event.mouse,direction:n.event.dir,duration:T,distance:{x:g,y:h}})):n.end(i)},end(i){n.event!==void 0&&(ve(n,"temp"),H.is.firefox===!0&&ce(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(!0),i!==void 0&&n.event.dir!==!1&&X(i),n.event=void 0)}};if(e.__qtouchswipe=n,u.mouse===!0){const i=u.mouseCapture===!0||u.mousecapture===!0?"Capture":"";Z(n,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}H.has.touch===!0&&Z(n,"main",[[e,"touchstart","touchStart",`passive${u.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,r){const d=e.__qtouchswipe;d!==void 0&&(r.oldValue!==r.value&&(typeof r.value!="function"&&d.end(),d.handler=r.value),d.direction=xe(r.modifiers))},beforeUnmount(e){const r=e.__qtouchswipe;r!==void 0&&(ve(r,"main"),ve(r,"temp"),H.is.firefox===!0&&ce(e,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete e.__qtouchswipe)}});const wt={name:{required:!0},disable:Boolean},_e={setup(e,{slots:r}){return()=>P("div",{class:"q-panel scroll",role:"tabpanel"},ne(r.default))}},Pt={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},qt=["update:modelValue","before-transition","transition"];function xt(){const{props:e,emit:r,proxy:d}=te(),{getCacheWithFn:u}=ft();let o,n;const i=A(null),T=A(null);function I(s){const p=e.vertical===!0?"up":"left";_((d.$q.lang.rtl===!0?-1:1)*(s.direction===p?1:-1))}const $=m(()=>[[Ct,I,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),g=m(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),D=m(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),h=m(()=>`--q-transition-duration: ${e.transitionDuration}ms`),C=m(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),q=m(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),R=m(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);O(()=>e.modelValue,(s,p)=>{const M=c(s)===!0?b(s):-1;n!==!0&&k(M===-1?0:M<b(p)?-1:1),i.value!==M&&(i.value=M,r("before-transition",s,p),at(()=>{r("transition",s,p)}))});function B(){_(1)}function E(){_(-1)}function j(s){r("update:modelValue",s)}function c(s){return s!=null&&s!==""}function b(s){return o.findIndex(p=>p.props.name===s&&p.props.disable!==""&&p.props.disable!==!0)}function L(){return o.filter(s=>s.props.disable!==""&&s.props.disable!==!0)}function k(s){const p=s!==0&&e.animated===!0&&i.value!==-1?"q-transition--"+(s===-1?g.value:D.value):null;T.value!==p&&(T.value=p)}function _(s,p=i.value){let M=p+s;for(;M>-1&&M<o.length;){const V=o[M];if(V!==void 0&&V.props.disable!==""&&V.props.disable!==!0){k(s),n=!0,r("update:modelValue",V.props.name),setTimeout(()=>{n=!1});return}M+=s}e.infinite===!0&&o.length>0&&p!==-1&&p!==o.length&&_(s,s===-1?o.length:-1)}function K(){const s=b(e.modelValue);return i.value!==s&&(i.value=s),!0}function x(){const s=c(e.modelValue)===!0&&K()&&o[i.value];return e.keepAlive===!0?[P(ot,q.value,[P(R.value===!0?u(C.value,()=>({..._e,name:C.value})):_e,{key:C.value,style:h.value},()=>s)])]:[P("div",{class:"q-panel scroll",style:h.value,key:C.value,role:"tabpanel"},[s])]}function Q(){if(o.length!==0)return e.animated===!0?[P(tt,{name:T.value},x)]:x()}function ae(s){return o=nt(ne(s.default,[])).filter(p=>p.props!==null&&p.props.slot===void 0&&c(p.props.name)===!0),o.length}function oe(){return o}return Object.assign(d,{next:B,previous:E,goTo:j}),{panelIndex:i,panelDirectives:$,updatePanelsList:ae,updatePanelIndex:K,getPanelContent:Q,getEnabledPanels:L,getPanels:oe,isValidPanelName:c,keepAliveProps:q,needsUniqueKeepAliveWrapper:R,goToPanelByOffset:_,goToPanel:j,nextPanel:B,previousPanel:E}}var $t=G({name:"QTabPanel",props:wt,setup(e,{slots:r}){return()=>P("div",{class:"q-tab-panel",role:"tabpanel"},ne(r.default))}}),Dt=G({name:"QTabPanels",props:{...Pt,...ct},emits:qt,setup(e,{slots:r}){const d=te(),u=vt(e,d.proxy.$q),{updatePanelsList:o,getPanelContent:n,panelDirectives:i}=xt(),T=m(()=>"q-tab-panels q-panel-parent"+(u.value===!0?" q-tab-panels--dark q-dark":""));return()=>(o(r),rt("div",{class:T.value},n(),"pan",e.swipeable,()=>i.value))}});export{Mt as Q,Bt as a,Dt as b,$t as c,It as d,ft as u};
