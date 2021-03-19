import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { updateProductAmount } from "../../actions/cartActions";

const useStyles = makeStyles({
  root: {
    width: "200px",
    margin: "5px 0",
  },
  cartBody: {
    display: "flex",
  },
  inputWrapper: { display: "flex" },

  input: { width: "50px", borderRadius: "10px", border: "1px solid black" },
  img: { width: "50px" },
});

export default function SingleCart(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleUpdateAmount = (event) => {
    const value = event.target.value.replace(/\+|-/gi, "");
    console.log(value);

    if (value.length) {
      const amount = parseInt(value);
      dispatch(updateProductAmount(props.id, amount));
    } else {
    }
  };

  return (
    <div className={classes.root}>
      <img
        src={props.img}
        alt={props.name}
        align="left"
        className={classes.img}
      />
      <div className={classes.cartBody}>
        <Typography variant="body2">{props.name}</Typography>
        <div className={classes.inputWrapper}>
          <input
            value={props.amount}
            className={classes.input}
            type="number"
            onChange={(e) => {
              console.log(props);
              handleUpdateAmount(e);
            }}
          />
          <b>Price: {props.price} $</b>
        </div>
      </div>
    </div>
  );
}
