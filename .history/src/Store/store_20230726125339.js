/** @format */
import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Slices/AuthSlice";

const store = configureStore({
  reducer: {
    authentication: authSlice,
  },
});

export default store;
