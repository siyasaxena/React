import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const dispatch = useDispatch();

  const clickHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const clickmark = (id) => {
    dispatch(markAsDone(id));
  };

  return (
    <>
      <AddForm />
      <h1>Todos List App</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.isDone ? "line-through" : "none",
              }}
            >
              {todo.task}
            </span>
            &nbsp; &nbsp; &nbsp;
            <button onClick={() => clickHandler(todo.id)}>Delete</button> &nbsp;
            &nbsp; &nbsp;
            <button onClick={() => clickmark(todo.id)}>MARK AS DONE</button>
          </li>
        ))}
      </ul>
    </>
  );
}
