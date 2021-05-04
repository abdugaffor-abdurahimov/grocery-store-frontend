import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			width: "100vw",
			height: "100wh",

			"& > * + *": {
				marginTop: theme.spacing(2),
			},
		},
	})
);

export default function LinearIndeterminate() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<LinearProgress color="secondary" />
		</div>
	);
}
