import { makeStyles, Typography } from "@material-ui/core";

import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles(() => ({
  input: {
    width: "50px",
    left: "40px",
    borderRadius: "10px",
    border: "0.5px solid darkgray",
    position: "absolute",
    height: "20px",
  },
  add: {
    position: "relative",
    backgroundColor: "#00ff84",
    right: "-40px",
    borderRadius: "50%",
    cursor: "pointer",
  },
  remove: {
    position: "relative",
    backgroundColor: "#00ff84",
    borderRadius: "50%",
    cursor: "pointer",
    left: "-15px",
  },
}));

export default function ProductChangeInput({ onChange, value }) {
  const classes = useStyles();

  const [amount, setAmount] = useState(value);

  const updateProductAmount = (e) => {
    try {
      setAmount(parseInt(e.target.value));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Typography variant="subtitle1" color="textSecondary">
      <RemoveIcon className={classes.remove} />

      <input
        type="number"
        className={classes.input}
        value={amount}
        onChange={updateProductAmount}
        placeholder="Amount"
        min="1"
        max="10"
      />
      <AddIcon className={classes.add} />
    </Typography>
  );
}
