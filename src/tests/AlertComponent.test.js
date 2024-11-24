import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import AlertComponent from '../components/ToastExample';

// Wrapping the component in ChakraProvider for Chakra UI context
const renderWithChakra = (ui) => {
  return render(<ChakraProvider>{ui}</ChakraProvider>);
};

describe('AlertComponent', () => {
  test('renders the button and shows a toast when clicked', () => {
    // Mocking the useToast hook
    const toastMock = jest.fn();
    jest.spyOn(require('@chakra-ui/react'), 'useToast').mockReturnValue(toastMock);

    renderWithChakra(<AlertComponent />);

    // Verify button renders
    const button = screen.getByText(/Show Toast/i);
    expect(button).toBeInTheDocument();

    // Simulate button click
    fireEvent.click(button);

    // Verify that the toast is called with the expected properties
    expect(toastMock).toHaveBeenCalledWith({
      title: "Action Successful",
      description: "Your action was completed successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  });
});
