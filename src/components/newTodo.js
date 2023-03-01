import { useDispatch } from "react-redux";
import { addTodo } from "../store/todos/todos-actions";

export const NewTodo = () => {
    const dispatch = useDispatch();
    const handleSubmin = (event) => {
      event.preventDefault();
      dispatch(addTodo(event.target.title.value));
      //как то ненравится как обрабатывается форма) с евентами, хотя мб я отвык
      event.target.reset();
    };
  
    return (
      <form onSubmit={handleSubmin}>
        <input type="text" name="title" placeholder="new todo" />
        <input type="submit" value="Add Todo" />
      </form>
    );
  };