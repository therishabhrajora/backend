import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
    name: "scroll",
    initialState: {
        showheader: false,
        showgetapp: false,
        showTopbtn: false,
    },
    reducers: {
        showheader: (state, action) => {
            state.showheader = true;
        },
        hideheader: (state, action) => {
            state.showheader = false;
        },
        showgetapp: (state, action) => {
            state.showgetapp = true;
        },
        hidegetapp: (state, action) => {
            state.showgetapp = false;
        },
        showTopbtn: (state, action) => {
            state.showTopbtn = true;
        },
        hideTopbtn: (state, action) => {
            state.showTopbtn = false;
        },


    }
})

export const scrollActions = scrollSlice.actions;

export default scrollSlice;