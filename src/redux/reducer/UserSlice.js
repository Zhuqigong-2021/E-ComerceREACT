import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};
// signoutUser();

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      // const userAuth = JSON.stringify(action.payload);
      return { ...state, currentUser: action.payload };
      // return { currentUser: action.payload };
    },
    checkUserSession: (state, action) => {
      return {};
    },
    googleSignInStart: (state, action) => {
      state.isLoading = true;
    },
    emailSignInStart: (state, action) => {
      return {};
      //email and password
    },
    signInSuccess: (state, action) => {
      return { ...state, currentUser: action.payload };
      //user
    },
    signInFailed: (state, action) => {
      return { ...state, error: action.payload };
      //error
    },
    signUpStart: (state, action) => {
      return {};
    },
    signUpSuccess: (state, action) => {
      // const { user, additionalDetail } = action.payload;

      // return { ...state, currentUser: user, displayName: additionalDetail };
      return { ...state, currentUser: action.payload };
    },
    signUpFailed: (state, action) => {
      return { ...state, error: action.payload };
    },
    signOutStart: (state, action) => {
      // const { user, additionalDetail } = action.payload;
      // return { ...state, currentUser: user, displayName: additionalDetail };
      return {};
    },
    signOutSuccess: (state, action) => {
      // const { user, additionalDetail } = action.payload;
      // return { ...state, currentUser: user, displayName: additionalDetail };
      return { ...state, currentUser: null };
    },
    signOutFailed: (state, action) => {
      // const { user, additionalDetail } = action.payload;
      // return { ...state, currentUser: user, displayName: additionalDetail };
      return { ...state, error: action.payload };
    },
  },
});

export const {
  setCurrentUser,
  checkUserSession,
  googleSignInStart,
  emailSignInStart,
  signInFailed,
  signInSuccess,
  signUpFailed,
  signUpStart,
  signUpSuccess,
  signOutStart,
  signOutSuccess,
  signOutFailed,
} = UserSlice.actions;
export default UserSlice.reducer;
