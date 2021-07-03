import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import useLayoutStyles from "./Layout.styles";

const Layout: React.FC<{}> = ({ children }) => {
  const classes = useLayoutStyles();
  return (
    <div className={classes.container}>
      <div className={classes.appbar}>
        <Header />
      </div>
      <div className={classes.content}>{children}</div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
