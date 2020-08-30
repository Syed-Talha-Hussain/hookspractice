import React, { useContext } from 'react';
import counterContext from './counterContext';

const Child1 = (props) => {
    let counterValue = useContext(counterContext);
    console.log(counterValue);

    return (
        <div>
            <h2>My name is {props.name}</h2>
            <h3>Counter Context Value is: {counterValue[0]}</h3>
            <button onClick={() => {counterValue[1](++counterValue[0])}}>
            Increment Context
                </button>
        </div>

    )
}

export default Child1;