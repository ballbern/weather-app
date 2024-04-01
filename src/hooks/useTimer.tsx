import { useState, useEffect } from "react";

export const useTimer = () => {
  const [startTime, setStartTime] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(startTime);
  const [isRunning, setIsRunning] = useState(false);
  const [timerValue, setTimerValue] = useState<number>();

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isRunning) {
      interval = setInterval(() => {
        setTimeRemaining(prevTime => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            setIsRunning(false);
            return prevTime;
          }
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]);

  const startTimer = () => {
    if (timeRemaining === 0) {
      setTimeRemaining(startTime);
    }
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeRemaining(0);
    setStartTime(0);
  };

  const getTimerValue = (value: number) => {
    setTimerValue(value);
  };

  return {
    timeRemaining,
    isRunning,
    startTime,
    hours: Math.floor(timeRemaining / 3600)
      .toString()
      .padStart(2, "0"),
    minutes: Math.floor((timeRemaining % 3600) / 60)
      .toString()
      .padStart(2, "0"),
    seconds: (timeRemaining % 60).toString().padStart(2, "0"),
    timerValue,
    startTimer,
    stopTimer,
    resetTimer,
    setStartTime,
    getTimerValue,
  };
};
