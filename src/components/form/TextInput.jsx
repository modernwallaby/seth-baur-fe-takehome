import styled from "styled-components";
import Label from "./Label";
import FormField from "./FormField";

const Input = styled.input`
  width: 15rem;
  padding: 0.5rem;
  font-size: 1.25rem;
  border: 1px solid #bbb;
  border-radius: 0.5rem;
`;

const TextInput = ({ name, value, callback, type }) => {
  const htmlName = name.toLowerCase().replace(/\s/, '-');

  return (
    <FormField>
      <Label htmlFor={htmlName}>{name}</Label>
      <Input name={htmlName} type={type || "text"} value={value} onChange={(e) => callback(e.target.value)} />
    </FormField>
  );
};

export default TextInput;
