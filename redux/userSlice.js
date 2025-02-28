import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleted, get, post, put } from "../services/api_Helpers";

// Async thunk for adding a user
export const addUser = createAsyncThunk("user/addUser", async (userData) => {
  const response = await post("/auth/add-user", userData);
  return response.data;
});

// Async thunk for getting the user list
export const getUserList = createAsyncThunk("user/list", async (userData) => {
  try {
    let url = `/auth/user-list?role=${userData?.role}&name=${userData?.name}&status=${userData?.status}&date=${userData?.date}`;
    const response = await get(url);
    return response.data;
  } catch (error) {
    console.log(error, "error");
  }
});

// Async thunk for deleting a user
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await deleted(`/auth/delete-user/${body}`);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// Async thunk for updating a user
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (userData) => {
    const { id, ...body } = userData;
    const response = await put(`/auth/edit-user/${id}`, body);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    resetState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(getUserList.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(getUserList.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success) {
          state.users =
            action.payload.users.length > 0 &&
            action.payload?.users.map((item) => {
              return {
                name: item.first_name + " " + item.last_name,
                listing: 0,
                ...item,
              };
            });
          state.success = true;
        }
      })
      .addCase(addUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getUserList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updateUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetState } = userSlice.actions;

export default userSlice.reducer;
