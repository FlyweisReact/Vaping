/** @format */
import { configureStore } from "@reduxjs/toolkit";
import authSlice from './'

const store = configureStore({
  reducer: {
    authentication: AuthSlice,
  },
});

export default store;
