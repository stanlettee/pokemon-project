import { getFilter } from "../../redux/filter/filterSelectors";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filter/FilterSlice";

export const Filter = () => {
    const dispatch = useDispatch()
    const filter = useSelector(getFilter)

    return (
          <div>
              <input onChange={(e) => dispatch(changeFilter(e.target.value))} type="text" placeholder="filter" name="filter" value={filter}/>      
          </div>
    )
}