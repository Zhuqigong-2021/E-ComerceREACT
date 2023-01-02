import React, { useState } from 'react';
import { RegisterContainer } from './Register.style';

import { Link } from 'react-router-dom';
import {
  createUserDocFromAuth,
  signupWithEmailAndPassword,
  signinWithGooglePopup,
} from '../../utils/firebase';
import { useDispatch } from 'react-redux';
import { googleSignInStart } from '../../redux/reducer/UserSlice';
import { FcGoogle } from 'react-icons/fc';
import FormInput from '../formInput/FormInput';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
import { signUpStart } from '../../redux/reducer/UserSlice';

const defaultFormField = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const Register = () => {
  const dispatch = useDispatch();
  const [formFields, setFormfields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormfields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => {
    setFormfields(defaultFormField);
  };
  const handleSignup = async () => {
    try {
      // const { user } = await signupWithEmailAndPassword(email, password);

      // const snapshot = await createUserDocFromAuth(user, {
      //   displayName: username,
      // });
      // setCurrentUser(user);
      // location.assign('http://localhost:5173/');

      const data = dispatch(signUpStart({ email, password, displayName }));
      console.log(data);
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          alert('email is already in use');
          break;
        case 'auth/weak-password':
          alert('password should be at least 6 characters');
          break;
        default:
          console.log(error);
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('password are not the same ');
    } else {
      handleSignup();
      resetFormFields();
    }
  };
  const handleGoogleSignin = async (e) => {
    e.preventDefault();
    // await signinWithGooglePopup();
    // location.assign('http://localhost:5173/');
    // setCurrentUser(user);
    dispatch(googleSignInStart());
  };
  return (
    <RegisterContainer>
      <form className="register__form" onSubmit={(e) => handleSubmit(e)}>
        <FormInput
          label="user name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={(e) => handleChange(e)}
          required
        />
        <FormInput
          label="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => handleChange(e)}
          required
        />
        <FormInput
          label="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => handleChange(e)}
          required
        />
        <FormInput
          label="confirm password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => handleChange(e)}
          required
        />
        <p>
          already have an account ? <Link to="/signin"> sign in</Link>
        </p>
        <div className="signup__group">
          <Button type="submit" children="Sign up" />
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            children={
              <>
                <FcGoogle /> Sign in with Google
              </>
            }
            className="btn-container google-sign-in"
            onClick={(e) => handleGoogleSignin(e)}
          />
        </div>
      </form>
    </RegisterContainer>
  );
};

export default Register;
