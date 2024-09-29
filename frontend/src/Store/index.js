
// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';
import scrollSlice from './scrollSlice';
import toggleSlice from './toggleSlice';
import fetchSlice from './fetchSlice';

const store = configureStore({
    reducer: {
        scroll: scrollSlice.reducer,
        toggle:toggleSlice.reducer,
        fetching:fetchSlice.reducer,
    },
});


export default store;
