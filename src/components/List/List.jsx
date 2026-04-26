import { useSelector } from "react-redux"
import { selectPokemon } from "../../redux/pokemon/polemonSelector";
import { Item } from "../Item/Item";
import styles from './List.module.css'

export const List = () => {
    const infoPokemon = useSelector(selectPokemon)
    console.log(infoPokemon);

    return (
        infoPokemon.map(pokemon => <Item key={pokemon.id} pokemon={pokemon}></Item>)
    )
}