/** @format */
import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Slices/AuthSlice";

const store = configureStore({
  reducer: {
    authentication: AuthSlice,
  },
});

export default store;
