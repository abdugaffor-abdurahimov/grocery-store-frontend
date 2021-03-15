import fetchDefault from "../clients";
import { products_action_types as c } from "./constants";

export const getProducts = () => ({
  type: c.GET_PRODUCTS,
});

export const getUserSuccess = (data) => ({
  type: c.GET_PRODUCTS_SUCCESS,
  payload: data,
});

export const getProductsFailure = (error) => ({
  type: c.GET_PRODUCTS_FAILURE,
  payload: error,
});

export function fetchProducts() {
  return async (dispatch) => {
    dispatch(getProducts());

    try {
      const res = await fetchDefault.get("/api/products");

      if (res.statusText === "OK") {
        dispatch(getUserSuccess(res.data));
      }
    } catch (error) {
      dispatch(getProductsFailure(error));
    }
  };
}
