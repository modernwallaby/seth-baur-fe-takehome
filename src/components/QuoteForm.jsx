import { useState } from "react";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";

const QuoteForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const submit = () => {
    return true;
  };

  return (
    <>
      {currentStep === 1 && <StepOne onNext={() => setCurrentStep(2)} />}
      {currentStep === 2 && <StepTwo onPrevious={() => setCurrentStep(1)} onSubmit={submit} />}
    </>
  );
};

export default QuoteForm;
