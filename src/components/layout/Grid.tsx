import Grid from "@material-ui/core/Grid";

const StyledGrid = (props: any) => {
	return (
		<Grid
			container
			direction="column"
			alignItems="center"
			justify="center"
			{...props}
		/>
	);
};

export default StyledGrid;
