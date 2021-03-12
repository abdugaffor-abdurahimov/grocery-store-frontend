import { fetchWithTokens } from "../clients";
import { user_action_types as c } from "./constants";

export const getUser = () => ({
  type: c.GET_USER,
});

export const getUserSuccess = (user) => ({
  type: c.GET_USER_SUCCESS,
  payload: user,
});

export const getUserFailure = (error) => ({
  type: c.GET_USER_FAILURE,
  payload: error,
});

export function fetchUser() {
  return async (dispatch) => {
    dispatch(getUser());

    try {
      const res = await fetchWithTokens.get("/api/users/me");

      if (res.statusText === "OK") {
        dispatch(getUserSuccess(res.data));
      }
    } catch (error) {
      dispatch(getUserFailure(error));
    }
  };
}
