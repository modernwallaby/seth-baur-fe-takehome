import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import TextInput from "./form/TextInput";
import SelectInput from "./form/SelectInput";
import Button from "./form/Button";
import { setFormData } from "../slices/quoteFormSlice";
import { industryOptions } from "../data/industries";
import { monetaryOptions } from "../data/monetaryAmounts";

const Form = styled.form`
  margin-bottom: 1.5rem;
`;

const QuoteForm = () => {
  const [businessName, setBusinessName] = useState("");
  const [industry, setIndustry] = useState("");
  const [email, setEmail] = useState("");
  const [annualSales, setAnnualSales] = useState(50000);
  const [annualPayroll, setAnnualPayroll] = useState(50000);
  const [numberOfEmployees, setNumberOfEmployees] = useState(10);
  const [zipCode, setZipCode] = useState("");

  const dispatch = useDispatch();

  const submit = () => {
    dispatch(
      setFormData({
        businessName,
        industry,
        email,
        annualSales,
        annualPayroll,
        numberOfEmployees,
        zipCode,
      })
    );
  };

  return (
    <>
      <Form>
        <TextInput name="Business name" value={businessName} callback={setBusinessName} />
        <SelectInput
          name="Industry"
          options={industryOptions}
          value={industry}
          callback={setIndustry}
        />
        <TextInput name="Email" value={email} callback={setEmail} type="email" />
        <SelectInput
          name="Annual sales"
          options={monetaryOptions}
          value={annualSales}
          callback={setAnnualSales}
        />
        <SelectInput
          name="Annual payroll"
          options={monetaryOptions}
          value={annualPayroll}
          callback={setAnnualPayroll}
        />
        <TextInput
          name="Number of employees"
          value={numberOfEmployees}
          callback={setNumberOfEmployees}
          type="number"
        />
        <TextInput name="Zip code" value={zipCode} callback={setZipCode} />
      </Form>

      <Button onClick={() => submit()}>Get quote</Button>
    </>
  );
};

export default QuoteForm;
