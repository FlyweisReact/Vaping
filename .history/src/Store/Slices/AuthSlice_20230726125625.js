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
   
  },
});



export default authSlice.reducer
