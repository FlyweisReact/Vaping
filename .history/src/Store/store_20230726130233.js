/** @format */
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/authSlice";

const store = configureStore({
  reducer: {
    auth : AuthSlice
  },
});

export default store;
