import { useState } from "react";
import styles from "./TodoForm.module.css";
import TodoList from "../TodoList/TodoList";

function TodoForm() {
  const [todoList, setTodoList] = useState([]);
  const [todoItem, setTodoItem] = useState("");

  function changeTodoList(event) {
    event.preventDefault();
    setTodoItem(event.target.value);
  }

  function updateTodoList(item) {
    setTodoList(item);
  }
  return (
    <>
      <form>
        <input
          className={styles.field}
          type="text"
          placeholder="Enter new todo"
          onChange={(e) => changeTodoList(e)}
        />
        <button
          className={styles.btn}
          onClick={(e) => updateTodoList(todoItem)}
        >
          Submit
        </button>
        {console.log(todoList)}
      </form>
      {todoList ? (
        <h3 className={styles.listHeader}>Todo list is empty</h3>
      ) : (
        todoList.map((listItem) => {
          return <TodoList {...listItem} key={listItem} />;
        })
      )}
    </>
  );
}

export default TodoForm;
