import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "./Button";

const Step = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  border: 1px solid #bbb;
  border-radius: 0.5rem;
  padding: 1rem;

  @media (min-width: 700px) {
    width: 50%;
  }
`;

const Options = styled.div`
  display: flex;
  border-top: 1px solid #bbb;
  padding: 1rem 0;
  margin-top: 1rem;
`;

const LeftButton = styled(Button)`
  margin-right: auto;
  background-color: transparent;
  color: rgb(66, 35, 255);
  padding: 0.75rem 0.5rem;
`;

const RightButton = styled(Button)`
  margin-left: auto;
`;

const FormStep = ({ children, onPrevious, onNext, onSubmit }) => {
  return (
    <Step>
      <div>{children}</div>
      <Options>
        {onPrevious && <LeftButton onClick={onPrevious}>Previous</LeftButton>}
        {onNext && <RightButton onClick={onNext}>Next</RightButton>}
        {onSubmit && <RightButton onClick={onSubmit}>Get quote</RightButton>}
      </Options>
    </Step>
  );
};

FormStep.propTypes = {
  children: PropTypes.node.isRequired,
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default FormStep;
