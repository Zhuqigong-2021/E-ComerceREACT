import{s as o,u,j as a,a as i,r as l,b as x}from"./index.e021228d.js";import{c as f,a as b,l as m,L as w,b as y,d as v,g as k}from"./create-visual-element.0f1271b2.js";const j=o.div`
  display: flex;

  flex: 1;
  justify-content: center;
  padding: 0 4rem;

  align-items: stretch;
  @media (max-width: 500px) {
    padding: 0 2rem;
  }
`,h=o.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-color: hsl(120, 5%, 30%);
  background-image: ${({imageUrl:t})=>`url(${t})`};

  background-blend-mode: overlay;
  &:hover {
    background-color: hsl(120, 5%, 60%);
  }
`,g=o.div`
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

    ${h} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    ${g} {
      opacity: 0.9;
    }
  }

  @media screen and (max-width: 800px) {
    height: 200px;
  }
`,z=({category:t})=>{const{imageUrl:e,title:s,route:c}=t,r=u();return a(C,{onClick:()=>r(c),children:[i(h,{imageUrl:e}),a(g,{children:[i("h2",{children:s}),i("p",{children:"Shop Now"})]})]})},N=f(b);function U({children:t,features:e,strict:s=!1}){const[,c]=l.exports.useState(!p(e)),r=l.exports.useRef(void 0);if(!p(e)){const{renderer:n,...d}=e;r.current=n,m(d)}return l.exports.useEffect(()=>{p(e)&&e().then(({renderer:n,...d})=>{m(d),r.current=n,c(!0)})},[]),i(w.Provider,{value:{renderer:r.current,strict:s},children:t})}function p(t){return typeof t=="function"}const D={renderer:y,...v,...k},L=o.div`
  position: relative;
  margin-top: 4rem;

  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .greeting {
    position: absolute;
    top: -2rem;
    color: black;
    text-transform: uppercase;
    font-size: 15px;
  }

  @media (max-width: 500px) {
    margin-top: 2rem;
    flex-direction: column;
  }
  @media (orientation: landscape) {
    margin-top: 1rem;
  }
  @media (max-width: 580px) &(min-width:500px) {
    margin-top: 0rem;
  }
`,H=[{id:1,title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",route:"shop/hats"},{id:2,title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",route:"shop/jackets"},{id:3,title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",route:"shop/sneakers"},{id:4,title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",route:"shop/womens"},{id:5,title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",route:"shop/mens"}],B=()=>{const{currentUser:t}=x(e=>e.user);return a(L,{className:"noselect",children:[H.map(e=>i(z,{category:e},e.id)),t?i(U,{features:D,children:a(N.div,{initial:{x:-100},animate:{x:0},transition:{duration:2,ease:[.5,.71,1,1.5]},className:"greeting",children:["Welcome ",t.displayName," !"]})}):""]})},M=()=>i(j,{children:i(B,{})});export{M as default};
