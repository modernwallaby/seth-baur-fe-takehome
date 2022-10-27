import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "./form/Button";

const H2 = styled.h2`
  font-size: 1.75rem;
  color: rgb(12, 9, 55);
`;

const ResetButton = styled(Button)`
  margin-top: 2rem;
`;

const policyTypeNames = {
  GL: "General Liability",
  PL: "Professional Liability",
  BOP: "Business Owners Policy",
};

const QuoteResult = ({ policyTypes, onReset }) => {
  return (
    <>
      <H2>Your quote</H2>
      <p>You are eligible for the following types of policies:</p>
      <ul>
        {policyTypes.map((policy) => (
          <li key={policy}>{policyTypeNames[policy]}</li>
        ))}
      </ul>
      <ResetButton onClick={onReset}>Start over</ResetButton>
    </>
  );
};

QuoteResult.propTypes = {
  policyTypes: PropTypes.array.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default QuoteResult;
