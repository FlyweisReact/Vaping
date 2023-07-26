/** @format */
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    authentication: authSlice,
  },
});

export default store;
