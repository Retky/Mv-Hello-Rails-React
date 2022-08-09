import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/reducers/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const greet = useSelector((store) => store.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);
  return (<h1>{greet.message}</h1>);
};

export default Greeting;
