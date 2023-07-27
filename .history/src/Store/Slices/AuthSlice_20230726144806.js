/** @format */

import { createSlice } from "@reduxjs/toolkit";

const savedData = JSON.parse(localStorage.getItem("user"));

console.log(savedData , "savedData");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: savedData ? savedData : null,
    isAuthenticated: savedData ? true : false,
    error: null,
  },
  reducers: {
    Login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});

export const { Login } = authSlice.actions;

export const isAuthenticated = (state) => state.auth.isAuthenticated;
export const user = (state) => state.auth.user;

export default authSlice.reducer;