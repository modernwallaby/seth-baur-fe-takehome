import { render, screen } from "@testing-library/react";
import QuoteResult from "./QuoteResult";

test("shows the correct names for the given policy types", async () => {
  render(<QuoteResult policyTypes={["BOP", "PL"]} onReset={() => true} />);
  expect(screen.getByText(/Business Owners Policy/i)).toBeDefined();
  expect(screen.getByText(/Professional Liability/i)).toBeDefined();
  expect(screen.queryByText(/General Liability/i)).toBeNull();
});
