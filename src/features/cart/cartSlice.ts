import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "../../models/product";

const initialState: Product[] = [];

const getItemIndex = (state: Product[], idToFind: number): number => {
  const ids = state.map((item) => item.id);
  
  return ids.indexOf(idToFind);
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action: PayloadAction<Product>) {
      const itemIndex = getItemIndex(state, action.payload.id);
      if (itemIndex && itemIndex < 0) state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    incrementQuantity(state, action: PayloadAction<{ id: number }>) {
      const itemIndex = getItemIndex(state, action.payload.id);
      if (itemIndex && itemIndex >= 0) state[itemIndex].quantity+=1;
    },
    decrementQuantity(state, action: PayloadAction<{ id: number }>) {
      const itemIndex = getItemIndex(state, action.payload.id);
      if (itemIndex && itemIndex >= 0) state[itemIndex].quantity-=1;
    },
  },
});

export const { add, remove, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
