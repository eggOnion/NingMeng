import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@chakra-ui/react/preset";

import { render, screen, fireEvent } from "@testing-library/react";
import Booking from "../pages/Booking";

test("handles form submission correctly", () => {
  const mockSubmit = jest.fn();
  render(
    <ChakraProvider value={system}>
      <Booking onSubmit={mockSubmit} />
    </ChakraProvider>
  );

  // Interact with Chakra Input
  const input = screen.getByPlaceholderText("Enter your name");
  fireEvent.change(input, { target: { value: "John Doe" } });

  // Interact with Chakra Button
  const button = screen.getByRole("button", { name: /submit/i });
  fireEvent.click(button);

  // Assert the behavior
  expect(mockSubmit).toHaveBeenCalledWith("John Doe");
});
