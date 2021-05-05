import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const DefaultLayout = (props: any) => {
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="lg">
				<Typography component="div" style={{ height: "20vh" }} />
				{props.children}
			</Container>
		</React.Fragment>
	);
};

export default DefaultLayout;
