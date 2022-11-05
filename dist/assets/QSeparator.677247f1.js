import{c,a as t,h as u,i as g,g as h}from"./index.cb010043.js";import{u as $,a as x}from"./use-dark.8a438e2a.js";var _=c({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:s}){const a=t(()=>parseInt(e.lines,10)),i=t(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),n=t(()=>e.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>u("div",{style:n.value,class:i.value},g(s.default))}});const f={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},r={xs:2,sm:4,md:8,lg:16,xl:24};var k=c({name:"QSeparator",props:{...$,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const s=h(),a=x(e,s.proxy.$q),i=t(()=>e.vertical===!0?"vertical":"horizontal"),n=t(()=>` q-separator--${i.value}`),v=t(()=>e.inset!==!1?`${n.value}-${f[e.inset]}`:""),m=t(()=>`q-separator${n.value}${v.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(a.value===!0?" q-separator--dark":"")),d=t(()=>{const l={};if(e.size!==void 0&&(l[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const b=e.spaced===!0?`${r.md}px`:e.spaced in r?`${r[e.spaced]}px`:e.spaced,o=e.vertical===!0?["Left","Right"]:["Top","Bottom"];l[`margin${o[0]}`]=l[`margin${o[1]}`]=b}return l});return()=>u("hr",{class:m.value,style:d.value,"aria-orientation":i.value})}});export{_ as Q,k as a};
