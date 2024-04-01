import { StyledCurrentTime } from "./styles";
import { formattedCurrentDateTime } from "../../../utils/helper";

export const CurrentTime = () => {
  return (
    <StyledCurrentTime data-testid='current-time'>
      {formattedCurrentDateTime()}
    </StyledCurrentTime>
  );
};
