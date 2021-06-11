import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => {
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
  });
});

function ContactUs() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Typography
        align="center"
        variant="h4"
        gutterBottom
        color="textPrimary"
        className={classes.sectionTitle}
      >
        Get In Touch
      </Typography>
      <Container maxWidth="sm">
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
    </section>
  );
}

export default ContactUs;
