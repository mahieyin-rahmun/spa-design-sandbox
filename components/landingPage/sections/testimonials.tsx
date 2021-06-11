import { Typography } from "@material-ui/core";
import React from "react";
import TestimonialCard from "../common/TestimonialCard";
import { v4 as uuid4 } from "uuid";

import { createStyles, makeStyles, Theme } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      padding: "10em 2em",
    },
    sectionTitle: {
      marginTop: theme.spacing(-8),
      textTransform: "uppercase",
      letterSpacing: "0.2em",
      marginBottom: theme.spacing(4),
    },
  });
});

function Testimonials() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Typography
        variant="h4"
        color="textPrimary"
        align="center"
        gutterBottom
        className={classes.sectionTitle}
      >
        Our Satisfied Customers
      </Typography>
      <div>
        {[...Array(4).keys()].map((_) => (
          <TestimonialCard key={uuid4()} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
