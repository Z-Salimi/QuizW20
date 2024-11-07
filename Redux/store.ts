// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { ProductReducer } from './feature/product.slice';
import { CartReducer } from './feature/cart.slice';

export const store = configureStore({
  reducer: {
    product: ProductReducer,
    cart: CartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
