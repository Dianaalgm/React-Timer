//Timer

import './App.css';

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
  }

}






export default App;
