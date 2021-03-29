import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

// STRIPE SETUP
import { loadStripe } from "@stripe/stripe-js";
import { CartProvider } from "use-shopping-cart";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_PUBLIC);

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composedEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <CartProvider
        mode="client-only"
        stripe={stripePromise}
        successUrl="stripe.com"
        cancelUrl="twitter.com/dayhaysoos"
        currency="USD"
        allowedCountries={["US", "GB", "CA", "UZ"]}
        billingAddressCollection={true}
      >
        <App />
      </CartProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
