import { configureStore, createSlice } from "@reduxjs/toolkit";
import productsReducer from "./products-slice";
import sidebarReducer from "./sidebar";
import singleProductReducer from "./singleProduct-slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    sidebar: sidebarReducer,
    product: singleProductReducer,
  },
});

export default store;
