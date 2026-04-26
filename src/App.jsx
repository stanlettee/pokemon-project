import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { List } from './components/List'
import { AddForm } from './components/AddForm'
import { Filter } from './components/Filter/FIlter'
import './App.css'

function App() {
    return (
        <>  
            <AddForm></AddForm>
            <Filter></Filter>
            <List></List>
        </>
    )
}

export default App
