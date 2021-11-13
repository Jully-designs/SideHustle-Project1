import { useState } from 'react';
import './App.css';
import Heading from './Components/Heading';
import Nav from './Components/Nav';
import PageLayout from './HOC/PageLayout';

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
      <PageLayout />
    </div>
  );
}

export default App;
