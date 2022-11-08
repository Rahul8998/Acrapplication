import{Q as Ie}from"./QImg.e11d57ef.js";import{u as ie,a as Te,b as Oe,c as z}from"./annexureFour.b2dce5f1.js";import{a as U,Q as le}from"./QSeparator.4b681bf1.js";import{a as M,c as re,b as L}from"./QTable.f260ad04.js";import{Q as $}from"./QInput.01b9ea61.js";import{c as J,o as de,h as k,T as Ae,aW as Qe,_ as ue,r as T,a as O,w as G,t as Ue,aX as Le,i as Ce,g as ce,M as ae,s as Ee,F as A,G as H,H as f,L as l,I as a,Q as F,as as C,an as K,J as o,aA as P,K as E,av as V,ao as X,q as Be,aE as Re,aT as je,aY as Me,aZ as Pe,a_ as oe}from"./index.ce5c1339.js";import{a as De,b as W}from"./QList.31e08bf9.js";import{u as Ne,a as He}from"./use-dark.243a5da4.js";import{a as Fe,d as Ke,j as Ye,Q as Ge}from"./use-prevent-scroll.f20f2214.js";import{c as ne}from"./use-key-composition.cfc05a4b.js";import{Q as me}from"./QTr.831268d8.js";import{Q as fe,a as B,b as pe,c as R,d as We}from"./QTabPanels.0883076d.js";import{a as ge,Q as ze}from"./QForm.7c977d5b.js";import{a as ve}from"./annexure.77e9dd06.js";import{u as be}from"./use-quasar.b80d115e.js";var Je=J({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:b,emit:r}){let i=!1,v,p,d,s,g,_;function x(){v&&v(),v=null,i=!1,clearTimeout(d),clearTimeout(s),p!==void 0&&p.removeEventListener("transitionend",g),g=null}function h(u,w,c){u.style.overflowY="hidden",w!==void 0&&(u.style.height=`${w}px`),u.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,i=!0,v=c}function q(u,w){u.style.overflowY=null,u.style.height=null,u.style.transition=null,x(),w!==_&&r(w)}function S(u,w){let c=0;p=u,i===!0?(x(),c=u.offsetHeight===u.scrollHeight?0:void 0):_="hide",h(u,c,w),d=setTimeout(()=>{u.style.height=`${u.scrollHeight}px`,g=t=>{(Object(t)!==t||t.target===u)&&q(u,"show")},u.addEventListener("transitionend",g),s=setTimeout(g,e.duration*1.1)},100)}function I(u,w){let c;p=u,i===!0?x():(_="show",c=u.scrollHeight),h(u,c,w),d=setTimeout(()=>{u.style.height=0,g=t=>{(Object(t)!==t||t.target===u)&&q(u,"hide")},u.addEventListener("transitionend",g),s=setTimeout(g,e.duration*1.1)},100)}return de(()=>{i===!0&&x()}),()=>k(Ae,{css:!1,appear:e.appear,onEnter:S,onLeave:I},b.default)}});const j=Qe({}),Xe=Object.keys(ue);var D=J({name:"QExpansionItem",props:{...ue,...Fe,...Ne,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...Ke,"click","after-show","after-hide"],setup(e,{slots:b,emit:r}){const{proxy:{$q:i}}=ce(),v=He(e,i),p=T(e.modelValue!==null?e.modelValue:e.defaultOpened),d=T(null),s=ne(),{show:g,hide:_,toggle:x}=Ye({showing:p});let h,q;const S=O(()=>`q-expansion-item q-item-type q-expansion-item--${p.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),I=O(()=>{if(e.contentInsetLevel===void 0)return null;const m=i.lang.rtl===!0?"Right":"Left";return{["padding"+m]:e.contentInsetLevel*56+"px"}}),u=O(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),w=O(()=>{const m={};return Xe.forEach(Q=>{m[Q]=e[Q]}),m}),c=O(()=>u.value===!0||e.expandIconToggle!==!0),t=O(()=>e.expandedIcon!==void 0&&p.value===!0?e.expandedIcon:e.expandIcon||i.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),n=O(()=>e.disable!==!0&&(u.value===!0||e.expandIconToggle===!0)),y=O(()=>({expanded:p.value===!0,detailsId:e.targetUid,toggle:x,show:g,hide:_})),Z=O(()=>{const m=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:i.lang.label[p.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":p.value===!0?"true":"false","aria-owns":s,"aria-controls":s,"aria-label":m}});G(()=>e.group,m=>{q!==void 0&&q(),m!==void 0&&te()});function he(m){u.value!==!0&&x(m),r("click",m)}function _e(m){m.keyCode===13&&ee(m,!0)}function ee(m,Q){Q!==!0&&d.value!==null&&d.value.focus(),x(m),Ee(m)}function xe(){r("after-show")}function we(){r("after-hide")}function te(){h===void 0&&(h=ne()),p.value===!0&&(j[e.group]=h);const m=G(p,Y=>{Y===!0?j[e.group]=h:j[e.group]===h&&delete j[e.group]}),Q=G(()=>j[e.group],(Y,$e)=>{$e===h&&Y!==void 0&&Y!==h&&_()});q=()=>{m(),Q(),j[e.group]===h&&delete j[e.group],q=void 0}}function ye(){const m={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},Q=[k(ae,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&p.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:t.value})];return n.value===!0&&(Object.assign(m,{tabindex:0,...Z.value,onClick:ee,onKeyup:_e}),Q.unshift(k("div",{ref:d,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),k(W,m,()=>Q)}function Ve(){let m;return b.header!==void 0?m=[].concat(b.header(y.value)):(m=[k(W,()=>[k(le,{lines:e.labelLines},()=>e.label||""),e.caption?k(le,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&m[e.switchToggleSide===!0?"push":"unshift"](k(W,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>k(ae,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&m[e.switchToggleSide===!0?"unshift":"push"](ye()),m}function qe(){const m={ref:"item",style:e.headerStyle,class:e.headerClass,dark:v.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return c.value===!0&&(m.clickable=!0,m.onClick=he,Object.assign(m,u.value===!0?w.value:Z.value)),k(De,m,Ve)}function ke(){return Ue(k("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:I.value,id:s},Ce(b.default)),[[Le,p.value]])}function Se(){const m=[qe(),k(Je,{duration:e.duration,onShow:xe,onHide:we},ke)];return e.expandSeparator===!0&&m.push(k(U,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:v.value}),k(U,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:v.value})),m}return e.group!==void 0&&te(),de(()=>{q!==void 0&&q()}),()=>k("div",{class:S.value},[k("div",{class:"q-expansion-item__container relative-position"},Se())])}});const Ze={class:"q-ma-md"},et={class:"q-ma-md"},tt=l("div",{class:"q-ma-md"},[l("span",null,"Reasons if not agree")],-1),lt={class:"q-ma-md"},at=l("div",{class:"q-ma-md"},[l("span",null,"Comments if any")],-1),ot={class:"q-ma-md"},nt={style:{"text-align":"center"}},st={__name:"AnnexureForm",props:["LABEL"],setup(e){const b=["Yes","No"],r=T(""),i=T(""),v=T("");return(p,d)=>(A(),H(D,{"expand-separator":"",label:e.LABEL,"header-class":"bg-teal text-white","expand-icon-class":"text-white","default-opened":""},{default:f(()=>[l("div",Ze,[l("div",et,[a(M,{modelValue:i.value,"onUpdate:modelValue":d[0]||(d[0]=s=>i.value=s),"label-stacked":"",outlined:"",options:b,label:"wether you agree with assesment of Reporting Officers or not",rules:[s=>!!s||"required"]},null,8,["modelValue","rules"])]),tt,l("div",lt,[a($,{modelValue:r.value,"onUpdate:modelValue":d[1]||(d[1]=s=>r.value=s),dense:"",outlined:"","label-stacked":"",type:"textarea",rows:"2",label:"reasons",rules:[s=>!!s||"required"]},null,8,["modelValue","rules"])]),at,l("div",ot,[a($,{modelValue:v.value,"onUpdate:modelValue":d[2]||(d[2]=s=>v.value=s),dense:"",outlined:"","label-stacked":"",type:"textarea",rows:"2",label:"comments",rules:[s=>!!s||"required"]},null,8,["modelValue","rules"])]),l("div",nt,[a(F,{label:"Submit",type:"submit",onClick:d[3]||(d[3]=s=>p.$emit("submitme",{agree:i.value,reason:r.value,comment:v.value})),color:"primary"})])])]),_:1},8,["label"]))}};const it={key:0},rt={class:"q-ma-md"},dt=l("div",{class:"q-ma-sm"},[l("span",null,"Reasons if not agree")],-1),ut={class:"q-ma-md"},ct=l("div",{class:"q-ma-md"},[l("span",null,"Comments if any")],-1),mt={class:"q-ma-md"},ft={class:"q-ma-md q-pa-md"},pt=l("div",{class:"row q-mt-md"},[l("span",null,"wether you agree with self assesment of the officer?")],-1),gt={class:"row"},vt={class:"col-12 col-sm q-mx-md"},bt={class:"col-12 col-sm q-mx-md"},ht={class:"q-pa-md"},_t=l("div",{class:"row q-mt-xl q-mx-md"},[l("span",null,"Comments of reporting officer(if any)")],-1),xt={class:"row"},wt={class:"col-12 col-sm q-mx-md"},yt={class:"col-12 col-sm q-mx-xl"},Vt=l("div",{class:"row q-mt-xl q-mx-lg"},[l("span",null,"comments on integrity of officer keeping in mind both financial and moralintegrity")],-1),qt={class:"row"},kt={class:"col-12 col-sm q-mx-md"},St={class:"col-12 col-sm q-mx-md"},$t={class:"q-pa-md rounded-borders"},It={class:"row q-pa-md"},Tt={class:"col-12 col-sm"},Ot={class:"row q-pa-md"},At={style:{"white-space":"pre-wrap"}},Qt={style:{"white-space":"pre-wrap"}},Ut={style:{"white-space":"pre-wrap"}},Lt={style:{"white-space":"pre-wrap"}},Ct={class:"row q-pa-md"},Et={class:"col-12 col-sm"},Bt={class:"col-12 col-sm"},Rt={__name:"AnnexureThree",setup(e){const b=be(),r=ie(),i=ve(),v=Te(),p=Oe(),d=z(),{annexure1:s}=C(i),{annexureD2:g,annexureD2s:_}=C(r),{Annexure3:x}=C(v),{markTO:h}=C(d),q=[{label:"Yes",value:1},{label:"No",value:0}],S=T({rowsPerPage:0}),I=T("duties");function u({agree:c,reason:t,comment:n}){h.value==4?(p.$patch(y=>{y.Annexure4.reasons=t,y.Annexure4.comments=n,y.Annexure4.agreed=c}),p.postData(),d.$state={markTO:null},b.platform.is.mobile&&history.back()):(v.$patch(y=>{y.Annexure3.reasons=t,y.Annexure3.comments=n,y.Annexure3.agreed=c}),v.postData(),d.$state={markTO:null},b.platform.is.mobile&&history.back())}const w=[{name:"index",label:"#",field:"index"},{name:"name",required:!0,label:"attributes",align:"left",field:c=>c.name,format:c=>`${c}`},{name:"reportingOfficer1",align:"center",label:"Reporitng Authority 1",field:"reportingOfficer1"},{name:"reportingOfficer2",align:"center",label:"Reporitng Authority 2",field:"reportingOfficer2"}];return(c,t)=>(A(),K(X,null,[a(st,{LABEL:o(h)==4?"Section-V Accepting":"Section-IV Reviewing",onSubmitme:u},null,8,["LABEL"]),a(U,{spaced:"",color:"black"}),o(h)==4?(A(),K("div",it,[a(D,{"expand-separator":"",label:"Section-IV Reviewing","header-class":"bg-teal text-white","expand-icon-class":"text-white"},{default:f(()=>[l("div",rt,[a(M,{modelValue:o(x).agreed,"onUpdate:modelValue":t[0]||(t[0]=n=>o(x).agreed=n),dense:"","label-stacked":"",outlined:"",options:q,"emit-value":"",label:"wether you agree with assesment of Reporting Officers or not",disable:!0},null,8,["modelValue"])]),dt,l("div",ut,[a($,{modelValue:o(x).reasons,"onUpdate:modelValue":t[1]||(t[1]=n=>o(x).reasons=n),dense:"",outlined:"","label-stacked":"",type:"textarea",rows:"2",label:"reasons",disable:!0},null,8,["modelValue"])]),ct,l("div",mt,[a($,{modelValue:o(x).comments,"onUpdate:modelValue":t[2]||(t[2]=n=>o(x).comments=n),dense:"",outlined:"","label-stacked":"",type:"textarea",rows:"2",label:"comments",disable:!0},null,8,["modelValue"])])]),_:1})])):P("",!0),a(U,{spaced:"",color:"black"}),a(D,{"expand-separator":"",label:"Section-III Reporting","header-class":"bg-teal text-white","expand-icon-class":"text-white"},{default:f(()=>[l("div",ft,[pt,l("div",gt,[l("div",vt,[a(M,{modelValue:o(_).agree1,"onUpdate:modelValue":t[3]||(t[3]=n=>o(_).agree1=n),dense:"","label-stacked":"",outlined:"",options:q,"emit-value":"",label:"Reporting Officer -1",disable:!0},null,8,["modelValue"])]),l("div",bt,[a(M,{modelValue:o(_).agree2,"onUpdate:modelValue":t[4]||(t[4]=n=>o(_).agree2=n),dense:"","label-stacked":"",outlined:"",options:q,"emit-value":"",label:"Reporting Officer -2",disable:!0},null,8,["modelValue"])])]),l("div",ht,[a(re,{style:{height:"400px"},class:"my-sticky-dynamic",dense:"","wrap-cells":"",title:"attributes",rows:o(g),columns:w,"row-key":"index",separator:"cell","virtual-scroll":"",pagination:S.value,"onUpdate:pagination":t[5]||(t[5]=n=>S.value=n),"row-per-page-options":"[0]"},{body:f(n=>[a(me,{props:n},{default:f(()=>[a(L,{key:"index",props:n},{default:f(()=>[E(V(n.rowIndex+1),1)]),_:2},1032,["props"]),a(L,{key:"name",props:n},{default:f(()=>[E(V(n.row.name),1)]),_:2},1032,["props"]),a(L,{key:"reportingOfficer1",props:n},{default:f(()=>[E(V(n.row.reportingOfficer1),1)]),_:2},1032,["props"]),a(L,{key:"reportingOfficer2",props:n},{default:f(()=>[E(V(n.row.reportingOfficer2),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","pagination"])]),_t,l("div",xt,[l("div",wt,[a($,{modelValue:o(_).comment1,"onUpdate:modelValue":t[6]||(t[6]=n=>o(_).comment1=n),dense:"",outlined:"","label-stacked":"",type:"textarea",rows:"2",label:"reprorting officer -1",disable:!0},null,8,["modelValue"])]),l("div",yt,[a($,{modelValue:o(_).comment2,"onUpdate:modelValue":t[7]||(t[7]=n=>o(_).comment2=n),dense:"",outlined:"","label-stacked":"",type:"textarea",rows:"2",label:"reporting officer 2",disable:!0},null,8,["modelValue"])])]),Vt,l("div",qt,[l("div",kt,[a($,{modelValue:o(_).integrity1,"onUpdate:modelValue":t[8]||(t[8]=n=>o(_).integrity1=n),dense:"",outlined:"","label-stacked":"",type:"textarea",rows:"2",label:"reporting officer -1",disable:!0},null,8,["modelValue"])]),l("div",St,[a($,{modelValue:o(_).integrity2,"onUpdate:modelValue":t[9]||(t[9]=n=>o(_).integrity2=n),dense:"",outlined:"","label-stacked":"",type:"textarea",rows:"2",label:"reporting officer -2",disable:!0},null,8,["modelValue"])])])])]),_:1}),a(U,{spaced:"",color:"black"}),a(D,{"expand-separator":"",label:"Section-II Self Assesment","header-class":"bg-teal text-white","expand-icon-class":"text-white"},{default:f(()=>[l("div",$t,[l("div",It,[l("div",Tt,"Award: "+V(o(s).award),1)]),l("div",Ot,[a(ge,null,{default:f(()=>[a(fe,{modelValue:I.value,"onUpdate:modelValue":t[10]||(t[10]=n=>I.value=n),class:"text-grey",dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:f(()=>[a(B,{name:"duties",label:"duties"}),a(B,{name:"targets",label:"targets"}),a(B,{name:"achievement",label:"achievements"}),a(B,{name:"shortfall",label:"shortfalls"})]),_:1},8,["modelValue"]),a(U),a(pe,{modelValue:I.value,"onUpdate:modelValue":t[11]||(t[11]=n=>I.value=n),animated:"",class:"shadow-2 rounded-borders"},{default:f(()=>[a(R,{name:"duties"},{default:f(()=>[l("div",At,V(o(s).duties),1)]),_:1}),a(R,{name:"targets"},{default:f(()=>[l("div",Qt,V(o(s).targets),1)]),_:1}),a(R,{name:"achievement"},{default:f(()=>[l("div",Ut,V(o(s).achievement),1)]),_:1}),a(R,{name:"shortfall"},{default:f(()=>[l("div",Lt,V(o(s).shortfall),1)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),l("div",Ct,[l("div",Et," Medical checkup: "+V(o(s).medicalcheckup),1),l("div",Bt," Property return : "+V(o(s).propertyreturn),1)])])]),_:1})],64))}};function N(e,b=new WeakMap){if(Object(e)!==e)return e;if(b.has(e))return b.get(e);const r=e instanceof Date?new Date(e):e instanceof RegExp?new RegExp(e.source,e.flags):e instanceof Set?new Set:e instanceof Map?new Map:typeof e.constructor!="function"?Object.create(null):e.prototype!==void 0&&typeof e.prototype.constructor=="function"?e:new e.constructor;if(typeof e.constructor=="function"&&typeof e.valueOf=="function"){const i=e.valueOf();if(Object(i)!==i){const v=new e.constructor(i);return b.set(e,v),v}}return b.set(e,r),e instanceof Set?e.forEach(i=>{r.add(N(i,b))}):e instanceof Map&&e.forEach((i,v)=>{r.set(v,N(i,b))}),Object.assign(r,...Object.keys(e).map(i=>({[i]:N(e[i],b)})))}var se=J({name:"QPopupEdit",props:{modelValue:{required:!0},title:String,buttons:Boolean,labelSet:String,labelCancel:String,color:{type:String,default:"primary"},validate:{type:Function,default:()=>!0},autoSave:Boolean,cover:{type:Boolean,default:!0},disable:Boolean},emits:["update:modelValue","save","cancel","before-show","show","before-hide","hide"],setup(e,{slots:b,emit:r}){const{proxy:i}=ce(),{$q:v}=i,p=T(null),d=T(""),s=T("");let g=!1;const _=O(()=>je({initialValue:d.value,validate:e.validate,set:x,cancel:h,updatePosition:q},"value",()=>s.value,y=>{s.value=y}));function x(){e.validate(s.value)!==!1&&(S()===!0&&(r("save",s.value,d.value),r("update:modelValue",s.value)),I())}function h(){S()===!0&&r("cancel",s.value,d.value),I()}function q(){Be(()=>{p.value.updatePosition()})}function S(){return Re(s.value,d.value)===!1}function I(){g=!0,p.value.hide()}function u(){g=!1,d.value=N(e.modelValue),s.value=N(e.modelValue),r("before-show")}function w(){r("show")}function c(){g===!1&&S()===!0&&(e.autoSave===!0&&e.validate(s.value)===!0?(r("save",s.value,d.value),r("update:modelValue",s.value)):r("cancel",s.value,d.value)),r("before-hide")}function t(){r("hide")}function n(){const y=b.default!==void 0?[].concat(b.default(_.value)):[];return e.title&&y.unshift(k("div",{class:"q-dialog__title q-mt-sm q-mb-sm"},e.title)),e.buttons===!0&&y.push(k("div",{class:"q-popup-edit__buttons row justify-center no-wrap"},[k(F,{flat:!0,color:e.color,label:e.labelCancel||v.lang.label.cancel,onClick:h}),k(F,{flat:!0,color:e.color,label:e.labelSet||v.lang.label.set,onClick:x})])),y}return Object.assign(i,{set:x,cancel:h,show(y){p.value!==null&&p.value.show(y)},hide(y){p.value!==null&&p.value.hide(y)},updatePosition:q}),()=>{if(e.disable!==!0)return k(Ge,{ref:p,class:"q-popup-edit",cover:e.cover,onBeforeShow:u,onShow:w,onBeforeHide:c,onHide:t,onEscapeKey:h},n)}}});const jt=l("div",{class:"row q-mt-xl"},[l("span",null,"wether you agree with self assesment of the officer?")],-1),Mt={class:"row"},Pt={class:"col-12 col-sm q-mx-md q-pa-sm"},Dt={class:"col-12 col-sm q-mx-md q-pa-sm"},Nt={class:"q-px-sm q-py-sm"},Ht=l("div",{class:"col-2 q-table_title"},"Attributes",-1),Ft=l("div",{class:"row q-mt-xl q-mx-md"},[l("span",null,"Comments of reporting officer(if any)")],-1),Kt={class:"row"},Yt={class:"col-12 col-sm q-mx-md q-pa-sm"},Gt={class:"col-12 col-sm q-mx-md q-pa-sm"},Wt=l("div",{class:"row q-mt-xl q-mx-lg"},[l("span",null,"Comments on integrity of officer keeping in mind both financial and moralintegrity")],-1),zt={class:"row"},Jt={class:"col-12 col-sm q-mx-md q-pa-sm"},Xt={class:"col-12 col-sm q-mx-md q-pa-sm"},Zt={style:{"text-align":"center"},class:"q-ma-md"},el={class:"q-pa-md rounded-borders"},tl={class:"row q-pa-md"},ll={class:"col-12 col-sm"},al={class:"row q-pa-md"},ol={style:{"white-space":"pre-wrap"}},nl={style:{"white-space":"pre-wrap"}},sl={style:{"white-space":"pre-wrap"}},il={style:{"white-space":"pre-wrap"}},rl={class:"row q-pa-md"},dl={class:"col-12 col-sm"},ul={class:"col-12 col-sm"},cl={__name:"AnnexureTwo",setup(e){const b=be(),r=z(),{markTO:i}=C(r),v=ie(),p=ve(),{annexure1:d}=C(p),{annexureD2:s,annexureD2s:g}=C(v),_=["Yes","No"],x=T("duties"),h=T(""),q=T("");function S(w){return!w||w<0||w>10?(q.value=!0,h.value="The value must be between 0 and 10!",!1):(q.value=!1,h.value="",!0)}function I(){v.postData(),r.$state={markTO:null},b.platform.is.mobile&&history.back()}const u=[{name:"index",label:"#",field:"index"},{name:"name",required:!0,label:"attributes",align:"left",field:w=>w.name,format:w=>`${w}`},{name:"reportingOfficer1",align:"center",label:"Reporitng Authority 1",field:"reportingOfficer1"},{name:"reportingOfficer2",align:"center",label:"Reporitng Authority 2",field:"reportingOfficer2"}];return(w,c)=>(A(),K(X,null,[a(D,{"default-opened":"",label:"Section-III Reporting","header-class":"bg-teal text-white","expand-icon-class":"text-white"},{default:f(()=>[l("div",null,[a(ze,{onSubmit:I,class:"q-gutter-md"},{default:f(()=>[jt,l("div",Mt,[l("div",Pt,[a(M,{modelValue:o(g).agree1,"onUpdate:modelValue":c[0]||(c[0]=t=>o(g).agree1=t),dense:"","label-stacked":"",outlined:"",options:_,label:"Reporting Officer -1",disable:o(i)==2,rules:[t=>!!t||"required"]},null,8,["modelValue","disable","rules"])]),l("div",Dt,[a(M,{modelValue:o(g).agree2,"onUpdate:modelValue":c[1]||(c[1]=t=>o(g).agree2=t),dense:"","label-stacked":"",outlined:"",options:_,label:"Reporting Officer -2",disable:o(i)==1,rules:[t=>!!t||"required"]},null,8,["modelValue","disable","rules"])])]),l("div",Nt,[a(re,{dense:"",flat:"",bordered:"","wrap-cells":"",rows:o(s),columns:u,"row-key":"index",separator:"cell","hide-bottom":"","rows-per-page-options":[0]},{top:f(t=>[Ht,a(We),a(F,{flat:"",round:"",dense:"",icon:t.inFullscreen?o(Me):o(Pe),onClick:t.toggleFullscreen,class:"q-ml-md"},null,8,["icon","onClick"])]),body:f(t=>[a(me,{props:t},{default:f(()=>[a(L,{key:"index",props:t},{default:f(()=>[E(V(t.rowIndex+1),1)]),_:2},1032,["props"]),a(L,{key:"name",props:t},{default:f(()=>[E(V(t.row.name),1)]),_:2},1032,["props"]),a(L,{key:"reportingOfficer1",props:t},{default:f(()=>[E(V(t.row.reportingOfficer1)+" ",1),o(i)==1?(A(),H(se,{key:0,modelValue:t.row.reportingOfficer1,"onUpdate:modelValue":n=>t.row.reportingOfficer1=n,modelModifiers:{number:!0},title:"Edit",buttons:!0,persistent:!0,"auto-save":"",validate:S,onHide:S},{default:f(n=>[a($,{type:"number",modelValue:n.value,"onUpdate:modelValue":y=>n.value=y,modelModifiers:{number:!0},dense:"",autofocus:"",error:q.value,"error-message":h.value,onKeyup:oe(n.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","error","error-message","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])):P("",!0)]),_:2},1032,["props"]),a(L,{key:"reportingOfficer2",props:t},{default:f(()=>[E(V(t.row.reportingOfficer2)+" ",1),o(i)==2?(A(),H(se,{key:0,modelValue:t.row.reportingOfficer2,"onUpdate:modelValue":n=>t.row.reportingOfficer2=n,modelModifiers:{number:!0},title:"Edit",buttons:!0,"auto-save":"",validate:S,onHide:S},{default:f(n=>[a($,{type:"number",modelValue:n.value,"onUpdate:modelValue":y=>n.value=y,modelModifiers:{number:!0},dense:"",autofocus:"",error:q.value,"error-message":h.value,onKeyup:oe(n.set,["enter"])},null,8,["modelValue","onUpdate:modelValue","error","error-message","onKeyup"])]),_:2},1032,["modelValue","onUpdate:modelValue"])):P("",!0)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows"])]),Ft,l("div",Kt,[l("div",Yt,[a($,{modelValue:o(g).comment1,"onUpdate:modelValue":c[2]||(c[2]=t=>o(g).comment1=t),dense:"",outlined:"","label-stacked":"",type:"textarea",rows:"1",label:"reprorting officer -1",disable:o(i)==2,rules:[t=>!!t||"required"]},null,8,["modelValue","disable","rules"])]),l("div",Gt,[a($,{modelValue:o(g).comment2,"onUpdate:modelValue":c[3]||(c[3]=t=>o(g).comment2=t),dense:"",outlined:"","label-stacked":"",type:"textarea",rows:"1",label:"reporting officer 2",disable:o(i)==1,rules:[t=>!!t||"required"]},null,8,["modelValue","disable","rules"])])]),Wt,l("div",zt,[l("div",Jt,[a($,{modelValue:o(g).integrity1,"onUpdate:modelValue":c[4]||(c[4]=t=>o(g).integrity1=t),dense:"",outlined:"","label-stacked":"",type:"textarea",rows:"1",label:"reporting officer -1",disable:o(i)==2,rules:[t=>!!t||"required"]},null,8,["modelValue","disable","rules"])]),l("div",Xt,[a($,{modelValue:o(g).integrity2,"onUpdate:modelValue":c[5]||(c[5]=t=>o(g).integrity2=t),dense:"",outlined:"","label-stacked":"",type:"textarea",rows:"1",label:"reporting officer -2",disable:o(i)==1,rules:[t=>!!t||"required"]},null,8,["modelValue","disable","rules"])])]),l("div",Zt,[a(F,{label:"Submit",type:"submit",color:"primary"})])]),_:1})])]),_:1}),a(U,{spaced:"",color:"black"}),a(D,{"expand-separator":"",label:"Section-II Self Assesment","header-class":"bg-teal text-white","expand-icon-class":"text-white"},{default:f(()=>[l("div",el,[l("div",tl,[l("div",ll,"Award: "+V(o(d).award),1)]),l("div",al,[a(ge,null,{default:f(()=>[a(fe,{modelValue:x.value,"onUpdate:modelValue":c[6]||(c[6]=t=>x.value=t),class:"text-grey",dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:f(()=>[a(B,{name:"duties",label:"duties"}),a(B,{name:"targets",label:"targets"}),a(B,{name:"achievement",label:"achievements"}),a(B,{name:"shortfall",label:"shortfalls"})]),_:1},8,["modelValue"]),a(U),a(pe,{modelValue:x.value,"onUpdate:modelValue":c[7]||(c[7]=t=>x.value=t),animated:"",class:"shadow-2 rounded-borders"},{default:f(()=>[a(R,{name:"duties"},{default:f(()=>[l("div",ol,V(o(d).duties),1)]),_:1}),a(R,{name:"targets"},{default:f(()=>[l("div",nl,V(o(d).targets),1)]),_:1}),a(R,{name:"achievement"},{default:f(()=>[l("div",sl,V(o(d).achievement),1)]),_:1}),a(R,{name:"shortfall"},{default:f(()=>[l("div",il,V(o(d).shortfall),1)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),l("div",rl,[l("div",dl," Medical checkup: "+V(o(d).medicalcheckup),1),l("div",ul," Property return : "+V(o(d).propertyreturn),1)])])]),_:1})],64))}},ml={class:"q-ma-md q-pa-md"},fl={key:0,class:"window-height",style:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},pl=l("span",null,"Select an item to read",-1),gl=l("span",null,"Nothing is selected",-1),Al={__name:"inboxUpdate",setup(e){const b=z(),{markTO:r}=C(b);return(i,v)=>(A(),K(X,null,[l("div",ml,[o(r)==1||o(r)==2?(A(),H(cl,{key:0})):P("",!0),o(r)==3||o(r)==4?(A(),H(Rt,{key:1})):P("",!0)]),o(r)==null?(A(),K("div",fl,[a(Ie,{src:"https://res.cdn.office.net/owamail/20220909004.09/scripts/../resources/images/illustration_mail-57b4bdda660ed7eb.svg",style:{width:"120px",height:"120px"}}),pl,gl])):P("",!0)],64))}};export{Al as _};
