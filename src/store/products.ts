import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types";
import { getAll } from "../api/products";

type ProductsState = {
  products: Product[];
};

const initialState: ProductsState = {
  products: [],
};

export const fetchProducts = createAsyncThunk("products/fetchProducts", getAll);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
