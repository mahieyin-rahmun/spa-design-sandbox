import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { IconButton, Typography, useTheme, Container } from "@material-ui/core";
import React from "react";
import Timer from "../components/Timer";
import TimerTabs from "../components/TimerTabs";
import { TTimerWithTabLabel } from "../types";
import { BsGearFill } from "react-icons/bs";

const timers: TTimerWithTabLabel[] = [
  {
    tabLabel: "pomodoro",
    children: <Timer duration={25 * 60} />,
  },
  {
    tabLabel: "short break",
    children: <Timer duration={5 * 60} />,
  },
  {
    tabLabel: "long break",
    children: <Timer duration={15 * 60} />,
  },
];

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: "flex",
      height: "100vh",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
      padding: "5em 0",
    },
  });
});

function Pomodoro() {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
        pomodoro
      </Typography>
      <TimerTabs items={timers} />
      <IconButton>
        <BsGearFill style={{ color: theme.palette.text.primary }} />
      </IconButton>
    </Container>
  );
}

export default Pomodoro;
