import Button from "../UI/Button";
import { RiRestartLine, RiDeleteBin5Line } from "react-icons/ri";

function ActionButtons({ resetTodoList, deleteCompletedTodo, completedTodo }) {
  return (
    <>
      <Button title="Reset tasks" onClick={resetTodoList}>
        <RiRestartLine />
      </Button>
      <Button
        title="Delete completed tasks"
        onClick={deleteCompletedTodo}
        disabled={!completedTodo}
      >
        <RiDeleteBin5Line />
      </Button>
    </>
  );
}

export default ActionButtons;
