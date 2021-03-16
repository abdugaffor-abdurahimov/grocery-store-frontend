import {
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
    overflow: "auto",
    marginTop: "80px",
  },
  cartHeader: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 10px",
  },
}));

export default function CartDrawer() {
  const classes = useStyles();
  const width = useWindowWidth();
  const [show, setShow] = useState(false);
  const { basket } = useSelector((state) => state.cart);

  useEffect(() => {
    if (width > 1000) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [width]);

  return show ? (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="right"
    >
      <div className={classes.drawerContainer} />
      <Typography variant="body1" className={classes.cartHeader}>
        <b>Cart</b>
        <b>Items</b>
      </Typography>
      <Divider />
      <List>
        {Object.keys(basket).map((key) => (
          <>
            <ListItem>
              <SingleCart {...basket[key]} />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Drawer>
  ) : (
    <></>
  );
}
