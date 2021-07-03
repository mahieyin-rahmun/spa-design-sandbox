import React, { Dispatch, SetStateAction } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import InvoiceForm from "./InvoiceForm";

export type TSwipeableFormDrawer = {
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  anchor?: "left";
};

export default function SwipeableFormDrawer({
  open,
  setIsOpen,
  anchor = "left",
}: TSwipeableFormDrawer) {
  const toggleDrawer = () => (event: any) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <React.Fragment key={"left"}>
      <SwipeableDrawer
        anchor={anchor}
        open={open}
        onClose={toggleDrawer()}
        onOpen={toggleDrawer()}
        style={{
          width: "100%",
        }}
      >
        <InvoiceForm setIsFormDrawerOpen={setIsOpen} />
      </SwipeableDrawer>
    </React.Fragment>
  );
}
