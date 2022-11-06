import{d as a,N as s,a1 as c}from"./index.7652e6fb.js";import{u as t}from"./auth.ea87dc64.js";import{a as n}from"./authheader.813c6670.js";import{api as i}from"./axios.af4099e5.js";const f=a("Inbox",{state:()=>({inbox:[],markTO:null}),actions:{async getData(){const r=t();try{const e=await i.get(`/inboxdata/?id=${r.user.hrms}`,{headers:n()});this.inbox=e.data}catch(e){console.log(e),r.logout()}}}}),l=a("annexure2",{state:()=>({annexureD2s:{annexure2_id:2,agree1:"",agree2:"",comment1:"",comment2:"",integrity1:"",integrity2:""},annexureD2:[{name:"Accomplishment of Targets",reportingOfficer1:6,reportingOfficer2:6},{name:"Quality of outputs",reportingOfficer1:6,reportingOfficer2:6},{name:"Accomplishment of exceptional work/unforeseen task performed",reportingOfficer1:6,reportingOfficer2:6},{name:"attitude of work",reportingOfficer1:6,reportingOfficer2:6},{name:"sense of responsibility",reportingOfficer1:6,reportingOfficer2:6},{name:"Emotional stabilty",reportingOfficer1:6,reportingOfficer2:6},{name:"Communication Skills",reportingOfficer1:6,reportingOfficer2:6},{name:"Moral courage and willingness to take professional stand",reportingOfficer1:6,reportingOfficer2:6},{name:"leadership qualities",reportingOfficer1:6,reportingOfficer2:6},{name:"capacity to work in time limit",reportingOfficer1:6,reportingOfficer2:6},{name:"Knowledge of Technology/ processes/ regulations /IT skills",reportingOfficer1:6,reportingOfficer2:6},{name:"strategy planning ability/ innovativeness",reportingOfficer1:6,reportingOfficer2:6},{name:"Decision making ability",reportingOfficer1:6,reportingOfficer2:6},{name:"Initiative",reportingOfficer1:6,reportingOfficer2:6},{name:"Ability to motivate and develop subordinates in a team",reportingOfficer1:6,reportingOfficer2:6}]}),actions:{async postData(){const r=f(),e=t();try{await i.post("/annexure2/",this.data,{headers:n()}),s.create({message:"submitted successfully",color:"positive",position:"top"})}catch(o){console.log(o),e.logout()}c.is.desktop&&r.getData()},updateAnnexure2id(r){this.annexureD2s.annexure2_id=r},async getData(){const r=t();try{let e=await i.get(`/annexure2/${this.annexureD2s.annexure2_id}`,{headers:n()});e=e.data,this.annexureD2[0].reportingOfficer1=e.accomplishmentOfTargets_1,this.annexureD2[0].reportingOfficer2=e.accomplishmentOfTargets_2,this.annexureD2[1].reportingOfficer1=e.qualityOfOutput_1,this.annexureD2[1].reportingOfficer2=e.qualityOfOutput_2,this.annexureD2[2].reportingOfficer1=e.accomplishmentOfEwork_1,this.annexureD2[2].reportingOfficer2=e.accomplishmentOfEwork_2,this.annexureD2[3].reportingOfficer1=e.attitudeToWork_1,this.annexureD2[3].reportingOfficer2=e.attitudeToWork_2,this.annexureD2[4].reportingOfficer1=e.senseOfResponsibility_1,this.annexureD2[4].reportingOfficer2=e.senseOfResponsibility_2,this.annexureD2[5].reportingOfficer1=e.emotionStability_1,this.annexureD2[5].reportingOfficer2=e.emotionStability_2,this.annexureD2[6].reportingOfficer1=e.communicationSkill_1,this.annexureD2[6].reportingOfficer2=e.communicationSkill_2,this.annexureD2[7].reportingOfficer1=e.moralcourage_1,this.annexureD2[7].reportingOfficer2=e.moralcourage_2,this.annexureD2[8].reportingOfficer1=e.leadership_1,this.annexureD2[8].reportingOfficer2=e.leadership_2,this.annexureD2[9].reportingOfficer1=e.capacitytowork_1,this.annexureD2[9].reportingOfficer2=e.capacitytowork_2,this.annexureD2[10].reportingOfficer1=e.knowledgofwork_1,this.annexureD2[10].reportingOfficer2=e.knowledgofwork_2,this.annexureD2[11].reportingOfficer1=e.strategyplanning_1,this.annexureD2[11].reportingOfficer2=e.strategyplanning_2,this.annexureD2[12].reportingOfficer1=e.decisionmaking_1,this.annexureD2[12].reportingOfficer2=e.decisionmaking_2,this.annexureD2[13].reportingOfficer1=e.initiative_1,this.annexureD2[13].reportingOfficer2=e.initiative_2,this.annexureD2[14].reportingOfficer1=e.abilitytomotivate_1,this.annexureD2[14].reportingOfficer2=e.abilitytomotivate_2,this.annexureD2s.agree1=e.agree_1,this.annexureD2s.agree2=e.agree_2,this.annexureD2s.comment1=e.comments_1,this.annexureD2s.comment2=e.comments_2,this.annexureD2s.integrity1=e.integerity_1,this.annexureD2s.integrity2=e.integerity_2}catch(e){console.log(e),r.logout()}}},getters:{data:r=>r.annexureD2.concat(r.annexureD2s)}}),h=a("annexure3",{state:()=>({Annexure3:{annexure3_id:0,agreed:!1,reasons:"",comments:""}}),actions:{async postData(){const r=t(),e=f();try{await i.post("/annexure3/",this.Annexure3,{headers:n()}),s.create({message:"submitted successfully",color:"positive",position:"top"})}catch(o){console.log(o),r.logout()}c.is.desktop&&e.getData()},updateAnnexure3id(r){this.Annexure3.annexure3_id=r},async getData(){const r=t();try{const e=await i.get(`/annexure3/${this.Annexure3.annexure3_id}`,{headers:n()});this.Annexure3=e.data}catch(e){console.log(e),r.logout()}}}}),m=a("annexure4",{state:()=>({Annexure4:{annexure4_id:0,agreed:!1,reasons:"",comments:""}}),actions:{async postData(){const r=t(),e=f();try{await i.post("/annexure4/",this.Annexure4,{headers:n()}),s.create({message:"Annexure 3 submitted successfully",color:"positive",position:"top"})}catch(o){console.log(o),r.logout()}c.is.desktop&&e.getData()},updateAnnexure4id(r){this.Annexure4.annexure4_id=r},async getData(){const r=t();try{const e=await i.get(`/annexure4/${this.Annexure4.annexure4_id}`,{headers:n()});this.Annexure4=e.data}catch(e){console.log(e),r.logout()}}}});export{h as a,m as b,f as c,l as u};
