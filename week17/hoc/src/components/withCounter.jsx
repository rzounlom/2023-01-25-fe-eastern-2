import React, { useState } from "react";

const withCounter = (WrappedComponent) => {
  const CounterHOC = (props) => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };

    const decrement = () => {
      setCount(count - 1);
    };

    return (
      <WrappedComponent
        count={count}
        increment={increment}
        decrement={decrement}
        {...props}
      />
    );
  };

  return CounterHOC;
};

export default withCounter;
