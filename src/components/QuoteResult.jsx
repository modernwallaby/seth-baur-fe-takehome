import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "./form/Button";

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
      <h2>Your quote</h2>
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
