import { Filters } from "./components/filters";
import { TodoList } from "./components/todoList";
import { NewTodo } from "./components/newTodo";

export default function App() {

  return (
    <div>
      <NewTodo />
      <Filters />
      <TodoList />
    </div>
  );
}