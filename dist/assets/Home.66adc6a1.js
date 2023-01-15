import{s as o,u,j as a,a as r,r as l,b as x}from"./index.e5e9838a.js";import{c as f,a as b,l as m,L as w,b as y,d as v,g as k}from"./create-visual-element.a1590732.js";const j=o.div`
  display: flex;

  flex: 1;
  justify-content: center;
  padding: 0 4rem;

  align-items: stretch;
  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`,g=o.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-color: hsl(120, 5%, 30%);
  background-image: ${({imageUrl:t})=>`url(${t})`};
  object-fit: cover;
  background-blend-mode: overlay;
  &:hover {
    background-color: hsl(120, 5%, 60%);
  }
`,h=o.div`
  height: 90px;

  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // border: 1px solid white;
  // background-color: white;
  opacity: 1;
  position: absolute;
  color: white;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;

    color: white;
    text-transform: uppercase;
    &:hover {
      color: black;
    }
  }

  p {
    margin-top: 1.5rem;
    font-weight: lighter;
    font-size: 16px;
    color: white;
    border: 1px solid white;
    padding: 0.2em 0.5em;
    border-radius: 2px;
    &:hover {
      background-color: black;
      border: none;
    }
  }
`,C=o.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 7.5px 15px;
  overflow: hidden;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;

    ${g} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    ${h} {
      opacity: 0.9;
    }
  }

  @media screen and (max-width: 800px) {
    height: 200px;
  }
`,z=({category:t})=>{const{imageUrl:e,title:s,route:c}=t,i=u();return a(C,{onClick:()=>i(c),children:[r(g,{imageUrl:e}),a(h,{children:[r("h2",{children:s}),r("p",{children:"Shop Now"})]})]})},N=f(b);function U({children:t,features:e,strict:s=!1}){const[,c]=l.exports.useState(!p(e)),i=l.exports.useRef(void 0);if(!p(e)){const{renderer:n,...d}=e;i.current=n,m(d)}return l.exports.useEffect(()=>{p(e)&&e().then(({renderer:n,...d})=>{m(d),i.current=n,c(!0)})},[]),r(w.Provider,{value:{renderer:i.current,strict:s},children:t})}function p(t){return typeof t=="function"}const D={renderer:y,...v,...k},L=o.div`
  position: relative;
  margin-top: 4rem;
  padding-top: 8rem;

  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .greeting {
    position: absolute;
    top: 4rem;
    color: black;
    text-transform: uppercase;
    font-size: 15px;
  }

  @media (max-width: 500px) {
    margin-top: 2rem;
    padding-top: 5rem;
    flex-direction: column;
    .greeting {
      top: 3.5rem;
    }
  }
  @media (orientation: landscape) {
    margin-top: 1rem;
  }
  @media only screen and (max-width: 580px) and (min-width: 501px) {
    margin-top: 0rem;
    padding-top: 6rem;
    .greeting {
      top: 4rem;
    }
  }
`,H=[{id:1,title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",route:"shop/hats"},{id:2,title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",route:"shop/jackets"},{id:3,title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",route:"shop/sneakers"},{id:4,title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",route:"shop/womens"},{id:5,title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",route:"shop/mens"}],B=()=>{const{currentUser:t}=x(e=>e.user);return a(L,{className:"noselect",children:[H.map(e=>r(z,{category:e},e.id)),t?r(U,{features:D,children:a(N.div,{initial:{x:-100},animate:{x:0},transition:{duration:2,ease:[.5,.71,1,1.5]},className:"greeting",children:["Welcome ",t.displayName," !"]})}):""]})},M=()=>r(j,{children:r(B,{})});export{M as default};
