/** @format */
import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Slices/authSlice";

const store = configureStore({
  reducer: {
    auth : AuthSlice
  },
});

export default store;