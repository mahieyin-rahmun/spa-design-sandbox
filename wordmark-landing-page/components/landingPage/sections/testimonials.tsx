import { Grid, Typography } from "@material-ui/core";
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
      <Typography
        variant="h6"
        align="center"
        gutterBottom
        paragraph
        color="textSecondary"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt et,
        excepturi quidem exercitationem aspernatur voluptatibus dolorum
        perferendis ullam suscipit quos explicabo illo ratione quae hic
        recusandae sequi minima sapiente, nostrum eligendi, consequatur ipsum
        ad? Tempora, quo! Possimus laboriosam provident non temporibus. Labore
        vitae reiciendis, dignissimos numquam quis voluptatem unde hic.
      </Typography>
      <Grid container spacing={6} justify="center">
        {[...Array(4).keys()].map((_) => (
          <Grid
            container
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            justify="center"
            key={uuid4()}
          >
            <TestimonialCard />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

export default Testimonials;
