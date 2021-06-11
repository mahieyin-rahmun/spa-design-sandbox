import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
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
    featuresList: {
      "& span, & svg": {
        fontSize: "1.5em",
        color: "#f2f2f2",
      },
    },
    icon: {
      border: "1px dashed white",
      borderRadius: "50%",
    },
  });
});

function Features() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <List className={classes.featuresList}>
        {[...Array(6).keys()].map((_) => (
          <ListItem key={uuid4()}>
            <ListItemIcon>
              <TiTickOutline className={classes.icon} size="1.5em" />
            </ListItemIcon>
            <ListItemText className={classes.featuresList}>
              Lorem ipsum dolor sit amet.
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </section>
  );
}

export default Features;
