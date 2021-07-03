import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { DARK_FORM_BACKGROUND } from "../../../../styles/globals";
const useInvoiceFormStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      height: "100vh",
      overflowY: "scroll",
      padding: "5em 5em",
      background:
        theme.palette.type === "dark"
          ? DARK_FORM_BACKGROUND
          : theme.palette.background.paper,
    },
    formHeading: {
      fontWeight: "bold",
    },
    subHeading: {
      color: theme.palette.primary.main,
      fontWeight: "bold",
      fontSize: "1.2em",
      margin: `16px 0`,
    },
  });
});

export default useInvoiceFormStyles;
