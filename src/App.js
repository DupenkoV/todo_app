
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "./store/actions/todo-actions";
import {setFilter} from './store/actions/filter-actions'
import {selectVisibleTodos} from "./store/selectors/todos-selectors"
import { selectActiveFilter } from "./store/selectors/filter-selectors";

export default function App() {
  const activeFilter = useSelector(selectActiveFilter)
  const todoList = useSelector(state => selectVisibleTodos(state,activeFilter))
  const dispatch = useDispatch();

  return (
    <div>
      <NewTodo />
      <Filters />
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

export const Filters = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter)

  return (
    <div>
      <button onClick={() => {dispatch(setFilter('all'))}} style={{color: activeFilter === 'all' ? 'red' : 'black'}}>all</button>
      <button onClick={() => {dispatch(setFilter('active'))}} style={{color: activeFilter === 'active' ? 'red' : 'black'}}>active</button>
      <button onClick={() => {dispatch(setFilter('completed'))}} style={{color: activeFilter === 'completed' ? 'red' : 'black'}}>completed</button>
    </div>
  )
}