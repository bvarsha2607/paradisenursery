```jsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...item,
          quantity: 1,
        });
      }

      state.totalQuantity += 1;
      state.totalAmount += item.price;
    },

    removeFromCart: (state, action) => {
      const item = state.items.find(
        (cartItem) => cartItem.id === action.payload
      );

      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalAmount -= item.price * item.quantity;

        state.items = state.items.filter(
          (cartItem) => cartItem.id !== action.payload
        );
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find(
        (cartItem) => cartItem.id === action.payload
      );

      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalAmount += item.price;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        (cartItem) => cartItem.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
```

