import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toastMessage: null,
  toastStatus: null,
  loading: false,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setToastMessage: (state, action) => {
      state.toastMessage = action.payload?.message;
      state.toastStatus = action.payload?.success;
      },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setToastMessage, setLoading } = commonSlice.actions;

export default commonSlice.reducer;