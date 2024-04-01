import { ReactNode } from "react";
import {
  StyledLayout,
  StyledMain,
  StyledFooter,
  StyledHeader,
  StyledSearch,
} from "./styles";

type LayoutProps = {
  children?: ReactNode;
};

const Header = ({ children }: LayoutProps) => (
  <StyledHeader>{children}</StyledHeader>
);

const Footer = ({ children }: LayoutProps) => (
  <StyledFooter>{children}</StyledFooter>
);

const Search = ({ children }: LayoutProps) => (
  <StyledSearch>{children}</StyledSearch>
);

const Main = ({ children }: LayoutProps) => <StyledMain>{children}</StyledMain>;

export const Layout = ({ children }: LayoutProps) => (
  <StyledLayout>{children}</StyledLayout>
);

Layout.Header = Header;
Layout.Main = Main;
Layout.Footer = Footer;
Layout.Search = Search;
