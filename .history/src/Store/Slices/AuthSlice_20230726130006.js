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
    Register : (state , action) {
        state.user = null ,
        state.er

    }
  },
});
