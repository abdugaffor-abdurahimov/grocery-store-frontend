import { combineReducers } from "redux";
import user from "./reducers/userReducer";
import products from "./reducers/productsReducer";

const rootReducer = combineReducers({
  user,
  products,
});

export default rootReducer;
