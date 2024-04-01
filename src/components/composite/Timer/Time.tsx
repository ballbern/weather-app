import { Card, Button, TimeDropdown } from "../..";
import styled from "styled-components";
import { useTimer } from "./timerContext/useTimer";
import { useRef } from "react";

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

const StyledNumberLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

export const Time = () => {
  const {
    startTimer,
    stopTimer,
    resetTimer,
    setTimeRemaining,
    isRunning,
    hours,
    minutes,
    seconds,
    timeRemaining,
    isLastTen,
  } = useTimer();

  const timeValuesRef = useRef({ h: 0, m: 0, s: 0 });

  const setTimeValue = (totalTimeValue: number) =>
    setTimeRemaining(totalTimeValue);

  const getTimeValue = (value: number, unit: string) => {
    const updatedTimeValues = { ...timeValuesRef.current };

    switch (unit) {
      case "h":
        updatedTimeValues.h = value * 3600;
        break;
      case "m":
        updatedTimeValues.m = value * 60;
        break;
      case "s":
        updatedTimeValues.s = value;
        break;
      default:
        break;
    }

    timeValuesRef.current = updatedTimeValues;

    const totalTimeValue = Object.values(updatedTimeValues).reduce(
      (tot, val) => tot + val
    );
    setTimeValue(totalTimeValue);
  };

  const reset = () => {
    resetTimer();
    timeValuesRef.current = { h: 0, m: 0, s: 0 };
  };

  return (
    <Card>
      <Card.Body alignCenter>
        <StyledButtonContainer>
          <Button onClick={!isRunning ? startTimer : stopTimer}>
            {isRunning ? "Stop" : "Start"}
          </Button>
          <Button onClick={reset}>Reset</Button>
        </StyledButtonContainer>

        <StyledNumberLayout>
          <TimeDropdown
            onClick={getTimeValue}
            unit={"h"}
            value={hours}
            isLastTen={isLastTen}
          />
          <TimeDropdown
            onClick={getTimeValue}
            unit={"m"}
            value={minutes}
            isLastTen={isLastTen}
          />
          <TimeDropdown
            onClick={getTimeValue}
            unit={"s"}
            value={seconds}
            isLastTen={isLastTen}
          />
        </StyledNumberLayout>

        <StyledButtonContainer>
          <Button onClick={() => setTimeValue(180)}>3 minutes</Button>
          <Button onClick={() => setTimeValue(300)}>5 minutes</Button>
          <Button onClick={() => setTimeValue(600)}>10 minutes</Button>
        </StyledButtonContainer>
        <span>{timeRemaining}</span>
      </Card.Body>
    </Card>
  );
};
