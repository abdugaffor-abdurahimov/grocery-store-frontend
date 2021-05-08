import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		// width: "100%",
		// maxWidth: "36ch",
		backgroundColor: theme.palette.background.paper,
		flexGrow: 1,
	},
	inline: {
		display: "inline",
	},
}));

export default useStyles;
