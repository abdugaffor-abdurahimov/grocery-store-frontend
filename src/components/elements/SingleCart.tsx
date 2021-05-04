import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import ProductChangeInput from "./ProductChangeInput";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		width: "100%",
	},
	details: {
		display: "flex",
		flexDirection: "column",
	},
	content: {
		flex: "1 0 auto",
	},
	cover: {
		width: 151,
	},
	controls: {
		display: "flex",
		alignItems: "center",
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	playIcon: {
		height: 38,
		width: 38,
	},
}));

export default function SingleCart(props: any) {
	const classes = useStyles();
	const { userInfos } = useSelector((state: any) => state.user);
	return (
		<>
			<Card className={classes.root}>
				<div className={classes.details}>
					<CardContent className={classes.content}>
						<Typography component="h5" variant="h5">
							{props.product.name.slice(0, 10)}
						</Typography>
						<Typography variant="subtitle1" color="textSecondary">
							Price: {props.product.price} $
						</Typography>
						<ProductChangeInput
							style={{ width: "86px" }}
							value={props.amount}
							userId={userInfos._id}
							productId={props.product._id}
						/>
					</CardContent>
				</div>
				<CardMedia
					className={classes.cover}
					image={props.product.images[0]}
					title="Live from space album cover"
				/>
			</Card>
		</>
	);
}
