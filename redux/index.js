import { combineReducers, configureStore } from "@reduxjs/toolkit";
import common from "./commonSlice";
import user from "./userSlice";
import blog from "./blogSlice";
import { apiMiddleware, apiReducer, apiReducerPath } from "./api";
import auth from "./slices/authSlice";
import { findPlaceSlice } from "@/features/hero/findPlaceSlice";

const combineReducer = combineReducers({
  common,
  user,
  blog,
  auth,
  hero: findPlaceSlice,
  [apiReducerPath]: apiReducer,
});

export const store = configureStore({
  reducer: combineReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddleware),
});
