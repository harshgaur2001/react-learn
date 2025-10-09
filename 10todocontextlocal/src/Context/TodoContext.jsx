import { createContext, useContext } from "react";

export const TodoContext = createContext({
  Todos: [
    {
      todo: "",
      id: null,
      completed: false,
    },
  ],
  AddTodo: (newtodo) => {},
  UpdateTodo: (id, newtodo) => {},
  DeleteTodo: (id) => {},
  ToggleTodo: (id) => {},
});

export const TodoContextProvider = TodoContext.Provider;

export default function useTodoContext() {
  return useContext(TodoContext);
}
