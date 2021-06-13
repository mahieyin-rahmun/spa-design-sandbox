import { Button, CircularProgress, Typography } from "@material-ui/core";
import { Duration } from "luxon";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { TTimerProps } from "../types";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { pomodoroClockRightSideShadowColor } from "../styles/globals";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      background: theme.palette.primary.main,
      height: "300px",
      width: "300px",
      borderRadius: "50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
    progress: {
      position: "absolute",
    },
    outerCircle: {
      display: "flex",
      background: "linear-gradient(-45deg, #291f4f, #141032)",
      width: "330px",
      height: "330px",
      borderRadius: "50%",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: `
        -2em -2em 3em 0.5em #2a1f54,
        2em 2em 3em 0.5em #161035
      `,
      [theme.breakpoints.up("sm")]: {
        transform: "scale(1.1)",
      },
      [theme.breakpoints.up("md")]: {
        transform: "scale(1.3)",
      },
    },
    timerText: {
      marginTop: "0.5em",
      fontWeight: "bold",
    },
    button: {
      fontSize: "1.25em",
      letterSpacing: "0.5em",
      textTransform: "uppercase",
      padding: "0 1em",
      margin: "0.5em auto",
      border: `1px solid ${theme.palette.text.secondary}`,
      borderRadius: "5em",
    },
  });
});

// the duration is in seconds
const Timer: React.FC<TTimerProps> = ({ duration }) => {
  const [secondsLeft, setSecondsLeft] = useState(() => duration);
  const [isStarted, setIsStarted] = useState(false);
  const intervalIdRef = useRef<NodeJS.Timeout>();
  const [isPaused, setIsPaused] = useState(true);
  const classes = useStyles();

  const handleClearInterval = useCallback(() => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = undefined;
    }
  }, []);

  const toggleIsPaused = useCallback(
    () => setIsPaused((isPaused) => !isPaused),
    [],
  );

  const handleStart = useCallback(() => {
    setIsStarted(true);
    toggleIsPaused();
  }, []);

  const handleReset = useCallback(() => {
    setSecondsLeft(duration);
    setIsStarted(false);
    setIsPaused(true);
    handleClearInterval();
  }, []);

  useEffect(() => {
    const updateTimer = () => {
      setSecondsLeft((previousValue) => previousValue - 1);
    };

    if (!Boolean(intervalIdRef.current) && secondsLeft > 0) {
      const intervalId = setInterval(updateTimer, 1000);
      intervalIdRef.current = intervalId;
    }

    if (secondsLeft === 0 || isPaused) {
      handleClearInterval();
    }
  }, [secondsLeft, isPaused]);

  return (
    <div className={classes.outerCircle}>
      <div className={classes.root}>
        <CircularProgress
          variant="determinate"
          value={((duration - secondsLeft) * 100) / duration}
          color="secondary"
          className={classes.progress}
          size={270}
        />
        <Typography
          variant="h2"
          gutterBottom
          color="textPrimary"
          className={classes.timerText}
        >
          {Duration.fromMillis(secondsLeft * 1000).toFormat("mm:ss")}
        </Typography>
        {secondsLeft > 0 && (
          <>
            {!isStarted ? (
              <Button onClick={() => handleStart()} className={classes.button}>
                Start
              </Button>
            ) : (
              <Button
                onClick={() => toggleIsPaused()}
                className={classes.button}
              >
                {!isPaused ? "Pause" : "Resume"}
              </Button>
            )}
          </>
        )}
        <Button onClick={() => handleReset()} className={classes.button}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Timer;
