/** @format */
import { configureStore } from "@reduxjs/toolkit";
import authsli

const store = configureStore({
  reducer: {
    authentication: AuthSlice,
  },
});

export default store;
