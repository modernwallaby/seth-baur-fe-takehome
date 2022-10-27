import { createSlice } from "@reduxjs/toolkit";
import { monetaryOptions } from "../data/monetaryAmounts";
import { industryOptions } from "../data/industries";

const initialState = {
  businessName: "",
  industry: industryOptions[0].value,
  email: "",
  annualSales: monetaryOptions[0].value,
  annualPayroll: monetaryOptions[0].value,
  numberOfEmployees: 0,
  zipCode: "",
};

export const quoteFormSlice = createSlice({
  name: "quoteForm",
  initialState,
  reducers: {
    setBusinessName: (state, action) => {
      state.businessName = action.payload;
    },
    setIndustry: (state, action) => {
      state.industry = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setAnnualSales: (state, action) => {
      state.annualSales = action.payload;
    },
    setAnnualPayroll: (state, action) => {
      state.annualPayroll = action.payload;
    },
    setNumberOfEmployees: (state, action) => {
      state.numberOfEmployees = action.payload;
    },
    setZipCode: (state, action) => {
      state.zipCode = action.payload;
    },
    resetQuoteForm: () => {
      return initialState;
    },
  },
});

export const {
  setBusinessName,
  setIndustry,
  setEmail,
  setAnnualPayroll,
  setAnnualSales,
  setNumberOfEmployees,
  setZipCode,
  resetQuoteForm,
} = quoteFormSlice.actions;

export default quoteFormSlice.reducer;
