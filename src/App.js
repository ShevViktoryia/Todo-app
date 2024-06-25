import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import ActionButtons from "./components/ActionButtons/ActionButtons";
function App() {
  const [todoList, setTodoList] = useState([]);
  function addNewTodo(text) {
    const newTodo = {
      id: uuidv4(),
      text: text,
      isCompleted: false,
    };
    setTodoList([...todoList, newTodo]);
  }
  function deleteTodoHandler(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  function toggleTodoHandler(id) {
    setTodoList(
      todoList.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  }

  function resetTodoListHandler() {
    setTodoList([]);
  }

  function deleteCompletedTodoHandler() {
    setTodoList(todoList.filter((todo) => !todo.isCompleted));
  }

  const completedTodoCount = todoList.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addNewTodo} />
      {!todoList.length ? (
        <></>
      ) : (
        <ActionButtons
          completedTodo={!!completedTodoCount}
          resetTodoList={resetTodoListHandler}
          deleteCompletedTodo={deleteCompletedTodoHandler}
        />
      )}

      <TodoList
        todos={todoList}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
    </div>
  );
}

export default App;
