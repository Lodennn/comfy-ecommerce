import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products-slice";
import sidebarReducer from "./sidebar-slice";
import singleProductReducer from "./singleProduct-slice";
import filterReducer from "./filter-slice";
import cartReducer from "./cart-slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    sidebar: sidebarReducer,
    product: singleProductReducer,
    filter: filterReducer,
    cart: cartReducer,
  },
});

export default store;
