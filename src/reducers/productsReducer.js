import { products_action_types as c } from "../actions/constants";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case c.GET_PRODUCTS:
      return { ...state, loading: true };

    case c.GET_PRODUCTS_SUCCESS:
      return { ...state, data: action.payload, loading: false };

    case c.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
