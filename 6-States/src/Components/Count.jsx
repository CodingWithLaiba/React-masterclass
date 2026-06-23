import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  function Increment() {
    // setCount(count + 1);
    setCount(count + incrementBy);
  }
  function Decrement() {
    // setCount(count - 1);
    setCount(count - incrementBy);
  }
  function IncreaseIncrement() {
    setIncrementBy(incrementBy + 1);
  }
  function DecreaseIncrement() {
    setIncrementBy(incrementBy - 1);
  }
  return (
    <>
      <h1>Count Value is : {count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <h1>Increment a value by: {incrementBy}</h1>
      <button onClick={IncreaseIncrement}>Increment By</button>
      <button onClick={DecreaseIncrement}>Decrement By</button>
    </>
  );
}
