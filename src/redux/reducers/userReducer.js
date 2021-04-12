import {
  user_action_types as c,
  cart_action_types as cart,
} from "../actions/constants";

const initialState = {
  userInfos: {
    _id: null,
    firstname: null,
    lastname: null,
    email: null,
    role: "user",
    cart: [],
  },
  loading: false,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case c.GET_USER:
      return { ...state, loading: true };

    case c.GET_USER_SUCCESS:
      return { ...state, userInfos: action.payload, loading: false };

    case c.GET_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case cart.POST_PRODUCT_TO_CART_SUCCESS:
      return {
        ...state,
        userInfos: { ...state.userInfos, cart: action.payload },
      };

    case cart.CLEAR_ALL_CATRS:
      return {
        ...state,
        userInfos: { ...state.userInfos, cart: [] },
      };

    case c.CLEAR_ERRORS:
      return { ...state, error: null };

    default:
      return state;
  }
}
