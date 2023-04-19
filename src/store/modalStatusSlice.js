import { createSlice } from "@reduxjs/toolkit";

const initialState = false;
export const modalStatusSlice = createSlice({
  name: "modalStatus",
  initialState,
  reducers: {
    status: {
      reducer: (_, action) => {
        return action.payload;
      },
    },
  },
});

export const { status } = modalStatusSlice.actions;
export default modalStatusSlice.reducer;
