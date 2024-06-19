import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.listContainer}>
      {!todos.length ? (
        <h2>Todo list is empty</h2>
      ) : (
        todos.map((item, index) => (
          <Todo todo={item} key={index} deleteTodo={deleteTodo} index={index} />
        ))
      )}
    </div>
  );
}

export default TodoList;
