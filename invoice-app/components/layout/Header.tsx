import { Avatar } from "@material-ui/core";
import React from "react";
import Logo from "../common/appbar/logo/Logo";
import ThemeSelector from "../common/appbar/themeSelector/ThemeSelector";
import useHeaderStyles from "./Header.styles";

function Header() {
  const classes = useHeaderStyles();

  return (
    <div className={classes.appbar}>
      <Logo />
      <div className={classes.themeSelectorAndAvatar}>
        <ThemeSelector />
        <Avatar className={classes.avatar} />
      </div>
    </div>
  );
}

export default Header;
