import styled, { css } from "styled-components";
import { ButtonProps } from "../Button";

export const StyledButton = styled.button<ButtonProps>`
  display: block;
  background-color: var(--button-color);
  color: var(--button-text-color);
  border: none;
  border-radius: ${({ round }) => (round ? "50%" : "2rem")};
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem;
  padding: 1rem 1rem;
  text-transform: capitalize;
  cursor: pointer;

  ${({ round }) =>
    round &&
    css`
      height: 50px;
      width: 50px;
    `}

  &:disabled {
    background-color: var(--button-disabled-color);
    &:hover {
      background-color: var(--button-disabled-color);
    }
  }

  &:hover {
    background-color: var(--button-hover-color);
  }
`;
