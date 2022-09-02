import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export type fetchAuthArgs = {
  email: string,
  password: string
}

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params: fetchAuthArgs) => {
  const { data } = await axios.post('/auth/login', params)
  return data;
})

const initialState = {
  data: null,
  status: 'loading',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.pending, (state) => {
      state.status = Status.LOADING;
      state.data = null;
    });
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchAuth.rejected, (state) => {
      state.data = null;
      state.status = Status.ERROR;
    });
  }
});

export const selectIsAuth = (state: any) => Boolean(state.auth.data)

export default authSlice.reducer;