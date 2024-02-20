import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:ring-indigo-900 focus:border-indigo-500
        focus:ring-2 text-base outline-none text-gray-100 py-2 px-3 leadign-8 transition-colors duration-200 
        ease-in-out"
        placeholder="Enter a todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded 
        text-lg"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
