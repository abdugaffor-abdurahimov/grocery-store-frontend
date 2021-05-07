import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { CircularProgress, Container, Paper } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import { useHistory } from "react-router";
import client from "../../httpClient";
import useStyles from "./StylesHome";
import { DangerAlert } from "../../components/elements/Alerts";

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
		<Grid container className={classes.root}>
			{loading ? (
				<CircularProgress
					style={{
						margin: "auto",
					}}
				/>
			) : (
				<Container>
					<Carousel>
						<div>
							<img
								alt="sssssssss"
								src="https://res.cloudinary.com/duq2fqsvm/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1617626802/GROCERY/robert-bye-tG36rvCeqng-unsplash_rg0zlp.jpg"
							/>{" "}
							<p className="legend">Buy now</p>
						</div>
						<div>
							<img
								alt="sssssssss"
								src="https://res.cloudinary.com/duq2fqsvm/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1617626806/GROCERY/denys-nevozhai-63Znf38gnXk-unsplash_rxknkt.jpg"
							/>
							<p className="legend">Lorem, ipsum dolor.</p>
						</div>
						<div>
							<img
								alt="sssssssss"
								src="https://res.cloudinary.com/duq2fqsvm/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1617626810/GROCERY/clark-street-mercantile-P3pI6xzovu0-unsplash_v1lbxc.jpg"
							/>{" "}
							<p className="legend">Lorem, ipsum dolor.</p>
						</div>
					</Carousel>

					<Grid item xs={12}>
						<Paper style={{ backgroundColor: "#f5f5f5", padding: "25px 0" }}>
							<Grid container justify="space-around" spacing={2}>
								<Grid item>
									<div className={classes.wrapper}>
										<div>Pickup or delivery</div>
										<img
											src="https://res.cloudinary.com/duq2fqsvm/image/upload/w_200,h_200,c_limit,e_blur:100,o_90,b_black/l_text:arial_80:®,ar_1:1,c_lfill,o_60,co_rgb:ffffff,b_rgb:000000,r_max/v1617626798/GROCERY/jeshoots-com-eCktzGjC-iU-unsplash_cfdgs1.jpg"
											alt="ooo"
										/>
									</div>
								</Grid>
								<Grid item>
									<div className={classes.wrapper}>
										<div>Earn 3% cash back</div>
										<img
											src="https://res.cloudinary.com/duq2fqsvm/image/upload/w_200,h_200,c_limit,e_blur:100,o_90,b_black/l_text:arial_80:®,ar_1:1,c_lfill,o_60,co_rgb:ffffff,b_rgb:000000,r_max/v1617626798/GROCERY/jeshoots-com-eCktzGjC-iU-unsplash_cfdgs1.jpg"
											alt="ooo"
										/>
									</div>
								</Grid>
								<Grid item>
									<div className={classes.wrapper}>
										<div>No order minimum shipping</div>
										<img
											src="https://res.cloudinary.com/duq2fqsvm/image/upload/w_200,h_200,c_limit,e_blur:100,o_90,b_black/l_text:arial_80:®,ar_1:1,c_lfill,o_60,co_rgb:ffffff,b_rgb:000000,r_max/v1617626798/GROCERY/jeshoots-com-eCktzGjC-iU-unsplash_cfdgs1.jpg"
											alt="ooo"
										/>
									</div>
								</Grid>
							</Grid>
						</Paper>
						<br />

						{error && (
							<DangerAlert
								message={error + " please try tp refresh the page"}
							/>
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
								onClick={() => history.push("/pickup-delivery")}
							>
								<h3>{category.title}</h3>
								<Grid container justify="space-around" spacing={2}>
									{category.data.map((item: any, idx: number) => (
										<Grid item key={idx}>
											<img src={item.img} alt={item.name + "-img"} />
											<div>{item.name}</div>
										</Grid>
									))}
								</Grid>
							</div>
						))}
					</Grid>
				</Container>
			)}
		</Grid>
	);
}
