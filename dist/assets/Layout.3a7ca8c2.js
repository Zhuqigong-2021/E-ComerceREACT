import{s as i,c as p,b as c,d as h,e as f,r as d,j as r,a as t,f as m,g as x,u as b,L as l,F as v,h as C,O as w}from"./index.e5e9838a.js";import{B as y,G as _,I as k,a as g,b as I}from"./Button.a377e497.js";import{G as u}from"./iconBase.c564e75e.js";function N(e){return u({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"}}]})(e)}const O=i.div`
  &.bounce {
    animation: bounce 1s ease-in-out 1 forwards;
    transform-origin: center center;
    @keyframes bounce {
      from {
        transform: rotate(15deg);
        color: #047857;
      }
      50% {
        transform: rotate(-15deg);
        color: red;
      }
      to {
        transform: rotate(0deg);
        color: #047857;
      }
    }
  }
  &.bounce_again {
    animation: bounceAgain 1s ease-in-out 1 forwards;
    transform-origin: center center;
    @keyframes bounceAgain {
      from {
        transform: rotate(15deg);
        color: #047857;
      }
      50% {
        transform: rotate(-15deg);
        color: red;
      }
      to {
        transform: rotate(0deg);
        color: #047857;
      }
    }
  }
  position: relative;

  width: 20px;
  height: 20px;
  align-items: center;
  display: inline-block;
  margin-left: 2rem;

  .shopping_bag {
    position: absolute;
    transform: scale(2.3);
    transform-origin: center;
    color: #059669;
  }
  .count {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 15px;
    transform: translate(-70%, -30%);
  }
  &:hover {
    cursor: pointer;
  }
`,B=()=>{const e=p(),n=c(h),a=c(f),[s,o]=d.exports.useState(!1);return d.exports.useEffect(()=>{o(!s)},[a]),r(O,{className:s?"bounce":"bounce_again",children:[t(N,{className:"shopping_bag",onClick:()=>e(m(!n))}),t("span",{className:"count",onClick:()=>e(m(!n)),children:a})]})},S=i.div`
  // border: 1px solid black;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
  display: flex;
  gap: 0.5rem;
  height: 80px;
  margin-top: 10px;
  margin-bottom: 15px;
  width: 100%;
`,A=i.div`
  display: flex;
  height: 100%;
  width: 40px;
  margin-right: 10px;
`,L=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,V=({cartItem:e})=>{const{name:n,quantity:a,price:s,imageUrl:o}=e;return r(S,{children:[t(A,{children:t("img",{src:o,alt:n,width:"100%"})}),r(L,{children:[t("span",{children:n}),r("span",{children:[a," * $",s]})]})]})},z=i.div`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  top: 4.5rem;
  right: 4rem;
  width: 13rem;
  height: 20rem;
  background-color: white;
  @media (max-width: 500px) {
    right: 2rem;
  }
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  color: black;
  align-items: left;
  padding: 1rem;
  ${y},
  ${_},
  ${k} {
    margin-top: 2.5rem;

    padding: 0.5rem 1rem;
  }
`,H=i.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100%;
`,j=i.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 250px;
`,T=()=>{const e=p(),n=c(o=>x(o)),a=b(),s=()=>{a("/checkout"),e(m(!1))};return r(z,{children:[t(j,{children:n.length?n.map(o=>t(V,{cartItem:o},o.id)):t(H,{children:"Add something to your Cart"})}),t(g,{children:"GO TO CHECKOUT",buttonType:I.google,onClick:s})]})},G=i.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: rgba(247, 255, 238, 0.7);
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  color: white;
  padding: 1rem 4rem;
  align-items: center;

  .logo {
    text-decoration: none;
    // color: #047857;
    color: #00120b;

    .lg {
      transform: scale(2);
      transform-origin: center;
    }
  }
  .nav__link {
    display: flex;
    align-items: center;
    color: white;
  }
  .nav__item {
    text-decoration: none;
    list-style-type: none;
    margin-left: 2rem;
    // color: #047857;
    color: #00120b;
    font-weight: 600;

    text-transform: lowercase;
    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 500px) {
    padding: 2rem 2rem 0.5rem 2rem;
  }
  @media (max-width: 580px) {
    margin-bottom: 0rem;
  }
`;function U(e){return u({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"}}]})(e)}const D=()=>{const e=p(),{currentUser:n}=c(o=>o.user),a=c(o=>h(o));return r(G,{children:[t(l,{to:"/",className:"logo","aria-label":"Redirect you to the home page",children:t(U,{className:"lg",alt:"shopping_logo"})}),r("div",{className:"nav__link",children:[t(l,{to:"/shop",className:"nav__item",children:"Shop"}),n?r(v,{children:[t(l,{to:"/",className:"nav__item",children:t(g,{children:"sign out",onClick:()=>{e(C())}})}),t(B,{className:"nav__item"})]}):t(l,{to:"/signup",className:"nav__item",children:t(g,{children:"sign up"})})]}),n&&a&&t(T,{})]})},F=()=>r(d.exports.Fragment,{children:[t(D,{}),t(w,{})]});export{F as default};
