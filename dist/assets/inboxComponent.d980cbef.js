import{Q as i,a as Q}from"./QSeparator.edfb3694.js";import{as as S,r as h,p as k,F as l,an as f,I as t,H as r,K as p,ao as y,ay as D,J as m,t as I,G as C,aV as O,M as b,aW as w,av as o,L as N,W as $}from"./index.c1702c17.js";import{Q as B,a as x}from"./QItem.5aec7cb1.js";import{Q as L}from"./QList.1edc921a.js";import{c as R,u as V,a as F,b as T}from"./annexureFour.6760eb6c.js";import{a as M}from"./annexure.9e701e18.js";const P={class:"text-weight-bold"},q={__name:"inboxComponent",setup(W){const c=R(),_=M(),n=V(),u=F(),g=T(),{inbox:v}=S(c),d=h(null);function A(e,s){_.getData(e),n.updateAnnexure2id(e),s==1?(n.$reset(),n.updateAnnexure2id(e)):s==2||s==3?(u.$reset(),n.updateAnnexure2id(e),n.getData(e),u.updateAnnexure3id(e)):(n.getData(e),u.updateAnnexure3id(e),g.updateAnnexure4id(e),u.getData(e)),c.$state={markTO:s},d.value=e}return k(()=>{c.getData()}),(e,s)=>(l(),f("div",null,[t(L,{bordered:"",class:"rounded-borders"},{default:r(()=>[t(i,{header:""},{default:r(()=>[p("Inbox")]),_:1}),(l(!0),f(y,null,D(m(v),a=>I((l(),C(B,{key:a.id,clickable:"",active:d.value==a.id,onClick:z=>{A(a.id,a.marked_to),e.$router.push("/inbox/message")},"active-class":"my-item-click"},{default:r(()=>[t(x,{avatar:""},{default:r(()=>[t(O,null,{default:r(()=>[t(b,{name:m(w),size:"34px",color:"primary"},null,8,["name"])]),_:1})]),_:1}),t(x,null,{default:r(()=>[t(i,{lines:"1"},{default:r(()=>[p("From : "+o(a.startdate)+" to "+o(a.enddate),1)]),_:2},1024),t(i,{caption:"",lines:"2"},{default:r(()=>[N("span",P,"Posting place : "+o(a.placeOfPosting),1)]),_:2},1024),t(i,{caption:"",lines:"2"},{default:r(()=>[p(" Reprorting Officer:"+o(a.reportingOfficerN)+" , Reviewing Officer:"+o(a.reviewingOfficerN),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["active","onClick"])),[[$]])),128)),t(Q,{inset:"item"})]),_:1})]))}};export{q as _};
