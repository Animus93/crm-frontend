import { createSlice } from "@reduxjs/toolkit";

const initialState = "";
export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    login: {
      reducer: (_, action) => {
        return action.payload;
      },
    },
  },
});

export const { login } = userInfoSlice.actions;
export default userInfoSlice.reducer;
