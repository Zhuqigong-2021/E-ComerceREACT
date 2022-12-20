import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categoryReducer from './reducer/CategorySlice';
import userReducer from './reducer/UserSlice';
import cartReducer from './reducer/CartSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import logger from 'redux-logger';

const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
