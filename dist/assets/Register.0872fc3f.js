import{s as i,C,j as n,a as o,c as F,r as _,L as N,F as $,v as j,w as L}from"./index.e021228d.js";import{F as q}from"./index.esm.6e6d65e9.js";import{a as g,b as G}from"./Button.b691499c.js";import"./iconBase.f999edba.js";const I=i.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1;

  width: 100vw;
  @media (max-width: 500px) {
    padding: 1rem;
  }

  .register__form {
    margin-top: 4rem;
    display: flex;
    background-color: rgba(10, 200, 25, 0.1);

    height: 100%;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    padding: 2rem;
    row-gap: 2rem;
    align-items: flex-start;
    margin-bottom: 5rem;
    @media (max-width: 500px) {
      roow-gap: 0.5rem;
    }
    input {
      border: none;
      width: 100%;
      border-bottom: 1px solid black;
      background-color: inherit;
      &:focus {
        outline: none;
        border: none;
        border-bottom: 1px solid black;
      }
    }
    .signup__group {
      display: flex;
      column-gap: 1rem;
      @media (max-width: 500px) {
        flex-direction: column;
        row-gap: 1rem;
        justify-items: stretch;
        width: 100%;
      }
    }
  }
`,d="grey",P="black",b=C`
  top: -14px;
  font-size: 14px;
  color: ${P};
`,f=i.label`
  color: ${d};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 20px;
  transition: 300ms ease all;
  ${({shrink:a})=>a&&b};
`,T=i.input`
  background: none;
  background-color: white;
  color: ${d};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${d};
  margin: 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${f} {
    ${b};
  }
`,z=i.div`
  position: relative;
  margin: 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`,s=({label:a,...t})=>n(z,{children:[o(T,{...t}),a&&o(f,{shrink:t.value.length,children:a})]}),h={displayName:"",email:"",password:"",confirmPassword:""},U=()=>{const a=F(),[t,c]=_.exports.useState(h),{displayName:p,email:m,password:l,confirmPassword:u}=t,r=e=>{const{name:k,value:S}=e.target;c({...t,[k]:S})},x=()=>{c(h)},w=async()=>{try{const e=a(L({email:m,password:l,displayName:p}));console.log(e)}catch(e){switch(e.code){case"auth/email-already-in-use":alert("email is already in use");break;case"auth/weak-password":alert("password should be at least 6 characters");break;default:console.log(e)}}},y=async e=>{e.preventDefault(),l!==u?alert("password are not the same "):(w(),x())},v=async e=>{e.preventDefault(),a(j())};return o(I,{children:n("form",{className:"register__form",onSubmit:e=>y(e),children:[o(s,{label:"user name",type:"text",name:"displayName",value:p,onChange:e=>r(e),required:!0}),o(s,{label:"email",type:"email",name:"email",value:m,onChange:e=>r(e),required:!0}),o(s,{label:"password",type:"password",name:"password",value:l,onChange:e=>r(e),required:!0}),o(s,{label:"confirm password",type:"password",name:"confirmPassword",value:u,onChange:e=>r(e),required:!0}),n("p",{children:["already have an account ? ",o(N,{to:"/signin",children:" sign in"})]}),n("div",{className:"signup__group",children:[o(g,{type:"submit",children:"Sign up"}),o(g,{type:"button",buttonType:G.google,children:n($,{children:[o(q,{})," Sign in with Google"]}),className:"btn-container google-sign-in",onClick:e=>v(e)})]})]})})};export{U as default};
