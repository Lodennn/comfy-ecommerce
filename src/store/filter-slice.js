import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProducts: [],
  allProducts: [],
  gridView: false,
  sort: "price-lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    minPrice: 0,
    maxPrice: 0,
    price: 0,
    shipping: false,
  },
};

// let maxPrice = 0;

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
      const { name, value } = action.payload;
      state.filters = { ...state.filters, [name]: value };
    },
    clearFilters(state, action) {
      state.filters = {
        ...state.filters,
        text: "",
        category: "all",
        company: "all",
        color: "all",
        price: state.filters.maxPrice,
        shipping: false,
      };
      state.filteredProducts = state.allProducts;
    },
    loadFilters(state, action) {
      state.filters = state.filters;
    },
    filterProducts(state, action) {
      const { allProducts } = state;
      let tempProducts = [...allProducts];

      //prettier-ignore
      const {text, category, company, color, price, shipping} = state.filters;

      // text
      if (text) {
        tempProducts = tempProducts.filter((product) =>
          product.name.toLowerCase().startsWith(text)
        );
      }
      // category
      if (category !== "all") {
        tempProducts = tempProducts.filter(
          (product) => product.category === category
        );
      }
      // company
      if (company !== "all") {
        tempProducts = tempProducts.filter(
          (product) => product.company === company
        );
      }
      // colors
      if (color !== "all") {
        tempProducts = tempProducts.filter((product) =>
          product.colors.find((c) => c === color)
        );
      }
      // price
      if (price !== "all") {
        tempProducts = tempProducts.filter((product) => product.price <= price);
      }

      // price
      if (shipping) {
        tempProducts = tempProducts.filter((product) => product.shipping);
      }
      state.filteredProducts = tempProducts;
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;
