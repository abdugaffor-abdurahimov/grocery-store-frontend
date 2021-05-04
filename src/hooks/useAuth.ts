import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/actions/userActions";

const useAuth = () => {
	const dispatch = useDispatch();
	const { userInfos, loading, error } = useSelector((state: any) => state.user);

	useEffect(() => {
		// const abortController = new AbortController();
		// const signal = abortController.signal;

		if ((userInfos._id, !error)) {
			dispatch(fetchUser());
		}
		return () => {
			// abortController.abort();
		};
	}, [dispatch, userInfos._id, error]);

	return { userInfos, loading, error };
};

export default useAuth;
