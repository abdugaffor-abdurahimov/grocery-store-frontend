import "./App.scss";
import { Route } from "react-router-dom";
// import Login from "./pages/auth";
// import Register from "./pages/auth";
import { Login, Register } from "./pages/auth";

function App() {
  return (
    <div className="App">
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </div>
  );
}

export default App;
