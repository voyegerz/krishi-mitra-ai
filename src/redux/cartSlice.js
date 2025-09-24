import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    TotalItems: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        item => item.name === action.payload.name,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        state.TotalItems += 1;
      }
    },
    removeFromCart: (state, action) => {
      const item = state.cart.find(item => item.name === action.payload.name);
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cart = state.cart.filter(
          item => item.name !== action.payload.name,
        );
      }
    },
    emptyCart: state => {
      state.cart = [];
      state.TotalItems = 0;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
