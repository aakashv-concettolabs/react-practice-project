import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const increaseValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    }
  };

  const decreaseValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Counter (0-20)</h1>

      <h3>Counter Value is {counter}</h3>

      <button
        onClick={decreaseValue}
        style={{ border: "1px dashed", margin: "4px" }}
      >
        Decrease
      </button>
      <button
        onClick={increaseValue}
        style={{ border: "1px dashed", margin: "4px" }}
      >
        Increase
      </button>
    </>
  );
}

export default App;
