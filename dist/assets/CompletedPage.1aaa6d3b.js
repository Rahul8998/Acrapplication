import{b as x,c as b}from"./QTable.df47a875.js";import{u as w}from"./Completed.1843b2da.js";import{u as C}from"./example-store.e6d5d921.js";import{a as A}from"./annexure.ef07b704.js";import{u as D,a as O,b as h}from"./annexureFour.d62c1e07.js";import{as as k,p as P,E as S,F as l,G as p,H as o,I as c,K as N,J as v}from"./index.7652e6fb.js";import"./QSeparator.bf5b7399.js";import"./use-dark.133b3596.js";import"./QList.3e4f8bb2.js";import"./use-prevent-scroll.4cc12217.js";import"./focus-manager.32f8d49a.js";import"./use-key-composition.d77a6869.js";import"./QChip.859bef15.js";import"./format.3e32b8d9.js";import"./authheader.813c6670.js";import"./axios.af4099e5.js";import"./auth.ea87dc64.js";const T={__name:"CompletedTable",setup(f){const a=[{name:"startdate",label:"Start Date",field:e=>e.startdate},{name:"enddate",label:"End Date",field:e=>e.enddate},{name:"placeofposting",label:"Place of Posting",field:e=>e.placeOfPosting},{name:"reportingofficer1",label:"Reporting Officer -1",field:e=>e.reportingOfficer1N},{name:"reportingofficer2",label:"Reporting Officer -2",field:e=>e.reportingOfficer2N},{name:"reviewingofficer",label:"Reviewing Officer",field:e=>e.reviewingOfficerN},{name:"acceptingofficer",label:"Accepting Officer",field:e=>e.acceptingOfficerN},{name:"print",label:"Print Form",field:""}],t=w(),m=C(),d=A(),n=D(),i=O(),s=h(),{heirarchyDataC:u}=k(t);function g(e){d.getData(e),m.getuserdata(),n.updateAnnexure2id(e),i.updateAnnexure3id(e),s.updateAnnexure4id(e),n.getData(),i.getData(),s.getData()}return P(()=>{t.getcompleted()}),(e,R)=>{const _=S("router-link");return l(),p(b,{dense:"",class:"q-ma-sm","table-header-class":"bg-blue-5 text-white",flat:"",wrapCells:"",separator:"cell",bordered:"","rows-per-page-options":[15],rows:v(u),columns:a,"row-key":"index"},{"body-cell-print":o(r=>[c(x,{props:r},{default:o(()=>[c(_,{to:{name:"AcrPrint",params:{ind:r.rowIndex}},onClick:y=>g(r.row.id)},{default:o(()=>[N("Download")]),_:2},1032,["to","onClick"])]),_:2},1032,["props"])]),_:1},8,["rows"])}}},W={__name:"CompletedPage",setup(f){return(a,t)=>(l(),p(T))}};export{W as default};