import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    textAlign: "start",
  },
}));

export const DangerAlert = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="error" {...props}>
        {props.message}
      </Alert>
    </div>
  );
};

export const WarningAlert = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="warning" {...props}>
        {props.message}
      </Alert>
    </div>
  );
};

export const InfoAlert = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="info" {...props}>
        {props.message}
      </Alert>
    </div>
  );
};

export const SuccessAlert = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="success" {...props}>
        {props.message}
      </Alert>
    </div>
  );
};
