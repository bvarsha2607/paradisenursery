import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
    // Add item to cart
    addItem: (state, action) => {
      const item = state.find(
        (product) => product.id === action.payload.id
      );

      if (item) {
        item.quantity += 1;
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    // Remove item from cart
    removeItem: (state, action) => {
      return state.filter(
        (product) => product.id !== action.payload
      );
    },

    // Update item quantity
    updateQuantity: (state, action) => {
      const item = state.find(
        (product) => product.id === action.payload.id
      );

      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;

