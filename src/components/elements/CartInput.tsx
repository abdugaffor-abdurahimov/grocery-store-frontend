import { Button } from "@material-ui/core";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import React from "react";

const CheckoutForm = () => {
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (event: any) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<CardElement />
			<Button type="submit" disabled={!stripe}>
				Pay
			</Button>
		</form>
	);
};

export default CheckoutForm;
