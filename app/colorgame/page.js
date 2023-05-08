"use client";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { useEffect, useState } from "react";

export default function ColorGame() {
  // 創建狀態變量來跟踪顏色方塊
  const [blocks, setBlocks] = useState([]);
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState(50);
  const [answer, setAnswer] = useState(0);

  // 隨機生成一個顏色作為目標
  const generateTargetColor = () => {
    const r = Math.floor(Math.random() * (256 - difficulty));
    const g = Math.floor(Math.random() * (256 - difficulty));
    const b = Math.floor(Math.random() * (256 - difficulty));
    return `rgb(${r}, ${g}, ${b})`;
  };

  // 生成與目標顏色相近的顏色
  const generateSimilarColor = (color) => {
    // remove rgb()
    const rgb = color.slice(4, -1);
    // split r, g, b
    const [r, g, b] = rgb.split(", ");
    const change = Math.floor(Math.random() * 3);
    const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    // when change = 0, change r
    // when change = 1, change g
    // when change = 2, change b
    let range = difficulty; // 相近顏色的範圍
    if (range < 5) {
      setDifficulty(5);
      range = 5;
    }

    if (change === 0) {
      // generate similarR , which difference equals to range
      let similarR;
      if (plusOrMinus === -1) {
        if (r + range > 255) {
          similarR = r - range;
        } else {
          similarR = r + range;
        }
      } else {
        if (r - range < 0) {
          similarR = r + range;
        } else {
          similarR = r - range;
        }
      }
      return `rgb(${similarR}, ${g}, ${b})`;
    } else if (change === 1) {
      let similarG;
      if (plusOrMinus === -1) {
        if (g + range > 255) {
          similarG = g - range;
        } else {
          similarG = g + range;
        }
      } else {
        if (g - range < 0) {
          similarG = g + range;
        } else {
          similarG = g - range;
        }
      }
      return `rgb(${r}, ${similarG}, ${b})`;
    } else {
      let similarB;
      if (plusOrMinus === -1) {
        if (b + range > 255) {
          similarB = b - range;
        } else {
          similarB = b + range;
        }
      } else {
        if (b - range < 0) {
          similarB = b + range;
        } else {
          similarB = b - range;
        }
      }
      return `rgb(${r}, ${g}, ${similarB})`;
    }
  };

  useEffect(() => {
    const targetColor = generateTargetColor();
    const otherColors = generateSimilarColor(targetColor);
    const ans = Math.floor(Math.random() * 9);
    setAnswer(ans);
    const newBlocks = [];
    for (let i = 0; i < 9; i++) {
      if (i === ans) {
        newBlocks.push(targetColor);
      } else {
        newBlocks.push(otherColors);
      }
    }
    setBlocks(newBlocks);
    return () => {
      setBlocks([]);
    };
  }, [score]);

  return (
    <div>
      <Navbar />
      <Title content="Color Game" />
      <p>Your Score: {score}</p>
      <p>Difficulty: {difficulty}</p>
      <div className="flex flex-wrap">
        {blocks.map((color, index) => (
          <button
            style={{
              backgroundColor: color,
            }}
            className="w-[100px] h-[100px] rounded-full"
            key={index}
            onClick={() => {
              if (index === answer) {
                setScore(score + 1);
                setDifficulty(difficulty - 5);
              } else {
                setScore(score - 1);
                setDifficulty(difficulty + 5);
              }
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}
