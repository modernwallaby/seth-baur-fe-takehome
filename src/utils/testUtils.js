import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import quoteFormReducer from "../slices/quoteFormSlice";

export function renderWithRedux(
  ui,
  { store = configureStore({ reducer: { quoteForm: quoteFormReducer } }), ...renderOptions } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  Wrapper.propTypes = { children: PropTypes.node };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
