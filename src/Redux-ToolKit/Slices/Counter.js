import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {

            if (state.count === 0) {
                return state
            }
            state.count -= 1
        },

        reset: (state) => {
            state.count = 0
        },

        incrementByAmmount: (state, action) => {
            state.count += action.payload
        }


    }
})


export const { increment, decrement, reset, incrementByAmmount } = counterSlice.actions

export default counterSlice.reducer