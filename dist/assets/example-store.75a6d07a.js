import{d as r}from"./index.cb010043.js";import{api as i}from"./axios.7c461726.js";import{a as o}from"./authheader.813c6670.js";import{u as s}from"./auth.47ef9b68.js";const m=r("profile",{state:()=>({user:{name:"",Dob:"",img:"",Designation:"",AcadQualification:"",TechQualification:"",DateofJoiningNigam:"",DateofJoiningRank:"",DateofJoiningpresentstation:"",DepartmentalExam:"",lastyearPropertyReturn:"",lastprescribedMedical:""},options:[]}),actions:{async getuserdata(){const t=s();try{const a=await i.get(`/profileData/?hrms=${t.user.hrms}`,{headers:o()});this.user.name=a.data.Name,this.user.Dob=a.data.DateofBirth,this.user.Designation=a.data.Designation,this.user.DateofJoiningNigam=a.data.DateofJoining,this.user.DateofJoiningpresentstation=a.data.DateofJoiningCpost,this.user.DepartmentalExam=a.data.DeptExam,this.user.AcadQualification=a.data.Academic_Qualification,this.user.TechQualification=a.data.Technical_Qualification}catch(a){console.log(a),t.logout()}},async searchName(t){const a=s();try{const e=await i.get(`/searchname/?Sname=${t}`,{headers:o()});this.options=e.data}catch(e){console.log(e),a.logout()}}}});export{m as u};
