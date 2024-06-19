import { RiPushpinFill } from "react-icons/ri";
import styles from "./Todo.module.css";

function Todo({ todo, index, deleteTodo }) {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      <RiPushpinFill className={styles.todoIcon} />
      <p className={styles.todoText}>{todo}</p>
    </div>
  );
}

export default Todo;
