import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./ProductsReducer";

const rootReducer = combineReducers({
  products: ProductsReducer,
});

export default configureStore({
  reducer: rootReducer,
});
