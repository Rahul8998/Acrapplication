let u=[],r=[];function i(t){r=r.filter(e=>e!==t)}function s(t){i(t),r.push(t)}function c(t){i(t),r.length===0&&u.length>0&&(u[u.length-1](),u=[])}function f(t){r.length===0?t():u.push(t)}function h(t){u=u.filter(e=>e!==t)}const l=["B","KB","MB","GB","TB","PB"];function F(t){let e=0;for(;parseInt(t,10)>=1024&&e<l.length-1;)t/=1024,++e;return`${t.toFixed(1)}${l[e]}`}function g(t,e,n){return n<=e?e:Math.min(n,Math.max(e,t))}function d(t,e,n){if(n<=e)return e;const a=n-e+1;let o=e+(t-e)%a;return o<e&&(o=a+o),o===0?0:o}function p(t,e=2,n="0"){if(t==null)return t;const a=""+t;return a.length>=e?a:new Array(e-a.length+1).join(n)+a}export{s as a,g as b,f as c,h as d,F as h,d as n,p,c as r};