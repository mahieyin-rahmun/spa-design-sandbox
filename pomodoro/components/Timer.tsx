import { Button, Typography } from "@material-ui/core";
import { Duration } from "luxon";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { TTimerProps } from "../types";

// the duration is in seconds
const Timer: React.FC<TTimerProps> = ({ duration }) => {
  const [secondsLeft, setSecondsLeft] = useState(() => duration);
  const [isStarted, setIsStarted] = useState(false);
  const intervalIdRef = useRef<NodeJS.Timeout>();
  const [isPaused, setIsPaused] = useState(true);

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
    <div>
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
              {/* <p>{isPaused ? "Paused" : "Not Paused"}</p> */}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Timer;
