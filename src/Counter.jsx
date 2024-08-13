import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  const [textColor, setTextColor] = useState("black");

  const increament = () => {
    setAnimationClass("increase");
    setTextColor("hsl(135, 78%, 60%)");
    setCount(count + 1);

    setTimeout(() => {
      setTextColor("black");
      setAnimationClass("");
    }, 200);
  };

  const decreament = () => {
    setAnimationClass("decrease");
    setTextColor("hsl(0, 75%, 59%)");
    setCount(count - 1);

    setTimeout(() => {
      setTextColor("black");
      setAnimationClass("");
    }, 200);
  };

  const reset = () => {
    setAnimationClass("");
    setTextColor("black"); // Ensure color is black when reset
    setCount(0);
  };

  return (
    <div className="counter-container">
      <p className="headline">Click Counter</p>
      <p
        className={`count-display ${animationClass}`}
        style={{ color: textColor }}
      >
        {count}
      </p>
      <button className="decreament-button" onClick={decreament}>
        Decrement
      </button>
      <button className="reset-button" onClick={reset}>
        Reset
      </button>
      <button className="increament-button" onClick={increament}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
