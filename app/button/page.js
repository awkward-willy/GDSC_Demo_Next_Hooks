"use client";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Button() {
  const [number, setNumber] = useState(0);
  const handleMinus = () => {
    console.log("Click minus");
    setNumber(number - 1);
  };

  return (
    <>
      <Navbar />
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
    </>
  );
}
