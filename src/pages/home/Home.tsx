import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { CircularProgress, Paper } from "@material-ui/core";
import { useHistory } from "react-router";
import client from "../../httpClient";
import useStyles from "./StylesHome";
import { DangerAlert } from "../../components/elements/Alerts";
import caroucelData from "./caroucelData";
import GridLayout from "../../components/layout/GridLayout";
import MultiCaraucel from "../../components/elements/MultiCaraucel";

export default function Home() {
	const classes = useStyles();
	const [preview, setPreview] = useState([]);
	const [error, setError] = useState<IError>();
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	useEffect(() => {
		(async () => {
			setLoading(true);
			try {
				const response = await client.get("/api/products/home/preview");
				setLoading(false);
				if (response.statusText === "OK") {
					setPreview(response.data);
				}
			} catch (error) {
				setError(error.message);
				setLoading(false);
			}
		})();
	}, []);

	return (
		<React.Fragment>
			{loading ? (
				<CircularProgress
					style={{
						margin: "auto",
					}}
				/>
			) : (
				<React.Fragment>
					<MultiCaraucel data={caroucelData} />

					<Paper style={{ backgroundColor: "#f5f5f5", padding: "25px 0" }}>
						<GridLayout>
							<Grid item md={4} sm={4} xs={4}>
								<div className={classes.wrapper}>
									<div>Pickup or delivery</div>
									<img
										src={process.env.PUBLIC_URL + "shopping-basket.jpg"}
										alt="delivery"
										className={classes.img}
									/>
								</div>
							</Grid>
							<Grid item md={4} sm={4} xs={4}>
								<div className={classes.wrapper}>
									<div>Earn 3% cash back</div>
									<img
										src={process.env.PUBLIC_URL + "cash-back.webp"}
										alt="cashback"
										className={classes.img}
									/>
								</div>
							</Grid>
							<Grid item md={4} sm={4} xs={4}>
								<div className={classes.wrapper}>
									<div>No order minimum shipping</div>
									<img
										src={process.env.PUBLIC_URL + "delivery.png"}
										alt="grocery"
										className={classes.img}
									/>
								</div>
							</Grid>
						</GridLayout>
					</Paper>
					<br />
					{error && (
						<DangerAlert message={error + " please try tp refresh the page"} />
					)}

					<br />
					<br />

					{preview.map((category: any, idx) => (
						<div
							key={idx}
							style={{
								marginTop: "20px",
								borderBottom: "1px solid black",
								paddingBottom: "10px",
							}}
						>
							<h3>{category.title}</h3>
							<Grid container justify="space-around" spacing={2}>
								{category.data.map((item: any, idx: number) => (
									<Grid
										item
										xs={6}
										md={3}
										sm={3}
										key={idx}
										onClick={() => history.push("/pickup-delivery")}
									>
										<img
											src={item.img}
											alt={item.name + "-img"}
											style={{ maxWidth: "100%" }}
										/>
										<div>{item.name}</div>
									</Grid>
								))}
							</Grid>
						</div>
					))}
				</React.Fragment>
			)}
		</React.Fragment>
	);
}
