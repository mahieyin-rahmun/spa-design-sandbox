import { createMuiTheme } from "@material-ui/core";

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
      main: "#7de6c4",
    },
    warning: {
      main: "#eec68a",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Poppins, sans-serif",
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
      main: "#157e77",
    },
    warning: {
      main: "#955f2b",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Poppins, sans-serif",
    },
  },
});
