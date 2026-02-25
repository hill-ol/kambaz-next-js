import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: { todo: { id: string; title: string } }) {
  const dispatch = useDispatch();
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {todo.title}
      <div className="d-flex gap-2">
        <button className="btn btn-primary btn-sm"
                id="wd-set-todo-click"
                onClick={() => dispatch(setTodo(todo))}>Edit</button>
        <button className="btn btn-danger btn-sm"
                id="wd-delete-todo-click"
                onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
      </div>
    </li>
  );
}