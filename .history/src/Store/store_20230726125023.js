/** @format */
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/AuthSlice";

const store = configureStore({
  reducer: {
    authentication: authSlice,
  },
});

export default store;
