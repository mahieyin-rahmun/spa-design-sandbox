import {
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
  IconButton,
} from "@material-ui/core";
import React from "react";
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

function Header() {
  const classes = useLayoutStyles();

  // TODO: use Drawer for the mobile menu
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Logo />
        <IconButton>
          <FaHamburger />
        </IconButton>
      </div>
      <nav className={classes.nav}>
        <List>
          {navMenu.map(({ label, link }) => (
            <ListItem key={uuid4()}>
              <NextLink href={link} passHref>
                <ListItemText>{label}</ListItemText>
              </NextLink>
            </ListItem>
          ))}
        </List>
        <Button variant="contained">Get Started</Button>
      </nav>
    </header>
  );
}

export default Header;
