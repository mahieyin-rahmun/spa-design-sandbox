import { Typography, Button } from "@material-ui/core";
import React from "react";
import { BsCameraVideo } from "react-icons/bs";

import { createStyles, makeStyles, Theme } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    hero: {
      padding: "8em 2em",
    },
    secondaryTitle: {
      textTransform: "uppercase",
    },
    primaryTitle: {
      fontWeight: "bold",
      marginBottom: "2em",
    },
    getStartedButton: {
      background: theme.palette.primary.main,
      color: "#fff",
      fontWeight: "bold",
      padding: "0.25em 1em",
      fontSize: "2.5em",
      borderRadius: "5em",
      marginBottom: theme.spacing(4),
    },
    watchDemoButton: {
      fontWeight: "bold",
      fontSize: "2em",
      borderRadius: "5em",
      padding: "0.25em 1em",
    },
    videoIcon: {
      fontSize: "1.2em",
      marginRight: theme.spacing(2),
    },
    cta: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  });
});

function Hero() {
  const classes = useStyles();

  return (
    <section className={classes.hero}>
      <div>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          color="textSecondary"
          className={classes.secondaryTitle}
        >
          Lorem ipsum dolor sit amet.
        </Typography>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          color="textPrimary"
          className={classes.primaryTitle}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, modi.
        </Typography>
      </div>
      <div className={classes.cta}>
        <Button
          variant="contained"
          color="primary"
          className={classes.getStartedButton}
        >
          Get Started
        </Button>
        <Button variant="contained" className={classes.watchDemoButton}>
          <BsCameraVideo className={classes.videoIcon} />
          Watch a demo
        </Button>
      </div>
    </section>
  );
}

export default Hero;
