import client from "../../httpClient";
import { products_action_types as c } from "./constants";

export const getProducts = () => ({
	type: c.GET_PRODUCTS,
});

export const getProductsSuccess = (data: any) => ({
	type: c.GET_PRODUCTS_SUCCESS,
	payload: data,
});

export const getProductsFailure = (error: any) => ({
	type: c.GET_PRODUCTS_FAILURE,
	payload: error,
});

export const setCurrentProduct = (product: IProduct) => ({
	type: c.SET_CURRENT_PRODUCT,
	payload: product,
});

export function fetchProducts() {
	return async (dispatch: any) => {
		dispatch(getProducts());

		try {
			const res = await client.get("/api/products");

			if (res.statusText === "OK") {
				dispatch(getProductsSuccess(res.data));
			}
		} catch (error) {
			dispatch(getProductsFailure(error));
		}
	};
}
