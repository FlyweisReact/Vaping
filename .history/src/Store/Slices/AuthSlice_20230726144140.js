/** @format */

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    error: null,
  },
  reducers: {
    Login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem("user", action.payload);
    },
  },
});

export const { Login } = authSlice.actions;

export const isAuthenticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;
