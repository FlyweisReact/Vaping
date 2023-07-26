/** @format */

import { createSlice } from "@reduxjs/toolkit";

const savedData = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: savedData ? savedData : null,
    isAuthenticated: savedData ? true : false,
  },
  reducers: {
    Login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    LOGOUT: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('user')
      localStorage.removeItem('Token')
    },
  },
});

export const { Login  , LOGOUT } = authSlice.actions;

export const isAuthenticated = (state) => state.auth.isAuthenticated;
export const user = (state) => state.auth.user;

export default authSlice.reducer;
