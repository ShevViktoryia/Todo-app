import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
function App() {
  const [todoList, setTodoList] = useState([]);
  function addNewTodo(text) {
    setTodoList([...todoList, text]);
  }
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addNewTodo} />
      <TodoList todos={todoList} />
    </div>
  );
}

export default App;
