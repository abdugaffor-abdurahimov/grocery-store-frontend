import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/actions/userActions";

const useAuth = () => {
  const dispatch = useDispatch();
  const { userInfos, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    if (!userInfos._id) {
      dispatch(fetchUser(signal));
    }
    return function cleanup() {
      abortController.abort();
    };
  }, [dispatch, userInfos._id]);

  return { userInfos, loading, error };
};

export default useAuth;
