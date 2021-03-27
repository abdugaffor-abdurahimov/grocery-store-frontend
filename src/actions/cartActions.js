import { fetchWithTokens } from "../clients";
import { cart_action_types as c } from "./constants";

export const addProductToCart = (productId, amount = 1) => ({
  type: c.ADD_PRODUCT_TO_CART,
  payload: {
    amount,
    productId,
  },
});

const postAddProductFailure = (err) => ({
  type: c.POST_PRODUCT_TO_CART_FAILURE,
  payload: err,
});

export const postAddProductSuccess = (data) => ({
  type: c.POST_PRODUCT_TO_CART_SUCCESS,
  payload: data,
});

export const removeProductFromCart = (id) => ({
  type: c.REMOVE_PRODUCT_FROM_CART,
  payload: id,
});

export const updateProductAmount = (id, amount = 1) => ({
  type: c.UPDATE_PRODUCT_AMOUNT,
  payload: { id, amount },
});

export const getAllCarts = () => ({
  type: c.GET_ALL_CATRS,
});

export const getAllCartsSuccess = () => ({
  type: c.GET_ALL_CATRS_SUCCESS,
});

export const getAllCartsFailure = () => ({
  type: c.GET_ALL_CATRS_FAILURE,
});

export function sendAddProductToCart(productId, userId, amount = 1) {
  return async (dispatch) => {
    dispatch(addProductToCart(productId, amount));

    fetchWithTokens
      .post(`/api/users/${userId}/addToCart`, {
        amount: 1,
        product: productId,
      })
      .then((response) => {
        if (response.statusText === "Created") {
          dispatch(postAddProductSuccess(response.data));
        }
      })
      .catch((err) => {
        dispatch(postAddProductFailure(err.message));
      });
  };
}
