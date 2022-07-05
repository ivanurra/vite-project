import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = () => {
  const [counter, setCounter] = useState(0);
  const up = () => {
    return setCounter(counter + 1);
  };

  const down = () => {
    return setCounter(counter - 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={up}>+1</button>
      <button onClick={down}>-1</button>
      <div>{counter < 0 ? "Under zero 😖" : "Go, go! 🚀"}</div>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};
