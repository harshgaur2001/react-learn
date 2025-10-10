import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <ul className="list-none">
        {todos.map((item) => {
          return <TodoItem item={item} />;
        })}
      </ul>
    </>
  );
}
