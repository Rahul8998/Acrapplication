import{d as o,N as r}from"./index.849ed538.js";import{api as i}from"./axios.6a12bcfb.js";class l{async login(s){return await i.post("/login",{hrms:s.username,password:s.password}).then(t=>(t.data.accessToken&&localStorage.setItem("user",JSON.stringify(t.data)),t.data))}logout(){localStorage.removeItem("user")}}var a=new l;const g=o("userauth",{state:()=>({users:{username:null,password:null},user:JSON.parse(localStorage.getItem("user")),logedIn:!!JSON.parse(localStorage.getItem("user"))}),actions:{async login(){try{const e=await a.login(this.users);this.user=e,this.user&&(this.logedIn=!0,this.router.push({path:"/"}),this.users.password=null)}catch(e){e.response.status===401?r.create({message:"Invalid Credentials",color:"negative",position:"top"}):r.create({message:"Something went wrong",color:"negative",position:"top"})}},async logout(){try{a.logout(),this.logedIn=!1,this.user=null,this.router.push({path:"/login"})}catch(e){alert(e)}}}});export{g as u};
