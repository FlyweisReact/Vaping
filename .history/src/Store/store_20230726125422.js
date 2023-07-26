/** @format */
import { configureStore } from "@reduxjs/toolkit";
import aut

const store = configureStore({
  reducer: {
    authentication: AuthSlice,
  },
});

export default store;
