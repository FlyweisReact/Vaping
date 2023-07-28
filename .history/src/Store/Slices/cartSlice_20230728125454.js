/** @format */

import { createSlice } from "@reduxjs/toolkit";

const savedData = JSON.parse(localStorage.getItem("cart"));

const authSlice = createSlice({
  name: "cart",
  initialState: {
    cart : savedData ? savedData : null,
  },
  reducers: {
    GetCart : ( state , action ) => {
        
    },
    Login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    LOGOUT: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
      localStorage.removeItem("Token");
    },
    UPDATE_PROFILE: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});

export const { Login, LOGOUT , UPDATE_PROFILE } = authSlice.actions;

export const isAuthenticated = (state) => state.auth.isAuthenticated;
export const user = (state) => state.auth.user;

export default authSlice.reducer;
