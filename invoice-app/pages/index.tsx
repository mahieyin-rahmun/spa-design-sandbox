import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  Grid,
  Divider,
} from "@material-ui/core";
import React from "react";
import Packages from "../components/common/packages/Packages";

function Home() {
  return (
    <Container maxWidth="lg">
      <Box py={4} my={4}>
        <Typography
          variant="h2"
          color="textPrimary"
          align="center"
          gutterBottom
        >
          Welcome to the Invoice App
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box my={8} py={4}>
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h4"
                align="center"
              >
                This is a fullstack portfolio web application and is intended to
                serve demo purposes only.
              </Typography>
              <Box mt={8}>
                <Typography
                  color="textSecondary"
                  variant="h6"
                  align="center"
                  gutterBottom
                >
                  Tech stack
                </Typography>
                <Divider />
                <Packages />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>
              <Box py={4}>
                <Typography color="textPrimary" align="center" variant="h4">
                  Login to continue
                </Typography>
                <Box my={4} p={4}>
                  <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    justify="center"
                  >
                    <Grid container item xs={12} justify="center">
                      <Button
                        color="secondary"
                        variant="contained"
                        size="large"
                      >
                        Login with Google
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                    <Grid container item xs={12} justify="center">
                      <Button color="primary" variant="contained" size="large">
                        Login with Facebook
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Home;
