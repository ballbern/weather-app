import styled, { css } from "styled-components";
import { useState, ButtonHTMLAttributes } from "react";

type StyledDivProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  dropdownOpen: boolean;
  isLastTen?: boolean;
};

type TimeDropdown = {
  unit: string;
  value: string;
  isLastTen: boolean;
  onClick?: (value: number, unit: string) => void;
};

const StyledDropdownContent = styled.div<StyledDivProps>`
  display: ${({ dropdownOpen }) => (dropdownOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 300px;
  overflow: auto;
`;

const StyledDropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledDropdownButton = styled.button<StyledDivProps>`
  border: none;
  background-color: transparent;
  font-size: 4rem;
  font-weight: 300;
  ${({ isLastTen }) =>
    isLastTen &&
    css`
      color: red;
    `};
`;

const StyledDropdownLink = styled.a`
  all: initial;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 300;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;

export const TimeDropdown = ({
  unit,
  value,
  isLastTen,
  onClick,
}: TimeDropdown) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const numberOfLinks = unit === "h" ? 12 : 60;

  const getSelection = (value: string) => {
    setDropdownOpen(!dropdownOpen);
    onClick?.(parseInt(value), unit);
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <StyledDropdownContainer>
      <StyledDropdownButton
        dropdownOpen={dropdownOpen}
        onClick={toggleDropdown}
        isLastTen={isLastTen}
      >
        {value}
        {unit}
      </StyledDropdownButton>
      <StyledDropdownContent dropdownOpen={dropdownOpen}>
        {Array(numberOfLinks)
          .fill(null)
          .map((_, index) => (
            <StyledDropdownLink
              onClick={() => getSelection((index + 1).toString())}
              href='#'
              key={index}
            >
              <span>{index + 1}</span>
            </StyledDropdownLink>
          ))}
      </StyledDropdownContent>
    </StyledDropdownContainer>
  );
};
