import { useEffect } from "react";
import { useHistory } from "react-router";

const useScrollTop = () => {
	const { location } = useHistory();

	const scrollToTop = () => window.scroll(0, 0);

	useEffect(() => {
		scrollToTop();
		return () => window.removeEventListener("scroll", scrollToTop);
	}, [location.pathname]);
};

export default useScrollTop;
