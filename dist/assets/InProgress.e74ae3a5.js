import{Q as d}from"./QMarkupTable.4645c00f.js";import{d as p,Z as f,a as g,v as n,x as c,y as m,A as t,U as l,a3 as _,a0 as r,$ as h,V as O}from"./index.a153618e.js";import{a as k}from"./authheader.813c6670.js";import{api as y}from"./axios.a905d66a.js";import{u as P}from"./auth.e045ea5b.js";import"./use-dark.4f362a00.js";import"./render.b874c987.js";const b=p("progress",{state:()=>({heirarchyData:[]}),actions:{async getinProgress(){const a=P();try{const s=await y.get(`/heirarchy/inprogress/${a.user.hrms}`,{headers:k()});this.heirarchyData=s.data}catch(s){console.log(s),a.logout()}}}}),w=t("thead",null,[t("tr",null,[t("th",null,"start date"),t("th",null,"End date"),t("th",null,"Place of posting"),t("th",null,"Reporting Officer -1"),t("th",null,"Reporting Officer -2"),t("th",null,"Reviewing Officer"),t("th",null,"Accepting Officer")])],-1),x={__name:"InprogressTable",emits:["sendval"],setup(a,{emit:s}){const o=b(),{heirarchyData:i}=f(o);return g(()=>{o.getinProgress()}),(N,v)=>(n(),c(d,{separator:"cell",flat:"",dense:"",wrapCells:"",bordered:"",style:{"background-color":"lightcyan"}},{default:m(()=>[w,t("tbody",null,[(n(!0),l(O,null,_(h(i),(e,u)=>(n(),l("tr",{key:u},[t("td",null,r(e.startdate),1),t("td",null,r(e.enddate),1),t("td",null,r(e.placeOfPosting),1),t("td",null,r(e.reportingOfficer1N),1),t("td",null,r(e.reportingOfficer2N),1),t("td",null,r(e.reviewingOfficerN),1),t("td",null,r(e.acceptingOfficerN),1)]))),128))])]),_:1}))}},C={__name:"InProgress",setup(a){return(s,o)=>(n(),c(x))}};export{C as default};
