import{b as Fe}from"./index.849ed538.js";function ce(e,t){return function(){return e.apply(t,arguments)}}const{toString:le}=Object.prototype,{getPrototypeOf:W}=Object,K=(e=>t=>{const n=le.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),O=e=>(e=e.toLowerCase(),t=>K(t)===e),k=e=>t=>typeof t===e,{isArray:_}=Array,q=k("undefined");function De(e){return e!==null&&!q(e)&&e.constructor!==null&&!q(e.constructor)&&P(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const fe=O("ArrayBuffer");function ge(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&fe(e.buffer),t}const _e=k("string"),P=k("function"),de=k("number"),he=e=>e!==null&&typeof e=="object",Be=e=>e===!0||e===!1,U=e=>{if(K(e)!=="object")return!1;const t=W(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Le=O("Date"),Ue=O("File"),je=O("Blob"),ke=O("FileList"),Me=e=>he(e)&&P(e.pipe),Ie=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||le.call(e)===t||P(e.toString)&&e.toString()===t)},He=O("URLSearchParams"),ze=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function M(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),_(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let c;for(r=0;r<s;r++)c=i[r],t.call(null,e[c],c,e)}}function J(){const e={},t=(n,r)=>{U(e[r])&&U(n)?e[r]=J(e[r],n):U(n)?e[r]=J({},n):_(n)?e[r]=n.slice():e[r]=n};for(let n=0,r=arguments.length;n<r;n++)arguments[n]&&M(arguments[n],t);return e}const qe=(e,t,n,{allOwnKeys:r}={})=>(M(t,(o,i)=>{n&&P(o)?e[i]=ce(o,n):e[i]=o},{allOwnKeys:r}),e),Je=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ve=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},$e=(e,t,n,r)=>{let o,i,s;const c={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!c[s]&&(t[s]=e[s],c[s]=!0);e=n!==!1&&W(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},We=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ke=e=>{if(!e)return null;if(_(e))return e;let t=e.length;if(!de(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},ve=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&W(Uint8Array)),Xe=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},Qe=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ye=O("HTMLFormElement"),Ge=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Y=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ze=O("RegExp"),pe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};M(n,(o,i)=>{t(o,i,e)!==!1&&(r[i]=o)}),Object.defineProperties(e,r)},et=e=>{pe(e,(t,n)=>{const r=e[n];if(!!P(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not read-only method '"+n+"'")})}})},tt=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return _(e)?r(e):r(String(e).split(t)),n},nt=()=>{},rt=(e,t)=>(e=+e,Number.isFinite(e)?e:t);var a={isArray:_,isArrayBuffer:fe,isBuffer:De,isFormData:Ie,isArrayBufferView:ge,isString:_e,isNumber:de,isBoolean:Be,isObject:he,isPlainObject:U,isUndefined:q,isDate:Le,isFile:Ue,isBlob:je,isRegExp:Ze,isFunction:P,isStream:Me,isURLSearchParams:He,isTypedArray:ve,isFileList:ke,forEach:M,merge:J,extend:qe,trim:ze,stripBOM:Je,inherits:Ve,toFlatObject:$e,kindOf:K,kindOfTest:O,endsWith:We,toArray:Ke,forEachEntry:Xe,matchAll:Qe,isHTMLForm:Ye,hasOwnProperty:Y,hasOwnProp:Y,reduceDescriptors:pe,freezeMethods:et,toObjectSet:tt,toCamelCase:Ge,noop:nt,toFiniteNumber:rt};function p(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(p,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const me=p.prototype,Ee={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ee[e]={value:e}});Object.defineProperties(p,Ee);Object.defineProperty(me,"isAxiosError",{value:!0});p.from=(e,t,n,r,o,i)=>{const s=Object.create(me);return a.toFlatObject(e,s,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),p.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};var st=typeof self=="object"?self.FormData:window.FormData;function V(e){return a.isPlainObject(e)||a.isArray(e)}function we(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function G(e,t,n){return e?e.concat(t).map(function(o,i){return o=we(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function ot(e){return a.isArray(e)&&!e.some(V)}const it=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function at(e){return e&&a.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function I(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new(st||FormData),n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,T){return!a.isUndefined(T[m])});const r=n.metaTokens,o=n.visitor||d,i=n.dots,s=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&at(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function u(l){if(l===null)return"";if(a.isDate(l))return l.toISOString();if(!f&&a.isBlob(l))throw new p("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(l)||a.isTypedArray(l)?f&&typeof Blob=="function"?new Blob([l]):Buffer.from(l):l}function d(l,m,T){let R=l;if(l&&!T&&typeof l=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),l=JSON.stringify(l);else if(a.isArray(l)&&ot(l)||a.isFileList(l)||a.endsWith(m,"[]")&&(R=a.toArray(l)))return m=we(m),R.forEach(function(L,Ce){!(a.isUndefined(L)||L===null)&&t.append(s===!0?G([m],Ce,i):s===null?m:m+"[]",u(L))}),!1}return V(l)?!0:(t.append(G(T,m,i),u(l)),!1)}const E=[],w=Object.assign(it,{defaultVisitor:d,convertValue:u,isVisitable:V});function h(l,m){if(!a.isUndefined(l)){if(E.indexOf(l)!==-1)throw Error("Circular reference detected in "+m.join("."));E.push(l),a.forEach(l,function(R,N){(!(a.isUndefined(R)||R===null)&&o.call(t,R,a.isString(N)?N.trim():N,m,w))===!0&&h(R,m?m.concat(N):[N])}),E.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return h(e),t}function Z(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function v(e,t){this._pairs=[],e&&I(e,this,t)}const ye=v.prototype;ye.append=function(t,n){this._pairs.push([t,n])};ye.toString=function(t){const n=t?function(r){return t.call(this,r,Z)}:Z;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function ut(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function be(e,t,n){if(!t)return e;const r=n&&n.encode||ut,o=n&&n.serialize;let i;if(o?i=o(t,n):i=a.isURLSearchParams(t)?t.toString():new v(t,n).toString(r),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class ee{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}var Re={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ct=typeof URLSearchParams<"u"?URLSearchParams:v,lt=FormData;const ft=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})();var S={isBrowser:!0,classes:{URLSearchParams:ct,FormData:lt,Blob},isStandardBrowserEnv:ft,protocols:["http","https","file","blob","url","data"]};function dt(e,t){return I(e,new S.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return S.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function ht(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function pt(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Se(e){function t(n,r,o,i){let s=n[i++];const c=Number.isFinite(+s),f=i>=n.length;return s=!s&&a.isArray(o)?o.length:s,f?(a.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!c):((!o[s]||!a.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&a.isArray(o[s])&&(o[s]=pt(o[s])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(ht(r),o,n,0)}),n}return null}function mt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new p("Request failed with status code "+n.status,[p.ERR_BAD_REQUEST,p.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}var Et=S.isStandardBrowserEnv?function(){return{write:function(n,r,o,i,s,c){const f=[];f.push(n+"="+encodeURIComponent(r)),a.isNumber(o)&&f.push("expires="+new Date(o).toGMTString()),a.isString(i)&&f.push("path="+i),a.isString(s)&&f.push("domain="+s),c===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function wt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function yt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Oe(e,t){return e&&!wt(t)?yt(e,t):t}var bt=S.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let s=i;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(s){const c=a.isString(s)?o(s):s;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function B(e,t,n){p.call(this,e??"canceled",p.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(B,p,{__CANCEL__:!0});function Rt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}const St=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Ot=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&St[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t};const te=Symbol("internals"),Ae=Symbol("defaults");function D(e){return e&&String(e).trim().toLowerCase()}function j(e){return e===!1||e==null?e:a.isArray(e)?e.map(j):String(e)}function At(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function ne(e,t,n,r){if(a.isFunction(r))return r.call(this,t,n);if(!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Tt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function xt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}function F(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}function b(e,t){e&&this.set(e),this[Ae]=t||null}Object.assign(b.prototype,{set:function(e,t,n){const r=this;function o(i,s,c){const f=D(s);if(!f)throw new Error("header name must be a non-empty string");const u=F(r,f);u&&c!==!0&&(r[u]===!1||c===!1)||(r[u||s]=j(i))}return a.isPlainObject(e)?a.forEach(e,(i,s)=>{o(i,s,t)}):o(t,e,n),this},get:function(e,t){if(e=D(e),!e)return;const n=F(this,e);if(n){const r=this[n];if(!t)return r;if(t===!0)return At(r);if(a.isFunction(t))return t.call(this,r,n);if(a.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}},has:function(e,t){if(e=D(e),e){const n=F(this,e);return!!(n&&(!t||ne(this,this[n],n,t)))}return!1},delete:function(e,t){const n=this;let r=!1;function o(i){if(i=D(i),i){const s=F(n,i);s&&(!t||ne(n,n[s],s,t))&&(delete n[s],r=!0)}}return a.isArray(e)?e.forEach(o):o(e),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(e){const t=this,n={};return a.forEach(this,(r,o)=>{const i=F(n,o);if(i){t[i]=j(r),delete t[o];return}const s=e?Tt(o):String(o).trim();s!==o&&delete t[o],t[s]=j(r),n[s]=!0}),this},toJSON:function(e){const t=Object.create(null);return a.forEach(Object.assign({},this[Ae]||null,this),(n,r)=>{n==null||n===!1||(t[r]=e&&a.isArray(n)?n.join(", "):n)}),t}});Object.assign(b,{from:function(e){return a.isString(e)?new this(Ot(e)):e instanceof this?e:new this(e)},accessor:function(e){const n=(this[te]=this[te]={accessors:{}}).accessors,r=this.prototype;function o(i){const s=D(i);n[s]||(xt(r,i),n[s]=!0)}return a.isArray(e)?e.forEach(o):o(e),this}});b.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);a.freezeMethods(b.prototype);a.freezeMethods(b);function Nt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(f){const u=Date.now(),d=r[i];s||(s=u),n[o]=f,r[o]=u;let E=i,w=0;for(;E!==o;)w+=n[E++],E=E%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-s<t)return;const h=d&&u-d;return h?Math.round(w*1e3/h):void 0}}function re(e,t){let n=0;const r=Nt(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,c=i-n,f=r(c),u=i<=s;n=i;const d={loaded:i,total:s,progress:s?i/s:void 0,bytes:c,rate:f||void 0,estimated:f&&s&&u?(s-i)/f:void 0};d[t?"download":"upload"]=!0,e(d)}}function se(e){return new Promise(function(n,r){let o=e.data;const i=b.from(e.headers).normalize(),s=e.responseType;let c;function f(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}a.isFormData(o)&&S.isStandardBrowserEnv&&i.setContentType(!1);let u=new XMLHttpRequest;if(e.auth){const h=e.auth.username||"",l=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(h+":"+l))}const d=Oe(e.baseURL,e.url);u.open(e.method.toUpperCase(),be(d,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function E(){if(!u)return;const h=b.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),m={data:!s||s==="text"||s==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:h,config:e,request:u};mt(function(R){n(R),f()},function(R){r(R),f()},m),u=null}if("onloadend"in u?u.onloadend=E:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(E)},u.onabort=function(){!u||(r(new p("Request aborted",p.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new p("Network Error",p.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let l=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const m=e.transitional||Re;e.timeoutErrorMessage&&(l=e.timeoutErrorMessage),r(new p(l,m.clarifyTimeoutError?p.ETIMEDOUT:p.ECONNABORTED,e,u)),u=null},S.isStandardBrowserEnv){const h=(e.withCredentials||bt(d))&&e.xsrfCookieName&&Et.read(e.xsrfCookieName);h&&i.set(e.xsrfHeaderName,h)}o===void 0&&i.setContentType(null),"setRequestHeader"in u&&a.forEach(i.toJSON(),function(l,m){u.setRequestHeader(m,l)}),a.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),s&&s!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",re(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",re(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=h=>{!u||(r(!h||h.type?new B(null,e,u):h),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const w=Rt(d);if(w&&S.protocols.indexOf(w)===-1){r(new p("Unsupported protocol "+w+":",p.ERR_BAD_REQUEST,e));return}u.send(o||null)})}const oe={http:se,xhr:se};var ie={getAdapter:e=>{if(a.isString(e)){const t=oe[e];if(!e)throw Error(a.hasOwnProp(e)?`Adapter '${e}' is not available in the build`:`Can not resolve adapter '${e}'`);return t}if(!a.isFunction(e))throw new TypeError("adapter is not a function");return e},adapters:oe};const Pt={"Content-Type":"application/x-www-form-urlencoded"};function Ct(){let e;return typeof XMLHttpRequest<"u"?e=ie.getAdapter("xhr"):typeof process<"u"&&a.kindOf(process)==="process"&&(e=ie.getAdapter("http")),e}function Ft(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const C={transitional:Re,adapter:Ct(),transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(Se(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return dt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return I(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),Ft(t)):t}],transformResponse:[function(t){const n=this.transitional||C.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(c){if(s)throw c.name==="SyntaxError"?p.from(c,p.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){C.headers[t]={}});a.forEach(["post","put","patch"],function(t){C.headers[t]=a.merge(Pt)});function H(e,t){const n=this||C,r=t||n,o=b.from(r.headers);let i=r.data;return a.forEach(e,function(c){i=c.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function Te(e){return!!(e&&e.__CANCEL__)}function z(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new B}function ae(e){return z(e),e.headers=b.from(e.headers),e.data=H.call(e,e.transformRequest),(e.adapter||C.adapter)(e).then(function(r){return z(e),r.data=H.call(e,e.transformResponse,r),r.headers=b.from(r.headers),r},function(r){return Te(r)||(z(e),r&&r.response&&(r.response.data=H.call(e,e.transformResponse,r.response),r.response.headers=b.from(r.response.headers))),Promise.reject(r)})}function g(e,t){t=t||{};const n={};function r(u,d){return a.isPlainObject(u)&&a.isPlainObject(d)?a.merge(u,d):a.isPlainObject(d)?a.merge({},d):a.isArray(d)?d.slice():d}function o(u){if(a.isUndefined(t[u])){if(!a.isUndefined(e[u]))return r(void 0,e[u])}else return r(e[u],t[u])}function i(u){if(!a.isUndefined(t[u]))return r(void 0,t[u])}function s(u){if(a.isUndefined(t[u])){if(!a.isUndefined(e[u]))return r(void 0,e[u])}else return r(void 0,t[u])}function c(u){if(u in t)return r(e[u],t[u]);if(u in e)return r(void 0,e[u])}const f={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:c};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(d){const E=f[d]||o,w=E(d);a.isUndefined(w)&&E!==c||(n[d]=w)}),n}const xe="1.1.3",X={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{X[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ue={};X.transitional=function(t,n,r){function o(i,s){return"[Axios v"+xe+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,c)=>{if(t===!1)throw new p(o(s," has been removed"+(n?" in "+n:"")),p.ERR_DEPRECATED);return n&&!ue[s]&&(ue[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,c):!0}};function Dt(e,t,n){if(typeof e!="object")throw new p("options must be an object",p.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const c=e[i],f=c===void 0||s(c,i,e);if(f!==!0)throw new p("option "+i+" must be "+f,p.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new p("Unknown option "+i,p.ERR_BAD_OPTION)}}var $={assertOptions:Dt,validators:X};const A=$.validators;class x{constructor(t){this.defaults=t,this.interceptors={request:new ee,response:new ee}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=g(this.defaults,n);const{transitional:r,paramsSerializer:o}=n;r!==void 0&&$.assertOptions(r,{silentJSONParsing:A.transitional(A.boolean),forcedJSONParsing:A.transitional(A.boolean),clarifyTimeoutError:A.transitional(A.boolean)},!1),o!==void 0&&$.assertOptions(o,{encode:A.function,serialize:A.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();const i=n.headers&&a.merge(n.headers.common,n.headers[n.method]);i&&a.forEach(["delete","get","head","post","put","patch","common"],function(l){delete n.headers[l]}),n.headers=new b(n.headers,i);const s=[];let c=!0;this.interceptors.request.forEach(function(l){typeof l.runWhen=="function"&&l.runWhen(n)===!1||(c=c&&l.synchronous,s.unshift(l.fulfilled,l.rejected))});const f=[];this.interceptors.response.forEach(function(l){f.push(l.fulfilled,l.rejected)});let u,d=0,E;if(!c){const h=[ae.bind(this),void 0];for(h.unshift.apply(h,s),h.push.apply(h,f),E=h.length,u=Promise.resolve(n);d<E;)u=u.then(h[d++],h[d++]);return u}E=s.length;let w=n;for(d=0;d<E;){const h=s[d++],l=s[d++];try{w=h(w)}catch(m){l.call(this,m);break}}try{u=ae.call(this,w)}catch(h){return Promise.reject(h)}for(d=0,E=f.length;d<E;)u=u.then(f[d++],f[d++]);return u}getUri(t){t=g(this.defaults,t);const n=Oe(t.baseURL,t.url);return be(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){x.prototype[t]=function(n,r){return this.request(g(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,c){return this.request(g(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}x.prototype[t]=n(),x.prototype[t+"Form"]=n(!0)});class Q{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(c=>{r.subscribe(c),i=c}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,c){r.reason||(r.reason=new B(i,s,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Q(function(o){t=o}),cancel:t}}}function gt(e){return function(n){return e.apply(null,n)}}function _t(e){return a.isObject(e)&&e.isAxiosError===!0}function Ne(e){const t=new x(e),n=ce(x.prototype.request,t);return a.extend(n,x.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Ne(g(e,o))},n}const y=Ne(C);y.Axios=x;y.CanceledError=B;y.CancelToken=Q;y.isCancel=Te;y.VERSION=xe;y.toFormData=I;y.AxiosError=p;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=gt;y.isAxiosError=_t;y.formToJSON=e=>Se(a.isHTMLForm(e)?new FormData(e):e);var Pe=y;const Bt=Pe.create({baseURL:"http://127.0.0.1:5000"});var Ut=Fe(({app:e})=>{e.config.globalProperties.$axios=Pe,e.config.globalProperties.$api=Bt});export{Bt as api,Ut as default};
