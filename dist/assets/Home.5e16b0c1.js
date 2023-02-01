import{s as r,u,j as d,a as t,b as y,c as v,L as w,d as j,r as p}from"./index.69fccaa7.js";import{B as f}from"./iconBase.8a0b8599.js";import{B as $,a as B}from"./index.esm.44afc6f1.js";const S=r.div`
  .remote {
    position: absolute;

    top: -50px;
    right: 20%;
    transform: scale(0.5);
    z-index: -10;
  }
  .left {
    position: absolute;
    display: flex;
    align-items: center;
    top: 3rem;
    left: 0;
    color: white;

    height: calc(43%);
    font-size: 40px;

    transform: scale(1);
    z-index: 10;
    padding: 0rem 0.5rem;
    border-radius: 5px;
    &:hover {
      border: none;
      box-shadow: 0px 0px 5px white;
      opacity: 0.9;
    }
    &:active {
      border: 1px solid white;
      box-shadow: 0px 0px 5px white;
      opacity: 0.9;
    }
    @media (max-width: 500px) {
      font-size: 30px;
    }
  }
  .right {
    position: absolute;
    display: flex;
    align-items: center;
    top: 3rem;
    right: 0;
    color: white;

    height: calc(43%);
    font-size: 40px;

    transform: scale(1);
    z-index: 10;
    padding: 0rem 0.5rem;
    border-radius: 5px;
    &:hover {
      border: none;
      box-shadow: 0px 0px 5px white;
      opacity: 0.9;
    }
    &:active {
      border: 1px solid white;
      box-shadow: 0px 0px 5px white;
      opacity: 0.9;
    }
    @media (max-width: 500px) {
      font-size: 30px;
    }
  }
  .frontcard {
    position: fixed;

    height: 50%;
    top: 50vh;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: end;
    justify-content: space-around;
    // flex-direction: column;
    // transform: translateX(-50%);
    width: 100%;

    display: flex;
    padding: 0.5rem;
    flex-wrap: wrap;
    @media (max-width: 450px) {
      width: 100%;
    }
  }
  .collection {
    position: absolute;

    right: 0;
    bottom: 0;
    top: 50vh;
    width: 30%;
    // border: 1px solid red;

    height: 50%;

    min-height: 380px;
    padding: 0.5rem;
    padding-top: 0;
    // padding-bottom: 0rem;
    display: flex;

    flex: 1;
    overflow: scroll;
    display: flex;

    flex-direction: column;
    flex: 1;
    &::-webkit-scrollbar {
      display: none;
    }
    @media (max-width: 450px) {
      display: none;
    }
    @media (max-width: 700px) {
      padding-right: 0;
    }
    @media (max-width: 1200px) {
      height: 49%;
      padding-top: 0;
      padding-bottom: 0rem;
    }
  }
  .signupbtn {
    position: relative;

    background-color: white;
    margin-bottom: 1rem;
    // height: 33%;
    min-height: 80px;
    diplay: flex;
    flex-direction: column;
    padding: 0.5rem;
    font-family: sans-serif;
    @media (max-width: 550px) {
      font-size: 12px;
    }
  }
  .col {
    display: flex;
    flex: 1;
  }
  .btn_front {
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    color: black;
    text-decoration: none !important;
    font-style: none;

    display: flex;
    justify-content: center;

    width: 94%;
    margin: auto;

    border-radius: 5px;
    background-color: orange;

    &:hover {
      opacity: 0.95;
    }
    @media (max-width: 640px) {
      padding: 0.2rem 1rem;
    }
  }

  .slider {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    height: 100%;

    backgournd-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.2)
    );
    z-index: -100;
  }

  position: absolute;
  left: 50%;
  top: 0;
  right: 0;

  bottom: 0;
  transform: translateX(-50%);
  display: flex;

  background: ${({imageUrl:e})=>`url(${e})`},
    ${({str:e})=>`linear-gradient(${e})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  background-blend-mode: overlay;

  flex: 1;
  justify-content: center;
  padding: 0 1.8rem;

  width: 92%;
  height: 100%;
  margin: 0rem, 2rem;
  align-items: strech;
  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    padding: 0 1rem;
    background-color: black;
  }
`,H=r.div`
  position: relative;
  top: 0;
  bottom: 0;

  z-index: 2;
  display: flex;
  flex-direction: column;

  justify-content: center;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
  height: 100%;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;r.div`
  display: flex;

  column-gap: 1rem;
  height: 100%;

  bottom: 1rem;
  transform: ${({slideIndex:e})=>`translateX((${e}-1)*100%) `};

  background: ${({imageUrl:e})=>`url(${e})`},
    ${({str:e})=>`linear-gradient(${e})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  background-blend-mode: overlay;

  flex: 1;
  justify-content: center;
  padding: 0 1.8rem;
  width: 100%;
  margin: 0rem, 2rem;
  align-items: strech;
  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;const k=r.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-color: hsl(120, 5%, 30%);
  background-image: ${({imageUrl:e})=>`url(${e})`};
  object-fit: cover;
  background-blend-mode: overlay;
  &:hover {
    background-color: hsl(120, 5%, 60%);
  }
  border-radius: 3px;
`,N=r.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  opacity: 1;
  position: absolute;
  left: 0;

  h4 {
    font-weight: bold;

    font-size: 12px;

    color: white;
    text-transform: uppercase;
    &:hover {
      color: rgba(255, 255, 254, 1);
    }
    margin: 0;
    padding: 0;
  }

  p {
    // margin-top: 1.5rem;
    font-weight: lighter;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.8);
    // border: 1px solid white;
    // padding: 0.2em 0.5em;
    // border-radius: 2px;
    &:hover {
      // background-color: black;
      border: none;
      color: red;
    }
  }
`,C=r.div`
  height: 90px;

  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  // border: 1px solid white;

  opacity: 1;
  position: absolute;
  color: white;

  // h2 {
  //   font-weight: bold;
  //   margin: 0 6px 0;
  //   font-size: 22px;

  //   color: white;
  //   text-transform: uppercase;
  //   &:hover {
  //     color: black;
  //   }
  // }
  h4 {
    font-weight: bold;

    font-size: 12px;

    color: white;
    text-transform: uppercase;
    &:hover {
      color: rgba(255, 255, 254, 1);
    }
  }

  p {
    // margin-top: 1.5rem;
    font-weight: lighter;
    font-size: 10px;
    color: rgba(255, 255, 255, 0.8);
    // border: 1px solid white;
    // padding: 0.2em 0.5em;
    // border-radius: 2px;
    &:hover {
      // background-color: black;
      border: none;
      color: red;
    }
  }
`,M=r.div`
  text-align: left;
  min-width: 30%;
  height: 56px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: left;

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

    ${k} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    // ${C} {
    //   opacity: 0.9;

    // }
  }

  // @media screen and (max-width: 800px) {
  //   height: 200px;
  // }
`,D=({category:e})=>{const{imageUrl:n,title:a,route:i}=e,c=u();return d(M,{onClick:()=>c(i),children:[t(k,{imageUrl:n}),d(N,{children:[t("h4",{children:a}),t("p",{children:"all you need is right here"})]})]})},U=r.div`
  position: relative;

  border: 1px solid grey;
  padding: 1rem, 1rem;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  h4 {
    margin: 0.5rem 0.5rem;
    font-family: sans-serif;
  }
  .greeting {
    position: absolute;
    top: 4rem;
    // color: black;
    color: white;
    text-transform: uppercase;
    font-size: 15px;
  }

  // @media (max-width: 500px) {
  //   margin-top: 2rem;
  //   padding-top: 5rem;
  //   flex-direction: column;
  //   .greeting {
  //     top: 3.5rem;
  //   }
  // }
  // @media (orientation: landscape) {
  //   margin-top: 1rem;
  // }
  // @media only screen and (max-width: 580px) and (min-width: 501px) {
  //   margin-top: 0rem;
  //   padding-top: 6rem;
  //   .greeting {
  //     top: 4rem;
  //   }
  // }
`,W=[{id:1,title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",route:"shop/hats"},{id:2,title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",route:"shop/jackets"},{id:3,title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",route:"shop/sneakers"}],G=()=>d(U,{className:"noselect",children:[t("h4",{children:"Related collections"}),W.map(e=>t(D,{category:e},e.id))]}),z=r.div`
  display: flex;
  position: relative;
  flex-diretion: column;
  flex: 1;
  width: 100%;
  // height: 100%;
  background-size: cover;
  background-position: center;

  background-image: ${({imageUrl:e})=>`url(${e})`};
  object-fit: cover;
  overflow: hidden;
  &:hover {
    background-color: hsl(120, 5%, 60%);
  }
`,I=r.div`
  position: relative;
  min-width: 15%;
  height: 400px;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  text-align: left;

  justify-content: center;

  background-color: ${({special:e})=>`${e}`};
  // background: ${({imageUrl:e})=>`url(${e})`},
  //   ${({str:e})=>`linear-gradient(${e})`};
  padding: 1rem;
  .signbtn {
    background-color: orange;
  }
  h3 {
    margin-bottom: 0.5rem;
    font-family: sans-serif;
    cursor: default;
  }
  .signbtn {
    margin-bottom: 1rem;
  }
  .seemore {
    display: block;
    // color: #4d7eb0;
    color: #1d4ed8;
    margin-top: 0.5rem;
    // text-decoration: none;
    // &:link,
    // &:visited,
    // &:hover,
    // &:active {
    //   text-decoration: none;
    // }
  }
  .seelink {
    text-decoration: none;
  }

  // margin: 0 7.5px 15px;
  margin: 0rem 0.5rem;
  margin-bottom: 0.5rem;
  overflow: hidden;
  .title {
    display: flex;
    overflow-wrap: break-word;

    // margin-bottom: 2rem;
  }
  .sign {
    margin-bottom: 2rem;
  }

  &:hover {
    cursor: pointer;

    ${z} {
      transform: scale(0.95);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }
  &:last-of-type {
    min-width: 19%;
    flex-grow: 0;
  }
  @media screen and (max-width: 800px) {
    height: 300px;
    .sign {
      margin-top: 4rem;
    }
  }
  @media screen and (max-width: 1200px) {
    min-width: 28%;
    flex-grow: 1;
    &:last-of-type {
      min-width: 99%;
    }
  }
  @media screen and (max-width: 700px) {
    min-width: 100%;
    &:last-of-type {
      min-width: 100%;
    }
  }
`,q=({item:e})=>{const n=u(),a=y(),{currentUser:i}=v(g=>g.user),c=()=>{a(j())},{id:o,title:m,imageUrl:h,route:x}=e;return d(I,{special:o===4?"rgba(255,255,255,0.8)":"white",children:[o===4?i?d("b",{className:"title sign",children:["Welcome ",i.displayName]}):t("b",{className:"title sign",children:"Sign up for your best user experience"}):t("h3",{className:"title noselect",children:m}),o===4?null:t(z,{imageUrl:h,onClick:()=>n(x)}),o===4?i?t(w,{to:"/",children:t(f,{children:"sign out",onClick:c,className:"signbtn"})}):t(w,{to:"/signup",children:t(f,{children:"sign up",className:"signbtn"})}):t("span",{className:"seemore",children:"See more"}),o===4?t(G,{}):""]})},A=r.div`
  width: 100%;
  height: 100%;
  position: relative;
  .styleOverflowStyle {
    overflow: hidden;
    height: 100%;
  }
  .left {
    position: absolute;
    display: flex;
    align-items: center;
    top: 3rem;
    left: 0;
    color: white;

    height: calc(43%);
    font-size: 40px;

    z-index: 10;
    padding: 0rem 0.5rem;
    border-radius: 5px;
    @media (max-width: 500px){
      transform:scale(0.8);
    }
    @media (max-width: 400px){
      transform:scale(0.5);
    }
  }
  .right {
    position: absolute;
    display: flex;
    align-items: center;
    top: 3rem;
    right: 0;
    color: white;

    height: calc(43%);
    font-size: 40px;

    z-index: 10;
    padding: 0rem 0.5rem;
    border-radius: 5px;
    @media (max-width: 500px){
      transform:scale(0.8);
    }
    @media (max-width: 400px){
      transform:scale(0.5);
    }
  }

  .sliderTitle {
    color: white;
    z-index: 20;
    font-size: 40px;
    position: relative;
    font-family: sans-serif;
    top: 20%;
    left: 20%;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 650px) {
      left: 10%;
      font-size: 30px;
    }
    @media (max-width: 500px) {
      left: 0;
      justify-content: center;
      font-size: 28px;
      margin: 0rem 0.5rem;
    }
    @media (max-width: 400px) {
      left: 0;
      justify-content: center;
      font-size: 24px;
      margin: 0rem 0.5rem;
    }
  }
  }
  .substyle {
    color: white;
    z-index: 20;
    font-size: 20px;
    position: relative;
    font-family: sans-serif;
    top: 23%;
    left: 20%;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 650px) {
      left: 10%;
      font-size: 15px;
    }
    @media (max-width: 500px) {
      left: 0;
      justify-content: center;
      font-size: 15px;
      margin: 0rem 0.5rem;
    }

  }
  .slidertwo{
    position:fixed;
    display:flex;
    top:28%;
    left:20%;
    color:white;
    gap:1rem;
    font-size:30px; 
    font-weight:600;
    font-family:sans-serif;
    text-transform:uppercase;   
    @media (max-width: 650px) {
      left: 10%;
      
    }
    @media (max-width: 500px) {
      left: 0;
      justify-content: center;
      font-size: 15px;
      margin: 0rem 0.5rem;
    }
    
  }
  .sliderOneBtn {
  
    
    position: absolute; 
    font-family: sans-serif;
    margin:0; 
    display: flex;
    top: 38%;
    left: 22%;
    flex-wrap: wrap;
    background-color: white;
    color: black;
    
   &:hover{
    color:black;
    box-shadow: 0 0 3px #6dd6c4;
   }
    background-color: #6dd6c4;
    box-shadow: 0 0 10px #6dd6c4;
    z-index: 100;
    color:white;
    font-style:bold; 
    
    @media (max-width: 650px) {
      // left: 10%;
      left:10%;
      font-size: 15px;
     
    }
    @media (max-width: 500px) {
      left: 50%;
      top:35%;
      transform: translateX(-50%);
      
       
     
    }
  }
`;r.div`
  position: relative;
  top: 30%;
  left: 20%;
  background-color: white;
  color: black;
  &:hover {
    background-color: #6dd6c4;
    box-shadow: 0 0 3px #6dd6c4;
  }
`;const L=({slides:e,parentWidth:n})=>{const a=u(),[i,c]=p.exports.useState(0);p.exports.useRef(null);const o={width:"100%",height:"100%",backgroundPosition:"center",backgroundSize:"cover",backgroundImage:`linearGradient(${e[i].gradient}),url(${e[i].imageUrl})`,backgroundBlendMode:"darken"},m=s=>({...o,backgroundImage:`linear-gradient(${e[s].gradient}),url(${e[s].imageUrl})`,width:`${n}px`}),h=()=>{const l=i===0?e.length-1:i-1;c(l)},x=p.exports.useCallback(()=>{const s=e.length-1,l=i===s?0:i+1;c(l)},[i,e]),b={display:"flex",height:"100%",transition:"transform ease-out 0.5s"},g=()=>({...b,width:n*e.length,transform:`translateX(${-(i*n)}px)`});return d(A,{children:[t("div",{className:"left",onClick:h,children:t($,{})}),t("div",{className:"right",onClick:x,children:t(B,{})}),d("div",{className:"styleOverflowStyle",children:[e.map((s,l)=>l===0?t(f,{children:"shop now",className:"sliderOneBtn noselect",onClick:()=>a("/shop")},l):null),t("div",{style:g(),children:e.map((s,l)=>d("div",{style:m(l),children:[t("h3",{className:"sliderTitle noselect",children:s.title}),t("p",{className:"substyle noslect",children:s.sub})]},l))})]})]})},O=()=>{const[e,n]=p.exports.useState(window.innerWidth),a=()=>{n(window.innerWidth)};return p.exports.useEffect(()=>(window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}),[]),e},F=()=>{y(),p.exports.useRef(null),p.exports.useState(0),v(o=>o.user);const n=t(H,{children:t("div",{className:"frontcard",children:[{id:1,title:"Mens fashion",imageUrl:"https://images.unsplash.com/photo-1602810316693-3667c854239a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",route:"shop/jackets"},{id:2,title:"Sports shoes",imageUrl:"https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",route:"shop/sneakers"},{id:3,title:"Womens fasion",imageUrl:"https://images.unsplash.com/photo-1581974364779-6ff14c4b0d67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80",route:"shop/womens"},{id:4,title:null,imageUrl:null,route:null}].map(o=>t(q,{item:o},o.id))})}),a=[{name:"image1",imageUrl:"https://images.unsplash.com/photo-1545110502-0dbad94206e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",gradient:" to right, rgba(0,0,0,1),rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8),rgba(0,0,0,1)",title:"New year  New fashion",sub:"All you need is right here  "},{name:"image2",imageUrl:"https://images.unsplash.com/photo-1627384113710-424c9181ebbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",gradient:" to bottom, #fb923c,#fdba74,#fed7aa,#ffedd5",title:"Beauty is on the way",sub:"Save up to 20% with auto-delivery"},{name:"image3",imageUrl:"https://images.unsplash.com/photo-1616007636941-4cdd0478d8e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",gradient:" to bottom, grey,#9ca3af,#d1d5db,#e5e7eb",title:"Technology is the future",sub:"See how tech change our life"}],i={position:"absolute",top:0,left:0,right:0,bottom:0,width:"100%",height:"100%",margin:"0,auto"},c=O();return d(S,{children:[t("div",{style:i,children:t(L,{slides:a,parentWidth:c})}),n]})};export{F as default};
