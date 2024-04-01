import { Card, Button } from "../../";
import styled from "styled-components";
import { useTimer } from "../../../hooks/useTimer";

const StyledTimeButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 3rem);
  gap: 1rem;
`;

export const SetTimer = () => {
  const { getTimerValue } = useTimer();

  return (
    <Card>
      <Card.Body alignCenter>
        <StyledTimeButtons>
          {Array(9)
            .fill(null)
            .map((_, index) => (
              <Button
                onClick={() => getTimerValue(index + 1)}
                key={index}
                round
              >
                {index + 1}
              </Button>
            ))}
          <Button round>00</Button>
          <Button onClick={() => getTimerValue(0)} round>
            0
          </Button>
          <Button round>del</Button>
        </StyledTimeButtons>
        <div style={{ display: "flex", marginTop: "1rem", gap: "1rem" }}>
          <Button onClick={() => getTimerValue(300)}>3 minutes</Button>
          <Button onClick={() => getTimerValue(500)}>5 minutes</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
