import { createMuiTheme } from "@material-ui/core";

export const pomodoroClockRightSideShadowColor = "#292150";

const textTheme = createMuiTheme({
  typography: {
    allVariants: {
      fontFamily: "'Poppins', sans-serif",
    },
  },
});

export const globalTheme = createMuiTheme({
  ...textTheme,
  palette: {
    background: {
      default: "#201940",
      paper: "#e2e2e2",
    },
    primary: {
      main: "#161332",
    },
    secondary: {
      main: "#ff4d6e",
    },
    text: {
      primary: "#d7dcfd",
      secondary: "#4a4966",
    },
  },
});
