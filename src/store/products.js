import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "p1", name: "product1", price: "200" },
  { id: "p2", name: "product2", price: "400" },
  { id: "p3", name: "product3", price: "600" },
  { id: "p4", name: "product4", price: "800" },
];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(action, state) {
      // state.push(action.payload);
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
