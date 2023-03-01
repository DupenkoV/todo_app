import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../store/todos/todos-actions";
import { selectVisibleTodos } from "../store/todos/todos-selectors"
import { selectActiveFilter } from "../store/filters/filter-selectors";
//компоненты лучше рассовать по папкам отдельным. названия файлов с большой буквы обычно, чтобы было понятно что это компонент и файлы index.js в каждом
//плюс общий в папке компонентов
export const TodoList = () => {
    const activeFilter = useSelector(selectActiveFilter)
    const todoList = useSelector(state => selectVisibleTodos(state,activeFilter))
    const dispatch = useDispatch();

    return (
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
    )
}