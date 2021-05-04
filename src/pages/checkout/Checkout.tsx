import React, { useState } from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import ProductChangeInput from "../../components/elements/ProductChangeInput";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { CircularProgress, Container, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { apiUrl } from "../../config/envVars";
import { clearAllCarts } from "../../redux/actions/cartActions";
import client from "../../httpClient";
import useStyles from "./CheckoutStyles";

export default function Checkout() {
	const classes: any = useStyles();
	const { userInfos } = useSelector((state: any) => state.user);
	const stripe = useStripe();
	const elements = useElements();
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		setLoading(true);

		if (!stripe || !elements) {
			return;
		}

		try {
			const res = await client.post("/api/products/pay", {
				amount:
					userInfos.cart
						.map((item: any) => item.amount * item.product.price)
						.reduce((acc: number, item: number) => acc + item, 0) * 100,
				currency: "usd",
				source: "tok_visa",
				receipt_email: userInfos.email,
			});

			if (res.statusText === "OK") {
				dispatch(clearAllCarts());
				window.location.replace(res.data.charge.receipt_url);
			}
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	return (
		<Container>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={7}>
					<Typography variant="h6" className={classes.title}>
						<b>{userInfos.cart.length} items</b>
						<Button
							color="secondary"
							component="a"
							href={apiUrl + `/api/users/${userInfos._id}/card/csv`}
						>
							Download as CSV
						</Button>
					</Typography>
					{userInfos.cart.map((item: any, idx: number) => (
						<div key={idx}>
							<div style={{ display: "flex", padding: "10px 0" }}>
								<img src={item.product.images[0]} alt="prd" width="300px" />
								<div>
									<p>Name: {item.product.name}</p>
									<p>Price: {item.product.price} $</p>
									<br />
									<br />
									<ProductChangeInput
										value={item.amount}
										userId={userInfos._id}
										productId={item.product._id}
									/>
								</div>
							</div>
							<Divider />
						</div>
					))}
				</Grid>

				<Grid item xs={12} sm={5} style={{ maxWidth: "400px" }}>
					<Typography variant="body1">
						Subtotal:
						<b>
							{userInfos.cart
								.map((item: any) => item.amount * item.product.price)
								.reduce((acc: any, item: any) => acc + item, 0)}{" "}
							$
						</b>
					</Typography>
					<br />
					<form onSubmit={handleSubmit}>
						<CardElement />
						<br />

						{loading ? (
							<CircularProgress />
						) : (
							<Button
								type="submit"
								disabled={!stripe && userInfos.email}
								color="secondary"
								variant="contained"
							>
								{" "}
								Pay
							</Button>
						)}
					</form>
				</Grid>
			</Grid>
		</Container>
	);
}
