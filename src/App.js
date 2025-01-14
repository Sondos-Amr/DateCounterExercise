import { useState } from "react";

export default function App() {
  return (
    <div className="container">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  function handleResetClick() {
    setStep(1);
    setCount(0);
  }
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  return (
    <div className="counter">
      <div className="stepContainer">
        <span> Step : {step}</span>
        <input
          type="range"
          min="0"
          max="10"
          onChange={(e) => setStep(Number(e.target.value))}
          value={step}
        />
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          className="inputCount"
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
}
