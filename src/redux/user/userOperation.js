import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const baseUrl = "http://localhost:3001"

export const createUser = createAsyncThunk(
  "users/createUser", 
  async (userData, thunkAPI) => {
    try {
      const fetchData = await axios.post(`${baseUrl}/users`, userData);
      const data = fetchData.data
      console.log(data);
      
      return data
    } catch (err) {
       return thunkAPI.rejectWithValue(err.massage)
    }
  },
);
