// blogSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { post } from '../services/api_Helpers';

// Async thunk to create a blog
export const createBlog = createAsyncThunk('blog/createBlog', async (blogData, { rejectWithValue }) => {
  try {
    const response = await post('/createBlog', blogData);
    return response?.data;
  } catch (error) {
    return rejectWithValue(error?.response?.data);
  }
});

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    blog: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBlog.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.blog = action.payload;
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default blogSlice.reducer;