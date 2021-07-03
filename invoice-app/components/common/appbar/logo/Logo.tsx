import React from "react";
import useLogoStyles from "./Logo.styles";

function Logo() {
  const classes = useLogoStyles();
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <div className={classes.inner}></div>
      </div>
    </div>
  );
}

export default Logo;
