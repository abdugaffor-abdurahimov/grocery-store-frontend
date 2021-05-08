import React, { useState } from "react";
import "./App.scss";
import DrawerCard from "./components/navbars/CartDrawer";
import Appbar from "./components/navbars/Appbar";
import Footer from "./components/footer/Footer";
import useDocumentTitle from "./hooks/useDocumentTitle";
import useAuth from "./hooks/useAuth";
import useScrollTop from "./hooks/useScrollTop";
import Pages from "./pages";
import { useLocation } from "react-router";

function App() {
	const [cartOpen, setCartOpen] = useState(false);
	const toggleCart = () => setCartOpen(!cartOpen);
	const { pathname: path } = useLocation();
	useDocumentTitle(path.split("/")[1].toUpperCase());

	useScrollTop();

	useAuth();

	return (
		<div className="App">
			<Pages />
			{path === "/login" || path === "/register" || (
				<>
					<Appbar toggleCart={toggleCart} />
					<DrawerCard cartOpen={cartOpen} />
					<Footer />
				</>
			)}
		</div>
	);
}

export default App;
