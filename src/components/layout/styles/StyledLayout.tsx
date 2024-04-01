import styled from "styled-components";

export const StyledLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 0.3fr 1fr 1fr 0.3fr;
  grid-template-rows: 0.2fr 1.5fr 0.2fr;
  grid-template-areas:
    "header header header header"
    ". search search ."
    ". main main ."
    "footer footer footer footer";
  grid-gap: 0.2rem;
`;

export const StyledMain = styled.main`
  position: relative;
  grid-area: main;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 20rem;
  gap: 1rem;
  box-sizing: border-box;
  padding: 1rem;

  @media only screen and (max-width: 1300px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledHeader = styled.header`
  display: grid;
  grid-area: header;
  background: linear-gradient(
    -90.88deg,
    var(--purple) 44.34%,
    var(--blue) 98.12%
  );
  align-items: center;
  min-height: 7rem;
  padding: 0 3rem;
  margin-bottom: 1rem;
`;

export const StyledFooter = styled.footer`
  grid-area: footer;
  background: linear-gradient(
    -90.88deg,
    var(--blue) 44.34%,
    var(--purple) 98.12%
  );
  height: 4rem;
  margin-top: 4rem;
`;

export const StyledSearch = styled.div`
  grid-area: search;
`;
