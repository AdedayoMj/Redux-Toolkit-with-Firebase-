import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import productsReducer from "../slices/productSlice";
import { userReducer } from "../slices/userSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
