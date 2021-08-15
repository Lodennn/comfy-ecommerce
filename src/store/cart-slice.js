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
    addToCart(state, action) {
      console.log("ADDED");
      const { id, color, amount, product } = action.payload;
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === id + color
      );
      const existingProduct = state.cart[existingProductIndex];

      if (existingProduct) {
        let productAmount = existingProduct.amount + amount;

        if (productAmount > existingProduct.max) {
          productAmount = existingProduct.max;
        }

        state.cart[existingProductIndex] = {
          ...existingProduct,
          amount: productAmount,
          color: color,
        };
      } else {
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        state.cart.push(newItem);
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
