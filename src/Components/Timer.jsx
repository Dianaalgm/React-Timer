//Timer Component 

import React, { useReducer, useEffect } from 'react';

// Timer Component 
const Timer = () => {
  // Initial State
  const initialState = {
    seconds: 0,   //---> Initial value for seconds
    isRunning: false  //---> Initially, the timer will not be running
  };

  // Reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case 'START':
        return { ...state, isRunning: true}; //--> Start
      case 'STOP':
        return { ...state, isRunning: false }; //--> Stop the timer
      case 'RESET':
        return { ...state, seconds: 0, isRunning: false }; //---> Reset the timer
      case 'TICK':
        return { ...state, seconds: state.seconds + 1 }; //---> Increment the seconds
      default:
        return state;
    }
  };

  // useReducer hook to manage state and actions
  const [state, dispatch] = useReducer(reducer, initialState);

  // Effect for timer
  useEffect(() => {
    let timerId;
    if (state.isRunning) {
      // If timer is running, set up a timer to increment seconds every second
      timerId = setInterval(() => {
        dispatch({ type: 'TICK' });
      }, 1000);
    } else {
      // If timer is not running, clear the interval
      clearInterval(timerId);
    }

    // Cleanup function to clear the interval when component unmounts or is updated
    return () => clearInterval(timerId);
  }, [state.isRunning]); // Run this effect whenever isRunning changes

  // Event handlers
  const startTimer = () => {
    dispatch({ type: 'START' }); // Dispatch action to start the timer
  };

  const stopTimer = () => {
    dispatch({ type: 'STOP' }); // Dispatch action to stop the timer
  };

  const resetTimer = () => {
    dispatch({ type: 'RESET' }); // Dispatch action to reset the timer
  };

  // Render the timer display and control buttons
  return (
    <div>
      <h1>Timer: {state.seconds}s</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;