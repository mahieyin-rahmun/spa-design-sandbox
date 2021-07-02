import { createStyles, makeStyles, Theme } from "@material-ui/core";
const useLayoutStyles = makeStyles((theme: Theme) => {
  return createStyles({
    container: {
      display: "grid",
      gridTemplateAreas: `"appbar"
      "content"`,

      [theme.breakpoints.up("md")]: {
        height: "100vh",
        gridTemplateAreas: `"appbar" "content"`,
        gridTemplateColumns: "120px 1fr",
        gridTemplateRows: "1fr",
      },
    },
    appbar: {
      gridArea: "appbar",
    },
  });
});

export default useLayoutStyles;
