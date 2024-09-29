import { createSlice } from "@reduxjs/toolkit";

const fetchSlice=createSlice({
    name:"fetching",
    initialState:{
        cities:[],
        citydata:[],
    },
    reducers:{
        setCities:(state,action)=>{
           state.cities=action.payload;
        },
        setCityData:(state,action)=>{
            state.citydata=action.payload;
        }
    }
})

export const fetchActions=fetchSlice.actions;

export default fetchSlice;