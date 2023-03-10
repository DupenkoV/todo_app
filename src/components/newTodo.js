import { useDispatch } from "react-redux";
import { addTodo } from "../store/todos/todosSlice";

export const NewTodo = () => {
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