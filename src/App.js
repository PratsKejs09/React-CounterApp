import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <h2> Counter App </h2>
      <button onClick={increaseCount} className="btn-inc">
        Increment
      </button>
      <span> {count} </span>
      <button onClick={decreaseCount} className="btn-dc">
        Decrement
      </button>
      <br />
      <button onClick={() => setCount(0)}> Reset </button>
    </div>
  );
}
