import {
  RiPushpinFill,
  RiDeleteBin5Line,
  RiCheckboxBlankCircleLine,
} from "react-icons/ri";
import styles from "./Todo.module.css";

function Todo({ todo, deleteTodo }) {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(todo.id)}>
      <RiPushpinFill className={styles.todoIcon} />
      <span className={styles.todoText}>{todo.text}</span>
      <RiDeleteBin5Line className={styles.deleteIcon} />
      <RiCheckboxBlankCircleLine className={styles.checkIcon} />
    </div>
  );
}

export default Todo;
