import React from 'react';
import Nav from './Nav';
import Heading from './Heading';

const Body = ({increment,updateIncrement, updateDecrement, updateReset}) => {
    return(
        <div>
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

export default Body;