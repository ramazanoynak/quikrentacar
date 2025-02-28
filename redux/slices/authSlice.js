"use client";
import { createSlice } from "@reduxjs/toolkit";

const getAuthStateFromStorage = () => {
  // const user = localStorage.getItem("user") || null;
  // const token = localStorage.getItem("token") || null;
  const user = null;
  const token = null;
  if (!user || !token)
    return {
      isAuthenticated: false,
      user: null,
      token: null,
    };
  return {
    isAuthenticated: true,
    user: JSON.parse(user),
    token: token,
  };
};

const initialState = getAuthStateFromStorage();

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleLogin: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      // localStorage.setItem("user", JSON.stringify(user));
      // localStorage.setItem("token", token?.access?.token);
      // localStorage.setItem("refreshToken", token?.refresh?.token);
    },
    handleLogout: (state) => {
      // localStorage.removeItem("user");
      // localStorage.removeItem("token");
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const { handleLogin, handleLogout } = authSlice.actions;
export default authSlice.reducer;
