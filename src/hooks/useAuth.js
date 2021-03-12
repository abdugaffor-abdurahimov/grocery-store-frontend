import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../actions/userActions";

const useAuth = () => {
  const dispatch = useDispatch();
  const { userInfos, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (!userInfos._id) {
      dispatch(fetchUser());
    }
  }, [dispatch, userInfos._id]);

  return { userInfos, loading, error };
};

export default useAuth;
