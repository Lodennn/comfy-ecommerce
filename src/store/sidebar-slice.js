import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar(state, _) {
      return !state;
    },
  },
});

export const sidebarActions = sidebarSlice.actions;

export default sidebarSlice.reducer;
