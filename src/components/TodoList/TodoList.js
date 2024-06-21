import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.listContainer}>
      {!todos.length ? (
        <h2>Todo list is empty</h2>
      ) : (
        todos.map((item) => (
          <Todo todo={item} key={item.id} deleteTodo={deleteTodo} />
        ))
      )}
    </div>
  );
}

export default TodoList;
