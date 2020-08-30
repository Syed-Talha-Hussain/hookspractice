import React, { useReducer } from 'react';
import counterReducer from './counterReducer';

export const Child2 = () => {
    let [state, dispatch] = useReducer(counterReducer, 1);
    console.log(state);
    
    return (
        <div>
            <h3>Counter Reducer value is: {state}</h3>
            <button onClick={() => dispatch('INCREMENT')}>
                Increment Reducer
            </button>
            
        </div>
    )
}
