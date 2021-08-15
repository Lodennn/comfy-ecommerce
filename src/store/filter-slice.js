import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProducts: [],
  allProducts: [],
  gridView: false,
  sort: "price-lowest",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    minPrice: 0,
    maxPrice: "",
    price: "",
    shipping: false,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    getAllProducts(state, action) {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
      const maxPrice = state.filteredProducts.reduce((acc, cur) => {
        return Math.max(acc, cur.price);
      }, 0);
      state.filters.price = state.filters.maxPrice = maxPrice;
    },
    toggleView(state, action) {
      state.gridView = !state.gridView;
    },
    sortBy(state, action) {
      if (action.payload === "price-lowest") {
        state.sort = action.payload;
        state.filteredProducts = state.filteredProducts.sort(
          (a, b) => a.price - b.price
        );
      }
      if (action.payload === "price-highest") {
        state.sort = action.payload;
        state.filteredProducts = state.filteredProducts.sort(
          (a, b) => b.price - a.price
        );
      }
      if (action.payload === "name-a") {
        state.sort = action.payload;
        state.filteredProducts = state.filteredProducts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (action.payload === "name-z") {
        state.sort = action.payload;
        state.filteredProducts = state.filteredProducts.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
    },
    updateFilters(state, action) {
      console.log("FILTERED");
      const { name, value } = action.payload;
      state.filters = { ...state.filters, [name]: value };
    },
    clearFilters(state, action) {},
    loadFilters(state, action) {
      state.filters = state.filters;
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;
