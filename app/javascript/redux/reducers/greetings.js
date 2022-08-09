const FETCH_GREETINGS = 'FETCH_GREETINGS';

const getGreetings = async () => {
  const response = await fetch('api/v1/greetings.json');
  const greetings = await response.json();
  return greetings;
};
const initialState = { message: '...' };

export const fetchGreeting = () => async (dispatch) => {
  const greetings = await getGreetings();
  dispatch({ type: FETCH_GREETINGS, payload: greetings });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
