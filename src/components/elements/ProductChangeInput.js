import { makeStyles, Typography } from "@material-ui/core";

import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { fetchWithTokens } from "../../clients";
import { useDispatch } from "react-redux";
import { postAddProductSuccess } from "../../redux/actions/cartActions";

const useStyles = makeStyles(() => ({
  root: { display: "flex" },
  input: {
    width: "50px",
    borderRadius: "10px",
    border: "0.5px solid darkgray",
    height: "20px",
  },
  add: {
    position: "relative",
    backgroundColor: "#ffc220",
    margin: "0 2px",
    borderRadius: "50%",
    cursor: "pointer",
  },
  remove: {
    position: "relative",
    backgroundColor: "#ffc220",
    margin: "0 2px",
    borderRadius: "50%",
    cursor: "pointer",
  },
}));

export default function ProductChangeInput({ value, productId, userId }) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const updateProductAmount = async (newVal) => {
    try {
      if (newVal === 0) {
        const res = await fetchWithTokens.delete(
          `/api/users/${userId}/updateCart/${productId}`
        );

        if (res.statusText === "Accepted") {
          dispatch(postAddProductSuccess(res.data));
        }
      } else {
        const res = await fetchWithTokens.put(
          `/api/users/${userId}/updateCartAmout/${productId}`,
          {
            amount: parseInt(newVal),
          }
        );
        if (res.statusText === "OK") {
          dispatch(postAddProductSuccess(res.data));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Typography
      variant="subtitle1"
      color="textSecondary"
      className={classes.root}
    >
      <RemoveIcon
        className={classes.remove}
        onClick={() => {
          updateProductAmount(value - 1);
        }}
      />

      <input
        type="number"
        className={classes.input}
        value={value}
        onChange={(e) =>
          updateProductAmount(
            typeof e.target.value === "number" ? "" : e.target.value
          )
        }
        placeholder="Amount"
        min="1"
        max="10"
      />
      <AddIcon
        className={classes.add}
        onClick={() => {
          updateProductAmount(value + 1);
        }}
      />
    </Typography>
  );
}
