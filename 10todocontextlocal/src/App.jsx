import { useEffect, useState } from "react";
import { TodoContextProvider } from "./Context/TodoContext";
import TodoItem from "./Components/TodoItem";
import TodoForm from "./Components/TodoForm";

function App() {
  const [Todos, setTodos] = useState([]);

  const AddTodo = (newtodo) => {
    setTodos((prev) => [
      {
        id: Date.now(),
        ...newtodo,
      },
      ...prev,
    ]);
  };

  const UpdateTodo = (id, newtodo) => {
    setTodos((prev) => prev.map((item) => (item.id == id ? newtodo : item)));
  };

  const DeleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id != id));
  };

  const ToggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  useEffect(() => {
    const Todos = JSON.parse(localStorage.getItem("Todos"));
    if (Todos && Todos.length > 0) {
      setTodos(Todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(Todos));
  }, [Todos]);

  return (
    <TodoContextProvider
      value={{ Todos, AddTodo, UpdateTodo, DeleteTodo, ToggleTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Advance Todos list
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>

          <div className="flex flex-wrap gap-y-3">
            {Todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
