import { createSlice } from "@reduxjs/toolkit";
import ls from "local-storage";

const initialState = {
  isLogin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      ls("token", action.payload);
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
