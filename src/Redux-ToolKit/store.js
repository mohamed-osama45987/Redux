import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/counter"
import catsReducer from './Slices/Cats'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cats: catsReducer
    }
})