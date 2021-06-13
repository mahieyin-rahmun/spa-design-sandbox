import { createStyles, Theme } from "@material-ui/core";
import { globalTheme } from "../../styles/globals";

const styles = (theme: Theme) =>
  createStyles({
    button: {
      background: globalTheme.palette.secondary.main,
      display: "absolute",
      margin: "0 auto",
      color: "#eee",
      padding: "1em 4em",
      borderRadius: "5em",
      textTransform: "capitalize",
      fontWeight: "bold",

      "&:hover": {
        background: globalTheme.palette.secondary.main,
        filter: "brightness(1.3)",
      },
    },
  });

export default styles;
