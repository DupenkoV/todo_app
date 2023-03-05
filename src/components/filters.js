import { useSelector, useDispatch } from "react-redux";
import { setFilter } from '../store/filters/filter-actionsCreators'
import { selectActiveFilter } from "../store/filters/filter-selectors";

export const Filters = () => {
    const dispatch = useDispatch();
    const activeFilter = useSelector(selectActiveFilter)

    const handleClick = (filter) => {
      
      return dispatch(setFilter(filter))
    }

    const buttonColor = (type) => {
      if(activeFilter === type) {
        return 'color: red'
      }
      return 'black'
    }
  
    return (
      <div>
        <button onClick={() => handleClick('all')} style={{color: buttonColor('all')}}>all</button>
        <button onClick={() => handleClick('active')} style={{color: buttonColor('active')}}>active</button>
        <button onClick={() => handleClick('completed')} style={{color: buttonColor('completed')}}>completed</button>
      </div>
    )
  }