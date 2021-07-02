import React from "react";
import Header from "./Header";
import useLayoutStyles from "./Layout.styles";

const Layout: React.FC<{}> = ({ children }) => {
  const classes = useLayoutStyles();
  return (
    <div className={classes.container}>
      <div className={classes.appbar}>
        <Header />
      </div>
      {children}
    </div>
  );
};

export default Layout;
