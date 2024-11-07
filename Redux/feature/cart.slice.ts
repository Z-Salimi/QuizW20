import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductCard } from "../../components/productCard";

export interface CartListState {
  list: IProductCard[];
}

const initialState: CartListState = {
  list: [],
};

export const CartSlice = createSlice({
  name: "CartList",
  initialState,
  reducers: {
    addCart: (
      state,
      action: PayloadAction<{
        id: number;
        title: string;
        price: number;
        shippingInformation: string;
        rating: number;
        image: string[];
        added: boolean;
        stock: number;
      }>
    ) => {
      state.list.push({
        id: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
        shippingInformation: action.payload.shippingInformation,
        rating: action.payload.rating,
        image: action.payload.image,
        added: true,
        stock: action.payload.stock,
      });
    },
    removeCart: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    isAdded: (state, action: PayloadAction<number>) => {
      state.list = state.list.map((el) => {
        if (el.id === action.payload) {
          return { ...el, added: true };
        }
        return el;
      });
    },
    notAdded: (state, action: PayloadAction<number>) => {
      state.list = state.list.map((el) => {
        if (el.id === action.payload) {
          return { ...el, added: false };
        }
        return el;
      });
    },
    clearCart: (state) => {
      state.list = [];
    },
  },
});

export const CartActions = CartSlice.actions;
export const CartReducer = CartSlice.reducer;
