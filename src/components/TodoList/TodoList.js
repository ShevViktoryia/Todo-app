import Todo from "../Todo/Todo";
function TodoList({ todos }) {
  return todos.map((item, index) => <Todo todo={item} key={index} />);
}

export default TodoList;
