import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles(
  (theme: Theme) => {
    return createStyles({
      root: {
        padding: "10em 2em",
        background: theme.palette.primary.dark,
      },
      sectionTitle: {
        color: "#fff",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "0.2em",
        marginTop: "-2em",
        marginBottom: "2em",
      },
      form: {
        padding: "2em",
      },
      input: {
        display: "block",
        margin: "1em auto",
      },
      iframe: {
        marginTop: theme.spacing(4),
        display: "block",
        border: "0",
        width: "100%",
        height: "500px",
        [theme.breakpoints.up("md")]: {
          width: "100%",
        },
      },
      secondaryText: {
        color: "#fff",
      },
    });
  },
  { index: 1 },
);

function ContactUs() {
  const classes = useStyles();

  return (
    <section className={classes.root} id="contact">
      <Typography
        align="center"
        variant="h4"
        gutterBottom
        color="textPrimary"
        className={classes.sectionTitle}
      >
        Get In Touch
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
      <Grid container spacing={6} alignItems="center" justify="center">
        <Grid item xs={12} md={6}>
          <Container maxWidth="md">
            <Paper elevation={15} className={classes.form}>
              <form>
                <TextField
                  name="email"
                  type="email"
                  variant="outlined"
                  label="Your Email"
                  fullWidth
                  className={classes.input}
                />
                <TextField
                  name="email"
                  type="email"
                  variant="outlined"
                  label="Your Message"
                  multiline={true}
                  rows={5}
                  rowsMax={5}
                  fullWidth
                  className={classes.input}
                />
                <Button
                  type="submit"
                  className={classes.input}
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </form>
            </Paper>
          </Container>
        </Grid>
        <Grid item xs={12} md={6}>
          <iframe
            className={classes.iframe}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJF9BC6RdBe0gRycIykheyLbU&key=AIzaSyD71zA3o9KNVWo7Q0mE5ZHA-2PXwy78fpo"
          ></iframe>
        </Grid>
      </Grid>
    </section>
  );
}

export default ContactUs;
