import{s as l,S as p,a as s,R as u,j as v}from"./index.69fccaa7.js";const d=l.button`
  padding: 0.5rem 1rem;
  text-decoration: none;
  // background-color: #059669;
  background-color: #00120b;
  border: none;
  outline: none;
  color: white;
  border-radius: 2px;
  align-items: center;
  &:hover {
    background-color: #047857;
    box-shadow: 0 2px 2px rgb(0, 0, 0, 0.3);
    cursor: pointer;
  }
  @media (max-width: 300px) {
    font-size: 10px;
  } ;
`,w=l(d)`
  background-color: black;
  width: 100%;
  box-shadow: 0 2px 2px rgb(0, 0, 0, 0.3);
  text-decoration: none;
  &:hover {
    background-color: rgb(0, 0, 0, 0.9);
    box-shadow: 0 4px 4px rgb(0, 0, 0, 0.3);
    cursor: pointer;
  }
  @media (max-width: 300px) {
    font-size: 10px;
  } ;
`,y=l(d)`
  background-color: white;
  color: black;
  border: 1px solid black;
  box-shadow: 0 2px 2px rgb(0, 0, 0, 0.3);
  text-decoration: none;
  &:hover {
    background-color: rgb(0, 0, 0);
    color: white;
    box-shadow: 0 4px 4px rgb(0, 0, 0, 0.3);
    cursor: pointer;
  }
  @media (max-width: 300px) {
    font-size: 10px;
  } ;
`,k=l(p)`
  width: 15px;
  height: 15px;
`,c={base:"base",google:"google-sign-in",inverted:"inverted"},O=(e=c.base)=>({[c.base]:d,[c.google]:w,[c.inverted]:y})[e],_=({children:e,buttonType:r,isLoading:t,...o})=>{const n=O(r);return s(n,{disabled:t,...o,children:t?s(k,{}):e})};var h={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},x=u.createContext&&u.createContext(h),a=globalThis&&globalThis.__assign||function(){return a=Object.assign||function(e){for(var r,t=1,o=arguments.length;t<o;t++){r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)},B=globalThis&&globalThis.__rest||function(e,r){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)r.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(t[o[n]]=e[o[n]]);return t};function m(e){return e&&e.map(function(r,t){return u.createElement(r.tag,a({key:t},r.attr),m(r.child))})}function j(e){return function(r){return s(C,{...a({attr:a({},e.attr)},r),children:m(e.child)})}}function C(e){var r=function(t){var o=e.attr,n=e.size,b=e.title,f=B(e,["attr","size","title"]),g=n||t.size||"1em",i;return t.className&&(i=t.className),e.className&&(i=(i?i+" ":"")+e.className),v("svg",{...a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,f,{className:i,style:a(a({color:e.color||t.color},t.style),e.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),children:[b&&s("title",{children:b}),e.children]})};return x!==void 0?s(x.Consumer,{children:function(t){return r(t)}}):r(h)}export{_ as B,j as G,y as I,d as a,w as b,c};
