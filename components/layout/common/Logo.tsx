import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "../layout.styles";

function Logo() {
  const classes = useStyles();

  return (
    <span className={classes.inlineBlock}>
      <Typography
        variant="h4"
        color="textPrimary"
        className={classes.inlineBlock}
      >
        Wood
      </Typography>
      <Typography
        variant="h4"
        color="textPrimary"
        className={`${classes.inlineBlock} ${classes.span}`}
      >
        Mark
      </Typography>
    </span>
  );
}

export default Logo;
