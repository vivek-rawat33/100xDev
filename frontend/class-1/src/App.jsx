import React from "react";
import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  function add() {
    setCount((prev) => {
      return prev + 1;
    });
  }
  function subst() {
    setCount((prev) => {
      return prev - 1;
    });
  }
  function reset() {
    setCount(0);
  }
  return (
    <>
      <div>COUNT is : {count}</div>
      <button onClick={(count) => setCount(Math.floor(Math.random() * 6) + 1)}>
        increase
      </button>
      <button onClick={subst}>decrease</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default App;
