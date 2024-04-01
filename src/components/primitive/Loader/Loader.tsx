import { StyledLoader } from "./styles";
import styled from "styled-components";

const StyleLoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Loader = () => {
  return (
    <StyleLoaderContainer>
      <StyledLoader />
    </StyleLoaderContainer>
  );
};
