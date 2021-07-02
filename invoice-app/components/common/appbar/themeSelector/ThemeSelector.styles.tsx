import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useThemeSelectorStyles = makeStyles((_: Theme) => {
  return createStyles({
    iconButton: {
      width: "30px",
      height: "30px",
      color: "#fff",
    },
  });
});

export default useThemeSelectorStyles;
