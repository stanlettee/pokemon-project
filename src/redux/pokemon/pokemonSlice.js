import { createSlice, nanoid } from "@reduxjs/toolkit";
import { fetchPokemons, addPokemons, removePokemons } from "./pokemonsOperation";

// const pokemonLibrary = [
//   { name: "Pickachu", element: "electric", id: nanoid() },
// ];

const initialState = {
  loading: false,
  error: null,
  pokemons: [],
};

const pokemonSlice = createSlice({
  name: "Pokemons",
  initialState,

  // reducers: {
  //   addPokemon: {
  //     reducer(state, action) {
  //       state.push(action.payload);
  //     },
  //     prepare(obj) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           name: obj.name,
  //           element: obj.element,
  //         },
  //       };
  //     },
  //   },

  //   removePokemon: {
  //     reducer(state, action) {
  //       return state.filter((pokemon) => pokemon.id !== action.payload);
  //     },
  //     prepare(id) {
  //       return {
  //         payload: id,
  //       };
  //     },
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.loading = false;
      state.pokemons = action.payload;
    });
    builder.addCase(fetchPokemons.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    

    builder.addCase(addPokemons.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addPokemons.fulfilled, (state, action) => {
      state.loading = false;
      state.pokemons.push(action.payload);
    });
    builder.addCase(addPokemons.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });


    builder.addCase(removePokemons.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(removePokemons.fulfilled, (state, action) => {
      state.loading = false;
      state.pokemons = state.pokemons.filter(pokemon => pokemon.id !== action.payload)
      console.log(action.payload)
    });
    builder.addCase(removePokemons.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const pokemonReducer = pokemonSlice.reducer;

export const { addPokemon, removePokemon } = pokemonSlice.actions;
