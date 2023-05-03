import "./StateExampleHooks.css";

import Counter from "../counter/Counter";
import { useState } from "react";

const StateExampleHooks = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <section>
      <div className="state-example">
        <h1>State Example Hooks</h1>
        <Counter increment={increment} decrement={decrement} count={count} />
      </div>
    </section>
  );
};

export default StateExampleHooks;
