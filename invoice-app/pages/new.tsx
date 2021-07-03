import { useTheme } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import InvoiceForm from "../components/common/forms/invoice/InvoiceForm";

function NewInvoice() {
  const theme = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(theme.palette.type === "dark");
  }, [theme.palette.type]);

  return (
    <div
      style={{
        backgroundColor: isDarkTheme
          ? "#0e0e0e"
          : theme.palette.background.default,
      }}
    >
      <InvoiceForm />
    </div>
  );
}

export default NewInvoice;
