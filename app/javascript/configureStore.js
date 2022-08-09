import { createStore } from 'redux';

const initialState = {
  things: [
    { id: 1, name: 'thing 1' },
    { id: 2, name: 'thing 2' },
  ]
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
