import { Avatar, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { AvatarGenerator } from "random-avatar-generator";

// Simply get a random avatar
const generator = new AvatarGenerator();

const testimonialBackground = "#e0e0e0";
const testimonialBoxShadowColor = "#d5d5d5";

import { createStyles, makeStyles, Theme } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    avatar: {
      display: "block",
      width: "5em",
      height: "5em",
      margin: "0 auto",
      position: "absolute",
      left: "50%",
      top: "-2em",
      marginLeft: "-2.5em",
      background: testimonialBackground,
    },
    testimonial: {
      padding: "1em 4em",
      background: testimonialBackground,
      borderRadius: "2em",
      paddingTop: "5em",
      boxShadow: `1em 0.5em 1em ${testimonialBoxShadowColor}`,
    },
    testimonialText: {
      fontSize: "1.3em",
      "&:before": {
        content: "'\"'",
        fontFamily: "Times New Roman",
        fontSize: "2em",
        marginRight: "0.25em",
      },
      "&:after": {
        content: "'\"'",
        fontFamily: "Times New Roman",
        fontSize: "2em",
        marginLeft: "0.25em",
      },
    },
    testimonialAuthor: {
      textTransform: "uppercase",
      fontStyle: "italic",
      "&:before": {
        content: "'-'",
        marginRight: "1em",
      },
    },
    root: {
      position: "relative",
      margin: "6em 0",
      "&:last-child": {
        marginBottom: 0,
      },
    },
  });
});

function TestimonialCard() {
  const classes = useStyles();
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    const url = generator.generateRandomAvatar();
    setAvatarUrl(url);
  }, []);

  return (
    <div className={classes.root}>
      <Avatar src={avatarUrl} className={classes.avatar}></Avatar>
      <div className={classes.testimonial}>
        <Typography
          className={classes.testimonialText}
          paragraph
          gutterBottom
          color="textPrimary"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse autem in
          nulla voluptatum dolorum velit, impedit reprehenderit similique odio
          dolores?
        </Typography>
        <Typography
          gutterBottom
          color="textPrimary"
          className={classes.testimonialAuthor}
        >
          Lorem, ipsum.
        </Typography>
      </div>
    </div>
  );
}

export default TestimonialCard;
