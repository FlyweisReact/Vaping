/** @format */

import { createSlice } from "@reduxjs/toolkit";

const user = localStorage.getItem("user");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: user ? JSON.parse(localStorage.getItem("user")) : null,
    error: null,
    isAuthenticated: user ? true : false,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.error = null;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    loginFailure: (state, action) => {
      (state.user = null), (state.error = action.payload);
      state.isAuthenticated = false;
    },
    logout: (state) => {
      (state.user = null),
        (state.error = null),
        (state.isAuthenticated = false);
      deleteCookie("user-token");
      localStorage.removeItem("user");
    },
    SignUpSuccess: (state, action) => {
      state.user = action.payload;
      state.error = null;
      state.isAuthenticated = false;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    SignUpFailure: (state, action) => {
      (state.user = null),
        (state.error = action.payload),
        (state.isAuthenticated = false);
    },
    UpdateProfile: (state, action) => {
      state.user = action.payload;
      console.log(state.user, "User");
      state.error = null;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});

export const {
  loginSuccess,
  loginFailure,
  logout,
  SignUpSuccess,
  SignUpFailure,
  UpdateProfile,
} = authSlice.actions;

export const isAuthenticated = (state) => state.authentication.isAuthenticated;
export const UserProfile = (state) => state.authentication.user;

export default authSlice.reducer;
