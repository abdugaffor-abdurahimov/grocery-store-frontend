import client from "../../httpClient";
import { user_action_types as c } from "./constants";

export const getUser = () => ({
	type: c.GET_USER,
});

export const getUserSuccess = (user: IUser) => ({
	type: c.GET_USER_SUCCESS,
	payload: user,
});

export const getUserFailure = (error: IError) => ({
	type: c.GET_USER_FAILURE,
	payload: error,
});

export const clearUserErrors = () => ({
	type: c.CLEAR_ERRORS,
});

export function fetchUser() {
	return async (dispatch: any) => {
		dispatch(getUser());

		try {
			const res = await client.get("/api/users/me");

			if (res.statusText === "OK") {
				dispatch(getUserSuccess(res.data));
			}
		} catch (error) {
			dispatch(getUserFailure(error.message));
		}
	};
}
