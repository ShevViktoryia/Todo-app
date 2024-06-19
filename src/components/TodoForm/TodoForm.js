import styles from "./TodoForm.module.css";
import { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  function onSubmitHandler(e) {
    e.preventDefault();
    addTodo(text);
    setText("");
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        className={styles.field}
        type="text"
        placeholder="Enter new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input className={styles.btn} type="submit" value="Submit" />
    </form>
  );
}

export default TodoForm;
