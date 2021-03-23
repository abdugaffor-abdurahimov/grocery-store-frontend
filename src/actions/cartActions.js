import { fetchWithTokens } from "../clients";
import { cart_action_types as c } from "./constants";

export const addProductToCart = (product, amount = 1) => ({
  type: c.ADD_PRODUCT_TO_CART,
  payload: {
    [product._id]: {
      amount,
      img: product.images[0],
      name: product.name,
      price: product.price,
    },
  },
});

const postAddProductFailure = (err) => ({
  type: c.POST_PRODUCT_TO_CART_FAILURE,
  payload: err,
});

const postAddProductSuccess = () => ({
  type: c.POST_PRODUCT_TO_CART_SUCCESS,
});

export const removeProductFromCart = (id) => ({
  type: c.REMOVE_PRODUCT_FROM_CART,
  payload: id,
});

export const updateProductAmount = (id, amount = 1) => ({
  type: c.UPDATE_PRODUCT_AMOUNT,
  payload: { id, amount },
});

export function sendAddProductToCart(product, userId, amount = 1) {
  return async (dispatch) => {
    dispatch(addProductToCart(product, amount));

    fetchWithTokens
      .post("/api/cart", {
        quantity: 1,
        productId: product.id,
        userId: userId,
      })
      .then((response) => {
        console.log(response);
        if (response.statusText === "OK") dispatch(postAddProductSuccess());
      })
      .catch((err) => {
        dispatch(postAddProductFailure(err.message));
      });
  };
}
