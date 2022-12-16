import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
const reducer = combineReducers({});
export const store = configureStore({
  reducer,
});
