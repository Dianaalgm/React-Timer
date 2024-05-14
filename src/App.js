
import React from 'react';

// import './App.css';


import Timer from './components/Timer'; // Import the Timer component

function App() {
  return (
    <div className="App">
    <Timer /> {/* Render the Timer component */}
    </div>
  );
}

export default App;

//-------------------------------------------------------------------
// //Initial State
// const initialState = {
//   seconds: 0,   //---> Initial value for seconds
//   isRunning: false  //---> Initially, the timer will not be running
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'START':
//       return { ...state, isRunning: true}; //--> Start
//     case 'STOP':
//       return { ...state, isRunning: false }; //--> Stop the timer
//     case 'RESET':
//       return { ...state, seconds: 0, isRunning: false }; //---> Reset the timer
//     case 'TICK':
//       return { ...state, seconds: state.seconds + 1 }; //---> Increment the seconds
//     default:
//       return state;
  

//     }

// }
//---------------------------------
