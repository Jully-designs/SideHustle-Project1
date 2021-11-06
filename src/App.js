import { useState } from 'react';
import './App.css';
import Heading from './Components/Heading';
import Nav from './Components/Nav';

function App() {
  const[increment, setIncrement] = useState(0);
  const updateIncrement = () => {
    setIncrement(increment + 1);
  }
  const updateDecrement = () =>{
    if(increment === 0){
      setIncrement(0);
    }else{
      setIncrement(increment - 1);
    }
  }
  const updateReset = () => {                                                     
    setIncrement(0);
  }
  
  return (
    <div className="App">
      <Nav />
      <div className="counterbody">
        <Heading title={"Counter App"}/>
        <h2>{increment}</h2>
        <div className="buttons">
          <button onClick= {updateIncrement}>Increment</button>
          <button onClick= {updateDecrement}>Decrement</button>
          <button onClick= {updateReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
