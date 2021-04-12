import "./App.scss";
import "react-multi-carousel/lib/styles.css";
import { Route, useLocation } from "react-router-dom";
import { Login, Register } from "./pages/auth";
import Home from "./pages/home";
import DrawerCard from "./components/navbars/CartDrawer";
import Appbar from "./components/navbars/Appbar";
import useDocumentTitle from "./hooks/useDocumentTitle";
import Details from "./pages/details";
import { useState } from "react";
import Checkout from "./pages/checkout/Checkout";
import Footer from "./components/footer/Footer";
import PickupDelivery from "./pages/pickup-delivery";
import useAuth from "./hooks/useAuth";
import useScrollTop from "./hooks/useScrollTop";

function App() {
  const location = useLocation();
  const [cartOpen, setCartOpen] = useState(false);
  const toggleCart = () => setCartOpen(!cartOpen);
  useDocumentTitle(location.pathname.split("/")[1].toUpperCase());
  useScrollTop();
  useAuth();

  return (
    <div className="App">
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />

      <main id="shoppingContent">
        <Route path="/" exact component={Home} />
        <Route path="/details/:id" component={Details} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/pickup-delivery" component={PickupDelivery} />
      </main>

      {location.pathname === "/login" || location.pathname === "/register" || (
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
