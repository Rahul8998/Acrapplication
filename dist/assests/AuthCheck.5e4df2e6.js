import{Q as u}from"./QInput.443a9dda.js";import{Q as p}from"./QBtn.2f5f6993.js";import{a as d,Q as i}from"./QForm.fbe850ce.js";import{Q as c}from"./QCardSection.e595d7e4.js";import{Z as f,F as g,U as Q,J as n,I as o,H as s,$ as r}from"./index.90532aa7.js";import{u as _}from"./auth.6118b402.js";import"./QIcon.03d3763c.js";import"./render.e4852632.js";import"./use-dark.6432a8b9.js";import"./format.1a94cd50.js";import"./use-router-link.631aadd3.js";import"./axios.da993ed9.js";const b={class:"absolute-center q-pa-lg q-ma-md"},A={__name:"AuthCheck",setup(x){const a=_(),{users:t}=f(a);function m(){a.login()}return(V,l)=>(g(),Q("div",null,[n("div",b,[o(d,null,{default:s(()=>[o(c,null,{default:s(()=>[o(i,{onSubmit:m,class:"q-gutter-md",style:{padding:"0 29px 18px 29px"}},{default:s(()=>[o(u,{color:"green",modelValue:r(t).username,"onUpdate:modelValue":l[0]||(l[0]=e=>r(t).username=e),label:"HRMS code",hint:"","lazy-rules":"",rules:[e=>e&&e.length>0||"please enter HRMS code!"]},null,8,["modelValue","rules"]),o(u,{color:"green",type:"password",modelValue:r(t).password,"onUpdate:modelValue":l[1]||(l[1]=e=>r(t).password=e),label:"Password","lazy-rules":"",rules:[e=>e&&e.length>0||"Please enter password!"]},null,8,["modelValue","rules"]),n("div",null,[o(p,{style:{display:"block",margin:"30px auto 0 auto",padding:"0 30px"},label:"Login",type:"submit",color:"green-10"})])]),_:1})]),_:1})]),_:1})])]))}};export{A as default};