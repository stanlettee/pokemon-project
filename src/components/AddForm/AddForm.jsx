import { useDispatch } from "react-redux"
import { addPokemon } from "../../redux/pokemon/pokemonSlice"
import styles from './AddForm.module.css'

export const AddForm = () => {
    const dispatch = useDispatch()

    const dataForm = (e) => {
        e.preventDefault()

        const name = e.target.elements.pokemonName.value 
        const element = e.target.elements.pokemonElement.value 

        dispatch(addPokemon({name, element}))

        e.target.reset()
    }
    return (
        <form className={styles.form} onSubmit={dataForm}>
            <input type="text" placeholder="Name" name="pokemonName"/>
            <input type="text" placeholder="element" name="pokemonElement"/>
            <button type="submit">Add Pokemon</button>
        </form>
    )
}