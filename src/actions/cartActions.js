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

export const removeProductFromCart = (id) => ({
  type: c.REMOVE_PRODUCT_FROM_CART,
  payload: id,
});

export const updateProductAmount = (id, amount = 1) => ({
  type: c.UPDATE_PRODUCT_AMOUNT,
  payload: { [id]: amount },
});
