import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import FormStep from "../form/FormStep";
import TextInput from "../form/TextInput";
import SelectInput from "../form/SelectInput";
import { industryOptions } from "../../data/industries";
import { setBusinessName, setIndustry, setEmail } from "../../slices/quoteFormSlice";

const StepOne = ({ onNext }) => {
  const dispatch = useDispatch();

  return (
    <FormStep onNext={onNext}>
      <TextInput
        name="Business name"
        value={useSelector((state) => state.quoteForm.businessName)}
        callback={(value) => dispatch(setBusinessName(value))}
        required={true}
      />

      <SelectInput
        name="Industry"
        options={industryOptions}
        value={useSelector((state) => state.quoteForm.industry)}
        callback={(value) => dispatch(setIndustry(value))}
      />

      <TextInput
        name="Email"
        type="email"
        value={useSelector((state) => state.quoteForm.email)}
        callback={(value) => dispatch(setEmail(value))}
        required={true}
      />
    </FormStep>
  );
};

StepOne.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default StepOne;
