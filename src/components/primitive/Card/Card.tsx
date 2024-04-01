import { ReactNode } from "react";
import {
  StyledCard,
  StyledCardHeader,
  StyledCardBody,
  StyledCardFooter,
} from "./styles";
import { Loader, Error } from "../../";

type CardProps = {
  children: ReactNode;
};

const Header = ({ children }: CardProps) => (
  <StyledCardHeader>{children}</StyledCardHeader>
);
const Footer = ({ children }: CardProps) => (
  <StyledCardFooter>{children}</StyledCardFooter>
);
const Body = ({
  children,
  alignCenter,
  ...props
}: {
  children: ReactNode;
  alignCenter?: boolean;
}) => (
  <StyledCardBody alignCenter={alignCenter} {...props}>
    {children}
  </StyledCardBody>
);

export const Card = ({
  children,
  isLoading,
  isError,
  errorMessage,
}: {
  children: ReactNode;
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
}) => {
  return (
    <StyledCard>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Error message={errorMessage} />
      ) : (
        children
      )}
    </StyledCard>
  );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
