import styled from "styled-components";

export const StyledSunRiseSetBody = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledSunRiseSet = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  & > div {
    position: absolute;
    top: 1rem;
  }
`;
