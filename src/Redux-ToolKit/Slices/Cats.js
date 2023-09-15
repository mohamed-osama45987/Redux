import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const Api = 'https://api.thecatapi.com/v1/images/search?limit=10'

export const fetchCats = createAsyncThunk("cats/fetchCats", async () => {
    const response = await axios.get(Api)
    return response.data
})




const initialState = {
    catsArray: [],
    loading: false,
    error: false
}


export const catsSlice = createSlice({
    name: "cats",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCats.pending, (state) => {
            state.loading = true
            console.log("pending")
        })

        builder.addCase(fetchCats.fulfilled, (state, action) => {
            console.log("fullfield")
            state.loading = false
            state.catsArray = action.payload
        })

        builder.addCase(fetchCats.rejected, (state, action) => {
            state.error = action.error.message
        })
    }
})


export default catsSlice.reducer
