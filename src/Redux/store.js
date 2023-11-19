import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./createReducer";

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
