const { createSlice } = require("@reduxjs/toolkit");

const getLocalStorage = (key) => {
  let cart = JSON.parse(localStorage.getItem(key));
  if (cart) {
    return cart;
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage("cart"),
  totalItems: 0,
  totalAmount: 0,
  shippingFee: 534,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
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

    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    toggleCartAmount(state, action) {
      const updatedItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItem = state.cart[updatedItemIndex];

      let updatedProductAmount = updatedItem.amount;

      if (action.payload.type === "inc") {
        if (updatedProductAmount >= updatedItem.max) {
          updatedProductAmount = updatedItem.max;
        } else {
          updatedProductAmount++;
        }
      } else {
        if (updatedProductAmount === 1) {
          updatedProductAmount = 1;
        } else {
          updatedProductAmount--;
        }
      }
      updatedItem.amount = updatedProductAmount;
    },

    clearCart(state, action) {
      state.cart = [];
    },

    calculateCartTotalItems(state, action) {
      const { totalAmount, totalItems } = state.cart.reduce(
        (acc, cur) => {
          let totalItems = acc.totalItems + cur.amount;
          let totalAmount = acc.totalAmount + cur.amount * cur.price;
          return {
            totalAmount,
            totalItems,
          };
        },
        {
          totalAmount: 0,
          totalItems: 0,
        }
      );
      state.totalAmount = totalAmount;
      state.totalItems = totalItems;
    },

    persistLocalStorage(state, action) {
      localStorage.setItem("cart", JSON.stringify(action.payload));
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
