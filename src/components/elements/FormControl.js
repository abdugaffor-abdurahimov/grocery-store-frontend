import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: "15px 10px",
  },
});

export const FormControlStyled = (props) => {
  const classes = useStyles();

  return <FormControl {...props} className={classes.root} />;
};

export default FormControlStyled;
