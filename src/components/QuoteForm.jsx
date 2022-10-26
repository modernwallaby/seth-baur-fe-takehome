import { useState } from "react";
import styled from "styled-components";
import TextInput from "./form/TextInput";
import SelectInput from "./form/SelectInput";
import Button from "./form/Button";

const industryOptions = [
  { value: "10537", name: "Plumbing" },
  { value: "10392", name: "Software developer" },
  { value: "10415", name: "Lawyer" },
  { value: "10109", name: "Handyman" },
];

const monetaryOptions = [
  { value: 50000, name: "$50k" },
  { value: 75000, name: "$75k" },
  { value: 100000, name: "$100k" },
  { value: 150000, name: "$150k" },
  { value: 200000, name: "$200k" },
];

const Form = styled.form`
  margin-bottom: 1.5rem;
`;

const QuoteForm = () => {
  const [businessName, setBusinessName] = useState("");
  const [industry, setIndustry] = useState("");
  const [email, setEmail] = useState("");
  const [annualSales, setAnnualSales] = useState(0);
  const [annualPayroll, setAnnualPayroll] = useState(0);
  const [numberOfEmployees, setNumberOfEmployees] = useState(0);
  const [zipCode, setZipCode] = useState("");

  return (
    <>
      <Form>
        <TextInput name="Business name" value={businessName} callback={setBusinessName} />
        <SelectInput name="Industry" options={industryOptions} value={industry} callback={setIndustry} />
        <TextInput name="Email" value={email} callback={setEmail} type="email" />
        <SelectInput name="Annual sales" options={monetaryOptions} value={annualSales} callback={setAnnualSales} />
        <SelectInput name="Annual payroll" options={monetaryOptions} value={annualPayroll} callback={setAnnualPayroll} />
        <TextInput name="Number of employees" value={numberOfEmployees} callback={setNumberOfEmployees} type="number" />
        <TextInput name="Zip code" value={zipCode} callback={setZipCode} />
      </Form>

      <Button>Get quote</Button>
    </>
  );
};

export default QuoteForm;
