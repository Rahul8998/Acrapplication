import{b as l}from"./index.fcbf352c.js";import{u}from"./auth.efc08414.js";import"./axios.c41aac26.js";var p=l(({router:r,store:t})=>{r.beforeEach((e,n,o)=>{const a=u(t),i=!["/login"].includes(e.path),s=a.logedIn;i&&!s?o("/login"):e.name=="login"&&s?o("/"):o()})});export{p as default};