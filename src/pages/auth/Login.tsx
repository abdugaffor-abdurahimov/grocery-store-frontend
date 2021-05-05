import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
	Button,
	Checkbox,
	CircularProgress,
	FormControlLabel,
	FormHelperText,
	Typography,
} from "@material-ui/core";
import TextField from "../../components/elements/TextField";
import { DangerAlert } from "../../components/elements/Alerts";
import { clearUserErrors } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import client from "../../httpClient";
import { useForm } from "react-hook-form";

interface ILogin {
	email: string;
	password: string;
}

const Login = () => {
	const { handleSubmit, register } = useForm<ILogin>();
	const history = useHistory();
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>();
	const dispatch = useDispatch();

	const ridirectUrl = new URLSearchParams(window.location.search).get(
		"ridirectUrl"
	);

	const onSubmit = async (user: ILogin) => {
		setLoading(true);

		client
			.post("/api/users/login", user)
			.then((res) => {
				if ((res.statusText = "OK")) {
					localStorage.setItem("accessToken", res.data.accessToken);
					localStorage.setItem("refreshToken", res.data.refreshToken);

					setTimeout(() => {
						dispatch(clearUserErrors());
						setLoading(false);
						history.push(`/${ridirectUrl ? ridirectUrl : ""}`);
					}, 3000);
				}
			})
			.catch((err) => {
				setLoading(false);
				setError(err.response.data.errors);
			});
	};

	return (
		<React.Fragment>
			{loading ? (
				<CircularProgress />
			) : (
				<div>
					<br />
					<Typography variant="h5">Sign in to your account</Typography>
					<form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
						<TextField label="Email" {...register("email")} />
						<TextField
							label="Password"
							type="password"
							{...register("password")}
						/>
						<Link to="###" className="align-end">
							Forgot password?
						</Link>

						<FormControlLabel
							control={<Checkbox name="keepSignedIn" />}
							label={<FormHelperText>Keep me signed in </FormHelperText>}
							labelPlacement="end"
						/>
						{error && <DangerAlert message={error} />}
						<br />

						<Button variant="contained" color="secondary" type="submit">
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
		</React.Fragment>
	);
};

export default Login;
