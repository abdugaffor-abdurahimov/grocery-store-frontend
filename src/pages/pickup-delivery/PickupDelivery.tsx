import React, { useEffect } from "react";
import SingleProduct from "../../components/elements/SingleProduct";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/productsActions";
import { CircularProgress, Container } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import useStyles from "./PickupDeliveryStyle";
import { DangerAlert } from "../../components/elements/Alerts";

export default function PickupDelivery() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { data, error, loading } = useSelector(
		(state: IState) => state.products
	);

	useEffect(() => {
		if (data.length < 1) {
			dispatch(fetchProducts());
		}
	}, [dispatch, data.length]);

	return (
		<Grid container className={classes.root}>
			<Container>
				<Carousel>
					<div>
						<img
							alt="sssssssss"
							src={
								"https://res.cloudinary.com/duq2fqsvm/image/upload/c_fill,g_auto,h_300,w_1000/b_rgb:000000,y_-0.50/c_scale,co_rgb:ffffff,y_0.18/v1617082157/amazon/cat2_lj49vw.jpg"
							}
						/>{" "}
						<p className="legend">Buy now</p>
					</div>
					<div>
						<img
							alt="sssssssss"
							src={
								"https://res.cloudinary.com/duq2fqsvm/image/upload/c_fill,g_auto,h_300,w_1000/b_rgb:000000,y_-0.50/c_scale,co_rgb:ffffff,y_0.18/v1617082173/amazon/cat3_hbfwxd.jpg"
							}
						/>
						<p className="legend">Lorem, ipsum dolor.</p>
					</div>
					<div>
						<img
							alt="sssssssss"
							src={
								"https://res.cloudinary.com/duq2fqsvm/image/upload/c_fill,g_auto,h_300,w_1000/b_rgb:000000,y_-0.50/c_scale,co_rgb:ffffff,y_0.18/v1617082181/amazon/katalog1_ohyecx.jpg"
							}
						/>{" "}
						<p className="legend">Lorem, ipsum dolor.</p>
					</div>
				</Carousel>

				{loading && <CircularProgress />}
				{error && (
					<DangerAlert message={error + " pleace try to refresh the page!"} />
				)}

				<Grid item xs={12}>
					<Grid container justify="center" spacing={2}>
						{data.map((product: IProduct, idx: number) => (
							<Grid key={idx} item>
								<SingleProduct product={product} />
							</Grid>
						))}
					</Grid>
				</Grid>
			</Container>
		</Grid>
	);
}
