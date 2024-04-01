import { Time } from "./Time";
// import { SetTimer } from "./SetTimer";
import { TimerProvider } from "./timerContext/useTimer";

export const Timer = () => {
  return (
    <TimerProvider>
      <Time />
      {/* <SetTimer /> */}
    </TimerProvider>
  );
};
