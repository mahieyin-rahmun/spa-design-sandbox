import React from "react";
import { TPricingCardProps } from "../../../types";
import PricingCard from "../common/PricingCard";
import { v4 as uuid4 } from "uuid";
import { Typography } from "@material-ui/core";

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
      marginBottom: "2em",
    },
  });
});

function Pricing() {
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
        Pricing
      </Typography>
      {pricing.map(({ tierName, tierPrice, tierBenefits }) => (
        <PricingCard
          tierName={tierName}
          tierBenefits={tierBenefits}
          tierPrice={tierPrice}
          key={uuid4()}
        />
      ))}
    </section>
  );
}

export default Pricing;
