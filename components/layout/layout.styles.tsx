import { createStyles, makeStyles, Theme } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    header: {
      background: "white",
      padding: "1em",
    },
    inlineBlock: {
      display: "inline",
      fontWeight: "bold",
      fontSize: "1.4em",
    },
    span: {
      color: theme.palette.primary.main,
    },
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    nav: {
      display: "none",
    },
    footer: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
    },
  });
});

export default useStyles;
