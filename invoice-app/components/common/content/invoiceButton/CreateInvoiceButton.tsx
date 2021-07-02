import {
  ButtonProps,
  Button,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import useCreateInvoiceButtonStyles from "./CreateInvoiceButton.styles";

const CreateInvoiceButton: React.FC<ButtonProps> = (props) => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const classes = useCreateInvoiceButtonStyles();

  return (
    <Button
      color="primary"
      variant="contained"
      className={classes.root}
      {...props}
      startIcon={<div className={classes.icon} />}
    >
      {isMediumScreen ? "New Invoice" : "New"}
    </Button>
  );
};

export default CreateInvoiceButton;
