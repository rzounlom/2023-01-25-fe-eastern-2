import "./App.css";

import PropsExample from "./components/props-example/PropsExample";
import StateExample from "./components/state-example-hooks/StateExampleHooks";
import StateExampleClass from "./components/state-example-class/StateExampleClass";
import { useState } from "react";

let employee = {
  firstName: "John",
  lastName: "Doe",
  title: "Software Engineer",
  avatar: "https://www.w3schools.com/howto/img_avatar.png",
  address: {
    street: "777 Miracle Lane",
    city: "Los Vegas",
    state: "NV",
    zip: "77777",
  },
};

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="App">
      <PropsExample employee={employee} />
      <StateExampleClass
        count={count}
        increment={increment}
        decrement={decrement}
      />
      <StateExample count={count} increment={increment} decrement={decrement} />
    </div>
  );
}

export default App;
