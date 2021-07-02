import {
  Box,
  Typography,
  Button,
  IconButton,
  Grid,
  Container,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { HiTrash } from "react-icons/hi";
import { Form, Formik, FieldArray } from "formik";
import React from "react";
import {
  TInvoiceFormInputTypes,
  TInvoiceFormProps,
} from "../../../../types/client";
import InputField from "../fields/InputField";
import SelectField from "../fields/SelectField";
import useInvoiceFormStyles from "./InvoiceForm.styles";

const formInitialValues: TInvoiceFormInputTypes.TInvoiceFormModel = {
  from: {
    city: "",
    country: "",
    postalCode: "",
    streetAddress: "",
  },
  to: {
    city: "",
    country: "",
    postalCode: "",
    streetAddress: "",
  },
  clientEmail: "",
  clientName: "",
  invoiceDate: new Date().toISOString().split("T")[0],
  items: [
    {
      name: "",
      quantity: 1,
      unitPrice: 0,
    },
  ],
  paymentTerms: TInvoiceFormInputTypes.EPaymentTerms.NET_30_DAYS,
  projectDescription: "",
};

const InvoiceForm: React.FC<TInvoiceFormProps> = ({ invoiceData }) => {
  const classes = useInvoiceFormStyles();
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div className={classes.root}>
      <Formik
        initialValues={formInitialValues}
        onSubmit={(values, _) => console.log(values)}
      >
        {({ values }) => (
          <Form>
            <Typography
              color="textPrimary"
              variant="h4"
              gutterBottom
              className={classes.formHeading}
            >
              {invoiceData
                ? `Edit #${invoiceData.id.slice(0, 6)}`
                : "New Invoice"}
            </Typography>
            <Container maxWidth="sm">
              <Box my={2} py={2}>
                <Typography
                  color="textPrimary"
                  variant="body1"
                  gutterBottom
                  className={classes.subHeading}
                >
                  Bill From
                </Typography>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <InputField
                      name="from.streetAddress"
                      label="Street Address"
                    />
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <InputField name="from.city" label="City" />
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <InputField name="from.postalCode" label="Postal Code" />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <InputField name="from.country" label="Country" />
                  </Grid>
                </Grid>
              </Box>
              <Box my={2} py={2}>
                <Typography
                  color="textPrimary"
                  variant="body1"
                  gutterBottom
                  className={classes.subHeading}
                >
                  Bill To
                </Typography>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <InputField name="clientName" label="Client's Name" />
                  </Grid>
                  <Grid item xs={12}>
                    <InputField
                      name="clientEmail"
                      label="Client's Email"
                      type="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputField
                      name="to.streetAddress"
                      label="Street Address"
                    />
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <InputField name="to.city" label="City" />
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <InputField name="to.postalCode" label="Postal Code" />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <InputField name="to.country" label="Country" />
                  </Grid>
                </Grid>
              </Box>
              <Box my={1}>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <InputField
                      name="invoiceDate"
                      label="Invoice Date"
                      type="date"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <SelectField
                      name="paymentTerms"
                      label="Payment Terms"
                      selectOptions={[
                        {
                          label: "Net 30 days",
                          value:
                            TInvoiceFormInputTypes.EPaymentTerms.NET_30_DAYS,
                        },
                        {
                          label: "Net 1 year",
                          value:
                            TInvoiceFormInputTypes.EPaymentTerms.NET_1_YEAR,
                        },
                        {
                          label: "Net 6 months",
                          value:
                            TInvoiceFormInputTypes.EPaymentTerms.NET_6_MONTHS,
                        },
                      ]}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputField
                      name="projectDescription"
                      label="Project Description"
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box my={2}>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  Item List
                </Typography>
                {!isMobileScreen && (
                  <Grid container spacing={2}>
                    <Grid item sm={4}>
                      <Typography color="textSecondary">Item Name</Typography>
                    </Grid>
                    <Grid item sm={2}>
                      <Typography color="textSecondary">Qty.</Typography>
                    </Grid>
                    <Grid item sm={3}>
                      <Typography color="textSecondary"> Price</Typography>
                    </Grid>
                    <Grid item sm={2}>
                      <Typography color="textSecondary">Total</Typography>
                    </Grid>
                    <Grid item sm={1}></Grid>
                  </Grid>
                )}
                <FieldArray
                  name="items"
                  render={({ remove, push }) => (
                    <Grid container spacing={2} alignItems="center">
                      {values.items.map(
                        ({ quantity, unitPrice }, index: number) => (
                          <React.Fragment key={index}>
                            <Grid item xs={12} sm={4}>
                              {isMobileScreen && (
                                <Typography color="textSecondary">
                                  Item Name
                                </Typography>
                              )}
                              <InputField
                                name={`items.${index}.name`}
                                label=""
                              />
                            </Grid>
                            <Grid item xs={3} sm={2}>
                              {isMobileScreen && (
                                <Typography color="textSecondary">
                                  Qty.
                                </Typography>
                              )}
                              <InputField
                                name={`items.${index}.quantity`}
                                label=""
                                type="number"
                                min="1"
                              />
                            </Grid>
                            <Grid item xs={4} sm={3}>
                              {isMobileScreen && (
                                <Typography color="textSecondary">
                                  Price
                                </Typography>
                              )}
                              <InputField
                                name={`items.${index}.unitPrice`}
                                label=""
                                type="number"
                                min="0"
                              />
                            </Grid>
                            <Grid item xs={3} sm={2}>
                              {isMobileScreen && (
                                <Typography color="textSecondary">
                                  Total
                                </Typography>
                              )}
                              <Typography color="textSecondary">
                                {(quantity * unitPrice).toFixed(2)}
                              </Typography>
                            </Grid>
                            <Grid item xs={2} sm={1}>
                              <IconButton
                                type="button"
                                onClick={() => remove(index)}
                              >
                                <HiTrash />
                              </IconButton>
                            </Grid>
                          </React.Fragment>
                        ),
                      )}
                      <Grid item xs={12}>
                        <Box my={2} style={{ width: "100%" }}>
                          <Button
                            type="button"
                            color="secondary"
                            variant="contained"
                            style={{ width: "100%" }}
                            onClick={() =>
                              push({ name: "", quantity: 1, unitPrice: 0 })
                            }
                          >
                            Add New Item
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  )}
                />
              </Box>
            </Container>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InvoiceForm;
