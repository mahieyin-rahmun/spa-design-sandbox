import { createMuiTheme } from "@material-ui/core";
import { lime, green } from "@material-ui/core/colors";

export const LIGHT_SIDEBAR_BACKGROUND = "#391255";

export const DARK_SIDEBAR_BACKGROUND = "#221939";

export const LIGHT_FORM_FIELD_AND_BUTTON_HOVER_COLOR = "#e0e0e0";
export const LIGHT_FORM_FIELD_AND_BUTTON_COLOR = "#f0f0f0";
export const LIGHT_FORM_BACKGROUND = "#e0e0e0";

export const DARK_FORM_FIELD_AND_BUTTON_HOVER_COLOR = "#333761";
export const DARK_FORM_FIELD_AND_BUTTON_COLOR = "#1f213a";
export const DARK_FORM_BACKGROUND = "#141625";

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
      md: 900,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        padding: "1em 2em",
        borderRadius: "5em",
        fontWeight: "bold",
        fontSize: "1.2em",
        textTransform: "capitalize",
      },
      contained: {
        color: "#1e1e1e",
        backgroundColor: LIGHT_FORM_FIELD_AND_BUTTON_COLOR,
        "&:hover": {
          backgroundColor: LIGHT_FORM_FIELD_AND_BUTTON_HOVER_COLOR,
        },
      },
    },
    MuiDrawer: {
      paperAnchorLeft: {
        marginLeft: 120,
      },
    },
  },
});

export const globalDarkTheme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#141523",
      paper: "#221a39",
      // paper: DARK_FORM_BACKGROUND,
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
      md: 900,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        padding: "1em 2em",
        borderRadius: "5em",
        fontWeight: "bold",
        fontSize: "1.2em",
        textTransform: "capitalize",
      },
      contained: {
        color: "#fff",
        backgroundColor: DARK_FORM_FIELD_AND_BUTTON_COLOR,
        "&:hover": {
          backgroundColor: DARK_FORM_FIELD_AND_BUTTON_HOVER_COLOR,
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        background: DARK_FORM_FIELD_AND_BUTTON_COLOR,
      },
    },
    MuiDrawer: {
      paperAnchorLeft: {
        marginLeft: 120,
      },
    },
  },
});
