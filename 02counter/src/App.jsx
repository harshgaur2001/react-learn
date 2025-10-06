import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  function increase() {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);

    setCounter((cur_counter) => cur_counter + 1);
    setCounter((cur_counter) => cur_counter + 1);
  }

  function decrease() {
    if (counter > 0) setCounter(counter - 1);
  }

  function reset() {
    setCounter(0);
  }

  return (
    <>
      <div>
        <h1>Counter : {counter}</h1>
        <button onClick={increase}>Increase by (2) {counter}</button>{" "}
        <button onClick={decrease}>Decrease {counter}</button>{" "}
        <button onClick={reset}>Reset</button>
        <h2>Counter : {counter}</h2>
      </div>
    </>
  );
}

export default App;
