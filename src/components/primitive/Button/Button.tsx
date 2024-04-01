import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";
import { FC } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  round?: boolean;
};

export const Button: FC<ButtonProps> = ({ children, round, ...props }) => {
  return (
    <StyledButton round={round} type='button' {...props}>
      {children}
    </StyledButton>
  );
};
