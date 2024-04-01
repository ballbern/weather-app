import styled from "styled-components";

export const StyledLoader = styled.div`
  border: 6px solid var(--white);
  border-radius: 50%;
  border-top: 6px solid var(--purple);
  width: 2rem;
  height: 2rem;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 1s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
