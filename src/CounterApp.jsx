import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const up = () => setCounter(counter + 1);

  const down = () => setCounter(counter - 1);

  const reset = () => setCounter(0);

  return (
    <>
      <h1>CounterApp</h1>
      <h1> {counter} </h1>
      <button onClick={up}>+1</button>
      <button onClick={down}>-1</button>
      <button onClick={reset}>Reset</button>
      <div>{counter < 0 ? "Under zero 😖" : "Go, go! 🚀"}</div>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};
