import { useSelector } from "react-redux"
import { selectPokemon } from "../redux/pokemon/polemonSelector";
import { Item } from "./Item";
// import { getFind } from "../redux/searchPokemon/searchPokemonSelector";

export const List = () => {
    const infoPokemon = useSelector(selectPokemon)
    // const pokemonCheck = () => {
    //     if(infoPokemon === false) {
    //         return "This pokemon had not be found"
    //     }
    // }
    console.log(infoPokemon);

    return (
        infoPokemon.map(pokemon => <Item key={pokemon.id} info={pokemon}></Item>)
    )
}