import { createStyles, makeStyles, Theme } from "@material-ui/core";
const useLayoutStyles = makeStyles((theme: Theme) => {
  return createStyles({
    container: {
      display: "grid",
      gridTemplateAreas: `"appbar"
      "content" 
      "footer"`,

      [theme.breakpoints.up("md")]: {
        minHeight: "100vh",
        gridTemplateAreas: `"appbar content footer"`,
        gridTemplateColumns: "120px 1fr 120px",
        gridTemplateRows: "1fr",
      },
    },
    appbar: {
      gridArea: "appbar",
    },

    content: {
      gridArea: "content",
    },

    footer: {
      gridArea: "footer",
      width: "100%",
      height: "100%",
    },
  });
});

export default useLayoutStyles;
