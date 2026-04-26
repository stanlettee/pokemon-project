import { useDispatch } from "react-redux";
import { removePokemon } from "../../redux/pokemon/pokemonSlice";
import styles from './Item/Item.module.css'
 
export const Item = ({pokemon}) => {
    const dispatch = useDispatch();

    return (
        <div>
            <h2>{pokemon.name}</h2>
            <p>{pokemon.element}</p>
            <button className={styles.button} onClick={() => {dispatch(removePokemon(pokemon.id))}}>Delete Pokemon</button>
        </div>
    )
}