import { Filters } from "./components/Filters";
import { TodoList } from "./components/TodoList";
import { NewTodo } from "./components/NewTodo";

export default function App() {

  return (
    <div>
      <NewTodo />
      <Filters />
      <TodoList />
    </div>
  );
}