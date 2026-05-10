import { useEffect } from 'react'
import { List } from './components/List'
import { AddForm } from './components/AddForm'
import { Filter } from './components/Filter'
import { useDispatch } from 'react-redux'
import './App.css'
import { fetchPokemons } from './redux/pokemon/pokemonsOperation'

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPokemons())
    }, [])

    return (
        <>
            <AddForm></AddForm>
            <List></List>
            <Filter></Filter>
        </>
    )
}

export default App
