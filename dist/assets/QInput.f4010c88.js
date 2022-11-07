import{d as p,u as ee,e as te,h as ae,g as ne,f as le,i as W,j as re}from"./use-key-composition.46d760f6.js";import{r as Q,w as N,q as B,aD as ue,a as A,c as ie,o as oe,p as se,h as L,g as fe,al as X}from"./index.872d3aec.js";import{b as ce}from"./focus-manager.32f8d49a.js";const Y={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},_={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},J=Object.keys(_);J.forEach(e=>{_[e].regex=new RegExp(_[e].pattern)});const de=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+J.join("")+"])|(.)","g"),G=/[.*+?^${}()|[\]\\]/g,m=String.fromCharCode(1),ge={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function me(e,T,Z,b){let c,g,O,S;const F=Q(null),y=Q(v());function V(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}N(()=>e.type+e.autogrow,w),N(()=>e.mask,t=>{if(t!==void 0)P(y.value,!0);else{const n=j(y.value);w(),e.modelValue!==n&&T("update:modelValue",n)}}),N(()=>e.fillMask+e.reverseFillMask,()=>{F.value===!0&&P(y.value,!0)}),N(()=>e.unmaskedValue,()=>{F.value===!0&&P(y.value)});function v(){if(w(),F.value===!0){const t=D(j(e.modelValue));return e.fillMask!==!1?I(t):t}return e.modelValue}function z(t){if(t<c.length)return c.slice(-t);let n="",l=c;const r=l.indexOf(m);if(r>-1){for(let u=t-l.length;u>0;u--)n+=m;l=l.slice(0,r)+n+l.slice(r)}return l}function w(){if(F.value=e.mask!==void 0&&e.mask.length>0&&V(),F.value===!1){S=void 0,c="",g="";return}const t=Y[e.mask]===void 0?e.mask:Y[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",l=n.replace(G,"\\$&"),r=[],u=[],i=[];let d=e.reverseFillMask===!0,o="",f="";t.replace(de,(M,R,a,h,E)=>{if(h!==void 0){const k=_[h];i.push(k),f=k.negate,d===!0&&(u.push("(?:"+f+"+)?("+k.pattern+"+)?(?:"+f+"+)?("+k.pattern+"+)?"),d=!1),u.push("(?:"+f+"+)?("+k.pattern+")?")}else if(a!==void 0)o="\\"+(a==="\\"?"":a),i.push(a),r.push("([^"+o+"]+)?"+o+"?");else{const k=R!==void 0?R:E;o=k==="\\"?"\\\\\\\\":k.replace(G,"\\\\$&"),i.push(k),r.push("([^"+o+"]+)?"+o+"?")}});const C=new RegExp("^"+r.join("")+"("+(o===""?".":"[^"+o+"]")+"+)?"+(o===""?"":"["+o+"]*")+"$"),q=u.length-1,s=u.map((M,R)=>R===0&&e.reverseFillMask===!0?new RegExp("^"+l+"*"+M):R===q?new RegExp("^"+M+"("+(f===""?".":f)+"+)?"+(e.reverseFillMask===!0?"$":l+"*")):new RegExp("^"+M));O=i,S=M=>{const R=C.exec(M);R!==null&&(M=R.slice(1).join(""));const a=[],h=s.length;for(let E=0,k=M;E<h;E++){const H=s[E].exec(k);if(H===null)break;k=k.slice(H.shift().length),a.push(...H)}return a.length>0?a.join(""):M},c=i.map(M=>typeof M=="string"?M:m).join(""),g=c.split(m).join(n)}function P(t,n,l){const r=b.value,u=r.selectionEnd,i=r.value.length-u,d=j(t);n===!0&&w();const o=D(d),f=e.fillMask!==!1?I(o):o,C=y.value!==f;r.value!==f&&(r.value=f),C===!0&&(y.value=f),document.activeElement===r&&B(()=>{if(f===g){const s=e.reverseFillMask===!0?g.length:0;r.setSelectionRange(s,s,"forward");return}if(l==="insertFromPaste"&&e.reverseFillMask!==!0){const s=u-1;x.right(r,s,s);return}if(["deleteContentBackward","deleteContentForward"].indexOf(l)>-1){const s=e.reverseFillMask===!0?u===0?f.length>o.length?1:0:Math.max(0,f.length-(f===g?0:Math.min(o.length,i)+1))+1:u;r.setSelectionRange(s,s,"forward");return}if(e.reverseFillMask===!0)if(C===!0){const s=Math.max(0,f.length-(f===g?0:Math.min(o.length,i+1)));s===1&&u===1?r.setSelectionRange(s,s,"forward"):x.rightReverse(r,s,s)}else{const s=f.length-i;r.setSelectionRange(s,s,"backward")}else if(C===!0){const s=Math.max(0,c.indexOf(m),Math.min(o.length,u)-1);x.right(r,s,s)}else{const s=u-1;x.right(r,s,s)}});const q=e.unmaskedValue===!0?j(f):f;String(e.modelValue)!==q&&Z(q,!0)}function $(t,n,l){const r=D(j(t.value));n=Math.max(0,c.indexOf(m),Math.min(r.length,n)),t.setSelectionRange(n,l,"forward")}const x={left(t,n,l,r){const u=c.slice(n-1).indexOf(m)===-1;let i=Math.max(0,n-1);for(;i>=0;i--)if(c[i]===m){n=i,u===!0&&n++;break}if(i<0&&c[n]!==void 0&&c[n]!==m)return x.right(t,0,0);n>=0&&t.setSelectionRange(n,r===!0?l:n,"backward")},right(t,n,l,r){const u=t.value.length;let i=Math.min(u,l+1);for(;i<=u;i++)if(c[i]===m){l=i;break}else c[i-1]===m&&(l=i);if(i>u&&c[l-1]!==void 0&&c[l-1]!==m)return x.left(t,u,u);t.setSelectionRange(r?n:l,l,"forward")},leftReverse(t,n,l,r){const u=z(t.value.length);let i=Math.max(0,n-1);for(;i>=0;i--)if(u[i-1]===m){n=i;break}else if(u[i]===m&&(n=i,i===0))break;if(i<0&&u[n]!==void 0&&u[n]!==m)return x.rightReverse(t,0,0);n>=0&&t.setSelectionRange(n,r===!0?l:n,"backward")},rightReverse(t,n,l,r){const u=t.value.length,i=z(u),d=i.slice(0,l+1).indexOf(m)===-1;let o=Math.min(u,l+1);for(;o<=u;o++)if(i[o-1]===m){l=o,l>0&&d===!0&&l--;break}if(o>u&&i[l-1]!==void 0&&i[l-1]!==m)return x.leftReverse(t,u,u);t.setSelectionRange(r===!0?n:l,l,"forward")}};function U(t){if(ue(t)===!0)return;const n=b.value,l=n.selectionStart,r=n.selectionEnd;if(t.keyCode===37||t.keyCode===39){const u=x[(t.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];t.preventDefault(),u(n,l,r,t.shiftKey)}else t.keyCode===8&&e.reverseFillMask!==!0&&l===r?x.left(n,l,r,!0):t.keyCode===46&&e.reverseFillMask===!0&&l===r&&x.rightReverse(n,l,r,!0)}function D(t){if(t==null||t==="")return"";if(e.reverseFillMask===!0)return K(t);const n=O;let l=0,r="";for(let u=0;u<n.length;u++){const i=t[l],d=n[u];if(typeof d=="string")r+=d,i===d&&l++;else if(i!==void 0&&d.regex.test(i))r+=d.transform!==void 0?d.transform(i):i,l++;else return r}return r}function K(t){const n=O,l=c.indexOf(m);let r=t.length-1,u="";for(let i=n.length-1;i>=0&&r>-1;i--){const d=n[i];let o=t[r];if(typeof d=="string")u=d+u,o===d&&r--;else if(o!==void 0&&d.regex.test(o))do u=(d.transform!==void 0?d.transform(o):o)+u,r--,o=t[r];while(l===i&&o!==void 0&&d.regex.test(o));else return u}return u}function j(t){return typeof t!="string"||S===void 0?typeof t=="number"?S(""+t):t:S(t)}function I(t){return g.length-t.length<=0?t:e.reverseFillMask===!0&&t.length>0?g.slice(0,-t.length)+t:t+g.slice(t.length)}return{innerValue:y,hasMask:F,moveCursorForPaste:$,updateMaskValue:P,onMaskedKeydown:U}}function ve(e,T){function Z(){const b=e.modelValue;try{const c="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(b)===b&&("length"in b?Array.from(b):[b]).forEach(g=>{c.items.add(g)}),{files:c.files}}catch{return{files:void 0}}}return T===!0?A(()=>{if(e.type==="file")return Z()}):A(Z)}var xe=ie({name:"QInput",inheritAttrs:!1,props:{...p,...ge,...ee,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...te,"paste","change"],setup(e,{emit:T,attrs:Z}){const{proxy:b}=fe(),{$q:c}=b,g={};let O=NaN,S,F,y,V;const v=Q(null),z=ae(e),{innerValue:w,hasMask:P,moveCursorForPaste:$,updateMaskValue:x,onMaskedKeydown:U}=me(e,T,f,v),D=ve(e,!0),K=A(()=>W(w.value)),j=re(o),I=ne(),t=A(()=>e.type==="textarea"||e.autogrow===!0),n=A(()=>t.value===!0||["text","search","url","tel","password"].includes(e.type)),l=A(()=>{const a={...I.splitAttrs.listeners.value,onInput:o,onPaste:d,onChange:q,onBlur:s,onFocus:X};return a.onCompositionstart=a.onCompositionupdate=a.onCompositionend=j,P.value===!0&&(a.onKeydown=U),e.autogrow===!0&&(a.onAnimationend=C),a}),r=A(()=>{const a={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:z.value,...I.splitAttrs.attributes.value,id:I.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return t.value===!1&&(a.type=e.type),e.autogrow===!0&&(a.rows=1),a});N(()=>e.type,()=>{v.value&&(v.value.value=e.modelValue)}),N(()=>e.modelValue,a=>{if(P.value===!0){if(F===!0&&(F=!1,String(a)===O))return;x(a)}else w.value!==a&&(w.value=a,e.type==="number"&&g.hasOwnProperty("value")===!0&&(S===!0?S=!1:delete g.value));e.autogrow===!0&&B(C)}),N(()=>e.autogrow,a=>{a===!0?B(C):v.value!==null&&Z.rows>0&&(v.value.style.height="auto")}),N(()=>e.dense,()=>{e.autogrow===!0&&B(C)});function u(){ce(()=>{const a=document.activeElement;v.value!==null&&v.value!==a&&(a===null||a.id!==I.targetUid.value)&&v.value.focus({preventScroll:!0})})}function i(){v.value!==null&&v.value.select()}function d(a){if(P.value===!0&&e.reverseFillMask!==!0){const h=a.target;$(h,h.selectionStart,h.selectionEnd)}T("paste",a)}function o(a){if(!a||!a.target)return;if(e.type==="file"){T("update:modelValue",a.target.files);return}const h=a.target.value;if(a.target.qComposing===!0){g.value=h;return}if(P.value===!0)x(h,!1,a.inputType);else if(f(h),n.value===!0&&a.target===document.activeElement){const{selectionStart:E,selectionEnd:k}=a.target;E!==void 0&&k!==void 0&&B(()=>{a.target===document.activeElement&&h.indexOf(a.target.value)===0&&a.target.setSelectionRange(E,k)})}e.autogrow===!0&&C()}function f(a,h){V=()=>{e.type!=="number"&&g.hasOwnProperty("value")===!0&&delete g.value,e.modelValue!==a&&O!==a&&(O=a,h===!0&&(F=!0),T("update:modelValue",a),B(()=>{O===a&&(O=NaN)})),V=void 0},e.type==="number"&&(S=!0,g.value=a),e.debounce!==void 0?(clearTimeout(y),g.value=a,y=setTimeout(V,e.debounce)):V()}function C(){requestAnimationFrame(()=>{const a=v.value;if(a!==null){const h=a.parentNode.style,{overflow:E}=a.style;c.platform.is.firefox!==!0&&(a.style.overflow="hidden"),a.style.height="1px",h.marginBottom=a.scrollHeight-1+"px",a.style.height=a.scrollHeight+"px",a.style.overflow=E,h.marginBottom=""}})}function q(a){j(a),clearTimeout(y),V!==void 0&&V(),T("change",a.target.value)}function s(a){a!==void 0&&X(a),clearTimeout(y),V!==void 0&&V(),S=!1,F=!1,delete g.value,e.type!=="file"&&setTimeout(()=>{v.value!==null&&(v.value.value=w.value!==void 0?w.value:"")})}function M(){return g.hasOwnProperty("value")===!0?g.value:w.value!==void 0?w.value:""}oe(()=>{s()}),se(()=>{e.autogrow===!0&&C()}),Object.assign(I,{innerValue:w,fieldClass:A(()=>`q-${t.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:A(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:v,emitValue:f,hasValue:K,floatingLabel:A(()=>K.value===!0||W(e.displayValue)),getControl:()=>L(t.value===!0?"textarea":"input",{ref:v,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...r.value,...l.value,...e.type!=="file"?{value:M()}:D.value}),getShadowControl:()=>L("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(t.value===!0?"":" text-no-wrap")},[L("span",{class:"invisible"},M()),L("span",e.shadowText)])});const R=le(I);return Object.assign(b,{focus:u,select:i,getNativeElement:()=>v.value}),R}});export{xe as Q,ve as u};
