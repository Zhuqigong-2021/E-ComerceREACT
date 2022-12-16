import React, { useState } from 'react';

import { SigninContainer } from './Signin.style';
import {
  signinWithGooglePopup,
  createUserDocFromAuth,
  signInUserWithEmailAndPassword,
} from '../../utils/firebase';

import { FcGoogle } from 'react-icons/fc';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
const defaultSigninFields = {
  email: '',
  password: '',
};
const Signin = () => {
  const [signinFields, setSigninFields] = useState(defaultSigninFields);
  const { email, password } = signinFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSigninFields({ ...signinFields, [name]: value });
  };
  const resetSigninFields = () => {
    setSigninFields(defaultSigninFields);
  };
  const handleGoogleSignin = async (e) => {
    e.preventDefault();
    await signinWithGooglePopup();
    location.assign('http://localhost:5174/');
  };
  const handleEmailandPasswordSignin = async () => {
    if (!email || !password) {
      alert('email or password can not be empty');
      return;
    }
    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
      // location.assign('http://localhost:5173/');
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('please input the right password');
          break;
        case 'auth/user-not-found':
          alert('no user asscoiated with this email');
          break;
        default:
          console.log(error.message);
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleEmailandPasswordSignin();
    resetSigninFields();
  };

  return (
    <SigninContainer>
      <form className="signin__form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email .."
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password .."
          name="password"
          value={password}
          onChange={handleChange}
        />
        <div className="signin__group">
          <Button type="submit" children="Sign in" />

          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={(e) => handleGoogleSignin(e)}
            children={
              <>
                <FcGoogle /> Sign in with Google
              </>
            }
          ></Button>
        </div>
      </form>
    </SigninContainer>
  );
};

export default Signin;
