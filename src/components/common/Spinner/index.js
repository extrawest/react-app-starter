import React from "react";
import { CircularProgress, Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(( theme ) => ({
	spinWrapper: {
		display: 'flex',
    justifyContent: 'center',
		margin: '25px auto'
	}
}));

const Spinner = ({ size, color, className, isMargin = false }) => {
	const classes = useStyles();

  return (
	<Box className={isMargin ? classes.spinWrapper : ""}>
		<CircularProgress
			disableShrink
			size={size}
			color={color}
			className={className}
			/>
	</Box>
  );
};

export default Spinner;
