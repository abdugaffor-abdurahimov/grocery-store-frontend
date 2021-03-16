import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    width: "200px",
    margin: "10px 0",
  },

  input: { width: "50px", borderRadius: "10px", border: "1px solid black" },
  img: { width: "50px" },
});

export default function SingleCart(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        src={props.img}
        alt={props.name}
        align="left"
        className={classes.img}
      />
      <div>
        <Typography variant="body2">{props.name}</Typography>
        <div>
          <input value={props.amount} className={classes.input} />
          <b>Price: {props.price} $</b>
        </div>
      </div>
    </div>
  );
}
