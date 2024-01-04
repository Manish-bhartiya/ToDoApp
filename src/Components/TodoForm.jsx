import React, { useState } from 'react';
import { useTodo } from '../Contexts/Context';

export default function TodoForm() {
  const [todo, setTodo] = useState('');
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo('');
  };

  return (
    <form onSubmit={add} className="mb-4 flex">
      <input
        type="text"
        value={todo}
        placeholder="Write Todo"
        onChange={(e) => setTodo(e.target.value)}
        className="  p-2 w-full bg-slate-500 text-white rounded-md"
      />
      <button type="submit" className=" bg-emerald-400 text-white p-2 rounded-md  ">
        Add
      </button>
    </form>
  );
}