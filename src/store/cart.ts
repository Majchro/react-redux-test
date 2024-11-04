import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types";

type CartState = {
  items: Array<{
    id: Product["id"];
    quantity: number;
    name: Product["name"];
    price: Product["price"];
  }>;
  totalPrice: number;
};

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Omit<Product, "description">>) => {
      const itemExists = state.items.find((item) => item.id === action.payload.id);
      if (itemExists) {
        itemExists.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      cartSlice.caseReducers.calculateTotalPrice(state);
    },
    removeProduct: (state, action: PayloadAction<Product["id"]>) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.items.splice(index, 1);

      cartSlice.caseReducers.calculateTotalPrice(state);
    },
    changeProductQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (!item) throw new Error("Item not found");

      if (quantity === 0) {
        cartSlice.caseReducers.removeProduct(state, action);
      } else {
        item.quantity = quantity;
      }

      cartSlice.caseReducers.calculateTotalPrice(state);
    },
    calculateTotalPrice: (state) => {
      state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
});

export const { addProduct, removeProduct, changeProductQuantity } = cartSlice.actions;

export default cartSlice.reducer;
