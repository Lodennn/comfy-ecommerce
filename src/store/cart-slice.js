const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cart: [],
  totalItems: 0,
  totalAmount: 0,
  shippingFee: 534,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
