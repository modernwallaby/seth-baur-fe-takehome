import PropTypes from "prop-types";
import styled from "styled-components";
import Label from "./Label";
import FormField from "./FormField";

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1.25rem;
  border: 1px solid #bbb;
  border-radius: 0.5rem;
  box-sizing: border-box;
`;

const TextInput = ({ name, value, callback, type, required }) => {
  const htmlName = name.toLowerCase().replace(/\s/, "-");

  return (
    <FormField>
      <Label htmlFor={htmlName}>{name}</Label>
      <Input
        name={htmlName}
        type={type || "text"}
        value={value}
        onChange={(e) => callback(e.target.value)}
        required={required}
      />
    </FormField>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  callback: PropTypes.func.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
};

export default TextInput;
