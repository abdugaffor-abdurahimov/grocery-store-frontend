import { useEffect } from "react";
import { useHistory } from "react-router";

const useScrollTop = () => {
	const history = useHistory();

	useEffect(() => {
		// window.scroll(0, 0);
		// return () => window.removeEventListener("scroll", window.scroll);
	}, [history.location]);
};

export default useScrollTop;
