import { createStyles, makeStyles, Theme } from "@material-ui/core";
const useStyles = makeStyles(
  (theme: Theme) => {
    return createStyles({
      header: {
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: "white",
        padding: "1em",
        [theme.breakpoints.up("md")]: {
          display: "flex",
          justifyContent: "space-between",
        },
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
        [theme.breakpoints.up("md")]: {
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          width: "100%",
        },
      },
      navLink: {
        margin: "0 1em",
        "&:hover": {
          cursor: "pointer",
          fontWeight: "bold",
          transition: "fontWeight 10s",
        },
      },
      footer: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      },
      hamburgerMenuIcon: {
        [theme.breakpoints.up("md")]: {
          display: "none",
        },
      },
      cta: {
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
        background: "#fff",
        color: "#353535",
        width: "350px",
        border: `0.25em solid ${theme.palette.primary.main}`,
        borderRadius: "5em",
        textAlign: "center",
        fontWeight: "bold",
        "&:hover": {
          cursor: "pointer",
          background: `${theme.palette.primary.main}`,
          color: "#fff",
        },
      },
      list: {
        width: 250,
      },
      mobileHamBurgerMenuLinks: {
        fontSize: "1.5em",
        margin: "0.25em 0",
        padding: "0.75em 0.5em",

        "&:hover": {
          background: "grey",
          cursor: "pointer",
          color: "#fff",
        },
      },
    });
  },
  { index: 1 },
);

export default useStyles;
