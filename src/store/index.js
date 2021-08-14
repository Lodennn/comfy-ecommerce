import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products-slice";
import sidebarReducer from "./sidebar";
import singleProductReducer from "./singleProduct-slice";
import filterReducer from "./filter-slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    sidebar: sidebarReducer,
    product: singleProductReducer,
    filter: filterReducer,
  },
});

export default store;
