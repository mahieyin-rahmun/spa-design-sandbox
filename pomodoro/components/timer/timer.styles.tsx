import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles(
  (theme: Theme) => {
    return createStyles({
      root: {
        background: theme.palette.primary.main,
        height: "300px",
        width: "300px",
        borderRadius: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      },
      progress: {
        position: "absolute",
      },
      outerCircle: {
        display: "flex",
        background: "linear-gradient(-45deg, #291f4f, #141032)",
        width: "330px",
        height: "330px",
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: `
        -2em -2em 3em 0.5em #2a1f54,
        2em 2em 3em 0.5em #161035
      `,
        [theme.breakpoints.up("sm")]: {
          transform: "scale(1.1)",
        },
        [theme.breakpoints.up("md")]: {
          transform: "scale(1.3)",
        },
      },
      timerText: {
        marginTop: "0.5em",
        fontWeight: "bold",
      },
      button: {
        fontSize: "1.25em",
        letterSpacing: "0.5em",
        textTransform: "uppercase",
        padding: "0 1em",
        margin: "0.5em auto",
        border: `1px solid ${theme.palette.text.secondary}`,
        borderRadius: "5em",
        [theme.breakpoints.up("md")]: {
          fontSize: "1em",
        },
      },
    });
  },
  { index: 1 },
);

export default useStyles;
