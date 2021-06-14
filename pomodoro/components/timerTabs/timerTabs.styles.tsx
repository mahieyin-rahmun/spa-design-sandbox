import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles(
  (theme: Theme) => ({
    root: {
      height: "100%",
    },
    appbar: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(-2),
    },
    swipeableViews: {
      height: "600px",
    },
    tabPanel: {
      width: "100%",
      height: "600px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  }),
  { index: 1 },
);

export default useStyles;
