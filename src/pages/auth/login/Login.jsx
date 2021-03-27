import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormHelperText,
  Grid,
  Typography,
} from "@material-ui/core";
import TextField from "../../../components/elements/TextField";
import fetchDefault from "../../../clients";
import { DangerAlert } from "../../../components/elements/Alerts";
import WalmartIcon from "../../../components/elements/WalmartIcon";

const Login = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    keepSignedIn: false,
  });

  const [disabled, setDisabled] = useState(false);

  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const inputDataHondler = (e) => {
    if (e.target.name === "keepSignedIn") {
      setInputData({ ...inputData, [e.target.name]: e.target.checked });
    } else {
      setInputData({ ...inputData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const user = {
      email: inputData.email,
      password: inputData.password,
    };

    fetchDefault
      .post("/api/users/login", user)
      .then((res) => {
        if ((res.statusText = "OK")) {
          localStorage.setItem("accessToken", res.data.accessToken);
          localStorage.setItem("refreshToken", res.data.refreshToken);

          setTimeout(() => {
            setLoading(false);
            history.push("/");
          }, 3000);
        } else {
          setError("Email or password not valid");
        }
      })
      .catch((err) => {
        setError("Email or password not valid");
      });
  };

  useEffect(() => {
    inputData.email.length !== 0 && inputData.password.length !== 0
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
        <CircularProgress />
      ) : (
        <div>
          <WalmartIcon />
          <br />
          <br />
          <br />
          <Typography variant="h5">Sign in to your </Typography>
          <Typography variant="h5">Walmart account</Typography>
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
            {error && <DangerAlert message={error} />}
            <br />

            <Button
              variant="contained"
              color="secondary"
              onClick={handleSubmit}
              disabled={disabled}
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
      )}
    </Grid>
  );
};

export default Login;
