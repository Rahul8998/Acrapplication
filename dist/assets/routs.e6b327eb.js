import{b as l}from"./index.5ab2b0d1.js";import{u}from"./auth.945b05cc.js";import"./axios.90d7f1fb.js";var p=l(({router:r,store:t})=>{r.beforeEach((e,n,o)=>{const a=u(t),i=!["/login"].includes(e.path),s=a.logedIn;i&&!s?o("/login"):e.name=="login"&&s?o("/"):o()})});export{p as default};
