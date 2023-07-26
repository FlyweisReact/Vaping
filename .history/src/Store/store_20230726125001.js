/** @format */
import { configureStore } from '@reduxjs/toolkit';
import  authSlice  from './slices/AuthSlice';
import cartSlice from './slices/CartSlice'
import dummyCartSlice from './slices/DummyCart'

const store = configureStore({
    reducer: {
        authentication: authSlice,
        cart : cartSlice , 
        dummyCart : dummyCartSlice , 
    },
});

export default store;
