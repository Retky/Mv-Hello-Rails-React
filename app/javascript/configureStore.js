import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  things: []
};

const rootReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case 'GET_THINGS_SUCCESS':
      return { things: action.json.things };
  }
  return state;
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  )
  return store;
}
