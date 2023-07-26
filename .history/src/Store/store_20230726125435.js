/** @format */
import { configureStore } from "@reduxjs/toolkit";
import authSlice from './Slices/authSlice'

const store = configureStore({
  reducer: {
    authentication: AuthSlice,
  },
});

export default store;
