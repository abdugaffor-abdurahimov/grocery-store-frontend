import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-multi-carousel/lib/styles.css";
import "./index.scss";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "./redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

// STRIPE SETUP
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { BrowserRouter } from "react-router-dom";

const stripe: any = process.env.REACT_APP_STRIPE_API_PUBLIC;
const stripePromise = loadStripe(stripe);
// END OF STRIPE

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composedEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
	<Provider store={store}>
		<Elements stripe={stripePromise}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Elements>
	</Provider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
