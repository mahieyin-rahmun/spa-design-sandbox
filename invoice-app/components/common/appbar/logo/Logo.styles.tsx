import { createStyles, makeStyles, Theme } from "@material-ui/core";
const useLogoStyles = makeStyles((theme: Theme) => {
  return createStyles({
    container: {
      width: 100,
      height: 100,
      position: "relative",

      "&::before": {
        content: "''",
        width: "30%",
        height: "100%",
        background: theme.palette.primary.main,
        position: "absolute",
        zIndex: 99,
        left: -10,
      },

      "&:hover": {
        cursor: "pointer",
      },
    },

    root: {
      background: theme.palette.primary.main,
      width: "100%",
      height: "100%",
      padding: "1em",
      display: "grid",
      placeItems: "center",
      borderRadius: "1em",
      position: "relative",
      overflow: "hidden",

      "&::after": {
        content: "''",
        width: "100%",
        height: "100%",
        background: theme.palette.primary.light,
        position: "absolute",
        left: 10,
        top: "50%",
        zIndex: 99,
        borderRadius: "1em",
      },
    },
    inner: {
      background: "#fff",
      width: "60%",
      height: "60%",
      borderRadius: "50%",
      position: "relative",
      zIndex: 100,

      "&::before, &::after": {
        position: "absolute",
        content: "''",
        width: "2.75em",
        height: "2.75em",
        background: theme.palette.primary.main,
        bottom: "100%",
        zIndex: 100,
      },

      "&::before": {
        right: "48%",
        transform: "skew(0, 50deg)",
      },

      "&::after": {
        left: "50%",
        transform: "skew(0, -50deg)",
      },
    },
  });
});

export default useLogoStyles;
