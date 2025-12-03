import { useState } from "react";
import "./App.css";

import CounterDisplay from "./CounterDisplay";
import CounterButtons from "./CounterButtons";
import SomeComponent from "./SomeComponent";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  const sayHello = () => {
    alert("Hello");
  };

  return (
    <div>
      <h1>カウンター</h1>
      <CounterDisplay total={count} />
      <CounterButtons
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onReset={handleReset}
      />
      <SomeComponent name="Atsu" age={33} />
    </div>
  );
}

export default App;
