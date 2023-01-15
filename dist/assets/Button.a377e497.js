import{s as r,S as b,a}from"./index.e5e9838a.js";const t=r.button`
  padding: 0.5rem 1rem;

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
`,c=r(t)`
  background-color: black;
  width: 100%;
  box-shadow: 0 2px 2px rgb(0, 0, 0, 0.3);

  &:hover {
    background-color: rgb(0, 0, 0, 0.9);
    box-shadow: 0 4px 4px rgb(0, 0, 0, 0.3);
    cursor: pointer;
  }
  @media (max-width: 300px) {
    font-size: 10px;
  } ;
`,x=r(t)`
  background-color: white;
  color: black;
  border: 1px solid black;
  box-shadow: 0 2px 2px rgb(0, 0, 0, 0.3);

  &:hover {
    background-color: rgb(0, 0, 0);
    color: white;
    box-shadow: 0 4px 4px rgb(0, 0, 0, 0.3);
    cursor: pointer;
  }
  @media (max-width: 300px) {
    font-size: 10px;
  } ;
`,p=r(b)`
  width: 15px;
  height: 15px;
`,o={base:"base",google:"google-sign-in",inverted:"inverted"},g=(e=o.base)=>({[o.base]:t,[o.google]:c,[o.inverted]:x})[e],u=({children:e,buttonType:s,isLoading:n,...d})=>{const i=g(s);return a(i,{disabled:n,...d,children:n?a(p,{}):e})};export{t as B,c as G,x as I,u as a,o as b};
