import { useState, useEffect } from 'react';

import {
  onAuthStateChangedListener,
  createUserDocFromAuth,
} from '../src/utils/firebase';
import {
  Home,
  Layout,
  Shop,
  Profile,
  Register,
  Signin,
  Checkout,
} from './components/';
import { Routes, Route, Navigate } from 'react-router-dom';
// import GlobalStyle from './index.style';
import { useDispatch, useSelector } from 'react-redux';
import { checkUserSession } from '../src/redux/reducer/UserSlice';
import { setCurrentUser } from '../src/redux/reducer/UserSlice';

function App() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangedListener((user) => {
  //     if (user) {
  //       createUserDocFromAuth(user);
  //     }
  //     dispatch(setCurrentUser(user));
  //   });
  //   return unsubscribe;
  // }, [dispatch]);

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="App">
      {/* <GlobalStyle /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          {/* <Route path="upload" element={<Upload />} /> */}
          {/* <Route path="profile" element={<Profile />} /> */}
          <Route
            path="signup"
            element={currentUser ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="signin"
            element={currentUser ? <Navigate to="/" /> : <Signin />}
          />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
