import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProducts: [],
  allProducts: [],
  gridView: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    getAllProducts(state, action) {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
    },
    toggleView(state, action) {
      state.gridView = !state.gridView;
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;
