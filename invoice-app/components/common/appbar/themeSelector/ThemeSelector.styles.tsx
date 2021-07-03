import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useThemeSelectorStyles = makeStyles((theme: Theme) => {
  return createStyles({
    iconButton: {
      [theme.breakpoints.up("md")]: {
        marginBottom: theme.spacing(2),
      },
    },

    icon: {
      width: "30px",
      height: "30px",
      color: "#fff",
    },
  });
});

export default useThemeSelectorStyles;
