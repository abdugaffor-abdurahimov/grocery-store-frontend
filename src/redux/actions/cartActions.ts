import client from "../../httpClient";
import { cart_action_types as c } from "./constants";

export const addProductToCart = (productId: string, amount = 1) => ({
	type: c.ADD_PRODUCT_TO_CART,
	payload: {
		amount,
		productId,
	},
});

const postAddProductFailure = (err: string) => ({
	type: c.POST_PRODUCT_TO_CART_FAILURE,
	payload: err,
});

export const postAddProductSuccess = (data: any) => ({
	type: c.POST_PRODUCT_TO_CART_SUCCESS,
	payload: data,
});

export const removeProductFromCart = (id: string) => ({
	type: c.REMOVE_PRODUCT_FROM_CART,
	payload: id,
});

export const updateProductAmount = (id: string, amount = 1) => ({
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

export const clearAllCarts = () => ({ type: c.CLEAR_ALL_CATRS });

export function sendAddProductToCart(
	productId: string,
	userId: string,
	amount = 1
) {
	return async (dispatch: any) => {
		dispatch(addProductToCart(productId, amount));

		client
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
