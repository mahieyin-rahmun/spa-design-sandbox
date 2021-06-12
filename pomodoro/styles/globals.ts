import { createMuiTheme } from "@material-ui/core";

export const settingsModalButtonColor = "#ff4d6e";
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
  overrides: {
    MuiAppBar: {
      root: {
        borderRadius: "5em",
      },
    },
    MuiTab: {
      root: {
        background: "#161332",
        padding: "0.5em",
        "&$selected": {
          background: "#ff4d6e",
          borderRadius: "5em",
          "& span": {
            color: "#1f1940",
          },
        },
      },
    },
    MuiTabs: {
      indicator: {
        display: "none",
      },
      root: {
        borderRadius: "5em",
        background: "#161332",
        padding: "0.75em",
        "& span": {
          color: "#4a4966",
          textTransform: "lowercase",
          fontWeight: "bold",
        },
      },
    },
  },
});
