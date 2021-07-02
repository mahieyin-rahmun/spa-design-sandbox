import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { EInvoiceStatus } from "../../../../types/server";
const useInvoiceStyles = (status: EInvoiceStatus) =>
  makeStyles((theme: Theme) => {
    const statusColor =
      status === EInvoiceStatus.PAID
        ? theme.palette.success.main
        : status === EInvoiceStatus.PENDING
        ? theme.palette.warning.main
        : theme.palette.type === "dark"
        ? grey["100"]
        : grey["A700"];

    return createStyles({
      root: {
        padding: "1em 2em",
        margin: "1em 0",
        height: 200,
        display: "grid",
        gridTemplateColumns: "1fr 0.75fr",
        gridTemplateAreas: `"id name"
        "dueDate status"
        "amount status"`,
        borderRadius: "1em",
        position: "relative",

        [theme.breakpoints.up("md")]: {
          height: 120,
          gap: theme.spacing(0.5),
          gridTemplateColumns: "0.75fr 1fr 1fr 0.75fr 0.75fr",
          gridTemplateRows: "1fr",
          gridTemplateAreas: `"id name dueDate amount status button"
          ". . . . . ."`,
        },
      },

      id: {
        gridArea: "id",
        fontWeight: "bold",
        fontSize: "1.2em",
        margin: "auto 0",

        "&::before": {
          content: "'#'",
          color: theme.palette.text.secondary,
          fontFamily: "sans-serif",
        },

        [theme.breakpoints.up("md")]: {
          fontSize: "1.3em",
        },
      },

      name: {
        gridArea: "name",
        fontSize: "1.1em",
        alignSelf: "center",
        justifySelf: "end",

        [theme.breakpoints.up("md")]: {
          alignSelf: "center",
          justifySelf: "start",
          fontSize: "1.2em",
        },
      },

      dueDate: {
        gridArea: "dueDate",
        fontSize: "1.1em",
        margin: "auto 0",

        [theme.breakpoints.up("md")]: {
          fontSize: "1.2em",
          textAlign: "left",
        },
      },

      amount: {
        gridArea: "amount",
        margin: "auto 0",
        fontWeight: "bold",
        fontSize: "1.1em",

        [theme.breakpoints.up("md")]: {
          fontSize: "1.2em",
        },
      },

      status: {
        gridArea: "status",
        height: "50%",
        width: "100%",
        display: "grid",
        alignSelf: "center",
        justifySelf: "end",
        placeContent: "center",
        border: `2px solid ${statusColor}`,
        borderRadius: "1em",
        boxShadow: `inset 0 0 2px 1px ${statusColor}`,

        [theme.breakpoints.up("md")]: {
          placeSelf: "center",
          height: "70%",
          width: "90%",
        },
      },

      statusText: {
        fontWeight: "bold",
        color: statusColor,
        textTransform: "capitalize",
        position: "relative",
        marginLeft: theme.spacing(2),

        "&::before": {
          content: "''",
          width: 8,
          height: 8,
          background: statusColor,
          position: "absolute",
          borderRadius: "50%",
          left: theme.spacing(-2),
          top: "50%",
          transform: "translateY(-50%)",
        },
      },

      iconButton: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        right: -5,
        display: "none",

        [theme.breakpoints.up("md")]: {
          display: "block",
        },
      },
    });
  })();

export default useInvoiceStyles;
