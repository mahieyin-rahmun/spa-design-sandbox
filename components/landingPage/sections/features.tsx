import {
  Grid,
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
    secondaryText: {
      color: "#fff",
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
      <Typography
        variant="h6"
        align="center"
        gutterBottom
        paragraph
        color="textSecondary"
        className={classes.secondaryText}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt et,
        excepturi quidem exercitationem aspernatur voluptatibus dolorum
        perferendis ullam suscipit quos explicabo illo ratione quae hic
        recusandae sequi minima sapiente, nostrum eligendi, consequatur ipsum
        ad? Tempora, quo! Possimus laboriosam provident non temporibus. Labore
        vitae reiciendis, dignissimos numquam quis voluptatem unde hic.
      </Typography>
      <List>
        <Grid container spacing={4} alignItems="center" justify="center">
          {[...Array(6).keys()].map((_) => (
            <Grid item key={uuid4()}>
              <ListItem>
                <ListItemIcon>
                  <TiTickOutline className={classes.icon} size="2em" />
                </ListItemIcon>
                <ListItemText className={classes.features}>
                  Lorem ipsum dolor sit amet.
                </ListItemText>
              </ListItem>
            </Grid>
          ))}
        </Grid>
      </List>
    </section>
  );
}

export default Features;
