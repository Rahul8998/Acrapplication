import{b as l}from"./index.7dd9e907.js";import{u}from"./auth.5b3e5bb9.js";import"./axios.4d09d6ea.js";var p=l(({router:r,store:t})=>{r.beforeEach((e,n,o)=>{const a=u(t),i=!["/login"].includes(e.path),s=a.logedIn;i&&!s?o("/login"):e.name=="login"&&s?o("/"):o()})});export{p as default};
