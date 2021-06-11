import {
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
  IconButton,
  Divider,
  Drawer,
} from "@material-ui/core";
import React, { Dispatch, SetStateAction } from "react";
import NextLink from "next/link";
import useLayoutStyles from "./layout.styles";
import { v4 as uuid4 } from "uuid";
import { FaHamburger } from "react-icons/fa";
import Logo from "./common/Logo";

const navMenu = [
  {
    label: "Home",
    link: "#",
  },
  {
    label: "Features",
    link: "#",
  },
  {
    label: "Pricing",
    link: "#",
  },
  {
    label: "Contact Us",
    link: "#",
  },
];

const NavLinksDrawer: React.FC<{
  isDrawerOpen: boolean;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const classes = useLayoutStyles();

  const toggleDrawer = (event: any) => {
    setIsDrawerOpen((isOpen) => !isOpen);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <div>
        {navMenu.map(({ label, link }, index) => (
          <NextLink href={link} passHref>
            <Typography className={classes.mobileHamBurgerMenuLinks}>
              {label}
            </Typography>
          </NextLink>
        ))}
      </div>
      <Divider />
      <NextLink href="#" passHref>
        <Typography className={classes.mobileHamBurgerMenuLinks}>
          Get Started
        </Typography>
      </NextLink>
    </div>
  );

  return (
    <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
      {list()}
    </Drawer>
  );
};

function Header() {
  const classes = useLayoutStyles();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Logo />
        <IconButton
          className={classes.hamburgerMenuIcon}
          onClick={() => setIsDrawerOpen((isOpen) => !isOpen)}
        >
          <FaHamburger />
        </IconButton>
      </div>
      <nav className={classes.nav}>
        {navMenu.map(({ label, link }) => (
          <NextLink href={link} passHref>
            <Typography className={classes.navLink}>{label}</Typography>
          </NextLink>
        ))}
      </nav>
      <NextLink href="#" passHref>
        <Typography className={classes.cta}>Get Started</Typography>
      </NextLink>
      <NavLinksDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
    </header>
  );
}

export default Header;
