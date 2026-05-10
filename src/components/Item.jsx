import { useDispatch } from "react-redux";
// import { removePokemon } from "../redux/pokemon/pokemonSlice";
import { removePokemons } from "../redux/pokemon/pokemonsOperation";

export const Item = ({ info }) => {
    const dispatch = useDispatch()

    console.log(info);

    return (
        <div>
            <h2>{info.name}</h2>
            <p>{info.element}</p>
            <button onClick={() => dispatch(removePokemons(info.id))}>Delete</button>
        </div>
    )
}