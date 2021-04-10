import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  Typography,
} from "@material-ui/core";
import TextField from "../../components/elements/TextField";
import { Link, useHistory } from "react-router-dom";
import { DangerAlert } from "../../components/elements/Alerts";
import Progreses from "../../components/elements/Progreses";
import fetchDefault from "../../clients";

const Register = () => {
  const [inputData, setInputData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    keepSignedIn: false,
    emailNotification: false,
  });

  const [disabled, setDisabled] = useState(true);

  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const inputDataHandler = (e) => {
    if (
      e.target.name === "keepSignedIn" ||
      e.target.name === "emailNotification"
    ) {
      setInputData({ ...inputData, [e.target.name]: e.target.checked });
    } else {
      setInputData({ ...inputData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const newUser = {
        firstname: inputData.firstname,
        lastname: inputData.lastname,
        email: inputData.email,
        password: inputData.password,
      };
      const res = await fetchDefault.post("/api/users/register", newUser);

      if ((res.statusText = "ok")) {
        setLoading(false);
        history.push("/login");
      }

      console.log(res);
    } catch (error) {
      setError(error.response.data.errors);
      setLoading(false);
    }
  };

  useEffect(() => {
    inputData.email.length !== 0 &&
    inputData.firstname !== 0 &&
    inputData.lastname !== 0 &&
    inputData.password.length !== 0
      ? setDisabled(false)
      : setDisabled(true);
  }, [inputData]);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      className="auth-grid"
    >
      {loading ? (
        <Progreses />
      ) : (
        <>
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
                onChange={inputDataHandler}
                label="First name"
              />

              <TextField
                name="lastname"
                value={inputData.lastname}
                onChange={inputDataHandler}
                label="First name"
              />

              <TextField
                name="email"
                value={inputData.email}
                onChange={inputDataHandler}
                label="Email"
              />
              <TextField
                type="password"
                name="password"
                label="Create a password"
                value={inputData.password}
                onChange={inputDataHandler}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={inputData.keepSignedIn}
                    onChange={inputDataHandler}
                    name="keepSignedIn"
                  />
                }
                label={<FormHelperText>Keep me signed in </FormHelperText>}
                labelPlacement="end"
              />

              <FormControlLabel
                onChange={inputDataHandler}
                name="emailNotification"
                control={<Checkbox name="emailNotification" />}
                label={
                  <FormHelperText>
                    Email me about Rollbacks, special pricing, hot new items,
                    gift ideas and more.{" "}
                  </FormHelperText>
                }
                labelPlacement="end"
              />
              <br />
              {error && <DangerAlert message={error} />}

              <Typography className="terms">
                By clicking Create Account, you acknowledge you have read and
                agreed to our <Link to="#">Terms of Use</Link> and{" "}
                <Link to="#">Privacy Policy</Link>.
              </Typography>

              <Button
                variant="contained"
                color="secondary"
                onClick={handleSubmit}
                disabled={disabled}
              >
                Create account
              </Button>
            </form>

            <Typography variant="body2">Already have an account?</Typography>
            <Button variant="outlined" component={Link} to="/login">
              Sign in
            </Button>
          </div>
        </>
      )}
    </Grid>
  );
};

export default Register;
