import { useState } from "react";

export default function Counter() {
  const [count, changeCount] = useState(0);
  const [increaseBy, changeIncreaseBy] = useState(1);
  const increase = function () {
    changeCount(count + increaseBy);
  };
  const decrease = function () {
    changeCount(count - increaseBy);
  };
  const increaseIncreament = function () {
    changeIncreaseBy(increaseBy + 1);
  };
  const decreaseIncreament = function () {
    changeIncreaseBy(increaseBy - 1);
  };
  

  return (
    <div>
      <h3>Value is: {count}</h3>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>

      <h3>Increament value is: {increaseBy}</h3>
      <button onClick={increaseIncreament}>increase increament</button>
      <button onClick={decreaseIncreament}>decrease</button>
    </div>
  );
}
