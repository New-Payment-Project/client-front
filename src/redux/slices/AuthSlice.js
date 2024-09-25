import { createSlice } from "@reduxjs/toolkit";

const route = localStorage.getItem("route");
const clientId = JSON.parse(localStorage.getItem("clientId"));

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    clientId: clientId || null,
    route: route || null,
  },
  reducers: {
    setAuthData: (state, action) => {
      state.clientId = action.payload;
      localStorage.setItem("clientId", JSON.stringify(state.clientId));
    },
    setRoute: (state, action) => {
      state.route = action.payload;
      localStorage.setItem("route", state.route);
    },
  },
});

export default AuthSlice.reducer;
export const { setAuthData, setRoute } = AuthSlice.actions;
