import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";

const baseURL = process.env.REACT_APP_BACKEND_URL;
const cleanObject = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== null && value !== "")
  );
};
export const createFormData = (values = {}, options = {}) => {
  const { filter = [] } = options;
  const formData = new FormData();
  for (const key in values) {
    if (Object.hasOwnProperty.call(values, key)) {
      let value = values[key];
      if (filter.includes(key)) {
        continue;
      }
      if (
        value instanceof File === false &&
        typeof value === "object" &&
        !Array.isArray(value)
      ) {
        value = JSON.stringify(values[key]);
      }

      if (Array.isArray(value) && value.length > 0) {
        console.log(value);
        value.forEach((file) => {
          formData.append(key, file);
        });
      } else {
        formData.append(key, value);
      }
    }
  }
  return formData;
};

export const convertToFormData = (comingValues) => {
  const values = cleanObject(comingValues);
  const formData = new FormData();
  for (const key in values) {
    if (key == "deletedFiles") {
      formData.append(key, JSON.stringify(values[key]));
    } else if (Array.isArray(values[key])) {
      values[key].forEach((item) => {
        if (item instanceof File) {
          formData.append(key, item);
        }
      });
    } else {
      formData.append(key, values[key]);
    }
  }
  return formData;
};

export const convertToFormDataForPurchaseOrder = (comingValues) => {
  const values = cleanObject(comingValues);
  const formData = new FormData();
  for (const key in values) {
    if (key == "deletedFiles" || key == "items") {
      formData.append(key, JSON.stringify(values[key]));
    } else if (Array.isArray(values[key])) {
      values[key].forEach((item) => {
        if (item instanceof File) {
          formData.append(key, item);
        }
      });
    } else {
      formData.append(key, values[key]);
    }
  }
  return formData;
};

export const isAccessTokenExpired = (accessToken) => {
  const decoded = jwtDecode(accessToken);
  const now = Date.now() / 1000; // Current time in seconds
  return decoded.exp < now;
};

export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  const response = await fetch(`${baseURL}/v1/auth/refresh-tokens`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
  });

  if (!response.ok) {
    console.log("Failed............");

    throw new Error("Failed to refresh access token");
  }

  const data = await response.json();
  localStorage.setItem("token", data.token.access.token);
  localStorage.setItem("refreshToken", data.token.refresh.token);

  console.log(data, "refresh");
  return data.token.access.token;
};

export const formatDate = (isoDate) => {
  const date = new Date(isoDate);

  // Format to human-readable date
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

export const formatDateForInput = (dateString) => {
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
};