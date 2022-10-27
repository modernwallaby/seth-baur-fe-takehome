import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import StepOne from "./steps/StepOne";
import StepTwo from "./steps/StepTwo";
import QuoteResult from "./QuoteResult";
import { resetQuoteForm } from "../slices/quoteFormSlice";

const QuoteForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [availablePolicyTypes, setAvailablePolicyTypes] = useState([]);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const submit = () => {
    axios
      .post(
        "https://api-sandbox.coterieinsurance.com/v1/commercial/applications",
        {
          businessName: state.quoteForm.businessName,
          contactEmail: state.quoteForm.email,
          grossAnnualSales: state.quoteForm.annualSales,
          annualPayroll: state.quoteForm.annualPayroll,
          numEmployeees: state.quoteForm.numEmployeees,
          industryId: state.quoteForm.industry,
          locations: [{ zip: state.quoteForm.zipCode }],
        },
        { headers: { authorization: "token 73920c6f-d530-419c-87b3-4f4762e05e9d" } }
      )
      .then(function (response) {
        if (response.status === 200) {
          setAvailablePolicyTypes(response.data.availablePolicyTypes);
          setSubmitted(true);
        }
      });
  };

  const reset = () => {
    dispatch(resetQuoteForm());
    setAvailablePolicyTypes([]);
    setCurrentStep(1);
    setSubmitted(false);
  };

  return (
    <>
      {!submitted && currentStep === 1 && <StepOne onNext={() => setCurrentStep(2)} />}
      {!submitted && currentStep === 2 && (
        <StepTwo onPrevious={() => setCurrentStep(1)} onSubmit={submit} />
      )}
      {submitted && <QuoteResult policyTypes={availablePolicyTypes} onReset={reset} />}
    </>
  );
};

export default QuoteForm;
