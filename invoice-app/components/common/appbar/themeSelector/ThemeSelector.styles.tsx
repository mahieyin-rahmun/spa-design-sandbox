import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useThemeSelectorStyles = makeStyles((theme: Theme) => {
  return createStyles({
    iconButton: {
      width: "30px",
      height: "30px",
      color: "#fff",

      [theme.breakpoints.up("md")]: {
        marginBottom: theme.spacing(2),
      },
    },
  });
});

export default useThemeSelectorStyles;
