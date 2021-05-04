import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		textAlign: "center",
	},
	paper: {
		height: 140,
		width: 100,
	},
	control: {
		padding: theme.spacing(2),
	},
	wrapper: {
		backgroundColor: "white",
		border: "1px solid #f5f5f5",
		padding: "30px",
	},
}));

export default useStyles;
