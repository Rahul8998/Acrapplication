import{Q as c}from"./QMarkupTable.2a5433d9.js";import{d as u,as as p,p as f,F as r,G as i,H as g,L as t,an as o,ao as _,ay as m,J as h,av as s,aA as k}from"./index.c1702c17.js";import{a as P}from"./authheader.813c6670.js";import{api as O}from"./axios.9f088f3c.js";import{u as y}from"./auth.2aefec94.js";import"./use-dark.41e5b11c.js";const R=u("progress",{state:()=>({heirarchyData:[]}),actions:{async getinProgress(){const a=y();try{const n=await O.get(`/heirarchy/inprogress/${a.user.hrms}`,{headers:P()});this.heirarchyData=n.data}catch(n){console.log(n),a.logout()}}}}),w=t("thead",null,[t("tr",null,[t("th",null,"start date"),t("th",null,"End date"),t("th",null,"Place of posting"),t("th",null,"Reporting Officer -1"),t("th",null,"Reporting Officer -2"),t("th",null,"Reviewing Officer"),t("th",null,"Accepting Officer"),t("th",null,"Pending Stage")])],-1),A={key:0},N={key:1},S={key:2},b={key:3},v={__name:"InprogressTable",setup(a){const n=R(),{heirarchyData:l}=p(n);return f(()=>{n.getinProgress()}),(x,B)=>(r(),i(c,{separator:"cell",flat:"",dense:"",wrapCells:"",bordered:"",class:"my-class"},{default:g(()=>[w,t("tbody",null,[(r(!0),o(_,null,m(h(l),(e,d)=>(r(),o("tr",{key:d},[t("td",null,s(e.startdate),1),t("td",null,s(e.enddate),1),t("td",null,s(e.placeOfPosting),1),t("td",null,s(e.reportingOfficer1N),1),t("td",null,s(e.reportingOfficer2N),1),t("td",null,s(e.reviewingOfficerN),1),t("td",null,s(e.acceptingOfficerN),1),e.marked_to==4?(r(),o("td",A,"Pending for Accecptence")):e.marked_to==3?(r(),o("td",N,"Pending for Review")):e.marked_to==2?(r(),o("td",S," Pending at Reporting Authority 2 ")):e.marked_to==1?(r(),o("td",b," Pending at Reporting Authority 1 ")):k("",!0)]))),128))])]),_:1}))}},I={__name:"InProgress",setup(a){return(n,l)=>(r(),i(v))}};export{I as default};
