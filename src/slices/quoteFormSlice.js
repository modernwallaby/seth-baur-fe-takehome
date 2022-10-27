import { createSlice } from "@reduxjs/toolkit";
import { monetaryOptions } from "../data/monetaryAmounts";
import { industryOptions } from "../data/industries";

export const quoteFormSlice = createSlice({
  name: "quoteForm",
  initialState: {
    formData: {
      businessName: "",
      industry: industryOptions[0].value,
      email: "",
      annualSales: monetaryOptions[0].value,
      annualPayroll: monetaryOptions[0].value,
      numberOfEmployees: 0,
      zipCode: "",
    },
  },
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
  },
});

export const { setFormData } = quoteFormSlice.actions;

export default quoteFormSlice.reducer;
