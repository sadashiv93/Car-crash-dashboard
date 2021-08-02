import { createSlice } from "@reduxjs/toolkit";


const carCrash = createSlice({
    name: 'carCrash',
    initialState: [],
    reducers: {
        setCrashData: (state, action) => { state = action.payload }
    }
})

export const { setCrashData } = carCrash.actions

export const selectCrashData = (state) => state.crashes

export default carCrash.reducer