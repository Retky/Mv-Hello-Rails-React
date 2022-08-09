import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import greetingReducer from './reducers/greetings';

const store = configureStore(
  { reducer: { greeting: greetingReducer } },
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
