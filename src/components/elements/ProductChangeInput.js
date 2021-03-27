import { makeStyles, Typography } from "@material-ui/core";

import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { fetchWithTokens } from "../../clients";

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
    backgroundColor: "#00ff84",
    borderRadius: "50%",
    cursor: "pointer",
  },
  remove: {
    position: "relative",
    backgroundColor: "#00ff84",
    borderRadius: "50%",
    cursor: "pointer",
  },
}));

export default function ProductChangeInput({ value, productId, userId }) {
  const classes = useStyles();

  const [amount, setAmount] = useState(value);

  const updateProductAmount = async (newVal) => {
    console.log("newVal: " + newVal);
    setAmount(newVal);
    if (amount < 0) {
      setAmount(0);
    } else {
      setAmount(newVal);
    }

    try {
      console.log("amount", amount);
      fetchWithTokens.put(`/api/users/${userId}/updateCartAmout/${productId}`, {
        amount: parseInt(newVal),
      });
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
          updateProductAmount(amount - 1);
        }}
      />

      <input
        type="number"
        className={classes.input}
        value={amount}
        onChange={(e) =>
          setAmount(typeof e.target.value === "number" ? "" : e.target.value)
        }
        placeholder="Amount"
        min="1"
        max="10"
      />
      <AddIcon
        className={classes.add}
        onClick={() => {
          updateProductAmount(amount + 1);
        }}
      />
    </Typography>
  );
}
