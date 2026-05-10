import { configureStore } from "@reduxjs/toolkit";
import { pokemonReducer } from "./pokemon/pokemonSlice";
import { filterReducer } from "./searchPokemon/searchPokemonSlice";
import storage from "redux-persist/es/storage";
import { combineReducers } from "redux";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "pokemons",
  storage,
  whitelist: ["pokemons"],
};

console.log("persistConfig",  persistConfig);


const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
