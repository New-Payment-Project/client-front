import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const authData = JSON.parse(localStorage.getItem("authData"));

export const fetchClients = createAsyncThunk(
  "fetchClients",
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/invoices/${authData._id}`
      );
      console.log(response);
      
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    clientData: authData ||  {},
    status: null,
    error: null,
  },
  reducers: {
    setAuthData: (state, action) => {
      state.clientData = action.payload;

      localStorage.setItem("authData", JSON.stringify(state.clientData));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchClients.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchClients.fulfilled, (state, action) => {
        state.status = "success";
        state.clientData = action.payload;
      })
      .addCase(fetchClients.rejected, (state, action) => {
        state.status = "failed";
        // state.clientData = action.payload;
      });
  },
});

export default AuthSlice.reducer;
export const { setAuthData } = AuthSlice.actions;
