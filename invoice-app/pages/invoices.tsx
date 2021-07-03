import {
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuid4 } from "uuid";
import Invoice from "../components/common/content/invoice/Invoice";
import CreateInvoiceButton from "../components/common/content/invoiceButton/CreateInvoiceButton";
import { EInvoiceStatus, IInvoice } from "../types/server";

const invoiceData: IInvoice[] = [
  {
    id: uuid4(),
    amount: 1234,
    clientName: "John Doe",
    dueDate: new Date(2020, 5, 19),
    status: EInvoiceStatus.PAID,
  },
  {
    id: uuid4(),
    amount: 1234,
    clientName: "Mike Davis",
    dueDate: new Date(2020, 1, 19),
    status: EInvoiceStatus.DRAFT,
  },
  {
    id: uuid4(),
    amount: 1234,
    clientName: "John Evans",
    dueDate: new Date(2021, 4, 12),
    status: EInvoiceStatus.PENDING,
  },
  {
    id: uuid4(),
    amount: 1234,
    clientName: "Mike Davis",
    dueDate: new Date(2020, 1, 19),
    status: EInvoiceStatus.DRAFT,
  },
  {
    id: uuid4(),
    amount: 1234,
    clientName: "Jonathan Devans",
    dueDate: new Date(2021, 4, 12),
    status: EInvoiceStatus.PENDING,
  },
];

import { createStyles, makeStyles, Theme } from "@material-ui/core";
import SwipeableFormDrawer from "../components/common/forms/invoice/FormDrawer";
const useStyles = makeStyles((_: Theme) => {
  return createStyles({
    title: {
      fontWeight: "bold",
    },
  });
});

function InvoicePage() {
  const theme = useTheme();
  const [isFormDrawerOpen, setIsFormDrawerOpen] = useState(false);
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <SwipeableFormDrawer
        open={isFormDrawerOpen}
        setIsOpen={setIsFormDrawerOpen}
      />
      <Box my={isMediumScreen ? 4 : 2} py={isMediumScreen ? 4 : 2}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <Typography
              color="textPrimary"
              variant="h4"
              gutterBottom
              className={classes.title}
            >
              Invoices
            </Typography>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {invoiceData &&
                (isMediumScreen
                  ? `There are ${invoiceData.length} total invoices.`
                  : `${invoiceData.length} invoices`)}
            </Typography>
          </Grid>
          <Grid container item xs={2} md={3} justify="flex-end">
            <Typography color="textPrimary" variant="h6" gutterBottom>
              Filter
            </Typography>
          </Grid>
          <Grid container item xs={4} md={3} justify="flex-end">
            <CreateInvoiceButton
              onClick={() => {
                setIsFormDrawerOpen(true);
              }}
            />
          </Grid>
        </Grid>
      </Box>
      {invoiceData &&
        invoiceData.map((invoice) => (
          <Invoice invoiceData={invoice} key={invoice.id} />
        ))}
    </Container>
  );
}

export default InvoicePage;
