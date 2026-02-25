"use client";
import { useTodoStore } from "./useTodoStore";

export default function ZustandTodoList() {
  const { todos, todo, setTodo, addTodo, deleteTodo, updateTodo } = useTodoStore();
  return (
    <div id="wd-zustand-todo-list">
      <h2>Todo List</h2>
      <ul className="list-group">
        <li className="list-group-item d-flex align-items-center gap-2">
          <input className="form-control"
                 value={todo.title}
                 onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
          <button className="btn btn-warning text-nowrap"
                  onClick={updateTodo}>Update</button>
          <button className="btn btn-success text-nowrap"
                  onClick={addTodo}>Add</button>
        </li>
        {todos.map((t) => (
          <li key={t.id} className="list-group-item d-flex justify-content-between align-items-center">
            {t.title}
            <div className="d-flex gap-2">
              <button className="btn btn-primary btn-sm"
                      onClick={() => setTodo(t)}>Edit</button>
              <button className="btn btn-danger btn-sm"
                      onClick={() => deleteTodo(t.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}