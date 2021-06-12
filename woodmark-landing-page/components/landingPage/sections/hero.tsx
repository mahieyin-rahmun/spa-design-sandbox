import { Typography, Button, Container } from "@material-ui/core";
import React from "react";
import { BsCameraVideo } from "react-icons/bs";

import { createStyles, makeStyles, Theme } from "@material-ui/core";
const useStyles = makeStyles(
  (theme: Theme) => {
    return createStyles({
      hero: {
        padding: "8em 2em",
        [theme.breakpoints.up("md")]: {
          padding: "18em 8em",
        },
        [theme.breakpoints.up("lg")]: {
          display: "flex",
          alignItems: "center",
        },
      },
      secondaryTitle: {
        textTransform: "uppercase",
        [theme.breakpoints.up("lg")]: {
          fontSize: "2em",
        },
      },
      primaryTitle: {
        fontWeight: "bold",
        marginBottom: "2em",
        [theme.breakpoints.up("lg")]: {
          fontSize: "3em",
        },
      },
      getStartedButton: {
        background: theme.palette.primary.main,
        color: "#fff",
        fontWeight: "bold",
        padding: "0.25em 1em",
        fontSize: "2em",
        borderRadius: "5em",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("lg")]: {
          fontSize: "1.7em",
          display: "block",
        },
      },
      watchDemoButton: {
        fontWeight: "bold",
        fontSize: "1.5em",
        borderRadius: "5em",
        padding: "0.25em 1em",
        [theme.breakpoints.up("lg")]: {
          fontSize: "1.5em",
        },
      },
      videoIcon: {
        fontSize: "1.2em",
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("lg")]: {
          fontSize: "1.7em",
        },
      },
      cta: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.up("lg")]: {
          marginTop: "-3em",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          alignItems: "center",
        },
      },
    });
  },
  { index: 1 },
);

function Hero() {
  const classes = useStyles();

  return (
    <Container className={classes.hero} id="home">
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
    </Container>
  );
}

export default Hero;
