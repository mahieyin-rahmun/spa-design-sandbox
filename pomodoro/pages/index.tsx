import { IconButton, Typography, useTheme } from "@material-ui/core";
import React from "react";
import Timer from "../components/Timer";
import TimerTabs from "../components/TimerTabs";
import { TTimerWithTabLabel } from "../types";
import { BsGearFill } from "react-icons/all";

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

function Pomodoro() {
  const theme = useTheme();

  return (
    <div>
      <Typography variant="h3">pomodoro</Typography>
      <TimerTabs items={timers} />
      {/* <IconButton> */}
      {/* <BsGearFill style={{ color: theme.palette.text.primary }} />
      </IconButton> */}
    </div>
  );
}

export default Pomodoro;
