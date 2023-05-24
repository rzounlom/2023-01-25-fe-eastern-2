import React from "react";
import withCounter from "./components/withCounter";

const App = ({ count, increment, decrement }) => {
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default withCounter(App);
