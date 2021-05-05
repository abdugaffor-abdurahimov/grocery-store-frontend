import { makeStyles } from "@material-ui/core";

import React from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import client from "../../httpClient";
import { useDispatch } from "react-redux";
import { postAddProductSuccess } from "../../redux/actions/cartActions";

const useStyles = makeStyles(() => ({
	root: {
		display: "flex",
		margin: "auto",
		border: "1px solid black",
		borderRadius: "15px",
		width: "110px",
	},
	input: {
		border: "none",
		width: "100%",
		height: "25px",
		fontSize: "16px",
		textAlign: "center",
	},
	add: {
		position: "relative",
		cursor: "pointer",
		borderLeft: "1px solid black",
		height: "25px",
	},
	remove: {
		position: "relative",
		cursor: "pointer",
		borderRight: "1px solid black",
		height: "25px",
	},
}));

export default function ProductChangeInput({
	value,
	productId,
	userId,
	style,
}: IProductChangeInput) {
	const classes = useStyles();
	const newVal = value ? value : 0;

	const dispatch = useDispatch();

	const updateProductAmount = async (newVal: any) => {
		try {
			if (newVal === 0) {
				const res = await client.delete(
					`/api/users/${userId}/updateCart/${productId}`
				);

				if (res.statusText === "Accepted") {
					dispatch(postAddProductSuccess(res.data));
				}
			} else {
				const res = await client.put(
					`/api/users/${userId}/updateCartAmout/${productId}`,
					{
						amount: parseInt(newVal),
					}
				);
				if (res.statusText === "OK") {
					dispatch(postAddProductSuccess(res.data));
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div style={style} color="textSecondary" className={classes.root}>
			<RemoveIcon
				className={classes.remove}
				onClick={() => {
					updateProductAmount(newVal - 1);
				}}
			/>

			<input
				type="number"
				className={classes.input}
				value={value}
				onChange={(e) =>
					updateProductAmount(
						typeof e.target.value === "number" ? "" : e.target.value
					)
				}
				placeholder="Amount"
				min="1"
				max="10"
			/>
			<AddIcon
				className={classes.add}
				onClick={() => {
					updateProductAmount(newVal + 1);
				}}
			/>
		</div>
	);
}
