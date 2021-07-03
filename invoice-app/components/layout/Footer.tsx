import { IconButton, Paper, Tooltip } from "@material-ui/core";
import React from "react";
import { VscGithub } from "react-icons/vsc";
import useFooterStyles from "./Footer.styles";

function Footer() {
  const classes = useFooterStyles();
  return (
    <Paper className={classes.footer}>
      <Tooltip title="View source code on GitHub">
        <IconButton className={classes.iconButton}>
          <VscGithub className={classes.icon} />
        </IconButton>
      </Tooltip>
    </Paper>
  );
}

export default Footer;
