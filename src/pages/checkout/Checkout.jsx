import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import ProductChangeInput from "../../components/elements/ProductChangeInput";
import CardInput from "../../components/elements/CartInput";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import fetchDefault from "../../clients";
import { Container, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
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
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <Grid container className={classes.grid}>
      <Container>
        <List className={classes.root}>
          <Typography variant="h6" className={classes.title}>
            <b>{userInfos.cart.length} items</b>
          </Typography>
          {userInfos.cart.map((item, idx) => (
            <div key={idx}>
              <img src={item.product.images[0]} alt="prd" width="300px" />
              {/* <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    variant="square"
                    alt="Remy Sharp"
                    src={item.product.images[0]}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={item.product.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {item.product.price} $
                      </Typography>
                    </React.Fragment>
                  }
                />
                <ProductChangeInput
                  value={item.amount}
                  userId={userInfos._id}
                  productId={item.product._id}
                />
              </ListItem> */}
              <Divider variant="inset" component="li" />
            </div>
          ))}

          <br />
          <Typography variant="h4">
            Subtotal:
            {userInfos.cart
              .map((item) => item.amount * item.product.price)
              .reduce((acc, item) => acc + item, 0)}{" "}
            $
          </Typography>
        </List>
        <form onSubmit={handleSubmit}>
          <CardElement />
          <Button type="submit" disabled={!stripe}>
            Pay
          </Button>
        </form>
      </Container>
    </Grid>
  );
}
