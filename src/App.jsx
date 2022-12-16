import { useState } from 'react';
import Navbar from './components/navbar/Navbar';

import {
  Home,
  Layout,
  Shop,
  Upload,
  Profile,
  Register,
  Signin,
  Checkout,
} from './components/';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './index.style';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="upload" element={<Upload />} />
          <Route path="profile" element={<Profile />} />
          <Route path="signup" element={<Register />} />
          <Route path="signin" element={<Signin />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
