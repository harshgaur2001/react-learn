import AddTodo from "./Components/TodoFrom";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <>
      <div className="text-center w-2xl mx-auto py-20">
        <h1 className="text-5xl">Todo with Redux-Toolkit</h1>
        <AddTodo />
        <TodoList />
      </div>
    </>
  );
}

export default App;
