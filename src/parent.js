
import React from 'react';
import Child1 from './child1';
import {Child2} from './child2';

const Parent = (props) => {

    return(
        <div>
            <Child1 name={props.name}/>
            <Child2 />
        </div>
        
    )
    
}

export default Parent;