import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categoryReducer from './reducer/CategorySlice';
import userReducer from './reducer/UserSlice';
import cartReducer from './reducer/CartSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga';

const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
  cart: cartReducer,
});
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({ serializableCheck: false })
  //     .concat(import.meta.NODE_ENV !== 'production' && logger)
  //     .concat(sagaMiddleware)
  //     .filter(Boolean),
  middleware: [sagaMiddleware],
});
// console.log(import.meta.NODE_ENV);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
