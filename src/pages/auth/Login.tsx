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
import TextField from "../../components/elements/TextField";
import { DangerAlert } from "../../components/elements/Alerts";
import { clearUserErrors } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import client from "../../httpClient";

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
	const dispatch = useDispatch();

	const ridirectUrl = new URLSearchParams(window.location.search).get(
		"ridirectUrl"
	);

	const inputDataHandler = (e: any) => {
		if (e.target.name === "keepSignedIn") {
			setInputData({ ...inputData, [e.target.name]: e.target.checked });
		} else {
			setInputData({ ...inputData, [e.target.name]: e.target.value });
		}
	};

	const handleSubmit = async (e: React.SyntheticEvent<EventTarget>) => {
		setLoading(true);

		const user = {
			email: inputData.email,
			password: inputData.password,
		};

		client
			.post("/api/users/login", user)
			.then((res) => {
				if ((res.statusText = "OK")) {
					localStorage.setItem("accessToken", res.data.accessToken);
					localStorage.setItem("refreshToken", res.data.refreshToken);

					setTimeout(() => {
						dispatch(clearUserErrors());
						setLoading(false);
						history.push(`/${ridirectUrl}`);
					}, 3000);
				}
			})
			.catch((err) => {
				setLoading(false);
				setError(err.response.data.errors);
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
					<br />
					<Typography variant="h5">Sign in to your account</Typography>
					<form noValidate autoComplete="off">
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

						<Link to="###" className="align-end">
							Forgot password?
						</Link>

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
