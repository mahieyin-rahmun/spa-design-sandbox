import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import { TiTickOutline } from "react-icons/ti";
import { v4 as uuid4 } from "uuid";

import { createStyles, makeStyles, Theme } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      padding: "5em 2em",
      background: theme.palette.primary.dark,
    },
    sectionTitle: {
      color: "#fff",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "0.2em",
    },
    featuresList: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(15em, 1fr))",
    },
    features: {
      display: "block",
      marginLeft: 0,
      marginRight: 0,
      "& span, & svg": {
        fontSize: "1.5em",
        color: "#f2f2f2",
      },
    },
    icon: {
      color: "white",
      border: "1px solid white",
      borderRadius: "50%",
    },
  });
});

function Features() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Typography
        variant="h4"
        align="center"
        color="textPrimary"
        className={classes.sectionTitle}
        gutterBottom
      >
        What We Offer
      </Typography>
      <List className={classes.featuresList}>
        {[...Array(6).keys()].map((_) => (
          <ListItem key={uuid4()}>
            <ListItemIcon>
              <TiTickOutline className={classes.icon} size="2em" />
            </ListItemIcon>
            <ListItemText className={classes.features}>
              Lorem ipsum dolor sit amet.
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </section>
  );
}

export default Features;
