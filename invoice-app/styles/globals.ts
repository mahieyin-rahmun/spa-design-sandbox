import { createMuiTheme } from "@material-ui/core";
import { lime, green } from "@material-ui/core/colors";

export const LIGHT_SIDEBAR_BACKGROUND = "#393555";
export const DARK_SIDEBAR_BACKGROUND = "#221939";

export const globalLightTheme = createMuiTheme({
  palette: {
    type: "light",
    background: {
      default: "#f8f6fc",
      paper: "#fefefe",
    },
    primary: {
      main: "#8a00f4",
    },
    success: {
      main: green["A400"],
    },
    warning: {
      main: lime["500"],
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Poppins, sans-serif",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 720,
      lg: 1280,
      xl: 1920,
    },
  },
});

export const globalDarkTheme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#141523",
      paper: "#221a39",
    },
    primary: {
      main: "#8b00f3",
    },
    success: {
      main: green["A400"],
    },
    warning: {
      main: lime["A700"],
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Poppins, sans-serif",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 720,
      lg: 1280,
      xl: 1920,
    },
  },
});
