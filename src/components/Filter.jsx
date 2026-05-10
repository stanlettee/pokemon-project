import { useDispatch } from "react-redux"
import { changeFilter } from "../redux/searchPokemon/searchPokemonSlice"

export const Filter = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <input onInput={(e) => dispatch(changeFilter(e.target.value))} type="text" placeholder="Find pokemon" name="filters" />
        </div>
    )
}