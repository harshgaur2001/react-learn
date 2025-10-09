import { useState } from "react";
import useTodoContext from "../Context/TodoContext";

export default function TodoForm() {
  const { AddTodo } = useTodoContext();
  const [todo, setTodo] = useState("");
  return (
    <div>
      <form
        className="flex"
        onSubmit={(e) => {
          e.preventDefault();
          if (!todo) return;
          AddTodo({ todo, completed: false });
          setTodo("");
        }}
      >
        <input
          className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          type="text"
          value={todo}
          placeholder="Type here..."
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 cursor-pointer"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}
