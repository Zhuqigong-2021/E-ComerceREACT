import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import { UserProvider } from './context/UserContext';
// import { CategoriesProvider } from './context/CategoriesContext';
// import { CartProvider } from './context/CartContext';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { fetchCategoriesAsync } from './redux/saga/categorySaga';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '../src/utils/stripe/stripe.util';
// import { fetchCategory } from './redux/reducer/CategorySlice';
// store.dispatch(fetchCategory());
// store.dispatch(fetchCategoriesAsync());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<h1>Loading ... </h1>} persistor={persistor}>
        <BrowserRouter>
          {/* <UserProvider> */}

          {/* <CategoriesProvider> */}
          {/* <CartProvider> */}
          <Elements stripe={stripePromise}>
            <App />
          </Elements>

          {/* </CartProvider> */}
          {/* </CategoriesProvider> */}

          {/* </UserProvider> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
