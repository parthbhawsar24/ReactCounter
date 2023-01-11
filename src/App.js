import React, { useState } from "react";
import './App.css';
import './style.css'

function App() {

  var [count, setcount] = useState(0);
  const Increment = () => {
    return (
      setcount(count + 1)
    )
  }
  const Decrement = () => {
    if (count === 0) {
      return;
    }
    setcount(count - 1)
  }
  return (
    <div className="App">
      
      <h1 >
        Counter In React
      </h1>
      <p>
        This is a simple counter example.
      </p>
      <h1>{count}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
    </div>
  )
}
export default App;