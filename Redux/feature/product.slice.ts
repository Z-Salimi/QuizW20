import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductCard } from "../../components/productCard";
import { IProduct } from "../../types/product.type";

export interface ProductListState {
  list: IProductCard[];
  filterList: IProductCard[];
  includeOutOfStock: boolean;
  fastDeliveryOnly: boolean;
  idCounter: number;
}

const initialState: ProductListState = {
  list: [],
  filterList: [],
  includeOutOfStock: false,
  fastDeliveryOnly: false,
  idCounter: 1,
};

export const ProductSlice = createSlice({
  name: "ProductList",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      const products = action.payload.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        shippingInformation: product.shippingInformation,
        rating: product.rating,
        image: product.images,
        added: false,
        stock: product.stock,
      }));
      state.list = products;
      state.filterList = products;
    },
    sortTitleA: (state) => {
      state.filterList.sort((a, b) => a.title.localeCompare(b.title));
    },
    sortTitleD: (state) => {
      state.filterList.sort((a, b) => b.title.localeCompare(a.title));
    },
    toggleStock: (state) => {
      state.includeOutOfStock = !state.includeOutOfStock;
      state.filterList = state.includeOutOfStock
        ? state.list
        : state.list.filter((product) => product.stock > 0);
    },
    toggleFastDelivery: (state) => {
      state.fastDeliveryOnly = !state.fastDeliveryOnly;
      state.filterList = state.fastDeliveryOnly
        ? state.list.filter((product) =>
            product.shippingInformation.includes("night")
          )
        : state.list;
    },
    clearFilters: (state) => {
      state.includeOutOfStock = false;
      state.fastDeliveryOnly = false;
      state.filterList = state.list;
    },
    filterByStars: (state, action: PayloadAction<number>) => {
      const selectedStars = action.payload;
      state.filterList = state.list.filter(
        (product) => product.rating >= selectedStars
      );
    },
  },
});

export const ProductActions = ProductSlice.actions;
export const ProductReducer = ProductSlice.reducer;
