import styled from "styled-components";
import Label from "./Label";
import FormField from "./FormField";

const Select = styled.select`
  width: 16rem;
  padding: 0.5rem;
  font-size: 1.25rem;
  border: 1px solid #bbb;
  border-radius: 0.5rem;
`;

const SelectInput = ({ name, options, value, callback }) => {
  const htmlName = name.toLowerCase().replace(/\s/, '-');

  return (
    <FormField>
      <Label htmlFor={htmlName}>{name}</Label>
      <Select name={htmlName}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>{option.name}</option>
        ))}
      </Select>
    </FormField>
  );
};

export default SelectInput;
