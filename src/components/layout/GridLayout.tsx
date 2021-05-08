import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { ReactElement } from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
}));

function GridLayout({ children }: any): ReactElement {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				{children}
			</Grid>
		</div>
	);
}

export default GridLayout;
