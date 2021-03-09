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

const Register = () => {
  const [inputData, setInputData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    keepSignedIn: false,
    emailNotification: false,
  });

  const inputDataHondler = (e) => {
    if (
      e.target.name === "keepSignedIn" ||
      e.target.name === "emailNotification"
    ) {
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
        <Typography variant="h5">Create a new account</Typography>

        <form noValidate autoComplete="off">
          <Typography
            display="block"
            variant="caption"
            align="left"
            color="secondary"
            style={{ marginTop: "24px", width: "100%" }}
          >
            * required field
          </Typography>
          <TextField
            name="firstname"
            value={inputData.firstname}
            onChange={inputDataHondler}
            label="First name"
          />

          <TextField
            name="lastname"
            value={inputData.lastname}
            onChange={inputDataHondler}
            label="First name"
          />

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

          <FormControlLabel
            onChange={inputDataHondler}
            name="emailNotification"
            control={<Checkbox name="emailNotification" />}
            label={
              <FormHelperText>
                Email me about Rollbacks, special pricing, hot new items, gift
                ideas and more.{" "}
              </FormHelperText>
            }
            labelPlacement="end"
          />
          <br />
          <Typography className="terms">
            By clicking Create Account, you acknowledge you have read and agreed
            to our <Link to="#">Terms of Use</Link> and{" "}
            <Link to="#">Privacy Policy</Link>.
          </Typography>

          <Button variant="contained" color="secondary">
            Create account
          </Button>
        </form>
        <Typography variant="body2">Already have an account?</Typography>
        <Button variant="outlined" component={Link} to="/login">
          Sign in
        </Button>
      </div>
    </Grid>
  );
};

export default Register;
