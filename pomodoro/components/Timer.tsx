import { Button, Typography } from "@material-ui/core";
import { Duration } from "luxon";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { TTimerProps } from "../types";

import { createStyles, makeStyles, Theme } from "@material-ui/core";
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
    <div className={classes.root}>
      <Typography variant="h2">
        {Duration.fromMillis(secondsLeft * 1000).toFormat("mm:ss")}
      </Typography>
      {secondsLeft > 0 && (
        <>
          {!isStarted ? (
            <Button onClick={() => handleStart()}>Start</Button>
          ) : (
            <>
              <Button onClick={() => toggleIsPaused()}>
                {!isPaused ? "Pause" : "Resume"}
              </Button>
              <Button onClick={() => handleReset()}>Reset</Button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Timer;
