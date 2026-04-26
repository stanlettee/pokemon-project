import { configureStore } from "@reduxjs/toolkit";
import { pokemonReducer } from "./pokemon/pokemonSlice";
import { filterReducer } from "./filter/FilterSlice";

export const store = configureStore({
    reducer: {
        pokemons: pokemonReducer,
        filter: filterReducer
    }
})