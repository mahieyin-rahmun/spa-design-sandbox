import React from "react";
import { TPricingCardProps } from "../../../types";
import PricingCard from "../common/PricingCard";
import { v4 as uuid4 } from "uuid";
import { Grid, Typography } from "@material-ui/core";

const pricing: TPricingCardProps[] = [
  {
    tierName: "Regular",
    tierPrice: 200,
    tierBenefits: [
      "Lorem, ipsum dolor.",
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      "Lorem consectetur dolor adipisicing amet.",
    ],
  },
  {
    tierName: "Professional",
    tierPrice: 600,
    tierBenefits: [
      "Lorem, ipsum dolor.",
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      "Lorem consectetur dolor adipisicing amet.",
    ],
  },
  {
    tierName: "Expert",
    tierPrice: 1200,
    tierBenefits: [
      "Lorem, ipsum dolor.",
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit",
      "Lorem ipsum dolor, sit amet consectetur adipisicing.",
      "Lorem consectetur dolor adipisicing amet.",
    ],
  },
];

import { createStyles, makeStyles, Theme } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      borderTop: `2px solid ${theme.palette.primary.main}`,
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      padding: "5em 2em",
    },
    sectionTitle: {
      textTransform: "uppercase",
      letterSpacing: "0.2em",
      marginBottom: "1em",
    },
  });
});

function Pricing() {
  const classes = useStyles();

  return (
    <section className={classes.root} id="pricing">
      <Typography
        variant="h4"
        align="center"
        color="textPrimary"
        className={classes.sectionTitle}
        gutterBottom
      >
        Pricing
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
      <Grid container spacing={1} alignItems="center" justify="center">
        {pricing.map(({ tierName, tierPrice, tierBenefits }) => (
          <Grid item xs={12} sm={6} md={4} key={uuid4()}>
            <PricingCard
              tierName={tierName}
              tierBenefits={tierBenefits}
              tierPrice={tierPrice}
            />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

export default Pricing;
