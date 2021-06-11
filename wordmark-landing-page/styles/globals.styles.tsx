import { createMuiTheme } from "@material-ui/core";

export const globalLightTheme = createMuiTheme({
  typography: {
    allVariants: {
      fontFamily: `'Poppins', sans-serif;`,
    },
  },
  palette: {
    primary: {
      main: "#24E390",
      light: "#50FF90",
      dark: "#1ec77e",
    },
    secondary: {
      main: "#35E2E8",
    },
    background: {
      default: "#f2f2f2",
    },
  },
});
