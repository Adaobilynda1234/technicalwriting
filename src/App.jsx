import React, { useState } from "react";
import "./App.css";
import useCounter from "./components/useCounter";

function App() {
  // usestate hooks
  // const [counterstate, setCounterstate] = useState(0);
  const { value, increment, decrement, reset } = useCounter(0);

  // function for increment,decresement and reset
  // const increment = () => {
  //   setCounterstate((prev) => prev + 1);
  // };
  // const decrement = () => {
  //   setCounterstate((prev) => prev - 1);
  // };
  // const reset = () => {
  //   setCounterstate(0);
  // };
  return (
    <div className="container">
      <div>
        <h1>Counter Appp </h1>
        <h2>{value}</h2>
        <div>
          <button onClick={increment}>increment</button>
          <button onClick={decrement}>decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
