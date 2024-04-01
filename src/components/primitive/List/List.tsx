import { ReactNode } from "react";
import { StyledList, StyledListItem } from "./styles";

type ListProps = {
  children: ReactNode;
};

const Item = ({ children }: ListProps) => (
  <StyledListItem>{children}</StyledListItem>
);

export const List = ({ children }: ListProps) => {
  return <StyledList>{children}</StyledList>;
};

List.Item = Item;
