import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import ProductChangeInput from "../../components/elements/ProductChangeInput";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { fetchWithTokens } from "../../clients";
import { Container, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function Checkout() {
  const classes = useStyles();
  const { userInfos } = useSelector((state) => state.user);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const res = await fetchWithTokens.post("/api/products/pay", {
      amount:
        userInfos.cart
          .map((item) => item.amount * item.product.price)
          .reduce((acc, item) => acc + item, 0) * 100,
      currency: "usd",
      source: "tok_visa",
      receipt_email: userInfos.email,
    });
    console.log(res);

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.

    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (res.statusText === "OK") {
      window.location.replace(res.data.charge.receipt_url);
    }

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <Typography variant="h6" className={classes.title}>
            <b>{userInfos.cart.length} items</b>
          </Typography>
          {userInfos.cart.map((item, idx) => (
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
                .map((item) => item.amount * item.product.price)
                .reduce((acc, item) => acc + item, 0)}{" "}
              $
            </b>
          </Typography>
          <br />
          <form onSubmit={handleSubmit}>
            <CardElement />
            <br />
            <Button
              type="submit"
              disabled={!stripe}
              color="secondary"
              variant="contained"
            >
              Pay
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}
