import { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid lightgray;
  border-radius: 20px;
`;

type InputType = InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputType> = ({ onChange, type, ...props }) => {
  return <StyledInput type={type} onChange={onChange} {...props}></StyledInput>;
};
