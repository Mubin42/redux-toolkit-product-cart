import { createSlice } from '@reduxjs/toolkit';

const tax = 0.1;

const initialState = {
  cartItems: [],
  totalItems: 0,
  totalSubTotal: 0,
  totalPrice: 0,
  tax: tax,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existItem = state.cartItems.find(
        (stateItem) => stateItem.id === item.id
      );
      if (existItem) {
        state.cartItems = state.cartItems.map((stateItem) =>
          stateItem.id === item.id
            ? {
                ...stateItem,
                quantity: stateItem.quantity + 1,
              }
            : stateItem
        );
      } else {
        const newItem = {
          ...item,
          quantity: 1,
        };
        state.cartItems = [...state.cartItems, newItem];
      }
      state.totalSubTotal = state.cartItems.reduce(
        (acc, stateItem) => acc + stateItem.price * stateItem.quantity,
        0
      );
      state.totalItems = state.cartItems.reduce(
        (acc, stateItem) => acc + stateItem.quantity,
        0
      );
      state.totalPrice = state.totalSubTotal + state.totalSubTotal * tax;
    },
    deleteOneFromTestCart: (state, action) => {
      const id = action.payload;
      const findItem = state.cartItems.find((stateItem) => stateItem.id === id);
      if (findItem) {
        if (findItem.quantity > 1) {
          state.cartItems = state.cartItems.map((stateItem) =>
            stateItem.id === id
              ? {
                  ...stateItem,
                  quantity: stateItem.quantity - 1,
                }
              : stateItem
          );
        } else {
          state.cartItems = state.cartItems.filter(
            (stateItem) => stateItem.id !== id
          );
        }
      }
      state.totalItems = state.cartItems.reduce(
        (acc, stateItem) => acc + stateItem.quantity,
        0
      );
      state.totalSubTotal = state.cartItems.reduce(
        (acc, stateItem) => acc + stateItem.price * stateItem.quantity,
        0
      );
      state.totalPrice = state.totalSubTotal + state.totalSubTotal * tax;
    },

    deleteSingleItemFromTestCart: (state, action) => {
      const id = action.payload;
      const findItem = state.cartItems.find((stateItem) => stateItem.id === id);
      if (findItem) {
        state.cartItems = state.cartItems.filter(
          (stateItem) => stateItem.id !== id
        );
      }
      state.totalItems = state.cartItems.reduce(
        (acc, stateItem) => acc + stateItem.quantity,
        0
      );
      state.totalSubTotal = state.cartItems.reduce(
        (acc, stateItem) => acc + stateItem.price * stateItem.quantity,
        0
      );
      state.totalPrice = state.totalSubTotal + state.totalSubTotal * tax;
    },
    deleteAllFromTestCart: (state, action) => {
      state.cartItems = [];
      state.totalSubTotal = 0;
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  deleteOneFromTestCart,
  deleteSingleItemFromTestCart,
  deleteAllFromTestCart,
} = cartSlice.actions;

export default cartSlice.reducer;
