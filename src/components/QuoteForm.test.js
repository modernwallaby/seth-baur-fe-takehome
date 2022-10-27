import { fireEvent, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import axios from "axios";
import QuoteForm from "./QuoteForm";
import { renderWithRedux } from "../utils/testUtils";

jest.mock("axios");

test("submitting the form with valid data returns available policy types", async () => {
  const { getByLabelText, getByText } = renderWithRedux(<QuoteForm />);

  fireEvent.change(getByLabelText(/business name/i), { target: { value: "my company" } });
  fireEvent.change(getByLabelText(/email/i), { target: { value: "test@example.com" } });

  fireEvent.click(getByText(/next/i));

  fireEvent.change(getByLabelText(/number of employees/i), { target: { value: 10 } });
  fireEvent.change(getByLabelText(/zip code/i), { target: { value: "45215" } });

  axios.post.mockResolvedValueOnce({
    status: 200,
    data: {
      isSuccess: true,
      availablePolicyTypes: ["GL"],
    },
  });

  fireEvent.click(getByText(/get quote/i));

  expect(axios.post).toHaveBeenCalled();
  await waitForElementToBeRemoved(() => getByText(/get quote/i));
  expect(getByText(/general liability/i)).toBeDefined();
});

test("submitting the form with invalid data returns an error", async () => {
  const { getByLabelText, getByText } = renderWithRedux(<QuoteForm />);

  fireEvent.change(getByLabelText(/business name/i), { target: { value: "my company" } });
  fireEvent.change(getByLabelText(/email/i), { target: { value: "test@example.com" } });

  fireEvent.click(getByText(/next/i));

  fireEvent.change(getByLabelText(/number of employees/i), { target: { value: 10 } });
  fireEvent.change(getByLabelText(/zip code/i), { target: { value: "bad zip code" } });

  axios.post.mockResolvedValueOnce({
    status: 200,
    data: {
      isSuccess: false,
      errors: [{ message: "invalid zip code" }],
    },
  });

  fireEvent.click(getByText(/get quote/i));

  await waitFor(() => getByText(/invalid zip code/i));
  expect(getByText(/invalid zip code/i)).toBeDefined();
});

test("submitting the form with incomplete data is prevented", async () => {
  const { getByLabelText, getByText } = renderWithRedux(<QuoteForm />);

  fireEvent.change(getByLabelText(/business name/i), { target: { value: "my company" } });
  fireEvent.click(getByText(/next/i));
  fireEvent.click(getByText(/get quote/i));

  expect(axios.post).not.toHaveBeenCalled();
});
