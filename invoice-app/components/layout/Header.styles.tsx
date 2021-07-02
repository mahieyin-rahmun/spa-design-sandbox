import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import {
  DARK_SIDEBAR_BACKGROUND,
  LIGHT_SIDEBAR_BACKGROUND,
} from "../../styles/globals";
const useHeaderStyles = makeStyles((theme: Theme) => {
  return createStyles({
    appbar: {
      height: "100px",
      position: "sticky",
      background:
        theme.palette.type === "dark"
          ? DARK_SIDEBAR_BACKGROUND
          : LIGHT_SIDEBAR_BACKGROUND,

      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",

      "&::before": {
        content: "''",
        height: "100%",
        width: "1px",
        background: grey["700"],
        position: "absolute",
        right: 85,
      },

      [theme.breakpoints.up("md")]: {
        flexDirection: "column",
        width: 120,
        height: "100%",

        "&::before": {
          content: "''",
          height: 1,
          width: "100%",
          background: grey["700"],
          position: "absolute",
          bottom: 90,
          right: 0,
        },
      },
    },

    themeSelectorAndAvatar: {
      display: "flex",
      alignItems: "center",
      position: "relative",
      height: "100%",

      [theme.breakpoints.up("md")]: {
        flexDirection: "column",
        height: "auto",
      },
    },

    avatar: {
      width: 50,
      height: 50,
      margin: "0 1em",

      [theme.breakpoints.up("md")]: {
        margin: "1em 1em",
      },
    },
  });
});

export default useHeaderStyles;
