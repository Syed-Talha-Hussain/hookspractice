import React, { useState } from 'react';
import './App.css';
import Parent from './parent';
import counterContext from './counterContext';

function App() {
  let countState = useState(1); //[count, setCount]

  return (
    <counterContext.Provider value={countState}>
      <div className="App App-header">
        <Parent name="S. Talha Hussain" />
      </div>
    </counterContext.Provider>
  );
}

export default App;
