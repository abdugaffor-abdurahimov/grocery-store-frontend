import React, { useState } from "react";
import {
	Button,
	Checkbox,
	FormControlLabel,
	FormHelperText,
	Typography,
} from "@material-ui/core";
import TextField from "../../components/elements/TextField";
import { Link, useHistory } from "react-router-dom";
import { DangerAlert } from "../../components/elements/Alerts";
import Progreses from "../../components/elements/Progreses";
import client from "../../httpClient";
import { useForm } from "react-hook-form";

interface IRegister {
	firstname: string;
	lastname: string;
	email: string;
	password: string;
	keepSignedIn: boolean;
	emailNotification: boolean;
}

const Register = () => {
	const { handleSubmit, register } = useForm<IRegister>();

	const history = useHistory();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<any>();

	const onSubmit = async (newUser: IRegister) => {
		setLoading(true);

		try {
			const res = await client.post("/api/users/register", newUser);

			if (res.status === 200) {
				setLoading(false);
				history.push("/login");
			}
		} catch (error) {
			setError(error.response.data.errors);
			setLoading(false);
		}
	};

	return (
		<React.Fragment>
			{loading ? (
				<Progreses />
			) : (
				<>
					<div>
						<Typography variant="h5">Create a new account</Typography>

						<form
							noValidate
							autoComplete="off"
							onSubmit={handleSubmit(onSubmit)}
						>
							<Typography
								display="block"
								variant="caption"
								align="left"
								color="secondary"
								style={{ marginTop: "24px", width: "100%" }}
							>
								* required field
							</Typography>
							<TextField name="firstname" label="First name" {...register} />

							<TextField label="First name" {...register("lastname")} />

							<TextField label="Email" {...register("email")} />
							<TextField
								type="password"
								label="Create a password"
								{...register("password")}
							/>
							<FormControlLabel
								control={<Checkbox name="keepSignedIn" />}
								label={<FormHelperText>Keep me signed in </FormHelperText>}
								labelPlacement="end"
							/>

							<FormControlLabel
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

							<Button variant="contained" color="secondary" type="submit">
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
		</React.Fragment>
	);
};

export default Register;
