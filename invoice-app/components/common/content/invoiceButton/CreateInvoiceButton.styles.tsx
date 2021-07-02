import { createStyles, makeStyles, Theme } from "@material-ui/core";
const useCreateInvoiceButtonStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      fontSize: "1.3em",
      borderRadius: "5em",
      fontWeight: "bold",
      padding: "1em",

      [theme.breakpoints.down("sm")]: {
        fontSize: "1em",
        padding: "1em 0.5em",
        width: "100%",
      },
    },
    icon: {
      width: 50,
      height: 50,
      background: "#fff",
      borderRadius: "50%",
      position: "relative",

      "&::after": {
        content: "'+'",
        color: theme.palette.primary.main,
        fontSize: "2em",
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: "50%",
        transform: "translateY(-70%)",
      },

      [theme.breakpoints.down("sm")]: {
        width: 30,
        height: 30,

        "&::after": {
          fontSize: "1.3em",
          position: "absolute",
          height: "100%",
          width: "100%",
          left: 0,
          top: "50%",
          transform: "translateY(-75%)",
        },
      },
    },
  });
});

export default useCreateInvoiceButtonStyles;
