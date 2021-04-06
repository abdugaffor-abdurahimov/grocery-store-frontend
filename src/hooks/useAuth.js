import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/actions/userActions";

const useAuth = () => {
  const dispatch = useDispatch();
  const { userInfos, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    if (!error) {
      dispatch(fetchUser(signal));
    }
    return () => {
      abortController.abort();
    };
  }, [dispatch, error]);

  return { userInfos, loading, error };
};

export default useAuth;
