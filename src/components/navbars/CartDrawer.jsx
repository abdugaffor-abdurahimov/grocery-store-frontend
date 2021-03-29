import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import SingleCart from "../elements/SingleCart";

const drawerWidth = 320;

const useStyles = makeStyles(() => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    width: drawerWidth,
    overflow: "auto",
    marginTop: "80px",
  },
  cartHeader: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 10px",
  },
  order: {
    position: "fixed",
    bottom: 0,
    textAlign: "center",
    width: drawerWidth,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
  },
  btn: {
    margin: "0 0 15px 0",
  },
}));

export default function CartDrawer(props) {
  const classes = useStyles();
  const history = useHistory();

  const { cart } = useSelector((state) => state.user.userInfos);

  return (
    <Drawer variant="persistent" open={props.cartOpen} anchor="right">
      <div className={classes.drawerContainer} />
      <Typography variant="body1" className={classes.cartHeader}>
        <b>Cart</b>
        <b>Items</b>
      </Typography>
      <Divider />
      <List>
        {cart &&
          cart.map((product, key) => (
            <ListItem key={key}>
              <SingleCart {...product} />
            </ListItem>
          ))}
      </List>

      <div className={classes.order}>
        <h4>
          Subtotal:{" "}
          {cart
            .map((item) => item.amount * item.product.price)
            .reduce((acc, item) => acc + item, 0)}
          $
        </h4>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            history.push("/checkout");
          }}
          className={classes.btn}
        >
          Checkout
        </Button>
      </div>
    </Drawer>
  );
}
