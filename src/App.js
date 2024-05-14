//Timer
// import './App.css';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

//Initial State
const initialState = {
  seconds: 0,   //---> Initial value for seconds
  isRunning: false  //---> Initially, the timer will not be running
};

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

}




// export default App;
