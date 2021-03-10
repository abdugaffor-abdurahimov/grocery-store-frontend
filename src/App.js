import "./App.scss";
import { Route, useLocation } from "react-router-dom";
import { Login, Register } from "./pages/auth";
import Home from "./pages/home";
import DrawerCard from "./components/navbars/CartDrawer";
import Appbar from "./components/navbars/Appbar";
import useDocumentTitle from "./hooks/useDocumentTitle";

function App() {
  const location = useLocation();

  useDocumentTitle(location.pathname.split("/")[1].toUpperCase());

  return (
    <div className="App">
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />

      <Route path="/" exact component={Home} />

      {location.pathname === "/login" || location.pathname === "/register" || (
        <>
          <Appbar />
          <DrawerCard />
        </>
      )}
    </div>
  );
}

export default App;
