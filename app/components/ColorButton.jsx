import React from "react";

const ColorButton = ({
  color,
  index,
  answer,
  changeScore,
  changeDifficulty,
}) => {
  return (
    <>
      <button
        className="h-[100px] w-[100px] rounded-full"
        style={{ backgroundColor: color }}
        onClick={() => {
          if (index === answer) {
            changeScore(-1);
            changeDifficulty(5);
          } else {
            changeScore(1);
            changeDifficulty(-5);
          }
        }}
      ></button>
    </>
  );
};

export default ColorButton;
