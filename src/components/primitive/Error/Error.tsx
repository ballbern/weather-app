// import { StyledError } from "./styles";
import styled from "styled-components";
import { MdErrorOutline } from "react-icons/md";

const StyleErrorContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & > div {
    margin: 0.5rem;
    font-size: 1.5rem;
    color: red;
  }
`;

export const Error = ({ message }: { message?: string }) => {
  return (
    <StyleErrorContainer>
      <MdErrorOutline size={"4rem"} color='red' />
      <div>{message}</div>
    </StyleErrorContainer>
  );
};
