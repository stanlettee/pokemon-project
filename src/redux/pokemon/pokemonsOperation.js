import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = "https://69ff4c7c2b7ab349602f7904.mockapi.io"
const baseUrl = "https://6a00a74f36fb6ad04de05a5c.mockapi.io";

export const fetchPokemons = createAsyncThunk(
  "pokemons/fetchPokemons", //! pokemons/fetchPokemons - reducer, action - type
  async (_, thunkAPI) => {
    //! payload (_,) - коли викликаэмо під час викликання fetchPokemons(id) || thunkAPI - чим ми можесо користуватися
    try {
      const fetchData = await axios.get(`${baseUrl}/pokemons`);
      const data = fetchData.data
      console.log(data);
      
      return data
    } catch (err) {
       return thunkAPI.rejectWithValue(err.massage)
    }
  },
);


export const addPokemons = createAsyncThunk(
  "pokemons/addPokemons", 
  async (pokemonData, thunkAPI) => {
    try {
      const fetchData = await axios.post(`${baseUrl}/pokemons`, pokemonData);
      const data = fetchData.data
      console.log(data);
      
      return data
    } catch (err) {
       return thunkAPI.rejectWithValue(err.massage)
    }
  },
);


export const removePokemons = createAsyncThunk(
  "pokemons/removePokemons", 
  async (pokemonId, thunkAPI) => {
    try {
      const fetchData = await axios.delete(`${baseUrl}/pokemons/${pokemonId}`, pokemonId);
      const data = fetchData.data
      console.log(data);
      
      return pokemonId
    } catch (err) {
       return thunkAPI.rejectWithValue(err.massage)
    }
  },
);
