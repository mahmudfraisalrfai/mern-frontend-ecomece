import { createSlice } from "@reduxjs/toolkit";
const ProductsReducer = createSlice({
  name: "products",
  initialState: {
    product: [],
    cart: [],
  },
  reducers: {
    startExamAction: (state, action) => {
      const { cartData, products } = action.payload;
      return {
        product: products,
        cart: cartData,
      };
    },

    addProduct: (state, action) => {
      state.cart[action.payload] = state.cart[action.payload] + 1;
    },
    removeProduct: (state, action) => {
      state.cart[action.payload] = state.cart[action.payload] - 1;
    },
  },
});

export const { addProduct, startExamAction, removeProduct } =
  ProductsReducer.actions;
export default ProductsReducer.reducer;
