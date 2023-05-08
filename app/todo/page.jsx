"use client";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { useState } from "react";
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      return;
    }
    setTodos([...todos, inputValue.trim()]);
    setInputValue("");
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <Navbar />
      <div class="w-full  flex flex-col justify-around items-center">
        <div className="h-[35vh] pt-[5vh] flex flex-col justify-around items-center">
          <Title content="Todo List" />
          <input
            type="text"
            className="border-2 border-gray-400 rounded-md focus:ring-2 focus:border-transparent focus:scale-125"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="border-2 rounded-lg bg-slate-600 p-4 text-slate-100" onClick={handleAddTodo}> <span>新增提醒事項</span></button>
        </div>
        <div>
          <div className="flex flex-row flex-wrap justify-center">
            {todos.map((todo, index) => (
            <div className="m-4 p-4 w-auto min-w-[200px] border-2 border-slate-500 rounded-md flex flex-col text-xl" key={index}>
              {todo}
              <button onClick={() => handleDeleteTodo(index)}><span className="text-sm text-red-600">完成</span></button>
            </div>
            ))}
          </div>
        </div>
    </div>
      
      
    </>
  );
}

export default TodoList;
