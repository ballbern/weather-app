import styled from "styled-components";

export const StyledListItemContent = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  & > span {
    flex: 1;
  }

  & > span:nth-child(2) {
    text-align: center;
  }

  & > span:nth-child(3) {
    text-align: right;
  }
`;
