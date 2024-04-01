import styled, { css } from "styled-components";

export const StyledCard = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  position: relative;
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 1rem;
  background-color: var(--card-background-color);
`;

export const StyledCardHeader = styled.div`
  margin-bottom: 1rem;

  & > h2 {
    margin: 0;
    text-transform: capitalize;
    font-weight: 500;
  }
`;

export const StyledCardBody = styled.div<{ alignCenter?: boolean }>`
  ${({ alignCenter }) =>
    alignCenter &&
    css`
      display: flex;
      flex-direction: column;
    `}

  align-items: ${({ alignCenter }) => (alignCenter ? "center" : "start")};
  justify-content: ${({ alignCenter }) => (alignCenter ? "center" : "start")};
  flex-grow: 1;
  overflow: auto;
  position: relative;
`;

export const StyledCardFooter = styled.div`
  flex-shrink: 0;
`;
