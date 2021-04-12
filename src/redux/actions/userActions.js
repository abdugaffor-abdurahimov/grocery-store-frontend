import { fetchWithTokens } from "../../clients";
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

export const clearUserErrors = () => ({
  type: c.CLEAR_ERRORS,
});

export function fetchUser(signal) {
  return async (dispatch) => {
    dispatch(getUser());

    try {
      const res = await fetchWithTokens.get("/api/users/me", {
        signal,
      });

      if (res.statusText === "OK") {
        dispatch(getUserSuccess(res.data));
      }
    } catch (error) {
      console.log("error.response", error.res);
      dispatch(getUserFailure(error.message));
    }
  };
}
