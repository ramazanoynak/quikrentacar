import { getToken } from "@/utils/cookies";
import axios from "axios";
// import { isAccessTokenExpired, refreshAccessToken } from "../utils/helpers";

const baesURL = process.env.NEXT_PUBLIC_BACKEND_URL;
// console.log("🚀 ~ baesURL:", baesURL);

const axiosInstance = axios.create({
  baseURL: `${baesURL}/v1`,
});

export const authInstance = axios.create({
  baseURL: `${baesURL}/v1`,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    let accessToken = getToken();
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export const get = (api) => axiosInstance.get(api);
export const post = (api, body, config) =>
  axiosInstance.post(api, body, config);
export const postForm = (url, body, options) =>
  axiosInstance.post(url, body, {
    ...options,
    headers: {
      ...options?.headers,
      "Content-Type": "multipart/form-data", // Set Content-Type for the specific request
    },
  });

export const putForm = (url, body, options) =>
  axiosInstance.put(url, body, {
    ...options,
    headers: {
      ...options?.headers,
      "Content-Type": "multipart/form-data", // Set Content-Type for the specific request
    },
  });
export const put = (api, body, config) => axiosInstance.put(api, body, config);
export const deleted = (api, body) => axiosInstance.delete(api, { data: body });
export const del = (api, body) => axiosInstance.delete(api, { data: body });

export const patch = async (url, body, config = {}) =>
  axiosInstance.patch(url, body, config);
