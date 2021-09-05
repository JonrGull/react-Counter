import React, { useState, useEffect } from "react";
import randomcolor from "randomcolor";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function multiply() {
    setCount((prevCount) => prevCount * 2);
  }
  function divide() {
    setCount((prevCount) => Math.floor(prevCount / 2));
  }
  function reset() {
    setCount((prevCount) => (prevCount = 0));
  }

  useEffect(() => {
    setColor(randomcolor());
  }, [count]);

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Divide</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
