import { configureStore } from "@reduxjs/toolkit";
import quoteFormReducer from "./slices/quoteFormSlice";

export default configureStore({
  reducer: {
    quoteForm: quoteFormReducer,
  },
});
