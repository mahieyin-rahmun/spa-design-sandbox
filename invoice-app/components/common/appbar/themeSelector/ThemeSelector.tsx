import { IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useTheme from "../../../../lib/hooks/useTheme";
import { HiOutlineLightBulb, HiOutlineMoon } from "react-icons/hi";
import useThemeSelectorStyles from "./ThemeSelector.styles";

function ThemeSelector() {
  const classes = useThemeSelectorStyles();
  // @ts-ignore
  const { theme, toggleTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(theme === "dark");
  }, [theme]);

  return (
    <IconButton onClick={() => toggleTheme()}>
      {isDarkTheme ? (
        <HiOutlineMoon className={classes.iconButton} />
      ) : (
        <HiOutlineLightBulb className={classes.iconButton} />
      )}
    </IconButton>
  );
}

export default ThemeSelector;
