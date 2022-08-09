import { configureStore, } from '@reduxjs/toolkit';
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

import greetingsReducer from './reducers/greetings';

const store = configureStore({
  reducer: greetingsReducer},
  applyMiddleware(thunk)
);

export default store;
