import { Container, IconButton, Paper, Typography } from "@material-ui/core";
import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import { TInvoiceProps } from "../../../../types/client";
import { EInvoiceStatus } from "../../../../types/server";
import useInvoiceStyles from "./Invoice.styles";

const Invoice: React.FC<TInvoiceProps> = ({
  invoiceData: { id, status, amount, clientName, dueDate },
}) => {
  const classes = useInvoiceStyles(status);

  return (
    <Paper elevation={8} className={classes.root}>
      <Typography variant="button" color="textPrimary" className={classes.id}>
        {id.slice(0, 6)}
      </Typography>
      <Typography variant="body2" color="textPrimary" className={classes.name}>
        {clientName}
      </Typography>
      <Typography
        variant="body1"
        color="textPrimary"
        className={classes.dueDate}
      >
        Due{" "}
        {Intl.DateTimeFormat("en-US", {
          year: "numeric",
          day: "2-digit",
          month: "short",
        }).format(dueDate)}
      </Typography>
      <Typography variant="h6" color="textPrimary" className={classes.amount}>
        BDT {amount.toFixed(2)}
      </Typography>

      <div className={classes.status}>
        <Typography component="p" className={classes.statusText}>
          {EInvoiceStatus[status]}
        </Typography>
      </div>

      <IconButton className={classes.iconButton}>
        <HiArrowCircleRight />
      </IconButton>
    </Paper>
  );
};

export default Invoice;
