import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import FormStep from "../form/FormStep";
import TextInput from "../form/TextInput";
import SelectInput from "../form/SelectInput";
import { monetaryOptions } from "../../data/monetaryAmounts";
import {
  setAnnualSales,
  setAnnualPayroll,
  setNumberOfEmployees,
  setZipCode,
} from "../../slices/quoteFormSlice";

const StepTwo = ({ onPrevious, onSubmit }) => {
  const dispatch = useDispatch();

  return (
    <FormStep onPrevious={onPrevious} onSubmit={onSubmit}>
      <SelectInput
        name="Annual sales"
        options={monetaryOptions}
        value={useSelector((state) => state.quoteForm.annualSales)}
        callback={(value) => dispatch(setAnnualSales(value))}
      />

      <SelectInput
        name="Annual payroll"
        options={monetaryOptions}
        value={useSelector((state) => state.quoteForm.annualPayroll)}
        callback={(value) => dispatch(setAnnualPayroll(value))}
      />

      <TextInput
        name="Number of employees"
        value={useSelector((state) => state.quoteForm.numberOfEmployees)}
        callback={(value) => dispatch(setNumberOfEmployees(value))}
        type="number"
        required={true}
      />

      <TextInput
        name="Zip code"
        value={useSelector((state) => state.quoteForm.zipCode)}
        callback={(value) => dispatch(setZipCode(value))}
        required={true}
      />
    </FormStep>
  );
};

StepTwo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
};

export default StepTwo;
