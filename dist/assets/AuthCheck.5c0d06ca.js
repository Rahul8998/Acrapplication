import{Q as n}from"./QInput.15bae92a.js";import{as as d,F as i,an as p,L as u,I as s,H as r,J as l,Q as c}from"./index.a7ae7a54.js";import{a as f,Q as _}from"./QForm.bacb070d.js";import{Q}from"./QCardSection.f48d2548.js";import{u as h}from"./auth.2698099d.js";import"./use-key-composition.29d01cf9.js";import"./use-dark.7a1c049c.js";import"./focus-manager.32f8d49a.js";import"./axios.acf68529.js";const V={class:"fixed-center",style:{"min-width":"400px"}},g={class:"q-pa-md",style:{"text-align":"center"}},q={__name:"AuthCheck",setup(w){const a=h(),{users:o}=d(a);function m(){a.login()}return(x,t)=>(i(),p("div",null,[u("div",V,[s(f,null,{default:r(()=>[s(Q,null,{default:r(()=>[s(_,{onSubmit:m,class:"q-ma-xl"},{default:r(()=>[s(n,{color:"green",modelValue:l(o).username,"onUpdate:modelValue":t[0]||(t[0]=e=>l(o).username=e),label:"HRMS code",hint:"","lazy-rules":"",rules:[e=>e&&e.length>0||"please enter HRMS code!"]},null,8,["modelValue","rules"]),s(n,{color:"green",type:"password",modelValue:l(o).password,"onUpdate:modelValue":t[1]||(t[1]=e=>l(o).password=e),label:"Password","lazy-rules":"",rules:[e=>e&&e.length>0||"Please enter password!"]},null,8,["modelValue","rules"]),u("div",g,[s(c,{label:"Login",type:"submit",color:"primary"})])]),_:1})]),_:1})]),_:1})])]))}};export{q as default};
