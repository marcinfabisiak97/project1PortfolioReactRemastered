import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}
export const formModalSlice = createSlice({
    name: 'modalForm',
    initialState,
    reducers: {
        open: (state) => {
            state.isOpen = true;
        },
        close: (state) => {
            state.isOpen = false;
        }
    }
})

export const { open, close } = formModalSlice.actions;
export default formModalSlice.reducer