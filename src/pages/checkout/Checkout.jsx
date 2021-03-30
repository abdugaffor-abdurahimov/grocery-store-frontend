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
import { useStripe, useElements, CartElement } from "@stripe/react-stripe-js";
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
  const handleSubmit = async (e) => {
    if (!stripe || !elements) {
      // Stripe has not yet loadeed
      return;
    }

    try {
      const res = await fetchDefault.post(
        "/api/users/create-checkout-session",
        {
          email: userInfos.email,
        }
      );

      const clientSecret = res.data["client_secret"];

      const result = await stripe.confirmCardPayment(clientSecret, {
        cart: elements.getElement(CartElement),
        billing_details: {
          email: userInfos.email,
        },
      });

      if (result.error) {
        console.log(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          console.log("Transaction succeeded");
        }
      }
    } catch (err) {
      console.log(err);
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
              <ListItem alignItems="flex-start">
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
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          ))}
          <Typography variant="h4">
            Subtotal:
            {userInfos.cart
              .map((item) => item.amount * item.product.price)
              .reduce((acc, item) => acc + item, 0)}{" "}
            $
          </Typography>
        </List>
        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <CardInput />
            <div className={classes.div}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleSubmit}
              >
                Pay
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Subscription
              </Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </Grid>
  );
}
