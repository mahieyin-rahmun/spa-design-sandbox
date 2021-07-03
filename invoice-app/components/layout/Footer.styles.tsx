import { createStyles, makeStyles, Theme } from "@material-ui/core";
const useFooterStyles = makeStyles((theme: Theme) => {
  return createStyles({
    footer: {
      position: "sticky",
      display: "flex",
      marginTop: "5em",
      padding: "2em",
      [theme.breakpoints.up("md")]: {
        marginTop: "auto",
        width: "100%",
        height: "100%",
      },
    },
    iconButton: {
      margin: "auto",
    },
    icon: {
      width: 50,
      height: 50,
    },
  });
});

export default useFooterStyles;
