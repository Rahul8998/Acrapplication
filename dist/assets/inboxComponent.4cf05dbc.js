import{Q as c,a as Q}from"./QSeparator.638c999f.js";import{as as b,r as h,p as S,F as i,an as f,I as t,H as r,K as d,ao as D,a$ as I,J as x,t as k,G as w,b0 as O,M as $,b1 as C,av as o,L as N,W as B}from"./index.849ed538.js";import{a as L,b as m,Q as R}from"./QList.0b434a6b.js";import{c as y,u as F,a as T,b as V}from"./annexureFour.50d4f910.js";import{a as M}from"./annexure.570f7206.js";const P={class:"text-weight-bold"},j={__name:"inboxComponent",setup(z){const l=y(),_=M(),s=F(),u=T(),g=V(),{inbox:v}=b(l),p=h(null);function A(e,n){_.getData(e),s.updateAnnexure2id(e),n==1?(s.$reset(),s.updateAnnexure2id(e)):n==2||n==3?(u.$reset(),s.updateAnnexure2id(e),s.getData(e),u.updateAnnexure3id(e)):(s.getData(e),u.updateAnnexure3id(e),g.updateAnnexure4id(e),u.getData(e)),l.$state={markTO:n},p.value=e}return S(()=>{l.getData()}),(e,n)=>(i(),f("div",null,[t(R,{bordered:"",class:"rounded-borders"},{default:r(()=>[t(c,{header:""},{default:r(()=>[d("Inbox")]),_:1}),(i(!0),f(D,null,I(x(v),a=>k((i(),w(L,{key:a.id,clickable:"",active:p.value==a.id,"active-class":"bg-teal-4 text-white",onClick:E=>{A(a.id,a.marked_to),e.$router.push("/inbox/message")}},{default:r(()=>[t(m,{avatar:""},{default:r(()=>[t(O,null,{default:r(()=>[t($,{name:x(C),size:"34px",color:"primary"},null,8,["name"])]),_:1})]),_:1}),t(m,null,{default:r(()=>[t(c,{lines:"1"},{default:r(()=>[d("From : "+o(a.startdate)+" to "+o(a.enddate),1)]),_:2},1024),t(c,{caption:"",lines:"2"},{default:r(()=>[N("span",P,"Posting place : "+o(a.placeOfPosting),1)]),_:2},1024),t(c,{caption:"",lines:"2"},{default:r(()=>[d(" Reprorting Officer:"+o(a.reportingOfficerN)+" , Reviewing Officer:"+o(a.reviewingOfficerN),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["active","onClick"])),[[B]])),128)),t(Q,{inset:"item"})]),_:1})]))}};export{j as _};
