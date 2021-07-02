import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import { v4 as uuid4 } from "uuid";
import Invoice from "../components/common/content/invoice/Invoice";
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

function InvoicePage() {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container maxWidth="lg">
      <Box my={isMediumScreen ? 4 : 2} py={isMediumScreen ? 4 : 2}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <Typography color="textPrimary" variant="h4" gutterBottom>
              Invoices
            </Typography>
            <Typography color="textPrimary" gutterBottom>
              {invoiceData &&
                (isMediumScreen
                  ? `There are ${invoiceData.length} total invoices.`
                  : `${invoiceData.length} invoices`)}
            </Typography>
          </Grid>
          <Grid container item xs={3} justify="flex-end">
            <Typography color="textPrimary" variant="h5" gutterBottom>
              Filter
            </Typography>
          </Grid>
          <Grid container item xs={3} justify="flex-end">
            <Button color="primary" variant="contained">
              {isMediumScreen ? "New Invoice" : "New"}
            </Button>
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
