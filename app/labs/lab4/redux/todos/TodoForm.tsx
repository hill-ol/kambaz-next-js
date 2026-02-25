import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { RootState } from "../../store";

export default function TodoForm() {
  const { todo } = useSelector((state: RootState) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item d-flex align-items-center gap-2">
      <input className="form-control"
             value={todo.title}
             onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))} />
      <button className="btn btn-warning text-nowrap"
              id="wd-update-todo-click"
              onClick={() => dispatch(updateTodo(todo))}>Update</button>
      <button className="btn btn-success text-nowrap"
              id="wd-add-todo-click"
              onClick={() => dispatch(addTodo(todo))}>Add</button>
    </li>
  );
}