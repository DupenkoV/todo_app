
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "./store";

export default function App() {
  const todoList = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <NewTodo />
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={todoList.completed}
              onChange={() => dispatch(toggleTodo(item.id))}
            />
            {item.title}
            <button onClick={() => dispatch(removeTodo(item.id))}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const NewTodo = () => {
  const dispatch = useDispatch();
  const handleSubmin = (event) => {
    event.preventDefault();
    dispatch(addTodo(event.target.title.value));
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmin}>
      <input type="text" name="title" placeholder="new todo" />
      <input type="submit" value="Add Todo" />
    </form>
  );
};
