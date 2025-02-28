import { del, get, post, put, patch } from "../services/api_Helpers";
import { createApi } from "@reduxjs/toolkit/query/react";
import { AxiosError } from "axios";

import tagTypes from "./tags";

const methods = {
  get: get,
  post: post,
  put: put,
  delete: del,
  patch: patch,
};

const baseQuery = async ({ method = "get", ...args }) => {
  try {
    if (!methods[method]) {
      throw new Error("Method not found");
    }
    if (!args) {
      throw new Error("Arguments not found");
    }

    const res = await methods[method](...Object.values(args));
    return {
      data: res.data,
    };
  } catch (error) {
    if (error instanceof AxiosError)
      return {
        error: error.response.data,
      };

    return { error };
  }
};

const baseApi = createApi({
  reducerPath: "api",
  tagTypes,
  baseQuery,
  endpoints: () => ({}),
});

export const {
  reducer: apiReducer,
  middleware: apiMiddleware,
  reducerPath: apiReducerPath,
  injectEndpoints: injectApiEndpoints,
} = baseApi;



export default baseApi;
