
import React, { useState } from 'react';
import './../styles/App.css';

// const counter =()=>{
  
// }

const App = () => {
  // var num = 0;
  const [count,setCount] = useState(0);

  const handleIncrement=()=>{
    setCount(count+1);
  }
  return (
    
    <div>
        {/* Do not remove the main div */}
        <p><b>Button clicked {count} times</b></p>
        <button onClick={handleIncrement}>Click me</button>
    </div>
  )
}

export default App
