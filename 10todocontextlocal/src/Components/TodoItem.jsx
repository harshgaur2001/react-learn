import { useState } from "react";
import useTodoContext from "../Context/TodoContext";

export default function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { UpdateTodo, DeleteTodo, ToggleTodo } = useTodoContext();

  const editTodo = () => {
    UpdateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        className="cursor-pointer"
        type="checkbox"
        checked={todo.completed}
        onChange={() => ToggleTodo(todo.id)}
      />

      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        }`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className="inline-flex px-2 py-1 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 cursor-pointer"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "Save" : "Edit"}
      </button>

      <button
        className="inline-flex  px-2 py-1 rounded-lg text-sm border border-black/10 justify-center items-center bg-red-200 hover:bg-red-300 shrink-0 cursor-pointer"
        onClick={(e) => DeleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}
