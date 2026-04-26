import { createSlice, nanoid } from "@reduxjs/toolkit";

const pokemonLibrary = [{name: "Pickachu", element: "electric", id: nanoid()}]

const pokemonSlice = createSlice({
    name: "Pokemons",
    initialState: pokemonLibrary,

    reducers: {
        addPokemon: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(object) {
                return {
                    payload: {
                        id: nanoid(),
                        name: object.name,
                        element: object.element,
                    }
                }
            }
        },
        removePokemon: {
            reducer(state, action) {
                return state.filter(pokemon => pokemon.id !== action.payload)
            },

            prepare(id) {
                return {
                    payload: id
                }
            }
        }
        
    }
})

export const pokemonReducer = pokemonSlice.reducer

export const { addPokemon, removePokemon } = pokemonSlice.actions