import { createSlice } from "@reduxjs/toolkit";
import { singleProductUrl } from "../utils/constants";

const initialState = {
  product: {},
  httpData: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addSingleProduct(state, action) {
      state.product = action.payload;
    },
    requestStatus(state, action) {
      state.httpData = {
        isLoading: action.payload.isLoading,
        error: action.payload.error,
      };
    },
  },
});

export const singleProductActions = productSlice.actions;

// React Thunk - Fetching Single Product
export const fetchSingleProductData = (id) => async (dispatch) => {
  dispatch(
    singleProductActions.requestStatus({ isLoading: true, error: null })
  );
  const sendRequest = async () => {
    try {
      const response = await fetch(`${singleProductUrl}${id}`);
      if (!response) throw new Error("Something went wrong!");
      dispatch(
        singleProductActions.requestStatus({ isLoading: false, error: null })
      );
      const data = await response.json();
      return data;
    } catch (err) {
      throw err;
    }
  };
  sendRequest()
    .then((data) => {
      dispatch(singleProductActions.addSingleProduct(data));
    })
    .catch((err) =>
      dispatch(
        singleProductActions.requestStatus({
          isLoading: false,
          error: err.message,
        })
      )
    );
};

export default productSlice.reducer;
