import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useWindowWidth from "../../hooks/useWindowWidth";
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
    position: "absolute",
    bottom: "5px",
    right: 0,
    left: 0,
    textAlign: "center",
  },
}));

export default function CartDrawer(props) {
  const classes = useStyles();
  const width = useWindowWidth();
  const [show, setShow] = useState(false);
  const { cart } = useSelector((state) => state.user.userInfos);
  console.log("cart", cart);

  useEffect(() => {
    if (width > 1000) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [width]);

  return show ? (
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

      {/* ss */}
      <div className={classes.order}>
        <h4>Subtotal: {}</h4>
        <Button variant="contained" color="secondary">
          Checkout
        </Button>
      </div>
    </Drawer>
  ) : (
    <></>
  );
}
