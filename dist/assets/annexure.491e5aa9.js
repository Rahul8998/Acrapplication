import{d as c}from"./index.a153618e.js";import{a}from"./authheader.813c6670.js";import{u as s}from"./auth.e045ea5b.js";import{api as h}from"./axios.a905d66a.js";const i=c("heirarchy",{state:()=>({heirarchyData:[],heirarchyD:{startdate:"",enddate:"",placeOfPosting:"",reportingOfficer1:"",reportingOfficer2:"",reviewingOfficer:"",acceptingOfficer:"",reportingOfficer1N:"",reportingOfficer2N:"",reviewingOfficerN:"",acceptingOfficerN:"",hrms:"DM64E6"}}),actions:{async getData(){const r=s();try{const e=await h.get(`/heirarchy/${r.user.hrms}`,{headers:a()});this.heirarchyData=e.data}catch(e){console.log(e),r.logout()}},async getcompleted(){const r=s();try{const e=await h.get(`/heirarchy/completed/${r.user.hrms}`,{headers:a()});this.heirarchyData=e.data}catch(e){console.log(e),r.logout()}},async getinProgress(){const r=s();try{const e=await h.get(`/heirarchy/inprogress/${r.user.hrms}`,{headers:a()});this.heirarchyData=e.data}catch(e){console.log(e),r.logout()}},async postData(){const r=s();this.heirarchyD.hrms=r.user.hrms;try{const e=await h.post("/heirarchy/",this.heirarchyD,{headers:a()});this.getData()}catch(e){console.log(e),r.logout()}},async deleteData(r){const e=s();try{const t=await h.delete(`/heirarchy/${r}/`,{headers:a()});this.getData()}catch(t){console.log(t),e.logout()}},updateheirarchy(r,e,t,o){this.heirarchyD.reportingOfficer1=r.hrms,this.heirarchyD.reportingOfficer2=e.hrms,this.heirarchyD.reviewingOfficer=t.hrms,this.heirarchyD.acceptingOfficer=o.hrms,this.heirarchyD.reportingOfficer1N=r.Name,this.heirarchyD.reportingOfficer2N=e.Name,this.heirarchyD.reviewingOfficerN=t.Name,this.heirarchyD.acceptingOfficerN=o.Name}}}),y=c("annexure",{state:()=>({annexure1:[],annexureD:{annexure_id:0,award:"",duties:"",targets:"",achievement:"",shortfall:"",propertyreturn:"",medicalcheckup:""}}),actions:{async getData(r){const e=s();try{const t=await h.get(`/annexure1/${r}/`,{headers:a()});this.annexure1=t.data}catch(t){console.log(t),e.logout()}},async postData(){const r=s(),e=i();try{const t=await h.post("/annexure1/",this.annexureD,{headers:a()})}catch(t){console.log(t),r.logout()}e.getData()},updateId(r){this.annexureD.annexure_id=r}}});export{y as a,i as u};
