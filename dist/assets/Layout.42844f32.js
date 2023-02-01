import{s as i,b as p,c,e as u,f as x,r as d,j as a,a as e,g,h as b,u as w,L as l,F as v,d as C,i as k,O as y}from"./index.69fccaa7.js";import{G as f,a as _,b as N,I,B as h,c as S}from"./iconBase.8a0b8599.js";function O(t){return f({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"}}]})(t)}const B=i.div`
  &.bounce {
    animation: bounce 1s ease-in-out 1 forwards;
    transform-origin: center center;
    @keyframes bounce {
      from {
        transform: rotate(15deg);
        // color: #047857;
        color: white;
      }
      50% {
        transform: rotate(-15deg);
        color: red;
      }
      to {
        transform: rotate(0deg);
        // color: #047857;
        color: white;
      }
    }
  }
  &.bounce_again {
    animation: bounceAgain 1s ease-in-out 1 forwards;
    transform-origin: center center;
    @keyframes bounceAgain {
      from {
        transform: rotate(15deg);
        // color: #047857;
        color: white;
      }
      50% {
        transform: rotate(-15deg);
        color: red;
      }
      to {
        transform: rotate(0deg);
        // color: #047857;
        color: white;
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
    // color: #059669;
    color: white;
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
`,L=()=>{const t=p(),o=c(u),r=c(x),[s,n]=d.exports.useState(!1);return d.exports.useEffect(()=>{n(!s)},[r]),a(B,{className:s?"bounce":"bounce_again",children:[e(O,{className:"shopping_bag",onClick:()=>t(g(!o))}),e("span",{className:"count",onClick:()=>t(g(!o)),children:r})]})},j=i.div`
  // border: 1px solid black;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.8);
  display: flex;
  gap: 0.5rem;
  height: 80px;
  margin-top: 10px;
  margin-bottom: 15px;
  width: 100%;
`,z=i.div`
  display: flex;
  height: 100%;
  width: 40px;
  margin-right: 10px;
`,E=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,T=({cartItem:t})=>{const{name:o,quantity:r,price:s,imageUrl:n}=t;return a(j,{children:[e(z,{children:e("img",{src:n,alt:o,width:"100%"})}),a(E,{children:[e("span",{children:o}),a("span",{children:[r," * $",s]})]})]})},U=i.div`
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
  ${_},
  ${N},
  ${I} {
    margin-top: 2.5rem;

    padding: 0.5rem 1rem;
  }
`,$=i.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100%;
`,D=i.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 250px;
`,G=()=>{const t=p(),o=c(n=>b(n)),r=w(),s=()=>{r("/checkout"),t(g(!1))};return a(U,{children:[e(D,{children:o.length?o.map(n=>e(T,{cartItem:n},n.id)):e($,{children:"Add something to your Cart"})}),e(h,{children:"GO TO CHECKOUT",buttonType:S.google,onClick:s})]})},M=i.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: 92%;
  // background-color: rgba(247, 255, 238, 0.7);
  // background-color: #064e3b;
  // background-image: linear-gradient(
  //   to bottom,
  //   rgba(0, 0, 0, 1) 80%,
  //   rgba(0, 0, 0, 0.7),
  //   rgba(0, 0, 0, 0.5),
  //   transparent
  // );
  background-color: ${({background:t})=>`${t}`};
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  color: white;
  padding: 1rem 3rem;
  align-items: center;

  .logo {
    position: relative;
    text-decoration: none;
    // color: #047857;
    // color: #00120b;
    color: white;

    .lg {
      transform: scale(2);
      transform-origin: center;
    }
    .qg {
      // color: #6dd6c4;
      position: absolute;
      top: 1.2rem;
      margin-left: 0.7rem;
      color: white;
      font-weight: 600;
      // text-shadow: 0px 0px 5px black;
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
    // color: #00120b;
    color: white;
    font-weight: 600;

    text-transform: lowercase;
    &:hover {
      cursor: pointer;
    }
  }
  .nav_item,
  .phone {
    display: none;
    @media (max-width: 450px) {
      display: block;
    }
  }
  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    padding: 2rem 2rem 0.5rem 2rem;
  }
  @media (max-width: 580px) {
    margin-bottom: 0rem;
  }
  @media (max-width: 350px) {
    padding: 0.5rem 1rem;
  }
`;function A(t){return f({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M14.943 14.596c.094 0 .3.095.576.462a57.71 57.71 0 0 1 2.165 3.23c-1.627.646-3.595 1.01-5.684 1.01-.988 0-1.948-.097-2.856-.26 1.417-1.507 2.918-2.856 4.703-3.98.555-.278.819-.462 1.096-.462zm2.424-6.202c2.858 1.055 4.788 2.906 4.788 4.998 0 1.415-.881 2.73-2.338 3.755-.385-2.26-.898-4.477-1.644-6.616a38.69 38.69 0 0 0-.808-2.136zM7.73 8.077a38.965 38.965 0 0 0-1.096 3.288 56.361 56.361 0 0 0-1.327 6.404c-2.11-1.1-3.462-2.69-3.462-4.385.001-2.274 2.44-4.337 5.885-5.307zM12.463.086c-.095 0-.08-.007-.174.086a25.88 25.88 0 0 0-3.663 5.77C3.631 6.89 0 9.887 0 13.385c0 2.588 1.991 4.903 5.048 6.317a64.85 64.85 0 0 0-.347 4.01c0 .094.108.202.203.202h.086c.094 0 .08.007.173-.086a79.757 79.757 0 0 1 2.538-3.203c1.338.336 2.78.52 4.299.52 2.455 0 4.738-.48 6.635-1.298.46.772.908 1.555 1.385 2.395 0 .094.194.086.288.086a.175.175 0 0 0 .173-.173 69.569 69.569 0 0 0-.346-3.088c2.369-1.42 3.865-3.45 3.865-5.682 0-3.252-3.156-6.072-7.615-7.212a33.526 33.526 0 0 0-3.75-6c0-.094-.078-.087-.172-.087z"}}]})(t)}const H=({background:t})=>{const o=p(),{currentUser:r}=c(m=>m.user),s=c(m=>u(m));return a(M,{background:t,children:[a(l,{to:"/",className:"logo","aria-label":"Redirect you to the home page",children:[e(A,{className:"lg",alt:"shopping_logo"}),e("div",{className:"qg",children:"Q.Z"})]}),a("div",{className:"nav__link",children:[e(l,{to:"/shop",className:"nav__item",children:"Shop"}),r?e(L,{className:"nav__item "}):"",r?e(v,{children:e(l,{to:"/",className:"nav__item phone",children:e(h,{children:"sign out",onClick:()=>{o(C())}})})}):e(l,{to:"/signup",className:"nav__item phone",children:e(h,{children:"sign up"})})]}),r&&s&&e(G,{})]})},q=i.div`
  object-fit: 'cover';
  background-repeat: no-repeat;
  min-height: 100vh;
`,Y=()=>{const[t,o]=d.exports.useState(!1);d.exports.useEffect(()=>(window.addEventListener("scroll",r),()=>removeEventListener("scroll",r)),[]);const r=()=>{window.scrollY>0&&o(!0),window.scrollY===0&&o(!1)};return t},K=()=>{const t=k(),o=Y(),r=t.pathname==="/"?o?"black":"transparent":"black";return a(q,{children:[e(H,{background:r}),e(y,{})]})};export{K as default};
