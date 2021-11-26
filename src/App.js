import { useState, Fragment, useEffect } from 'react';
import './App.css';
import PageLayout from './HOC/PageLayout';
import Body from './Components/Body';

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
    <Fragment classname="App">
      <PageLayout>
      <Body increment={increment} updateIncrement={updateIncrement} updateDecrement={updateDecrement} updateReset = {updateReset} />
      </PageLayout>
    </Fragment>
  );
}

export default App;
