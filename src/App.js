import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
function App() {
  const [todoList, setTodoList] = useState([]);
  function addNewTodo(text) {
    const newTodo = {
      id: uuidv4(),
      text: text,
      isComleted: false,
    };
    setTodoList([...todoList, newTodo]);
  }
  function deleteTodoHandler(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
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
