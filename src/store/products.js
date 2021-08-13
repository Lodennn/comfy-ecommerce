import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  httpData: {},
  featuredProducts: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts(state, action) {
      const featuredProductsArray = action.payload.filter(
        (product) => product.featured === true
      );
      state.products = action.payload;
      state.featuredProducts = featuredProductsArray;
    },
    requestStatus(state, action) {
      state.httpData = {
        isLoading: action.payload.isLoading,
        error: action.payload.error,
      };
    },
  },
});

export const productsActions = productsSlice.actions;

// React Thunk
export const fetchProductsData = () => async (dispatch) => {
  dispatch(productsActions.requestStatus({ isLoading: true, error: null }));
  const sendRequest = async () => {
    try {
      const response = await fetch(
        "https://course-api.com/react-store-productss"
      );
      if (!response) throw new Error("Something went wrong!");
      dispatch(
        productsActions.requestStatus({ isLoading: false, error: null })
      );
      const data = await response.json();
      return data;
    } catch (err) {
      throw err;
    }
  };
  sendRequest()
    .then((data) => {
      dispatch(productsActions.addProducts(data));
    })
    .catch((err) =>
      dispatch(
        productsActions.requestStatus({ isLoading: false, error: err.message })
      )
    );
};

export default productsSlice.reducer;
