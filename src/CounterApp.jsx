import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = () => {
  const [counter, setCounter] = useState(0);
  const sum = () => {
    return setCounter(counter + 1);
  };

  const rest = () => {
    return setCounter(counter - 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={sum}>+1</button>
      <button onClick={rest}>-1</button>
      <div>{counter < 0 ? "Under zero 😖" : "Go, go! 🚀"}</div>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};
