import {
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Select,
  MenuItem,
  SelectProps,
} from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuid4 } from "uuid";
import Invoice from "../components/common/content/invoice/Invoice";
import CreateInvoiceButton from "../components/common/content/invoiceButton/CreateInvoiceButton";
import { EInvoiceStatus, IInvoicePreview } from "../types/server";

const hardCodedInvoiceData: IInvoicePreview[] = [
  {
    id: uuid4(),
    amount: 1234,
    clientName: "John Doe",
    dueDate: new Date(2020, 5, 19),
    status: EInvoiceStatus.PAID,
  },
  {
    id: uuid4(),
    amount: 1232,
    clientName: "Mike Davis",
    dueDate: new Date(2020, 1, 19),
    status: EInvoiceStatus.DRAFT,
  },
  {
    id: uuid4(),
    amount: 145,
    clientName: "John Evans",
    dueDate: new Date(2021, 4, 12),
    status: EInvoiceStatus.PENDING,
  },
  {
    id: uuid4(),
    amount: 10000,
    clientName: "Mike Davis",
    dueDate: new Date(2020, 1, 19),
    status: EInvoiceStatus.DRAFT,
  },
  {
    id: uuid4(),
    amount: 234,
    clientName: "Jonathan Devans",
    dueDate: new Date(2021, 4, 12),
    status: EInvoiceStatus.PENDING,
  },
  {
    id: uuid4(),
    amount: 443,
    clientName: "Jonathan Devans",
    dueDate: new Date(2021, 12, 2),
    status: EInvoiceStatus.PAID,
  },
];

enum SortBy {
  ID,
  AMOUNT,
  STATUS,
}

import { createStyles, makeStyles, Theme } from "@material-ui/core";
import SwipeableFormDrawer from "../components/common/forms/invoice/FormDrawer";
const useStyles = makeStyles((_: Theme) => {
  return createStyles({
    title: {
      fontWeight: "bold",
    },
  });
});

// This function returns a sorting function based on the value of sortBy
const sortInvoices =
  (sortBy: SortBy) =>
  (invoice1: IInvoicePreview, invoice2: IInvoicePreview) => {
    switch (sortBy) {
      case SortBy.ID: {
        return invoice1.id < invoice2.id
          ? -1
          : invoice1.id === invoice2.id
          ? 0
          : 1;
      }
      case SortBy.AMOUNT: {
        return invoice1.amount < invoice2.amount
          ? -1
          : invoice1.amount === invoice2.amount
          ? 0
          : 1;
      }
      case SortBy.STATUS: {
        return invoice1.status < invoice2.status
          ? -1
          : invoice1.status === invoice2.status
          ? 0
          : 1;
      }
    }
  };

function InvoicePage() {
  const theme = useTheme();
  const [invoiceData, setInvoiceData] = useState<IInvoicePreview[]>(
    () => hardCodedInvoiceData,
  );
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.ID);
  const [isFormDrawerOpen, setIsFormDrawerOpen] = useState(false);
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const classes = useStyles();

  const handleFilterChange = (event: React.ChangeEvent<SelectProps>) => {
    setSortBy(event.target.value as SortBy);
  };

  return (
    <Container maxWidth="lg">
      <SwipeableFormDrawer
        open={isFormDrawerOpen}
        setIsOpen={setIsFormDrawerOpen}
      />
      <Box my={isMediumScreen ? 4 : 2} py={isMediumScreen ? 4 : 2}>
        <Grid container spacing={2} alignItems="center" justify="center">
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
          <Grid container item xs={6} spacing={4} alignItems="center">
            <Grid container item xs={12} md={6} justify="flex-end">
              <CreateInvoiceButton
                onClick={() => {
                  setIsFormDrawerOpen(true);
                }}
              />
            </Grid>
            <Grid container item xs={12} md={6} justify="flex-end">
              <Grid item xs={12}>
                <Typography variant="subtitle1" color="textSecondary">
                  {isLargeScreen ? "" : "Sort by"}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Select
                  name="filter"
                  value={sortBy}
                  onChange={handleFilterChange}
                  variant="outlined"
                  fullWidth
                >
                  <MenuItem value={SortBy.ID}>
                    {isLargeScreen ? "Sort by ID" : "ID"}
                  </MenuItem>
                  <MenuItem value={SortBy.STATUS}>
                    {isLargeScreen ? "Sort by Status" : "Status"}
                  </MenuItem>
                  <MenuItem value={SortBy.AMOUNT}>
                    {isLargeScreen ? "Sort by Amount" : "Amount"}
                  </MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {invoiceData &&
        invoiceData
          .sort(sortInvoices(sortBy))
          .map((invoice) => <Invoice invoiceData={invoice} key={invoice.id} />)}
    </Container>
  );
}

export default InvoicePage;
