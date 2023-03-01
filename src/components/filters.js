import { useSelector, useDispatch } from "react-redux";
import { setFilter } from '../store/filters/filter-actions'
import { selectActiveFilter } from "../store/filters/filter-selectors";

export const Filters = () => {
    const dispatch = useDispatch();
    const activeFilter = useSelector(selectActiveFilter)
  //напиши обработчик (общую функцию) которую можно развесить по онкликам. не пиши это все на колбеках. Диспатча в принципе сильно не должно быть в разметке
    // это не ошибка, но просто так не делают как и условий в стилях внутри разметки, напиши мапу (объект с нужными полями) и просто подставь значение в разметку
    return (
      <div>
        <button onClick={() => {dispatch(setFilter('all'))}} style={{color: activeFilter === 'all' ? 'red' : 'black'}}>all</button>
        <button onClick={() => {dispatch(setFilter('active'))}} style={{color: activeFilter === 'active' ? 'red' : 'black'}}>active</button>
        <button onClick={() => {dispatch(setFilter('completed'))}} style={{color: activeFilter === 'completed' ? 'red' : 'black'}}>completed</button>
      </div>
    )
  }