import { configureStore, createSlice } from "@reduxjs/toolkit";
import productsReducer from "./products";
import sidebarReducer from "./sidebar";

const store = configureStore({
  reducer: { products: productsReducer, sidebar: sidebarReducer },
});

export default store;
