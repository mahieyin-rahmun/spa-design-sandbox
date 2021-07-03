import {
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import packageInfo from "../../../package.json";

function Packages() {
  return (
    <Box mt={2}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Box pl={2}>
            <Typography color="textSecondary" variant="h6" gutterBottom>
              Frontend
            </Typography>
            <List>
              <ListItem>
                <ListItemText>
                  <Typography
                    color="textSecondary"
                    variant="subtitle1"
                    gutterBottom
                  >
                    Next.js {packageInfo["dependencies"]["next"]}
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography
                    color="textSecondary"
                    variant="subtitle1"
                    gutterBottom
                  >
                    React and ReactDOM {packageInfo["dependencies"]["react"]}
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography
                    color="textSecondary"
                    variant="subtitle1"
                    gutterBottom
                  >
                    Material UI{" "}
                    {packageInfo["dependencies"]["@material-ui/core"]}
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography
                    color="textSecondary"
                    variant="subtitle1"
                    gutterBottom
                  >
                    Formik {packageInfo["dependencies"]["formik"]} and Yup{" "}
                    {packageInfo["dependencies"]["yup"]}
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box pl={2}>
            <Typography color="textSecondary" variant="h6" gutterBottom>
              Backend (serverless)
            </Typography>
            <List>
              <ListItem>
                <ListItemText>
                  <Typography
                    color="textSecondary"
                    variant="subtitle1"
                    gutterBottom
                  >
                    Apollo Server Micro{" "}
                    {packageInfo["dependencies"]["apollo-server-micro"]}
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography
                    color="textSecondary"
                    variant="subtitle1"
                    gutterBottom
                  >
                    TypeGraphql {packageInfo["dependencies"]["type-graphql"]}
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography
                    color="textSecondary"
                    variant="subtitle1"
                    gutterBottom
                  >
                    TypeORM {packageInfo["dependencies"]["typeorm"]}
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography
                    color="textSecondary"
                    variant="subtitle1"
                    gutterBottom
                  >
                    PostgreSQL {packageInfo["dependencies"]["pg"]}
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Packages;
