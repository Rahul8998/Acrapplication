import{Q as G}from"./QImg.e11d57ef.js";import{Q as H}from"./QChip.6e778ae5.js";import{d as J,u as Z,e as ee,g as le,h as te,f as ae,i as $}from"./use-key-composition.cfc05a4b.js";import{r as S,a as v,g as w,al as ne,s as W,ac as ie,h as y,c as ue,a2 as re,F as K,an as se,I as V,G as oe}from"./index.ce5c1339.js";import{u as de,Q as _}from"./QInput.01b9ea61.js";import{h as ce}from"./format.3e32b8d9.js";import{_ as me}from"./icons.33c9b0fc.js";import"./use-dark.243a5da4.js";import"./focus-manager.32f8d49a.js";function h(e,s,F,d){const o=[];return e.forEach(m=>{d(m)===!0?o.push(m):s.push({failedPropValidation:F,file:m})}),o}function P(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),W(e)}const fe={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},ve=["rejected"];function pe({editable:e,dnd:s,getFileInput:F,addFilesToQueue:d}){const{props:o,emit:m,proxy:i}=w(),u=S(null),q=v(()=>o.accept!==void 0?o.accept.split(",").map(l=>(l=l.trim(),l==="*"?"*/":(l.endsWith("/*")&&(l=l.slice(0,l.length-1)),l.toUpperCase()))):null),U=v(()=>parseInt(o.maxFiles,10)),j=v(()=>parseInt(o.maxTotalSize,10));function D(l){if(e.value)if(l!==Object(l)&&(l={target:null}),l.target!==null&&l.target.matches('input[type="file"]')===!0)l.clientX===0&&l.clientY===0&&ne(l);else{const g=F();g&&g!==l.target&&g.click(l)}}function k(l){e.value&&l&&d(null,l)}function A(l,g,C,z){let a=Array.from(g||l.target.files);const p=[],x=()=>{p.length>0&&m("rejected",p)};if(o.accept!==void 0&&q.value.indexOf("*/")===-1&&(a=h(a,p,"accept",n=>q.value.some(c=>n.type.toUpperCase().startsWith(c)||n.name.toUpperCase().endsWith(c))),a.length===0))return x();if(o.maxFileSize!==void 0){const n=parseInt(o.maxFileSize,10);if(a=h(a,p,"max-file-size",c=>c.size<=n),a.length===0)return x()}if(o.multiple!==!0&&a.length>0&&(a=[a[0]]),a.forEach(n=>{n.__key=n.webkitRelativePath+n.lastModified+n.name+n.size}),z===!0){const n=C.map(c=>c.__key);a=h(a,p,"duplicate",c=>n.includes(c.__key)===!1)}if(a.length===0)return x();if(o.maxTotalSize!==void 0){let n=z===!0?C.reduce((c,T)=>c+T.size,0):0;if(a=h(a,p,"max-total-size",c=>(n+=c.size,n<=j.value)),a.length===0)return x()}if(typeof o.filter=="function"){const n=o.filter(a);a=h(a,p,"filter",c=>n.includes(c))}if(o.maxFiles!==void 0){let n=z===!0?C.length:0;if(a=h(a,p,"max-files",()=>(n++,n<=U.value)),a.length===0)return x()}if(x(),a.length>0)return a}function Q(l){P(l),s.value!==!0&&(s.value=!0)}function r(l){W(l),(l.relatedTarget!==null||ie.is.safari!==!0?l.relatedTarget!==u.value:document.elementsFromPoint(l.clientX,l.clientY).includes(u.value)===!1)===!0&&(s.value=!1)}function I(l){P(l);const g=l.dataTransfer.files;g.length>0&&d(null,g),s.value=!1}function O(l){if(s.value===!0)return y("div",{ref:u,class:`q-${l}__dnd absolute-full`,onDragenter:P,onDragover:P,onDragleave:r,onDrop:I})}return Object.assign(i,{pickFiles:D,addFiles:k}),{pickFiles:D,addFiles:k,onDragover:Q,onDragleave:r,processFiles:A,getDndNode:O,maxFilesNumber:U,maxTotalSizeNumber:j}}var L=ue({name:"QFile",inheritAttrs:!1,props:{...J,...Z,...fe,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...ee,...ve],setup(e,{slots:s,emit:F,attrs:d}){const{proxy:o}=w(),m=le(),i=S(null),u=S(!1),q=te(e),{pickFiles:U,onDragover:j,onDragleave:D,processFiles:k,getDndNode:A}=pe({editable:m.editable,dnd:u,getFileInput:R,addFilesToQueue:B}),Q=de(e),r=v(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),I=v(()=>$(r.value)),O=v(()=>r.value.map(t=>t.name).join(", ")),l=v(()=>ce(r.value.reduce((t,f)=>t+f.size,0))),g=v(()=>({totalSize:l.value,filesNumber:r.value.length,maxFiles:e.maxFiles})),C=v(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:q.value,...d,id:m.targetUid.value,disabled:m.editable.value!==!0})),z=v(()=>"q-file q-field--auto-height"+(u.value===!0?" q-file--dnd":"")),a=v(()=>e.multiple===!0&&e.append===!0);function p(t){const f=r.value.slice();f.splice(t,1),n(f)}function x(t){const f=r.value.findIndex(t);f>-1&&p(f)}function n(t){F("update:modelValue",e.multiple===!0?t:t[0])}function c(t){t.keyCode===13&&re(t)}function T(t){(t.keyCode===13||t.keyCode===32)&&U(t)}function R(){return i.value}function B(t,f){const b=k(t,f,r.value,a.value),E=R();E!=null&&(E.value=""),b!==void 0&&((e.multiple===!0?e.modelValue&&b.every(Y=>r.value.includes(Y)):e.modelValue===b[0])||n(a.value===!0?r.value.concat(b):b))}function N(){return[y("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function M(){if(s.file!==void 0)return r.value.length===0?N():r.value.map((f,b)=>s.file({index:b,file:f,ref:this}));if(s.selected!==void 0)return r.value.length===0?N():s.selected({files:r.value,ref:this});if(e.useChips===!0)return r.value.length===0?N():r.value.map((f,b)=>y(H,{key:"file-"+b,removable:m.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{p(b)}},()=>y("span",{class:"ellipsis",textContent:f.name})));const t=e.displayValue!==void 0?e.displayValue:O.value;return t.length>0?[y("div",{class:e.inputClass,style:e.inputStyle,textContent:t})]:N()}function X(){const t={ref:i,...C.value,...Q.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:B};return e.multiple===!0&&(t.multiple=!0),y("input",t)}return Object.assign(m,{fieldClass:z,emitValue:n,hasValue:I,inputRef:i,innerValue:r,floatingLabel:v(()=>I.value===!0||$(e.displayValue)),computedCounter:v(()=>{if(e.counterLabel!==void 0)return e.counterLabel(g.value);const t=e.maxFiles;return`${r.value.length}${t!==void 0?" / "+t:""} (${l.value})`}),getControlChild:()=>A("file"),getControl:()=>{const t={ref:m.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return m.editable.value===!0&&Object.assign(t,{onDragover:j,onDragleave:D,onKeydown:c,onKeyup:T}),y("div",t,[X()].concat(M()))}}),Object.assign(o,{removeAtIndex:p,removeFile:x,getNativeElement:()=>i.value}),ae(m)}});const ge={class:"q-ma-md q-pa-md",style:{display:"flex","flex-direction":"column"}},be={__name:"ProfileUpdate",setup(e){const s=S(null),F=S(""),d=S("");function o(){F.value=URL.createObjectURL(s.value)}return(m,i)=>(K(),se("div",ge,[V(G,{class:"q-ma-sm",src:me,fit:"fill",style:{height:"140px","max-width":"150px","align-self":"center"}}),V(L,{class:"q-ma-sm",modelValue:s.value,"onUpdate:modelValue":[i[0]||(i[0]=u=>s.value=u),i[1]||(i[1]=u=>o())],label:"upload image",filled:"",dense:"",accept:".jpg,image/*","max-file-size":"40000",style:{"align-self":"center"}},null,8,["modelValue"]),V(_,{class:"q-ma-md",filled:"",dense:"",modelValue:d.value,"onUpdate:modelValue":i[2]||(i[2]=u=>d.value=u),label:"Academic Qualification"},null,8,["modelValue"]),V(_,{class:"q-ma-md",filled:"",dense:"",modelValue:d.value,"onUpdate:modelValue":i[3]||(i[3]=u=>d.value=u),label:"Technical Qualification"},null,8,["modelValue"]),V(_,{class:"q-ma-md",filled:"",dense:"",modelValue:d.value,"onUpdate:modelValue":i[4]||(i[4]=u=>d.value=u),label:"Departmental Exam Passed"},null,8,["modelValue"]),V(_,{class:"q-ma-md",filled:"",dense:"",modelValue:d.value,"onUpdate:modelValue":i[5]||(i[5]=u=>d.value=u),label:"Date of filling the previous year property return"},null,8,["modelValue"]),V(_,{class:"q-ma-md",filled:"",dense:"",modelValue:d.value,"onUpdate:modelValue":i[6]||(i[6]=u=>d.value=u),label:"Date of last prescribed medical examination"},null,8,["modelValue"]),V(L,{class:"q-ma-md",modelValue:s.value,"onUpdate:modelValue":i[7]||(i[7]=u=>s.value=u),label:"upload Signature",filled:"",dense:"",accept:".jpg,image/*","max-file-size":"40000"},null,8,["modelValue"])]))}},qe={__name:"UserProfile",setup(e){return(s,F)=>(K(),oe(be))}};export{qe as default};
