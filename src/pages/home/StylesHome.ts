import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		// textAlign: "center",
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
	control: {
		padding: theme.spacing(2),
	},
	wrapper: {
		backgroundColor: "white",
		border: "1px solid #f5f5f5",
	},
	img: {
		width: "100%",
		height: "100%",
	},
}));

export default useStyles;
