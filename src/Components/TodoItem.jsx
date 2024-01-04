import React, { useState } from 'react';
import { useTodo } from '../Contexts/Context';

export default function TodoItem({ todo }) {
  const [isEditable, setIsEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { deleteTodo, updateTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
              todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
      >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleCompleted}
        className="mr-2"
      />
      
      <input
        type="text"
        className={`border text-black outline-none w-full bg-transparent rounded-lg ${
          isEditable ? 'border-black/10 px-2' : 'border-transparent'
        } ${todo.completed ? 'line-through' : ''}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isEditable}
      />
      <button
        onClick={() => {
          if (todo.completed) return;

          if (isEditable) {
            editTodo();
          } else setIsEditable((prev) => !prev);
        }}
        disabled={todo.completed}
        className="bg-green-500 text-white p-2 ml-2 rounded-2xl"
      >
        {isEditable ? '📁' : '✏️'}
      </button>
      <button onClick={() => deleteTodo(todo.id)} className="bg-red-500 text-white p-2 ml-2 rounded-2xl">
        ❌
      </button>
      </div>
  );
}