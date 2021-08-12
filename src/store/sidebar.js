import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar(state, action) {
      console.log(state);
      return (state = !state);
    },
  },
});

export const sidebarActions = sidebarSlice.actions;

export default sidebarSlice.reducer;
