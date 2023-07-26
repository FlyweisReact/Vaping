/** @format */
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    auth : authSl
  },
});

export default store;
