import PropTypes from "prop-types";
import styled from "styled-components";

const InnerContainer = styled.div`
  padding: 1rem 0;
  margin: 0 auto;
  width: 90%;
  max-width: 93.75rem;
`;

const OuterContainer = styled.div`
  background-color: ${({ bgColor }) => bgColor || "transparent"};
`;

const Container = ({ bgColor, children }) => (
  <OuterContainer bgColor={bgColor}>
    <InnerContainer>{children}</InnerContainer>
  </OuterContainer>
);

Container.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
