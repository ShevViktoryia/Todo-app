import {
  RiPushpinFill,
  RiDeleteBin5Line,
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";
import styles from "./Todo.module.css";

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ""
      }`}
    >
      <RiPushpinFill className={styles.todoIcon} />
      <span className={styles.todoText}>{todo.text}</span>
      <RiDeleteBin5Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      {todo.isCompleted ? (
        <RiCheckboxCircleLine
          className={styles.checkIcon}
          onClick={() => toggleTodo(todo.id)}
        />
      ) : (
        <RiCheckboxBlankCircleLine
          className={styles.checkIcon}
          onClick={() => toggleTodo(todo.id)}
        />
      )}
    </div>
  );
}

export default Todo;
