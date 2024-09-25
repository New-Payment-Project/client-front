import { createSlice } from "@reduxjs/toolkit";

const authData = JSON.parse(localStorage.getItem('authData'))

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    fullName: authData?.fullName || null,
    email: authData?.email || null,
    phone: authData?.phone || null,
    address: authData?.address || null,
  },
  reducers: {
    setAuthData: (state, action) => {
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.address = action.payload.address;

      localStorage.setItem("authData", JSON.stringify(state));
    },
  },
});

export default AuthSlice.reducer;
export const { setAuthData } = AuthSlice.actions;
