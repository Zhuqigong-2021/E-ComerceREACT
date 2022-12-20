import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
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
  },
});

export const { setCurrentUser } = UserSlice.actions;
export default UserSlice.reducer;
