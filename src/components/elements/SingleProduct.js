import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  // addProductToCart,
  sendAddProductToCart,
} from "../../actions/cartActions";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import { setCurrentProduct } from "../../actions/productsActions";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  root: { cursor: "pointer" },
  img: {
    width: "150px",
  },

  heart: {
    cursor: "pointer",
  },
  button: {
    backgroundColor: "#0065ff",
    borderRadius: "20px",
    cursor: "pointer",
    padding: "8px 10px",
    border: "none",
    color: "white",
    textAlign: "start",
  },
});

export default function SingleProduct({ product }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { userInfos } = useSelector((state) => state.user);

  return (
    <div className={classes.root}>
      <div
        onClick={() => {
          dispatch(setCurrentProduct(product));
          history.push(`/details/${product._id}`);
        }}
      >
        <FavoriteBorderIcon className={classes.heart} />
        <img src={product.images[0]} alt="product" className={classes.img} />
        <div>
          <b>Price {product.price}$</b>
          <Typography>{product.name}</Typography>
        </div>
      </div>

      <button
        onClick={() => {
          if (userInfos._id) {
            dispatch(sendAddProductToCart(product, userInfos._id));
          } else {
            history.push("/login");
          }
        }}
        className={classes.button}
      >
        <b> Add to cart</b>
      </button>
    </div>
  );
}
