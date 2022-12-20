import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import { UserProvider } from './context/UserContext';
// import { CategoriesProvider } from './context/CategoriesContext';
// import { CartProvider } from './context/CartContext';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<h1>Loading ... </h1>} persistor={persistor}>
        <BrowserRouter>
          {/* <UserProvider> */}

          {/* <CategoriesProvider> */}
          {/* <CartProvider> */}
          <App />
          {/* </CartProvider> */}
          {/* </CategoriesProvider> */}

          {/* </UserProvider> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
