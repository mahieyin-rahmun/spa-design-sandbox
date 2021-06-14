import {
  createStyles,
  makeStyles,
  Theme,
  ThemeProvider,
} from "@material-ui/core";
import { IconButton, Typography, useTheme, Container } from "@material-ui/core";
import React from "react";
import Timer from "../components/timer/Timer";
import TimerTabs from "../components/timerTabs/TimerTabs";
import { TSettingsState, TTimerWithTabLabel } from "../types";
import { BsGearFill } from "react-icons/bs";
import SettingsModal from "../components/settingsModal/SettingsModal";
import { settingsModalTheme } from "../styles/globals";
import { useSettingsContext } from "../context/SettingsContext";

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

const getTimers = (settingsContext: TSettingsState | undefined) => {
  if (!Boolean(settingsContext)) {
    return timers;
  }

  const updatedTimers: TTimerWithTabLabel[] = [
    {
      tabLabel: "pomodoro",
      children: <Timer duration={settingsContext!.pomodoro * 60} />,
    },
    {
      tabLabel: "short break",
      children: <Timer duration={settingsContext!.short_break * 60} />,
    },
    {
      tabLabel: "long break",
      children: <Timer duration={settingsContext!.long_break * 60} />,
    },
  ];

  return updatedTimers;
};

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
  const { settingsContext } = useSettingsContext();
  const [isSettingsDialogOpen, setIsSettingsDialogOpen] = React.useState(false);

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
        pomodoro
      </Typography>
      <TimerTabs items={getTimers(settingsContext)} />
      <IconButton onClick={() => setIsSettingsDialogOpen(true)}>
        <BsGearFill style={{ color: theme.palette.text.primary }} />
      </IconButton>
      <ThemeProvider theme={settingsModalTheme}>
        <SettingsModal
          title="Settings"
          isOpen={isSettingsDialogOpen}
          setIsOpen={setIsSettingsDialogOpen}
        />
      </ThemeProvider>
    </Container>
  );
}

export default Pomodoro;
