import { Typography } from "@material-ui/core";
import React from "react";
import Logo from "./common/Logo";
import useStyles from "./layout.styles";

function Footer() {
  const classes = useStyles();

  return (
    <footer>
      <div className={classes.footer}>
        <div className={classes.inlineBlock}>
          <Logo />
        </div>
        <Typography
          display="inline"
          variant="h6"
          className={classes.inlineBlock}
        >
          &copy; 2021
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
