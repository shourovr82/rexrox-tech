import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./pcbuilder/productSlice";

const store = configureStore({
  reducer: {
    products: productReducer
  },
})


export default store;