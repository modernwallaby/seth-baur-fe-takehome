import styled from "styled-components";
import Container from "./Container";

const H1 = styled.h1`
  font-size: 2rem;
  color: rgb(12, 9, 55);
`;

const Header = () => {
  return (
    <Container>
      <H1>Get a quote</H1>
    </Container>
  );
};

export default Header;
