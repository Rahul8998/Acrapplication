import{b as x,c as b}from"./QTable.58a7ad1b.js";import{u as w}from"./Completed.bb98d72c.js";import{u as C}from"./example-store.a0c624da.js";import{a as A}from"./annexure.f2a87bb5.js";import{u as D,a as O,b as h}from"./annexureFour.bae3f0aa.js";import{as as k,p as P,E as S,F as l,G as p,H as o,I as c,K as N,J as v}from"./index.872d3aec.js";import"./QSeparator.ecf877e2.js";import"./use-dark.a1c2cb9d.js";import"./QList.4ba07574.js";import"./use-prevent-scroll.c11de46b.js";import"./focus-manager.32f8d49a.js";import"./use-key-composition.46d760f6.js";import"./QChip.33016f52.js";import"./format.3e32b8d9.js";import"./authheader.813c6670.js";import"./axios.d41132e1.js";import"./auth.3b199503.js";const T={__name:"CompletedTable",setup(f){const a=[{name:"startdate",label:"Start Date",field:e=>e.startdate},{name:"enddate",label:"End Date",field:e=>e.enddate},{name:"placeofposting",label:"Place of Posting",field:e=>e.placeOfPosting},{name:"reportingofficer1",label:"Reporting Officer -1",field:e=>e.reportingOfficer1N},{name:"reportingofficer2",label:"Reporting Officer -2",field:e=>e.reportingOfficer2N},{name:"reviewingofficer",label:"Reviewing Officer",field:e=>e.reviewingOfficerN},{name:"acceptingofficer",label:"Accepting Officer",field:e=>e.acceptingOfficerN},{name:"print",label:"Print Form",field:""}],t=w(),m=C(),d=A(),n=D(),i=O(),s=h(),{heirarchyDataC:u}=k(t);function g(e){d.getData(e),m.getuserdata(),n.updateAnnexure2id(e),i.updateAnnexure3id(e),s.updateAnnexure4id(e),n.getData(),i.getData(),s.getData()}return P(()=>{t.getcompleted()}),(e,R)=>{const _=S("router-link");return l(),p(b,{dense:"",class:"q-ma-sm","table-header-class":"bg-blue-5 text-white",flat:"",wrapCells:"",separator:"cell",bordered:"","rows-per-page-options":[15],rows:v(u),columns:a,"row-key":"index"},{"body-cell-print":o(r=>[c(x,{props:r},{default:o(()=>[c(_,{to:{name:"AcrPrint",params:{ind:r.rowIndex}},onClick:y=>g(r.row.id)},{default:o(()=>[N("Download")]),_:2},1032,["to","onClick"])]),_:2},1032,["props"])]),_:1},8,["rows"])}}},W={__name:"CompletedPage",setup(f){return(a,t)=>(l(),p(T))}};export{W as default};