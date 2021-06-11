import React from "react";
import { v4 as uuid4 } from "uuid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { FaHandPointRight } from "react-icons/fa";
import { TPricingCardProps } from "../../../types";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    position: "relative",
    display: "block",
    margin: "3em auto",
    boxShadow: `1em 1em 1em #c5c5c5`,
  },
  media: {
    height: 140,
  },
  tierAndPrice: {
    position: "absolute",
    top: "7.5%",
    marginLeft: "-1.1em",
    width: "100%",
  },
  tierAndPriceText: {
    color: "#eee",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  tierBenifits: {
    margin: "3.5em 0 0 0",
  },
  purchaseButton: {
    display: "block",
    margin: "0 auto 1em auto",
  },
});

const PricingCard: React.FC<TPricingCardProps> = ({
  tierName,
  tierPrice,
  tierBenefits,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 320">
          <path
            fill={theme.palette.primary.dark}
            fillOpacity="1"
            d="M0,160L24,149.3C48,139,96,117,144,122.7C192,128,240,160,288,149.3C336,139,384,85,432,96C480,107,528,181,576,181.3C624,181,672,107,720,106.7C768,107,816,181,864,186.7C912,192,960,128,1008,106.7C1056,85,1104,107,1152,133.3C1200,160,1248,192,1296,176C1344,160,1392,96,1416,64L1440,32L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
          ></path>
        </svg>
      </CardMedia>
      <CardContent>
        <div className={classes.tierAndPrice}>
          <Typography
            gutterBottom
            align="center"
            color="textPrimary"
            variant="h4"
            component="h2"
            className={classes.tierAndPriceText}
          >
            {tierName}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            className={classes.tierAndPriceText}
            color="textSecondary"
          >
            BDT. {tierPrice.toFixed(2)}/month
          </Typography>
        </div>
        <div className={classes.tierBenifits}>
          <List>
            {tierBenefits.map((benefit) => (
              <ListItem key={uuid4()}>
                <ListItemIcon>
                  <FaHandPointRight />
                </ListItemIcon>
                <ListItemText>{benefit}</ListItemText>
              </ListItem>
            ))}
          </List>
        </div>
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          variant="contained"
          className={classes.purchaseButton}
        >
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default PricingCard;
