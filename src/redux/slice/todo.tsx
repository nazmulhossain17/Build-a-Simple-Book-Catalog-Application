import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchTodos = createAsyncThunk("fetchTodos", async()=>{
    const response = await fetch('data.json');
    return response.json();
})

const todoSlice = createSlice({
    name: "todo",
    extraReducers: (builder)=>{
        
    }
})

export default todoSlice.reducer;