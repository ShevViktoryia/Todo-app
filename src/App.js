import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
function App() {
  const [todoList, setTodoList] = useState([]);
  function addNewTodo(text) {
    setTodoList([...todoList, text]);
  }
  function deleteTodoHandler(ind) {
    setTodoList(todoList.filter((todo, index) => ind !== index));
  }
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addNewTodo} />
      <TodoList todos={todoList} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
