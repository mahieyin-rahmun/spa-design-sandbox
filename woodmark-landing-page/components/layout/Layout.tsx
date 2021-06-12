import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
