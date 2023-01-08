import { useEffect, lazy, Suspense } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { checkUserSession } from '../src/redux/reducer/UserSlice';
import Spinner from './components/spinner/Spinner';
const Home = lazy(() => import('../src/components/home/Home'));
const Layout = lazy(() => import('../src/components/layout/Layout'));
const Shop = lazy(() => import('../src/components/shop/Shop'));
const Register = lazy(() => import('../src/components/register/Register'));
const Signin = lazy(() => import('../src/components/signin/Signin'));
const Checkout = lazy(() => import('../src/components/checkout/Checkout'));

function App() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop/*" element={<Shop />} />

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
      </Suspense>
    </div>
  );
}

export default App;
