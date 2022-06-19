import { createSlice } from "@reduxjs/toolkit";
import ls from "local-storage";

const initialState = {
  isLogin: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {   
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
      ls.remove("token");
      ls.remove("role");
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export const selectIsLogin = (state) => state.auth.isLogin;

export default authSlice.reducer;
