import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },

  devTools: true,
});

setupListeners(store.dispatch);
