"use client";
import { useState } from "react";

export default function Button() {
  const [number, setNumber] = useState(0);
  const handleMinus = () => {
    console.log("Click minus");
    setNumber(number - 1);
  };

  return (
    <>
      <div className="flex">
        <button onClick={handleMinus}>-</button>
        <p>{number}</p>
        <button
          onClick={() => {
            console.log("Click plus");
            setNumber(number + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}
