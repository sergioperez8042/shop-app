import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Product from "../../models/product";
import { getProduct } from "./productAPI";

export interface ProductState {
  data: Product[] | null;
page: number;
  error: string | null;
  isLoading: boolean;
}
//@ts-ignore
const initialState = {
  data: [],
  pages: 0,

  isLoading: false,
} as ProductState;

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(
        getProduct.fulfilled,
        (state, action: PayloadAction<Product[] | null>) => {
          state.isLoading = false;
          state.data = action.payload as Product[];
        }
      )
      .addCase(getProduct.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
