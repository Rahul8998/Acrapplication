import{d as a,N as o}from"./index.7652e6fb.js";import{a as r}from"./authheader.813c6670.js";import{api as s}from"./axios.af4099e5.js";import{u as i}from"./auth.ea87dc64.js";const n=a("completed",{state:()=>({heirarchyDataC:[]}),actions:{async getcompleted(){const t=i();try{const e=await s.get(`/heirarchy/completed/${t.user.hrms}`,{headers:r()});this.heirarchyDataC=e.data}catch{o.create({message:"Something went wrong",color:"negative",position:"top"}),t.logout()}}}});export{n as u};
