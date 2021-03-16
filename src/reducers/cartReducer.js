import { cart_action_types as c } from "../actions/constants";

const initialState = {
  basket: {},
  loading: false,
  error: null,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case c.ADD_PRODUCT_TO_CART:
      return { ...state, basket: { ...state.basket, ...action.payload } };

    // case c.REMOVE_PRODUCT_FROM_CART:
    //   return {
    //     ...state,
    //     basket: state.basket.filter((item) => item.id !== action.payload),
    //   };

    // case c.UPDATE_PRODUCT_AMOUNT:
    //   return {
    //     ...state,
    //     basket: [state.basket.map({id, amout})=> id === action.payload.id6],
    //   };

    default:
      return state;
  }
}
