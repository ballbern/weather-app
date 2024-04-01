import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
  useMemo,
} from "react";
import beepSound from "../../../../assets/beep-sound.mp3";
import beepSound2 from "../../../../assets/beep-sound-2.wav";

export type TimerProviderProps = {
  children: ReactNode;
};

export type TimerProps = {
  timeRemaining: number;
  isRunning: boolean;
  startTime: number;
  hours: string;
  minutes: string;
  seconds: string;
  isLastTen: boolean;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
  setStartTime: Dispatch<SetStateAction<number>>;
  setTimeRemaining: Dispatch<SetStateAction<number>>;
};

const TimerContext = createContext({} as TimerProps);

// eslint-disable-next-line react-refresh/only-export-components
export const useTimer = () => {
  return useContext(TimerContext);
};

export const TimerProvider = ({ children }: TimerProviderProps) => {
  const [startTime, setStartTime] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(startTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isLastTen, setIsLastTen] = useState(false);

  const audio = useMemo(() => new Audio(beepSound), []);
  const audio2 = useMemo(() => new Audio(beepSound2), []);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isRunning) {
      interval = setInterval(() => {
        setTimeRemaining(prevTime => {
          if (prevTime > 0) {
            if (prevTime <= 10 && prevTime > 1) {
              setIsLastTen(true);
              audio.play();
            }
            if (prevTime === 1) {
              audio2.play();
            }
            return prevTime - 1;
          } else {
            setIsRunning(false);
            setIsLastTen(false);
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
  }, [audio, audio2, isRunning]);

  const startTimer = () => {
    if (timeRemaining === 0) {
      setTimeRemaining(startTime);
    }
    setIsRunning(true);
  };

  const stopTimer = () => setIsRunning(false);

  const resetTimer = () => {
    setIsRunning(false);
    setTimeRemaining(0);
    setStartTime(0);
    setIsLastTen(false);
  };

  return (
    <TimerContext.Provider
      value={{
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
        isLastTen,
        setTimeRemaining,
        startTimer,
        stopTimer,
        resetTimer,
        setStartTime,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
