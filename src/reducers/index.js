import { combineReducers } from "redux";
import user from "./userReducer";
import products from "./productsReducer";
import cart from "./cartReducer";

const rootReducer = combineReducers({
  user,
  products,
  cart,
});

export default rootReducer;
