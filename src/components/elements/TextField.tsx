import { TextField } from "@material-ui/core";
import React from "react";

export default function TextFieldCustom(props: any) {
	return (
		<TextField
			{...props}
			variant="outlined"
			margin="dense"
			required={true}
			color="secondary"
			fullWidth={true}
		/>
	);
}
