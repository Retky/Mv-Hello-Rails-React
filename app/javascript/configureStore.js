import { createStore } from 'redux';

const initialState = {
  things: []
};

const rootReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    default:
      return state;
  }
}

export default function configureStore() {
  return createStore(rootReducer);
}
