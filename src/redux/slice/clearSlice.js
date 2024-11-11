import { createSlice } from "@reduxjs/toolkit";

const clearSlice = createSlice({
    name: "clear",
    initialState: false,
    reducers: {
        clear: (prevState, action) => action.payload,
    },
});

export default clearSlice.reducer;

export const { clear } = clearSlice.actions;