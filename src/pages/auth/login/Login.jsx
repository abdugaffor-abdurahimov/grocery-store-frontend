import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  Typography,
} from "@material-ui/core";
import TextField from "../../../components/elements/TextField";
import { Link } from "react-router-dom";

const Login = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    keepSignedIn: false,
  });

  const inputDataHondler = (e) => {
    if (e.target.name === "keepSignedIn") {
      setInputData({ ...inputData, [e.target.name]: e.target.checked });
    } else {
      setInputData({ ...inputData, [e.target.name]: e.target.value });
    }
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      className="auth-grid"
    >
      <div>
        <Typography variant="h5">Sign in to your account</Typography>
        <form noValidate autoComplete="off">
          <TextField
            name="email"
            value={inputData.email}
            onChange={inputDataHondler}
            label="Email"
          />
          <TextField
            type="password"
            name="password"
            label="Create a password"
            value={inputData.password}
            onChange={inputDataHondler}
          />

          <Link to="###" className="align-end">
            Forgot password?
          </Link>

          <FormControlLabel
            control={
              <Checkbox
                checked={inputData.keepSignedIn}
                onChange={inputDataHondler}
                name="keepSignedIn"
              />
            }
            label={<FormHelperText>Keep me signed in </FormHelperText>}
            labelPlacement="end"
          />
          <br />
          <Button
            variant="contained"
            color="secondary"
            style={{ width: "100%" }}
          >
            Sign in
          </Button>
        </form>

        <Typography variant="body2" style={{ marginTop: "40px" }}>
          Don't have an account?
        </Typography>
        <Button variant="outlined" component={Link} to="/register">
          Create account
        </Button>
      </div>
    </Grid>
  );
};

export default Login;
