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
    },

    themeSelectorAndAvatar: {
      display: "flex",
      alignItems: "center",
      position: "relative",
      height: "100%",
    },

    avatar: {
      width: 50,
      height: 50,
      margin: "0 1em",
    },
  });
});

export default useHeaderStyles;
